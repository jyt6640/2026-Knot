package com.knot.backend.recording.application.dto.command;

import com.knot.backend.recording.domain.model.AudioChunkDescriptor;

public record RecordingAudioChunkCommand(
        AudioChunkAuthority control,
        AudioChunkDescriptor descriptor
) {
}
