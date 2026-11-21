import { packager } from "@electron/packager";
import { copyFile, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
if (!process.env.KNOT_DESKTOP_URL)
  throw new Error("KNOT_DESKTOP_URL에 개인 Knot의 HTTPS 주소를 지정하세요.");
const entry = new URL(process.env.KNOT_DESKTOP_URL);
if (entry.protocol !== "https:" || entry.username || entry.password)
  throw new Error("인증 정보가 없는 HTTPS 주소를 지정하세요.");

const dir = await mkdtemp(path.join(tmpdir(), "knot-mac-"));
try {
  for (const file of ["main.cjs", "preload.cjs", "recording-tray.cjs"])
    await copyFile(new URL(file, import.meta.url), path.join(dir, file));
  await writeFile(
    path.join(dir, "package.json"),
    JSON.stringify({
      name: "knot",
      version: "0.0.0",
      main: "main.cjs",
      knotDesktopUrl: entry.href,
    }),
  );
  const [output] = await packager({
    dir,
    out: "dist-desktop",
    name: "Knot",
    platform: "darwin",
    arch: process.arch,
    appBundleId: "com.jyt6640.knot",
    electronVersion: require("electron/package.json").version,
    extendInfo: {
      NSMicrophoneUsageDescription:
        "Knot에서 회의 내용을 녹음하려면 마이크 접근이 필요합니다.",
    },
    overwrite: true,
  });
  const bundle = path.join(output, "Knot.app");
  // 로컬 권한 QA용 앱 서명. 공개 배포 서명과 공증은 릴리스에서 수행한다.
  execFileSync("codesign", ["--force", "--deep", "--sign", "-", bundle]);
  console.log(bundle);
} finally {
  await rm(dir, { recursive: true, force: true });
}
