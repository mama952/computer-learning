/* ============================================================
   计算机知识库 · 应用逻辑
   ============================================================ */
(function () {
  "use strict";

  /* ---------- 数据汇总 ---------- */
  /* 合并语言完整课程：data/*-full.js 会把课程 push 到 window.LANGUAGE_EXTRA，
     这里按 id 覆盖 languages.js 里的同名子项，或追加为新子项。 */
  (function mergeLangExtra() {
    const extra = window.LANGUAGE_EXTRA || [];
    if (!extra.length) return;
    const langCat = window.LANGUAGE_DATA;
    if (!langCat) return;
    extra.forEach((sub) => {
      const i = (langCat.children || []).findIndex((s) => s.id === sub.id);
      if (i >= 0) langCat.children[i] = sub;
      else langCat.children.push(sub);
    });
  })();

  const CATALOG = [
    window.LANGUAGE_DATA,
    window.CS_FUNDAMENTALS,
    window.CS_ADVANCED,
    window.TOOLCHAIN,
    window.ERRORS_DATA,
    window.COOKBOOK_DATA,
    window.TOOLS_DATA,
  ].filter(Boolean);

  /* 扁平索引 */
  const flatLessons = []; // { category, subject, lesson, path }
  const subjectByLesson = new Map();

  CATALOG.forEach((cat) => {
    (cat.children || []).forEach((sub) => {
      (sub.lessons || []).forEach((lesson) => {
        flatLessons.push({
          cat,
          catId: cat.id,
          subject: sub,
          subjectId: sub.id,
          lesson,
          lessonId: lesson.id,
        });
      });
    });
  });

  /* ---------- CodeMirror mode 映射 ---------- */
  const MODE_MAP = {
    python: "python",
    py: "python",
    javascript: "javascript",
    js: "javascript",
    typescript: "javascript",
    node: "javascript",
    html: "htmlmixed",
    htmlcss: "htmlmixed",
    css: "css",
    java: "clike",
    c: "clike",
    cpp: "clike",
    "c++": "clike",
    csharp: "clike",
    "c#": "clike",
    go: "clike",
    rust: "clike",
    sql: "sql",
    bash: "shell",
    shell: "shell",
    sh: "shell",
    markdown: "markdown",
    yaml: "yaml",
    sass: "sass",
    php: "clike",
    swift: "clike",
    kotlin: "clike",
    dart: "clike",
    scala: "clike",
    julia: "clike",
    gdscript: "clike",
    ruby: "clike",
    rscript: "r",
    r: "r",
    groovy: "clike",
    lua: "lua",
    haskell: "haskell",
    lisp: "commonlisp",
    clojure: "clojure",
    powershell: "shell",
  };

  function cmMode(lang) {
    return MODE_MAP[(lang || "text").toLowerCase()] || "javascript";
  }

  /* 可运行语言：
     browser = 浏览器 iframe 直接运行
     pyodide = 浏览器内通过 Pyodide(WASM) 运行 Python
     sqljs   = 浏览器内通过 sql.js(WASM) 运行 SQL
     local   = 需本地编译器（有 run-server.js 时可用，可读取本机工具链） */
  const RUNNABLE = new Set(["javascript", "js", "typescript", "node", "html", "htmlcss", "css"]);
  const PYODIDE_LANGS = new Set(["python", "py"]);
  const SQLJS_LANGS = new Set(["sql"]);
  const LOCAL_LANGS = new Set(["c", "cpp", "c++", "go", "rust", "shell", "bash", "sh", "java"]);

  /* 本地运行服务状态（run-server.js，仅当通过本地服务器打开时可用） */
  const LOCAL = { available: false, env: null };

  /* ---------- DOM ---------- */
  const $ = (sel) => document.querySelector(sel);
  const sidebar = $("#sidebar");
  const contentInner = $("#contentInner");
  const contentEl = $("#content");
  const searchInput = $("#searchInput");
  const searchResults = $("#searchResults");
  const editorPanel = $("#editorPanel");
  const editorTitle = $("#editorTitle");
  const tplSelect = $("#tplSelect");
  const runBtn = $("#runBtn");
  const runBtnText = $("#runBtnText");
  const outBody = $("#outBody");
  const outDot = $("#outDot");

  /* 新增 UI 元素 */
  const ehLang = $("#ehLang");
  const statusLang = $("#statusLang");
  const statusPos = $("#statusPos");
  const statusHint = $("#statusHint");
  const statusMode = $("#statusMode");
  const toolStatus = $("#toolStatus");
  const envModal = $("#envModal");
  const envBody = $("#envBody");
  const toast = $("#toast");

  /* ---------- 轻提示 ---------- */
  let toastTimer = null;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.remove("hidden");
    requestAnimationFrame(() => toast.classList.add("show"));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.classList.add("hidden"), 300);
    }, 1800);
  }

  /* ---------- 编辑器 ---------- */
  let cm = null;
  let currentLang = "javascript";
  let currentTemplates = [];

  function ensureEditor() {
    if (cm) return;
    cm = CodeMirror.fromTextArea($("#codeEditor"), {
      lineNumbers: true,
      mode: "javascript",
      theme: "eclipse",
      indentUnit: 2,
      tabSize: 2,
      lineWrapping: false,
      autoCloseBrackets: true,
      matchBrackets: true,
      styleActiveLine: true,
      extraKeys: {
        "Ctrl-Enter": runCode,
        "Cmd-Enter": runCode,
        "Ctrl-S": () => {
          saveDraft(true);
        },
      },
    });
    cm.on("cursorActivity", () => {
      const cur = cm.getCursor();
      statusPos.textContent = (cur.line + 1) + ":" + (cur.ch + 1);
    });
    cm.on("change", () => scheduleDraftSave());
  }

  function setEditorCode(code, lang) {
    ensureEditor();
    currentLang = lang || "javascript";
    cm.setValue(code || "");
    cm.setOption("mode", cmMode(currentLang));
    cm.refresh();
    updateEditorStatus();
  }

  /* 更新语言 / 运行方式状态指示 */
  function runModeOf(lang) {
    const l = (lang || "").toLowerCase();
    if (RUNNABLE.has(l)) return "browser";
    if (PYODIDE_LANGS.has(l)) return "pyodide";
    if (SQLJS_LANGS.has(l)) return "sqljs";
    if (LOCAL_LANGS.has(l)) return "local";
    return "none";
  }

  function updateEditorStatus() {
    const l = (currentLang || "javascript").toLowerCase();
    const disp = l === "c++" ? "C++" : l;
    ehLang.textContent = disp;
    statusLang.textContent = disp;
    const m = runModeOf(l);
    if (m === "browser") {
      statusMode.textContent = "在线运行";
      statusMode.className = "es-mode";
      statusHint.textContent = "Ctrl/⌘+Enter 运行 · 自动保存";
    } else if (m === "pyodide" || m === "sqljs") {
      statusMode.textContent = "WASM 在线";
      statusMode.className = "es-mode";
      statusHint.textContent = "浏览器内引擎（首次运行需加载）";
    } else if (m === "local") {
      if (LOCAL.available) {
        statusMode.textContent = "本地编译";
        statusMode.className = "es-mode local";
        statusHint.textContent = "已连接本地 run-server 工具链";
      } else {
        statusMode.textContent = "需本地";
        statusMode.className = "es-mode";
        statusHint.textContent = "需本机编译器，可点「环境」查看方案";
      }
    } else {
      statusMode.textContent = "展示";
      statusMode.className = "es-mode";
      statusHint.textContent = "演示代码，可复制到本地运行";
    }
  }

  /* ---------- 模板 ---------- */
  let templateOptions = [];

  function loadTemplates(lang, templates) {
    currentTemplates = templates || [];
    const runnable = runModeOf(lang) !== "none";
    const placeholder = runnable ? "空白（从零开始）" : "当前为演示代码，不含可编辑模板";
    templateOptions = [{ name: placeholder, code: null }, ...currentTemplates];

    tplSelect.innerHTML = "";
    templateOptions.forEach((t, i) => {
      const opt = document.createElement("option");
      opt.value = String(i);
      opt.textContent = t.name;
      tplSelect.appendChild(opt);
    });
    tplSelect.value = "0";
  }

  tplSelect.addEventListener("change", () => {
    const i = parseInt(tplSelect.value, 10);
    const tpl = templateOptions[i];
    if (tpl && tpl.code != null) setEditorCode(tpl.code, currentLang);
  });

  /* ---------- 代码高亮（静态展示用） ---------- */
  function escapeHtml(s) {
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  const KEYWORDS = new Set(
    (
      "if else elif for while do return break continue switch case default " +
      "function def class import from export const let var new try catch finally throw " +
      "int float double char void bool boolean string true false null nil None " +
      "public private protected static final void class interface extends implements " +
      "def lambda async await yield enum struct type fn pub mut self this super " +
      "and or not in is pass del global nonlocal with as raise except " +
      "package namespace using virtual override abstract sealed readonly get set " +
      "elif then fi echo done select until esac"
    ).split(/\s+/)
  );

  function highlight(code, lang) {
    let out = escapeHtml(code);
    // 注释
    const commentRe = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|#[^\n]*|--[^\n]*|<!--[\s\S]*?-->)/g;
    out = out.replace(commentRe, '<span class="tok-com">$1</span>');
    // 字符串
    out = out.replace(
      /(&quot;|")([^"\n]*)(&quot;|")|(&#39;|')([^'\n]*)(&#39;|')|`([^`]*)`/g,
      '<span class="tok-str">$&</span>'
    );
    // 数字
    out = out.replace(/\b(\d+\.?\d*)\b/g, '<span class="tok-num">$1</span>');
    // 关键词
    KEYWORDS.forEach((kw) => {
      const re = new RegExp("\\b(" + kw + ")\\b", "g");
      out = out.replace(re, '<span class="tok-kw">$1</span>');
    });
    return out;
  }

  /* ---------- 代码运行器 ---------- */
  let hadError = false;

  function clearOutput(emptyText) {
    hadError = false;
    outDot.className = "dot";
    outBody.className = "out-body empty";
    outBody.textContent = emptyText || "点击「运行」查看输出。";
  }

  function appendOutput(text, isErr) {
    if (isErr) hadError = true;
    if (outBody.classList.contains("empty")) {
      outBody.classList.remove("empty");
      outBody.innerHTML = "";
    }
    const line = document.createElement("div");
    if (isErr) line.className = "err-line";
    line.textContent = text;
    outBody.appendChild(line);
    outBody.scrollTop = outBody.scrollHeight;
  }

  function runCode() {
    ensureEditor();
    const code = cm.getValue();
    const lang = (currentLang || "javascript").toLowerCase();

    if (!code.trim()) {
      clearOutput("代码为空，先在编辑器中输入或选择模板吧。");
      return;
    }

    const mode = runModeOf(lang);
    if (mode === "browser") {
      runInBrowser(code, lang);
    } else if (mode === "pyodide") {
      runPythonWasm(code);
    } else if (mode === "sqljs") {
      runSQLWasm(code);
    } else if (mode === "local" && LOCAL.available) {
      runLocally(code, lang);
    } else {
      showNotRunnable(lang, mode);
    }
  }

  function setRunning(on) {
    runBtn.classList.toggle("running", on);
    runBtnText.textContent = on ? "运行中…" : "运行";
  }

  function finishRun() {
    setRunning(false);
    outDot.className = hadError ? "dot err" : "dot ok";
  }

  function runInBrowser(code, lang) {
    setRunning(true);
    clearOutput();

    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.setAttribute("sandbox", "allow-scripts allow-modals");
    document.body.appendChild(iframe);

    let outputCount = 0;

    const onMsg = (e) => {
      if (e.data && e.data.__cs === "output") {
        if (e.data.type === "log") {
          appendOutput(e.data.text, false);
          outputCount++;
        } else if (e.data.type === "error") {
          appendOutput(e.data.text, true);
          outputCount++;
        } else if (e.data.type === "done") {
          if (outputCount === 0) appendOutput("执行完成（无输出）", false);
        }
      }
    };
    window.addEventListener("message", onMsg);

    const finish = () => {
      clearTimeout(timer);
      window.removeEventListener("message", onMsg);
      iframe.remove();
      finishRun();
    };

    const timer = setTimeout(() => {
      appendOutput("执行超时（可能死循环），已终止。", true);
      finish();
    }, 5000);

    iframe.onload = () => {
      setTimeout(() => finish(), 600);
    };

    iframe.srcdoc = buildRunDoc(code, lang);
  }

  function showNotRunnable(lang, mode) {
    clearOutput();
    appendOutput("当前语言「" + currentLang + "」无法在纯网页环境直接运行。", false);
    if (LOCAL_LANGS.has(lang)) {
      appendOutput("方案一：在本机启动本地运行服务（run-server.js），即可读取本机编译器联动运行。", false);
      appendOutput("方案二：手机/平板可安装安卓编程环境：Termux、Dcoder、AIDE、Spck 等（见「工具下载推荐 → 安卓学习工具」）。", false);
      appendOutput("方案三：电脑上安装官方编译器（见对应语言第 1 章）。", false);
    } else {
      appendOutput("请将代码复制到本地对应语言的官方环境中运行。", false);
    }
    outDot.className = "dot err";
  }

  /* ---------- 动态加载脚本 ---------- */
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector('script[data-src="' + src + '"]')) {
        resolve();
        return;
      }
      const s = document.createElement("script");
      s.setAttribute("data-src", src);
      s.src = src;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error("加载失败: " + src));
      document.head.appendChild(s);
    });
  }

  /* ---------- Python 在线运行（Pyodide / WASM） ---------- */
  let pyodidePromise = null;
  const PYODIDE_BASE = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/";

  function getPyodide() {
    if (!pyodidePromise) {
      pyodidePromise = (async () => {
        await loadScript(PYODIDE_BASE + "pyodide.js");
        const py = await window.loadPyodide({ indexURL: PYODIDE_BASE });
        py.setStdout({ batched: (s) => appendOutput(String(s)) });
        py.setStderr({ batched: (s) => appendOutput(String(s), true) });
        return py;
      })();
    }
    return pyodidePromise;
  }

  async function runPythonWasm(code) {
    setRunning(true);
    clearOutput();
    appendOutput("正在加载 Python 运行环境（首次约需 10-30 秒，之后秒开）…", false);
    try {
      const py = await getPyodide();
      clearOutput();
      const t0 = performance.now();
      await py.runPythonAsync(code);
      appendOutput("执行完成（耗时 " + ((performance.now() - t0) / 1000).toFixed(2) + " 秒）", false);
    } catch (err) {
      appendOutput("Python 运行出错：" + (err && err.message ? err.message : String(err)), true);
    }
    finishRun();
  }

  /* ---------- SQL 在线运行（sql.js / WASM） ---------- */
  let sqljsPromise = null;
  const SQLJS_BASE = "https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.12.0/";

  function getSQLJS() {
    if (!sqljsPromise) {
      sqljsPromise = (async () => {
        await loadScript(SQLJS_BASE + "sql-wasm.js");
        const SQL = await window.initSqlJs({ locateFile: (f) => SQLJS_BASE + f });
        return SQL;
      })();
    }
    return sqljsPromise;
  }

  async function runSQLWasm(code) {
    setRunning(true);
    clearOutput();
    appendOutput("正在加载 SQL 引擎（首次约需几秒）…", false);
    try {
      const SQL = await getSQLJS();
      clearOutput();
      const db = new SQL.Database();
      const t0 = performance.now();
      try {
        const results = db.exec(code);
        if (results.length === 0) {
          appendOutput("执行成功，影响行数：" + db.getRowsModified(), false);
        } else {
          results.forEach((r) => {
            appendOutput("-- 结果集：列 = [" + r.columns.join(", ") + "]", false);
            r.values.forEach((row) => appendOutput(row.join(" | "), false));
            appendOutput("（共 " + r.values.length + " 行）", false);
          });
        }
        appendOutput("执行完成（耗时 " + ((performance.now() - t0) / 1000).toFixed(2) + " 秒）", false);
      } finally {
        db.close();
      }
    } catch (err) {
      appendOutput("SQL 执行出错：" + (err && err.message ? err.message : String(err)), true);
    }
    finishRun();
  }

  /* ---------- 本地运行（run-server.js） ---------- */
  async function runLocally(code, lang) {
    setRunning(true);
    clearOutput();
    appendOutput("正在调用本地编译器「" + lang + "」…", false);
    try {
      const res = await fetch("/api/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lang: lang, code: code }),
      });
      const data = await res.json();
      clearOutput();
      if (data.stdout) appendOutput(data.stdout, false);
      if (data.stderr) appendOutput(data.stderr, true);
      if (data.exitCode !== 0) {
        appendOutput("退出码：" + data.exitCode, data.exitCode !== 0);
      } else {
        appendOutput("执行完成（耗时 " + (data.duration || 0) + " ms）", false);
      }
    } catch (err) {
      appendOutput("本地运行失败：" + (err && err.message ? err.message : String(err)), true);
      appendOutput("请确认已在本机启动 run-server.js（node run-server.js）。", false);
    }
    finishRun();
  }

  function buildRunDoc(code, lang) {
    if (lang === "html" || lang === "htmlcss") {
      // 整个代码作为 HTML 文档
      return (
        "<!DOCTYPE html><html><head><meta charset='utf-8'></head><body>" +
        code +
        "</body></html>"
      );
    }

    if (lang === "css") {
      return `<!DOCTYPE html><html><head><meta charset='utf-8'>
<style>${code}</style></head>
<body>
<div style="padding:20px;font-family:sans-serif">
  <h2>CSS 预览</h2>
  <button class="demo-btn">示例按钮</button>
  <div class="demo-box">示例盒子</div>
  <input class="demo-input" placeholder="示例输入框">
</div>
<script>
window.onerror = (m)=>parent.postMessage({__cs:'output',type:'error',text:String(m)},'*');
window.onmessage=(e)=>{ if(e.data&&e.data.__cs==='run'){ document.body.style.cssText='background:#0f172a'; } };
</script></body></html>`;
    }

    // js / typescript / node
    return `<!DOCTYPE html><html><head><meta charset='utf-8'></head><body>
<script>
(function(){
  var __buf = [];
  function send(t, s){ parent.postMessage({__cs:'output', type:t, text:String(s)}, '*'); }
  var realLog = console.log;
  console.log = function(){ var a=[].slice.call(arguments); send('log', a.map(fmt).join(' ')); };
  console.warn = function(){ var a=[].slice.call(arguments); send('log', '[warn] '+a.map(fmt).join(' ')); };
  console.error = console.warn;
  console.info = console.log;
  function fmt(v){
    if (typeof v === 'object' && v !== null){
      try { return JSON.stringify(v); } catch(e){ return String(v); }
    }
    return v;
  }
  window.onerror = function(m){ send('error', m); };
  try {
    ${code}
    setTimeout(function(){ send('done', ''); }, 100);
  } catch(err) {
    send('error', err && err.stack ? err.stack.split('\\n')[0] : String(err));
  }
})();
</script></body></html>`;
  }

  runBtn.addEventListener("click", runCode);

  /* ---------- 编辑器增强：工具条 / 自动保存 / 主题 / 字号 ---------- */
  let editorFontSize = parseInt(localStorage.getItem("cs_font") || "", 10) || 13.5;
  let editorTheme = localStorage.getItem("cs_theme") || "eclipse";

  function applyEditorTheme() {
    if (!cm) return;
    cm.setOption("theme", editorTheme);
    document.body.classList.toggle("editor-dark", editorTheme !== "eclipse");
  }

  function applyEditorFont() {
    if (!cm) return;
    cm.getWrapperElement().style.fontSize = editorFontSize + "px";
  }

  function syncToolStatus(text) {
    toolStatus.textContent = text || "";
  }

  let draftTimer = null;
  function scheduleDraftSave() {
    clearTimeout(draftTimer);
    draftTimer = setTimeout(() => saveDraft(false), 800);
  }
  function saveDraft(silent) {
    if (!cm) return;
    try {
      localStorage.setItem("cs_draft_" + (currentLang || "javascript"), cm.getValue());
      if (!silent) {
        syncToolStatus("已自动保存 " + new Date().toLocaleTimeString("zh-CN", { hour12: false }));
      } else {
        showToast("草稿已保存");
      }
    } catch (e) {}
  }

  $("#copyCodeBtn").addEventListener("click", () => {
    ensureEditor();
    copyText(cm.getValue());
    showToast("代码已复制");
  });

  $("#downloadBtn").addEventListener("click", () => {
    ensureEditor();
    const l = (currentLang || "javascript").toLowerCase();
    const ext = { python: "py", py: "py", javascript: "js", js: "js", html: "html", htmlcss: "html", css: "css", c: "c", cpp: "cpp", "c++": "cpp", go: "go", rust: "rs", sql: "sql", shell: "sh", bash: "sh", sh: "sh", java: "java" }[l] || "txt";
    const blob = new Blob([cm.getValue()], { type: "text/plain;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "code." + ext;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      URL.revokeObjectURL(a.href);
      a.remove();
    }, 100);
    showToast("已下载 code." + ext);
  });

  $("#resetBtn").addEventListener("click", () => {
    ensureEditor();
    const tpl = templateOptions.find((t) => t.code != null);
    if (tpl && tpl.code != null) {
      setEditorCode(tpl.code, currentLang);
      showToast("已恢复模板");
    } else {
      setEditorCode("", currentLang);
      showToast("已清空（无模板）");
    }
  });

  const clearOut = () => clearOutput("输出已清空。");
  $("#clearOutBtn").addEventListener("click", clearOut);
  $("#outClearBtn").addEventListener("click", clearOut);

  $("#fontDec").addEventListener("click", () => {
    editorFontSize = Math.max(10, editorFontSize - 1);
    localStorage.setItem("cs_font", String(editorFontSize));
    applyEditorFont();
  });
  $("#fontInc").addEventListener("click", () => {
    editorFontSize = Math.min(24, editorFontSize + 1);
    localStorage.setItem("cs_font", String(editorFontSize));
    applyEditorFont();
  });

  $("#themeBtn").addEventListener("click", () => {
    editorTheme = editorTheme === "eclipse" ? "dracula" : "eclipse";
    localStorage.setItem("cs_theme", editorTheme);
    applyEditorTheme();
    showToast(editorTheme === "dracula" ? "已切换深色主题" : "已切换浅色主题");
  });

  /* ---------- 环境检测 ---------- */
  function detectOS() {
    const ua = navigator.userAgent;
    if (/android/i.test(ua)) return "Android";
    if (/iPad|iPhone|iPod/i.test(ua)) return "iOS";
    if (/Windows/i.test(ua)) return "Windows";
    if (/Mac OS X/i.test(ua)) return "macOS";
    if (/Linux/i.test(ua)) return "Linux";
    return "未知";
  }
  function detectBrowser() {
    const ua = navigator.userAgent;
    if (/Edg\//.test(ua)) return "Edge";
    if (/Chrome\//.test(ua)) return "Chrome";
    if (/Firefox\//.test(ua)) return "Firefox";
    if (/Safari\//.test(ua)) return "Safari";
    return "未知浏览器";
  }

  const TOOL_NAMES = { gcc: "GCC(C)", gpp: "G++(C++)", python: "Python", node: "Node.js", go: "Go", rustc: "Rust", bash: "Bash", sqlite3: "SQLite", java: "Java" };

  function envRow(k, v, cls) {
    return '<div class="env-row"><span class="ek">' + k + '</span><span class="ev ' + (cls || "") + '">' + v + "</span></div>";
  }

  function buildEnvHTML() {
    const wasm = typeof WebAssembly === "object" && WebAssembly !== null;
    const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    let html = "";
    html += '<div class="env-block"><h4>当前设备</h4>';
    html += envRow("操作系统", detectOS());
    html += envRow("浏览器", detectBrowser());
    html += envRow("触摸屏设备", touch ? "是（适配手机/平板）" : "否");
    html += envRow("WebAssembly", wasm ? '<span class="env-ok">支持 ✓</span>' : '<span class="env-miss">不支持</span>');
    html += envRow("本地存储", (function () { try { localStorage.setItem("__t", "1"); localStorage.removeItem("__t"); return "可用"; } catch (e) { return "不可用（无痕模式）"; } })());
    html += "</div>";

    html += '<div class="env-block"><h4>在线可直接运行</h4>';
    html += '<div><span class="env-badge ok">JavaScript</span><span class="env-badge ok">TypeScript</span><span class="env-badge ok">HTML/CSS</span>' +
      (wasm ? '<span class="env-badge ok">Python(WASM)</span><span class="env-badge ok">SQL(WASM)</span>' : "") +
      "</div></div>";

    html += '<div class="env-block"><h4>本地编译器联动（run-server.js）</h4>';
    if (LOCAL.available) {
      html += '<div style="margin-bottom:6px;color:var(--success);font-weight:700">✓ 已连接本地运行服务</div>';
      const tools = LOCAL.env || {};
      const names = ["gcc", "gpp", "python", "node", "go", "rustc", "bash", "sqlite3", "java"];
      html += "<div>";
      names.forEach((t) => {
        const on = !!tools[t];
        html += '<span class="env-badge ' + (on ? "ok" : "miss") + '">' + (TOOL_NAMES[t] || t) + (on ? " ✓" : " ✗") + "</span>";
      });
      html += "</div>";
    } else {
      html += '<p style="color:var(--text-muted)">当前为静态托管（GitHub Pages / Cloudflare Pages）。<br/>在本机执行 <code class="inline">node run-server.js</code> 后访问 <a href="http://localhost:8000" target="_blank" rel="noopener">localhost:8000</a>，即可让 C / C++ / Go / Rust / Java / Shell 联动本机编译器运行，并在此看到检测到的工具链。</p>';
    }
    html += "</div>";

    html += '<div class="env-block"><h4>安卓设备学编程</h4>';
    html += '<p style="color:var(--text-muted)">手机/平板可安装免费安卓编程工具，详见「工具下载推荐 → 安卓学习工具」章节。推荐 Termux（可在手机上装 gcc / python / go 等）、Dcoder、AIDE、Spck。</p>';
    html += "</div>";
    return html;
  }

  function openEnvModal() {
    envBody.innerHTML = buildEnvHTML();
    envModal.classList.remove("hidden");
  }
  function closeEnvModal() {
    envModal.classList.add("hidden");
  }
  $("#envBtn").addEventListener("click", openEnvModal);
  $("#envClose").addEventListener("click", closeEnvModal);
  envModal.addEventListener("click", (e) => {
    if (e.target === envModal) closeEnvModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeEnvModal();
  });

  /* ---------- 本地运行服务探测 ---------- */
  async function probeLocalServer() {
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 2500);
      const res = await fetch("/api/env", { cache: "no-store", signal: ctrl.signal });
      clearTimeout(timer);
      if (res.ok) {
        const data = await res.json();
        if (data && data.ok) {
          LOCAL.available = true;
          LOCAL.env = data.tools || {};
          statusMode.textContent = "本地联动";
          statusMode.className = "es-mode local";
          if (currentLang && LOCAL_LANGS.has(currentLang.toLowerCase())) updateEditorStatus();
        }
      }
    } catch (e) {
      /* 静态托管，无需处理 */
    }
  }

  /* ---------- 侧边栏渲染 ---------- */
  function renderSidebar() {
    const activeLessonId = getRoute().lessonId;
    let html = "";
    CATALOG.forEach((cat) => {
      html += '<div class="sidebar-section">';
      const isCatActive = cat.children.some((sub) =>
        sub.lessons.some((l) => l.id === activeLessonId)
      );
      html +=
        '<button class="sidebar-group ' +
        (isCatActive ? "open" : "") +
        '" data-group="' +
        cat.id +
        '">' +
        '<span class="g-icon">' +
        (cat.icon || cat.name.charAt(0)) +
        "</span>" +
        '<span>' +
        cat.name +
        "</span>" +
        '<svg class="g-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>' +
        "</button>";
      html += '<div class="sidebar-children">';
      cat.children.forEach((sub) => {
        const escapedSubId = sub.id;
        const subActive = sub.lessons.some((l) => l.id === activeLessonId);
        html +=
          '<button class="sidebar-group ' +
          (subActive ? "open" : "") +
          '" data-sub="' +
          cat.id +
          "::" +
          escapedSubId +
          '" style="padding-left:26px">' +
          '<span class="g-icon" style="width:22px;height:22px;font-size:12px">' +
          (sub.icon || sub.name.slice(0, 2)) +
          "</span>" +
          '<span style="font-weight:500">' +
          sub.name +
          "</span>" +
          '<svg class="g-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>' +
          "</button>";
        html += '<div class="sidebar-children">';
        sub.lessons.forEach((lesson, idx) => {
          const active = lesson.id === activeLessonId ? " active" : "";
          html +=
            '<button class="sidebar-link' +
            active +
            '" data-nav="' +
            cat.id +
            "/" +
            sub.id +
            "/" +
            lesson.id +
            '">' +
            '<span class="l-dot"></span>' +
            '<span>' +
            (idx + 1) +
            ". " +
            lesson.title +
            "</span>" +
            "</button>";
        });
        html += "</div>";
      });
      html += "</div></div>";
    });
    sidebar.innerHTML = html;

    // 事件绑定（分组的折叠）
    sidebar.querySelectorAll("[data-group]").forEach((el) => {
      el.addEventListener("click", () => el.classList.toggle("open"));
    });
    sidebar.querySelectorAll("[data-sub]").forEach((el) => {
      el.addEventListener("click", () => el.classList.toggle("open"));
    });
    sidebar.querySelectorAll("[data-nav]").forEach((el) => {
      el.addEventListener("click", () => {
        navigate(el.getAttribute("data-nav"));
        if (window.innerWidth <= 900) toggleSidebar(false);
      });
    });
  }

  /* ---------- 路由 ---------- */
  function parsePath() {
    return location.hash.replace(/^#\/?/, "");
  }

  function getRoute() {
    const p = parsePath();
    const seg = p.split("/").filter(Boolean);
    return {
      raw: p,
      categoryId: seg[0] || null,
      subjectId: seg[1] || null,
      lessonId: seg[2] || null,
    };
  }

  function navigate(path) {
    if (path) location.hash = "#/" + path;
    else location.hash = "";
    render();
  }

  function findRecord() {
    const r = getRoute();
    if (!r.categoryId) return { kind: "home" };
    const cat = CATALOG.find((c) => c.id === r.categoryId);
    if (!cat) return { kind: "home" };
    if (!r.subjectId) return { kind: "category", cat };
    const sub = cat.children.find((s) => s.id === r.subjectId);
    if (!sub) return { kind: "category", cat };
    if (!r.lessonId) return { kind: "subject", cat, sub };
    const lesson = sub.lessons.find((l) => l.id === r.lessonId);
    if (!lesson) return { kind: "subject", cat, sub };
    return { kind: "lesson", cat, sub, lesson };
  }

  /* ---------- 内容渲染 ---------- */
  function breadcrumb(cat, sub, lesson) {
    let html = '<div class="breadcrumb">';
    html += '<span class="cur" data-nav="">首页</span>';
    if (cat) {
      html += '<span class="sep">/</span>';
      html += '<span data-nav="' + cat.id + '">' + cat.name + "</span>";
    }
    if (sub) {
      html += '<span class="sep">/</span>';
      html += '<span data-nav="' + cat.id + "/" + sub.id + '">' + sub.name + "</span>";
    }
    if (lesson) {
      html += '<span class="sep">/</span>';
      html += '<span class="cur">' + lesson.title + "</span>";
    }
    html += "</div>";
    return html;
  }

  function renderBlocks(blocks, ctx) {
    let html = "";
    blocks.forEach((b) => {
      switch (b.type) {
        case "p":
          html += "<p>" + b.text + "</p>";
          break;
        case "h":
          html += "<h2>" + b.text + "</h2>";
          break;
        case "h3":
          html += "<h3>" + b.text + "</h3>";
          break;
        case "list":
          const tag = b.ordered ? "ol" : "ul";
          html += "<" + tag + ">";
          b.items.forEach((it) => (html += "<li>" + it + "</li>"));
          html += "</" + tag + ">";
          break;
        case "tip":
        case "info":
        case "warn":
        case "danger":
          html +=
            '<div class="callout ' +
            b.type +
            '"><span class="c-icon">' +
            (b.type === "tip" ? "✓" : b.type === "info" ? "i" : b.type === "warn" ? "!" : "×") +
            '</span><div class="c-body">' +
            (b.title ? "<strong>" + b.title + "</strong>" : "") +
            b.text +
            "</div></div>";
          break;
        case "keypoints":
          html += '<div class="keypoints"><h4>本节要点</h4><ul>';
          b.items.forEach((it) => (html += "<li>" + it + "</li>"));
          html += "</ul></div>";
          break;
        case "code":
          html += renderCodeBlock(b, ctx);
          break;
        case "table":
          html += '<div class="lesson-card"><table style="width:100%;border-collapse:collapse;font-size:14px">';
          if (b.head) {
            html += "<thead><tr>";
            b.head.forEach((h) => (html += '<th style="text-align:left;padding:8px 10px;border-bottom:2px solid var(--border);color:var(--text)">' + h + "</th>"));
            html += "</tr></thead>";
          }
          html += "<tbody>";
          (b.rows || []).forEach((row) => {
            html += "<tr>";
            row.forEach((cell, ci) => {
              html += '<td style="padding:8px 10px;border-bottom:1px solid var(--bg-muted);color:var(--text-soft);' + (ci === 0 ? "font-weight:600;color:var(--text)" : "") + '">' + cell + "</td>";
            });
            html += "</tr>";
          });
          html += "</tbody></table></div>";
          break;
        default:
          break;
      }
    });
    return html;
  }

  function renderCodeBlock(b, ctx) {
    const runnable = RUNNABLE.has((b.lang || "").toLowerCase());
    return (
      '<div class="code-block">' +
      '<div class="cb-head"><span class="lang-tag">' +
      (b.title || b.lang || "code") +
      '</span><div class="cb-actions">' +
      '<button class="cb-btn" data-copy-idx="' +
      (b._idx || 0) +
      '">复制</button>' +
      '<button class="cb-btn" data-open="' +
      ctx.subjectId +
      "/" +
      ctx.lessonId +
      '" data-code-idx="' +
      (b._idx || 0) +
      '" data-lang="' +
      (b.lang || "") +
      '">在编辑器中打开</button>' +
      "</div></div>" +
      '<pre><code data-lang="' +
      (b.lang || "") +
      '">' +
      highlight(b.code || "", b.lang) +
      "</code></pre></div>"
    );
  }

  /* ============================================================
     二进制转换器：文字 ↔ 二进制，多编码（UTF-8/UTF-16BE/UTF-16LE/ASCII）多结果
     ============================================================ */
  function strToUtf8Bytes(str) {
    return Array.from(new TextEncoder().encode(str));
  }
  function strToUtf16Bytes(str, le) {
    const bytes = [];
    for (let i = 0; i < str.length; i++) {
      const c = str.charCodeAt(i);
      if (le) bytes.push(c & 0xff, (c >> 8) & 0xff);
      else bytes.push((c >> 8) & 0xff, c & 0xff);
    }
    return bytes;
  }
  function asciiBytesOf(str) {
    const bytes = [];
    for (let i = 0; i < str.length; i++) {
      const c = str.charCodeAt(i);
      if (c > 127) return null;
      bytes.push(c);
    }
    return bytes;
  }
  function bytesToBin(bytes) {
    return bytes.map((b) => b.toString(2).padStart(8, "0")).join(" ");
  }
  function bytesToHex(bytes) {
    return bytes.map((b) => b.toString(16).padStart(2, "0").toUpperCase()).join(" ");
  }
  function binToBytes(bin) {
    const clean = String(bin).replace(/\s+/g, "");
    const bytes = [];
    for (let i = 0; i + 8 <= clean.length; i += 8) bytes.push(parseInt(clean.slice(i, i + 8), 2));
    return bytes;
  }
  function utf8BytesToStr(bytes) {
    try {
      return new TextDecoder("utf-8").decode(new Uint8Array(bytes));
    } catch (e) {
      return "";
    }
  }
  function utf16BytesToStr(bytes, le) {
    const u16 = [];
    for (let i = 0; i + 1 < bytes.length; i += 2) {
      u16.push(le ? bytes[i] | (bytes[i + 1] << 8) : (bytes[i] << 8) | bytes[i + 1]);
    }
    let s = "";
    for (const c of u16) s += String.fromCharCode(c);
    return s;
  }
  function asciiBytesToStr(bytes) {
    let s = "";
    for (const b of bytes) {
      if (b < 32 || b > 126) return "";
      s += String.fromCharCode(b);
    }
    return s;
  }
  function renderTextToBin(text) {
    const utf8 = strToUtf8Bytes(text);
    const be = strToUtf16Bytes(text, false);
    const le = strToUtf16Bytes(text, true);
    const ascii = asciiBytesOf(text);
    const block = (name, bytes) => {
      if (!bytes) return null;
      return (
        '<div class="conv-result"><div class="conv-rt">' +
        name +
        "（" +
        bytes.length +
        " 字节）</div><div class=\"conv-bits\">" +
        bytesToBin(bytes) +
        '</div><div class="conv-hex">HEX：' +
        bytesToHex(bytes) +
        "</div></div>"
      );
    };
    return (
      '<div class="conv-note">共 ' +
      text.length +
      " 个字符（UTF-8 编码下 " +
      utf8.length +
      " 字节）</div>" +
      (block("UTF-8", utf8) || "") +
      (block("UTF-16BE", be) || "") +
      (block("UTF-16LE", le) || "") +
      (ascii
        ? block("ASCII", ascii)
        : '<div class="conv-result"><div class="conv-rt">ASCII</div><div class="conv-warn">包含非 ASCII 字符，无法用 ASCII 编码表示</div></div>')
    );
  }
  function renderBinToText(bin) {
    const bytes = binToBytes(bin);
    if (!bytes.length) return '<div class="conv-empty">未识别到二进制数据，请检查输入</div>';
    const utf8 = utf8BytesToStr(bytes);
    const be = utf16BytesToStr(bytes, false);
    const le = utf16BytesToStr(bytes, true);
    const ascii = asciiBytesToStr(bytes);
    const block = (name, s) => {
      if (!s) return null;
      return (
        '<div class="conv-result"><div class="conv-rt">' +
        name +
        '</div><div class="conv-text">' +
        escapeHtml(s) +
        "</div></div>"
      );
    };
    const clean = String(bin).replace(/\s+/g, "");
    const remainder = clean.length % 8;
    return (
      '<div class="conv-note">解析出 ' +
      bytes.length +
      " 个字节（共 " +
      clean.length +
      " 位" +
      (remainder ? "，末尾 " + remainder + " 位不足 8 位已忽略" : "") +
      "）</div>" +
      (block("UTF-8", utf8) || "") +
      (block("UTF-16BE", be) || "") +
      (block("UTF-16LE", le) || "") +
      (block("ASCII", ascii) || "") +
      (!utf8 && !be && !le && !ascii
        ? '<div class="conv-warn">未能用任何编码解析为可读文字（字节数可能不是 2 的倍数）</div>'
        : "")
    );
  }

  function renderHome() {
    const totalLessons = flatLessons.length;
    const totalSubjects = CATALOG.reduce((a, c) => a + (c.children || []).length, 0);
    let html = '<div class="hero">';
    html += '<div class="hero-icon">&lt;/&gt;</div>';
    html += '<h1>从零开始的<br/><span class="grad">计算机专业学习手册</span></h1>';
    html +=
      '<p class="hero-sub">用自然语言讲清每一个概念。涵盖编程语言、数据结构与算法、计算机基础、工程化与前沿技术，配在线编辑器与代码模板，新手也能快速上手。</p>';
    html +=
      '<div class="hero-stats"><div class="hstat"><div class="hs-num">' +
      CATALOG.length +
      '</div><div class="hs-label">知识板块</div></div>' +
      '<div class="hstat"><div class="hs-num">' +
      totalSubjects +
      '</div><div class="hs-label">主题分类</div></div>' +
      '<div class="hstat"><div class="hs-num">' +
      totalLessons +
      '</div><div class="hs-label">课程章节</div></div></div>';
    html += "</div>";

    CATALOG.forEach((cat) => {
      html += '<h2 style="margin:32px 0 8px;font-size:22px;font-weight:800">' + (cat.icon || "") + " " + cat.name + "</h2>";
      if (cat.description) html += '<p style="color:var(--text-muted);margin-bottom:8px">' + cat.description + "</p>";
      html += '<div class="grid">';
      cat.children.forEach((sub) => {
        const count = (sub.lessons || []).length;
        html +=
          '<div class="grid-card" data-nav="' +
          cat.id +
          "/" +
          sub.id +
          '">' +
          '<div class="gc-icon">' +
          (sub.icon || sub.name.slice(0, 2)) +
          '</div>' +
          '<div class="gc-title">' +
          sub.name +
          '</div>' +
          '<div class="gc-desc">' +
          (sub.tagline || sub.intro || "") +
          "</div>" +
          '<div class="gc-desc" style="margin-top:10px;font-weight:600;color:var(--primary)">' +
          count +
          " 个章节 →</div></div>";
      });
      html += "</div>";
    });

    /* 二进制转换器（首页底部） */
    html += '<div class="conv-card">';
    html += '<div class="conv-head">';
    html += '<div class="conv-title">二进制转换器</div>';
    html += '<div class="conv-desc">在「文字」与「二进制」之间互转，同时给出 UTF-8 / UTF-16BE / UTF-16LE / ASCII 多种编码结果，支持中文、英文、Emoji 等任意文本。</div>';
    html += "</div>";
    html += '<div class="conv-tabs">';
    html += '<button class="conv-tab active" data-conv-mode="to">文字 → 二进制</button>';
    html += '<button class="conv-tab" data-conv-mode="from">二进制 → 文字</button>';
    html += "</div>";
    html += '<div class="conv-input-row">';
    html += '<textarea id="convInput" class="conv-input" rows="4" spellcheck="false" placeholder="输入文字，或输入二进制串（如 01001000 01101001，可带空格）"></textarea>';
    html += '<div class="conv-actions">';
    html += '<button class="run-btn" id="convRun">转换</button>';
    html += '<button class="tool-btn" id="convClear">清空</button>';
    html += "</div></div>";
    html += '<div class="conv-results" id="convResults"></div>';
    html += "</div>";

    return html;
  }

  function renderCategory(cat) {
    let html = breadcrumb(cat);
    html += '<div class="page-head">';
    html += '<h1>' + (cat.icon || "") + " " + cat.name + "</h1>";
    if (cat.description) html += '<p class="lead">' + cat.description + "</p>";
    html += "</div>";
    html += '<div class="grid">';
    cat.children.forEach((sub) => {
      html +=
        '<div class="grid-card" data-nav="' +
        cat.id +
        "/" +
        sub.id +
        '">' +
        '<div class="gc-icon">' +
        (sub.icon || sub.name.slice(0, 2)) +
        '</div><div class="gc-title">' +
        sub.name +
        '</div><div class="gc-desc">' +
        (sub.tagline || "") +
        "</div></div>";
    });
    html += "</div>";
    return html;
  }

  function renderSubject(cat, sub) {
    let html = breadcrumb(cat, sub);
    html += '<div class="page-head">';
    html += '<h1>' + (sub.icon || "") + " " + sub.name + "</h1>";
    if (sub.tagline) html += '<p class="lead">' + sub.tagline + "</p>";
    if (sub.intro) html += '<p class="lead" style="margin-top:10px">' + sub.intro + "</p>";
    if (sub.meta) {
      html += '<div class="tag-row">';
      Object.entries(sub.meta).forEach(([k, v]) => {
        html += '<span class="chip primary">' + k + "：" + v + "</span>";
      });
      html += "</div>";
    }
    html += "</div>";

    html += '<h2 style="margin:16px 0 12px;font-size:18px;font-weight:700">目录</h2>';
    html += '<div style="display:flex;flex-direction:column;gap:8px">';
    sub.lessons.forEach((lesson, idx) => {
      html +=
        '<div class="lesson-card" style="padding:16px 20px;cursor:pointer" data-nav="' +
        cat.id +
        "/" +
        sub.id +
        "/" +
        lesson.id +
        '">' +
        '<div style="font-weight:700;font-size:15px">' +
        (idx + 1) +
        ". " +
        lesson.title +
        "</div>";
      if (lesson.summary) html += '<div style="font-size:13.5px;color:var(--text-muted);margin-top:4px">' + lesson.summary + "</div>";
      html += "</div>";
    });
    html += "</div>";
    return html;
  }

  function renderLesson(cat, sub, lesson) {
    let html = breadcrumb(cat, sub, lesson);
    html += '<div class="page-head">';
    html += "<h1>" + lesson.title + "</h1>";
    if (lesson.summary) html += '<p class="lead">' + lesson.summary + "</p>";
    if (lesson.difficulty) {
      html += '<div class="tag-row"><span class="chip primary">难度：' + lesson.difficulty + "</span></div>";
    }
    html += "</div>";

    // 给 code block 编号，用于"在编辑器中打开"
    const ctx = { subjectId: sub.id, lessonId: lesson.id };
    let codeIdx = 0;
    const blocks = (lesson.blocks || []).map((b) => {
      if (b.type === "code") {
        b = Object.assign({}, b, { _idx: codeIdx++ });
      }
      return b;
    });

    html += renderBlocks(blocks, ctx);

    html += renderLessonNav(cat, sub, lesson);

    return html;
  }

  /* 章节导航：上一章 / 下一章（跨分类连续阅读） */
  function renderLessonNav(cat, sub, lesson) {
    const idx = flatLessons.findIndex((f) => f.lessonId === lesson.id);
    if (idx < 0) return "";
    const prev = idx > 0 ? flatLessons[idx - 1] : null;
    const next = idx < flatLessons.length - 1 ? flatLessons[idx + 1] : null;
    const btn = (rec, dir, empty) => {
      if (!rec) return '<div class="nav-empty">' + empty + "</div>";
      return (
        '<button class="lesson-nav-btn" data-nav="' +
        rec.catId +
        "/" +
        rec.subjectId +
        "/" +
        rec.lessonId +
        '">' +
        '<span class="nav-dir">' +
        dir +
        "</span>" +
        '<span class="nav-title">' +
        rec.subject.name +
        " · " +
        rec.lesson.title +
        "</span>" +
        "</button>"
      );
    };
    return (
      '<div class="lesson-nav">' +
      btn(prev, "← 上一章", "已是第一章") +
      '<div class="nav-center"><span class="nav-count">第 ' +
      (idx + 1) +
      " / " +
      flatLessons.length +
      " 章</span></div>" +
      btn(next, "下一章 →", "已是最后一章") +
      "</div>"
    );
  }

  function render() {
    const rec = findRecord();
    let html = "";
    let editorCode = null;
    let editorLang = null;

    if (rec.kind === "home") {
      html = renderHome();
    } else if (rec.kind === "category") {
      html = renderCategory(rec.cat);
    } else if (rec.kind === "subject") {
      html = renderSubject(rec.cat, rec.sub);
    } else if (rec.kind === "lesson") {
      html = renderLesson(rec.cat, rec.sub, rec.lesson);
      if (rec.lesson.editor != null) {
        editorCode = rec.lesson.editor;
        editorLang = rec.lesson.lang;
      } else if (rec.lesson.blocks) {
        const firstCode = rec.lesson.blocks.find((b) => b.type === "code");
        if (firstCode) {
          editorCode = firstCode.code;
          editorLang = firstCode.lang;
        }
      }
    }

    contentInner.innerHTML = html;
    contentEl.scrollTop = 0;

    // breadcrumb / grid 导航事件
    contentInner.querySelectorAll("[data-nav]").forEach((el) => {
      el.addEventListener("click", () => navigate(el.getAttribute("data-nav")));
    });

    // 复制按钮
    contentInner.querySelectorAll("[data-copy-idx]").forEach((el) => {
      el.addEventListener("click", () => {
        const idx = parseInt(el.getAttribute("data-copy-idx"), 10);
        const rec2 = findRecord();
        if (rec2.kind === "lesson") {
          const b = getCodeBlockAt(rec2.lesson, idx);
          if (b) {
            copyText(b.code);
            el.textContent = "已复制 ✓";
            setTimeout(() => (el.textContent = "复制"), 1500);
          }
        }
      });
    });

    // 在编辑器中打开
    contentInner.querySelectorAll("[data-open]").forEach((el) => {
      el.addEventListener("click", () => {
        const idx = parseInt(el.getAttribute("data-code-idx"), 10);
        const rec2 = findRecord();
        if (rec2.kind === "lesson") {
          const b = getCodeBlockAt(rec2.lesson, idx);
          if (b) {
            setEditorCode(b.code, b.lang);
            loadTemplates(b.lang, rec2.lesson.templates || []);
            showEditor();
          }
        }
      });
    });

    // 更新编辑器
    if (editorCode != null) {
      setEditorCode(editorCode, editorLang);
      loadTemplates(editorLang, rec.kind === "lesson" ? rec.lesson.templates || [] : []);
      editorTitle.textContent =
        rec.kind === "lesson"
          ? rec.lesson.title + " · " + (editorLang || "javascript")
          : "在线编辑器";
      if (editorPanel.classList.contains("hidden") && rec.lesson && rec.lesson.autoOpenEditor) {
        showEditor();
      }
    } else {
      editorTitle.textContent = "在线编辑器";
    }

    // 二进制转换器交互
    const convInput = contentInner.querySelector("#convInput");
    const convModeTabs = contentInner.querySelectorAll(".conv-tab");
    const convRun = contentInner.querySelector("#convRun");
    const convClear = contentInner.querySelector("#convClear");
    const convResults = contentInner.querySelector("#convResults");
    if (convRun && convInput) {
      let convMode = "to";
      convModeTabs.forEach((t) => {
        t.addEventListener("click", () => {
          convMode = t.getAttribute("data-conv-mode");
          convModeTabs.forEach((x) => x.classList.toggle("active", x === t));
        });
      });
      const runConv = () => {
        const val = convInput.value;
        if (!val.trim()) {
          convResults.innerHTML = '<div class="conv-empty">请先输入文字或二进制内容</div>';
          return;
        }
        convResults.innerHTML = convMode === "to" ? renderTextToBin(val) : renderBinToText(val);
      };
      convRun.addEventListener("click", runConv);
      convClear.addEventListener("click", () => {
        convInput.value = "";
        convResults.innerHTML = "";
      });
      convInput.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "Enter") runConv();
      });
    }

    renderSidebar();
    document.title = (rec.kind === "lesson" ? rec.lesson.title + " · " : "") + "计算机知识库";
  }

  function getCodeBlockAt(lesson, idx) {
    let ci = 0;
    const blocks = lesson.blocks || [];
    for (const b of blocks) {
      if (b.type === "code") {
        if (ci === idx) return b;
        ci++;
      }
    }
    return null;
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  }
  function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
    } catch (e) {}
    document.body.removeChild(ta);
  }

  /* ---------- 搜索 ---------- */
  function buildSearchIndex() {
    const items = [];
    CATALOG.forEach((cat) => {
      cat.children.forEach((sub) => {
        sub.lessons.forEach((lesson) => {
          items.push({
            type: "lesson",
            cat,
            sub,
            lesson,
            path: cat.id + "/" + sub.id + "/" + lesson.id,
            title: lesson.title,
            bullets: cat.name + " › " + sub.name,
            text: (lesson.summary || "") + " " + (lesson.blocks || []).map((b) => (b.text || b.code || "")).join(" "),
          });
        });
      });
      // 分类卡片
      cat.children.forEach((sub) => {
        items.push({
          type: "subject",
          cat,
          sub,
          path: cat.id + "/" + sub.id,
          title: sub.name,
          bullets: cat.name,
          text: (sub.tagline || "") + " " + (sub.intro || ""),
        });
      });
    });
    return items;
  }

  const searchIndex = buildSearchIndex();

  function doSearch(q) {
    q = q.trim().toLowerCase();
    if (!q) {
      searchResults.classList.remove("active");
      return;
    }
    const results = searchIndex
      .filter((it) => (it.title + " " + it.bullets + " " + it.text).toLowerCase().includes(q))
      .slice(0, 12);

    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-empty">未找到与「' + escapeHtml(q) + "」相关的内容</div>";
    } else {
      let html = "";
      results.forEach((it) => {
        html +=
          '<div class="search-item" data-nav="' +
          it.path +
          '"><div class="si-icon">' +
          (it.sub.icon || it.title.slice(0, 1)) +
          '</div><div><div class="si-title">' +
          it.title +
          '</div><div class="si-bread">' +
          it.bullets +
          "</div></div></div>";
      });
      searchResults.innerHTML = html;
      searchResults.querySelectorAll("[data-nav]").forEach((el) => {
        el.addEventListener("click", () => {
          navigate(el.getAttribute("data-nav"));
          searchResults.classList.remove("active");
          searchInput.value = "";
        });
      });
    }
    searchResults.classList.add("active");
  }

  searchInput.addEventListener("input", (e) => doSearch(e.target.value));
  searchInput.addEventListener("focus", (e) => {
    if (e.target.value.trim()) doSearch(e.target.value);
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrap")) searchResults.classList.remove("active");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  });

  /* ---------- 面板切换 ---------- */
  function showEditor() {
    editorPanel.classList.remove("hidden");
    ensureEditor();
    cm.refresh();
  }
  function hideEditor() {
    editorPanel.classList.add("hidden");
  }
  function toggleEditor() {
    if (editorPanel.classList.contains("hidden")) showEditor();
    else hideEditor();
  }
  function toggleSidebar(force) {
    if (typeof force === "boolean") {
      sidebar.classList.toggle("hidden", !force);
    } else {
      sidebar.classList.toggle("hidden");
    }
  }

  $("#toggleEditor").addEventListener("click", toggleEditor);
  $("#toggleSidebar").addEventListener("click", () => toggleSidebar());
  $("#menuToggle").addEventListener("click", () => toggleSidebar(true));
  $("#goHome").addEventListener("click", () => navigate(""));
  $("#brandHome").addEventListener("click", () => navigate(""));

  /* ---------- 初始化 ---------- */
  window.addEventListener("hashchange", render);

  // 恢复编辑器偏好
  applyEditorTheme();
  applyEditorFont();

  ensureEditor();
  // 恢复默认编辑器草稿（仅首页初始状态），否则用示例代码
  let initCode = '// 在这里输入代码，点击「运行」查看结果\nconsole.log("[只在浏览器内输出] " + "你好，计算机知识库！");';
  try {
    const draft = localStorage.getItem("cs_draft_javascript");
    if (draft != null && draft.trim()) initCode = draft;
  } catch (e) {}
  setEditorCode(initCode, "javascript");
  loadTemplates("javascript", []);
  render();
  updateEditorStatus();
  clearOutput("点击「运行」查看代码执行结果（支持 JavaScript / HTML / CSS / Python / SQL，更多语言可联动本地编译器）。");
  probeLocalServer();
})();