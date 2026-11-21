const { contextBridge, ipcRenderer } = require("electron");

if (process.isMainFrame && location.href === "knot://app/index.html") {
  contextBridge.exposeInMainWorld("knotDesktop", {
    local: {
      account: () => ipcRenderer.invoke("local:account"),
      login: () => ipcRenderer.invoke("local:login"),
      logout: () => ipcRenderer.invoke("local:logout"),
      list: () => ipcRenderer.invoke("local:list"),
      remove: (id) => ipcRenderer.invoke("local:remove", id),
      begin: () => ipcRenderer.invoke("local:begin"),
      append: (id, seq, bytes) =>
        ipcRenderer.invoke("local:append", id, seq, bytes),
      finish: (id, count) => ipcRenderer.invoke("local:finish", id, count),
    },
    ...(process.platform === "darwin" && {
      recordingMenu: {
        subscribe: (open, close) => {
          const openPanel = (_event, id) => open(id);
          const closePanel = () => close();
          ipcRenderer.on("tray:open", openPanel);
          ipcRenderer.on("tray:closed", closePanel);
          return () => {
            ipcRenderer.removeListener("tray:open", openPanel);
            ipcRenderer.removeListener("tray:closed", closePanel);
          };
        },
        ready: (id) => ipcRenderer.send("tray:ready", id),
        returnToMain: (id) => ipcRenderer.send("tray:return", id),
      },
      requestMicrophoneAccess: () => ipcRenderer.invoke("microphone:request"),
    }),
    setRecording: (state) => ipcRenderer.send("recording:state", state),
    onFinish: (finish) => {
      const listener = async (_event, id) => {
        let saved = false;
        try {
          saved = await finish(id);
        } finally {
          ipcRenderer.send("recording:finish-result", id, saved);
        }
      };
      ipcRenderer.on("recording:finish", listener);
      return () => ipcRenderer.removeListener("recording:finish", listener);
    },
  });
}
