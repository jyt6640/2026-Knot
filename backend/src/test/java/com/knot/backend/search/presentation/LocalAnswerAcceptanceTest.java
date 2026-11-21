package com.knot.backend.search.presentation;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.knot.backend.auth.domain.AuthTokenProvider;
import com.knot.backend.auth.domain.model.AuthenticatedMember;
import com.knot.backend.testsupport.IsolatedPostgresTest;
import com.knot.backend.testsupport.TestApplicationProperties;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;
import jakarta.servlet.http.Cookie;
import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicReference;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.system.CapturedOutput;
import org.springframework.boot.test.system.OutputCaptureExtension;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.json.JsonMapper;

@Tag("acceptance")
@ActiveProfiles("dev")
@IsolatedPostgresTest
@TestApplicationProperties
@SpringBootTest(properties = {"knot.llm.provider=claude", "knot.local-answer.enabled=true",
        "knot.local-answer.api-token=fixture-private", "knot.local-answer.model=fixture-model"})
@AutoConfigureMockMvc
@ExtendWith(OutputCaptureExtension.class)
class LocalAnswerAcceptanceTest {
    private static final String URL = "/api/v1/workspaces/{workspaceId}/local-answers";
    private static final String QUESTION = "{\"question\":\"테스트 질문\",\"excerpts\":[\"선택한 문단\"]}";
    private static final JsonMapper JSON = JsonMapper.builder()
            .build();
    private static final AtomicInteger CALLS = new AtomicInteger();
    private static final AtomicReference<String> MODEL_REQUEST = new AtomicReference<>();
    private static final AtomicReference<String> MODEL_CONTENT = new AtomicReference<>();
    private static HttpServer server;

    @Autowired
    private MockMvc mvc;
    @Autowired
    private JdbcClient jdbc;
    @Autowired
    private AuthTokenProvider tokens;
    private long workspace;
    private long member;
    private Cookie login;
    private Cookie csrf;

    @DynamicPropertySource
    static void modelProperties(DynamicPropertyRegistry properties) throws IOException {
        server = HttpServer.create(
                new InetSocketAddress(
                        "127.0.0.1",
                        0
                ),
                0
        );
        server.createContext(
                "/v1/chat/completions",
                LocalAnswerAcceptanceTest::complete
        );
        server.start();
        properties.add(
                "knot.local-answer.base-url",
                () -> "http://127.0.0.1:" + server.getAddress()
                        .getPort()
        );
    }

    private static void complete(HttpExchange exchange) throws IOException {
        try (exchange) {
            CALLS.incrementAndGet();
            MODEL_REQUEST.set(
                    new String(
                            exchange.getRequestBody()
                                    .readAllBytes(),
                            StandardCharsets.UTF_8
                    )
            );
            byte[] response = JSON.writeValueAsBytes(
                    Map.of(
                            "choices",
                            List.of(
                                    Map.of(
                                            "finish_reason",
                                            "stop",
                                            "message",
                                            Map.of(
                                                    "content",
                                                    MODEL_CONTENT.get()
                                            )
                                    )
                            )
                    )
            );
            exchange.sendResponseHeaders(
                    200,
                    response.length
            );
            exchange.getResponseBody()
                    .write(response);
        }
    }

    @AfterAll
    static void stopServer() {
        server.stop(0);
    }

    @BeforeEach
    void setUp() throws Exception {
        CALLS.set(0);
        MODEL_CONTENT.set("{\"answer\":\"합성 답변\",\"citations\":[1]}");
        member = jdbc.sql("insert into members(nickname) values (:name) returning id")
                .param(
                        "name",
                        UUID.randomUUID()
                                .toString()
                                .substring(
                                        0,
                                        10
                                )
                )
                .query(Long.class)
                .single();
        workspace = jdbc.sql("insert into workspaces(name, created_at) values ('local',now()) returning id")
                .query(Long.class)
                .single();
        jdbc.sql("insert into workspace_members(workspace_id, member_id, role, joined_at) values(?,?,'MEMBER',now())")
                .param(workspace)
                .param(member)
                .update();
        login = new Cookie(
                "KNOT_ACCESS_TOKEN",
                tokens.issue(
                        AuthenticatedMember.of(
                                member,
                                "tester",
                                null
                        )
                )
        );
        csrf = mvc.perform(get("/api/v1/auth/csrf"))
                .andReturn()
                .getResponse()
                .getCookie("XSRF-TOKEN");
    }

