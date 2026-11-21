import { expect } from "@playwright/test";
import { test } from "./test-app.mjs";

for (const allowFirst of [true, false]) {
  test(`[MAC-R02] 최초 권한 ${allowFirst ? "허용" : "거부 후 설정 변경"}과 녹음 시작`, async ({
    desktop,
    home,
  }) => {
    if (process.env.KNOT_TEST_APP)
      expect(await desktop.evaluate(({ app }) => app.isPackaged)).toBe(true);
    const starts = [];
    home.on("request", (req) => {
      if (req.method() === "POST" && req.url().endsWith("/recordings"))
        starts.push(req.url());
    });
    await desktop.evaluate(({ systemPreferences }, allow) => {
      let status = "not-determined";
      globalThis.microphonePrompts = 0;
      systemPreferences.getMediaAccessStatus = () => status;
      systemPreferences.askForMediaAccess = async (type) => {
        if (type !== "microphone") throw new Error(type);
        globalThis.microphonePrompts++;
        status = allow ? "granted" : "denied";
        return allow;
      };
    }, allowFirst);
    const start = home.getByRole("button", { name: "회의 녹음 시작" });
    const bar = home.getByRole("region", { name: "녹음 조작" });
    await expect(start).toBeVisible();
    expect(await desktop.evaluate(() => globalThis.microphonePrompts)).toBe(0);
    await start.click();
    if (!allowFirst) {
      // 재시도에도 OS가 이미 거절한 권한을 반복해서 묻지 않는다.
      for (let attempt = 0; attempt < 2; attempt++) {
        if (attempt) await start.click();
        const notice = home.getByRole("alertdialog", {
          name: "마이크 권한이 꺼져 있어요",
        });
        await expect(notice).toContainText("개인정보 보호 및 보안 → 마이크");
        await expect(bar).toHaveCount(0);
        expect(starts).toHaveLength(0);
        await notice.getByRole("button", { name: "확인" }).click();
      }
      await desktop.evaluate(({ systemPreferences }) => {
        systemPreferences.getMediaAccessStatus = () => "granted";
      });
      await start.click();
    }
    await expect(bar).toContainText("녹음 중");
    expect(starts).toHaveLength(0);
    expect(await desktop.evaluate(() => globalThis.microphonePrompts)).toBe(1);
  });
}

test("[MAC-R02] 권한이 있어도 장치가 없으면 입력 장치 연결을 안내", async ({
  home,
}) => {
  await home.evaluate(() => {
    navigator.mediaDevices.getUserMedia = async () => {
      throw new DOMException("No audio input", "NotFoundError");
    };
  });
  await home.getByRole("button", { name: "회의 녹음 시작" }).click();
  const notice = home.getByRole("alertdialog", {
    name: "연결된 마이크를 찾을 수 없어요",
  });
  await expect(notice).toContainText("사운드 → 입력");
  await expect(home.getByRole("region", { name: "녹음 조작" })).toHaveCount(0);
});
