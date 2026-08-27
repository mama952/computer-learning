/* ============================================================
   计算机知识库 · 本地运行服务（读取本机工具链）
   ------------------------------------------------------------
   用法：
     1. 先安装 Node.js（官网 https://nodejs.org ，LTS 版即可）
     2. 在本目录执行：node run-server.js [端口，默认 8000]
     3. 浏览器打开 http://localhost:8000
   功能：
     · 静态托管整个网站（带 /api 接口的本地版）
     · GET  /api/env   返回本机已检测到的编译器/解释器
     · POST /api/run   在本机真实编译并运行代码，返回结果
   效果：
     C / C++ / Go / Rust / Java / Shell 等语言
     在静态托管时只能看不能跑；启动本服务后即可联动本机编译器真实运行，
     页面右上角「环境」弹窗里也能看到检测到的工具链。
   安全提示：默认只监听 127.0.0.1 本机回环，请勿修改为公网监听。
   ============================================================ */
"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");
const os = require("os");
const { execFile } = require("child_process");

const ROOT = __dirname;
const PORT = parseInt(process.argv[2] || "8000", 10);
const HOST = "127.0.0.1";
const RUN_TIMEOUT = 15000;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

/* ---------- 工具链检测 ---------- */
function which(cmd) {
  return new Promise((resolve) => {
    const finder = os.platform() === "win32" ? "where" : "which";
    execFile(finder, [cmd], { timeout: 3000 }, (err) => resolve(err ? null : cmd));
  });
}

/* 键名与页面 app.js 的 TOOL_NAMES / 环境弹窗保持一致 */
const TOOLCHAIN = [
  { key: "gcc", cmd: "gcc", label: "C (GCC)" },
  { key: "gpp", cmd: "g++", label: "C++ (G++)" },
  { key: "python", cmd: "python", label: "Python" },
  { key: "node", cmd: "node", label: "Node.js" },
  { key: "go", cmd: "go", label: "Go" },
  { key: "rustc", cmd: "rustc", label: "Rust" },
  { key: "bash", cmd: "bash", label: "Bash" },
  { key: "sh", cmd: "sh", label: "Shell (sh)" },
  { key: "sqlite3", cmd: "sqlite3", label: "SQLite" },
  { key: "java", cmd: "java", label: "Java" },
  { key: "javac", cmd: "javac", label: "Java (javac)" },
];

async function detectTools() {
  const tools = {};
  const rows = [];
  await Promise.all(
    TOOLCHAIN.map(async (t) => {
      if (await which(t.cmd)) {
        tools[t.key] = true;
        rows.push("  ✓ " + t.label + "  (" + t.cmd + ")");
      }
    })
  );
  return { tools, rows };
}

/* ---------- 执行进程 ---------- */
function run(cmd, args, opts) {
  return new Promise((resolve) => {
    execFile(cmd, args, { timeout: RUN_TIMEOUT, maxBuffer: 8 * 1024 * 1024, ...opts }, (err, stdout, stderr) => {
      resolve({
        exitCode: err ? (typeof err.code === "number" ? err.code : 1) : 0,
        stdout: String(stdout || ""),
        stderr: String(stderr || ""),
      });
    });
  });
}

/* ---------- 编译并运行 ---------- */
const BIN = path.join(os.tmpdir(), "cs-run-bin" + (os.platform() === "win32" ? ".exe" : ""));

