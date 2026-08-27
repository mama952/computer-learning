/* ============================================================
   计算机知识库 · 数据：工具与编辑器下载推荐
   目标：给小白提供完全免费、好用、开箱即用的工具清单，
   每个工具附官网下载链接、适用场景、安装与首次使用指南。
   ============================================================ */
window.TOOLS_DATA = {
  id: "tools",
  name: "工具下载推荐",
  icon: "下",
  description:
    "学编程的第一步是装好趁手的工具。这里为你整理了完全免费、业内最常用的编辑器与开发环境，每个都附官方下载链接、适用场景和手把手的安装指南，让你不用纠结『用哪个』，直接开干。",
  children: [
    /* ============ 通用代码编辑器 ============ */
    {
      id: "editors",
      name: "通用代码编辑器",
      icon: "编",
      tagline: "写代码的『主战场』，下面这些全部免费且适合新手。",
      intro:
        "编辑器就是你在电脑上写代码的地方，类似 Word 之于文档。好的编辑器自带语法高亮、自动补全、错误提示，能把写代码的体验提升一大截。下面按推荐度排序。",
      meta: { 定位: "通用型", 推荐: "VS Code 首选", 费用: "全部免费" },
      lessons: [
        {
          id: "editors-1",
          title: "Visual Studio Code（VS Code）：新手第一选择",
          summary: "微软出品、完全免费、插件生态最强的通用编辑器，几乎人人必备。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "VS Code 是目前全球使用率最高的代码编辑器，微软开发，**完全免费**、开源、跨平台（Windows / macOS / Linux 都能装）。它内置语法高亮、智能补全、终端、调试器，还能通过插件扩展成几乎任何语言的开发环境。对于新手，这是**最推荐、最不踩坑**的选择。" },
            { type: "h", text: "官网下载（完全免费）" },
            { type: "list", items: ["官网：<a href='https://code.visualstudio.com' target='_blank' rel='noopener'>https://code.visualstudio.com</a>", "点击网页中间的蓝色按钮 Download 即可，Windows 用户选 Windows User Installer x64", "国内用户如果官网下载慢，可直接到国内镜像：<a href='https://vscode.cdn.azure.cn' target='_blank' rel='noopener'>vscode.cdn.azure.cn</a> 或百度『VS Code 国内下载』"] },
            { type: "h", text: "安装与首次使用" },
            { type: "list", items: ["下载后双击安装包，一路『下一步』即可（建议勾选『添加到 PATH』和『通过 Code 打开操作』）", "打开后界面是英文，按 <code.inline>Ctrl+Shift+P</code.inline> 输入 <code.inline>Configure Display Language</code.inline>，搜索 Chinese 安装简体中文语言包，重启后变中文", "左侧是活动栏，中间是编辑区，下方是终端（<code.inline>Ctrl+`</code.inline> 打开）"] },
            { type: "info", title: "一定要装的中文插件", text: "打开左侧『扩展』图标（或按 <code.inline>Ctrl+Shift+X</code.inline>），搜索并安装：① Chinese (Simplified) 中文语言包；② Python（写 Python 必备）；③ Prettier（代码格式化）。都是微软或官方出品，完全免费。" },
            { type: "tip", title: "最常用的快捷键", text: "Ctrl+S 保存；Ctrl+F 查找；Ctrl+Z 撤销；Ctrl+Shift+P 命令面板（一切命令的入口）；Alt+上下键 移动整行；Shift+Alt+F 格式化代码。记不住没关系，用多了自然熟。" },
            { type: "keypoints", items: ["VS Code 完全免费开源，是新手最推荐的主编辑器", "官网 code.visualstudio.com 直接下载，国内慢可用镜像", "装中文语言包 + Python/Prettier 插件即可开工", "Ctrl+Shift+P 是万能命令入口，务必记住"] },
          ],
          templates: [
            { name: "试试我的第一个文件", code: '// 在 VS Code 里新建一个文件 test.py\nprint("你好，VS Code！")\nprint("写代码就这么简单")' },
          ],
        },
        {
          id: "editors-2",
          title: "Sublime Text：轻快如飞的编辑器",
          summary: "启动速度极快的轻量编辑器，永久免费（可无限试用），适合快速改小文件。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "Sublime Text 是一款以『快』闻名的编辑器，打开超大文件、启动软件都飞快，界面简洁漂亮。它**可以无限免费试用**（偶尔弹个购买提示，点取消继续用即可，功能不受限），非常适合追求轻量的朋友。" },
            { type: "h", text: "官网下载" },
            { type: "list", items: ["官网：<a href='https://www.sublimetext.com' target='_blank' rel='noopener'>https://www.sublimetext.com</a>", "页面会直接给出当前版本的 Download for Windows 按钮", "安装后一样可以通过 Package Control 装插件，但新手建议先用 VS Code"] },
            { type: "warn", title: "什么时候用它", text: "它更适合『快速打开看一眼』『改个小配置』这类轻量场景。主力开发建议还是用 VS Code，生态更完整。" },
            { type: "keypoints", items: ["Sublime Text 启动极快、无限免费试用", "适合轻量编辑，主力开发仍推荐 VS Code", "官网 sublime.text.com 直接下载"] },
          ],
          templates: [{ name: "空文件模板", code: "print('Sublime Text 也可以写 Python')" }],
        },
        {
          id: "editors-3",
          title: "Notepad++：Windows 轻量文本增强",
          summary: "Windows 自带的记事本不够用？Notepad++ 免费小巧，适合快速编辑。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "Notepad++ 是 Windows 上一款经典免费编辑器，比记事本强大很多（有语法高亮、标签页、宏录制），体积只有几 MB，打开极快。适合临时查看代码、改配置文件。" },
            { type: "h", text: "官网下载" },
            { type: "list", items: ["官网：<a href='https://notepad-plus-plus.org' target='_blank' rel='noopener'>https://notepad-plus-plus.org</a>", "点击 Download → 选择 Installer（安装版）或 Zip（免安装绿色版）"] },
            { type: "keypoints", items: ["Notepad++ 免费小巧、语法高亮、标签页浏览", "适合快速查看与编辑小文件", "下载在 notepad-plus-plus.org 官网"] },
          ],
          templates: [{ name: "示例", code: "// Notepad++ 里写代码也能高亮\nprint('Hello')" }],
        },
      ],
    },

    /* ============ 各语言官方环境 ============ */
    {
      id: "lang-envs",
      name: "各语言官方环境下载",
      icon: "装",
      tagline: "每种语言都需要先装『运行时/编译器』，这里给出官方下载入口。",
      intro:
        "编辑器负责『写代码』，而『运行环境』负责把代码变成结果。每种语言都有官方出品、完全免费的解释器或编译器。下面是每个语言章节里都会用到的官方下载地址汇总。",
      meta: { 定位: "运行环境", 费用: "全部官方免费" },
      lessons: [
        {
          id: "lang-envs-1",
          title: "Python 官方解释器下载与安装",
          summary: "到 python.org 下载 Python，勾选 Add to PATH，两个要点就够。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "Python 官网 <a href='https://www.python.org/downloads/' target='_blank' rel='noopener'>https://www.python.org/downloads/</a> 提供完全免费的官方解释器。点击黄色大按钮 Download Python 3.x.x 下载最新稳定版（Windows 选 64-bit installer）。" },
            { type: "h", text: "安装时最关键的一步" },
            { type: "list", items: ["双击安装包，**第一屏务必勾选最底部的『Add python.exe to PATH』**，否则命令行找不到 python", "然后点 Install Now 一路到底即可", "装完按 Win+R 输入 cmd 回车，敲 python --version，能显示版本号就成功了"] },
            { type: "warn", title: "新手最常见的坑", text: "忘勾『Add to PATH』会导致在命令行输入 python 提示『不是内部或外部命令』。如果遇到，重装一遍并记得勾选即可。" },
            { type: "keypoints", items: ["官方下载：python.org/downloads", "安装时务必勾选 Add python.exe to PATH", "cmd 里 python --version 验证是否装好"] },
          ],
          templates: [{ name: "验证 Python", code: 'print("Python 安装成功！")\nprint(1 + 2 * 3)' }],
        },
        {
          id: "lang-envs-2",
          title: "Node.js（运行 JavaScript 的官方环境）",
          summary: "nodejs.org 下载 LTS 版，让 JavaScript 不再只属于浏览器。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "JavaScript 原本只能在浏览器里跑，Node.js 让它能在电脑上运行，是做后端、命令行工具的基础。官方地址 <a href='https://nodejs.org' target='_blank' rel='noopener'>https://nodejs.org</a>，下载左侧绿色 **LTS（长期支持）版** 的 Windows Installer (.msi)。" },
            { type: "list", items: ["双击安装，一路 Next（默认选项即可）", "装完在 cmd 里敲 node -v 显示版本号即成功", "再敲 npm -v 验证包管理器"] },
            { type: "keypoints", items: ["官方下载 nodejs.org，选 LTS 版最稳", "node -v 验证运行环境，npm -v 验证包管理器", "装好后就能在电脑上写 JavaScript 程序"] },
          ],
          templates: [{ name: "验证 Node", code: "console.log('Node.js 安装成功！')\nconsole.log(10 + 20)" }],
        },
        {
          id: "lang-envs-3",
          title: "Java JDK 官方下载（含 OpenJDK 免费发行版）",
          summary: "装 JDK 后 Java 才能编译运行，推荐免费开源发行版。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "Java 需要一个叫 JDK（Java 开发工具包）的东西，包含编译器与运行环境，官方完全免费。推荐两个选择：<br/>① Oracle 官方 <a href='https://www.oracle.com/java/technologies/downloads/' target='_blank' rel='noopener'>oracle.com/java/technologies/downloads</a>；<br/>② 免费开源的 Adoptium（Temurin）<a href='https://adoptium.net' target='_blank' rel='noopener'>https://adoptium.net</a>，更推荐新手用这个。" },
            { type: "list", items: ["下载对应 Windows x64 的 .msi 安装包", "双击安装，一路 Next", "cmd 里敲 java -version 和 javac -version 验证"] },
            { type: "keypoints", items: ["JDK = 编译 + 运行 Java 的全部工具", "推荐免费开源版 Adoptium Temurin，官网 adoptium.net", "java -version 与 javac -version 验证安装"] },
          ],
          templates: [{ name: "Java 模板", code: "public class Hello {\n    public static void main(String[] args) {\n        System.out.println(\"Java 安装成功！\");\n    }\n}" }],
        },
        {
          id: "lang-envs-4",
          title: "C/C++ 编译器：MinGW-w64 与 Visual Studio Community",
          summary: "Windows 上装 C/C++ 编译器，两条路线任选。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "C 和 C++ 需要编译器才能运行。Windows 上有两条主流免费路线：<br/>① **MinGW-w64**（轻量，配合 VS Code 用）：从 <a href='https://winlibs.com' target='_blank' rel='noopener'>https://winlibs.com</a> 下载 GCC 版本，解压并把 bin 目录加进 PATH；<br/>② **Visual Studio Community**（微软官方、功能全、体积大）：<a href='https://visualstudio.microsoft.com/zh-hans/visual-cpp-build-tools/' target='_blank' rel='noopener'>visualstudio.microsoft.com</a>，安装时勾选『使用 C++ 的桌面开发』。" },
            { type: "keypoints", items: ["轻量路线：MinGW-w64 + VS Code，推荐小白", "完整路线：Visual Studio Community 全功能", "cmd 里 gcc --version 验证"] },
          ],
          templates: [{ name: "C 模板", code: "#include <stdio.h>\nint main() {\n    printf(\"C 安装成功！\\n\");\n    return 0;\n}" }],
        },
        {
          id: "lang-envs-5",
          title: "Go / Rust / Git / SQL 等环境官方入口",
          summary: "Go、Rust、Git、SQLite 等常用环境的官方下载地址速查表。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "下面是其他语言与工具的官方下载入口，全部免费：<br/>- **Go**：<a href='https://go.dev/dl' target='_blank' rel='noopener'>go.dev/dl</a>，Windows 选 .msi<br/>- **Rust**：<a href='https://rustup.rs' target='_blank' rel='noopener'>rustup.rs</a>，用 rustup 安装工具链<br/>- **Git**（版本控制）：<a href='https://git-scm.com/downloads' target='_blank' rel='noopener'>git-scm.com/downloads</a><br/>- **SQLite**（零配置数据库）：<a href='https://www.sqlite.org/download.html' target='_blank' rel='noopener'>sqlite.org/download.html</a><br/>- **Anaconda**（Python 数据科学全家桶）：<a href='https://www.anaconda.com/download' target='_blank' rel='noopener'>anaconda.com/download</a>" },
            { type: "keypoints", items: ["Go 官方 go.dev/dl；Rust 用 rustup.rs", "Git 官方 git-scm.com/downloads，所有程序员必备", "SQLite 零配置，Anaconda 是数据科学全家桶"] },
          ],
          templates: [{ name: "Git 验证", code: "git --version\n# 输出类似 git version 2.x.x 即安装成功" }],
        },
      ],
    },

    /* ============ 数据库与辅助工具 ============ */
    {
      id: "aux-tools",
      name: "数据库与辅助工具",
      icon: "库",
      tagline: "学数据库、看接口、画图……这些免费工具让学习更直观。",
      intro:
        "除了编辑器，学编程还会用到数据库客户端、API 调试工具、绘图工具等。这里推荐的都是完全免费且对新手友好的。",
      meta: { 定位: "辅助工具", 费用: "全部免费" },
      lessons: [
        {
          id: "aux-tools-1",
          title: "数据库可视化客户端：DBeaver / SQLiteStudio",
          summary: "用图形界面看数据库，比命令行直观一万倍。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "命令行操作数据库对新手不友好，推荐装一个图形化客户端：<br/>- **DBeaver Community**（免费开源、支持几乎所有数据库）：<a href='https://dbeaver.io/download/' target='_blank' rel='noopener'>dbeaver.io/download</a><br/>- **SQLiteStudio**（超轻量、专门看 SQLite）：<a href='https://sqlitestudio.pl' target='_blank' rel='noopener'>sqlitestudio.pl</a>" },
            { type: "keypoints", items: ["DBeaver 通用数据库客户端，免费开源", "SQLiteStudio 轻量看 SQLite，免安装", "图形界面能直接看到表结构、数据、执行 SQL"] },
          ],
          templates: [{ name: "SQL 练习", code: "-- 在 DBeaver 里连接 SQLite 后执行\nCREATE TABLE student (id INT, name TEXT);\nINSERT INTO student VALUES (1, '小明');\nSELECT * FROM student;" }],
        },
        {
          id: "aux-tools-2",
          title: "API 调试工具：Postman / Thunder Client",
          summary: "测试接口、发送请求的利器，前端后端都要会。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "写后端或对接接口时，需要一个能发送 HTTP 请求的工具。推荐两个完全免费的选择：<br/>- **Postman**：<a href='https://www.postman.com/downloads/' target='_blank' rel='noopener'>postman.com/downloads</a>，功能最全、社区最大<br/>- **Thunder Client**：VS Code 插件商店里装，轻量不占内存，免费版够用" },
            { type: "keypoints", items: ["Postman 功能全、资料多，适合正式开发", "Thunder Client 是 VS Code 里的轻量替代", "都能发 GET/POST 请求、看响应、带请求头"] },
          ],
          templates: [{ name: "练习接口", code: "// 在 Postman 里发一个 GET 请求\n// GET https://api.github.com\n// 就能看到 GitHub 的公开信息 JSON" }],
        },
        {
          id: "aux-tools-3",
          title: "画图与流程图：draw.io / Excalidraw",
          summary: "学算法、画架构图、整理思路，用免费的画图工具。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "编程不只是敲代码，画流程图、架构图能帮你把思路理清。推荐：<br/>- **draw.io**（功能强，可本地保存）：<a href='https://www.drawio.com' target='_blank' rel='noopener'>drawio.com</a><br/>- **Excalidraw**（手绘风格，超好用）：<a href='https://excalidraw.com' target='_blank' rel='noopener'>excalidraw.com</a>" },
            { type: "keypoints", items: ["draw.io 画专业的流程图/架构图", "Excalidraw 手绘风格，适合快速画想法", "两者都免费，可用在线版或桌面版"] },
          ],
          templates: [{ name: "画一个流程", code: "// 在 draw.io 里画『登录流程』\n// 输入 → 校验 → 成功/失败 → 跳转\n// 用矩形、菱形、箭头就能表达逻辑" }],
        },
      ],
    },
  ],
};
