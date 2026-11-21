import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { GlobalStyle } from "@provider/themeProvider";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
type Panel = { id: number; win: Window; cache: ReturnType<typeof createCache> };

export default function RecordingPanel({
  sessionId,
  children,
}: {
  sessionId: number | undefined;
  children: React.ReactNode;
}) {
  const bridge = window.knotDesktop?.recordingMenu;
  const [panel, setPanel] = useState<Panel | null>(null);

  useEffect(() => {
    if (!bridge) return;
    return bridge.subscribe(
      (id) => {
        if (sessionId !== id) return;
        const win = window.open("about:blank", "knot-recording-controls");
        if (!win) return;
        win.document.title = "Knot 녹음 제어";
        win.document.documentElement.lang = "ko";
        const cache = createCache({
          key: "knot-menu",
          container: win.document.head,
        });
        setPanel({ id, win, cache });
      },
      () => setPanel(null),
    );
  }, [bridge, sessionId]);

  useEffect(() => {
    if (!panel || panel.win.closed) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") panel.win.close();
    };
    panel.win.addEventListener("keydown", escape);
    bridge?.ready(panel.id);
    return () => panel.win.removeEventListener("keydown", escape);
  }, [bridge, panel]);

  if (!panel || panel.win.closed) return null;
  return createPortal(
    <CacheProvider value={panel.cache}>
      <GlobalStyle />
      {children}
    </CacheProvider>,
    panel.win.document.body,
  );
}
