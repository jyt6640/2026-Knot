package com.knot.backend.search.infrastructure.llm;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import com.knot.backend.global.exception.LlmErrorCode;
import com.knot.backend.global.exception.LlmException;
import com.knot.backend.global.infrastructure.llm.LlmClient;
import com.knot.backend.search.application.local.LocalAnswerException;
import com.knot.backend.search.application.local.LocalAnswerQuestion;
import java.util.List;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.springframework.http.HttpStatus;

class LocalAnswerModelTest {

    @ParameterizedTest
    @CsvSource({"LLM_TIMEOUT, GATEWAY_TIMEOUT", "LLM_RATE_LIMITED, TOO_MANY_REQUESTS", "LLM_UNAVAILABLE, BAD_GATEWAY"})
    @DisplayName("공급자 오류를 원문 없는 상태로 매핑하고 자동 재시도하지 않는다")
    void answer_failure_providerUnavailable(
            LlmErrorCode code,
            HttpStatus expected
    ) {
        LlmClient client = mock(LlmClient.class);
        when(client.complete(any())).thenThrow(
                new LlmException(
                        code,
                        new RuntimeException("private-marker")
                )
        );
        LocalAnswerModel model = new LocalAnswerModel(client);
        LocalAnswerQuestion question = new LocalAnswerQuestion(
                "질문",
                List.of("발췌")
        );

        assertThatThrownBy(() -> model.answer(question)).isInstanceOfSatisfying(
                LocalAnswerException.class,
                failure -> {
                    assertThat(failure.getStatus()).isEqualTo(expected);
                    assertThat(failure.getCause()).isNull();
                }
        );
        verify(client).complete(any());
    }
}
