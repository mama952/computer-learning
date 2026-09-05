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
        if (!lesson || !lesson.id) return; // Skip invalid lessons
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
    const activePath = getRoute().categoryId ? getRoute().categoryId + "/" + (getRoute().subjectId || "") : "";
    const convActive = activePath === "tools/converter" ? " active" : "";
    const calcActive = activePath === "tools/calculator" ? " active" : "";
    let html = "";
    // 固定工具条目：编码转换器
    html += '<div class="sidebar-section">';
    html += '<button class="sidebar-link' + convActive + '" data-nav="tools/converter">';
    html += '<span class="l-dot" style="background:linear-gradient(135deg,#6366f1,#22d3ee)"></span>';
    html += '<span style="font-weight:600">🔢 编码转换器</span>';
    html += "</button>";
    html += "</div>";
    // 固定工具条目：超级计算器
    html += '<div class="sidebar-section">';
    html += '<button class="sidebar-link' + calcActive + '" data-nav="tools/calculator">';
    html += '<span class="l-dot" style="background:linear-gradient(135deg,#f59e0b,#ef4444)"></span>';
    html += '<span style="font-weight:600">🧮 超级计算器</span>';
    html += "</button>";
    html += "</div>";
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
    // 特殊工具路由：编码转换器独立页
    if (r.categoryId === "tools" && (r.subjectId === "converter" || !r.subjectId)) {
      return { kind: "converter" };
    }
    // 特殊工具路由：超级计算器独立页
    if (r.categoryId === "tools" && r.subjectId === "calculator") {
      return { kind: "calculator" };
    }
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
     二进制转换器：全面升级
     支持：二进制↔文字(7种编码)、Base64、十六进制、URL编码、
     Unicode转义、ROT13、以及中文多编码解码展示
     ============================================================ */

  // === 二进制编码核心函数 ===
  function strToBytes(str, enc) {
    enc = enc || "utf8";
    if (enc === "utf8") return Array.from(new TextEncoder().encode(str));
    if (enc === "latin1") { const b = []; for (let i = 0; i < str.length; i++) b.push(str.charCodeAt(i) & 0xff); return b; }
    if (enc === "ascii") { const b = []; for (let i = 0; i < str.length; i++) { const c = str.charCodeAt(i); if (c > 127) return null; b.push(c); } return b; }
    if (enc === "utf16be") { const b = []; for (let i = 0; i < str.length; i++) { const c = str.charCodeAt(i); b.push((c >> 8) & 0xff, c & 0xff); } return b; }
    if (enc === "utf16le") { const b = []; for (let i = 0; i < str.length; i++) { const c = str.charCodeAt(i); b.push(c & 0xff, (c >> 8) & 0xff); } return b; }
    if (enc === "utf32be") { const b = []; for (let i = 0; i < str.length; i++) { const c = str.codePointAt(i) || str.charCodeAt(i); b.push((c >> 24) & 0xff, (c >> 16) & 0xff, (c >> 8) & 0xff, c & 0xff); } return b; }
    if (enc === "utf32le") { const b = []; for (let i = 0; i < str.length; i++) { const c = str.codePointAt(i) || str.charCodeAt(i); b.push(c & 0xff, (c >> 8) & 0xff, (c >> 16) & 0xff, (c >> 24) & 0xff); } return b; }
    return null;
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
  function bytesToUtf8Str(bytes) {
    try { return new TextDecoder("utf-8").decode(new Uint8Array(bytes)); } catch (e) { return ""; }
  }
  function bytesToUtf16Str(bytes, le) {
    const u16 = [];
    for (let i = 0; i + 1 < bytes.length; i += 2) u16.push(le ? bytes[i] | (bytes[i + 1] << 8) : (bytes[i] << 8) | bytes[i + 1]);
    let s = ""; for (const c of u16) s += String.fromCharCode(c); return s;
  }
  function bytesToUtf32Str(bytes, le) {
    const codepoints = [];
    for (let i = 0; i + 3 < bytes.length; i += 4) {
      // 用 >>>0 转成无符号，避免高位字节使 32 位整数变负
      let cp = le
        ? (bytes[i] | (bytes[i+1]<<8) | (bytes[i+2]<<16) | (bytes[i+3]<<24)) >>> 0
        : (bytes[i]<<24 | (bytes[i+1]<<16) | (bytes[i+2]<<8) | bytes[i+3]) >>> 0;
      if (cp > 0x10FFFF) continue; // 超界码点丢弃，避免 String.fromCodePoint 抛错
      if (cp >= 0x10000) { codepoints.push(0xD800 + ((cp - 0x10000) >> 10), 0xDC00 + ((cp - 0x10000) & 0x3FF)); }
      else if (cp >= 0xD800 && cp <= 0xDFFF) continue; // 孤立代理项丢弃
      else codepoints.push(cp);
    }
    return String.fromCodePoint(...codepoints);
  }
  function bytesToLatin1Str(bytes) {
    return String.fromCharCode(...bytes);
  }
  function bytesToAsciiStr(bytes) {
    let s = ""; for (const b of bytes) { if (b < 32 || b > 126) return ""; s += String.fromCharCode(b); } return s;
  }
  // 验证字符串是否"有效可读"（不含过多控制字符）
  function isValidReadable(s) {
    if (!s || s.length === 0) return false;
    let controlCount = 0;
    for (let i = 0; i < s.length; i++) { const c = s.charCodeAt(i); if (c < 32 && c !== 10 && c !== 13) controlCount++; }
    return controlCount < s.length * 0.1;
  }
  // 判断字节串是否能被指定编码有效解析
  function canDecodeAs(bytes, enc) {
    try {
      if (enc === "utf8") return isValidReadable(bytesToUtf8Str(bytes));
      if (enc === "utf16be" || enc === "utf16le") { if (bytes.length % 2 !== 0) return false; return isValidReadable(bytesToUtf16Str(bytes, enc === "utf16le")); }
      if (enc === "utf32be" || enc === "utf32le") { if (bytes.length % 4 !== 0) return false; return isValidReadable(bytesToUtf32Str(bytes, enc === "utf32le")); }
      if (enc === "ascii") return asciiBytesToStr(bytes) !== "";
      if (enc === "latin1") return true; // Latin-1 永远有效
      return false;
    } catch (e) { return false; }
  }
  function asciiBytesToStr(bytes) {
    let s = ""; for (const b of bytes) { if (b < 32 || b > 126) return ""; s += String.fromCharCode(b); } return s;
  }

  // === 文字 → 二进制（多编码同时展示） ===
  const ENCODING_OPTIONS = ["utf8", "utf16be", "utf16le", "utf32be", "utf32le", "ascii", "latin1"];
  const ENCODING_NAMES = {
    utf8: "UTF-8", utf16be: "UTF-16BE", utf16le: "UTF-16LE",
    utf32be: "UTF-32BE", utf32le: "UTF-32LE", ascii: "ASCII", latin1: "Latin-1 (ISO-8859-1)"
  };
  function renderTextToBin(text) {
    let html = '<div class="conv-note">共 ' + text.length + ' 个字符，各编码结果如下：</div>';
    ENCODING_OPTIONS.forEach(enc => {
      const bytes = strToBytes(text, enc);
      if (bytes === null) {
        html += '<div class="conv-result"><div class="conv-rt">' + ENCODING_NAMES[enc] + '</div><div class="conv-warn">⚠ 包含非' + enc.toUpperCase() + '字符，无法编码</div></div>';
        return;
      }
      html += '<div class="conv-result"><div class="conv-rt">' + ENCODING_NAMES[enc] + '（' + bytes.length + ' 字节）</div>';
      html += '<div class="conv-bits">' + bytesToBin(bytes) + '</div>';
      html += '<div class="conv-hex">HEX：' + bytesToHex(bytes) + '</div></div>';
    });
    return html;
  }

  // === 二进制 → 文字 ===
  const DECODE_OPTIONS = ["utf8", "utf16be", "utf16le", "utf32be", "utf32le", "ascii", "latin1"];
  const DECODE_NAMES = {
    utf8: "UTF-8", utf16be: "UTF-16BE", utf16le: "UTF-16LE",
    utf32be: "UTF-32BE", utf32le: "UTF-32LE", ascii: "ASCII", latin1: "Latin-1"
  };
  // variant "plain" = 普通解码（仅 UTF-8 一次还原）；"auto" = 智能解码（多编码自动探测，支持中文）
  function renderBinToText(bin, variant) {
    variant = variant || "auto";
    const bytes = binToBytes(bin);
    if (!bytes.length) return '<div class="conv-empty">未识别到二进制数据，请检查输入</div>';
    const clean = String(bin).replace(/\s+/g, "");
    const remainder = clean.length % 8;

    // ---------- 普通解码：仅按 UTF-8 还原 ----------
    if (variant === "plain") {
      const decoded = bytesToUtf8Str(bytes);
      const readable = isValidReadable(decoded) && decoded.trim() !== "";
      let html = `<div class="conv-note">解析出 ` + bytes.length + ` 个字节（共 ` + clean.length + ` 位` + (remainder ? `,末尾 ` + remainder + ` 位不足 8 位已忽略` : '') + `），按 UTF-8 普通解码：</div>`;
      if (readable) {
        html += '<div class="conv-result"><div class="conv-rt">UTF-8 解码结果</div><div class="conv-text">' + escapeHtml(decoded) + '</div></div>';
        html += '<div class="conv-note" style="color:var(--text-muted);margin-top:6px">如果显示为乱码，说明这不是 UTF-8 编码的二进制，请改用「智能解码」或回到「文字→二进制」确认编码。</div>';
      } else {
        html += '<div class="conv-warn">⚠ 该二进制不是有效的 UTF-8 文本，普通解码无结果。<br/>· 中文请确认来源是 UTF-8 编码；<br/>· 若是 UTF-16/32 等编码，请切换到「智能解码」自动识别。</div>';
        html += '<div class="conv-result"><div class="conv-rt">原始字节（HEX）</div><div class="conv-hex">' + bytesToHex(bytes) + '</div></div>';
      }
      return html;
    }

    // ---------- 智能解码：多编码自动探测 ----------
    let html = `<div class="conv-note">解析出 ` + bytes.length + ` 个字节（共 ` + clean.length + ` 位` + (remainder ? `,末尾 ` + remainder + ` 位不足 8 位已忽略` : '') + `），自动探测出的所有有效解码结果：</div>`;
    let foundAny = false;
    DECODE_OPTIONS.forEach(enc => {
      let decoded = "";
      let valid = false;
      if (enc === "utf8") { decoded = bytesToUtf8Str(bytes); valid = isValidReadable(decoded); }
      else if (enc === "utf16be" || enc === "utf16le") { if (bytes.length >= 2) { decoded = bytesToUtf16Str(bytes, enc === "utf16le"); valid = isValidReadable(decoded); } }
      else if (enc === "utf32be" || enc === "utf32le") { if (bytes.length >= 4) { decoded = bytesToUtf32Str(bytes, enc === "utf32le"); valid = isValidReadable(decoded); } }
      else if (enc === "ascii") { decoded = asciiBytesToStr(bytes); valid = decoded !== ""; }
      else if (enc === "latin1") { decoded = bytesToLatin1Str(bytes); valid = decoded.length > 0; }

      if (valid && decoded) {
        foundAny = true;
        const tag = enc === "utf8" ? '<span class="conv-tag conv-tag-primary">推荐</span>' : '';
        html += '<div class="conv-result"><div class="conv-rt">' + ENCODING_NAMES[enc] + ' ' + tag + '</div><div class="conv-text">' + escapeHtml(decoded) + '</div></div>';
      }
    });
    if (!foundAny) {
      const latin1 = bytesToLatin1Str(bytes);
      html += '<div class="conv-result"><div class="conv-rt">Latin-1（原始字节）</div><div class="conv-text">' + escapeHtml(latin1) + '</div></div>';
    }
    return html;
  }

  // === 特殊编码转换函数 ===
  function toBase64(str) {
    try { return btoa(unescape(encodeURIComponent(str))); } catch(e) { return ""; }
  }
  function fromBase64(b64) {
    try { return decodeURIComponent(escape(atob(b64.trim()))); } catch(e) { return ""; }
  }
  function toHex(str) {
    let s = ""; for (let i = 0; i < str.length; i++) s += str.charCodeAt(i).toString(16).padStart(2, "0") + " ";
    return s.trim().toUpperCase();
  }
  function fromHex(hex) {
    const clean = hex.trim().replace(/\s+/g, "");
    if (clean.length % 2 !== 0) return "";
    let s = ""; for (let i = 0; i < clean.length; i += 2) s += String.fromCharCode(parseInt(clean.slice(i, i + 2), 16));
    return s;
  }
  function toUrlEncode(str) {
    return encodeURIComponent(str);
  }
  function fromUrlDecode(str) {
    try { return decodeURIComponent(str); } catch(e) { return ""; }
  }
  function toUnicodeEscape(str) {
    let s = ""; for (let i = 0; i < str.length; i++) { const c = str.charCodeAt(i); s += (c <= 0xFFFF ? "\\u" + c.toString(16).padStart(4, "0") : "\\u" + ((c >> 16) & 0xffff).toString(16).padStart(4, "0") + "\\u" + (c & 0xffff).toString(16).padStart(4, "0")); }
    return s;
  }
  function fromUnicodeEscape(str) {
    try { return str.replace(/\\u([0-9a-fA-F]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16))).replace(/\\U([0-9a-fA-F]{8})/g, (_, h) => { const cp = parseInt(h, 16); return cp <= 0xFFFF ? String.fromCharCode(cp) : String.fromCharCode(0xD800 + ((cp - 0x10000) >> 10), 0xDC00 + ((cp - 0x10000) & 0x3FF)); }); } catch(e) { return ""; }
  }
  function rot13(str) {
    return str.replace(/[a-zA-Z]/g, c => String.fromCharCode(c.charCodeAt(0) + (c.toLowerCase() >= "m" && c.toLowerCase() <= "z" ? 13 : c.toUpperCase() >= "A" && c.toUpperCase() <= "M" ? -13 : 0)));
  }
  function bitReverseByte(b) {
    let r = 0; for (let i = 0; i < 8; i++) r = (r << 1) | ((b >> i) & 1); return r;
  }
  function reverseBits(str) {
    const bytes = strToBytes(str, "utf8");
    return bytes.map(bitReverseByte).join(" ");
  }
  function swapBytes(str) {
    const bytes = strToBytes(str, "utf8");
    const swapped = [];
    for (let i = 0; i + 1 < bytes.length; i += 2) { swapped.push(bytes[i+1]); swapped.push(bytes[i]); }
    if (bytes.length % 2) swapped.push(bytes[bytes.length - 1]);
    return swapped.join(" ");
  }
  function xorBytes(str, key) {
    const bytes = strToBytes(str, "utf8");
    const k = key.charCodeAt(0);
    return bytes.map(b => (b ^ k) & 0xff).join(" ");
  }
  function fromXorBits(bitsStr, key) {
    const bytes = binToBytes(bitsStr);
    const k = key.charCodeAt(0);
    const result = bytes.map(b => (b ^ k) & 0xff);
    return bytesToUtf8Str(result);
  }

  // === 特殊编码渲染函数 ===
  function renderBase64(text, dir) {
    if (dir === "to") return '<div class="conv-result"><div class="conv-rt">Base64 编码</div><div class="conv-text">' + escapeHtml(toBase64(text)) + '</div></div>';
    return '<div class="conv-result"><div class="conv-rt">Base64 解码</div><div class="conv-text">' + escapeHtml(fromBase64(text)) + '</div></div>';
  }
  function renderHex(text, dir) {
    if (dir === "to") return '<div class="conv-result"><div class="conv-rt">十六进制编码</div><div class="conv-text">' + escapeHtml(toHex(text)) + '</div></div>';
    return '<div class="conv-result"><div class="conv-rt">十六进制解码</div><div class="conv-text">' + escapeHtml(fromHex(text)) + '</div></div>';
  }
  function renderUrl(text, dir) {
    if (dir === "to") return '<div class="conv-result"><div class="conv-rt">URL 编码</div><div class="conv-text">' + escapeHtml(toUrlEncode(text)) + '</div></div>';
    return '<div class="conv-result"><div class="conv-rt">URL 解码</div><div class="conv-text">' + escapeHtml(fromUrlDecode(text)) + '</div></div>';
  }
  function renderUnicode(text, dir) {
    if (dir === "to") return '<div class="conv-result"><div class="conv-rt">Unicode 转义</div><div class="conv-text">' + escapeHtml(toUnicodeEscape(text)) + '</div></div>';
    return '<div class="conv-result"><div class="conv-rt">Unicode 还原</div><div class="conv-text">' + escapeHtml(fromUnicodeEscape(text)) + '</div></div>';
  }
  function renderRot13(text, dir) {
    return '<div class="conv-result"><div class="conv-rt">ROT13 ' + (dir === "to" ? "编码" : "解码") + '</div><div class="conv-text">' + escapeHtml(rot13(text)) + '</div></div>';
  }
  function renderBitReverse(text, dir) {
    if (dir === "to") return '<div class="conv-result"><div class="conv-rt">逐位反转（bit reverse）</div><div class="conv-bits">' + reverseBits(text) + '</div></div>';
    // 二进制 → 反转各字节 → UTF-8 解码
    const bytes = binToBytes(text);
    const reversed = bytes.map(bitReverseByte);
    const decoded = bytesToUtf8Str(reversed);
    return '<div class="conv-result"><div class="conv-rt">逐位反转还原</div><div class="conv-text">' + escapeHtml(isValidReadable(decoded) ? decoded : bytesToLatin1Str(reversed)) + '</div></div>';
  }
  function renderSwapBytes(text, dir) {
    if (dir === "to") return '<div class="conv-result"><div class="conv-rt">字节交换（Byte Swap）</div><div class="conv-bits">' + swapBytes(text) + '</div></div>';
    const bytes = binToBytes(text);
    const swapped = [];
    for (let i = 0; i + 1 < bytes.length; i += 2) { swapped.push(bytes[i+1]); swapped.push(bytes[i]); }
    if (bytes.length % 2) swapped.push(bytes[bytes.length - 1]);
    const decoded = bytesToUtf8Str(swapped);
    return '<div class="conv-result"><div class="conv-rt">字节交换还原</div><div class="conv-text">' + escapeHtml(isValidReadable(decoded) ? decoded : bytesToLatin1Str(swapped)) + '</div></div>';
  }
  function renderXor(text, dir, key) {
    key = key || "k";
    if (dir === "to") return '<div class="conv-result"><div class="conv-rt">XOR 加密（密钥：' + escapeHtml(key) + '）</div><div class="conv-bits">' + xorBytes(text, key) + '</div></div>';
    const decoded = fromXorBits(text, key);
    return '<div class="conv-result"><div class="conv-rt">XOR 解密（密钥：' + escapeHtml(key) + '）</div><div class="conv-text">' + escapeHtml(isValidReadable(decoded) ? decoded : "") + '</div></div>';
  }

  // === 共享：转换模式配置（首页与独立页共用） ===
  // 每个模式：type 决定解码分支，dir 决定方向，label 显示名，hint 动态功能说明
  const CONV_MODES = [
    { type: "binary", dir: "to",   label: "文字→二进制", hint: "将任意文字（含中文）按 UTF-8/UTF-16/UTF-32/ASCII/Latin-1 七种编码同时转为二进制串。输入中文可自动看到各编码结果。" },
    { type: "binary", dir: "from", variant: "plain", label: "二进制→文字", hint: "普通解码：按 UTF-8 标准把二进制位串一次性还原为文字，中文直接显示。适合您自己按 UTF-8 编码/复制的二进制。" },
    { type: "binary", dir: "from", variant: "auto",  label: "智能解码",       hint: "智能解码：自动探测 UTF-8 / UTF-16(大小端) / UTF-32(大小端) / ASCII / Latin-1，列出所有可读结果，中文（含 UTF-16 编码）也能识别。" },
    { type: "base64", dir: "to",   label: "Base64",     hint: "将文字编码为 Base64（适合传输二进制/中文的安全文本形式）。" },
    { type: "base64", dir: "from", label: "Base64 解码", hint: "把 Base64 文本还原为原始文字（支持中文），解码失败会提示。" },
    { type: "hex",    dir: "to",   label: "十六进制",    hint: "将文字按字符 Unicode 码点转为十六进制表示（中文会显示 4 位/字）。" },
    { type: "hex",    dir: "from", label: "十六进制解码", hint: "把十六进制串按两个字符一组还原为文字。" },
    { type: "url",    dir: "to",   label: "URL 编码",    hint: "将文字做 URL 百分号编码（空格→%20、中文→%E4%BD%A0 等）。" },
    { type: "url",    dir: "from", label: "URL 解码",     hint: "把 %20 / %E4%BD%A0 等 URL 编码还原为文字。" },
    { type: "unicode",dir: "to",   label: "Unicode",      hint: "将文字转为 \\uXXXX 转义序列（中文尤其常用）。" },
    { type: "unicode",dir: "from", label: "Unicode 还原", hint: "把 \\uXXXX 转义序列还原为文字。" },
    { type: "rot13",  dir: "to",   label: "ROT13",        hint: "对 A-Z/a-z 字母移位 13 位（双向对称，再点一次即还原）。" },
    { type: "rot13",  dir: "from", label: "ROT13 还原",   hint: "ROT13 是对称算法，还原与加密结果相同。" },
    { type: "bitrev", dir: "to",   label: "位反转",       hint: "对每个字节的 8 个 bit 顺序颠倒后输出二进制。适合理解位序。" },
    { type: "bitrev", dir: "from", label: "位反转还原",   hint: "把经过位反转的二进制串再次反转，并按 UTF-8 等还原为文字（支持中文）。" },
    { type: "swap",   dir: "to",   label: "字节交换",     hint: "按 UTF-8 每两个字节交换顺序（Byte Swap）。" },
    { type: "swap",   dir: "from", label: "字节交换还原", hint: "把交换过字节顺序的二进制串换回来，并按 UTF-8 等还原为文字（支持中文）。" },
    { type: "xor",    dir: "to",   label: "XOR 加密",     hint: "用单字节密钥（默认 'k'，40 行源码可改）对每个字节做异或，输出二进制。" },
    { type: "xor",    dir: "from", label: "XOR 解密",     hint: "对 XOR 加密的二进制串再做一次异或（密钥需一致），并按 UTF-8 还原为文字。" },
  ];

  function buildConvTabs() {
    let html = '<div class="conv-tabs">';
    CONV_MODES.forEach((m, i) => {
      html +=
        '<button class="conv-tab' + (i === 0 ? " active" : "") + '" data-conv-mode="' + m.dir + '" data-conv-type="' + m.type + '" data-conv-variant="' + (m.variant || "") + '" data-hint="' + escapeHtml(m.hint) + '" title="' + escapeHtml(m.hint) + '">' + m.label + "</button>";
    });
    html += "</div>";
    return html;
  }

  // 根据当前选中模式显示功能说明
  function updateConvHint(activeMode) {
    const hintEl = (typeof contentInner !== "undefined" ? contentInner : document).querySelector("#convHint");
    if (hintEl && activeMode) hintEl.textContent = activeMode.hint;
  }

  // 生成转换器卡片（head + tabs + 输入 + 说明条 + 结果），供首页与独立页共用
  function buildConvCard(withHead) {
    let html = '<div class="conv-card">';
    html +=
      '<div class="conv-head"><div class="conv-title">🔢 编码转换器</div><div class="conv-desc" id="convDesc">' +
      (withHead
        ? "选择上方任意转换方式，输入内容后点击「转换」。支持文字↔二进制、Base64、十六进制、URL、Unicode、ROT13、位反转、字节交换、XOR 共 18 种变换，均支持中文（UTF-8/16/32）。"
        : "首页底部工具：文字↔二进制、Base64、十六进制、URL、Unicode、ROT13、位反转、字节交换、XOR 双向转换，支持中文。") +
      "</div></div>";
    html += buildConvTabs();
    html += '<div class="conv-hint-box" id="convHint"></div>';
    html += '<div class="conv-input-row">';
    html += '<textarea id="convInput" class="conv-input" rows="4" spellcheck="false" placeholder="输入文字或二进制串，或 Base64 / 十六进制 / URL 编码等"></textarea>';
    html += '<div class="conv-actions">';
    html += '<button class="run-btn" id="convRun">转换</button>';
    html += '<button class="tool-btn" id="convClear">清空</button>';
    html += "</div></div>";
    html += '<div class="conv-results" id="convResults"></div>';
    html += "</div>";
    return html;
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
    html += buildConvCard(false);

    /* ============================================================
       超级计算器：科学/程序员/货币 三模式，支持超大数无科学计数法
       ============================================================ */
    html += buildCalcCard(false);

    return html;
  }

  // 生成计算器卡片（head + 三模式 + 按键 + 历史 + 货币），供首页与独立页共用
  function buildCalcCard(withHead) {
    let html = '<div class="calc-card">';
    html += '<div class="calc-head">';
    html += '<div class="calc-title">🧮 超级计算器</div>';
    html +=
      '<div class="calc-desc">' +
      (withHead
        ? "超越市面上的所有计算器——精确大数显示、科学/程序员/货币三模式、历史记录、公式编辑、百分比与括号支持。可计算超大数、位运算、进制转换与汇率换算。"
        : "精确大数显示、科学/程序员/货币三模式、历史记录、公式编辑、百分比与括号支持") +
      '</div>';
    html += '</div>';
    html += '<div class="calc-tabs">';
    html += '<button class="calc-tab active" data-calc-mode="scientific">科学模式</button>';
    html += '<button class="calc-tab" data-calc-mode="programmer">程序员模式</button>';
    html += '<button class="calc-tab" data-calc-mode="currency">货币换算</button>';
    html += "</div>";
    // 科学/程序员模式
    html += '<div class="calc-body" id="calcBody">';
    html += '<div class="calc-display-wrap">';
    html += '<div class="calc-input-line"><span class="calc-label">表达式</span><input id="calcExpr" class="calc-expr" spellcheck="false" autocomplete="off" placeholder="输入算式，如 (2+3)*4 / sin(π)"></div>';
    html += '<div class="calc-result-line"><span class="calc-label">结果</span><div id="calcResult" class="calc-result">0</div></div>';
    html += '<div class="calc-toggle-wrap"><label class="calc-toggle"><input type="checkbox" id="calcNoSci"> 禁用科学计数法</label></div>';
    html += "</div>";
    // 按钮网格
    html += '<div class="calc-keys" id="calcKeys"></div>';
    html += "</div>";
    // 历史记录
    html += '<div class="calc-history-wrap"><div class="calc-history-title">历史记录</div><div id="calcHistory" class="calc-history"></div><button id="calcHistoryClear" class="calc-hist-clear">清空历史</button></div>';
    html += "</div>";
    // 货币换算
    html += '<div class="calc-body" id="calcCurrency" style="display:none">';
    html += '<div class="calc-currency-box">';
    html += '<div class="calc-currency-row"><select id="calcFromCur" class="calc-cur-select"><option value="CNY">CNY 人民币</option><option value="USD" selected>USD 美元</option><option value="EUR">EUR 欧元</option><option value="JPY">JPY 日元</option><option value="GBP">GBP 英镑</option><option value="KRW">KRW 韩元</option><option value="HKD">HKD 港币</option><option value="TWD">TWD 新台币</option><option value="AUD">AUD 澳元</option><option value="CAD">CAD 加元</option></select><input id="calcFromAmt" class="calc-amount-input" type="number" value="1" min="0" step="any"></div>';
    html += '<div class="calc-currency-arrow">↓</div>';
    html += '<div class="calc-currency-row"><select id="calcToCur" class="calc-cur-select"><option value="CNY" selected>CNY 人民币</option><option value="USD">USD 美元</option><option value="EUR">EUR 欧元</option><option value="JPY">JPY 日元</option><option value="GBP">GBP 英镑</option><option value="KRW">KRW 韩元</option><option value="HKD">HKD 港币</option><option value="TWD">TWD 新台币</option><option value="AUD">AUD 澳元</option><option value="CAD">CAD 加元</option></select><div id="calcToResult" class="calc-cur-result">≈ 7.25 元</div></div>';
    html += "</div></div>";
    return html;
  }

  function renderConverter() {
    let html = '<div class="breadcrumb"><span data-nav="">首页</span><span class="sep">/</span><span class="cur">编码转换器</span></div>';
    html += '<div class="page-head"><h1>🔢 编码转换器</h1><p class="lead">将文字与二进制串、Base64、十六进制、URL 编码、Unicode、ROT13 等互转，支持位反转 / 字节交换 / XOR 双向加解密，中文（UTF-8/16/32）完整支持。</p></div>';
    html += buildConvCard(true);
    return html;
  }

  function renderCalculator() {
    let html = '<div class="breadcrumb"><span data-nav="">首页</span><span class="sep">/</span><span class="cur">超级计算器</span></div>';
    html += '<div class="page-head"><h1>🧮 超级计算器</h1><p class="lead">科学 / 程序员 / 货币三种模式一体：支持超大整数、复杂公式、三角函数、位运算与进制转换、多币种实时汇率换算。</p></div>';
    html += buildCalcCard(true);
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
    } else if (rec.kind === "converter") {
      html = renderConverter();
    } else if (rec.kind === "calculator") {
      html = renderCalculator();
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

    // 编码转换器交互
    const convInput = contentInner.querySelector("#convInput");
    const convModeTabs = contentInner.querySelectorAll(".conv-tab");
    const convRun = contentInner.querySelector("#convRun");
    const convClear = contentInner.querySelector("#convClear");
    const convResults = contentInner.querySelector("#convResults");
    if (convRun && convInput) {
      let convMode = "to";
      let convType = "binary";
      let convVariant = "";
      const convHintEl = contentInner.querySelector("#convHint");
      convModeTabs.forEach((t) => {
        t.addEventListener("click", () => {
          convMode = t.getAttribute("data-conv-mode");
          convType = t.getAttribute("data-conv-type") || "binary";
          convVariant = t.getAttribute("data-conv-variant") || "";
          convModeTabs.forEach((x) => x.classList.toggle("active", x === t));
          if (convHintEl) {
            const h = t.getAttribute("data-hint");
            convHintEl.innerHTML = '<span class="conv-hint-icon">💡</span> ' + (h ? decodeHint(h) : "");
          }
        });
      });
      // 初始显示第一个 tab（文字→二进制）的说明
      if (convHintEl) {
        const firstTab = convModeTabs[0];
        if (firstTab) convHintEl.innerHTML = '<span class="conv-hint-icon">💡</span> ' + decodeHint(firstTab.getAttribute("data-hint"));
      }
      // 将 HTML 转义的字符串还原（hint 在生成 tab 时经过 escapeHtml）
      function decodeHint(str) {
        if (!str) return "";
        const d = document.createElement("div");
        d.innerHTML = str;
        return d.textContent;
      }
      const runConv = () => {
        const val = convInput.value;
        if (!val.trim()) {
          convResults.innerHTML = '<div class="conv-empty">请先输入内容</div>';
          return;
        }
        let result = "";
        switch (convType) {
          case "binary":
            result = convMode === "to" ? renderTextToBin(val) : renderBinToText(val, convVariant);
            break;
          case "base64":
            result = convMode === "to" ? renderBase64(val, convMode) : renderBase64(val, convMode);
            break;
          case "hex":
            result = convMode === "to" ? renderHex(val, convMode) : renderHex(val, convMode);
            break;
          case "url":
            result = convMode === "to" ? renderUrl(val, convMode) : renderUrl(val, convMode);
            break;
          case "unicode":
            result = convMode === "to" ? renderUnicode(val, convMode) : renderUnicode(val, convMode);
            break;
          case "rot13":
            result = renderRot13(val, convMode);
            break;
          case "bitrev":
            result = renderBitReverse(val, convMode);
            break;
          case "swap":
            result = renderSwapBytes(val, convMode);
            break;
          case "xor":
            result = renderXor(val, convMode, "k");
            break;
          default:
            result = convMode === "to" ? renderTextToBin(val) : renderBinToText(val);
        }
        convResults.innerHTML = result;
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

    /* ============================================================
       超级计算器逻辑
       ============================================================ */
    const calcResult = contentInner.querySelector("#calcResult");
    const calcExpr = contentInner.querySelector("#calcExpr");
    const calcKeys = contentInner.querySelector("#calcKeys");
    const calcHistory = contentInner.querySelector("#calcHistory");
    const calcHistoryClear = contentInner.querySelector("#calcHistoryClear");
    const calcNoSci = contentInner.querySelector("#calcNoSci");
    const calcTabs = contentInner.querySelectorAll(".calc-tab");
    const calcBody = contentInner.querySelector("#calcBody");
    const calcCurrency = contentInner.querySelector("#calcCurrency");
    const calcFromCur = contentInner.querySelector("#calcFromCur");
    const calcToCur = contentInner.querySelector("#calcToCur");
    const calcFromAmt = contentInner.querySelector("#calcFromAmt");
    const calcToResult = contentInner.querySelector("#calcToResult");

    let calcMode = "scientific";
    let calcHistoryArr = [];

    // 精确大数格式化（无科学计数法）
    function formatNumber(n) {
      if (n === Infinity || n === -Infinity || isNaN(n)) return "错误";
      if (!calcNoSci || !calcNoSci.checked) {
        // 默认：科学计数法（小于1e-6或大于1e15时用科学计数法）
        if (Math.abs(n) >= 1e15 || (Math.abs(n) < 1e-6 && n !== 0)) {
          return n.toExponential(10).replace(/\.?0+e/, "e");
        }
        return parseFloat(n.toPrecision(15)).toString();
      }
      // 禁用科学计数法：直接显示完整数字
      if (Number.isInteger(n)) return n.toLocaleString("en-US");
      // 小数：限制精度但不用科学计数法
      const str = n.toFixed(15).replace(/\.?0+$/, "");
      // 处理极大/极小的十进制
      if (Math.abs(n) >= 1e15 || Math.abs(n) < 1e-10) {
        return n.toFixed(20).replace(/\.?0+$/, "");
      }
      return str;
    }

    // 数学表达式安全求值
    function evaluateExpr(expr) {
      // 替换数学常量与函数
      let e = expr
        .replace(/π/g, "Math.PI")
        .replace(/π/g, "Math.PI")
        .replace(/e(?![a-zA-Z])/g, "Math.E")
        .replace(/\bsin\b/g, "Math.sin")
        .replace(/\bcos\b/g, "Math.cos")
        .replace(/\btan\b/g, "Math.tan")
        .replace(/\basin\b/g, "Math.asin")
        .replace(/\bacos\b/g, "Math.acos")
        .replace(/\batan\b/g, "Math.atan")
        .replace(/\blog\b/g, "Math.log")
        .replace(/\bln\b/g, "Math.log")
        .replace(/\bsqrt\b/g, "Math.sqrt")
        .replace(/\babs\b/g, "Math.abs")
        .replace(/\bfloor\b/g, "Math.floor")
        .replace(/\bceil\b/g, "Math.ceil")
        .replace(/\bround\b/g, "Math.round")
        .replace(/\bpow\b/g, "Math.pow")
        .replace(/\bfactorial\b/g, "factorial")
        .replace(/\bmod\b/g, "%")
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/\^/g, "**");

      // 处理阶乘
      e = e.replace(/(\d+)!/g, (_, n) => {
        const num = parseInt(n);
        if (num < 0 || num > 170) return "Infinity";
        let r = 1; for (let i = 2; i <= num; i++) r *= i;
        return r;
      });

      // 处理百分比
      e = e.replace(/(\d+\.?\d*)%/g, (_, n) => "(" + n + "/100)");

      try {
        // 用 Function 而非 eval，限制作用域
        const fn = new Function("return (" + e + ")");
        return fn();
      } catch (err) {
        return NaN;
      }
    }

    // 按键定义
    const SCIENTIFIC_KEYS = [
      ["sin", "cos", "tan", "π"],
      ["asin", "acos", "atan", "e"],
      ["(", ")", "C", "⌫"],
      ["x²", "x³", "xʸ", "√x"],
      ["7", "8", "9", "÷"],
      ["4", "5", "6", "×"],
      ["1", "2", "3", "-"],
      ["0", ".", "%", "+"],
      ["±", "00", "=", ""],
    ];
    const PROGRAMMER_KEYS = [
      ["AND", "OR", "XOR", "NOT"],
      ["<<", ">>", "<<>", "÷"],
      ["(", ")", "C", "⌫"],
      ["A", "B", "C", "D"],
      ["E", "F", "0", "1"],
      ["2", "3", "4", "×"],
      ["5", "6", "7", "-"],
      ["8", "9", ".", "+"],
      ["=", "HEX", "DEC", "OCT"],
    ];

    function buildKeys(keys) {
      let html = "";
      keys.forEach(row => {
        html += "<div class=\"calc-row\">";
        row.forEach(btn => {
          if (!btn) { html += '<div class="calc-key calc-empty"></div>'; return; }
          let cls = "calc-key";
          if (["=", "C", "⌫"].includes(btn) || ["AND","OR","XOR","NOT"].includes(btn)) cls += " calc-key-op";
          if (["÷","×","-","+","="].includes(btn)) cls += " calc-key-num";
          if (["sin","cos","tan","asin","acos","atan","x²","x³","xʸ","√x","AND","OR","XOR","NOT","<<",">>","<<>"].includes(btn)) cls += " calc-key-func";
          if (btn === "=") cls += " calc-key-equals";
          html += `<button class="${cls}" data-val="${btn.replace(/"/g, '&quot;')}">${btn}</button>`;
        });
        html += "</div>";
      });
      return html;
    }

    if (calcKeys) calcKeys.innerHTML = buildKeys(SCIENTIFIC_KEYS);

    // 按键点击
    calcKeys && calcKeys.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-val]");
      if (!btn) return;
      const val = btn.getAttribute("data-val");
      handleCalcKey(val);
    });

    // 键盘输入
    calcExpr && calcExpr.addEventListener("keydown", (e) => {
      if (e.key === "Enter") { e.preventDefault(); handleCalcKey("="); }
      else if (e.key === "Escape") handleCalcKey("C");
      else if (e.key === "Backspace") handleCalcKey("⌫");
    });

    function handleCalcKey(key) {
      if (!calcExpr) return;
      if (key === "C") {
        calcExpr.value = "";
        calcResult.textContent = "0";
        return;
      }
      if (key === "=") {
        const expr = calcExpr.value.trim();
        if (!expr) return;
        const val = evaluateExpr(expr);
        const formatted = formatNumber(val);
        calcResult.textContent = formatted;
        // 添加到历史
        calcHistoryArr.unshift({ expr, result: formatted });
        if (calcHistoryArr.length > 20) calcHistoryArr.pop();
        renderHistory();
        return;
      }
      if (key === "⌫") {
        calcExpr.value = calcExpr.value.slice(0, -1);
        return;
      }
      if (key === "±") {
        const v = calcExpr.value;
        if (v.startsWith("-")) calcExpr.value = v.slice(1);
        else calcExpr.value = "-" + v;
        return;
      }
      if (["HEX", "DEC", "OCT"].includes(key)) {
        const expr = calcExpr.value.trim();
        if (!expr) return;
        const num = evaluateExpr(expr);
        if (isNaN(num)) return;
        let result = "";
        if (key === "HEX") result = "0x" + Math.abs(Math.floor(num)).toString(16).toUpperCase();
        else if (key === "DEC") result = Math.floor(num).toString(10);
        else result = "0o" + Math.abs(Math.floor(num)).toString(8);
        calcExpr.value = result;
        calcResult.textContent = result;
        return;
      }
      if (["AND", "OR", "XOR", "NOT", "<<", ">>", "<<>"].includes(key)) {
        // 程序员模式：位运算
        const ops = { "AND": "&", "OR": "|", "XOR": "^", "NOT": "~", "<<": "<<", ">>": ">>" };
        calcExpr.value += ops[key] || key;
        return;
      }
      if (["A", "B", "C", "D", "E", "F"].includes(key)) {
        calcExpr.value += key;
        return;
      }
      // 普通运算符和数字
      calcExpr.value += key;
    }

    function renderHistory() {
      if (!calcHistory) return;
      if (calcHistoryArr.length === 0) {
        calcHistory.innerHTML = '<div class="calc-hist-empty">暂无历史记录</div>';
        return;
      }
      let html = "";
      calcHistoryArr.forEach((item, i) => {
        html += `<div class="calc-hist-item" data-i="${i}"><span class="calc-hist-expr">${escapeHtml(item.expr)}</span><span class="calc-hist-result">= ${item.result}</span></div>`;
      });
      calcHistory.innerHTML = html;
      calcHistory.querySelectorAll(".calc-hist-item").forEach(el => {
        el.addEventListener("click", () => {
          if (calcExpr) calcExpr.value = el.getAttribute("data-expr") || el.querySelector(".calc-hist-expr").textContent;
        });
      });
    }
    calcHistoryClear && calcHistoryClear.addEventListener("click", () => {
      calcHistoryArr = [];
      renderHistory();
    });

    // 模式切换
    calcTabs && calcTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        calcTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        calcMode = tab.getAttribute("data-calc-mode");
        if (calcMode === "currency") {
          calcBody.style.display = "none";
          calcCurrency.style.display = "block";
        } else {
          calcBody.style.display = "block";
          calcCurrency.style.display = "none";
          // 更新按键布局
          const keys = calcMode === "programmer" ? PROGRAMMER_KEYS : SCIENTIFIC_KEYS;
          calcKeys.innerHTML = buildKeys(keys);
        }
      });
    });

    // 货币换算
    const FX_RATES = { USD: 1, CNY: 7.25, EUR: 0.92, JPY: 149.5, GBP: 0.79, KRW: 1320, HKD: 7.82, TWD: 31.5, AUD: 1.53, CAD: 1.36 };
    const CUR_SYMBOLS = { USD: "$", CNY: "¥", EUR: "€", JPY: "¥", GBP: "£", KRW: "₩", HKD: "HK$", TWD: "NT$", AUD: "A$", CAD: "C$" };
    function updateCurrency() {
      const from = calcFromCur.value;
      const to = calcToCur.value;
      const amt = parseFloat(calcFromAmt.value) || 0;
      const usdAmt = amt / FX_RATES[from];
      const result = usdAmt * FX_RATES[to];
      const sym = CUR_SYMBOLS[to];
      if (calcToResult) calcToResult.textContent = `≈ ${formatNumber(result)} ${sym} ${to}`;
    }
    calcFromCur && calcFromCur.addEventListener("change", updateCurrency);
    calcToCur && calcToCur.addEventListener("change", updateCurrency);
    calcFromAmt && calcFromAmt.addEventListener("input", updateCurrency);

    renderSidebar();
    document.title =
      (rec.kind === "lesson" ? rec.lesson.title + " · " :
       rec.kind === "converter" ? "编码转换器 · " :
       rec.kind === "calculator" ? "超级计算器 · " : "") + "计算机知识库";
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
      (cat.children || []).forEach((sub) => {
        if (!sub || !sub.lessons || !Array.isArray(sub.lessons)) return;
        sub.lessons.forEach((lesson) => {
          if (!lesson || !lesson.id) return; // Skip invalid lessons (defense)
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
      (cat.children || []).forEach((sub) => {
        if (!sub) return; // Skip invalid subjects (defense)
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

  // 标记应用已加载
  window.__csAppReady = true;
  document.getElementById('loadingOverlay').style.display = 'none';
  document.getElementById('app').classList.add('loaded');
})();