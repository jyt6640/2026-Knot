import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: ".",
  testMatch: "recording.spec.mjs",
  workers: 1,
  webServer: {
    command: "pnpm dev --no-open --port 3181",
    cwd: new URL("../", import.meta.url).pathname,
    url: "http://localhost:3181",
    reuseExistingServer: !process.env.CI,
    env: { API_MOCKING: "true" },
    timeout: 120000,
  },
});
