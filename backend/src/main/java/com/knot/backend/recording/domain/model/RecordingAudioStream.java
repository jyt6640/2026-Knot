package com.knot.backend.recording.domain.model;

import com.knot.backend.recording.domain.AudioSequenceGapException;
import com.knot.backend.recording.domain.RecordingErrorCode;
import com.knot.backend.recording.domain.RecordingException;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import java.time.Instant;
import java.time.Duration;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;

@Getter
@Entity
@Table(name = "recording_audio_streams")
public class RecordingAudioStream {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "recording_id", nullable = false, updatable = false)
    private long recordingId;

    @Column(name = "next_sequence", nullable = false)
    private int nextSequence;

    @Column(name = "total_frame_count", nullable = false)
    private long totalFrameCount;

    @Column(nullable = false)
    private boolean frozen;

    @Enumerated(EnumType.STRING)
    @Column(name = "seal_kind", length = 20)
    private RecordingAudioSealKind sealKind;

    @Column(name = "sealed_at")
    private Instant sealedAt;

    @Column(name = "accept_until")
    private Instant acceptUntil;

    @Column(name = "tail_unknown", nullable = false)
    private boolean tailUnknown;

    @Column(name = "upload_recovery_supported", nullable = false)
    private boolean uploadRecoverySupported;

    @Column(name = "recovery_last_sequence")
    private Integer recoveryLastSequence;

    @Column(name = "recovery_total_frames")
    private Long recoveryTotalFrames;

    protected RecordingAudioStream() {}

    private RecordingAudioStream(long recordingId) {
        if (recordingId <= 0) {
            throw new RecordingException(RecordingErrorCode.INVALID_RECORDING_DATA);
        }
        this.recordingId = recordingId;
        this.nextSequence = 1;
    }

    public static RecordingAudioStream create(long recordingId) {
        return create(
                recordingId,
                false
        );
    }

    public static RecordingAudioStream create(
            long recordingId,
            boolean recoverySupported
    ) {
        RecordingAudioStream stream = new RecordingAudioStream(recordingId);
        stream.uploadRecoverySupported = recoverySupported;
        return stream;
    }

    public void reserve(AudioChunkDescriptor descriptor) {
        validateNotFrozen();
        if (isSealed()) {
            throw new RecordingException(RecordingErrorCode.AUDIO_SEAL_CONFLICT);
        }
        append(descriptor);
    }

    public void reserveRecovery(AudioChunkDescriptor descriptor) {
        validateRecoveryDeclared();
        validateNotFrozen();
        validateRemainingFrames(
                recoveryLastSequence - (long) descriptor.sequence(),
                recoveryTotalFrames - descriptor.sampleOffset() - descriptor.frameCount()
        );
        append(descriptor);
    }

    private void append(AudioChunkDescriptor descriptor) {
        if (descriptor == null) {
            throw new RecordingException(RecordingErrorCode.INVALID_AUDIO_CHUNK);
        }
        if (descriptor.sequence() > nextSequence) {
            throw new AudioSequenceGapException(nextSequence);
        }
        if (descriptor.sequence() != nextSequence || descriptor.sampleOffset() != totalFrameCount) {
            throw new RecordingException(RecordingErrorCode.AUDIO_CHUNK_CONFLICT);
        }
        totalFrameCount += descriptor.frameCount();
        nextSequence++;
    }

    /**
     * 이어 받기 때 확인된 조각 바로 뒤로 다음 예약 위치를 되돌린다. 확인되지 않은 예약은 호출한 쪽이 먼저 지운다.
     */
    public void rewindTo(
            int verifiedThroughSequence,
            long verifiedThroughFrame
    ) {
        if (isSealed()) {
            throw new RecordingException(RecordingErrorCode.AUDIO_SEAL_CONFLICT);
        }
        if (verifiedThroughSequence < 0 || verifiedThroughSequence > getLastSequence() || verifiedThroughFrame < 0
                || verifiedThroughFrame > totalFrameCount) {
            throw new RecordingException(RecordingErrorCode.INVALID_AUDIO_CHUNK);
        }
        nextSequence = verifiedThroughSequence + 1;
        totalFrameCount = verifiedThroughFrame;
    }

    public boolean isSealed() {
        return sealedAt != null;
    }

    public int getLastSequence() {
        return nextSequence - 1;
    }

    public void seal(
            RecordingAudioSealKind kind,
            Instant endedAt
    ) {
        if (isSealed()) {
            return;
        }
        if (kind == null || endedAt == null) {
            throw new RecordingException(RecordingErrorCode.INVALID_AUDIO_SEAL);
        }
        sealKind = kind;
        sealedAt = endedAt;
        acceptUntil = endedAt.plus(Duration.ofSeconds(120));
        tailUnknown = kind != RecordingAudioSealKind.NORMAL;
        if (uploadRecoverySupported && kind == RecordingAudioSealKind.NORMAL) {
            declareRecoveryEnd(
                    getLastSequence(),
                    totalFrameCount
            );
        }
    }

    public void declareRecoveryEnd(
            int lastSequence,
            long totalFrames
    ) {
        validateRecoverySupported();
        if (recoveryLastSequence != null) {
            validateSameRecoveryEnd(
                    lastSequence,
                    totalFrames
            );
            return;
        }
        validateNotFrozen();
        if (totalFrames < 0 || totalFrames > AudioChunkDescriptor.MAX_TOTAL_FRAME_COUNT) {
            throw new RecordingException(RecordingErrorCode.INVALID_AUDIO_SEAL);
        }
        validateRemainingFrames(
                (long) lastSequence - getLastSequence(),
                totalFrames - totalFrameCount
        );
        recoveryLastSequence = lastSequence;
        recoveryTotalFrames = totalFrames;
    }

    private void validateSameRecoveryEnd(
            int lastSequence,
            long totalFrames
    ) {
        if (recoveryLastSequence != lastSequence || recoveryTotalFrames != totalFrames) {
            throw new RecordingException(RecordingErrorCode.AUDIO_SEAL_CONFLICT);
        }
    }

    private void validateRemainingFrames(
            long chunks,
            long frames
    ) {
        if (chunks < 0 || frames < chunks || frames > chunks * AudioChunkDescriptor.MAX_FRAME_COUNT) {
            throw new RecordingException(RecordingErrorCode.AUDIO_SEAL_CONFLICT);
        }
    }

    private void validateRecoverySupported() {
        if (!uploadRecoverySupported || !isSealed()) {
            throw new RecordingException(RecordingErrorCode.AUDIO_SEAL_CONFLICT);
        }
    }

    public void validateRecoveryDeclared() {
        validateRecoverySupported();
        if (recoveryLastSequence == null) {
            throw new RecordingException(RecordingErrorCode.AUDIO_SEAL_CONFLICT);
        }
    }

    public boolean hasReservedRecoveryEnd() {
        return recoveryLastSequence != null && recoveryLastSequence == getLastSequence()
                && recoveryTotalFrames == totalFrameCount;
    }

    public boolean isTailUnknown() {
        return tailUnknown && recoveryLastSequence == null;
    }

    public void validateNormalSeal(
            int lastSequence,
            long frames
    ) {
        if ((isSealed() && sealKind != RecordingAudioSealKind.NORMAL) || lastSequence != getLastSequence()
                || frames != totalFrameCount) {
            throw new RecordingException(RecordingErrorCode.AUDIO_SEAL_CONFLICT);
        }
    }

    public void validateClientWrite(Instant now) {
        validateNotFrozen();
        if (isSealed() && !now.isBefore(acceptUntil)) {
            throw new RecordingException(RecordingErrorCode.AUDIO_ACCEPTANCE_CLOSED);
        }
    }

    public Instant capUploadExpiry(Instant requested) {
        if (isSealed() && requested.isAfter(acceptUntil)) {
            return acceptUntil;
        }
        return requested;
    }

    public void freeze() {
        frozen = true;
    }

    public void validateNotFrozen() {
        if (frozen) {
            throw new RecordingException(RecordingErrorCode.AUDIO_SAVE_FROZEN);
        }
    }
}
