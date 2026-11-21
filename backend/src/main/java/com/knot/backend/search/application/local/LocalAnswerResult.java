package com.knot.backend.search.application.local;

import java.util.List;

public record LocalAnswerResult(
        String answer,
        List<Integer> citations
) {
    @Override
    public String toString() {
        return "LocalAnswerResult[REDACTED]";
    }
}
