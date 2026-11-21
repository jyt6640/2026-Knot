package com.knot.backend.search.application.local;

import java.util.ArrayList;
import java.util.List;
import tools.jackson.databind.JsonNode;
import org.springframework.http.HttpStatus;

public record LocalAnswerQuestion(
        String question,
        List<String> excerpts
) {
    public LocalAnswerQuestion {
        if (question == null || question.isBlank() || length(question) > 2000) {
            throw invalid();
        }
        validateExcerpts(excerpts);
        excerpts = List.copyOf(excerpts);
    }

    public static LocalAnswerQuestion from(JsonNode input) {
        if (!input.isObject() || input.size() != 2 || !input.path("question")
                .isString()) {
            throw invalid();
        }
        JsonNode excerpts = input.path("excerpts");
        if (!excerpts.isArray() || excerpts.size() > 5) {
            throw invalid();
        }
        List<String> paragraphs = new ArrayList<>();
        for (JsonNode excerpt : excerpts) {
            paragraphs.add(excerpt.stringValue());
        }
        return new LocalAnswerQuestion(
                input.get("question")
                        .stringValue(),
                paragraphs
        );
    }

    private static void validateExcerpts(List<String> excerpts) {
        if (excerpts == null || excerpts.isEmpty() || excerpts.size() > 5) {
            throw invalid();
        }
        int total = 0;
        for (String excerpt : excerpts) {
            if (excerpt == null || excerpt.isBlank()) {
                throw invalid();
            }
            total += length(excerpt);
        }
        if (total > 8000) {
            throw invalid();
        }
    }

    private static int length(String value) {
        return value.codePointCount(
                0,
                value.length()
        );
    }

    private static LocalAnswerException invalid() {
        return new LocalAnswerException(HttpStatus.BAD_REQUEST);
    }

    @Override
    public String toString() {
        return "LocalAnswerQuestion[REDACTED]";
    }
}
