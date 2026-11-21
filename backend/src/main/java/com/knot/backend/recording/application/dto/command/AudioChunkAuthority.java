package com.knot.backend.recording.application.dto.command;

public sealed interface AudioChunkAuthority permits RecordingControlCommand, AudioChunkAuthority.Recovery {

    enum Recovery implements AudioChunkAuthority {
        OWNER
    }
}
