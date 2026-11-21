const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { DatabaseSync } = require("node:sqlite");
const { Readable } = require("node:stream");

function openFile(file) {
  const db = new DatabaseSync(file);
  db.exec("PRAGMA synchronous=FULL");
  return db;
}

function wavHeader(length) {
  const bytes = Buffer.alloc(44);
  bytes.write("RIFF");
  bytes.writeUInt32LE(36 + length, 4);
  bytes.write("WAVEfmt ", 8);
  bytes.writeUInt32LE(16, 16);
  bytes.writeUInt16LE(1, 20);
  bytes.writeUInt16LE(1, 22);
  bytes.writeUInt32LE(16000, 24);
  bytes.writeUInt32LE(32000, 28);
  bytes.writeUInt16LE(2, 32);
  bytes.writeUInt16LE(16, 34);
  bytes.write("data", 36);
  bytes.writeUInt32LE(length, 40);
  return bytes;
}

// Each original is one local file. A SQLite transaction commits a whole PCM block
// and its position together, including the final short block from the worklet.
class LocalLibrary {
  constructor(root, safeStorage) {
    fs.mkdirSync(root, { recursive: true, mode: 0o700 });
    this.root = root;
    this.secrets = safeStorage;
    this.accounts = openFile(path.join(root, "accounts.sqlite"));
    this.accounts
      .exec(`CREATE TABLE IF NOT EXISTS accounts(id INTEGER PRIMARY KEY, key BLOB NOT NULL);
      CREATE TABLE IF NOT EXISTS login(slot INTEGER PRIMARY KEY CHECK(slot=1), identity BLOB NOT NULL)`);
    const current = this.accounts.prepare("SELECT identity FROM login").get();
    if (current) {
      try {
        this.openAccount(JSON.parse(this.unseal(current.identity)));
      } catch {
        this.forget();
      } // Keychain unavailable. Show sign-in and keep the encrypted files.
    }
  }

  unseal(bytes) {
    return this.secrets.decryptString(Buffer.from(bytes));
  }

  openAccount(account) {
    const row = this.accounts
      .prepare("SELECT key FROM accounts WHERE id=?")
      .get(account.memberId);
    this.key = Buffer.from(this.unseal(row.key), "base64");
    this.account = account;
    this.folder = path.join(this.root, String(account.memberId));
    fs.mkdirSync(this.folder, { recursive: true, mode: 0o700 });
    this.generation = crypto.randomUUID();
  }

  login({ memberId, nickname }) {
    if (
      this.account ||
      !Number.isSafeInteger(memberId) ||
      memberId <= 0 ||
      typeof nickname !== "string"
    )
      throw Error("회원 확인 실패");
    const account = { memberId, nickname };
    if (
      !this.accounts.prepare("SELECT 1 FROM accounts WHERE id=?").get(memberId)
    ) {
      const sealed = this.secrets.encryptString(
        crypto.randomBytes(32).toString("base64"),
      );
      this.accounts
        .prepare("INSERT INTO accounts VALUES (?,?)")
        .run(memberId, sealed);
    }
    try {
      this.openAccount(account);
      this.accounts
        .prepare("INSERT OR REPLACE INTO login VALUES (1,?)")
        .run(this.secrets.encryptString(JSON.stringify(account)));
    } catch (error) {
      this.forget();
      throw error;
    }
    return account;
  }

