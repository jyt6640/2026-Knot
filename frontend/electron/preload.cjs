const { contextBridge, ipcRenderer } = require("electron");

const origin = process.argv
  .find((arg) => arg.startsWith("--knot-origin="))
  ?.slice(14);
if (process.isMainFrame && location.origin === origin) {
  contextBridge.exposeInMainWorld("knotDesktop", {
    ...(process.platform === "darwin" && {
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
