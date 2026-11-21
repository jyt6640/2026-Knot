import useMeQuery from "@api/queries/useMeQuery";
import useDesktopRecording from "@hooks/domain/recording/useDesktopRecording";
import useRecordingElapsedTime from "@hooks/domain/recording/useRecordingElapsedTime";
import useNavigateToRecording from "@hooks/domain/recording/useNavigateToRecording";
import useMicrophoneUnavailableDialog from "@hooks/domain/recording/useMicrophoneUnavailableDialog";
import { useRecordingStore } from "@store/recordingStore";
import { formatRecordingTime } from "@utils/formatRecordingTime";
import RecordingMenuCard from "./ui/RecordingMenuCard";

import RecordingPanel from "./RecordingPanel";
export default function RecordingMenu() {
  const controls = useDesktopRecording();
  const id = useRecordingStore((s) => s.session?.recordingId);
  return (
    <RecordingPanel sessionId={id}>
      {id !== undefined && <MenuControls id={id} controls={controls} />}
    </RecordingPanel>
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
