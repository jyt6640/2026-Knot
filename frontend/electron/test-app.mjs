import { _electron, test as base } from "@playwright/test";
import { X509Certificate, createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const bundle = process.env.KNOT_TEST_APP;
const origin = bundle ? "https://localhost:3182" : "http://localhost:3181";

export const test = base.extend({
  desktop: async ({}, use, info) => {
    // 생성한 로컬 webpack 인증서만 신뢰해야 HTTPS 서비스 워커도 등록된다.
    const cert =
      bundle &&
      new X509Certificate(
        readFileSync(
          new URL(
            "../node_modules/.cache/webpack-dev-server/server.pem",
            import.meta.url,
          ),
        ),
      );
    const pin =
      cert &&
      createHash("sha256")
        .update(cert.publicKey.export({ type: "spki", format: "der" }))
        .digest("base64");
    const desktop = await _electron.launch({
      executablePath: bundle && path.join(bundle, "Contents/MacOS/Knot"),
      args: [
        ...(bundle
          ? ["--ignore-certificate-errors-spki-list=" + pin]
          : [fileURLToPath(new URL("main.cjs", import.meta.url))]),
        ...(process.env.KNOT_TEST_INTERNAL_DISPLAY === "1"
          ? ["--knot-test-internal-display"]
          : []),
        "--user-data-dir=" + info.outputPath("profile"),
        "--use-fake-device-for-media-stream",
        "--use-fake-ui-for-media-stream",
      ],
      env: { ...process.env, KNOT_DESKTOP_URL: origin },
    });
    try {
      // OS 권한 선택은 테스트가 제어한다. 실제 TCC 설정이나 물리 마이크를 바꾸지 않는다.
      await desktop.evaluate(({ systemPreferences }) => {
        systemPreferences.getMediaAccessStatus = () => "granted";
      });
      await use(desktop);
    } finally {
      await desktop.evaluate(({ app }) => app.exit()).catch(() => {});
    }
  },
  home: async ({ desktop }, use) => {
    const page = await desktop.firstWindow();
    await desktop
      .context()
      .addCookies([{ name: "KNOT_MOCK_AUTH", value: "member", url: origin }]);
    await page.addInitScript(() => {
      localStorage.setItem("knot.releaseNote.lastSeenId", "e2e");
      localStorage.setItem("knot.searchTutorial.1", '{"state":"done"}');
    });
    await page.goto(origin + "/workspace/1");
    await use(page);
  },
});
