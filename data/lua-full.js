/* ============================================================
   计算机知识库 · 数据：Lua 完整课程（16 章，从下载安装到进阶）
   ============================================================ */
window.LANGUAGE_EXTRA = window.LANGUAGE_EXTRA || [];
window.LANGUAGE_EXTRA.push({
  'id': "lua",
  'name': "Lua",
  'icon': "Lu",
  'tagline': "超轻量嵌入式脚本，游戏、Redis、Nginx 都在用它。",
  'intro': "这是一套从零开始的 Lua 完整课程。Lua 只有不到 30KB 的解释器，却火遍了游戏、Redis、Nginx（OpenResty）等嵌入场景，魔兽世界、Love2D 都用它写脚本。第 1 章先认识 Lua 是什么，第 2 章教你下载安装，之后每一章都从大白话讲起。学完这套课程，你将掌握 Lua 的变量、table、函数、迭代器、元表、模块、协程、标准库，最后做出自己的命令行小工具和游戏脚本。",
  'meta': {
    "难度": "从零到进阶",
    "章节": "16 章",
    "场景": "游戏/Redis/Nginx 脚本"
  },
  'lessons': [
    {
      'id': "lu-1",
      'title': "Lua 是什么：超轻量嵌入式脚本",
      'summary': "认识 Lua：30KB 的解释器，游戏、Redis、Nginx/OpenResty 都在用它。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "Lua（读作『鲁阿』，葡萄牙语里是月亮的意思）诞生于 1993 年，来自巴西里约热内卢的天主教大学。它是一门口碑极好的脚本语言，最突出的特点就是**轻**：完整解释器只有不到 30KB，加载快、占内存少，天生适合『嵌入』到别的程序里当脚本引擎。"
        },
        {
          'type': "h",
          'text': "Lua 用在哪里"
        },
        {
          'type': "list",
          'items': [
            "游戏：魔兽世界、愤怒的小鸟、Roblox 都用 Lua 写玩法逻辑，游戏引擎把 Lua 嵌进来做脚本",
            "数据库：Redis 用 Lua 写原子脚本（EVAL），保证多个操作要么全成要么全不成",
            "Web 服务器：OpenResty 把 Lua 嵌进 Nginx，用它写高性能的 Web 接口和网关逻辑",
            "桌面工具：Wireshark、LÖVE 游戏框架、Neovim 编辑器配置都用 Lua",
            "嵌入式设备：路由器、智能家电等资源紧张的环境也常选 Lua"
          ]
        },
        {
          'type': "p",
          'text': "你可以把 Lua 想成『给大程序写的灵活小插件』：C/C++ 写核心引擎，Lua 写可以随时改的玩法、规则和配置。这也是为什么游戏行业特别爱用 Lua——改脚本不用重新编译整个游戏。"
        },
        {
          'type': "h",
          'text': "Lua 的特点"
        },
        {
          'type': "list",
          'items': [
            "极轻量：解释器约 30KB，内存占用小，启动快",
            "速度不错：用了虚拟机 + 即时编译，比纯解释型脚本快",
            "只有一种数据结构 table，却什么都能装",
            "C 语言级兼容：和 C/C++ 互相调用非常顺畅",
            "语法简单：一两天就能上手，几周能精通"
          ]
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "感受一下 Lua",
          'code': "-- Lua 是一个超轻量的脚本语言\nprint(\"Hello, Lua!\")\nprint(\"我的解释器只有不到 30KB\")"
        },
        {
          'type': "info",
          'title': "Lua 和 Python 的区别",
          'text': "Python 追求『能做一切』，生态庞大；Lua 追求『小而快』，专注于嵌入。如果你想用脚本给游戏、Redis、Nginx 加功能，Lua 是对的选择；如果做数据分析、爬虫，Python 更合适。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Lua 是什么：超轻量嵌入式脚本\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Lua 是什么：超轻量嵌入式脚本\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Lua 是什么：超轻量嵌入式脚本\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Lua 是超轻量脚本语言，解释器不到 30KB",
            "游戏、Redis、Nginx/OpenResty 都用它做脚本",
            "适合嵌入大程序，改玩法/规则不用重新编译",
            "只有一种数据结构 table，却什么都能装",
            "轻、快、易嵌入，是它的核心竞争力"
          ]
        }
      ],
      'templates': [
        {
          'name': "第一段 Lua 代码",
          'code': "print(\"Hello, Lua!\")\nprint(\"我要学会 Lua 编程！\")"
        }
      ]
    },
    {
      'id': "lu-2",
      'title': "下载与安装 Lua（零基础第一步）",
      'summary': "官方源码编译或下载预编译包，验证版本，装好编辑器。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "Lua 官网提供源码，完全免费。对新手最友好的方式是下载别人编译好的安装包（Windows 用 LuaBinaries 或 LuaForWindows），或者用系统包管理器一条命令装好。"
        },
        {
          'type': "h",
          'text': "Windows：用 LuaBinaries 下载预编译包"
        },
        {
          'type': "list",
          'items': [
            "打开官方下载页：<a href='https://www.lua.org/download.html' target='_blank' rel='noopener'>https://www.lua.org/download.html</a>",
            "页面底部有『Binaries』链接指向 LuaBinaries（<a href='https://luabinaries.sourceforge.net/' target='_blank' rel='noopener'>luabinaries.sourceforge.net</a>）",
            "下载 Windows x64 的 zip 包（选择和你的系统匹配的版本）",
            "解压后把 exe 所在目录加入系统 PATH，就能在命令行用 lua 了",
            "另一个选择是 LuaForWindows 一键安装包：<a href='https://github.com/rjpcomputing/luaforwindows' target='_blank' rel='noopener'>github.com/rjpcomputing/luaforwindows</a>"
          ]
        },
        {
          'type': "h",
          'text': "Linux / macOS：用包管理器"
        },
        {
          'type': "list",
          'items': [
            "Ubuntu/Debian：<code.inline>sudo apt install lua5.4</code.inline>",
            "CentOS/Fedora：<code.inline>sudo dnf install lua</code.inline>",
            "macOS：<code.inline>brew install lua</code.inline>",
            "Windows 也可以用 scoop 或 chocolatey：<code.inline>scoop install lua</code.inline>"
          ]
        },
        {
          'type': "h",
          'text': "源码编译（进阶）"
        },
        {
          'type': "p",
          'text': "想体验从源码构建，可以下载官网源码（lua-5.4.x.tar.gz），解压后在命令行执行 <code.inline>make</code.inline>（Linux/macOS），Windows 下用 Visual Studio 打开 src 目录的工程文件编译。源码编译能获得最纯粹的原版 Lua，但对新手不必须。"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "验证是否装好",
          'code': "lua -v"
        },
        {
          'type': "p",
          'text': "在命令行输入 <code.inline>lua -v</code.inline>，如果显示类似 <code.inline>Lua 5.4.7 Copyright (C) 1994-2024 Lua.org, PUC-Rio</code.inline>，就说明安装成功了！"
        },
        {
          'type': "warn",
          'title': "PATH 没配好的坑",
          'text': "如果输入 lua 提示『不是内部或外部命令』，说明 Lua 的可执行文件目录没加进 PATH。手动安装时务必把解压目录加入系统环境变量，然后重新打开命令行。"
        },
        {
          'type': "tip",
          'title': "编辑器推荐",
          'text': "VS Code（<a href='https://code.visualstudio.com' target='_blank' rel='noopener'>code.visualstudio.com</a>）装个 Lua 插件（如 sumneko.lua）就有高亮、补全和报错提示。另外，LuaJIT（<a href='https://luajit.org' target='_blank' rel='noopener'>luajit.org</a>）是 Lua 的高性能 JIT 版本，兼容 Lua 5.1，游戏和 OpenResty 环境常把它当作首选。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"下载与安装 Lua（零基础第一步）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"下载与安装 Lua（零基础第一步）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"下载与安装 Lua（零基础第一步）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "官方下载页是 lua.org/download.html，完全免费",
            "Windows 用 LuaBinaries 预编译包或 LuaForWindows",
            "Linux/macOS 用包管理器一条命令装好",
            "lua -v 验证是否装好",
            "编辑器推荐 VS Code + Lua 插件",
            "LuaJIT 是高性能 JIT 版本，游戏/OpenResty 常用"
          ]
        }
      ],
      'templates': [
        {
          'name': "版本自检",
          'code': "-- 在终端执行：lua -v\n-- 输出类似：Lua 5.4.7  Copyright (C) 1994-2024 Lua.org, PUC-Rio\nprint(\"安装检查\")"
        }
      ]
    },
    {
      'id': "lu-3",
      'title': "第一个程序：print 与交互模式",
      'summary': "print 输出、lua 运行脚本、交互式 REPL、单行与多行注释。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "Lua 上手非常快。最简单的程序就是一行 <code.inline>print</code.inline>。你可以把代码写进文件再用 lua 运行，也可以直接在命令行进入交互模式一行一行试。"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "第一个 Lua 程序",
          'code': "-- 第一个 Lua 程序\nprint(\"你好，Lua 世界！\")\nprint(\"我正在学习 Lua 编程\")"
        },
        {
          'type': "p",
          'text': "把上面的代码保存成 <code.inline>hello.lua</code.inline>，在命令行进入文件所在目录，执行 <code.inline>lua hello.lua</code.inline>，就能看到两行输出。<code.inline>lua</code.inline> 后跟文件名即可运行脚本，后缀 <code.inline>.lua</code.inline> 是 Lua 源码文件的标准后缀。"
        },
        {
          'type': "h",
          'text': "交互模式（REPL）"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "直接在命令行输入 lua 进入交互模式",
          'code': "-- 在命令行直接输入 lua 回车，就进入了交互模式\n-- 输入一行执行一行，像聊天一样\n> print(\"试试水\")\n试试水\n> 1 + 2\n3\n> = 10 * 10\n100\n-- 想退出就输入 os.exit() 或按 Ctrl+C / Ctrl+D"
        },
        {
          'type': "p",
          'text': "交互模式特别适合新手：不用建文件，输入一行立刻看到结果。文件里的代码里也可以直接调用 <code.inline>os.exit()</code.inline> 结束程序。"
        },
        {
          'type': "h",
          'text': "注释：-- 与 --[[]]"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "单行注释与多行注释",
          'code': "-- 这是单行注释，以两个减号开头\nprint(\"hello\")   -- 注释也可以写在代码后面\n\n--[[\n这是多行注释\n可以写很多行说明\n用 -- 和方括号包起来\n]]\nprint(\"多行注释已结束\")"
        },
        {
          'type': "tip",
          'title': "Lua 没有分号也没关系",
          'text': "Lua 语句末尾的分号可以省略（当然写上也没错）。Lua 靠换行和语法结构判断语句边界，这跟 C/Java 的严格分号不同，新手不用担心漏分号报错。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"第一个程序：print 与交互模式\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"第一个程序：print 与交互模式\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"第一个程序：print 与交互模式\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "用 lua 文件名.lua 运行脚本",
            "print() 把内容输出到屏幕",
            "直接输入 lua 进入交互模式，一行一测",
            "单行注释用 --，多行注释用 --[[ ]]",
            "Lua 语句结尾分号可省略"
          ]
        }
      ],
      'templates': [
        {
          'name': "我的第一个程序",
          'code': "print(\"你好，Lua！\")\nprint(\"我要学会编程！\")"
        },
        {
          'name': "多行自我介绍",
          'code': "print(\"大家好！\")\nprint(\"我叫小明\")\nprint(\"我今年 10 岁\")\nprint(\"我正在学 Lua\")"
        }
      ]
    },
    {
      'id': "lu-4",
      'title': "变量与基本类型",
      'summary': "local 局部变量（默认全局）、nil、number、string、boolean、type()、# 长度。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "Lua 的变量有个和大多数语言都不同的特点：**默认是全局的**！如果你直接写 <code.inline>x = 1</code.inline>，x 就是一个全局变量，任何地方都能改。想声明局部变量，必须用 <code.inline>local</code.inline> 关键字。这是一个非常容易踩的坑。"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "local 与全局变量",
          'code': "x = 10        -- 这是全局变量\nlocal y = 20  -- 这是局部变量，只在当前代码块有效\n\nprint(x, y)   -- 10 20\n\nif true then\n  local z = 30   -- 块内局部\n  print(z)       -- 30\nend\n-- print(z)    -- 这里访问不到 z，会报 nil"
        },
        {
          'type': "warn",
          'title': "新手第一大坑：忘写 local",
          'text': "Lua 里变量默认全局，忘写 local 会导致变量被意外共享、互相覆盖，程序出现很难查的 bug。习惯上，**所有变量都要用 local 声明**，这几乎是 Lua 社区的硬规矩。"
        },
        {
          'type': "h",
          'text': "基本类型"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "Lua 的基本类型",
          'code': "local name = \"小明\"      -- string 字符串\nlocal age = 10           -- number 数字（整数小数都是它）\nlocal height = 1.75      -- number 浮点数\nlocal isOk = true        -- boolean 布尔值\nlocal nothing = nil      -- nil 表示空\n\nprint(type(name))      -- string\nprint(type(age))       -- number\nprint(type(height))    -- number\nprint(type(isOk))      -- boolean\nprint(type(nothing))   -- nil"
        },
        {
          'type': "p",
          'text': "Lua 只有八种类型，常用的是上面五种，再加上 table（第 7 章）、function（第 9 章）、userdata（给 C 扩展用）。注意 Lua 的**数字不分整数和浮点**，统一叫 number——这是和其他语言很不一样的地方。"
        },
        {
          'type': "h",
          'text': "取长度：#"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "# 取字符串和数组长度",
          'code': "local s = \"hello\"\nprint(#s)   -- 5  字符串长度\n\nlocal t = { 10, 20, 30 }\nprint(#t)   -- 3  数组长度\n\n-- 字符串可以用 # 取长度，也可以再赋值\ns = s .. \" world\"\nprint(#s)   -- 11"
        },
        {
          'type': "info",
          'title': "nil 的特殊地位",
          'text': "在 Lua 里，把某个变量/元素赋值为 nil 就等于删除它。比如删除数组元素、清理变量，都可以直接赋 nil。后面讲 table 时会再遇到。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"变量与基本类型\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"变量与基本类型\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"变量与基本类型\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Lua 变量默认是全局的，要用 local 才是局部",
            "所有变量都建议用 local 声明",
            "number 不分整数浮点，type() 查类型",
            "nil 表示空，赋 nil 等于删除",
            "# 取字符串/数组长度",
            "常用类型：string、number、boolean、nil、table、function"
          ]
        }
      ],
      'templates': [
        {
          'name': "个人信息",
          'code': "local name = \"小红\"\nlocal age = 9\nlocal city = \"上海\"\nprint(name .. \"住在\" .. city .. \"，今年\" .. age .. \"岁\")"
        },
        {
          'name': "类型侦探",
          'code': "print(type(42))\nprint(type(3.14))\nprint(type(\"hello\"))\nprint(type(true))\nprint(type(nil))"
        }
      ]
    },
    {
      'id': "lu-5",
      'title': "运算符与字符串",
      'summary': "算术/比较/逻辑、.. 拼接、string 库方法、string.format。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "这一章把 Lua 的运算符过一遍。注意几个和别的语言不同的地方：幂运算用 <code.inline>^</code.inline>（没有 **）、不等于用 <code.inline>~=</code.inline>（不是 !=）、逻辑是 and/or/not（不是 &&/||/!）、字符串拼接用 <code.inline>..</code.inline>（两个点）。"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "算术与比较逻辑运算",
          'code': "local a, b = 10, 3\nprint(a + b)     -- 13\nprint(a - b)     -- 7\nprint(a * b)     -- 30\nprint(a / b)     -- 3.3333333333333\nprint(a % b)     -- 1  取余\nprint(a ^ 2)     -- 100 幂运算\nprint(a // b)    -- 3  整除（Lua 5.3+）\n\nprint(a > b)     -- true\nprint(a == b)    -- false\nprint(a ~= b)    -- true  不等于\n\nprint(true and false)   -- false\nprint(true or false)    -- true\nprint(not true)         -- false\nprint(nil or \"默认值\")    -- 默认值   or 常用来给默认值"
        },
        {
          'type': "warn",
          'title': "别把 Lua 当 C 写",
          'text': "Lua 的取反是 <code.inline>~=</code.inline>（波浪号加等号），逻辑是 <code.inline>and/or/not</code.inline>，位运算是 <code.inline>& | ~</code.inline>。如果你用 C/Java 的习惯写 <code.inline>!=</code.inline> 或 <code.inline>&&</code.inline>，会直接语法报错。"
        },
        {
          'type': "h",
          'text': "字符串拼接与字符串库"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': ".. 拼接与 string 库",
          'code': "local first = \"你好\"\nlocal second = \"世界\"\nprint(first .. second)   -- 你好世界\nprint(first .. \"，\" .. second .. \"！\")   -- 你好，世界！\n\nlocal s = \"Hello Lua\"\nprint(string.upper(s))       -- HELLO LUA\nprint(string.lower(s))       -- hello lua\nprint(string.sub(s, 1, 5))   -- Hello  截取子串\nprint(string.find(s, \"Lua\")) -- 7 9  找子串位置\nprint(string.len(s))         -- 9  长度（等价于 #s）\nprint(string.rep(\"ha\", 3))   -- hahaha  重复\nprint(string.gsub(\"a1b2\", \"%d\", \"#\"))  -- a#b#  替换数字"
        },
        {
          'type': "h",
          'text': "string.format 格式化"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "格式化输出",
          'code': "print(string.format(\"我有 %d 个苹果\", 3))     -- 我有 3 个苹果\nprint(string.format(\"%.2f\", 3.14159))          -- 3.14\nprint(string.format(\"%s 今年 %d 岁\", \"小明\", 10)) -- 小明 今年 10 岁\nprint(string.format(\"%5d\", 42))                --   42 右对齐占5位"
        },
        {
          'type': "tip",
          'title': "字符串方法冒号语法",
          'text': "Lua 里可以这样调用字符串方法：<code.inline>('abc'):upper()</code.inline> 这种写法是把字符串当对象调方法，等价于 <code.inline>string.upper('abc')</code.inline>。冒号语法会自动把字符串作为第一个参数传入，写起来更简洁。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"运算符与字符串\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"运算符与字符串\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"运算符与字符串\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "算术：+ - * / % 取余 ^ 幂 // 整除",
            "比较：== ~=（不等于） > < >=",
            "逻辑：and / or / not",
            "or 常用来给默认值：nil or 默认值",
            "字符串拼接用 ..，不是 +",
            "string.upper/lower/sub/find/format 是常用库函数",
            "格式化用 string.format，占位符 %d %s %.2f"
          ]
        }
      ],
      'templates': [
        {
          'name': "拼接与格式化",
          'code': "local name = \"小明\"\nlocal age = 10\nprint(\"大家好，我是\" .. name .. \"，今年\" .. age .. \"岁\")\nprint(string.format(\"%s 十年后 %d 岁\", name, age + 10))"
        },
        {
          'name': "数字运算",
          'code': "local a, b = 17, 5\nprint(\"商：\" .. (a // b))\nprint(\"余数：\" .. (a % b))\nprint(\"平方：\" .. (a ^ 2))"
        }
      ]
    },
    {
      'id': "lu-6",
      'title': "条件与循环",
      'summary': "if/elseif/else、while、repeat until、for 数值循环、break、goto。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "条件判断让程序走不同的路，循环让程序重复做事。Lua 的语法和 C 很像，但**每个结构都要用 end 结尾**：if ... end、while ... end、for ... end。记住这一点，基本就不会错。"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "if / elseif / else",
          'code': "local score = 85\n\nif score >= 90 then\n  print(\"优秀\")\nelseif score >= 60 then\n  print(\"及格\")\nelse\n  print(\"不及格\")\nend\n\n-- 注意：Lua 没有 switch/case\n-- 多个固定值判断用 elseif 链或 table 映射"
        },
        {
          'type': "warn",
          'title': "elseif 是一个词",
          'text': "Lua 的 elseif 中间没有空格也没有 else if，是连在一起的一个单词。写 <code.inline>else if</code.inline> 会语法报错。这是新手最常见的 Lua 报错之一。"
        },
        {
          'type': "h",
          'text': "三种循环"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "while / repeat / for",
          'code': "-- while：先判断再执行\nlocal i = 0\nwhile i < 3 do\n  print(\"while 第 \" .. i .. \" 次\")\n  i = i + 1\nend\n\n-- repeat until：先执行再判断，至少执行一次\nlocal n = 0\nrepeat\n  n = n + 1\n  print(\"repeat 第 \" .. n .. \" 次\")\nuntil n >= 3\n\n-- for 数值循环：从 1 到 5，步长 1\nfor j = 1, 5 do\n  print(\"for 第 \" .. j .. \" 次\")\nend\n\n-- for 带步长：从 10 到 1，每次减 2\nfor k = 10, 1, -2 do\n  print(k)   -- 10 8 6 4 2\nend"
        },
        {
          'type': "p",
          'text': "<code.inline>for 变量 = 起始, 结束, 步长 do ... end</code.inline>，步长省略时默认为 1。repeat until 和 while 相反：repeat 先执行循环体再判断，所以**至少执行一次**；判断条件为真时结束。"
        },
        {
          'type': "h",
          'text': "break 与 goto"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "break 和 goto",
          'code': "-- break：提前结束循环\nfor i = 1, 10 do\n  if i > 3 then break end   -- 到 4 就退出\n  print(i)   -- 1 2 3\nend\n\n-- goto：跳转到标签（Lua 5.2+）\nlocal j = 1\n::top::              -- 标签用双冒号\nprint(\"j = \" .. j)\nj = j + 1\nif j <= 3 then\n  goto top           -- 跳回去，模拟循环\nend"
        },
        {
          'type': "info",
          'title': "repeat until 的判断在最后",
          'text': "新手容易把 repeat until 和 while 搞混。记住口诀：while 是『条件为真继续』，repeat until 是『条件为真停止』。方向正好相反。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"条件与循环\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"条件与循环\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"条件与循环\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "if / elseif / else ... end，elseif 是一个词",
            "Lua 没有 switch，多用 elseif 或 table 映射",
            "while 先判断再执行，repeat until 至少执行一次",
            "for 数值循环：for i = 1, 5, 步长 do end",
            "break 提前退出循环，goto 可跳转到标签",
            "每个结构都要 end 结尾"
          ]
        }
      ],
      'templates': [
        {
          'name': "成绩评级",
          'code': "local score = 75\nif score >= 90 then\n  print(\"优秀\")\nelseif score >= 60 then\n  print(\"及格\")\nelse\n  print(\"不及格\")\nend"
        },
        {
          'name': "1 到 100 求和",
          'code': "local sum = 0\nfor i = 1, 100 do\n  sum = sum + i\nend\nprint(\"1+2+...+100 = \" .. sum)  -- 5050"
        }
      ]
    },
    {
      'id': "lu-7",
      'title': "唯一的数据结构：table",
      'summary': "table 当数组（从 1 开始）、当字典、混合、嵌套、增删元素。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "Lua 最独特的地方来了：**它只有一种数据结构，叫 table**。数组、字典、对象、集合……全用 table 一个搞定。table 用花括号 <code.inline>{ }</code.inline> 创建，里面的东西可以是任意类型。"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "table 当数组",
          'code': "-- table 当数组（注意：下标从 1 开始！）\nlocal fruits = {\"苹果\", \"香蕉\", \"橙子\"}\nprint(fruits[1])      -- 苹果\nprint(fruits[2])      -- 香蕉\nprint(#fruits)        -- 3  长度\n\n-- 追加与删除\nfruits[4] = \"葡萄\"       -- 直接按下标赋值\nprint(#fruits)          -- 4\ntable.insert(fruits, \"西瓜\")   -- 用库函数追加\nprint(#fruits)          -- 5\ntable.remove(fruits, 2) -- 删除第 2 个\nprint(fruits[2])        -- 橙子（后面的往前补）"
        },
        {
          'type': "danger",
          'title': "数组下标从 1 开始！",
          'text': "这是 Lua 和几乎所有语言都不同的地方：数组第一个元素是 <code.inline>t[1]</code.inline>，不是 t[0]！写 t[0] 会得到 nil。刚转过来的人十个有八个会踩这个坑。"
        },
        {
          'type': "h",
          'text': "table 当字典（键值对）"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "table 当字典",
          'code': "local person = { name = \"小明\", age = 10 }\nprint(person.name)      -- 小明  点语法\nprint(person[\"age\"])    -- 10   方括号语法\n\n-- 增删改查\nperson.city = \"上海\"      -- 新增键\nperson.age = 11          -- 修改值\nprint(person.city)       -- 上海\nperson.age = nil         -- 赋 nil 等于删除\nprint(person.age)        -- nil"
        },
        {
          'type': "h",
          'text': "混合与嵌套"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "混合和嵌套 table",
          'code': "-- 数组和键值可以混在一个 table 里\nlocal mixed = {\n  \"第一个\",              -- mixed[1]\n  key = \"value\",\n  [100] = \"特殊键\",\n}\nprint(mixed[1])      -- 第一个\nprint(mixed.key)     -- value\nprint(mixed[100])    -- 特殊键\n\n-- 嵌套：table 里放 table\nlocal students = {\n  { name = \"小明\", score = 95 },\n  { name = \"小红\", score = 88 },\n}\nprint(students[1].name)   -- 小明\nprint(students[2].score)  -- 88\n\n-- 遍历字典\nfor k, v in pairs(person) do\n  print(k, v)\nend"
        },
        {
          'type': "info",
          'title': "table 就是 Lua 的万能容器",
          'text': "记住一句话：**Lua 里万物皆 table**。数组是 table，字典是 table，对象是 table，甚至模块、类都是 table。学懂 table，你就学懂了 Lua 一半。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"唯一的数据结构：table\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"唯一的数据结构：table\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"唯一的数据结构：table\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "table 是 Lua 唯一的数据结构，{} 创建",
            "当数组用：下标从 1 开始！",
            "当字典用：t.key 或 t[\"key\"] 访问",
            "赋 nil 等于删除键",
            "数组和键值可以混用，table 可以嵌套",
            "table.insert / table.remove 增删元素"
          ]
        }
      ],
      'templates': [
        {
          'name': "水果列表",
          'code': "local fruits = {\"苹果\", \"香蕉\", \"橙子\"}\nfor i, v in ipairs(fruits) do\n  print(i .. \". \" .. v)\nend"
        },
        {
          'name': "人员信息",
          'code': "local p = { name = \"小明\", age = 10, city = \"上海\" }\np.hobby = \"编程\"\nprint(p.name .. \" 住在 \" .. p.city .. \"，喜欢 \" .. p.hobby)"
        }
      ]
    },
    {
      'id': "lu-8",
      'title': "table 进阶：长度陷阱与排序",
      'summary': "# 长度陷阱、pairs/ipairs 区别、多返回值、table.concat/sort/unpack。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "table 看着简单，用深了全是细节。这一章把几个最容易出问题的点讲透：<code.inline>#</code.inline> 取长度的陷阱、pairs 和 ipairs 的区别、多返回值，以及常用工具函数。"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "# 的长度陷阱",
          'code': "-- # 对『数组部分有空洞』的 table 可能不准\nlocal t = { 10, 20, 30, nil, 40 }\nprint(#t)   -- 可能是 3，也可能是 5，结果不确定！\n\n-- 稳妥做法：自己数\nlocal function count(tbl)\n  local n = 0\n  for _ in pairs(tbl) do n = n + 1 end\n  return n\nend\nprint(count(t))   -- 4"
        },
        {
          'type': "warn",
          'title': "# 只适合连续数组",
          'text': "<code.inline>#</code.inline> 只对『从 1 开始连续无空洞』的数组部分可靠。中间有 nil 或者键是字符串的 table，<code.inline>#</code.inline> 的结果可能让你意外。遍历建议用 ipairs/pairs。"
        },
        {
          'type': "h",
          'text': "pairs 与 ipairs 的区别"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "pairs 和 ipairs 对比",
          'code': "local fruits = {\"苹果\", \"香蕉\", \"橙子\"}\n\nprint(\"ipairs：只遍历数组部分，按顺序\")\nfor i, v in ipairs(fruits) do\n  print(i, v)\nend\n\nlocal person = { name = \"小明\", age = 10, city = \"上海\" }\nprint(\"pairs：遍历所有键值对，顺序不保证\")\nfor k, v in pairs(person) do\n  print(k, v)\nend"
        },
        {
          'type': "p",
          'text': "<code.inline>ipairs</code.inline> 只遍历连续的数组部分（从 1 开始，遇到 nil 停止），按顺序；<code.inline>pairs</code.inline> 遍历所有键值对，**顺序不保证**。遍历纯数组用 ipairs，遍历字典或混合用 pairs。"
        },
        {
          'type': "h",
          'text': "多返回值与工具函数"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "多返回值 / concat / sort / unpack",
          'code': "-- Lua 函数可以返回多个值\nlocal function getPerson()\n  return \"小明\", 10, \"上海\"\nend\nlocal name, age, city = getPerson()\nprint(name, age, city)   -- 小明 10 上海\n\n-- table.concat 拼接\nlocal list = {\"a\", \"b\", \"c\"}\nprint(table.concat(list, \", \"))   -- a, b, c\n\n-- table.sort 排序\nlocal scores = { 88, 95, 70, 100 }\ntable.sort(scores)\nprint(table.concat(scores, \", \"))  -- 70, 88, 95, 100\n\n-- 降序：传入比较函数\nlocal words = { \"banana\", \"apple\", \"cherry\" }\ntable.sort(words, function(a, b) return a > b end)\nprint(table.concat(words, \", \"))   -- cherry, banana, apple\n\n-- unpack：把数组展开成多返回值（5.2+ 用 table.unpack）\nlocal function sum(a, b, c)\n  return a + b + c\nend\nprint(sum(table.unpack({1, 2, 3})))   -- 6"
        },
        {
          'type': "tip",
          'title': "unpack 版本差异",
          'text': "Lua 5.1 用全局 <code.inline>unpack</code.inline>，Lua 5.2+ 改成了 <code.inline>table.unpack</code.inline>。写通用代码可以判断：<code.inline>local unpack = table.unpack or unpack</code.inline>。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"table 进阶：长度陷阱与排序\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"table 进阶：长度陷阱与排序\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"table 进阶：长度陷阱与排序\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "# 只对连续数组可靠，有空洞可能不准",
            "ipairs 按序遍历数组，pairs 遍历全部键值",
            "Lua 函数支持多返回值",
            "table.concat 拼接、table.sort 排序（可自定义比较函数）",
            "table.unpack 把数组展开成多个返回值",
            "排序时想降序就传 function(a,b) return a > b end"
          ]
        }
      ],
      'templates': [
        {
          'name': "多返回值练习",
          'code': "local function minmax(a, b, c)\n  local t = {a, b, c}\n  table.sort(t)\n  return t[1], t[3]\nend\nlocal lo, hi = minmax(5, 2, 9)\nprint(\"最小 \" .. lo .. \"，最大 \" .. hi)"
        }
      ]
    },
    {
      'id': "lu-9",
      'title': "函数：多返回值、可变参数与闭包",
      'summary': "function 定义、多返回值、... 可变参数、闭包、高阶函数、尾调用。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "函数是打包一段逻辑、起个名字反复用。Lua 里函数是一等公民：可以存进变量、塞进 table、传给别的函数。这一章除了基本定义，重点讲 Lua 的招牌特性——多返回值和可变参数。"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "函数定义与多返回值",
          'code': "-- 基本函数\nlocal function add(a, b)\n  return a + b\nend\n\n-- 单行函数\nlocal function double(n) return n * 2 end\n\n-- 多返回值：一次返回商和余数\nlocal function divide(a, b)\n  return math.floor(a / b), a % b\nend\n\nlocal q, r = divide(10, 3)\nprint(q, r)        -- 3 1\n\nprint(add(3, 4))   -- 7\nprint(double(5))   -- 10"
        },
        {
          'type': "h",
          'text': "可变参数 ..."
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "可变参数与 select",
          'code': "-- ... 表示任意多个参数\nlocal function sumAll(...)\n  local total = 0\n  -- select(\"#\", ...) 返回参数个数\n  for i = 1, select(\"#\", ...) do\n    total = total + select(i, ...)   -- select(i, ...) 取第 i 个\n  end\n  return total\nend\n\nprint(sumAll(1, 2, 3))      -- 6\nprint(sumAll(1, 2, 3, 4, 5)) -- 15\n\n-- 也可以先打包成表\nlocal function printAll(...)\n  local args = { ... }\n  for i, v in ipairs(args) do\n    print(i, v)\n  end\nend\nprintAll(\"a\", \"b\", \"c\")"
        },
        {
          'type': "h",
          'text': "闭包与高阶函数"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "闭包和高阶函数",
          'code': "-- 闭包：函数记住了创建它的环境里的变量\nlocal function makeCounter()\n  local count = 0\n  return function()\n    count = count + 1\n    return count\n  end\nend\n\nlocal counter = makeCounter()\nprint(counter())   -- 1\nprint(counter())   -- 2\nprint(counter())   -- 3\n\n-- 高阶函数：把函数当参数\nlocal function applyTwice(f, x)\n  return f(f(x))\nend\nprint(applyTwice(function(n) return n + 1 end, 5))   -- 7\n\n-- 尾调用：函数最后一步调用另一个函数（不占额外栈）\nlocal function countdown(n)\n  if n <= 0 then return \"发射！\" end\n  print(n)\n  return countdown(n - 1)   -- 尾调用，可无限递归不爆栈\nend\nprint(countdown(3))"
        },
        {
          'type': "info",
          'title': "尾调用是什么",
          'text': "当函数 A 的最后一步就是调用函数 B 并直接返回 B 的结果（return B(...)），这叫尾调用。Lua 对尾调用做了优化，不会额外占栈，所以可以放心用递归写循环。注意必须是真的『最后一步』且直接 return。"
        },
        {
          'type': "warn",
          'title': "闭包共享变量的坑",
          'text': "循环里创建的多个闭包如果引用同一个外部变量，最后可能共享同一个值。需要独立数据时，每次循环都新建一个局部变量（用局部变量捕获）即可。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"函数：多返回值、可变参数与闭包\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"函数：多返回值、可变参数与闭包\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"函数：多返回值、可变参数与闭包\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "function 定义函数，也可 local function 声明",
            "Lua 函数可一次返回多个值",
            "... 可变参数，select(\"#\",...) 数个数",
            "{...} 把可变参数打包成数组",
            "闭包记住并修改外部变量",
            "函数是一等公民，可当参数传递",
            "尾调用 return f(...) 不占栈，可安全递归"
          ]
        }
      ],
      'templates': [
        {
          'name': "计数器",
          'code': "local function makeCounter()\n  local count = 0\n  return function()\n    count = count + 1\n    return count\n  end\nend\nlocal c = makeCounter()\nprint(c())  -- 1\nprint(c())  -- 2"
        }
      ]
    },
    {
      'id': "lu-10",
      'title': "迭代器与泛型 for",
      'summary': "自定义迭代器、pairs/ipairs 原理、无状态迭代器、文件行迭代。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "你在前面见到的 <code.inline>for i, v in ipairs(t) do ... end</code.inline> 叫**泛型 for**。它的工作原理是：for 会反复调用一个『迭代器函数』，直到它返回 nil。理解了这个机制，你就能自己写迭代器，让任何东西都能被 for 遍历。"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "自定义迭代器",
          'code': "-- 自定义迭代器：生成 1 到 n 的平方\nlocal function squares(n)\n  local i = 0\n  return function()\n    i = i + 1\n    if i <= n then\n      return i, i * i\n    end\n  end\nend\n\nfor num, sq in squares(4) do\n  print(num, sq)   -- 1 1 / 2 4 / 3 9 / 4 16\nend"
        },
        {
          'type': "p",
          'text': "注意 squares 返回的是**一个函数**（匿名函数），它闭包捕获了 i。泛型 for 每次循环调用这个函数，得到 num 和 sq 两个值，函数返回 nil 时循环结束。"
        },
        {
          'type': "h",
          'text': "无状态迭代器（ipairs 的原理）"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "自己实现一个 ipairs",
          'code': "-- ipairs 的原理：返回三个值 = 迭代函数, 状态, 初值\nlocal function ipairs_next(t, i)\n  i = i + 1\n  local v = t[i]\n  if v then return i, v end\nend\n\nlocal function my_ipairs(t)\n  return ipairs_next, t, 0\nend\n\nfor i, v in my_ipairs({\"a\", \"b\", \"c\"}) do\n  print(i, v)   -- 1 a / 2 b / 3 c\nend\n\n-- 泛型 for 会自己调用：迭代函数(t, 上次返回值)\n-- 直到返回 nil 结束。这就是 ipairs 的全部秘密"
        },
        {
          'type': "h",
          'text': "文件行迭代"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "逐行读文件",
          'code': "-- 读文件每一行：io.lines 返回一个行迭代器\n-- 先创建 test.txt：\nlocal f = io.open(\"test.txt\", \"w\")\nf:write(\"第一行\\n第二行\\n第三行\\n\")\nf:close()\n\nfor line in io.lines(\"test.txt\") do\n  print(\"读到：\" .. line)\nend\n-- 读到：第一行\n-- 读到：第二行\n-- 读到：第三行"
        },
        {
          'type': "tip",
          'title': "什么时候自定义迭代器",
          'text': "当你需要『按某种特殊顺序遍历』或『从数据流里逐个取数据』时，自定义迭代器非常强大。比如遍历树、逐行读日志、生成数列，都能用迭代器封装成优雅的 for 循环。"
        },
        {
          'type': "warn",
          'title': "不要在循环里修改正在遍历的 table",
          'text': "在 ipairs/pairs 循环里增删元素会导致行为不可预期（可能漏遍历或死循环）。如果需要边遍历边筛选，先收集到新表再统一处理。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"迭代器与泛型 for\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"迭代器与泛型 for\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"迭代器与泛型 for\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "泛型 for 反复调用迭代器函数直到返回 nil",
            "自定义迭代器 = 闭包 + 返回函数",
            "ipairs 的本质是返回 迭代函数/状态/初值 三个值",
            "无状态迭代器把状态放在参数里，更高效",
            "io.lines 逐行读文件，配合 for 很顺手",
            "遍历中别修改 table"
          ]
        }
      ],
      'templates': [
        {
          'name': "生成数列迭代器",
          'code': "local function seq(from, to, step)\n  local i = from - step\n  return function()\n    i = i + step\n    if (step > 0 and i <= to) or (step < 0 and i >= to) then\n      return i\n    end\n  end\nend\nfor n in seq(1, 5) do\n  print(n)   -- 1 2 3 4 5\nend"
        }
      ]
    },
    {
      'id': "lu-11",
      'title': "元表 metatable 与面向对象",
      'summary': "setmetatable/getmetatable、__index、__tostring、__add、模拟类与继承。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "Lua 本身没有『类』，但它有个叫**元表（metatable）**的魔法机制：给一个 table 挂上元表，就能改变它的行为——找不到键时怎么办、打印时显示什么、两个 table 相加是什么结果。用元表可以完美模拟出类和继承。"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "元表基础与 __index / __tostring",
          'code': "local meta = {\n  -- __index：访问不存在的键时被调用\n  __index = function(t, key)\n    return \"未知属性：\" .. tostring(key)\n  end,\n  -- __tostring：print(table) 时被调用\n  __tostring = function(t) return \"我是一个table\" end,\n}\n\nlocal obj = setmetatable({ v = 10 }, meta)\nprint(obj.v)         -- 10  正常键\nprint(obj.name)      -- 触发 __index，返回 未知属性：name\nprint(obj)           -- 触发 __tostring，返回 我是一个table"
        },
        {
          'type': "h",
          'text': "__index 实现继承"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "用元表模拟类",
          'code': "-- 用 __index 让子表能查到父表的成员\nlocal Animal = {}\nAnimal.__index = Animal   -- 关键：找不到就查 Animal 自己\n\nfunction Animal.new(name)\n  local self = setmetatable({}, Animal)\n  self.name = name\n  return self\nend\n\nfunction Animal:speak()\n  print(self.name .. \" 在叫\")\nend\n\n-- 创建实例\nlocal a = Animal.new(\"小狗\")\na:speak()   -- 小狗 在叫\n\n-- __index 指向 Animal，所以 a 没有 speak 也能找到"
        },
        {
          'type': "h",
          'text': "继承与运算符重载"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "子类继承父类",
          'code': "local Animal = {}\nAnimal.__index = Animal\nfunction Animal.new(name)\n  local self = setmetatable({}, Animal)\n  self.name = name\n  return self\nend\nfunction Animal:speak()\n  print(self.name .. \" 在叫\")\nend\n\n-- 子类 Dog：让 Dog 的元表指向 Animal\nlocal Dog = setmetatable({}, { __index = Animal })\nDog.__index = Dog\n\nfunction Dog.new(name)\n  local self = Animal.new(name)   -- 调用父类构造\n  return setmetatable(self, Dog)  -- 换成 Dog 的元表\nend\n\nfunction Dog:speak()   -- 覆写方法\n  print(self.name .. \" 汪汪叫\")\nend\n\nlocal dog = Dog.new(\"旺财\")\ndog:speak()   -- 旺财 汪汪叫"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "__add 运算符重载",
          'code': "local vecMeta = {\n  __add = function(a, b)\n    return setmetatable({ x = a.x + b.x, y = a.y + b.y }, vecMeta)\n  end,\n  __tostring = function(t) return \"(\" .. t.x .. \", \" .. t.y .. \")\" end,\n}\n\nlocal function vec(x, y)\n  return setmetatable({ x = x, y = y }, vecMeta)\nend\n\nlocal v1 = vec(1, 2)\nlocal v2 = vec(3, 4)\nprint(v1 + v2)   -- (4, 6)  触发 __add"
        },
        {
          'type': "info",
          'title': "冒号语法自动传 self",
          'text': "<code.inline>function obj:method()</code.inline> 等价于 <code.inline>function obj.method(self)</code.inline>，调用 <code.inline>obj:method()</code.inline> 会自动把 obj 作为 self 传入。这是 Lua 模拟面向对象的语法糖，写起来很像别的语言的 this。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"元表 metatable 与面向对象\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"元表 metatable 与面向对象\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"元表 metatable 与面向对象\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "元表用 setmetatable 挂，getmetatable 查",
            "__index 在查不到键时触发，是实现继承的关键",
            "__tostring 控制打印显示",
            "__add/__sub 等可以重载运算符",
            "继承：子表元表的 __index 指向父表",
            "冒号语法 obj:method() 自动传 self",
            "函数名带 self 就是模拟类的方法"
          ]
        }
      ],
      'templates': [
        {
          'name': "迷你动物类",
          'code': "local Animal = {}\nAnimal.__index = Animal\nfunction Animal.new(name)\n  local self = setmetatable({}, Animal)\n  self.name = name\n  return self\nend\nfunction Animal:speak()\n  print(self.name .. \" 在叫\")\nend\n\nlocal dog = Animal.new(\"旺财\")\ndog:speak()"
        }
      ]
    },
    {
      'id': "lu-12",
      'title': "模块与包：require 与 LuaRocks",
      'summary': "require、模块模式、package.path、LuaRocks 安装第三方模块。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "写多了代码自然要拆分：把公共逻辑放进单独文件，用的时候 require 进来。Lua 的模块机制很朴素：**一个 .lua 文件就是一个模块**，文件里 return 一个 table（通常是函数集合），别处 require 一下就能用。"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "写一个模块",
          'code': "-- 文件：mymath.lua\nlocal M = {}   -- 模块通常是个 table\n\nfunction M.add(a, b)\n  return a + b\nend\n\nfunction M.sub(a, b)\n  return a - b\nend\n\nfunction M.square(n)\n  return n * n\nend\n\nreturn M   -- 关键：把模块返回出去"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "使用模块",
          'code': "-- 文件：main.lua（和 mymath.lua 同目录）\nlocal mymath = require(\"mymath\")   -- 加载并返回模块\n\nprint(mymath.add(3, 4))       -- 7\nprint(mymath.sub(10, 3))      -- 7\nprint(mymath.square(5))       -- 25\n\n-- require 只会加载一次，重复 require 返回同一个\nlocal again = require(\"mymath\")\nprint(again == mymath)   -- true"
        },
        {
          'type': "p",
          'text': "<code.inline>require('mymath')</code.inline> 会到 <code.inline>package.path</code> 列出的目录里找 mymath.lua，找到就加载、执行，然后 return 的内容会作为模块返回。require 有缓存：同一个模块只执行一次。"
        },
        {
          'type': "h",
          'text': "package.path 与 LuaRocks"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "查看和修改搜索路径",
          'code': "-- 查看模块搜索路径\nprint(package.path)\n-- 例如：./?.lua;./?/init.lua;/usr/local/share/lua/5.4/?.lua;...\n\n-- 手动添加一个搜索目录\npackage.path = package.path .. \";./mylibs/?.lua\"\n\n-- 之后 require 就会去 mylibs 目录里找"
        },
        {
          'type': "list",
          'items': [
            "LuaRocks 是 Lua 的包管理器（类似 npm/pip）：官网 <a href='https://luarocks.org' target='_blank' rel='noopener'>luarocks.org</a>",
            "安装 LuaRocks 后，一条命令装包：<code.inline>luarocks install 包名</code.inline>",
            "热门包如 luasocket（网络）、lua-cjson（JSON 处理）都能用 LuaRocks 装",
            "LuaRocks 装好的包会在 package.path 里自动可见"
          ]
        },
        {
          'type': "warn",
          'title': "require 常见的坑",
          'text': "① 模块文件名要和 require 的名字一致（大小写敏感）；② 模块文件里最后一定要 return M，否则 require 返回的是 true 而不是内容；③ require 的模块路径以 package.path 为准，跨目录要配置好路径。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"模块与包：require 与 LuaRocks\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"模块与包：require 与 LuaRocks\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"模块与包：require 与 LuaRocks\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "一个 .lua 文件就是一个模块",
            "模块最后 return table，别人 require 就能用",
            "require 有缓存，同一模块只加载一次",
            "package.path 决定去哪些目录找模块",
            "LuaRocks 是包管理器：luarocks install 包名",
            "require 名要和文件名一致，且大小写敏感"
          ]
        }
      ],
      'templates': [
        {
          'name': "简易数学模块",
          'code': "local M = {}\nfunction M.add(a, b) return a + b end\nfunction M.mul(a, b) return a * b end\nreturn M\n\n-- 用法（另一个文件）：\n-- local m = require(\"模块名\")\n-- print(m.add(2, 3))"
        }
      ]
    },
    {
      'id': "lu-13",
      'title': "协程 coroutine",
      'summary': "coroutine.create/resume/yield、协程状态、生产者-消费者、与线程的区别。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "Lua 本身是单线程的，但它提供了**协程（coroutine）**：一种可以『暂停、让出、再恢复』的函数。协程让多个任务协作交替执行，是 Lua 写游戏逻辑和异步流程的利器。"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "协程的基本用法",
          'code': "-- 创建协程\nlocal co = coroutine.create(function()\n  print(\"协程开始\")\n  coroutine.yield(100)      -- 挂起，把 100 交出去\n  print(\"协程恢复\")\n  return \"结束\"\nend)\n\nprint(coroutine.status(co))   -- suspended  已创建未运行\n\nlocal ok, result = coroutine.resume(co)\nprint(ok, result)             -- true 100\nprint(coroutine.status(co))   -- suspended  在 yield 处挂起\n\nlocal ok2, result2 = coroutine.resume(co)\nprint(ok2, result2)           -- true 结束\nprint(coroutine.status(co))   -- dead  跑完了"
        },
        {
          'type': "p",
          'text': "流程是这样的：<code.inline>resume</code.inline> 启动或恢复协程 → 协程执行到 <code.inline>yield</code.inline> 就挂起并把值交出去 → 外面 resume 再把它唤醒继续跑。协程的三种状态：<code.inline>suspended</code.inline>（挂起）、<code.inline>running</code.inline>（运行中）、<code.inline>dead</code.inline>（结束）。"
        },
        {
          'type': "h",
          'text': "生产者-消费者模式"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "协程实现生产者-消费者",
          'code': "-- 生产者：不断产出数据\nlocal function producer()\n  for i = 1, 3 do\n    coroutine.yield(i)    -- 产出数据后挂起\n  end\nend\n\nlocal co = coroutine.create(producer)\n\n-- 消费者：逐个消费\nlocal function consumer()\n  while true do\n    local ok, value = coroutine.resume(co)\n    if not ok or value == nil then break end\n    print(\"消费了：\", value)\n  end\nend\n\nconsumer()\n-- 消费了：\t1\n-- 消费了：\t2\n-- 消费了：\t3"
        },
        {
          'type': "info",
          'title': "协程和线程的区别",
          'text': "线程是系统级并行，多个线程真正同时跑，要处理锁和竞争；协程是用户级协作，**同一时刻只有一个在跑**，靠 yield/resume 手动切换，没有数据竞争问题。协程适合协作任务，线程适合并行计算。"
        },
        {
          'type': "warn",
          'title': "resume 的返回值",
          'text': "<code.inline>resume</code.inline> 返回两个值：第一个是布尔值，表示协程是否正常跑完（出错为 false）；第二个才是 yield/return 传出来的值。判断协程是否结束，记得先看第一个布尔值。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"协程 coroutine\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"协程 coroutine\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"协程 coroutine\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "coroutine.create 创建，resume 启动/恢复，yield 挂起",
            "三种状态：suspended / running / dead",
            "yield 交出的值由 resume 的第二个返回值接收",
            "生产者-消费者用协程写非常自然",
            "协程是协作式单线程，没有数据竞争",
            "resume 第一个返回值表示是否正常"
          ]
        }
      ],
      'templates': [
        {
          'name': "简单协程",
          'code': "local co = coroutine.create(function()\n  print(\"第 1 步\")\n  coroutine.yield()\n  print(\"第 2 步\")\nend)\n\ncoroutine.resume(co)   -- 第 1 步\ncoroutine.resume(co)   -- 第 2 步"
        }
      ]
    },
    {
      'id': "lu-14",
      'title': "标准库与文件读写",
      'summary': "string/table/math/os/io 常用函数，io.open 文件读写，os.time/date。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "Lua 自带一套精简但够用的标准库：string（字符串）、table（表格）、math（数学）、os（系统）、io（输入输出）。这一章把最常用的函数过一遍，重点是文件读写。"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "string 与 math 库",
          'code': "-- string 库\nlocal s = \"Hello World\"\nprint(string.upper(s))       -- HELLO WORLD\nprint(string.sub(s, 7))      -- World  从第 7 个字符开始\nprint(string.find(s, \"World\")) -- 7 9\nprint(string.gsub(\"a1b2\", \"%d\", \"#\"))  -- a#b#  用模式替换\n\n-- math 库\nprint(math.pi)               -- 3.1415926535898\nprint(math.floor(3.7))       -- 3  向下取整\nprint(math.ceil(3.2))        -- 4  向上取整\nprint(math.max(1, 5, 3))     -- 5\nprint(math.random(1, 100))   -- 1~100 随机数\nprint(math.abs(-5))          -- 5"
        },
        {
          'type': "h",
          'text': "os 库：时间与系统"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "时间处理",
          'code': "print(os.time())                         -- 时间戳（秒数）\nprint(os.date(\"%Y-%m-%d %H:%M:%S\"))      -- 格式化时间，如 2026-08-28 12:00:00\nprint(os.date(\"%A\"))                     -- 星期几\nprint(os.clock())                        -- 程序运行秒数\n\n-- 把时间戳转回日期\nlocal t = os.time()\nprint(os.date(\"%Y年%m月%d日\", t))        -- 2026年08月28日"
        },
        {
          'type': "h",
          'text': "io 库：文件读写"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "文件写入与读取",
          'code': "-- 写入文件（w 模式，会覆盖）\nlocal f = io.open(\"test.txt\", \"w\")\nf:write(\"第一行\\n第二行\\n第三行\\n\")\nf:close()\n\n-- 读取整个文件\nlocal f2 = io.open(\"test.txt\", \"r\")\nlocal content = f2:read(\"*a\")   -- *a 表示读全部\nprint(content)\nf2:close()\n\n-- 逐行读取\nfor line in io.lines(\"test.txt\") do\n  print(\"行：\", line)\nend\n\n-- 追加写入（a 模式）\nlocal f3 = io.open(\"test.txt\", \"a\")\nf3:write(\"追加的内容\\n\")\nf3:close()"
        },
        {
          'type': "warn",
          'title': "打开文件要检查返回值",
          'text': "<code.inline>io.open</code.inline> 失败（如文件不存在）返回的是 nil 和一个错误信息，直接调用 f:write 会报错。稳妥写法：<code.inline>local f, err = io.open(...); if not f then print(err) end</code.inline>。用完记得 close，否则会占用文件句柄。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"标准库与文件读写\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"标准库与文件读写\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"标准库与文件读写\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "string 库：upper/lower/sub/find/gsub",
            "math 库：floor/ceil/max/random/abs",
            "os.time() 时间戳，os.date() 格式化",
            "io.open(路径, 模式) 打开文件：w 写 r 读 a 追加",
            "f:read(\"*a\") 读全部，io.lines 逐行读",
            "打开文件要判空，用完要 close"
          ]
        }
      ],
      'templates': [
        {
          'name': "写读文件",
          'code': "local f = io.open(\"data.txt\", \"w\")\nf:write(\"你好，Lua！\\n\")\nf:close()\n\nlocal f2 = io.open(\"data.txt\", \"r\")\nprint(f2:read(\"*a\"))\nf2:close()"
        }
      ]
    },
    {
      'id': "lu-15",
      'title': "嵌入与实战场景",
      'summary': "Redis 脚本、Nginx/OpenResty、游戏引擎脚本、Love2D、Wireshark/魔兽世界。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "Lua 的价值在嵌入：它被塞进各种大系统里当『可热更新的逻辑层』。这一章带你看看 Lua 在真实世界的几个著名战场，理解它为什么这么受欢迎。"
        },
        {
          'type': "h",
          'text': "场景一：Redis 脚本（原子操作）"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "Redis 里用 Lua 保证原子性",
          'code': "-- Redis 通过 EVAL 执行 Lua 脚本\n-- 脚本在 Redis 里是原子执行的，中间不会被其他命令插队\nlocal value = redis.call(\"get\", KEYS[1])   -- 读键\nif not value then\n  return redis.error_reply(\"没有这个键\")\nend\nredis.call(\"incr\", \"counter\")              -- 计数加 1\nreturn value\n\n-- 这样『先判断再修改』的两个操作合在一起，不会出并发问题"
        },
        {
          'type': "p",
          'text': "Redis 里 Lua 的最大价值：把『先查再改』这类多步操作打包成一个**原子操作**，要么全部执行完，要么一条不执行，彻底避免并发竞争。电商秒杀、分布式锁都用这个技巧。"
        },
        {
          'type': "h",
          'text': "场景二：OpenResty / Nginx"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "OpenResty 里处理请求",
          'code': "-- OpenResty 把 Lua 嵌进 Nginx，用 Lua 写 Web 逻辑\nngx.say(\"Hello from Lua!\")             -- 输出响应\n\n-- 可以做鉴权、限流、转发\nlocal key = ngx.var.uri\nlocal count = ngx.shared.counter:incr(key, 1, 0)\nif count > 100 then\n  ngx.exit(429)   -- 限流：返回 429 太多请求\nend\n\n-- 语法和普通 Lua 一样，只是多了 ngx.* 这套 API"
        },
        {
          'type': "h",
          'text': "场景三：游戏引擎脚本"
        },
        {
          'type': "list",
          'items': [
            "魔兽世界：大量玩法、副本逻辑用 Lua 写，官方提供 API 给玩家做插件",
            "Roblox：用 Lua 写整个游戏的玩法逻辑（改名为 Luau）",
            "LÖVE（Love2D）：免费开源 2D 游戏框架，用 Lua 写游戏，官网 <a href='https://love2d.org' target='_blank' rel='noopener'>love2d.org</a>",
            "Wireshark：抓包分析工具的过滤器和协议解析支持 Lua",
            "Neovim：新一代 Vim 的配置和插件用 Lua 写"
          ]
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "Love2D 游戏脚本骨架",
          'code': "-- Love2D 的三个核心回调：love.load / love.update / love.draw\nlocal x, y = 100, 100\n\nfunction love.load()\n  love.graphics.setBackgroundColor(0.1, 0.1, 0.2)\nend\n\nfunction love.update(dt)\n  -- dt 是上一帧到这一帧的秒数，游戏循环里每帧调用\n  x = x + 100 * dt   -- 每秒向右移动 100 像素\nend\n\nfunction love.draw()\n  love.graphics.print(\"Hello, Love2D!\", x, y)\nend"
        },
        {
          'type': "tip",
          'title': "怎么开始玩 Love2D",
          'text': "到 love2d.org 下载安装包（免费），把上面的代码存成 main.lua，拖到 love.exe 上就能运行。这是上手 Lua 游戏开发最快的方式。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"嵌入与实战场景\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"嵌入与实战场景\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"嵌入与实战场景\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Redis 用 Lua 做原子脚本，避免并发竞争",
            "OpenResty 把 Lua 嵌进 Nginx 写 Web 逻辑",
            "魔兽、Roblox、Love2D 都用 Lua 写游戏逻辑",
            "Love2D 是免费开源的 2D 游戏框架 love2d.org",
            "Wireshark、Neovim 也靠 Lua 扩展",
            "嵌入场景：核心用 C/C++，逻辑用 Lua 热更新"
          ]
        }
      ],
      'templates': [
        {
          'name': "Love2D 小游戏骨架",
          'code': "local x, y = 200, 200\n\nfunction love.draw()\n  love.graphics.circle(\"fill\", x, y, 20)\n  love.graphics.print(\"移动鼠标看看\", 10, 10)\nend\n\nfunction love.mousemoved(mx, my)\n  x, y = mx, my\nend"
        }
      ]
    },
    {
      'id': "lu-16",
      'title': "实战小项目与下一步",
      'summary': "命令行待办工具、配置解析器、游戏脚本，学完 Lua 的下一步方向。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "学了这么多，来动手做三个小项目练手：一个命令行待办工具、一个配置文件解析器、一个游戏脚本小例子。做完它们，你对 Lua 的信心会完全不同。"
        },
        {
          'type': "h",
          'text': "项目一：命令行待办工具"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "todo.lua",
          'code': "-- 用法：lua todo.lua add 买菜 / list / done 1\nlocal todos = {}\n\nlocal function add(item)\n  table.insert(todos, item)\n  print(\"已添加：\" .. item)\nend\n\nlocal function list()\n  for i, item in ipairs(todos) do\n    print(i .. \". \" .. item)\n  end\nend\n\nlocal function done(index)\n  if todos[index] then\n    print(\"已完成：\" .. table.remove(todos, index))\n  else\n    print(\"没有这个编号\")\n  end\nend\n\nlocal action, arg = ...\nif action == \"add\" then\n  add(arg)\nelseif action == \"list\" then\n  list()\nelseif action == \"done\" then\n  done(tonumber(arg))\nelse\n  print(\"用法：lua todo.lua add 买菜 / list / done 1\")\nend"
        },
        {
          'type': "h",
          'text': "项目二：配置文件解析器"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "解析 INI 配置",
          'code': "-- 配置文件 config.ini 内容例如：\n-- name=小明\n-- age=10\n-- city=上海\n\nlocal function parseConfig(path)\n  local config = {}\n  for line in io.lines(path) do\n    -- 用模式匹配提取 key=value\n    local key, value = line:match(\"(%w+)=(.*)\")\n    if key then\n      config[key] = value\n    end\n  end\n  return config\nend\n\n-- 使用\n-- local c = parseConfig(\"config.ini\")\n-- print(c.name)   -- 小明\n-- print(c.age)    -- 10\n-- print(c.city)   -- 上海"
        },
        {
          'type': "p",
          'text': "这一小段用到了 <code.inline>io.lines</code.inline> 逐行读文件 + <code.inline>string.match</code.inline> 的模式匹配，把每个 key=value 提取出来。别小看它，很多游戏和服务器配置就是这么解析的。"
        },
        {
          'type': "h",
          'text': "项目三：游戏脚本小例子"
        },
        {
          'type': "code",
          'lang': "lua",
          'title': "玩家生命值管理",
          'code': "local player = {\n  name = \"勇者\",\n  hp = 100,\n  maxHp = 100,\n}\n\nfunction player:takeDamage(amount)\n  self.hp = self.hp - amount\n  if self.hp <= 0 then\n    self.hp = 0\n    print(self.name .. \" 倒下了！\")\n  else\n    print(self.name .. \" 剩余生命 \" .. self.hp)\n  end\nend\n\nfunction player:heal(amount)\n  self.hp = math.min(self.maxHp, self.hp + amount)\n  print(self.name .. \" 回血，当前生命 \" .. self.hp)\nend\n\nplayer:takeDamage(30)   -- 勇者 剩余生命 70\nplayer:heal(20)         -- 勇者 回血，当前生命 90\nplayer:takeDamage(200)  -- 勇者 倒下了！"
        },
        {
          'type': "h",
          'text': "下一步怎么走"
        },
        {
          'type': "list",
          'items': [
            "想写游戏：玩 LÖVE（love2d.org）做 2D 游戏，或学 Roblox 的 Luau",
            "想搞 Web/网关：学 OpenResty，用 Lua 写高性能接口",
            "想搞数据/后端：学 Redis 的 Lua 脚本做原子操作",
            "想深入语言本身：读官方参考手册 lua.org，研究元表和闭包",
            "想用包管理：装 LuaRocks，把常用模块串起来做大项目"
          ]
        },
        {
          'type': "info",
          'title': "学习建议",
          'text': "Lua 语法 1 天就能看完，但真正会用要 2-4 周练习。建议：① 每天动手写代码；② 把小项目逐步加功能（比如给 todo 加文件持久化）；③ 遇到问题查官方文档 lua.org 和 lua-users 社区；④ 多读开源 Lua 代码，看别人怎么组织模块。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"实战小项目与下一步\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"实战小项目与下一步\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"实战小项目与下一步\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "三个小项目：CLI 待办、配置解析、游戏脚本",
            "用 ... 拿命令行参数，tonumber 转数字",
            "模式匹配 string.match 是文本处理利器",
            "table 加方法就是对象，冒号语法像 this",
            "下一步：Love2D / OpenResty / Redis 脚本 / LuaRocks",
            "Lua 入门快、精通难，多写多练"
          ]
        }
      ],
      'templates': [
        {
          'name': "游戏角色管理",
          'code': "local hero = { name = \"勇者\", hp = 100, maxHp = 100 }\nfunction hero:takeDamage(n)\n  self.hp = math.max(0, self.hp - n)\n  print(self.name .. \" 生命 \" .. self.hp)\nend\nfunction hero:heal(n)\n  self.hp = math.min(self.maxHp, self.hp + n)\n  print(self.name .. \" 生命 \" .. self.hp)\nend\nhero:takeDamage(30)\nhero:heal(20)"
        }
      ]
    }
  ]
});

