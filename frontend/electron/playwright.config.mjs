import { defineConfig } from "@playwright/test";
const port = process.env.KNOT_TEST_PORT || 3182;
export default defineConfig({
  testDir: ".",
  testMatch: "*.spec.mjs",
  workers: 1,
  timeout: 60000,
  webServer: {
    command:
      (process.env.KNOT_TEST_APP ? "" : "pnpm build:desktop && ") +
      "node electron/auth-test-server.mjs",
    cwd: new URL("../", import.meta.url).pathname,
    url: "https://localhost:" + port,
    ignoreHTTPSErrors: true,
    reuseExistingServer: false,
    timeout: 120000,
  },
});
