import { _electron, expect, test } from "@playwright/test";
import { fileURLToPath } from "node:url";

test("[MAC-R01] 창 닫기·복귀, 종료 취소와 저장 완료 후 종료", async ({}, info) => {
  const origin = "http://localhost:3181";
  const desktop = await _electron.launch({
    args: [
      fileURLToPath(new URL("main.cjs", import.meta.url)),
      "--user-data-dir=" + info.outputPath("profile"),
      "--use-fake-device-for-media-stream",
      "--use-fake-ui-for-media-stream",
    ],
    env: { ...process.env, KNOT_DESKTOP_URL: origin },
  });
  try {
    const page = await desktop.firstWindow();
    await desktop
      .context()
      .addCookies([{ name: "KNOT_MOCK_AUTH", value: "member", url: origin }]);
    await page.addInitScript(() => {
      localStorage.setItem("knot.releaseNote.lastSeenId", "e2e");
      localStorage.setItem("knot.searchTutorial.1", '{"state":"done"}');
    });
    await page.goto(origin + "/workspace/1");
    await page.getByRole("button", { name: "회의 녹음 시작" }).click();
    const bar = page.getByRole("region", { name: "녹음 조작" });
    await expect(bar).toContainText("녹음 중");
    await desktop.evaluate(({ BrowserWindow }) =>
      BrowserWindow.getAllWindows()[0].close(),
    );
    expect(
      await desktop.evaluate(({ BrowserWindow }) =>
        BrowserWindow.getAllWindows()[0].isVisible(),
      ),
    ).toBe(false);
    await desktop.evaluate(({ app }) => app.emit("activate"));
    await expect(bar).toContainText("녹음 중");
    await bar.getByRole("button", { name: /일시정지/ }).click();
    await desktop.evaluate(({ app, dialog }) => {
      dialog.showMessageBox = async () => ({
        response: 0,
        checkboxChecked: false,
      });
      app.quit();
    });
    await expect(
      bar.getByRole("button", { name: /이어서|재개/ }),
    ).toBeVisible();
    await bar.getByRole("button", { name: /이어서|재개/ }).click();
    await expect(bar).toContainText("녹음 중");
    // Hold the actual last chunk acknowledgement made by the shared React app.
    await page.evaluate(() => {
      const open = XMLHttpRequest.prototype.open;
      const send = XMLHttpRequest.prototype.send;
      const acknowledgements = new WeakSet();
      window.rejectAudioAck = true;
      XMLHttpRequest.prototype.open = function (method, url, ...rest) {
        if (
          /\/audio-chunks\/\d+\/complete$|\/audio-upload-complete$/.test(
            String(url),
          )
        ) {
          if (window.rejectAudioAck)
            return open.call(this, method, "/__missing-audio-ack", ...rest);
          acknowledgements.add(this);
        }
        return open.call(this, method, url, ...rest);
      };
      XMLHttpRequest.prototype.send = function (...args) {
        if (!acknowledgements.has(this)) return send.apply(this, args);
        const xhr = this;
        (window.pendingAudioAcks ??= []).push(() => send.apply(xhr, args));
      };
    });
    const endResponse = page.waitForResponse(
      (r) => r.url().endsWith("/end") && r.ok(),
    );
    const closed = desktop.waitForEvent("close");
    await desktop.evaluate(({ app, dialog }) => {
      dialog.showMessageBox = async (_window, options) => ({
        response: options.type === "question" ? 1 : 0,
        checkboxChecked: false,
      });
      app.quit();
    });
    await expect(
      bar.getByRole("button", { name: "저장 다시 시도" }),
    ).toBeEnabled();
    await page.evaluate(() => {
      window.rejectAudioAck = false;
    });
    await desktop.evaluate(({ app }) => app.quit());
    await page.waitForFunction(() => window.pendingAudioAcks?.length);
    expect(
      await desktop.evaluate(({ BrowserWindow }) =>
        BrowserWindow.getAllWindows()[0].isDestroyed(),
      ),
    ).toBe(false);
    await page.evaluate(() =>
      window.pendingAudioAcks.splice(0).forEach((send) => send()),
    );
    await endResponse;
    await closed;
  } finally {
    await desktop.evaluate(({ app }) => app.exit()).catch(() => {});
  }
});
