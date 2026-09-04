/* ============================================================
   计算机知识库 · 数据：Node.js 完整课程（16 章，从下载安装到后端实战）
   ============================================================ */
window.LANGUAGE_EXTRA = window.LANGUAGE_EXTRA || [];
window.LANGUAGE_EXTRA.push({
  'id': "node",
  'name': "Node.js",
  'icon': "No",
  'tagline': "让 JavaScript 跑在服务器，从下载安装到后端实战的 16 章完整课程。",
  'intro': "这是一套从零开始的 Node.js 完整课程。Node.js 让 JavaScript 从『只能写网页』变成『能写服务器、写工具、写爬虫』的全能选手。本课程前几章讲下载安装与运行原理，中间章节系统讲解模块、npm、文件系统、流、HTTP 服务器与 Express 框架，最后带你完成数据库读写、命令行工具和完整的待办清单 API 项目，并给出部署提示。注意：Node.js 代码需要在本地安装 Node 后运行（第二章有安装教程），本页面编辑器无法访问文件系统、网络等 Node 特性，正文代码可以阅读讲解，动手请在你的电脑终端里执行。",
  'meta': {
    "难度": "从零到进阶",
    "章节": "16 章",
    "场景": "后端 / 命令行工具 / 全栈"
  },
  'lessons': [
    {
      'id': "nd-1",
      'title': "Node.js 是什么：让 JavaScript 跑在服务器",
      'summary': "认识事件驱动、非阻塞 I/O 与 V8，理解 Node 为什么适合写后端。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "你可能已经知道 JavaScript 能让网页动起来——那是它在**浏览器**里跑。**Node.js** 做的事情是：把 JavaScript 从浏览器里『解放』出来，让它直接跑在**服务器**上，可以读写文件、收发网络请求、操作数据库。一句话：**Node.js 是浏览器之外的 JavaScript 运行环境。**"
        },
        {
          'type': "h",
          'text': "背后的引擎：V8"
        },
        {
          'type': "p",
          'text': "浏览器里的 JavaScript 由各家浏览器的『引擎』执行（Chrome 用的是 V8）。Node.js 的作者 Ryan Dahl 把 Chrome 的 **V8 引擎**抠出来，再配上文件系统、网络、进程等『服务器需要、浏览器没有』的能力，就造出了 Node.js。V8 会把 JavaScript 编译成机器码，所以 Node 跑 JS 非常快。"
        },
        {
          'type': "h",
          'text': "事件驱动与非阻塞 I/O"
        },
        {
          'type': "p",
          'text': "这是 Node 最核心的两个词。传统服务器（如老式 Java 的多线程模型）遇到一个请求就开一个线程去等它处理完，人一多线程就爆。Node 采用**单线程 + 事件驱动 + 非阻塞 I/O**：遇到耗时的操作（读文件、查数据库、网络请求）它不干等，而是『登记一下』继续处理下一个任务，等结果好了再回头处理。所以 Node 能用少量资源扛住海量并发。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "非阻塞的感觉（概念示例）",
          'code': "// 模拟：先发起一个耗时任务，再继续往下走\nfunction simulateSlowWork() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(\"耗时任务完成\"), 2000)\n  })\n}\n\nasync function main() {\n  const p = simulateSlowWork()   // 发起，但不等待\n  console.log(\"先打印这一行（没有干等）\")\n  console.log(await p)           // 结果好了再取\n}\n\nmain()"
        },
        {
          'type': "h",
          'text': "Node.js 适合做什么"
        },
        {
          'type': "list",
          'items': [
            "**后端 API 服务**：用 Express 等框架给 App/网页提供数据接口（本课程后半部分重点）。",
            "**命令行工具**：webpack、eslint 等都是 Node 写的，你也能写自己的 CLI 工具。",
            "**实时应用**：聊天、协同编辑、在线游戏——得益于事件驱动，实时推送很顺手。",
            "**前端工具链**：打包、编译、代码检查，前端工程化几乎全靠 Node。",
            "**爬虫与自动化**：抓取网页数据、批量处理文件。"
          ]
        },
        {
          'type': "table",
          'head': [
            "对比",
            "浏览器里的 JavaScript",
            "Node.js"
          ],
          'rows': [
            [
              "运行位置",
              "浏览器（客户端）",
              "服务器 / 本机（服务端）"
            ],
            [
              "能操作",
              "DOM、页面、发请求",
              "文件、网络、进程、数据库"
            ],
            [
              "模块",
              "ES Module",
              "CommonJS + ES Module"
            ],
            [
              "自带 API",
              "window、document",
              "fs、http、path、process"
            ]
          ]
        },
        {
          'type': "info",
          'title': "本章代码要先装 Node 才能跑",
          'text': "Node.js 代码（如 fs、http、process 等）依赖本机环境，网页编辑器里无法真正运行。你可以先阅读理解，等装好 Node（见下一章）后在终端里执行。像 console.log 这种纯逻辑代码，在浏览器里也能跑。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Node.js 是什么：让 JavaScript 跑在服务器\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Node.js 是什么：让 JavaScript 跑在服务器\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Node.js 是什么：让 JavaScript 跑在服务器\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Node.js = 浏览器外的 JavaScript 运行时，基于 Chrome 的 V8 引擎",
            "事件驱动 + 非阻塞 I/O：不干等耗时任务，能扛高并发",
            "适合后端 API、命令行工具、实时应用、前端工具链",
            "浏览器 JS 管页面，Node 管文件/网络/进程/数据库",
            "本章及之后多数代码需要本地安装 Node 后运行"
          ]
        }
      ],
      'templates': [
        {
          'name': "体验异步",
          'code': "function delay(ms) {\n  return new Promise((resolve) => setTimeout(resolve, ms))\n}\n\nasync function main() {\n  console.log(\"开始\")\n  await delay(1000)\n  console.log(\"1 秒后执行到这里\")\n}\n\nmain()"
        }
      ]
    },
    {
      'id': "nd-2",
      'title': "下载与安装 Node.js",
      'summary': "下载 LTS 版、验证 node/npm 版本，了解 nvm 版本管理与 VS Code 编辑器。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "学 Node 的第一步，当然是把它装上。Node.js 官方提供完全免费的安装包，支持 Windows、macOS、Linux。装好后你还会自动获得 **npm**（包管理器，第五章细讲）。"
        },
        {
          'type': "h",
          'text': "第一步：下载 LTS 版本"
        },
        {
          'type': "list",
          'items': [
            "打开官网中文页：<a href='https://nodejs.org/zh-cn' target='_blank' rel='noopener'>https://nodejs.org/zh-cn</a>",
            "页面会给你两个版本：**LTS（长期支持版，推荐新手）** 和 Current（尝鲜版）。请下载 **LTS**——它最稳定，更新周期长，很多公司都用它。",
            "Windows 用户下载 .msi 安装包（64 位），macOS 用户下载 .pkg。"
          ]
        },
        {
          'type': "h",
          'text': "第二步：安装"
        },
        {
          'type': "list",
          'items': [
            "Windows：双击 .msi，一路 Next 即可，默认勾选『Add to PATH』，务必保留这个勾选。",
            "macOS：双击 .pkg 按提示安装。",
            "装完后**重新打开**你的命令行/终端窗口（让 PATH 生效）。"
          ]
        },
        {
          'type': "h",
          'text': "第三步：验证安装"
        },
        {
          'type': "code",
          'lang': "text",
          'title': "在终端里验证版本",
          'code': "node -v\nnpm -v"
        },
        {
          'type': "p",
          'text': "打开终端（Windows 用 PowerShell 或 CMD，macOS 用终端 App），输入 <code.inline>node -v</code.inline> 回车，如果显示类似 <code.inline>v22.x.x</code> 的版本号，说明 Node 装好了；再输入 <code.inline>npm -v</code.inline>，能显示 npm 版本号就一切正常。"
        },
        {
          'type': "h",
          'text': "nvm：Node 版本管理器（进阶推荐）"
        },
        {
          'type': "p",
          'text': "不同项目可能需要不同 Node 版本。**nvm**（Node Version Manager）可以让你一台电脑上装多个 Node 版本，随时切换。Windows 用户用 <code.inline>nvm-windows</code>（GitHub 上开源免费），macOS/Linux 用户用官方 <code.inline>nvm</code>。常用命令：<code.inline>nvm install 20</code.inline> 装指定版本，<code.inline>nvm use 20</code.inline> 切换版本。新手可以先不用 nvm，直接用官网安装包即可。"
        },
        {
          'type': "warn",
          'title': "新手常见坑",
          'text': "如果 <code.inline>node -v</code> 提示『找不到命令』：多半是 PATH 没生效。解决：关掉终端重新开一个，或者重启电脑。另外注意别装错位数——现在的电脑基本都是 64 位，选 64-bit 安装包。"
        },
        {
          'type': "tip",
          'title': "顺手装 VS Code",
          'text': "写 Node 代码推荐 **VS Code**（完全免费）：<a href='https://code.visualstudio.com' target='_blank' rel='noopener'>https://code.visualstudio.com</a>。它内置终端、语法高亮、调试功能，Node 开发体验一流。在 VS Code 里按 Ctrl+` 就能打开内置终端。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"下载与安装 Node.js\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"下载与安装 Node.js\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"下载与安装 Node.js\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "官网 nodejs.org/zh-cn 下载 LTS（长期支持）版，完全免费",
            "安装时保留『Add to PATH』勾选，装完重开终端",
            "node -v 和 npm -v 验证是否装好",
            "nvm 可管理多个 Node 版本，进阶再学即可",
            "推荐配合 VS Code（免费）开发"
          ]
        }
      ],
      'templates': [
        {
          'name': "验证版本（概念）",
          'code': "// 在终端里运行，而不是浏览器\n// node -v\n// npm -v\n\nconsole.log(\"请在你的电脑终端运行 node -v 来验证\")"
        }
      ]
    },
    {
      'id': "nd-3",
      'title': "第一个程序与 REPL",
      'summary': "console.log 输出、node 文件名.js 运行、交互式 REPL 与进程退出码。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "装好 Node，我们来写第一个程序。Node 里的输出函数和浏览器一样是 <code.inline>console.log</code.inline>，但运行方式不同：浏览器靠 HTML 里的 <code.inline><script></code.inline> 标签，Node 靠命令行 <code.inline>node 文件名.js</code.inline>。"
        },
        {
          'type': "h",
          'text': "第一个程序"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "hello.js",
          'code': "console.log(\"Hello, Node.js!\")\nconsole.log(\"我的第一个 Node 程序\")\nconsole.log(\"1 + 2 =\", 1 + 2)"
        },
        {
          'type': "p",
          'text': "把上面的代码保存为 <code.inline>hello.js</code.inline>（在某个文件夹里新建文件），然后在终端进入该文件夹，运行：<code.inline>node hello.js</code.inline>，就会看到三行输出。这就是 Node 程序的『入口』方式。"
        },
        {
          'type': "code",
          'lang': "text",
          'title': "在终端运行",
          'code': "node hello.js\n# 输出：\n# Hello, Node.js!\n# 我的第一个 Node 程序\n# 1 + 2 = 3"
        },
        {
          'type': "h",
          'text': "REPL：边输入边执行"
        },
        {
          'type': "p",
          'text': "在终端直接输入 <code.inline>node</code.inline>（不带文件名）回车，就进入了 **REPL**（Read-Eval-Print Loop，读取-执行-打印-循环）交互模式。你可以一行行输入代码，立刻看到结果，非常适合试验和调试。"
        },
        {
          'type': "code",
          'lang': "text",
          'title': "REPL 交互",
          'code': "> node\nWelcome to Node.js\n> 1 + 2\n3\n> const name = \"小明\"\nundefined\n> name.toUpperCase()\n\"小明\"\n> .exit   # 退出 REPL"
        },
        {
          'type': "h",
          'text': "退出码与结束程序"
        },
        {
          'type': "p",
          'text': "Node 程序运行完会正常退出（退出码 0）。你可以用 <code.inline>process.exit()</code.inline> 主动结束，或者通过 <code.inline>process.exitCode</code.inline> 设置退出码。退出码 0 表示成功，非 0 表示出错——这在自动化脚本里很重要，调用方能据此判断成功失败。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "退出码示例",
          'code': "const args = process.argv.slice(2)\n\nif (args.length === 0) {\n  console.error(\"错误：没有传入参数\")\n  process.exit(1)   // 非 0 退出码表示失败\n}\n\nconsole.log(\"收到的参数：\", args)\nprocess.exit(0)     // 0 表示成功"
        },
        {
          'type': "warn",
          'title': "中文乱码怎么办",
          'text': "Windows 终端（CMD）有时中文会乱码。解决办法：在 CMD 里先执行 <code.inline>chcp 65001</code.inline> 切换到 UTF-8；用 PowerShell 或 VS Code 内置终端一般不会乱码。推荐直接用 VS Code 终端。"
        },
        {
          'type': "info",
          'title': "为什么本章代码要在本地跑",
          'text': "process.exit、process.argv 等是 Node 特有的能力，浏览器里没有。请务必装好 Node（第二章）后，在你的电脑终端里亲手运行一遍。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"第一个程序与 REPL\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"第一个程序与 REPL\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"第一个程序与 REPL\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "输出用 console.log，与浏览器一致",
            "运行脚本：node 文件名.js；交互模式：直接输入 node 进 REPL",
            "REPL 适合快速试验，.exit 或 Ctrl+C 退出",
            "process.exit(0) 成功，非 0 失败，脚本自动化靠退出码判断",
            "Windows 中文乱码用 chcp 65001 或 VS Code 终端"
          ]
        }
      ],
      'templates': [
        {
          'name': "打印参数（概念）",
          'code': "const args = process.argv.slice(2)\nconsole.log(\"你传入的参数：\", args)\n\n// 在终端运行：node 脚本.js 苹果 香蕉 橙子\n// 会输出：你传入的参数： [ \"苹果\", \"香蕉\", \"橙子\" ]"
        }
      ]
    },
    {
      'id': "nd-4",
      'title': "模块系统：把代码拆开又拼起来",
      'summary': "CommonJS require/module.exports、ESM import/export、package.json 与内置模块。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "项目一大，代码不能全塞在一个文件里。**模块（module）** 就是代码的组织单位：一个文件是一个模块，通过『导出/导入』把代码拆开、又拼起来。Node 支持两套模块系统：**CommonJS**（老牌，require）和 **ES Module**（现代，import）。"
        },
        {
          'type': "h",
          'text': "CommonJS：require 与 module.exports"
        },
        {
          'type': "p",
          'text': "这是 Node 的传统模块系统，浏览器里没有。每个文件默认是独立模块，用 <code.inline>module.exports</code.inline> 导出东西，别的文件用 <code.inline>require</code.inline> 导入。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "math.js：导出",
          'code': "// 文件：math.js\nfunction add(a, b) {\n  return a + b\n}\n\nfunction multiply(a, b) {\n  return a * b\n}\n\n// 方式一：导出对象\nmodule.exports = { add, multiply }\n\n// 方式二：直接给 exports 挂属性（等价）\n// exports.add = add\n// exports.multiply = multiply"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "app.js：导入使用",
          'code': "// 文件：app.js\nconst math = require(\"./math\")\n\nconsole.log(math.add(2, 3))        // 5\nconsole.log(math.multiply(2, 3))   // 6\n\n// 也可以解构\nconst { add } = require(\"./math\")\nconsole.log(add(10, 20))           // 30"
        },
        {
          'type': "h",
          'text': "ES Module：import 与 export"
        },
        {
          'type': "p",
          'text': "ES Module（ESM）是现代 JavaScript 标准，浏览器和 Node 都支持。用 <code.inline>export</code.inline> 导出、<code.inline>import</code.inline> 导入。注意：要让 Node 把 .js 文件当 ESM 处理，需要在 <code.inline>package.json</code.inline> 里加 <code.inline>\"type\": \"module\"</code.inline>。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "ESM 导出与导入",
          'code': "// 文件：greet.mjs\nexport function greet(name) {\n  return `你好，${name}！`\n}\n\nexport const PI = 3.14159\n\n// 文件：main.mjs\nimport { greet, PI } from \"./greet.mjs\"\n\nconsole.log(greet(\"小明\"))\nconsole.log(\"圆周率约\", PI)"
        },
        {
          'type': "h",
          'text': "package.json 的 type 字段"
        },
        {
          'type': "p",
          'text': "<code.inline>package.json</code.inline> 是项目的『身份证』（下一章细讲）。它的 <code.inline>type</code.inline> 字段决定 .js 文件用哪套模块系统：默认是 <code.inline>commonjs</code>；设为 <code.inline>\"module\"</code> 则 .js 按 ESM 解析。也可以用扩展名强制：<code.inline>.mjs</code> 一定是 ESM，<code.inline>.cjs</code> 一定是 CommonJS。"
        },
        {
          'type': "code",
          'lang': "text",
          'title': "package.json 里的 type",
          'code': "{\n  \"name\": \"my-project\",\n  \"type\": \"module\",   // 加这一行，.js 就用 import/export\n  \"version\": \"1.0.0\"\n}"
        },
        {
          'type': "h",
          'text': "内置模块一览"
        },
        {
          'type': "p",
          'text': "Node 自带一批**内置模块**（不用安装），常用有：<code.inline>fs</code.inline>（文件系统）、<code.inline>path</code.inline>（路径）、<code.inline>http</code.inline>（HTTP 服务）、<code.inline>os</code.inline>（系统信息）、<code.inline>events</code.inline>（事件）、<code.inline>buffer</code.inline>（二进制数据）、<code.inline>util</code.inline>（工具函数）。后面几章会逐个实战。"
        },
        {
          'type': "warn",
          'title': "require 和 import 别混着乱用",
          'text': "在同一个文件里 require 和 import 混用会报错。要么统一用 CommonJS（require），要么统一用 ESM（import）。新手最常见的报错就是 <code.inline>Cannot use import statement outside a module</code.inline>——那是因为文件被当成了 CommonJS，记得加 type: module 或改用 .mjs 后缀。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"模块系统：把代码拆开又拼起来\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"模块系统：把代码拆开又拼起来\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"模块系统：把代码拆开又拼起来\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "模块 = 代码组织单位，一个文件一个模块",
            "CommonJS：module.exports 导出 + require 导入（Node 传统）",
            "ESM：export + import（现代标准，需 type: module 或 .mjs）",
            "type 字段决定模块系统，.mjs/.cjs 扩展名可强制",
            "fs/http/path/os/events 等是 Node 内置模块，无需安装",
            "一个文件里别混用 require 和 import"
          ]
        }
      ],
      'templates': [
        {
          'name': "模块导入（概念）",
          'code': "// 概念演示：浏览器里无法 require，请本地运行\n// const fs = require(\"fs\")\n// const path = require(\"path\")\n\nconsole.log(\"模块系统需要在本地 Node 环境运行\")"
        }
      ]
    },
    {
      'id': "nd-5",
      'title': "npm 包管理器",
      'summary': "npm init、npm install、--save-dev、package.json 字段、npm run 与卸载/全局包。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "**npm**（Node Package Manager）是随 Node 一起安装的包管理器，让你用一行命令安装全世界开源社区发布的代码包（比如 express、lodash）。它是 Node 生态的『应用商店』。"
        },
        {
          'type': "h",
          'text': "初始化项目：npm init"
        },
        {
          'type': "p",
          'text': "进入你的项目文件夹，执行 <code.inline>npm init -y</code.inline>（-y 表示全部用默认值），会生成一个 <code.inline>package.json</code.inline>，它是项目的配置清单和『身份证』。"
        },
        {
          'type': "code",
          'lang': "text",
          'title': "初始化项目",
          'code': "mkdir my-project\ncd my-project\nnpm init -y\n# 生成 package.json"
        },
        {
          'type': "h",
          'text': "安装依赖包"
        },
        {
          'type': "code",
          'lang': "text",
          'title': "安装 express",
          'code': "npm install express\n# 会把 express 装进 node_modules 目录\n# 并在 package.json 的 dependencies 里记录依赖"
        },
        {
          'type': "p",
          'text': "执行后你会看到：多了 <code.inline>node_modules</code.inline> 文件夹（所有装进来的包都在里面）和 <code.inline>package-lock.json</code.inline>（锁定精确版本）。<code.inline>node_modules</code> 很大，通常不提交到 git，别人 clone 项目后执行 <code.inline>npm install</code> 就能一键装齐所有依赖。"
        },
        {
          'type': "h",
          'text': "--save-dev：开发依赖"
        },
        {
          'type': "p",
          'text': "有些包只在开发时用（打包工具、代码检查器），上线运行时不需要。用 <code.inline>--save-dev</code> 装进 <code.inline>devDependencies</code>，生产环境可以跳过安装，减小体积。"
        },
        {
          'type': "code",
          'lang': "text",
          'title': "安装开发依赖",
          'code': "npm install --save-dev nodemon\n# nodemon 开发时自动重启，生产环境不装"
        },
        {
          'type': "h",
          'text': "package.json 字段解读"
        },
        {
          'type': "table",
          'head': [
            "字段",
            "含义"
          ],
          'rows': [
            [
              "name",
              "项目名（小写，无空格）"
            ],
            [
              "version",
              "版本号（语义化版本 1.0.0）"
            ],
            [
              "description",
              "项目描述"
            ],
            [
              "main",
              "入口文件（默认 index.js）"
            ],
            [
              "scripts",
              "可执行的脚本命令（npm run 调用）"
            ],
            [
              "dependencies",
              "运行时依赖（生产也需要）"
            ],
            [
              "devDependencies",
              "开发时依赖（仅开发用）"
            ]
          ]
        },
        {
          'type': "h",
          'text': "npm run：自定义脚本"
        },
        {
          'type': "p",
          'text': "<code.inline>scripts</code.inline> 里可以定义常用命令，然后用 <code.inline>npm run 名字</code.inline> 执行。比如定义 start 和 dev 脚本，团队里大家就知道怎么启动项目。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "package.json 中的 scripts",
          'code': "{\n  \"name\": \"my-api\",\n  \"version\": \"1.0.0\",\n  \"main\": \"index.js\",\n  \"scripts\": {\n    \"start\": \"node index.js\",\n    \"dev\": \"nodemon index.js\",\n    \"test\": \"echo 运行测试\"\n  },\n  \"dependencies\": {\n    \"express\": \"^4.19.2\"\n  }\n}"
        },
        {
          'type': "code",
          'lang': "text",
          'title': "运行脚本",
          'code': "npm start      # 等价 node index.js\nnpm run dev    # 等价 nodemon index.js"
        },
        {
          'type': "h",
          'text': "卸载与全局包"
        },
        {
          'type': "code",
          'lang': "text",
          'title': "卸载与全局安装",
          'code': "npm uninstall express          # 从项目卸载\nnpm install -g nodemon         # 全局安装（所有项目可用）\nnpm uninstall -g nodemon      # 卸载全局包\nnpm list -g --depth=0         # 查看全局装了哪些"
        },
        {
          'type': "warn",
          'title': "别手删 node_modules",
          'text': "node_modules 巨大且结构复杂，手动删除容易出问题。要重装依赖，正确姿势是删除后执行 <code.inline>npm install</code>（或 <code.inline>npm ci</code> 用 lock 文件精确安装）。"
        },
        {
          'type': "info",
          'title': "npm 太慢怎么办",
          'text': "国内用户可以把 npm 源换成淘宝镜像：<code.inline>npm config set registry https://registry.npmmirror.com</code.inline>。之后安装速度会快很多。想恢复官方源就执行 <code.inline>npm config set registry https://registry.npmjs.org</code.inline>。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"npm 包管理器\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"npm 包管理器\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"npm 包管理器\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "npm init -y 生成 package.json 项目清单",
            "npm install 安装依赖，依赖记入 dependencies",
            "--save-dev 装开发依赖，进入 devDependencies",
            "scripts 用 npm run 调用，start/dev 是常用命名",
            "npm uninstall 卸载，-g 表示全局安装",
            "换淘宝镜像 registry 可加速，别手删 node_modules"
          ]
        }
      ],
      'templates': [
        {
          'name': "scripts 示例（概念）",
          'code': "// package.json 中的 scripts\n{\n  \"scripts\": {\n    \"start\": \"node index.js\",\n    \"dev\": \"nodemon index.js\"\n  }\n}\n\n// 终端运行：npm start 或 npm run dev"
        }
      ]
    },
    {
      'id': "nd-6",
      'title': "内置模块：fs 文件系统",
      'summary': "同步/异步读写文件、追加内容、获取文件信息，理解阻塞与非阻塞。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "<code.inline>fs</code.inline>（File System）是 Node 的文件系统模块，读写文件全靠它。它提供两套 API：**同步**（Sync 后缀，简单但会阻塞）和**异步**（回调/Promise，不阻塞，推荐）。"
        },
        {
          'type': "h",
          'text': "同步读取：readFileSync"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "同步读取文件",
          'code': "// 需要本地 Node 环境运行\nconst fs = require(\"fs\")\n\n// 同步读取（阻塞）：代码会等文件读完才继续\ntry {\n  const data = fs.readFileSync(\"hello.txt\", \"utf8\")\n  console.log(\"文件内容：\", data)\n} catch (err) {\n  console.error(\"读取失败：\", err.message)\n}"
        },
        {
          'type': "h",
          'text': "异步读取：readFile"
        },
        {
          'type': "p",
          'text': "异步版本不阻塞主线程：发起读取后先继续做别的事，读完再回调。新版 Node 也支持 Promise 写法（用 <code.inline>fs/promises</code.inline>）。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "异步读取（回调版 + Promise 版）",
          'code': "const fs = require(\"fs\")\n\n// 回调风格\nfs.readFile(\"hello.txt\", \"utf8\", (err, data) => {\n  if (err) {\n    console.error(\"读取失败：\", err.message)\n    return\n  }\n  console.log(\"内容：\", data)\n})\nconsole.log(\"这行会先打印（异步不阻塞）\")\n\n// Promise 风格（推荐，更清爽）\nconst fsp = require(\"fs/promises\")\nasync function readIt() {\n  try {\n    const data = await fsp.readFile(\"hello.txt\", \"utf8\")\n    console.log(\"Promise 读取：\", data)\n  } catch (err) {\n    console.error(\"读取失败：\", err.message)\n  }\n}\nreadIt()"
        },
        {
          'type': "h",
          'text': "写入与追加"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "writeFile 与 appendFile",
          'code': "const fsp = require(\"fs/promises\")\n\nasync function writeDemo() {\n  // 写入（覆盖原有内容）\n  await fsp.writeFile(\"log.txt\", \"第一行日志\\n\")\n  console.log(\"写入完成\")\n\n  // 追加（在末尾新增）\n  await fsp.appendFile(\"log.txt\", \"第二行日志\\n\")\n  console.log(\"追加完成\")\n\n  // 读回验证\n  const content = await fsp.readFile(\"log.txt\", \"utf8\")\n  console.log(content)\n}\n\nwriteDemo().catch(console.error)"
        },
        {
          'type': "h",
          'text': "同步 vs 异步，何时用哪个"
        },
        {
          'type': "table",
          'head': [
            "场景",
            "推荐",
            "原因"
          ],
          'rows': [
            [
              "脚本一次性任务",
              "同步 Sync",
              "简单直接，阻塞无所谓"
            ],
            [
              "Web 服务器处理请求",
              "异步",
              "不阻塞主线程，扛并发"
            ],
            [
              "启动时读配置",
              "同步",
              "启动阶段可以等"
            ],
            [
              "大量文件操作",
              "异步",
              "避免卡住其他任务"
            ]
          ]
        },
        {
          'type': "h",
          'text': "文件信息：stat"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "获取文件信息",
          'code': "const fsp = require(\"fs/promises\")\n\nasync function infoDemo() {\n  const stat = await fsp.stat(\"log.txt\")\n  console.log(\"是文件吗：\", stat.isFile())\n  console.log(\"大小（字节）：\", stat.size)\n  console.log(\"创建时间：\", stat.birthtime)\n  console.log(\"修改时间：\", stat.mtime)\n}\n\ninfoDemo().catch((e) => console.error(\"文件不存在：\", e.message))"
        },
        {
          'type': "warn",
          'title': "路径和编码两个坑",
          'text': "**路径**：相对路径是相对『进程当前工作目录』，不是脚本文件位置。为稳妥，多用 <code.inline>path.join(__dirname, \"data.txt\")</code.inline>（下一章讲）。**编码**：读取文本文件记得传 <code.inline>\"utf8\"</code.inline>，否则得到的是 Buffer 二进制，直接打印会是一串数字。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"内置模块：fs 文件系统\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"内置模块：fs 文件系统\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"内置模块：fs 文件系统\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "fs 是文件系统模块，读写文件、追加、查询信息",
            "同步（Sync 后缀）简单但阻塞；异步不阻塞，Web 服务里用异步",
            "fs/promises 提供 Promise 版异步 API，配合 async/await 最爽",
            "writeFile 覆盖写入，appendFile 追加写入",
            "stat 获取大小/时间/类型等信息",
            "相对路径基于当前工作目录，建议用 __dirname 拼绝对路径；文本读取传 utf8"
          ]
        }
      ],
      'templates': [
        {
          'name': "写日志再读回（概念）",
          'code': "// 需要本地 Node 运行\n// const fsp = require(\"fs/promises\")\n// await fsp.writeFile(\"log.txt\", \"hello\\n\")\n\nconsole.log(\"fs 模块需要本地 Node 环境\")"
        }
      ]
    },
    {
      'id': "nd-7",
      'title': "内置模块：path 与 os，以及 process",
      'summary': "路径拼接与解析、系统信息获取、process 全局对象（argv/env/cwd）。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "写程序离不开路径和系统环境。这一章讲三个常用内置对象/模块：<code.inline>path</code.inline>（路径）、<code.inline>os</code.inline>（系统信息）、<code.inline>process</code.inline>（当前进程）。"
        },
        {
          'type': "h",
          'text': "path：处理路径的利器"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "path 常用方法",
          'code': "const path = require(\"path\")\n\n// join：拼接路径（自动处理分隔符，Windows 用 \\\\，macOS/Linux 用 /）\nconst full = path.join(__dirname, \"data\", \"user.json\")\nconsole.log(full)\n\n// resolve：解析为绝对路径\nconsole.log(path.resolve(\"src\", \"index.js\"))\n\n// 常用信息\nconsole.log(path.basename(\"/a/b/file.txt\"))     // file.txt\nconsole.log(path.extname(\"/a/b/file.txt\"))      // .txt\nconsole.log(path.dirname(\"/a/b/file.txt\"))      // /a/b\n\n// __dirname 是当前文件所在目录（模块级）"
        },
        {
          'type': "warn",
          'title': "拼接路径别用 +",
          'text': "用字符串加号拼路径在 Windows 上会出问题（分隔符是反斜杠 <code.inline>\\</code.inline>，手写很容易漏或写错）。一律用 <code.inline>path.join</code.inline> 或 <code.inline>path.resolve</code.inline>，它会自动处理平台差异。"
        },
        {
          'type': "h",
          'text': "os：获取系统信息"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "os 常用方法",
          'code': "const os = require(\"os\")\n\nconsole.log(\"操作系统：\", os.type(), os.release())\nconsole.log(\"主机名：\", os.hostname())\nconsole.log(\"CPU 核数：\", os.cpus().length)\nconsole.log(\"总内存(GB)：\", (os.totalmem() / 1024 ** 3).toFixed(2))\nconsole.log(\"可用内存(GB)：\", (os.freemem() / 1024 ** 3).toFixed(2))\nconsole.log(\"临时目录：\", os.tmpdir())\nconsole.log(\"用户目录：\", os.homedir())"
        },
        {
          'type': "h",
          'text': "process：当前进程的全局对象"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "process 常用属性",
          'code': "// 命令行参数（前两个固定是 node 和脚本路径）\nconsole.log(\"argv:\", process.argv)\n\n// 环境变量\nconsole.log(\"NODE_ENV:\", process.env.NODE_ENV)\nconsole.log(\"HOME:\", process.env.HOME || process.env.USERPROFILE)\n\n// 当前工作目录\nconsole.log(\"cwd:\", process.cwd())\n\n// 进程信息\nconsole.log(\"Node 版本:\", process.version)\nconsole.log(\"PID:\", process.pid)\n\n// 常用：读环境变量并给默认值\nconst port = process.env.PORT || 3000\nconsole.log(\"服务端口:\", port)"
        },
        {
          'type': "info",
          'title': "argv / env / cwd 速记",
          'text': "<code.inline>process.argv</code.inline> 是命令行传的参数数组；<code.inline>process.env</code.inline> 是环境变量对象（可存密码、端口等配置）；<code.inline>process.cwd()</code.inline> 是你在哪个目录运行 node 的路径。这三个在开发命令行工具和部署时极其常用。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"内置模块：path 与 os，以及 process\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"内置模块：path 与 os，以及 process\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"内置模块：path 与 os，以及 process\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "path.join/resolve 安全拼接路径，别用 + 号拼",
            "path.basename/extname/dirname 解析路径各段",
            "__dirname 表示当前文件所在目录",
            "os 模块获取系统/CPU/内存/主机信息",
            "process.argv 命令行参数、process.env 环境变量、process.cwd() 工作目录",
            "process.env.PORT 设默认值是部署常用技巧"
          ]
        }
      ],
      'templates': [
        {
          'name': "打印环境信息（概念）",
          'code': "// 需要本地 Node 运行\n// console.log(process.argv)\n// console.log(process.env.NODE_ENV)\n\nconsole.log(\"process 需要本地 Node 环境\")"
        }
      ]
    },
    {
      'id': "nd-8",
      'title': "事件与 EventEmitter",
      'summary': "events 模块、on/emit、once、error 事件，理解 Node 的事件驱动模型。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "Node 的核心是**事件驱动**：很多对象会『发事件』，你可以注册监听器去响应。这个机制由内置的 <code.inline>events</code.inline> 模块提供，核心是 **EventEmitter**（事件发射器）类。"
        },
        {
          'type': "h",
          'text': "事件驱动模型"
        },
        {
          'type': "p",
          'text': "想象一下微信公众号：你『关注』某个号（注册监听器），号主一发文（触发事件），你就收到推送（回调执行）。EventEmitter 就是这个『公众号系统』——对象用 <code.inline>.on(事件名, 回调)</code.inline> 注册监听，用 <code.inline>.emit(事件名)</code.inline> 触发。"
        },
        {
          'type': "h",
          'text': "创建和使用 EventEmitter"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "on 与 emit",
          'code': "const EventEmitter = require(\"events\")\n\n// 创建一个发射器（通常继承它做自定义类）\nconst emitter = new EventEmitter()\n\n// 注册监听器\nemitter.on(\"greet\", (name) => {\n  console.log(`你好，${name}！`)\n})\n\nemitter.on(\"greet\", (name) => {\n  console.log(`再次欢迎 ${name} 到来`)\n})\n\n// 触发事件（可以传参数）\nemitter.emit(\"greet\", \"小明\")\n// 输出：\n// 你好，小明！\n// 再次欢迎 小明 到来"
        },
        {
          'type': "h",
          'text': "继承 EventEmitter"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "自定义类继承",
          'code': "const EventEmitter = require(\"events\")\n\nclass OrderService extends EventEmitter {\n  createOrder(order) {\n    console.log(\"创建订单：\", order.id)\n    // 业务完成后发事件，让其他模块响应\n    this.emit(\"orderCreated\", order)\n  }\n}\n\nconst service = new OrderService()\n\n// 下单成功后发通知、扣库存（解耦）\nservice.on(\"orderCreated\", (order) => {\n  console.log(`发送短信给 ${order.user}`)\n})\nservice.on(\"orderCreated\", (order) => {\n  console.log(`扣减商品 ${order.product} 库存`)\n})\n\nservice.createOrder({ id: 1001, user: \"小红\", product: \"苹果\" })"
        },
        {
          'type': "h",
          'text': "once：只监听一次"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "once 只触发一次",
          'code': "const EventEmitter = require(\"events\")\nconst emitter = new EventEmitter()\n\nemitter.once(\"wakeup\", () => {\n  console.log(\"只响应第一次！\")\n})\n\nemitter.emit(\"wakeup\")   // 输出：只响应第一次！\nemitter.emit(\"wakeup\")   // 没输出（once 已移除）"
        },
        {
          'type': "h",
          'text': "error 事件：必须监听"
        },
        {
          'type': "p",
          'text': "EventEmitter 有个特殊约定：**error 事件如果没有监听器，会直接抛异常让进程崩溃**。所以凡是用到可能出错的发射器，一定要监听 error。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "错误事件处理",
          'code': "const EventEmitter = require(\"events\")\nconst emitter = new EventEmitter()\n\n// 不监听 error 的话，下面 emit(\"error\") 会让进程崩溃\ntry {\n  emitter.on(\"error\", (err) => {\n    console.error(\"捕获到错误：\", err.message)\n  })\n\n  emitter.emit(\"error\", new Error(\"数据库连接失败\"))\n  console.log(\"程序继续运行\")   // 这行会打印\n} catch (e) {\n  console.error(\"外层 catch：\", e.message)\n}"
        },
        {
          'type': "warn",
          'title': "监听器泄漏",
          'text': "每调一次 on 就注册一个监听器，频繁注册但不移除会泄漏内存。可以用 <code.inline>emitter.off(事件, 回调)</code.inline> 或 <code.inline>removeListener</code.inline> 移除；当同一事件监听器超过 10 个，Node 会警告 MaxListenersExceededWarning，这时可以用 <code.inline>setMaxListeners(n)</code.inline> 调大上限。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"事件与 EventEmitter\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"事件与 EventEmitter\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"事件与 EventEmitter\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "EventEmitter 是 Node 事件驱动的核心，events 模块提供",
            ".on() 注册监听器，.emit() 触发事件并可传参",
            ".once() 只响应一次，.off() 移除监听器",
            "自定义类可继承 EventEmitter 实现解耦的模块通信",
            "error 事件没监听会直接崩溃，务必处理",
            "监听器太多会内存泄漏，用 off 清理"
          ]
        }
      ],
      'templates': [
        {
          'name': "发布订阅小demo",
          'code': "const EventEmitter = require(\"events\")\nconst bus = new EventEmitter()\n\nbus.on(\"news\", (t) => console.log(\"读者A收到:\", t))\nbus.on(\"news\", (t) => console.log(\"读者B收到:\", t))\n\nbus.emit(\"news\", \"Node.js 版本发布！\")"
        }
      ]
    },
    {
      'id': "nd-9",
      'title': "Buffer 与 Stream：处理二进制与大文件",
      'summary': "Buffer 二进制数据、读写流、pipe 管道，优雅处理大文件。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "文件、图片、网络数据在底层都是**二进制**。Node 用 <code.inline>Buffer</code.inline> 表示二进制数据，用 **Stream（流）** 分段处理大数据——这两个是读大文件、做下载服务的基础。"
        },
        {
          'type': "h",
          'text': "Buffer：二进制数据的容器"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "Buffer 的创建与转换",
          'code': "// 从字符串创建 Buffer（默认 utf8）\nconst buf = Buffer.from(\"你好 Node\")\nconsole.log(buf)                 // 十六进制字节\nconsole.log(buf.length)          // 字节数\n\n// Buffer 转回字符串\nconsole.log(buf.toString())      // 你好 Node\nconsole.log(buf.toString(\"base64\"))  // base64 编码\n\n// 指定大小创建（通常用来存读到的文件）\nconst empty = Buffer.alloc(16)\nconsole.log(empty.length)        // 16\n\n// 拼接\nconst a = Buffer.from(\"Hello \")\nconst b = Buffer.from(\"World\")\nconsole.log(Buffer.concat([a, b]).toString())  // Hello World"
        },
        {
          'type': "h",
          'text': "为什么需要 Stream"
        },
        {
          'type': "p",
          'text': "如果你用 <code.inline>readFile</code> 一次读取一个 5GB 的视频文件，内存会直接爆掉。**流（Stream）** 的做法是：把数据切成一块一块（chunk），边读边处理，内存占用极小。就像用吸管喝水，而不是把整个水池灌进嘴里。"
        },
        {
          'type': "h",
          'text': "读取流与写入流"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "流式读取大文件",
          'code': "const fs = require(\"fs\")\n\n// 创建读取流\nconst readStream = fs.createReadStream(\"big.txt\", \"utf8\")\n\nlet chunkCount = 0\nreadStream.on(\"data\", (chunk) => {\n  chunkCount++\n  console.log(`第 ${chunkCount} 块，大小 ${chunk.length}`)\n})\n\nreadStream.on(\"end\", () => {\n  console.log(\"全部读完，共\", chunkCount, \"块\")\n})\n\nreadStream.on(\"error\", (err) => {\n  console.error(\"读取出错：\", err.message)\n})"
        },
        {
          'type': "h",
          'text': "pipe：管道一键搬运"
        },
        {
          'type': "p",
          'text': "最常见需求是把读到的数据写到另一个文件（或返回给浏览器）。<code.inline>pipe</code> 方法把读取流接到写入流上，自动处理背压和分块，一行搞定。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "pipe 复制大文件",
          'code': "const fs = require(\"fs\")\n\n// 读取流 -> 写入流（边读边写，不占大内存）\nconst source = fs.createReadStream(\"big.mp4\")\nconst dest = fs.createWriteStream(\"big-copy.mp4\")\n\nsource.pipe(dest)\n\ndest.on(\"finish\", () => {\n  console.log(\"复制完成！\")\n})\n\nsource.on(\"error\", (e) => console.error(\"读出错：\", e.message))\ndest.on(\"error\", (e) => console.error(\"写出错：\", e.message))"
        },
        {
          'type': "warn",
          'title': "别用 readFile 读大文件",
          'text': "新手常犯：读大文件用 <code.inline>fs.readFileSync</code> 一次性读进来。几百 MB 的文件可能让内存暴涨、程序卡死甚至崩溃。**大文件一律用流**，小配置文件才用 readFile。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Buffer 与 Stream：处理二进制与大文件\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Buffer 与 Stream：处理二进制与大文件\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Buffer 与 Stream：处理二进制与大文件\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Buffer 表示二进制数据，Buffer.from/toString 与字符串互转",
            "Stream 把大数据切成 chunk 分段处理，内存占用小",
            "createReadStream/createWriteStream 创建读写流",
            "pipe 把读取流接到写入流，自动处理分块与背压",
            "大文件用流，别用 readFile 一次性读",
            "流的 data/end/error 事件驱动处理"
          ]
        }
      ],
      'templates': [
        {
          'name': "流式处理（概念）",
          'code': "// 需要本地 Node 运行\n// const fs = require(\"fs\")\n// fs.createReadStream(\"big.txt\").pipe(process.stdout)\n\nconsole.log(\"Stream 需要本地 Node 环境\")"
        }
      ]
    },
    {
      'id': "nd-10",
      'title': "HTTP 服务器：用 Node 写后端",
      'summary': "http.createServer、req/res、路由分发、状态码、JSON 响应与静态文件。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "Node 的看家本领是写**服务器**。内置的 <code.inline>http</code> 模块可以不用任何框架就搭建一个能处理请求、返回响应的 HTTP 服务。这一章从零手写服务器，理解底层后下一章再上 Express 框架。"
        },
        {
          'type': "h",
          'text': "创建第一个服务器"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "最简单的 HTTP 服务器",
          'code': "const http = require(\"http\")\n\n// createServer 接收一个处理函数：参数是请求(req)和响应(res)\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { \"Content-Type\": \"text/plain; charset=utf-8\" })\n  res.end(\"Hello from Node 服务器！\")\n})\n\n// 监听 3000 端口\nserver.listen(3000, () => {\n  console.log(\"服务器已启动：http://localhost:3000\")\n})"
        },
        {
          'type': "p",
          'text': "保存为 <code.inline>server.js</code>，运行 <code.inline>node server.js</code>，然后浏览器打开 <code.inline>http://localhost:3000</code>，就能看到输出。想停掉服务按 Ctrl+C。"
        },
        {
          'type': "h",
          'text': "req 与 res"
        },
        {
          'type': "p",
          'text': "<code.inline>req</code> 是请求对象：<code.inline>req.url</code>（路径）、<code.inline>req.method</code>（GET/POST 等）、<code.inline>req.headers</code>（请求头）。<code.inline>res</code> 是响应对象：<code.inline>res.writeHead</code> 设置状态码和响应头，<code.inline>res.end</code> 结束响应并返回内容。"
        },
        {
          'type': "h",
          'text': "路由分发"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "根据路径分发",
          'code': "const http = require(\"http\")\n\nconst server = http.createServer((req, res) => {\n  const url = req.url\n\n  if (url === \"/\" || url === \"/home\") {\n    res.writeHead(200, { \"Content-Type\": \"text/html; charset=utf-8\" })\n    res.end(\"<h1>首页</h1><a href=\\\"/about\\\">关于我们</a>\")\n  } else if (url === \"/about\") {\n    res.writeHead(200, { \"Content-Type\": \"text/plain; charset=utf-8\" })\n    res.end(\"这是关于页面\")\n  } else {\n    res.writeHead(404, { \"Content-Type\": \"text/plain; charset=utf-8\" })\n    res.end(\"404 页面不存在\")\n  }\n})\n\nserver.listen(3000)"
        },
        {
          'type': "h",
          'text': "返回 JSON 数据（最常用的 API 形态）"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "返回 JSON 接口",
          'code': "const http = require(\"http\")\n\nconst users = [\n  { id: 1, name: \"小明\" },\n  { id: 2, name: \"小红\" },\n]\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { \"Content-Type\": \"application/json; charset=utf-8\" })\n  // 对象 -> JSON 字符串\n  res.end(JSON.stringify({ ok: true, data: users }))\n})\n\nserver.listen(3000, () => {\n  console.log(\"JSON API: http://localhost:3000\")\n})"
        },
        {
          'type': "h",
          'text': "静态文件服务"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "返回一个 HTML 文件",
          'code': "const http = require(\"http\")\nconst fs = require(\"fs\")\nconst path = require(\"path\")\n\nconst server = http.createServer((req, res) => {\n  if (req.url === \"/\") {\n    const filePath = path.join(__dirname, \"public\", \"index.html\")\n    fs.readFile(filePath, (err, data) => {\n      if (err) {\n        res.writeHead(404)\n        res.end(\"文件不存在\")\n        return\n      }\n      res.writeHead(200, { \"Content-Type\": \"text/html; charset=utf-8\" })\n      res.end(data)\n    })\n  } else {\n    res.writeHead(404)\n    res.end(\"Not Found\")\n  }\n})\n\nserver.listen(3000)"
        },
        {
          'type': "warn",
          'title': "端口被占用怎么办",
          'text': "运行时报 <code.inline>EADDRINUSE</code> 说明端口被占用。解决：换一个端口（listen(3001)），或者找到占用进程结束它。Windows 上可以 <code.inline>netstat -ano | findstr :3000</code> 查占用进程的 PID，再在任务管理器结束。"
        },
        {
          'type': "info",
          'title': "代码里的转义说明",
          'text': "示例中 HTML 字符串里的双引号写成了 <code.inline>\\\"</code>，是因为整个 code 字符串外层用了双引号，内层双引号需要转义。实际效果就是输出 <code.inline><a href=\"/about\">关于我们</a></code>。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"HTTP 服务器：用 Node 写后端\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"HTTP 服务器：用 Node 写后端\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"HTTP 服务器：用 Node 写后端\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "http.createServer((req, res) => {...}) 创建服务器",
            "res.writeHead 设状态码与响应头，res.end 结束响应",
            "req.url/req.method 判断路径与请求方式，实现路由",
            "JSON 接口：JSON.stringify 序列化后返回，Content-Type 用 application/json",
            "返回 HTML 文件：fs 读取 + 设置 text/html",
            "EADDRINUSE 表示端口被占用，换端口或结束进程"
          ]
        }
      ],
      'templates': [
        {
          'name': "最小服务器（概念）",
          'code': "// 需要本地 Node 运行\n// const http = require(\"http\")\n// const server = http.createServer((req, res) => res.end(\"hi\"))\n// server.listen(3000)\n\nconsole.log(\"http 模块需要本地 Node 环境\")"
        }
      ]
    },
    {
      'id': "nd-11",
      'title': "Express 框架入门",
      'summary': "安装 express、路由 GET/POST、中间件、静态资源与 URL 参数。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "手写 http 服务器能跑，但路由一多、要处理表单、要加中间件时就痛苦了。**Express** 是 Node 最流行的 Web 框架，把路由、中间件、静态文件这些繁琐事都封装好，几行就能搭起一个 API 服务。"
        },
        {
          'type': "h",
          'text': "安装 Express"
        },
        {
          'type': "code",
          'lang': "text",
          'title': "新建项目并安装 express",
          'code': "mkdir my-express\ncd my-express\nnpm init -y\nnpm install express"
        },
        {
          'type': "h",
          'text': "第一个 Express 应用"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "Express 最小应用",
          'code': "const express = require(\"express\")\n\n// 创建应用\nconst app = express()\n\n// 根路径返回内容\napp.get(\"/\", (req, res) => {\n  res.send(\"Hello Express！\")\n})\n\n// 启动\napp.listen(3000, () => {\n  console.log(\"Express 运行在 http://localhost:3000\")\n})"
        },
        {
          'type': "h",
          'text': "GET 与 POST 路由"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "多种请求方法",
          'code': "const express = require(\"express\")\nconst app = express()\n\n// 解析 JSON 请求体（POST 时用）\napp.use(express.json())\n\n// GET 查询\napp.get(\"/users\", (req, res) => {\n  res.json([{ id: 1, name: \"小明\" }])\n})\n\n// POST 新增\napp.post(\"/users\", (req, res) => {\n  const body = req.body\n  console.log(\"收到新增：\", body)\n  res.status(201).json({ ok: true, data: body })\n})\n\napp.listen(3000)"
        },
        {
          'type': "h",
          'text': "URL 参数"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "路径参数与查询参数",
          'code': "const express = require(\"express\")\nconst app = express()\n\n// 路径参数：/users/5  中的 5\napp.get(\"/users/:id\", (req, res) => {\n  res.json({ id: req.params.id, msg: \"这是用户详情\" })\n})\n\n// 查询参数：/search?q=苹果&page=1\napp.get(\"/search\", (req, res) => {\n  res.json({ query: req.query })\n})\n\napp.listen(3000)\n\n// 测试：\n// GET /users/5     -> { id: \"5\" }\n// GET /search?q=苹果 -> { query: { q: \"苹果\" } }"
        },
        {
          'type': "h",
          'text': "中间件 middleware"
        },
        {
          'type': "p",
          'text': "**中间件**是在请求到达路由处理器之前（或之后）执行的一段函数，可以做日志、鉴权、解析请求体等。用 <code.inline>app.use</code> 挂载，中间件里调 <code.inline>next()</code> 放行到下一个。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "日志中间件",
          'code': "const express = require(\"express\")\nconst app = express()\n\n// 自定义日志中间件\napp.use((req, res, next) => {\n  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)\n  next()   // 放行到下一个处理\n})\n\napp.get(\"/\", (req, res) => {\n  res.send(\"中间件已记录本次请求\")\n})\n\napp.listen(3000)"
        },
        {
          'type': "h",
          'text': "静态资源"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "托管静态文件",
          'code': "const express = require(\"express\")\nconst app = express()\n\n// 把 public 文件夹直接暴露给浏览器\napp.use(express.static(\"public\"))\n\n// 现在 public/index.html 可通过 /index.html 访问\napp.listen(3000)"
        },
        {
          'type': "warn",
          'title': "中间件的顺序很重要",
          'text': "中间件按挂载顺序执行。把鉴权中间件放在路由**之前**，才能拦下所有请求；如果放在后面就形同虚设。规划中间件顺序时心里默念：**从上到下、先拦后放**。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Express 框架入门\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Express 框架入门\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Express 框架入门\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "npm install express 安装，app.get/post 定义路由",
            "res.json 返回 JSON，res.send 返回文本，res.status 设状态码",
            "路径参数 req.params，查询参数 req.query",
            "中间件用 app.use 挂载，next() 放行，顺序影响执行",
            "express.json() 解析 POST 的 JSON 请求体",
            "express.static 一行托管静态资源文件夹"
          ]
        }
      ],
      'templates': [
        {
          'name': "Express 最小服务（概念）",
          'code': "// 需要本地 Node + npm install express\n// const express = require(\"express\")\n// const app = express()\n// app.get(\"/\", (req, res) => res.send(\"hi\"))\n// app.listen(3000)\n\nconsole.log(\"Express 需要本地安装\")"
        }
      ]
    },
    {
      'id': "nd-12",
      'title': "模板与 JSON API",
      'summary': "返回 HTML 模板字符串、构建 JSON REST 接口、用 fetch 客户端调用。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "上一章学会了路由。这一章把『服务端返回什么』讲透：既能返回渲染好的 HTML 页面（服务端渲染），也能返回 JSON 数据供前端/App 调用（前后端分离 API）。"
        },
        {
          'type': "h",
          'text': "返回 HTML：模板字符串渲染"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "用模板字符串生成 HTML",
          'code': "const express = require(\"express\")\nconst app = express()\n\nconst todos = [\"学习 Node\", \"写 API\", \"练项目\"]\n\napp.get(\"/\", (req, res) => {\n  // 用模板字符串拼出 HTML\n  const items = todos.map((t) => `<li>${t}</li>`).join(\"\")\n  const html = `\n    <!DOCTYPE html>\n    <html>\n    <head><meta charset=\"utf-8\"><title>待办清单</title></head>\n    <body>\n      <h1>我的待办</h1>\n      <ul>${items}</ul>\n    </body>\n    </html>\n  `\n  res.type(\"html\").send(html)\n})\n\napp.listen(3000)"
        },
        {
          'type': "h",
          'text': "返回 JSON：REST 接口"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "标准 REST 接口",
          'code': "const express = require(\"express\")\nconst app = express()\napp.use(express.json())\n\nlet todos = [\n  { id: 1, text: \"学习 Node\", done: false },\n]\nlet nextId = 2\n\n// 查询列表\napp.get(\"/api/todos\", (req, res) => {\n  res.json({ ok: true, data: todos })\n})\n\n// 新增\napp.post(\"/api/todos\", (req, res) => {\n  const todo = { id: nextId++, text: req.body.text, done: false }\n  todos.push(todo)\n  res.status(201).json({ ok: true, data: todo })\n})\n\n// 修改状态\napp.patch(\"/api/todos/:id\", (req, res) => {\n  const id = Number(req.params.id)\n  const todo = todos.find((t) => t.id === id)\n  if (!todo) return res.status(404).json({ ok: false, msg: \"未找到\" })\n  todo.done = req.body.done\n  res.json({ ok: true, data: todo })\n})\n\n// 删除\napp.delete(\"/api/todos/:id\", (req, res) => {\n  const id = Number(req.params.id)\n  todos = todos.filter((t) => t.id !== id)\n  res.json({ ok: true })\n})\n\napp.listen(3000, () => console.log(\"API: http://localhost:3000\"))"
        },
        {
          'type': "h",
          'text': "客户端调用：fetch"
        },
        {
          'type': "p",
          'text': "Node 18+ 内置了 <code.inline>fetch</code>，写个小脚本就能调用自己（或别人）的 API。这也是学习测试 API 的好方式。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "用 fetch 调用接口",
          'code': "// 需要先启动上面的 API 服务，再运行本脚本\nasync function main() {\n  // 新增一条\n  const created = await fetch(\"http://localhost:3000/api/todos\", {\n    method: \"POST\",\n    headers: { \"Content-Type\": \"application/json\" },\n    body: JSON.stringify({ text: \"用 fetch 添加的待办\" }),\n  }).then((r) => r.json())\n  console.log(\"新增结果：\", created)\n\n  // 查询列表\n  const list = await fetch(\"http://localhost:3000/api/todos\").then((r) => r.json())\n  console.log(\"当前列表：\", list)\n}\n\nmain().catch(console.error)"
        },
        {
          'type': "h",
          'text': "设计 API 的三个小建议"
        },
        {
          'type': "list",
          'items': [
            "用动词一致的语义：GET 查询、POST 新增、PATCH/PUT 修改、DELETE 删除（REST 风格）。",
            "统一返回格式：固定 <code.inline>{ ok: true/false, data: ..., msg: ... }</code>，前端好处理。",
            "状态码表意：200 成功、201 创建成功、400 参数错误、404 不存在、500 服务器错误。"
          ]
        },
        {
          'type': "warn",
          'title': "JSON 里的特殊字符",
          'text': "用户输入里如果包含引号、换行，直接拼进 JSON 字符串会破坏格式。务必用 <code.inline>JSON.stringify</code> 序列化对象，而不是手动拼接 JSON 字符串。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"模板与 JSON API\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"模板与 JSON API\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"模板与 JSON API\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "模板字符串 + res.type(\"html\").send() 可做服务端渲染页面",
            "REST 接口：GET 查 / POST 增 / PATCH 改 / DELETE 删",
            "统一返回 { ok, data, msg }，状态码表意",
            "Node 18+ 内置 fetch，可写脚本调用 API",
            "拼接 JSON 用 JSON.stringify，别手拼字符串"
          ]
        }
      ],
      'templates': [
        {
          'name': "fetch 调用示例（概念）",
          'code': "// 需要本地 Node 18+ 和运行中的服务\n// const res = await fetch(\"http://localhost:3000/api/todos\")\n// const data = await res.json()\n// console.log(data)\n\nconsole.log(\"fetch API 需要本地 Node 环境\")"
        }
      ]
    },
    {
      'id': "nd-13",
      'title': "数据库操作：better-sqlite3",
      'summary': "连接数据库、建表、增删改查与参数化查询防注入。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "光把数据存在内存数组里，服务一重启就丢了。真正的项目要把数据存进**数据库**。这一章用 **SQLite**（一个零配置的单文件数据库）+ <code.inline>better-sqlite3</code> 驱动，讲清楚增删改查和防注入。"
        },
        {
          'type': "h",
          'text': "安装依赖"
        },
        {
          'type': "code",
          'lang': "text",
          'title': "安装 better-sqlite3",
          'code': "npm init -y\nnpm install better-sqlite3"
        },
        {
          'type': "h",
          'text': "连接数据库与建表"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "连接并建表",
          'code': "const Database = require(\"better-sqlite3\")\n\n// 连接（文件不存在会自动创建）\nconst db = new Database(\"app.db\")\n\n// 建表：id 自增主键，text 待办内容，done 完成状态\ndb.exec(`\n  CREATE TABLE IF NOT EXISTS todos (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    text TEXT NOT NULL,\n    done INTEGER DEFAULT 0\n  )\n`)\n\nconsole.log(\"数据库初始化完成\")\n\n// 插入几条测试数据\ndb.prepare(\"INSERT INTO todos (text, done) VALUES (?, ?)\").run(\"学习数据库\", 0)\ndb.prepare(\"INSERT INTO todos (text, done) VALUES (?, ?)\").run(\"做待办项目\", 0)\nconsole.log(\"测试数据已插入\")"
        },
        {
          'type': "h",
          'text': "查询：all / get"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "查询数据",
          'code': "const Database = require(\"better-sqlite3\")\nconst db = new Database(\"app.db\")\n\n// 查所有\nconst rows = db.prepare(\"SELECT * FROM todos\").all()\nconsole.log(\"所有待办：\", rows)\n\n// 查单条（带条件）\nconst one = db.prepare(\"SELECT * FROM todos WHERE id = ?\").get(1)\nconsole.log(\"id=1 的待办：\", one)\n\n// 统计\nconst count = db.prepare(\"SELECT COUNT(*) AS n FROM todos\").get()\nconsole.log(\"共\", count.n, \"条\")"
        },
        {
          'type': "h",
          'text': "增删改查完整演示"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "CRUD 操作",
          'code': "const Database = require(\"better-sqlite3\")\nconst db = new Database(\"app.db\")\n\n// 增（INSERT，返回受影响行数）\nconst info = db.prepare(\"INSERT INTO todos (text) VALUES (?)\").run(\"新任务\")\nconsole.log(\"插入成功，新 id =\", info.lastInsertRowid)\n\n// 改（UPDATE）\ndb.prepare(\"UPDATE todos SET done = 1 WHERE id = ?\").run(info.lastInsertRowid)\nconsole.log(\"已标记完成\")\n\n// 删（DELETE）\ndb.prepare(\"DELETE FROM todos WHERE id = ?\").run(info.lastInsertRowid)\nconsole.log(\"已删除\")\n\n// 最终结果\nconsole.log(db.prepare(\"SELECT * FROM todos\").all())"
        },
        {
          'type': "h",
          'text': "参数化查询：防止 SQL 注入"
        },
        {
          'type': "p",
          'text': "**绝不要**把用户输入直接拼进 SQL 字符串（比如 <code.inline>\"SELECT * FROM users WHERE name = '\" + input + \"\\'\"</code>）。恶意输入能改写你的 SQL 造成数据泄露或破坏（这就是著名的 **SQL 注入**）。正确做法是用**占位符 <code.inline>?</code>**，让驱动安全地绑定参数。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "安全写法 vs 危险写法",
          'code': "const Database = require(\"better-sqlite3\")\nconst db = new Database(\"app.db\")\n\n// 危险：把用户输入直接拼进 SQL（会被注入攻击）\n// const sql = `SELECT * FROM users WHERE name = \"${userInput}\"`\n\n// 安全：使用 ? 占位符绑定参数\nconst userInput = \"小红\"  // 假设来自用户\nconst safe = db.prepare(\"SELECT * FROM users WHERE name = ?\")\nconst rows = safe.all(userInput)\nconsole.log(\"查询结果：\", rows)"
        },
        {
          'type': "info",
          'title': "better-sqlite3 是同步的",
          'text': "不同于 mysql2 等异步驱动，better-sqlite3 的 API 是同步的，代码简单直观，非常适合学习和中小项目。SQLite 本身是单文件数据库，适合原型和个人项目；企业级大型项目再上 MySQL/PostgreSQL，SQL 语法大同小异。"
        },
        {
          'type': "warn",
          'title': "MySQL 注入的经典教训",
          'text': "有一句著名的话：『不要在 SQL 里拼字符串』。无论 SQLite 还是 MySQL，凡是有用户输入参与的条件，一律用参数化查询（? 或 :name 占位符）。这是后端安全的底线之一。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"数据库操作：better-sqlite3\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"数据库操作：better-sqlite3\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"数据库操作：better-sqlite3\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "better-sqlite3 驱动 SQLite，零配置文件数据库，同步 API",
            "CREATE TABLE IF NOT EXISTS 建表，AUTOINCREMENT 自增主键",
            "增删改查：INSERT/UPDATE/DELETE/SELECT + prepare 预处理",
            "查询用 .all() 拿多行、.get() 拿单行、.run() 执行写操作",
            "参数化查询用 ? 占位符，防止 SQL 注入",
            "用户输入绝不拼进 SQL 字符串"
          ]
        }
      ],
      'templates': [
        {
          'name': "SQLite 增删改查（概念）",
          'code': "// 需要本地 npm install better-sqlite3\n// const db = new (require(\"better-sqlite3\"))(\"app.db\")\n// db.exec(\"CREATE TABLE IF NOT EXISTS t (id INTEGER PRIMARY KEY, name TEXT)\")\n\nconsole.log(\"better-sqlite3 需要本地安装\")"
        }
      ]
    },
    {
      'id': "nd-14",
      'title': "异步进阶：Promise 与 async/await",
      'summary': "回调地狱、Promise、async/await、Promise.all 并发与 try/catch 错误处理。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "Node 代码 90% 都在和异步打交道：读文件、查数据库、发请求。这一章把异步的『三件套』——**回调 → Promise → async/await** 一次讲透，并学会并发和错误处理。这是 Node 开发最重要的技能。"
        },
        {
          'type': "h",
          'text': "回调地狱：异步的原始形态"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "嵌套回调（回调地狱）",
          'code': "// 早期写法：一层套一层，代码像倒金字塔\n// readFile(\"a.txt\", (err, dataA) => {\n//   if (err) return console.error(err)\n//   readFile(\"b.txt\", (err, dataB) => {\n//     if (err) return console.error(err)\n//     readFile(\"c.txt\", (err, dataC) => {\n//       if (err) return console.error(err)\n//       console.log(dataA, dataB, dataC)\n//     })\n//   })\n// })\n\nconsole.log(\"回调嵌套太多会难以阅读和维护\")"
        },
        {
          'type': "h",
          'text': "Promise：把异步变成链式"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "Promise 链",
          'code': "const fsp = require(\"fs/promises\")\n\n// fs/promises 的方法返回 Promise\nfsp.readFile(\"a.txt\", \"utf8\")\n  .then((a) => {\n    console.log(\"读到 a：\", a)\n    return fsp.readFile(\"b.txt\", \"utf8\")  // 返回新 Promise，继续链\n  })\n  .then((b) => {\n    console.log(\"读到 b：\", b)\n  })\n  .catch((err) => {\n    console.error(\"任一步出错都到这里：\", err.message)\n  })"
        },
        {
          'type': "h",
          'text': "async/await：同步的写法，异步的体验"
        },
        {
          'type': "p",
          'text': "async/await 是 Promise 的语法糖：给函数加 <code.inline>async</code>，里面就能用 <code.inline>await</code> 等待 Promise 完成。代码看起来像同步，读起来非常顺畅。**这是现在的主流写法。**"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "async/await 版",
          'code': "const fsp = require(\"fs/promises\")\n\nasync function readAll() {\n  // 串行：一个读完再读下一个\n  const a = await fsp.readFile(\"a.txt\", \"utf8\")\n  console.log(\"a:\", a)\n  const b = await fsp.readFile(\"b.txt\", \"utf8\")\n  console.log(\"b:\", b)\n}\n\nreadAll().catch((err) => console.error(\"失败：\", err.message))"
        },
        {
          'type': "h",
          'text': "并发：Promise.all"
        },
        {
          'type': "p",
          'text': "多个互不依赖的任务可以**同时发起**（并发），用 <code.inline>Promise.all</code> 等它们全部完成。串行 3 个各 1 秒的任务要 3 秒，并发只要 1 秒。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "Promise.all 并发",
          'code': "const fsp = require(\"fs/promises\")\n\nasync function readConcurrent() {\n  // 三个读取同时发起，全部完成后一起拿到结果\n  const [a, b, c] = await Promise.all([\n    fsp.readFile(\"a.txt\", \"utf8\"),\n    fsp.readFile(\"b.txt\", \"utf8\"),\n    fsp.readFile(\"c.txt\", \"utf8\"),\n  ])\n  console.log(\"三个文件都读完了：\")\n  console.log(a, b, c)\n}\n\nreadConcurrent().catch(console.error)\n\n// 有一个失败，Promise.all 整体就失败（用 allSettled 可分别处理）"
        },
        {
          'type': "h",
          'text': "错误处理：try/catch"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "try/catch 捕获错误",
          'code': "async function safeTask() {\n  try {\n    const data = await fetchSomething()   // 可能失败的操作\n    console.log(\"成功：\", data)\n  } catch (err) {\n    // 失败时走到这里\n    console.error(\"处理失败：\", err.message)\n    // 可以记录日志、给用户友好提示、或重试\n  }\n}\n\nasync function fetchSomething() {\n  // 模拟可能失败\n  const ok = Math.random() > 0.3\n  if (!ok) throw new Error(\"网络请求失败\")\n  return \"数据\"\n}\n\nsafeTask()"
        },
        {
          'type': "warn",
          'title': "await 必须在 async 函数里",
          'text': "在普通函数里写 <code.inline>await xxx</code> 会直接报语法错误 <code.inline>SyntaxError: await is only valid in async functions</code>。解决办法：给所在函数加上 <code.inline>async</code> 关键字。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"异步进阶：Promise 与 async/await\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"异步进阶：Promise 与 async/await\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"异步进阶：Promise 与 async/await\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "回调嵌套过多就是『回调地狱』，难读难维护",
            "Promise 用 .then/.catch 链式处理异步",
            "async/await 是 Promise 的语法糖，现在的主流写法",
            "Promise.all 并发执行多个任务，全部完成再继续",
            "try/catch 捕获 async/await 的错误",
            "await 只能在 async 函数中使用"
          ]
        }
      ],
      'templates': [
        {
          'name': "模拟并发请求",
          'code': "function fetch(id) {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(`数据${id}`), 500 + id * 200)\n  })\n}\n\nasync function main() {\n  // 并发：三个同时发，约 0.9 秒全部完成\n  const results = await Promise.all([fetch(1), fetch(2), fetch(3)])\n  console.log(results)\n}\n\nmain()"
        }
      ]
    },
    {
      'id': "nd-15",
      'title': "命令行工具开发",
      'summary': "shebang、process.argv 解析、readline 交互输入与 npm link 全局命令。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "Node 的一个大用途是写**命令行工具（CLI）**——像 git、npm 那样在终端里用的命令。这一章教你从零做一个自己的命令行小工具，并把它变成全局命令。"
        },
        {
          'type': "h",
          'text': "命令行脚本基础"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "cli.js 命令行脚本",
          'code': "#!/usr/bin/env node\n// 上一行 shebang 告诉系统用 node 执行本脚本（Unix/Linux/macOS 需要）\n\nconst args = process.argv.slice(2)\n\nconsole.log(\"收到的参数：\", args)\n\nif (args.includes(\"--help\") || args.includes(\"-h\")) {\n  console.log(\"用法：node cli.js <名字> [--greet]\")\n}\n\nconst name = args[0] || \"世界\"\nconsole.log(`你好，${name}！`)"
        },
        {
          'type': "h",
          'text': "解析参数"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "简单参数解析",
          'code': "#!/usr/bin/env node\n\nconst args = process.argv.slice(2)\n\n// 手动解析：支持 --name 小明的形式\nlet name = \"世界\"\nlet verbose = false\n\nfor (let i = 0; i < args.length; i++) {\n  if (args[i] === \"--name\") {\n    name = args[i + 1]      // 取下一个参数作为值\n    i++\n  } else if (args[i] === \"--verbose\" || args[i] === \"-v\") {\n    verbose = true\n  } else if (args[i] === \"--help\" || args[i] === \"-h\") {\n    console.log(\"用法：greet --name 名字 [--verbose]\")\n    process.exit(0)\n  }\n}\n\nconsole.log(`你好，${name}！`)\nif (verbose) console.log(\"[debug] 参数解析完成\")"
        },
        {
          'type': "h",
          'text': "交互输入：readline"
        },
        {
          'type': "p",
          'text': "有时需要程序停下来问用户问题。内置 <code.inline>readline</code> 模块可以读取终端输入，实现交互式问答。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "交互式问答",
          'code': "const readline = require(\"readline\")\n\nconst rl = readline.createInterface({\n  input: process.stdin,\n  output: process.stdout,\n})\n\nrl.question(\"你叫什么名字？\", (answer) => {\n  console.log(`欢迎你，${answer}！`)\n  rl.close()   // 关闭输入流，程序正常退出\n})"
        },
        {
          'type': "h",
          'text': "npm link：变成全局命令"
        },
        {
          'type': "p",
          'text': "想让 <code.inline>node cli.js</code> 变成直接输入 <code.inline>mycli</code> 就能运行的全局命令，需要两件事：在 <code.inline>package.json</code> 里声明 <code.inline>bin</code>，然后用 <code.inline>npm link</code> 把它链接到全局。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "package.json 的 bin 字段",
          'code': "{\n  \"name\": \"my-cli\",\n  \"version\": \"1.0.0\",\n  \"bin\": {\n    \"mycli\": \"cli.js\"   // 全局命令名 -> 脚本文件\n  }\n}"
        },
        {
          'type': "code",
          'lang': "text",
          'title': "发布为全局命令",
          'code': "npm link\n# 之后在任意目录都能直接运行：\n# mycli --name 小明\n\n# 取消链接\nnpm unlink -g my-cli"
        },
        {
          'type': "warn",
          'title': "Windows 上 bin 的注意点",
          'text': "npm link 在 Windows 上会自动生成 .cmd 批处理包装，功能正常。但写 shebang（第一行 <code.inline>#!/usr/bin/env node</code>）仍是好习惯，能保证 Linux/macOS 上也可执行。另外文件保存格式注意别带 BOM。"
        },
        {
          'type': "tip",
          'title': "进阶推荐",
          'text': "自己手写参数解析适合学习。真正开发 CLI 时建议用现成库：<code.inline>commander</code>（参数解析）、<code.inline>chalk</code>（彩色输出）、<code.inline>inquirer</code>（交互提示）。<code.inline>npm i commander chalk</code> 装一下就能用。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"命令行工具开发\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"命令行工具开发\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"命令行工具开发\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "CLI 脚本首行写 #!/usr/bin/env node（shebang）",
            "process.argv.slice(2) 拿命令行参数",
            "readline 实现交互式输入输出",
            "package.json 的 bin 字段把脚本映射成命令名",
            "npm link 把本地工具链接成全局命令",
            "进阶用 commander/chalk/inquirer 库提升体验"
          ]
        }
      ],
      'templates': [
        {
          'name': "命令行问候（概念）",
          'code': "// 保存为 cli.js 后本地运行\n// node cli.js 小明\nconst name = process.argv[2] || \"世界\"\nconsole.log(`你好，${name}！`)"
        }
      ]
    },
    {
      'id': "nd-16",
      'title': "实战项目与下一步：待办清单 API",
      'summary': "用 Express + SQLite 做完整待办 API，含 PM2 部署与云服务器提示。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "最后一章，我们把前面学的所有知识串起来：**用 Express + better-sqlite3 做一个完整的待办清单 API**（增删改查全齐），然后讲如何测试、如何部署上线。做完这个，你就有了一个能真正跑起来的小项目。"
        },
        {
          'type': "h",
          'text': "项目结构"
        },
        {
          'type': "list",
          'items': [
            "<code.inline>server.js</code>：Express 入口，定义路由",
            "<code.inline>db.js</code>：数据库连接与初始化",
            "<code.inline>app.db</code>：SQLite 数据库文件（运行时自动生成）",
            "<code.inline>package.json</code>：依赖与启动脚本"
          ]
        },
        {
          'type': "h",
          'text': "数据库模块 db.js"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "db.js",
          'code': "// db.js：数据库连接与建表\nconst Database = require(\"better-sqlite3\")\nconst db = new Database(\"app.db\")\n\ndb.exec(`\n  CREATE TABLE IF NOT EXISTS todos (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    text TEXT NOT NULL,\n    done INTEGER DEFAULT 0,\n    created_at TEXT DEFAULT (datetime('now'))\n  )\n`)\n\nmodule.exports = db"
        },
        {
          'type': "h",
          'text': "服务器入口 server.js"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "server.js：完整待办 API",
          'code': "// server.js\nconst express = require(\"express\")\nconst db = require(\"./db\")\n\nconst app = express()\napp.use(express.json())\n\n// 查询全部\napp.get(\"/api/todos\", (req, res) => {\n  const rows = db.prepare(\"SELECT * FROM todos ORDER BY id DESC\").all()\n  res.json({ ok: true, data: rows })\n})\n\n// 新增\napp.post(\"/api/todos\", (req, res) => {\n  const text = (req.body.text || \"\").trim()\n  if (!text) return res.status(400).json({ ok: false, msg: \"内容不能为空\" })\n  const info = db.prepare(\"INSERT INTO todos (text) VALUES (?)\").run(text)\n  const row = db.prepare(\"SELECT * FROM todos WHERE id = ?\").get(info.lastInsertRowid)\n  res.status(201).json({ ok: true, data: row })\n})\n\n// 更新完成状态\napp.patch(\"/api/todos/:id\", (req, res) => {\n  const done = req.body.done ? 1 : 0\n  const info = db.prepare(\"UPDATE todos SET done = ? WHERE id = ?\").run(done, req.params.id)\n  if (info.changes === 0) return res.status(404).json({ ok: false, msg: \"未找到\" })\n  const row = db.prepare(\"SELECT * FROM todos WHERE id = ?\").get(req.params.id)\n  res.json({ ok: true, data: row })\n})\n\n// 删除\napp.delete(\"/api/todos/:id\", (req, res) => {\n  const info = db.prepare(\"DELETE FROM todos WHERE id = ?\").run(req.params.id)\n  if (info.changes === 0) return res.status(404).json({ ok: false, msg: \"未找到\" })\n  res.json({ ok: true })\n})\n\nconst PORT = process.env.PORT || 3000\napp.listen(PORT, () => {\n  console.log(`待办 API 运行在 http://localhost:${PORT}`)\n})"
        },
        {
          'type': "h",
          'text': "测试接口"
        },
        {
          'type': "code",
          'lang': "text",
          'title': "用 curl / fetch 测试",
          'code': "# 启动\nnode server.js\n\n# 新增一条\ncurl -X POST http://localhost:3000/api/todos \\\n  -H \"Content-Type: application/json\" \\\n  -d \"{\\\"text\\\":\\\"学习部署\\\"}\"\n\n# 查询列表\ncurl http://localhost:3000/api/todos\n\n# 删除 id=1\ncurl -X DELETE http://localhost:3000/api/todos/1"
        },
        {
          'type': "h",
          'text': "部署提示：PM2"
        },
        {
          'type': "p",
          'text': "开发时 <code.inline>node server.js</code> 够了，但上线后进程要**常驻**、要**自动重启**、要**崩溃自动拉起**。**PM2** 是 Node 最常用的进程管理器，把这些都搞定。"
        },
        {
          'type': "code",
          'lang': "text",
          'title': "PM2 部署",
          'code': "npm install -g pm2\n\n# 启动（常驻后台，自动重启）\npm2 start server.js --name todo-api\n\n# 常用命令\npm2 list            # 查看进程状态\npm2 logs todo-api   # 查看日志\npm2 restart todo-api\npm2 stop todo-api\n\n# 开机自启（生产环境）\npm2 startup\npm2 save"
        },
        {
          'type': "h",
          'text': "云服务器上线流程"
        },
        {
          'type': "list",
          'items': [
            "买一台云服务器（阿里云/腾讯云/AWS 的轻量应用服务器即可，学生常有优惠）。",
            "用 SSH 登录（Windows 可用 PowerShell 或 Xshell）。",
            "安装 Node.js（可以用 nvm 或官方包）。",
            "把项目代码传上去（git clone 或 scp）。",
            "执行 npm install --production 装依赖（跳过 dev 依赖）。",
            "用 PM2 启动，配合 nginx 反向代理 + HTTPS 证书，就可以用域名访问了。",
            "注意：生产环境数据库要定期备份，日志要收集监控。"
          ]
        },
        {
          'type': "info",
          'title': "学习路线继续"
        },
        {
          'type': "list",
          'items': [
            "**框架**：Express 已经很经典，也可以看看 NestJS（TypeScript、工程化更强）、Fastify（性能高）。",
            "**数据库**：MySQL/PostgreSQL（配 Sequelize/Prisma ORM）、Redis（缓存）。",
            "**认证**：JWT 登录鉴权、bcrypt 密码加密、权限控制。",
            "**工程化**：TypeScript、ESLint、单元测试（Jest/Vitest）、Docker 容器化。",
            "**前端配合**：学一个前端框架（React/Vue），前后端联调做全栈项目。"
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"实战项目与下一步：待办清单 API\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"实战项目与下一步：待办清单 API\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"实战项目与下一步：待办清单 API\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "实战：Express + SQLite 做完整 CRUD 待办 API",
            "db.js 管数据库，server.js 管路由，职责分离",
            "增删改查全部用参数化查询防注入",
            "PM2 让 Node 进程常驻、自动重启、崩溃拉起",
            "云服务器流程：买机器 → 装 Node → 传代码 → PM2 启动 → nginx 上 HTTPS",
            "下一步：TypeScript、数据库进阶、JWT 鉴权、Docker、全栈前端"
          ]
        }
      ],
      'templates': [
        {
          'name': "待办 API 核心（概念）",
          'code': "// 完整代码见正文 server.js\n// 需要本地 npm install express better-sqlite3\nconst express = require(\"express\")\nconst app = express()\napp.use(express.json())\n\napp.get(\"/api/todos\", (req, res) => {\n  res.json({ ok: true, msg: \"数据库接入后返回真实数据\" })\n})\n\napp.listen(3000)\n\nconsole.log(\"启动实战项目：node server.js\")"
        }
      ]
    }
  ]
});

