package com.knot.backend.search.application.local;

import com.knot.backend.search.infrastructure.llm.LocalAnswerModel;
import com.knot.backend.workspace.domain.WorkspaceErrorCode;
import com.knot.backend.workspace.domain.WorkspaceException;
import com.knot.backend.workspace.domain.repository.WorkspaceMemberRepository;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LocalAnswerService {

    private final WorkspaceMemberRepository memberships;
    private final Optional<LocalAnswerModel> model;

    public LocalAnswerResult answer(
            long workspaceId,
            long memberId,
            LocalAnswerQuestion question
    ) {
        if (!memberships.existsByWorkspaceIdAndMemberId(
                workspaceId,
                memberId
        )) {
            throw new WorkspaceException(WorkspaceErrorCode.WORKSPACE_NOT_FOUND);
        }
        LocalAnswerModel target = model.orElseThrow(() -> new LocalAnswerException(HttpStatus.SERVICE_UNAVAILABLE));
        return target.answer(question);
    }
}
