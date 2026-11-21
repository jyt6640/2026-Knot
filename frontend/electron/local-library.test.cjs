const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { LocalLibrary } = require("./local-library.cjs");

test("조각 재시도와 커밋 순서, 암호화된 파일, 원음의 범위 재생", async (t) => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "knot-library-"));
  const secrets = {
    encryptString: (value) => Buffer.from(value),
    decryptString: (bytes) => bytes.toString(),
  };
  const lib = new LocalLibrary(root, secrets);
  t.after(() => {
    lib.interrupt();
    lib.accounts.close();
    fs.rmSync(root, { recursive: true, force: true });
  });
  lib.login({ memberId: 10, nickname: "첫 회원" });
  const id = lib.begin();
  const first = Buffer.alloc(2000, 0xaa),
    second = Buffer.alloc(300, 0x33);
  assert.throws(() => lib.append(id, 1, second));
  lib.append(id, 0, first);
  lib.append(id, 0, first);
  assert.throws(() => lib.finish(id, 2));
  lib.append(id, 1, second);
  lib.finish(id, 2);
  const file = lib.file(id);
  assert.equal(fs.readFileSync(file).includes(first), false);
  const details = lib.list()[0];
  assert.equal(details.bytes, 2300);
  assert.equal(details.recovered, false);
  const clipped = lib.playback(lib.generation, id, "bytes=2040-2049");
  assert.equal(clipped.status, 206);
  assert.deepEqual(
    Buffer.from(await clipped.arrayBuffer()),
    Buffer.concat([first.subarray(-4), second.subarray(0, 6)]),
  );
  const oldGeneration = lib.generation;
  lib.logout();
  assert.deepEqual(lib.list(), []);
  assert.equal(lib.playback(oldGeneration, id, null).status, 404);
  lib.login({ memberId: 11, nickname: "다른 회원" });
  assert.throws(() => lib.remove(id));
  lib.logout();
  lib.login({ memberId: 10, nickname: "첫 회원" });
  assert.equal(lib.playback(oldGeneration, id, null).status, 404);
  lib.remove(id);
  assert.equal(fs.existsSync(file), false);
  assert.deepEqual(lib.list(), []);
});
