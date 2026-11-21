package com.knot.backend.recording.presentation.dto.request;

import com.knot.backend.recording.application.dto.command.AudioChunkAuthority;
import com.knot.backend.recording.application.dto.command.RecordingAudioChunkCommand;
import com.knot.backend.recording.domain.model.AudioChunkDescriptor;
import jakarta.validation.constraints.NotNull;

public record RecordingRecoveryChunkRequest(
        @NotNull Integer sequence,
        @NotNull Long sampleOffset,
        @NotNull Integer frameCount,
        @NotNull Long byteLength,
        @NotNull String checksumSha256
) {

    public RecordingAudioChunkCommand toCommand() {
        return new RecordingAudioChunkCommand(
                AudioChunkAuthority.Recovery.OWNER,
                new AudioChunkDescriptor(
                        sequence,
                        sampleOffset,
                        frameCount,
                        byteLength,
                        checksumSha256
                )
        );
    }
}
