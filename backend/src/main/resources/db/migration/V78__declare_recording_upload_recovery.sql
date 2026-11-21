ALTER TABLE recording_audio_streams
    ADD COLUMN upload_recovery_supported BOOLEAN NOT NULL DEFAULT FALSE,
    ADD COLUMN recovery_last_sequence INTEGER,
    ADD COLUMN recovery_total_frames BIGINT,
    ADD CONSTRAINT ck_recording_audio_recovery_end CHECK (
        (recovery_last_sequence IS NULL AND recovery_total_frames IS NULL)
        OR (upload_recovery_supported AND sealed_at IS NOT NULL
            AND recovery_last_sequence IS NOT NULL AND recovery_total_frames IS NOT NULL
            AND recovery_last_sequence BETWEEN next_sequence - 1 AND 115200000
            AND recovery_total_frames BETWEEN total_frame_count AND 115200000
            AND recovery_total_frames - total_frame_count BETWEEN recovery_last_sequence - (next_sequence - 1)
                AND (recovery_last_sequence - (next_sequence - 1))::BIGINT * 80000)
    );

CREATE INDEX idx_recording_audio_chunks_unverified ON recording_audio_chunks (recording_id)
    WHERE status = 'RESERVED';
