import { _electron, expect } from "@playwright/test";

const [executablePath, profile] = process.argv.slice(2);
if (!executablePath || !profile)
  throw new Error("검증할 앱과 임시 프로필이 필요합니다.");

const app = await _electron.launch({
  executablePath,
  args: ["--user-data-dir=" + profile],
});
try {
  const window = await app.firstWindow();
  await expect(
    window.getByRole("button", { name: "Knot 계정으로 로그인" }),
  ).toBeVisible();
  console.log("설치한 Knot 앱에서 로그인 화면을 확인했습니다.");
} finally {
  await app.close();
}
