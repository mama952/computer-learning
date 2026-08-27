/* ============================================================
   计算机知识库 · 数据：开发工具链
   ============================================================ */
window.TOOLCHAIN = {
  id: "toolchain",
  name: "开发工具链",
  icon: "具",
  description:
    "是否用对工具，决定开发效率的差别可以有十倍。这里讲透命令行、编辑器、包管理器、调试方法与高频工具，帮你构建趁手的『武器库』。",
  children: [
    /* ================= 命令行基础 ================= */
    {
      id: "cli",
      name: "命令行基础",
      icon: "CL",
      tagline: "比图形界面更高效的『文字驾驶舱』。",
      intro:
        "命令行（终端/Terminal）是程序员的高效通道。图形界面做不到的批量操作、自动化脚本，命令行一行搞定。这里教你从零安全上手。",
      meta: { 难度: "入门", 场景: "一切开发" },
      lessons: [
        {
          id: "cli-basics",
          title: "终端入门与文件导航",
          summary: "pwd、ls、cd、cat——把终端练熟，效率翻倍。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "终端是一个『文字界面』，你敲命令、它执行并回显结果。刚开始会不习惯，但它是所有自动化能力的基础。最常用的三个是：pwd（我在哪）、ls（这里有什么）、cd（去哪）。" },
            { type: "code", lang: "bash", title: "导航三连与帮助", code: 'pwd       # print working directory 打印当前路径\nls        # list 列出当前目录内容\nls -la    # -l 详细(权限大小) -a 含隐藏文件\n\ncd ..     # 返回上一级目录\ncd ~      # 回到用户主目录\ncd /      # 回到根目录\ncd folder # 进入 folder 子目录\n\n# 路径\n.   # 当前目录\n..  # 上一级目录\n~   # 主目录\n\n# 获取帮助\nls --help        # 查看 ls 的用法\nman ls           # 更详细的手册\n\n# Tab 自动补全，方向键翻历史，必会！' },
            { type: "code", lang: "bash", title: "读写文件命令", code: 'cat file.txt       # 查看文件全部内容\nless file.txt      # 分页浏览(空格翻页,q退出)\nhead -n 3 file.txt # 前3行\ntail -n 5 file.txt # 后5行\ntail -f file.txt   # 实时跟踪(日志神器)\n\nwc -l file.txt     # 统计行数\ngrep "keyword" file.txt  # 在文件中找关键字\ngrep -r "foo" .          # 递归搜索整个目录\n\necho "你好" > a.txt    # > 覆盖写入\necho "追加" >> a.txt   # >> 追加写入\nmv a.txt b.txt   # 重命名/移动\ncp a.txt c.txt   # 复制\nrm b.txt         # 删除(危险,慎用 rm -rf)' },
            { type: "warn", title: "几个保命原则", text: "① <code.inline>rm -rf</code.inline> 会无提示删除且不可恢复，不要在不确定时使用；② 按 Tab 补全防止打错；③ 遇到不认识的命令先用 <code.inline>--help</code.inline> 或 <code.inline>man</code.inline> 查。" },
            { type: "keypoints", items: ["pwd/ls/cd 定位你所在的文件世界", "Tab 补全 + 方向键历史是效率关键", "> 是覆盖写入，>> 是追加", "绝不在不确定时用 rm -rf"] },
          ],
        },
        {
          id: "cli-pipe",
          title: "管道与重定向",
          summary: "把多个小工具像管线一样接起来，一个顶十个。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "Unix 哲学：每个工具只做好一件事，然后用管道 <code.inline>|</code.inline> 把它们串起来。前一个命令的输出，变成后一个命令的输入。这一招让你用普通命令组合出惊人的能力。" },
            { type: "code", lang: "bash", title: "管道实战", code: '# 找出本机所有 node 相关进程\nps aux | grep node\n\n# 统计日志里 500 错误出现次数\ncat app.log | grep " 500 " | wc -l\n\n# 看磁盘占用最大的目录\nls -laS | head\n\n# 查看访问次数最多的前5个IP\ngrep -oE "[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+" access.log \\\n  | sort | uniq -c | sort -rn | head -5\n\n# 上下文（下一个指令处理结果）\n# 把时间骑成类型 echo $(date) 这样也行' },
            { type: "info", title: "管道三兄弟", text: "<code.inline>grep</code.inline> 过滤、<code.inline>sort | uniq -c</code.inline> 统计、<code.inline>head</code.inline> 取前几条，这是处理日志/文本最常用的黄金组合。" },
            { type: "keypoints", items: ["| 管道把命令串起来", "grep 过滤 + sort/uniq 统计 + head 取前N", "重定向 > / >> 控制输出到文件", "小工具组合出强大能力"] },
          ],
        },
      ],
    },

    /* ================= 编辑器与 IDE ================= */
    {
      id: "editor",
      name: "编辑器与 IDE",
      icon: "Ed",
      tagline: "选对趁手兵器，写代码如虎添翼。",
      intro:
        "好用的编辑器能提示语法、补全代码、修复格式。主流选择是 VS Code 与各语言官方 IDE。学会基本操作与常用快捷键，是程序员的基本功。",
      meta: { 难度: "入门", 场景: "一切开发" },
      lessons: [
        {
          id: "editor-vscode",
          title: "VS Code 与加速快捷键",
          summary: "从安装到精通常用快捷键，效率立刻上一个台阶。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "VS Code 是微软出品、如今最流行的代码编辑器：免费、跨平台、插件生态庞大。核心逻辑是『插件即一切』——装对应语言的扩展就能获得智能提示。" },
            { type: "table", head: ["快捷键", "作用", "平台"], rows: [["Ctrl/Cmd + P", "快速打开文件", "全局"], ["Ctrl/Cmd + Shift + P", "命令面板", "全局"], ["Ctrl/Cmd + /", "注释/取消注释", "全局"], ["Alt + ↑/↓", "移动当前行", "全局"], ["Shift + Alt + ↑/↓ 或 Option+↑↓", "复制/多光标", "全局"], ["Ctrl + D", "选中相同词", "全局"], ["F12 或 Cmd+点击", "跳转到定义", "全局"], ["Ctrl + `", "打开终端", "全局"]] },
            { type: "info", title: "必备插件", text: "① <strong>ESLint</strong>（JS 代码规范）；② <strong>Prettier</strong>（自动格式化）；③ 各语言官方扩展（Python / Jupyter / Go / Java…）；④ <strong>GitLens</strong>（Git 增强）；⑤ <strong>Live Server</strong>（前端热刷新）。" },
            { type: "keypoints", items: ["VS Code 靠插件获得语言智能", "Ctrl+P 快速打开文件，Ctrl+Shift+P 命令面板", "Prettier 自动格式化保持风格统一", "Alt+方向键移动行，多光标批量编辑"] },
          ],
        },
      ],
    },

    /* ================= 包管理器 ================= */
    {
      id: "packages",
      name: "包管理器",
      icon: "pkg",
      tagline: "一行命令装下全世界开源组件。",
      intro:
        "几乎每个语言生态都有包管理器：npm（JS）、pip（Python）、Cargo（Rust）、Maven（Java）、Go mod。它们帮你安装、更新、管理第三方依赖及其版本。会用它们，就站在了几百万开发者的肩膀上。",
      meta: { 难度: "入门", 场景: "一切项目" },
      lessons: [
        {
          id: "packages-basics",
          title: "npm 与 pip 上手",
          summary: "安装、卸载、查看、锁定版本，依赖管理人人必修。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "知识不能全靠自己造轮子。用包管理器引入成熟库：npm 装 JS 库，pip 装 Python 库。关键是理解『依赖清单』和『版本管理』——记录安装了什么以便别人复现。" },
            { type: "code", lang: "bash", title: "npm（JS/Node）常用", code: '# 初始化项目，生成 package.json\nnpm init -y\n\n# 安装依赖并写入 package.json\nnpm install axios        # 或简写 npm i axios\nnpm install --save-dev jest  # 开发依赖\nnpm install -g typescript    # 全局安装\n\n# 卸载\nnpm uninstall axios\n\n# 运行 package.json 里 scripts 定义的脚本\nnpm run build\nnpm run dev\nnpm run test\n\n# 更新\nnpm update\n\n# 查看已安装\nnpm list\n\n# 可能有 package-lock.json 千万别删：锁定精确版本保证可复现' },
            { type: "code", lang: "bash", title: "pip（Python）常用", code: '# 安装库\npip install requests numpy pandas\n\n# 指定版本与国内外镜像加速\npip install requests==2.31.0\npip install -i https://pypi.tuna.tsinghua.edu.cn/simple requests\n\n# 导出/安装全部依赖（复现环境）\npip freeze > requirements.txt\npip install -r requirements.txt\n\n# 卸载/查看\npip uninstall requests\npip list\n\n# 虚拟环境（强烈推荐，隔离各项目依赖）\npython -m venv venv\n# Windows 激活:\nvenv\\Scripts\\activate\n# macOS/Linux:\nsource venv/bin/activate' },
            { type: "warn", title: "环境是大家的，隔离才安全", text: "Python 强烈建议用虚拟环境（venv）隔离项目依赖，否则不同项目互相冲突。Node 则用 package-lock.json 锁定版本保证一致。" },
            { type: "keypoints", items: ["包管理器帮你安装和锁定第三方依赖", "npm install / pip install 是核心命令", "requirements.txt / package.json 记录依赖", "利用镜像和虚拟环境避免踩坑"] },
          ],
        },
      ],
    },

    /* ================= 调试技巧 ================= */
    {
      id: "debug",
      name: "调试技巧",
      icon: "dbg",
      tagline: "Bug 是程序员的朋友，学会和它对话。",
      intro:
        "调试不是打补丁，而是『系统性地定位根因』。掌握日志、断点、二分定位法，能让大多数 bug 无处遁形。心态上，把报错当线索，而不是威胁。",
      meta: { 难度: "入门", 场景: "一切开发" },
      lessons: [
        {
          id: "debug-methods",
          title: "系统化排错五步法",
          summary: "还原现场、最小复现、二分定位、修复验证、写回归测试。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "遇到 bug 别慌，用科学流程：① 完整读报错信息（错误类型、行号、堆栈）；② 稳定复现它；③ 用日志/断点确认每一步的中间值；④ 二分定位到『最初出错的那行』；⑤ 修复后写一个回归测试防止复发。" },
            { type: "code", lang: "javascript", title: "排错实战：看懂堆栈与日志", code: '// 一个"隐蔽"的 bug：字符串拼接 vs 数字相加\ntry {\n  const a = "10";  // 注意：这是字符串，不是数字\n  const b = 5;\n  const total = a + b;  // 结果 "105" 而不是 15！\n  console.log("total 类型:", typeof total, "值:", total);\n\n  // 排查：打印中间值，发现 a 是字符串\n  console.log("a 的类型:", typeof a);  // string ← 这就是根因\n\n  // 修复：显式转数字\n  const total2 = Number(a) + b;\n  console.log("修复后 total2 =", total2);  // 15\n} catch (err) {\n  console.error("捕获到异常:", err.stack);  // 看堆栈定位\n}' },
            { type: "info", title: "现代调试姿势", text: "前端用浏览器开发者工具（F12）的 Sources 打断点、一步步看变量；Node 用 <code.inline>node --inspect</code.inline>；也可以写日志、加断言。大 while 思考片刻，小 bug 快速体感，比乱改快得多。" },
            { type: "keypoints", items: ["先读报错：类型+行号+堆栈是地图", "稳定复现才能在可控下排查", "二分定位最初出错处", "修复后补回归测试防止复发"] },
          ],
        },
      ],
    },

    /* ================= 常用开发工具 ================= */
    {
      id: "tools",
      name: "常用开发工具",
      icon: "Tl",
      tagline: "HTTP 调试、正则、AI 编程助手… 得心应手的工具箱。",
      intro:
        "除了语言和框架，有几款工具能大幅提升日常开发体验。这里介绍四类使用频率最高的：正则表达式、Postman/curl、AI 编程助手与代码片段管理。",
      meta: { 难度: "入门", 场景: "日常" },
      lessons: [
        {
          id: "tools-regex",
          title: "正则表达式：文本处理神器",
          summary: "用模式匹配代替手写一百行 if。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "正则（Regex）用一串『模式』描述你要找的文本，用于搜索、校验（邮箱/手机号）、提取。它上手门槛不低，但值得投入，因为它是所有语言共通的技能。" },
            { type: "code", lang: "javascript", title: "正则实战（可运行）", code: '// 邮箱校验\nconst isEmail = (s) => /^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(s);\nconsole.log("a@b.com:", isEmail("a@b.com"));        // true\nconsole.log("无效邮箱:", isEmail("not-an-email"));   // false\n\n// 提取所有手机号（等价概念）\nconst s = "联系 13800138000 或 13912345678";\nconst phones = s.match(/1[3-9]\\d{9}/g);\nconsole.log("提取到的号码:", phones);\n\n// 替换：隐藏部分文字\nconst masked = "身份证 110101200001011234".replace(/\\d{6}(\\d{8})\\d{4}/, "******$1****");\nconsole.log("脱敏:", masked);\n\n// 数字格式化：千分位\nconsole.log("1234567 千分位:", "1234567".replace(/\\B(?=(\\d{3})+(?!\\d))/g, ","));' },
            { type: "table", head: ["元字符", "含义", "示例"], rows: [["\\d", "数字", "/\\d+/ 匹配数字串"], ["\\s", "空白符", "空格 换行 Tab"], ["^ $", "开头/结尾", "/^abc$/ 精确匹配"], ["[abc]", "字符集", "/[a-z]+/ 小写字母"], [".", "任意字符", "/(.)/ 匹配任一单字符"], ["* + ?", "次数", "a* 零个及以上 a+ 一个以上 a? 零或一个"], ["( )", "分组捕获", "/(\\d{4})/ 取4位"], ["|", "或", "/cat|dog/ 猫或狗"]] },
            { type: "keypoints", items: ["正则用模式匹配文本，全语言通用", "\\d \\w \\s 和 ^ $ 是最常用元字符", "学生用于校验/提取/替换/脱敏", "复杂正则要在线工具验证后可读性"] },
          ],
        },
        {
          id: "tools-ai",
          title: "AI 编程助手时代",
          summary: "Copilot/大模型怎么帮编程，以及如何科学使用。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "AI 编程助手（Github Copilot、各类大模型）已深度融入开发。它擅长：补全代码、解释陌生代码、生成单元测试、写正则、把一种语言翻译成另一种。但『它会犯错』——代码是否正确仍需你来判断。" },
            { type: "code", lang: "text", title: "科学使用 AI 编程的最佳实践", code: 'AI 编程的「能」与「不能」\n\n能：\n- 根据清晰需求补全/生成代码\n- 解释一段陌生代码在做什么\n- 写测试用例、注释、文档\n- 正则、SQL、脚本等模板式内容\n\n不能/风险：\n- 可能编造不存在的 API（幻觉）\n- 可能引入过时或存在安全漏洞的写法\n- 不能替你做工程决策和系统设计\n\n最佳实践：\n1. 给出清晰上下文：语言/框架/目标/约束\n2. 生成后务必阅读、测试、理解\n3. 涉及安全敏感代码(认证/注入)要亲自审查\n4. 把它当作「加速的结对伙伴」，而非愚者的替代\n5. 边做边问 AI 输入核心概念，加深理解\n\n一句话：AI 缩短「从想法到草稿」的时间，\n但「从草稿到正确可靠」依然要靠你。' },
            { type: "keypoints", items: ["AI 擅长生成/解释/测试/翻译代码", "可能产生幻觉，必须自己验证", "给足上下文才能获得好结果", "AI 提效，工程判断仍在自己"] },
          ],
        },
      ],
    },
  ],
};