import { once } from "node:events";
import { expect } from "@playwright/test";
import { launch, login, origin, test } from "./test-app.mjs";

async function exitApp(desktop) {
  const child = desktop.process();
  if (child.exitCode !== null || child.signalCode !== null) return;
  const ended = once(child, "exit");
  await desktop.evaluate(({ app }) => app.exit()).catch(() => {});
  await ended;
}
async function start(page) {
  await page.getByRole("button", { name: "회의 녹음 시작" }).click();
  await expect(page.getByRole("region", { name: "녹음 조작" })).toContainText(
    "녹음 중",
  );
}
async function finish(page) {
  await page.getByRole("button", { name: "녹음 끝내기" }).click();
  await page
    .getByRole("dialog")
    .getByRole("button", { name: "녹음 끝내기" })
    .click();
  await expect(
    page.getByRole("button", { name: "원음 재생" }).first(),
  ).toBeEnabled();
}
async function play(page) {
  await page.getByRole("button", { name: "원음 재생" }).first().click();
  await expect
    .poll(() => page.locator("audio").evaluate((el) => el.currentTime))
    .toBeGreaterThan(0);
  return await page.locator("audio").getAttribute("src");
}

test("[MAC-R01] ⌘Q 취소, 실제 SQLite 용량 부족과 마지막 블록 재시도 후 종료", async ({
  desktop,
  home,
}, info) => {
  await start(home);
  await desktop.evaluate(({ app, dialog }) => {
    dialog.showMessageBox = async () => ({ response: 0 });
    app.quit();
  });
  await expect(home.getByRole("button", { name: "일시정지" })).toBeEnabled();
  // Give the final (under five seconds) worklet buffer audible input.
  await home.waitForTimeout(450);
  await desktop.evaluate(({ app, dialog }) => {
    const { DatabaseSync } = process.getBuiltinModule("node:sqlite");
    const prepare = DatabaseSync.prototype.prepare;
    DatabaseSync.prototype.prepare = function (sql) {
      if (sql.startsWith("INSERT INTO pcm")) {
        const pages = this.prepare("PRAGMA page_count").get().page_count;
        this.exec(
          "PRAGMA max_page_count=" + (globalThis.allowSpace ? 1000000 : pages),
        );
      }
      return prepare.call(this, sql);
    };
    dialog.showMessageBox = async (_w, opts) => ({
      response: opts.type === "question" ? 1 : 0,
    });
    app.quit();
  });
  await expect(
    home.getByRole("button", { name: "저장 다시 시도" }),
  ).toBeEnabled();
  await desktop.evaluate(() => {
    globalThis.allowSpace = true;
  });
  const closed = desktop.waitForEvent("close");
  await desktop.evaluate(({ app }) => app.quit());
  await closed;
  const next = await launch(info.outputPath("profile"), true);
  try {
    const page = await next.firstWindow();
    await expect(page.getByRole("button", { name: "원음 재생" })).toHaveCount(
      1,
    );
    const src = await play(page);
    const audio = await page.evaluate(async (src) => {
      const data = await (await fetch(src)).arrayBuffer();
      return {
        declared: new DataView(data).getUint32(40, true),
        length: data.byteLength,
        nonSilent: new Uint8Array(data, 44).some((x) => x !== 0),
      };
    }, src);
    expect(audio.length).toBe(audio.declared + 44);
    expect(audio.nonSilent).toBe(true);
  } finally {
    await exitApp(next);
  }
});

test("[MAC-R01] 오프라인에서 시작한 회의를 ⌘Q로 저장하고 같은 Mac에서 재생", async ({}, info) => {
  const profile = info.outputPath("offline-profile");
  let desktop = await launch(profile);
  try {
    await login(desktop, await desktop.firstWindow());
    await exitApp(desktop);
    desktop = await launch(profile, true);
    const page = await desktop.firstWindow();
    await start(page);
    await expect
      .poll(
        () =>
          page.evaluate(
            async () => (await window.knotDesktop.local.list())[0]?.bytes,
          ),
        { timeout: 15000 },
      )
      .toBeGreaterThan(0);
    const before = await page.evaluate(
      async () => (await window.knotDesktop.local.list())[0].bytes,
    );
    await page.waitForTimeout(350);
    const closed = desktop.waitForEvent("close");
    await desktop.evaluate(({ app, dialog }) => {
      dialog.showMessageBox = async () => ({ response: 1 });
      app.quit();
    });
    await closed;
    desktop = await launch(profile, true);
    const reopened = await desktop.firstWindow();
    const src = await play(reopened);
    const [row] = await reopened.evaluate(() =>
      window.knotDesktop.local.list(),
    );
    expect(row.recovered).toBe(false);
    expect(row.bytes).toBeGreaterThan(before);
    const tail = await reopened.evaluate(
      async ({ src, before }) => {
        const response = await fetch(src, {
          headers: { Range: "bytes=" + (44 + before) + "-" },
        });
        return (
          response.status === 206 &&
          new Uint8Array(await response.arrayBuffer()).some(
            (byte) => byte !== 0,
          )
        );
      },
      { src, before },
    );
    expect(tail).toBe(true);
  } finally {
    await exitApp(desktop);
  }
});

