package com.knot.backend.recording.application;

import com.knot.backend.recording.application.dto.command.RecordingAudioChunkCommand;
import com.knot.backend.recording.application.dto.command.AudioChunkAuthority;
import com.knot.backend.recording.application.dto.result.PresignedAudioChunk;
import com.knot.backend.recording.application.dto.result.RecordingAudioChunkCompletionResult;
import com.knot.backend.recording.application.dto.result.RecordingAudioChunkConfirmation;
import com.knot.backend.recording.application.dto.result.RecordingAudioChunkReservation;
import com.knot.backend.recording.application.dto.result.RecordingAudioChunkReservationResult;
import com.knot.backend.recording.application.dto.result.RecordingAudioSaveResult;
import com.knot.backend.recording.domain.RecordingErrorCode;
import com.knot.backend.recording.domain.RecordingException;
import com.knot.backend.recording.domain.model.StoredAudioChunk;
import java.util.Optional;
import java.util.Map;
import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RecordingAudioChunkService {
    private final RecordingAudioChunkTransaction transaction;
    private final RecordingAudioChunkStorage storage;
    private final Clock clock;
    private final RecordingAudioFinalizationQuery finalizationQuery;
    private final Duration uploadUrlTtl;

    public RecordingAudioChunkService(
            RecordingAudioChunkTransaction transaction,
            RecordingAudioChunkStorage storage,
            Clock clock,
            RecordingAudioFinalizationQuery finalizationQuery,
            @Value("${recording.audio-storage.upload-url-ttl:PT15M}") Duration uploadUrlTtl
    ) {
        this.transaction = transaction;
        this.storage = storage;
        this.clock = clock;
        this.finalizationQuery = finalizationQuery;
        this.uploadUrlTtl = uploadUrlTtl;
    }

    @Transactional(propagation = Propagation.NOT_SUPPORTED)
    public RecordingAudioChunkReservationResult reserve(
            long workspaceId,
            long memberId,
            long recordingId,
            RecordingAudioChunkCommand command
    ) {
        if (uploadUrlTtl == null || uploadUrlTtl.isNegative() || uploadUrlTtl.isZero()
                || uploadUrlTtl.compareTo(Duration.ofDays(7)) > 0) {
            throw new RecordingException(RecordingErrorCode.AUDIO_STORAGE_UNAVAILABLE);
        }
        Instant expiresAt = clock.instant()
                .plus(uploadUrlTtl)
                .truncatedTo(ChronoUnit.MICROS);
        RecordingAudioChunkReservation reserved = transaction.reserve(
                workspaceId,
                memberId,
                recordingId,
                command,
                expiresAt
        );
        if (reserved.completed() != null) {
            return reserved.completed();
        }
        Optional<RecordingAudioChunkReservationResult> recovered = recoverStoredReservation(
                workspaceId,
                memberId,
                recordingId,
                command,
                reserved
        );
        if (recovered.isPresent()) {
            return recovered.orElseThrow();
        }
        PresignedAudioChunk signed = storage.presignUpload(
                reserved.storageKey(),
                reserved.byteLength(),
                reserved.checksumSha256(),
                reserved.expiresAt()
        );
        return transaction.confirmReservation(
                workspaceId,
                memberId,
                recordingId,
                command,
                reserved,
                signed
        );
    }

    private Optional<RecordingAudioChunkReservationResult> recoverStoredReservation(
            long workspaceId,
            long memberId,
            long recordingId,
            RecordingAudioChunkCommand command,
            RecordingAudioChunkReservation reserved
    ) {
        if (command.control() != AudioChunkAuthority.Recovery.OWNER || reserved.created()) {
            return Optional.empty();
        }
        StoredAudioChunk stored = storage.findStoredObject(reserved.storageKey());
        if (!stored.exists()) {
            return Optional.empty();
        }
        RecordingAudioChunkCompletionResult verified = transaction.confirmStored(
                workspaceId,
                memberId,
                recordingId,
                reserved.sequence(),
                command.control(),
                stored
        );
        return Optional.of(
                new RecordingAudioChunkReservationResult(
                        false,
                        verified.sequence(),
                        verified.status(),
                        null,
                        null,
                        Map.of()
                )
        );
    }

    @Transactional(propagation = Propagation.NOT_SUPPORTED)
    public RecordingAudioChunkCompletionResult complete(
            long workspaceId,
            long memberId,
            long recordingId,
            int sequence,
            AudioChunkAuthority command
    ) {
        RecordingAudioChunkConfirmation preparation = transaction.prepareConfirmation(
                workspaceId,
                memberId,
                recordingId,
                sequence,
                command
        );
        if (preparation.completed() != null) {
            return preparation.completed();
        }
        StoredAudioChunk stored = storage.findStoredObject(preparation.storageKey());
        return transaction.confirmStored(
                workspaceId,
                memberId,
                recordingId,
                sequence,
                command,
                stored
        );
    }

    public RecordingAudioSaveResult declareRecoveryEnd(
            long workspaceId,
            long memberId,
            long recordingId,
            int lastSequence,
            long totalFrames
    ) {
        transaction.declareRecoveryEnd(
                workspaceId,
                memberId,
                recordingId,
                lastSequence,
                totalFrames
        );
        return findState(
                workspaceId,
                memberId,
                recordingId
        );
    }

    public RecordingAudioSaveResult findState(
            long workspaceId,
            long memberId,
            long recordingId
    ) {
        return finalizationQuery.enrich(
                recordingId,
                transaction.findState(
                        workspaceId,
                        memberId,
                        recordingId
                )
        );
    }
}
