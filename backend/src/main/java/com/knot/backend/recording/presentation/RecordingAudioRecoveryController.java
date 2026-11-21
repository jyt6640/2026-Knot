package com.knot.backend.recording.presentation;

import com.knot.backend.auth.domain.model.AuthenticatedMember;
import com.knot.backend.recording.application.RecordingAudioChunkService;
import com.knot.backend.recording.application.dto.command.AudioChunkAuthority;
import com.knot.backend.recording.application.dto.result.RecordingAudioChunkReservationResult;
import com.knot.backend.recording.presentation.dto.request.RecordingRecoveryEndRequest;
import com.knot.backend.recording.presentation.dto.request.RecordingRecoveryChunkRequest;
import com.knot.backend.recording.presentation.dto.response.RecordingAudioChunkReservationResponse;
import com.knot.backend.recording.presentation.dto.response.RecordingAudioChunkCompletionResponse;
import com.knot.backend.recording.presentation.dto.response.RecordingAudioSaveResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/workspaces/{workspaceId}/recordings/{recordingId}/audio-recovery")
@RequiredArgsConstructor
public class RecordingAudioRecoveryController {

    private final RecordingAudioChunkService service;

    @PostMapping
    public RecordingAudioSaveResponse declareEnd(
            @PathVariable long workspaceId,
            @PathVariable long recordingId,
            @AuthenticationPrincipal AuthenticatedMember member,
            @Valid @RequestBody RecordingRecoveryEndRequest request
    ) {
        return RecordingAudioSaveResponse.from(
                service.declareRecoveryEnd(
                        workspaceId,
                        member.getMemberId(),
                        recordingId,
                        request.lastSequence(),
                        request.totalFrameCount()
                )
        );
    }

    @PostMapping("/chunks")
    public ResponseEntity<RecordingAudioChunkReservationResponse> reserve(
            @PathVariable long workspaceId,
            @PathVariable long recordingId,
            @AuthenticationPrincipal AuthenticatedMember member,
            @Valid @RequestBody RecordingRecoveryChunkRequest request
    ) {
        RecordingAudioChunkReservationResult result = service.reserve(
                workspaceId,
                member.getMemberId(),
                recordingId,
                request.toCommand()
        );
        RecordingAudioChunkReservationResponse response = RecordingAudioChunkReservationResponse.from(result);
        if (result.created()) {
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(response);
        }
        return ResponseEntity.ok(response);
    }

    @PostMapping("/chunks/{sequence}/complete")
    public RecordingAudioChunkCompletionResponse complete(
            @PathVariable long workspaceId,
            @PathVariable long recordingId,
            @PathVariable int sequence,
            @AuthenticationPrincipal AuthenticatedMember member
    ) {
        return RecordingAudioChunkCompletionResponse.from(
                service.complete(
                        workspaceId,
                        member.getMemberId(),
                        recordingId,
                        sequence,
                        AudioChunkAuthority.Recovery.OWNER
                )
        );
    }
}
