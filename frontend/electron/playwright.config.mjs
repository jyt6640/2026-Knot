import { defineConfig } from "@playwright/test";

const packaged = Boolean(process.env.KNOT_TEST_APP);

export default defineConfig({
  testDir: ".",
  testMatch: "*.spec.mjs",
  workers: 1,
  webServer: {
    command: packaged
      ? "pnpm dev --no-open --host localhost --port 3182 --server-type https"
      : "pnpm dev --no-open --host localhost --port 3181",
    cwd: new URL("../", import.meta.url).pathname,
    url: packaged ? "https://localhost:3182" : "http://localhost:3181",
    ignoreHTTPSErrors: packaged,
    reuseExistingServer: !process.env.CI,
    env: { API_MOCKING: "true" },
    timeout: 120000,
  },
});
