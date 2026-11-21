package com.knot.backend.search.presentation;

import com.knot.backend.auth.domain.model.AuthenticatedMember;
import com.knot.backend.global.response.ErrorResponse;
import com.knot.backend.search.application.local.LocalAnswerException;
import com.knot.backend.search.application.local.LocalAnswerQuestion;
import com.knot.backend.search.application.local.LocalAnswerResult;
import com.knot.backend.search.application.local.LocalAnswerService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.CacheControl;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import tools.jackson.core.JacksonException;
import tools.jackson.core.StreamReadFeature;
import tools.jackson.databind.DeserializationFeature;
import tools.jackson.databind.json.JsonMapper;

@RestController
@RequiredArgsConstructor
public class LocalAnswerController {
    private static final int MAX_BODY_BYTES = 64 * 1024;
    private static final JsonMapper JSON = JsonMapper.builder()
            .enable(StreamReadFeature.STRICT_DUPLICATE_DETECTION)
            .enable(DeserializationFeature.FAIL_ON_TRAILING_TOKENS)
            .build();

    private final LocalAnswerService service;

    @PostMapping(value = "/api/v1/workspaces/{workspaceId}/local-answers", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @Operation(summary = "개인 문단에 대한 무저장 AI 답변", requestBody = @RequestBody(required = true, content = @Content(schema = @Schema(implementation = LocalAnswerQuestion.class))))
    public ResponseEntity<LocalAnswerResult> answer(
            @PathVariable long workspaceId,
            @AuthenticationPrincipal AuthenticatedMember member,
            InputStream body
    ) {
        LocalAnswerQuestion question = readQuestion(body);
        LocalAnswerResult result = service.answer(
                workspaceId,
                member.getMemberId(),
                question
        );
        return ResponseEntity.ok()
                .cacheControl(CacheControl.noStore())
                .body(result);
    }

    private LocalAnswerQuestion readQuestion(InputStream body) {
        try {
            byte[] bytes = body.readNBytes(MAX_BODY_BYTES + 1);
            if (bytes.length > MAX_BODY_BYTES) {
                throw new LocalAnswerException(HttpStatus.PAYLOAD_TOO_LARGE);
            }
            return LocalAnswerQuestion.from(JSON.readTree(bytes));
        } catch (IOException | JacksonException ignored) {
            throw new LocalAnswerException(HttpStatus.BAD_REQUEST);
        }
    }

    @ExceptionHandler(LocalAnswerException.class)
    public ResponseEntity<ErrorResponse> handleFailure(LocalAnswerException failure) {
        HttpStatus status = failure.getStatus();
        return ResponseEntity.status(status)
                .cacheControl(CacheControl.noStore())
                .body(
                        new ErrorResponse(
                                "LOCAL_ANSWER_" + status.name(),
                                status.getReasonPhrase(),
                                List.of()
                        )
                );
    }
}
