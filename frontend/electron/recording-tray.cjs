const { nativeImage, screen, Tray } = require("electron");

const WIDTH = 448;
const HEIGHT = 340;
const PANEL_NAME = "knot-recording-controls";

// The renderer portals its existing React tree into this blank window. There is
// no second application entry point, media stream, or recording controller.
function attachRecordingTray(mainWindow, showMain, getTestDisplay) {
  let tray;
  let panel;
  let pending;
  let sessionId;
  const contents = mainWindow.webContents;

  function closePanel() {
    pending = undefined;
    panel?.close();
  }

  function clear() {
    closePanel();
    tray?.destroy();
    tray = undefined;
    sessionId = undefined;
  }

  function toggle(_event, bounds) {
    if (panel || pending) {
      closePanel();
      return;
    }
    const anchor = bounds?.width ? bounds : tray.getBounds();
    const display = getTestDisplay() ?? screen.getDisplayMatching(anchor);
    const area = display.workArea;
    const width = Math.min(WIDTH, area.width);
    const height = Math.min(HEIGHT, area.height);
    const clamp = (n, min, max) => Math.max(min, Math.min(n, max));
    pending = {
      x: clamp(
        Math.round(anchor.x + (anchor.width - width) / 2),
        area.x,
        area.x + area.width - width,
      ),
      y: clamp(
        anchor.y + anchor.height + 4,
        area.y,
        area.y + area.height - height,
      ),
      width,
      height,
    };
    contents.send("tray:open", sessionId);
  }

  contents.setWindowOpenHandler(({ url, frameName }) => {
    if (!pending || url !== "about:blank" || frameName !== PANEL_NAME)
      return { action: "deny" };
    const bounds = pending;
    pending = undefined;
    return {
      action: "allow",
      overrideBrowserWindowOptions: {
        ...bounds,
        type: "panel",
        title: "Knot 녹음 제어",
        frame: false,
        show: false,
        resizable: false,
        minimizable: false,
        maximizable: false,
        fullscreenable: false,
        alwaysOnTop: true,
        skipTaskbar: true,
        webPreferences: {
          sandbox: true,
          contextIsolation: true,
          nodeIntegration: false,
        },
      },
    };
  });

  contents.on("did-create-window", (child) => {
    panel = child;
    child.webContents.setWindowOpenHandler(() => ({ action: "deny" }));
    child.webContents.on("will-navigate", (event) => event.preventDefault());
    child.setVisibleOnAllWorkspaces(true, {
      visibleOnFullScreen: true,
      skipTransformProcessType: true,
    });
    child.on("blur", () => child.close());
    child.once("closed", () => {
      panel = undefined;
      if (!contents.isDestroyed()) contents.send("tray:closed");
    });
  });
  contents.on("did-start-navigation", (details) => {
    if (details.isMainFrame && !details.isSameDocument) clear();
  });
  contents.on("render-process-gone", clear);
  mainWindow.once("closed", clear);

  return {
    update(state) {
      if (
        !state ||
        typeof state.elapsedTime !== "string" ||
        !/^(?:\d{1,3}:)?\d{2}:\d{2}$/.test(state.elapsedTime)
      ) {
        clear();
        return;
      }
      if (state.id !== sessionId) clear();
      sessionId = state.id;
      if (!tray) {
        tray = new Tray(nativeImage.createEmpty());
        tray.setIgnoreDoubleClickEvents(true);
        tray.on("click", toggle);
      }
      let status = "녹음 중";
      let icon = "🔴";
      if (state.saveFailed) {
        status = "저장 실패";
        icon = "!";
      } else if (state.phase === "saving") {
        status = "저장 중";
        icon = "↑";
      } else if (state.paused) {
        status = "일시정지";
        icon = "Ⅱ";
      }
      tray.setTitle(icon + " Knot " + state.elapsedTime, {
        fontType: "monospacedDigit",
      });
      tray.setToolTip("Knot · " + status + " " + state.elapsedTime);
    },
    ready(id) {
      if (id === sessionId) panel?.show();
    },
    returnToMain(id) {
      if (id !== sessionId) return;
      closePanel();
      showMain();
    },
  };
}

module.exports = { attachRecordingTray };
