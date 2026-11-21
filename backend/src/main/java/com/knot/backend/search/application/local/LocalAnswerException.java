package com.knot.backend.search.application.local;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public final class LocalAnswerException extends RuntimeException {
    private final HttpStatus status;

    public LocalAnswerException(HttpStatus status) {
        super(status.getReasonPhrase());
        this.status = status;
    }
}