async function compileAndRun(lang, code) {
  const t0 = Date.now();
  const finish = (res) => ({ exitCode: res.exitCode, stdout: res.stdout, stderr: res.stderr, duration: Date.now() - t0 });
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "cs-run-"));
  const bin = path.join(tmpDir, os.platform() === "win32" ? "main.exe" : "main");
  try {
    switch (lang) {
      case "c": {
        const src = path.join(tmpDir, "main.c");
        fs.writeFileSync(src, code);
        const c = await run("gcc", [src, "-o", bin]);
        if (c.exitCode !== 0) return finish(c);
        return finish(await run(bin));
      }
      case "cpp":
      case "c++": {
        const src = path.join(tmpDir, "main.cpp");
        fs.writeFileSync(src, code);
        const c = await run("g++", [src, "-o", bin]);
        if (c.exitCode !== 0) return finish(c);
        return finish(await run(bin));
      }
      case "go": {
        const src = path.join(tmpDir, "main.go");
        fs.writeFileSync(src, code);
        return finish(await run("go", ["run", src]));
      }
      case "rust": {
        const src = path.join(tmpDir, "main.rs");
        fs.writeFileSync(src, code);
        const c = await run("rustc", [src, "-o", bin]);
        if (c.exitCode !== 0) return finish(c);
        return finish(await run(bin));
      }
      case "shell":
      case "bash":
      case "sh": {
        const src = path.join(tmpDir, "main.sh");
        fs.writeFileSync(src, code);
        const sh = lang === "bash" ? "bash" : "sh";
        return finish(await run(sh, [src]));
      }
      case "java": {
        const m = code.match(/public\s+class\s+(\w+)/);
        const cls = m ? m[1] : "Main";
        const src = path.join(tmpDir, cls + ".java");
        fs.writeFileSync(src, code);
        const c = await run("javac", [src]);
        if (c.exitCode !== 0) return finish(c);
        return finish(await run("java", ["-cp", tmpDir, cls]));
      }
      case "python":
      case "py": {
        const src = path.join(tmpDir, "main.py");
        fs.writeFileSync(src, code);
        return finish(await run("python", [src]));
      }
      case "javascript":
      case "js":
      case "typescript":
      case "node": {
        const src = path.join(tmpDir, "main.js");
        fs.writeFileSync(src, code);
        return finish(await run("node", [src]));
      }
      case "sql": {
        const src = path.join(tmpDir, "main.sql");
        fs.writeFileSync(src, code);
        return finish(await run("sqlite3", [":memory:", "-batch", src]));
      }
      default:
        return finish({ exitCode: 1, stdout: "", stderr: "暂不支持的语言：" + lang });
    }
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
}

/* ---------- HTTP 服务 ---------- */
const server = http.createServer((req, res) => {
  const raw = req.url || "/";
  const url = raw.split("?")[0];
  const method = req.method || "GET";

  if (method === "GET" && url === "/api/env") {
    detectTools().then(({ tools }) => {
      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ ok: true, tools }));
    });
    return;
  }

  if (method === "POST" && url === "/api/run") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1024 * 1024) req.destroy();
    });
    req.on("end", async () => {
      let input;
      try {
        input = JSON.parse(body || "{}");
      } catch (e) {
        res.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
        res.end(JSON.stringify({ exitCode: 1, stdout: "", stderr: "请求体不是合法 JSON" }));
        return;
      }
      const lang = String(input.lang || "").toLowerCase();
      const code = String(input.code || "");
      try {
        const result = await compileAndRun(lang, code);
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
        res.end(JSON.stringify(result));
      } catch (e) {
        res.writeHead(500, { "Content-Type": "application/json; charset=utf-8" });
        res.end(JSON.stringify({ exitCode: 1, stdout: "", stderr: String((e && e.message) || e) }));
      }
    });
    return;
  }

  /* 静态文件（防目录穿越） */
  const safePath = path.resolve(ROOT, "." + (url === "/" ? "/index.html" : url));
  if (!safePath.startsWith(ROOT + path.sep) && safePath !== ROOT) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  fs.stat(safePath, (err, st) => {
    if (err || !st.isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("404 Not Found");
      return;
    }
    res.writeHead(200, { "Content-Type": MIME[path.extname(safePath).toLowerCase()] || "application/octet-stream" });
    fs.createReadStream(safePath).pipe(res);
  });
});

/* ---------- 启动 ---------- */
(async () => {
  const { rows } = await detectTools();
  console.log("==============================================");
  console.log("  计算机知识库 · 本地运行服务");
  console.log("  地址：http://" + HOST + ":" + PORT);
  console.log("----------------------------------------------");
  console.log("  检测到的本机工具链：");
  if (rows.length) rows.forEach((r) => console.log(r));
  else console.log("  （未检测到任何工具，可先安装所需语言的编译器）");
  console.log("==============================================");
  server.listen(PORT, HOST);
})();
