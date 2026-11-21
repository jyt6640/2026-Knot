import { packager } from "@electron/packager";
import { copyFile, cp, mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
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

const arch = process.env.KNOT_MAC_ARCH ?? process.arch;
const version = process.env.KNOT_MAC_VERSION ?? "0.0.0";
const release = process.env.KNOT_MAC_RELEASE === "1";
if (
  !["arm64", "x64"].includes(arch) ||
  !/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/.test(version)
)
  throw new Error("지원하는 CPU와 숫자 세 자리 버전(예: 1.0.0)을 지정하세요.");
if (
  release &&
  (!process.env.KNOT_SIGN_IDENTITY ||
    !process.env.KNOT_MAC_VERSION ||
    !entry.hostname.includes(".") ||
    /^(127\.|0\.)|\.(localhost|local)$/.test(entry.hostname))
)
  throw new Error(
    "공개 배포에는 Developer ID, 버전, 운영 HTTPS 주소가 필요합니다.",
  );

const work = await mkdtemp(path.join(tmpdir(), "knot-mac-"));
const dir = path.join(work, "app");
try {
  await mkdir(dir);
  for (const file of [
    "main.cjs",
    "preload.cjs",
    "recording-tray.cjs",
    "local-desktop.cjs",
    "local-library.cjs",
  ])
    await copyFile(new URL(file, import.meta.url), path.join(dir, file));
  const api = new URL(process.env.KNOT_DESKTOP_API_URL || entry.origin);
  if (api.protocol !== "https:" || api.username || api.password)
    throw Error("HTTPS API 주소가 필요합니다.");
  await cp("dist-desktop/renderer", path.join(dir, "renderer"), {
    recursive: true,
  });
  await writeFile(
    path.join(dir, "package.json"),
    JSON.stringify({
      name: "knot",
      version,
      main: "main.cjs",
      knotDesktopUrl: entry.href,
      knotApiUrl: api.origin,
    }),
  );
  const [output] = await packager({
    dir,
    tmpdir: work,
    out: "dist-desktop",
    name: "Knot",
    platform: "darwin",
    arch,
    appVersion: version,
    osxSign: release
      ? {
          identity: process.env.KNOT_SIGN_IDENTITY,
          continueOnError: false,
          optionsForFile: (file) =>
            /\((GPU|Renderer|Plugin)\)\.app/.test(file)
              ? {}
              : {
                  entitlements: [
                    "com.apple.security.cs.allow-jit",
                    "com.apple.security.device.audio-input",
                  ],
                },
        }
      : undefined,
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
  if (!release)
    execFileSync("codesign", ["--force", "--deep", "--sign", "-", bundle]);
  console.log(bundle);
} finally {
  await rm(work, { recursive: true, force: true });
}
