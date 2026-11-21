import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import useMeQuery from "@api/queries/useMeQuery";
import useDesktopRecording from "@hooks/domain/recording/useDesktopRecording";
import useRecordingElapsedTime from "@hooks/domain/recording/useRecordingElapsedTime";
import useNavigateToRecording from "@hooks/domain/recording/useNavigateToRecording";
import useMicrophoneUnavailableDialog from "@hooks/domain/recording/useMicrophoneUnavailableDialog";
import { GlobalStyle } from "@provider/themeProvider";
import { useRecordingStore } from "@store/recordingStore";
import { formatRecordingTime } from "@utils/formatRecordingTime";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import RecordingMenuCard from "./ui/RecordingMenuCard";

type Panel = { id: number; win: Window; cache: ReturnType<typeof createCache> };

export default function RecordingMenu() {
  const controls = useDesktopRecording();
  const bridge = window.knotDesktop?.recordingMenu;
  const [panel, setPanel] = useState<Panel | null>(null);

  useEffect(() => {
    if (!bridge) return;
    return bridge.subscribe(
      (id) => {
        if (useRecordingStore.getState().session?.recordingId !== id) return;
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
  }, [bridge]);

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
      <MenuControls id={panel.id} controls={controls} />
    </CacheProvider>,
    panel.win.document.body,
  );
}

interface MenuControlsProps {
  id: number;
  controls: ReturnType<typeof useDesktopRecording>;
}

function MenuControls({ id, controls }: MenuControlsProps) {
  const { data: me } = useMeQuery();
  const { elapsedSeconds } = useRecordingElapsedTime();
  const paused = useRecordingStore((s) => s.status === "paused");
  const saving = useRecordingStore((s) => s.isEnding);
  const saveFailed = useRecordingStore((s) => s.desktopSaveFailed);
  const analyser = useRecordingStore((s) => s.analyser);
  const { pauseRecording, resumeRecording, endRecording } = controls;
  const { navigateToRecording } = useNavigateToRecording();
  const { openMicrophoneUnavailableDialog } = useMicrophoneUnavailableDialog();

  function returnToMain() {
    const session = useRecordingStore.getState().session;
    if (session?.recordingId !== id) return;
    window.knotDesktop?.recordingMenu?.returnToMain(id);
    navigateToRecording({
      workspaceId: String(session.workspaceId),
      replace: true,
    });
  }

  async function toggle() {
    const state = useRecordingStore.getState();
    if (state.session?.recordingId !== id || state.isEnding) return;
    if (!paused && state.status === "recording") await pauseRecording();
    if (paused && state.status === "paused" && !(await resumeRecording())) {
      if (useRecordingStore.getState().session?.recordingId !== id) return;
      returnToMain();
      openMicrophoneUnavailableDialog();
    }
  }

  function finish() {
    if (useRecordingStore.getState().session?.recordingId !== id) return;
    returnToMain();
    endRecording("menu_bar");
  }

  return (
    <RecordingMenuCard
      nickname={me?.nickname}
      elapsedTime={formatRecordingTime(elapsedSeconds)}
      analyser={analyser}
      paused={paused}
      saving={saving}
      saveFailed={saveFailed}
      onToggle={toggle}
      onEnd={finish}
      onReturn={returnToMain}
    />
  );
}
