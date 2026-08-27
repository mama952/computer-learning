/* ============================================================
   计算机知识库 · 应用逻辑
   ============================================================ */
(function () {
  "use strict";

  /* ---------- 数据汇总 ---------- */
  const CATALOG = [
    window.LANGUAGE_DATA,
    window.CS_FUNDAMENTALS,
    window.CS_ADVANCED,
    window.TOOLCHAIN,
    window.ERRORS_DATA,
    window.COOKBOOK_DATA,
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

  const RUNNABLE = new Set(["javascript", "js", "typescript", "node", "html", "htmlcss", "css"]);

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
    });
  }

  function setEditorCode(code, lang) {
    ensureEditor();
    currentLang = lang || "javascript";
    cm.setValue(code || "");
    cm.setOption("mode", cmMode(currentLang));
    cm.refresh();
  }

  /* ---------- 模板 ---------- */
  let templateOptions = [];

  function loadTemplates(lang, templates) {
    currentTemplates = templates || [];
    const runnable = RUNNABLE.has((lang || "").toLowerCase());
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

    if (!RUNNABLE.has(lang)) {
      clearOutput();
      appendOutput("当前语言「" + currentLang + "」无法在浏览器内直接运行。", false);
      appendOutput("请将代码复制到本地环境（如 Python 解释器、GCC、JDK）运行。", false);
      appendOutput("支持在线运行的语言：JavaScript / TypeScript / HTML / CSS。", false);
      outDot.className = "dot err";
      return;
    }

    runBtn.classList.add("running");
    runBtnText.textContent = "运行中…";
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
      runBtn.classList.remove("running");
      runBtnText.textContent = "运行";
      outDot.className = hadError ? "dot err" : "dot ok";
    };

    // 超时保护
    const timer = setTimeout(() => {
      appendOutput("执行超时（可能死循环），已终止。", true);
      finish();
    }, 5000);

    iframe.onload = () => {
      // 稍等脚本执行
      setTimeout(() => {
        finish();
      }, 600);
    };

    let doc = buildRunDoc(code, lang);
    iframe.srcdoc = doc;
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

    return html;
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
  ensureEditor();
  setEditorCode('// 在这里输入代码，点击「运行」查看结果\nconsole.log("[只在浏览器内输出] " + "你好，计算机知识库！");', "javascript");
  loadTemplates("javascript", []);
  render();
  clearOutput("点击「运行」查看代码执行结果（支持 JavaScript / HTML / CSS）。");
})();