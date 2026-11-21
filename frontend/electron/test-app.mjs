import { _electron, test as base, expect } from "@playwright/test";
import { X509Certificate, createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
export const origin =
  "https://localhost:" + (process.env.KNOT_TEST_PORT || 3182);
export async function launch(profile, offline = false) {
  const cert = new X509Certificate(readFileSync("test-results-auth/cert.pem"));
  const pin = createHash("sha256")
    .update(cert.publicKey.export({ type: "spki", format: "der" }))
    .digest("base64");
  const bundle = process.env.KNOT_TEST_APP;
  const desktop = await _electron.launch({
    executablePath: bundle && path.join(bundle, "Contents/MacOS/Knot"),
    args: [
      ...(!bundle ? [fileURLToPath(new URL("main.cjs", import.meta.url))] : []),
      "--ignore-certificate-errors-spki-list=" + pin,
      "--user-data-dir=" + profile,
      ...(offline
        ? [
            "--proxy-server=http://127.0.0.1:1",
            "--proxy-bypass-list=<-loopback>",
          ]
        : []),
      ...(process.env.KNOT_TEST_INTERNAL_DISPLAY === "1"
        ? ["--knot-test-internal-display"]
        : []),
      "--use-mock-keychain",
      "--use-fake-device-for-media-stream",
      "--use-fake-ui-for-media-stream",
    ],
    env: { ...process.env, KNOT_DESKTOP_URL: origin },
  });
  await desktop.evaluate(({ systemPreferences }) => {
    systemPreferences.getMediaAccessStatus = () => "granted";
  });
  return desktop;
}
export async function login(desktop, page, account = "A") {
  const child = desktop.waitForEvent("window");
  await page.getByRole("button", { name: "Knot 계정으로 로그인" }).click();
  await (await child).getByRole("link", { name: "Account " + account }).click();
  await expect(
    page.getByRole("heading", { name: "반가워요, " + account + " 님" }),
  ).toBeVisible();
}
export const test = base.extend({
  desktop: async ({}, use, info) => {
    const desktop = await launch(info.outputPath("profile"));
    try {
      await use(desktop);
    } finally {
      await desktop.evaluate(({ app }) => app.exit()).catch(() => {});
    }
  },
  home: async ({ desktop }, use) => {
    const page = await desktop.firstWindow();
    await login(desktop, page);
    await use(page);
  },
});
