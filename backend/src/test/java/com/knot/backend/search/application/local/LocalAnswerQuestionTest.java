package com.knot.backend.search.application.local;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import java.util.List;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class LocalAnswerQuestionTest {

    @Test
    @DisplayName("보충 문자를 한 글자로 세어 질문과 발췌의 정확한 한도를 허용한다")
    void create_success_atCodePointLimits() {
        String text = "🎙".repeat(2000);
        List<String> excerpts = List.of(
                text,
                text,
                text,
                text
        );
        LocalAnswerQuestion question = new LocalAnswerQuestion(
                text,
                excerpts
        );
        assertThat(question.excerpts()).isEqualTo(excerpts);
        assertThat(question.toString()).doesNotContain("🎙");
    }

    @Test
    @DisplayName("질문 길이·발췌 합계·발췌 개수 상한을 각각 검증한다")
    void create_failure_exceedsLimit() {
        assertThatThrownBy(
                () -> new LocalAnswerQuestion(
                        "🎙".repeat(2001),
                        List.of("문단")
                )
        ).isInstanceOf(LocalAnswerException.class);
        assertThatThrownBy(
                () -> new LocalAnswerQuestion(
                        "질문",
                        List.of(
                                "한".repeat(8000),
                                "글"
                        )
                )
        ).isInstanceOf(LocalAnswerException.class);
        assertThatThrownBy(
                () -> new LocalAnswerQuestion(
                        "질문",
                        List.of(
                                "1",
                                "2",
                                "3",
                                "4",
                                "5",
                                "6"
                        )
                )
        ).isInstanceOf(LocalAnswerException.class);
    }
}
