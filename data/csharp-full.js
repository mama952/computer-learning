/* ============================================================
   计算机知识库 · 数据：C# 完整课程（16 章，从入门到进阶）
   ============================================================ */
window.LANGUAGE_EXTRA = window.LANGUAGE_EXTRA || [];
window.LANGUAGE_EXTRA.push({
  'id': "csharp",
  'name': "C#",
  'icon': "C#",
  'tagline': "微软官方语言，Windows 桌面、Web 后端与 Unity 游戏开发的首选。",
  'intro': "这是一套从零开始的 C# 完整课程。第 1 章带你认识 C# 与 .NET 生态，第 2 章教你下载安装 .NET SDK，之后从变量、运算符、条件、循环一路学到数组集合、方法、字符串、面向对象、LINQ、文件与 JSON，最后一章动手做一个控制台记账本，并规划通往 ASP.NET Core Web 和 Unity 游戏开发的方向。每一章都用大白话讲透概念和坑，配可运行示例代码与编辑器模板。",
  'meta': {
    "难度": "从零到进阶",
    "章节": "16 章",
    "场景": "桌面/Web 后端/游戏"
  },
  'lessons': [
    {
      'id': "csh-1",
      'title': "C# 是什么：.NET 生态大观",
      'summary': "认识 C#、.NET、ASP.NET、Unity 之间的关系，判断自己适不适合学。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "C#（读作 C-Sharp，『井号』）是微软推出的一门现代、优雅、强类型的面向对象编程语言。它诞生于 2000 年，经过二十多年发展，已成为全球最受欢迎的编程语言之一，常年位居 TIOBE 排行榜前列。它语法严谨、工具链成熟，是 Windows 桌面应用、Web 后端、游戏开发的主流选择。"
        },
        {
          'type': "h",
          'text': "C# 和 .NET 到底是什么关系"
        },
        {
          'type': "p",
          'text': "很多新手把 C# 和 .NET 混为一谈。简单说：**C# 是语言**（你写代码用的语法），**.NET 是平台**（让代码运行起来的运行时、类库、工具链的总称）。你可以用 C# 写代码，然后交给 .NET 去编译和运行。打个比方：C# 是『普通话』，.NET 是『讲普通话的地方和基础设施』。"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "第一眼看到 C# 长什么样",
          'code': "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        string name = \"小明\";\n        int age = 20;\n        Console.WriteLine($\"你好，我叫{name}，今年{age}岁\");\n        Console.WriteLine(\"我准备开始学 C# 了！\");\n    }\n}"
        },
        {
          'type': "p",
          'text': "上面这段代码你现在还看不懂没关系，先混个眼熟：用 <code.inline>class</code.inline> 组织代码、用 <code.inline>Console.WriteLine</code.inline> 输出文字、用 <code.inline>$\"...\"</code.inline> 做字符串插值。这些知识点后面每一章都会拆开讲透。"
        },
        {
          'type': "h",
          'text': ".NET 生态里的几大明星"
        },
        {
          'type': "table",
          'head': [
            "名字",
            "是什么",
            "用来做什么"
          ],
          'rows': [
            [
              "C#",
              "编程语言",
              "你写代码用的语言"
            ],
            [
              ".NET",
              "开发平台",
              "运行时 + 类库 + 工具，负责编译和运行 C#"
            ],
            [
              "ASP.NET Core",
              "Web 框架",
              "用 C# 写网站后端、Web API"
            ],
            [
              "Unity",
              "游戏引擎",
              "用 C# 写游戏逻辑（PC/手机/主机游戏）"
            ]
          ]
        },
        {
          'type': "h",
          'text': "你适合学 C# 吗"
        },
        {
          'type': "list",
          'items': [
            "想开发 Windows 桌面软件（WPF / WinForms）",
            "想做网站后端、Web API（ASP.NET Core 是企业级主流之一）",
            "想做游戏（Unity 是全球最流行的游戏引擎之一）",
            "喜欢语法严谨、强类型、有完整 IDE 支持的语言"
          ]
        },
        {
          'type': "warn",
          'title': "别把 C# 和 C/C++ 搞混",
          'text': "C# 虽然名字里带个 C，但它和 C、C++ 完全不同，语法更像 Java。C/C++ 需要手动管理内存，C# 则由 .NET 自动管理（垃圾回收），写起来轻松安全得多。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"C# 是什么：.NET 生态大观\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"C# 是什么：.NET 生态大观\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"C# 是什么：.NET 生态大观\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "C# 是语言，.NET 是平台，两者配合使用",
            "ASP.NET Core 用 C# 写 Web，Unity 用 C# 写游戏",
            "C# 语法严谨、强类型、自动内存管理",
            "适合 Windows 桌面、Web 后端、游戏三大方向"
          ]
        }
      ],
      'templates': [
        {
          'name': "C# 自我介绍",
          'code': "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.WriteLine(\"你好，我是 C#！\");\n        Console.WriteLine(\"我的英文名叫 C-Sharp\");\n        Console.WriteLine(\"我来自微软\");\n    }\n}"
        }
      ]
    },
    {
      'id': "csh-2",
      'title': "下载与安装 .NET SDK",
      'summary': "到官方下载 SDK、安装、用 dotnet --version 验证，配好编辑器。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "学习 C# 的第一步，是装好 .NET SDK（软件开发工具包）。SDK 里包含编译器、运行时和命令行工具，装好它你才能把 C# 代码编译成程序并运行。好消息是：.NET SDK 完全免费、开源，官方支持 Windows、macOS、Linux 三大系统。"
        },
        {
          'type': "h",
          'text': "第一步：下载 SDK"
        },
        {
          'type': "list",
          'items': [
            "打开官方下载页：<a href='https://dotnet.microsoft.com/download' target='_blank' rel='noopener'>https://dotnet.microsoft.com/download</a>",
            "页面会自动识别你的系统，点击『Download .NET SDK』（注意选 SDK，不是 Runtime）",
            "选最新 LTS（长期支持）版本即可，LTS 更稳定"
          ]
        },
        {
          'type': "p",
          'text': "**Windows 用户**：下载 .exe 安装包，双击一路『下一步』即可。**macOS 用户**：下载 .pkg 安装包双击安装。**Linux 用户**：不同发行版安装命令不同，官方页面会给出对应命令（如 Ubuntu 用 apt），照抄执行即可。"
        },
        {
          'type': "h",
          'text': "第二步：验证安装"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "命令行验证是否装好",
          'code': "dotnet --version\n# 输出类似 8.0.100 这样的版本号，说明安装成功\ndotnet --list-sdks\n# 列出电脑上安装的所有 SDK 版本"
        },
        {
          'type': "p",
          'text': "打开命令行（Windows 按 <code.inline>Win+R</code.inline> 输入 <code.inline>cmd</code.inline>，或直接打开 PowerShell），输入 <code.inline>dotnet --version</code>，能打印出版本号就说明装好了。"
        },
        {
          'type': "warn",
          'title': "新手常见问题",
          'text': "如果提示『dotnet 不是内部或外部命令』，通常是 PATH 没配置好。Windows 上重启一下命令行再试，还不行就卸载重装（安装器会自动配置 PATH）。另外注意别把 SDK 和 Runtime 搞混——学习开发必须装 SDK，它已经包含运行时。"
        },
        {
          'type': "h",
          'text': "第三步：选一个编辑器"
        },
        {
          'type': "list",
          'items': [
            "Visual Studio 社区版（Windows/macOS，功能最全，微软官方免费）：<a href='https://visualstudio.microsoft.com/zh-hans/' target='_blank' rel='noopener'>visualstudio.microsoft.com/zh-hans/</a>，安装时勾选『ASP.NET 和 Web 开发』或『.NET 桌面开发』工作负载",
            "VS Code（轻量、跨平台，完全免费）：<a href='https://code.visualstudio.com' target='_blank' rel='noopener'>code.visualstudio.com</a>，装好后在扩展商店搜索『C#』并安装微软官方的 C# 扩展",
            "JetBrains Rider（功能强大，收费软件，新手可选替代品，非必须）"
          ]
        },
        {
          'type': "tip",
          'title': "新手推荐",
          'text': "Windows 用户强烈推荐 Visual Studio 社区版，它是免费的全功能 IDE，写 C# 体验最好、自动补全最智能。如果电脑配置一般，用 VS Code + C# 扩展也完全够用。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"下载与安装 .NET SDK\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"下载与安装 .NET SDK\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"下载与安装 .NET SDK\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "官网下载：dotnet.microsoft.com/download，选 SDK 而非 Runtime",
            "dotnet --version 验证是否装好",
            "Visual Studio 社区版 / VS Code + C# 扩展均可",
            "SDK 已包含运行时，学习开发装 SDK 就够了"
          ]
        }
      ],
      'templates': [
        {
          'name': "Hello from console",
          'code': "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.WriteLine(\"Hello, C#!\");\n        Console.WriteLine(\"我的 C# 环境跑通了！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "csh-3",
      'title': "第一个 C# 程序：dotnet new console",
      'summary': "用 dotnet new console 创建项目，认识 Main 方法，跑通第一个程序。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "装好 SDK 后，我们先用命令行创建人生第一个 C# 项目。.NET 提供了一套非常方便的命令行工具，<code.inline>dotnet new console</code.inline> 会帮你生成一个完整的『控制台应用』模板，你只管往里面填代码。"
        },
        {
          'type': "h",
          'text': "创建并运行项目"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "命令行创建并运行",
          'code': "dotnet new console -n HelloWorld\n# 生成一个名为 HelloWorld 的控制台项目\ncd HelloWorld\ndotnet run\n# 输出：Hello, World!"
        },
        {
          'type': "p",
          'text': "依次执行上面三条命令：<code.inline>dotnet new console</code.inline> 创建项目，<code.inline>cd HelloWorld</code.inline> 进入项目文件夹，<code.inline>dotnet run</code.inline> 编译并运行程序。看到 <code.inline>Hello, World!</code> 输出，你的第一个 C# 程序就跑通了！"
        },
        {
          'type': "h",
          'text': "看懂模板代码"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "Program.cs 里的代码",
          'code': "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.WriteLine(\"Hello, World!\");\n    }\n}"
        },
        {
          'type': "p",
          'text': "逐行解释：<code.inline>using System;</code.inline> 告诉编译器我们要用到 <code.inline>System</code.inline> 命名空间里现成的工具；<code.inline>class Program</code.inline> 定义了一个叫 Program 的类（C# 里代码基本都写在类里）；<code.inline>static void Main()</code.inline> 是程序的**入口点**，程序从这里开始执行；<code.inline>Console.WriteLine(...)</code.inline> 把括号里的内容打印到屏幕并换行。"
        },
        {
          'type': "warn",
          'title': "Main 方法是入口，别删掉",
          'text': "控制台程序必须有且仅有一个 <code.inline>Main</code.inline> 方法，它是程序的起点。如果把 Main 删掉或改错名字，程序就无法运行，编译会直接报错『no suitable Main method』。新版 C# 还支持顶级语句（直接写代码，编译器自动生成 Main），我们先从标准写法学起。"
        },
        {
          'type': "info",
          'title': "屏幕输出三兄弟",
          'text': "Console 类有几个常用的输出方法：<code.inline>WriteLine</code.inline> 输出并换行；<code.inline>Write</code.inline> 只输出不换行；<code.inline>ReadLine</code.inline> 读取用户输入的一行文字。记住 WriteLine 最常用就够了。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"第一个 C# 程序：dotnet new console\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"第一个 C# 程序：dotnet new console\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"第一个 C# 程序：dotnet new console\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "dotnet new console 创建项目，dotnet run 编译运行",
            "Main 方法是程序入口，不可删改",
            "Console.WriteLine 输出并换行，Write 不换行",
            "C# 代码区分大小写，标点必须是英文半角"
          ]
        }
      ],
      'templates': [
        {
          'name': "欢迎你",
          'code': "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.WriteLine(\"欢迎来到 C# 世界！\");\n        Console.Write(\"请输入你的名字：\");\n        string name = Console.ReadLine();\n        Console.WriteLine(\"你好，\" + name + \"！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "csh-4",
      'title': "变量与数据类型（int/string/double/bool/decimal）",
      'summary': "用变量存数据，认识 C# 的常见类型与类型转换。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "程序处理的就是数据。C# 是一门**强类型**语言——每个变量都必须有明确的类型，编译器会严格检查类型是否匹配。虽然一开始觉得啰嗦，但强类型能帮你尽早发现错误，写大型项目时非常省心。"
        },
        {
          'type': "h",
          'text': "声明变量与常用类型"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "常见数据类型",
          'code': "int age = 20;              // 整数（32 位）\nlong big = 9000000000L;      // 长整数（64 位，更大）\ndouble price = 3.14;         // 双精度浮点数（小数）\ndecimal money = 99.99m;      // 高精度十进制，算钱必用\nstring name = \"小明\";        // 字符串（一串文字）\nbool isOK = true;            // 布尔值：只有 true / false\n\nConsole.WriteLine($\"姓名：{name}，年龄：{age}，钱：{money}\");"
        },
        {
          'type': "p",
          'text': "C# 的整数类型有 <code.inline>int</code.inline>（32 位，范围约 ±21 亿）和 <code.inline>long</code.inline>（64 位，更大）；小数有 <code.inline>double</code.inline>（精度一般、速度快）和 <code.inline>decimal</code.inline>（精度高、适合金钱，注意字面量末尾要加 <code.inline>m</code.inline>）；<code.inline>bool</code.inline> 只有 <code.inline>true</code.inline> / <code.inline>false</code.inline> 两个值，表达『是/否』。"
        },
        {
          'type': "h",
          'text': "var：让编译器自己猜类型"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "var 类型推断",
          'code': "var name = \"小明\";   // var 自动推断为 string\nvar age = 20;        // 自动推断为 int\nvar score = 88.5;    // 自动推断为 double\n\nConsole.WriteLine($\"{name} {age}岁 分数{score}\");\n// var 声明时必须立刻赋值，否则无法推断"
        },
        {
          'type': "warn",
          'title': "var 不是动态类型",
          'text': "<code.inline>var</code.inline> 只是让编译器『帮你推断类型』，推断出的类型是固定的，之后不能再改成别的类型。例如 <code.inline>var x = 10;</code.inline> 之后写 <code.inline>x = \"abc\";</code.inline> 会编译报错。var 和动态语言的弱类型完全是两回事。"
        },
        {
          'type': "h",
          'text': "类型转换"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "Convert / Parse 转换",
          'code': "string s = \"123\";\nint n = int.Parse(s);           // 字符串 -> 整数\nint n2 = Convert.ToInt32(s);     // 另一种转换方式\n\ndouble d = 3.7;\nint i = (int)d;                  // 强制转换：直接砍掉小数，得 3\n\nint a = 5, b = 2;\ndouble c = (double)a / b;        // 整数默认整数除法，先转 double 得 2.5\n\nConsole.WriteLine($\"n={n}，i={i}，c={c}\");"
        },
        {
          'type': "danger",
          'title': "新手第一坑：字符串转数字失败",
          'text': "用 <code.inline>int.Parse(\"abc\")</code.inline> 会直接抛异常崩溃，因为 abc 不是数字。字符串里必须是纯数字（可以有正负号）才能转换成功。转换前最好用 <code.inline>int.TryParse(s, out result)</code.inline> 做安全转换，它会返回 true/false 表示是否成功。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"变量与数据类型（int/string/double/bool/decimal）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"变量与数据类型（int/string/double/bool/decimal）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"变量与数据类型（int/string/double/bool/decimal）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "C# 是强类型语言，每个变量都有明确类型",
            "整数用 int/long，小数用 double，金钱用 decimal",
            "var 让编译器推断类型，但类型一旦确定不可变",
            "int.Parse / Convert.ToInt32 做字符串转数字，注意可能抛异常",
            "两个整数相除默认整数除法，先转 double 再除"
          ]
        }
      ],
      'templates': [
        {
          'name': "个人信息卡片",
          'code': "var name = \"小红\";\nvar age = 9;\nvar height = 1.35;\nvar isStudent = true;\nConsole.WriteLine($\"姓名：{name}\");\nConsole.WriteLine($\"年龄：{age} 岁\");\nConsole.WriteLine($\"身高：{height} 米\");\nConsole.WriteLine($\"是学生吗：{isStudent}\");"
        }
      ]
    },
    {
      'id': "csh-5",
      'title': "运算符与表达式",
      'summary': "算术、比较、逻辑、拼接与复合赋值，算清楚每类运算符。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "运算符是对数据进行运算的符号。C# 的运算符和大多数语言（Java、C++）非常像，如果你学过其他语言会觉得很亲切。这一章我们把最常用的几类运算符过一遍。"
        },
        {
          'type': "h",
          'text': "算术运算符"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "加减乘除取余",
          'code': "int a = 10, b = 3;\nConsole.WriteLine(a + b);   // 13  加\nConsole.WriteLine(a - b);   // 7   减\nConsole.WriteLine(a * b);   // 30  乘\nConsole.WriteLine(a / b);   // 3   两个整数相除，结果仍是整数\nConsole.WriteLine(a % b);   // 1   取余（求余数）\n\n// 自增自减\nint n = 5;\nn++;            // n 变成 6\nn--;            // n 变回 5\nConsole.WriteLine(n);"
        },
        {
          'type': "warn",
          'title': "整数除法坑",
          'text': "<code.inline>10 / 3</code.inline> 结果是 <code.inline>3</code.inline> 而不是 3.333，因为两个 int 相除结果是 int，直接丢弃小数部分。想要精确结果，得让其中一个是小数：<code.inline>10.0 / 3</code.inline> 或 <code.inline>(double)10 / 3</code.inline>。"
        },
        {
          'type': "h",
          'text': "比较与逻辑运算符"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "比较和逻辑运算",
          'code': "int age = 18;\nbool isAdult = age >= 18;   // >= 大于等于，结果 true\nConsole.WriteLine(isAdult);\n\nbool a = true, b = false;\nConsole.WriteLine(a && b);   // false  && 与（两个都真才真）\nConsole.WriteLine(a || b);   // true   || 或（一个真就真）\nConsole.WriteLine(!a);       // false  ! 非（取反）\n\nint x = 10;\nbool result = x > 5 && x < 20;   // true"
        },
        {
          'type': "h",
          'text': "字符串连接与复合赋值"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "+ 与 +=、-=",
          'code': "string first = \"小\";\nstring full = first + \"明\";     // 字符串拼接：小明\nConsole.WriteLine(full);\n\nint money = 100;\nmoney += 50;      // 等价于 money = money + 50，得 150\nmoney -= 20;      // 等价于 money = money - 20，得 130\nmoney *= 2;       // 等价于 money = money * 2，得 260\nConsole.WriteLine(money);"
        },
        {
          'type': "p",
          'text': "**复合赋值运算符** <code.inline>+=</code.inline>、<code.inline>-=</code.inline>、<code.inline>*=</code.inline>、<code.inline>/=</code.inline>、<code.inline>%=</code.inline> 把『计算并赋回』两步合成一步，写法更简洁。字符串用 <code.inline>+</code.inline> 拼接时，只要有一边是字符串，另一边也会被转成字符串。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"运算符与表达式\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"运算符与表达式\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"运算符与表达式\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "整数相除得整数，要小数先转 double",
            "% 取余常用于判断奇偶、取某位数字",
            "&& 与、|| 或、! 非是三大逻辑运算符",
            "+=、-= 等复合赋值简化『计算并赋值』",
            "字符串 + 数字会自动转成字符串拼接"
          ]
        }
      ],
      'templates': [
        {
          'name': "计算器演示",
          'code': "int a = 7, b = 2;\nConsole.WriteLine($\"{a} + {b} = {a + b}\");\nConsole.WriteLine($\"{a} - {b} = {a - b}\");\nConsole.WriteLine($\"{a} * {b} = {a * b}\");\nConsole.WriteLine($\"{a} / {b} = {a / b}\");\nConsole.WriteLine($\"{a} % {b} = {a % b}\");"
        }
      ]
    },
    {
      'id': "csh-6",
      'title': "条件分支：if / else if / else / switch / 三元",
      'summary': "让程序根据条件走不同分支，掌握三种判断写法。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "程序不只会从上往下顺序执行，还会根据条件『分岔』。条件分支就是让程序在满足不同条件时执行不同的代码块。这是编程最核心的逻辑能力之一。"
        },
        {
          'type': "h",
          'text': "if / else if / else"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "成绩等级判断",
          'code': "int score = 85;\n\nif (score >= 90)\n{\n    Console.WriteLine(\"优秀！\");\n}\nelse if (score >= 60)\n{\n    Console.WriteLine(\"及格\");\n}\nelse\n{\n    Console.WriteLine(\"不及格，要加油\");\n}"
        },
        {
          'type': "p",
          'text': "规则：<code.inline>if</code.inline> 后面的圆括号里放条件（结果是 true/false 的表达式）；条件为真就执行大括号里的代码；否则依次看 <code.inline>else if</code.inline>，都不满足就走 <code.inline>else</code.inline>。注意判断顺序很重要——从上往下第一个成立的分支会被执行，后面的就不再看了。"
        },
        {
          'type': "h",
          'text': "switch：多分支的选择器"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "switch 判断星期",
          'code': "int day = 3;\nstring name;\n\nswitch (day)\n{\n    case 1:\n        name = \"星期一\";\n        break;\n    case 2:\n        name = \"星期二\";\n        break;\n    case 3:\n        name = \"星期三\";\n        break;\n    default:\n        name = \"其他天\";\n        break;\n}\nConsole.WriteLine(name);"
        },
        {
          'type': "p",
          'text': "<code.inline>switch</code.inline> 适合『根据一个值匹配多种情况』。每个 <code.inline>case</code.inline> 结尾必须有 <code.inline>break;</code.inline> 跳出，最后用 <code.inline>default</code.inline> 兜底。现代 C# 还支持更简洁的 switch 表达式，后面进阶会见到。"
        },
        {
          'type': "h",
          'text': "三元运算符 ? :"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "三元的简写",
          'code': "int age = 17;\nstring result = age >= 18 ? \"成年\" : \"未成年\";\nConsole.WriteLine(result);   // 未成年\n\n// 等价于下面的 if/else\nstring result2;\nif (age >= 18) { result2 = \"成年\"; }\nelse { result2 = \"未成年\"; }"
        },
        {
          'type': "warn",
          'title': "条件里的等号坑",
          'text': "判断相等必须用 <code.inline>==</code.inline>（两个等号），单等号 <code.inline>=</code.inline> 是赋值。新手常把 <code.inline>if (x = 5)</code.inline> 写成这样——这在 C# 里是编译错误，好心的编译器会直接拦住你。记住：== 才是比较，= 是赋值。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"条件分支：if / else if / else / switch / 三元\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"条件分支：if / else if / else / switch / 三元\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"条件分支：if / else if / else / switch / 三元\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "if/else if/else 从上往下匹配，第一个成立的分支生效",
            "switch 适合单值多分支，每个 case 要 break",
            "三元 条件?结果1:结果2 是 if/else 的简写",
            "判断相等用 ==，不是 ="
          ]
        }
      ],
      'templates': [
        {
          'name': "判断奇偶",
          'code': "int n = 17;\nif (n % 2 == 0)\n{\n    Console.WriteLine($\"{n} 是偶数\");\n}\nelse\n{\n    Console.WriteLine($\"{n} 是奇数\");\n}"
        }
      ]
    },
    {
      'id': "csh-7",
      'title': "循环：for / while / do-while / foreach",
      'summary': "重复执行代码块，掌握四种循环与 break/continue。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "现实中经常要『重复做某件事』，比如打印 100 遍名字、统计一堆数字。循环就是让一段代码反复执行。C# 有 for、while、do-while、foreach 四种循环，各有擅长场景。"
        },
        {
          'type': "h",
          'text': "for 循环：知道要循环几次"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "for 打印 1 到 5",
          'code': "for (int i = 1; i <= 5; i++)\n{\n    Console.WriteLine($\"第 {i} 次\");\n}\n// 输出：第 1 次 ... 第 5 次\n\n// 还可以倒着数、跳着数\nfor (int i = 10; i > 0; i -= 2)\n{\n    Console.Write(i + \" \");   // 10 8 6 4 2\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>for (初始值; 条件; 步进)</code.inline> 分三部分：先执行初始值，然后判断条件，条件为真就执行循环体，再执行步进，再判断条件……直到条件为假退出。<code.inline>i++</code.inline> 是常用的步进写法。"
        },
        {
          'type': "h",
          'text': "while / do-while：不确定次数"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "while 和 do-while",
          'code': "int count = 0;\nwhile (count < 3)          // 先判断，后执行\n{\n    Console.WriteLine(\"while 循环 \" + count);\n    count++;\n}\n\nint n = 5;\ndo                          // 先执行一次，再判断\n{\n    Console.WriteLine(\"do-while 至少执行一次：\" + n);\n    n--;\n} while (n > 0);"
        },
        {
          'type': "warn",
          'title': "小心死循环",
          'text': "<code.inline>while (true)</code.inline> 或者忘记让条件变化，循环就永远不会结束，程序会卡死。写循环时一定确认循环体里能改变条件变量，让循环最终能退出。"
        },
        {
          'type': "h",
          'text': "foreach：遍历集合最省心"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "foreach 遍历数组",
          'code': "string[] fruits = { \"苹果\", \"香蕉\", \"橘子\" };\nforeach (string fruit in fruits)\n{\n    Console.WriteLine(fruit);\n}\n// 依次输出：苹果 香蕉 橘子"
        },
        {
          'type': "h",
          'text': "break 与 continue"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "中断与跳过",
          'code': "for (int i = 1; i <= 10; i++)\n{\n    if (i == 3) continue;   // 跳过本次，i=3 不打印\n    if (i == 8) break;      // 立刻结束整个循环\n    Console.WriteLine(i);   // 输出 1 2 4 5 6 7\n}"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"循环：for / while / do-while / foreach\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"循环：for / while / do-while / foreach\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"循环：for / while / do-while / foreach\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "for 适合次数已知，while 适合条件驱动",
            "do-while 至少执行一次",
            "foreach 适合遍历集合，简单安全",
            "break 结束循环，continue 跳过本次",
            "注意避免死循环：条件必须能变化"
          ]
        }
      ],
      'templates': [
        {
          'name': "九九乘法表",
          'code': "for (int i = 1; i <= 9; i++)\n{\n    for (int j = 1; j <= i; j++)\n    {\n        Console.Write($\"{j}*{i}={i * j} \");\n    }\n    Console.WriteLine();\n}"
        }
      ]
    },
    {
      'id': "csh-8",
      'title': "数组与集合：数组、List<T>、Dictionary<K,V>",
      'summary': "用容器装多个数据，学会增删改查三种结构。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "一个变量只能装一个值，但现实中经常要管理一堆数据，比如全班成绩、购物车商品。C# 提供了数组、<code.inline>List<T></code.inline>、<code.inline>Dictionary<K,V></code.inline> 等『容器』来装多个数据。这一章我们学最常用的三种。"
        },
        {
          'type': "h",
          'text': "数组：长度固定"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "数组的基本用法",
          'code': "int[] scores = new int[5];        // 长度 5 的整数数组，默认全是 0\nscores[0] = 88;                    // 按下标赋值\nscores[1] = 92;\nConsole.WriteLine(scores[0]);      // 88\n\nstring[] names = { \"小明\", \"小红\", \"小刚\" };   // 直接初始化\nConsole.WriteLine(names.Length);   // 3  数组长度\n\nfor (int i = 0; i < names.Length; i++)\n{\n    Console.WriteLine(names[i]);\n}"
        },
        {
          'type': "warn",
          'title': "数组下标从 0 开始",
          'text': "数组第一个元素的下标是 <code.inline>0</code.inline> 而不是 1。访问 <code.inline>names[3]</code.inline>（长度只有 3）会抛 <code.inline>IndexOutOfRangeException</code.inline> 崩溃。这是新手最常犯的错之一。"
        },
        {
          'type': "h",
          'text': "List<T>：可动态增删"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "List 增删改查",
          'code': "using System.Collections.Generic;\n\nList<string> fruits = new List<string>();\nfruits.Add(\"苹果\");        // 添加\nfruits.Add(\"香蕉\");\nfruits.Insert(1, \"橘子\");  // 在位置 1 插入\nfruits.Remove(\"苹果\");     // 按值删除\nfruits.RemoveAt(0);        // 按下标删除\nConsole.WriteLine(fruits.Count);             // 元素个数\nConsole.WriteLine(fruits.Contains(\"香蕉\"));  // True 是否包含\n\nforeach (string f in fruits)\n{\n    Console.WriteLine(f);\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>List<T></code.inline> 中的 <code.inline>T</code.inline> 是泛型参数，表示列表里装的类型。比如 <code.inline>List<int></code.inline> 装整数、<code.inline>List<string></code.inline> 装字符串。它的长度可以动态变化，是日常最常用的集合。"
        },
        {
          'type': "h",
          'text': "Dictionary<K,V>：键值对"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "字典增删改查",
          'code': "using System.Collections.Generic;\n\nDictionary<string, int> ages = new Dictionary<string, int>();\nages[\"小明\"] = 20;      // 添加：键 小明 -> 值 20\nages[\"小红\"] = 21;\nages[\"小明\"] = 22;      // 更新：覆盖旧值\n\nConsole.WriteLine(ages[\"小明\"]);   // 22  按键取值\n\nif (ages.ContainsKey(\"小刚\"))      // 先判断键是否存在\n{\n    Console.WriteLine(ages[\"小刚\"]);\n}\n\nages.Remove(\"小红\");   // 删除\n\nforeach (var kv in ages)           // 遍历所有键值对\n{\n    Console.WriteLine($\"{kv.Key} 的年龄是 {kv.Value}\");\n}"
        },
        {
          'type': "info",
          'title': "何时用哪个",
          'text': "数组适合长度固定、追求性能的场景；List 适合需要频繁增删的列表；Dictionary 适合『按键快速查找』的场景，像查字典一样根据名字找到对应的值。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"数组与集合：数组、List<T>、Dictionary<K,V>\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"数组与集合：数组、List<T>、Dictionary<K,V>\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"数组与集合：数组、List<T>、Dictionary<K,V>\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "数组长度固定，下标从 0 开始，越界会崩溃",
            "List<T> 动态增删：Add/Remove/Insert/Contains",
            "Dictionary<K,V> 键值对，按键取值，先 ContainsKey 再取",
            "foreach 遍历集合最方便"
          ]
        }
      ],
      'templates': [
        {
          'name': "全班平均分",
          'code': "List<int> scores = new List<int> { 88, 92, 76, 85, 90 };\nint sum = 0;\nforeach (int s in scores)\n{\n    sum += s;\n}\ndouble avg = (double)sum / scores.Count;\nConsole.WriteLine($\"总人数：{scores.Count}\");\nConsole.WriteLine($\"平均分：{avg:F1}\");"
        }
      ]
    },
    {
      'id': "csh-9",
      'title': "方法：参数、返回值、out/ref、重载",
      'summary': "把代码打包成可复用的小函数，学会各种参数写法。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "方法（Method）就是把一段完成特定功能的代码打包起来、起个名字，以后想用就调用它。方法让代码可复用、可读、可维护。C# 里的方法必须写在类里面。"
        },
        {
          'type': "h",
          'text': "定义与调用方法"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "带参数带返回值的方法",
          'code': "static int Add(int a, int b)\n{\n    return a + b;\n}\n\nstatic void Greet(string name)\n{\n    Console.WriteLine($\"你好，{name}！\");\n}\n\nint sum = Add(3, 5);\nConsole.WriteLine(sum);     // 8\nGreet(\"小明\");              // 你好，小明！"
        },
        {
          'type': "p",
          'text': "方法的格式：<code.inline>返回值类型 方法名(参数列表) { 方法体 }</code.inline>。有返回值的用 <code.inline>return</code.inline> 把结果交回去；没有返回值的方法用 <code.inline>void</code.inline> 表示『什么都不返回』。<code.inline>static</code> 是静态修饰符，静态方法可以不用创建对象直接调用，暂时先照抄，面向对象章节会细讲。"
        },
        {
          'type': "h",
          'text': "可选参数"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "带默认值的参数",
          'code': "static void Say(string msg, int times = 1)\n{\n    for (int i = 0; i < times; i++)\n    {\n        Console.WriteLine(msg);\n    }\n}\n\nSay(\"你好\");            // 用默认 times=1\nSay(\"加油\", 3);        // 显式传 times=3"
        },
        {
          'type': "h",
          'text': "out 与 ref：把结果带出去"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "out 参数",
          'code': "static bool TryDivide(int a, int b, out int result)\n{\n    if (b == 0)\n    {\n        result = 0;\n        return false;      // 除数为 0，失败\n    }\n    result = a / b;\n    return true;\n}\n\nif (TryDivide(10, 2, out int r))\n{\n    Console.WriteLine($\"结果是 {r}\");   // 5\n}\n\nif (TryDivide(10, 0, out int r2))\n{\n    Console.WriteLine(r2);\n}\nelse\n{\n    Console.WriteLine(\"除数为 0，失败\");\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>out</code.inline> 参数可以在方法内部赋值并带出去，常用于『方法既想返回是否成功、又想返回结果』的场景（比如 .NET 自带的 <code.inline>int.TryParse</code.inline> 就是这么干的）。<code.inline>ref</code.inline> 和 out 类似，但要求调用前先给变量赋值，且能修改传入的变量本身。"
        },
        {
          'type': "h",
          'text': "方法重载"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "同名方法不同参数",
          'code': "// 方法重载（Overload）：同名方法只要参数列表不同即可\n// 编译器根据传入的参数自动选择匹配的那个\nstatic int Max(int a, int b) => a > b ? a : b;\nstatic double Max(double a, double b) => a > b ? a : b;\nstatic int Max(int a, int b, int c)\n{\n    return Max(Max(a, b), c);\n}\n\nConsole.WriteLine(Max(3, 7));          // 7\nConsole.WriteLine(Max(2.5, 1.8));      // 2.5\nConsole.WriteLine(Max(1, 5, 9));       // 9\n// 就连 Console.WriteLine 其实也有几十个重载"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"方法：参数、返回值、out/ref、重载\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"方法：参数、返回值、out/ref、重载\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"方法：参数、返回值、out/ref、重载\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "方法 = 打包好的代码块，用 return 返回结果",
            "void 表示无返回值，static 静态方法直接调用",
            "可选参数给默认值，调用时可省略",
            "out 参数把结果带出方法，TryParse 就是这么设计的",
            "重载：同名方法参数不同，编译器自动匹配"
          ]
        }
      ],
      'templates': [
        {
          'name': "BMI 计算器",
          'code': "static double CalcBMI(double weightKg, double heightM)\n{\n    return weightKg / (heightM * heightM);\n}\n\ndouble bmi = CalcBMI(60, 1.7);\nConsole.WriteLine($\"BMI 是 {bmi:F1}\");\nif (bmi < 18.5) Console.WriteLine(\"偏瘦\");\nelse if (bmi < 24) Console.WriteLine(\"正常\");\nelse Console.WriteLine(\"偏胖\");"
        }
      ]
    },
    {
      'id': "csh-10",
      'title': "字符串处理：方法、插值、StringBuilder",
      'summary': "学会查找、替换、截取、拼接字符串的各种手段。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "字符串（string）是程序里出现频率最高的类型之一。C# 的 string 是**不可变**的（不可修改），每次『修改』其实都是生成一个新字符串。这一章我们学字符串的常用方法、插值和性能建议。"
        },
        {
          'type': "h",
          'text': "常用方法"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "查找、替换、截取、大小写",
          'code': "string s = \"Hello, CSharp World\";\n\nConsole.WriteLine(s.Length);             // 18  长度\nConsole.WriteLine(s.Contains(\"CSharp\")); // True 是否包含\nConsole.WriteLine(s.ToUpper());          // 转大写\nConsole.WriteLine(s.ToLower());          // 转小写\nConsole.WriteLine(s.Replace(\"World\", \"中国\"));   // 替换\nConsole.WriteLine(s.Substring(7));       // 从下标 7 截取到末尾\nConsole.WriteLine(s.Substring(7, 6));    // 从 7 开始截 6 个字符\nConsole.WriteLine(s.StartsWith(\"Hello\")); // True\nConsole.WriteLine(s.EndsWith(\"World\"));   // True\nConsole.WriteLine(s.Trim());             // 去掉首尾空格"
        },
        {
          'type': "info",
          'title': "Substring 的坑",
          'text': "<code.inline>Substring</code.inline> 的下标从 0 开始，且要小心越界：比如字符串长度 18，<code.inline>Substring(15)</code.inline> 没问题，但 <code.inline>Substring(18)</code.inline> 会抛异常。不确定长度时先用 <code.inline>Length</code.inline> 判断。"
        },
        {
          'type': "h",
          'text': "字符串插值 $"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "$ 插值拼接",
          'code': "string name = \"小明\";\nint age = 20;\n\n// 老式拼接\nstring s1 = \"我叫\" + name + \"，今年\" + age + \"岁\";\n\n// 插值（推荐）\nstring s2 = $\"我叫{name}，今年{age}岁\";\n\nConsole.WriteLine(s1);\nConsole.WriteLine(s2);\n\n// 还可以加格式：\nConsole.WriteLine($\"圆周率约 {3.14159:F2}\");   // 保留两位小数"
        },
        {
          'type': "p",
          'text': "字符串插值就是在字符串前面加 <code.inline>$</code.inline>，然后用 <code.inline>{变量}</code.inline> 把变量值嵌进去。比 <code.inline>+</code.inline> 拼接更直观、不易出错，是 C# 的推荐写法。"
        },
        {
          'type': "h",
          'text': "StringBuilder：大量拼接更快"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "StringBuilder 高效拼接",
          'code': "using System.Text;\n\nStringBuilder sb = new StringBuilder();\nfor (int i = 1; i <= 100; i++)\n{\n    sb.Append(i).Append(\" \");   // 追加\n}\nConsole.WriteLine(sb.ToString());"
        },
        {
          'type': "warn",
          'title': "循环里别用 + 拼字符串",
          'text': "string 不可变，每次 <code.inline>+</code.inline> 拼接都会创建新字符串、扔掉旧字符串，循环几万次会非常慢、非常占内存。大量拼接时（比如循环生成一段文本）一定要用 <code.inline>StringBuilder</code.inline>。少量拼接用 <code.inline>$</code.inline> 插值即可。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"字符串处理：方法、插值、StringBuilder\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"字符串处理：方法、插值、StringBuilder\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"字符串处理：方法、插值、StringBuilder\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "string 不可变，每次修改都产生新对象",
            "Contains/Replace/Substring/ToUpper/ToLower 最常用",
            "字符串插值 $ 是拼接首选",
            "大量循环拼接用 StringBuilder，别用 +",
            "Substring 注意下标越界"
          ]
        }
      ],
      'templates': [
        {
          'name': "字符串检查器",
          'code': "string s = \"  Hello, CSharp  \";\nConsole.WriteLine($\"长度：{s.Length}\");\nConsole.WriteLine($\"去空格后：{s.Trim()}\");\nConsole.WriteLine($\"是否包含 CSharp：{s.Contains(\"CSharp\")}\");\nConsole.WriteLine($\"替换：{s.Replace(\"CSharp\", \"World\")}\");\nConsole.WriteLine($\"转大写：{s.ToUpper().Trim()}\");"
        }
      ]
    },
    {
      'id': "csh-11",
      'title': "面向对象：类、字段、属性、构造函数",
      'summary': "用类描述事物的模板，用对象创建具体实例。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "面向对象（OOP）是 C# 的灵魂。核心思想：把『数据』和『操作这些数据的方法』打包成一个整体，叫**类（class）**。类就像设计图纸，根据图纸造出来的具体东西叫**对象（object）**。比如『猫』是类，你家那只叫咪咪的猫是对象。"
        },
        {
          'type': "h",
          'text': "定义类与创建对象"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "一个完整的类",
          'code': "class Cat\n{\n    // 字段（field）：猫的属性数据\n    public string Name;\n    public int Age;\n\n    // 构造函数：创建对象时自动执行\n    public Cat(string name, int age)\n    {\n        Name = name;\n        Age = age;\n    }\n\n    // 方法：猫的行为\n    public void Meow()\n    {\n        Console.WriteLine($\"{Name} 喵喵叫！\");\n    }\n}\n\nCat myCat = new Cat(\"咪咪\", 2);\nmyCat.Meow();                  // 咪咪 喵喵叫！\nConsole.WriteLine(myCat.Name); // 咪咪"
        },
        {
          'type': "p",
          'text': "要点：<code.inline>public</code.inline> 表示外部可以访问；<code.inline>new Cat(...)</code.inline> 创建对象时会自动调用构造函数，把参数存进字段。每个对象有自己的数据——再建一只 <code.inline>new Cat(\"旺财\", 1)</code.inline>，它和咪咪互不干扰。"
        },
        {
          'type': "h",
          'text': "属性 Property：更安全的字段"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "属性与自动属性",
          'code': "class Student\n{\n    // 字段一般是 private（私有）\n    private string _name;\n\n    // 属性：对外提供访问，内部可以加校验\n    public string Name\n    {\n        get { return _name; }\n        set { _name = value; }   // value 是传入的值\n    }\n\n    // 自动属性：编译器帮你生成底层字段\n    public int Age { get; set; }\n\n    // 只读属性：只有 get 没有 set\n    public bool IsAdult { get { return Age >= 18; } }\n}\n\nStudent s = new Student();\ns.Name = \"小明\";\ns.Age = 20;\nConsole.WriteLine($\"{s.Name} 成年了吗：{s.IsAdult}\");"
        },
        {
          'type': "p",
          'text': "**属性（Property）** 是 C# 的特色：外部用起来像字段一样简单（<code.inline>s.Name</code.inline>），内部却可以藏逻辑（校验、计算）。比直接暴露字段安全得多。日常写代码用 <code.inline>public int Age { get; set; }</code.inline> 这种自动属性就够了。"
        },
        {
          'type': "warn",
          'title': "字段 vs 属性别混用",
          'text': "字段是 <code.inline>public string Name;</code.inline>（注意结尾分号），属性是 <code.inline>public string Name { get; set; }</code.inline>（注意大括号）。写漏大括号或写错分号是新手常犯的错，编译会报错，仔细看错误提示即可。"
        },
        {
          'type': "h",
          'text': "构造函数进阶"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "默认构造函数与重载",
          'code': "class Person\n{\n    public string Name { get; set; }\n    public int Age { get; set; }\n\n    // 默认构造函数：不传参数\n    public Person() { }\n\n    // 重载构造函数：传名字和年龄\n    public Person(string name, int age)\n    {\n        Name = name;\n        Age = age;\n    }\n}\n\nPerson p1 = new Person();             // 用默认构造函数\nPerson p2 = new Person(\"小红\", 9);    // 用重载构造函数\nConsole.WriteLine($\"{p2.Name} {p2.Age}岁\");"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"面向对象：类、字段、属性、构造函数\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"面向对象：类、字段、属性、构造函数\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"面向对象：类、字段、属性、构造函数\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "类 = 图纸，对象 = 图纸造出的实物，new 创建对象",
            "字段存数据，方法定义行为",
            "属性 Property 比字段更安全，自动属性最常用",
            "构造函数在 new 时自动执行，用于初始化",
            "private 私有、public 公开，实现封装"
          ]
        }
      ],
      'templates': [
        {
          'name': "定义一个手机类",
          'code': "class Phone\n{\n    public string Brand { get; set; }\n    public double Price { get; set; }\n\n    public Phone(string brand, double price)\n    {\n        Brand = brand;\n        Price = price;\n    }\n\n    public void Call(string number)\n    {\n        Console.WriteLine($\"{Brand} 正在呼叫 {number}...\");\n    }\n}\n\nPhone myPhone = new Phone(\"某品牌\", 1999);\nmyPhone.Call(\"10086\");"
        }
      ]
    },
    {
      'id': "csh-12",
      'title': "面向对象进阶：继承、多态、接口、抽象类",
      'summary': "让类之间产生父子关系，用多态写出灵活代码。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "前面学了单个类的写法。这一章学类之间的关系：**继承**让子类拥有父类的能力，**接口**定义『必须实现什么』的契约，**多态**让同一句代码对不同对象表现出不同行为。这是面向对象的核心三件套。"
        },
        {
          'type': "h",
          'text': "继承：子类复用父类"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "继承的基础用法",
          'code': "class Animal\n{\n    public string Name { get; set; }\n\n    public void Eat()\n    {\n        Console.WriteLine($\"{Name} 在吃东西\");\n    }\n}\n\nclass Dog : Animal      // Dog 继承 Animal\n{\n    public void Bark()\n    {\n        Console.WriteLine($\"{Name} 汪汪叫\");\n    }\n}\n\nDog d = new Dog();\nd.Name = \"旺财\";\nd.Eat();    // 父类的方法，子类直接能用\nd.Bark();   // 子类自己的方法"
        },
        {
          'type': "p",
          'text': "用冒号 <code.inline>: 父类</code.inline> 表示继承。子类（Dog）自动拥有父类（Animal）的所有公开成员，还能加自己的新成员。C# 一个类只能继承一个父类（单继承）。"
        },
        {
          'type': "h",
          'text': "virtual 与 override：多态"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "重写父类方法",
          'code': "class Animal\n{\n    public string Name { get; set; }\n\n    public virtual void Speak()   // virtual：允许子类重写\n    {\n        Console.WriteLine(\"动物叫\");\n    }\n}\n\nclass Dog : Animal\n{\n    public override void Speak()  // override：重写父类方法\n    {\n        Console.WriteLine(\"汪汪！\");\n    }\n}\n\nclass Cat : Animal\n{\n    public override void Speak()\n    {\n        Console.WriteLine(\"喵喵！\");\n    }\n}\n\n// 多态：同一个变量类型，表现出不同行为\nAnimal[] animals = { new Dog(), new Cat() };\nforeach (Animal a in animals)\n{\n    a.Speak();   // 输出 汪汪！ 喵喵！\n}"
        },
        {
          'type': "p",
          'text': "父类方法标 <code.inline>virtual</code.inline> 允许重写，子类用 <code.inline>override</code.inline> 覆盖实现。把不同子类对象放进父类数组，调用同一个 <code.inline>Speak()</code.inline>，各自执行自己的版本——这就是**多态**，让代码更灵活。"
        },
        {
          'type': "h",
          'text': "抽象类与接口"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "abstract 与 interface",
          'code': "abstract class Shape\n{\n    public abstract double Area();   // 抽象方法：只有声明没有实现\n}\n\nclass Circle : Shape\n{\n    public double R { get; set; }\n    public override double Area() => 3.14 * R * R;\n}\n\n// 接口：只定义契约\ninterface IPlayable\n{\n    void Play();\n}\n\nclass Music : IPlayable\n{\n    public void Play()\n    {\n        Console.WriteLine(\"播放音乐\");\n    }\n}\n\nCircle c = new Circle { R = 2 };\nConsole.WriteLine($\"圆面积：{c.Area():F2}\");\n\nMusic m = new Music();\nm.Play();"
        },
        {
          'type': "p",
          'text': "**抽象类（abstract）**：不能被 new，只能被继承，里面可以有抽象方法（只有声明没有实现，子类必须实现）。**接口（interface）**：比抽象类更纯粹，只声明『有哪些方法』，不写任何实现，一个类可以实现多个接口。它们都是『定规矩』的，用来约束类的行为。"
        },
        {
          'type': "warn",
          'title': "接口 vs 抽象类怎么选",
          'text': "简单记：接口是『能做什么』（能力的契约，可以多实现），抽象类是『是什么』（公共基因，只能单继承）。当一个类需要具备多种能力时用接口，比如 <code.inline>class 飞机 : IFlyable, IChargeable</code.inline>。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"面向对象进阶：继承、多态、接口、抽象类\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"面向对象进阶：继承、多态、接口、抽象类\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"面向对象进阶：继承、多态、接口、抽象类\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "继承用 : 父类，子类复用父类成员，单继承",
            "virtual + override 实现方法重写",
            "多态：父类引用指向子类对象，调用各自实现",
            "抽象类不能被 new，抽象方法必须被子类实现",
            "接口只声明契约，一个类可实现多个接口"
          ]
        }
      ],
      'templates': [
        {
          'name': "动物世界",
          'code': "class Animal\n{\n    public string Name { get; set; }\n    public Animal(string name) { Name = name; }\n    public virtual void Speak() { Console.WriteLine(\"...\"); }\n}\n\nclass Dog : Animal\n{\n    public Dog(string name) : base(name) { }\n    public override void Speak() { Console.WriteLine($\"{Name}：汪汪！\"); }\n}\n\nclass Cat : Animal\n{\n    public Cat(string name) : base(name) { }\n    public override void Speak() { Console.WriteLine($\"{Name}：喵喵！\"); }\n}\n\nAnimal[] zoo = { new Dog(\"旺财\"), new Cat(\"咪咪\") };\nforeach (Animal a in zoo) a.Speak();"
        }
      ]
    },
    {
      'id': "csh-13",
      'title': "异常处理：try / catch / finally",
      'summary': "让程序出错时不崩溃，而是优雅地处理错误。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "程序运行中难免出错：文件不存在、网络断开、用户输入了非法数据。C# 用**异常（Exception）**机制来报告错误。如果异常没被处理，程序会直接崩溃退出。学会用 try/catch 捕获异常，程序才够健壮。"
        },
        {
          'type': "h",
          'text': "try / catch / finally"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "捕获异常",
          'code': "try\n{\n    Console.Write(\"请输入一个数字：\");\n    string input = Console.ReadLine();\n    int n = int.Parse(input);   // 输入非数字会抛异常\n    Console.WriteLine($\"你输入的是 {n}\");\n}\ncatch (FormatException ex)\n{\n    Console.WriteLine(\"输入的不是有效数字！\");\n}\ncatch (Exception ex)\n{\n    Console.WriteLine($\"出了其他错误：{ex.Message}\");\n}\nfinally\n{\n    Console.WriteLine(\"无论成败都会执行这一句\");\n}"
        },
        {
          'type': "p",
          'text': "流程：<code.inline>try</code.inline> 里放可能出错的代码；出错时跳到匹配的 <code.inline>catch</code.inline>（可以写多个 catch 捕获不同类型的异常，越具体的放前面）；<code.inline>finally</code.inline> 里的代码无论是否出错都会执行，常用于释放资源。"
        },
        {
          'type': "h",
          'text': "常见的异常类型"
        },
        {
          'type': "table",
          'head': [
            "异常类型",
            "什么时候抛"
          ],
          'rows': [
            [
              "FormatException",
              "字符串转数字失败，如 Parse(\"abc\")"
            ],
            [
              "DivideByZeroException",
              "整数除以 0"
            ],
            [
              "IndexOutOfRangeException",
              "数组/列表下标越界"
            ],
            [
              "NullReferenceException",
              "对 null 对象调用方法/属性（空引用）"
            ],
            [
              "FileNotFoundException",
              "打开不存在的文件"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "不要空 catch",
          'text': "<code.inline>catch (Exception) { }</code.inline> 把异常吞掉却什么都不做，是坏习惯——错误被悄悄掩盖，问题更难排查。至少打印日志或用 <code.inline>Console.WriteLine</code.inline> 输出错误信息。"
        },
        {
          'type': "h",
          'text': "自定义异常"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "自定义异常与抛出",
          'code': "class AgeTooSmallException : Exception\n{\n    public AgeTooSmallException(string msg) : base(msg) { }\n}\n\nstatic void CheckAge(int age)\n{\n    if (age < 18)\n    {\n        throw new AgeTooSmallException(\"年龄必须满 18 岁\");\n    }\n    Console.WriteLine(\"年龄合格\");\n}\n\ntry\n{\n    CheckAge(15);\n}\ncatch (AgeTooSmallException ex)\n{\n    Console.WriteLine($\"捕获到自定义异常：{ex.Message}\");\n}"
        },
        {
          'type': "p",
          'text': "用 <code.inline>throw</code.inline> 主动抛异常，用 <code.inline>class 名字 : Exception</code.inline> 定义自己的异常类型。自定义异常在大型项目里很有用，能精确表达业务错误。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"异常处理：try / catch / finally\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"异常处理：try / catch / finally\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"异常处理：try / catch / finally\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "try 放可能出错的代码，catch 捕获并处理",
            "多个 catch 捕获不同类型，finally 必定执行",
            "常见异常：Format、DivideByZero、NullReference、越界",
            "不要空 catch 吞掉错误",
            "throw 主动抛异常，可自定义异常类"
          ]
        }
      ],
      'templates': [
        {
          'name': "安全数字输入",
          'code': "bool ok = false;\nwhile (!ok)\n{\n    Console.Write(\"请输入数字：\");\n    string input = Console.ReadLine();\n    if (int.TryParse(input, out int n))\n    {\n        Console.WriteLine($\"你输入的是 {n}\");\n        ok = true;\n    }\n    else\n    {\n        Console.WriteLine(\"无效输入，请重新输入\");\n    }\n}"
        }
      ]
    },
    {
      'id': "csh-14",
      'title': "LINQ 与集合操作：Where/Select/OrderBy/GroupBy",
      'summary': "用类似 SQL 的方式声明式操作集合，lambda 表达式一把梭。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "**LINQ（Language Integrated Query）** 是 C# 的杀手锏：用类似 SQL 的写法对集合做筛选、排序、分组等操作，代码又短又清晰。它让『操作数据集合』变得像写句子一样自然。"
        },
        {
          'type': "h",
          'text': "准备数据与 lambda"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "定义一个学生列表",
          'code': "class Student\n{\n    public string Name { get; set; }\n    public int Score { get; set; }\n    public string ClassName { get; set; }\n}\n\nList<Student> students = new List<Student>\n{\n    new Student { Name = \"小明\", Score = 88, ClassName = \"一班\" },\n    new Student { Name = \"小红\", Score = 95, ClassName = \"一班\" },\n    new Student { Name = \"小刚\", Score = 72, ClassName = \"二班\" },\n    new Student { Name = \"小丽\", Score = 90, ClassName = \"二班\" },\n};"
        },
        {
          'type': "h",
          'text': "Where / Select / OrderBy"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "筛选、投影、排序",
          'code': "// Where：筛选（lambda 里写条件）\nvar pass = students.Where(s => s.Score >= 80);\nforeach (var s in pass)\n{\n    Console.WriteLine($\"{s.Name} 及格，{s.Score}分\");\n}\n\n// Select：投影，取出某个字段或加工\nvar names = students.Select(s => s.Name);\nConsole.WriteLine(string.Join(\", \", names));\n\n// OrderByDescending：按分数降序\nvar sorted = students.OrderByDescending(s => s.Score);\nConsole.WriteLine(\"最高分：\" + sorted.First().Name);\n\n// 链式组合\nvar top2 = students.Where(s => s.Score >= 80)\n                   .OrderByDescending(s => s.Score)\n                   .Take(2);\nforeach (var s in top2) Console.WriteLine(s.Name);"
        },
        {
          'type': "p",
          'text': "<code.inline>s => s.Score >= 80</code.inline> 是 **lambda 表达式**，读作『把 s 映射到 条件』，s 代表集合里每一个元素。Where 筛选出满足条件的、Select 挑出需要的字段、OrderBy 排序、Take 取前几个。它们可以像积木一样链式拼接。"
        },
        {
          'type': "h",
          'text': "GroupBy 分组与聚合"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "分组统计与 First",
          'code': "// GroupBy：按班级分组\nvar groups = students.GroupBy(s => s.ClassName);\nforeach (var g in groups)\n{\n    double avg = g.Average(s => s.Score);   // 组内平均分\n    Console.WriteLine($\"{g.Key} 平均分：{avg:F1}\");\n}\n\n// 常用聚合：Count / Sum / Max / Min / Average\nConsole.WriteLine(\"总人数：\" + students.Count());\nConsole.WriteLine(\"最高分：\" + students.Max(s => s.Score));\n\n// First：取第一个\nvar first = students.OrderByDescending(s => s.Score).First();\nConsole.WriteLine(\"第一名：\" + first.Name);"
        },
        {
          'type': "warn",
          'title': "First vs FirstOrDefault",
          'text': "集合为空时 <code.inline>First()</code.inline> 会抛异常，<code.inline>FirstOrDefault()</code.inline> 返回 null（引用类型）或默认值，更安全。同样还有 <code.inline>Single</code.inline> / <code.inline>SingleOrDefault</code.inline>（要求唯一）和 <code.inline>Any()</code.inline>（判断是否存在）等。"
        },
        {
          'type': "info",
          'title': "方法语法 vs 查询语法",
          'text': "LINQ 有**方法语法**（Where/Select 这种链式调用，最常用）和**查询语法**（类似 SQL 的 <code.inline>from s in students where s.Score >= 80 select s</code.inline>）。建议先熟练掌握方法语法，够用且可读。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"LINQ 与集合操作：Where/Select/OrderBy/GroupBy\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"LINQ 与集合操作：Where/Select/OrderBy/GroupBy\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"LINQ 与集合操作：Where/Select/OrderBy/GroupBy\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "LINQ 用声明式语法操作集合，类似 SQL",
            "Where 筛选、Select 投影、OrderBy 排序、GroupBy 分组",
            "lambda s => 条件 表示对每个元素的操作",
            "链式组合：Where(...).OrderBy(...).Take(...)",
            "First 取第一个（空集合会抛异常），FirstOrDefault 更安全"
          ]
        }
      ],
      'templates': [
        {
          'name': "成绩分析器",
          'code': "List<int> scores = new List<int> { 88, 95, 72, 90, 63, 58 };\nConsole.WriteLine(\"平均分：\" + scores.Average());\nConsole.WriteLine(\"最高分：\" + scores.Max());\nConsole.WriteLine(\"最低分：\" + scores.Min());\nConsole.WriteLine(\"及格人数：\" + scores.Count(s => s >= 60));\nvar top3 = scores.OrderByDescending(s => s).Take(3);\nConsole.WriteLine(\"前三名：\" + string.Join(\", \", top3));"
        }
      ]
    },
    {
      'id': "csh-15",
      'title': "文件读写与 JSON 序列化",
      'summary': "把数据存进文件，用 System.Text.Json 与 JSON 互转。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "程序要持久保存数据，就得读写文件。C# 的 <code.inline>System.IO</code.inline> 提供了超简单的文件读写方法；而 JSON（JavaScript 对象表示法）是现在最流行的数据交换格式，C# 用 <code.inline>System.Text.Json</code.inline> 就能把对象和 JSON 互相转换。"
        },
        {
          'type': "h",
          'text': "读写文本文件"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "File 读写一行搞定",
          'code': "using System.IO;\n\nstring path = \"note.txt\";\n\n// 写入文件（覆盖）\nFile.WriteAllText(path, \"第一行内容\\n第二行内容\");\n\n// 追加写入\nFile.AppendAllText(path, \"\\n追加的一行\");\n\n// 读取整个文件\nstring content = File.ReadAllText(path);\nConsole.WriteLine(content);\n\n// 按行读取\nforeach (string line in File.ReadAllLines(path))\n{\n    Console.WriteLine(\"行：\" + line);\n}\n\n// 判断文件是否存在\nConsole.WriteLine(File.Exists(path));"
        },
        {
          'type': "warn",
          'title': "路径与转义",
          'text': "注意字符串里的 <code.inline>\\n</code.inline> 表示换行（反斜杠是转义符）。写 Windows 路径时 <code.inline>\"C:\\\\data\\\\file.txt\"</code.inline> 要用双反斜杠，或用 <code.inline>@\"C:\\data\\file.txt\"</code.inline> 原样字符串（@ 前缀）更省心。"
        },
        {
          'type': "h",
          'text': "JSON 序列化与反序列化"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "对象与 JSON 互转",
          'code': "using System.Text.Json;\n\nclass Student\n{\n    public string Name { get; set; }\n    public int Age { get; set; }\n}\n\n// 对象 -> JSON 字符串\nvar stu = new Student { Name = \"小明\", Age = 20 };\nstring json = JsonSerializer.Serialize(stu);\nConsole.WriteLine(json);   // {\"Name\":\"小明\",\"Age\":20}\n\n// JSON 字符串 -> 对象（用 @ 原样字符串避免转义）\nstring input = @\"{\"\"Name\"\":\"\"小红\"\",\"\"Age\"\":9}\";\nStudent s2 = JsonSerializer.Deserialize<Student>(input);\nConsole.WriteLine($\"{s2.Name} {s2.Age}岁\");"
        },
        {
          'type': "h",
          'text': "对象保存到文件：序列化 + 写入"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "保存与读取学生数据",
          'code': "using System.Text.Json;\nusing System.IO;\n\nList<Student> list = new List<Student>\n{\n    new Student { Name = \"小明\", Age = 20 },\n    new Student { Name = \"小红\", Age = 9 },\n};\n\nstring path = \"students.json\";\n// 序列化后写入文件\nFile.WriteAllText(path, JsonSerializer.Serialize(list));\n\n// 从文件读取并反序列化\nstring json2 = File.ReadAllText(path);\nvar loaded = JsonSerializer.Deserialize<List<Student>>(json2);\nforeach (var s in loaded)\n{\n    Console.WriteLine($\"{s.Name} {s.Age}岁\");\n}"
        },
        {
          'type': "info",
          'title': "json 文件长什么样",
          'text': "用记事本打开 students.json，会看到类似 <code.inline>[{\"Name\":\"小明\",\"Age\":20},{\"Name\":\"小红\",\"Age\":9}]</code.inline> 的文本。JSON 就是这种带花括号和方括号的纯文本，方便人和程序交换数据。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"文件读写与 JSON 序列化\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"文件读写与 JSON 序列化\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"文件读写与 JSON 序列化\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "File.WriteAllText/ReadAllText 一行读写整个文件",
            "AppendAllText 追加，File.Exists 判断存在",
            "JsonSerializer.Serialize 对象转 JSON，Deserialize 反过来",
            "Deserialize<T> 需要指定目标类型",
            "JSON 是纯文本，是数据交换的标准格式"
          ]
        }
      ],
      'templates': [
        {
          'name': "便签本",
          'code': "using System.IO;\nstring path = \"memo.txt\";\nFile.WriteAllText(path, \"第一条备忘\\n第二条备忘\");\nstring content = File.ReadAllText(path);\nConsole.WriteLine(\"我的便签：\");\nConsole.WriteLine(content);"
        }
      ]
    },
    {
      'id': "csh-16",
      'title': "实战小项目：控制台记账本与下一步",
      'summary': "综合所学做一个可用的记账本，规划通往 Web 与游戏的路。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "学了十五章，是时候把零散知识点拼成一个真正能用的小项目了。我们做一个**控制台记账本**：能记录收支、查看余额和明细。它综合用到了类、List、循环、条件、字符串处理等所有知识。"
        },
        {
          'type': "h",
          'text': "记账本的核心设计"
        },
        {
          'type': "code",
          'lang': "csharp",
          'title': "记账本主体逻辑",
          'code': "using System;\nusing System.Collections.Generic;\n\nclass Record\n{\n    public string Type { get; set; }    // 收入 / 支出\n    public string Desc { get; set; }\n    public double Amount { get; set; }\n}\n\nList<Record> records = new List<Record>();\nbool running = true;\n\nwhile (running)\n{\n    Console.WriteLine(\"\\n===== 简易记账本 =====\");\n    Console.WriteLine(\"1. 记一笔  2. 查看账单  3. 退出\");\n    string choice = Console.ReadLine();\n\n    if (choice == \"1\")\n    {\n        Console.Write(\"类型(收入/支出)：\");\n        string type = Console.ReadLine();\n        Console.Write(\"说明：\");\n        string desc = Console.ReadLine();\n        Console.Write(\"金额：\");\n        double amount = double.Parse(Console.ReadLine());\n        records.Add(new Record { Type = type, Desc = desc, Amount = amount });\n        Console.WriteLine(\"已记录！\");\n    }\n    else if (choice == \"2\")\n    {\n        double total = 0;\n        foreach (var r in records)\n        {\n            Console.WriteLine($\"{r.Type} {r.Desc} {r.Amount}元\");\n            total += r.Type == \"收入\" ? r.Amount : -r.Amount;\n        }\n        Console.WriteLine($\"当前余额：{total}元\");\n    }\n    else if (choice == \"3\")\n    {\n        running = false;\n    }\n}"
        },
        {
          'type': "p",
          'text': "这个记账本虽然简单，但把最重要的编程能力都练到了：用类组织数据结构、用 List 存数据、用循环做菜单、用条件分支处理选择、用字符串插值输出。你可以在此基础上加功能：存到 JSON 文件（第 15 章）、按类型统计、支持修改删除。"
        },
        {
          'type': "h",
          'text': "下一站：往哪里进阶"
        },
        {
          'type': "list",
          'items': [
            "Web 后端：学 **ASP.NET Core**，用 C# 写网站和 Web API，是目前企业级后端主流方案之一",
            "桌面应用：学 **WPF** 或 **WinForms**，做 Windows 图形界面软件",
            "游戏开发：学 **Unity**（C# 是它的脚本语言），做 2D/3D 游戏",
            "继续夯实：学委托与事件、泛型进阶、async/await 异步编程、EF Core 数据库"
          ]
        },
        {
          'type': "table",
          'head': [
            "方向",
            "学习内容",
            "适合谁"
          ],
          'rows': [
            [
              "Web 后端",
              "ASP.NET Core + EF Core + 数据库",
              "想进企业做后端/全栈"
            ],
            [
              "桌面应用",
              "WPF / WinForms",
              "想做 Windows 软件"
            ],
            [
              "游戏",
              "Unity + C#",
              "对游戏开发感兴趣"
            ],
            [
              "继续深造",
              "委托/事件/async/EF/单元测试",
              "想把基础打得更扎实"
            ]
          ]
        },
        {
          'type': "info",
          'title': "学习建议",
          'text': "学完基础后，动手做一个完整的小项目比反复看视频进步快得多。可以给自己定个小目标：比如做一个『待办清单』，然后升级成能保存到文件的版本、再加 Web 界面——每一步都是新技能。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"实战小项目：控制台记账本与下一步\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"实战小项目：控制台记账本与下一步\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"实战小项目：控制台记账本与下一步\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "综合运用类、List、循环、条件做一个可用记账本",
            "先做小项目再学大框架，进步最快",
            "下一步可选：ASP.NET Core / WPF / Unity",
            "多做实战、多写代码，比只看教程有效"
          ]
        }
      ],
      'templates': [
        {
          'name': "待办清单（简化版）",
          'code': "List<string> todos = new List<string>();\nwhile (true)\n{\n    Console.WriteLine(\"\\n===== 待办清单 =====\");\n    Console.WriteLine(\"1. 添加  2. 显示  3. 退出\");\n    string c = Console.ReadLine();\n    if (c == \"1\")\n    {\n        Console.Write(\"输入待办：\");\n        todos.Add(Console.ReadLine());\n    }\n    else if (c == \"2\")\n    {\n        for (int i = 0; i < todos.Count; i++)\n        {\n            Console.WriteLine($\"{i + 1}. {todos[i]}\");\n        }\n    }\n    else if (c == \"3\") { break; }\n}"
        }
      ]
    }
  ]
});

