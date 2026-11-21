const {
  app,
  BrowserWindow,
  dialog,
  ipcMain,
  session,
  systemPreferences,
} = require("electron");
const path = require("node:path");

// The release build supplies its own deployed Knot origin. Local development uses webpack.
const entry = new URL(
  app.isPackaged
    ? require("./package.json").knotDesktopUrl
    : (process.env.KNOT_DESKTOP_URL ?? "http://localhost:3000"),
);
const local = ["localhost", "127.0.0.1", "[::1]"].includes(entry.hostname);
if (
  entry.protocol !== "https:" &&
  !(local && entry.protocol === "http:" && !app.isPackaged)
) {
  throw new Error(
    "KNOT_DESKTOP_URL must be a trusted HTTPS URL or a local development server.",
  );
}

let mainWindow;
let recording = null;
let quitRequest = null;
let quitting = false;

function showWindow() {
  if (mainWindow.isMinimized()) mainWindow.restore();
  mainWindow.show();
  mainWindow.focus();
}

function trusted(event) {
  const frame = event.senderFrame;
  return (
    frame &&
    mainWindow &&
    event.sender === mainWindow.webContents &&
    frame === event.sender.mainFrame &&
    new URL(frame.url).origin === entry.origin
  );
}

ipcMain.handle("microphone:request", async (event) => {
  if (process.platform !== "darwin" || !trusted(event))
    throw new Error("Microphone request outside the Knot window");

  const status = systemPreferences.getMediaAccessStatus("microphone");
  if (status !== "not-determined") return status;
  return (await systemPreferences.askForMediaAccess("microphone"))
    ? "granted"
    : "denied";
});

ipcMain.on("recording:state", (event, state) => {
  if (!trusted(event)) return;
  if (
    state === null ||
    (Number.isSafeInteger(state?.id) &&
      ["active", "saving"].includes(state.phase))
  )
    recording = state;
});

ipcMain.on("recording:finish-result", async (event, id, saved) => {
  if (!trusted(event) || quitRequest !== id) return;
  if (saved === true && recording === null) {
    quitting = true;
    app.quit();
    return;
  }
  if (recording?.id !== id) {
    quitRequest = null;
    return;
  }
  const { response } = await dialog.showMessageBox(mainWindow, {
    type: "warning",
    message: "녹음 저장을 확인하지 못했어요.",
    detail: "앱을 열어 두고 같은 녹음의 저장을 다시 시도할 수 있어요.",
    buttons: ["앱 열어 두기", "다시 시도"],
    cancelId: 0,
    defaultId: 1,
  });
  quitRequest = null;
  if (response === 1 && recording?.id === id) app.quit();
});

app.on("before-quit", async (event) => {
  if (quitting || (!recording && quitRequest === null)) {
    quitting = true;
    return;
  }
  event.preventDefault();
  if (quitRequest !== null) return;
  const { id, phase } = recording;
  quitRequest = id;
  showWindow();
  if (phase === "active") {
    const { response } = await dialog.showMessageBox(mainWindow, {
      type: "question",
      message: "녹음을 끝내고 앱을 종료할까요?",
      detail: "마지막 오디오까지 저장한 뒤 종료해요.",
      buttons: ["계속 녹음", "녹음 끝내고 종료"],
      defaultId: 0,
      cancelId: 0,
    });
    if (response !== 1 || (recording && recording.id !== id)) {
      quitRequest = null;
      return;
    }
  }
  if (!recording) {
    quitRequest = null;
    app.quit();
    return;
  }
  mainWindow.webContents.send("recording:finish", id);
});

app.whenReady().then(() => {
  const trustedOrigin = (url) => {
    try {
      return new URL(url).origin === entry.origin;
    } catch {
      return false;
    }
  };
  session.defaultSession.setPermissionCheckHandler(
    (contents, permission, origin, details) =>
      contents === mainWindow?.webContents &&
      permission === "media" &&
      trustedOrigin(origin) &&
      details.mediaType === "audio",
  );
  session.defaultSession.setPermissionRequestHandler(
    (contents, permission, callback, details) => {
      callback(
        contents === mainWindow?.webContents &&
          details.isMainFrame &&
          trustedOrigin(details.requestingUrl) &&
          permission === "media" &&
          details.mediaTypes?.every((type) => type === "audio") === true,
      );
    },
  );
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 940,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      additionalArguments: ["--knot-origin=" + entry.origin],
      sandbox: true,
      contextIsolation: true,
      nodeIntegration: false,
      backgroundThrottling: false,
    },
  });
  mainWindow.webContents.setWindowOpenHandler(() => ({ action: "deny" }));
  mainWindow.webContents.on("will-navigate", (event, url) => {
    // Existing OAuth flows navigate to HTTPS identity providers. Only Knot gets the bridge.
    if (recording || (!trustedOrigin(url) && !url.startsWith("https://")))
      event.preventDefault();
  });
  mainWindow.on("close", (event) => {
    if (!quitting) {
      event.preventDefault();
      mainWindow.hide();
    }
  });
  app.on("activate", showWindow);
  mainWindow.loadURL(entry.href);
});