    @Test
    @DisplayName("선택한 문단만 전용 모델로 전달하고 반복 호출 후에도 서버 이력이 남지 않는다")
    void answer_success_withoutHistory(CapturedOutput output) throws Exception {
        // given
        long before = storedRows();

        // when
        for (int attempt = 0; attempt < 2; attempt++) {
            mvc.perform(request(QUESTION))
                    .andExpect(status().isOk())
                    .andExpect(
                            header().string(
                                    "Cache-Control",
                                    "no-store"
                            )
                    )
                    .andExpect(jsonPath("$.answer").value("합성 답변"))
                    .andExpect(jsonPath("$.citations[0]").value(1));
        }

        // then
        assertThat(CALLS.get()).isEqualTo(2);
        JsonNode payload = JSON.readTree(MODEL_REQUEST.get());
        assertThat(
                payload.path("model")
                        .stringValue()
        ).isEqualTo("fixture-model");
        assertThat(
                JSON.readTree(
                        payload.path("messages")
                                .get(1)
                                .path("content")
                                .stringValue()
                )
        ).isEqualTo(JSON.readTree(QUESTION));
        assertThat(storedRows()).isEqualTo(before);
        assertThat(output.getAll()).doesNotContain(
                "테스트 질문",
                "선택한 문단",
                "합성 답변",
                "broken-sensitive-fixture"
        );
    }

    @Test
    @DisplayName("세션 또는 CSRF가 없거나 이미 탈퇴한 멤버면 모델을 호출하지 않는다")
    void answer_failure_missingAuthority() throws Exception {
        mvc.perform(
                post(
                        URL,
                        workspace
                ).contentType(MediaType.APPLICATION_JSON)
                        .cookie(login)
                        .content(QUESTION)
        )
                .andExpect(status().isForbidden());
        mvc.perform(
                post(
                        URL,
                        workspace
                ).contentType(MediaType.APPLICATION_JSON)
                        .cookie(csrf)
                        .header(
                                "X-XSRF-TOKEN",
                                csrf.getValue()
                        )
                        .content(QUESTION)
        )
                .andExpect(status().isUnauthorized());
        jdbc.sql("update workspace_members set left_at=now() where workspace_id=? and member_id=?")
                .param(workspace)
                .param(member)
                .update();
        mvc.perform(request(QUESTION))
                .andExpect(status().isNotFound());
        assertThat(CALLS.get()).isZero();
    }

    @ParameterizedTest
    @ValueSource(strings = {"{}", "", "[]", "{\"question\":2,\"excerpts\":[\"x\"]}",
            "{\"question\":\"x\",\"excerpts\":[]}", "{\"question\":\"x\",\"excerpts\":[1]}",
            "{\"question\":\"x\",\"question\":\"y\",\"excerpts\":[\"z\"]}",
            "{\"question\":\"x\",\"excerpts\":[\"z\"],\"path\":\"private\"}"})
    @DisplayName("스키마에 맞지 않는 요청은 모델에 전달하지 않는다")
    void answer_failure_invalidInput(String body) throws Exception {
        mvc.perform(request(body))
                .andExpect(status().isBadRequest());
        assertThat(CALLS.get()).isZero();
    }

    @Test
    @DisplayName("실제 바이트를 읽어 본문 상한을 적용한다")
    void answer_failure_oversize() throws Exception {
        mvc.perform(request(QUESTION + " ".repeat(65536)))
                .andExpect(status().is(413));
        assertThat(CALLS.get()).isZero();
    }

    @ParameterizedTest
    @ValueSource(strings = {"broken-sensitive-fixture", "{\"answer\":\"broken-sensitive-fixture\",\"citations\":[2]}",
            "{\"answer\":\"broken-sensitive-fixture\",\"citations\":[1.5]}"})
    @DisplayName("모델의 잘못된 근거와 비정상 응답을 저장하거나 사용자에게 노출하지 않는다")
    void answer_failure_invalidModelResponse(
            String content,
            CapturedOutput output
    ) throws Exception {
        long before = storedRows();
        MODEL_CONTENT.set(content);
        String error = mvc.perform(request(QUESTION))
                .andExpect(status().isBadGateway())
                .andReturn()
                .getResponse()
                .getContentAsString();
        assertThat(error).doesNotContain("broken-sensitive-fixture");
        assertThat(CALLS.get()).isOne();
        assertThat(storedRows()).isEqualTo(before);
        assertThat(output.getAll()).doesNotContain(
                "테스트 질문",
                "선택한 문단",
                "합성 답변",
                "broken-sensitive-fixture"
        );
    }

    private MockHttpServletRequestBuilder request(String body) {
        return post(
                URL,
                workspace
        ).cookie(
                login,
                csrf
        )
                .header(
                        "X-XSRF-TOKEN",
                        csrf.getValue()
                )
                .contentType(MediaType.APPLICATION_JSON)
                .content(body);
    }

    private long storedRows() {
        return jdbc.sql("""
                select (select count(*) from search_conversations) + (select count(*) from search_messages)
                    + (select count(*) from search_evidences) + (select count(*) from search_request_receipts)
                    + (select count(*) from search_answer_executions) + (select count(*) from documents)
                    + (select count(*) from search_question_contexts)
                """)
                .query(Long.class)
                .single();
    }
}
