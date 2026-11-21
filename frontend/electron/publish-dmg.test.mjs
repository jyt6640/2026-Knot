import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const publish = fileURLToPath(new URL("./publish-dmg.sh", import.meta.url));
const names = ["Knot-1.0.0-arm64.dmg", "Knot-1.0.0-x64.dmg"];
const hashes = names.map((name) =>
  createHash("sha256").update(name).digest("hex"),
);

function simulate(
  t,
  { draft = true, uploaded = hashes, corruptedDownload = false } = {},
) {
  const dir = mkdtempSync(path.join(tmpdir(), "knot-publish-test-"));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  const log = path.join(dir, "calls");
  writeFileSync(log, "");
  const commands = {
    gh: `case "$1" in
      release) printf '%s' "$RELEASE_JSON" ;;
      api) echo publish >> "$LOG" ;;
      *) exit 1 ;;
    esac`,
    curl: `while [[ "$1" != --output ]]; do shift; done
    echo "$3" >> "$LOG"
    printf %s "$(basename "$3")$EXTRA" > "$2"`,
  };
  for (const [name, code] of Object.entries(commands))
    writeFileSync(path.join(dir, name), "#!/bin/bash\nset -eu\n" + code, {
      mode: 0o700,
    });
  const result = spawnSync("bash", [publish, "1.0.0", ...hashes], {
    encoding: "utf8",
    env: {
      ...process.env,
      PATH: dir + path.delimiter + process.env.PATH,
      LOG: log,
      EXTRA: corruptedDownload ? "changed" : "",
      RELEASE_JSON: JSON.stringify({
        databaseId: 5,
        isDraft: draft,
        assets: uploaded.map((hash, i) => ({
          name: names[i],
          digest: "sha256:" + hash,
        })),
      }),
    },
  });
  return {
    result,
    calls: readFileSync(log, "utf8").trim().split("\n").filter(Boolean),
  };
}

test("두 QA 해시가 일치하면 초안을 한 번 공개하고 같은 버전의 공개 URL을 검증한다", (t) => {
  const { result, calls } = simulate(t);
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(calls, [
    "publish",
    ...names.map(
      (name) =>
        "https://github.com/jyt6640/2026-Knot/releases/download/mac-v1.0.0/" +
        name,
    ),
  ]);
});
test("설치본이 빠지거나 바뀐 초안은 공개하지 않는다", (t) => {
  for (const uploaded of [[hashes[0]], [hashes[1], hashes[0]]]) {
    const { result, calls } = simulate(t, { uploaded });
    assert.notEqual(result.status, 0);
    assert.deepEqual(calls, []);
  }
});
test("공개 후 검증을 재시도할 때 다운로드 내용이 다르면 실패한다", (t) => {
  const { result, calls } = simulate(t, {
    draft: false,
    corruptedDownload: true,
  });
  assert.notEqual(result.status, 0);
  assert.equal(calls.length, 2);
  assert.ok(!calls.includes("publish"));
});
