const {
  BrowserWindow,
  ipcMain,
  session,
  safeStorage,
  net,
} = require("electron");
const fs = require("node:fs");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { randomUUID, createHash } = require("node:crypto");
const { LocalLibrary } = require("./local-library.cjs");

const home = "knot://app/index.html";
function isHome(url) {
  return url === home;
}

function attachLocalDesktop(
  win,
  config,
  userData,
  rendererDir,
  onStart,
  onFinish,
) {
  const namespace = createHash("sha256")
    .update(config.api.origin)
    .digest("hex")
    .slice(0, 24);
  const library = new LocalLibrary(
    path.join(userData, "recordings", namespace),
    safeStorage,
  );
  session.defaultSession.protocol.handle("knot", (request) => {
    const url = new URL(request.url);
    if (url.host !== "app" || request.method !== "GET")
      return new Response(null, { status: 404 });
    const audio = /^\/audio\/([a-f0-9-]+)\/(\d+)$/.exec(url.pathname);
    if (audio)
      return library.playback(
        audio[1],
        Number(audio[2]),
        request.headers.get("Range"),
      );
    if (
      !/^\/(?:assets\/)?[\w.-]+\.(html|js|svg|woff2?|css|png)$/.test(
        url.pathname,
      )
    )
      return new Response(null, { status: 404 });
    const file = path.join(rendererDir, url.pathname);
    if (!fs.existsSync(file)) return new Response(null, { status: 404 });
    return net.fetch(pathToFileURL(file).href);
  });

  function handle(name, fn) {
    ipcMain.handle("local:" + name, (e, ...args) => {
      if (
        e.sender !== win.webContents ||
        e.senderFrame !== win.webContents.mainFrame ||
        !isHome(e.senderFrame?.url)
      )
        throw Error("로컬 창만 접근할 수 있어요.");
      return fn(...args);
    });
  }
  let signingIn = false;
  handle("account", () => library.account ?? null);
  handle("login", async () => {
    if (library.account || signingIn) throw Error("이미 로그인 중이에요.");
    signingIn = true;
    // A fresh in-memory cookie jar forces a new server authentication after logout.
    const auth = session.fromPartition("knot-auth-" + randomUUID(), {
      cache: false,
    });
    auth.setPermissionCheckHandler(() => false);
    auth.setPermissionRequestHandler((_wc, _permission, reply) => reply(false));
    const bounds = win.getBounds();
    const child = new BrowserWindow({
      parent: win,
      width: Math.min(bounds.width, 820),
      height: Math.min(bounds.height, 760),
      x: bounds.x,
      y: bounds.y,
      webPreferences: {
        session: auth,
        sandbox: true,
        contextIsolation: true,
        nodeIntegration: false,
      },
    });
    child.webContents.setWindowOpenHandler(() => ({ action: "deny" }));
    const validateNavigation = (event) => {
      const url = new URL(event.url);
      if (url.protocol !== "https:" && url.origin !== config.entry.origin)
        event.preventDefault();
    };
    child.webContents.on("will-navigate", validateNavigation);
    try {
      return await new Promise((resolve, reject) => {
        let settled = false;
        const verify = async () => {
          if (
            settled ||
            child.isDestroyed() ||
            !child.webContents.getURL().startsWith(config.entry.origin + "/")
          )
            return;
          try {
            const response = await auth.fetch(
              new URL("/api/v1/auth/me", config.api).href,
              {
                credentials: "include",
                redirect: "error",
                cache: "no-store",
                signal: AbortSignal.timeout(10000),
              },
            );
            if (!response.ok || settled || child.isDestroyed()) return;
            const member = await response.json();
            if (settled || child.isDestroyed() || !member.nickname) return;
            try {
              const account = library.login(member);
              settled = true;
              resolve(account);
            } catch (error) {
              settled = true;
              reject(error);
            }
          } catch {
            /* An incomplete OAuth redirect may still have no identity. */
          }
        };
        child.webContents.on("did-finish-load", verify);
        child.webContents.on("did-navigate-in-page", verify);
        child.once("closed", () => {
          settled = true;
          reject(Error("로그인 창을 닫았어요."));
        });
        child.loadURL(new URL("/login", config.entry).href).catch(reject);
      });
    } finally {
      if (!child.isDestroyed()) child.destroy();
      signingIn = false;
      await auth.clearStorageData();
    }
  });
  handle("logout", () => library.logout());
  handle("list", () => library.list());
  handle("remove", (id) => library.remove(id));
  handle("begin", () => {
    const id = library.begin();
    onStart(id);
    return id;
  });
  handle("append", (id, seq, bytes) => library.append(id, seq, bytes));
  handle("finish", (id, count) => {
    library.finish(id, count);
    onFinish({ interrupted: false });
  });
  // Reloading replaces the worklet. Expose the last committed block as recoverable.
  win.webContents.on("did-start-navigation", (details) => {
    if (details.isMainFrame && !details.isSameDocument && library.active) {
      library.interrupt();
      onFinish({ interrupted: true });
    }
  });
  win.webContents.on("render-process-gone", () => {
    library.interrupt();
    onFinish({ interrupted: true });
    win.loadURL(home);
  });
  return library;
}
module.exports = { attachLocalDesktop, isHome, home };
