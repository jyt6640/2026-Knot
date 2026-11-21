package com.knot.backend.global.config;

import com.knot.backend.global.infrastructure.llm.LmStudioClient;
import com.knot.backend.search.infrastructure.llm.LocalAnswerModel;
import java.net.http.HttpClient;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.context.properties.bind.Binder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import tools.jackson.databind.ObjectMapper;

@Configuration(proxyBeanMethods = false)
@ConditionalOnProperty(prefix = "knot.local-answer", name = "enabled", havingValue = "true")
public class LocalAnswerConfig {

    @Bean
    public LocalAnswerModel localAnswerModel(
            Environment environment,
            ObjectMapper mapper
    ) {
        // 웹 제공자 설정과 자격증명을 개인 질문에 사용하지 않는다.
        LlmProperties settings = Binder.get(environment)
                .bind(
                        "knot.local-answer",
                        LlmProperties.class
                )
                .orElseThrow(() -> new IllegalStateException("개인 답변 모델 설정이 필요합니다"));
        settings.validateEnabledConfiguration();
        if (!"lm-studio".equals(settings.getProvider())) {
            throw new IllegalStateException("개인 답변 모델은 LM Studio만 지원합니다");
        }
        HttpClient http = HttpClient.newBuilder()
                .connectTimeout(settings.getConnectTimeout())
                .followRedirects(HttpClient.Redirect.NEVER)
                .build();
        return new LocalAnswerModel(
                new LmStudioClient(
                        http,
                        mapper,
                        settings
                )
        );
    }
}
