const {
  app,
  BrowserWindow,
  dialog,
  ipcMain,
  session,
  screen,
  protocol,
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

const { attachRecordingTray } = require("./recording-tray.cjs");
const { attachLocalDesktop, home, isHome } = require("./local-desktop.cjs");
protocol.registerSchemesAsPrivileged([
  {
    scheme: "knot",
    privileges: {
      standard: true,
      secure: true,
      supportFetchAPI: true,
      stream: true,
      corsEnabled: true,
    },
  },
]);
if (!app.requestSingleInstanceLock()) app.exit();
app.on("second-instance", () => {
  if (mainWindow) showWindow();
});
let library;
let recordingTray;
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
    isHome(frame.url)
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
    library?.active &&
    state?.id === library.active.id &&
    ["active", "saving"].includes(state.phase)
  ) {
    recording = state;
    recordingTray?.update(state);
  }
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

ipcMain.on("tray:ready", (event, id) => {
  if (trusted(event)) recordingTray?.ready(id);
});
ipcMain.on("tray:return", (event, id) => {
  if (trusted(event)) recordingTray?.returnToMain(id);
});

app.whenReady().then(() => {
  // Local UI tests must choose a display before macOS shows the first window.
  const testDisplay = () => {
    if (!app.commandLine.hasSwitch("knot-test-internal-display")) return;
    const display = screen.getAllDisplays().find((item) => item.internal);
    if (!display) throw new Error("MacBook internal display unavailable");
    return display;
  };
  const area = testDisplay()?.workArea;
  const trustedOrigin = (url) =>
    typeof url === "string" &&
    (url === "knot://app" || url.startsWith("knot://app/"));
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
    width: Math.min(1440, area?.width ?? 1440),
    height: Math.min(940, area?.height ?? 940),
    ...(area && {
      x: area.x + Math.max(0, Math.floor((area.width - 1440) / 2)),
      y: area.y + Math.max(0, Math.floor((area.height - 940) / 2)),
    }),
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      sandbox: true,
      contextIsolation: true,
      nodeIntegration: false,
      backgroundThrottling: false,
    },
  });
  if (process.platform === "darwin")
    recordingTray = attachRecordingTray(mainWindow, showWindow, testDisplay);
  else mainWindow.webContents.setWindowOpenHandler(() => ({ action: "deny" }));
  mainWindow.webContents.on("will-navigate", (event) => event.preventDefault());
  const api = new URL(
    (app.isPackaged
      ? require("./package.json").knotApiUrl
      : process.env.KNOT_DESKTOP_API_URL) || entry.origin,
  );
  library = attachLocalDesktop(
    mainWindow,
    { entry, api },
    app.getPath("userData"),
    app.isPackaged
      ? path.join(__dirname, "renderer")
      : path.resolve(__dirname, "../dist-desktop/renderer"),
    (id) => {
      recording = {
        id,
        phase: "active",
        elapsedTime: "00:00",
        paused: false,
        saveFailed: false,
      };
      recordingTray?.update(recording);
    },
    ({ interrupted }) => {
      if (interrupted) quitRequest = null;
      recording = null;
      recordingTray?.update(null);
    },
  );

  mainWindow.on("close", (event) => {
    if (!quitting) {
      event.preventDefault();
      mainWindow.hide();
    }
  });
  app.on("activate", showWindow);
  mainWindow.loadURL(home);
});