test("[MAC-R06, MAC-R07] 오프라인 재실행·중단 복구 및 계정별 잠금·삭제", async ({}, info) => {
  test.setTimeout(120000);
  const profile = info.outputPath("library-profile");
  let desktop = await launch(profile);
  try {
    let page = await desktop.firstWindow();
    await login(desktop, page);
    await exitApp(desktop);
    desktop = await launch(profile, true);
    page = await desktop.firstWindow();
    expect(
      await desktop.evaluate(async ({ session }, url) => {
        try {
          await session.defaultSession.fetch(url);
          return false;
        } catch {
          return true;
        }
      }, origin),
    ).toBe(true);
    await start(page);
    await expect
      .poll(
        () =>
          page.evaluate(
            async () => (await window.knotDesktop.local.list())[0]?.bytes,
          ),
        { timeout: 15000 },
      )
      .toBeGreaterThan(0);
    const crashed = desktop.waitForEvent("close");
    desktop.process().kill("SIGKILL");
    await crashed;
    desktop = await launch(profile, true);
    page = await desktop.firstWindow();
    await expect(page.getByText(/중단된 녹음/)).toBeVisible();
    const stale = await play(page);
    const [a] = await page.evaluate(() => window.knotDesktop.local.list());
    await page.getByRole("button", { name: "로그아웃" }).click();
    await expect(
      page.getByRole("button", { name: "Knot 계정으로 로그인" }),
    ).toBeVisible();
    await exitApp(desktop);
    desktop = await launch(profile, true);
    page = await desktop.firstWindow();
    await expect(
      page.getByRole("button", { name: "Knot 계정으로 로그인" }),
    ).toBeVisible();
    const invisible = async () => {
      expect(
        await page.evaluate(() => window.knotDesktop.local.list()),
      ).toEqual([]);
      expect(
        await page.evaluate(async (url) => (await fetch(url)).status, stale),
      ).toBe(404);
      expect(
        await page.evaluate(async (id) => {
          try {
            await window.knotDesktop.local.remove(id);
            return false;
          } catch {
            return true;
          }
        }, a.id),
      ).toBe(true);
    };
    await invisible();
    await exitApp(desktop);
    desktop = await launch(profile);
    page = await desktop.firstWindow();
    await login(desktop, page, "B");
    await invisible();
    await start(page);
    await page.waitForTimeout(350);
    await finish(page);
    await page.getByRole("button", { name: "로그아웃" }).click();
    await login(desktop, page, "A");
    await expect(page.getByText(/중단된 녹음/)).toBeVisible();
    await play(page);
    await page.getByRole("button", { name: "이 Mac에서 삭제" }).click();
    await page
      .getByRole("dialog")
      .getByRole("button", { name: "취소" })
      .click();
    await expect(page.getByRole("button", { name: "원음 재생" })).toHaveCount(
      1,
    );
    await page.getByRole("button", { name: "이 Mac에서 삭제" }).click();
    await page
      .getByRole("dialog")
      .getByRole("button", { name: "삭제", exact: true })
      .click();
    await expect(page.getByText("아직 녹음이 없어요.")).toBeVisible();
    await exitApp(desktop);
    desktop = await launch(profile);
    page = await desktop.firstWindow();
    await expect(page.getByText("아직 녹음이 없어요.")).toBeVisible();
    await page.getByRole("button", { name: "로그아웃" }).click();
    await login(desktop, page, "B");
    await play(page);
    const unexpected = await desktop.evaluate(
      async ({ session }, url) =>
        (await session.defaultSession.fetch(url + "/requests")).json(),
      origin,
    );
    expect(unexpected).toEqual([]);
  } finally {
    await exitApp(desktop);
  }
});
