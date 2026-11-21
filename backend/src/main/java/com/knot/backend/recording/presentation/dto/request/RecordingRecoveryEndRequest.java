package com.knot.backend.recording.presentation.dto.request;

import jakarta.validation.constraints.NotNull;

public record RecordingRecoveryEndRequest(
        @NotNull Integer lastSequence,
        @NotNull Long totalFrameCount
) {
}
