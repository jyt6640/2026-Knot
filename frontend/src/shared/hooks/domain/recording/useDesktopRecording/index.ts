import { useEffect } from "react";
import { useRecordingStore } from "@store/recordingStore";
import { calculateElapsedSeconds } from "@utils/calculateElapsedSeconds";
import { formatRecordingTime } from "@utils/formatRecordingTime";
import useRecordingControl from "../useRecordingControl";

export default function useDesktopRecording() {
  const controls = useRecordingControl();
  const { endDesktopRecording } = controls;
  useEffect(() => {
    const bridge = window.knotDesktop;
    if (!bridge) return;
    const publish = () => {
      const {
        session,
        isEnding,
        desktopSaveFailed,
        status,
        resumedAt,
        accumulatedMs,
      } = useRecordingStore.getState();
      bridge.setRecording(
        session
          ? {
              id: session.recordingId,
              saveFailed: desktopSaveFailed,
              paused: status === "paused",
              elapsedTime: formatRecordingTime(
                calculateElapsedSeconds(accumulatedMs, resumedAt, Date.now()),
              ),
              phase: isEnding ? "saving" : "active",
            }
          : null,
      );
    };
    let timer: ReturnType<typeof setInterval> | undefined;
    const sync = () => {
      clearInterval(timer);
      publish();
      const { session, resumedAt } = useRecordingStore.getState();
      if (bridge.recordingMenu && session && resumedAt !== null)
        timer = setInterval(publish, 1000);
    };
    sync();
    const unsubscribe = useRecordingStore.subscribe((state, previous) => {
      if (
        state.session !== previous.session ||
        state.isEnding !== previous.isEnding ||
        state.desktopSaveFailed !== previous.desktopSaveFailed ||
        state.status !== previous.status ||
        state.resumedAt !== previous.resumedAt ||
        state.accumulatedMs !== previous.accumulatedMs
      )
        sync();
    });
    const removeFinish = bridge.onFinish(async (id) => {
      const { session } = useRecordingStore.getState();
      if (!session) return true;
      return session.recordingId === id && endDesktopRecording();
    });
    return () => {
      clearInterval(timer);
      unsubscribe();
      removeFinish();
    };
  }, [endDesktopRecording]);
  return controls;
}
