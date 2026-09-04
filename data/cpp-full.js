/* ============================================================
   计算机知识库 · 数据：C++ 完整课程（80 章，从下载安装到进阶）
   ============================================================ */
window.LANGUAGE_EXTRA = window.LANGUAGE_EXTRA || [];
window.LANGUAGE_EXTRA.push({
  'id': "cpp",
  'name': "C++",
  'icon': "C+",
  'tagline': "高性能游戏与系统开发，在 C 之上加入面向对象。",
  'intro': "这是一套从零开始的 C++ 完整课程。第 1 章教你下载安装编译环境，之后从 Hello World、变量、运算符、函数一路讲到类、继承、多态、模板、STL 容器、智能指针、异常、文件与多线程，最后是综合实战项目和大量高频面试题。每章都用大白话讲透概念并配可运行代码，学完这套课程，你将掌握用 C++ 开发游戏、高性能系统和桌面应用的基础能力。",
  'meta': {
    "难度": "从零到进阶",
    "章节": "80 章",
    "场景": "游戏/性能敏感/桌面"
  },
  'lessons': [
    {
      'id': "cp-1",
      'title': "下载与安装：装好 C++ 编译环境",
      'summary': "选 Visual Studio Community 或 MinGW-w64，装好并用 g++ --version 验证。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "学习 C++ 的第一步，是把编译环境装到电脑上。和 Python 这种解释型语言不同，C++ 程序要先『编译』成机器码才能运行，所以我们需要一个编译器。好消息是，目前主流的两套 C++ 开发环境都完全免费，跟着本章操作，十分钟内就能让第一个程序跑起来。"
        },
        {
          'type': "h",
          'text': "方式一：Visual Studio Community（最省心，推荐新手）"
        },
        {
          'type': "p",
          'text': "Visual Studio 是微软官方的集成开发环境（IDE），集编辑器、编译器、调试器于一身，写代码、编译、调试一站式搞定。Community 社区版对学生、开源贡献者和个人开发者完全免费。"
        },
        {
          'type': "list",
          'items': [
            "打开官网下载页：<a href='https://visualstudio.microsoft.com/vs/community/' target='_blank' rel='noopener'>visualstudio.microsoft.com/vs/community/</a>",
            "点击『免费下载』，得到 Visual Studio Installer 安装器",
            "运行安装器，勾选工作负载『使用 C++ 的桌面开发』（Desktop development with C++），再点安装",
            "等待安装完成（组件较多，需要耐心，安装约几个 GB）"
          ]
        },
        {
          'type': "h",
          'text': "方式二：MinGW-w64 + VS Code（轻量灵活）"
        },
        {
          'type': "p",
          'text': "如果你想要一个轻量、跨平台的组合，推荐 MinGW-w64（Windows 版 g++ 编译器）+ VS Code 编辑器。MinGW-w64 提供免费开源的 g++ 编译器，下载解压即可使用。"
        },
        {
          'type': "list",
          'items': [
            "下载 MinGW-w64 整合包：<a href='https://winlibs.com' target='_blank' rel='noopener'>winlibs.com</a>",
            "选择 64 位版本下载，解压到比如 D:\\mingw64",
            "把解压目录下的 bin 文件夹路径（如 D:\\mingw64\\bin）加进系统环境变量 PATH",
            "安装编辑器 VS Code：<a href='https://code.visualstudio.com' target='_blank' rel='noopener'>code.visualstudio.com</a>，再在扩展商店安装官方 C/C++ 扩展"
          ]
        },
        {
          'type': "h",
          'text': "验证安装"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "验证编译器是否装好",
          'code': "g++ --version\n\n# 如果输出类似：g++ (MinGW-W64) 13.2.0 ... 说明安装成功"
        },
        {
          'type': "p",
          'text': "打开命令行（按 <code.inline>Win+R</code.inline> 输入 <code.inline>cmd</code.inline> 回车），输入 <code.inline>g++ --version</code.inline>，能看到版本号就说明编译器就绪。Visual Studio 用户也可以打开『开发者命令提示符』输入 <code.inline>cl</code.inline> 验证。"
        },
        {
          'type': "warn",
          'title': "经典症状：找不到 g++",
          'text': "如果在 cmd 里输入 g++ 提示『不是内部或外部命令』，说明 PATH 没配好。回到第 7 步重新检查 bin 路径是否正确，然后一定要新开一个命令行窗口再试（旧窗口不会自动刷新环境变量）。"
        },
        {
          'type': "tip",
          'title': "怎么选",
          'text': "想专注学 C++ 本身、少折腾环境：选 Visual Studio Community。喜欢轻量编辑器和命令行：选 MinGW-w64 + VS Code。两条路线都能跑通本课程的所有代码。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"下载与安装：装好 C++ 编译环境\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"下载与安装：装好 C++ 编译环境\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"下载与安装：装好 C++ 编译环境\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "C++ 需要编译环境，Visual Studio Community 和 MinGW-w64 都免费",
            "Visual Studio 安装时要勾选『使用 C++ 的桌面开发』",
            "MinGW-w64 要配置好 PATH，才能直接用 g++ 命令",
            "用 g++ --version 验证安装是否成功"
          ]
        }
      ],
      'templates': [
        {
          'name': "验证安装命令",
          'code': "g++ --version"
        }
      ]
    },
    {
      'id': "cp-2",
      'title': "C++ 与 C 的区别、第一个程序 Hello World",
      'summary': "了解 C++ 的来龙去脉，写并理解第一个 Hello World。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "C++ 是在 C 语言基础上发展而来的一门语言，可以理解为『C 语言 + 面向对象 + 一大堆高级特性』。它由 Bjarne Stroustrup（比雅尼·斯特劳斯特鲁普）在 1980 年代设计，名字里的 ++ 取自 C 的自增运算符，寓意它是 C 的进化版。"
        },
        {
          'type': "table",
          'head': [
            "对比项",
            "C",
            "C++"
          ],
          'rows': [
            [
              "设计理念",
              "面向过程",
              "面向对象 + 面向过程"
            ],
            [
              "类与对象",
              "没有",
              "核心特性，有 class"
            ],
            [
              "标准库",
              "较精简",
              "STL 容器、算法、字符串等非常丰富"
            ],
            [
              "典型用途",
              "嵌入式、系统底层",
              "游戏引擎、桌面软件、高性能服务"
            ]
          ]
        },
        {
          'type': "p",
          'text': "任何 C++ 程序都从 <code.inline>main</code.inline> 函数开始执行。下面是经典的 Hello World，几乎每个 C++ 学习者都会先写它。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "第一个 C++ 程序",
          'code': "#include <iostream>\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    std::cout << \"欢迎学习 C++\" << std::endl;\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "逐行解释"
        },
        {
          'type': "list",
          'items': [
            "<code.inline>#include <iostream></code.inline>：引入输入输出头文件，有了它才能用 cout 输出",
            "<code.inline>int main()</code.inline>：程序入口，从这里开始执行",
            "<code.inline>std::cout << \"...\"</code.inline>：把内容输出到屏幕，<< 是输出运算符",
            "<code.inline>std::endl</code.inline>：换行",
            "<code.inline>return 0;</code.inline>：返回 0 表示程序正常结束"
          ]
        },
        {
          'type': "p",
          'text': "C++ 的源文件通常以 <code.inline>.cpp</code.inline> 为扩展名。写好后要用编译器把它编译成可执行文件。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "编译并运行",
          'code': "g++ hello.cpp -o hello\n./hello        # Windows 下输入 hello.exe 运行"
        },
        {
          'type': "tip",
          'title': "本课程的代码怎么运行",
          'text': "本课程每个章节的模板代码都可以复制保存为 .cpp 文件，然后用 <code.inline>g++ 文件名.cpp -o 输出名</code.inline> 编译，最后运行生成的可执行文件。建议亲自动手敲一遍，记忆才深刻。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"C++ 与 C 的区别、第一个程序 Hello World\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"C++ 与 C 的区别、第一个程序 Hello World\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"C++ 与 C 的区别、第一个程序 Hello World\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "C++ = C + 面向对象 + 丰富标准库",
            "程序从 main 函数开始执行",
            "#include <iostream> 引入输入输出库",
            "std::cout << 内容 用于输出，std::endl 换行",
            "return 0 表示程序正常结束"
          ]
        }
      ],
      'templates': [
        {
          'name': "Hello World",
          'code': "#include <iostream>\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    return 0;\n}"
        },
        {
          'name': "自我介绍",
          'code': "#include <iostream>\nint main() {\n    std::cout << \"大家好，我是新手\" << std::endl;\n    std::cout << \"我正在学 C++\" << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-3",
      'title': "输入输出：cout 输出与 cin 输入",
      'summary': "用 cout 输出数据、cin 接收输入，配合 endl 换行。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "程序要和用户交流，就得能『输出』和『输入』。C++ 中输出用 <code.inline>std::cout</code.inline>，输入用 <code.inline>std::cin</code.inline>，它们都定义在头文件 <code.inline><iostream></code.inline> 里。"
        },
        {
          'type': "h",
          'text': "cout 输出：可以连续输出多个内容"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "连续输出",
          'code': "#include <iostream>\nint main() {\n    std::cout << \"今年是\" << 2026 << \"年\" << std::endl;\n    std::cout << \"我\" << \"在\" << \"学C++\" << std::endl;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code.inline><<</code.inline> 可以串起来用，把字符串、数字、变量一个个『流向』cout。字符串必须用引号包起来，数字不用。末尾的 <code.inline>std::endl</code.inline> 表示换行并刷新缓冲区。"
        },
        {
          'type': "h",
          'text': "cin 输入：从键盘读数据"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "接收用户输入",
          'code': "#include <iostream>\n#include <string>\nint main() {\n    std::string name;\n    int age;\n    std::cout << \"请输入名字和年龄：\";\n    std::cin >> name >> age;\n    std::cout << \"你好，\" << name << \"，你\" << age << \"岁\" << std::endl;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>>></code.inline> 是输入运算符，把键盘输入的内容存进变量。<code.inline>std::cin >> name >> age</code.inline> 可以一次读多个值，空格或回车都能分隔。注意读字符串时遇空格会停下，所以输入名字不要带空格。"
        },
        {
          'type': "warn",
          'title': "新手常见坑",
          'text': "用 <code.inline>cin</code.inline> 读字符串时遇到空格就停，比如输入 Alice Wang 只会读到 Alice。想读一整行带空格的文本，要用 <code.inline>std::getline(std::cin, s)</code.inline>，后面讲 string 时会详细说。"
        },
        {
          'type': "info",
          'title': "endl 的两个作用",
          'text': "<code.inline>std::endl</code.inline> 既换行又刷新输出缓冲区（让内容立刻显示）。只想换行不在乎刷新时，也可以写 <code.inline>\\n</code.inline> 字符。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"输入输出：cout 输出与 cin 输入\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"输入输出：cout 输出与 cin 输入\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"输入输出：cout 输出与 cin 输入\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "cout 输出数据，<< 是输出运算符",
            "cin 输入数据，>> 是输入运算符，空格回车分隔",
            "endl 换行并刷新缓冲区",
            "读字符串遇空格会停，读整行要用 getline"
          ]
        }
      ],
      'templates': [
        {
          'name': "问候用户",
          'code': "#include <iostream>\n#include <string>\nint main() {\n    std::string name;\n    std::cout << \"你叫什么名字？\";\n    std::cin >> name;\n    std::cout << \"你好，\" << name << \"！\" << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-4",
      'title': "命名空间：namespace 与 using",
      'summary': "理解命名空间解决名字冲突的原理，学会 std 与自定义命名空间。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "大型项目里函数、变量特别多，难免撞名。命名空间（namespace）就是给这些名字划分『地盘』，不同地盘里可以有同名函数而不冲突。C++ 标准库的几乎所有东西都放在 <code.inline>std</code.inline> 这个命名空间里，所以我们写 <code.inline>std::cout</code.inline>。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "用 std:: 前缀访问标准库",
          'code': "#include <iostream>\nint main() {\n    std::cout << \"用 std:: 前缀访问标准库\" << std::endl;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "每次写 <code.inline>std::</code.inline> 有点啰嗦，可以用 <code.inline>using</code.inline> 关键字把命名空间里的名字『拿进来』，之后就能直接写 <code.inline>cout</code.inline>。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "using namespace std",
          'code': "#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"用了 using 之后不用写 std:: 了\" << endl;\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "谨慎使用 using namespace std",
          'text': "在大型项目或头文件里，<code.inline>using namespace std;</code.inline> 会把整个标准库的名字全部倒入，容易和项目自己的名字冲突。建议在小练习里图省事可以用，真实项目里用 <code.inline>std::</code.inline> 前缀更安全。"
        },
        {
          'type': "h",
          'text': "自定义命名空间"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "创建自己的命名空间",
          'code': "#include <iostream>\nnamespace math {\n    int add(int a, int b) {\n        return a + b;\n    }\n}\nint main() {\n    std::cout << math::add(2, 3) << std::endl;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "用 <code.inline>namespace 名字 { ... }</code.inline> 就能定义自己的命名空间，外部访问时用 <code.inline>名字::成员</code.inline>。以后写库、写框架时，这种隔离能避免大量冲突。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"命名空间：namespace 与 using\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"命名空间：namespace 与 using\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"命名空间：namespace 与 using\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "命名空间为名字划分地盘，解决冲突",
            "C++ 标准库都在 std 命名空间里",
            "using namespace std 可少写前缀，但可能冲突",
            "自定义命名空间用 namespace 名字 { } 定义"
          ]
        }
      ],
      'templates': [
        {
          'name': "自定义命名空间",
          'code': "#include <iostream>\nnamespace mylib {\n    void hello() {\n        std::cout << \"来自 mylib 的问候\" << std::endl;\n    }\n}\nint main() {\n    mylib::hello();\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-5",
      'title': "变量、常量与基本类型",
      'summary': "int/double/char/bool 四种基本类型，变量的声明、初始化与 const 常量。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "变量是内存里一块有名字的存储区，用来保存数据。和 Python 不同，C++ 是强类型语言，每个变量必须先声明类型，类型决定了它能存什么数据、占多少内存。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "声明并初始化四种基本类型",
          'code': "#include <iostream>\nint main() {\n    int age = 18;            // 整数\n    double height = 1.75;    // 小数（双精度浮点）\n    char grade = 'A';      // 单个字符\n    bool isStudent = true;   // 布尔：true 或 false\n    std::cout << age << \" \" << height << \" \" << grade << \" \" << isStudent << std::endl;\n    return 0;\n}"
        },
        {
          'type': "table",
          'head': [
            "类型",
            "含义",
            "示例",
            "占用（常见）"
          ],
          'rows': [
            [
              "int",
              "整数",
              "42",
              "4 字节"
            ],
            [
              "double",
              "双精度小数",
              "3.14159",
              "8 字节"
            ],
            [
              "char",
              "单个字符",
              "'A'",
              "1 字节"
            ],
            [
              "bool",
              "真/假",
              "true",
              "1 字节"
            ]
          ]
        },
        {
          'type': "p",
          'text': "<code.inline>char</code.inline> 存一个字符，用单引号包住，比如 <code.inline>'A'</code.inline>。<code.inline>bool</code.inline> 只有 <code.inline>true</code.inline> 和 <code.inline>false</code.inline> 两个取值，用于判断。字符和数字之间可以转换：'A' 实际对应整数 65（ASCII 码）。"
        },
        {
          'type': "h",
          'text': "常量：用 const 修饰，值不可改"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "const 常量",
          'code': "#include <iostream>\nint main() {\n    const double PI = 3.14159;\n    const int DAYS_OF_WEEK = 7;\n    std::cout << \"圆周率=\" << PI << \"，一周\" << DAYS_OF_WEEK << \"天\" << std::endl;\n    // PI = 3.0;  // 错误！常量不能被修改\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>const</code.inline> 修饰的变量叫常量，一旦初始化就不能再修改。把不会变的量（如圆周率、配置值）声明为 const，既防止误改，也让代码意图更清晰。编译器还会对这种常量做优化。"
        },
        {
          'type': "warn",
          'title': "未初始化的变量是垃圾值",
          'text': "C++ 里 <code.inline>int x;</code.inline> 这样声明后如果不赋值，x 的值是随机的（内存残留）。直接使用它会得到奇怪结果。建议声明时就初始化，养成好习惯。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"变量、常量与基本类型\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"变量、常量与基本类型\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"变量、常量与基本类型\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "C++ 是强类型语言，变量要先声明类型",
            "int 整数、double 小数、char 字符、bool 布尔",
            "char 用单引号，字符串用双引号",
            "const 修饰的常量不可修改",
            "变量声明时最好立即初始化"
          ]
        }
      ],
      'templates': [
        {
          'name': "个人信息变量",
          'code': "#include <iostream>\nint main() {\n    std::string name = \"小明\";\n    int age = 18;\n    double height = 1.75;\n    std::cout << name << \" \" << age << \"岁 \" << height << \"米\" << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-6",
      'title': "运算符与表达式、类型转换",
      'summary': "算术、比较、逻辑、自增自减运算符，以及隐式与显式类型转换。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "运算符是对数据进行运算的符号，表达式是运算符和数据组成的式子。C++ 的运算符很丰富，这一章把它们的主力部队都过一遍。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "算术、比较与逻辑运算",
          'code': "#include <iostream>\nint main() {\n    int a = 10, b = 3;\n    std::cout << a + b << std::endl;   // 13  加\n    std::cout << a - b << std::endl;   // 7   减\n    std::cout << a * b << std::endl;   // 30  乘\n    std::cout << a / b << std::endl;   // 3   整数除整数得整数\n    std::cout << a % b << std::endl;   // 1   取余\n    std::cout << (a > b) << std::endl; // 1   比较：真输出 1\n    std::cout << (a && b) << std::endl;// 1   逻辑与：都为真才为真\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "整数除法会丢掉小数",
          'text': "<code.inline>10 / 3</code.inline> 结果是 3 而不是 3.33，因为两个整数相除结果还是整数（直接截断）。想得到小数，至少让一边是浮点数：<code.inline>10 / 3.0</code.inline> 结果就是 3.333..."
        },
        {
          'type': "h",
          'text': "自增自减与复合赋值"
        },
        {
          'type': "p",
          'text': "<code.inline>i++</code.inline> 让 i 加 1，<code.inline>i--</code.inline> 减 1。<code.inline>+=</code.inline>、<code.inline>-=</code.inline>、<code.inline>*=</code.inline> 等是复合赋值，比如 <code.inline>x += 5</code.inline> 等价于 <code.inline>x = x + 5</code.inline>。"
        },
        {
          'type': "h",
          'text': "类型转换"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "隐式转换与显式转换",
          'code': "#include <iostream>\nint main() {\n    int x = 7;\n    double y = 2.5;\n    double r1 = x / 2;         // 3   隐式：先整数除法再转 double\n    double r2 = x / 2.0;       // 3.5 因为有一个是浮点，按浮点算\n    int r3 = static_cast<int>(y); // 2  显式转换：把 2.5 截断成 2\n    std::cout << r1 << \" \" << r2 << \" \" << r3 << std::endl;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "小范围类型自动升为大范围（int 转 double）叫隐式转换。把大转小（double 转 int）可能丢精度，C++ 要求你显式写出来，推荐用 <code.inline>static_cast<目标类型>(值)</code.inline> 这种现代写法，比 C 风格的 <code.inline>(int)值</code.inline> 更安全、更好找。"
        },
        {
          'type': "info",
          'title': "运算优先级",
          'text': "和数学一样，先乘除后加减，括号优先级最高。拿不准就加括号，代码可读性更好，别人看着也省心。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"运算符与表达式、类型转换\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"运算符与表达式、类型转换\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"运算符与表达式、类型转换\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "算术运算符 + - * / %，注意整数除法截断",
            "比较运算结果是真(1)或假(0)",
            "i++ / i-- 自增自减，+= 等复合赋值",
            "小转大自动隐式转换，大转小用 static_cast 显式转换",
            "拿不准优先级就加括号"
          ]
        }
      ],
      'templates': [
        {
          'name': "计算总价",
          'code': "#include <iostream>\nint main() {\n    double price = 5.5;\n    int count = 4;\n    double total = price * count;\n    std::cout << \"总价：\" << total << \" 元\" << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-7",
      'title': "流程控制：if / else 与 switch",
      'summary': "用 if/else 分支和 switch 多路选择，让程序学会判断。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "程序默认从上到下顺序执行，但真实需求常常要『根据条件走不同的路』，这就需要流程控制。最常用的是 <code.inline>if / else</code.inline> 分支和 <code.inline>switch</code.inline> 多路选择。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "if / else 判断成绩",
          'code': "#include <iostream>\nint main() {\n    int score;\n    std::cout << \"输入成绩：\";\n    std::cin >> score;\n    if (score >= 60) {\n        std::cout << \"及格\" << std::endl;\n    } else {\n        std::cout << \"不及格\" << std::endl;\n    }\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>if (条件)</code.inline> 里条件为真就执行大括号里的代码，否则执行 <code.inline>else</code.inline> 里的。条件可以是比较表达式，也可以是任何能算出真假的表达式。多个条件用 <code.inline>else if</code.inline> 串联。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "else if 多分支",
          'code': "#include <iostream>\nint main() {\n    int score = 85;\n    if (score >= 90) {\n        std::cout << \"优秀\" << std::endl;\n    } else if (score >= 80) {\n        std::cout << \"良好\" << std::endl;\n    } else if (score >= 60) {\n        std::cout << \"及格\" << std::endl;\n    } else {\n        std::cout << \"不及格\" << std::endl;\n    }\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "switch：多路精确匹配"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "switch 判断星期",
          'code': "#include <iostream>\nint main() {\n    int day = 3;\n    switch (day) {\n        case 1: std::cout << \"星期一\" << std::endl; break;\n        case 2: std::cout << \"星期二\" << std::endl; break;\n        case 3: std::cout << \"星期三\" << std::endl; break;\n        default: std::cout << \"其他\" << std::endl; break;\n    }\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>switch</code.inline> 根据表达式的值，跳到对应的 <code.inline>case</code.inline> 分支执行。每个分支末尾通常要写 <code.inline>break</code.inline> 跳出，否则会『掉下去』继续执行下一个分支（这叫 fall-through）。<code.inline>default</code.inline> 处理所有没匹配到的情况。"
        },
        {
          'type': "warn",
          'title': "别忘了 break",
          'text': "忘记写 break 是 switch 最常见的坑，会导致一个分支执行完继续执行下一个分支。如果确实想多个值共用同一段代码，可以把 case 叠着写：<code.inline>case 1: case 2: ...</code.inline>"
        },
        {
          'type': "tip",
          'title': "什么时候用 switch",
          'text': "switch 适合对整数、字符做精确匹配的分支（选项少、条件清晰时）。分支条件复杂或涉及区间判断时，用 if/else if 更合适。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"流程控制：if / else 与 switch\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"流程控制：if / else 与 switch\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"流程控制：if / else 与 switch\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "if/else 根据条件真假走不同分支",
            "多个条件用 else if 串联",
            "switch 根据值精确匹配 case",
            "switch 每个分支要 break，default 兜底",
            "区间判断用 if，精确匹配用 switch"
          ]
        }
      ],
      'templates': [
        {
          'name': "奇偶判断",
          'code': "#include <iostream>\nint main() {\n    int n;\n    std::cout << \"输入一个整数：\";\n    std::cin >> n;\n    if (n % 2 == 0) {\n        std::cout << n << \" 是偶数\" << std::endl;\n    } else {\n        std::cout << n << \" 是奇数\" << std::endl;\n    }\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-8",
      'title': "循环：for / while / do-while 与 range-for",
      'summary': "掌握三种循环语法和 break/continue，用循环批量处理数据。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "循环让一段代码反复执行。比如打印 1 到 100，或者遍历数组里所有元素，都离不开循环。C++ 有 <code.inline>for</code.inline>、<code.inline>while</code.inline>、<code.inline>do-while</code.inline> 三种基本循环。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "for 循环",
          'code': "#include <iostream>\nint main() {\n    for (int i = 0; i < 5; i++) {\n        std::cout << \"第 \" << i << \" 次\" << std::endl;\n    }\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>for (初始化; 条件; 步进)</code.inline> 三部分：先初始化（int i = 0），每轮先判断条件（i < 5），为真就执行循环体，然后执行步进（i++）。这样 i 从 0 到 4，共执行 5 次。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "while 与 do-while",
          'code': "#include <iostream>\nint main() {\n    int n = 0;\n    while (n < 3) {          // 先判断后执行\n        std::cout << \"while: \" << n << std::endl;\n        n++;\n    }\n    int m = 0;\n    do {                     // 先执行后判断，至少执行一次\n        std::cout << \"do-while: \" << m << std::endl;\n        m++;\n    } while (m < 3);\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>while (条件)</code.inline> 先判断条件，为真才执行；<code.inline>do { } while (条件)</code.inline> 先执行一次再判断，所以至少会执行一次。循环里要注意让条件最终变为假，否则就是死循环。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "break 与 continue",
          'code': "#include <iostream>\nint main() {\n    for (int i = 0; i < 10; i++) {\n        if (i == 3) continue;   // 跳过本次，继续下一次\n        if (i == 7) break;      // 立刻跳出整个循环\n        std::cout << i << \" \";\n    }\n    std::cout << std::endl;  // 输出 0 1 2 4 5 6\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>break</code.inline> 立刻结束整个循环；<code.inline>continue</code.inline> 跳过当前这一轮，直接进入下一轮。两者是循环里最常用的两个『控制按钮』。"
        },
        {
          'type': "h",
          'text': "range-for：遍历容器最省事"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "范围 for 遍历数组",
          'code': "#include <iostream>\nint main() {\n    int arr[] = {10, 20, 30};\n    for (int v : arr) {        // 依次取出数组里的每个值\n        std::cout << v << \" \";\n    }\n    std::cout << std::endl;\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "小心死循环",
          'text': "如果循环条件永远为真（比如忘记让变量自增），程序就会一直运行直到卡死。写循环时想想：条件变量会不会在某轮之后让条件为假？"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"循环：for / while / do-while 与 range-for\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"循环：for / while / do-while 与 range-for\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"循环：for / while / do-while 与 range-for\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "for (初始化; 条件; 步进) 适合知道次数的循环",
            "while 先判断后执行，do-while 至少执行一次",
            "break 跳出循环，continue 跳过本轮",
            "range-for 遍历容器元素最简洁",
            "注意循环条件更新，避免死循环"
          ]
        }
      ],
      'templates': [
        {
          'name': "累加求和",
          'code': "#include <iostream>\nint main() {\n    int sum = 0;\n    for (int i = 1; i <= 100; i++) {\n        sum += i;\n    }\n    std::cout << \"1 加到 100 等于 \" << sum << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-9",
      'title': "数组：普通数组与字符数组",
      'summary': "数组是同类数据的集合，掌握定义、遍历、越界陷阱与 C 字符串。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "数组（array）是把多个同类型数据连续存放在一起的结构。比如一个班 40 人的成绩，用 40 个变量存太麻烦，用一个 40 个元素的 int 数组就清爽多了。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "一维数组定义与访问",
          'code': "#include <iostream>\nint main() {\n    int scores[5] = {90, 85, 78, 92, 88};  // 5 个元素的数组\n    std::cout << \"第一个分数：\" << scores[0] << std::endl;\n    scores[0] = 100;   // 通过下标修改\n    for (int i = 0; i < 5; i++) {\n        std::cout << scores[i] << \" \";\n    }\n    std::cout << std::endl;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "数组下标（索引）从 0 开始，所以第一个元素是 <code.inline>scores[0]</code.inline>，第 5 个是 <code.inline>scores[4]</code.inline>。<code.inline>int scores[5]</code.inline> 声明一个能装 5 个 int 的数组，后面用花括号列表初始化。"
        },
        {
          'type': "h",
          'text': "字符数组：C 风格字符串"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "字符数组与 C 字符串",
          'code': "#include <iostream>\n#include <cstring>\nint main() {\n    char name[] = \"Alice\";      // 字符数组，自动加结尾空字符\n    char msg[50];\n    std::strcpy(msg, \"你好\");    // 复制字符串\n    std::cout << name << \" \" << msg << \" 长度=\" << std::strlen(name) << std::endl;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "C 语言时代的字符串其实就是字符数组，末尾有一个 <code.inline>\\0</code.inline>（空字符）表示结束。<code.inline>char name[] = \"Alice\";</code.inline> 会自动分配 6 个位置（5 个字符 + 1 个结束符）。<code.inline>strcpy</code.inline>、<code.inline>strlen</code.inline> 等函数来自 <code.inline><cstring></code.inline> 头文件。"
        },
        {
          'type': "warn",
          'title': "数组越界是 C++ 的大坑",
          'text': "访问 <code.inline>scores[5]</code.inline>（超出长度）不会报错，而是访问到数组后面的内存，可能读到垃圾值甚至导致程序崩溃。C++ 不会自动检查越界，写代码时一定要自己保证下标在 0 到长度-1 之间。后面学 std::vector 能更好避免这个问题。"
        },
        {
          'type': "tip",
          'title': "现代 C++ 更推荐 std::string 和 std::vector",
          'text': "字符数组用起来容易出错，建议优先用 <code.inline>std::string</code.inline>；动态数组优先用 <code.inline>std::vector</code.inline>。不过理解原生数组仍是重要的基本功，后面章节会陆续讲到。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"数组：普通数组与字符数组\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"数组：普通数组与字符数组\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"数组：普通数组与字符数组\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "数组是同类数据的连续集合，下标从 0 开始",
            "int scores[5] = {...} 定义并初始化",
            "字符数组末尾有 \\0 结束符，即 C 风格字符串",
            "访问越界不会自动报错，务必自己保证下标合法",
            "现代 C++ 更推荐 string 和 vector"
          ]
        }
      ],
      'templates': [
        {
          'name': "数组求平均",
          'code': "#include <iostream>\nint main() {\n    int nums[] = {80, 90, 70, 85, 95};\n    int sum = 0;\n    for (int i = 0; i < 5; i++) {\n        sum += nums[i];\n    }\n    std::cout << \"平均分：\" << sum / 5.0 << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-10",
      'title': "std::string 字符串基础",
      'summary': "用 string 安全处理文本，掌握构造、拼接、长度与比较。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "处理文本是编程里最常见的事。C++ 提供了 <code.inline>std::string</code.inline> 类，封装了字符串的各种操作，比手写字符数组安全、好用得多。使用前要 <code.inline>#include <string></code.inline>。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "构造、拼接与长度",
          'code': "#include <iostream>\n#include <string>\nint main() {\n    std::string s1 = \"Hello\";       // 直接初始化\n    std::string s2(\"World\");        // 构造函数初始化\n    std::string s3 = s1 + \" \" + s2; // 用 + 拼接\n    std::cout << s3 << std::endl;\n    std::cout << \"长度：\" << s3.length() << std::endl;\n    std::cout << \"第一个字符：\" << s3[0] << std::endl;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "字符串可以用 <code.inline>+</code.inline> 拼接，这是 string 最爽的特性之一（字符数组做不到）。<code.inline>length()</code.inline> 或 <code.inline>size()</code.inline> 返回字符个数。<code.inline>s[0]</code.inline> 像数组一样按下标取字符。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "比较与读取整行输入",
          'code': "#include <iostream>\n#include <string>\nint main() {\n    std::string a = \"apple\";\n    std::string b = \"banana\";\n    if (a < b) {   // 按字典序比较\n        std::cout << a << \" 排在 \" << b << \" 前面\" << std::endl;\n    }\n    std::string name;\n    std::cout << \"输入姓名：\";\n    std::getline(std::cin, name);  // 读取一整行，含空格\n    std::cout << \"你好，\" << name << std::endl;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "字符串可以直接用 <code.inline><</code.inline>、<code.inline>==</code.inline> 比较，规则是字典序（类似查字典）。<code.inline>std::getline(std::cin, s)</code.inline> 能读入一整行包括空格，这解决了第 3 章说的 cin 遇空格就停的问题。"
        },
        {
          'type': "info",
          'title': "string 能存中文字符吗",
          'text': "能。std::string 以字节为单位存储，UTF-8 编码下每个中文占 3 个字节，所以 <code.inline>length()</code.inline> 返回的是字节数而不是『汉字个数』。教学阶段先知道这点即可，不用纠结。"
        },
        {
          'type': "warn",
          'title': "字符串字面量不是 string",
          'text': "<code.inline>\"Hello\"</code.inline> 这种字面量本质是 C 风格字符数组，和 <code.inline>std::string</code.inline> 是两种类型。不过 string 可以自动从它构造，所以 <code.inline>std::string s = \"Hello\";</code.inline> 能正常写。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"std::string 字符串基础\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"std::string 字符串基础\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"std::string 字符串基础\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "使用 string 要先 #include <string>",
            "+ 拼接、length()/size() 取长度、s[i] 取字符",
            "字符串按字典序比较，支持 <、== 等",
            "getline 读取一整行含空格",
            "字面量是字符数组，但会自动转成 string"
          ]
        }
      ],
      'templates': [
        {
          'name': "字符串拼接演示",
          'code': "#include <iostream>\n#include <string>\nint main() {\n    std::string first = \"张\";\n    std::string last = \"三\";\n    std::string full = last + first;\n    std::cout << \"全名：\" << full << \"，共 \" << full.size() << \" 字节\" << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-11",
      'title': "string 常用方法：substr / find / replace / compare",
      'summary': "截取、查找、替换、比较，四大字符串操作全部吃透。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "上一章学了 string 的基础，这一章重点掌握几个高频方法：截取 <code.inline>substr</code.inline>、查找 <code.inline>find</code.inline>、替换 <code.inline>replace</code.inline>、比较 <code.inline>compare</code.inline>。它们组合起来能处理绝大多数文本需求。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "常用方法演示",
          'code': "#include <iostream>\n#include <string>\nint main() {\n    std::string s = \"hello world\";\n    std::cout << s.substr(0, 5) << std::endl;       // hello\n    std::cout << s.find(\"world\") << std::endl;      // 6  找到的位置\n    std::cout << s.find(\"zz\") << std::endl;         // 很大一个数，表示没找到\n    std::string t = s;\n    t.replace(6, 5, \"C++\");\n    std::cout << t << std::endl;                    // hello C++\n    std::cout << s.compare(\"hello world\") << std::endl; // 0 表示相等\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>substr(起始位置, 长度)</code.inline> 截取子串。<code.inline>find(目标)</code.inline> 返回目标第一次出现的位置，从 0 开始数；找不到时返回一个特殊的大数 <code.inline>std::string::npos</code.inline>（不要和普通下标混淆）。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "判断是否找到的正确写法",
          'code': "#include <iostream>\n#include <string>\nint main() {\n    std::string s = \"apple banana cherry\";\n    if (s.find(\"banana\") != std::string::npos) {\n        std::cout << \"找到了\" << std::endl;\n    } else {\n        std::cout << \"没找到\" << std::endl;\n    }\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "find 找不到返回的是 npos 不是 -1",
          'text': "有些新手写 <code.inline>if (s.find(x) == -1)</code.inline>，这在很多平台碰巧能跑，但标准做法是 <code.inline>if (s.find(x) != std::string::npos)</code.inline>。npos 是个超大无符号数，用 -1 判断属于取巧，不严谨。"
        },
        {
          'type': "p",
          'text': "<code.inline>replace(起始位置, 长度, 新内容)</code.inline> 替换一段。<code.inline>compare(另一个字符串)</code.inline> 返回 0 表示相等，负数表示比对方小，正数表示比对方大（字典序）。日常比较直接用 == 就行，compare 在需要排序结果时更明确。"
        },
        {
          'type': "list",
          'items': [
            "<code.inline>insert(位置, 内容)</code.inline>：在指定位置插入",
            "<code.inline>erase(位置, 长度)</code.inline>：删除一段",
            "<code.inline>empty()</code.inline>：判断是否为空串",
            "<code.inline>append(内容)</code.inline>：末尾追加，等价于 +"
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"string 常用方法：substr / find / replace / compare\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"string 常用方法：substr / find / replace / compare\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"string 常用方法：substr / find / replace / compare\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "substr(起始, 长度) 截取子串",
            "find 返回位置，找不到返回 npos",
            "判断是否找到用 != npos",
            "replace(起始, 长度, 新内容) 替换",
            "compare 返回 0 表示相等"
          ]
        }
      ],
      'templates': [
        {
          'name': "提取邮箱用户名",
          'code': "#include <iostream>\n#include <string>\nint main() {\n    std::string email = \"user@example.com\";\n    size_t pos = email.find(\"@\");\n    if (pos != std::string::npos) {\n        std::cout << \"用户名：\" << email.substr(0, pos) << std::endl;\n        std::cout << \"域名：\" << email.substr(pos + 1) << std::endl;\n    }\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-12",
      'title': "引用 & 基础：给变量起个别名",
      'summary': "理解引用的本质是别名，掌握定义规则与限制。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "引用（reference）可以理解为给变量起的『别名』：它不新占内存，而是指向同一个变量。声明引用用 <code.inline>&</code.inline>，比如 <code.inline>int &ref = score;</code.inline>，之后操作 ref 就是操作 score。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "引用是变量的别名",
          'code': "#include <iostream>\nint main() {\n    int score = 90;\n    int &ref = score;    // ref 是 score 的别名\n    ref = 95;            // 修改 ref 就是修改 score\n    std::cout << score << std::endl;          // 95\n    std::cout << &score << \" \" << &ref << std::endl;  // 地址完全一样\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "关键点：<code.inline>ref</code.inline> 和 <code.inline>score</code.inline> 是同一块内存的两个名字。<code.inline>&score</code.inline> 取地址，<code.inline>&ref</code.inline> 也是同一个地址，证明了它们就是同一个东西。"
        },
        {
          'type': "h",
          'text': "引用的两大规则"
        },
        {
          'type': "list",
          'items': [
            "引用必须初始化：声明时必须指明它引用谁，不能先声明后绑定",
            "引用一旦绑定就不能改变：不能让它改去引用别的变量（和指针不同）"
          ]
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "引用不可重新绑定",
          'code': "#include <iostream>\nint main() {\n    int a = 1, b = 2;\n    int &r = a;\n    r = b;      // 这不是让 r 去引用 b，而是把 b 的值赋给 a\n    std::cout << a << \" \" << b << std::endl;  // 2 2\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "引用未初始化是编译错误",
          'text': "<code.inline>int &r;</code.inline> 这样不初始化会直接编译报错。引用必须在声明时绑定一个存在的变量，这是和指针的一个明显区别（指针可以先声明指向空）。"
        },
        {
          'type': "info",
          'title': "引用 vs 指针的第一印象",
          'text': "这一章先认识引用的别名本质。下一章看它如何作为函数参数用，第 14 章再全面对比引用和指针。它们是一对孪生概念，容易混淆，值得反复琢磨。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"引用 & 基础：给变量起个别名\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"引用 & 基础：给变量起个别名\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"引用 & 基础：给变量起个别名\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "引用是变量的别名，用 & 声明",
            "引用和原变量共享同一块内存、同一个地址",
            "引用必须初始化，且一旦绑定不能改变",
            "给引用赋值 = 给原变量赋值"
          ]
        }
      ],
      'templates': [
        {
          'name': "别名修改演示",
          'code': "#include <iostream>\nint main() {\n    int money = 100;\n    int &wallet = money;\n    wallet += 50;   // 通过别名加钱\n    std::cout << \"钱包里的钱：\" << money << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-13",
      'title': "引用作为函数参数：修改实参",
      'summary': "用引用传递参数直接修改调用方的变量，学会 const 引用。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "函数参数默认是值传递：把实参复制一份给形参，函数里改形参不影响实参。如果想在函数里直接修改调用方的变量，就要用引用传递——把引用作为参数，函数里操作的就是原变量。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "用引用实现交换",
          'code': "#include <iostream>\nvoid swap(int &x, int &y) {   // 引用参数\n    int temp = x;\n    x = y;\n    y = temp;\n}\nint main() {\n    int a = 3, b = 5;\n    swap(a, b);\n    std::cout << a << \" \" << b << std::endl;  // 5 3，实参真的变了\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "如果参数是 <code.inline>int x, int y</code.inline>（值传递），swap 里交换的是副本，外面的 a、b 不会变。改成 <code.inline>int &x, int &y</code.inline> 后，形参绑定实参本体，交换立刻生效。"
        },
        {
          'type': "h",
          'text': "const 引用：既高效又不让改"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "const 引用参数",
          'code': "#include <iostream>\n#include <string>\nvoid printName(const std::string &name) {\n    std::cout << name << std::endl;\n}\nint main() {\n    std::string n = \"Alice\";\n    printName(n);\n    printName(\"Bob\");   // 临时字符串也能绑定 const 引用\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>const std::string &name</code.inline> 表示：以引用方式传参（不复制、高效），但函数里不能修改它。这在传大对象（如 string、vector）时特别常见，既省内存又保证安全。非 const 引用不能绑定临时值，const 引用可以。"
        },
        {
          'type': "tip",
          'title': "何时用哪种传递",
          'text': "小对象、不需要修改：值传递。<code.inline>int x</code.inline>。<br/>大对象、不需要修改：const 引用。<code.inline>const std::string &s</code.inline>。<br/>需要修改调用方变量：普通引用或指针。<code.inline>int &x</code.inline>。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"引用作为函数参数：修改实参\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"引用作为函数参数：修改实参\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"引用作为函数参数：修改实参\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "值传递不修改实参，引用传递能修改实参",
            "引用参数让函数直接操作原变量",
            "传大对象用 const 引用既高效又安全",
            "const 引用可以绑定临时值，普通引用不行"
          ]
        }
      ],
      'templates': [
        {
          'name': "用引用修改变量",
          'code': "#include <iostream>\nvoid addScore(int &score, int add) {\n    score += add;\n}\nint main() {\n    int myScore = 60;\n    addScore(myScore, 10);\n    std::cout << \"加分后：\" << myScore << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-14",
      'title': "引用 vs 指针：全面对比总结",
      'summary': "一张表看懂引用和指针的区别，理解各自的适用场景。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "引用和指针都能间接访问变量，但使用体验完全不同。很多人一开始分不清，这一章用表格和例子把它们彻底掰扯清楚。"
        },
        {
          'type': "table",
          'head': [
            "对比项",
            "引用 &",
            "指针 *"
          ],
          'rows': [
            [
              "本质",
              "变量的别名，不占独立内存（概念上）",
              "存地址的变量，占独立内存"
            ],
            [
              "必须初始化",
              "必须",
              "可以后赋值，可指向空"
            ],
            [
              "能否改绑",
              "绑定后不能改",
              "可以随时改指别的变量"
            ],
            [
              "访问方式",
              "直接当变量用",
              "需要 * 解引用"
            ],
            [
              "空值",
              "不能为空（必须绑定对象）",
              "可以为 nullptr"
            ],
            [
              "语法",
              "ref 比指针更自然安全",
              "更灵活，但容易出错"
            ]
          ]
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "指针与引用对照",
          'code': "#include <iostream>\nint main() {\n    int x = 10;\n    int *p = &x;     // 指针：存的是地址\n    int &r = x;      // 引用：x 的别名\n    *p = 20;         // 指针要解引用\n    std::cout << x << std::endl; // 20\n    r = 30;          // 引用直接当变量用\n    std::cout << x << std::endl; // 30\n    int y = 99;\n    p = &y;          // 指针可以改指别的\n    std::cout << *p << std::endl; // 99\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "指针用 <code.inline>*p</code.inline> 解引用才能访问目标；引用直接 <code.inline>r</code.inline> 就是目标本身。指针可以随时改指，引用一旦绑定就锁死。指针可以为 <code.inline>nullptr</code.inline>（空），引用不能为空。"
        },
        {
          'type': "warn",
          'title': "空指针与悬空引用",
          'text': "使用指针前最好检查是否为 <code.inline>nullptr</code.inline>，否则解引用空指针会崩溃。引用虽然『不能为空』，但如果它引用的变量提前销毁（比如指向局部变量），就会变成悬空引用，用起来更隐蔽、更难查。"
        },
        {
          'type': "p",
          'text': "实际开发中，参数传递优先用引用（安全、自然）；需要表达『可能没有值』、需要动态管理内存、需要遍历数组指针时，用指针。现代 C++ 里裸指针逐渐被智能指针取代，后面章节会讲。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"引用 vs 指针：全面对比总结\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"引用 vs 指针：全面对比总结\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"引用 vs 指针：全面对比总结\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "引用是别名、指针是地址，两者都能间接访问变量",
            "引用必须初始化且不可改绑，指针可改指可空",
            "引用直接用，指针要用 * 解引用",
            "参数传递优先用引用，涉及空值/动态内存用指针",
            "现代 C++ 用智能指针替代裸指针"
          ]
        }
      ],
      'templates': [
        {
          'name': "引用与指针对比",
          'code': "#include <iostream>\nint main() {\n    int v = 7;\n    int *ptr = &v;\n    int &ref = v;\n    std::cout << \"指针解引用：\" << *ptr << std::endl;\n    std::cout << \"引用直接用：\" << ref << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-15",
      'title': "函数定义与参数传递",
      'summary': "掌握函数的组成、三种参数传递方式，理解声明与定义分离。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "函数把一段可复用的代码包起来，给个名字，需要时调用。好的代码像搭积木，函数就是一块块积木。函数由返回类型、函数名、参数列表和函数体组成。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "定义并调用函数",
          'code': "#include <iostream>\nint add(int a, int b) {    // 返回类型 函数名(参数列表)\n    return a + b;           // 函数体，return 返回结果\n}\nint main() {\n    int result = add(3, 4);  // 调用，把返回值存进 result\n    std::cout << result << std::endl;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>int add(int a, int b)</code.inline> 表示：这个函数返回 int，接收两个 int 参数。<code.inline>return a + b;</code.inline> 把计算结果返回给调用者。没有返回值的函数用 <code.inline>void</code.inline> 作为返回类型。"
        },
        {
          'type': "h",
          'text': "三种参数传递方式"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "值传递 / 引用传递 / 指针传递",
          'code': "#include <iostream>\nvoid byValue(int x) { x = 100; }   // 改副本\nvoid byRef(int &x) { x = 100; }    // 改原变量\nvoid byPtr(int *x) { *x = 100; }   // 通过指针改原变量\nint main() {\n    int a = 1, b = 1, c = 1;\n    byValue(a);\n    byRef(b);\n    byPtr(&c);\n    std::cout << a << \" \" << b << \" \" << c << std::endl; // 1 100 100\n    return 0;\n}"
        },
        {
          'type': "list",
          'items': [
            "值传递：复制一份，函数里改动不影响外面",
            "引用传递：直接操作原变量，改动生效",
            "指针传递：传地址，用 * 解引用操作原变量"
          ]
        },
        {
          'type': "h",
          'text': "函数的声明与定义可以分离"
        },
        {
          'type': "p",
          'text': "C++ 里函数必须先声明后调用。如果 main 写在函数定义前面，就需要先写一句函数声明（原型）告诉编译器『有这个函数』，定义可以放在后面或别的文件。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "先声明后使用",
          'code': "#include <iostream>\nint add(int a, int b);   // 函数声明（原型）\nint main() {\n    std::cout << add(1, 2) << std::endl;\n    return 0;\n}\nint add(int a, int b) {   // 函数定义\n    return a + b;\n}"
        },
        {
          'type': "tip",
          'title': "为什么需要声明",
          'text': "编译器从上往下读代码，遇到调用时必须知道函数的签名（参数和返回类型）。声明就是提前告诉编译器。把声明放在头文件（.h）里、定义放在源文件（.cpp）里，是工程化开发的标准做法。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"函数定义与参数传递\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"函数定义与参数传递\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"函数定义与参数传递\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "函数 = 返回类型 + 函数名 + 参数 + 函数体",
            "值传递改副本，引用/指针传递改原变量",
            "void 表示没有返回值",
            "函数必须先声明后使用，声明可分离",
            "返回结果用 return"
          ]
        }
      ],
      'templates': [
        {
          'name': "最大值函数",
          'code': "#include <iostream>\nint max(int a, int b) {\n    return (a > b) ? a : b;\n}\nint main() {\n    std::cout << \"3 和 5 中较大的是 \" << max(3, 5) << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-16",
      'title': "函数重载：同名不同参",
      'summary': "同一个函数名可以有不同的参数列表，让调用更自然。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "函数重载（overload）指在同一作用域里，多个函数用同一个名字，但参数列表不同（个数或类型不同）。调用时编译器根据传入的参数自动选择匹配的那个。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "重载求面积",
          'code': "#include <iostream>\nint area(int w, int h) {        // 矩形面积\n    return w * h;\n}\ndouble area(double r) {          // 圆的面积\n    return 3.14159 * r * r;\n}\nint main() {\n    std::cout << area(4, 5) << std::endl;   // 20，匹配 int,int 版本\n    std::cout << area(2.0) << std::endl;    // 12.56636，匹配 double 版本\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "这里有两个 <code.inline>area</code.inline>：一个接收两个 int（矩形），一个接收一个 double（圆）。调用 <code.inline>area(4, 5)</code.inline> 时参数是两个 int，自动选第一个；<code.inline>area(2.0)</code.inline> 是 double，自动选第二个。这就是重载的妙处：一个名字，多种行为，调用方更自然。"
        },
        {
          'type': "h",
          'text': "重载的规则"
        },
        {
          'type': "list",
          'items': [
            "参数个数不同可以重载",
            "参数类型不同可以重载",
            "参数顺序不同可以重载",
            "只有返回值不同不能重载"
          ]
        },
        {
          'type': "warn",
          'title': "返回值不同不算重载",
          'text': "光靠返回值类型区分是不行的，比如 <code.inline>int f()</code.inline> 和 <code.inline>double f()</code.inline> 不能同时存在。因为调用时如果不关心返回值，编译器无法判断该用哪个。参数列表必须不同才行。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "按参数个数重载",
          'code': "#include <iostream>\nvoid greet(std::string name) {\n    std::cout << \"你好，\" << name << std::endl;\n}\nvoid greet(std::string name, int times) {\n    for (int i = 0; i < times; i++) {\n        std::cout << \"你好，\" << name << std::endl;\n    }\n}\nint main() {\n    greet(\"小明\");\n    greet(\"小红\", 2);\n    return 0;\n}"
        },
        {
          'type': "info",
          'title': "重载的意义",
          'text': "重载让函数名可以表达『一类操作』，而细节由参数决定。比如 <code.inline>std::cout</code.inline> 的 << 能输出各种类型，本质上就是大量重载。这也是后面运算符重载的基础。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"函数重载：同名不同参\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"函数重载：同名不同参\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"函数重载：同名不同参\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "函数重载 = 同名函数参数列表不同",
            "参数个数、类型、顺序不同都能重载",
            "只有返回值不同不能重载",
            "编译器根据调用参数自动选择匹配版本",
            "重载让代码更自然，是运算符重载的基础"
          ]
        }
      ],
      'templates': [
        {
          'name': "不同类型求和",
          'code': "#include <iostream>\nint sum(int a, int b) { return a + b; }\ndouble sum(double a, double b) { return a + b; }\nint main() {\n    std::cout << sum(3, 4) << std::endl;\n    std::cout << sum(1.5, 2.5) << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-17",
      'title': "默认参数：给参数一个兜底值",
      'summary': "为参数设置默认值，调用时可按需省略。注意从右往左的规则。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "默认参数让函数调用更灵活：给某些参数设一个默认值，调用时没传就用默认值，传了就覆盖。很适合『大多数情况一个值，偶尔定制』的场景。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "默认参数示例",
          'code': "#include <iostream>\n#include <string>\nvoid greet(std::string name, std::string prefix = \"你好\") {\n    std::cout << prefix << \"，\" << name << std::endl;\n}\nint main() {\n    greet(\"小明\");          // 用默认前缀\n    greet(\"小红\", \"早上好\");  // 覆盖默认前缀\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>prefix = \"你好\"</code.inline> 就是默认参数。调用 <code.inline>greet(\"小明\")</code.inline> 只传一个参数时，prefix 自动取默认值 '你好'；传两个参数时用传入的值。"
        },
        {
          'type': "h",
          'text': "默认参数的规则"
        },
        {
          'type': "list",
          'items': [
            "默认参数必须从右往左连续设置：最右边设了默认值，它左边的才能设",
            "调用时可以只省略右边的参数，不能跳着省略",
            "默认参数在声明里写一次即可，定义处不要再重复写（易报错）"
          ]
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "多个默认参数",
          'code': "#include <iostream>\nvoid draw(int width, int height = 10, char fill = '#') {\n    for (int i = 0; i < height; i++) {\n        for (int j = 0; j < width; j++) {\n            std::cout << fill;\n        }\n        std::cout << std::endl;\n    }\n}\nint main() {\n    draw(5);            // 用默认高度和填充符\n    draw(5, 3);         // 指定高度，用默认填充符\n    draw(5, 3, '*');   // 全部指定\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "默认参数写两遍的坑",
          'text': "如果在函数声明里写了 <code.inline>= 默认值</code.inline>，定义里又写一遍，编译器可能报『重复定义默认参数』。标准做法：默认值只写在声明处（一般在头文件），定义处不写。"
        },
        {
          'type': "warn",
          'title': "默认参数与重载可能歧义",
          'text': "比如有 <code.inline>void f(int a, int b = 0)</code.inline> 和 <code.inline>void f(int a)</code.inline>，调用 <code.inline>f(1)</code.inline> 时编译器分不清该用哪个，会报歧义错误。设计接口时要注意避免这种冲突。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"默认参数：给参数一个兜底值\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"默认参数：给参数一个兜底值\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"默认参数：给参数一个兜底值\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "默认参数让调用时可以省略部分参数",
            "默认参数必须从右往左连续设置",
            "默认值写在声明处，定义处不重复",
            "避免默认参数与重载产生歧义"
          ]
        }
      ],
      'templates': [
        {
          'name': "带默认参数的问候",
          'code': "#include <iostream>\n#include <string>\nvoid intro(std::string name, int age = 18, std::string city = \"北京\") {\n    std::cout << name << \"，\" << age << \"岁，来自\" << city << std::endl;\n}\nint main() {\n    intro(\"小明\");\n    intro(\"小红\", 20, \"上海\");\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-18",
      'title': "内联函数 inline 与函数指针",
      'summary': "inline 减少调用开销，函数指针把函数当作值来传递。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "这一章学两个『加速/灵活』工具：内联函数 <code.inline>inline</code.inline> 和函数指针。前者减少小函数反复调用的开销，后者把函数当成数据传来传去，是回调机制的基础。"
        },
        {
          'type': "h",
          'text': "内联函数 inline"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "inline 函数",
          'code': "#include <iostream>\ninline int square(int x) {\n    return x * x;\n}\nint main() {\n    std::cout << square(5) << std::endl;  // 25\n    std::cout << square(6) << std::endl;  // 36\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "函数调用有额外开销（跳转、保存现场等）。对特别小、调用频繁的函数，加 <code.inline>inline</code.inline> 关键字建议编译器把函数体直接『嵌入』调用处，省去调用开销。注意 inline 只是建议，编译器可能自行决定是否真的内联。"
        },
        {
          'type': "h",
          'text': "函数指针：指向函数的指针"
        },
        {
          'type': "p",
          'text': "函数也有地址，可以存进指针。这样就能把函数作为参数传给另一个函数（比如排序时指定比较规则），实现灵活的回调。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "函数指针示例",
          'code': "#include <iostream>\nint add(int a, int b) { return a + b; }\nint sub(int a, int b) { return a - b; }\nint main() {\n    int (*fp)(int, int) = add;   // 声明函数指针并指向 add\n    std::cout << fp(10, 5) << std::endl;  // 15\n    fp = sub;                    // 改指 sub\n    std::cout << fp(10, 5) << std::endl;  // 5\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "函数指针的声明格式有点绕：<code.inline>int (*fp)(int, int)</code.inline> 表示 fp 是一个指针，指向『返回 int、接收两个 int』的函数。用 <code.inline>fp(10, 5)</code.inline> 直接调用它当前指向的函数。"
        },
        {
          'type': "warn",
          'title': "函数指针声明容易写错",
          'text': "<code.inline>int (*fp)(int, int)</code.inline> 括号不能丢。写成 <code.inline>int *fp(int, int)</code.inline> 就变成『返回 int 指针的函数』了，完全是两回事。建议配合 using 或 typedef 起个别名，可读性更好。"
        },
        {
          'type': "tip",
          'title': "现代 C++ 的替代品",
          'text': "函数指针过于底层，现代 C++ 常用 <code.inline>std::function</code.inline> 和 lambda 表达式替代，后面第 48 章会讲。但理解函数指针的机制，对理解回调、事件驱动很有帮助。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"内联函数 inline 与函数指针\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"内联函数 inline 与函数指针\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"内联函数 inline 与函数指针\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "inline 建议编译器内联小函数，减少调用开销",
            "函数指针存函数地址，可以把函数当数据传递",
            "函数指针声明 int (*fp)(int,int) 括号不能丢",
            "现代 C++ 用 std::function 和 lambda 替代"
          ]
        }
      ],
      'templates': [
        {
          'name': "用函数指针切换操作",
          'code': "#include <iostream>\nint mul(int a, int b) { return a * b; }\nint divv(int a, int b) { return a / b; }\nint main() {\n    int (*op)(int, int) = mul;\n    std::cout << op(10, 2) << std::endl;   // 20\n    op = divv;\n    std::cout << op(10, 2) << std::endl;   // 5\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-19",
      'title': "面向对象概念与类的定义",
      'summary': "理解类和对象，用 class 定义自己的数据类型。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "前面学的都是面向过程的写法：数据是一堆变量，操作是一堆函数。面向对象（OOP）换了个思路：把『数据』和『操作这些数据的方法』打包成一个个『对象』。C++ 的三个核心思想是：封装、继承、多态。"
        },
        {
          'type': "table",
          'head': [
            "特性",
            "含义",
            "作用"
          ],
          'rows': [
            [
              "封装",
              "把数据和操作捆绑在类里，隐藏内部细节",
              "数据更安全，代码更好维护"
            ],
            [
              "继承",
              "新类复用已有类的能力",
              "代码复用，建立类之间的层级"
            ],
            [
              "多态",
              "同一操作在不同对象上表现不同",
              "程序更灵活，可扩展"
            ]
          ]
        },
        {
          'type': "p",
          'text': "类是『图纸』，对象是照着图纸造出来的『实物』。比如 Dog 是一个类，而旺财、大黄是 Dog 类的两个对象。类里可以定义成员变量（属性）和成员函数（行为）。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "定义一个 Dog 类",
          'code': "#include <iostream>\n#include <string>\nclass Dog {\npublic:\n    std::string name;   // 成员变量：属性\n    int age;\n    void bark() {       // 成员函数：行为\n        std::cout << name << \" 汪汪叫\" << std::endl;\n    }\n};\nint main() {\n    Dog d;              // 创建对象\n    d.name = \"旺财\";     // 给属性赋值\n    d.age = 2;\n    d.bark();           // 调用成员函数\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>class Dog { ... };</code.inline> 定义类，注意大括号末尾要有分号。<code.inline>public:</code.inline> 表示后面的成员可以从外部访问。<code.inline>Dog d;</code.inline> 创建对象，用 <code.inline>d.name</code.inline>、<code.inline>d.bark()</code.inline> 通过点号访问成员。"
        },
        {
          'type': "info",
          'title': "成员函数和普通函数",
          'text': "成员函数定义在类里，天生就能访问同一个对象的成员变量。比如 bark() 里直接用 name，不需要额外传参，因为它知道是哪个对象的 name。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"面向对象概念与类的定义\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"面向对象概念与类的定义\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"面向对象概念与类的定义\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "面向对象三大特性：封装、继承、多态",
            "类是图纸，对象是实例",
            "class 里可定义成员变量和成员函数",
            "class 定义大括号末尾要有分号",
            "用对象名.成员 访问，成员函数可直接用成员变量"
          ]
        }
      ],
      'templates': [
        {
          'name': "猫类演示",
          'code': "#include <iostream>\n#include <string>\nclass Cat {\npublic:\n    std::string name;\n    void meow() {\n        std::cout << name << \" 喵喵叫\" << std::endl;\n    }\n};\nint main() {\n    Cat c;\n    c.name = \"咪咪\";\n    c.meow();\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-20",
      'title': "访问修饰符：public / private / protected",
      'summary': "用访问修饰符控制成员可见性，实现封装。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "类里的成员默认不能被外部直接访问，需要靠访问修饰符来开放。C++ 有 <code.inline>public</code.inline>、<code.inline>private</code.inline>、<code.inline>protected</code.inline> 三种，它们是封装的具体手段。"
        },
        {
          'type': "table",
          'head': [
            "修饰符",
            "外部访问",
            "子类访问",
            "适用"
          ],
          'rows': [
            [
              "public",
              "可以",
              "可以",
              "对外开放的接口"
            ],
            [
              "private",
              "不可以",
              "不可以",
              "内部实现细节"
            ],
            [
              "protected",
              "不可以",
              "可以",
              "给子类用的内部数据"
            ]
          ]
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "访问修饰符演示",
          'code': "#include <iostream>\nclass BankAccount {\nprivate:\n    double balance = 0;          // 私有：外部不能直接改\npublic:\n    void deposit(double money) { // 公有：提供的操作\n        if (money > 0) {\n            balance += money;\n        }\n    }\n    double getBalance() {\n        return balance;\n    }\n};\nint main() {\n    BankAccount acc;\n    acc.deposit(100);\n    acc.deposit(50);\n    std::cout << acc.getBalance() << std::endl;  // 150\n    // acc.balance = 999;   // 错误！private 外部不能访问\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "把 <code.inline>balance</code.inline> 设为 private，外部就没法随意改它（比如直接赋成负数），只能通过公有的 <code.inline>deposit</code.inline> 操作。这样我们可以在方法里加校验（money > 0），保证数据始终合理。这就是封装的威力。"
        },
        {
          'type': "h",
          'text': "getter / setter：受控的读写"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "getter 与 setter",
          'code': "#include <iostream>\nclass Person {\nprivate:\n    int age;\npublic:\n    void setAge(int a) {\n        if (a >= 0 && a <= 150) {\n            age = a;\n        }\n    }\n    int getAge() {\n        return age;\n    }\n};\nint main() {\n    Person p;\n    p.setAge(20);\n    std::cout << \"年龄：\" << p.getAge() << std::endl;\n    p.setAge(999);   // 非法值被拒绝\n    std::cout << \"年龄：\" << p.getAge() << std::endl;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "getter（取值）和 setter（设值）是封装的标准姿势：数据私有，通过带校验的公有方法读写。这样能在入口处统一检查数据合法性。"
        },
        {
          'type': "warn",
          'title': "class 默认私有",
          'text': "<code.inline>class</code> 里成员默认是 private（struct 默认 public）。如果不写修饰符，<code.inline>class Dog { std::string name; }</code.inline> 里 name 外部是访问不到的。新手常忘记写 public: 导致访问报错。"
        },
        {
          'type': "tip",
          'title': "成员函数定义在类外",
          'text': "成员函数可以只在类里声明、在类外定义，格式为 <code.inline>返回类型 类名::函数名(...)</code.inline>。这样类定义更清爽，是工程化的常用写法。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"访问修饰符：public / private / protected\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"访问修饰符：public / private / protected\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"访问修饰符：public / private / protected\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "public 外部可访问，private 只有类内可访问，protected 子类可访问",
            "封装：数据私有，通过公有方法操作",
            "getter/setter 实现带校验的读写",
            "class 成员默认 private，struct 默认 public"
          ]
        }
      ],
      'templates': [
        {
          'name': "私有计数器",
          'code': "#include <iostream>\nclass Counter {\nprivate:\n    int count = 0;\npublic:\n    void increment() { count++; }\n    int get() { return count; }\n};\nint main() {\n    Counter c;\n    c.increment();\n    c.increment();\n    c.increment();\n    std::cout << \"计数：\" << c.get() << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-21",
      'title': "构造函数：对象创建时自动初始化",
      'summary': "构造函数在对象创建时自动执行，掌握初始化列表。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "对象创建时需要初始化成员变量，C++ 提供了构造函数（constructor）来自动完成这件事。构造函数的名字和类名相同、没有返回类型，在对象创建的那一刻自动调用。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "构造函数初始化对象",
          'code': "#include <iostream>\n#include <string>\nclass Student {\npublic:\n    std::string name;\n    int age;\n    Student(std::string n, int a) {   // 构造函数\n        name = n;\n        age = a;\n    }\n    void show() {\n        std::cout << name << \" \" << age << \"岁\" << std::endl;\n    }\n};\nint main() {\n    Student s(\"小明\", 18);   // 创建对象时自动调用构造函数\n    s.show();\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "可以看到 <code.inline>Student s(\"小明\", 18);</code.inline> 创建对象时，构造函数 <code.inline>Student(std::string n, int a)</code.inline> 自动执行，把成员初始化好。这样每个对象一出生就带着完整、合理的数据，不会再出现未初始化的垃圾值。"
        },
        {
          'type': "h",
          'text': "初始化列表"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "用初始化列表初始化成员",
          'code': "#include <iostream>\nclass Point {\nprivate:\n    int x, y;\npublic:\n    Point(int a, int b) : x(a), y(b) {   // 初始化列表\n        // 函数体可以为空\n    }\n    void show() {\n        std::cout << \"(\" << x << \",\" << y << \")\" << std::endl;\n    }\n};\nint main() {\n    Point p(3, 4);\n    p.show();\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>Point(int a, int b) : x(a), y(b)</code.inline> 中冒号后面的部分叫初始化列表，直接把 a、b 传给成员 x、y。对于 <code.inline>const</code.inline> 成员和引用成员，只能通过初始化列表赋值（不能在函数体里赋值），这是初始化列表不可替代的场景。"
        },
        {
          'type': "list",
          'items': [
            "构造函数与类同名，无返回类型",
            "对象创建时自动调用，用于初始化",
            "初始化列表 : x(a), y(b) 在函数体前初始化成员",
            "const 成员和引用成员必须在初始化列表里初始化"
          ]
        },
        {
          'type': "warn",
          'title': "构造函数不是普通函数",
          'text': "不能手动调用构造函数，比如 <code.inline>s.Student(\"a\", 1)</code.inline> 是错的。它只在对象创建时由编译器自动调用一次。函数体里写初始化代码时，尽量用初始化列表更高效。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"构造函数：对象创建时自动初始化\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"构造函数：对象创建时自动初始化\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"构造函数：对象创建时自动初始化\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "构造函数与类同名，创建对象时自动调用",
            "构造函数没有返回类型，用来初始化成员",
            "初始化列表 : x(a) 在函数体前初始化成员",
            "const 和引用成员必须用初始化列表"
          ]
        }
      ],
      'templates': [
        {
          'name': "带构造函数的学生类",
          'code': "#include <iostream>\n#include <string>\nclass Student {\npublic:\n    std::string name;\n    Student(std::string n) : name(n) {}\n    void hello() {\n        std::cout << \"我是 \" << name << std::endl;\n    }\n};\nint main() {\n    Student s(\"小红\");\n    s.hello();\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-22",
      'title': "析构函数与资源释放",
      'summary': "析构函数在对象销毁时自动执行，用来清理资源。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "和构造函数相对的是析构函数（destructor）。它在对象生命周期结束时自动调用，通常用来释放对象占用的资源：关闭文件、释放内存、断开连接等。析构函数名是类名前加 ~，没有参数、没有返回类型、只能有一个。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "模拟文件的打开与关闭",
          'code': "#include <iostream>\n#include <string>\nclass File {\nprivate:\n    std::string name;\npublic:\n    File(std::string n) {\n        name = n;\n        std::cout << \"打开文件 \" << name << std::endl;\n    }\n    ~File() {   // 析构函数\n        std::cout << \"关闭文件 \" << name << std::endl;\n    }\n};\nint main() {\n    File f(\"data.txt\");\n    // main 结束时 f 销毁，自动调用析构函数\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "运行程序会看到先『打开文件 data.txt』，等 main 结束时自动『关闭文件 data.txt』。这就是析构函数的典型用途：对象用完了，自动清理，程序员不需要手动记着释放。"
        },
        {
          'type': "h",
          'text': "析构函数的触发时机"
        },
        {
          'type': "list",
          'items': [
            "局部对象：所在函数或代码块结束时",
            "delete 一个动态分配的对象时",
            "程序结束时全局对象销毁"
          ]
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "析构顺序：后创建的先析构",
          'code': "#include <iostream>\nclass Obj {\nprivate:\n    int id;\npublic:\n    Obj(int i) : id(i) { std::cout << \"创建 \" << id << std::endl; }\n    ~Obj() { std::cout << \"销毁 \" << id << std::endl; }\n};\nint main() {\n    Obj a(1);\n    Obj b(2);\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "多个局部对象按『后创建的先析构』的顺序销毁（类似栈：后进先出）。运行会依次看到创建 1、创建 2、销毁 2、销毁 1。"
        },
        {
          'type': "warn",
          'title': "需要手动释放资源时别忘析构",
          'text': "如果类里用 new 分配了内存，一定要在析构函数里 delete，否则内存泄漏。如果忘了写析构函数，编译器会生成一个默认的，但默认的不释放任何东西。这就是后面 RAII 思想的核心。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"析构函数与资源释放\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"析构函数与资源释放\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"析构函数与资源释放\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "析构函数在对象销毁时自动调用",
            "析构函数名是 ~类名，无参数无返回",
            "用于释放资源：关闭文件、释放内存等",
            "多个局部对象按后创建先析构的顺序销毁",
            "new 分配的资源要在析构里 delete"
          ]
        }
      ],
      'templates': [
        {
          'name': "析构顺序演示",
          'code': "#include <iostream>\nclass Obj {\nprivate:\n    int id;\npublic:\n    Obj(int i) : id(i) { std::cout << \"创建 \" << id << std::endl; }\n    ~Obj() { std::cout << \"销毁 \" << id << std::endl; }\n};\nint main() {\n    Obj a(1);\n    Obj b(2);\n    Obj c(3);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-23",
      'title': "拷贝构造函数与赋值运算符",
      'summary': "用已有对象创建新对象时调用拷贝构造，理解默认拷贝的局限。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "用一个已存在的对象去创建另一个新对象时，会调用拷贝构造函数（copy constructor）。比如 <code.inline>Box b = a;</code.inline> 就是用 a 拷贝出 b。编译器会为每个类自动生成一个默认拷贝构造，逐个成员复制。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "拷贝构造函数",
          'code': "#include <iostream>\nclass Box {\npublic:\n    int size;\n    Box(int s) : size(s) {}\n    Box(const Box &other) {          // 拷贝构造函数\n        size = other.size;\n        std::cout << \"调用了拷贝构造\" << std::endl;\n    }\n};\nint main() {\n    Box a(10);\n    Box b = a;   // 用 a 拷贝构造 b\n    Box c(a);    // 也是拷贝构造\n    std::cout << b.size << \" \" << c.size << std::endl;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "拷贝构造的参数是 <code.inline>const Box &other</code.inline>，用另一个对象来初始化自己。<code.inline>Box b = a;</code.inline> 和 <code.inline>Box c(a);</code.inline> 都会触发拷贝构造。"
        },
        {
          'type': "h",
          'text': "赋值运算符 = "
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "拷贝构造与赋值要区分",
          'code': "#include <iostream>\nclass Box {\npublic:\n    int size;\n    Box(int s) : size(s) {}\n    void show() { std::cout << size << std::endl; }\n};\nint main() {\n    Box a(10);\n    Box b(20);\n    b = a;      // 这是赋值（b 已存在），不是拷贝构造\n    b.show();   // 10\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "关键区别：<code.inline>Box b = a;</code.inline> 是拷贝构造（b 还不存在，正在创建）；<code.inline>b = a;</code.inline> 是赋值运算符（b 已经存在，只是把 a 的值赋过去）。两者都做『复制』，但时机不同。"
        },
        {
          'type': "warn",
          'title': "默认拷贝是浅拷贝",
          'text': "默认拷贝构造和默认赋值都是逐个成员复制（浅拷贝）。如果类里有指针成员，两个对象会指向同一块内存，销毁时会重复释放（double free）导致崩溃。这就是为什么下一章之后会讲深拷贝。本章先理解拷贝的时机。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"拷贝构造函数与赋值运算符\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"拷贝构造函数与赋值运算符\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"拷贝构造函数与赋值运算符\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "用已有对象创建新对象时调用拷贝构造",
            "Box b = a 是拷贝构造，b = a 是赋值",
            "编译器默认生成逐成员复制的拷贝构造",
            "默认拷贝是浅拷贝，指针成员会埋雷",
            "拷贝构造参数通常是 const 引用"
          ]
        }
      ],
      'templates': [
        {
          'name': "拷贝时机观察",
          'code': "#include <iostream>\nclass Box {\npublic:\n    int size;\n    Box(int s) : size(s) { std::cout << \"构造 \" << s << std::endl; }\n    Box(const Box &o) : size(o.size) { std::cout << \"拷贝 \" << o.size << std::endl; }\n};\nint main() {\n    Box a(10);\n    Box b = a;\n    Box c(20);\n    c = a;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-24",
      'title': "this 指针",
      'summary': "this 指向当前对象，用来区分同名成员和参数、链式调用。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "成员函数里藏着一个隐式指针 <code.inline>this</code.inline>，它指向『调用这个函数的那个对象』。比如 d.setName() 里的 this 就指向 d 自己。它最常用的场景是参数和成员同名时区分彼此。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "用 this 区分同名成员与参数",
          'code': "#include <iostream>\n#include <string>\nclass Dog {\nprivate:\n    std::string name;\npublic:\n    void setName(std::string name) {\n        this->name = name;   // this->name 是成员，name 是参数\n    }\n    void show() {\n        std::cout << \"我叫 \" << name << std::endl;\n    }\n};\nint main() {\n    Dog d;\n    d.setName(\"旺财\");\n    d.show();\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>setName(std::string name)</code.inline> 里参数 name 和成员 name 同名。写 <code.inline>name = name;</code.inline> 会产生歧义（都指参数），编译器甚至报错。用 <code.inline>this->name = name;</code.inline> 就明确：左边的 this->name 是成员，右边的 name 是参数。"
        },
        {
          'type': "h",
          'text': "this 的其他用途"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "链式调用与返回自身",
          'code': "#include <iostream>\nclass Counter {\nprivate:\n    int value = 0;\npublic:\n    Counter& add(int n) {\n        value += n;\n        return *this;   // 返回当前对象，支持链式调用\n    }\n    void show() { std::cout << value << std::endl; }\n};\nint main() {\n    Counter c;\n    c.add(1).add(2).add(3);   // 链式调用\n    c.show();  // 6\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>add</code.inline> 返回 <code.inline>*this</code.inline>（当前对象的引用），就能 <code.inline>c.add(1).add(2).add(3)</code.inline> 连续调用。std::cout 的 << 能连续输出，本质上也是这种技巧。"
        },
        {
          'type': "list",
          'items': [
            "this 是成员函数里的隐藏指针，指向当前对象",
            "this->成员 区分同名参数和成员",
            "return *this 返回当前对象，支持链式调用",
            "this 在静态成员函数里不可用（静态函数不属于某个对象）"
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"this 指针\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"this 指针\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"this 指针\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "this 指向调用成员函数的那个对象",
            "this->name 明确表示成员变量",
            "return *this 支持链式调用",
            "静态成员函数里没有 this"
          ]
        }
      ],
      'templates': [
        {
          'name': "链式设置",
          'code': "#include <iostream>\n#include <string>\nclass Person {\nprivate:\n    std::string name;\n    int age = 0;\npublic:\n    Person& setName(std::string n) { name = n; return *this; }\n    Person& setAge(int a) { age = a; return *this; }\n    void show() { std::cout << name << \" \" << age << \"岁\" << std::endl; }\n};\nint main() {\n    Person p;\n    p.setName(\"小明\").setAge(18);\n    p.show();\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-25",
      'title': "static 静态成员变量与成员函数",
      'summary': "静态成员属于类本身而非单个对象，实现全局计数等。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "普通成员属于『每一个对象』——每个对象各有一份。静态成员（static）则属于『整个类』——所有对象共享一份，只存在于内存的同一处。常用场景：统计一共创建了多少个对象、共享全局配置。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "统计对象创建次数",
          'code': "#include <iostream>\nclass Counter {\nprivate:\n    static int total;   // 静态成员变量：声明\npublic:\n    Counter() { total++; }\n    static int get() { return total; }   // 静态成员函数\n};\nint Counter::total = 0;   // 静态成员变量：定义（必须类外定义一次）\nint main() {\n    Counter a, b, c;\n    std::cout << \"创建了 \" << Counter::get() << \" 个对象\" << std::endl;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "注意静态成员变量需要在类外定义一次：<code.inline>int Counter::total = 0;</code.inline>。静态成员函数 <code.inline>static int get()</code.inline> 通过 <code.inline>类名::函数名</code.inline> 调用，不需要创建对象就能调用。"
        },
        {
          'type': "h",
          'text': "静态成员的特性"
        },
        {
          'type': "list",
          'items': [
            "静态成员变量被所有对象共享，一份内存",
            "静态成员变量必须在类外定义并初始化",
            "静态成员函数没有 this，不能访问非静态成员",
            "静态成员函数用 类名:: 调用"
          ]
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "静态成员共享数据",
          'code': "#include <iostream>\nclass Settings {\npublic:\n    static int version;   // 所有对象共享\n};\nint Settings::version = 1;\nint main() {\n    Settings s1, s2;\n    Settings::version = 2;   // 通过类名访问\n    std::cout << s1.version << \" \" << s2.version << std::endl;  // 2 2\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "静态成员不能在类内直接初始化（老标准）",
          'text': "在 C++17 之前，非 const 的静态成员变量不能在类声明里直接给初值，必须到类外定义一次（如上面的 int Counter::total = 0;）。忘了这步会报『未定义引用』的链接错误。C++17 起可用 inline 在类内直接初始化。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"static 静态成员变量与成员函数\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"static 静态成员变量与成员函数\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"static 静态成员变量与成员函数\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "静态成员属于类，所有对象共享一份",
            "静态成员变量需在类外定义一次",
            "静态成员函数用类名::调用，没有 this",
            "静态成员函数不能访问非静态成员",
            "忘记类外定义会报链接错误"
          ]
        }
      ],
      'templates': [
        {
          'name': "创建次数统计",
          'code': "#include <iostream>\nclass Obj {\nprivate:\n    static int count;\npublic:\n    Obj() { count++; }\n    ~Obj() { count--; }\n    static int alive() { return count; }\n};\nint Obj::count = 0;\nint main() {\n    Obj a, b;\n    std::cout << \"存活对象：\" << Obj::alive() << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-26",
      'title': "const 成员函数与常量对象",
      'summary': "const 成员函数承诺不修改对象，常量对象只能调用它。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "如果某个成员函数保证『不会修改对象的任何成员』，就可以把它声明为 const 成员函数，写法是在参数列表后面加 const。这样普通对象能调用，常量对象也能调用。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "const 成员函数",
          'code': "#include <iostream>\nclass Circle {\nprivate:\n    double r;\npublic:\n    Circle(double x) : r(x) {}\n    double area() const {    // const 成员函数：承诺不修改对象\n        return 3.14159 * r * r;\n    }\n};\nint main() {\n    const Circle c(5);   // 常量对象\n    std::cout << c.area() << std::endl;   // 常量对象只能调 const 函数\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>const Circle c(5)</code.inline> 声明一个常量对象，它的成员不能修改。编译器只允许它调用声明为 const 的成员函数（如 area()），因为只有这些函数保证不改它。这从编译层面就堵住了误改。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "const 函数里不能修改成员",
          'code': "#include <iostream>\nclass Demo {\nprivate:\n    int x = 0;\npublic:\n    int read() const {\n        // x = 10;   // 错误！const 函数里不能修改成员\n        return x;\n    }\n};\nint main() {\n    Demo d;\n    std::cout << d.read() << std::endl;\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "const 对象只能调 const 函数",
          'text': "如果你有一个 <code.inline>const</code.inline> 对象，调用一个没标 const 的成员函数，编译器会报错。反过来，非 const 对象可以调用 const 成员函数（const 是一种更严格的承诺，更严格的对更宽松的兼容）。"
        },
        {
          'type': "p",
          'text': "规则记忆：const 成员函数里，this 指针相当于指向 const 对象，所以不能在函数体里修改任何成员（mutable 成员除外，它专门用来放可以改的缓存等）。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"const 成员函数与常量对象\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"const 成员函数与常量对象\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"const 成员函数与常量对象\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "const 成员函数承诺不修改对象成员",
            "const 对象只能调用 const 成员函数",
            "const 函数里修改成员会编译报错",
            "非 const 对象也能调用 const 函数"
          ]
        }
      ],
      'templates': [
        {
          'name': "常量对象调用",
          'code': "#include <iostream>\nclass Box {\nprivate:\n    int size;\npublic:\n    Box(int s) : size(s) {}\n    int getSize() const { return size; }\n};\nint main() {\n    const Box b(100);\n    std::cout << b.getSize() << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-27",
      'title': "友元函数与友元类",
      'summary': "friend 授权函数或类访问私有成员，打破封装但有代价。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "private 成员默认只允许类自己的成员函数访问。但有时我们希望某个『外部函数』或『另一个类』也能访问私有成员，比如运算符重载常需要这么做。C++ 用 <code.inline>friend</code.inline>（友元）来授权。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "友元函数访问私有成员",
          'code': "#include <iostream>\nclass Box {\nprivate:\n    int value;\npublic:\n    Box(int v) : value(v) {}\n    friend int getValue(const Box &b);   // 声明友元函数\n};\nint getValue(const Box &b) {   // 友元函数定义：可访问私有成员\n    return b.value;\n}\nint main() {\n    Box b(42);\n    std::cout << getValue(b) << std::endl;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "在类里写 <code.inline>friend int getValue(const Box &b);</code.inline> 就把外部函数 getValue 声明为友元，之后 getValue 就能访问 Box 的私有成员 value。注意 friend 声明放在类里任意位置都行，不受 public/private 影响。"
        },
        {
          'type': "h",
          'text': "友元类"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "友元类访问私有成员",
          'code': "#include <iostream>\nclass Engine {\nprivate:\n    int power = 100;\n    friend class Mechanic;   // 让 Mechanic 类成为友元\n};\nclass Mechanic {\npublic:\n    void tune(Engine &e) {\n        e.power += 50;   // 友元类可以访问私有成员\n        std::cout << \"调校后动力：\" << e.power << std::endl;\n    }\n};\nint main() {\n    Engine e;\n    Mechanic m;\n    m.tune(e);\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "友元是一把双刃剑",
          'text': "友元破坏了封装：它让外部代码能直接碰私有数据。用友元要克制，只在确实需要时才用（典型的合理场景是运算符重载、以及两个类强耦合时）。滥用友元会让类失去数据保护的意义。"
        },
        {
          'type': "list",
          'items': [
            "friend 授权外部函数或类访问私有成员",
            "friend 声明放类里任意位置，不受访问修饰符影响",
            "友元不是成员函数，没有 this",
            "友元关系不能继承、不能传递"
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"友元函数与友元类\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"友元函数与友元类\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"友元函数与友元类\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "friend 函数/类可访问私有成员",
            "friend 声明位置不受 public/private 影响",
            "友元不是成员函数，无 this",
            "友元破坏封装，需克制使用",
            "友元关系不可继承、不可传递"
          ]
        }
      ],
      'templates': [
        {
          'name': "友元访问私有数据",
          'code': "#include <iostream>\nclass Account {\nprivate:\n    double money;\n    friend void show(const Account &a);\npublic:\n    Account(double m) : money(m) {}\n};\nvoid show(const Account &a) {\n    std::cout << \"余额：\" << a.money << std::endl;\n}\nint main() {\n    Account a(888);\n    show(a);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-28",
      'title': "运算符重载基础：语法规则",
      'summary': "给自定义类型赋予运算符能力，掌握重载的规则与限制。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "内置类型有 + - * / 等运算符，自定义类却没有。运算符重载（operator overloading）就是给自定义类型重新定义这些运算符的行为，让 <code.inline>a + b</code.inline> 这样的写法也能用于自定义对象，代码读起来像数学一样自然。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "重载 + 运算符",
          'code': "#include <iostream>\nclass Point {\npublic:\n    int x, y;\n    Point(int a, int b) : x(a), y(b) {}\n    Point operator+(const Point &p) const {   // 重载 +：成员函数形式\n        return Point(x + p.x, y + p.y);\n    }\n};\nint main() {\n    Point a(1, 2), b(3, 4);\n    Point c = a + b;   // 自动调用 a.operator+(b)\n    std::cout << c.x << \" \" << c.y << std::endl;  // 4 6\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "成员函数形式的重载：<code.inline>Point operator+(const Point &p)</code.inline>，a + b 等价于 <code.inline>a.operator+(b)</code.inline>，this 是 a。运算符重载的本质就是『起特殊名字的成员函数或友元函数』。"
        },
        {
          'type': "h",
          'text': "重载的规则"
        },
        {
          'type': "list",
          'items': [
            "不能发明新运算符，只能重载已有的",
            "重载不能改变运算符的操作数个数和优先级",
            "至少一个操作数是自定义类型（不能全是内置类型）",
            "不能重载：:: 作用域、. 成员访问、?: 三目等少数几个",
            "可以重载为成员函数或友元函数（非成员）"
          ]
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "友元函数形式重载",
          'code': "#include <iostream>\nclass Money {\npublic:\n    int yuan;\n    Money(int y) : yuan(y) {}\n    friend Money operator+(const Money &a, const Money &b);\n};\nMoney operator+(const Money &a, const Money &b) {   // 非成员形式\n    return Money(a.yuan + b.yuan);\n}\nint main() {\n    Money m1(10), m2(20);\n    Money total = m1 + m2;\n    std::cout << total.yuan << \" 元\" << std::endl;\n    return 0;\n}"
        },
        {
          'type': "info",
          'title': "成员形式还是友元形式",
          'text': "如果运算符左侧就是本类对象（如 a + b），两种都行。如果想让 <code.inline>整数 + 对象</code.inline> 这种左侧不是本类的情况也能用，就必须用友元（非成员）形式。下一章实战时会更清楚。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"运算符重载基础：语法规则\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"运算符重载基础：语法规则\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"运算符重载基础：语法规则\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "运算符重载给自定义类型赋予运算符能力",
            "只能重载已有运算符，不能改变优先级和操作数个数",
            "至少一个操作数必须是自定义类型",
            "可写成成员函数或友元函数",
            "a + b 等价于 a.operator+(b)"
          ]
        }
      ],
      'templates': [
        {
          'name': "重载加法的分数准备",
          'code': "#include <iostream>\nclass Pair {\npublic:\n    int first, second;\n    Pair(int a, int b) : first(a), second(b) {}\n    Pair operator+(const Pair &p) const {\n        return Pair(first + p.first, second + p.second);\n    }\n};\nint main() {\n    Pair a(1, 2), b(3, 4);\n    Pair c = a + b;\n    std::cout << c.first << \" \" << c.second << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-29",
      'title': "常用运算符重载：+、== 与 <<",
      'summary': "实战重载加法、相等比较与输出流，让自定义类型更好用。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "这一章把最常用的三个运算符重载完整实现一遍：<code.inline>+</code.inline>（加法）、<code.inline>==</code.inline>（相等比较）、<code.inline><<</code.inline>（输出到 cout）。实现它们，自定义类用起来就和内置类型一样顺手。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "重载 +、== 与 <<",
          'code': "#include <iostream>\nclass Point {\npublic:\n    int x, y;\n    Point(int a, int b) : x(a), y(b) {}\n    Point operator+(const Point &p) const {\n        return Point(x + p.x, y + p.y);\n    }\n    bool operator==(const Point &p) const {\n        return x == p.x && y == p.y;\n    }\n    friend std::ostream& operator<<(std::ostream &out, const Point &p);\n};\nstd::ostream& operator<<(std::ostream &out, const Point &p) {\n    out << \"(\" << p.x << \",\" << p.y << \")\";\n    return out;\n}\nint main() {\n    Point a(1, 2), b(3, 4);\n    std::cout << a + b << std::endl;             // (4,6)\n    std::cout << (a == Point(1, 2)) << std::endl; // 1\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code.inline><<</code.inline> 的重载比较特殊：左侧是 <code.inline>std::ostream&</code.inline>（cout），不是我们的类，所以只能写成友元（非成员）函数。函数返回 <code.inline>std::ostream&</code.inline>，这样 <code.inline>cout << a << b</code.inline> 才能连续输出。"
        },
        {
          'type': "h",
          'text': "重载 == 后就能用标准算法"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "重载后可用于查找",
          'code': "#include <iostream>\n#include <vector>\n#include <algorithm>\nclass Point {\npublic:\n    int x, y;\n    Point(int a, int b) : x(a), y(b) {}\n    bool operator==(const Point &p) const {\n        return x == p.x && y == p.y;\n    }\n};\nint main() {\n    std::vector<Point> pts = {{1,2}, {3,4}, {5,6}};\n    auto it = std::find(pts.begin(), pts.end(), Point(3, 4));\n    if (it != pts.end()) {\n        std::cout << \"找到了\" << std::endl;\n    }\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "重载了 == 之后，<code.inline>std::find</code.inline> 等标准算法就能比较自定义类型了。这就是运算符重载的威力：让自定义类型无缝融入标准库生态。"
        },
        {
          'type': "warn",
          'title': "重载 << 要返回流引用",
          'text': "输出运算符必须返回 <code.inline>std::ostream&</code.inline> 并且末尾 <code.inline>return out;</code.inline>。如果返回 void，<code.inline>cout << a << b</code.inline> 就没法连续使用，编译报错。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"常用运算符重载：+、== 与 <<\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"常用运算符重载：+、== 与 <<\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"常用运算符重载：+、== 与 <<\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "+ 重载让自定义对象能相加",
            "== 重载后可用于 find 等标准算法",
            "<< 只能写成友元函数，返回 ostream 引用",
            "重载让自定义类型无缝融入标准库"
          ]
        }
      ],
      'templates': [
        {
          'name': "可输出的向量类",
          'code': "#include <iostream>\nclass Vec2 {\npublic:\n    double x, y;\n    Vec2(double a, double b) : x(a), y(b) {}\n    friend std::ostream& operator<<(std::ostream &out, const Vec2 &v);\n};\nstd::ostream& operator<<(std::ostream &out, const Vec2 &v) {\n    out << \"(\" << v.x << \",\" << v.y << \")\";\n    return out;\n}\nint main() {\n    Vec2 v(1.5, 2.5);\n    std::cout << v << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-30",
      'title': "继承基础：单继承与继承方式",
      'summary': "子类复用父类的成员，掌握 public 继承与构造顺序。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "继承（inheritance）让一个新类自动拥有已有类的成员，就像孩子从父母那里继承特质。新类叫派生类（子类），被继承的叫基类（父类）。它带来的最大好处是代码复用和清晰的层级关系。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "public 继承",
          'code': "#include <iostream>\n#include <string>\nclass Animal {\npublic:\n    std::string name;\n    void eat() {\n        std::cout << name << \" 在吃东西\" << std::endl;\n    }\n};\nclass Dog : public Animal {   // public 继承 Animal\npublic:\n    void bark() {\n        std::cout << name << \" 汪汪叫\" << std::endl;\n    }\n};\nint main() {\n    Dog d;\n    d.name = \"旺财\";\n    d.eat();    // 从父类继承来的方法\n    d.bark();   // 子类自己的方法\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>class Dog : public Animal</code.inline> 表示 Dog 公开继承 Animal。之后 Dog 的对象不仅能用自己的 bark()，还能直接用继承来的 name 和 eat()。Dog 是 Animal 的一种（is-a 关系）。"
        },
        {
          'type': "h",
          'text': "三种继承方式"
        },
        {
          'type': "table",
          'head': [
            "继承方式",
            "父类 public 成员",
            "父类 protected 成员",
            "父类 private 成员"
          ],
          'rows': [
            [
              "public 继承",
              "变为子类 public",
              "变为子类 protected",
              "不可直接访问"
            ],
            [
              "protected 继承",
              "变为子类 protected",
              "变为子类 protected",
              "不可直接访问"
            ],
            [
              "private 继承",
              "变为子类 private",
              "变为子类 private",
              "不可直接访问"
            ]
          ]
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "protected 成员被子类使用",
          'code': "#include <iostream>\nclass Base {\nprotected:\n    int data = 100;   // protected：子类能访问，外部不能\npublic:\n    int get() { return data; }\n};\nclass Derived : public Base {\npublic:\n    void doubleData() {\n        data *= 2;    // 子类可以访问 protected\n    }\n};\nint main() {\n    Derived d;\n    d.doubleData();\n    std::cout << d.get() << std::endl;  // 200\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>protected</code.inline> 介于 public 和 private 之间：外部访问不到，但子类可以访问。这是专门给继承设计的访问级别：数据放 protected，父类和子类都能用，外部不能乱碰。"
        },
        {
          'type': "warn",
          'title': "绝大多数时候用 public 继承",
          'text': "实际开发里 99% 用 public 继承，因为它表达最自然的 is-a 关系。protected/private 继承用法较特殊（多用于实现细节复用），初学者先把 public 继承吃透即可。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"继承基础：单继承与继承方式\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"继承基础：单继承与继承方式\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"继承基础：单继承与继承方式\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "继承让子类复用父类成员",
            "class 子类 : public 父类 是标准写法",
            "public 继承表达 is-a 关系",
            "protected 成员子类可访问、外部不可访问",
            "private 成员子类不可直接访问"
          ]
        }
      ],
      'templates': [
        {
          'name': "学生继承人",
          'code': "#include <iostream>\n#include <string>\nclass Person {\npublic:\n    std::string name;\n    void speak() { std::cout << name << \" 在说话\" << std::endl; }\n};\nclass Student : public Person {\npublic:\n    int score;\n    void study() { std::cout << name << \" 在写作业\" << std::endl; }\n};\nint main() {\n    Student s;\n    s.name = \"小明\";\n    s.score = 95;\n    s.speak();\n    s.study();\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-31",
      'title': "继承中的构造与析构顺序",
      'summary': "先构造父类再构造子类，析构顺序相反。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "有了继承后，构造和析构的顺序变得重要。规则一句话：**构造时先父后子，析构时先子后父**。为什么？子类要用父类的成员，父类得先准备好；销毁时先清理子类的部分，再清理父类的部分，才安全。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "构造与析构顺序",
          'code': "#include <iostream>\nclass Base {\npublic:\n    Base() { std::cout << \"Base 构造\" << std::endl; }\n    ~Base() { std::cout << \"Base 析构\" << std::endl; }\n};\nclass Derived : public Base {\npublic:\n    Derived() { std::cout << \"Derived 构造\" << std::endl; }\n    ~Derived() { std::cout << \"Derived 析构\" << std::endl; }\n};\nint main() {\n    Derived d;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "运行输出顺序：Base 构造、Derived 构造、Derived 析构、Base 析构。正好是父先来、子后走，像一个括号一样配对。"
        },
        {
          'type': "h",
          'text': "子类构造时如何给父类传参"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "调用父类构造函数",
          'code': "#include <iostream>\n#include <string>\nclass Animal {\nprotected:\n    std::string name;\npublic:\n    Animal(std::string n) : name(n) {}\n    void show() { std::cout << name << std::endl; }\n};\nclass Dog : public Animal {\npublic:\n    Dog(std::string n) : Animal(n) {}   // 初始化列表里调用父类构造\n    void bark() { std::cout << name << \" 汪汪\" << std::endl; }\n};\nint main() {\n    Dog d(\"旺财\");\n    d.show();\n    d.bark();\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "如果父类构造函数需要参数，子类必须在初始化列表里调用它：<code.inline>Dog(std::string n) : Animal(n) {}</code.inline>。如果父类有默认构造函数，子类不写也会自动调用默认版本。"
        },
        {
          'type': "warn",
          'title': "父类没有默认构造时子类必须显式调用",
          'text': "如果父类只提供了带参构造函数（没有默认构造），那么子类的构造函数必须在初始化列表里显式调用父类的带参构造函数，否则编译报错。这是新手常踩的坑。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"继承中的构造与析构顺序\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"继承中的构造与析构顺序\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"继承中的构造与析构顺序\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "构造顺序：先父类后子类",
            "析构顺序：先子类后父类",
            "父类需要参数时，子类在初始化列表调用父类构造",
            "父类无默认构造时，子类必须显式调用父类构造"
          ]
        }
      ],
      'templates': [
        {
          'name': "带名字的动物",
          'code': "#include <iostream>\n#include <string>\nclass Animal {\nprotected:\n    std::string name;\npublic:\n    Animal(std::string n) : name(n) {}\n    void show() { std::cout << \"名字：\" << name << std::endl; }\n};\nclass Cat : public Animal {\npublic:\n    Cat(std::string n) : Animal(n) {}\n    void meow() { std::cout << name << \" 喵\" << std::endl; }\n};\nint main() {\n    Cat c(\"咪咪\");\n    c.show();\n    c.meow();\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-32",
      'title': "多继承与菱形继承",
      'summary': "一个类继承多个父类，了解菱形继承问题与虚继承。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "C++ 允许一个类同时继承多个父类，这叫多继承（multiple inheritance）。多继承功能强大但容易把关系搞复杂，尤其会出现著名的『菱形继承』问题。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "多继承",
          'code': "#include <iostream>\nclass Speaker {\npublic:\n    void speak() { std::cout << \"演讲\" << std::endl; }\n};\nclass Dancer {\npublic:\n    void dance() { std::cout << \"跳舞\" << std::endl; }\n};\nclass Performer : public Speaker, public Dancer {  // 多继承\n};\nint main() {\n    Performer p;\n    p.speak();\n    p.dance();\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>class Performer : public Speaker, public Dancer</code.inline> 同时继承两个父类，Performer 的对象既会 speak 又会 dance。多继承适合这种『组合不同能力』的场景，但要用得克制。"
        },
        {
          'type': "h",
          'text': "菱形继承问题"
        },
        {
          'type': "p",
          'text': "如果两个类都继承同一个基类，第三个类又同时继承这两个类，就形成菱形（钻石）结构。此时最底层的对象会包含两份顶层基类的成员，出现歧义和冗余。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "菱形继承与虚继承",
          'code': "#include <iostream>\nclass A {\npublic:\n    int value = 0;\n};\nclass B : virtual public A { };   // 虚继承\nclass C : virtual public A { };   // 虚继承\nclass D : public B, public C { }; // 只有一份 A\nint main() {\n    D d;\n    d.value = 42;   // 不虚继承会报歧义错误\n    std::cout << d.value << std::endl;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "用 <code.inline>virtual</code.inline> 修饰继承（虚继承），可以让菱形顶部的 A 在 D 里只保留一份。没有虚继承时，B 和 C 各有一份 A，访问 <code.inline>d.value</code.inline> 会报『有歧义』错误。"
        },
        {
          'type': "warn",
          'title': "多继承容易踩坑",
          'text': "菱形继承（钻石问题）是多继承最经典的坑：冗余副本、构造顺序复杂、访问歧义。很多语言干脆禁止多继承。C++ 里能避免就避免，优先用『组合』（一个类包含另一个类）或接口式设计。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"多继承与菱形继承\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"多继承与菱形继承\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"多继承与菱形继承\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "多继承让一个类继承多个父类",
            "菱形继承会导致基类成员重复和访问歧义",
            "虚继承 virtual 可让菱形基类只保留一份",
            "多继承要克制，优先考虑组合"
          ]
        }
      ],
      'templates': [
        {
          'name': "虚继承演示",
          'code': "#include <iostream>\nclass A { public: int v = 1; };\nclass B : virtual public A {};\nclass C : virtual public A {};\nclass D : public B, public C {};\nint main() {\n    D d;\n    d.v = 5;\n    std::cout << d.v << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-33",
      'title': "虚函数与多态（动态绑定）",
      'summary': "虚函数 + 父类指针 = 多态，同一调用呈现不同行为。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "多态（polymorphism）是面向对象最强大的特性：用父类指针或引用指向子类对象，调用虚函数时，实际执行的是子类版本。这样一套代码可以处理各种子类，程序扩展性大增。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "虚函数实现多态",
          'code': "#include <iostream>\n#include <string>\nclass Animal {\npublic:\n    virtual void speak() {   // 虚函数\n        std::cout << \"动物在叫\" << std::endl;\n    }\n};\nclass Dog : public Animal {\npublic:\n    void speak() override {  // override 明确表示覆盖\n        std::cout << \"汪汪\" << std::endl;\n    }\n};\nclass Cat : public Animal {\npublic:\n    void speak() override {\n        std::cout << \"喵喵\" << std::endl;\n    }\n};\nint main() {\n    Animal *a = new Dog();   // 父类指针指向子类对象\n    Animal *b = new Cat();\n    a->speak();   // 汪汪（调用 Dog 版本）\n    b->speak();   // 喵喵（调用 Cat 版本）\n    delete a;\n    delete b;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "关键：<code inline>Animal *a = new Dog();</code> 用父类指针指向子类。a 的类型是 Animal*，但调用 <code.inline>a->speak()</code.inline> 却输出了 Dog 的『汪汪』。这是因为 speak 是虚函数，实际调用哪个版本在运行时根据对象真实类型决定，这叫**动态绑定**。"
        },
        {
          'type': "p",
          'text': "如果没有 virtual 关键字，a->speak() 只会调用 Animal 的版本（静态绑定），多态就不成立了。所以 virtual 是多态的开关。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "统一处理不同类型的动物",
          'code': "#include <iostream>\n#include <vector>\nclass Animal {\npublic:\n    virtual void speak() { std::cout << \"...\" << std::endl; }\n};\nclass Dog : public Animal {\npublic:\n    void speak() override { std::cout << \"汪汪\" << std::endl; }\n};\nclass Cat : public Animal {\npublic:\n    void speak() override { std::cout << \"喵喵\" << std::endl; }\n};\nint main() {\n    std::vector<Animal*> zoo;\n    zoo.push_back(new Dog());\n    zoo.push_back(new Cat());\n    for (Animal* a : zoo) {\n        a->speak();   // 一套代码，不同表现\n    }\n    for (Animal* a : zoo) delete a;\n    return 0;\n}"
        },
        {
          'type': "tip",
          'title': "override 关键字",
          'text': "C++11 起推荐在覆盖虚函数时写上 override，编译器会帮你检查：如果父类根本没有同名虚函数，写了 override 会报错，能提前发现拼写错误。"
        },
        {
          'type': "warn",
          'title': "虚函数只有通过指针/引用才有动态绑定",
          'text': "如果直接用值类型 <code.inline>Animal a = Dog();</code.inline>（对象切片），只保留 Animal 部分，多态失效。多态必须配合指针或引用使用。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"虚函数与多态（动态绑定）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"虚函数与多态（动态绑定）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"虚函数与多态（动态绑定）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "virtual 声明虚函数，开启动态绑定",
            "父类指针/引用指向子类对象时调用子类版本",
            "override 明确覆盖，便于编译器检查",
            "多态让一套代码处理不同子类",
            "对象切片会破坏多态，必须用指针或引用"
          ]
        }
      ],
      'templates': [
        {
          'name': "动物大合唱",
          'code': "#include <iostream>\n#include <vector>\nclass Animal {\npublic:\n    virtual void speak() {}\n};\nclass Dog : public Animal {\npublic:\n    void speak() override { std::cout << \"汪汪 \"; }\n};\nclass Cat : public Animal {\npublic:\n    void speak() override { std::cout << \"喵喵 \"; }\n};\nint main() {\n    std::vector<Animal*> zoo = {new Dog(), new Cat(), new Dog()};\n    for (Animal* a : zoo) a->speak();\n    std::cout << std::endl;\n    for (Animal* a : zoo) delete a;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-34",
      'title': "虚析构函数：为什么必须用",
      'summary': "父类指针 delete 子类对象时，虚析构保证完整释放。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "当用父类指针指向子类对象，再 delete 这个指针时，会发生什么？如果父类析构函数不是虚函数，delete 只调用父类析构，子类自己那部分资源没被释放，造成资源泄漏甚至崩溃。解决办法：把父类析构函数声明为 virtual。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "虚析构函数",
          'code': "#include <iostream>\nclass Base {\npublic:\n    virtual ~Base() {   // 虚析构函数\n        std::cout << \"Base 析构\" << std::endl;\n    }\n};\nclass Derived : public Base {\npublic:\n    ~Derived() {\n        std::cout << \"Derived 析构\" << std::endl;\n    }\n};\nint main() {\n    Base *p = new Derived();\n    delete p;   // 正确顺序：先 Derived 析构，再 Base 析构\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "运行会依次输出 Derived 析构、Base 析构。因为析构函数是虚函数，delete 时根据对象的真实类型调用派生类析构，派生类析构完再自动调基类析构，全链路的资源都被清理。"
        },
        {
          'type': "danger",
          'title': "没有虚析构会导致内存泄漏",
          'text': "如果基类析构不是虚函数，delete 父类指针时只调用父类析构，Derived 里的资源（比如 new 的内存、打开的文件）就永远不被释放。规则很简单：**只要类会被作为基类使用，就要把析构函数声明为 virtual**。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "标准做法",
          'code': "#include <iostream>\nclass Base {\npublic:\n    virtual ~Base() {}   // 空实现也要 virtual\n};\nclass Derived : public Base {\npublic:\n    ~Derived() { /* 清理子类资源 */ }\n};\nint main() {\n    Base *p = new Derived();\n    delete p;\n    return 0;\n}"
        },
        {
          'type': "info",
          'title': "虚析构的开销",
          'text': "加 virtual 会让对象带上虚函数表指针，多占一点内存（通常 8 字节）。这点开销换来安全，完全值得。只有当你确定这个类永远不会被继承，才可以省略。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"虚析构函数：为什么必须用\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"虚析构函数：为什么必须用\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"虚析构函数：为什么必须用\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "父类指针 delete 子类对象需要虚析构",
            "没有虚析构只调父类析构，子类资源泄漏",
            "基类析构函数应声明为 virtual",
            "delete 时按先子后父的顺序调用析构"
          ]
        }
      ],
      'templates': [
        {
          'name': "多态释放演示",
          'code': "#include <iostream>\nclass Base {\npublic:\n    virtual ~Base() { std::cout << \"Base 清理\" << std::endl; }\n};\nclass Derived : public Base {\npublic:\n    ~Derived() { std::cout << \"Derived 清理\" << std::endl; }\n};\nint main() {\n    Base *p = new Derived();\n    delete p;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-35",
      'title': "纯虚函数与抽象类（接口）",
      'summary': "用纯虚函数定义接口，强制子类实现，无法实例化抽象类。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "有时父类只负责『规定规矩』，不给出具体实现，这时用纯虚函数（pure virtual function）。写法是在虚函数声明末尾加 <code.inline>= 0</code.inline>。含有纯虚函数的类叫抽象类，不能实例化，只能被继承。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "抽象类定义接口",
          'code': "#include <iostream>\nclass Shape {\npublic:\n    virtual double area() const = 0;   // 纯虚函数：只声明不实现\n};\nclass Rect : public Shape {\nprivate:\n    double w, h;\npublic:\n    Rect(double a, double b) : w(a), h(b) {}\n    double area() const override {   // 子类必须实现\n        return w * h;\n    }\n};\nint main() {\n    // Shape s;   // 错误！抽象类不能创建对象\n    Rect r(3, 4);\n    std::cout << r.area() << std::endl;  // 12\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "Shape 只规定『任何图形都有 area() 方法』，但怎么算由子类决定。Rect 必须实现 area()。如果子类没实现所有纯虚函数，它仍然是抽象类，也不能实例化。这强制所有子类遵守统一的接口。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "多个子类实现同一接口",
          'code': "#include <iostream>\n#include <vector>\nclass Shape {\npublic:\n    virtual double area() const = 0;\n};\nclass Circle : public Shape {\nprivate:\n    double r;\npublic:\n    Circle(double x) : r(x) {}\n    double area() const override { return 3.14159 * r * r; }\n};\nclass Rect : public Shape {\nprivate:\n    double w, h;\npublic:\n    Rect(double a, double b) : w(a), h(b) {}\n    double area() const override { return w * h; }\n};\nint main() {\n    std::vector<Shape*> shapes;\n    shapes.push_back(new Circle(2));\n    shapes.push_back(new Rect(3, 4));\n    for (Shape* s : shapes) {\n        std::cout << s->area() << std::endl;\n    }\n    for (Shape* s : shapes) delete s;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "这个模式在真实项目里极其常见：定义抽象接口（有点像 Java 的 interface），一堆子类各自实现，调用方只跟接口打交道。以后往系统里加新图形，不需要改动现有调用代码，这就是开闭原则。"
        },
        {
          'type': "warn",
          'title': "抽象类不能实例化",
          'text': "试图 <code inline>Shape s;</code> 创建抽象类对象会编译报错，因为 area() 没有实现，对象不完整。抽象类存在的意义就是被继承、被实现。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"纯虚函数与抽象类（接口）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"纯虚函数与抽象类（接口）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"纯虚函数与抽象类（接口）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "纯虚函数：virtual ... = 0，只声明不实现",
            "含纯虚函数的类叫抽象类，不能实例化",
            "子类必须实现所有纯虚函数，否则也是抽象类",
            "抽象类用来定义接口，是开闭原则的基础"
          ]
        }
      ],
      'templates': [
        {
          'name': "形状接口",
          'code': "#include <iostream>\nclass Shape {\npublic:\n    virtual double area() const = 0;\n    virtual ~Shape() {}\n};\nclass Square : public Shape {\nprivate:\n    double side;\npublic:\n    Square(double s) : side(s) {}\n    double area() const override { return side * side; }\n};\nint main() {\n    Shape* s = new Square(5);\n    std::cout << s->area() << std::endl;\n    delete s;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-36",
      'title': "函数模板 template",
      'summary': "一个模板函数适配任意类型，告别重复代码。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "如果要对 int、double、char 分别写一个『求最大值』函数，代码会重复三遍。函数模板（template）用一个占位类型 T 一次性搞定，编译器会按需生成各类型的版本。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "函数模板求最大值",
          'code': "#include <iostream>\ntemplate <typename T>\nT myMax(T a, T b) {\n    return (a > b) ? a : b;\n}\nint main() {\n    std::cout << myMax(3, 5) << std::endl;      // 5\n    std::cout << myMax(3.5, 2.1) << std::endl;  // 3.5\n    std::cout << myMax('a', 'z') << std::endl; // z\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>template <typename T></code.inline> 声明 T 是一个类型占位符。调用 <code inline>myMax(3, 5)</code> 时编译器推断 T=int，<code inline>myMax(3.5, 2.1)</code> 推断 T=double，自动生成对应函数。一个模板，处处通用。"
        },
        {
          'type': "h",
          'text': "多个类型参数与显式指定"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "两个类型参数",
          'code': "#include <iostream>\ntemplate <typename T1, typename T2>\nvoid printPair(T1 a, T2 b) {\n    std::cout << a << \" 和 \" << b << std::endl;\n}\nint main() {\n    printPair(10, \"个苹果\");\n    printPair(3.14, 42);\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "模板可以有多个类型参数。大多数时候类型能自动推断，不需要写 <code inline>myMax<int>(3, 5)</code>。但某些场景（如模板函数作为参数、返回类型无法推断）需要显式指定：<code inline>myMax<int>(3, 5)</code>。"
        },
        {
          'type': "warn",
          'title': "模板的代码是编译期生成",
          'text': "模板不是运行时特性，而是编译期『按需生成』。只有真正用到的类型才会生成代码。这也意味着模板错误要到实例化时才暴露，报错信息往往很吓人，新手要有点心理准备。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"函数模板 template\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"函数模板 template\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"函数模板 template\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "template <typename T> 定义函数模板",
            "T 是类型占位符，编译器自动推断",
            "一个模板适配多种类型，减少重复代码",
            "支持多个类型参数，可显式指定类型"
          ]
        }
      ],
      'templates': [
        {
          'name': "通用绝对值",
          'code': "#include <iostream>\ntemplate <typename T>\nT absValue(T x) {\n    return (x < 0) ? -x : x;\n}\nint main() {\n    std::cout << absValue(-5) << std::endl;\n    std::cout << absValue(-3.14) << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-37",
      'title': "类模板",
      'summary': "类也能用模板参数，写出适用任意数据类型的容器类。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "函数可以模板化，类当然也可以。类模板让类能适用于多种类型，最典型的例子就是 STL 的 vector<int>、vector<double> 等——它们本质都是同一个类模板 vector 针对不同 T 生成的。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "定义类模板",
          'code': "#include <iostream>\ntemplate <typename T>\nclass Box {\nprivate:\n    T value;\npublic:\n    Box(T v) : value(v) {}\n    T get() { return value; }\n};\nint main() {\n    Box<int> b1(100);\n    Box<double> b2(3.14);\n    Box<std::string> b3(\"hello\");\n    std::cout << b1.get() << \" \" << b2.get() << \" \" << b3.get() << std::endl;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code inline>Box<int> b1(100)</code> 创建存 int 的盒子，<code inline>Box<double></code> 存 double。<code inline><T></code> 就是类的模板参数，使用时用 <code inline>Box<类型></code> 指定具体类型。需要 <code inline>#include <string></code> 才能用 std::string。"
        },
        {
          'type': "h",
          'text': "类模板的成员函数在类外定义"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "类外定义成员函数",
          'code': "#include <iostream>\ntemplate <typename T>\nclass Box {\nprivate:\n    T value;\npublic:\n    Box(T v);\n    T get();\n};\ntemplate <typename T>\nBox<T>::Box(T v) : value(v) {}   // 类外定义要带 template 和 <T>\ntemplate <typename T>\nT Box<T>::get() { return value; }\nint main() {\n    Box<int> b(42);\n    std::cout << b.get() << std::endl;\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "类模板的实现通常放头文件",
          'text': "普通函数把声明放 .h、实现放 .cpp 没问题，但类模板不行。因为模板是编译期按需生成，编译器需要看到完整定义才能实例化，所以类模板通常把实现也写在头文件里，否则链接时报『未定义引用』。"
        },
        {
          'type': "list",
          'items': [
            "template <typename T> class 名字 { ... } 定义类模板",
            "用 类名<类型> 实例化，如 Box<int>",
            "成员函数可用 T 作为类型",
            "类模板实现一般放头文件"
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"类模板\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"类模板\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"类模板\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "类模板用 template <typename T> 定义",
            "实例化用 Box<int> 指定类型",
            "类外定义成员函数要写 template 和 <T>",
            "类模板实现放头文件，避免链接错误"
          ]
        }
      ],
      'templates': [
        {
          'name': "通用成对数据",
          'code': "#include <iostream>\ntemplate <typename A, typename B>\nclass Pair {\npublic:\n    A first;\n    B second;\n    Pair(A a, B b) : first(a), second(b) {}\n    void show() { std::cout << first << \",\" << second << std::endl; }\n};\nint main() {\n    Pair<int, std::string> p(1, \"one\");\n    p.show();\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-38",
      'title': "模板特化",
      'summary': "为特定类型提供专属实现，通用模板的例外处理。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "大多数类型用通用模板就行，但某些类型需要特殊处理。比如打印字符串时想显示长度、指针类型想显示地址。模板特化（specialization）就是为特定类型单独写一份实现，让它们走专属版本。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "函数模板特化",
          'code': "#include <iostream>\n#include <string>\ntemplate <typename T>\nvoid show(T v) {\n    std::cout << \"通用: \" << v << std::endl;\n}\ntemplate <>\nvoid show<std::string>(std::string v) {   // string 的特化版本\n    std::cout << \"字符串: \" << v << \" 长度\" << v.length() << std::endl;\n}\nint main() {\n    show(42);\n    show(3.14);\n    show(std::string(\"hello\"));   // 走特化版本\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code inline>template <></code> 表示全特化：后面紧跟 <code inline>show<std::string></code> 指明为哪个类型特化。调用 show(string) 时走特化版本，其余走通用版本。"
        },
        {
          'type': "h",
          'text': "类模板特化"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "类模板特化",
          'code': "#include <iostream>\n#include <string>\ntemplate <typename T>\nclass Info {\npublic:\n    void describe() { std::cout << \"通用类型\" << std::endl; }\n};\ntemplate <>\nclass Info<int> {   // int 的特化版本\npublic:\n    void describe() { std::cout << \"这是整数类型\" << std::endl; }\n};\nint main() {\n    Info<double> a;\n    Info<int> b;\n    a.describe();   // 通用类型\n    b.describe();   // 这是整数类型\n    return 0;\n}"
        },
        {
          'type': "tip",
          'title': "还有偏特化",
          'text': "除了为某个具体类型写全特化，还可以对『部分』做特化，比如所有指针类型 <code inline>Info<T*></code> 共用一套逻辑，这叫偏特化。STL 里大量使用这些技巧做类型优化。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"模板特化\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"模板特化\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"模板特化\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "模板特化为特定类型提供专属实现",
            "全特化写法：template <> 函数名<类型>",
            "类模板也能特化：template <> class 名<类型>",
            "偏特化针对部分类型特征（如指针）"
          ]
        }
      ],
      'templates': [
        {
          'name': "特化显示指针",
          'code': "#include <iostream>\ntemplate <typename T>\nvoid print(T v) {\n    std::cout << \"值: \" << v << std::endl;\n}\ntemplate <typename T>\nvoid print(T* p) {   // 指针的偏特化\n    if (p) std::cout << \"指针指向: \" << *p << std::endl;\n}\nint main() {\n    int x = 7;\n    print(x);\n    print(&x);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-39",
      'title': "STL 概述与 vector 容器",
      'summary': "认识标准模板库，掌握最常用的动态数组 vector。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "STL（Standard Template Library）是 C++ 标准库的模板部分，提供了一整套『现成的』容器（存数据的结构）、算法（排序查找等）和迭代器。有了 STL，你几乎不用再自己写链表、动态数组了，直接用就行。"
        },
        {
          'type': "list",
          'items': [
            "容器 Container：vector、list、map、set 等存数据的结构",
            "算法 Algorithm：sort、find、count 等通用操作",
            "迭代器 Iterator：在容器元素间移动的『指针』"
          ]
        },
        {
          'type': "h",
          'text': "vector：能自动扩容的动态数组"
        },
        {
          'type': "p",
          'text': "<code inline>std::vector</code> 是 STL 里最常用的容器，像一个『想装多少装多少』的数组，不用管长度。它自动管理内存，按下标随机访问还特别快。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "vector 基本用法",
          'code': "#include <iostream>\n#include <vector>\nint main() {\n    std::vector<int> v;\n    v.push_back(10);   // 尾部添加\n    v.push_back(20);\n    v.push_back(30);\n    std::cout << \"大小：\" << v.size() << std::endl;\n    for (int i = 0; i < v.size(); i++) {\n        std::cout << v[i] << \" \";   // 按下标访问\n    }\n    std::cout << std::endl;\n    return 0;\n}"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "vector 常用操作",
          'code': "#include <iostream>\n#include <vector>\nint main() {\n    std::vector<int> v = {1, 2, 3};\n    v.push_back(4);        // 尾部加\n    v.pop_back();          // 尾部删\n    v.insert(v.begin() + 1, 99);  // 在第二个位置插入\n    v.erase(v.begin());    // 删除第一个\n    std::cout << v[0] << \" \" << v.size() << std::endl;  // 99 3\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "常用方法：<code inline>push_back</code> 尾部添加、<code inline>pop_back</code> 尾部删除、<code inline>size</code> 元素个数、<code inline>insert</code> 指定位置插入、<code inline>erase</code> 删除。<code inline>v[0]</code> 按下标随机访问，和数组一样快。"
        },
        {
          'type': "warn",
          'title': "vector 自动扩容的代价",
          'text': "vector 容量不够时会整体搬移到更大的内存（重新分配）。频繁往头部 insert/erase 会很慢（后面的元素都要挪），这种场景应该用 list 或 deque。往尾部 push_back 则非常快，是 vector 的主场。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"STL 概述与 vector 容器\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"STL 概述与 vector 容器\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"STL 概述与 vector 容器\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "STL = 容器 + 算法 + 迭代器",
            "vector 是自动扩容的动态数组",
            "push_back/size/下标访问 最常用",
            "vector 尾部操作快，头部操作慢"
          ]
        }
      ],
      'templates': [
        {
          'name': "vector 统计平均分",
          'code': "#include <iostream>\n#include <vector>\nint main() {\n    std::vector<int> scores = {85, 90, 78, 92, 88};\n    int sum = 0;\n    for (int s : scores) sum += s;\n    std::cout << \"平均分：\" << sum / (double)scores.size() << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-40",
      'title': "list 双向链表容器",
      'summary': "list 适合频繁插入删除，用双向链表实现。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "<code inline>std::list</code> 是双向链表，每个元素有指向前后元素的链接。它的特长是**任意位置的插入和删除都很快**（只需改链接），不像 vector 要挪动后面的元素。代价是不支持按下标随机访问。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "list 基本用法",
          'code': "#include <iostream>\n#include <list>\nint main() {\n    std::list<int> lst = {1, 2, 3};\n    lst.push_front(0);   // 头部插入\n    lst.push_back(4);    // 尾部插入\n    lst.remove(2);       // 删除所有值为 2 的元素\n    for (int v : lst) {\n        std::cout << v << \" \";\n    }\n    std::cout << std::endl;  // 0 1 3 4\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "list 支持 <code inline>push_front</code>/<code inline>pop_front</code> 头部操作和 <code inline>push_back</code>/<code inline>pop_back</code> 尾部操作，<code inline>remove(值)</code> 直接删除指定值的所有元素。遍历用 range-for 很方便。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "list 的插入与删除",
          'code': "#include <iostream>\n#include <list>\nint main() {\n    std::list<int> lst = {10, 20, 30, 40};\n    auto it = lst.begin();\n    it++;          // 指向第二个元素\n    lst.insert(it, 15);   // 在 20 前插入 15\n    lst.erase(it);        // 删除当前指向的 20\n    for (int v : lst) {\n        std::cout << v << \" \";\n    }\n    std::cout << std::endl;  // 10 15 30 40\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "list 不支持下标访问",
          'text': "list 是链表，没有连续内存，所以 <code inline>lst[2]</code> 会编译报错。想按位置访问得靠迭代器一步步走，或者干脆用 vector。选容器要先想清楚：要随机访问选 vector，要频繁中间插删选 list。"
        },
        {
          'type': "list",
          'items': [
            "list 是双向链表，头尾中间插入删除都快",
            "支持 push_front/pop_front/push_back/pop_back",
            "remove(值) 删除指定值的所有元素",
            "不支持下标随机访问，靠迭代器移动"
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"list 双向链表容器\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"list 双向链表容器\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"list 双向链表容器\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "list 双向链表，任意位置插删都快",
            "支持头部和尾部插入删除",
            "remove 按值删除，遍历用 range-for",
            "list 不能按下标随机访问"
          ]
        }
      ],
      'templates': [
        {
          'name': "list 模拟队列",
          'code': "#include <iostream>\n#include <list>\nint main() {\n    std::list<std::string> tasks;\n    tasks.push_back(\"写作业\");\n    tasks.push_back(\"买菜\");\n    tasks.push_back(\"锻炼\");\n    for (auto &t : tasks) {\n        std::cout << \"- \" << t << std::endl;\n    }\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-41",
      'title': "deque 双端队列与 stack / queue 适配器",
      'summary': "deque 头尾都能快速操作，stack 后进先出、queue 先进先出。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "<code.inline>std::deque</code.inline>（双端队列）是 vector 的近亲，但它**头尾两端都能高效插入删除**，还支持下标随机访问。stack（栈）和 queue（队列）则是建立在底层容器之上的『适配器』，对外只暴露受限的接口。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "deque 头尾操作",
          'code': "#include <iostream>\n#include <deque>\nint main() {\n    std::deque<int> dq;\n    dq.push_back(3);\n    dq.push_front(1);\n    dq.push_back(4);\n    std::cout << \"队首：\" << dq.front() << \" 队尾：\" << dq.back() << std::endl;\n    for (int v : dq) {\n        std::cout << v << \" \";\n    }\n    std::cout << std::endl;  // 1 3 4\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "deque 同时提供 <code.inline>push_front</code>/<code.inline>pop_front</code> 和 <code.inline>push_back</code>/<code.inline>pop_back</code>，并且 <code.inline>dq[1]</code> 也能按下标访问。它像 vector 和 list 的折中：两头都快，又能随机访问。"
        },
        {
          'type': "h",
          'text': "stack：后进先出（LIFO）"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "stack 与 queue",
          'code': "#include <iostream>\n#include <stack>\n#include <queue>\nint main() {\n    std::stack<int> s;   // 栈：后进先出\n    s.push(1); s.push(2); s.push(3);\n    std::cout << \"栈顶：\" << s.top() << std::endl;  // 3\n    s.pop();\n    std::cout << \"弹出后栈顶：\" << s.top() << std::endl;  // 2\n\n    std::queue<int> q;   // 队列：先进先出\n    q.push(1); q.push(2); q.push(3);\n    std::cout << \"队首：\" << q.front() << std::endl;  // 1\n    q.pop();\n    std::cout << \"弹出后队首：\" << q.front() << std::endl;  // 2\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "栈像一摞盘子：只能从顶上放、从顶上取（后进先出）。队列像排队买饭：先来的先买（先进先出）。stack 用 <code.inline>push</code>/<code.inline>pop</code>/<code.inline>top</code>；queue 用 <code.inline>push</code>/<code.inline>pop</code>/<code.inline>front</code>/<code.inline>back</code>。"
        },
        {
          'type': "warn",
          'title': "访问空栈/空队列会出问题",
          'text': "对空 stack 调用 top()、对空 queue 调用 front() 是未定义行为（可能崩溃）。使用前先判断 <code.inline>empty()</code>。"
        },
        {
          'type': "table",
          'head': [
            "容器",
            "结构",
            "特点",
            "典型场景"
          ],
          'rows': [
            [
              "vector",
              "动态数组",
              "尾部快、随机访问快",
              "通用集合"
            ],
            [
              "deque",
              "双端队列",
              "头尾都快、可随机访问",
              "需要头尾操作的场景"
            ],
            [
              "stack",
              "栈",
              "后进先出",
              "函数调用、括号匹配"
            ],
            [
              "queue",
              "队列",
              "先进先出",
              "任务排队、消息队列"
            ]
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"deque 双端队列与 stack / queue 适配器\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"deque 双端队列与 stack / queue 适配器\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"deque 双端队列与 stack / queue 适配器\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "deque 头尾插入删除都快，且支持下标访问",
            "stack 后进先出：push/pop/top",
            "queue 先进先出：push/pop/front/back",
            "使用前先判断 empty() 避免崩溃"
          ]
        }
      ],
      'templates': [
        {
          'name': "栈模拟浏览器后退",
          'code': "#include <iostream>\n#include <stack>\n#include <string>\nint main() {\n    std::stack<std::string> history;\n    history.push(\"首页\");\n    history.push(\"新闻页\");\n    history.push(\"详情页\");\n    std::cout << \"当前页：\" << history.top() << std::endl;\n    history.pop();\n    std::cout << \"后退到：\" << history.top() << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-42",
      'title': "map / multimap 关联容器",
      'summary': "键值对存储，按键自动排序，快速按 key 查找。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "<code.inline>std::map</code.inline> 存的是『键值对』（key-value），像一本字典：给你一个词（key），立刻查到解释（value）。map 内部用平衡树实现，元素按键自动排序，查找、插入、删除都是对数级复杂度，非常快。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "map 基本用法",
          'code': "#include <iostream>\n#include <map>\n#include <string>\nint main() {\n    std::map<std::string, int> scores;\n    scores[\"小明\"] = 90;   // 按键存值\n    scores[\"小红\"] = 85;\n    scores[\"小明\"] = 95;   // key 已存在，覆盖\n    std::cout << \"小明：\" << scores[\"小明\"] << std::endl;  // 95\n    for (auto &kv : scores) {\n        std::cout << kv.first << \"=\" << kv.second << std::endl;\n    }\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>scores[\"小明\"] = 90</code.inline> 直接按下标存取值。遍历时每个元素是一对，<code.inline>kv.first</code> 是 key，<code.inline>kv.second</code> 是 value。map 按键自动排序，所以遍历输出是按名字排序的。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "查找与删除",
          'code': "#include <iostream>\n#include <map>\n#include <string>\nint main() {\n    std::map<std::string, int> m;\n    m[\"a\"] = 1;\n    m[\"b\"] = 2;\n    if (m.count(\"a\")) {   // count 判断 key 是否存在\n        std::cout << \"a 存在\" << std::endl;\n    }\n    auto it = m.find(\"b\");  // find 返回迭代器\n    if (it != m.end()) {\n        std::cout << \"b=\" << it->second << std::endl;\n    }\n    m.erase(\"a\");           // 按键删除\n    std::cout << \"删除后大小：\" << m.size() << std::endl;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "判断 key 是否存在用 <code.inline>count(key)</code.inline>（返回 0 或 1）或 <code.inline>find(key)</code.inline>（返回迭代器，找不到返回 end()）。注意 <code.inline>m[key]</code> 如果 key 不存在会**自动插入一个空值**，查找时别用下标。"
        },
        {
          'type': "h",
          'text': "multimap：允许重复键"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "multimap 允许重复 key",
          'code': "#include <iostream>\n#include <map>\nint main() {\n    std::multimap<int, std::string> m;\n    m.insert({1, \"一\"});\n    m.insert({1, \"壹\"});   // 相同 key 也允许\n    m.insert({2, \"二\"});\n    for (auto &kv : m) {\n        std::cout << kv.first << \"=\" << kv.second << std::endl;\n    }\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "下标访问的坑",
          'text': "用 <code.inline>m[\"不存在\"]</code> 读取时，map 会悄悄插入一个 value 为默认值的新元素，导致 size 变大。只想判断是否存在时，用 count 或 find，别用下标。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"map / multimap 关联容器\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"map / multimap 关联容器\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"map / multimap 关联容器\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "map 存键值对，按键自动排序",
            "scores[key] = value 存，kv.first/kv.second 访问",
            "count 和 find 用于判断 key 是否存在",
            "下标访问不存在的 key 会自动插入空值",
            "multimap 允许重复键"
          ]
        }
      ],
      'templates': [
        {
          'name': "词频统计",
          'code': "#include <iostream>\n#include <map>\n#include <string>\nint main() {\n    std::map<std::string, int> freq;\n    std::string words[] = {\"apple\", \"banana\", \"apple\", \"cherry\", \"apple\"};\n    for (auto &w : words) {\n        freq[w]++;\n    }\n    for (auto &kv : freq) {\n        std::cout << kv.first << \": \" << kv.second << std::endl;\n    }\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-43",
      'title': "set / multiset 容器",
      'summary': "自动去重 + 自动排序的集合，适合判断元素是否存在。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "<code.inline>std::set</code.inline> 是集合：**元素唯一且自动排序**。它特别适合『去重』和『判断某个元素是否存在』。set 里没有键值对，每个元素本身既是 key 也是 value。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "set 自动去重排序",
          'code': "#include <iostream>\n#include <set>\nint main() {\n    std::set<int> s;\n    s.insert(3);\n    s.insert(1);\n    s.insert(3);   // 重复，自动忽略\n    s.insert(2);\n    for (int v : s) {\n        std::cout << v << \" \";\n    }\n    std::cout << std::endl;  // 1 2 3（自动排序且不重复）\n    if (s.count(2)) {\n        std::cout << \"包含 2\" << std::endl;\n    }\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "insert 重复元素不会报错，只是被忽略。遍历输出是按从小到大排序的。<code.inline>count(x)</code.inline> 返回 1 表示存在，返回 0 表示不存在，用来做『是否存在』判断非常自然。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "用 set 去除重复",
          'code': "#include <iostream>\n#include <set>\n#include <vector>\nint main() {\n    std::vector<int> nums = {3, 1, 4, 1, 5, 9, 2, 6, 5};\n    std::set<int> unique(nums.begin(), nums.end());  // 从 vector 构造\n    std::cout << \"原个数：\" << nums.size() << \"，去重后：\" << unique.size() << std::endl;\n    for (int v : unique) {\n        std::cout << v << \" \";\n    }\n    std::cout << std::endl;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "把 vector 的迭代器范围直接传给 set 构造，就能得到去重且排序的集合，一行代码搞定。这是 set 最经典的用法之一。"
        },
        {
          'type': "h",
          'text': "multiset：允许重复的集合"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "multiset 允许重复",
          'code': "#include <iostream>\n#include <set>\nint main() {\n    std::multiset<int> s;\n    s.insert(2);\n    s.insert(1);\n    s.insert(2);   // 允许重复\n    std::cout << \"2 的个数：\" << s.count(2) << std::endl;  // 2\n    for (int v : s) {\n        std::cout << v << \" \";\n    }\n    std::cout << std::endl;  // 1 2 2\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "set 与 unordered_set 别混淆",
          'text': "set 内部用平衡树，元素排序；unordered_set 内部用哈希表，不排序但查找更快。需要有序用 set，只追求查找速度用 unordered_set（下一章讲）。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"set / multiset 容器\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"set / multiset 容器\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"set / multiset 容器\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "set 元素唯一且自动排序",
            "insert 重复元素自动忽略",
            "count 判断是否存在，去重用 set 构造",
            "multiset 允许重复元素",
            "需要排序用 set，只求快用 unordered_set"
          ]
        }
      ],
      'templates': [
        {
          'name': "名单去重",
          'code': "#include <iostream>\n#include <set>\n#include <string>\nint main() {\n    std::string names[] = {\"张三\", \"李四\", \"张三\", \"王五\", \"李四\"};\n    std::set<std::string> unique(names, names + 5);\n    std::cout << \"去重后共 \" << unique.size() << \" 人：\" << std::endl;\n    for (auto &n : unique) {\n        std::cout << \"- \" << n << std::endl;\n    }\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-44",
      'title': "unordered_map / unordered_set",
      'summary': "基于哈希表的容器，平均查找 O(1)，但不保证顺序。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "map/set 内部是平衡树，查找 O(log n)。<code.inline>unordered_map</code.inline> / <code.inline>unordered_set</code.inline> 则用哈希表实现，平均查找 O(1)，速度快得多。代价是**元素不排序**，遍历顺序是随机的。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "unordered_map 用法",
          'code': "#include <iostream>\n#include <unordered_map>\n#include <string>\nint main() {\n    std::unordered_map<std::string, int> age;\n    age[\"张三\"] = 30;\n    age[\"李四\"] = 25;\n    age[\"王五\"] = 28;\n    std::cout << \"张三：\" << age[\"张三\"] << std::endl;\n    for (auto &kv : age) {\n        std::cout << kv.first << \"=\" << kv.second << std::endl;  // 顺序随机\n    }\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "用法和 map 几乎一模一样：<code.inline>age[\"张三\"] = 30</code.inline> 存取，遍历得到 kv.first/kv.second。唯一区别是遍历顺序不保证，而且不能指望按键排序。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "哈希表速度对比场景",
          'code': "#include <iostream>\n#include <unordered_set>\nint main() {\n    std::unordered_set<int> s;\n    for (int i = 0; i < 1000000; i++) {\n        s.insert(i);\n    }\n    std::cout << \"查找 999999：\" << (s.count(999999) ? \"存在\" : \"不存在\") << std::endl;\n    return 0;\n}"
        },
        {
          'type': "table",
          'head': [
            "对比项",
            "map / set",
            "unordered_map / unordered_set"
          ],
          'rows': [
            [
              "底层",
              "平衡树（红黑树）",
              "哈希表"
            ],
            [
              "查找复杂度",
              "O(log n)",
              "平均 O(1)"
            ],
            [
              "顺序",
              "按键排序",
              "不排序"
            ],
            [
              "适用场景",
              "需要有序遍历",
              "只追求查找速度"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "哈希容器要求 key 可哈希",
          'text': "unordered 容器要求 key 类型有哈希函数。int、string 等内置类型都能直接用；自定义类型默认没有哈希函数，需要自己提供，否则编译报错。map/set 只要 key 能比较（<）就行，约束更少。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"unordered_map / unordered_set\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"unordered_map / unordered_set\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"unordered_map / unordered_set\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "unordered_map/set 用哈希表实现",
            "平均查找 O(1)，比树快",
            "元素不排序，遍历顺序随机",
            "要排序用 map/set，只求快用 unordered 系列",
            "自定义类型做 key 需提供哈希函数"
          ]
        }
      ],
      'templates': [
        {
          'name': "电话簿",
          'code': "#include <iostream>\n#include <unordered_map>\n#include <string>\nint main() {\n    std::unordered_map<std::string, std::string> phone;\n    phone[\"张三\"] = \"13800000001\";\n    phone[\"李四\"] = \"13800000002\";\n    std::cout << \"张三电话：\" << phone[\"张三\"] << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-45",
      'title': "algorithm 算法库：sort / find / count / max / min",
      'summary': "用标准算法完成排序查找统计，不再手写循环。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "STL 的 <code.inline><algorithm></code.inline> 头文件提供了大量通用算法：排序、查找、统计、取最大最小值等。它们配合迭代器工作，不依赖具体容器，是 STL 的精华之一。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "常用算法演示",
          'code': "#include <iostream>\n#include <vector>\n#include <algorithm>\nint main() {\n    std::vector<int> v = {5, 2, 8, 1, 9};\n    std::sort(v.begin(), v.end());   // 排序（升序）\n    for (int x : v) std::cout << x << \" \";\n    std::cout << std::endl;  // 1 2 5 8 9\n    std::cout << \"最大值：\" << *std::max_element(v.begin(), v.end()) << std::endl;\n    std::cout << \"最小值：\" << *std::min_element(v.begin(), v.end()) << std::endl;\n    std::cout << \"2 出现次数：\" << std::count(v.begin(), v.end(), 2) << std::endl;\n    if (std::find(v.begin(), v.end(), 8) != v.end()) {\n        std::cout << \"找到了 8\" << std::endl;\n    }\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "几乎所有算法都接收两个迭代器表示范围：[begin, end)。<code.inline>sort</code> 排序、<code.inline>max_element</code>/<code.inline>min_element</code> 返回最大最小值（注意返回的是迭代器，要加 * 解引用）、<code.inline>count</code> 统计次数、<code.inline>find</code> 查找（找不到返回 end()）。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "降序排序与自定义排序",
          'code': "#include <iostream>\n#include <vector>\n#include <algorithm>\nint main() {\n    std::vector<int> v = {5, 2, 8, 1, 9};\n    std::sort(v.begin(), v.end(), std::greater<int>());  // 降序\n    for (int x : v) std::cout << x << \" \";\n    std::cout << std::endl;  // 9 8 5 2 1\n    std::vector<int> w = {3, 1, 4, 1, 5};\n    std::reverse(w.begin(), w.end());   // 反转\n    for (int x : w) std::cout << x << \" \";\n    std::cout << std::endl;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "sort 可以传第三个参数指定排序规则，<code.inline>std::greater<int>()</code.inline> 表示降序。<code.inline>reverse</code> 反转序列。还有 <code.inline>std::unique</code>（去重相邻重复）、<code.inline>std::binary_search</code>（二分查找）等常用算法。"
        },
        {
          'type': "info",
          'title': "算法都在 <algorithm> 里",
          'text': "使用这些算法记得 <code.inline>#include <algorithm></code.inline>。迭代器范围用 begin()/end()，或对数组用指针（begin/end 一样是迭代器）。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"algorithm 算法库：sort / find / count / max / min\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"algorithm 算法库：sort / find / count / max / min\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"algorithm 算法库：sort / find / count / max / min\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "algorithm 提供排序查找统计等通用算法",
            "算法接收 [begin, end) 迭代器范围",
            "max_element 返回迭代器，要 * 解引用",
            "sort 可传第三参数自定义规则",
            "find 找不到返回 end()"
          ]
        }
      ],
      'templates': [
        {
          'name': "排序后反转",
          'code': "#include <iostream>\n#include <vector>\n#include <algorithm>\nint main() {\n    std::vector<int> v = {4, 1, 3, 2};\n    std::sort(v.begin(), v.end());\n    std::reverse(v.begin(), v.end());\n    for (int x : v) std::cout << x << \" \";\n    std::cout << std::endl;  // 4 3 2 1\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-46",
      'title': "迭代器 iterator 与范围遍历",
      'summary': "迭代器是容器和算法之间的桥梁，理解解引用与移动。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "迭代器（iterator）是 STL 里的『万能指针』：它让算法不关心容器是什么，只要能用统一的方式访问元素。begin() 指向第一个元素，end() 指向最后一个元素的下一个位置（不代表真实元素）。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "用迭代器遍历 vector",
          'code': "#include <iostream>\n#include <vector>\nint main() {\n    std::vector<int> v = {10, 20, 30, 40};\n    for (auto it = v.begin(); it != v.end(); ++it) {\n        std::cout << *it << \" \";   // 解引用拿到元素\n    }\n    std::cout << std::endl;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code inline>it</code> 就像一个指针：<code inline>*it</code> 拿到当前元素，<code inline>++it</code> 移到下一个，<code inline>it != v.end()</code> 判断是否遍历完。<code inline>auto</code> 自动推导迭代器类型，不用手写一长串。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "通过迭代器修改元素",
          'code': "#include <iostream>\n#include <vector>\nint main() {\n    std::vector<int> v = {1, 2, 3, 4, 5};\n    for (auto it = v.begin(); it != v.end(); ++it) {\n        *it *= 2;   // 通过迭代器修改每个元素\n    }\n    for (int x : v) std::cout << x << \" \";\n    std::cout << std::endl;  // 2 4 6 8 10\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "迭代器既能读（*it）也能写（*it = 新值），还能配合算法。实际上 <code inline>for (int x : v)</code> 这种 range-for 就是编译器把迭代器遍历『翻译』出来的语法糖，两者本质一样。"
        },
        {
          'type': "list",
          'items': [
            "begin() 指向第一个元素，end() 指向最后一个的下一个",
            "*it 解引用取元素，++it 前进",
            "auto 自动推导迭代器类型",
            "range-for 是迭代器遍历的语法糖"
          ]
        },
        {
          'type': "warn",
          'title': "迭代器失效",
          'text': "对 vector 做 insert/erase/push_back 时，可能导致已有迭代器失效（比如扩容后地址变了），再用旧迭代器访问是未定义行为。需要插入删除的遍历要格外小心，常配合 erase 返回的新迭代器。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"迭代器 iterator 与范围遍历\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"迭代器 iterator 与范围遍历\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"迭代器 iterator 与范围遍历\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "迭代器是容器与算法之间的桥梁",
            "begin()/end() 定义遍历范围",
            "*it 解引用，++it 前进",
            "range-for 本质是迭代器遍历",
            "容器修改可能导致迭代器失效"
          ]
        }
      ],
      'templates': [
        {
          'name': "迭代器求和",
          'code': "#include <iostream>\n#include <vector>\nint main() {\n    std::vector<int> v = {5, 10, 15};\n    int sum = 0;\n    for (auto it = v.begin(); it != v.end(); ++it) {\n        sum += *it;\n    }\n    std::cout << \"和：\" << sum << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-47",
      'title': "仿函数（函数对象）",
      'summary': "重载 () 的对象能当函数用，还能携带状态，配合算法。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "仿函数（functor）也叫函数对象：一个对象重载了 <code.inline>operator()</code.inline>，就能像函数一样被调用。它比普通函数强的地方在于**可以携带状态**，而且能被标准算法接收。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "定义仿函数",
          'code': "#include <iostream>\nstruct Add {\n    int operator()(int a, int b) const {\n        return a + b;\n    }\n};\nint main() {\n    Add add;   // 创建对象\n    std::cout << add(3, 4) << std::endl;   // 像函数一样调用：7\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code inline>Add add;</code> 创建对象后，<code inline>add(3, 4)</code> 就会调用它的 <code inline>operator()(3, 4)</code>。所以 add 虽然是个对象，用起来却和函数一模一样。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "仿函数配合 sort 排序",
          'code': "#include <iostream>\n#include <vector>\n#include <algorithm>\nstruct Descending {\n    bool operator()(int a, int b) const {\n        return a > b;   // 返回真表示 a 排在 b 前面\n    }\n};\nint main() {\n    std::vector<int> v = {5, 2, 8, 1};\n    std::sort(v.begin(), v.end(), Descending());\n    for (int x : v) std::cout << x << \" \";\n    std::cout << std::endl;  // 8 5 2 1\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "sort 的第三个参数可以是一个仿函数对象，它定义了比较规则。STL 还自带一些仿函数，如 <code inline>std::greater<int>()</code>（降序）、<code inline>std::less<int>()</code>（升序）。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "带状态的仿函数",
          'code': "#include <iostream>\nstruct Counter {\n    int count = 0;\n    int operator()() {\n        return ++count;   // 每次调用状态加 1\n    }\n};\nint main() {\n    Counter c;\n    std::cout << c() << \" \" << c() << \" \" << c() << std::endl;  // 1 2 3\n    return 0;\n}"
        },
        {
          'type': "info",
          'title': "仿函数 vs lambda",
          'text': "lambda 表达式本质就是编译器帮你生成的一个仿函数对象。理解了仿函数，lambda 的原理也就清楚了。二者能力等价，现代 C++ 里 lambda 更简洁，仿函数则在复杂状态封装时更清晰。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"仿函数（函数对象）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"仿函数（函数对象）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"仿函数（函数对象）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "仿函数是重载了 operator() 的对象",
            "可以像函数一样调用 add(3, 4)",
            "能携带状态，这是普通函数做不到的",
            "配合 sort 等算法自定义规则",
            "lambda 本质就是仿函数对象"
          ]
        }
      ],
      'templates': [
        {
          'name': "累计求和仿函数",
          'code': "#include <iostream>\nstruct Accumulator {\n    int total = 0;\n    void operator()(int x) {\n        total += x;\n    }\n};\nint main() {\n    Accumulator acc;\n    acc(1); acc(2); acc(3);\n    std::cout << \"累计：\" << acc.total << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-48",
      'title': "lambda 表达式基础",
      'summary': "用 [] 和 () 直接写匿名函数，就地定义就地用。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "lambda 是 C++11 引入的匿名函数：不用先定义函数，直接在一个表达式里把函数写好。它的完整形态是 <code inline>[捕获] (参数) -> 返回类型 { 函数体 }</code>，很多部分可以省略。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "最简单的 lambda",
          'code': "#include <iostream>\nint main() {\n    auto add = [](int a, int b) { return a + b; };\n    std::cout << add(3, 4) << std::endl;  // 7\n\n    auto hello = []() {\n        std::cout << \"你好，lambda\" << std::endl;\n    };\n    hello();\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code inline>[]</code> 是捕获列表（这里为空，不捕获外部变量），<code inline>(int a, int b)</code> 是参数列表，函数体里 <code inline>return a + b</code> 返回结果。<code inline>auto</code> 让编译器推导 lambda 的类型。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "lambda 配合算法",
          'code': "#include <iostream>\n#include <vector>\n#include <algorithm>\nint main() {\n    std::vector<int> v = {5, 2, 8, 1, 9};\n    std::sort(v.begin(), v.end(), [](int a, int b) {\n        return a > b;   // 降序\n    });\n    for (int x : v) std::cout << x << \" \";\n    std::cout << std::endl;  // 9 8 5 2 1\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "lambda 最常见的用途就是作为算法的第三个参数：不用单独定义仿函数，就地写一段比较逻辑，代码紧凑、意图直接。这和上一章的仿函数效果一样，但简洁得多。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "用 lambda 统计",
          'code': "#include <iostream>\n#include <vector>\n#include <algorithm>\nint main() {\n    std::vector<int> v = {1, 7, 3, 9, 4};\n    int even = std::count_if(v.begin(), v.end(), [](int x) {\n        return x % 2 == 0;   // 判断是否偶数\n    });\n    std::cout << \"偶数个数：\" << even << std::endl;  // 2\n    return 0;\n}"
        },
        {
          'type': "info",
          'title': "lambda 类型",
          'text': "每个 lambda 都有独特的类型（由编译器生成），所以用 <code inline>auto</code> 存它。<code inline>std::function</code> 也可以存放 lambda，作为函数参数传递。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"lambda 表达式基础\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"lambda 表达式基础\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"lambda 表达式基础\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "lambda = 匿名函数，就地定义就地使用",
            "基本形态：[捕获] (参数) { 函数体 }",
            "最常用于算法的第三个参数",
            "用 auto 存 lambda，或用 std::function",
            "lambda 本质是编译器生成的仿函数"
          ]
        }
      ],
      'templates': [
        {
          'name': "筛选大于 n 的个数",
          'code': "#include <iostream>\n#include <vector>\n#include <algorithm>\nint main() {\n    std::vector<int> v = {10, 25, 30, 45, 50};\n    int n = std::count_if(v.begin(), v.end(), [](int x) {\n        return x > 30;\n    });\n    std::cout << \"大于 30 的有 \" << n << \" 个\" << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-49",
      'title': "lambda 进阶：捕获列表 [=] 与 [&]",
      'summary': "按值捕获和按引用捕获的区别，理解捕获的陷阱。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "lambda 默认不能访问外部变量。想用外部的变量，必须在捕获列表里声明：<code inline>[=]</code> 按值捕获所有外部变量（复制一份），<code inline>[&]</code> 按引用捕获（直接引用外部变量）。这个区别极其重要。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "按值捕获与按引用捕获",
          'code': "#include <iostream>\nint main() {\n    int base = 100;\n    auto byValue = [base](int x) { return base + x; };  // 复制 base\n    auto byRef = [&base](int x) { base += x; return base; };  // 引用 base\n    std::cout << byValue(5) << std::endl;  // 105\n    std::cout << byRef(5) << std::endl;    // 105（base 变为 105）\n    std::cout << byRef(5) << std::endl;    // 110（base 继续变）\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "按值捕获 [base] 时，lambda 里有一份 base 的**副本**，改它不影响外面的 base。按引用捕获 [&base] 时，lambda 直接用**外面那个** base，改它就真的改了。哪个都行，取决于你是否需要同步外面。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "全部捕获与指定捕获",
          'code': "#include <iostream>\nint main() {\n    int a = 1, b = 2, c = 3;\n    auto allVal = [=]() { return a + b + c; };      // 全部按值\n    auto allRef = [&]() { return a + b + c; };      // 全部按引用\n    auto mixed = [=, &c]() { c += 10; return a + b + c; };  // 混合：c 按引用，其余按值\n    std::cout << allVal() << std::endl;   // 6\n    std::cout << allRef() << std::endl;   // 6\n    std::cout << mixed() << std::endl;    // 16，且 c 变成 13\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "按引用捕获悬空引用",
          'text': "如果 lambda 被存起来、在外层变量销毁之后才调用，按引用捕获 [&] 会变成悬空引用，访问已销毁的变量，行为未定义。要存起来晚点用的 lambda，优先按值捕获 [=] 才安全。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "lambda 与算法结合捕获外部量",
          'code': "#include <iostream>\n#include <vector>\n#include <algorithm>\nint main() {\n    std::vector<int> v = {10, 25, 30, 45, 50};\n    int limit = 30;\n    int n = std::count_if(v.begin(), v.end(), [limit](int x) {\n        return x > limit;   // 使用捕获的 limit\n    });\n    std::cout << \"大于 \" << limit << \" 的有 \" << n << \" 个\" << std::endl;\n    return 0;\n}"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"lambda 进阶：捕获列表 [=] 与 [&]\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"lambda 进阶：捕获列表 [=] 与 [&]\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"lambda 进阶：捕获列表 [=] 与 [&]\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "[=] 按值捕获所有外部变量（副本）",
            "[&] 按引用捕获所有外部变量（真身）",
            "[=, &c] 可混合指定捕获方式",
            "晚点才调用的 lambda 用按值捕获更安全",
            "lambda 常与算法配合使用捕获的变量"
          ]
        }
      ],
      'templates': [
        {
          'name': "捕获阈值筛选",
          'code': "#include <iostream>\n#include <vector>\n#include <algorithm>\nint main() {\n    std::vector<int> v = {5, 15, 25, 35};\n    int threshold = 20;\n    int count = std::count_if(v.begin(), v.end(), [=](int x) {\n        return x > threshold;\n    });\n    std::cout << \"有 \" << count << \" 个数大于阈值\" << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-50",
      'title': "异常处理：try / catch / throw",
      'summary': "用异常把错误处理从正常流程中剥离，优雅应对运行时错误。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "程序运行时会遇到各种意外：除零、文件打不开、内存不足。异常（exception）是 C++ 处理这些错误的标准机制：**出错的地方 throw 抛出异常，调用方 try/catch 捕获并处理**，错误处理逻辑从正常流程里分离出来。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "try / catch / throw",
          'code': "#include <iostream>\n#include <stdexcept>\nint divide(int a, int b) {\n    if (b == 0) {\n        throw std::runtime_error(\"除数不能为 0\");   // 抛出异常\n    }\n    return a / b;\n}\nint main() {\n    try {\n        std::cout << divide(10, 2) << std::endl;   // 5\n        std::cout << divide(10, 0) << std::endl;   // 触发 throw\n    } catch (const std::exception &e) {\n        std::cout << \"捕获异常：\" << e.what() << std::endl;\n    }\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "divide 检测到除零就 <code inline>throw</code> 一个异常对象。调用方用 <code inline>try { }</code> 包住可能出错的代码，<code inline>catch (const std::exception &e)</code> 捕获异常，<code inline>e.what()</code> 取出错误信息。抛出后 try 里的代码立即停止，跳到 catch。"
        },
        {
          'type': "h",
          'text': "多级 catch 与捕获所有异常"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "多个 catch 分支",
          'code': "#include <iostream>\n#include <stdexcept>\nvoid check(int n) {\n    if (n < 0) throw std::runtime_error(\"负数\");\n    if (n == 0) throw std::logic_error(\"零\");\n}\nint main() {\n    try {\n        check(-5);\n    } catch (const std::runtime_error &e) {\n        std::cout << \"运行时错误：\" << e.what() << std::endl;\n    } catch (const std::logic_error &e) {\n        std::cout << \"逻辑错误：\" << e.what() << std::endl;\n    } catch (...) {   // 兜底：捕获任何其他异常\n        std::cout << \"未知异常\" << std::endl;\n    }\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "可以有多个 catch 按类型匹配。<code inline>catch (...)</code> 捕获所有异常（包括非标准类型），作为最后的兜底。派生类异常要排在基类前面，否则先被基类捕走。"
        },
        {
          'type': "warn",
          'title': "异常没被捕获会怎样",
          'text': "如果异常一路抛出没人 catch，程序会直接终止（可能弹崩溃窗口）。所以对外提供函数时要考虑：这个异常该不该抛？谁该捕获它？以及用 RAII 保证异常发生时资源也能释放。"
        },
        {
          'type': "tip",
          'title': "什么时候用异常",
          'text': "异常适合『真出问题』的错误（除零、文件不存在）。对于常见可预期的分支（比如输入格式不对），用 if 判断更轻量。异常的开销只有真正抛出时才发生。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"异常处理：try / catch / throw\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"异常处理：try / catch / throw\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"异常处理：try / catch / throw\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "throw 抛出异常，try/catch 捕获处理",
            "e.what() 获取错误信息",
            "多个 catch 按类型匹配，catch(...) 兜底",
            "异常未捕获会终止程序",
            "真错误用异常，常见分支用 if"
          ]
        }
      ],
      'templates': [
        {
          'name': "安全除法",
          'code': "#include <iostream>\n#include <stdexcept>\nint safeDiv(int a, int b) {\n    if (b == 0) throw std::runtime_error(\"除数为 0\");\n    return a / b;\n}\nint main() {\n    try {\n        std::cout << safeDiv(8, 2) << std::endl;\n        std::cout << safeDiv(8, 0) << std::endl;\n    } catch (const std::exception &e) {\n        std::cout << \"错误：\" << e.what() << std::endl;\n    }\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-51",
      'title': "自定义异常类与 RAII 思想",
      'summary': "自定义异常表达具体业务错误，用 RAII 保证资源自动释放。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "标准异常类型有限，业务里我们需要更具体的错误。自定义异常类就是继承标准异常，在构造时传入错误信息，让 catch 时能精确区分不同的错误种类。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "自定义异常类",
          'code': "#include <iostream>\n#include <stdexcept>\nclass NegativeError : public std::runtime_error {\npublic:\n    NegativeError() : std::runtime_error(\"金额不能为负数\") {}\n};\nclass OverflowError : public std::runtime_error {\npublic:\n    OverflowError() : std::runtime_error(\"金额超出上限\") {}\n};\nvoid deposit(double money) {\n    if (money < 0) throw NegativeError();\n    if (money > 10000) throw OverflowError();\n    std::cout << \"存入 \" << money << std::endl;\n}\nint main() {\n    try {\n        deposit(100);\n        deposit(-50);\n    } catch (const NegativeError &e) {\n        std::cout << \"负数错误：\" << e.what() << std::endl;\n    } catch (const OverflowError &e) {\n        std::cout << \"超限错误：\" << e.what() << std::endl;\n    }\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "NegativeError、OverflowError 都继承 std::runtime_error，在初始化列表里调用基类构造并传入信息。这样调用方可以用不同的 catch 精确区分错误类型，比只用字符串信息清晰得多。"
        },
        {
          'type': "h",
          'text': "RAII：资源获取即初始化"
        },
        {
          'type': "p",
          'text': "RAII（Resource Acquisition Is Initialization）是 C++ 最重要的思想：**用对象管理资源**——构造函数里获取资源，析构函数里释放资源。这样资源随对象生命期自动管理，即使发生异常、提前 return，析构函数也一定会被调用。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "RAII 演示",
          'code': "#include <iostream>\nclass Guard {\npublic:\n    Guard() { std::cout << \"获取资源\" << std::endl; }\n    ~Guard() { std::cout << \"释放资源\" << std::endl; }\n};\nvoid work() {\n    Guard g;   // 局部对象\n    std::cout << \"工作中\" << std::endl;\n    // 无论函数怎么结束，g 的析构函数一定被调用\n}\nint main() {\n    work();\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "work 函数结束时，无论正常返回还是抛出异常，Guard 对象的析构函数都会被自动调用，资源一定被释放。这就是 RAII 的威力：**不用手动记着释放资源**，交给对象的生命周期。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "RAII + 异常",
          'code': "#include <iostream>\nclass Guard {\npublic:\n    Guard() { std::cout << \"加锁\" << std::endl; }\n    ~Guard() { std::cout << \"解锁（即使出错也执行）\" << std::endl; }\n};\nvoid risky() {\n    Guard g;\n    throw std::runtime_error(\"出错\");   // 抛异常\n    std::cout << \"这行不会执行\" << std::endl;\n}\nint main() {\n    try {\n        risky();\n    } catch (...) {\n        std::cout << \"捕获到异常\" << std::endl;\n    }\n    return 0;\n}"
        },
        {
          'type': "info",
          'title': "RAII 无处不在",
          'text': "std::lock_guard、std::unique_ptr、std::fstream 都是 RAII 的应用：加锁自动解锁、指针自动释放、文件自动关闭。理解 RAII，你就理解了现代 C++ 资源管理的一半。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"自定义异常类与 RAII 思想\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"自定义异常类与 RAII 思想\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"自定义异常类与 RAII 思想\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "自定义异常类继承 std::exception 体系",
            "不同异常类型用不同 catch 精确处理",
            "RAII：构造获取资源，析构释放资源",
            "异常时析构函数也会被调用，资源必释放",
            "lock_guard、unique_ptr 都是 RAII 应用"
          ]
        }
      ],
      'templates': [
        {
          'name': "RAII 锁演示",
          'code': "#include <iostream>\nclass Lock {\npublic:\n    Lock() { std::cout << \"上锁\" << std::endl; }\n    ~Lock() { std::cout << \"解锁\" << std::endl; }\n};\nint main() {\n    Lock l;\n    std::cout << \"临界区\" << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-52",
      'title': "智能指针 unique_ptr",
      'summary': "独占所有权的智能指针，自动释放内存，禁止拷贝。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "裸指针最大的痛点是：忘记 delete 会内存泄漏，重复 delete 会崩溃。智能指针把 delete 交给 RAII 自动完成。**unique_ptr** 是独占式智能指针：同一时刻只能有一个指针拥有这块内存。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "unique_ptr 基本用法",
          'code': "#include <iostream>\n#include <memory>\nclass Dog {\npublic:\n    void bark() { std::cout << \"汪汪\" << std::endl; }\n};\nint main() {\n    std::unique_ptr<Dog> d(new Dog());\n    d->bark();   // 和裸指针一样用 ->\n    // 函数结束自动释放，不需要 delete\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code inline>std::unique_ptr<Dog> d(new Dog())</code> 创建智能指针，用法和裸指针几乎一样（-> 访问成员）。当 d 离开作用域时，自动 delete 它指向的对象，程序员完全不用管释放。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "独占所有权不能拷贝",
          'code': "#include <iostream>\n#include <memory>\nint main() {\n    std::unique_ptr<int> p1(new int(42));\n    // std::unique_ptr<int> p2 = p1;  // 错误！不能拷贝\n    std::unique_ptr<int> p2 = std::move(p1);   // 只能移动：所有权转移\n    std::cout << *p2 << std::endl;  // 42\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "unique_ptr 不能被拷贝（否则两个指针指向同一块内存，释放两次），但可以用 <code inline>std::move</code> 把所有权转移给另一个 unique_ptr。转移后原指针变成空。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "make_unique 更推荐",
          'code': "#include <iostream>\n#include <memory>\nstruct Point { int x, y; Point(int a, int b) : x(a), y(b) {} };\nint main() {\n    auto p = std::make_unique<Point>(3, 4);   // C++14 起推荐\n    std::cout << p->x << \",\" << p->y << std::endl;\n    return 0;\n}"
        },
        {
          'type': "tip",
          'title': "优先用 make_unique",
          'text': "相比 <code inline>new</code>，<code inline>std::make_unique<类型>(参数)</code> 更安全也更简洁：即使中间抛异常也不会泄漏，参数直接写构造参数即可。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"智能指针 unique_ptr\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"智能指针 unique_ptr\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"智能指针 unique_ptr\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "unique_ptr 独占所有权，离开作用域自动释放",
            "用法和裸指针一样：-> 和 *",
            "不能拷贝，只能 std::move 转移所有权",
            "优先用 std::make_unique 创建",
            "智能指针告别手动 delete"
          ]
        }
      ],
      'templates': [
        {
          'name': "unique_ptr 管理对象",
          'code': "#include <iostream>\n#include <memory>\nclass Player {\npublic:\n    Player() { std::cout << \"创建玩家\" << std::endl; }\n    ~Player() { std::cout << \"销毁玩家\" << std::endl; }\n    void play() { std::cout << \"游玩中\" << std::endl; }\n};\nint main() {\n    auto p = std::make_unique<Player>();\n    p->play();\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-53",
      'title': "shared_ptr 与 weak_ptr",
      'summary': "共享所有权靠引用计数，weak_ptr 打破循环引用。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "unique_ptr 是独占，<code inline>std::shared_ptr</code> 则是**共享所有权**：多个 shared_ptr 可以指向同一个对象，内部用引用计数记录有多少个指针持有它。当最后一个持有着销毁时，对象才被释放。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "shared_ptr 共享所有权",
          'code': "#include <iostream>\n#include <memory>\nclass Thing {\npublic:\n    int id;\n    Thing(int i) : id(i) {}\n    ~Thing() { std::cout << \"销毁 Thing \" << id << std::endl; }\n};\nint main() {\n    std::shared_ptr<Thing> a = std::make_shared<Thing>(1);\n    std::shared_ptr<Thing> b = a;   // 共享，计数变为 2\n    std::cout << \"引用计数：\" << a.use_count() << std::endl;  // 2\n    b.reset();   // b 放弃持有，计数减 1\n    std::cout << \"引用计数：\" << a.use_count() << std::endl;  // 1\n    // a 离开作用域，计数到 0，才真正销毁\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code inline>std::shared_ptr<Thing> b = a;</code> 让 b 和 a 共享同一个 Thing，引用计数变成 2。<code inline>use_count()</code> 查看计数。<code inline>b.reset()</code> 让 b 放弃持有。只有计数降到 0，析构函数才执行（输出『销毁 Thing 1』）。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "shared_ptr 传参",
          'code': "#include <iostream>\n#include <memory>\nvoid use(const std::shared_ptr<int> &p) {\n    std::cout << *p << std::endl;\n}\nint main() {\n    auto p = std::make_shared<int>(100);\n    use(p);   // 传引用不会增加计数\n    std::cout << \"计数：\" << p.use_count() << std::endl;  // 1\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "weak_ptr：打破循环引用"
        },
        {
          'type': "p",
          'text': "如果两个对象用 shared_ptr 互相指向对方，就会形成循环引用：你等我释放、我等你释放，谁都不会被销毁，内存泄漏。解决办法是用 <code inline>std::weak_ptr</code>——它指向对象但不增加引用计数。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "weak_ptr 不增加计数",
          'code': "#include <iostream>\n#include <memory>\nint main() {\n    std::shared_ptr<int> sp = std::make_shared<int>(7);\n    std::weak_ptr<int> wp = sp;   // 不增加计数\n    std::cout << \"计数：\" << sp.use_count() << std::endl;  // 还是 1\n    if (auto spt = wp.lock()) {   // lock 尝试升级为 shared_ptr\n        std::cout << \"值：\" << *spt << std::endl;\n    }\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "循环引用是 shared_ptr 的大坑",
          'text': "两个类互相持有 shared_ptr 时，引用计数永远不为 0，对象永不释放（内存泄漏）。诊断方法是：内存涨但对象析构日志不打印。修复：让其中一边改成 weak_ptr。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"shared_ptr 与 weak_ptr\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"shared_ptr 与 weak_ptr\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"shared_ptr 与 weak_ptr\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "shared_ptr 共享所有权，引用计数管理",
            "最后一个持有者销毁时对象才释放",
            "use_count 查看计数",
            "weak_ptr 不增加计数，用于打破循环引用",
            "weak_ptr 用 lock() 升级使用"
          ]
        }
      ],
      'templates': [
        {
          'name': "shared_ptr 共享",
          'code': "#include <iostream>\n#include <memory>\nclass Box {\npublic:\n    ~Box() { std::cout << \"Box 销毁\" << std::endl; }\n};\nint main() {\n    auto a = std::make_shared<Box>();\n    {\n        auto b = a;   // 进入作用域，计数 2\n        std::cout << \"计数：\" << a.use_count() << std::endl;\n    }   // b 离开，计数 1\n    std::cout << \"计数：\" << a.use_count() << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-54",
      'title': "文件流：ofstream 写入与 ifstream 读取",
      'summary': "用文件流把数据持久化到磁盘，读写文本文件。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "程序的数据要长期保存，就得写到文件里。<code inline>std::ofstream</code> 写文件、<code inline>std::ifstream</code> 读文件、<code inline>std::fstream</code> 可读写。它们和 cout/cin 用法几乎一样，非常容易上手。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "写入文件",
          'code': "#include <iostream>\n#include <fstream>\nint main() {\n    std::ofstream out(\"data.txt\");   // 打开（不存在会创建）\n    out << \"第一行\" << std::endl;\n    out << \"第二行\" << std::endl;\n    out.close();   // 关闭\n    std::cout << \"写入完成\" << std::endl;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code inline>std::ofstream out(\"data.txt\")</code> 打开文件准备写入（默认覆盖模式）。用 << 像 cout 一样输出内容，写完后 <code inline>out.close()</code> 关闭。ofstream 是 RAII 的，忘了 close 也会在析构时自动关闭，但显式关闭是好习惯。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "读取文件",
          'code': "#include <iostream>\n#include <fstream>\n#include <string>\nint main() {\n    std::ifstream in(\"data.txt\");\n    if (!in) {   // 打开失败检查\n        std::cout << \"文件打开失败\" << std::endl;\n        return 1;\n    }\n    std::string line;\n    while (std::getline(in, line)) {   // 一行一行读\n        std::cout << \"读到：\" << line << std::endl;\n    }\n    in.close();\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "读文件先检查 <code inline>if (!in)</code> 是否打开成功。<code inline>std::getline(in, line)</code> 每次读一行，读到文件末尾返回 false，循环自然结束。这是读文本文件最标准的写法。"
        },
        {
          'type': "warn",
          'title': "读文件前要检查是否打开成功",
          'text': "如果文件不存在或没有权限，ifstream 打开失败但不会报错，读出来的是空数据。一定要用 <code inline>if (!in)</code> 判断，否则会出现『读不到任何内容』却不知道为什么的诡异问题。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "追加写入",
          'code': "#include <iostream>\n#include <fstream>\nint main() {\n    std::ofstream out(\"data.txt\", std::ios::app);   // 追加模式\n    out << \"追加的一行\" << std::endl;\n    out.close();\n    std::cout << \"已追加\" << std::endl;\n    return 0;\n}"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"文件流：ofstream 写入与 ifstream 读取\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"文件流：ofstream 写入与 ifstream 读取\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"文件流：ofstream 写入与 ifstream 读取\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "ofstream 写文件，ifstream 读文件",
            "用 << 写，用 getline 逐行读",
            "读文件前检查 if (!in)",
            "ofstream 默认覆盖，ios::app 追加",
            "文件流是 RAII，析构时自动关闭"
          ]
        }
      ],
      'templates': [
        {
          'name': "记事本小程序",
          'code': "#include <iostream>\n#include <fstream>\n#include <string>\nint main() {\n    std::ofstream out(\"note.txt\");\n    std::string line;\n    for (int i = 0; i < 3; i++) {\n        std::cout << \"输入一行：\";\n        std::getline(std::cin, line);\n        out << line << std::endl;\n    }\n    out.close();\n    std::cout << \"已保存到 note.txt\" << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-55",
      'title': "字符串流 stringstream",
      'summary': "把字符串当输入输出流用，轻松做类型转换和格式化拼接。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "<code inline>std::stringstream</code> 让字符串也能像 cin/cout 一样被 << 写入、被 >> 读取。它最常用的两个用途：**字符串和数字互相转换**、**拼接格式化的字符串**。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "字符串转数字",
          'code': "#include <iostream>\n#include <sstream>\n#include <string>\nint main() {\n    std::string s = \"42\";\n    std::stringstream ss(s);   // 用字符串初始化\n    int n;\n    ss >> n;                   // 像 cin 一样读成整数\n    std::cout << n + 1 << std::endl;  // 43\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code inline>std::stringstream ss(s)</code> 把字符串塞进流里，然后 <code inline>ss >> n</code> 像 cin 一样解析出整数。反过来，把数字写入流再用 <code inline>ss.str()</code> 取出字符串，就完成了数字转字符串。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "拼接格式化字符串",
          'code': "#include <iostream>\n#include <sstream>\n#include <string>\nint main() {\n    std::stringstream out;\n    out << \"小明\" << \" 今年 \" << 18 << \" 岁，考了 \" << 95.5 << \" 分\";\n    std::string msg = out.str();   // 取出拼接结果\n    std::cout << msg << std::endl;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "把不同类型（字符串、整数、浮点数）用 << 一起写入 stringstream，再用 <code inline>str()</code> 取回字符串。比手动用 to_string 一个个拼接直观得多。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "解析一行多个数字",
          'code': "#include <iostream>\n#include <sstream>\n#include <string>\nint main() {\n    std::string line = \"10 20 30 40\";\n    std::stringstream ss(line);\n    int total = 0, x;\n    while (ss >> x) {        // 反复读取直到流空\n        total += x;\n    }\n    std::cout << \"总和：\" << total << std::endl;  // 100\n    return 0;\n}"
        },
        {
          'type': "tip",
          'title': "C++11 有更简单的转换",
          'text': "单个数字转换可以偷懒：<code inline>std::stoi(\"42\")</code>（字符串转 int）、<code inline>std::to_string(42)</code>（数字转字符串）。但需要灵活解析或格式化时，stringstream 依然最顺手。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"字符串流 stringstream\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"字符串流 stringstream\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"字符串流 stringstream\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "stringstream 让字符串支持 << 和 >> 操作",
            "字符串转数字：流 >> 数字变量",
            "数字转字符串：流 << 数字，再 str()",
            "while (ss >> x) 可解析多个数字",
            "单个转换可用 stoi / to_string"
          ]
        }
      ],
      'templates': [
        {
          'name': "数字转字符串",
          'code': "#include <iostream>\n#include <sstream>\n#include <string>\nint main() {\n    std::stringstream ss;\n    ss << 3.14159;\n    std::string s = ss.str();\n    std::cout << \"字符串：\" << s << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-56",
      'title': "移动语义：右值引用与 std::move",
      'summary': "把资源『搬走』而不是复制，大幅提升大对象操作效率。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "拷贝一个包含大量数据的对象（比如很大的 string）很贵：要复制全部内容。移动语义的思路是：对于临时对象（右值），直接把它的资源『搬』过来，源对象变空，省掉拷贝。这就是 <code inline>std::move</code> 和右值引用的意义。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "move 转移字符串资源",
          'code': "#include <iostream>\n#include <string>\nint main() {\n    std::string a = \"hello world hello world\";\n    std::string b = std::move(a);   // 把 a 的资源转移给 b\n    std::cout << \"b=\" << b << std::endl;\n    std::cout << \"a 现在：\" << a << std::endl;  // 空或未指定状态\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code inline>std::move(a)</code> 把 a 标记为『可以搬走』，string 的移动构造函数直接接管 a 的内存，b 没有复制任何字符。a 被搬空（状态未指定，通常为空串）。对大对象这能省下海量拷贝。"
        },
        {
          'type': "h",
          'text': "左值与右值"
        },
        {
          'type': "list",
          'items': [
            "左值（lvalue）：有名字、可以取地址，如 int x 中的 x",
            "右值（rvalue）：临时值，如 5、a + b 的结果、函数返回的临时对象",
            "右值引用用 && 声明：int &&r = 5，绑定到右值"
          ]
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "区分左值右值",
          'code': "#include <iostream>\nvoid f(int &x)  { std::cout << \"左值\" << std::endl; }\nvoid f(int &&x) { std::cout << \"右值\" << std::endl; }\nint main() {\n    int a = 5;\n    f(a);      // 左值\n    f(5);      // 右值\n    f(a + 1);  // 右值\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "同一套函数，左值版本 <code inline>int &</code> 和右值版本 <code inline>int &&</code> 构成重载。传变量走左值版，传临时值走右值版。这样函数能识别『这对象用完就扔』，从而用移动代替拷贝。"
        },
        {
          'type': "warn",
          'title': "被 move 的对象状态未指定",
          'text': "被 move 之后的对象，其值处于『有效但未指定』状态，一般会是空或默认值。不要依赖被移走对象的内容，只可以重新给它赋值再用。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"移动语义：右值引用与 std::move\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"移动语义：右值引用与 std::move\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"移动语义：右值引用与 std::move\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "移动语义用搬代替拷贝，省下大量复制开销",
            "右值引用用 && 声明，绑定临时值",
            "std::move 把对象标记为可移动",
            "移动后源对象状态未指定，一般变空",
            "vector/string 等容器自带移动构造"
          ]
        }
      ],
      'templates': [
        {
          'name': "右值引用绑定",
          'code': "#include <iostream>\nint main() {\n    int x = 10;\n    int &&r = x * 2;   // 绑定临时值\n    std::cout << r << std::endl;  // 20\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-57",
      'title': "完美转发 std::forward",
      'summary': "在模板中保持参数的左值/右值身份，原样传给下一个函数。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "写模板函数时，我们希望参数以什么身份传进来（左值还是右值），就原样传给下一个函数，这叫完美转发（perfect forwarding）。<code inline>std::forward</code> 就是做这件事的工具。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "完美转发",
          'code': "#include <iostream>\n#include <utility>\nvoid process(int &v) { std::cout << \"左值：\" << v << std::endl; }\nvoid process(int &&v) { std::cout << \"右值：\" << v << std::endl; }\n\ntemplate <typename T>\nvoid wrapper(T &&value) {\n    process(std::forward<T>(value));   // 保持左值/右值身份\n}\nint main() {\n    int x = 5;\n    wrapper(x);    // 左值 → 调用左值版\n    wrapper(10);   // 右值 → 调用右值版\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "如果不转发，参数进入函数后名字就变成了左值，process 会固定调用左值版本。用 <code inline>std::forward<T>(value)</code> 后，wrapper(x) 保持左值身份、wrapper(10) 保持右值身份，从而精确匹配。"
        },
        {
          'type': "info",
          'title': "引用折叠",
          'text': "模板参数写成 <code inline>T&&</code> 时，T 根据实参自动推导：传左值则 T 是左值引用，传右值则 T 是普通类型。这就是为什么这种写法叫『转发引用』，能同时接住左值和右值。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "forward 与 move 的区别",
          'code': "#include <iostream>\n#include <utility>\n// std::move：无条件转成右值\n// std::forward<T>：根据 T 决定保持左值还是转右值\nint main() {\n    int x = 1;\n    // 都用于把对象转给移动/转发场景\n    int &&r1 = std::move(x);        // x 转右值\n    std::cout << r1 << std::endl;\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "move 和 forward 别搞混",
          'text': "std::move 是无条件转成右值（我就是要搬走）；std::forward 是按条件转发（保持参数原本的身份）。forward 只在转发引用的模板里用，日常拷贝优化多用 move。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"完美转发 std::forward\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"完美转发 std::forward\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"完美转发 std::forward\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "完美转发让模板参数保持左值/右值身份",
            "std::forward<T>(value) 在模板里原样转发",
            "T&& 转发引用能同时接住左值和右值",
            "move 无条件转右值，forward 保持原身份"
          ]
        }
      ],
      'templates': [
        {
          'name': "转发到不同重载",
          'code': "#include <iostream>\n#include <utility>\nvoid show(int &v) { std::cout << \"左值 \" << v << std::endl; }\nvoid show(int &&v) { std::cout << \"右值 \" << v << std::endl; }\ntemplate <typename T>\nvoid pass(T &&v) {\n    show(std::forward<T>(v));\n}\nint main() {\n    int a = 1;\n    pass(a);\n    pass(2);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-58",
      'title': "多线程基础：std::thread",
      'summary': "创建线程并发执行任务，理解 join 与 detach。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "多线程让程序同时做多件事，充分利用 CPU 多核，提升性能。C++11 起标准库提供 <code inline>std::thread</code>，配合 <code inline><thread></code> 头文件就能创建线程。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "创建线程",
          'code': "#include <iostream>\n#include <thread>\nvoid work(int id) {\n    for (int i = 0; i < 3; i++) {\n        std::cout << \"线程 \" << id << \" 运行中\" << std::endl;\n    }\n}\nint main() {\n    std::thread t1(work, 1);   // 创建线程，运行 work(1)\n    std::thread t2(work, 2);   // 创建线程，运行 work(2)\n    t1.join();   // 等待 t1 结束\n    t2.join();   // 等待 t2 结束\n    std::cout << \"主线程结束\" << std::endl;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code inline>std::thread t1(work, 1)</code> 创建线程并让它在后台运行 work(1)。<code inline>join()</code> 让主线程**等待**该线程结束，否则主线程先结束程序退出，后台线程还没跑完。"
        },
        {
          'type': "p",
          'text': "多线程输出顺序不固定：两个线程并发跑，谁先输出谁后输出取决于系统调度，所以运行结果每次可能不同，这是正常现象，也是多线程的第一个特点——**乱序**。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "detach 分离线程",
          'code': "#include <iostream>\n#include <thread>\nvoid task() {\n    std::cout << \"后台任务开始\" << std::endl;\n}\nint main() {\n    std::thread t(task);\n    t.detach();   // 分离：不等待，让它自己跑\n    std::cout << \"主线程继续\" << std::endl;\n    return 0;\n}"
        },
        {
          'type': "warn",
          'title': "线程对象析构时既没 join 也没 detach 会崩溃",
          'text': "std::thread 对象如果离开作用域时还在运行、又没调用 join 或 detach，析构会直接 terminate 程序。规则：**每个线程要么 join，要么 detach，二选一**。"
        },
        {
          'type': "warn",
          'title': "共享数据的竞争",
          'text': "两个线程同时读写同一个变量会产生数据竞争（race condition），结果不可预测甚至崩溃。下一章用 mutex 解决，这是多线程最核心的难点。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"多线程基础：std::thread\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"多线程基础：std::thread\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"多线程基础：std::thread\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "std::thread 创建线程并发执行",
            "join() 等待线程结束，detach() 分离",
            "线程对象析构前必须 join 或 detach",
            "多线程输出乱序是正常的",
            "共享数据并发读写会竞争，需同步"
          ]
        }
      ],
      'templates': [
        {
          'name': "两个线程并发",
          'code': "#include <iostream>\n#include <thread>\nvoid print(int id) {\n    for (int i = 0; i < 3; i++) {\n        std::cout << \"T\" << id << \"-\" << i << \" \";\n    }\n}\nint main() {\n    std::thread t1(print, 1);\n    std::thread t2(print, 2);\n    t1.join();\n    t2.join();\n    std::cout << std::endl << \"完成\" << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-59",
      'title': "线程同步：mutex 与 lock_guard",
      'summary': "用互斥锁保护共享数据，lock_guard 自动加锁解锁。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "多个线程同时修改同一个变量，会导致数据竞争。比如两个线程各做 10 万次 counter++，结果可能不是 20 万，而是更小。解决办法是用**互斥锁**（mutex）：同一时刻只允许一个线程进入临界区。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "不加锁的竞争问题",
          'code': "#include <iostream>\n#include <thread>\nint counter = 0;\nvoid add() {\n    for (int i = 0; i < 100000; i++) {\n        counter++;   // 不是原子操作，会竞争\n    }\n}\nint main() {\n    std::thread t1(add);\n    std::thread t2(add);\n    t1.join();\n    t2.join();\n    std::cout << \"counter = \" << counter << std::endl;  // 很可能不是 200000\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "counter++ 看起来是一句，实际是『读、加、写』三步，两个线程交错执行就会丢更新。多运行几次，结果通常小于 200000 且每次不同。这就是数据竞争。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "用 mutex 加锁保护",
          'code': "#include <iostream>\n#include <thread>\n#include <mutex>\nstd::mutex mtx;\nint counter = 0;\nvoid add() {\n    for (int i = 0; i < 100000; i++) {\n        std::lock_guard<std::mutex> lock(mtx);  // 加锁\n        counter++;                              // 临界区\n    }   // 离开作用域自动解锁\n}\nint main() {\n    std::thread t1(add);\n    std::thread t2(add);\n    t1.join();\n    t2.join();\n    std::cout << \"counter = \" << counter << std::endl;  // 稳定 200000\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code inline>std::lock_guard<std::mutex> lock(mtx);</code> 创建锁对象：进入时自动加锁，离开作用域时自动解锁（RAII）。这样即使临界区里抛出异常，锁也会被释放，不会死锁。永远用 lock_guard 而不是手动 lock/unlock。"
        },
        {
          'type': "warn",
          'title': "锁的粒度要小",
          'text': "锁住的代码越少越好：只锁真正共享的数据。把整个循环都锁住虽然结果对，但两个线程几乎串行执行，多线程白开了。性能和多线程目标相悖。"
        },
        {
          'type': "warn",
          'title': "死锁",
          'text': "如果两个线程各自持有一把锁，又互相等对方的那把锁，就僵持不动了（死锁）。多把锁时注意获取顺序一致，或用 <code inline>std::scoped_lock</code> 同时锁多把。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"线程同步：mutex 与 lock_guard\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"线程同步：mutex 与 lock_guard\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"线程同步：mutex 与 lock_guard\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "数据竞争让共享变量结果错误",
            "mutex 互斥锁保证同时只有一个线程进临界区",
            "lock_guard 自动加锁解锁（RAII）",
            "锁的粒度要小，只保护共享数据",
            "多把锁注意顺序，避免死锁"
          ]
        }
      ],
      'templates': [
        {
          'name': "锁保护的计数器",
          'code': "#include <iostream>\n#include <thread>\n#include <mutex>\nstd::mutex mtx;\nint count = 0;\nvoid add() {\n    for (int i = 0; i < 50000; i++) {\n        std::lock_guard<std::mutex> lk(mtx);\n        count++;\n    }\n}\nint main() {\n    std::thread t1(add), t2(add);\n    t1.join();\n    t2.join();\n    std::cout << count << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-60",
      'title': "条件变量与 std::async",
      'summary': "用条件变量实现线程间通知，用 async 简化异步调用。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "互斥锁解决『抢资源』，条件变量（condition_variable）则解决『等消息』：一个线程等着某个条件满足，另一个线程满足条件后通知它。这是生产者-消费者模型的经典工具。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "条件变量通知",
          'code': "#include <iostream>\n#include <thread>\n#include <mutex>\n#include <condition_variable>\nstd::mutex mtx;\nstd::condition_variable cv;\nbool ready = false;\nvoid worker() {\n    std::unique_lock<std::mutex> lock(mtx);\n    cv.wait(lock, [] { return ready; });   // 等 ready 变 true\n    std::cout << \"收到通知，开始干活\" << std::endl;\n}\nint main() {\n    std::thread t(worker);\n    std::this_thread::sleep_for(std::chrono::milliseconds(100));\n    {\n        std::lock_guard<std::mutex> lock(mtx);\n        ready = true;\n    }\n    cv.notify_one();   // 唤醒等待的线程\n    t.join();\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "worker 线程用 <code inline>cv.wait(lock, 条件)</code> 阻塞等待，条件不满足就一直等（同时释放锁）。主线程改完条件后 <code inline>notify_one()</code> 唤醒它。注意 wait 必须用 <code inline>std::unique_lock</code>（lock_guard 不行）。"
        },
        {
          'type': "h",
          'text': "std::async：更简单的异步调用"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "async 异步执行函数",
          'code': "#include <iostream>\n#include <future>\nint square(int x) {\n    return x * x;\n}\nint main() {\n    std::future<int> f = std::async(square, 7);  // 后台异步执行\n    // 主线程可以干别的\n    std::cout << \"主线程继续做别的事\" << std::endl;\n    std::cout << \"结果：\" << f.get() << std::endl;  // 取结果，没有就等\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code inline>std::async</code> 让函数在后台异步执行，返回 <code inline>std::future</code> 对象。<code inline>f.get()</code> 获取结果（还没算完就阻塞等待）。比手动 new thread 简单得多，也不用自己管线程生命周期。"
        },
        {
          'type': "table",
          'head': [
            "工具",
            "用途",
            "场景"
          ],
          'rows': [
            [
              "mutex",
              "互斥访问共享数据",
              "两个线程都写同一个变量"
            ],
            [
              "condition_variable",
              "等待条件并通知",
              "一个等、一个通知"
            ],
            [
              "async/future",
              "后台执行并取结果",
              "不关心线程细节，只要结果"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "避免忙等",
          'text': "用 while 循环反复检查标志位的『忙等』会白白烧 CPU。条件变量能挂起线程、等真正有通知才醒来，是更高效的等待方式。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"条件变量与 std::async\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"条件变量与 std::async\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"条件变量与 std::async\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "条件变量实现线程间通知",
            "cv.wait(lock, 条件) 阻塞等待，notify_one 唤醒",
            "wait 必须配 unique_lock",
            "async 后台执行函数，future 取结果",
            "避免用忙等轮询消耗 CPU"
          ]
        }
      ],
      'templates': [
        {
          'name': "async 求平方",
          'code': "#include <iostream>\n#include <future>\nint cube(int x) {\n    return x * x * x;\n}\nint main() {\n    auto f = std::async(cube, 3);\n    std::cout << \"3 的立方：\" << f.get() << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-61",
      'title': "原子操作 std::atomic",
      'summary': "不用锁也能安全加减的原子变量，适合简单的共享计数。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "上一章的 counter++ 竞争问题，除了用锁，还有更轻量的方案：**原子变量**。<code inline>std::atomic</code> 让某个变量的读写成为不可分割的原子操作，多个线程访问它天然安全，不需要加锁。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "原子计数器",
          'code': "#include <iostream>\n#include <thread>\n#include <atomic>\nstd::atomic<int> counter(0);   // 原子变量\nvoid add() {\n    for (int i = 0; i < 100000; i++) {\n        counter++;   // 原子操作，天然安全\n    }\n}\nint main() {\n    std::thread t1(add);\n    std::thread t2(add);\n    t1.join();\n    t2.join();\n    std::cout << \"counter = \" << counter.load() << std::endl;  // 稳定 200000\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code inline>std::atomic<int> counter(0)</code> 声明一个原子整数。<code inline>counter++</code> 是原子操作，多个线程同时执行也不会丢更新，结果稳定是 200000。<code inline>load()</code> 原子地读取当前值。"
        },
        {
          'type': "table",
          'head': [
            "对比项",
            "mutex 锁",
            "std::atomic"
          ],
          'rows': [
            [
              "原理",
              "互斥访问临界区",
              "硬件级原子操作"
            ],
            [
              "性能",
              "有加解锁开销",
              "更轻量（简单操作时）"
            ],
            [
              "适用",
              "多行代码临界区",
              "单个变量的简单操作"
            ],
            [
              "死锁风险",
              "有",
              "无"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "atomic 只适合简单操作",
          'text': "原子变量只保证单个操作是原子的，无法保护『先读再根据结果写』这种复合逻辑（比如 check-then-act）。复杂临界区仍然要用 mutex。"
        },
        {
          'type': "p",
          'text': "使用原则：单个变量的简单计数、标志位用 atomic；多行代码构成的临界区用 mutex。atomic 更轻快，mutex 更通用，二者各司其职。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"原子操作 std::atomic\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"原子操作 std::atomic\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"原子操作 std::atomic\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "std::atomic 让变量读写成为原子操作",
            "简单计数/标志位用 atomic，轻量安全",
            "原子变量不能保护复合逻辑",
            "复杂临界区仍要用 mutex",
            "load() 原子读取，store() 原子写入"
          ]
        }
      ],
      'templates': [
        {
          'name': "原子累加",
          'code': "#include <iostream>\n#include <thread>\n#include <atomic>\nstd::atomic<long long> sum(0);\nvoid addPart() {\n    for (int i = 0; i < 10000; i++) {\n        sum += 1;\n    }\n}\nint main() {\n    std::thread t1(addPart), t2(addPart), t3(addPart);\n    t1.join(); t2.join(); t3.join();\n    std::cout << sum << std::endl;  // 30000\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-62",
      'title': "struct 与 class 的区别、内存对齐",
      'summary': "默认访问权限不同是最大区别，理解结构体内存对齐。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "在 C++ 里 struct 和 class 几乎一样，都可以有成员变量、成员函数、继承、多态。唯一的语法区别是**默认访问权限**：struct 默认 public，class 默认 private。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "struct 与 class 对比",
          'code': "#include <iostream>\nstruct Point {   // struct 默认 public\n    int x;\n    int y;\n};\nclass Circle {   // class 默认 private\n    double r;     // 不写 public: 外部访问不到\npublic:\n    void set(double x) { r = x; }\n};\nint main() {\n    Point p{1, 2};   // 聚合初始化\n    std::cout << p.x << \" \" << p.y << std::endl;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "约定俗成：struct 通常用来打包一组纯数据（像 C 风格），class 用来定义有封装、有行为的完整对象。但语法上两者都能干对方的事。"
        },
        {
          'type': "h",
          'text': "内存对齐"
        },
        {
          'type': "p",
          'text': "struct 里的成员在内存里不是简单排排坐，编译器会按成员的对齐要求插入填充字节（padding），让每个成员地址满足对齐，提高访问效率。这会导致结构体占用的内存比所有成员之和更大。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "观察内存对齐",
          'code': "#include <iostream>\nstruct A {\n    char c;     // 1 字节\n    int n;      // 4 字节\n};   // 实际占 8 字节（4 字节填充）\nstruct B {\n    int n;      // 4 字节\n    char c;     // 1 字节\n};   // 实际占 8 字节\nint main() {\n    std::cout << sizeof(A) << \" \" << sizeof(B) << std::endl;  // 8 8\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "char 1 字节、int 4 字节，加起来 5 字节，但 <code inline>sizeof(A)</code> 却是 8。因为 int 要求 4 字节对齐，编译器在 char 后面填了 3 个无用字节。字段顺序影响填充数量：把大字段放前面通常更紧凑。"
        },
        {
          'type': "tip",
          'title': "网络协议/文件格式要小心",
          'text': "处理网络包、二进制文件等和外部交互的数据时，填充字节会造成格式对不上。这类场景可以用 <code inline>#pragma pack(1)</code> 关闭对齐（或用序列化库），但要注意性能代价。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"struct 与 class 的区别、内存对齐\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"struct 与 class 的区别、内存对齐\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"struct 与 class 的区别、内存对齐\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "struct 默认 public，class 默认 private",
            "struct 用于纯数据，class 用于封装对象",
            "内存对齐会插入填充字节，结构体偏大",
            "大字段放前面通常更紧凑",
            "网络协议场景可 #pragma pack(1) 取消对齐"
          ]
        }
      ],
      'templates': [
        {
          'name': "sizeof 观察",
          'code': "#include <iostream>\nstruct S1 { char a; char b; char c; };\nstruct S2 { char a; int b; };\nint main() {\n    std::cout << sizeof(S1) << \" \" << sizeof(S2) << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-63",
      'title': "new / delete 动态内存管理",
      'summary': "手动分配与释放堆内存，new[] 配 delete[]，警惕泄漏。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "之前创建的变量大多在栈上（自动管理，函数结束自动释放）。动态内存（堆）则用 <code inline>new</code> 手动申请、<code inline>delete</code> 手动释放，适合大小在运行时才确定、或需要活得比当前作用域更久的数据。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "new 与 delete",
          'code': "#include <iostream>\nint main() {\n    int *p = new int(42);    // 分配一个 int 并初始化为 42\n    int *arr = new int[5];   // 分配一个含 5 个 int 的数组\n    arr[0] = 10;\n    std::cout << *p << \" \" << arr[0] << std::endl;\n    delete p;        // 释放单个对象\n    delete[] arr;    // 释放数组（必须配 []）\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code inline>new int(42)</code> 在堆上分配内存并返回地址，存进指针。<code inline>new int[5]</code> 分配数组。用完必须释放：单个用 <code inline>delete</code>，数组用 <code inline>delete[]</code>，**配错会导致未定义行为**。"
        },
        {
          'type': "danger",
          'title': "动态内存三大坑",
          'text': "一、忘记 delete 会内存泄漏，程序越跑越占内存。二、delete 两次（double free）直接崩溃。三、delete 后继续用（悬空指针）读到垃圾值。这也是现代 C++ 用智能指针替代裸指针的原因——下一章深拷贝也会见到。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "new 对象",
          'code': "#include <iostream>\n#include <string>\nclass Student {\npublic:\n    std::string name;\n    Student(std::string n) : name(n) {}\n    void hello() { std::cout << \"我是 \" << name << std::endl; }\n};\nint main() {\n    Student *s = new Student(\"小明\");\n    s->hello();     // new 出来的对象用 -> 访问\n    delete s;       // 释放并调用析构\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "用 new 创建对象时，构造函数会自动执行；delete 时析构函数自动执行。new 出的对象是动态的，不依赖作用域，想让它活多久就活多久——但也正因如此，容易忘记释放。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"new / delete 动态内存管理\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"new / delete 动态内存管理\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"new / delete 动态内存管理\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "new 分配堆内存，delete 释放",
            "new[] 配 delete[]，不能混用",
            "忘记 delete 泄漏，重复 delete 崩溃",
            "delete 后继续用是悬空指针",
            "现代 C++ 优先用智能指针"
          ]
        }
      ],
      'templates': [
        {
          'name': "动态数组求平均",
          'code': "#include <iostream>\nint main() {\n    int n = 5;\n    int *arr = new int[n];\n    for (int i = 0; i < n; i++) arr[i] = i * 10;\n    int sum = 0;\n    for (int i = 0; i < n; i++) sum += arr[i];\n    std::cout << \"平均：\" << sum / n << std::endl;\n    delete[] arr;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-64",
      'title': "深拷贝与浅拷贝、拷贝控制三/五法则",
      'summary': "有指针成员时必须深拷贝，理解三法则五法则。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "第 23 章提过默认拷贝是浅拷贝：只复制指针本身，不复制指向的内容。如果类里有 new 出来的资源，浅拷贝会让两个对象指向同一块内存，析构时双重释放崩溃。解决办法是**深拷贝**：拷贝时把内容也复制一份。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "浅拷贝的崩溃问题",
          'code': "#include <iostream>\n#include <cstring>\nclass BadString {\nprivate:\n    char *data;\npublic:\n    BadString(const char *s) {\n        data = new char[std::strlen(s) + 1];\n        std::strcpy(data, s);\n    }\n    ~BadString() { delete[] data; }   // 问题：浅拷贝后两个对象会双重释放\n};\nint main() {\n    BadString a(\"hello\");\n    BadString b = a;   // 浅拷贝：a.data 和 b.data 指向同一块内存\n    // 析构时 a、b 各 delete 一次 → double free 崩溃\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "BadString b = a 让 b.data 和 a.data 指向**同一块**内存。离开 main 时 b 先析构 delete 一次，a 再析构 delete 第二次，同一块内存被释放两次，程序崩溃。这就是浅拷贝的经典恶果。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "深拷贝解决",
          'code': "#include <iostream>\n#include <cstring>\nclass String {\nprivate:\n    char *data;\npublic:\n    String(const char *s) {\n        data = new char[std::strlen(s) + 1];\n        std::strcpy(data, s);\n    }\n    String(const String &other) {   // 深拷贝：分配新内存并复制内容\n        data = new char[std::strlen(other.data) + 1];\n        std::strcpy(data, other.data);\n    }\n    ~String() { delete[] data; }\n    void show() { std::cout << data << std::endl; }\n};\nint main() {\n    String a(\"hello\");\n    String b = a;   // 深拷贝：a、b 各有一份独立内容\n    a.show();\n    b.show();\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "自己写拷贝构造函数，为 new 的资源分配**新的**内存并复制内容，a、b 各管各的内存，析构时互不干扰。凡是手动 new 了资源的类，都必须提供深拷贝。"
        },
        {
          'type': "h",
          'text': "三法则与五法则"
        },
        {
          'type': "list",
          'items': [
            "三法则：如果类需要自定义析构函数、拷贝构造函数、赋值运算符中的任何一个，通常三者都要写",
            "五法则（C++11 起）：再加上移动构造函数和移动赋值运算符",
            "不用 new 的类（如只用 vector、string 成员）不需要自定义，默认拷贝就正确"
          ]
        },
        {
          'type': "warn",
          'title': "别忘了赋值运算符",
          'text': "深拷贝只处理了拷贝构造，<code inline>b = a</code> 赋值也可能浅拷贝。完整的深拷贝类应该同时提供拷贝构造、赋值运算符、析构函数，这就是三法则。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"深拷贝与浅拷贝、拷贝控制三/五法则\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"深拷贝与浅拷贝、拷贝控制三/五法则\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"深拷贝与浅拷贝、拷贝控制三/五法则\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "浅拷贝让两个对象共享同一块资源，双重释放崩溃",
            "有指针成员的类必须深拷贝",
            "深拷贝：为新资源分配独立内存并复制内容",
            "三法则：析构/拷贝构造/赋值一起写",
            "五法则再加移动构造和移动赋值"
          ]
        }
      ],
      'templates': [
        {
          'name': "深拷贝 String 演示",
          'code': "#include <iostream>\n#include <cstring>\nclass MyStr {\nprivate:\n    char *data;\npublic:\n    MyStr(const char *s) {\n        data = new char[std::strlen(s) + 1];\n        std::strcpy(data, s);\n    }\n    MyStr(const MyStr &o) {\n        data = new char[std::strlen(o.data) + 1];\n        std::strcpy(data, o.data);\n    }\n    ~MyStr() { delete[] data; }\n    const char* get() { return data; }\n};\nint main() {\n    MyStr a(\"deep copy\");\n    MyStr b = a;\n    std::cout << b.get() << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-65",
      'title': "输入输出流进阶：格式化与文件定位",
      'summary': "控制小数精度、宽度对齐，seekg/seekp 定位读写位置。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "前面学的 << 和 >> 只是流的基础。用 <code inline><iomanip></code> 里的操纵符（manipulator），可以精确控制输出格式：小数位、宽度、对齐、进制等。这一章把常用的都过一遍。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "格式化输出",
          'code': "#include <iostream>\n#include <iomanip>\nint main() {\n    double pi = 3.1415926535;\n    std::cout << std::fixed << std::setprecision(2) << pi << std::endl;  // 3.14\n    std::cout << std::setprecision(4) << pi << std::endl;  // 3.1416\n    std::cout << std::setw(10) << 42 << \"|\" << std::endl;  // 宽度 10 右对齐\n    std::cout << std::setw(10) << std::left << 42 << \"|\" << std::endl;  // 左对齐\n    std::cout << std::hex << 255 << std::endl;   // ff  十六进制\n    std::cout << std::dec << 255 << std::endl;   // 255 恢复十进制\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code inline>std::fixed</code> 固定小数位、<code inline>std::setprecision(n)</code> 设小数位数、<code inline>std::setw(n)</code> 设最小宽度、<code inline>std::left/right</code> 对齐、<code inline>std::hex/dec/oct</code> 进制。这些操纵符在 <code inline><iomanip></code> 头文件里。"
        },
        {
          'type': "h",
          'text': "文件定位：seekg 与 seekp"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "定位读写",
          'code': "#include <iostream>\n#include <fstream>\nint main() {\n    std::fstream file(\"demo.txt\", std::ios::in | std::ios::out | std::ios::trunc);\n    file << \"hello world\";\n    file.seekg(0);          // 读指针移到开头\n    char c;\n    file.get(c);            // 读一个字符\n    std::cout << \"第一个字符：\" << c << std::endl;  // h\n    file.seekp(6);          // 写指针移到第 6 个位置\n    file << \"C++\";          // 覆盖写入\n    file.seekg(0);\n    std::string s;\n    file >> s;\n    std::cout << \"现在内容开头：\" << s << std::endl;  // helloC++\n    file.close();\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "<code inline>seekg(位置)</code> 移动读指针（get），<code inline>seekp(位置)</code> 移动写指针（put），用于跳到文件的指定位置读取或覆盖写入。<code inline>fstream</code> 用 <code inline>|</code> 组合多个模式（in 读、out 写、trunc 清空）。"
        },
        {
          'type': "warn",
          'title': "setw 只对下一个输出有效",
          'text': "<code inline>std::setw</code> 只影响紧接着的那一次输出，不会一直生效（不像 setprecision）。而 setprecision 一旦设置会持续生效，直到被改。两者行为不一样，容易记混。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"输入输出流进阶：格式化与文件定位\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"输入输出流进阶：格式化与文件定位\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"输入输出流进阶：格式化与文件定位\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "setprecision 控制小数位，fixed 固定小数模式",
            "setw 控制宽度，只影响下一个输出",
            "left/right 控制对齐，hex/dec 切换进制",
            "seekg 定位读指针，seekp 定位写指针",
            "fstream 用 | 组合打开模式"
          ]
        }
      ],
      'templates': [
        {
          'name': "格式化成绩表",
          'code': "#include <iostream>\n#include <iomanip>\nint main() {\n    std::cout << std::left << std::setw(10) << \"姓名\" << std::right << std::setw(8) << \"分数\" << std::endl;\n    std::cout << std::left << std::setw(10) << \"小明\" << std::right << std::setw(8) << std::fixed << std::setprecision(1) << 88.5 << std::endl;\n    std::cout << std::left << std::setw(10) << \"小红\" << std::right << std::setw(8) << 92.0 << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-66",
      'title': "综合实战：学生成绩管理系统",
      'summary': "用类 + vector + 排序 + 文件，做一个成绩管理系统。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "学到这里，可以开始做点真正的项目了。这一章把类、vector、算法、lambda 组合起来，做一个学生成绩管理系统：录入学生、按成绩排序、输出排名。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "学生成绩管理（核心）",
          'code': "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nstruct Student {\n    std::string name;\n    double score;\n};\nvoid printAll(const std::vector<Student> &st) {\n    for (size_t i = 0; i < st.size(); i++) {\n        std::cout << i + 1 << \". \" << st[i].name << \"：\" << st[i].score << \" 分\" << std::endl;\n    }\n}\nint main() {\n    std::vector<Student> students;\n    students.push_back({\"小明\", 88.5});\n    students.push_back({\"小红\", 92});\n    students.push_back({\"小刚\", 75.5});\n    std::sort(students.begin(), students.end(), [](const Student &a, const Student &b) {\n        return a.score > b.score;   // 按成绩降序\n    });\n    std::cout << \"成绩排名：\" << std::endl;\n    printAll(students);\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "用 struct Student 存一个学生，用 vector 存全班。排序时用 lambda 指定按成绩降序（<code inline>a.score > b.score</code> 表示 a 排在 b 前）。这已经是现实世界里最常见的『数据 + 容器 + 算法』组合。"
        },
        {
          'type': "h",
          'text': "扩展：支持录入与文件持久化"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "录入并保存到文件",
          'code': "#include <iostream>\n#include <vector>\n#include <string>\n#include <fstream>\nstruct Student {\n    std::string name;\n    double score;\n};\nint main() {\n    std::vector<Student> students;\n    int n;\n    std::cout << \"要录入几个学生？\";\n    std::cin >> n;\n    for (int i = 0; i < n; i++) {\n        Student s;\n        std::cout << \"第 \" << i + 1 << \" 个姓名：\";\n        std::cin >> s.name;\n        std::cout << \"分数：\";\n        std::cin >> s.score;\n        students.push_back(s);\n    }\n    std::ofstream out(\"scores.txt\");\n    for (auto &s : students) {\n        out << s.name << \" \" << s.score << std::endl;\n    }\n    out.close();\n    std::cout << \"已保存到 scores.txt，共 \" << students.size() << \" 人\" << std::endl;\n    return 0;\n}"
        },
        {
          'type': "tip",
          'title': "怎么把项目做完整",
          'text': "一个完整版本还可以：读取文件恢复数据、按名字查找学生、统计平均分与最高分、删除/修改记录。每一部分都用前面章节学过的知识就能实现，强烈建议自己动手加功能。"
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
            "用 struct 定义数据，vector 存集合",
            "sort + lambda 按规则排序",
            "文件流实现数据持久化",
            "先写核心逻辑，再逐步加功能",
            "动手扩展功能是巩固知识最好的方式"
          ]
        }
      ],
      'templates': [
        {
          'name': "成绩排名模板",
          'code': "#include <iostream>\n#include <vector>\n#include <algorithm>\nint main() {\n    std::vector<std::pair<std::string, double>> v = {{\"小刚\", 70}, {\"小红\", 90}, {\"小明\", 85}};\n    std::sort(v.begin(), v.end(), [](auto &a, auto &b) { return a.second > b.second; });\n    for (auto &p : v) {\n        std::cout << p.first << \": \" << p.second << std::endl;\n    }\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-67",
      'title': "综合实战：银行账户模拟系统",
      'summary': "用类封装账户，实现存款取款转账，体现封装思想。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "这一章做一个银行账户模拟系统，重点练习**封装**：余额是私有数据，外部只能通过方法操作，并且所有操作都带校验。这正是第 20 章封装思想的一次完整落地。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "银行账户类",
          'code': "#include <iostream>\n#include <string>\nclass BankAccount {\nprivate:\n    std::string owner;\n    double balance;\npublic:\n    BankAccount(std::string name, double init) : owner(name), balance(init) {}\n    void deposit(double m) {   // 存款\n        if (m > 0) balance += m;\n    }\n    bool withdraw(double m) {  // 取款\n        if (m <= 0 || m > balance) return false;\n        balance -= m;\n        return true;\n    }\n    double getBalance() const { return balance; }\n    void show() const {\n        std::cout << owner << \" 余额：\" << balance << std::endl;\n    }\n};\nint main() {\n    BankAccount acc(\"张三\", 1000);\n    acc.deposit(500);\n    if (acc.withdraw(2000)) {\n        std::cout << \"取款成功\" << std::endl;\n    } else {\n        std::cout << \"余额不足\" << std::endl;\n    }\n    acc.show();\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "balance 是 private，外部不能直接改。<code inline>deposit</code> 检查金额为正，<code inline>withdraw</code> 检查余额是否够。这样余额永远合理，不可能被赋成负数——封装的价值就在于此。"
        },
        {
          'type': "h",
          'text': "扩展：转账功能"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "账户之间转账",
          'code': "#include <iostream>\n#include <string>\nclass BankAccount {\nprivate:\n    std::string owner;\n    double balance;\npublic:\n    BankAccount(std::string n, double b) : owner(n), balance(b) {}\n    bool withdraw(double m) {\n        if (m <= 0 || m > balance) return false;\n        balance -= m;\n        return true;\n    }\n    void deposit(double m) { balance += m; }\n    void show() const { std::cout << owner << \": \" << balance << std::endl; }\n};\nbool transfer(BankAccount &from, BankAccount &to, double m) {\n    if (from.withdraw(m)) {\n        to.deposit(m);\n        return true;\n    }\n    return false;\n}\nint main() {\n    BankAccount a(\"张三\", 1000);\n    BankAccount b(\"李四\", 500);\n    if (transfer(a, b, 300)) {\n        std::cout << \"转账成功\" << std::endl;\n    }\n    a.show();\n    b.show();\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "转账 = 从 A 扣钱 + 给 B 加钱，通过公有方法完成，全程不碰私有数据。以后想加『每次转账收手续费』，只需要在 transfer 里加一行，调用方不用改。"
        },
        {
          'type': "warn",
          'title': "封装不是万能",
          'text': "这个版本取款和存款分两步，如果中间崩溃可能出现『扣了没加』。严谨的转账要保证原子性（要么都成功要么都失败），这是真实银行系统要考虑的，也是事务的概念。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"综合实战：银行账户模拟系统\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"综合实战：银行账户模拟系统\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"综合实战：银行账户模拟系统\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "私有数据 + 公有方法 = 封装",
            "操作带校验，保证数据永远合理",
            "转账通过方法组合完成，不碰私有数据",
            "用 const 成员函数保护只读方法",
            "真实系统还要考虑原子性/事务"
          ]
        }
      ],
      'templates': [
        {
          'name': "银行账户演示",
          'code': "#include <iostream>\n#include <string>\nclass Account {\nprivate:\n    double money;\npublic:\n    Account(double m) : money(m) {}\n    void save(double x) { money += x; }\n    double get() const { return money; }\n};\nint main() {\n    Account a(100);\n    a.save(50);\n    std::cout << \"余额：\" << a.get() << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-68",
      'title': "综合实战：运算符重载实现分数类",
      'summary': "完整实现分数加减和输出，融会贯通运算符重载。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "把第 28、29 章学的运算符重载真正用起来：实现一个分数（Fraction）类，支持分数的加法、化简，还能用 << 直接输出成 1/2 这种形式。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "分数类：加法与化简",
          'code': "#include <iostream>\nclass Fraction {\nprivate:\n    int num, den;   // 分子、分母\n    int gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }  // 最大公约数\n    void reduce() {   // 化简\n        int g = gcd(num, den);\n        num /= g;\n        den /= g;\n    }\npublic:\n    Fraction(int n, int d) : num(n), den(d) { reduce(); }\n    Fraction operator+(const Fraction &f) const {\n        return Fraction(num * f.den + f.num * den, den * f.den);\n    }\n    void show() const {\n        std::cout << num << \"/\" << den << std::endl;\n    }\n};\nint main() {\n    Fraction a(1, 2), b(1, 3);\n    Fraction c = a + b;   // 自动化简为 5/6\n    c.show();\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "分数加法的公式：a/b + c/d = (ad + cb) / bd。构造函数里自动调用 reduce() 用最大公约数化简，比如 2/4 会化简成 1/2。<code inline>a + b</code> 走的就是重载的 <code inline>operator+</code>。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "重载 << 直接输出分数",
          'code': "#include <iostream>\nclass Fraction {\nprivate:\n    int num, den;\n    int gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }\n    void reduce() {\n        int g = gcd(num, den);\n        num /= g;\n        den /= g;\n    }\npublic:\n    Fraction(int n, int d) : num(n), den(d) { reduce(); }\n    Fraction operator+(const Fraction &f) const {\n        return Fraction(num * f.den + f.num * den, den * f.den);\n    }\n    friend std::ostream& operator<<(std::ostream &out, const Fraction &f);\n};\nstd::ostream& operator<<(std::ostream &out, const Fraction &f) {\n    out << f.num << \"/\" << f.den;\n    return out;\n}\nint main() {\n    Fraction a(1, 2), b(1, 3);\n    std::cout << a << \" + \" << b << \" = \" << a + b << std::endl;  // 1/2 + 1/3 = 5/6\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "把 operator<< 声明为友元（因为左侧是 cout 不是 Fraction），实现里访问私有 num/den 输出。现在分数对象可以像内置类型一样被 cout 输出，还能出现在任何 << 表达式里。"
        },
        {
          'type': "tip",
          'title': "自己扩展",
          'text': "试着继续重载：<code inline>*</code>（分数乘法）、<code inline>==</code>（比较是否相等）、<code inline>></code>（比较大小）。乘法最简单：分子乘分子、分母乘分母。这会是一次很好的综合练习。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"综合实战：运算符重载实现分数类\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"综合实战：运算符重载实现分数类\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"综合实战：运算符重载实现分数类\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Fraction 类封装分子分母并自动化简",
            "gcd 递归求最大公约数用于化简",
            "operator+ 重载分数加法",
            "operator<< 用友元重载，支持直接输出",
            "运算符重载让自定义类型像内置类型一样用"
          ]
        }
      ],
      'templates': [
        {
          'name': "分数乘法",
          'code': "#include <iostream>\nclass Frac {\npublic:\n    int n, d;\n    Frac(int a, int b) : n(a), d(b) {}\n    Frac operator*(const Frac &f) const {\n        return Frac(n * f.n, d * f.d);\n    }\n};\nint main() {\n    Frac a(2, 3), b(3, 4);\n    Frac c = a * b;\n    std::cout << c.n << \"/\" << c.d << std::endl;  // 6/12\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-69",
      'title': "综合实战：图书馆 / 通讯录管理系统（map）",
      'summary': "用 map 管理书籍或联系人，实现查找、借还、增删。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "map 最典型的应用场景就是『按名字查信息』。这一章做一个图书馆借阅系统：书名是 key，是否可借是 value，实现借书、还书、查状态、遍历馆藏。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "图书馆借阅系统",
          'code': "#include <iostream>\n#include <map>\n#include <string>\nint main() {\n    std::map<std::string, bool> library;   // true 表示可借\n    library[\"C++ Primer\"] = true;\n    library[\"算法导论\"] = true;\n    library[\"深入理解计算机系统\"] = false;\n\n    std::string want = \"C++ Primer\";\n    if (library.count(want)) {\n        if (library[want]) {\n            library[want] = false;   // 借出\n            std::cout << \"借出成功：\" << want << std::endl;\n        } else {\n            std::cout << \"这本书已被借出\" << std::endl;\n        }\n    } else {\n        std::cout << \"馆藏没有这本书\" << std::endl;\n    }\n\n    std::cout << \"当前馆藏：\" << std::endl;\n    for (auto &kv : library) {\n        std::cout << \"  \" << kv.first << \"：\" << (kv.second ? \"可借\" : \"已借出\") << std::endl;\n    }\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "借书逻辑：先 <code inline>count</code> 判断书是否存在，存在再看是否可借，可借就置为 false。还书就是把 value 改回 true。整个系统就围绕 map 的 key 查找展开，代码非常简洁。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "通讯录：人名查找电话",
          'code': "#include <iostream>\n#include <map>\n#include <string>\nint main() {\n    std::map<std::string, std::string> contacts;\n    contacts[\"张三\"] = \"13800000001\";\n    contacts[\"李四\"] = \"13800000002\";\n    contacts[\"王五\"] = \"13800000003\";\n\n    std::string who = \"李四\";\n    auto it = contacts.find(who);\n    if (it != contacts.end()) {\n        std::cout << who << \" 的电话：\" << it->second << std::endl;\n    } else {\n        std::cout << \"通讯录里没有 \" << who << std::endl;\n    }\n\n    contacts.erase(\"王五\");   // 删除联系人\n    std::cout << \"剩余联系人：\" << contacts.size() << \" 人\" << std::endl;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "通讯录用 <code inline>map<string, string></code>，姓名是 key、电话是 value。<code inline>find</code> 快速定位，找不到返回 end()。<code inline>erase</code> 删除。增删查改全部用现成接口，几百行代码的工作量被压缩到几十行。"
        },
        {
          'type': "warn",
          'title': "练习建议",
          'text': "把这两个系统合并成完整的菜单程序：while 循环打印菜单、switch 处理选项、操作后写回文件。完成这个练习，你对 C++ 的核心知识基本就打通了。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"综合实战：图书馆 / 通讯录管理系统（map）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"综合实战：图书馆 / 通讯录管理系统（map）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"综合实战：图书馆 / 通讯录管理系统（map）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "map 天然适合按名字/键查数据",
            "借还书 = 修改 value 的布尔状态",
            "find 找不到返回 end()，用 count 判断存在",
            "map 让增删查改代码极简",
            "完整项目 = 循环菜单 + 核心逻辑 + 文件持久化"
          ]
        }
      ],
      'templates': [
        {
          'name': "通讯录查询",
          'code': "#include <iostream>\n#include <map>\n#include <string>\nint main() {\n    std::map<std::string, std::string> c = {{\"张三\", \"1381\"}, {\"李四\", \"1392\"}};\n    std::string name;\n    std::cout << \"查谁的电话？\";\n    std::cin >> name;\n    if (c.count(name)) {\n        std::cout << name << \": \" << c[name] << std::endl;\n    } else {\n        std::cout << \"找不到\" << std::endl;\n    }\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-70",
      'title': "综合实战：多线程任务队列",
      'summary': "生产者消费者模型，条件变量 + 队列 + 线程的完整落地。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "把多线程、mutex、条件变量、队列组合成一个经典的生产者-消费者模型：生产者线程不断生成任务放进队列，消费者线程从队列取出任务处理。这正是消息队列、任务调度系统的雏形。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "生产者-消费者模型",
          'code': "#include <iostream>\n#include <queue>\n#include <thread>\n#include <mutex>\n#include <condition_variable>\nstd::queue<int> tasks;\nstd::mutex mtx;\nstd::condition_variable cv;\nvoid producer() {\n    for (int i = 1; i <= 5; i++) {\n        {\n            std::lock_guard<std::mutex> lock(mtx);\n            tasks.push(i);\n            std::cout << \"生产任务 \" << i << std::endl;\n        }\n        cv.notify_one();   // 通知消费者\n    }\n}\nvoid consumer() {\n    for (int i = 1; i <= 5; i++) {\n        std::unique_lock<std::mutex> lock(mtx);\n        cv.wait(lock, [] { return !tasks.empty(); });   // 队列空则等待\n        int t = tasks.front();\n        tasks.pop();\n        std::cout << \"消费任务 \" << t << std::endl;\n    }\n}\nint main() {\n    std::thread p(producer);\n    std::thread c(consumer);\n    p.join();\n    c.join();\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "生产者往队列 push 任务，消费者从队列 pop 任务。队列是共享数据，用 mutex 保护；队列空时消费者用 <code inline>cv.wait</code> 挂起等待，生产者放进新任务后 <code inline>notify_one</code> 唤醒它。整个过程没有忙等、没有数据竞争。"
        },
        {
          'type': "list",
          'items': [
            "共享队列用 mutex 保护",
            "队列空时消费者 cv.wait 挂起",
            "生产后 cv.notify_one 唤醒消费者",
            "wait 用 unique_lock，配合条件判断防伪唤醒"
          ]
        },
        {
          'type': "warn",
          'title': "多消费者要小心",
          'text': "如果有多个消费者线程，唤醒后要再次检查条件（这就是 wait 带条件参数的原因），防止『伪唤醒』或两个消费者抢同一个任务。真实系统还会用 while 循环 + wait 的标准模式。"
        },
        {
          'type': "tip",
          'title': "这个模型能干什么",
          'text': "改造一下：任务从 int 换成函数或对象，就变成了真正的任务调度器。Web 服务器、下载器、游戏引擎都大量使用这种模式。理解了本章，就理解了并发的核心骨架。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"综合实战：多线程任务队列\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"综合实战：多线程任务队列\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"综合实战：多线程任务队列\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "生产者-消费者：生产进队、消费出队",
            "共享队列必须加锁保护",
            "条件变量实现『队列空就等，有货就干活』",
            "wait 带条件参数防伪唤醒",
            "这是消息队列和任务调度的雏形"
          ]
        }
      ],
      'templates': [
        {
          'name': "简单任务队列",
          'code': "#include <iostream>\n#include <queue>\n#include <thread>\n#include <mutex>\n#include <condition_variable>\nstd::queue<int> q;\nstd::mutex m;\nstd::condition_variable cv;\nint main() {\n    std::thread p([] {\n        for (int i = 1; i <= 3; i++) {\n            { std::lock_guard<std::mutex> lk(m); q.push(i); }\n            cv.notify_one();\n        }\n    });\n    std::thread c([] {\n        for (int i = 1; i <= 3; i++) {\n            std::unique_lock<std::mutex> lk(m);\n            cv.wait(lk, [] { return !q.empty(); });\n            std::cout << q.front() << std::endl;\n            q.pop();\n        }\n    });\n    p.join();\n    c.join();\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-71",
      'title': "C++11 / 14 / 17 / 20 新特性速览",
      'summary': "跨越各标准版本，掌握现代 C++ 的核心能力。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "C++ 是一门持续进化的语言，每隔几年发布一个新标准。现代 C++（C++11 及以后）的风格和老的 C++98 差别巨大。这一章把各版本最重要的特性梳理一遍，让你面对新代码不再陌生。"
        },
        {
          'type': "table",
          'head': [
            "版本",
            "年份",
            "重磅特性"
          ],
          'rows': [
            [
              "C++11",
              "2011",
              "auto、nullptr、lambda、智能指针、range-for、右值引用、std::thread"
            ],
            [
              "C++14",
              "2014",
              "泛型 lambda、make_unique、返回类型推导"
            ],
            [
              "C++17",
              "2017",
              "结构化绑定、if 初始化、std::optional、并行算法、折叠表达式"
            ],
            [
              "C++20",
              "2020",
              "概念(concepts)、协程、范围库(ranges)、std::span、三向比较"
            ]
          ]
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "现代 C++ 特性演示",
          'code': "#include <iostream>\n#include <vector>\n#include <memory>\nint main() {\n    // C++11: auto、range-for、智能指针\n    auto v = std::vector<int>{1, 2, 3};\n    for (auto x : v) std::cout << x << \" \";\n    std::cout << std::endl;\n    auto p = std::make_unique<int>(7);   // C++14 的 make_unique\n    std::cout << *p << std::endl;\n    // C++14: 泛型 lambda\n    auto add = [](auto a, auto b) { return a + b; };\n    std::cout << add(1, 2) << \" \" << add(1.5, 2.5) << std::endl;\n    return 0;\n}"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "C++17 结构化绑定与 if 初始化",
          'code': "#include <iostream>\n#include <map>\n#include <string>\nint main() {\n    std::map<std::string, int> m;\n    m[\"a\"] = 1;\n    if (auto it = m.find(\"a\"); it != m.end()) {   // if 里初始化\n        auto [key, value] = *it;   // 结构化绑定\n        std::cout << key << \"=\" << value << std::endl;\n    }\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "结构化绑定 <code inline>auto [key, value] = *it</code> 一次性取出 map 元素的键和值；<code inline>if (auto it = ...; 条件)</code> 在条件判断里直接初始化变量。这些语法让代码更简洁、更安全。"
        },
        {
          'type': "tip",
          'title': "怎么选择标准",
          'text': "现在新项目基本都要求 C++17 以上。编译时加 <code inline>-std=c++17</code> 或 <code inline>-std=c++20</code> 选择标准。本课程的例子兼容 C++11/14 的都能直接跑。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"C++11 / 14 / 17 / 20 新特性速览\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"C++11 / 14 / 17 / 20 新特性速览\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"C++11 / 14 / 17 / 20 新特性速览\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "C++11 是现代化分水岭：auto、lambda、智能指针",
            "C++14 加泛型 lambda 与 make_unique",
            "C++17 加结构化绑定、if 初始化、optional",
            "C++20 加概念、协程、ranges",
            "新项目优先用 C++17/20，编译时指定 -std"
          ]
        }
      ],
      'templates': [
        {
          'name': "结构化绑定",
          'code': "#include <iostream>\n#include <map>\n#include <string>\nint main() {\n    std::map<std::string, int> scores = {{\"小明\", 90}, {\"小红\", 85}};\n    for (auto [name, score] : scores) {\n        std::cout << name << \": \" << score << std::endl;\n    }\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-72",
      'title': "编译流程与 CMake / Makefile 简介",
      'summary': "理解预处理-编译-汇编-链接四步，认识构建工具。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "前面一直用 <code inline>g++ hello.cpp -o hello</code> 一句编译，但背后其实有完整的流水线。理解编译流程，才能看懂各种报错、理解为什么大型项目需要构建工具。"
        },
        {
          'type': "h",
          'text': "编译的四步"
        },
        {
          'type': "list",
          'items': [
            "预处理：处理 #include、#define 等，生成展开后的代码",
            "编译：把 C++ 源码翻译成汇编代码",
            "汇编：把汇编翻译成机器码，生成目标文件（.o）",
            "链接：把多个目标文件和库合并，生成可执行文件"
          ]
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "手动执行四步",
          'code': "g++ -E hello.cpp -o hello.i     # 1 预处理\n g++ -S hello.i -o hello.s        # 2 编译成汇编\n g++ -c hello.s -o hello.o        # 3 汇编成目标文件\n g++ hello.o -o hello             # 4 链接成可执行文件\n # 实际开发通常一步完成：\n g++ hello.cpp -o hello"
        },
        {
          'type': "p",
          'text': "用 <code inline>-E</code>、<code inline>-S</code>、<code inline>-c</code> 可以分别停在预处理、编译、汇编阶段，最后链接。<code inline>.o</code> 是目标文件，多个源文件各自编译成 .o 再链接，改一个文件只需重新编译那一个。"
        },
        {
          'type': "h",
          'text': "Makefile 与 CMake"
        },
        {
          'type': "code",
          'lang': "make",
          'title': "简单 Makefile",
          'code': "app: main.cpp util.cpp\n\tg++ main.cpp util.cpp -o app\nclean:\n\trm -f app *.o"
        },
        {
          'type': "p",
          'text': "Makefile 用简单的规则声明『用什么命令生成什么』，make 工具根据文件时间戳只重新编译变更的部分。写多文件项目时非常省事。"
        },
        {
          'type': "p",
          'text': "CMake 是更现代的构建系统：写一份 <code inline>CMakeLists.txt</code>，它能自动生成 Makefile 或 Visual Studio 工程，跨平台（Windows/Linux/macOS）都能用。大型项目几乎都选 CMake。"
        },
        {
          'type': "code",
          'lang': "cmake",
          'title': "最简单的 CMakeLists.txt",
          'code': "cmake_minimum_required(VERSION 3.10)\nproject(MyApp)\nadd_executable(myapp main.cpp util.cpp)"
        },
        {
          'type': "p",
          'text': "用 <code inline>cmake .</code> 生成构建文件，再 <code inline>cmake --build .</code> 编译（或用 make）。三行 CMakeLists.txt 就能管理一个多文件项目，还自动处理跨平台差异。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"编译流程与 CMake / Makefile 简介\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"编译流程与 CMake / Makefile 简介\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"编译流程与 CMake / Makefile 简介\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "编译四步：预处理、编译、汇编、链接",
            ".o 目标文件，多个源文件先分别编译再链接",
            "Makefile 声明编译规则，make 增量构建",
            "CMake 跨平台生成构建文件，大型项目标配",
            "报错分别出现在编译期（语法）和链接期（符号）"
          ]
        }
      ],
      'templates': [
        {
          'name': "Makefile 模板",
          'code': "all:\n\tg++ -std=c++17 main.cpp -o app\nrun: all\n\t./app\nclean:\n\trm -f app *.o"
        }
      ]
    },
    {
      'id': "cp-73",
      'title': "调试技巧：gdb 与 Visual Studio 断点",
      'summary': "打断点、单步执行、查看变量，定位 bug 的核心方法。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "程序出错时，靠瞪眼看代码常常找不出问题。调试器（debugger）能让你暂停程序、一行行执行、随时查看变量值，是程序员最强大的定位工具。这一章介绍 gdb（命令行）和 Visual Studio 两种常用方式。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "一个待调试的程序",
          'code': "#include <iostream>\nint divide(int a, int b) {\n    return a / b;   // 当 b 为 0 时崩溃，需要在这里打断点\n}\nint main() {\n    int x = 10;\n    int y = 0;\n    std::cout << \"开始计算\" << std::endl;\n    int r = divide(x, y);   // 在此打断点观察 x、y、r\n    std::cout << \"结果：\" << r << std::endl;\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "上面的程序运行到 <code inline>divide(x, y)</code> 时 y 是 0，会除零崩溃。用调试器在 <code inline>int r = divide(x, y);</code> 那行打断点，就能看到 x=10、y=0，立刻明白问题所在。"
        },
        {
          'type': "h",
          'text': "gdb 基本命令"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "用 gdb 调试",
          'code': "g++ -g bug.cpp -o bug      # -g 加入调试信息\n gdb ./bug\n (gdb) break 12               # 在第 12 行打断点\n (gdb) run                    # 运行到断点\n (gdb) print y                # 查看变量 y\n (gdb) next                   # 单步执行（不进入函数）\n (gdb) step                   # 单步执行（进入函数）\n (gdb) continue               # 继续运行\n (gdb) quit                   # 退出"
        },
        {
          'type': "p",
          'text': "编译时必须加 <code inline>-g</code> 选项才会包含调试信息。常用命令：<code inline>break 行号</code> 断点、<code inline>run</code> 运行、<code inline>print 变量</code> 查看值、<code inline>next</code>/<code inline>step</code> 单步、<code inline>continue</code> 继续、<code inline>quit</code> 退出。"
        },
        {
          'type': "h",
          'text': "Visual Studio 调试"
        },
        {
          'type': "list",
          'items': [
            "在行号左侧灰色区域点击即可设置断点（红点）",
            "F5 开始调试，F10 单步跳过（不进入函数），F11 单步进入函数",
            "调试时鼠标悬停在变量上可看当前值，或使用『监视』窗口",
            "F9 切换断点，Shift+F5 停止调试"
          ]
        },
        {
          'type': "warn",
          'title': "Release 模式没调试信息",
          'text': "用 Release（发布）配置编译时，优化和没有调试符号会让断点失灵。调试请用 Debug 配置，调试完再切 Release 发布。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"调试技巧：gdb 与 Visual Studio 断点\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"调试技巧：gdb 与 Visual Studio 断点\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"调试技巧：gdb 与 Visual Studio 断点\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "调试器能暂停、单步、查看变量，是定位 bug 的核心工具",
            "gcc/g++ 编译加 -g 才有调试信息",
            "gdb 常用：break、run、print、next、step",
            "Visual Studio：F9 断点、F5 调试、F10/F11 单步",
            "调试用 Debug 配置，发布用 Release"
          ]
        }
      ],
      'templates': [
        {
          'name': "调试示例程序",
          'code': "#include <iostream>\nint main() {\n    int total = 0;\n    for (int i = 1; i <= 10; i++) {\n        total += i;\n        if (i == 5) {\n            std::cout << \"中途检查：\" << total << std::endl;   // 打断点看这里\n        }\n    }\n    std::cout << \"总和：\" << total << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-74",
      'title': "常见编译错误解析",
      'summary': "读懂编译错误和链接错误，学会看报错信息。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "新手看到一大段英文报错就慌，其实编译错误有规律可循。看懂错误信息，按提示修复，是程序员的基本功。这一章把最常见的几类错误逐一解剖。"
        },
        {
          'type': "h",
          'text': "语法错误：编译期就能发现"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "少了分号/括号",
          'code': "#include <iostream>\nint main() {\n    int a = 5\n    std::cout << a << std::endl;\n    return 0;\n}\n// 错误信息：expected ; before std\n// 第 3 行少写了分号，编译器在第 4 行报错，报错行号可能偏后"
        },
        {
          'type': "p",
          'text': "报错信息通常包含：文件名、行号、错误描述（expected/undefined/reference 等）。常见语法错误：缺分号、括号不匹配、花括号不成对。注意编译器报的行号只是它『发现』问题的位置，真正错误往往在上一行。"
        },
        {
          'type': "h",
          'text': "链接错误：未定义引用"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "声明了但没实现",
          'code': "#include <iostream>\nint add(int a, int b);   // 只有声明\nint main() {\n    std::cout << add(1, 2) << std::endl;\n    return 0;\n}\n// 链接错误：undefined reference to add(int, int)\n// 原因：add 声明了却没实现，或实现写在别的文件里没链接进来"
        },
        {
          'type': "p",
          'text': "『undefined reference』是链接期错误：函数被调用了，但链接器找不到它的实现。常见原因：声明了没定义、源文件没参与编译、忘记链接某个库（如 <code inline>-lm</code> 链接数学库）。"
        },
        {
          'type': "table",
          'head': [
            "错误类型",
            "典型信息",
            "常见原因"
          ],
          'rows': [
            [
              "语法错误",
              "expected ; / expected }",
              "缺分号、括号不匹配"
            ],
            [
              "未声明",
              "not declared in this scope",
              "变量/函数没声明，或作用域不对"
            ],
            [
              "类型不匹配",
              "cannot convert",
              "把不兼容类型传给函数"
            ],
            [
              "链接错误",
              "undefined reference",
              "函数声明了没实现、漏链接库"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "报错信息从第一条看起",
          'text': "一条错误往往引发后面一连串错误。遇到大片报错，**先看第一条**，修好第一条往往很多条跟着消失。别被几百行报错吓到。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "作用域错误",
          'code': "#include <iostream>\nint main() {\n    int x = 10;\n    // std::cout << y << std::endl;   // 错误：y not declared\n    // 变量在使用前必须先声明\n    int y = 20;\n    std::cout << x + y << std::endl;\n    return 0;\n}"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"常见编译错误解析\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"常见编译错误解析\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"常见编译错误解析\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "编译错误分语法期和链接期两大类",
            "报错行号可能偏后，真正问题常在上一行",
            "undefined reference = 声明了没实现或没链接",
            "作用域错误：变量先声明后使用",
            "大片报错先看第一条"
          ]
        }
      ],
      'templates': [
        {
          'name': "常见的坑代码",
          'code': "#include <iostream>\nint main() {\n    // 练习：把下面每行注释掉的错误修好\n    // int x = 5   缺少分号\n    // std::cout << z;   z 未声明\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-75",
      'title': "内存泄漏检测与排查",
      'summary': "认识泄漏危害，学会用工具检测和预防。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "内存泄漏指分配的内存一直不释放，程序内存占用越来越大，最终卡死或崩溃。常见于循环里 new 忘了 delete、异常路径跳过 delete、共享指针循环引用等场景。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "典型的泄漏代码",
          'code': "#include <iostream>\nvoid leaky() {\n    int *p = new int(42);\n    // 忘了 delete p → 每次调用泄漏一块内存\n    std::cout << *p << std::endl;\n}\nint main() {\n    for (int i = 0; i < 1000000; i++) {\n        leaky();   // 调 100 万次，泄漏 100 万块内存\n    }\n    return 0;\n}"
        },
        {
          'type': "p",
          'text': "leaky() 每次调用都 new 一块内存却不 delete，main 里调用 100 万次就泄漏 100 万块。程序运行时间越长、调用次数越多，内存涨得越厉害。症状：任务管理器里内存占用只升不降。"
        },
        {
          'type': "h",
          'text': "检测手段"
        },
        {
          'type': "list",
          'items': [
            "任务管理器/资源监视器：观察内存持续上涨",
            "VS 的调试模式会报告堆泄漏（Leak Detection），输出泄漏文件与行号",
            "Linux 用 Valgrind：valgrind --leak-check=full ./app，报告泄漏位置",
            "Windows 可用 Dr. Memory 等工具"
          ]
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "用 Valgrind 检测",
          'code': "valgrind --leak-check=full ./myapp\n# 输出片段：\n# 12 bytes in 1 blocks are definitely lost\n#    by 0x...: main (test.cpp:8)\n# 说明第 8 行 new 的内存泄漏了"
        },
        {
          'type': "p",
          'text': "Valgrind 会告诉你『哪一行分配的多少字节没释放』，按提示修复即可。这是 C/C++ 开发者最常用的泄漏检测工具之一。"
        },
        {
          'type': "danger",
          'title': "最好的防守是预防",
          'text': "与其事后检测，不如一开始就用安全写法：**能不用裸 new 就不用**——优先 vector、string、智能指针；new 出来的资源放进 RAII 对象；避免 shared_ptr 循环引用（用 weak_ptr）。遵守这些，泄漏基本与你无缘。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "安全写法对比",
          'code': "#include <iostream>\n#include <vector>\n#include <memory>\nint main() {\n    // 危险写法：裸 new + 手动 delete\n    int *arr = new int[100];\n    // 忘写 delete[] arr → 泄漏\n\n    // 安全写法：RAII 自动管理\n    std::vector<int> safeArr(100);\n    auto ptr = std::make_unique<int>(42);   // 自动释放\n    std::cout << safeArr.size() << \" \" << *ptr << std::endl;\n    return 0;\n}"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"内存泄漏检测与排查\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"内存泄漏检测与排查\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"内存泄漏检测与排查\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "泄漏症状：内存只增不减，程序逐渐卡死",
            "循环里 new 忘 delete、异常跳过 delete 是常见来源",
            "VS 调试模式自带堆泄漏检测，Linux 用 Valgrind",
            "报错会指出泄漏的分配行号",
            "预防优先：用 vector/string/智能指针，减少裸 new"
          ]
        }
      ],
      'templates': [
        {
          'name': "安全内存演示",
          'code': "#include <iostream>\n#include <vector>\n#include <memory>\nint main() {\n    std::vector<double> data(1000, 1.5);\n    auto name = std::make_unique<std::string>(\"RAII\");\n    std::cout << data.size() << \" \" << *name << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-76",
      'title': "常用 STL 容器对比与选择",
      'summary': "一张表看懂各种容器的优劣，学会按场景选容器。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "STL 提供了十几种容器，选错容器性能差几十倍。这一章把常用容器放在一起对比，给出选择决策方法，帮你『选对工具』。"
        },
        {
          'type': "table",
          'head': [
            "容器",
            "底层结构",
            "随机访问",
            "插入删除",
            "查找",
            "适用场景"
          ],
          'rows': [
            [
              "vector",
              "动态数组",
              "O(1) 快",
              "尾部快，中间慢",
              "O(n)",
              "通用首选、随机访问"
            ],
            [
              "deque",
              "分段数组",
              "O(1)",
              "头尾都快",
              "O(n)",
              "需要头尾操作"
            ],
            [
              "list",
              "双向链表",
              "O(n) 慢",
              "任意位置快",
              "O(n)",
              "频繁中间插删"
            ],
            [
              "stack/queue",
              "适配器",
              "无",
              "仅一端",
              "无",
              "后进先出/先进先出"
            ],
            [
              "map/multimap",
              "红黑树",
              "无",
              "O(log n)",
              "O(log n)",
              "有序键值对"
            ],
            [
              "set/multiset",
              "红黑树",
              "无",
              "O(log n)",
              "O(log n)",
              "有序去重集合"
            ],
            [
              "unordered_map",
              "哈希表",
              "无",
              "O(1) 平均",
              "O(1) 平均",
              "按键快速查找"
            ],
            [
              "unordered_set",
              "哈希表",
              "无",
              "O(1) 平均",
              "O(1) 平均",
              "去重+快速判断"
            ]
          ]
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "按需求选择容器",
          'code': "#include <iostream>\n#include <vector>\n#include <unordered_map>\n#include <string>\nint main() {\n    // 1. 需要按下标随机访问 → vector\n    std::vector<int> arr = {10, 20, 30};\n    std::cout << arr[1] << std::endl;\n\n    // 2. 需要按键查值（最快）→ unordered_map\n    std::unordered_map<std::string, int> price;\n    price[\"苹果\"] = 5;\n    std::cout << price[\"苹果\"] << \" 元\" << std::endl;\n    return 0;\n}"
        },
        {
          'type': "list",
          'items': [
            "默认选择：vector。除非有明确理由才换别的",
            "需要按键快速查找：unordered_map（要排序用 map）",
            "需要频繁在中间插入删除：list",
            "需要头尾操作：deque",
            "需要去重/判存在：set 或 unordered_set"
          ]
        },
        {
          'type': "warn",
          'title': "别用错查找方式",
          'text': "在 vector 里做频繁查找（线性 O(n)）在大数据量下很慢。如果『查』是主要操作，应该换成 set/unordered_set 或 map/unordered_map，把查找从 O(n) 降到 O(log n)/O(1)。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"常用 STL 容器对比与选择\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"常用 STL 容器对比与选择\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"常用 STL 容器对比与选择\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "没有银弹：按场景选容器",
            "默认 vector，随机访问它最快",
            "按键查找用 unordered_map/map",
            "频繁中间插删用 list，头尾操作用 deque",
            "查找为主改用关联容器，别在 vector 里线性找"
          ]
        }
      ],
      'templates': [
        {
          'name': "容器选择演示",
          'code': "#include <iostream>\n#include <vector>\n#include <set>\nint main() {\n    std::vector<int> v = {3, 1, 2};\n    std::set<int> s(v.begin(), v.end());   // 去重 + 排序\n    for (int x : s) std::cout << x << \" \";\n    std::cout << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-77",
      'title': "面试题：面向对象与多态",
      'summary': "高频八股：多态原理、虚表、构造顺序、抽象类。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "面向对象是 C++ 面试的必考区。这一章把最高频的几道题整理出来，附参考答案。面试不只是背答案，要理解背后的原理。"
        },
        {
          'type': "h",
          'text': "Q1：什么是多态？C++ 如何实现？"
        },
        {
          'type': "p",
          'text': "多态是『同一操作作用于不同对象产生不同结果』。C++ 通过**虚函数 + 虚函数表（vtable）**实现动态绑定：每个含虚函数的对象都有一个隐藏的虚表指针，指向该类的虚函数表。调用虚函数时，先按对象的真实类型找到对应虚表，再调用表里对应的函数，从而在运行时决定调用哪个版本。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "多态代码演示",
          'code': "#include <iostream>\nclass Shape {\npublic:\n    virtual double area() const = 0;   // 纯虚函数\n    virtual ~Shape() {}\n};\nclass Rect : public Shape {\nprivate:\n    double w, h;\npublic:\n    Rect(double a, double b) : w(a), h(b) {}\n    double area() const override { return w * h; }\n};\nint main() {\n    Shape* s = new Rect(3, 4);\n    std::cout << s->area() << std::endl;   // 动态绑定到 Rect::area\n    delete s;\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "Q2：虚函数表是什么？"
        },
        {
          'type': "p",
          'text': "含虚函数的类会生成一张虚函数表，表里存放该类所有虚函数的地址。对象内部藏一个 vptr（虚表指针）指向这张表。**每个类一张表，每个对象一个指针**。调用虚函数 = 通过 vptr 找到表 → 取函数地址 → 调用。这也解释了为什么虚函数有轻微的性能开销。"
        },
        {
          'type': "h",
          'text': "Q3：为什么析构函数要声明为 virtual？"
        },
        {
          'type': "p",
          'text': "当用基类指针 delete 派生类对象时，如果析构不是虚函数，只调用基类析构，派生类资源泄漏。声明为 virtual 后，delete 按对象真实类型先调派生类析构、再调基类析构，资源完整释放。**凡是作为基类使用的类，析构必须 virtual**。"
        },
        {
          'type': "h",
          'text': "Q4：抽象类和接口的区别？"
        },
        {
          'type': "list",
          'items': [
            "含纯虚函数的类叫抽象类，不能实例化",
            "抽象类可以含有普通成员函数和数据成员",
            "C++ 没有 interface 关键字，纯虚函数类就相当于接口",
            "抽象类用于定义协议，子类必须实现所有纯虚函数"
          ]
        },
        {
          'type': "h",
          'text': "Q5：构造/析构顺序？"
        },
        {
          'type': "p",
          'text': "构造：先基类后派生类（成员按声明顺序初始化）。析构：先派生类后基类。注意**构造函数里调用虚函数不会触发动态绑定**（此时派生类还没构造好），这是面试常考的陷阱。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"面试题：面向对象与多态\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"面试题：面向对象与多态\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"面试题：面向对象与多态\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "多态 = 虚函数 + 虚表动态绑定",
            "每个类一张虚表，对象存虚表指针",
            "基类析构必须 virtual 防止资源泄漏",
            "抽象类不能实例化，纯虚函数 = 接口",
            "构造时调用虚函数不触发动态绑定"
          ]
        }
      ],
      'templates': [
        {
          'name': "虚表多态演示",
          'code': "#include <iostream>\nclass Animal {\npublic:\n    virtual void sound() { std::cout << \"...\" << std::endl; }\n    virtual ~Animal() {}\n};\nclass Cat : public Animal {\npublic:\n    void sound() override { std::cout << \"喵\" << std::endl; }\n};\nint main() {\n    Animal* a = new Cat();\n    a->sound();\n    delete a;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-78",
      'title': "面试题：内存、指针与引用",
      'summary': "堆栈区别、指针引用区别、智能指针、内存泄漏必考题。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "内存和指针是 C++ 的灵魂，也是面试最爱问的领域。这一章整理高频题与参考答案，帮你建立清晰的心智模型。"
        },
        {
          'type': "h",
          'text': "Q1：堆和栈的区别？"
        },
        {
          'type': "table",
          'head': [
            "对比项",
            "栈 Stack",
            "堆 Heap"
          ],
          'rows': [
            [
              "分配方式",
              "编译器自动分配/释放",
              "new/delete 手动管理"
            ],
            [
              "大小",
              "较小（默认几 MB）",
              "较大（取决于内存）"
            ],
            [
              "速度",
              "快",
              "相对慢"
            ],
            [
              "生命周期",
              "随作用域自动结束",
              "手动控制，需自己释放"
            ],
            [
              "典型",
              "局部变量、函数参数",
              "动态数组、大对象"
            ]
          ]
        },
        {
          'type': "h",
          'text': "Q2：指针和引用的区别？"
        },
        {
          'type': "list",
          'items': [
            "指针存地址，可重新指向、可为空（nullptr）；引用是别名，必须初始化、不可改绑、不能为空",
            "指针需要 * 解引用访问；引用直接当变量用",
            "参数传递优先用引用（安全）；表达可空、动态内存用指针",
            "指针 sizeof 是地址大小，引用 sizeof 是被引用对象大小"
          ]
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "指针引用对比代码",
          'code': "#include <iostream>\nint main() {\n    int x = 1, y = 2;\n    int *p = &x;\n    p = &y;          // 指针可以改指\n    int &r = x;\n    // r = y;        // 不是改绑，是把 y 的值赋给 x\n    std::cout << *p << \" \" << r << \" \" << x << std::endl;\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "Q3：unique_ptr / shared_ptr / weak_ptr 区别？"
        },
        {
          'type': "list",
          'items': [
            "unique_ptr：独占所有权，不能拷贝只能移动，性能最好",
            "shared_ptr：共享所有权，引用计数归零才释放",
            "weak_ptr：不增加计数，用于打破循环引用，用 lock() 升级使用",
            "优先用 make_unique / make_shared 创建"
          ]
        },
        {
          'type': "h",
          'text': "Q4：什么是内存泄漏？如何避免？"
        },
        {
          'type': "p",
          'text': "分配的内存始终未释放。避免：优先 RAII（vector、string、智能指针）；new 出来的资源交给 RAII 对象；避免 shared_ptr 循环引用；检测用 Valgrind / VS 泄漏检测。"
        },
        {
          'type': "h",
          'text': "Q5：什么是悬空指针 / 悬空引用？"
        },
        {
          'type': "p",
          'text': "指向的内存已被释放或对象已销毁，再访问就是未定义行为。常见于返回局部变量地址、delete 后未置空指针、引用被 move 的对象。解决：用完置空、不返回局部地址、用智能指针管理生命周期。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"面试题：内存、指针与引用\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"面试题：内存、指针与引用\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"面试题：内存、指针与引用\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "栈自动管理快而小，堆手动管理慢而大",
            "指针可空可改指，引用必须初始化不可改绑",
            "unique_ptr 独占、shared_ptr 计数、weak_ptr 破环",
            "内存泄漏预防优先：RAII + 智能指针",
            "悬空指针/引用访问是未定义行为"
          ]
        }
      ],
      'templates': [
        {
          'name': "智能指针三兄弟",
          'code': "#include <iostream>\n#include <memory>\nint main() {\n    auto u = std::make_unique<int>(1);\n    auto s = std::make_shared<int>(2);\n    std::weak_ptr<int> w = s;\n    std::cout << *u << \" \" << *s << std::endl;\n    if (auto sp = w.lock()) std::cout << \"weak 可用：\" << *sp << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-79",
      'title': "面试题：STL 与模板",
      'summary': "容器底层、迭代器失效、模板与函数对象高频题。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "STL 和模板是 C++ 进阶的试金石。这一章把面试中关于容器的底层、迭代器、模板的高频题整理出来，边答边学。"
        },
        {
          'type': "h",
          'text': "Q1：vector 底层怎么实现？扩容策略？"
        },
        {
          'type': "p",
          'text': "vector 底层是**连续内存的动态数组**，内部维护三个指针（起始、当前末尾、容量末尾）。容量不足时申请更大的内存（常见策略是翻倍），把旧元素**搬移**过去，再释放旧内存。所以 push_back 均摊 O(1)，但扩容瞬间有 O(n) 开销。"
        },
        {
          'type': "h",
          'text': "Q2：什么是迭代器失效？哪些操作会导致？"
        },
        {
          'type': "p",
          'text': "容器结构被修改后，旧迭代器可能不再有效。vector 的 insert/erase/push_back 可能导致迭代器失效（扩容后地址变）；map/set 的 erase 会使被删元素的迭代器失效；list 修改一般不失效（引用仍有效）。遍历中删除要用返回值更新迭代器。"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "遍历中安全删除",
          'code': "#include <iostream>\n#include <map>\nint main() {\n    std::map<int, int> m = {{1, 1}, {2, 2}, {3, 3}, {4, 4}};\n    for (auto it = m.begin(); it != m.end(); ) {\n        if (it->second % 2 == 0) {\n            it = m.erase(it);   // erase 返回下一个迭代器\n        } else {\n            ++it;\n        }\n    }\n    for (auto &kv : m) std::cout << kv.first << \" \";\n    std::cout << std::endl;\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "Q3：map 和 unordered_map 底层与选择？"
        },
        {
          'type': "p",
          'text': "map 用红黑树（平衡二叉树），按键有序，查找 O(log n)；unordered_map 用哈希表，无序，平均查找 O(1)。需要有序遍历、范围查询用 map；只求查找速度用 unordered_map。哈希表的代价是额外空间和 key 需要可哈希。"
        },
        {
          'type': "h",
          'text': "Q4：模板和宏的区别？"
        },
        {
          'type': "list",
          'items': [
            "模板有类型检查、支持任意类型、可读性好",
            "宏是文本替换、无类型检查、容易出错、难以调试",
            "模板在编译期实例化，能参与重载决议",
            "现代 C++ 用模板/constexpr 替代宏做类型安全操作"
          ]
        },
        {
          'type': "h",
          'text': "Q5：为什么类模板通常写在头文件？"
        },
        {
          'type': "p",
          'text': "模板是编译期按需实例化，编译器必须看到完整定义才能生成代码。如果把实现放 .cpp，别的文件实例化时看不到定义，链接时报未定义引用。所以类模板的定义通常直接放在头文件。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"面试题：STL 与模板\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"面试题：STL 与模板\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"面试题：STL 与模板\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "vector 是连续动态数组，容量不足翻倍搬移",
            "vector 修改结构会让迭代器失效",
            "遍历删除用 erase 返回的新迭代器",
            "map 有序 O(log n)，unordered_map 无序 O(1)",
            "类模板实现放头文件"
          ]
        }
      ],
      'templates': [
        {
          'name': "模板安全删除",
          'code': "#include <iostream>\n#include <vector>\nint main() {\n    std::vector<int> v = {1, 2, 3, 4, 5, 6};\n    auto it = v.begin();\n    while (it != v.end()) {\n        if (*it % 2 == 0) {\n            it = v.erase(it);\n        } else {\n            ++it;\n        }\n    }\n    for (int x : v) std::cout << x << \" \";\n    std::cout << std::endl;\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "cp-80",
      'title': "面试题：综合与经典编程题",
      'summary': "字符串、链表、经典算法题与解答，最后一战。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "最后一章，把前面学的一切用在经典编程题上。这些题在笔试和面试手撕环节非常常见，每一道都值得亲自动手写一遍。"
        },
        {
          'type': "h",
          'text': "经典题 1：反转字符串"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "双指针反转",
          'code': "#include <iostream>\n#include <string>\n#include <algorithm>\nint main() {\n    std::string s = \"hello\";\n    std::reverse(s.begin(), s.end());   // 一行搞定\n    std::cout << s << std::endl;  // olleh\n    // 手写版：双指针\n    std::string t = \"abcde\";\n    int i = 0, j = t.size() - 1;\n    while (i < j) {\n        std::swap(t[i], t[j]);\n        i++; j--;\n    }\n    std::cout << t << std::endl;  // edcba\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "经典题 2：判断回文"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "回文判断",
          'code': "#include <iostream>\n#include <string>\nbool isPalindrome(const std::string &s) {\n    int i = 0, j = s.size() - 1;\n    while (i < j) {\n        if (s[i] != s[j]) return false;\n        i++; j--;\n    }\n    return true;\n}\nint main() {\n    std::cout << isPalindrome(\"racecar\") << std::endl;  // 1\n    std::cout << isPalindrome(\"hello\") << std::endl;    // 0\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "经典题 3：斐波那契数列"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "递归与迭代",
          'code': "#include <iostream>\nlong long fib(int n) {\n    if (n <= 1) return n;\n    long long a = 0, b = 1;\n    for (int i = 2; i <= n; i++) {\n        long long c = a + b;\n        a = b;\n        b = c;\n    }\n    return b;\n}\nint main() {\n    for (int i = 0; i <= 10; i++) {\n        std::cout << fib(i) << \" \";\n    }\n    std::cout << std::endl;  // 0 1 1 2 3 5 8 13 21 34 55\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "经典题 4：两数之和（哈希）"
        },
        {
          'type': "code",
          'lang': "cpp",
          'title': "用 unordered_map 找两数之和",
          'code': "#include <iostream>\n#include <unordered_map>\n#include <vector>\nstd::vector<int> twoSum(std::vector<int> &nums, int target) {\n    std::unordered_map<int, int> seen;\n    for (int i = 0; i < (int)nums.size(); i++) {\n        int need = target - nums[i];\n        if (seen.count(need)) {\n            return {seen[need], i};\n        }\n        seen[nums[i]] = i;\n    }\n    return {};\n}\nint main() {\n    std::vector<int> nums = {2, 7, 11, 15};\n    auto r = twoSum(nums, 9);\n    std::cout << r[0] << \" \" << r[1] << std::endl;  // 0 1\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "面试技巧小结"
        },
        {
          'type': "list",
          'items': [
            "先和面试官确认题意和边界（空输入、超大输入）",
            "先讲思路和复杂度，再动手写代码",
            "写完主动检查边界情况，说出潜在问题",
            "空间换时间：哈希表是两数之和等题的核心手法",
            "不会时坦诚说明思路，别硬编"
          ]
        },
        {
          'type': "tip",
          'title': "恭喜完成 80 章",
          'text': "到这里，你已从『下载安装』走到了『面试手撕代码』。语言只是工具，接下来多写项目、多看高质量源码（如 STL 实现），你会越来越强。这套课程到这里画上句号，但你的编程之路刚刚开始。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"面试题：综合与经典编程题\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"面试题：综合与经典编程题\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"面试题：综合与经典编程题\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "反转字符串：双指针或 std::reverse",
            "回文判断：头尾双指针比较",
            "斐波那契：迭代比递归更高效",
            "两数之和：哈希表空间换时间",
            "面试先讲思路和复杂度，再写代码"
          ]
        }
      ],
      'templates': [
        {
          'name': "经典综合练习",
          'code': "#include <iostream>\n#include <string>\nbool isPalindrome(const std::string &s) {\n    int i = 0, j = s.size() - 1;\n    while (i < j) {\n        if (s[i] != s[j]) return false;\n        i++; j--;\n    }\n    return true;\n}\nint main() {\n    std::string tests[] = {\"aba\", \"abba\", \"abc\", \"a\"};\n    for (auto &t : tests) {\n        std::cout << t << \" -> \" << (isPalindrome(t) ? \"回文\" : \"不是\") << std::endl;\n    }\n    return 0;\n}"
        }
      ]
    }
  ]
});

