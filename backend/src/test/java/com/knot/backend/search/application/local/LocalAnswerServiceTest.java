package com.knot.backend.search.application.local;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.Mockito.*;
import com.knot.backend.workspace.domain.repository.WorkspaceMemberRepository;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;

class LocalAnswerServiceTest {

    @Test
    @DisplayName("전용 모델이 비활성일 때 현재 멤버에게도 연결 불가를 알린다")
    void answer_failure_privateModelDisabled() {
        WorkspaceMemberRepository memberships = mock(WorkspaceMemberRepository.class);
        when(
                memberships.existsByWorkspaceIdAndMemberId(
                        1L,
                        2L
                )
        ).thenReturn(true);
        LocalAnswerService service = new LocalAnswerService(
                memberships,
                Optional.empty()
        );
        LocalAnswerQuestion question = new LocalAnswerQuestion(
                "질문",
                List.of("문단")
        );
        assertThatThrownBy(
                () -> service.answer(
                        1,
                        2,
                        question
                )
        ).isInstanceOfSatisfying(
                LocalAnswerException.class,
                failure -> assertThat(failure.getStatus()).isEqualTo(HttpStatus.SERVICE_UNAVAILABLE)
        );
    }
}
