import { useEffect } from "react";
import { useRecordingStore } from "@store/recordingStore";
import useRecordingControl from "../useRecordingControl";

export default function useDesktopRecording() {
  const { endDesktopRecording } = useRecordingControl();
  useEffect(() => {
    const bridge = window.knotDesktop;
    if (!bridge) return;
    const publish = () => {
      const { session, isEnding } = useRecordingStore.getState();
      bridge.setRecording(
        session
          ? {
              id: session.recordingId,
              phase: isEnding ? "saving" : "active",
            }
          : null,
      );
    };
    publish();
    const unsubscribe = useRecordingStore.subscribe((state, previous) => {
      if (
        state.session !== previous.session ||
        state.isEnding !== previous.isEnding
      )
        publish();
    });
    const removeFinish = bridge.onFinish(async (id) => {
      const { session } = useRecordingStore.getState();
      if (!session) return true;
      return session.recordingId === id && endDesktopRecording();
    });
    return () => {
      unsubscribe();
      removeFinish();
    };
  }, [endDesktopRecording]);
}
