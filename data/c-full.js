/* ============================================================
   计算机知识库 · 数据：C 语言 完整课程（80 章，从下载安装到进阶）
   ============================================================ */
window.LANGUAGE_EXTRA = window.LANGUAGE_EXTRA || [];
window.LANGUAGE_EXTRA.push({
  'id': "c-lang",
  'name': "C 语言",
  'icon': "C",
  'tagline': "操作系统与底层的语言，让你理解计算机真正的运行方式。",
  'intro': "这是一套从零开始的 C 语言完整课程。第 1 章教你下载安装 MinGW-w64 编译器，之后每一章都从大白话讲起，把变量、指针、内存、数据结构、文件操作这些硬骨头一块块啃下来，配可运行的示例代码和编辑器模板。学完这 80 章，你将真正理解程序在电脑里是怎么跑的，足以胜任系统开发、嵌入式开发和底层编程。",
  'meta': {
    "难度": "从零到进阶",
    "章节": "80 章",
    "场景": "系统/嵌入式/底层"
  },
  'lessons': [
    {
      'id': "cl-1",
      'title': "下载与安装编译器（Windows 用 MinGW-w64）",
      'summary': "到 winlibs.com 免费下载、配置 PATH 环境变量、验证 gcc 是否装好。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "学习 C 语言的第一步，是给电脑装一个 C 语言编译器。编译器的作用，是把我们写的 C 源代码翻译成电脑 CPU 能直接执行的机器码。Windows 上最推荐的免费编译器是 MinGW-w64（它自带 GCC 编译器），本教程使用 winlibs.com 提供的预编译版本，完全免费、开箱即用。"
        },
        {
          'type': "h",
          'text': "第一步：下载 MinGW-w64"
        },
        {
          'type': "list",
          'items': [
            "打开官网：<a href='https://winlibs.com' target='_blank' rel='noopener'>https://winlibs.com</a>",
            "页面往下滚动，找到 Download 区域的 UCRT runtime 版本（这是最新最推荐的运行时）",
            "选择 x86_64 架构（64 位系统）的压缩包，点击下载（通常是 .zip 或 .7z 文件，体积较大属正常）"
          ]
        },
        {
          'type': "warn",
          'title': "新手第一大坑：解压到哪",
          'text': "不要图省事把压缩包解压到下载目录就完事。建议解压到一个固定的、路径里不要有中文的位置，比如 C:\\mingw64 或 D:\\mingw64。解压后里面应该有一个 bin 文件夹（例如 C:\\mingw64\\bin），bin 里面能找到 gcc.exe。记住这个 bin 的完整路径，下一步要填进 PATH 里。"
        },
        {
          'type': "h",
          'text': "第二步：配置 PATH 环境变量"
        },
        {
          'type': "list",
          'items': [
            "按 Win 键，搜索『环境变量』，打开『编辑系统环境变量』",
            "点右下角『环境变量』按钮，在『系统变量』列表里找到 Path，选中后双击",
            "点右侧『新建』，把 bin 文件夹的完整路径粘进去（例如 C:\\mingw64\\bin），一路点确定保存",
            "重新打开一个新的命令行窗口（旧窗口不生效）"
          ]
        },
        {
          'type': "p",
          'text': "PATH 环境变量相当于给电脑指路：当你在命令行输入 gcc 三个字母时，系统就按 PATH 里的路径逐个去找有没有 gcc.exe，找到就能执行。"
        },
        {
          'type': "h",
          'text': "第三步：验证安装"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "验证 gcc 是否安装成功",
          'code': "gcc --version\n\n// 如果显示类似 gcc (MinGW-w64) 13.2.0 的版本号，说明安装成功\n// 如果提示“不是内部或外部命令”，说明 PATH 没配好或没开新窗口"
        },
        {
          'type': "tip",
          'title': "顺手装个好编辑器",
          'text': "推荐 VS Code（完全免费）：<a href='https://code.visualstudio.com' target='_blank' rel='noopener'>https://code.visualstudio.com</a>。装好后在扩展商店搜索『C/C++』，安装微软官方插件，写代码就有高亮、提示和调试功能了。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"下载与安装编译器（Windows 用 MinGW-w64）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"下载与安装编译器（Windows 用 MinGW-w64）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"下载与安装编译器（Windows 用 MinGW-w64）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "MinGW-w64 是 Windows 上免费开源的 C 编译器，官网 winlibs.com",
            "下载后解压到无中文的固定目录，记住 bin 文件夹路径",
            "把 bin 路径加入 PATH 环境变量，系统才能找到 gcc 命令",
            "用 gcc --version 验证安装，看到版本号即成功"
          ]
        }
      ],
      'templates': [
        {
          'name': "第一个可编译程序",
          'code': "#include <stdio.h>\nint main() {\n    printf(\"Hello, C!\\n\");\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-2",
      'title': "Hello World 与程序结构",
      'summary': "从 Hello World 出发，看懂 #include、main 函数和 return 0 各司其职。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "每个程序员的起点几乎都是 Hello World。C 语言的 Hello World 看起来只有几行，但每一行都有讲究。先把下面的代码完整打出来，保存成 hello.c 文件。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "第一个 C 程序",
          'code': "#include <stdio.h>\n\nint main() {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "逐行拆解"
        },
        {
          'type': "list",
          'items': [
            "<code.inline>#include &lt;stdio.h&gt;</code.inline>：引入标准输入输出库。stdio.h 里声明了 printf、scanf 等函数，不引入它，编译器就不认识 printf。",
            "<code.inline>int main()</code.inline>：main 是程序的入口函数，程序启动后从 main 的第一条语句开始执行。一个程序有且只能有一个 main。",
            "<code.inline>printf(\"Hello, World!\\n\")</code.inline>：把文字打印到屏幕，<code.inline>\\n</code.inline> 是换行符。",
            "<code.inline>return 0;</code.inline>：告诉操作系统程序正常结束。返回 0 表示成功，非 0 表示出错。"
          ]
        },
        {
          'type': "h",
          'text': "编译并运行"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "命令行三步走",
          'code': "// 假设你已用编辑器写好 hello.c，然后在命令行执行：\ngcc hello.c -o hello\n\n// 如果没有任何输出，说明编译成功，生成了 hello.exe\n// 运行它：\n./hello\n\n// 屏幕上会打印：\n// Hello, World!"
        },
        {
          'type': "info",
          'title': "编译和运行是两回事",
          'text': "编译（gcc）是把源代码翻译成可执行文件，运行（./hello）是让电脑执行这个文件。新手常见误区：以为在编辑器里写好代码就等于运行了。在 VS Code 里可以装 C/C++ 插件直接点运行按钮，它会自动帮你完成编译和运行两步。"
        },
        {
          'type': "warn",
          'title': "常见报错",
          'text': "如果编译时报错 <code.inline>undefined reference to 'printf'</code.inline> 或 <code.inline>implicit declaration of function 'printf'</code.inline>，多半是忘了写 <code.inline>#include &lt;stdio.h&gt;</code.inline>。记住：用哪个库的函数，就要 include 哪个头文件。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Hello World 与程序结构\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Hello World 与程序结构\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Hello World 与程序结构\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "#include <stdio.h> 引入标准输入输出库，printf 才能用",
            "main 是程序入口，一个程序只有一个 main",
            "printf 负责打印，\\n 是换行符",
            "return 0 表示程序正常结束",
            "编译用 gcc hello.c -o hello，运行用 ./hello"
          ]
        }
      ],
      'templates': [
        {
          'name': "Hello World 模板",
          'code': "#include <stdio.h>\nint main() {\n    printf(\"Hello, World!\\n\");\n    printf(\"我正在学习 C 语言\\n\");\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-3",
      'title': "注释与 printf 基础输出",
      'summary': "用 // 和 /* */ 写注释，掌握 printf 的占位符与转义字符。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "这一章学两件事：注释（给代码加说明）和 printf（把内容输出到屏幕）。注释是写给人和编译器看两用：人看说明，编译器直接忽略。"
        },
        {
          'type': "h",
          'text': "注释的两种写法"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "单行注释与多行注释",
          'code': "// 这是单行注释，以两个斜杠开头，到行尾结束\na = 10;  // 注释也可以写在代码后面\n\n/* 这是多行注释\n   以斜杠加星号开头\n   以星号加斜杠结尾\n   可以跨越多行 */\nprintf(\"代码在运行，注释被忽略\\n\");"
        },
        {
          'type': "h",
          'text': "printf 与占位符"
        },
        {
          'type': "p",
          'text': "printf 不仅能打印固定文字，还能打印变量的值。做法是在字符串里写占位符 <code.inline>%d</code.inline>、<code.inline>%f</code.inline> 等，后面把要打印的变量按顺序列出来。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "用占位符打印变量",
          'code': "#include <stdio.h>\nint main() {\n    int age = 18;\n    double height = 1.75;\n    char grade = 'A';\n    printf(\"我今年 %d 岁\\n\", age);\n    printf(\"身高 %.2f 米\\n\", height);\n    printf(\"成绩等级是 %c\\n\", grade);\n    return 0;\n}"
        },
        {
          'type': "table",
          'head': [
            "占位符",
            "含义",
            "示例"
          ],
          'rows': [
            [
              "%d",
              "整数",
              "printf(\"%d\", 10)"
            ],
            [
              "%f",
              "浮点数（小数）",
              "printf(\"%f\", 3.14)"
            ],
            [
              "%.2f",
              "保留两位小数",
              "printf(\"%.2f\", 3.14159)"
            ],
            [
              "%c",
              "单个字符",
              "printf(\"%c\", 'A')"
            ],
            [
              "%s",
              "字符串",
              "printf(\"%s\", \"hi\")"
            ],
            [
              "\\n",
              "换行",
              "printf(\"a\\nb\")"
            ],
            [
              "\\t",
              "制表符（Tab）",
              "printf(\"a\\tb\")"
            ]
          ]
        },
        {
          'type': "tip",
          'title': "记住万能三件套",
          'text': "先写格式串，再写变量列表，占位符的数量和顺序要和变量一一对应。占位符写错了类型（比如用 %d 打印小数）会输出乱码，这是 C 的特色，务必小心。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"注释与 printf 基础输出\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"注释与 printf 基础输出\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"注释与 printf 基础输出\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "单行注释用 //，多行注释用 /* */，编译器会忽略注释",
            "printf 用 %d %f %c %s 等占位符打印变量",
            "%.2f 控制小数位数，\\n 换行，\\t 制表",
            "占位符数量和顺序必须和后面变量一一对应"
          ]
        }
      ],
      'templates': [
        {
          'name': "个人信息卡",
          'code': "#include <stdio.h>\nint main() {\n    printf(\"姓名：小明\\n\");\n    printf(\"年龄：%d\\n\", 10);\n    printf(\"身高：%.1f 米\\n\", 1.45);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-4",
      'title': "变量与基本数据类型",
      'summary': "int、float、double、char 四大基本类型，变量怎么声明怎么用。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "变量就像一个贴了标签的盒子：你把数据放进去，就能通过标签（变量名）随时取用。C 语言是强类型语言，用任何变量前必须先声明它的类型，告诉编译器这个盒子里装的是哪种数据。"
        },
        {
          'type': "h",
          'text': "四大基本类型"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "声明变量并赋值",
          'code': "#include <stdio.h>\nint main() {\n    int age = 18;            // 整数\n    float price = 9.99f;     // 单精度小数（f 结尾表示 float）\n    double score = 88.5;     // 双精度小数，精度更高\n    char grade = 'A';        // 单个字符，用单引号包\n\n    printf(\"年龄：%d\\n\", age);\n    printf(\"价格：%.2f\\n\", price);\n    printf(\"成绩：%.1f\\n\", score);\n    printf(\"等级：%c\\n\", grade);\n    return 0;\n}"
        },
        {
          'type': "table",
          'head': [
            "类型",
            "占位符",
            "常见大小",
            "用途"
          ],
          'rows': [
            [
              "int",
              "%d",
              "4 字节",
              "整数，日常计数、年龄"
            ],
            [
              "float",
              "%f",
              "4 字节",
              "单精度小数"
            ],
            [
              "double",
              "%lf",
              "8 字节",
              "双精度小数，精度更高"
            ],
            [
              "char",
              "%c",
              "1 字节",
              "单个字符或小整数"
            ]
          ]
        },
        {
          'type': "h",
          'text': "用 sizeof 看看类型占多大"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "查看类型大小",
          'code': "#include <stdio.h>\nint main() {\n    printf(\"int 占 %d 字节\\n\", (int)sizeof(int));\n    printf(\"double 占 %d 字节\\n\", (int)sizeof(double));\n    printf(\"char 占 %d 字节\\n\", (int)sizeof(char));\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "变量要初始化",
          'text': "声明变量时不给初值，变量里装的是内存里的『垃圾值』（随机数）。打印没初始化的变量会得到莫名其妙的大数字。好习惯：声明时就初始化，例如 int age = 0;"
        },
        {
          'type': "info",
          'title': "double 打印用 %lf",
          'text': "在 printf 里打印 double 用 <code.inline>%lf</code.inline>（scanf 里也用它）。有的编译器 %f 也能打印 double，但规范写法是 %lf，养成习惯不会错。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"变量与基本数据类型\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"变量与基本数据类型\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"变量与基本数据类型\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "C 是强类型语言，变量必须先声明类型再使用",
            "int 整数、float/double 小数、char 字符，各有占位符",
            "sizeof 可查看类型占几个字节",
            "声明变量时务必初始化，避免垃圾值"
          ]
        }
      ],
      'templates': [
        {
          'name': "我的名片",
          'code': "#include <stdio.h>\nint main() {\n    char name[] = \"小红\";\n    int age = 9;\n    double weight = 28.5;\n    printf(\"姓名：%s\\n\", name);\n    printf(\"年龄：%d 岁\\n\", age);\n    printf(\"体重：%.1f 千克\\n\", weight);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-5",
      'title': "常量与宏常量",
      'summary': "用 const 和 #define 定义不变量，防止程序里出现神秘数字。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "常量就是『定死不变的值』。比如圆周率 3.14159、税率 0.13。如果把常量直接写在代码里，哪天要改就很麻烦，还可能写错。C 语言提供了两种定义常量的方式：<code.inline>const</code.inline> 和 <code.inline>#define</code.inline>。"
        },
        {
          'type': "h",
          'text': "用 const 定义常量"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "const 常量",
          'code': "#include <stdio.h>\nint main() {\n    const double PI = 3.14159;\n    const int MAX_SCORE = 100;\n\n    printf(\"圆周率：%.5f\\n\", PI);\n    printf(\"满分：%d\\n\", MAX_SCORE);\n    // PI = 3.14;  // 这行会报错！const 变量不能修改\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "用 #define 定义宏常量"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "宏常量",
          'code': "#include <stdio.h>\n#define PI 3.14159\n#define MAX 100\n\nint main() {\n    printf(\"圆周率：%.5f\\n\", PI);\n    printf(\"最大值：%d\\n\", MAX);\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>#define</code.inline> 是预处理指令，它在编译之前就把代码里所有 PI 换成 3.14159，属于『文本替换』，替换完代码里根本不存在 PI 这个符号。而 <code.inline>const</code.inline> 是真正的只读变量，它占内存、有类型、能调试，更『高级』。"
        },
        {
          'type': "list",
          'items': [
            "const：有类型的只读变量，编译期类型检查更严格，推荐多用",
            "#define：编译前文本替换，没有类型检查，适合定义简单的数值",
            "命名规范：常量一般全大写加下划线，如 MAX_SIZE、PI"
          ]
        },
        {
          'type': "warn",
          'title': "宏的经典坑",
          'text': "#define 只做文本替换，所以 #define SUM 1+2 之后写 SUM*3 会变成 1+2*3=7 而不是 9。带运算的宏一定要加括号：#define SUM (1+2)。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"常量与宏常量\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"常量与宏常量\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"常量与宏常量\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "const 定义有类型的只读变量，改它编译报错",
            "#define 是编译前的文本替换，没有类型检查",
            "常量名习惯全大写加下划线",
            "带运算的宏要加括号，防止优先级坑"
          ]
        }
      ],
      'templates': [
        {
          'name': "圆的面积计算",
          'code': "#include <stdio.h>\n#define PI 3.14159\nint main() {\n    double r = 5.0;\n    double area = PI * r * r;\n    printf(\"半径 %.1f 的圆面积 = %.4f\\n\", r, area);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-6",
      'title': "基本运算符与表达式",
      'summary': "+ - * / % 五大算术运算符，小心整数除法丢小数。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "运算符就是数学里的加减乘除，但 C 语言有几个和数学不一样的地方，尤其是整数除法会『丢小数』，很多人第一次都栽在这里。先看完整示例。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "五种算术运算符",
          'code': "#include <stdio.h>\nint main() {\n    int a = 10, b = 3;\n    printf(\"a + b = %d\\n\", a + b);   // 13\n    printf(\"a - b = %d\\n\", a - b);   // 7\n    printf(\"a * b = %d\\n\", a * b);   // 30\n    printf(\"a / b = %d\\n\", a / b);   // 3  整数除以整数 = 整数！\n    printf(\"a %% b = %d\\n\", a % b);  // 1  取余数\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "整数除法大坑",
          'text': "<code.inline>10 / 3</code.inline> 的结果是 3 而不是 3.33，因为两个整数相除结果还是整数，小数部分直接丢掉。想得到小数，至少要有一个操作数是小数，比如 10.0 / 3。另外在 printf 里打印 % 号要写成 <code.inline>%%</code.inline>。"
        },
        {
          'type': "h",
          'text': "取余 % 的妙用"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "判断奇偶、拆数字",
          'code': "#include <stdio.h>\nint main() {\n    int n = 17;\n    if (n % 2 == 0) {\n        printf(\"%d 是偶数\\n\", n);\n    } else {\n        printf(\"%d 是奇数\\n\", n);\n    }\n\n    int num = 2567;\n    int ge = num % 10;        // 个位 7\n    int shi = (num / 10) % 10; // 十位 6\n    printf(\"%d 的个位是 %d，十位是 %d\\n\", num, ge, shi);\n    return 0;\n}"
        },
        {
          'type': "info",
          'title': "自增自减 ++ 和 --",
          'text': "<code.inline>i++</code.inline> 表示用完之后再加 1，<code.inline>++i</code.inline> 表示先加 1 再用。单独使用时两者效果一样，都让变量加 1。这是 C 语言最常用的写法，后面循环里天天见。"
        },
        {
          'type': "tip",
          'title': "优先级别死记",
          'text': "先乘除后加减，括号最优先，这跟数学一样。复杂的表达式别硬写一行，拆成几步赋值更不容易错，代码也更清晰。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"基本运算符与表达式\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"基本运算符与表达式\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"基本运算符与表达式\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "+ - * / % 是五大算术运算符",
            "整数除整数结果是整数，小数被丢弃，要用小数参与运算",
            "% 取余可用于判断奇偶、拆数字",
            "printf 打印 % 符号要写 %%，i++ 让变量自增"
          ]
        }
      ],
      'templates': [
        {
          'name': "温度换算器",
          'code': "#include <stdio.h>\nint main() {\n    double c = 25.0;\n    double f = c * 9.0 / 5.0 + 32;\n    printf(\"%.1f 摄氏度 = %.1f 华氏度\\n\", c, f);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-7",
      'title': "数据类型转换（隐式与强制）",
      'summary': "不同数据类型一起运算时怎么变，用 (类型) 强制转换。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "当不同类型的数据一起运算，比如整数和小数相加，C 语言会先把它们转成同一种类型再算。这种由编译器自动完成的叫『隐式转换』；而你用括号手动指定类型的，叫『强制转换』。"
        },
        {
          'type': "h",
          'text': "隐式转换：低类型自动升为高类型"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "隐式转换示例",
          'code': "#include <stdio.h>\nint main() {\n    int a = 5;\n    double b = 2.5;\n    printf(\"%f\\n\", a + b);   // 7.500000  int 自动转成 double 再相加\n\n    int n = 10;\n    printf(\"%f\\n\", n / 4.0); // 2.500000  n 转成 double\n    printf(\"%d\\n\", n / 4);    // 2        全是 int，结果是 int\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "转换方向大致是：<code.inline>char → int → float → double</code.inline>，越靠右越『高级』、越能装下更多信息。低级会自动转成高级，不会丢信息。"
        },
        {
          'type': "h",
          'text': "强制转换：用 (类型) 手动指定"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "强制转换示例",
          'code': "#include <stdio.h>\nint main() {\n    int a = 7, b = 2;\n    double r1 = a / b;            // 3.0 先整数除得 3，再存成 double\n    double r2 = (double)a / b;    // 3.5 先把 a 转成 double 再除\n    printf(\"r1 = %.1f, r2 = %.1f\\n\", r1, r2);\n\n    double score = 89.9;\n    int s = (int)score;           // 89 强制转换直接砍掉小数\n    printf(\"s = %d\\n\", s);\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "强制转换会丢精度",
          'text': "<code.inline>(int)89.9</code.inline> 得到 89，小数被直接砍掉而不是四舍五入。把大范围类型转成小范围（double 转 int、long 转 char）都可能丢失数据，要心里有数。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"数据类型转换（隐式与强制）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"数据类型转换（隐式与强制）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"数据类型转换（隐式与强制）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "隐式转换：低级自动转高级，char→int→float→double",
            "整数除整数得整数，想得小数就加 (double) 强制转换",
            "强制转换用 (类型)表达式，如 (int)score",
            "强制转换可能丢失小数或溢出，慎用"
          ]
        }
      ],
      'templates': [
        {
          'name': "成绩四舍五入",
          'code': "#include <stdio.h>\nint main() {\n    double score = 89.6;\n    int s = (int)(score + 0.5);  // 加 0.5 再取整，实现四舍五入\n    printf(\"原始 %.1f，四舍五入后 %d\\n\", score, s);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-8",
      'title': "scanf 输入与格式化",
      'summary': "用 scanf 从键盘读入数据，别忘了变量前加 &。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "之前的程序数据都是写死的，这一章学习让用户从键盘输入数据，程序才能活起来。C 语言用 <code.inline>scanf</code.inline> 读取输入，它是 printf 的镜像：printf 输出，scanf 输入。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "读取整数",
          'code': "#include <stdio.h>\nint main() {\n    int age;\n    printf(\"请输入你的年龄：\");\n    scanf(\"%d\", &age);\n    printf(\"你输入的年龄是 %d 岁\\n\", age);\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "最容易忘的 &",
          'text': "scanf 里变量前必须有 <code.inline>&</code.inline>（取地址符），比如 <code.inline>scanf(\"%d\", &age)</code.inline>。它表示『把读到的数存进 age 这个变量的地址里』。忘了写 &，程序会崩溃或者读进去垃圾值，这是 C 新手报错率最高的一行。**只有数组名和指针不用 &，其他普通变量都要**。"
        },
        {
          'type': "h",
          'text': "一次读多个不同类型的值"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "同时读入多种数据",
          'code': "#include <stdio.h>\nint main() {\n    char name[50];\n    int age;\n    double score;\n    printf(\"请输入 姓名 年龄 成绩（空格隔开）：\");\n    scanf(\"%s %d %lf\", name, &age, &score);\n    printf(\"%s，%d 岁，成绩 %.1f\\n\", name, age, score);\n    return 0;\n}"
        },
        {
          'type': "info",
          'title': "为什么 %s 不需要 &",
          'text': "<code.inline>name</code.inline> 是字符数组，数组名本身就是一个地址（指向数组开头），所以不用再加 &。这一章先记住这个结论，学到第 30 章『指针与数组』你就彻底明白了。"
        },
        {
          'type': "tip",
          'title': "scanf 的小脾气",
          'text': "scanf 读整数或字符串时会跳过空格、回车等空白字符，所以连续读多个数用空格隔开输入即可。但如果你先读数字再读字符，那个回车会被 %c 读走，导致读不到你要的字符。解决：在 %c 前面加个空格，写成 <code.inline>\" %c\"</code.inline>。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"scanf 输入与格式化\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"scanf 输入与格式化\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"scanf 输入与格式化\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "scanf 是 printf 的镜像，从键盘读入数据",
            "普通变量前必须加 &（取地址），数组名不用加",
            "%s 读字符串，%d 读整数，%lf 读 double，%c 读字符",
            "读字符前加个空格可以吃掉残留的回车"
          ]
        }
      ],
      'templates': [
        {
          'name': "加法计算器",
          'code': "#include <stdio.h>\nint main() {\n    int a, b;\n    printf(\"输入两个整数（空格隔开）：\");\n    scanf(\"%d %d\", &a, &b);\n    printf(\"%d + %d = %d\\n\", a, b, a + b);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-9",
      'title': "条件判断 if / else if / else",
      'summary': "让程序根据条件走不同分支，注意 == 才是比较相等。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "程序最强大的地方就是能『看情况办事』。if 语句让程序根据条件真假选择执行哪一段代码。条件成立（真）执行 if 里的，不成立（假）执行 else 里的。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "if / else 基础",
          'code': "#include <stdio.h>\nint main() {\n    int score;\n    printf(\"请输入成绩：\");\n    scanf(\"%d\", &score);\n\n    if (score >= 60) {\n        printf(\"及格了！\\n\");\n    } else {\n        printf(\"不及格，继续努力\\n\");\n    }\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "多分支：if / else if / else"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "成绩等级划分",
          'code': "#include <stdio.h>\nint main() {\n    int score;\n    printf(\"请输入成绩：\");\n    scanf(\"%d\", &score);\n\n    if (score >= 90) {\n        printf(\"优秀\\n\");\n    } else if (score >= 75) {\n        printf(\"良好\\n\");\n    } else if (score >= 60) {\n        printf(\"及格\\n\");\n    } else {\n        printf(\"不及格\\n\");\n    }\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "= 和 == 是两回事",
          'text': "<code.inline>=</code.inline> 是赋值，<code.inline>==</code.inline> 才是比较是否相等。写成 <code.inline>if (score = 60)</code.inline> 不是报错，而是先把 60 赋给 score，再判断 60 是否为真（非 0 即真），结果恒为真，bug 很难发现。C 语言允许这种写法，是经典陷阱。"
        },
        {
          'type': "list",
          'items': [
            "<code.inline>==</code.inline> 等于，<code.inline>!=</code.inline> 不等于",
            "<code.inline>&gt;</code.inline> 大于，<code.inline>&lt;</code.inline> 小于，<code.inline>&gt;=</code.inline> 大于等于，<code.inline>&lt;=</code.inline> 小于等于",
            "多个条件组合：<code.inline>&amp;&amp;</code.inline> 且、<code.inline>||</code.inline> 或、<code.inline>!</code.inline> 非"
          ]
        },
        {
          'type': "tip",
          'title': "{} 一定要写",
          'text': "if 后面只有一句话时可以省略花括号，但强烈建议永远写上。否则哪天多加一行，那行就永远执行了，出 bug 很难找。写 <code.inline>{ }</code.inline> 是好习惯。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"条件判断 if / else if / else\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"条件判断 if / else if / else\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"条件判断 if / else if / else\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "if 判断真假执行不同分支，else if 支持多分支",
            "== 是等于，= 是赋值，别搞混",
            "&& 且、|| 或、! 非，用于组合条件",
            "if 的花括号永远写上，防止意外 bug"
          ]
        }
      ],
      'templates': [
        {
          'name': "判断奇偶",
          'code': "#include <stdio.h>\nint main() {\n    int n;\n    printf(\"请输入一个整数：\");\n    scanf(\"%d\", &n);\n    if (n % 2 == 0) {\n        printf(\"%d 是偶数\\n\", n);\n    } else {\n        printf(\"%d 是奇数\\n\", n);\n    }\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-10",
      'title': "switch 语句",
      'summary': "多选一的时候用 switch 比一堆 if else 更清晰，记得 break。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "当程序要根据一个整数值在多个选项里选一个时，switch 比一排 if else 更简洁清晰。switch 先看变量的值，然后跳到对应的 case 执行。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "星期几",
          'code': "#include <stdio.h>\nint main() {\n    int day;\n    printf(\"请输入 1-7：\");\n    scanf(\"%d\", &day);\n\n    switch (day) {\n        case 1: printf(\"星期一\\n\"); break;\n        case 2: printf(\"星期二\\n\"); break;\n        case 3: printf(\"星期三\\n\"); break;\n        case 4: printf(\"星期四\\n\"); break;\n        case 5: printf(\"星期五\\n\"); break;\n        case 6: printf(\"星期六\\n\"); break;\n        case 7: printf(\"星期日\\n\"); break;\n        default: printf(\"输入有误\\n\"); break;\n    }\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "忘写 break 会『穿透』",
          'text': "每个 case 结尾的 <code.inline>break;</code.inline> 不能省！忘了 break，程序执行完当前 case 后会继续往下执行下一个 case，这叫『穿透』。比如 case 1 忘了 break，输入 1 会连星期一、星期二一起打出来。"
        },
        {
          'type': "info",
          'title': "穿透也能利用",
          'text': "想让多个值走同一段代码时，可以把几个 case 写在一起共用代码。比如 switch 里 case 'a': case 'e': case 'i': printf(\"是元音\"); break; 就是利用穿透故意不写 break。"
        },
        {
          'type': "p",
          'text': "switch 的括号里只能放整数类型的表达式（int、char 都行），不能放小数、字符串。default 分支表示『都不匹配时』执行，一般写在最后。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"switch 语句\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"switch 语句\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"switch 语句\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "switch 适合根据整数做多选一，比 if else 更清晰",
            "每个 case 结尾都要 break，防止穿透",
            "case 后面可以是整数字面量或字符，如 case 1、case 'A'",
            "default 处理都不匹配的情况",
            "switch 只能用于整数表达式，不能用于小数或字符串"
          ]
        }
      ],
      'templates': [
        {
          'name': "简易计算器",
          'code': "#include <stdio.h>\nint main() {\n    int a, b;\n    char op;\n    printf(\"输入 a 运算符 b（如 5 + 3）：\");\n    scanf(\"%d %c %d\", &a, &op, &b);\n    switch (op) {\n        case '+': printf(\"=%d\\n\", a + b); break;\n        case '-': printf(\"=%d\\n\", a - b); break;\n        case '*': printf(\"=%d\\n\", a * b); break;\n        case '/': if (b != 0) printf(\"=%d\\n\", a / b); else printf(\"除数不能为 0\\n\"); break;\n        default: printf(\"未知运算符\\n\");\n    }\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-11",
      'title': "while 循环",
      'summary': "条件成立就一直重复，注意更新条件防止死循环。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "循环让程序重复做一件事。while 循环的套路是：先看条件，条件为真就执行循环体，执行完再看一次，直到条件为假才结束。『先判断，后执行』。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "打印 1 到 10",
          'code': "#include <stdio.h>\nint main() {\n    int i = 1;\n    while (i <= 10) {\n        printf(\"%d \", i);\n        i = i + 1;   // 更新条件变量，否则死循环\n    }\n    printf(\"\\n循环结束\\n\");\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "经典应用：累加求和"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "计算 1+2+...+100",
          'code': "#include <stdio.h>\nint main() {\n    int sum = 0;\n    int i = 1;\n    while (i <= 100) {\n        sum = sum + i;\n        i++;\n    }\n    printf(\"1 到 100 的和 = %d\\n\", sum);\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "死循环怎么来的",
          'text': "如果循环体里忘了 <code.inline>i++</code.inline>，i 永远等于 1，条件永远为真，程序就卡死刷屏了。这是新手最常见的问题。万一死循环了，在命令行按 <code.inline>Ctrl+C</code.inline> 可以强制终止程序。"
        },
        {
          'type': "tip",
          'title': "什么时候用 while",
          'text': "当你『不确定要循环几次，但知道循环条件』时用 while 最合适。比如一直读用户输入直到输入 0 为止——循环次数未知，但条件明确。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"while 循环\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"while 循环\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"while 循环\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "while 先判断条件，为真才执行循环体",
            "循环体里必须有语句改变条件，否则死循环",
            "死循环时按 Ctrl+C 终止程序",
            "循环次数未知但条件明确时用 while 最合适"
          ]
        }
      ],
      'templates': [
        {
          'name': "输入 0 才结束",
          'code': "#include <stdio.h>\nint main() {\n    int n, sum = 0;\n    printf(\"请输入一些数，输入 0 结束：\\n\");\n    scanf(\"%d\", &n);\n    while (n != 0) {\n        sum = sum + n;\n        scanf(\"%d\", &n);\n    }\n    printf(\"总和 = %d\\n\", sum);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-12",
      'title': "do-while 循环",
      'summary': "无论条件真假都先执行一次，适合『先做再判断』的场景。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "do-while 和 while 的区别只有一点：do-while 先执行一次循环体，再判断条件。所以它**至少执行一次**。语法是先写 do 再接 while(条件)，最后记得分号。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "do-while 基础",
          'code': "#include <stdio.h>\nint main() {\n    int i = 1;\n    do {\n        printf(\"%d \", i);\n        i++;\n    } while (i <= 5);   // 注意这里有分号！\n    printf(\"\\n结束\\n\");\n    return 0;\n}"
        },
        {
          'type': "info",
          'title': "while vs do-while 一句话区分",
          'text': "<code.inline>while</code.inline>：先问后做，可能一次都不做。<code.inline>do-while</code.inline>：先做再问，至少做一次。想想『检查密码：先让你输入一次再判断对不对』，这种『先做再验』的场景就是 do-while。"
        },
        {
          'type': "h",
          'text': "经典场景：菜单至少要显示一次"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "菜单循环",
          'code': "#include <stdio.h>\nint main() {\n    int choice;\n    do {\n        printf(\"==== 菜单 ====\\n\");\n        printf(\"1. 查询  2. 充值  0. 退出\\n\");\n        printf(\"请选择：\");\n        scanf(\"%d\", &choice);\n        if (choice == 1) printf(\"你选择了查询\\n\");\n        else if (choice == 2) printf(\"你选择了充值\\n\");\n    } while (choice != 0);\n    printf(\"已退出\\n\");\n    return 0;\n}"
        },
        {
          'type': "tip",
          'title': "菜单循环配 switch",
          'text': "上面的菜单用 if else 判断选项，等学完 switch 后，菜单 + switch + do-while 就是最常见的人机交互组合：do-while 保证菜单显示一次，switch 处理每个选项，条件写『选 0 退出』。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"do-while 循环\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"do-while 循环\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"do-while 循环\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "do-while 先执行循环体再判断条件，至少执行一次",
            "结尾 while(条件); 别忘分号",
            "适合『先做再验证』的场景，比如菜单、密码校验",
            "while 可能一次都不执行，do-while 至少一次"
          ]
        }
      ],
      'templates': [
        {
          'name': "密码验证",
          'code': "#include <stdio.h>\nint main() {\n    int pwd;\n    do {\n        printf(\"请输入密码（正确密码 1234）：\");\n        scanf(\"%d\", &pwd);\n        if (pwd != 1234) printf(\"密码错误！\\n\");\n    } while (pwd != 1234);\n    printf(\"欢迎进入系统！\\n\");\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-13",
      'title': "for 循环",
      'summary': "循环次数明确时用 for，三个部分：初始化、条件、更新。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "for 循环是 C 语言里使用频率最高的循环。它把『初始化』『条件判断』『步进更新』三件事集中在括号里，结构紧凑清晰。当你知道要循环多少次时，首选 for。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "for 循环打印 1 到 10",
          'code': "#include <stdio.h>\nint main() {\n    int i;\n    for (i = 1; i <= 10; i++) {\n        printf(\"%d \", i);\n    }\n    printf(\"\\n\");\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "for 的三个部分"
        },
        {
          'type': "list",
          'items': [
            "<code.inline>i = 1</code.inline>：初始化，循环开始前执行一次",
            "<code.inline>i &lt;= 10</code.inline>：条件，每次循环前判断，为真才继续",
            "<code.inline>i++</code.inline>：更新，每次循环体执行完后执行，然后回到条件判断"
          ]
        },
        {
          'type': "code",
          'lang': "c",
          'title': "用 for 求和与打印偶数",
          'code': "#include <stdio.h>\nint main() {\n    int sum = 0;\n    for (int i = 1; i <= 100; i++) {\n        sum += i;\n    }\n    printf(\"1+...+100 = %d\\n\", sum);\n\n    printf(\"1-20 的偶数：\");\n    for (int i = 1; i <= 20; i++) {\n        if (i % 2 == 0) printf(\"%d \", i);\n    }\n    printf(\"\\n\");\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "注意分号，不是逗号",
          'text': "for 的括号里两个分号 <code.inline>;</code.inline> 一个都不能少，是分号不是逗号。写错成逗号，编译器会报语法错误。"
        },
        {
          'type': "tip",
          'title': "计数器习惯从 0 开始",
          'text': "C 语言里遍历数组等场景，习惯 <code.inline>for (int i = 0; i &lt; n; i++)</code.inline>，因为数组下标从 0 开始。这个习惯越早养成越好，后面遍历数组都用它。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"for 循环\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"for 循环\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"for 循环\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "for 把初始化、条件、更新集中在括号里，用分号隔开",
            "循环次数明确时首选 for",
            "注意是分号不是逗号",
            "遍历数组习惯 for (i=0; i<n; i++)，下标从 0 开始"
          ]
        }
      ],
      'templates': [
        {
          'name': "打印乘法口算表",
          'code': "#include <stdio.h>\nint main() {\n    for (int i = 1; i <= 9; i++) {\n        for (int j = 1; j <= 9; j++) {\n            printf(\"%d x %d = %2d\\n\", i, j, i * j);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-14",
      'title': "break 与 continue",
      'summary': "break 提前跳出循环，continue 跳过本次循环剩余语句。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "循环进行到一半，有时想提前结束（break），有时想跳过这次直接进入下一次（continue）。这两个关键字能让你更精准地控制循环流程。"
        },
        {
          'type': "h",
          'text': "break：立即跳出整个循环"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "找到第一个能被 7 整除的数",
          'code': "#include <stdio.h>\nint main() {\n    for (int i = 1; i <= 100; i++) {\n        if (i % 7 == 0) {\n            printf(\"1-100 中第一个 7 的倍数是 %d\\n\", i);\n            break;   // 找到了就立刻结束循环\n        }\n    }\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "continue：跳过本次循环剩余部分"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "跳过偶数，只打印奇数",
          'code': "#include <stdio.h>\nint main() {\n    printf(\"1-10 的奇数：\");\n    for (int i = 1; i <= 10; i++) {\n        if (i % 2 == 0) {\n            continue;   // 偶数直接跳到下一次循环\n        }\n        printf(\"%d \", i);\n    }\n    printf(\"\\n\");\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "break 只跳出最近的一层",
          'text': "在嵌套循环里，break 和 continue 都只作用于**离它最近的那一层循环**。想一次跳出多层循环，需要额外技巧（比如标志变量或 goto），后面章节会讲。"
        },
        {
          'type': "tip",
          'title': "什么时候用",
          'text': "break 常用于『找到了就停』的搜索场景；continue 常用于『跳过不符合条件的数据』。两者能让你少写很多复杂的 if 嵌套。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"break 与 continue\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"break 与 continue\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"break 与 continue\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "break 立即终止当前这层循环，程序继续执行循环后面的代码",
            "continue 跳过本次循环剩余语句，直接进入下一次",
            "两者都只作用于最近的一层循环",
            "break 适合搜索即停，continue 适合跳过特定数据"
          ]
        }
      ],
      'templates': [
        {
          'name': "判断素数",
          'code': "#include <stdio.h>\nint main() {\n    int n;\n    printf(\"请输入一个大于 1 的整数：\");\n    scanf(\"%d\", &n);\n    int isPrime = 1;\n    for (int i = 2; i < n; i++) {\n        if (n % i == 0) {\n            isPrime = 0;\n            break;\n        }\n    }\n    if (isPrime) printf(\"%d 是素数\\n\", n);\n    else printf(\"%d 不是素数\\n\", n);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-15",
      'title': "循环嵌套",
      'summary': "循环里套循环，外层管行、内层管列，打印图形和表格。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "循环嵌套就是一个循环的循环体里还有另一个循环。最常见的是双重循环：外层循环控制『行』，内层循环控制『列』，配合起来就能打印各种图形和表格。"
        },
        {
          'type': "h",
          'text': "打印九九乘法表"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "九九乘法表",
          'code': "#include <stdio.h>\nint main() {\n    for (int i = 1; i <= 9; i++) {        // 外层：行\n        for (int j = 1; j <= i; j++) {    // 内层：列，只到 i\n            printf(\"%d*%d=%-2d \", j, i, i * j);\n        }\n        printf(\"\\n\");                     // 每行结束换行\n    }\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "打印三角形"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "直角三角形",
          'code': "#include <stdio.h>\nint main() {\n    int n = 5;\n    for (int i = 1; i <= n; i++) {       // 行\n        for (int j = 1; j <= i; j++) {   // 每行打印 i 个星号\n            printf(\"*\");\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "循环嵌套的总执行次数是每层次数的乘积。比如外层 9 次、内层平均 5 次，总共约 45 次。要理解内外层各自的职责，别搞混控制变量。"
        },
        {
          'type': "warn",
          'title': "别用同一个变量",
          'text': "内外两层循环不要用同一个循环变量（比如都用 i），否则内层会把外层的值改掉，导致死循环或逻辑混乱。通常外层用 i，内层用 j。"
        },
        {
          'type': "tip",
          'title': "三步拆解思路",
          'text': "遇到图形类题目：先确定有几行（外层循环），再看每行有几个元素（内层循环），最后想每行元素和行号的关系（内层边界）。按这个思路，菱形、倒三角都能解。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"循环嵌套\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"循环嵌套\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"循环嵌套\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "循环嵌套 = 循环体里再放循环，外层管行、内层管列",
            "总执行次数 = 各层次数相乘",
            "内外层别共用同一个循环变量",
            "打印图形：先分行，再分列，再找行列关系"
          ]
        }
      ],
      'templates': [
        {
          'name': "空心三角形",
          'code': "#include <stdio.h>\nint main() {\n    int n = 6;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            if (j == 1 || j == i || i == n) printf(\"*\");\n            else printf(\" \");\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-16",
      'title': "goto 语句（了解即可）",
      'summary': "认识 goto 的写法与危害，知道它为什么被业界嫌弃。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "goto 可以让程序无条件跳转到代码中的任意标签位置。它在理论上很强大，但实际开发中几乎不用，因为会破坏程序的顺序结构，让代码像一团乱麻。这一章你只需了解它，重点是知道为什么不推荐。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "goto 基础写法",
          'code': "#include <stdio.h>\nint main() {\n    int n = 0;\nloop:                    // 标签，后面跟冒号\n    n++;\n    printf(\"n = %d\\n\", n);\n    if (n < 3) {\n        goto loop;        // 跳回标签处\n    }\n    printf(\"结束\\n\");\n    return 0;\n}"
        },
        {
          'type': "danger",
          'title': "为什么不推荐",
          'text': "goto 能让执行流程在代码里乱跳，程序一长，读者很难跟上执行顺序，bug 极难排查。祖师爷 Dijkstra 还写过著名的论文批判 goto。现代编程的原则是：用循环、函数等结构化语句代替 goto。"
        },
        {
          'type': "h",
          'text': "唯一还算体面的用法"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "用 goto 跳出多层循环",
          'code': "#include <stdio.h>\nint main() {\n    for (int i = 0; i < 10; i++) {\n        for (int j = 0; j < 10; j++) {\n            if (i * j == 42) {\n                printf(\"找到了 i=%d j=%d\\n\", i, j);\n                goto done;    // 一次跳出两层循环\n            }\n        }\n    }\ndone:\n    printf(\"程序结束\\n\");\n    return 0;\n}"
        },
        {
          'type': "info",
          'title': "了解即可",
          'text': "有些古老的代码、Linux 内核的错误处理里仍能见到 goto，所以认识它、能看懂它即可。自己写新代码，尽量用 break/标志变量/函数来替代。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"goto 语句（了解即可）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"goto 语句（了解即可）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"goto 语句（了解即可）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "goto 无条件跳转到标签处，写法是 goto 标签名",
            "破坏程序结构、难读难排错，业界强烈不推荐",
            "唯一常见用法：跳出多层嵌套循环",
            "认识即可，自己写代码用结构化语句替代"
          ]
        }
      ],
      'templates': []
    },
    {
      'id': "cl-17",
      'title': "数组基础（定义、遍历）",
      'summary': "数组是存放一堆同类型数据的连续盒子，下标从 0 开始。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "要存 100 个成绩，总不能声明 100 个变量吧？数组就是为这种场景准备的：它是一块**连续的内存**，里面放了一串**相同类型**的数据，通过下标访问。这是 C 语言的核心数据结构之一。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "定义数组并遍历",
          'code': "#include <stdio.h>\nint main() {\n    int scores[5];                // 声明能存 5 个 int 的数组\n    scores[0] = 90;               // 下标从 0 开始\n    scores[1] = 85;\n    scores[2] = 78;\n    scores[3] = 95;\n    scores[4] = 88;\n\n    for (int i = 0; i < 5; i++) {\n        printf(\"第 %d 个成绩 = %d\\n\", i + 1, scores[i]);\n    }\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "初始化与求最值"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "数组求最大值",
          'code': "#include <stdio.h>\nint main() {\n    int nums[] = {34, 56, 12, 98, 45};  // 定义时直接初始化\n    int n = 5;\n    int max = nums[0];\n    for (int i = 1; i < n; i++) {\n        if (nums[i] > max) max = nums[i];\n    }\n    printf(\"最大值 = %d\\n\", max);\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "下标越界是隐形炸弹",
          'text': "C 语言**不会检查**数组下标是否越界！写 <code.inline>scores[10]</code.inline>（数组只有 5 个元素）编译器可能不报错，但会读写到数组外的内存，轻则得到垃圾值，重则程序崩溃。这是 C 程序最大的安全隐患之一，写代码时一定要自己保证下标在 [0, n-1] 范围内。"
        },
        {
          'type': "info",
          'title': "数组长度可以省略",
          'text': "定义时如果直接初始化，可以省略长度：<code.inline>int nums[] = {1,2,3}</code.inline>，编译器会数出长度是 3。但声明后没有初始化就必须写长度。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"数组基础（定义、遍历）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"数组基础（定义、遍历）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"数组基础（定义、遍历）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "数组是一段连续内存，存放同类型数据，用下标访问",
            "下标从 0 开始，第 n 个元素是 a[n-1]",
            "循环遍历数组是标配：for (i=0; i<n; i++)",
            "C 不检查越界，一定要自己保证下标合法"
          ]
        }
      ],
      'templates': [
        {
          'name': "成绩平均值",
          'code': "#include <stdio.h>\nint main() {\n    int scores[] = {90, 85, 78, 95, 88};\n    int n = 5, sum = 0;\n    for (int i = 0; i < n; i++) sum += scores[i];\n    printf(\"平均分 = %.1f\\n\", (double)sum / n);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-18",
      'title': "二维数组",
      'summary': "二维数组是表格，用两个下标定位，行下标在前列下标在后。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "二维数组就像一张表格：有行有列。比如一个班级 3 名学生、每名学生 4 门课的成绩，就是一个 3 行 4 列的表格。声明方式是 <code.inline>类型 数组名[行数][列数]</code.inline>。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "定义并遍历二维数组",
          'code': "#include <stdio.h>\nint main() {\n    int score[3][4] = {\n        {90, 85, 92, 88},\n        {78, 95, 80, 91},\n        {86, 70, 99, 84}\n    };\n    // 外层循环行，内层循环列\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 4; j++) {\n            printf(\"%4d\", score[i][j]);\n        }\n        printf(\"\\n\");   // 每行结束换行\n    }\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "按行求和（每个学生的总分）"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "统计每位学生总分",
          'code': "#include <stdio.h>\nint main() {\n    int score[3][4] = {{90,85,92,88},{78,95,80,91},{86,70,99,84}};\n    for (int i = 0; i < 3; i++) {\n        int sum = 0;\n        for (int j = 0; j < 4; j++) {\n            sum += score[i][j];\n        }\n        printf(\"学生 %d 总分 = %d\\n\", i + 1, sum);\n    }\n    return 0;\n}"
        },
        {
          'type': "info",
          'title': "内存里其实是线性的",
          'text': "二维数组在内存里仍然是连续存放的一维排列：先存第 0 行，再存第 1 行……。所以 <code.inline>score[i][j]</code.inline> 其实可以用一维下标换算。这个概念到学指针时会很有用，先记住『二维在内存里按行铺开』。"
        },
        {
          'type': "tip",
          'title': "行列别搞反",
          'text': "写 <code.inline>score[i][j]</code.inline> 时，第一个下标 i 是行、第二个 j 是列。外层循环对应行、内层对应列，习惯保持一致就不会乱。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"二维数组\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"二维数组\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"二维数组\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "二维数组是表格，声明格式：类型 数组[行数][列数]",
            "第一个下标是行，第二个是列，都从 0 开始",
            "外层循环管行、内层循环管列来遍历",
            "二维数组在内存里按行连续存放"
          ]
        }
      ],
      'templates': [
        {
          'name': "3x3 矩阵打印",
          'code': "#include <stdio.h>\nint main() {\n    int a[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++) {\n            printf(\"%d \", a[i][j]);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-19",
      'title': "字符数组与字符串基础",
      'summary': "字符串本质是字符数组加结尾的 \\0，理解它就懂了一半 C。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "C 语言没有单独的『字符串类型』，字符串就是用字符数组存储的，并且在末尾自动加一个 <code.inline>\\0</code.inline>（值为 0 的字符）作为结束标志。理解这一点，很多 C 语言的怪现象就都能解释了。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "字符数组的两种写法",
          'code': "#include <stdio.h>\nint main() {\n    char s1[] = \"hello\";      // 编译器自动在后面加 \\0，占 6 个字节\n    char s2[6] = {'h','e','l','l','o','\\0'};  // 手动写，效果相同\n\n    printf(\"s1 = %s\\n\", s1);\n    printf(\"s2 = %s\\n\", s2);\n    printf(\"s1 长度 = %d\\n\", (int)sizeof(s1));  // 6，含 \\0\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "遍历字符串：到 \\0 为止"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "统计字符串字符个数",
          'code': "#include <stdio.h>\nint main() {\n    char s[] = \"hello world\";\n    int len = 0;\n    while (s[len] != '\\0') {\n        len++;\n    }\n    printf(\"字符个数 = %d\\n\", len);   // 11，不含 \\0\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "数组大小要够装 \\0",
          'text': "<code.inline>char s[5] = \"hello\"</code.inline> 是**错误的**：hello 加上 \\0 一共 6 个字符，5 个装不下，\\0 会写到数组外面去。给字符数组留空间时，一定要多留 1 个给 \\0。"
        },
        {
          'type': "info",
          'title': "%s 打印字符串",
          'text': "printf 用 <code.inline>%s</code.inline> 打印字符串，从数组开头一直打印到遇到 \\0 为止。所以字符串没有 \\0 结尾，printf 会继续往后打印内存里的垃圾数据，直到碰见一个 0 才停。这也说明 \\0 有多重要。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"字符数组与字符串基础\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"字符数组与字符串基础\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"字符数组与字符串基础\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "C 没有字符串类型，字符串是字符数组 + 结尾 \\0",
            "\\0 是结束标志，占 1 字节，值为 0",
            "声明字符数组时大小要多留 1 位给 \\0",
            "遍历字符串到 \\0 停止，printf 用 %s 打印"
          ]
        }
      ],
      'templates': [
        {
          'name': "倒着打印字符串",
          'code': "#include <stdio.h>\nint main() {\n    char s[] = \"abcd\";\n    int len = 0;\n    while (s[len] != '\\0') len++;\n    printf(\"倒序：\");\n    for (int i = len - 1; i >= 0; i--) {\n        printf(\"%c\", s[i]);\n    }\n    printf(\"\\n\");\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-20",
      'title': "字符串处理函数（string.h）",
      'summary': "strlen 数长度、strcpy 复制、strcat 拼接、strcmp 比较，四件套搞定。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "手写字符串遍历很啰嗦，C 标准库在 <code.inline>string.h</code.inline> 里提供了大量现成的字符串函数，日常最常用的就四个：strlen、strcpy、strcat、strcmp。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "四大字符串函数",
          'code': "#include <stdio.h>\n#include <string.h>\nint main() {\n    char a[20] = \"hello\";\n    printf(\"a 的长度 = %d\\n\", (int)strlen(a));   // 5，不含 \\0\n\n    char b[20];\n    strcpy(b, a);                 // 把 a 复制到 b\n    printf(\"复制后 b = %s\\n\", b);\n\n    strcat(b, \" world\");          // 把 \" world\" 拼到 b 末尾\n    printf(\"拼接后 b = %s\\n\", b);\n\n    int r = strcmp(\"abc\", \"abd\"); // 比较两个字符串\n    printf(\"strcmp 结果 = %d\\n\", r);  // 负数，因为 c < d\n    return 0;\n}"
        },
        {
          'type': "table",
          'head': [
            "函数",
            "作用",
            "返回值"
          ],
          'rows': [
            [
              "strlen(s)",
              "求字符串长度",
              "不含 \\0 的字符个数"
            ],
            [
              "strcpy(d, s)",
              "把 s 复制到 d",
              "返回 d"
            ],
            [
              "strcat(d, s)",
              "把 s 拼接到 d 末尾",
              "返回 d"
            ],
            [
              "strcmp(a, b)",
              "比较两个字符串",
              "a==b 返回 0，a<b 返回负数，a>b 返回正数"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "strcpy/strcat 不会检查空间",
          'text': "strcpy 和 strcat 不会管目标数组够不够大，目标数组装不下就直接越界写，可能覆盖别的数据甚至崩溃。使用前要保证目标数组足够大。更安全的版本是 strncpy、strncat（限定最大长度）。"
        },
        {
          'type': "info",
          'title': "为什么 strcmp 不能用 ==",
          'text': "字符串是数组，<code.inline>==</code.inline> 比较的是数组首地址而不是内容，两个内容相同的字符串地址通常不同。所以判断字符串相等必须用 <code.inline>strcmp(a, b) == 0</code.inline>。这也是新手高频错误。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"字符串处理函数（string.h）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"字符串处理函数（string.h）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"字符串处理函数（string.h）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "string.h 提供字符串处理函数，需 #include <string.h>",
            "strlen 数长度不含 \\0，strcpy 复制，strcat 拼接，strcmp 比较",
            "strcmp 返回 0 表示两字符串相等",
            "strcpy/strcat 不检查空间，注意目标数组要够大",
            "字符串不能用 == 比较，必须用 strcmp"
          ]
        }
      ],
      'templates': [
        {
          'name': "字符串反转",
          'code': "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[] = \"hello\";\n    int len = strlen(s);\n    for (int i = 0, j = len - 1; i < j; i++, j--) {\n        char t = s[i]; s[i] = s[j]; s[j] = t;\n    }\n    printf(\"反转后 = %s\\n\", s);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-21",
      'title': "函数定义与调用",
      'summary': "把代码打包成函数，一次写好到处调用，告别复制粘贴。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "程序越写越长，如果所有代码堆在 main 里，会乱成一团。函数就是把一段有特定功能的代码打包起来，起个名字，需要时调用它。好处是：代码复用、逻辑清晰、方便修改。你已经用过函数了——printf 和 scanf 就是标准库函数。"
        },
        {
          'type': "h",
          'text': "函数的四要素"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "定义一个求和的函数",
          'code': "#include <stdio.h>\n\n// 返回值类型 函数名(参数列表) { 函数体 }\nint add(int a, int b) {\n    int sum = a + b;\n    return sum;      // 把结果返回给调用者\n}\n\nint main() {\n    int result = add(3, 5);   // 调用函数\n    printf(\"3 + 5 = %d\\n\", result);\n    return 0;\n}"
        },
        {
          'type': "list",
          'items': [
            "<code.inline>int</code.inline>：返回值类型，函数算完后返回什么类型的数",
            "<code.inline>add</code.inline>：函数名，自己起，见名知意",
            "<code.inline>(int a, int b)</code.inline>：参数列表，调用时要传进去的数据",
            "<code.inline>return sum</code.inline>：把结果交回给调用处"
          ]
        },
        {
          'type': "h",
          'text': "无参数、无返回值的函数"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "打印分隔线",
          'code': "#include <stdio.h>\n\nvoid printLine() {\n    printf(\"----------------\\n\");\n}\n\nint main() {\n    printLine();\n    printf(\"欢迎使用系统\\n\");\n    printLine();\n    return 0;\n}"
        },
        {
          'type': "info",
          'title': "void 是什么",
          'text': "<code.inline>void</code.inline> 表示『没有』：函数没有返回值时用 void，没有参数时括号里留空即可。记住：有返回值用具体类型（int、double...），没有就用 void。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"函数定义与调用\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"函数定义与调用\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"函数定义与调用\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "函数 = 返回值类型 + 函数名 + 参数列表 + 函数体",
            "调用函数直接写 函数名(实参)",
            "return 返回结果，void 表示无返回值",
            "函数让代码复用、结构清晰，main 也是函数"
          ]
        }
      ],
      'templates': [
        {
          'name': "打招呼函数",
          'code': "#include <stdio.h>\nvoid greet(char name[]) {\n    printf(\"你好，%s！\\n\", name);\n}\nint main() {\n    greet(\"小明\");\n    greet(\"小红\");\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-22",
      'title': "参数传递（值传递，不改变实参）",
      'summary': "函数拿到的是参数的拷贝，改形参不影响外面的实参。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "新手学函数最容易困惑的问题：为什么在函数里改了变量的值，回到 main 里变量没变？答案就是『值传递』——函数参数只是外面那个变量的**拷贝**，函数里改的是拷贝，原变量毫发无损。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "值传递演示",
          'code': "#include <stdio.h>\n\nvoid change(int x) {\n    x = 100;   // 改的是 x 的拷贝\n    printf(\"函数里 x = %d\\n\", x);\n}\n\nint main() {\n    int a = 10;\n    change(a);           // 把 a 的\"值\"复制一份传给函数\n    printf(\"main 里 a = %d\\n\", a);   // 仍然是 10！\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "输出结果是：函数里 x = 100，main 里 a = 10。函数里的 x 和 main 里的 a 是两个独立的变量，只是初始值相同。改 x 完全影响不到 a。这就像复印了一份文件给对方，对方在复印件上乱画，原件不受影响。"
        },
        {
          'type': "warn",
          'title': "想改实参怎么办",
          'text': "值传递改不了实参。如果你确实想让函数修改外面的变量，就要用指针传递地址，让函数能顺着地址找到原变量去改。这就是第 32 章『指针作为函数参数』的内容，也是第 37 章 swap 函数的核心。先记住：普通参数是值传递。"
        },
        {
          'type': "info",
          'title': "数组参数是例外",
          'text': "数组作为参数时传的不是整个数组的拷贝，而是首地址，所以函数里改数组元素，外面的数组会跟着变。这个特殊性到第 30 章讲『指针与数组』时会彻底讲明白。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"参数传递（值传递，不改变实参）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"参数传递（值传递，不改变实参）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"参数传递（值传递，不改变实参）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "C 默认是值传递：函数参数是实参的拷贝",
            "函数里修改形参不影响外面的实参",
            "想修改实参必须用指针（传地址）",
            "数组作为参数例外，传的是地址，能改到原数组"
          ]
        }
      ],
      'templates': [
        {
          'name': "值传递观察",
          'code': "#include <stdio.h>\nvoid addOne(int n) { n = n + 1; }\nint main() {\n    int a = 5;\n    addOne(a);\n    printf(\"a = %d（没变成 6）\\n\", a);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-23",
      'title': "返回值与 return",
      'summary': "return 把函数结果送回调用处，也可以提前结束函数。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "函数不仅能做事，还能把结果『带回』调用处，这就是返回值。用 <code.inline>return 表达式</code.inline> 实现。没有返回值的函数也可以写 <code.inline>return;</code.inline> 提前结束。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "返回最大值的函数",
          'code': "#include <stdio.h>\n\nint max(int a, int b) {\n    if (a > b) {\n        return a;\n    } else {\n        return b;\n    }\n}\n\nint main() {\n    int m = max(7, 3);\n    printf(\"最大值 = %d\\n\", m);   // 7\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "return 提前结束函数"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "检查成绩是否有效",
          'code': "#include <stdio.h>\n\nint check(int score) {\n    if (score < 0 || score > 100) {\n        printf(\"成绩不合法！\\n\");\n        return -1;   // 提前返回，后面的代码不执行\n    }\n    printf(\"成绩合法\\n\");\n    return 0;\n}\n\nint main() {\n    check(150);\n    check(85);\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "返回值类型要匹配",
          'text': "函数声明返回 int，return 就必须返回整数；声明返回 void，就不能 return 一个值。返回类型写错或漏写 return，编译器会警告或报错。返回值和函数开头声明的类型必须一致。"
        },
        {
          'type': "tip",
          'title': "返回值和参数是成对的",
          'text': "返回值是函数『还给』调用者的结果，参数是调用者『交给』函数的数据。主调方：result = 函数(实参)；被调方：return 结果。理解这个来回，函数就通了。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"返回值与 return\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"返回值与 return\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"返回值与 return\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "return 表达式 把结果返回给调用处",
            "return 可以提前结束函数，后面的代码不执行",
            "返回值类型必须和函数声明一致",
            "void 函数用 return; 结束，不带值"
          ]
        }
      ],
      'templates': [
        {
          'name': "绝对值函数",
          'code': "#include <stdio.h>\nint abs2(int n) {\n    return n < 0 ? -n : n;\n}\nint main() {\n    printf(\"%d\\n\", abs2(-5));\n    printf(\"%d\\n\", abs2(9));\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-24",
      'title': "函数原型与头文件声明",
      'summary': "在 main 之前声明函数原型，或把头文件放前面，编译器才认识。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "C 语言要求『先声明后使用』：编译器从上往下编译，遇到函数调用时，如果之前没见过这个函数，就会报错。解决方法是提前写一个函数原型（声明），或者把函数定义放在调用之前。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "函数原型（声明在 main 之前）",
          'code': "#include <stdio.h>\n\n// 函数原型：只有返回类型、函数名、参数类型，末尾加分号\nint add(int a, int b);\n\nint main() {\n    printf(\"%d\\n\", add(2, 3));   // 编译器提前知道了 add 长什么样\n    return 0;\n}\n\n// 函数定义可以放在后面\nint add(int a, int b) {\n    return a + b;\n}"
        },
        {
          'type': "h",
          'text': "把原型放进头文件"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "myfunc.h + main.c 分文件",
          'code': "// ---- myfunc.h ----\nint add(int a, int b);\nint mul(int a, int b);\n\n// ---- main.c ----\n#include <stdio.h>\n#include \"myfunc.h\"   // 引入自己的头文件，用双引号\n\nint main() {\n    printf(\"%d\\n\", add(2, 3));\n    printf(\"%d\\n\", mul(4, 5));\n    return 0;\n}\n\nint add(int a, int b) { return a + b; }\nint mul(int a, int b) { return a * b; }"
        },
        {
          'type': "list",
          'items': [
            "系统头文件用尖括号：<code.inline>#include &lt;stdio.h&gt;</code.inline>，编译器去系统目录找",
            "自己的头文件用双引号：<code.inline>#include \"myfunc.h\"</code.inline>，编译器先找当前目录"
          ]
        },
        {
          'type': "info",
          'title': "为什么需要原型",
          'text': "原型只写函数『长什么样』（类型），不写实现。好处：main 和实现可以分开放，甚至放不同文件；编译器能提前检查你调用时参数个数、类型对不对。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"函数原型与头文件声明\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"函数原型与头文件声明\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"函数原型与头文件声明\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "C 要求先声明后使用，否则报错",
            "函数原型 = 返回类型 + 函数名 + 参数类型 + 分号",
            "原型放头文件，多个 .c 文件都能 include",
            "系统头文件用 <>，自己的头文件用双引号"
          ]
        }
      ],
      'templates': []
    },
    {
      'id': "cl-25",
      'title': "局部变量与全局变量",
      'summary': "定义在函数里的是局部变量，定义在函数外的是全局变量。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "变量放的位置决定了它的『势力范围』。定义在函数内部的叫局部变量，只在这个函数里能用；定义在所有函数之外的叫全局变量，从定义处往下所有函数都能用。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "局部变量与全局变量对比",
          'code': "#include <stdio.h>\n\nint g = 10;   // 全局变量：定义在函数外面\n\nvoid show() {\n    int local = 5;   // 局部变量：定义在函数里面\n    printf(\"show 里 g = %d\\n\", g);      // 全局变量能用\n    printf(\"show 里 local = %d\\n\", local);\n}\n\nint main() {\n    // printf(\"%d\", local);  // 错误！local 在 show 里，main 用不了\n    g = 20;                  // 全局变量在 main 里能改\n    printf(\"main 里 g = %d\\n\", g);\n    show();\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "尽量少用全局变量",
          'text': "全局变量谁都能改，程序一大，很难追踪到底是谁把值改坏了。而且多文件项目里容易名字冲突。工程实践的原则是：能用局部变量和参数传递解决问题，就别用全局变量。"
        },
        {
          'type': "info",
          'title': "同名变量就近原则",
          'text': "如果局部变量和全局变量重名，函数里优先用局部变量。这叫『就近原则』，但为了避免混乱，尽量不要重名。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"局部变量与全局变量\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"局部变量与全局变量\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"局部变量与全局变量\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "局部变量定义在函数里，只在本函数可用",
            "全局变量定义在函数外，从定义处往下所有函数可用",
            "全局变量人人可改，容易出 bug，尽量少用",
            "重名时局部优先（就近原则）"
          ]
        }
      ],
      'templates': [
        {
          'name': "全局计数器",
          'code': "#include <stdio.h>\nint count = 0;\nvoid addOne() { count++; }\nint main() {\n    addOne(); addOne(); addOne();\n    printf(\"count = %d\\n\", count);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-26",
      'title': "变量的作用域与生命周期",
      'summary': "作用域看能不能用，生命周期看活多久，这是理解 static 的基础。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "作用域（scope）是指变量在哪些代码区域『可见可用』；生命周期（lifetime）是指变量在内存里存在的时间。两者密切相关：局部变量在函数里出生、函数结束时销毁；全局变量在整个程序运行期间一直存在。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "块作用域",
          'code': "#include <stdio.h>\nint main() {\n    int a = 1;\n    {\n        int b = 2;      // b 只在花括号块内有效\n        printf(\"块内 a=%d b=%d\\n\", a, b);\n    }\n    // printf(\"%d\", b);  // 错误！b 已经\"死\"了\n    printf(\"块外 a=%d\\n\", a);\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "static 局部变量：让局部变量活得更久"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "static 计数器",
          'code': "#include <stdio.h>\n\nvoid count() {\n    static int n = 0;   // static：函数结束后不销毁，保留上次的值\n    n++;\n    printf(\"第 %d 次调用\\n\", n);\n}\n\nint main() {\n    count();  // 第 1 次\n    count();  // 第 2 次\n    count();  // 第 3 次\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "普通局部变量每次函数调用都重新创建、初始化为 0 就变 1；而 static 局部变量只初始化一次，函数结束后它的值被保留，下次调用继续用。它把生命周期从『函数调用期间』延长到『整个程序运行期间』，但作用域仍是本函数。"
        },
        {
          'type': "info",
          'title': "一句话总结",
          'text': "作用域决定『哪里能用』：局部只在函数内，全局在整个文件。生命周期决定『活多久』：局部是函数运行时，全局是全程，static 局部变量是全程但只能在本函数里访问。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"变量的作用域与生命周期\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"变量的作用域与生命周期\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"变量的作用域与生命周期\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "作用域 = 能用的范围，生命周期 = 存活的时间",
            "局部变量函数结束即销毁，全局变量全程存活",
            "static 局部变量只初始化一次，值会跨函数调用保留",
            "static 变量作用域仍限于本函数，但生命周期延长到全程"
          ]
        }
      ],
      'templates': [
        {
          'name': "只初始化一次的 static",
          'code': "#include <stdio.h>\nvoid run() {\n    static int x = 0;\n    x += 1;\n    printf(\"x = %d\\n\", x);\n}\nint main() {\n    run(); run(); run();\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-27",
      'title': "递归基础（阶乘、斐波那契）",
      'summary': "函数调用自己就是递归，先理解『出口』再理解『递进』。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "递归就是函数自己调用自己。听上去像死循环，其实不是：每个递归函数都必须有一个『出口』（终止条件），到了出口就不再调用自己，一层层返回结果。理解递归的钥匙是：**别跟着一层层往下钻，假设子问题已经解决了**。"
        },
        {
          'type': "h",
          'text': "阶乘：n! = n * (n-1)!"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "递归求阶乘",
          'code': "#include <stdio.h>\n\nlong factorial(int n) {\n    if (n <= 1) {\n        return 1;         // 出口：1! = 1\n    }\n    return n * factorial(n - 1);   // 递归：n! = n * (n-1)!\n}\n\nint main() {\n    printf(\"5! = %ld\\n\", factorial(5));   // 120\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "factorial(5) 的计算过程：5! = 5 * 4!，4! = 4 * 3!，3! = 3 * 2!，2! = 2 * 1!，1! 触发出口返回 1，然后一层层往回乘，得到 120。画个金字塔，从上往下递进，触底后从下往上回归。"
        },
        {
          'type': "h",
          'text': "斐波那契数列"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "递归求斐波那契",
          'code': "#include <stdio.h>\n\nint fib(int n) {\n    if (n <= 1) {\n        return n;         // 出口：fib(0)=0, fib(1)=1\n    }\n    return fib(n - 1) + fib(n - 2);   // 前两项之和\n}\n\nint main() {\n    for (int i = 0; i < 10; i++) {\n        printf(\"%d \", fib(i));   // 0 1 1 2 3 5 8 13 21 34\n    }\n    printf(\"\\n\");\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "必须写出口！",
          'text': "递归函数没有出口或出口永远达不到，就会无限调用自己，直到栈空间耗尽程序崩溃。写递归第一步先写终止条件，第二步再写递进关系。"
        },
        {
          'type': "info",
          'title': "递归 vs 循环",
          'text': "能用循环解决的问题都能用递归，反之亦然。递归代码更接近数学定义、更优雅，但会占用大量函数调用栈空间（栈溢出风险），效率也可能更低。斐波那契用朴素递归效率极低（重复计算），实战中常用循环或记忆化。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"递归基础（阶乘、斐波那契）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"递归基础（阶乘、斐波那契）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"递归基础（阶乘、斐波那契）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "递归 = 函数调用自己，必须有出口（终止条件）",
            "理解递归：假设子问题已解决，只关心当前这一步",
            "阶乘 n! = n * (n-1)!，出口 n<=1",
            "递归优雅但占栈、可能低效，注意栈溢出"
          ]
        }
      ],
      'templates': [
        {
          'name': "递归求和",
          'code': "#include <stdio.h>\nint sum(int n) {\n    if (n == 1) return 1;      // 出口\n    return n + sum(n - 1);     // 1+2+...+n\n}\nint main() {\n    printf(\"1+...+100 = %d\\n\", sum(100));\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-28",
      'title': "递归进阶（汉诺塔）",
      'summary': "汉诺塔用递归三行解决，体会『分解问题』的威力。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "汉诺塔问题：有三根柱子 A、B、C，A 上有 n 个从小到大叠放的盘子，要把所有盘子移到 C，规则是：一次只能动一个盘子，大盘子永远不能压在小盘子上。听起来很复杂，但用递归只需要三步逻辑。"
        },
        {
          'type': "h",
          'text': "递归三步走"
        },
        {
          'type': "list",
          'items': [
            "把上面 n-1 个盘子从 A 借助 C 移到 B（子问题）",
            "把最大的第 n 个盘子从 A 直接移到 C（一步）",
            "把 B 上的 n-1 个盘子借助 A 移到 C（子问题）"
          ]
        },
        {
          'type': "code",
          'lang': "c",
          'title': "汉诺塔递归实现",
          'code': "#include <stdio.h>\n\nvoid hanoi(int n, char from, char temp, char to) {\n    if (n == 1) {\n        printf(\"把第 1 个盘子从 %c 移到 %c\\n\", from, to);\n        return;                 // 出口：只有一个盘子直接移\n    }\n    hanoi(n - 1, from, to, temp);   // 1. n-1 个盘子 from -> temp\n    printf(\"把第 %d 个盘子从 %c 移到 %c\\n\", n, from, to);  // 2. 最大盘\n    hanoi(n - 1, temp, from, to);   // 3. n-1 个盘子 temp -> to\n}\n\nint main() {\n    hanoi(3, 'A', 'B', 'C');\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "这段代码只有 9 行，却解决了看似极其复杂的问题。你不需要手动跟踪每一层调用，只需要相信：『hanoi(n-1, ...) 一定能正确地把 n-1 个盘子移过去』——这就是递归的信念。把大问题不断缩小成同类型的子问题，直到小到一眼能解决。"
        },
        {
          'type': "info",
          'title': "移动次数",
          'text': "n 个盘子的移动次数是 2 的 n 次方减 1：3 个盘子 7 次，4 个 15 次，64 个盘子需要 1844 亿亿次，人一辈子都移不完。这也说明某些问题规模一大，再好的算法也无解。"
        },
        {
          'type': "warn",
          'title': "递归别太深",
          'text': "每层递归都会占用一块栈内存。递归深度过大（比如几万层）会栈溢出导致崩溃。汉诺塔 20 层就要约 100 万次移动，实际运行量会很大，测试时用小的 n（如 3、4）即可。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"递归进阶（汉诺塔）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"递归进阶（汉诺塔）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"递归进阶（汉诺塔）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "汉诺塔递归思路：n-1 个先挪走 → 移最大的 → n-1 个再挪回来",
            "相信子问题已解决，别手动跟每一层",
            "出口是 n==1 直接移动一个盘子",
            "递归深度太大会栈溢出"
          ]
        }
      ],
      'templates': [
        {
          'name': "3 层汉诺塔演示",
          'code': "#include <stdio.h>\nvoid hanoi(int n, char a, char b, char c) {\n    if (n == 1) { printf(\"A->C\\n\"); return; }\n    hanoi(n - 1, a, c, b);\n    printf(\"A->C\\n\");\n    hanoi(n - 1, b, a, c);\n}\nint main() {\n    printf(\"把 3 个盘子从 A 移到 C：\\n\");\n    hanoi(3, 'A', 'B', 'C');\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-29",
      'title': "指针基础（& 取地址、* 解引用）",
      'summary': "指针是存地址的变量，& 拿地址，* 顺着地址取值。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "指针是 C 语言最核心也最让人头疼的概念。放下恐惧，用一个比喻：你家住址就是『指针』，它不装你的家具，只装『你在哪』这个信息。普通变量存值，指针变量存地址。有了地址，就能找到房子，进去拿东西。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "取地址与解引用",
          'code': "#include <stdio.h>\nint main() {\n    int a = 10;\n    int *p = &a;      // &a 取 a 的地址，存到指针 p 里\n\n    printf(\"a 的值 = %d\\n\", a);       // 10\n    printf(\"a 的地址 = %p\\n\", (void*)&a);  // 一串十六进制地址\n    printf(\"p 里存的值 = %p\\n\", (void*)p); // 和上面地址相同\n\n    *p = 20;          // *p 解引用：顺着 p 找到 a，把它改成 20\n    printf(\"现在 a = %d\\n\", a);       // 20！通过指针改了 a\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "两个关键符号"
        },
        {
          'type': "list",
          'items': [
            "<code.inline>&</code.inline>：取地址运算符，<code.inline>&a</code.inline> 得到变量 a 的内存地址",
            "<code.inline>*</code.inline>：解引用运算符，<code.inline>*p</code.inline> 得到 p 指向的那个变量的值",
            "声明时 <code.inline>int *p</code.inline> 的 * 表示『p 是一个指向 int 的指针』"
          ]
        },
        {
          'type': "code",
          'lang': "c",
          'title': "不同类型的指针",
          'code': "#include <stdio.h>\nint main() {\n    int a = 5;\n    double b = 3.14;\n    char c = 'A';\n\n    int *p1 = &a;        // 指向 int 的指针\n    double *p2 = &b;     // 指向 double 的指针\n    char *p3 = &c;       // 指向 char 的指针\n\n    printf(\"%d %f %c\\n\", *p1, *p2, *p3);\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "指针类型要匹配",
          'text': "指针声明成什么类型，就该指向什么类型的变量。<code.inline>int *p</code.inline> 却去指向 double 的变量，取出来的是错的数据。因为解引用时，编译器按指针的类型决定读几个字节、怎么解释。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"指针基础（& 取地址、* 解引用）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"指针基础（& 取地址、* 解引用）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"指针基础（& 取地址、* 解引用）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "指针变量存的是地址，普通变量存的是值",
            "& 取地址，* 解引用（顺着地址取值/改值）",
            "声明时 * 表示这是指针，int *p 指向 int",
            "指针类型必须和指向的变量类型匹配"
          ]
        }
      ],
      'templates': [
        {
          'name': "通过指针改值",
          'code': "#include <stdio.h>\nint main() {\n    int a = 1, b = 2;\n    int *p = &a;\n    printf(\"a = %d\\n\", *p);\n    p = &b;\n    printf(\"b = %d\\n\", *p);\n    *p = 99;\n    printf(\"改后 b = %d\\n\", b);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-30",
      'title': "指针与数组的关系",
      'summary': "数组名就是指向首元素的指针常量，a[i] 就是 *(a+i)。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "数组和指针的关系极其亲密：**数组名本质上是指向数组首元素的指针（常量）**。所以 <code.inline>a[0]</code.inline> 和 <code.inline>*a</code.inline> 是同一个东西，<code.inline>a[i]</code.inline> 就是 <code.inline>*(a + i)</code.inline>。理解了这条，C 的很多怪现象豁然开朗。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "数组名就是指针",
          'code': "#include <stdio.h>\nint main() {\n    int a[5] = {10, 20, 30, 40, 50};\n\n    printf(\"a = %p\\n\", (void*)a);     // a 的值 = 数组首元素地址\n    printf(\"&a[0] = %p\\n\", (void*)&a[0]);  // 和上面相同\n\n    printf(\"a[0] = %d\\n\", a[0]);      // 10\n    printf(\"*a = %d\\n\", *a);          // 10，和 a[0] 一样\n\n    printf(\"a[2] = %d\\n\", a[2]);      // 30\n    printf(\"*(a+2) = %d\\n\", *(a + 2));// 30，下标就是指针运算\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "因此遍历数组既可以用下标 <code.inline>a[i]</code.inline>，也可以用指针 <code.inline>*(a+i)</code.inline>，两者完全等价。编译器内部就是用指针运算来实现下标访问的。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "指针遍历数组",
          'code': "#include <stdio.h>\nint main() {\n    int a[] = {10, 20, 30, 40};\n    int *p = a;    // p 指向首元素\n\n    for (int i = 0; i < 4; i++) {\n        printf(\"%d \", *(p + i));   // 用指针方式访问\n    }\n    printf(\"\\n\");\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "数组名不能改指向",
          'text': "数组名是指针**常量**：可以 <code.inline>int *p = a</code.inline>（让指针指向数组），但不能再写 <code.inline>a = p</code.inline> 试图让数组名指向别处——这是非法的。数组名绑死了自己的首地址。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"指针与数组的关系\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"指针与数组的关系\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"指针与数组的关系\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "数组名是指向首元素的指针常量",
            "a[i] 等价于 *(a+i)，下标就是指针运算",
            "int *p = a 后 p 可遍历整个数组",
            "数组名不能重新赋值指向别处"
          ]
        }
      ],
      'templates': [
        {
          'name': "指针遍历数组",
          'code': "#include <stdio.h>\nint main() {\n    int a[] = {1, 2, 3, 4, 5};\n    int *p = a;\n    for (int i = 0; i < 5; i++) {\n        printf(\"%d \", *(p + i));\n    }\n    printf(\"\\n\");\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-31",
      'title': "指针运算（p+1、p[i]）",
      'summary': "指针加减移动的是元素个数，不是字节数，p+1 指向下一个元素。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "指针可以加减整数，但这里的『1』不是 1 个字节，而是 1 个元素。比如 <code.inline>int *p</code.inline>，p+1 指向地址增加 4 个字节（一个 int 的大小）的位置，也就是数组的下一个元素。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "p+1 指向下一个元素",
          'code': "#include <stdio.h>\nint main() {\n    int a[] = {10, 20, 30};\n    int *p = a;               // p 指向 a[0]\n\n    printf(\"*p = %d\\n\", *p);         // 10\n    printf(\"*(p+1) = %d\\n\", *(p + 1)); // 20\n    printf(\"*(p+2) = %d\\n\", *(p + 2)); // 30\n    printf(\"p[1] = %d\\n\", p[1]);       // 20，p[1] 和 *(p+1) 等价\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "注意地址本身怎么变：如果 a 的地址是 1000，那么 p+1 的值是 1004（不是 1001），p+2 是 1008。因为 int 占 4 字节，加 1 就是跨过一个 int。这就是『指针按元素计量』的含义。"
        },
        {
          'type': "h",
          'text': "自增自减遍历"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "用 p++ 遍历数组",
          'code': "#include <stdio.h>\nint main() {\n    int a[] = {5, 10, 15, 20};\n    int *p = a;\n    while (p < a + 4) {   // 指针比较：p 没超过数组末尾\n        printf(\"%d \", *p);\n        p++;              // p 指向下一个元素\n    }\n    printf(\"\\n\");\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "指针越界同样危险",
          'text': "和数组越界一样，指针加到数组范围之外再解引用，读到的是未知内存，是严重 bug。做指针运算时心里要清楚数组的边界在哪，别让指针飘出界。"
        },
        {
          'type': "info",
          'title': "指针能做的运算",
          'text': "指针能做：加减整数、两个指针相减（得到相隔几个元素）、比较大小。不能做：两个指针相加、指针乘除。这些运算没有意义，编译器也会禁止。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"指针运算（p+1、p[i]）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"指针运算（p+1、p[i]）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"指针运算（p+1、p[i]）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "p+1 指向下一个元素，实际地址按元素大小偏移",
            "p[i] 就是 *(p+i)，指针和下标自由切换",
            "p++ 可用来顺序遍历数组",
            "指针运算要守住数组边界"
          ]
        }
      ],
      'templates': [
        {
          'name': "用指针求数组和",
          'code': "#include <stdio.h>\nint main() {\n    int a[] = {1, 2, 3, 4, 5};\n    int *p = a, sum = 0;\n    for (int i = 0; i < 5; i++) {\n        sum += *(p + i);\n    }\n    printf(\"和 = %d\\n\", sum);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-32",
      'title': "指针作为函数参数（修改实参）",
      'summary': "传地址进函数，就能通过解引用修改函数外的变量。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "第 22 章说过值传递改不了实参。解决办法就是把地址传进去：函数拿到的是指针，通过 <code.inline>*p</code.inline> 解引用，就能直接修改外面那个变量的值。这是指针最重要的用途之一。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "通过指针修改实参",
          'code': "#include <stdio.h>\n\nvoid setTo100(int *p) {\n    *p = 100;   // 顺着指针找到外面的变量，改成 100\n}\n\nint main() {\n    int a = 10;\n    setTo100(&a);    // 传入 a 的地址\n    printf(\"a = %d\\n\", a);   // 100！成功修改\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "关键区别：<code.inline>setTo100(a)</code.inline> 传的是值，函数拿到拷贝改不动 a；<code.inline>setTo100(&a)</code.inline> 传的是地址，函数拿到钥匙能开门进去改 a。一个函数如果想修改多个外面的变量，这是唯一途径。"
        },
        {
          'type': "h",
          'text': "一个函数修改两个实参"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "求商和余数",
          'code': "#include <stdio.h>\n\nvoid divMod(int a, int b, int *q, int *r) {\n    *q = a / b;\n    *r = a % b;\n}\n\nint main() {\n    int q, r;\n    divMod(17, 5, &q, &r);\n    printf(\"17 / 5 商 = %d，余数 = %d\\n\", q, r);\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "忘记 & 的后果",
          'text': "调用函数传普通变量地址时，忘了写 &，比如 <code.inline>setTo100(a)</code.inline> 而函数要的是指针，编译器会报类型不匹配的警告，强行运行多半崩溃。写之前对一眼：参数是 int* 就传 &变量。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"指针作为函数参数（修改实参）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"指针作为函数参数（修改实参）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"指针作为函数参数（修改实参）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "指针作为参数 = 把地址传进函数，能修改函数外变量",
            "函数里用 *p 解引用修改实参",
            "想同时改多个变量，就传多个指针参数",
            "函数参数类型是 int* 时，调用要传 &变量"
          ]
        }
      ],
      'templates': [
        {
          'name': "拆成个位和十位",
          'code': "#include <stdio.h>\nvoid split(int n, int *ge, int *shi) {\n    *ge = n % 10;\n    *shi = (n / 10) % 10;\n}\nint main() {\n    int ge, shi;\n    split(57, &ge, &shi);\n    printf(\"个位 %d，十位 %d\\n\", ge, shi);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-33",
      'title': "指针数组与数组指针",
      'summary': "int *p[5] 是存了 5 个指针的数组，int (*p)[5] 是指向数组的指针。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "这两个名字像绕口令，其实拆开看就好：**指针数组**是『装着指针的数组』，**数组指针**是『指向数组的指针』。它们的声明只差一对括号，但含义天差地别。"
        },
        {
          'type': "h",
          'text': "指针数组：int *p[5]"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "指针数组（存 5 个 int 指针）",
          'code': "#include <stdio.h>\nint main() {\n    int a = 1, b = 2, c = 3;\n    int *p[3];          // 一个能存 3 个 int 指针的数组\n    p[0] = &a;\n    p[1] = &b;\n    p[2] = &c;\n    for (int i = 0; i < 3; i++) {\n        printf(\"%d \", *p[i]);   // 取每个指针指向的值\n    }\n    printf(\"\\n\");\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "数组指针：int (*p)[5]"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "指向数组的指针",
          'code': "#include <stdio.h>\nint main() {\n    int a[5] = {1, 2, 3, 4, 5};\n    int (*p)[5];        // p 指向\"一个有 5 个 int 的数组\"\n    p = &a;             // 取整个数组的地址\n\n    // 解引用 *p 得到整个数组，(*p)[2] 就是 a[2]\n    printf(\"(*p)[2] = %d\\n\", (*p)[2]);   // 3\n    return 0;\n}"
        },
        {
          'type': "list",
          'items': [
            "<code.inline>int *p[5]</code.inline>：[] 优先级高于 *，所以 p 先是数组，元素是指针 → 指针数组",
            "<code.inline>int (*p)[5]</code.inline>：括号让 * 先结合，p 先是指针，指向的是一整个数组 → 数组指针",
            "<code.inline>p = &a</code.inline> 后，p+1 会跳过整个数组（5 个 int）"
          ]
        },
        {
          'type': "info",
          'title': "二维数组的访问",
          'text': "二维数组的每一行本质是一个一维数组，所以行指针（指向一维数组的指针）非常适合处理二维数组。以后写矩阵、成绩表的函数时，常常用数组指针作为参数。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"指针数组与数组指针\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"指针数组与数组指针\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"指针数组与数组指针\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "int *p[5] 是指针数组：装着 5 个指针的数组",
            "int (*p)[5] 是数组指针：指向一个含 5 个 int 的数组",
            "括号位置决定含义：* 先结合是指针，[] 先结合是数组",
            "数组指针 p+1 跳过整个数组"
          ]
        }
      ],
      'templates': []
    },
    {
      'id': "cl-34",
      'title': "多级指针（指向指针的指针）",
      'summary': "int **pp 存的是指针变量的地址，间接改指针本身。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "指针变量也是变量，它也有自己的地址。存『指针变量的地址』的指针，叫二级指针，写作 <code.inline>int **pp</code.inline>。两个星号就是两层：pp 指向 p，p 指向 a。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "二级指针基本操作",
          'code': "#include <stdio.h>\nint main() {\n    int a = 10;\n    int *p = &a;      // p 指向 a\n    int **pp = &p;    // pp 指向 p\n\n    printf(\"a = %d\\n\", a);\n    printf(\"*p = %d\\n\", *p);          // 10，解一层得 a\n    printf(\"**pp = %d\\n\", **pp);      // 10，解两层得 a\n\n    **pp = 99;        // 通过两层指针改 a\n    printf(\"改后 a = %d\\n\", a);       // 99\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "理解链条：pp 存的是 p 的地址 → 解引用一次得到 p（一个指针）→ 再解引用得到 a（一个 int）。所以 **pp 就是 a。"
        },
        {
          'type': "h",
          'text': "为什么需要二级指针"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "在函数里修改指针本身",
          'code': "#include <stdio.h>\n#include <stdlib.h>\n\nvoid create(int **pp) {\n    *pp = (int*)malloc(sizeof(int));  // 让外面的指针指向新内存\n    **pp = 42;\n}\n\nint main() {\n    int *p = NULL;\n    create(&p);       // 传指针的地址\n    printf(\"*p = %d\\n\", *p);   // 42，指针 p 被函数改好了\n    free(p);\n    return 0;\n}"
        },
        {
          'type': "info",
          'title': "什么场景用二级指针",
          'text': "常见场景：函数里需要重新分配指针指向（比如链表头指针、动态内存初始化）、main 函数的参数 <code.inline>char *argv[]</code> 相关、二维字符串数组的处理。先用懂概念，用到时自然明白。"
        },
        {
          'type': "warn",
          'title': "别过度使用",
          'text': "三级四级指针虽然合法，但代码可读性极差，几乎没人这么写。一般到二级就够了。看到 ** 就按『两层跳转』理解。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"多级指针（指向指针的指针）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"多级指针（指向指针的指针）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"多级指针（指向指针的指针）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "二级指针 int **pp 存的是指针变量的地址",
            "**pp 解两层得到最终的值",
            "想要函数修改指针本身，就传指针的地址（二级指针）",
            "多级指针可读性差，一般只用两级"
          ]
        }
      ],
      'templates': []
    },
    {
      'id': "cl-35",
      'title': "const 与指针",
      'summary': "const int *p 指向的值不能改，int *const p 指针本身不能改。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "const 用在指针上有两种完全不同的含义，取决于 const 放在星号的哪一边。记住一句话：**const 修饰谁，谁就不能改**。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "两种 const 指针对比",
          'code': "#include <stdio.h>\nint main() {\n    int a = 10, b = 20;\n\n    const int *p1 = &a;   // const 在 * 左边：指向的值不能改\n    // *p1 = 99;          // 错误！不能通过 p1 改 a 的值\n    p1 = &b;              // 但 p1 可以指向别处\n\n    int *const p2 = &a;   // const 在 * 右边：指针本身不能改\n    *p2 = 99;             // 可以通过 p2 改 a 的值\n    // p2 = &b;           // 错误！p2 不能改指向\n\n    printf(\"a = %d\\n\", a);\n    return 0;\n}"
        },
        {
          'type': "table",
          'head': [
            "写法",
            "可改指向",
            "可改指向的值",
            "含义"
          ],
          'rows': [
            [
              "const int *p",
              "可以",
              "不可以",
              "指向常量的指针"
            ],
            [
              "int *const p",
              "不可以",
              "可以",
              "常量指针（本身不可变）"
            ],
            [
              "const int *const p",
              "不可以",
              "不可以",
              "两者都不可变"
            ]
          ]
        },
        {
          'type': "h",
          'text': "函数参数里的 const 指针"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "只读参数用 const",
          'code': "#include <stdio.h>\n\n// const 声明：这个函数只读数组，不会改它\nint sumArray(const int *a, int n) {\n    int sum = 0;\n    for (int i = 0; i < n; i++) sum += a[i];\n    return sum;\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4};\n    printf(\"和 = %d\\n\", sumArray(arr, 4));\n    return 0;\n}"
        },
        {
          'type': "info",
          'title': "实战建议",
          'text': "函数参数如果只是『读』数据、不打算修改，就加 const，比如 const char *s。这既是给调用者的承诺，也防止自己手滑改坏数据。好的 API 设计都这么做。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"const 与指针\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"const 与指针\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"const 与指针\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "const 修饰谁，谁就不能改",
            "const int *p：指向的值不能改，指向可变",
            "int *const p：指向不能改，指向的值可变",
            "只读参数加 const，是良好工程习惯"
          ]
        }
      ],
      'templates': [
        {
          'name': "const 只读遍历",
          'code': "#include <stdio.h>\nvoid printArr(const int *a, int n) {\n    for (int i = 0; i < n; i++) printf(\"%d \", a[i]);\n    printf(\"\\n\");\n}\nint main() {\n    int a[] = {7, 8, 9};\n    printArr(a, 3);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-36",
      'title': "函数指针",
      'summary': "函数也有地址，用指针指向函数，实现回调与灵活调度。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "函数编译后也存放在内存里，有起始地址。既然有地址，就能用指针指向它——这就是函数指针。它的用途很高级：把函数当参数传来传去（回调），实现插件化的设计。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "函数指针基本用法",
          'code': "#include <stdio.h>\n\nint add(int a, int b) { return a + b; }\nint sub(int a, int b) { return a - b; }\n\nint main() {\n    int (*fp)(int, int);   // 声明一个函数指针\n    fp = add;              // 让 fp 指向 add 函数\n    printf(\"fp 调用 add：%d\\n\", fp(10, 5));   // 15\n\n    fp = sub;              // 改指向 sub\n    printf(\"fp 调用 sub：%d\\n\", fp(10, 5));   // 5\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "把函数作为参数传递（回调）"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "通用计算函数",
          'code': "#include <stdio.h>\n\nint add(int a, int b) { return a + b; }\nint mul(int a, int b) { return a * b; }\n\n// 参数 int (*op)(int,int) 表示接收一个函数指针\nint calc(int a, int b, int (*op)(int, int)) {\n    return op(a, b);\n}\n\nint main() {\n    printf(\"10 + 5 = %d\\n\", calc(10, 5, add));\n    printf(\"10 * 5 = %d\\n\", calc(10, 5, mul));\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>calc(10, 5, add)</code.inline> 把 add 函数本身当作参数传进去，calc 内部调用它。调用者决定用哪个函数，被调方不用知道具体逻辑——这就是『回调』思想。C 标准库的 <code.inline>qsort</code.inline> 排序函数就靠函数指针让用户自定义比较规则。"
        },
        {
          'type': "info",
          'title': "qsort 里的函数指针",
          'text': "qsort 的最后一个参数是比较函数指针：<code.inline>qsort(arr, n, sizeof(int), cmp)</code.inline>，其中 cmp 是你写的 <code.inline>int cmp(const void *a, const void *b)</code.inline>。这就是函数指针最经典的应用。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"函数指针\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"函数指针\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"函数指针\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "函数名就是函数的地址，可以赋给函数指针",
            "声明格式：返回类型 (*指针名)(参数列表)",
            "函数指针能实现回调：把函数当参数传",
            "qsort 等标准库靠函数指针让用户自定义规则"
          ]
        }
      ],
      'templates': [
        {
          'name': "函数指针计算器",
          'code': "#include <stdio.h>\nint add(int a,int b){return a+b;}\nint sub(int a,int b){return a-b;}\nint calc(int a,int b,int (*f)(int,int)){return f(a,b);}\nint main() {\n    printf(\"加=%d 减=%d\\n\", calc(8,3,add), calc(8,3,sub));\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-37",
      'title': "经典：swap 交换两个数的值",
      'summary': "不用指针的 swap 是假的，用指针才能真交换，面试必考。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "交换两个变量的值是面试经典题，也是检验你懂不懂『值传递 vs 传地址』的试金石。先看错误写法，再看正确写法，一次看明白。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "错误写法：值传递改不了",
          'code': "#include <stdio.h>\n\nvoid swap_wrong(int x, int y) {\n    int t = x;\n    x = y;\n    y = t;      // 换的是拷贝，外面没变\n}\n\nint main() {\n    int a = 3, b = 5;\n    swap_wrong(a, b);\n    printf(\"a=%d b=%d（没交换成功！）\\n\", a, b);\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "正确写法：传地址，解引用交换"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "正确的 swap",
          'code': "#include <stdio.h>\n\nvoid swap(int *px, int *py) {\n    int t = *px;   // t 先存 px 指向的值\n    *px = *py;     // 把 py 的值写进 px 指向的位置\n    *py = t;       // 把 t 写进 py 指向的位置\n}\n\nint main() {\n    int a = 3, b = 5;\n    swap(&a, &b);\n    printf(\"a=%d b=%d（交换成功！）\\n\", a, b);\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "错误版本里 swap 操作的是 x、y 这两个拷贝；正确版本里 swap 拿到的是 a、b 的地址，通过 *px、*py 直接操作 a、b 本体。口诀：**要改实参，就传地址**。"
        },
        {
          'type': "warn",
          'title': "中间变量不能省",
          'text': "交换必须用第三个临时变量：t 存一个，再互相覆盖，最后补回。有人会耍小聪明写 <code.inline>a=a+b; b=a-b; a=a-b;</code.inline>，但整数可能溢出，而且没有 t 版本清晰。老老实实三步走最稳。"
        },
        {
          'type': "info",
          'title': "排序的基石",
          'text': "冒泡排序、选择排序等所有交换类排序，内部都靠这个 swap。把它背熟写熟，后面排序算法直接复用。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"经典：swap 交换两个数的值\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"经典：swap 交换两个数的值\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"经典：swap 交换两个数的值\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "值传递的 swap 是假的，交换不了实参",
            "正确写法：swap(int *px, int *py)，调用 swap(&a, &b)",
            "交换用中间变量三步走：存、覆盖、补回",
            "swap 是所有交换类排序的基石"
          ]
        }
      ],
      'templates': [
        {
          'name': "标准 swap 模板",
          'code': "#include <stdio.h>\nvoid swap(int *a, int *b) {\n    int t = *a;\n    *a = *b;\n    *b = t;\n}\nint main() {\n    int x = 1, y = 2;\n    swap(&x, &y);\n    printf(\"x=%d y=%d\\n\", x, y);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-38",
      'title': "指针与字符串处理",
      'summary': "字符串字面量是只读的，用指针遍历、拼接、找字符都能做。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "字符串就是字符数组，而数组名就是指针，所以指针是处理字符串的利器。用指针遍历字符串、统计、找字符、拼接，代码往往比下标版更简洁。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "用指针遍历字符串",
          'code': "#include <stdio.h>\nint main() {\n    char s[] = \"hello\";\n    char *p = s;\n    while (*p != '\\0') {   // 还没到结尾\n        printf(\"%c \", *p);\n        p++;\n    }\n    printf(\"\\n\");\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "自己实现字符串长度"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "my_strlen",
          'code': "#include <stdio.h>\n\nint my_strlen(const char *s) {\n    int len = 0;\n    while (*s != '\\0') {\n        len++;\n        s++;   // 指针往后移\n    }\n    return len;\n}\n\nint main() {\n    printf(\"%d\\n\", my_strlen(\"hello world\"));  // 11\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "两种字符串别搞混",
          'text': "<code.inline>char s[] = \"hello\"</code.inline> 是字符数组，可以修改；<code.inline>char *p = \"hello\"</code.inline> 是指向字符串字面量的指针，这个字面量通常放在只读区，<code.inline>p[0] = 'H'</code.inline> 会崩溃。**字符串字面量是只读的**，需要可修改的字符串就用字符数组。"
        },
        {
          'type': "info",
          'title': "const char * 的意义",
          'text': "标准库的字符串处理函数参数几乎都是 <code.inline>const char *</code.inline>，意思是『我只读这个字符串，不改它』。这既是保护数据，也让函数能同时接收数组和字面量。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"指针与字符串处理\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"指针与字符串处理\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"指针与字符串处理\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "用指针遍历字符串：while (*p != '\\0') p++",
            "字符串字面量只读，可修改要用字符数组",
            "函数参数用 const char * 表示只读",
            "自己实现 strlen 就是指针遍历计数"
          ]
        }
      ],
      'templates': [
        {
          'name': "指针版字符串转大写",
          'code': "#include <stdio.h>\nvoid toUpper(char *s) {\n    while (*s) {\n        if (*s >= 'a' && *s <= 'z') *s -= 32;\n        s++;\n    }\n}\nint main() {\n    char s[] = \"hello\";\n    toUpper(s);\n    printf(\"%s\\n\", s);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-39",
      'title': "空指针 NULL 与野指针",
      'summary': "NULL 表示指针没指向任何东西，野指针指向未知内存是灾难。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "指针一旦没指向合法内存，就是隐患。C 语言里有两种危险状态你必须分清：<code.inline>NULL</code.inline>（空指针，代表『哪儿都不指』）和野指针（指向了随机/已释放的内存，完全失控）。"
        },
        {
          'type': "h",
          'text': "NULL 空指针"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "空指针的判断与保护",
          'code': "#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *p = NULL;      // 初始化成空指针\n\n    // 用之前先判空，安全\n    if (p != NULL) {\n        printf(\"*p = %d\\n\", *p);\n    } else {\n        printf(\"p 是空指针，不能解引用\\n\");\n    }\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "野指针是怎么来的"
        },
        {
          'type': "list",
          'items': [
            "指针声明后没初始化：里面是垃圾地址，指向未知",
            "指针指向的局部变量函数结束后已销毁（栈内存失效）",
            "指针指向的内存已被 free 释放，但没有置 NULL",
            "对已释放的指针继续使用，就是经典的 use-after-free"
          ]
        },
        {
          'type': "code",
          'lang': "c",
          'title': "野指针示例（危险）",
          'code': "#include <stdio.h>\n\nint *bad() {\n    int x = 10;\n    return &x;   // 危险！x 是局部变量，函数结束就没了\n}\n\nint main() {\n    int *p = bad();   // p 指向一块已失效的内存\n    // printf(\"%d\\n\", *p);   // 未定义行为，可能崩溃\n\n    int *q;           // 没初始化，也是野指针\n    // *q = 5;        // 写未知内存，危险\n    printf(\"千万别解引用野指针\\n\");\n    return 0;\n}"
        },
        {
          'type': "danger",
          'title': "野指针的三大铁律",
          'text': "1. 声明指针时就初始化，拿不到地址就给 NULL。2. 指针指向的变量销毁前，别让指针活着指向它。3. free 之后立刻把指针置为 NULL，防止 use-after-free。"
        },
        {
          'type': "tip",
          'title': "养成判空习惯",
          'text': "malloc 返回 NULL（内存不足）、链表头可能是 NULL、字符串可能为空……对可能为空的指针先判空再使用，能让你的程序稳健很多。这也是企业代码审查的重点。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"空指针 NULL 与野指针\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"空指针 NULL 与野指针\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"空指针 NULL 与野指针\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "NULL 表示指针哪儿都不指，解引用会崩溃",
            "野指针指向未知/已释放内存，是严重 bug 来源",
            "声明指针要初始化，free 后要置 NULL",
            "用可能为空的指针前先判空"
          ]
        }
      ],
      'templates': [
        {
          'name': "安全判空模式",
          'code': "#include <stdio.h>\nint main() {\n    int *p = NULL;\n    if (p) {\n        printf(\"p 非空\\n\");\n    } else {\n        printf(\"p 为空指针，已保护\\n\");\n    }\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-40",
      'title': "动态内存分配 malloc 与 free",
      'summary': "运行时按需申请内存 malloc，用完必须 free 归还，绝不忘。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "之前数组大小写死，要么浪费要么不够。C 语言允许程序在运行时向系统申请内存，这就是动态内存分配。核心两个函数：<code.inline>malloc</code.inline> 申请、<code.inline>free</code.inline> 释放。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "malloc 动态创建数组",
          'code': "#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n;\n    printf(\"请输入数组大小：\");\n    scanf(\"%d\", &n);\n\n    int *arr = (int*)malloc(n * sizeof(int));  // 申请 n 个 int 的空间\n    if (arr == NULL) {          // 申请失败要处理\n        printf(\"内存申请失败\\n\");\n        return 1;\n    }\n\n    for (int i = 0; i < n; i++) {\n        arr[i] = i * 2;\n    }\n    for (int i = 0; i < n; i++) {\n        printf(\"%d \", arr[i]);\n    }\n    printf(\"\\n\");\n\n    free(arr);   // 用完必须释放！\n    return 0;\n}"
        },
        {
          'type': "list",
          'items': [
            "<code.inline>malloc(字节数)</code.inline> 返回 void*，一般用 (int*) 转成需要类型",
            "字节数 = 个数 × 单个大小，写 <code.inline>n * sizeof(int)</code.inline> 最规范",
            "<code.inline>free(指针)</code.inline> 释放内存，只能 free malloc 得到的指针",
            "需要 <code.inline>#include &lt;stdlib.h&gt;</code.inline>"
          ]
        },
        {
          'type': "warn",
          'title': "malloc 后必须判空",
          'text': "内存不够时 malloc 返回 NULL。不判空直接使用，程序会崩溃。判空两行代码，能避免无数崩溃。"
        },
        {
          'type': "danger",
          'title': "free 的规矩",
          'text': "1. malloc 和 free 必须成对，只 malloc 不 free 会内存泄漏。2. free 只能释放 malloc 返回的指针，不能 free 局部数组。3. free 之后该指针变野指针，立即置 NULL。4. 不能重复 free 同一个指针。"
        },
        {
          'type': "info",
          'title': "为什么需要动态内存",
          'text': "数组大小运行时才确定、需要保存可变长度的数据、结构体链表等复杂数据结构——这些场景都必须靠动态内存。它是 C 语言强大和危险并存的核心能力。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"动态内存分配 malloc 与 free\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"动态内存分配 malloc 与 free\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"动态内存分配 malloc 与 free\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "malloc 按字节申请内存，返回 void*，需类型转换",
            "申请后必须判空，防止返回 NULL",
            "free 释放内存，malloc/free 成对出现",
            "free 后指针立即置 NULL，防止 use-after-free",
            "include <stdlib.h> 才能用 malloc/free"
          ]
        }
      ],
      'templates': [
        {
          'name': "动态数组模板",
          'code': "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int *p = (int*)malloc(5 * sizeof(int));\n    if (p == NULL) return 1;\n    for (int i = 0; i < 5; i++) p[i] = i + 1;\n    for (int i = 0; i < 5; i++) printf(\"%d \", p[i]);\n    printf(\"\\n\");\n    free(p);\n    p = NULL;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-41",
      'title': "calloc 与 realloc",
      'summary': "calloc 清零申请、realloc 扩容缩容，动态内存三兄弟齐了。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "malloc 之外，标准库还提供两个动态内存函数：<code.inline>calloc</code.inline>（申请并清零）和 <code.inline>realloc</code.inline>（调整已申请内存的大小）。三兄弟配合，动态内存管理就完整了。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "calloc：申请并清零",
          'code': "#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    // calloc(个数, 单个大小)：申请并自动清零\n    int *arr = (int*)calloc(5, sizeof(int));\n    if (arr == NULL) return 1;\n\n    for (int i = 0; i < 5; i++) {\n        printf(\"%d \", arr[i]);   // 全是 0，calloc 自动清零\n    }\n    printf(\"\\n\");\n\n    free(arr);\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "calloc 的参数是『个数, 单个大小』两个，而 malloc 是总字节数。两者的最大区别：calloc 会把内存全部初始化为 0，malloc 不清零（保留垃圾值）。如果你需要全零初始化的数组，calloc 更省事。"
        },
        {
          'type': "h",
          'text': "realloc：动态扩容"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "realloc 扩容数组",
          'code': "#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *arr = (int*)malloc(3 * sizeof(int));\n    if (arr == NULL) return 1;\n    for (int i = 0; i < 3; i++) arr[i] = i + 1;\n\n    // 想扩容到 6 个：realloc(原指针, 新字节数)\n    int *newArr = (int*)realloc(arr, 6 * sizeof(int));\n    if (newArr == NULL) {   // 失败时原内存还在，先不 free\n        printf(\"扩容失败\\n\");\n        free(arr);\n        return 1;\n    }\n    arr = newArr;           // 成功后把新指针赋回来\n    for (int i = 3; i < 6; i++) arr[i] = i + 1;\n    for (int i = 0; i < 6; i++) printf(\"%d \", arr[i]);\n    printf(\"\\n\");\n\n    free(arr);\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "realloc 必须用返回值",
          'text': "realloc 可能把内存搬到新位置，原来的指针就失效了。所以**必须用它的返回值**，绝不能写 <code.inline>realloc(p, ...)</code.inline> 而不接返回值。而且失败时返回 NULL，原内存没动，所以先用临时变量接住再赋回。"
        },
        {
          'type': "info",
          'title': "怎么选",
          'text': "需要清零用 calloc；申请后马上全赋值用 malloc（快一点）；大小会变用 realloc。三个都要配 free，都要判空。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"calloc 与 realloc\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"calloc 与 realloc\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"calloc 与 realloc\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "calloc(个数, 大小) 申请并自动清零",
            "realloc(p, 新字节数) 调整大小，必须用返回值接住",
            "realloc 失败返回 NULL，原内存不受影响",
            "动态内存三兄弟 malloc/calloc/realloc，都要配 free 并判空"
          ]
        }
      ],
      'templates': [
        {
          'name': "calloc 清零数组",
          'code': "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int *a = (int*)calloc(4, sizeof(int));\n    if (!a) return 1;\n    for (int i = 0; i < 4; i++) printf(\"%d \", a[i]);\n    printf(\"\\n\");\n    free(a);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-42",
      'title': "内存泄漏与常见内存错误",
      'summary': "内存泄漏、双重释放、越界、use-after-free，四大内存灾难全解析。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "C 语言的内存是开发者自己管的，管不好就是各种诡异崩溃和卡顿。这一章把最常见的四大内存错误讲透，每一条都是血泪教训。"
        },
        {
          'type': "h",
          'text': "内存泄漏：只借不还"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "内存泄漏示例",
          'code': "#include <stdlib.h>\n#include <stdio.h>\n\nvoid leak() {\n    int *p = (int*)malloc(100 * sizeof(int));\n    // 忘了 free(p)！每次调用泄漏 400 字节\n    p[0] = 1;\n}\n\nint main() {\n    for (int i = 0; i < 100000; i++) {\n        leak();   // 循环调用，内存一点点被偷走\n    }\n    printf(\"泄漏了约 %d MB 内存\\n\", 100000 * 400 / 1024 / 1024);\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "内存泄漏就是 malloc 了却从没 free。短时间看不出问题，但长时间运行的服务器、游戏，内存会越占越多，最后把系统拖垮。**malloc/calloc/realloc 和 free 必须成对**。"
        },
        {
          'type': "list",
          'items': [
            "双重释放：同一个指针 free 两次，第二次释放的是别人的内存，崩溃",
            "use-after-free：free 之后还去用那个指针，读到的是已归还的内存，值不可预测",
            "越界读写：写超过 malloc 分配的范围，破坏堆内存元数据",
            "返回局部变量地址：函数返回指向栈局部变量的指针，函数结束地址失效"
          ]
        },
        {
          'type': "code",
          'lang': "c",
          'title': "双重释放与 use-after-free",
          'code': "#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *p = (int*)malloc(sizeof(int));\n    if (p == NULL) return 1;\n    *p = 10;\n\n    free(p);\n    // free(p);      // 双重释放！危险\n    // *p = 20;      // use-after-free！p 已失效\n\n    p = NULL;         // 释放后立刻置空，杜绝上面两种错误\n    printf(\"已安全释放\\n\");\n    return 0;\n}"
        },
        {
          'type': "danger",
          'title': "内存错误的铁律",
          'text': "1. 每次 malloc 后判空。2. 每次 free 后置 NULL。3. 不 free 别人的指针、不重复 free。4. 越界前先想清楚边界。5. 不在函数里返回局部变量的地址。"
        },
        {
          'type': "tip",
          'title': "怎么检测内存问题",
          'text': "Linux 用 <code.inline>valgrind</code.inline>（最著名的内存检测工具）能精确报告哪一行泄漏了多少内存。Windows 下可以装 AddressSanitizer（-fsanitize=address 编译选项）。调试时多用这些工具，比肉眼找快得多。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"内存泄漏与常见内存错误\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"内存泄漏与常见内存错误\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"内存泄漏与常见内存错误\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "内存泄漏 = malloc 了不 free，长时间运行内存暴涨",
            "双重释放、use-after-free、越界都是致命内存错误",
            "free 后立即置 NULL 是最简单的自保手段",
            "malloc/free 成对、判空、清边界，是内存安全基本功",
            "用 valgrind / AddressSanitizer 检测内存问题"
          ]
        }
      ],
      'templates': [
        {
          'name': "安全释放模板",
          'code': "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int *p = (int*)malloc(sizeof(int));\n    if (p == NULL) return 1;\n    *p = 42;\n    printf(\"%d\\n\", *p);\n    free(p);\n    p = NULL;   // 释放后置空\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-43",
      'title': "结构体定义与使用",
      'summary': "用 struct 把不同类型的数据打包成一个整体，自定义数据类型。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "一个学生有姓名、年龄、成绩，类型各不相同，放不进同一个数组。结构体（struct）就是为此而生：它把不同类型的数据打包成一个『新类型』，从此可以定义这个类型的变量。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "定义并使用结构体",
          'code': "#include <stdio.h>\n#include <string.h>\n\n// 定义结构体类型：一个学生的信息\nstruct Student {\n    char name[20];\n    int age;\n    double score;\n};\n\nint main() {\n    struct Student s1;          // 定义结构体变量\n    strcpy(s1.name, \"小明\");\n    s1.age = 12;\n    s1.score = 92.5;\n\n    struct Student s2 = {\"小红\", 11, 88.0};   // 也可以初始化\n\n    printf(\"姓名：%s，年龄：%d，成绩：%.1f\\n\", s1.name, s1.age, s1.score);\n    printf(\"姓名：%s，年龄：%d，成绩：%.1f\\n\", s2.name, s2.age, s2.score);\n    return 0;\n}"
        },
        {
          'type': "list",
          'items': [
            "<code.inline>struct Student { ... };</code.inline>：定义结构体类型，注意分号结尾",
            "结构体里的每个数据叫**成员**，如 name、age、score",
            "访问成员用点号：<code.inline>s1.name</code.inline>",
            "定义变量要写 <code.inline>struct Student s1</code.inline>（第 48 章 typedef 可以简化）"
          ]
        },
        {
          'type': "code",
          'lang': "c",
          'title': "结构体数组与整体赋值",
          'code': "#include <stdio.h>\n\nstruct Point { int x, y; };\n\nint main() {\n    struct Point p1 = {3, 5};\n    struct Point p2 = p1;       // 结构体可以直接整体拷贝\n    p2.x = 100;\n\n    printf(\"p1: (%d, %d)\\n\", p1.x, p1.y);\n    printf(\"p2: (%d, %d)\\n\", p2.x, p2.y);   // 改 p2 不影响 p1\n    return 0;\n}"
        },
        {
          'type': "info",
          'title': "结构体的内存大小",
          'text': "结构体占用内存 ≈ 各成员大小之和，但可能会有『对齐』：编译器为了让访问更快，可能在某些成员后面留空字节。可以用 <code.inline>sizeof(struct Student)</code.inline> 查看实际大小。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"结构体定义与使用\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"结构体定义与使用\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"结构体定义与使用\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "struct 把不同类型的数据打包成自定义类型",
            "访问成员用点号 .，如 s1.name",
            "结构体可以整体初始化、整体拷贝赋值",
            "struct 定义以分号结尾，定义变量要写 struct 关键字"
          ]
        }
      ],
      'templates': [
        {
          'name': "矩形结构体",
          'code': "#include <stdio.h>\nstruct Rect { int w, h; };\nint main() {\n    struct Rect r = {10, 5};\n    printf(\"面积 = %d\\n\", r.w * r.h);\n    printf(\"周长 = %d\\n\", 2 * (r.w + r.h));\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-44",
      'title': "结构体数组",
      'summary': "用数组装多个结构体，存一个班级的完整信息。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "一个学生是一个结构体，一个班级的很多学生就是结构体数组。声明方式和普通数组一样：<code.inline>struct Student arr[30]</code.inline>，然后用下标访问每个学生。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "结构体数组的使用",
          'code': "#include <stdio.h>\n#include <string.h>\n\nstruct Student {\n    char name[20];\n    int age;\n    double score;\n};\n\nint main() {\n    struct Student cls[3];\n    strcpy(cls[0].name, \"小明\"); cls[0].age = 12; cls[0].score = 92;\n    strcpy(cls[1].name, \"小红\"); cls[1].age = 11; cls[1].score = 88;\n    strcpy(cls[2].name, \"小刚\"); cls[2].age = 12; cls[2].score = 95;\n\n    // 遍历：找最高分\n    double max = 0;\n    int maxIdx = 0;\n    for (int i = 0; i < 3; i++) {\n        if (cls[i].score > max) { max = cls[i].score; maxIdx = i; }\n    }\n    printf(\"最高分：%s，%.1f 分\\n\", cls[maxIdx].name, cls[maxIdx].score);\n\n    // 求平均分\n    double sum = 0;\n    for (int i = 0; i < 3; i++) sum += cls[i].score;\n    printf(\"全班平均分 = %.1f\\n\", sum / 3);\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "结构体数组完全遵循数组的规则：下标从 0 开始，用循环遍历。访问某一项要写两层：<code.inline>cls[i].name</code.inline>，先定位到第 i 个学生，再取这个学生的 name 成员。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "直接初始化结构体数组",
          'code': "#include <stdio.h>\n\nstruct Student { char name[20]; int age; double score; };\n\nint main() {\n    struct Student cls[3] = {\n        {\"小明\", 12, 92},\n        {\"小红\", 11, 88},\n        {\"小刚\", 12, 95}\n    };\n    for (int i = 0; i < 3; i++) {\n        printf(\"%s  %d岁  %.1f分\\n\", cls[i].name, cls[i].age, cls[i].score);\n    }\n    return 0;\n}"
        },
        {
          'type': "info",
          'title': "实战中的威力",
          'text': "后面第 71 章的学生成绩管理系统、72 章通讯录，本质都是结构体数组 + 各种操作函数。把这一章吃透，实战项目就水到渠成。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"结构体数组\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"结构体数组\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"结构体数组\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "结构体数组 = 多个结构体组成的数组，格式 struct Student arr[N]",
            "访问第 i 个的第 j 个成员：arr[i].j",
            "用循环遍历结构体数组做统计、查找、排序",
            "结构体数组可整体初始化，一个学生一行"
          ]
        }
      ],
      'templates': [
        {
          'name': "结构体数组遍历",
          'code': "#include <stdio.h>\nstruct Stu { char name[20]; int age; };\nint main() {\n    struct Stu s[2] = {{\"A\", 10}, {\"B\", 11}};\n    for (int i = 0; i < 2; i++) {\n        printf(\"%s %d\\n\", s[i].name, s[i].age);\n    }\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-45",
      'title': "结构体指针与 -> 运算符",
      'summary': "用指针操作结构体，用 -> 代替 (*p).，链表的基础。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "结构体也可以有指针：<code.inline>struct Student *p</code.inline> 指向一个结构体变量。通过指针访问成员，正常写法是 <code.inline>(*p).name</code.inline>，但每次都写括号太麻烦，C 提供了简写 <code.inline>p-&gt;name</code.inline>。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "结构体指针基础",
          'code': "#include <stdio.h>\n#include <string.h>\n\nstruct Student {\n    char name[20];\n    int age;\n};\n\nint main() {\n    struct Student s = {\"小明\", 12};\n    struct Student *p = &s;    // 指针指向结构体\n\n    // 两种写法等价：(*p).name 和 p->name\n    printf(\"姓名：%s\\n\", (*p).name);\n    printf(\"年龄：%d\\n\", p->age);   // p->age 是标准写法\n\n    p->age = 13;   // 通过指针修改成员\n    printf(\"改后年龄：%d\\n\", s.age);  // 13\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "动态分配结构体"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "malloc 一个结构体",
          'code': "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nstruct Student {\n    char name[20];\n    int age;\n};\n\nint main() {\n    struct Student *p = (struct Student*)malloc(sizeof(struct Student));\n    if (p == NULL) return 1;\n\n    strcpy(p->name, \"小红\");\n    p->age = 11;\n    printf(\"%s %d\\n\", p->name, p->age);\n\n    free(p);\n    p = NULL;\n    return 0;\n}"
        },
        {
          'type': "info",
          'title': "为什么用结构体指针",
          'text': "1. 函数传结构体指针，不用拷贝整个结构体，省内存、快。2. 动态创建结构体（malloc）得到的就是指针。3. 链表等数据结构全靠结构体指针串起来。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"结构体指针与 -> 运算符\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"结构体指针与 -> 运算符\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"结构体指针与 -> 运算符\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "结构体指针用 -> 访问成员：p->name 等价于 (*p).name",
            "malloc 动态创建结构体后返回指针，用完 free",
            "传结构体指针比传整个结构体更省内存",
            "-> 是链表等数据结构的基础语法"
          ]
        }
      ],
      'templates': [
        {
          'name': "结构体指针操作",
          'code': "#include <stdio.h>\nstruct Stu { char name[20]; int age; };\nint main() {\n    struct Stu s = {\"小刚\", 12};\n    struct Stu *p = &s;\n    p->age = 13;\n    printf(\"%s %d\\n\", p->name, p->age);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-46",
      'title': "结构体嵌套",
      'summary': "结构体里再装结构体，用点号一层层访问到底。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "结构体的成员本身也可以是结构体，这叫嵌套。比如一个学生有姓名，还有生日（生日又是年月日结构体），还有地址（省市区）。嵌套让数据组织更自然。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "结构体嵌套示例",
          'code': "#include <stdio.h>\n\nstruct Date {\n    int year, month, day;\n};\n\nstruct Student {\n    char name[20];\n    struct Date birthday;   // 成员是结构体\n    int age;\n};\n\nint main() {\n    struct Student s = {\"小明\", {2010, 5, 20}, 12};\n\n    // 一层层点下去访问\n    printf(\"姓名：%s\\n\", s.name);\n    printf(\"生日：%d 年 %d 月 %d 日\\n\", s.birthday.year, s.birthday.month, s.birthday.day);\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "嵌套结构体 + 指针"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "通过指针访问嵌套成员",
          'code': "#include <stdio.h>\n\nstruct Date { int y, m, d; };\nstruct Student { char name[20]; struct Date bd; };\n\nint main() {\n    struct Student s = {\"小红\", {2011, 3, 8}};\n    struct Student *p = &s;\n\n    // p->bd.y 表示：p 指向的结构体的 bd 成员的 y 字段\n    printf(\"%s 的生日：%d/%d/%d\\n\", p->name, p->bd.y, p->bd.m, p->bd.d);\n    return 0;\n}"
        },
        {
          'type': "info",
          'title': "嵌套可以多深",
          'text': "理论上可以无限嵌套，但一般到两层就够了。嵌套结构体在使用时就是连续用点号或箭头，一层一层往下点，逻辑很清楚。数组和结构体还可以互相嵌套（结构体里放数组、数组里放结构体），组合千变万化。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"结构体嵌套\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"结构体嵌套\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"结构体嵌套\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "结构体成员可以是另一个结构体，叫嵌套",
            "访问嵌套成员就是连续用点号：s.birthday.year",
            "指针访问嵌套成员用连续箭头：p->bd.y",
            "结构体里也能放数组，数组里也能放结构体"
          ]
        }
      ],
      'templates': [
        {
          'name': "日期结构体嵌套",
          'code': "#include <stdio.h>\nstruct Date { int y, m, d; };\nstruct Stu { char name[20]; struct Date bd; };\nint main() {\n    struct Stu s = {\"小明\", {2010, 5, 20}};\n    printf(\"%s: %d-%d-%d\\n\", s.name, s.bd.y, s.bd.m, s.bd.d);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-47",
      'title': "结构体作为函数参数",
      'summary': "传整个结构体是拷贝，传指针省内存又能修改原数据。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "结构体可以整个传给函数，但有两种方式，效果天差地别：按值传（拷贝一份）和传指针（操作原件）。传指针更快，还能在函数里修改原结构体。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "按值传结构体（拷贝）",
          'code': "#include <stdio.h>\n\nstruct Point { int x, y; };\n\n// 传值：拿到拷贝，函数里改不影响外面\nvoid moveByValue(struct Point p) {\n    p.x += 10;   // 改的是拷贝\n}\n\nint main() {\n    struct Point p = {3, 4};\n    moveByValue(p);\n    printf(\"传值后 p.x = %d（没变）\\n\", p.x);\n    return 0;\n}"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "传指针（修改原件）",
          'code': "#include <stdio.h>\n\nstruct Point { int x, y; };\n\n// 传指针：能修改原件\nvoid moveByPtr(struct Point *p) {\n    p->x += 10;   // 直接改外面的结构体\n    p->y += 10;\n}\n\nint main() {\n    struct Point p = {3, 4};\n    moveByPtr(&p);\n    printf(\"传指针后 p = (%d, %d)（改了）\\n\", p.x, p.y);\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "大型结构体按值传会整个拷贝一遍，又慢又占内存；传指针只传一个地址（8 字节），快得多。如果函数只是想『读』数据、不想改，可以传 <code.inline>const struct Point *p</code.inline>，既省内存又保证不改。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"结构体作为函数参数\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"结构体作为函数参数\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"结构体作为函数参数\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "按值传结构体 = 拷贝一份，改不了原件",
            "传结构体指针能修改原件，且省内存更快",
            "只读时用 const 结构体指针参数",
            "实战函数大多传结构体指针"
          ]
        }
      ],
      'templates': [
        {
          'name': "计算两点距离",
          'code': "#include <stdio.h>\n#include <math.h>\nstruct Point { double x, y; };\ndouble dist(struct Point a, struct Point b) {\n    double dx = a.x - b.x, dy = a.y - b.y;\n    return sqrt(dx*dx + dy*dy);\n}\nint main() {\n    struct Point a = {0, 0}, b = {3, 4};\n    printf(\"距离 = %.1f\\n\", dist(a, b));\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-48",
      'title': "typedef 类型别名",
      'summary': "用 typedef 给类型起别名，struct 写起来不再啰嗦。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "每次定义结构体变量都要写 <code.inline>struct Student</code.inline>，很啰嗦。typedef 能给你喜欢的类型起个短别名，从此写起来干净利落。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "typedef 简化结构体",
          'code': "#include <stdio.h>\n#include <string.h>\n\n// 给 struct Student 起别名 Student\ntypedef struct {\n    char name[20];\n    int age;\n    double score;\n} Student;\n\nint main() {\n    Student s1;   // 不用再写 struct 了！\n    strcpy(s1.name, \"小明\");\n    s1.age = 12;\n    s1.score = 92.5;\n\n    printf(\"%s %d %.1f\\n\", s1.name, s1.age, s1.score);\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "typedef 的其他用法"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "给基本类型起别名",
          'code': "#include <stdio.h>\n\ntypedef unsigned long long uint64;\ntypedef int INT;\ntypedef struct Point { int x, y; } Point;\ntypedef Point *PPoint;   // 给指针类型起别名\n\nint main() {\n    uint64 big = 10000000000ULL;\n    INT a = 5;\n    Point p = {1, 2};\n    PPoint pp = &p;\n\n    printf(\"%llu %d (%d,%d)\\n\", big, a, pp->x, pp->y);\n    return 0;\n}"
        },
        {
          'type': "info",
          'title': "typedef 常见命名习惯",
          'text': "给结构体别名时，习惯用大写开头（Student、Point）；给指针别名常在前面加 P 或后面加 _ptr（PPoint、NodePtr）。看到 typedef 你就知道：后面这个新名字等于前面那串类型。"
        },
        {
          'type': "tip",
          'title': "链表标配",
          'text': "后面的链表章节几乎都这样写：<code.inline>typedef struct Node { int data; struct Node *next; } Node;</code.inline>。typedef 让 Node 和 Node* 写起来非常清爽，先熟悉它。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"typedef 类型别名\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"typedef 类型别名\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"typedef 类型别名\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "typedef 给类型起别名，语法：typedef 原类型 别名",
            "typedef struct {...} Student 之后不用再写 struct",
            "别名常用于简化长类型、统一类型名（如 uint64）",
            "链表等数据结构常用 typedef 简化节点类型"
          ]
        }
      ],
      'templates': [
        {
          'name': "typedef 结构体模板",
          'code': "#include <stdio.h>\ntypedef struct { int x, y; } Point;\nint main() {\n    Point p = {3, 4};\n    printf(\"(%d, %d)\\n\", p.x, p.y);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-49",
      'title': "联合体 union 与枚举 enum",
      'summary': "union 让多成员共享一块内存，enum 给整数起有意义的名字。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "联合体（union）和结构体长得像，但内存使用方式完全不同：结构体各成员各占各的内存，联合体所有成员**共享同一块内存**（大小取最大成员）。枚举（enum）则是给一组整数常量起名字，让代码更可读。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "union 的基本用法",
          'code': "#include <stdio.h>\n\nunion Data {\n    int i;\n    double d;\n    char c;\n};\n\nint main() {\n    union Data u;\n    u.i = 100;              // 存 int\n    printf(\"i = %d\\n\", u.i);\n\n    u.d = 3.14;             // 再存 double，覆盖了 int\n    printf(\"d = %.2f\\n\", u.d);\n    printf(\"i 变成垃圾值了：%d\\n\", u.i);  // i 已被覆盖\n    printf(\"union 大小 = %d 字节\\n\", (int)sizeof(union Data));  // 8，取最大成员\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "union 同一时刻只应该使用其中一个成员，因为修改一个会覆盖其他的。它的价值是**节省内存**：当一个数据有时是 int、有时是 double，用 union 只占最大的那份空间。"
        },
        {
          'type': "h",
          'text': "枚举 enum"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "用 enum 定义状态",
          'code': "#include <stdio.h>\n\nenum Weekday { SUN, MON, TUE, WED, THU, FRI, SAT };\n// SUN=0, MON=1, ... 依次递增\n\nenum Color { RED = 1, GREEN = 2, BLUE = 3 };\n\nint main() {\n    enum Weekday today = WED;\n    printf(\"WED 的值 = %d\\n\", today);    // 3\n\n    int color = RED;\n    if (color == RED) printf(\"是红色\\n\");\n\n    // 遍历枚举\n    for (int i = SUN; i <= SAT; i++) {\n        printf(\"%d \", i);\n    }\n    printf(\"\\n\");\n    return 0;\n}"
        },
        {
          'type': "list",
          'items': [
            "enum 里的名字默认从 0 开始递增，也可以手动指定值",
            "枚举让代码可读性大增：RED 比 1 好懂一万倍",
            "枚举的底层就是整数，可以和 int 互相比较",
            "常用场景：程序状态（运行/暂停/结束）、错误码、星期、颜色"
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"联合体 union 与枚举 enum\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"联合体 union 与枚举 enum\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"联合体 union 与枚举 enum\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "union 所有成员共享一块内存，大小取最大成员",
            "union 同一时刻只用一个成员，改了会覆盖其他",
            "enum 给整数常量起名字，默认从 0 递增",
            "枚举用于状态、错误码等，大幅提升可读性"
          ]
        }
      ],
      'templates': [
        {
          'name': "enum 星期判断",
          'code': "#include <stdio.h>\nenum Week {MON=1, TUE, WED, THU, FRI, SAT, SUN};\nint main() {\n    enum Week d = FRI;\n    printf(\"FRI = %d\\n\", d);\n    if (d >= FRI) printf(\"快到周末了\\n\");\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-50",
      'title': "位运算（& | ^ ~ << >>）",
      'summary': "按位与或异或取反移位，直接操作二进制位，嵌入式必备。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "位运算是直接对二进制位进行的运算。它速度极快，在嵌入式、底层、压缩、加密等领域无处不在。六个运算符：& 按位与、| 按位或、^ 按位异或、~ 按位取反、<< 左移、>> 右移。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "六个位运算符",
          'code': "#include <stdio.h>\n\nint main() {\n    unsigned char a = 0b1010;  // 二进制 1010 = 10\n    unsigned char b = 0b1100;  // 二进制 1100 = 12\n\n    printf(\"a & b  = %d\\n\", a & b);   // 1000 = 8   都是 1 才为 1\n    printf(\"a | b  = %d\\n\", a | b);   // 1110 = 14  有 1 就为 1\n    printf(\"a ^ b  = %d\\n\", a ^ b);   // 0110 = 6   不同才为 1\n    printf(\"~a     = %d\\n\", ~a);      // 按位取反\n\n    printf(\"a << 1 = %d\\n\", a << 1);  // 10100 = 20 左移 1 位 = 乘 2\n    printf(\"a >> 1 = %d\\n\", a >> 1);  // 101 = 5    右移 1 位 = 除 2\n    return 0;\n}"
        },
        {
          'type': "table",
          'head': [
            "运算符",
            "名称",
            "记忆口诀",
            "典型用途"
          ],
          'rows': [
            [
              "&",
              "按位与",
              "同 1 才 1",
              "取某几位、清零"
            ],
            [
              "|",
              "按位或",
              "有 1 就 1",
              "置位（把某位设为 1）"
            ],
            [
              "^",
              "按位异或",
              "相异才 1",
              "翻转某位、无临时变量交换"
            ],
            [
              "~",
              "取反",
              "0 变 1，1 变 0",
              "全部取反"
            ],
            [
              "<<",
              "左移",
              "乘 2",
              "快速乘 2 的幂"
            ],
            [
              ">>",
              "右移",
              "除 2",
              "快速除 2 的幂"
            ]
          ]
        },
        {
          'type': "h",
          'text': "置位、清位、翻转某一位"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "位操作常用套路",
          'code': "#include <stdio.h>\n\nint main() {\n    unsigned char x = 0b0000;   // 初始全 0\n\n    x |= (1 << 2);    // 把第 2 位置为 1：00000100\n    printf(\"置位后 = %d\\n\", x);\n\n    x &= ~(1 << 2);   // 把第 2 位清零\n    printf(\"清位后 = %d\\n\", x);\n\n    x ^= (1 << 3);    // 翻转第 3 位\n    printf(\"翻转后 = %d\\n\", x);\n\n    // 判断第 3 位是不是 1\n    if (x & (1 << 3)) printf(\"第 3 位是 1\\n\");\n    return 0;\n}"
        },
        {
          'type': "info",
          'title': "异或交换的小技巧",
          'text': "<code.inline>a ^= b; b ^= a; a ^= b;</code.inline> 可以在不借助第三个变量的情况下交换两个数（利用异或的性质），但工程上不推荐（可读性差），了解即可。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"位运算（& | ^ ~ << >>）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"位运算（& | ^ ~ << >>）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"位运算（& | ^ ~ << >>）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "& 按位与、| 按位或、^ 异或、~ 取反、<< 左移、>> 右移",
            "置位用 |= (1<<n)，清位用 &= ~(1<<n)，翻转用 ^= (1<<n)",
            "左移一位 = 乘 2，右移一位 = 除 2",
            "位运算极快，是嵌入式/底层的核心技能"
          ]
        }
      ],
      'templates': [
        {
          'name': "判断奇偶的位运算",
          'code': "#include <stdio.h>\nint main() {\n    int n = 7;\n    if (n & 1) printf(\"%d 是奇数\\n\", n);  // 最低位是 1 就是奇数\n    else printf(\"%d 是偶数\\n\", n);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-51",
      'title': "文件操作基础 fopen / fclose",
      'summary': "打开文件、操作、关闭，r/w/a 三种模式先用明白。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "程序运行完数据就没了，想保存数据就得用文件。C 语言文件操作四步走：fopen 打开 → 读或写 → fclose 关闭。这一章先把『打开和关闭』以及三种基本模式讲透。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "写文件与读文件",
          'code': "#include <stdio.h>\n\nint main() {\n    // 写文件：w 模式（不存在则创建，存在则清空重写）\n    FILE *fp = fopen(\"data.txt\", \"w\");\n    if (fp == NULL) {\n        printf(\"打开文件失败\\n\");\n        return 1;\n    }\n    fprintf(fp, \"第一行内容\\n\");\n    fprintf(fp, \"第二行内容\\n\");\n    fclose(fp);\n    printf(\"写入完成\\n\");\n\n    // 读文件：r 模式（文件必须存在）\n    FILE *in = fopen(\"data.txt\", \"r\");\n    if (in == NULL) {\n        printf(\"打开文件失败\\n\");\n        return 1;\n    }\n    char buf[100];\n    while (fgets(buf, 100, in) != NULL) {\n        printf(\"读到：%s\", buf);\n    }\n    fclose(in);\n    return 0;\n}"
        },
        {
          'type': "table",
          'head': [
            "模式",
            "含义",
            "文件不存在时",
            "能否写"
          ],
          'rows': [
            [
              "r",
              "只读",
              "报错失败",
              "否"
            ],
            [
              "w",
              "只写",
              "自动创建",
              "是（会清空原内容）"
            ],
            [
              "a",
              "追加",
              "自动创建",
              "是（从末尾追加）"
            ],
            [
              "r+",
              "读写",
              "报错失败",
              "是"
            ],
            [
              "w+",
              "读写",
              "自动创建",
              "是（会清空原内容）"
            ],
            [
              "a+",
              "读写追加",
              "自动创建",
              "是（从末尾追加）"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "fopen 必须判空",
          'text': "文件不存在、权限不足等原因会让 fopen 返回 NULL。不判空直接操作，程序直接崩溃。每打开一个文件都要检查 <code.inline>if (fp == NULL)</code.inline>。"
        },
        {
          'type': "danger",
          'title': "fclose 别忘",
          'text': "打开的文件用完必须 fclose。不关闭：数据可能没写进磁盘、文件被占用无法删除、打开的文件句柄有限会耗尽。fopen 和 fclose 必须成对，和 malloc/free 一个道理。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"文件操作基础 fopen / fclose\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"文件操作基础 fopen / fclose\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"文件操作基础 fopen / fclose\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "文件操作四步：fopen → 操作 → fclose",
            "r 只读、w 只写（清空）、a 追加（末尾），各有用途",
            "fopen 返回 NULL 表示失败，必须判空",
            "fclose 别忘，fopen/fclose 成对"
          ]
        }
      ],
      'templates': [
        {
          'name': "写一行再读回来",
          'code': "#include <stdio.h>\nint main() {\n    FILE *fp = fopen(\"test.txt\", \"w\");\n    if (!fp) return 1;\n    fprintf(fp, \"Hello File!\\n\");\n    fclose(fp);\n    fp = fopen(\"test.txt\", \"r\");\n    if (!fp) return 1;\n    char buf[100];\n    fgets(buf, 100, fp);\n    printf(\"%s\", buf);\n    fclose(fp);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-52",
      'title': "字符级文件读写 fgetc/fputc、fgets/fputs",
      'summary': "逐字符逐行读写文件，fgetc 读到 EOF 表示到末尾了。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "文件读写可以按字符、按行、按格式化、按二进制进行。这一章讲最细粒度的两种：字符级（fgetc/fputc）和字符串级（fgets/fputs）。它们适合逐字符处理文本、按行读取配置等场景。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "fputc 写、fgetc 读",
          'code': "#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen(\"chars.txt\", \"w\");\n    if (fp == NULL) return 1;\n    for (char c = 'a'; c <= 'e'; c++) {\n        fputc(c, fp);   // 逐字符写入\n    }\n    fclose(fp);\n\n    fp = fopen(\"chars.txt\", \"r\");\n    if (fp == NULL) return 1;\n    int ch;\n    while ((ch = fgetc(fp)) != EOF) {   // EOF = -1，读到末尾的标志\n        printf(\"%c \", ch);\n    }\n    printf(\"\\n\");\n    fclose(fp);\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "fgetc 返回类型是 int",
          'text': "fgetc 返回 <code.inline>int</code.inline> 而不是 char，因为要返回 EOF（-1）这个特殊值。把返回值存成 char 再和 EOF 比较会出错（char 可能存不下 -1）。记住：<code.inline>int ch; while ((ch = fgetc(fp)) != EOF)</code.inline> 是标准写法。"
        },
        {
          'type': "h",
          'text': "fgets/fputs 按行读写"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "按行读写文件",
          'code': "#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen(\"lines.txt\", \"w\");\n    if (fp == NULL) return 1;\n    fputs(\"第一行\\n\", fp);\n    fputs(\"第二行\\n\", fp);\n    fputs(\"第三行\\n\", fp);\n    fclose(fp);\n\n    fp = fopen(\"lines.txt\", \"r\");\n    if (fp == NULL) return 1;\n    char buf[100];\n    while (fgets(buf, 100, fp) != NULL) {  // 读到一行或末尾\n        printf(\"行：%s\", buf);\n    }\n    fclose(fp);\n    return 0;\n}"
        },
        {
          'type': "list",
          'items': [
            "<code.inline>fgets(buf, size, fp)</code.inline>：最多读 size-1 个字符到 buf，遇到换行或末尾停止，读到末尾返回 NULL",
            "<code.inline>fputs(str, fp)</code.inline>：把字符串写入文件，不会自动加换行",
            "fgets 是安全的：指定了最大长度，不会越界"
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"字符级文件读写 fgetc/fputc、fgets/fputs\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"字符级文件读写 fgetc/fputc、fgets/fputs\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"字符级文件读写 fgetc/fputc、fgets/fputs\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "fgetc/fputc 逐字符读写，fgets/fputs 逐行读写",
            "fgetc 读到末尾返回 EOF，标准写法是 int ch = fgetc(fp)",
            "fgets(buf, size, fp) 指定最大长度，安全不越界",
            "fputs 不自动加换行"
          ]
        }
      ],
      'templates': [
        {
          'name': "统计文件行数",
          'code': "#include <stdio.h>\nint main() {\n    FILE *fp = fopen(\"lines.txt\", \"r\");\n    if (!fp) { printf(\"先创建一个文件\\n\"); return 1; }\n    char buf[200];\n    int lines = 0;\n    while (fgets(buf, 200, fp) != NULL) lines++;\n    printf(\"总行数 = %d\\n\", lines);\n    fclose(fp);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-53",
      'title': "格式化文件读写 fprintf / fscanf",
      'summary': "fprintf/fscanf 是 printf/scanf 的文件版，格式化读写数据。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "写程序数据到文件，最方便的方式是格式化读写：<code.inline>fprintf</code.inline> 按格式写，<code.inline>fscanf</code.inline> 按格式读。它们的用法和 printf/scanf 一模一样，只是多了一个文件指针参数。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "fprintf 写格式化数据",
          'code': "#include <stdio.h>\n#include <string.h>\n\ntypedef struct { char name[20]; int age; double score; } Student;\n\nint main() {\n    Student s[3] = {\n        {\"小明\", 12, 92.5},\n        {\"小红\", 11, 88.0},\n        {\"小刚\", 12, 95.0}\n    };\n\n    FILE *fp = fopen(\"students.txt\", \"w\");\n    if (fp == NULL) return 1;\n    for (int i = 0; i < 3; i++) {\n        fprintf(fp, \"%s %d %.1f\\n\", s[i].name, s[i].age, s[i].score);\n    }\n    fclose(fp);\n    printf(\"写入了 %d 条学生记录\\n\", 3);\n    return 0;\n}"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "fscanf 读回数据",
          'code': "#include <stdio.h>\n\ntypedef struct { char name[20]; int age; double score; } Student;\n\nint main() {\n    Student s[10];\n    int n = 0;\n\n    FILE *fp = fopen(\"students.txt\", \"r\");\n    if (fp == NULL) return 1;\n    // 反复按格式读取，直到读不到为止\n    while (fscanf(fp, \"%s %d %lf\", s[n].name, &s[n].age, &s[n].score) == 3) {\n        n++;\n    }\n    fclose(fp);\n\n    for (int i = 0; i < n; i++) {\n        printf(\"%s %d %.1f\\n\", s[i].name, s[i].age, s[i].score);\n    }\n    printf(\"共读入 %d 条\\n\", n);\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "fscanf 的返回值别忽略",
          'text': "fscanf 返回成功读入的项数。写成 <code.inline>fscanf(fp, \"%s %d %lf\", ...) == 3</code.inline> 判断是否读到了完整的 3 项，比用 feof 判断更可靠。读到末尾或格式不匹配时返回值会小于 3。"
        },
        {
          'type': "info",
          'title': "文件格式要自洽",
          'text': "用 fprintf 怎么写的，fscanf 就要怎么读：空格分隔、字段顺序一致。所以第 71 章的成绩系统会设计成『名字 年龄 成绩』一行一条，写入和读取用同一套格式，这叫**文件格式约定**。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"格式化文件读写 fprintf / fscanf\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"格式化文件读写 fprintf / fscanf\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"格式化文件读写 fprintf / fscanf\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "fprintf/fscanf 是文件版的 printf/scanf，多一个 FILE* 参数",
            "fprintf 写、fscanf 读，格式串和变量要对应",
            "fscanf 返回成功读入的项数，用它判断读到末尾",
            "文件格式约定要自洽：怎么写就怎么读"
          ]
        }
      ],
      'templates': [
        {
          'name': "记录并回读",
          'code': "#include <stdio.h>\nint main() {\n    FILE *fp = fopen(\"nums.txt\", \"w\");\n    if (!fp) return 1;\n    for (int i = 1; i <= 5; i++) fprintf(fp, \"%d\\n\", i * i);\n    fclose(fp);\n    fp = fopen(\"nums.txt\", \"r\");\n    if (!fp) return 1;\n    int v;\n    while (fscanf(fp, \"%d\", &v) == 1) printf(\"%d \", v);\n    printf(\"\\n\");\n    fclose(fp);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-54",
      'title': "二进制文件读写 fread / fwrite",
      'summary': "fread/fwrite 整块读写内存，结构体数据直接落盘最方便。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "文本文件存的是人能读的文字，二进制文件存的是和内存一模一样的字节，所以能用 fwrite 把整个结构体数组**整块**写进文件，读取时用 fread 整块读回。又快又省事，保存程序数据首选。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "fwrite 写结构体数组",
          'code': "#include <stdio.h>\n\ntypedef struct { char name[20]; int age; double score; } Student;\n\nint main() {\n    Student s[2] = {{\"小明\", 12, 92.5}, {\"小红\", 11, 88.0}};\n\n    FILE *fp = fopen(\"students.dat\", \"wb\");  // wb：二进制写\n    if (fp == NULL) return 1;\n    // fwrite(数据地址, 单个大小, 个数, 文件)\n    fwrite(s, sizeof(Student), 2, fp);\n    fclose(fp);\n    printf(\"写入完成\\n\");\n    return 0;\n}"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "fread 读回结构体数组",
          'code': "#include <stdio.h>\n\ntypedef struct { char name[20]; int age; double score; } Student;\n\nint main() {\n    Student s[2];\n\n    FILE *fp = fopen(\"students.dat\", \"rb\");  // rb：二进制读\n    if (fp == NULL) return 1;\n    size_t n = fread(s, sizeof(Student), 2, fp);  // 返回实际读到的个数\n    fclose(fp);\n\n    for (size_t i = 0; i < n; i++) {\n        printf(\"%s %d %.1f\\n\", s[i].name, s[i].age, s[i].score);\n    }\n    return 0;\n}"
        },
        {
          'type': "list",
          'items': [
            "二进制模式：<code.inline>\"wb\"</code.inline> 写、<code.inline>\"rb\"</code.inline> 读、<code.inline>\"ab\"</code.inline> 追加",
            "fwrite/fread 四个参数：地址、单块大小、块数、文件指针",
            "fread 返回实际读取的块数，用它判断读了多少",
            "结构体直接落盘，省去逐字段格式化的麻烦"
          ]
        },
        {
          'type': "warn",
          'title': "二进制文件的兼容性",
          'text': "二进制文件对机器有依赖：不同编译器下结构体的内存布局（对齐）可能不同，直接读可能对不上。跨平台或长期保存的数据，优先用文本格式；程序内部临时存储、追求速度用二进制。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"二进制文件读写 fread / fwrite\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"二进制文件读写 fread / fwrite\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"二进制文件读写 fread / fwrite\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "fwrite 整块写内存，fread 整块读回，四参数签名",
            "结构体数组可直接整体写入/读回，效率最高",
            "二进制模式加 b：wb/rb/ab",
            "fread 返回实际块数；二进制文件跨平台兼容性差"
          ]
        }
      ],
      'templates': [
        {
          'name': "整块读写模板",
          'code': "#include <stdio.h>\nint main() {\n    int a[4] = {10, 20, 30, 40};\n    FILE *fp = fopen(\"a.dat\", \"wb\");\n    if (!fp) return 1;\n    fwrite(a, sizeof(int), 4, fp);\n    fclose(fp);\n    int b[4] = {0};\n    fp = fopen(\"a.dat\", \"rb\");\n    if (!fp) return 1;\n    fread(b, sizeof(int), 4, fp);\n    fclose(fp);\n    for (int i = 0; i < 4; i++) printf(\"%d \", b[i]);\n    printf(\"\\n\");\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-55",
      'title': "文件定位 fseek / rewind / feof",
      'summary': "在文件里随意移动读写位置，fseek 跳转、rewind 回开头、feof 判末尾。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "文件内部有个『读写位置指针』，指向当前读到哪里。fseek 可以把它移动到任意位置，rewind 让它回到开头，feof 判断是否读到末尾。掌握它们就能随机访问文件的任意部分。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "fseek 随机访问",
          'code': "#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen(\"data.bin\", \"wb\");\n    if (fp == NULL) return 1;\n    int a[] = {10, 20, 30, 40, 50};\n    fwrite(a, sizeof(int), 5, fp);\n    fclose(fp);\n\n    fp = fopen(\"data.bin\", \"rb\");\n    if (fp == NULL) return 1;\n    int v;\n\n    fseek(fp, 2 * sizeof(int), SEEK_SET);  // 跳到第 3 个 int（下标 2）\n    fread(&v, sizeof(int), 1, fp);\n    printf(\"第 3 个数 = %d\\n\", v);          // 30\n\n    fseek(fp, 0, SEEK_END);                 // 跳到文件末尾\n    long size = ftell(fp);                  // 得到文件字节数\n    printf(\"文件大小 = %ld 字节\\n\", size);\n\n    rewind(fp);                             // 回到文件开头\n    fread(&v, sizeof(int), 1, fp);\n    printf(\"回到开头读第 1 个数 = %d\\n\", v);  // 10\n    fclose(fp);\n    return 0;\n}"
        },
        {
          'type': "list",
          'items': [
            "<code.inline>fseek(fp, 偏移量, 基准)</code.inline>：移动位置，基准有三种",
            "<code.inline>SEEK_SET</code.inline> 从文件开头算，<code.inline>SEEK_CUR</code.inline> 从当前位置算，<code.inline>SEEK_END</code.inline> 从末尾算",
            "<code.inline>ftell(fp)</code.inline> 返回当前位置距离开头的字节数",
            "<code.inline>rewind(fp)</code.inline> 回到开头（等价于 fseek(fp, 0, SEEK_SET)）"
          ]
        },
        {
          'type': "h",
          'text': "feof 判断末尾"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "用 feof 读取直到末尾",
          'code': "#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen(\"data.bin\", \"rb\");\n    if (fp == NULL) return 1;\n    int v;\n    while (!feof(fp)) {\n        if (fread(&v, sizeof(int), 1, fp) == 1) {\n            printf(\"%d \", v);\n        }\n    }\n    printf(\"\\n\");\n    fclose(fp);\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "feof 的坑",
          'text': "feof 只有在**尝试读取到文件末尾之后**才返回真。直接用 while(!feof(fp)) 读整数，循环体会多执行一次。所以更好的写法是：把 fread/fscanf 的返回值作为循环条件，而不是靠 feof。上面的例子就是这么处理的。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"文件定位 fseek / rewind / feof\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"文件定位 fseek / rewind / feof\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"文件定位 fseek / rewind / feof\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "fseek 移动读写位置，ftell 查当前位置，rewind 回开头",
            "三种基准：SEEK_SET 开头、SEEK_CUR 当前、SEEK_END 末尾",
            "fseek 到 END 再 ftell 可得文件大小",
            "feof 在读到末尾后才为真，别单独用它做循环条件"
          ]
        }
      ],
      'templates': [
        {
          'name': "获取文件大小",
          'code': "#include <stdio.h>\nint main() {\n    FILE *fp = fopen(\"data.bin\", \"rb\");\n    if (!fp) return 1;\n    fseek(fp, 0, SEEK_END);\n    long size = ftell(fp);\n    printf(\"大小 = %ld 字节\\n\", size);\n    fclose(fp);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-56",
      'title': "预处理：宏定义 #define 与带参宏",
      'summary': "#define 编译前文本替换，带参宏像小函数，注意括号和副作用。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "以 # 开头的行叫预处理指令，在编译前先处理。#define 是最常用的：定义常量（前面学过）和定义带参数的宏。带参宏像一个小函数，但它是文本替换，不是真的函数调用。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "带参宏",
          'code': "#include <stdio.h>\n\n#define SQUARE(x) ((x) * (x))    // 求平方\n#define MAX(a, b) ((a) > (b) ? (a) : (b))  // 求较大值\n\nint main() {\n    printf(\"SQUARE(5) = %d\\n\", SQUARE(5));        // 25\n    printf(\"SQUARE(3+2) = %d\\n\", SQUARE(3 + 2));  // 25，因为替换成 ((3+2)*(3+2))\n    printf(\"MAX(7, 9) = %d\\n\", MAX(7, 9));        // 9\n    return 0;\n}"
        },
        {
          'type': "danger",
          'title': "带参宏必须疯狂加括号",
          'text': "如果写 <code.inline>#define SQUARE(x) x*x</code.inline>，那么 SQUARE(3+2) 会被替换成 3+2*3+2 = 11，完全错误！原因是运算符优先级。**每个参数和整个宏体都要加括号**。另一个坑：<code.inline>#define MAX(a,b) a>b?a:b</code.inline> 遇到 MAX(a,b)*2 也会出错。"
        },
        {
          'type': "h",
          'text': "宏 vs 函数"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "宏和函数的对比",
          'code': "#include <stdio.h>\n\n#define SQ(x) ((x) * (x))\n\nint sq(int x) { return x * x; }\n\nint main() {\n    int a = 3;\n    printf(\"宏: %d\\n\", SQ(a));     // 编译时替换成 ((a)*(a))\n    printf(\"函数: %d\\n\", sq(a));   // 运行时调用函数\n\n    // 宏的副作用：参数被求值两次\n    int b = 2;\n    printf(\"SQ(b++) = %d，b = %d\\n\", SQ(b++), b);  // 结果诡异！\n    return 0;\n}"
        },
        {
          'type': "list",
          'items': [
            "宏在编译前完成文本替换，没有函数调用的开销",
            "函数在运行时调用，有类型检查、有栈开销",
            "宏没有类型检查，参数会被多次求值（副作用风险）",
            "简短、高频的小计算适合宏；复杂逻辑用函数"
          ]
        },
        {
          'type': "info",
          'title': "#undef 取消宏",
          'text': "宏是纯文本，作用范围从定义处到文件末尾。#undef 可以提前取消宏定义。多文件时宏可能污染其他代码，谨慎使用。#pragma once 和 #ifndef 是防止头文件重复包含的常用手段（下一章讲）。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"预处理：宏定义 #define 与带参宏\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"预处理：宏定义 #define 与带参宏\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"预处理：宏定义 #define 与带参宏\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "#define 编译前做文本替换，可定义常量和带参宏",
            "带参宏参数和整体都要加括号，防优先级坑",
            "宏快但无类型检查、参数多求值（副作用）",
            "小计算用宏，复杂逻辑用函数"
          ]
        }
      ],
      'templates': [
        {
          'name': "宏圆面积",
          'code': "#include <stdio.h>\n#define PI 3.14159\n#define AREA(r) (PI * (r) * (r))\nint main() {\n    printf(\"%.2f\\n\", AREA(5));\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-57",
      'title': "条件编译 #ifdef / #ifndef / #if",
      'summary': "按条件决定编译哪些代码，用于跨平台、调试开关、头文件防重复。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "条件编译让编译器『有选择地编译代码』。常用的三兄弟：#ifdef（如果定义了某宏）、#ifndef（如果没定义）、#if（如果某表达式为真）。它们最大的用武之地是跨平台代码和调试开关。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "#ifdef 调试开关",
          'code': "#include <stdio.h>\n\n// 定义 DEBUG 宏，则打印调试信息；注释掉则发布版不打印\n#define DEBUG\n\nint main() {\n    int sum = 0;\n    for (int i = 1; i <= 5; i++) {\n        sum += i;\n#ifdef DEBUG\n        printf(\"调试：加到 %d，当前 sum=%d\\n\", i, sum);\n#endif\n    }\n    printf(\"最终 sum = %d\\n\", sum);\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "#if 按表达式判断"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "#if 跨平台分支",
          'code': "#include <stdio.h>\n\n#define PLATFORM 2   // 1=Windows, 2=Linux\n\nint main() {\n#if PLATFORM == 1\n    printf(\"运行在 Windows 上\\n\");\n#elif PLATFORM == 2\n    printf(\"运行在 Linux 上\\n\");\n#else\n    printf(\"未知平台\\n\");\n#endif\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "头文件防重复包含（最重要）"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "#ifndef 守卫头文件",
          'code': "// ---- mylib.h ----\n#ifndef MYLIB_H        // 如果 MYLIB_H 没被定义过\n#define MYLIB_H          // 定义它\n\nint add(int a, int b);\nint sub(int a, int b);\n\n#endif                 // 结束\n\n// 同一个 .c 文件里即使 include mylib.h 两次，\n// 第二次进来时 MYLIB_H 已定义，整段代码被跳过，\n// 从而避免重复声明导致的编译错误。"
        },
        {
          'type': "warn",
          'title': "不写守卫的后果",
          'text': "如果一个头文件被两个 .c 文件包含，而它们又互相 include，头文件里的声明可能重复，编译报『重定义』错误。所以**每个自定义头文件都要加 #ifndef 守卫**（或写 #pragma once，两者选一个）。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"条件编译 #ifdef / #ifndef / #if\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"条件编译 #ifdef / #ifndef / #if\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"条件编译 #ifdef / #ifndef / #if\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "#ifdef 有宏才编译，#ifndef 没宏才编译，#if 按表达式判断",
            "调试信息用 #ifdef DEBUG 包裹，方便开关节省发布体积",
            "#if/#elif/#else/#endif 做跨平台分支",
            "头文件用 #ifndef 守卫防重复包含"
          ]
        }
      ],
      'templates': []
    },
    {
      'id': "cl-58",
      'title': "多文件编程与头文件",
      'summary': "把程序拆成多个 .c 和一个 .h，分工明确，编译链接要一起。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "真实项目代码量大，不可能全塞一个文件。多文件编程的标准做法：每个功能模块一个 .c 文件（放实现），配套一个 .h 头文件（放声明），main.c 负责调用。编译时把多个 .c 一起交给 gcc。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "三文件结构示例",
          'code': "// ===== math_utils.h =====\n#ifndef MATH_UTILS_H\n#define MATH_UTILS_H\nint add(int a, int b);\nint mul(int a, int b);\n#endif\n\n// ===== math_utils.c =====\n#include \"math_utils.h\"\nint add(int a, int b) { return a + b; }\nint mul(int a, int b) { return a * b; }\n\n// ===== main.c =====\n#include <stdio.h>\n#include \"math_utils.h\"\nint main() {\n    printf(\"%d\\n\", add(2, 3));\n    printf(\"%d\\n\", mul(4, 5));\n    return 0;\n}"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "编译多个文件",
          'code': "// 把多个 .c 一起编译链接：\ngcc main.c math_utils.c -o app\n\n// 然后运行\n./app\n\n// 也可以先分别编译成 .o 目标文件，再链接（大项目常用）：\ngcc -c math_utils.c -o math_utils.o\ngcc -c main.c -o main.o\ngcc main.o math_utils.o -o app"
        },
        {
          'type': "list",
          'items': [
            ".h 头文件：放类型定义、函数声明、宏，加上 #ifndef 守卫",
            ".c 源文件：放函数的实际实现，include 自己的头文件",
            "main.c：程序的入口，include 需要的头文件，调用各模块",
            "声明在 .h 里、实现在 .c 里，别的文件只看到声明不知道实现，这叫**信息隐藏**"
          ]
        },
        {
          'type': "info",
          'title': "为什么声明和实现要分开",
          'text': "好处：1. 别人用你的模块只需要看 .h，不用看实现。2. 实现改了，只要接口（.h）不变，调用方代码不用动。3. 编译时可以只重编改过的文件，加快大型项目编译。这就是模块化的基本思想。"
        },
        {
          'type': "warn",
          'title': "链接错误的典型表现",
          'text': "只编译 main.c：<code.inline>gcc main.c -o app</code.inline>，会报 <code.inline>undefined reference to 'add'</code.inline>，意思是你调用了 add 但没把实现链接进来。解决：把所有 .c 一起编译。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"多文件编程与头文件\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"多文件编程与头文件\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"多文件编程与头文件\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "多文件编程：功能模块 .c + 声明 .h + main.c 入口",
            "自定义头文件用 #ifndef 守卫防重复",
            "编译要带上所有 .c：gcc main.c math_utils.c -o app",
            ".h 放声明、.c 放实现，实现细节对外隐藏"
          ]
        }
      ],
      'templates': []
    },
    {
      'id': "cl-59",
      'title': "单链表基础（节点结构、创建、遍历）",
      'summary': "用结构体 + 指针动态串起数据，每个节点用 next 指向下一个。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "数组有个缺点：插入删除要移动大量元素，且大小固定。链表用另一种思路：每个数据是一个『节点』，节点里除了数据还有一个指针 next，指向下一个节点。一串节点像火车车厢一样连起来，随时可以加减车厢。**链表是 C 语言进阶的必修课**。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "节点结构与创建链表",
          'code': "#include <stdio.h>\n#include <stdlib.h>\n\n// 节点：数据 + 指向下一个节点的指针\ntypedef struct Node {\n    int data;\n    struct Node *next;\n} Node;\n\n// 在链表头部插入一个新节点，返回新头\nNode* insertHead(Node *head, int value) {\n    Node *newNode = (Node*)malloc(sizeof(Node));\n    if (newNode == NULL) return head;\n    newNode->data = value;\n    newNode->next = head;    // 新节点指向旧头\n    return newNode;          // 新节点成为新头\n}\n\nint main() {\n    Node *head = NULL;\n    head = insertHead(head, 30);\n    head = insertHead(head, 20);\n    head = insertHead(head, 10);\n\n    // 遍历链表：从头到尾打印\n    for (Node *p = head; p != NULL; p = p->next) {\n        printf(\"%d \", p->data);\n    }\n    printf(\"\\n\");\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "链表的核心变量：<code.inline>head</code.inline> 指向第一个节点。每个节点的 <code.inline>next</code.inline> 指向下一个，最后一个节点的 next 是 NULL（链表结束的标志）。遍历就是用 <code.inline>for (Node *p = head; p != NULL; p = p->next)</code.inline> 顺着 next 一个个走。"
        },
        {
          'type': "warn",
          'title': "别把指针弄丢",
          'text': "链表里指针是命根子。删除节点、插队时，一定要先把 next 保存好再改指针，否则链表就『断了』，后面的节点全找不回来。画图理解最靠谱：把每个 next 画成箭头，改指针前先想清楚箭头怎么指。"
        },
        {
          'type': "danger",
          'title': "链表用完要释放",
          'text': "链表的每个节点都是 malloc 出来的，程序结束前必须逐个 free。只 free 头节点会泄漏后面所有节点。养成好习惯：写一个 freeList 函数，遍历链表逐个释放。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"单链表基础（节点结构、创建、遍历）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"单链表基础（节点结构、创建、遍历）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"单链表基础（节点结构、创建、遍历）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "链表节点 = 数据 + next 指针，头指针 head 串起整个链表",
            "链表末尾节点的 next = NULL",
            "遍历：for (p=head; p!=NULL; p=p->next)",
            "改指针前先保存 next，防止链表断裂",
            "每个节点 malloc 都要在结束前 free"
          ]
        }
      ],
      'templates': [
        {
          'name': "链表头插法",
          'code': "#include <stdio.h>\n#include <stdlib.h>\ntypedef struct Node { int data; struct Node *next; } Node;\nNode* insertHead(Node *h, int v) {\n    Node *n = (Node*)malloc(sizeof(Node));\n    n->data = v; n->next = h;\n    return n;\n}\nint main() {\n    Node *head = NULL;\n    head = insertHead(head, 1);\n    head = insertHead(head, 2);\n    for (Node *p = head; p; p = p->next) printf(\"%d \", p->data);\n    printf(\"\\n\");\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-60",
      'title': "链表的插入与删除",
      'summary': "在指定位置插入、删除节点，关键是重新接线并小心指针。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "链表比数组强的就是插入和删除：改一下指针就能完成，不用移动大量数据。这一章把『插入节点』和『删除节点』的完整套路写清楚，配合画图理解。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "链表插入与删除",
          'code': "#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node { int data; struct Node *next; } Node;\n\n// 在值为 target 的节点后面插入新节点\nvoid insertAfter(Node *target, int value) {\n    if (target == NULL) return;\n    Node *newNode = (Node*)malloc(sizeof(Node));\n    if (newNode == NULL) return;\n    newNode->data = value;\n    newNode->next = target->next;   // 新节点先指向 target 的下一个\n    target->next = newNode;         // target 再指向新节点\n}\n\n// 删除链表中第一个值为 value 的节点\nNode* deleteNode(Node *head, int value) {\n    Node *cur = head, *prev = NULL;\n    while (cur != NULL && cur->data != value) {\n        prev = cur;\n        cur = cur->next;\n    }\n    if (cur == NULL) return head;   // 没找到\n    if (prev == NULL) {             // 删的是头节点\n        head = cur->next;\n    } else {\n        prev->next = cur->next;     // 跳过 cur，重新接线\n    }\n    free(cur);\n    return head;\n}\n\nvoid printList(Node *head) {\n    for (Node *p = head; p; p = p->next) printf(\"%d \", p->data);\n    printf(\"\\n\");\n}\n\nint main() {\n    Node n1 = {10, NULL}, n2 = {20, NULL}, n3 = {30, NULL};\n    n1.next = &n2; n2.next = &n3;\n    Node *head = &n1;\n\n    printList(head);       // 10 20 30\n    insertAfter(&n2, 25);  // 在 20 后插入 25\n    printList(head);       // 10 20 25 30\n    head = deleteNode(head, 20);   // 删除 20\n    printList(head);       // 10 25 30\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "插入的秘诀：**先接新节点，再改旧节点**。也就是先把 newNode->next 指向 target 的下一个，再把 target->next 指向 newNode。顺序反了会丢掉后面的链表。删除的秘诀：**让前一个节点的 next 跳过被删节点**，然后 free 掉它。"
        },
        {
          'type': "warn",
          'title': "删除头节点要单独处理",
          'text': "删头节点时没有前驱节点，不能走 prev->next 那套，要直接让 head 指向第二个节点。函数需要更新头指针时，要么返回新 head，要么用二级指针（Node**）传头指针。上面例子用的是返回新 head 的方式。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"链表的插入与删除\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"链表的插入与删除\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"链表的插入与删除\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "插入节点：先让新节点 next 指向目标的下一个，再改目标的 next",
            "删除节点：让前一个节点 next 跳过被删节点，再 free",
            "删头节点要更新 head，通过返回值或二级指针",
            "链表插入删除是 O(1) 时间，这是它比数组强的地方"
          ]
        }
      ],
      'templates': [
        {
          'name': "链表中查找",
          'code': "#include <stdio.h>\n#include <stdlib.h>\ntypedef struct Node { int data; struct Node *next; } Node;\nNode* find(Node *head, int v) {\n    for (Node *p = head; p; p = p->next)\n        if (p->data == v) return p;\n    return NULL;\n}\nint main() {\n    Node n1={10,NULL},n2={20,NULL},n3={30,NULL};\n    n1.next=&n2; n2.next=&n3;\n    Node *f = find(&n1, 20);\n    if (f) printf(\"找到 %d\\n\", f->data);\n    else printf(\"没找到\\n\");\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-61",
      'title': "双向链表",
      'summary': "每个节点多一个 prev 指针，前后都能走，删除更方便。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "单链表只能从头往后走，想找前一个节点很麻烦。双向链表给每个节点加了一个 <code.inline>prev</code.inline> 指针，指向前一个节点，这样两头都能走，删除节点也不用再记前驱了。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "双向链表节点与创建",
          'code': "#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct DNode {\n    int data;\n    struct DNode *prev;   // 指向前一个\n    struct DNode *next;   // 指向后一个\n} DNode;\n\n// 头插法\nDNode* insertHead(DNode *head, int value) {\n    DNode *n = (DNode*)malloc(sizeof(DNode));\n    if (n == NULL) return head;\n    n->data = value;\n    n->prev = NULL;       // 新头的前驱是 NULL\n    n->next = head;\n    if (head != NULL) head->prev = n;   // 旧头的前驱改为新头\n    return n;\n}\n\nint main() {\n    DNode *head = NULL;\n    head = insertHead(head, 3);\n    head = insertHead(head, 2);\n    head = insertHead(head, 1);\n\n    // 正向遍历\n    printf(\"正向：\");\n    for (DNode *p = head; p; p = p->next) printf(\"%d \", p->data);\n    printf(\"\\n\");\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "双向链表的删除"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "删除指定节点",
          'code': "#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct DNode { int data; struct DNode *prev, *next; } DNode;\n\n// 删除节点 p：借助 prev 直接找到前驱，不用遍历\nvoid deleteNode(DNode *p) {\n    if (p->prev != NULL) p->prev->next = p->next;  // 前驱的 next 跳过 p\n    if (p->next != NULL) p->next->prev = p->prev;  // 后继的 prev 跳过 p\n    free(p);\n}\n\nint main() {\n    DNode n1 = {1, NULL, NULL};\n    DNode n2 = {2, NULL, NULL};\n    DNode n3 = {3, NULL, NULL};\n    n1.next = &n2; n2.prev = &n1;\n    n2.next = &n3; n3.prev = &n2;\n\n    deleteNode(&n2);   // 删除中间节点\n    printf(\"剩余：%d %d\\n\", n1.next->data, n1.next->next->data);\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "对比单链表：单链表删除必须从头遍历记住前驱；双向链表有 prev，删除任意已知节点只需两步改指针，O(1) 完成。代价是每个节点多存一个指针，占 8 字节内存。"
        },
        {
          'type': "info",
          'title': "实际应用",
          'text': "浏览器后退前进、编辑器撤销重做、LRU 缓存、操作系统的进程调度，都用双向链表。它比单链表灵活，是工程中更常用的链表形式。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"双向链表\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"双向链表\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"双向链表\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "双向链表每个节点有 prev 和 next 两个指针",
            "头节点的 prev 是 NULL，尾节点的 next 是 NULL",
            "删除已知节点 O(1)，靠 prev 直接找到前驱",
            "代价是每节点多占一个指针的内存"
          ]
        }
      ],
      'templates': []
    },
    {
      'id': "cl-62",
      'title': "栈与队列的实现（数组/链表）",
      'summary': "栈后进先出，队列先进先出，两种经典结构的两种实现。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "栈（stack）和队列（queue）是最基础也最常用的两种线性数据结构。栈像一摞盘子：后放的先拿，叫**后进先出**（LIFO）；队列像排队：先来的先办，叫**先进先出**（FIFO）。"
        },
        {
          'type': "h",
          'text': "用数组实现栈"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "数组栈",
          'code': "#include <stdio.h>\n\n#define MAX 100\nint stack[MAX];\nint top = -1;      // 栈顶下标，-1 表示空栈\n\nvoid push(int v) {\n    if (top >= MAX - 1) { printf(\"栈满\\n\"); return; }\n    stack[++top] = v;\n}\n\nint pop() {\n    if (top < 0) { printf(\"栈空\\n\"); return -1; }\n    return stack[top--];\n}\n\nint main() {\n    push(10); push(20); push(30);\n    printf(\"%d\\n\", pop());   // 30\n    printf(\"%d\\n\", pop());   // 20\n    printf(\"%d\\n\", pop());   // 10\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "用数组实现队列"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "数组队列（循环队列思想）",
          'code': "#include <stdio.h>\n\n#define MAX 5\nint q[MAX];\nint front = 0, rear = 0;   // 入队时 rear 前进，出队时 front 前进\n\nvoid enqueue(int v) {\n    if ((rear + 1) % MAX == front) { printf(\"队列满\\n\"); return; }\n    q[rear] = v;\n    rear = (rear + 1) % MAX;\n}\n\nint dequeue() {\n    if (front == rear) { printf(\"队列空\\n\"); return -1; }\n    int v = q[front];\n    front = (front + 1) % MAX;\n    return v;\n}\n\nint main() {\n    enqueue(1); enqueue(2); enqueue(3);\n    printf(\"%d\\n\", dequeue());   // 1\n    printf(\"%d\\n\", dequeue());   // 2\n    printf(\"%d\\n\", dequeue());   // 3\n    return 0;\n}"
        },
        {
          'type': "list",
          'items': [
            "栈的操作：push（入栈）、pop（出栈）、栈空判断",
            "队列的操作：enqueue（入队）、dequeue（出队）",
            "数组实现简单，但有容量上限；链表实现可无限增长",
            "栈用 top 下标，队列用 front/rear 两个下标（循环取模避免假溢出）"
          ]
        },
        {
          'type': "info",
          'title': "哪里用到",
          'text': "函数调用的底层机制就是栈（每层调用压栈、返回弹栈）；操作系统的消息队列、打印机任务队列是队列；括号匹配、表达式求值、浏览器的撤销都靠栈。吃透这两个结构，算法题就稳了一半。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"栈与队列的实现（数组/链表）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"栈与队列的实现（数组/链表）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"栈与队列的实现（数组/链表）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "栈 LIFO：后进先出，push/pop，用 top 下标",
            "队列 FIFO：先进先出，enqueue/dequeue，用 front/rear",
            "循环队列用取模 (rear+1)%MAX 复用空间",
            "函数调用底层就是栈，消息处理是队列"
          ]
        }
      ],
      'templates': [
        {
          'name': "栈的括号配对",
          'code': "#include <stdio.h>\n#include <string.h>\nchar stack[100]; int top = -1;\nint main() {\n    char s[] = \"((()))\";\n    for (int i = 0; i < (int)strlen(s); i++) {\n        if (s[i] == '(') stack[++top] = s[i];\n        else if (s[i] == ')') {\n            if (top < 0) { printf(\"不配对\\n\"); return 0; }\n            top--;\n        }\n    }\n    if (top == -1) printf(\"配对正确\\n\");\n    else printf(\"不配对\\n\");\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-63",
      'title': "排序算法（冒泡/选择/插入）",
      'summary': "三种经典排序逐个讲透，理解交换与比较的核心思想。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "排序是把一组数据按大小排好。虽然 C 标准库有 qsort，但亲手实现这三种基础排序，是理解算法思维的必经之路。三种算法都基于『比较 + 交换』，只是策略不同。"
        },
        {
          'type': "h",
          'text': "冒泡排序"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "冒泡排序",
          'code': "#include <stdio.h>\n\nvoid bubbleSort(int a[], int n) {\n    for (int i = 0; i < n - 1; i++) {\n        for (int j = 0; j < n - 1 - i; j++) {\n            if (a[j] > a[j + 1]) {          // 相邻两个比较\n                int t = a[j]; a[j] = a[j+1]; a[j+1] = t;  // 交换\n            }\n        }\n    }\n}\n\nint main() {\n    int a[] = {5, 3, 8, 1, 2};\n    int n = 5;\n    bubbleSort(a, n);\n    for (int i = 0; i < n; i++) printf(\"%d \", a[i]);\n    printf(\"\\n\");\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "冒泡思路：每一轮把相邻元素两两比较，大的往后冒，一轮下来最大的数沉到末尾。n 个元素要 n-1 轮，每轮比较 n-1-i 次。实现简单，但慢（O(n²)）。"
        },
        {
          'type': "h",
          'text': "选择排序与插入排序"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "选择排序",
          'code': "#include <stdio.h>\n\n// 每轮选出最小的放到最前面\nvoid selectSort(int a[], int n) {\n    for (int i = 0; i < n - 1; i++) {\n        int minIdx = i;\n        for (int j = i + 1; j < n; j++) {\n            if (a[j] < a[minIdx]) minIdx = j;\n        }\n        int t = a[i]; a[i] = a[minIdx]; a[minIdx] = t;\n    }\n}\n\nint main() {\n    int a[] = {5, 3, 8, 1, 2};\n    int n = 5;\n    selectSort(a, n);\n    for (int i = 0; i < n; i++) printf(\"%d \", a[i]);\n    printf(\"\\n\");\n    return 0;\n}"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "插入排序",
          'code': "#include <stdio.h>\n\n// 像整理扑克牌：把每个元素插到前面已排好序列的合适位置\nvoid insertSort(int a[], int n) {\n    for (int i = 1; i < n; i++) {\n        int key = a[i];\n        int j = i - 1;\n        while (j >= 0 && a[j] > key) {\n            a[j + 1] = a[j];   // 大元素往后挪\n            j--;\n        }\n        a[j + 1] = key;\n    }\n}\n\nint main() {\n    int a[] = {5, 3, 8, 1, 2};\n    int n = 5;\n    insertSort(a, n);\n    for (int i = 0; i < n; i++) printf(\"%d \", a[i]);\n    printf(\"\\n\");\n    return 0;\n}"
        },
        {
          'type': "table",
          'head': [
            "算法",
            "核心思想",
            "最坏时间复杂度",
            "特点"
          ],
          'rows': [
            [
              "冒泡",
              "相邻两两比较，大的往后冒",
              "O(n²)",
              "实现最简单"
            ],
            [
              "选择",
              "每轮选最小的放前面",
              "O(n²)",
              "交换次数最少"
            ],
            [
              "插入",
              "像理牌，逐个插入有序区",
              "O(n²)",
              "数据接近有序时最快"
            ]
          ]
        },
        {
          'type': "info",
          'title': "想更快",
          'text': "上面三种都是 O(n²)。数据量大时用快速排序、归并排序（O(n log n)），或者直接调标准库的 <code.inline>qsort</code.inline>，它内部就是优化过的快速排序。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"排序算法（冒泡/选择/插入）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"排序算法（冒泡/选择/插入）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"排序算法（冒泡/选择/插入）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "冒泡：相邻比较，大的沉底，最简单",
            "选择：每轮挑最小放前面，交换少",
            "插入：像理牌逐个插入，接近有序时快",
            "三者都是 O(n²)，大数据用快排/归并/qsort"
          ]
        }
      ],
      'templates': [
        {
          'name': "排序完整模板",
          'code': "#include <stdio.h>\nvoid bubbleSort(int a[], int n) {\n    for (int i = 0; i < n - 1; i++)\n        for (int j = 0; j < n - 1 - i; j++)\n            if (a[j] > a[j+1]) { int t=a[j]; a[j]=a[j+1]; a[j+1]=t; }\n}\nint main() {\n    int a[] = {9, 4, 7, 1, 5};\n    bubbleSort(a, 5);\n    for (int i = 0; i < 5; i++) printf(\"%d \", a[i]);\n    printf(\"\\n\");\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-64",
      'title': "查找算法（线性/二分）",
      'summary': "线性查找逐个找，二分查找对半砍，理解有序性带来的威力。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "查找就是在数据里找某个值。最朴素的是线性查找：从头到尾一个个比。如果数据**有序**，二分查找能把速度从 O(n) 提升到 O(log n)，数据越多差距越大。"
        },
        {
          'type': "h",
          'text': "线性查找"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "线性查找",
          'code': "#include <stdio.h>\n\n// 返回下标，找不到返回 -1\nint linearSearch(int a[], int n, int target) {\n    for (int i = 0; i < n; i++) {\n        if (a[i] == target) return i;\n    }\n    return -1;\n}\n\nint main() {\n    int a[] = {5, 3, 8, 1, 2};\n    int idx = linearSearch(a, 5, 8);\n    if (idx >= 0) printf(\"找到了，下标 %d\\n\", idx);\n    else printf(\"没找到\\n\");\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "二分查找（数据必须有序）"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "二分查找",
          'code': "#include <stdio.h>\n\nint binarySearch(int a[], int n, int target) {\n    int low = 0, high = n - 1;\n    while (low <= high) {\n        int mid = (low + high) / 2;\n        if (a[mid] == target) return mid;\n        else if (a[mid] < target) low = mid + 1;    // 去右半边\n        else high = mid - 1;                        // 去左半边\n    }\n    return -1;\n}\n\nint main() {\n    int a[] = {1, 2, 3, 8, 9, 12, 15};   // 必须有序\n    int idx = binarySearch(a, 7, 9);\n    if (idx >= 0) printf(\"找到了，下标 %d\\n\", idx);\n    else printf(\"没找到\\n\");\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "二分查找的思路：每次都和中间元素比。比中间小就去左半边找，比中间大就去右半边找，每轮把范围砍掉一半。7 个元素的数组最多 3 次就能定位，10 亿个元素的数组也只要 30 次。这就是 O(log n) 的威力。"
        },
        {
          'type': "warn",
          'title': "二分的前提是有序",
          'text': "对无序数组用二分查找结果完全错误。使用前必须确认数组是升序（或降序）的。这是二分查找最容易栽的坑。"
        },
        {
          'type': "info",
          'title': "实际应用",
          'text': "数据库索引、字典查找、电话簿都是二分思想。bsearch 是标准库提供的二分查找函数，参数类似 qsort，可以直接用。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"查找算法（线性/二分）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"查找算法（线性/二分）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"查找算法（线性/二分）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "线性查找：逐个比较，O(n)，无序也能用",
            "二分查找：对半砍，O(log n)，但数据必须有序",
            "二分模板：low/high/mid 三个变量，循环 low<=high",
            "二分速度极快，是查找算法的主角"
          ]
        }
      ],
      'templates': [
        {
          'name': "二分查找模板",
          'code': "#include <stdio.h>\nint bs(int a[], int n, int t) {\n    int lo = 0, hi = n - 1;\n    while (lo <= hi) {\n        int mid = (lo + hi) / 2;\n        if (a[mid] == t) return mid;\n        else if (a[mid] < t) lo = mid + 1;\n        else hi = mid - 1;\n    }\n    return -1;\n}\nint main() {\n    int a[] = {1, 4, 6, 9, 12};\n    printf(\"下标 = %d\\n\", bs(a, 5, 9));\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-65",
      'title': "调试技巧（printf 调试、gdb 简介）",
      'summary': "程序出 bug 不慌，printf 打点 + gdb 断点，两步定位问题。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "程序报错或结果不对，别慌，调试是有章法的。最简单有效的是 printf 调试：在关键位置打印变量的值，看程序到底走到哪、值是什么。专业一点用 gdb 设断点单步执行。这一章两种都教。"
        },
        {
          'type': "h",
          'text': "printf 调试法"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "在关键位置打点",
          'code': "#include <stdio.h>\n\nint main() {\n    int sum = 0;\n    for (int i = 1; i <= 5; i++) {\n        sum += i;\n        printf(\"[调试] i=%d sum=%d\\n\", i, sum);   // 观察中间过程\n    }\n    printf(\"结果 = %d\\n\", sum);\n    return 0;\n}"
        },
        {
          'type': "list",
          'items': [
            "程序卡死：在循环里、函数开头打印『走到这里』，找出卡在哪一步",
            "结果不对：打印关键变量的值，和手算的期望值对比",
            "函数没被调用：在函数入口打印一条消息确认",
            "用 #ifdef DEBUG 包起来，发布时注释掉，不用删代码（第 57 章讲过）"
          ]
        },
        {
          'type': "h",
          'text': "gdb 断点调试"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "gdb 基本命令",
          'code': "// 1. 编译时加 -g 选项，保留调试信息：\ngcc -g myprog.c -o myprog\n\n// 2. 启动 gdb：\ngdb myprog\n\n// 3. 常用命令：\nbreak main      # 在 main 函数入口设断点\nbreak 15        # 在第 15 行设断点\nrun             # 运行程序\nnext            # 单步执行（不进入函数）\nstep            # 单步执行（进入函数）\nprint i         # 打印变量 i 的值\nprint *p        # 打印指针指向的值\ncontinue        # 继续运行到下一个断点\nquit            # 退出 gdb"
        },
        {
          'type': "warn",
          'title': "忘记 -g 的后果",
          'text': "编译时不加 <code.inline>-g</code.inline>，gdb 里看不到行号和变量名，全是地址和数字，没法调试。调试版编译一定加 -g。"
        },
        {
          'type': "tip",
          'title': "调试的心态",
          'text': "好调试 = 好分段。把大程序拆成函数，每个函数单独验证正确了再组合。出 bug 时用『二分法』定位：在中间位置打点，看前半段对不对，逐步缩小范围。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"调试技巧（printf 调试、gdb 简介）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"调试技巧（printf 调试、gdb 简介）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"调试技巧（printf 调试、gdb 简介）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "printf 调试：关键位置打印变量值，观察执行路径",
            "调试信息用 #ifdef DEBUG 包裹，发布时关掉",
            "gdb 调试要加 -g 编译，核心命令 break/run/next/print",
            "拆函数 + 二分定位，是最有效的调试思路"
          ]
        }
      ],
      'templates': [
        {
          'name': "调试开关模板",
          'code': "#include <stdio.h>\n#define DEBUG\nint main() {\n    int x = 5;\n#ifdef DEBUG\n    printf(\"[调试] x = %d\\n\", x);\n#endif\n    x += 3;\n#ifdef DEBUG\n    printf(\"[调试] 加 3 后 x = %d\\n\", x);\n#endif\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-66",
      'title': "常见编译错误与运行时错误排查",
      'summary': "认识高频报错和崩溃原因，看到报错不再慌。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "报错是学 C 的日常。编译错误其实是好事：编译器帮你指出了代码的问题，按行号去改就行。这一章把最高频的报错和崩溃原因分类讲清。"
        },
        {
          'type': "h",
          'text': "高频编译错误"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "报错示例",
          'code': "#include <stdio.h>\nint main() {\n    int a = 5\n    printf(\"a=%d\\n\", a)   // 错误1：缺分号\n    return 0\n}                    // 错误2：main 缺右括号\n\n// 报错形式：\n// error: expected ';' before 'printf'\n// error: expected ')' before '{'\n// 看到行号，往往是上一行漏了分号或括号"
        },
        {
          'type': "table",
          'head': [
            "报错信息",
            "含义",
            "解决"
          ],
          'rows': [
            [
              "expected ';' before ...",
              "缺分号",
              "看提示行，通常上一句漏 ;"
            ],
            [
              "undefined reference to 'xxx'",
              "链接不到函数实现",
              "函数没定义，或没把 .c 一起编译"
            ],
            [
              "implicit declaration of function",
              "没声明函数",
              "加函数原型或 include 头文件"
            ],
            [
              "expected ')' before ...",
              "括号不匹配",
              "数一下括号配对"
            ],
            [
              "'xxx' undeclared",
              "变量未声明",
              "先声明变量或用对变量名"
            ]
          ]
        },
        {
          'type': "h",
          'text': "高频运行时错误"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "崩溃原因速查",
          'code': "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    // 1. 除零：Segmentation fault / Floating point exception\n    // int x = 5 / 0;\n\n    // 2. 数组越界：写到了数组外\n    int a[3];\n    // a[100] = 1;   // 危险\n\n    // 3. 空指针解引用\n    int *p = NULL;\n    // *p = 10;      // 危险，段错误\n\n    // 4. 野指针/已释放指针\n    int *q = (int*)malloc(sizeof(int));\n    free(q);\n    // *q = 5;       // 危险，use-after-free\n\n    printf(\"避免上面几种情况，程序就稳定\\n\");\n    return 0;\n}"
        },
        {
          'type': "list",
          'items': [
            "Segmentation fault（段错误）：指针乱来、越界、空指针，最常见",
            "Floating point exception：除数为 0",
            "Stack overflow：递归太深或数组超大，栈溢出",
            "printf/scanf 格式串和参数不匹配：输出乱码或崩溃"
          ]
        },
        {
          'type': "tip",
          'title': "排查套路",
          'text': "看报错先定位行号；编译错误从第一条开始改（后面的可能都是连带）；段错误用 printf 打点缩小崩溃位置；内存相关用 valgrind/AddressSanitizer 定位。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"常见编译错误与运行时错误排查\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"常见编译错误与运行时错误排查\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"常见编译错误与运行时错误排查\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "编译错误有行号，从第一条开始改，多半是上一行缺分号/括号",
            "undefined reference 是链接问题，检查函数定义和编译文件",
            "段错误 = 指针/越界/空指针，三大元凶",
            "printf/scanf 格式串必须和变量类型匹配"
          ]
        }
      ],
      'templates': []
    },
    {
      'id': "cl-67",
      'title': "字符处理与 ASCII 码",
      'summary': "字符本质是整数，ASCII 码里大小写字母和数字的关系要记牢。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "char 类型本质上就是一个小整数，电脑用 ASCII 码表把数字和字符对应起来：'A' 是 65，'a' 是 97，'0' 是 48。掌握这些对应关系，字符处理就手到擒来。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "字符就是数字",
          'code': "#include <stdio.h>\nint main() {\n    char c = 'A';\n    printf(\"A 的 ASCII 码 = %d\\n\", (int)c);   // 65\n    printf(\"A + 1 = %c\\n\", c + 1);             // B，字符可以加减\n    printf(\"小写 a = %d\\n\", (int)'a');         // 97\n    printf(\"数字 0 = %d\\n\", (int)'0');         // 48\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "大小写转换与判断"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "字符处理套路",
          'code': "#include <stdio.h>\n\nint main() {\n    char c = 'b';\n\n    // 大写转小写：+32（大小写字母差 32）\n    char upper = c - 32;\n    printf(\"b 转大写 = %c\\n\", upper);   // B\n\n    // 判断是否是字母、数字\n    if (c >= 'a' && c <= 'z') printf(\"%c 是小写字母\\n\", c);\n    if (c >= 'A' && c <= 'Z') printf(\"%c 是大写字母\\n\", c);\n    if (c >= '0' && c <= '9') printf(\"%c 是数字\\n\", c);\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "ctype.h 现成的字符判断函数"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "使用 ctype.h",
          'code': "#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char s[] = \"Hello, C 2026!\";\n    int letters = 0, digits = 0, spaces = 0;\n    for (int i = 0; s[i] != '\\0'; i++) {\n        if (isalpha(s[i])) letters++;      // 是字母\n        else if (isdigit(s[i])) digits++;  // 是数字\n        else if (isspace(s[i])) spaces++;  // 是空白\n    }\n    printf(\"字母 %d 个，数字 %d 个，空白 %d 个\\n\", letters, digits, spaces);\n\n    printf(\"toupper(%c) = %c\\n\", 'c', toupper('c'));   // C\n    printf(\"tolower(%c) = %c\\n\", 'D', tolower('D'));   // d\n    return 0;\n}"
        },
        {
          'type': "table",
          'head': [
            "函数",
            "作用",
            "常用"
          ],
          'rows': [
            [
              "isalpha",
              "是否字母",
              "A-Z a-z"
            ],
            [
              "isdigit",
              "是否数字",
              "0-9"
            ],
            [
              "isspace",
              "是否空白",
              "空格、换行、Tab"
            ],
            [
              "isupper",
              "是否大写字母",
              "A-Z"
            ],
            [
              "islower",
              "是否小写字母",
              "a-z"
            ],
            [
              "toupper",
              "转大写",
              "返回大写字符"
            ],
            [
              "tolower",
              "转小写",
              "返回小写字符"
            ]
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"字符处理与 ASCII 码\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"字符处理与 ASCII 码\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"字符处理与 ASCII 码\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "字符是整数：A=65、a=97、0=48",
            "大小写字母相差 32，c-32 转大写、c+32 转小写",
            "判断字母/数字用范围比较 c>='a' && c<='z'",
            "ctype.h 提供 isalpha/isdigit/toupper 等现成函数"
          ]
        }
      ],
      'templates': [
        {
          'name': "统计大小写数量",
          'code': "#include <stdio.h>\n#include <ctype.h>\nint main() {\n    char s[] = \"Hello World 123\";\n    int up = 0, low = 0;\n    for (int i = 0; s[i]; i++) {\n        if (isupper(s[i])) up++;\n        if (islower(s[i])) low++;\n    }\n    printf(\"大写 %d，小写 %d\\n\", up, low);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-68",
      'title': "数字与字符串互转（atoi/atof/sprintf）",
      'summary': "字符串转数字用 atoi/atof，数字转字符串用 sprintf，轻松互转。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "实际开发里经常要『把键盘输入的字符串变成数字』或『把数字拼进字符串』。标准库提供了现成的转换函数，这一章讲清楚。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "字符串转数字",
          'code': "#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char str1[] = \"123\";\n    char str2[] = \"45.67\";\n\n    int num = atoi(str1);        // 字符串转整数\n    double d = atof(str2);       // 字符串转浮点数\n\n    printf(\"atoi = %d\\n\", num);          // 123\n    printf(\"atof = %.2f\\n\", d);          // 45.67\n\n    // 更安全、带错误检查的版本\n    long n2 = strtol(\"999abc\", NULL, 10);   // 十进制，读到非数字停\n    printf(\"strtol = %ld\\n\", n2);           // 999\n    return 0;\n}"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "数字转字符串 sprintf",
          'code': "#include <stdio.h>\n\nint main() {\n    int age = 18;\n    double score = 88.5;\n    char buf[100];\n\n    // 像 printf 一样拼进字符串\n    sprintf(buf, \"我今年 %d 岁，成绩 %.1f 分\", age, score);\n    printf(\"%s\\n\", buf);\n\n    // 用 snprintf 更安全：指定最大长度，防溢出\n    snprintf(buf, sizeof(buf), \"年龄:%d\", age);\n    printf(\"%s\\n\", buf);\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "sprintf 的越界风险",
          'text': "sprintf 不检查目标字符串够不够大，内容超了会越界写坏内存。**优先用 snprintf(buf, sizeof(buf), ...)**，它限制最大写入长度，安全得多。这也是面试常考的安全问题。"
        },
        {
          'type': "table",
          'head': [
            "函数",
            "作用",
            "注意"
          ],
          'rows': [
            [
              "atoi(s)",
              "字符串转 int",
              "无效输入返回 0"
            ],
            [
              "atof(s)",
              "字符串转 double",
              "无效输入返回 0"
            ],
            [
              "strtol(s, NULL, 基数)",
              "字符串转 long",
              "可指定进制，更可靠"
            ],
            [
              "sprintf(buf, fmt, ...)",
              "格式化写入字符串",
              "不安全，用 snprintf"
            ],
            [
              "sscanf(s, fmt, ...)",
              "从字符串读数据",
              "scanf 的字符串版"
            ]
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"数字与字符串互转（atoi/atof/sprintf）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"数字与字符串互转（atoi/atof/sprintf）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"数字与字符串互转（atoi/atof/sprintf）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "字符串转数字：atoi 转 int，atof 转 double，strtol 更可靠",
            "数字转字符串：sprintf 或 snprintf",
            "用 snprintf 指定长度防溢出",
            "sscanf 可以从字符串里按格式读数据"
          ]
        }
      ],
      'templates': [
        {
          'name': "字符串转数字求和",
          'code': "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    char s[] = \"12 34 56\";\n    int sum = 0, v;\n    char *p = s;\n    while (*p) {\n        v = atoi(p);\n        if (v == 0 && *p != '0') break;\n        sum += v;\n        while (*p && *p != ' ') p++;\n        if (*p) p++;\n    }\n    printf(\"和 = %d\\n\", sum);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-69",
      'title': "程序计时与性能（clock）",
      'summary': "用 clock 测量程序耗时，对比算法快慢，优化有依据。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "『这段代码跑多快』要用数据说话。C 标准库的 <code.inline>clock()</code.inline> 返回程序运行到此刻的 CPU 时钟数，相减再除以 CLOCKS_PER_SEC 就是秒数。用它对比不同算法或优化的效果。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "测量代码耗时",
          'code': "#include <stdio.h>\n#include <time.h>\n\nint main() {\n    clock_t start = clock();   // 开始计时\n\n    // 测试一段循环\n    long long sum = 0;\n    for (int i = 0; i < 100000000; i++) {\n        sum += i;\n    }\n\n    clock_t end = clock();\n    double seconds = (double)(end - start) / CLOCKS_PER_SEC;\n    printf(\"sum = %lld\\n\", sum);\n    printf(\"耗时 = %.4f 秒\\n\", seconds);\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "用计时对比排序算法"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "对比冒泡和快排",
          'code': "#include <stdio.h>\n#include <stdlib.h>\n#include <time.h>\n\nint cmp(const void *a, const void *b) {\n    return *(int*)a - *(int*)b;\n}\n\nint main() {\n    int n = 50000;\n    int *a = (int*)malloc(n * sizeof(int));\n    int *b = (int*)malloc(n * sizeof(int));\n    srand(42);\n    for (int i = 0; i < n; i++) a[i] = b[i] = rand();\n\n    clock_t t1 = clock();\n    // 冒泡（太慢，这里就不真跑了，想象一下）\n    clock_t t2 = clock();\n    qsort(b, n, sizeof(int), cmp);   // 标准库快排\n    clock_t t3 = clock();\n\n    printf(\"qsort 耗时 = %.3f 秒\\n\", (double)(t3 - t2) / CLOCKS_PER_SEC);\n    free(a); free(b);\n    return 0;\n}"
        },
        {
          'type': "list",
          'items': [
            "<code.inline>clock_t</code.inline> 是时间类型，<code.inline>clock()</code.inline> 取当前时钟",
            "<code.inline>CLOCKS_PER_SEC</code.inline> 每秒钟的时钟数，用来换算成秒",
            "要 include <code.inline>&lt;time.h&gt;</code.inline>",
            "测量时把要测的代码夹在两次 clock() 之间，最后相减换算"
          ]
        },
        {
          'type': "info",
          'title': "优化的大原则",
          'text': "先计时，再优化，再计时，用数据证明优化有效。常见优化：把 O(n²) 换成 O(n log n)、避免重复计算、用位运算代替乘除、减少不必要的打印（printf 很慢）。别凭感觉优化，性能要靠测量。"
        },
        {
          'type': "warn",
          'title': "clock 的局限",
          'text': "clock 测的是 CPU 时间，包含程序里所有线程。对毫秒级以下的代码测量不准，需要多次运行取平均或换更高精度的计时函数。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"程序计时与性能（clock）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"程序计时与性能（clock）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"程序计时与性能（clock）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "clock() 取 CPU 时钟，差值除以 CLOCKS_PER_SEC 得秒数",
            "要 include <time.h>",
            "优化前先计时，用数据说话",
            "qsort 等库函数比自己写的冒泡快几个数量级"
          ]
        }
      ],
      'templates': [
        {
          'name': "计时器模板",
          'code': "#include <stdio.h>\n#include <time.h>\nint main() {\n    clock_t start = clock();\n    long long sum = 0;\n    for (int i = 0; i < 1000000; i++) sum += i;\n    clock_t end = clock();\n    printf(\"sum=%lld 耗时=%.4f秒\\n\", sum, (double)(end-start)/CLOCKS_PER_SEC);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-70",
      'title': "内存布局（栈区/堆区/全局区/代码区）",
      'summary': "程序的内存分成四块，每个变量住在哪决定了它的生命周期。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "一个 C 程序运行时，内存被分成几块区域，每块区域的用途和变量的『活法』完全不同。搞懂内存布局，前面学的全局变量、局部变量、static、malloc 就全部串起来了。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "观察变量地址分布",
          'code': "#include <stdio.h>\n#include <stdlib.h>\n\nint global = 1;              // 全局变量 -> 全局区（静态区）\nstatic int s_global = 2;     // 静态全局 -> 全局区\n\nint main() {\n    int local = 3;           // 局部变量 -> 栈区\n    static int s_local = 4;  // 静态局部 -> 全局区\n    int *heap = (int*)malloc(sizeof(int));  // -> 堆区\n\n    printf(\"全局区: %p\\n\", (void*)&global);\n    printf(\"栈区:   %p\\n\", (void*)&local);\n    printf(\"堆区:   %p\\n\", (void*)heap);\n    printf(\"代码/函数: %p\\n\", (void*)main);\n\n    free(heap);\n    return 0;\n}"
        },
        {
          'type': "table",
          'head': [
            "区域",
            "装什么",
            "生命周期",
            "特点"
          ],
          'rows': [
            [
              "代码区",
              "编译后的机器指令、函数",
              "整个程序运行期",
              "只读"
            ],
            [
              "全局区/静态区",
              "全局变量、static 变量",
              "整个程序运行期",
              "自动初始化为 0"
            ],
            [
              "栈区",
              "局部变量、函数参数",
              "函数调用期间",
              "自动分配释放，快但有大小限制"
            ],
            [
              "堆区",
              "malloc 动态分配",
              "直到 free",
              "手动管理，慢但灵活、容量大"
            ]
          ]
        },
        {
          'type': "h",
          'text': "理解各区的意义"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "栈与堆的对比",
          'code': "#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    // 栈：函数里声明就有，函数结束自动消失\n    int stackVar = 10;\n\n    // 堆：malloc 之后直到 free 一直活着，函数结束也不消失\n    int *heapVar = (int*)malloc(sizeof(int));\n    *heapVar = 20;\n    printf(\"stackVar = %d, heapVar = %d\\n\", stackVar, *heapVar);\n    free(heapVar);   // 不 free 就泄漏了\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "返回局部变量地址为什么危险",
          'text': "局部变量住在栈区，函数一返回，栈就被回收，那块地址随时可能被其他调用覆盖。所以第 39 章说『函数里返回局部变量的地址』是危险操作——它指向的栈内存已经失效了。"
        },
        {
          'type': "info",
          'title': "栈溢出",
          'text': "栈区大小有限（通常几 MB）。递归太深、局部数组太大都会把栈撑爆，程序崩掉。堆区则大得多（几百 MB 到 GB），需要大数据量用 malloc。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"内存布局（栈区/堆区/全局区/代码区）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"内存布局（栈区/堆区/全局区/代码区）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"内存布局（栈区/堆区/全局区/代码区）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "程序内存四区：代码区、全局区、栈区、堆区",
            "全局/static 变量在全局区，整个程序期存活",
            "局部变量在栈区，函数结束自动释放",
            "malloc 的内存在堆区，手动 free 才释放",
            "栈小容易溢出，大数据用堆"
          ]
        }
      ],
      'templates': [
        {
          'name': "打印各区域地址",
          'code': "#include <stdio.h>\n#include <stdlib.h>\nint g = 1;\nint main() {\n    int l = 2;\n    int *h = (int*)malloc(sizeof(int));\n    printf(\"全局:%p 栈:%p 堆:%p\\n\", (void*)&g, (void*)&l, (void*)h);\n    free(h);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-71",
      'title': "综合实战：学生成绩管理系统",
      'summary': "把结构体、数组、文件、函数全部用上，做一个能增删改查的成绩系统。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "从现在开始是综合实战。第一个项目：学生成绩管理系统。功能：添加学生、显示列表、按成绩排序、保存到文件、从文件加载。它把结构体、数组、函数、文件操作全部串起来，是你之前所有知识的练兵场。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "学生成绩管理系统（核心框架）",
          'code': "#include <stdio.h>\n#include <string.h>\n\n#define MAX 100\n\ntypedef struct {\n    int id;\n    char name[20];\n    double score;\n} Student;\n\nStudent stu[MAX];\nint count = 0;\n\nvoid addStudent() {\n    if (count >= MAX) { printf(\"学生已满\\n\"); return; }\n    printf(\"输入学号 姓名 成绩：\");\n    scanf(\"%d %s %lf\", &stu[count].id, stu[count].name, &stu[count].score);\n    count++;\n    printf(\"添加成功\\n\");\n}\n\nvoid showAll() {\n    printf(\"学号    姓名      成绩\\n\");\n    for (int i = 0; i < count; i++) {\n        printf(\"%-6d %-10s %.1f\\n\", stu[i].id, stu[i].name, stu[i].score);\n    }\n}\n\nvoid saveToFile() {\n    FILE *fp = fopen(\"students.txt\", \"w\");\n    if (fp == NULL) { printf(\"保存失败\\n\"); return; }\n    fprintf(fp, \"%d\\n\", count);\n    for (int i = 0; i < count; i++) {\n        fprintf(fp, \"%d %s %.1f\\n\", stu[i].id, stu[i].name, stu[i].score);\n    }\n    fclose(fp);\n    printf(\"已保存 %d 条记录\\n\", count);\n}\n\nvoid loadFromFile() {\n    FILE *fp = fopen(\"students.txt\", \"r\");\n    if (fp == NULL) return;\n    fscanf(fp, \"%d\", &count);\n    for (int i = 0; i < count; i++) {\n        fscanf(fp, \"%d %s %lf\", &stu[i].id, stu[i].name, &stu[i].score);\n    }\n    fclose(fp);\n}\n\nint main() {\n    loadFromFile();\n    int choice;\n    do {\n        printf(\"\\n=== 学生成绩管理系统 ===\\n\");\n        printf(\"1. 添加 2. 显示 3. 保存 0. 退出\\n\");\n        printf(\"请选择：\");\n        scanf(\"%d\", &choice);\n        switch (choice) {\n            case 1: addStudent(); break;\n            case 2: showAll(); break;\n            case 3: saveToFile(); break;\n        }\n    } while (choice != 0);\n    printf(\"再见\\n\");\n    return 0;\n}"
        },
        {
          'type': "list",
          'items': [
            "数据层：Student 结构体 + 数组 stu + 数量 count",
            "功能层：addStudent、showAll、saveToFile、loadFromFile 各管一件事",
            "交互层：do-while 菜单 + switch 分发，选 0 退出",
            "持久化：退出前保存到文件，下次启动自动加载"
          ]
        },
        {
          'type': "info",
          'title': "怎么扩展",
          'text': "想加『按成绩排序』，就写个 sortByScore 函数，用第 63 章的冒泡或 qsort 对结构体数组排序，然后在菜单里加一个 case 调用它。想加删除，就写个 deleteStudent 把后面的元素往前挪。这个架子可以无限扩展。"
        },
        {
          'type': "warn",
          'title': "注意字符串输入",
          'text': "scanf 读字符串不能带空格（姓名里别用空格）。另外读菜单选择后，输入缓冲里会残留回车，用 getchar() 清一下，避免影响后续 scanf。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"综合实战：学生成绩管理系统\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"综合实战：学生成绩管理系统\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"综合实战：学生成绩管理系统\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "大项目拆成小函数，每个函数只做一件事",
            "结构体数组存数据，文件做持久化",
            "do-while 菜单 + switch 是最常见的交互框架",
            "文件保存格式要自洽：数量在头，记录逐行"
          ]
        }
      ],
      'templates': []
    },
    {
      'id': "cl-72",
      'title': "综合实战：通讯录管理系统",
      'summary': "结构体数组 + 查找删除修改，做一个能按姓名搜索的通讯录。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "第二个实战项目：通讯录。它在成绩系统的基础上增加了『查找』和『删除』功能，核心是学怎么按名字找到联系人。功能清单：添加、显示、按姓名查找、删除、退出。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "通讯录管理系统（核心）",
          'code': "#include <stdio.h>\n#include <string.h>\n\n#define MAX 100\n\ntypedef struct {\n    char name[20];\n    char phone[15];\n    char email[30];\n} Contact;\n\nContact book[MAX];\nint count = 0;\n\nvoid add() {\n    if (count >= MAX) { printf(\"通讯录已满\\n\"); return; }\n    printf(\"输入 姓名 电话 邮箱：\");\n    scanf(\"%s %s %s\", book[count].name, book[count].phone, book[count].email);\n    count++;\n}\n\nvoid show() {\n    printf(\"%-10s %-15s %-20s\\n\", \"姓名\", \"电话\", \"邮箱\");\n    for (int i = 0; i < count; i++) {\n        printf(\"%-10s %-15s %-20s\\n\", book[i].name, book[i].phone, book[i].email);\n    }\n}\n\nint findIndex(const char *name) {\n    for (int i = 0; i < count; i++) {\n        if (strcmp(book[i].name, name) == 0) return i;   // 按姓名精确匹配\n    }\n    return -1;\n}\n\nvoid search() {\n    char name[20];\n    printf(\"输入要查找的姓名：\");\n    scanf(\"%s\", name);\n    int idx = findIndex(name);\n    if (idx >= 0) {\n        printf(\"%s %s %s\\n\", book[idx].name, book[idx].phone, book[idx].email);\n    } else {\n        printf(\"没找到 %s\\n\", name);\n    }\n}\n\nvoid removeContact() {\n    char name[20];\n    printf(\"输入要删除的姓名：\");\n    scanf(\"%s\", name);\n    int idx = findIndex(name);\n    if (idx < 0) { printf(\"没找到\\n\"); return; }\n    for (int i = idx; i < count - 1; i++) {\n        book[i] = book[i + 1];   // 后面的元素往前挪\n    }\n    count--;\n    printf(\"已删除\\n\");\n}\n\nint main() {\n    int c;\n    do {\n        printf(\"\\n=== 通讯录 ===\\n\");\n        printf(\"1.添加 2.显示 3.查找 4.删除 0.退出\\n\");\n        printf(\"选择：\");\n        scanf(\"%d\", &c);\n        switch (c) {\n            case 1: add(); break;\n            case 2: show(); break;\n            case 3: search(); break;\n            case 4: removeContact(); break;\n        }\n    } while (c != 0);\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "findIndex 是核心：用 strcmp 逐条比较姓名，找到就返回下标，找不到返回 -1。搜索和删除都复用它。删除的实现是『后面的元素整体前移一位，数量减一』——这就是数组删除的标准写法。"
        },
        {
          'type': "info",
          'title': "还能怎么升级",
          'text': "把通讯录存进文件（参考第 71 章）、按姓名排序方便浏览、支持模糊查找（strstr 判断子串）、用双向链表替代数组——每一步都是很好的练手题目。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"综合实战：通讯录管理系统\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"综合实战：通讯录管理系统\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"综合实战：通讯录管理系统\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "通讯录 = 结构体数组 + 查找 + 删除",
            "strcmp == 0 判断姓名匹配，strstr 做模糊查找",
            "数组删除：后面的元素前移，count 减一",
            "一个核心查找函数能被搜索和删除复用"
          ]
        }
      ],
      'templates': []
    },
    {
      'id': "cl-73",
      'title': "综合实战：链表实现的图书/商品管理",
      'summary': "用链表替代数组，体验动态增删不搬数据的管理系统。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "第三个实战：用链表实现一个商品管理系统。链表的优势在这里体现：增删商品不用搬动其他数据，数量不设上限（动态分配）。这章把链表的所有操作综合起来。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "链表商品管理（核心）",
          'code': "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\ntypedef struct Node {\n    int id;\n    char name[30];\n    double price;\n    struct Node *next;\n} Node;\n\nNode *head = NULL;\n\nNode* add(Node *h) {\n    Node *n = (Node*)malloc(sizeof(Node));\n    if (n == NULL) return h;\n    printf(\"输入 编号 名称 价格：\");\n    scanf(\"%d %s %lf\", &n->id, n->name, &n->price);\n    n->next = h;      // 头插\n    return n;\n}\n\nvoid show(Node *h) {\n    printf(\"编号  名称            价格\\n\");\n    for (Node *p = h; p; p = p->next) {\n        printf(\"%-5d %-15s %.2f\\n\", p->id, p->name, p->price);\n    }\n}\n\nNode* delById(Node *h, int id) {\n    Node *cur = h, *prev = NULL;\n    while (cur && cur->id != id) { prev = cur; cur = cur->next; }\n    if (cur == NULL) { printf(\"没找到编号 %d\\n\", id); return h; }\n    if (prev == NULL) h = cur->next;\n    else prev->next = cur->next;\n    free(cur);\n    printf(\"已删除\\n\");\n    return h;\n}\n\nvoid freeAll(Node *h) {\n    while (h) {\n        Node *t = h;\n        h = h->next;\n        free(t);\n    }\n}\n\nint main() {\n    int c, id;\n    do {\n        printf(\"\\n=== 商品管理 ===\\n\");\n        printf(\"1.添加 2.显示 3.删除 0.退出\\n\");\n        printf(\"选择：\");\n        scanf(\"%d\", &c);\n        switch (c) {\n            case 1: head = add(head); break;\n            case 2: show(head); break;\n            case 3: printf(\"输入要删除的编号：\"); scanf(\"%d\", &id);\n                    head = delById(head, id); break;\n        }\n    } while (c != 0);\n    freeAll(head);   // 退出前释放整个链表\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "注意几个细节：head 会在 add 和 delById 里变化，所以用返回值更新 head（或用二级指针）。退出前调 freeAll 逐个释放节点，不泄漏内存。add 用头插，最新添加的排最前面。"
        },
        {
          'type': "warn",
          'title': "链表项目的内存纪律",
          'text': "链表的每个节点都是 malloc 的，程序退出前必须 freeAll。这是链表项目最容易丢分的地方，面试官一定会问：『你的链表内存释放干净了吗？』"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"综合实战：链表实现的图书/商品管理\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"综合实战：链表实现的图书/商品管理\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"综合实战：链表实现的图书/商品管理\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "链表管理系统：节点 = 商品数据 + next",
            "增删改 head 的函数要返回新 head，或传二级指针",
            "头插法让最新商品在最前面",
            "退出前 freeAll 逐个释放节点，防内存泄漏"
          ]
        }
      ],
      'templates': []
    },
    {
      'id': "cl-74",
      'title': "综合实战：命令行贪吃蛇或猜数字游戏",
      'summary': "猜数字 + 随机数 + 循环 + 条件全上手，再挑战字符版贪吃蛇。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "做个小游戏最能调动学习热情。先实现一个入门级『猜数字』：程序随机出一个 1-100 的数，你猜，程序提示大了还是小了，直到猜中。它把随机数、循环、条件判断全用上了。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "猜数字游戏",
          'code': "#include <stdio.h>\n#include <stdlib.h>\n#include <time.h>\n\nint main() {\n    srand(time(NULL));            // 用当前时间做随机种子\n    int secret = rand() % 100 + 1; // 1-100 的随机数\n    int guess, times = 0;\n\n    printf(\"我心里想了一个 1-100 的数，来猜猜看！\\n\");\n    do {\n        printf(\"你的猜测：\");\n        scanf(\"%d\", &guess);\n        times++;\n        if (guess > secret) printf(\"大了！\\n\");\n        else if (guess < secret) printf(\"小了！\\n\");\n    } while (guess != secret);\n\n    printf(\"恭喜猜中！答案是 %d，你猜了 %d 次\\n\", secret, times);\n    return 0;\n}"
        },
        {
          'type': "list",
          'items': [
            "<code.inline>srand(time(NULL))</code.inline> 用时间播种，<code.inline>rand() % 100 + 1</code.inline> 生成 1-100 随机数",
            "do-while 保证先猜一次再判断，天然适合『先做后验』",
            "每次提示大了/小了，帮玩家收敛答案",
            "记录猜测次数，让游戏有挑战性"
          ]
        },
        {
          'type': "info",
          'title': "进阶玩法：猜数字的二分策略",
          'text': "聪明的玩家每次猜中间数（50，然后 25 或 75...），最多 7 次必中——这正是第 64 章二分查找的思想。可以把『猜了几次』和理论最优次数对比。"
        },
        {
          'type': "h",
          'text': "挑战版：字符贪吃蛇（思路版）"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "贪吃蛇核心逻辑骨架",
          'code': "#include <stdio.h>\n#include <conio.h>   // Windows 下 _getch() 读按键\n\nint main() {\n    // 1. 用二维数组或坐标模拟地图\n    // 2. 蛇 = 一串坐标（可用数组或链表），食物 = 一个随机坐标\n    // 3. 每帧：读方向键 -> 移动蛇头 -> 判断是否撞墙/撞自己/吃食物\n    // 4. 吃食物：蛇变长 + 生成新食物\n    // 5. 撞墙或撞自己：游戏结束\n\n    printf(\"贪吃蛇核心：蛇头坐标(x,y)，每帧按方向移动一格，\\n\");\n    printf(\"吃食物长度+1，撞墙或撞自己结束。\\n\");\n    printf(\"可以用 _getch() 读方向键（Windows），或用 kbhit 轮询。\\n\");\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "注意 conio.h 的平台性",
          'text': "<code.inline>_getch()</code.inline>、kbhit 来自 conio.h，只在 Windows 的编译器（如 MinGW）可用。Linux/macOS 需要换用 termios 或 ncurses 库。写跨平台代码时要注意这种差异。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"综合实战：命令行贪吃蛇或猜数字游戏\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"综合实战：命令行贪吃蛇或猜数字游戏\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"综合实战：命令行贪吃蛇或猜数字游戏\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "猜数字：srand 播种 + rand 取随机数 + do-while 循环",
            "srand(time(NULL)) 让每次随机数不同",
            "贪吃蛇 = 坐标移动 + 撞墙判定 + 增长逻辑",
            "conio.h 是 Windows 专用，跨平台要注意"
          ]
        }
      ],
      'templates': [
        {
          'name': "猜数字完整模板",
          'code': "#include <stdio.h>\n#include <stdlib.h>\n#include <time.h>\nint main() {\n    srand(time(NULL));\n    int s = rand() % 100 + 1, g;\n    do {\n        printf(\"猜：\"); scanf(\"%d\", &g);\n        if (g > s) printf(\"大了\\n\");\n        else if (g < s) printf(\"小了\\n\");\n    } while (g != s);\n    printf(\"正确！是 %d\\n\", s);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-75",
      'title': "综合实战：文件版成绩统计系统",
      'summary': "从文件读入全班成绩，算出最高最低平均分和分布，一步到位。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "最后一个数据类实战：从文件读入一个班的成绩，统计最高分、最低分、平均分、及格率和分数段分布，并输出报告。它综合了文件读取、数组、统计逻辑，接近真实工作场景。"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "文件版成绩统计",
          'code': "#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen(\"scores.txt\", \"r\");\n    if (fp == NULL) {\n        printf(\"打开 scores.txt 失败，请先创建文件\\n\");\n        return 1;\n    }\n\n    int scores[100], n = 0;\n    while (fscanf(fp, \"%d\", &scores[n]) == 1) n++;\n    fclose(fp);\n\n    if (n == 0) { printf(\"文件里没有成绩\\n\"); return 1; }\n\n    // 统计\n    int sum = 0, max = scores[0], min = scores[0];\n    int pass = 0;\n    int a=0, b=0, c=0, d=0;   // 90+ / 75-89 / 60-74 / <60\n    for (int i = 0; i < n; i++) {\n        sum += scores[i];\n        if (scores[i] > max) max = scores[i];\n        if (scores[i] < min) min = scores[i];\n        if (scores[i] >= 60) pass++;\n        if (scores[i] >= 90) a++;\n        else if (scores[i] >= 75) b++;\n        else if (scores[i] >= 60) c++;\n        else d++;\n    }\n\n    printf(\"==== 成绩统计报告 ====\\n\");\n    printf(\"人数：%d\\n\", n);\n    printf(\"最高分：%d  最低分：%d\\n\", max, min);\n    printf(\"平均分：%.1f\\n\", (double)sum / n);\n    printf(\"及格率：%.1f%%\\n\", (double)pass / n * 100);\n    printf(\"优秀(90+): %d  良好(75-89): %d\\n\", a, b);\n    printf(\"及格(60-74): %d  不及格(<60): %d\\n\", c, d);\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "配套：先生成成绩文件"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "生成 scores.txt",
          'code': "#include <stdio.h>\n#include <stdlib.h>\n#include <time.h>\n\nint main() {\n    srand(time(NULL));\n    FILE *fp = fopen(\"scores.txt\", \"w\");\n    if (fp == NULL) return 1;\n    for (int i = 0; i < 10; i++) {\n        fprintf(fp, \"%d\\n\", rand() % 101);   // 随机 0-100 分\n    }\n    fclose(fp);\n    printf(\"已生成 10 条随机成绩\\n\");\n    return 0;\n}"
        },
        {
          'type': "list",
          'items': [
            "fscanf 循环读入直到返回不等于 1，就是读完了",
            "统计变量：sum、max、min、pass 等各司其职",
            "百分号在 printf 里要写 %%",
            "先用生成器造数据，再用统计器算，测试闭环"
          ]
        },
        {
          'type': "info",
          'title': "真实场景",
          'text': "这就是数据分析的雏形：数据在文件里 → 读入程序 → 加工统计 → 输出报告。如果数据量大，还可以用第 63 章的排序看中位数，用第 19/20 章处理带名字的数据。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"综合实战：文件版成绩统计系统\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"综合实战：文件版成绩统计系统\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"综合实战：文件版成绩统计系统\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "fscanf 的返回值是循环读取的终止条件",
            "统计 = 一个循环内同时更新多个统计变量",
            "printf 输出 % 要写 %%",
            "生成器 + 统计器搭配，测试更完整"
          ]
        }
      ],
      'templates': []
    },
    {
      'id': "cl-76",
      'title': "C 语言的应用领域（系统/嵌入式/驱动）简介",
      'summary': "C 依然统治底层：操作系统、嵌入式、驱动、数据库都靠它。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "学了这么多 C，你可能想知道：它到底用在哪？答案是：**凡是要和硬件打交道的底层领域，几乎都是 C 的主场**。C 能直接操作内存和寄存器、贴近硬件、性能极佳，这是其他高级语言比不了的。"
        },
        {
          'type': "h",
          'text': "C 的主战场"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "C 语言的一行底层代码",
          'code': "#include <stdio.h>\n\nint main() {\n    // C 能直接操作内存地址（其他语言大多不行）\n    int x = 42;\n    int *p = &x;         // 直接拿到内存地址\n    printf(\"x 在内存地址 %p，值是 %d\\n\", (void*)p, *p);\n    return 0;\n}"
        },
        {
          'type': "list",
          'items': [
            "操作系统内核：Linux 内核、Windows 内核的核心都是 C",
            "嵌入式开发：单片机、STM32、车机、家电控制芯片的固件",
            "设备驱动：显卡、声卡、网卡驱动，直接和寄存器打交道",
            "数据库：SQLite、MySQL 的底层引擎是 C",
            "编译器/解释器：很多语言的实现就是 C",
            "游戏引擎/图形库：OpenGL、很多引擎核心用 C 编写"
          ]
        },
        {
          'type': "table",
          'head': [
            "领域",
            "为什么用 C",
            "示例"
          ],
          'rows': [
            [
              "操作系统",
              "直接管理内存、进程、硬件",
              "Linux 内核"
            ],
            [
              "嵌入式",
              "资源极有限，C 轻量高效",
              "STM32 单片机"
            ],
            [
              "驱动",
              "要精确控制硬件寄存器",
              "设备驱动"
            ],
            [
              "数据库",
              "性能关键，内存控制精细",
              "SQLite"
            ],
            [
              "高性能库",
              "零开销抽象，贴近机器",
              "图像/音视频解码库"
            ]
          ]
        },
        {
          'type': "p",
          'text': "C 的哲学是『相信程序员』：它不拦着你越界，也不帮你管内存，把全部能力交给你，代价是你要自己负责。这也解释了为什么 C 学好了，再学 C++、Java、Go、Rust 都很快——它们的根基都是 C 的思想。"
        },
        {
          'type': "info",
          'title': "C 的兄弟 C++",
          'text': "C++ 是 C 的超集：在 C 的基础上加了类、模板、标准库等现代特性，但保留 C 的底层能力。学完 C 再学 C++ 很顺，很多系统软件用 C++ 编写（如 Chrome、游戏引擎）。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"C 语言的应用领域（系统/嵌入式/驱动）简介\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"C 语言的应用领域（系统/嵌入式/驱动）简介\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"C 语言的应用领域（系统/嵌入式/驱动）简介\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "C 统治底层：操作系统、嵌入式、驱动、数据库核心",
            "C 能直接操作内存和硬件，这是最大优势",
            "C 轻量高效，适合资源受限的环境",
            "学懂 C，学其他语言都事半功倍"
          ]
        }
      ],
      'templates': []
    },
    {
      'id': "cl-77",
      'title': "常用标准库函数速查",
      'summary': "stdio/stdlib/string/math 四大头文件的常用函数一表打尽。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "C 标准库是你最强大的工具箱。这一章按头文件分类，把最常用的函数列成速查表，附简短示例。遇到需求先想：标准库里有没有现成的？"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "四大库综合示例",
          'code': "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <math.h>\n\nint main() {\n    // math.h\n    printf(\"sqrt(16) = %.1f\\n\", sqrt(16));       // 4\n    printf(\"pow(2, 10) = %.0f\\n\", pow(2, 10));   // 1024\n    printf(\"abs(-5) = %d\\n\", abs(-5));           // 5\n    printf(\"fabs(-3.5) = %.1f\\n\", fabs(-3.5));   // 3.5\n\n    // string.h\n    char s[50];\n    strcpy(s, \"hello\");\n    printf(\"strlen = %d\\n\", (int)strlen(s));     // 5\n    printf(\"strstr = %s\\n\", strstr(s, \"ell\"));   // ell\n\n    // stdlib.h\n    int v = atoi(\"42\");\n    printf(\"atoi = %d\\n\", v);\n    return 0;\n}"
        },
        {
          'type': "table",
          'head': [
            "函数",
            "头文件",
            "作用"
          ],
          'rows': [
            [
              "printf / scanf",
              "stdio.h",
              "屏幕输出 / 键盘输入"
            ],
            [
              "fopen / fclose / fread / fwrite",
              "stdio.h",
              "文件操作"
            ],
            [
              "fprintf / fscanf / fgets",
              "stdio.h",
              "格式化/按行读写文件"
            ],
            [
              "malloc / calloc / realloc / free",
              "stdlib.h",
              "动态内存"
            ],
            [
              "atoi / atof / strtol",
              "stdlib.h",
              "字符串转数字"
            ],
            [
              "abs / rand / srand",
              "stdlib.h",
              "绝对值 / 随机数"
            ],
            [
              "qsort / bsearch",
              "stdlib.h",
              "快速排序 / 二分查找"
            ],
            [
              "strlen / strcpy / strcat / strcmp",
              "string.h",
              "字符串操作四件套"
            ],
            [
              "strstr / strchr",
              "string.h",
              "查找子串 / 查找字符"
            ],
            [
              "memset / memcpy",
              "string.h",
              "内存置零 / 内存拷贝"
            ],
            [
              "sqrt / pow / fabs / ceil / floor",
              "math.h",
              "数学计算"
            ],
            [
              "clock",
              "time.h",
              "程序计时"
            ]
          ]
        },
        {
          'type': "tip",
          'title': "怎么查标准库",
          'text': "记住大方向：stdio 管输入输出文件，stdlib 管内存和转换，string 管字符串和内存，math 管数学。具体细节忘了就查 cppreference 或 MSDN，别硬背。"
        },
        {
          'type': "info",
          'title': "编译注意",
          'text': "用 math.h 的函数，编译时要加 <code.inline>-lm</code.inline> 链接数学库：<code.inline>gcc myprog.c -lm -o myprog</code.inline>，否则报 undefined reference to 'sqrt'。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"常用标准库函数速查\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"常用标准库函数速查\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"常用标准库函数速查\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "stdio：printf/scanf/文件全家桶",
            "stdlib：malloc 家族、atoi、qsort",
            "string：strlen/strcpy/strcmp/strstr/memset",
            "math：sqrt/pow/fabs，编译加 -lm",
            "用标准库函数，别重复造轮子"
          ]
        }
      ],
      'templates': [
        {
          'name': "标准库全家福",
          'code': "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <math.h>\nint main() {\n    printf(\"%.2f\\n\", sqrt(25));\n    printf(\"%d\\n\", atoi(\"123\") + 1);\n    printf(\"%d\\n\", (int)strlen(\"abc\"));\n    printf(\"%d\\n\", abs(-7));\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cl-78",
      'title': "面试题：指针与数组经典题",
      'summary': "sizeof、strlen、指针加减、二维数组名，高频考点逐个击破。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "指针和数组是 C 面试的重灾区，题目看似简单实则全是坑。这一章把最高频的几类题讲透，每个都能看出你对底层的理解。"
        },
        {
          'type': "h",
          'text': "sizeof vs strlen"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "sizeof 和 strlen 的区别",
          'code': "#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char s[] = \"hello\";\n    char *p = \"hello\";\n\n    printf(\"sizeof(s) = %d\\n\", (int)sizeof(s));     // 6：数组大小，含 \\0\n    printf(\"strlen(s) = %d\\n\", (int)strlen(s));     // 5：字符个数，不含 \\0\n    printf(\"sizeof(p) = %d\\n\", (int)sizeof(p));     // 8：指针大小（64 位）\n    printf(\"strlen(p) = %d\\n\", (int)strlen(p));     // 5\n\n    int a[] = {1, 2, 3, 4, 5};\n    printf(\"数组元素个数 = %d\\n\", (int)(sizeof(a) / sizeof(a[0])));  // 5\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "高频结论：sizeof 在编译期算，数组名在 sizeof 里代表整个数组；指针 sizeof 永远是地址大小（64 位系统 8 字节）。strlen 在运行期数到 \\0 为止，只对字符串有效。"
        },
        {
          'type': "h",
          'text': "指针加减的地址计算"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "经典指针题",
          'code': "#include <stdio.h>\n\nint main() {\n    int a[5] = {10, 20, 30, 40, 50};\n    int *p = a;\n\n    printf(\"*p = %d\\n\", *p);             // 10\n    printf(\"*(p+2) = %d\\n\", *(p + 2));   // 30\n    printf(\"*p+2 = %d\\n\", *p + 2);       // 12！先解引用再加 2\n    printf(\"*(p+4) = %d\\n\", *(p + 4));   // 50\n\n    // 面试常考：a 和 &a 的区别\n    printf(\"a = %p\\n\", (void*)a);        // 首元素地址\n    printf(\"&a = %p\\n\", (void*)&a);      // 整个数组的地址（值相同）\n    printf(\"a+1 跳过一个 int = %p\\n\", (void*)(a + 1));\n    printf(\"&a+1 跳过整个数组 = %p\\n\", (void*)(&a + 1));\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "经典坑：<code.inline>*p+2</code.inline> 是 (*p)+2 而不是 *(p+2)，* 优先级比 + 高。另一个经典：<code.inline>a+1</code.inline> 跳过一个元素，<code.inline>&a+1</code.inline> 跳过整个数组（5 个 int），两者地址相差 20 字节。"
        },
        {
          'type': "warn",
          'title': "数组做参数就退化",
          'text': "数组传给函数时退化成指针：<code.inline>void f(int a[])</code.inline> 里的 a 其实就是 int*。所以在函数里 <code.inline>sizeof(a)</code.inline> 得到的是 8（指针），不是数组大小！想传大小必须额外传一个参数。"
        },
        {
          'type': "info",
          'title': "二维数组名",
          'text': "<code.inline>int a[3][4]</code.inline>，a 是『指向含 4 个 int 的数组的指针』，a+1 跳过一行（16 字节）。a[1] 是第 1 行的行首地址。这些理解了，二维数组面试题随便问。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"面试题：指针与数组经典题\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"面试题：指针与数组经典题\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"面试题：指针与数组经典题\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "sizeof 编译期算数组总大小，指针 sizeof 恒为地址大小",
            "strlen 运行期数到 \\0，只对字符串有效",
            "*p+2 = (*p)+2，* 优先级高于 +",
            "a+1 跳一个元素，&a+1 跳整个数组",
            "数组作参数退化为指针，函数里 sizeof(a) 是 8"
          ]
        }
      ],
      'templates': []
    },
    {
      'id': "cl-79",
      'title': "面试题：内存管理与结构体",
      'summary': "结构体大小、内存对齐、malloc/free 细节，面试必问大题。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "内存管理和结构体是 C 面试的另一大块：结构体占多少字节、为什么对齐、动态内存的各种坑。这一章逐题拆解。"
        },
        {
          'type': "h",
          'text': "结构体大小与内存对齐"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "结构体大小计算",
          'code': "#include <stdio.h>\n\nstruct A {           // 按顺序：\n    char c;          // 1 字节，地址 0\n    int i;           // 4 字节，为了对齐从地址 4 开始，中间空 3 字节\n    double d;        // 8 字节，地址 8\n};\n// 1+7+8 = 16？不，是 24：char(1)+填充(3)+int(4)=8，再+8=16，16 能被最大对齐 8 整除，所以是 16\n\nstruct B {\n    int i;           // 4\n    char c;          // 1，然后填充 3 到能被 4 整除\n    double d;        // 8\n};                   // 总大小 16\n\nint main() {\n    printf(\"sizeof(struct A) = %d\\n\", (int)sizeof(struct A));\n    printf(\"sizeof(struct B) = %d\\n\", (int)sizeof(struct B));\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "内存对齐的规则：每个成员要按自己的对齐要求存放（char 任意、int 4 的倍数、double 8 的倍数），结构体总大小要是最大成员对齐数的倍数。所以成员顺序会影响结构体大小：把大的放前面能省内存。"
        },
        {
          'type': "h",
          'text': "malloc 的细节题"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "malloc 面试常见问题",
          'code': "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main() {\n    // Q: malloc 返回值为什么强转？\n    // A: C 里可以不用转（void* 自动转），C++ 必须转。规范写法是转。\n    int *p = (int*)malloc(10 * sizeof(int));\n\n    // Q: 如何给结构体分配内存？\n    // A: 用 sizeof(结构体类型)，别手算字节数\n    // struct Stu *s = (struct Stu*)malloc(sizeof(struct Stu));\n\n    // Q: malloc 后忘了 free 会怎样？\n    // A: 内存泄漏，程序内存越占越多\n\n    // Q: malloc 的内存会清零吗？\n    // A: 不会！要用 calloc 或 memset\n    int *z = (int*)malloc(3 * sizeof(int));\n    memset(z, 0, 3 * sizeof(int));   // 手动清零\n\n    free(p); free(z);\n    printf(\"这些细节都答上来，内存这关就过了\\n\");\n    return 0;\n}"
        },
        {
          'type': "list",
          'items': [
            "malloc 不清零，calloc 清零",
            "free 只能释放 malloc/calloc/realloc 得到的指针",
            "free 后指针要置 NULL，防止 use-after-free",
            "结构体大小用 sizeof，别手算字节数（有对齐）",
            "malloc 失败返回 NULL，一定要判空"
          ]
        },
        {
          'type': "info",
          'title': "常见的隐藏考题",
          'text': "『为什么 char *p = \"hello\"; p[0]='H' 会崩？』——字符串字面量在只读区。『free 一个栈上变量的地址？』——非法，free 只能 free 堆内存。这些题目都指向同一个核心：**清楚每块内存归谁管**。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"面试题：内存管理与结构体\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"面试题：内存管理与结构体\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"面试题：内存管理与结构体\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "结构体大小受内存对齐影响，成员顺序影响大小",
            "成员按对齐要求放，总大小是最大对齐数的倍数",
            "malloc 不清零，calloc 清零，free 后置 NULL",
            "结构体分配用 sizeof(类型)，别手算",
            "字符串字面量只读，不能修改"
          ]
        }
      ],
      'templates': []
    },
    {
      'id': "cl-80",
      'title': "面试题：综合与经典代码题",
      'summary': "字符串反转、判断回文、素数、链表反转，手写代码题集锦。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "最后一章：综合经典代码题。面试常让手写的小程序，每一道都能综合考察你的基本功。练熟它们，面试写代码不慌。"
        },
        {
          'type': "h",
          'text': "经典题 1：字符串反转"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "字符串反转",
          'code': "#include <stdio.h>\n#include <string.h>\n\nvoid reverse(char s[]) {\n    int i = 0, j = (int)strlen(s) - 1;\n    while (i < j) {\n        char t = s[i];\n        s[i] = s[j];\n        s[j] = t;\n        i++; j--;\n    }\n}\n\nint main() {\n    char s[] = \"hello\";\n    reverse(s);\n    printf(\"反转后 = %s\\n\", s);   // olleh\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "经典题 2：判断回文 + 素数"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "回文与素数",
          'code': "#include <stdio.h>\n#include <string.h>\n#include <math.h>\n\n// 回文：正读反读一样\nint isPalindrome(char s[]) {\n    int i = 0, j = (int)strlen(s) - 1;\n    while (i < j) {\n        if (s[i] != s[j]) return 0;\n        i++; j--;\n    }\n    return 1;\n}\n\n// 素数：只能被 1 和自身整除\nint isPrime(int n) {\n    if (n < 2) return 0;\n    for (int i = 2; i <= (int)sqrt(n); i++) {\n        if (n % i == 0) return 0;\n    }\n    return 1;\n}\n\nint main() {\n    printf(\"radar 是回文吗：%s\\n\", isPalindrome(\"radar\") ? \"是\" : \"否\");\n    printf(\"17 是素数吗：%s\\n\", isPrime(17) ? \"是\" : \"否\");\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "经典题 3：链表反转"
        },
        {
          'type': "code",
          'lang': "c",
          'title': "链表反转（面试高频）",
          'code': "#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node { int data; struct Node *next; } Node;\n\nNode* reverseList(Node *head) {\n    Node *prev = NULL, *cur = head;\n    while (cur != NULL) {\n        Node *nextNode = cur->next;   // 先保存下一个\n        cur->next = prev;             // 掉转箭头\n        prev = cur;                   // 前移\n        cur = nextNode;\n    }\n    return prev;   // prev 变成新头\n}\n\nint main() {\n    Node n1={1,NULL}, n2={2,NULL}, n3={3,NULL};\n    n1.next=&n2; n2.next=&n3;\n    Node *newHead = reverseList(&n1);\n    for (Node *p = newHead; p; p = p->next) printf(\"%d \", p->data);\n    printf(\"\\n\");   // 3 2 1\n    return 0;\n}"
        },
        {
          'type': "list",
          'items': [
            "字符串反转：双指针 i/j 从两端往中间交换",
            "回文判断：双指针两端比较，不相等就不是回文",
            "素数：只试到 sqrt(n) 即可，优化经典",
            "链表反转：三指针 prev/cur/next，逐个掉转箭头"
          ]
        },
        {
          'type': "tip",
          'title': "面试技巧",
          'text': "先讲思路再写代码；边界情况（空串、n<2、空链表）主动说；写完自己过一遍测试用例。会这些套路，再难的题目也能稳扎稳打拆解出来。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"面试题：综合与经典代码题\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"面试题：综合与经典代码题\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"面试题：综合与经典代码题\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "双指针技巧：字符串反转、回文判断通用",
            "素数判断优化到 sqrt(n)",
            "链表反转三指针 prev/cur/next",
            "面试先讲思路、后写代码、再测边界",
            "至此 80 章全部学完，祝你顺利！"
          ]
        }
      ],
      'templates': []
    }
  ]
});

