// Only used by Playwright. OAuth and member lookup are the only remote services.
import https from "node:https";
import fs from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";
const dir = path.resolve("test-results-auth");
fs.mkdirSync(dir, { recursive: true, mode: 0o700 });
const key = path.join(dir, "key.pem"),
  cert = path.join(dir, "cert.pem");
execFileSync(
  "openssl",
  [
    "req",
    "-x509",
    "-newkey",
    "rsa:2048",
    "-nodes",
    "-subj",
    "/CN=localhost",
    "-days",
    "1",
    "-keyout",
    key,
    "-out",
    cert,
  ],
  { stdio: "ignore" },
);
let unexpected = [];
const server = https.createServer(
  { key: fs.readFileSync(key), cert: fs.readFileSync(cert) },
  (req, res) => {
    const url = new URL(req.url, "https://localhost");
    res.setHeader("Cache-Control", "no-store");
    if (url.pathname === "/login") {
      res.setHeader("Content-Type", "text/html");
      return res.end(
        '<a href="/auth/a">Account A</a><a href="/auth/b">Account B</a>',
      );
    }
    if (/^\/auth\/[ab]$/.test(url.pathname)) {
      res.writeHead(302, {
        "Set-Cookie":
          "member=" + url.pathname.at(-1) + "; HttpOnly; Secure; Path=/",
        Location: "/",
      });
      return res.end();
    }
    if (url.pathname === "/api/v1/auth/me") {
      const account = req.headers.cookie;
      if (!/^member=[ab]$/.test(account ?? "")) {
        res.writeHead(401);
        return res.end();
      }
      res.setHeader("Content-Type", "application/json");
      return res.end(
        JSON.stringify({
          memberId: account === "member=a" ? 1 : 2,
          nickname: account === "member=a" ? "A" : "B",
        }),
      );
    }
    if (url.pathname === "/requests") {
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify(unexpected));
    }
    if (url.pathname.startsWith("/api/")) unexpected.push(req.url);
    res.end("Knot auth fixture");
  },
);
server.listen(Number(process.env.KNOT_TEST_PORT || 3182), "localhost");