  forget() {
    this.key?.fill(0);
    this.key = this.account = this.folder = this.generation = null;
  }
  logout() {
    if (this.active) throw Error("녹음을 먼저 저장해 주세요.");
    this.accounts.exec("DELETE FROM login");
    this.forget();
  }
  file(id) {
    if (!this.account || !Number.isSafeInteger(id) || id <= 0)
      throw Error("접근할 수 없는 기록");
    return path.join(this.folder, id + ".knot");
  }
  begin() {
    if (this.active) throw Error("녹음 중");
    const id = crypto.randomInt(1, 2 ** 46);
    const file = this.file(id);
    const temp = fs.mkdtempSync(path.join(this.folder, ".create-"));
    let db;
    try {
      db = openFile(path.join(temp, "record"));
      db.exec(`CREATE TABLE recording(created INTEGER NOT NULL, finished INTEGER NOT NULL);
        CREATE TABLE pcm(seq INTEGER PRIMARY KEY, start INTEGER NOT NULL, size INTEGER NOT NULL, nonce BLOB NOT NULL, tag BLOB NOT NULL, audio BLOB NOT NULL);
        CREATE INDEX by_start ON pcm(start);`);
      db.prepare("INSERT INTO recording VALUES (?,0)").run(Date.now());
      db.close();
      db = null;
      fs.linkSync(path.join(temp, "record"), file);
      this.active = { id, db: openFile(file) };
      return id;
    } finally {
      db?.close();
      fs.rmSync(temp, { recursive: true, force: true });
    }
  }
  append(id, seq, block) {
    if (
      this.active?.id !== id ||
      !Number.isSafeInteger(seq) ||
      seq < 0 ||
      !(block instanceof Uint8Array) ||
      !block.length ||
      block.length > 160000 ||
      block.length % 2
    )
      throw Error("잘못된 오디오 조각");
    const db = this.active.db;
    const last = db
      .prepare(
        "SELECT seq,start+size AS end FROM pcm ORDER BY seq DESC LIMIT 1",
      )
      .get();
    if (last && seq <= last.seq) return; // acknowledgement lost; already committed
    if (seq !== (last?.seq ?? -1) + 1) throw Error("오디오 순서 오류");
    const offset = last?.end ?? 0;
    if (offset + block.length > 0xffffffff - 36) throw Error("WAV 크기 한도");
    const nonce = crypto.randomBytes(12);
    const cipher = crypto.createCipheriv("aes-256-gcm", this.key, nonce);
    const audio = Buffer.concat([cipher.update(block), cipher.final()]);
    db.prepare("INSERT INTO pcm VALUES (?,?,?,?,?,?)").run(
      seq,
      offset,
      block.length,
      nonce,
      cipher.getAuthTag(),
      audio,
    );
  }
  finish(id, count) {
    if (this.active?.id !== id) throw Error("현재 녹음이 아닙니다.");
    const db = this.active.db;
    if (db.prepare("SELECT count(*) AS n FROM pcm").get().n !== count)
      throw Error("저장 대기 중");
    db.exec("UPDATE recording SET finished=1");
    this.interrupt();
  }
  interrupt() {
    this.active?.db.close();
    this.active = null;
  }
  list() {
    if (!this.account) return [];
    return fs
      .readdirSync(this.folder)
      .filter((name) => /^\d+\.knot$/.test(name))
      .map((name) => {
        const id = Number(name.split(".")[0]);
        const db = openFile(this.file(id));
        try {
          const row = db
            .prepare("SELECT created,finished FROM recording")
            .get();
          const { bytes } = db
            .prepare("SELECT coalesce(max(start+size),0) AS bytes FROM pcm")
            .get();
          return {
            id,
            created: row.created,
            recovered: !row.finished,
            bytes,
            src: "knot://app/audio/" + this.generation + "/" + id,
          };
        } finally {
          db.close();
        }
      })
      .sort((a, b) => b.created - a.created);
  }
  remove(id) {
    if (this.active) throw Error("녹음을 먼저 저장해 주세요.");
    const file = this.file(id);
    // Opening after an unclean exit rolls back any pending SQLite journal.
    if (!fs.existsSync(file)) throw Error("접근할 수 없는 기록");
    const db = openFile(file);
    try {
      db.exec("SELECT finished FROM recording");
    } finally {
      db.close();
    }
    fs.unlinkSync(file);
  }
  playback(generation, id, range) {
    if (
      !this.account ||
      generation !== this.generation ||
      this.active?.id === id
    )
      return new Response(null, { status: 404 });
    const file = this.file(id);
    if (!fs.existsSync(file)) return new Response(null, { status: 404 });
    const db = openFile(file);
    const size = db
      .prepare("SELECT coalesce(max(start+size),0) AS n FROM pcm")
      .get().n;
    const total = size + 44;
    const match = /^bytes=(\d+)-(\d*)$/.exec(range ?? "");
    const start = match ? Number(match[1]) : 0;
    const end = match?.[2] ? Math.min(Number(match[2]), total - 1) : total - 1;
    if ((range && !match) || start > end) {
      db.close();
      return new Response(null, {
        status: 416,
        headers: { "Content-Range": "bytes */" + total },
      });
    }
    const self = this;
    function* read() {
      try {
        if (start < 44)
          yield wavHeader(size).subarray(start, Math.min(44, end + 1));
        for (const row of db
          .prepare(
            "SELECT * FROM pcm WHERE start+size>? AND start<=? ORDER BY seq",
          )
          .iterate(start - 44, end - 44)) {
          if (generation !== self.generation || !fs.existsSync(file)) break;
          const decrypt = crypto.createDecipheriv(
            "aes-256-gcm",
            self.key,
            row.nonce,
          );
          decrypt.setAuthTag(row.tag);
          const bytes = Buffer.concat([
            decrypt.update(row.audio),
            decrypt.final(),
          ]);
          yield bytes.subarray(
            Math.max(0, start - 44 - row.start),
            Math.min(row.size, end - 43 - row.start),
          );
        }
      } finally {
        db.close();
      }
    }
    const headers = {
      "Content-Type": "audio/wav",
      "Cache-Control": "no-store",
      "Accept-Ranges": "bytes",
      "Content-Length": String(end - start + 1),
    };
    if (range) headers["Content-Range"] = `bytes ${start}-${end}/${total}`;
    return new Response(Readable.toWeb(Readable.from(read())), {
      status: range ? 206 : 200,
      headers,
    });
  }
}
module.exports = { LocalLibrary };
