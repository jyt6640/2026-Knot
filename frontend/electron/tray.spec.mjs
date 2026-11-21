import { expect } from "@playwright/test";
import { execFileSync } from "node:child_process";
import { test } from "./test-app.mjs";

test("[MAC-R03] 메뉴 막대와 본창이 마이크 하나로 일시정지·재개·종료를 공유한다", async ({
  desktop,
  home,
}, info) => {
  test.setTimeout(90000);
  await desktop.evaluate(({ Tray }) => {
    const setTitle = Tray.prototype.setTitle;
    Tray.prototype.setTitle = function (...args) {
      globalThis.testTray = this;
      return setTitle.apply(this, args);
    };
  });
  await home.evaluate(() => {
    window.micOpens = 0;
    const open = navigator.mediaDevices.getUserMedia.bind(
      navigator.mediaDevices,
    );
    navigator.mediaDevices.getUserMedia = (...args) => {
      window.micOpens++;
      return open(...args);
    };
  });
  const starts = [],
    ends = [],
    saved = [];
  home.on("request", (req) => {
    if (req.method() !== "POST") return;
    const url = new URL(req.url());
    if (url.pathname.endsWith("/recordings")) starts.push(url.pathname);
    if (url.pathname.endsWith("/end")) ends.push(url.pathname);
    if (
      /\/audio-chunks\/\d+\/complete$|\/audio-upload-complete$/.test(
        url.pathname,
      )
    )
      saved.push(url.pathname);
  });
  await home.getByRole("button", { name: "회의 녹음 시작" }).click();
  const bar = home.getByRole("region", { name: "녹음 조작" });
  await expect(bar).toContainText("녹음 중");

  const checkDisplay = async () => {
    if (process.env.KNOT_TEST_INTERNAL_DISPLAY !== "1") return;
    expect(
      await desktop.evaluate(({ BrowserWindow, screen }) =>
        BrowserWindow.getAllWindows().every(
          (w) => screen.getDisplayMatching(w.getBounds()).internal,
        ),
      ),
    ).toBe(true);
  };
  const openMenu = async () => {
    const next = desktop.waitForEvent("window");
    await desktop.evaluate(() =>
      globalThis.testTray.emit("click", {}, globalThis.testTray.getBounds()),
    );
    const menu = await next;
    await expect(
      menu.getByRole("region", { name: "메뉴 막대 녹음 제어" }),
    ).toBeVisible();
    await checkDisplay();
    return menu;
  };
  await checkDisplay();
  await desktop.evaluate(({ app, BrowserWindow }) => {
    BrowserWindow.getAllWindows()[0].close();
    app.hide();
  });
  if (process.env.KNOT_TEST_INTERNAL_DISPLAY === "1") {
    const frontPid = Number(
      execFileSync(
        "osascript",
        [
          "-l",
          "JavaScript",
          "-e",
          'ObjC.import("AppKit"); $.NSWorkspace.sharedWorkspace.frontmostApplication.processIdentifier',
        ],
        { encoding: "utf8" },
      ).trim(),
    );
    expect(frontPid).toBeGreaterThan(0);
    expect(frontPid).not.toBe(desktop.process().pid);
  }
  let menu = await openMenu();
  expect(
    await desktop.evaluate(({ BrowserWindow }) =>
      BrowserWindow.getAllWindows()
        .find(
          (w) =>
            w.webContents.getURL().startsWith("https:") ||
            w.webContents.getURL().startsWith("http:"),
        )
        .isVisible(),
    ),
  ).toBe(false);
  await expect(menu.locator("canvas")).toBeVisible();
  expect(
    await menu.evaluate(() => {
      const heading = document.querySelector("h2");
      return (
        document.documentElement.scrollHeight <= innerHeight &&
        heading.scrollHeight <= heading.clientHeight + 1
      );
    }),
  ).toBe(true);
  const closed = menu.waitForEvent("close");
  await desktop.evaluate(({ BrowserWindow }) => {
    const panel = BrowserWindow.getAllWindows().find(
      (w) => w.webContents.getURL() === "about:blank",
    );
    panel.webContents.sendInputEvent({ type: "keyDown", keyCode: "Escape" });
    // 팝오버는 keyDown에서 닫힌다. 닫힌 창에 keyUp을 보내지 않는다.
  });
  await closed;
  menu = await openMenu();
  await menu.getByRole("button", { name: "일시정지" }).click();
  await expect(menu.getByRole("button", { name: "이어서 녹음" })).toBeEnabled();
  await expect(bar).toContainText("일시정지");
  const frozen = await menu.getByLabel("녹음한 시간").textContent();
  await expect
    .poll(() => desktop.evaluate(() => globalThis.testTray.getTitle()))
    .toContain(frozen);
  await expect(bar.getByLabel("녹음한 시간")).toHaveText(frozen);
  await menu.getByRole("button", { name: "이어서 녹음" }).click();
  await expect(menu.getByLabel("녹음한 시간")).not.toHaveText(frozen);
  await menu.screenshot({ path: info.outputPath("recording-menu.png") });
  await menu.getByRole("button", { name: "녹음 창 열기" }).click();
  await expect(bar).toContainText("녹음 중");
  await bar.getByRole("button", { name: "일시정지" }).click();
  menu = await openMenu();
  await expect(menu.getByRole("button", { name: "이어서 녹음" })).toBeEnabled();
  await menu.getByRole("button", { name: "녹음 끝내기" }).click();
  const confirm = home.getByRole("dialog", { name: "녹음을 끝낼까요?" });
  await confirm.getByRole("button", { name: "계속 녹음" }).click();
  expect(ends).toHaveLength(0);
  await bar.getByRole("button", { name: "이어서 녹음" }).click();

  await bar.getByRole("button", { name: "녹음 끝내기" }).click();
  menu = await openMenu();
  await menu.getByRole("button", { name: "녹음 끝내기" }).click();
  await expect(confirm).toHaveCount(1);
  await confirm.getByRole("button", { name: "녹음 끝내기" }).click();
  await expect
    .poll(() => desktop.evaluate(() => globalThis.testTray.isDestroyed()))
    .toBe(true);

  expect(starts).toHaveLength(1);
  expect(ends).toHaveLength(1);
  const documentsPath = ends[0]
    .replace("/api/v1/workspaces/", "/workspace/")
    .replace(/\/end$/, "");
  await expect(home).toHaveURL(
    (url) =>
      url.pathname === documentsPath ||
      url.pathname === documentsPath + "/document",
  );
  expect(saved.length).toBeGreaterThan(0);
  expect(new Set(saved).size).toBe(saved.length);
  expect(await home.evaluate(() => window.micOpens)).toBe(1);
});
