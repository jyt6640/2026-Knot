package com.knot.backend.recording.application.dto.result;

import java.time.Instant;
import java.util.List;

public record RecordingAudioSaveResult(
        String audioSaveStatus,
        int verifiedThroughSequence,
        long verifiedThroughFrame,
        long verifiedAudioMillis,
        List<AudioFrameRange> verifiedRanges,
        List<AudioFrameRange> missingRanges,
        boolean tailUnknown,
        Integer expectedLastSequence,
        Instant acceptUntil,
        String failureCode,
        boolean canRetry,
        Long jobId,
        String quality,
        boolean uploadRecoverySupported,
        Long expectedTotalFrameCount
) {
    public RecordingAudioSaveResult {
        verifiedRanges = List.copyOf(verifiedRanges);
        missingRanges = List.copyOf(missingRanges);
    }
}
