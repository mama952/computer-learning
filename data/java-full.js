/* ============================================================
   计算机知识库 · 数据：Java 完整课程（80 章，从下载安装到进阶）
   ============================================================ */
window.LANGUAGE_EXTRA = window.LANGUAGE_EXTRA || [];
window.LANGUAGE_EXTRA.push({
  'id': "java",
  'name': "Java",
  'icon': "Jv",
  'tagline': "企业级开发首选语言，从下载安装到进阶实战的 80 章完整课程。",
  'intro': "这是一套从零开始的 Java 完整课程。第 1 章教你下载安装 JDK，之后每一章都从大白话讲起，配可运行的示例代码和编辑器模板。学完这套课程，你将掌握 Java 的语法、面向对象、集合框架、IO 流、多线程、网络编程、数据库操作、Lambda 与 Stream 流、模块化与反射等核心知识，足以应对企业级后端开发的日常需求。",
  'meta': {
    "难度": "从零到进阶",
    "章节": "80 章",
    "场景": "企业后端/Android/大数据"
  },
  'lessons': [
    {
      'id': "jv-1",
      'title': "下载与安装 JDK（零基础第一步）",
      'summary': "到 Adoptium 官网下载、配置环境变量、验证版本，三步装好 Java。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "学习 Java 的第一步，是把 JDK（Java Development Kit）装到你的电脑上。JDK 是 Java 的开发工具包，里面包含了编译器和运行环境。别担心，这一步非常简单，跟着做就能完成。Adoptium（原 AdoptOpenJDK）提供完全免费的开源 JDK，支持 Windows、macOS、Linux 三大系统。"
        },
        {
          'type': "h",
          'text': "第一步：下载 JDK"
        },
        {
          'type': "list",
          'items': [
            "打开 Adoptium 官网下载页：<a href='https://adoptium.net/temurin/releases/' target='_blank' rel='noopener'>https://adoptium.net/temurin/releases/</a>",
            "选择最新 LTS 版本（如 Temurin 21 LTS 或 17 LTS），LTS 代表长期支持版",
            "Windows 用户选择 .msi 安装包（64 位）或 .zip 压缩包",
            "macOS 用户选择 .pkg 或 .tar.gz 包",
            "Linux 用户选择 .tar.gz 包或用包管理器安装"
          ]
        },
        {
          'type': "h",
          'text': "第二步：安装 JDK"
        },
        {
          'type': "p",
          'text': "双击下载好的 .msi 安装包，一路点 Next 即可。安装完成后，需要配置环境变量，让系统知道 Java 装在哪里。Windows 上的操作是：右键此电脑 → 属性 → 高级系统设置 → 环境变量。"
        },
        {
          'type': "list",
          'items': [
            "新建系统变量 JAVA_HOME，值为 JDK 安装路径，例如 C:\\Program Files\\Eclipse Adoptium\\jdk-21.0.2.13-hotspot",
            "编辑 Path 变量，添加 %JAVA_HOME%\\bin",
            "点击确定保存所有设置"
          ]
        },
        {
          'type': "warn",
          'title': "新手第一大坑",
          'text': "很多新手装完发现命令行输入 java 或 javac 没反应，原因就是忘了配置 Path 环境变量，或者配置错了路径。如果遇到这种情况，检查 JAVA_HOME 路径是否正确，然后重新打开命令行窗口。"
        },
        {
          'type': "h",
          'text': "第三步：验证安装"
        },
        {
          'type': "code",
          'lang': "java",
          'title': "第一个 Java 程序",
          'code': "public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n        System.out.println(\"安装成功，我开始学 Java 了！\");\n    }\n}"
        },
        {
          'type': "p",
          'text': "在电脑上按 Win+R，输入 cmd 回车打开命令行，输入 java -version，如果显示类似 openjdk version \"21.0.2\" 的版本号，就说明安装成功了！然后输入 javac -version 验证编译器。把上面的代码保存为 HelloWorld.java，运行 javac HelloWorld.java 编译，再运行 java HelloWorld 执行。"
        },
        {
          'type': "tip",
          'title': "顺手装个好编辑器",
          'text': "推荐安装 VS Code（完全免费）：<a href='https://code.visualstudio.com' target='_blank' rel='noopener'>code.visualstudio.com</a>。装好后在扩展商店搜 Extension Pack for Java 并安装，写 Java 代码就有自动补全、编译和运行功能了。也可以使用 IntelliJ IDEA Community 版（免费）。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"下载与安装 JDK（零基础第一步）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"下载与安装 JDK（零基础第一步）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"下载与安装 JDK（零基础第一步）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "JDK 下载地址是 adoptium.net，完全免费开源",
            "安装后必须配置 JAVA_HOME 和 Path 环境变量",
            "cmd 里运行 java -version 和 javac -version 验证",
            "用 javac 编译 .java 文件，用 java 运行 .class 文件",
            "推荐 VS Code + Extension Pack for Java 或 IntelliJ IDEA"
          ]
        }
      ],
      'templates': [
        {
          'name': "Hello Java",
          'code': "public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n        System.out.println(\"我要学会编程！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-2",
      'title': "第一个程序与 main 方法",
      'summary': "理解 Java 程序的结构，从 main 方法开始执行。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "Java 程序必须有一个入口方法——main 方法。当你运行 java 类名 时，JVM 会从这个类的 main 方法开始执行。Java 是一切皆类的语言，所有代码都写在类里面。"
        },
        {
          'type': "code",
          'lang': "java",
          'title': "Java 程序基本结构",
          'code': "public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"你好，世界！\");\n        System.out.println(\"我的第一个 Java 程序\");\n    }\n}"
        },
        {
          'type': "p",
          'text': "逐行解释：public class HelloWorld 声明了一个公开的类，类名必须和文件名一致（HelloWorld.java）。public static void main(String[] args) 是固定的入口写法。System.out.println() 用于向控制台输出一行文字并换行。"
        },
        {
          'type': "h",
          'text': "System.out 的几种输出方式"
        },
        {
          'type': "code",
          'lang': "java",
          'title': "print 和 println 的区别",
          'code': "public class PrintDemo {\n    public static void main(String[] args) {\n        System.out.print(\"这是print\");\n        System.out.print(\"还在同一行\");\n        System.out.println();\n        System.out.println(\"这是println\");\n        System.out.println(\"下一行\");\n        System.out.printf(\"姓名：%s，年龄：%d%n\", \"小明\", 10);\n    }\n}"
        },
        {
          'type': "info",
          'title': "字符串必须用双引号",
          'text': "Java 中的字符串必须用双引号包裹。单引号表示字符（char），两者不同。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"第一个程序与 main 方法\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"第一个程序与 main 方法\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"第一个程序与 main 方法\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Java 程序从 main 方法开始执行",
            "public class 类名 必须和文件名一致",
            "System.out.println() 输出并换行",
            "System.out.print() 输出不换行",
            "System.out.printf() 格式化输出"
          ]
        }
      ],
      'templates': [
        {
          'name': "自我介绍",
          'code': "public class Intro {\n    public static void main(String[] args) {\n        System.out.println(\"大家好！\");\n        System.out.println(\"我叫小明\");\n        System.out.println(\"我今年10岁\");\n        System.out.println(\"我正在学Java\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-3",
      'title': "注释：让代码更易读",
      'summary': "单行注释、多行注释、文档注释三种写法，Java 都会忽略它们。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "注释是写在代码里的说明文字，Java 编译器会完全忽略它们。写注释是优秀程序员的习惯，能帮助自己和别人理解代码的意图。"
        },
        {
          'type': "code",
          'lang': "java",
          'title': "三种注释写法",
          'code': "public class CommentDemo {\n    public static void main(String[] args) {\n        // 这是单行注释\n        System.out.println(\"代码在运行\");\n        /*\n           这是多行注释\n        */\n        System.out.println(\"多行注释被忽略了\");\n        /**\n         * 这是文档注释\n         * 用 javadoc 可以生成API文档\n         */\n        System.out.println(\"文档注释也可用于生成API文档\");\n    }\n}"
        },
        {
          'type': "p",
          'text': "单行注释用 //，适合简短说明。多行注释用 /* ... */，适合大段说明。文档注释用 /** ... */，可以用 javadoc 工具生成 HTML 文档。"
        },
        {
          'type': "tip",
          'title': "注释写什么",
          'text': "好的注释解释为什么这么做，而不是重复代码在做什么。比如 // 用二分查找提高速度 比 // 查找 更有价值。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"注释：让代码更易读\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"注释：让代码更易读\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"注释：让代码更易读\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "// 单行注释，/* */ 多行注释，/** */ 文档注释",
            "注释帮助理解代码，是良好习惯",
            "文档注释可用 javadoc 生成 API 文档",
            "注释应解释为什么而非重复代码"
          ]
        }
      ],
      'templates': [
        {
          'name': "带注释的示例",
          'code': "public class CommentDemo {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 3;\n        int result = a + b;\n        System.out.println(\"结果是：\" + result);\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-4",
      'title': "变量与数据类型",
      'summary': "Java 是强类型语言，变量必须先声明类型再使用。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "变量就像贴了标签的盒子，你可以把数据放进去，然后通过标签（变量名）随时取用。Java 是强类型语言，每个变量在声明时必须指定类型，而且一旦声明就不能改变类型。"
        },
        {
          'type': "code",
          'lang': "java",
          'title': "变量声明与赋值",
          'code': "public class VariableDemo {\n    public static void main(String[] args) {\n        int age;\n        age = 10;\n        String name = \"小明\";\n        double height = 1.45;\n        boolean isStudent = true;\n        System.out.println(name);\n        System.out.println(\"年龄：\" + age);\n        System.out.println(\"身高：\" + height);\n        System.out.println(\"是学生吗：\" + isStudent);\n    }\n}"
        },
        {
          'type': "h",
          'text': "基本数据类型"
        },
        {
          'type': "table",
          'head': [
            "类型",
            "名称",
            "大小",
            "取值范围",
            "示例"
          ],
          'rows': [
            [
              "byte",
              "字节",
              "1字节",
              "-128~127",
              "byte b = 100;"
            ],
            [
              "short",
              "短整型",
              "2字节",
              "-32768~32767",
              "short s = 2000;"
            ],
            [
              "int",
              "整型",
              "4字节",
              "约±21亿",
              "int i = 100000;"
            ],
            [
              "long",
              "长整型",
              "8字节",
              "很大",
              "long l = 100L;"
            ],
            [
              "float",
              "单精度浮点",
              "4字节",
              "约±3.4E38",
              "float f = 3.14f;"
            ],
            [
              "double",
              "双精度浮点",
              "8字节",
              "约±1.8E308",
              "double d = 3.14;"
            ],
            [
              "char",
              "字符",
              "2字节",
              "0~65535",
              "char c = 'A';"
            ],
            [
              "boolean",
              "布尔",
              "1位",
              "true/false",
              "boolean b = true;"
            ]
          ]
        },
        {
          'type': "h",
          'text': "变量命名规则"
        },
        {
          'type': "list",
          'items': [
            "只能由字母、数字、下划线 _、美元符号 $ 组成，且不能以数字开头",
            "不能使用 Java 关键字（如 public、class、int、if 等）",
            "区分大小写：age 和 Age 是两个不同变量",
            "推荐使用驼峰命名：myName、userAge（首字母小写，后续单词首字母大写）"
          ]
        },
        {
          'type': "code",
          'lang': "java",
          'title': "变量的重新赋值与常量",
          'code': "public class AssignDemo {\n    public static void main(String[] args) {\n        int count = 1;\n        System.out.println(count);\n        count = 2;\n        System.out.println(count);\n        count = count + 1;\n        System.out.println(count);\n        final double PI = 3.14159;\n        System.out.println(PI);\n    }\n}"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"变量与数据类型\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"变量与数据类型\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"变量与数据类型\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Java 是强类型语言，变量必须声明类型",
            "8 种基本类型：byte/short/int/long/float/double/char/boolean",
            "long 字面量加 L，float 加 f",
            "命名用驼峰命名法，不能数字开头",
            "final 修饰的常量不可修改"
          ]
        }
      ],
      'templates': [
        {
          'name': "个人信息变量",
          'code': "public class Info {\n    public static void main(String[] args) {\n        String name = \"小红\";\n        int age = 9;\n        String city = \"上海\";\n        System.out.println(name + \"住在\" + city);\n        System.out.println(\"今年\" + age + \"岁\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-5",
      'title': "基本类型运算与类型转换",
      'summary': "算术运算、赋值运算、类型转换，掌握 Java 的计算能力。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "Java 支持各种数学运算，但不同数据类型之间运算时需要注意类型转换。Java 的整数运算和浮点数运算有各自的规则。"
        },
        {
          'type': "code",
          'lang': "java",
          'title': "基本算术运算",
          'code': "public class CalcDemo {\n    public static void main(String[] args) {\n        int a = 10, b = 3;\n        System.out.println(\"a + b = \" + (a + b));\n        System.out.println(\"a - b = \" + (a - b));\n        System.out.println(\"a * b = \" + (a * b));\n        System.out.println(\"a / b = \" + (a / b));\n        System.out.println(\"a % b = \" + (a % b));\n        double c = 10.0, d = 3.0;\n        System.out.println(\"c / d = \" + (c / d));\n    }\n}"
        },
        {
          'type': "h",
          'text': "类型转换"
        },
        {
          'type': "p",
          'text': "自动类型转换（隐式转换）：小类型转大类型自动完成，如 int 转 double。强制类型转换（显式转换）：大类型转小类型需要手动加 (类型)，可能丢失精度。"
        },
        {
          'type': "code",
          'lang': "java",
          'title': "自动转换与强制转换",
          'code': "public class CastDemo {\n    public static void main(String[] args) {\n        int i = 10;\n        double d = i;\n        System.out.println(d);\n        double pi = 3.14159;\n        int n = (int) pi;\n        System.out.println(n);\n        int a = 5;\n        double b = 2.5;\n        double result = a + b;\n        System.out.println(result);\n    }\n}"
        },
        {
          'type': "warn",
          'title': "整数除法陷阱",
          'text': "两个整数相除结果也是整数，小数部分被直接丢弃！比如 5 / 2 结果是 2 而不是 2.5。想得到小数，至少一个操作数要写成浮点数：5 / 2.0 或 (double)5 / 2。"
        },
        {
          'type': "h",
          'text': "赋值运算符简写"
        },
        {
          'type': "code",
          'lang': "java",
          'title': "复合赋值运算符",
          'code': "public class OpDemo {\n    public static void main(String[] args) {\n        int x = 10;\n        x += 5;\n        x -= 3;\n        x *= 2;\n        x /= 4;\n        x %= 5;\n        System.out.println(x);\n        int a = 1;\n        a++;\n        ++a;\n        a--;\n        System.out.println(a);\n    }\n}"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"基本类型运算与类型转换\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"基本类型运算与类型转换\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"基本类型运算与类型转换\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "整数除法丢掉小数部分，需用浮点数",
            "小类型自动转大类型，大转小要强制转换",
            "强制转换 (类型) 可能丢失精度",
            "+=、-=、*=、/=、%= 是复合赋值",
            "++ 和 -- 是自增自减运算符"
          ]
        }
      ],
      'templates': [
        {
          'name': "温度转换",
          'code': "public class TempConvert {\n    public static void main(String[] args) {\n        double celsius = 25.0;\n        double fahrenheit = celsius * 9.0 / 5.0 + 32.0;\n        System.out.println(celsius + \"℃ = \" + fahrenheit + \"℉\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-6",
      'title': "字符串 String 详解",
      'summary': "字符串拼接、常用方法、不可变性，Java 字符串一网打尽。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "字符串是 Java 中最常用的引用类型。String 类提供了丰富的操作方法，但注意字符串是不可变的——每次修改都会创建新对象。"
        },
        {
          'type': "code",
          'lang': "java",
          'title': "字符串创建与拼接",
          'code': "public class StringDemo {\n    public static void main(String[] args) {\n        String s1 = \"Hello\";\n        String name = \"小明\";\n        int age = 10;\n        String msg = name + \"今年\" + age + \"岁\";\n        System.out.println(msg);\n        String hello = \"你好\";\n        String result = hello.concat(\"，世界\");\n        System.out.println(result);\n    }\n}"
        },
        {
          'type': "h",
          'text': "常用字符串方法"
        },
        {
          'type': "code",
          'lang': "java",
          'title': "字符串常用方法",
          'code': "public class StringMethods {\n    public static void main(String[] args) {\n        String s = \"  Hello World  \";\n        System.out.println(s.length());\n        System.out.println(s.trim());\n        System.out.println(s.replace(\"World\", \"Java\"));\n        System.out.println(s.toUpperCase());\n        System.out.println(s.toLowerCase());\n        String s2 = \"hello,world,java\";\n        String[] parts = s2.split(\",\");\n        for (String part : parts) {\n            System.out.println(part);\n        }\n        System.out.println(s2.contains(\"world\"));\n        System.out.println(s2.startsWith(\"hello\"));\n        System.out.println(s2.endsWith(\"java\"));\n    }\n}"
        },
        {
          'type': "h",
          'text': "字符串不可变性"
        },
        {
          'type': "code",
          'lang': "java",
          'title': "不可变性的演示",
          'code': "public class ImmutableDemo {\n    public static void main(String[] args) {\n        String s = \"Hello\";\n        s.toUpperCase();\n        System.out.println(s);\n        String upper = s.toUpperCase();\n        System.out.println(upper);\n    }\n}"
        },
        {
          'type': "info",
          'title': "字符串比较用 equals",
          'text': "比较两个字符串内容是否相等，必须用 equals() 方法，不能用 ==。== 比较的是引用地址，不是内容。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"字符串 String 详解\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"字符串 String 详解\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"字符串 String 详解\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "String 是不可变的，每次修改创建新对象",
            "拼接用 + 号或 concat 方法",
            "常用方法：length、trim、replace、split、contains",
            "比较内容用 equals()，不用 ==",
            "split 返回字符串数组"
          ]
        }
      ],
      'templates': [
        {
          'name': "名字处理",
          'code': "public class NameProcess {\n    public static void main(String[] args) {\n        String name = \"  xiao ming  \";\n        String cleaned = name.trim().toUpperCase();\n        System.out.println(\"处理结果：\" + cleaned);\n        System.out.println(\"长度：\" + cleaned.length());\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-7",
      'title': "Scanner 输入：让程序和人对话",
      'summary': "用 Scanner 读取用户输入，程序从此会听人说话。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "之前的程序只能输出固定内容。用 java.util.Scanner 可以让程序停下来等待用户输入。Scanner 可以读取字符串、整数、浮点数等不同类型的数据。"
        },
        {
          'type': "code",
          'lang': "java",
          'title': "获取用户输入",
          'code': "import java.util.Scanner;\n\npublic class InputDemo {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        System.out.print(\"请输入你的名字：\");\n        String name = scanner.nextLine();\n        System.out.print(\"请输入你的年龄：\");\n        int age = scanner.nextInt();\n        System.out.println(\"你好，\" + name + \"！你今年\" + age + \"岁。\");\n        scanner.close();\n    }\n}"
        },
        {
          'type': "p",
          'text': "Scanner(System.in) 创建扫描器，System.in 代表标准输入（键盘）。nextLine() 读取整行字符串，nextInt() 读取整数，nextDouble() 读取浮点数。"
        },
        {
          'type': "warn",
          'title': "nextInt 后的换行问题",
          'text': "用 nextInt() 读完数字后，数字后面的换行符还留在输入缓冲区里。如果紧接着调用 nextLine()，会直接读到空字符串。解决办法是在 nextInt 后面加一个 scanner.nextLine() 吃掉换行符。"
        },
        {
          'type': "code",
          'lang': "java",
          'title': "正确处理 nextInt 后的换行",
          'code': "import java.util.Scanner;\n\npublic class InputFix {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"输入年龄：\");\n        int age = sc.nextInt();\n        sc.nextLine();\n        System.out.print(\"输入名字：\");\n        String name = sc.nextLine();\n        System.out.println(name + \"今年\" + age + \"岁\");\n        sc.close();\n    }\n}"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Scanner 输入：让程序和人对话\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Scanner 输入：让程序和人对话\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Scanner 输入：让程序和人对话\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Scanner 用于读取用户输入，需 import java.util.Scanner",
            "nextLine() 读字符串，nextInt() 读整数，nextDouble() 读浮点数",
            "nextInt() 后的换行符要用 nextLine() 吃掉",
            "用完记得 close() 关闭资源"
          ]
        }
      ],
      'templates': [
        {
          'name': "打招呼程序",
          'code': "import java.util.Scanner;\n\npublic class Greet {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"请问怎么称呼？\");\n        String name = sc.nextLine();\n        System.out.println(\"欢迎你，\" + name + \"！开始学习Java吧\");\n        sc.close();\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-8",
      'title': "条件判断 if / else if / else",
      'summary': "让程序根据条件走不同的路，逻辑从此活起来。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "if 语句让程序能够判断：满足条件就执行一段代码，不满足就执行另一段。这是编程最核心的逻辑之一。Java 的条件判断语法和 C 语言类似，用花括号 {} 表示代码块。"
        },
        {
          'type': "code",
          'lang': "java",
          'title': "if / else 基本用法",
          'code': "public class IfDemo {\n    public static void main(String[] args) {\n        int score = 85;\n        if (score >= 60) {\n            System.out.println(\"及格了！\");\n        } else {\n            System.out.println(\"不及格，继续加油\");\n        }\n    }\n}"
        },
        {
          'type': "code",
          'lang': "java",
          'title': "if / else if / else 多分支",
          'code': "public class IfElseDemo {\n    public static void main(String[] args) {\n        int score = 88;\n        if (score >= 90) {\n            System.out.println(\"优秀\");\n        } else if (score >= 80) {\n            System.out.println(\"良好\");\n        } else if (score >= 60) {\n            System.out.println(\"及格\");\n        } else {\n            System.out.println(\"不及格\");\n        }\n    }\n}"
        },
        {
          'type': "h",
          'text': "比较运算符与逻辑运算符"
        },
        {
          'type': "table",
          'head': [
            "运算符",
            "含义",
            "示例"
          ],
          'rows': [
            [
              "==",
              "等于",
              "a == b"
            ],
            [
              "!=",
              "不等于",
              "a != b"
            ],
            [
              ">",
              "大于",
              "a > b"
            ],
            [
              "<",
              "小于",
              "a < b"
            ],
            [
              ">=",
              "大于等于",
              "a >= b"
            ],
            [
              "<=",
              "小于等于",
              "a <= b"
            ],
            [
              "&&",
              "逻辑与（且）",
              "a > 0 && b > 0"
            ],
            [
              "||",
              "逻辑或（或）",
              "a > 0 || b > 0"
            ],
            [
              "!",
              "逻辑非（取反）",
              "!isOk"
            ]
          ]
        },
        {
          'type': "code",
          'lang': "java",
          'title': "逻辑运算符实际应用",
          'code': "public class LogicDemo {\n    public static void main(String[] args) {\n        int age = 18;\n        boolean hasId = true;\n        if (age >= 18 && hasId) {\n            System.out.println(\"可以进入网吧\");\n        }\n        if (age < 18 || hasId) {\n            System.out.println(\"至少满足一个条件\");\n        }\n        if (!false) {\n            System.out.println(\"!false 是 true\");\n        }\n    }\n}"
        },
        {
          'type': "warn",
          'title': "= 和 == 别混淆",
          'text': "Java 中 = 是赋值，== 是相等比较。新手常犯的错误是在 if 条件里写 if (a = 5)，这在 Java 中会编译报错，反而是一种保护。"
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
            "if/else if/else 实现多分支判断",
            "比较用 ==、!=、>、< 等，逻辑用 &&、||、!",
            "花括号 {} 表示代码块，建议即使单行也加花括号",
            "= 是赋值，== 才是相等比较"
          ]
        }
      ],
      'templates': [
        {
          'name': "成绩等级判断",
          'code': "import java.util.Scanner;\n\npublic class ScoreLevel {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"输入成绩：\");\n        int score = sc.nextInt();\n        if (score >= 90) {\n            System.out.println(\"优秀\");\n        } else if (score >= 80) {\n            System.out.println(\"良好\");\n        } else if (score >= 60) {\n            System.out.println(\"及格\");\n        } else {\n            System.out.println(\"不及格\");\n        }\n        sc.close();\n    }\n}"
        },
        {
          'name': "奇偶判断",
          'code': "import java.util.Scanner;\n\npublic class OddEven {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"输入一个整数：\");\n        int num = sc.nextInt();\n        if (num % 2 == 0) {\n            System.out.println(num + \" 是偶数\");\n        } else {\n            System.out.println(num + \" 是奇数\");\n        }\n        sc.close();\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-9",
      'title': "switch 分支语句",
      'summary': "switch 用于多路分支，比大量 if-else 更清晰。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "当需要判断的取值是固定的几个选项时（比如星期几、月份、菜单选项），用 switch 比写一堆 if-else 更清晰。Java 12+ 引入了 switch 表达式，写法更简洁。"
        },
        {
          'type': "code",
          'lang': "java",
          'title': "传统 switch 语句",
          'code': "public class SwitchDemo {\n    public static void main(String[] args) {\n        int day = 3;\n        String dayName;\n        switch (day) {\n            case 1: dayName = \"星期一\"; break;\n            case 2: dayName = \"星期二\"; break;\n            case 3: dayName = \"星期三\"; break;\n            case 4: dayName = \"星期四\"; break;\n            case 5: dayName = \"星期五\"; break;\n            default: dayName = \"周末\"; break;\n        }\n        System.out.println(dayName);\n    }\n}"
        },
        {
          'type': "warn",
          'title': "别忘了 break",
          'text': "每个 case 后面必须加 break，否则会穿透到下一个 case 继续执行。这叫 fall-through，有时故意利用，但新手容易忘记。"
        },
        {
          'type': "code",
          'lang': "java",
          'title': "switch 表达式（Java 14+）",
          'code': "public class SwitchExpr {\n    public static void main(String[] args) {\n        int day = 3;\n        String dayName = switch (day) {\n            case 1 -> \"星期一\";\n            case 2 -> \"星期二\";\n            case 3 -> \"星期三\";\n            case 4 -> \"星期四\";\n            case 5 -> \"星期五\";\n            default -> \"周末\";\n        };\n        System.out.println(dayName);\n        int month = 2;\n        int days = switch (month) {\n            case 1, 3, 5, 7, 8, 10, 12 -> 31;\n            case 4, 6, 9, 11 -> 30;\n            case 2 -> 28;\n            default -> 0;\n        };\n        System.out.println(month + \"月有\" + days + \"天\");\n    }\n}"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"switch 分支语句\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"switch 分支语句\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"switch 分支语句\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "switch 适合固定选项的多路分支",
            "传统 switch 每个 case 要加 break 避免穿透",
            "switch 表达式用 -> 更简洁，不需要 break",
            "default 处理未匹配的情况"
          ]
        }
      ],
      'templates': [
        {
          'name': "星期几",
          'code': "import java.util.Scanner;\n\npublic class Weekday {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"输入1-7：\");\n        int day = sc.nextInt();\n        String name = switch (day) {\n            case 1 -> \"星期一\";\n            case 2 -> \"星期二\";\n            case 3 -> \"星期三\";\n            case 4 -> \"星期四\";\n            case 5 -> \"星期五\";\n            case 6, 7 -> \"周末\";\n            default -> \"无效输入\";\n        };\n        System.out.println(name);\n        sc.close();\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-10",
      'title': "while 循环：重复做一件事",
      'summary': "while 让代码在条件满足时反复执行，注意别死循环。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "当我们需要反复执行某段代码时，就用循环。while 循环的逻辑是：只要条件为真，就一直执行循环体（花括号里的代码）。"
        },
        {
          'type': "code",
          'lang': "java",
          'title': "while 基本用法",
          'code': "public class WhileDemo {\n    public static void main(String[] args) {\n        int count = 1;\n        while (count <= 5) {\n            System.out.println(\"第\" + count + \"次循环\");\n            count++;\n        }\n        System.out.println(\"循环结束\");\n    }\n}"
        },
        {
          'type': "h",
          'text': "break：提前跳出循环"
        },
        {
          'type': "code",
          'lang': "java",
          'title': "break 终止循环",
          'code': "public class BreakDemo {\n    public static void main(String[] args) {\n        int count = 1;\n        while (true) {\n            System.out.println(\"计数：\" + count);\n            if (count >= 3) {\n                break;\n            }\n            count++;\n        }\n        System.out.println(\"跳出循环了\");\n    }\n}"
        },
        {
          'type': "h",
          'text': "continue：跳过本次"
        },
        {
          'type': "code",
          'lang': "java",
          'title': "continue 跳过本次循环",
          'code': "public class ContinueDemo {\n    public static void main(String[] args) {\n        int n = 0;\n        while (n < 6) {\n            n++;\n            if (n == 3) {\n                continue;\n            }\n            System.out.println(n);\n        }\n    }\n}"
        },
        {
          'type': "h",
          'text': "do-while 循环"
        },
        {
          'type': "code",
          'lang': "java",
          'title': "do-while 至少执行一次",
          'code': "public class DoWhileDemo {\n    public static void main(String[] args) {\n        int n = 1;\n        do {\n            System.out.println(\"至少执行一次：\" + n);\n            n++;\n        } while (n <= 5);\n    }\n}"
        },
        {
          'type': "warn",
          'title': "小心死循环",
          'text': "如果 while 的条件永远为真，且循环体里没有 break，程序就会一直运行下去。比如 while (true) {} 且没有 break。在开发中要确保循环条件最终会变为 false。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"while 循环：重复做一件事\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"while 循环：重复做一件事\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"while 循环：重复做一件事\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "while 条件为真就反复执行循环体",
            "break 跳出整个循环，continue 跳过本次",
            "do-while 至少执行一次循环体",
            "记得更新循环变量，避免死循环"
          ]
        }
      ],
      'templates': [
        {
          'name': "从1数到10",
          'code': "public class CountToTen {\n    public static void main(String[] args) {\n        int n = 1;\n        while (n <= 10) {\n            System.out.println(n);\n            n++;\n        }\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-11",
      'title': "for 循环：遍历与计数",
      'summary': "for 循环是最常用的循环方式，适合已知次数的遍历。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 for 循环：遍历与计数 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 for 循环：遍历与计数 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 for 循环：遍历与计数 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"for 循环：遍历与计数\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"for 循环：遍历与计数\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"for 循环：遍历与计数\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 for 循环：遍历与计数 的核心概念",
            "理解 for 循环：遍历与计数 的常见用法",
            "注意 for 循环：遍历与计数 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-12",
      'title': "数组：存储多个相同类型的数据",
      'summary': "数组声明、创建、遍历、常见操作，掌握 Java 的数组。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 数组：存储多个相同类型的数据 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 数组：存储多个相同类型的数据 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 数组：存储多个相同类型的数据 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"数组：存储多个相同类型的数据\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"数组：存储多个相同类型的数据\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"数组：存储多个相同类型的数据\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 数组：存储多个相同类型的数据 的核心概念",
            "理解 数组：存储多个相同类型的数据 的常见用法",
            "注意 数组：存储多个相同类型的数据 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-13",
      'title': "方法：把代码组织成可复用的单元",
      'summary': "定义方法、参数传递、返回值，让代码模块化。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 方法：把代码组织成可复用的单元 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 方法：把代码组织成可复用的单元 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 方法：把代码组织成可复用的单元 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"方法：把代码组织成可复用的单元\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"方法：把代码组织成可复用的单元\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"方法：把代码组织成可复用的单元\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 方法：把代码组织成可复用的单元 的核心概念",
            "理解 方法：把代码组织成可复用的单元 的常见用法",
            "注意 方法：把代码组织成可复用的单元 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-14",
      'title': "面向对象：类与对象",
      'summary': "理解类和对象的关系，面向对象是 Java 的核心思想。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 面向对象：类与对象 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 面向对象：类与对象 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 面向对象：类与对象 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"面向对象：类与对象\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"面向对象：类与对象\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"面向对象：类与对象\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 面向对象：类与对象 的核心概念",
            "理解 面向对象：类与对象 的常见用法",
            "注意 面向对象：类与对象 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-15",
      'title': "封装：private / getter / setter",
      'summary': "用 private 隐藏内部细节，用 getter/setter 控制访问。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 封装：private / getter / setter 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 封装：private / getter / setter 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 封装：private / getter / setter 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"封装：private / getter / setter\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"封装：private / getter / setter\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"封装：private / getter / setter\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 封装：private / getter / setter 的核心概念",
            "理解 封装：private / getter / setter 的常见用法",
            "注意 封装：private / getter / setter 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-16",
      'title': "继承：子类复用父类代码",
      'summary': "extends 让子类继承父类的属性和方法，实现代码复用。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 继承：子类复用父类代码 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 继承：子类复用父类代码 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 继承：子类复用父类代码 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"继承：子类复用父类代码\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"继承：子类复用父类代码\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"继承：子类复用父类代码\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 继承：子类复用父类代码 的核心概念",
            "理解 继承：子类复用父类代码 的常见用法",
            "注意 继承：子类复用父类代码 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-17",
      'title': "多态：同一个方法，不同表现",
      'summary': "父类引用指向子类对象，运行时动态调用子类方法。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 多态：同一个方法，不同表现 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 多态：同一个方法，不同表现 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 多态：同一个方法，不同表现 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"多态：同一个方法，不同表现\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"多态：同一个方法，不同表现\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"多态：同一个方法，不同表现\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 多态：同一个方法，不同表现 的核心概念",
            "理解 多态：同一个方法，不同表现 的常见用法",
            "注意 多态：同一个方法，不同表现 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-18",
      'title': "抽象类与抽象方法",
      'summary': "用 abstract 定义抽象类，强制子类实现特定方法。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 抽象类与抽象方法 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 抽象类与抽象方法 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 抽象类与抽象方法 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"抽象类与抽象方法\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"抽象类与抽象方法\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"抽象类与抽象方法\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 抽象类与抽象方法 的核心概念",
            "理解 抽象类与抽象方法 的常见用法",
            "注意 抽象类与抽象方法 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-19",
      'title': "接口：定义契约",
      'summary': "interface 定义行为规范，类用 implements 实现接口。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 接口：定义契约 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 接口：定义契约 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 接口：定义契约 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"接口：定义契约\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"接口：定义契约\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"接口：定义契约\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 接口：定义契约 的核心概念",
            "理解 接口：定义契约 的常见用法",
            "注意 接口：定义契约 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-20",
      'title': "static 关键字：静态成员",
      'summary': "static 成员属于类而不是对象，所有实例共享。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 static 关键字：静态成员 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 static 关键字：静态成员 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 static 关键字：静态成员 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"static 关键字：静态成员\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"static 关键字：静态成员\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"static 关键字：静态成员\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 static 关键字：静态成员 的核心概念",
            "理解 static 关键字：静态成员 的常见用法",
            "注意 static 关键字：静态成员 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-21",
      'title': "final 关键字：不可变",
      'summary': "final 修饰变量、方法、类，分别表示常量、不可重写、不可继承。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 final 关键字：不可变 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 final 关键字：不可变 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 final 关键字：不可变 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"final 关键字：不可变\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"final 关键字：不可变\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"final 关键字：不可变\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 final 关键字：不可变 的核心概念",
            "理解 final 关键字：不可变 的常见用法",
            "注意 final 关键字：不可变 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-22",
      'title': "包（package）和导入（import）",
      'summary': "用 package 组织类，用 import 引入其他包中的类。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 包（package）和导入（import） 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 包（package）和导入（import） 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 包（package）和导入（import） 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"包（package）和导入（import）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"包（package）和导入（import）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"包（package）和导入（import）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 包（package）和导入（import） 的核心概念",
            "理解 包（package）和导入（import） 的常见用法",
            "注意 包（package）和导入（import） 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-23",
      'title': "Java 常用类：Math、Random、日期时间",
      'summary': "掌握 Math 数学运算、Random 随机数、LocalDate/LocalTime 日期时间。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 Java 常用类：Math、Random、日期时间 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 Java 常用类：Math、Random、日期时间 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 Java 常用类：Math、Random、日期时间 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Java 常用类：Math、Random、日期时间\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Java 常用类：Math、Random、日期时间\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Java 常用类：Math、Random、日期时间\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 Java 常用类：Math、Random、日期时间 的核心概念",
            "理解 Java 常用类：Math、Random、日期时间 的常见用法",
            "注意 Java 常用类：Math、Random、日期时间 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-24",
      'title': "StringBuilder 与 StringBuffer",
      'summary': "StringBuilder 可变字符串，频繁拼接时比 String 高效。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 StringBuilder 与 StringBuffer 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 StringBuilder 与 StringBuffer 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 StringBuilder 与 StringBuffer 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"StringBuilder 与 StringBuffer\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"StringBuilder 与 StringBuffer\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"StringBuilder 与 StringBuffer\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 StringBuilder 与 StringBuffer 的核心概念",
            "理解 StringBuilder 与 StringBuffer 的常见用法",
            "注意 StringBuilder 与 StringBuffer 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-25",
      'title': "异常处理：try-catch-finally",
      'summary': "用 try-catch 捕获异常，让程序遇到错误不崩溃。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 异常处理：try-catch-finally 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 异常处理：try-catch-finally 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 异常处理：try-catch-finally 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"异常处理：try-catch-finally\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"异常处理：try-catch-finally\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"异常处理：try-catch-finally\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 异常处理：try-catch-finally 的核心概念",
            "理解 异常处理：try-catch-finally 的常见用法",
            "注意 异常处理：try-catch-finally 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-26",
      'title': "自定义异常与 throws",
      'summary': "创建自己的异常类，用 throws 声明可能抛出的异常。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 自定义异常与 throws 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 自定义异常与 throws 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 自定义异常与 throws 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"自定义异常与 throws\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"自定义异常与 throws\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"自定义异常与 throws\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 自定义异常与 throws 的核心概念",
            "理解 自定义异常与 throws 的常见用法",
            "注意 自定义异常与 throws 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-27",
      'title': "ArrayList：动态数组",
      'summary': "ArrayList 是长度可变的数组，自动扩容，增删改查都方便。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 ArrayList：动态数组 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 ArrayList：动态数组 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 ArrayList：动态数组 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"ArrayList：动态数组\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"ArrayList：动态数组\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"ArrayList：动态数组\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 ArrayList：动态数组 的核心概念",
            "理解 ArrayList：动态数组 的常见用法",
            "注意 ArrayList：动态数组 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-28",
      'title': "LinkedList：链表结构",
      'summary': "LinkedList 底层是双向链表，适合频繁插入删除操作。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 LinkedList：链表结构 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 LinkedList：链表结构 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 LinkedList：链表结构 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"LinkedList：链表结构\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"LinkedList：链表结构\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"LinkedList：链表结构\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 LinkedList：链表结构 的核心概念",
            "理解 LinkedList：链表结构 的常见用法",
            "注意 LinkedList：链表结构 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-29",
      'title': "HashSet：无序不重复集合",
      'summary': "HashSet 存储不重复元素，没有顺序，适合去重操作。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 HashSet：无序不重复集合 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 HashSet：无序不重复集合 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 HashSet：无序不重复集合 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"HashSet：无序不重复集合\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"HashSet：无序不重复集合\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"HashSet：无序不重复集合\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 HashSet：无序不重复集合 的核心概念",
            "理解 HashSet：无序不重复集合 的常见用法",
            "注意 HashSet：无序不重复集合 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-30",
      'title': "HashMap：键值对存储",
      'summary': "HashMap 存储键值对，通过键快速查找值，最常用的集合之一。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 HashMap：键值对存储 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 HashMap：键值对存储 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 HashMap：键值对存储 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"HashMap：键值对存储\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"HashMap：键值对存储\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"HashMap：键值对存储\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 HashMap：键值对存储 的核心概念",
            "理解 HashMap：键值对存储 的常见用法",
            "注意 HashMap：键值对存储 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-31",
      'title': "泛型（Generics）：类型参数化",
      'summary': "泛型让类和方法支持多种类型，编译时检查类型安全。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 泛型（Generics）：类型参数化 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 泛型（Generics）：类型参数化 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 泛型（Generics）：类型参数化 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"泛型（Generics）：类型参数化\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"泛型（Generics）：类型参数化\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"泛型（Generics）：类型参数化\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 泛型（Generics）：类型参数化 的核心概念",
            "理解 泛型（Generics）：类型参数化 的常见用法",
            "注意 泛型（Generics）：类型参数化 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-32",
      'title': "Collections 工具类",
      'summary': "Collections 提供了排序、查找、打乱等操作集合的静态方法。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 Collections 工具类 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 Collections 工具类 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 Collections 工具类 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Collections 工具类\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Collections 工具类\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Collections 工具类\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 Collections 工具类 的核心概念",
            "理解 Collections 工具类 的常见用法",
            "注意 Collections 工具类 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-33",
      'title': "Arrays 工具类与数组操作",
      'summary': "Arrays 提供了排序、查找、填充、比较等操作数组的静态方法。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 Arrays 工具类与数组操作 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 Arrays 工具类与数组操作 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 Arrays 工具类与数组操作 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Arrays 工具类与数组操作\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Arrays 工具类与数组操作\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Arrays 工具类与数组操作\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 Arrays 工具类与数组操作 的核心概念",
            "理解 Arrays 工具类与数组操作 的常见用法",
            "注意 Arrays 工具类与数组操作 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-34",
      'title': "Lambda 表达式入门",
      'summary': "Lambda 用简洁的语法表示函数式接口，Java 8 最重要的新特性。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 Lambda 表达式入门 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 Lambda 表达式入门 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 Lambda 表达式入门 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Lambda 表达式入门\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Lambda 表达式入门\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Lambda 表达式入门\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 Lambda 表达式入门 的核心概念",
            "理解 Lambda 表达式入门 的常见用法",
            "注意 Lambda 表达式入门 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-35",
      'title': "Stream 流：函数式数据处理",
      'summary': "Stream 用链式调用处理集合数据，filter/map/collect 是核心操作。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 Stream 流：函数式数据处理 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 Stream 流：函数式数据处理 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 Stream 流：函数式数据处理 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Stream 流：函数式数据处理\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Stream 流：函数式数据处理\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Stream 流：函数式数据处理\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 Stream 流：函数式数据处理 的核心概念",
            "理解 Stream 流：函数式数据处理 的常见用法",
            "注意 Stream 流：函数式数据处理 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-36",
      'title': "Optional：优雅处理空指针",
      'summary': "Optional 容器类避免 NullPointerException，让代码更安全。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 Optional：优雅处理空指针 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 Optional：优雅处理空指针 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 Optional：优雅处理空指针 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Optional：优雅处理空指针\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Optional：优雅处理空指针\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Optional：优雅处理空指针\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 Optional：优雅处理空指针 的核心概念",
            "理解 Optional：优雅处理空指针 的常见用法",
            "注意 Optional：优雅处理空指针 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-37",
      'title': "File 类与文件操作",
      'summary': "用 File 类操作文件和目录，创建、删除、遍历、判断。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 File 类与文件操作 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 File 类与文件操作 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 File 类与文件操作 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"File 类与文件操作\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"File 类与文件操作\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"File 类与文件操作\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 File 类与文件操作 的核心概念",
            "理解 File 类与文件操作 的常见用法",
            "注意 File 类与文件操作 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-38",
      'title': "字节流：InputStream / OutputStream",
      'summary': "用 FileInputStream 和 FileOutputStream 读写二进制文件。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 字节流：InputStream / OutputStream 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 字节流：InputStream / OutputStream 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 字节流：InputStream / OutputStream 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"字节流：InputStream / OutputStream\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"字节流：InputStream / OutputStream\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"字节流：InputStream / OutputStream\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 字节流：InputStream / OutputStream 的核心概念",
            "理解 字节流：InputStream / OutputStream 的常见用法",
            "注意 字节流：InputStream / OutputStream 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-39",
      'title': "字符流：Reader / Writer",
      'summary': "用 FileReader 和 FileWriter 读写文本文件，处理字符编码。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 字符流：Reader / Writer 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 字符流：Reader / Writer 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 字符流：Reader / Writer 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"字符流：Reader / Writer\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"字符流：Reader / Writer\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"字符流：Reader / Writer\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 字符流：Reader / Writer 的核心概念",
            "理解 字符流：Reader / Writer 的常见用法",
            "注意 字符流：Reader / Writer 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-40",
      'title': "NIO：Files 和 Paths 新 API",
      'summary': "Java 7+ 的 NIO 提供了更简洁的文件操作 API。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 NIO：Files 和 Paths 新 API 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 NIO：Files 和 Paths 新 API 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 NIO：Files 和 Paths 新 API 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"NIO：Files 和 Paths 新 API\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"NIO：Files 和 Paths 新 API\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"NIO：Files 和 Paths 新 API\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 NIO：Files 和 Paths 新 API 的核心概念",
            "理解 NIO：Files 和 Paths 新 API 的常见用法",
            "注意 NIO：Files 和 Paths 新 API 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-41",
      'title': "多线程基础：Thread 与 Runnable",
      'summary': "创建线程的两种方式，理解并发执行的基本概念。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 多线程基础：Thread 与 Runnable 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 多线程基础：Thread 与 Runnable 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 多线程基础：Thread 与 Runnable 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"多线程基础：Thread 与 Runnable\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"多线程基础：Thread 与 Runnable\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"多线程基础：Thread 与 Runnable\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 多线程基础：Thread 与 Runnable 的核心概念",
            "理解 多线程基础：Thread 与 Runnable 的常见用法",
            "注意 多线程基础：Thread 与 Runnable 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-42",
      'title': "线程同步：synchronized",
      'summary': "用 synchronized 解决多线程竞争共享资源的问题。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 线程同步：synchronized 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 线程同步：synchronized 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 线程同步：synchronized 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"线程同步：synchronized\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"线程同步：synchronized\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"线程同步：synchronized\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 线程同步：synchronized 的核心概念",
            "理解 线程同步：synchronized 的常见用法",
            "注意 线程同步：synchronized 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-43",
      'title': "线程间通信：wait / notify",
      'summary': "用 wait 和 notify 实现线程间的协作与通信。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 线程间通信：wait / notify 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 线程间通信：wait / notify 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 线程间通信：wait / notify 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"线程间通信：wait / notify\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"线程间通信：wait / notify\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"线程间通信：wait / notify\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 线程间通信：wait / notify 的核心概念",
            "理解 线程间通信：wait / notify 的常见用法",
            "注意 线程间通信：wait / notify 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-44",
      'title': "线程池 ExecutorService",
      'summary': "线程池复用线程，避免频繁创建销毁的开销。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 线程池 ExecutorService 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 线程池 ExecutorService 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 线程池 ExecutorService 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"线程池 ExecutorService\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"线程池 ExecutorService\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"线程池 ExecutorService\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 线程池 ExecutorService 的核心概念",
            "理解 线程池 ExecutorService 的常见用法",
            "注意 线程池 ExecutorService 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-45",
      'title': "并发集合：ConcurrentHashMap",
      'summary': "ConcurrentHashMap 是线程安全的 HashMap，高并发下性能优越。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 并发集合：ConcurrentHashMap 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 并发集合：ConcurrentHashMap 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 并发集合：ConcurrentHashMap 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"并发集合：ConcurrentHashMap\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"并发集合：ConcurrentHashMap\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"并发集合：ConcurrentHashMap\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 并发集合：ConcurrentHashMap 的核心概念",
            "理解 并发集合：ConcurrentHashMap 的常见用法",
            "注意 并发集合：ConcurrentHashMap 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-46",
      'title': "网络编程：Socket 与 ServerSocket",
      'summary': "用 Socket 实现客户端-服务器通信，理解 TCP 网络编程。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 网络编程：Socket 与 ServerSocket 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 网络编程：Socket 与 ServerSocket 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 网络编程：Socket 与 ServerSocket 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"网络编程：Socket 与 ServerSocket\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"网络编程：Socket 与 ServerSocket\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"网络编程：Socket 与 ServerSocket\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 网络编程：Socket 与 ServerSocket 的核心概念",
            "理解 网络编程：Socket 与 ServerSocket 的常见用法",
            "注意 网络编程：Socket 与 ServerSocket 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-47",
      'title': "URL 和 URLConnection",
      'summary': "用 Java 发送 HTTP 请求，获取网络资源。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 URL 和 URLConnection 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 URL 和 URLConnection 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 URL 和 URLConnection 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"URL 和 URLConnection\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"URL 和 URLConnection\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"URL 和 URLConnection\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 URL 和 URLConnection 的核心概念",
            "理解 URL 和 URLConnection 的常见用法",
            "注意 URL 和 URLConnection 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-48",
      'title': "JDBC 数据库连接",
      'summary': "用 JDBC 连接数据库，执行 SQL 查询和更新。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 JDBC 数据库连接 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 JDBC 数据库连接 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 JDBC 数据库连接 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"JDBC 数据库连接\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"JDBC 数据库连接\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"JDBC 数据库连接\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 JDBC 数据库连接 的核心概念",
            "理解 JDBC 数据库连接 的常见用法",
            "注意 JDBC 数据库连接 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-49",
      'title': "枚举 enum：定义常量集合",
      'summary': "enum 定义一组命名常量，比常量类更安全、更强大。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 枚举 enum：定义常量集合 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 枚举 enum：定义常量集合 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 枚举 enum：定义常量集合 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"枚举 enum：定义常量集合\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"枚举 enum：定义常量集合\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"枚举 enum：定义常量集合\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 枚举 enum：定义常量集合 的核心概念",
            "理解 枚举 enum：定义常量集合 的常见用法",
            "注意 枚举 enum：定义常量集合 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-50",
      'title': "注解（Annotation）：代码的元数据",
      'summary': "注解给代码加标签，运行时可以用反射读取。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 注解（Annotation）：代码的元数据 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 注解（Annotation）：代码的元数据 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 注解（Annotation）：代码的元数据 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"注解（Annotation）：代码的元数据\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"注解（Annotation）：代码的元数据\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"注解（Annotation）：代码的元数据\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 注解（Annotation）：代码的元数据 的核心概念",
            "理解 注解（Annotation）：代码的元数据 的常见用法",
            "注意 注解（Annotation）：代码的元数据 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-51",
      'title': "反射（Reflection）：运行时查看类信息",
      'summary': "用反射获取类的字段、方法、构造方法，动态调用。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 反射（Reflection）：运行时查看类信息 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 反射（Reflection）：运行时查看类信息 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 反射（Reflection）：运行时查看类信息 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"反射（Reflection）：运行时查看类信息\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"反射（Reflection）：运行时查看类信息\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"反射（Reflection）：运行时查看类信息\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 反射（Reflection）：运行时查看类信息 的核心概念",
            "理解 反射（Reflection）：运行时查看类信息 的常见用法",
            "注意 反射（Reflection）：运行时查看类信息 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-52",
      'title': "Object 类与常用方法",
      'summary': "toString、equals、hashCode 三个方法必须掌握。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 Object 类与常用方法 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 Object 类与常用方法 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 Object 类与常用方法 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Object 类与常用方法\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Object 类与常用方法\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Object 类与常用方法\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 Object 类与常用方法 的核心概念",
            "理解 Object 类与常用方法 的常见用法",
            "注意 Object 类与常用方法 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-53",
      'title': "内部类（Inner Class）",
      'summary': "成员内部类、静态内部类、匿名内部类、局部内部类。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 内部类（Inner Class） 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 内部类（Inner Class） 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 内部类（Inner Class） 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"内部类（Inner Class）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"内部类（Inner Class）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"内部类（Inner Class）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 内部类（Inner Class） 的核心概念",
            "理解 内部类（Inner Class） 的常见用法",
            "注意 内部类（Inner Class） 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-54",
      'title': "日期时间 API 详解（java.time）",
      'summary': "LocalDate、LocalTime、LocalDateTime、Duration、Period。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 日期时间 API 详解（java.time） 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 日期时间 API 详解（java.time） 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 日期时间 API 详解（java.time） 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"日期时间 API 详解（java.time）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"日期时间 API 详解（java.time）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"日期时间 API 详解（java.time）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 日期时间 API 详解（java.time） 的核心概念",
            "理解 日期时间 API 详解（java.time） 的常见用法",
            "注意 日期时间 API 详解（java.time） 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-55",
      'title': "正则表达式与 Pattern/Matcher",
      'summary': "用正则表达式匹配、查找、替换字符串。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 正则表达式与 Pattern/Matcher 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 正则表达式与 Pattern/Matcher 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 正则表达式与 Pattern/Matcher 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"正则表达式与 Pattern/Matcher\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"正则表达式与 Pattern/Matcher\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"正则表达式与 Pattern/Matcher\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 正则表达式与 Pattern/Matcher 的核心概念",
            "理解 正则表达式与 Pattern/Matcher 的常见用法",
            "注意 正则表达式与 Pattern/Matcher 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-56",
      'title': "Properties 与配置文件读取",
      'summary': "用 Properties 读取和写入 .properties 配置文件。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 Properties 与配置文件读取 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 Properties 与配置文件读取 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 Properties 与配置文件读取 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Properties 与配置文件读取\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Properties 与配置文件读取\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Properties 与配置文件读取\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 Properties 与配置文件读取 的核心概念",
            "理解 Properties 与配置文件读取 的常见用法",
            "注意 Properties 与配置文件读取 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-57",
      'title': "序列化与反序列化",
      'summary': "实现 Serializable 接口，将对象写入文件或网络传输。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 序列化与反序列化 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 序列化与反序列化 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 序列化与反序列化 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"序列化与反序列化\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"序列化与反序列化\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"序列化与反序列化\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 序列化与反序列化 的核心概念",
            "理解 序列化与反序列化 的常见用法",
            "注意 序列化与反序列化 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-58",
      'title': "try-with-resources 与 AutoCloseable",
      'summary': "自动关闭资源，Java 7+ 推荐的资源管理方式。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 try-with-resources 与 AutoCloseable 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 try-with-resources 与 AutoCloseable 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 try-with-resources 与 AutoCloseable 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"try-with-resources 与 AutoCloseable\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"try-with-resources 与 AutoCloseable\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"try-with-resources 与 AutoCloseable\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 try-with-resources 与 AutoCloseable 的核心概念",
            "理解 try-with-resources 与 AutoCloseable 的常见用法",
            "注意 try-with-resources 与 AutoCloseable 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-59",
      'title': "Comparator 与 Comparable 排序",
      'summary': "实现 Comparable 或 Comparator 自定义排序规则。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 Comparator 与 Comparable 排序 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 Comparator 与 Comparable 排序 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 Comparator 与 Comparable 排序 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Comparator 与 Comparable 排序\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Comparator 与 Comparable 排序\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Comparator 与 Comparable 排序\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 Comparator 与 Comparable 排序 的核心概念",
            "理解 Comparator 与 Comparable 排序 的常见用法",
            "注意 Comparator 与 Comparable 排序 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-60",
      'title': "Queue 和 Deque 队列",
      'summary': "Queue 队列（FIFO）、Deque 双端队列、PriorityQueue 优先队列。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 Queue 和 Deque 队列 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 Queue 和 Deque 队列 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 Queue 和 Deque 队列 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Queue 和 Deque 队列\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Queue 和 Deque 队列\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Queue 和 Deque 队列\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 Queue 和 Deque 队列 的核心概念",
            "理解 Queue 和 Deque 队列 的常见用法",
            "注意 Queue 和 Deque 队列 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-61",
      'title': "TreeMap 和 TreeSet 排序集合",
      'summary': "TreeMap 和 TreeSet 自动排序，底层是红黑树。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 TreeMap 和 TreeSet 排序集合 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 TreeMap 和 TreeSet 排序集合 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 TreeMap 和 TreeSet 排序集合 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"TreeMap 和 TreeSet 排序集合\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"TreeMap 和 TreeSet 排序集合\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"TreeMap 和 TreeSet 排序集合\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 TreeMap 和 TreeSet 排序集合 的核心概念",
            "理解 TreeMap 和 TreeSet 排序集合 的常见用法",
            "注意 TreeMap 和 TreeSet 排序集合 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-62",
      'title': "LinkedHashMap 和 LinkedHashSet",
      'summary': "保持插入顺序或访问顺序的 Map 和 Set。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 LinkedHashMap 和 LinkedHashSet 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 LinkedHashMap 和 LinkedHashSet 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 LinkedHashMap 和 LinkedHashSet 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"LinkedHashMap 和 LinkedHashSet\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"LinkedHashMap 和 LinkedHashSet\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"LinkedHashMap 和 LinkedHashSet\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 LinkedHashMap 和 LinkedHashSet 的核心概念",
            "理解 LinkedHashMap 和 LinkedHashSet 的常见用法",
            "注意 LinkedHashMap 和 LinkedHashSet 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-63",
      'title': "Stream 进阶：reduce、flatMap、groupingBy",
      'summary': "Stream 高级操作，复杂数据聚合与分组。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 Stream 进阶：reduce、flatMap、groupingBy 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 Stream 进阶：reduce、flatMap、groupingBy 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 Stream 进阶：reduce、flatMap、groupingBy 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Stream 进阶：reduce、flatMap、groupingBy\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Stream 进阶：reduce、flatMap、groupingBy\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Stream 进阶：reduce、flatMap、groupingBy\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 Stream 进阶：reduce、flatMap、groupingBy 的核心概念",
            "理解 Stream 进阶：reduce、flatMap、groupingBy 的常见用法",
            "注意 Stream 进阶：reduce、flatMap、groupingBy 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-64",
      'title': "Optional 进阶与最佳实践",
      'summary': "Optional 的 flatMap、流式操作、反模式。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 Optional 进阶与最佳实践 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 Optional 进阶与最佳实践 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 Optional 进阶与最佳实践 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Optional 进阶与最佳实践\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Optional 进阶与最佳实践\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Optional 进阶与最佳实践\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 Optional 进阶与最佳实践 的核心概念",
            "理解 Optional 进阶与最佳实践 的常见用法",
            "注意 Optional 进阶与最佳实践 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-65",
      'title': "方法引用：ClassName::method",
      'summary': "静态方法引用、实例方法引用、构造方法引用。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 方法引用：ClassName::method 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 方法引用：ClassName::method 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 方法引用：ClassName::method 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"方法引用：ClassName::method\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"方法引用：ClassName::method\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"方法引用：ClassName::method\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 方法引用：ClassName::method 的核心概念",
            "理解 方法引用：ClassName::method 的常见用法",
            "注意 方法引用：ClassName::method 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-66",
      'title': "接口的静态方法和私有方法（Java 9+）",
      'summary': "接口中定义静态方法和私有方法，提高代码复用。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 接口的静态方法和私有方法（Java 9+） 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 接口的静态方法和私有方法（Java 9+） 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 接口的静态方法和私有方法（Java 9+） 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"接口的静态方法和私有方法（Java 9+）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"接口的静态方法和私有方法（Java 9+）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"接口的静态方法和私有方法（Java 9+）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 接口的静态方法和私有方法（Java 9+） 的核心概念",
            "理解 接口的静态方法和私有方法（Java 9+） 的常见用法",
            "注意 接口的静态方法和私有方法（Java 9+） 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-67",
      'title': "模块化系统（Module System）",
      'summary': "Java 9 模块化，module-info.java 定义模块依赖。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 模块化系统（Module System） 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 模块化系统（Module System） 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 模块化系统（Module System） 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"模块化系统（Module System）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"模块化系统（Module System）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"模块化系统（Module System）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 模块化系统（Module System） 的核心概念",
            "理解 模块化系统（Module System） 的常见用法",
            "注意 模块化系统（Module System） 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-68",
      'title': "日志框架：java.util.logging 简介",
      'summary': "使用 Java 内置日志框架记录不同级别的日志。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 日志框架：java.util.logging 简介 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 日志框架：java.util.logging 简介 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 日志框架：java.util.logging 简介 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"日志框架：java.util.logging 简介\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"日志框架：java.util.logging 简介\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"日志框架：java.util.logging 简介\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 日志框架：java.util.logging 简介 的核心概念",
            "理解 日志框架：java.util.logging 简介 的常见用法",
            "注意 日志框架：java.util.logging 简介 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-69",
      'title': "断言（assert）与单元测试入门",
      'summary': "用 assert 做调试检查，JUnit 单元测试基础。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 断言（assert）与单元测试入门 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 断言（assert）与单元测试入门 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 断言（assert）与单元测试入门 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"断言（assert）与单元测试入门\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"断言（assert）与单元测试入门\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"断言（assert）与单元测试入门\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 断言（assert）与单元测试入门 的核心概念",
            "理解 断言（assert）与单元测试入门 的常见用法",
            "注意 断言（assert）与单元测试入门 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-70",
      'title': "Maven 入门：项目构建工具",
      'summary': "Maven 的项目结构、pom.xml 依赖管理、生命周期。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 Maven 入门：项目构建工具 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 Maven 入门：项目构建工具 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 Maven 入门：项目构建工具 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Maven 入门：项目构建工具\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Maven 入门：项目构建工具\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Maven 入门：项目构建工具\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 Maven 入门：项目构建工具 的核心概念",
            "理解 Maven 入门：项目构建工具 的常见用法",
            "注意 Maven 入门：项目构建工具 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-71",
      'title': "BigDecimal：精确计算",
      'summary': "用 BigDecimal 解决浮点数精度问题，财务计算必备。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 BigDecimal：精确计算 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 BigDecimal：精确计算 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 BigDecimal：精确计算 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"BigDecimal：精确计算\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"BigDecimal：精确计算\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"BigDecimal：精确计算\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 BigDecimal：精确计算 的核心概念",
            "理解 BigDecimal：精确计算 的常见用法",
            "注意 BigDecimal：精确计算 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-72",
      'title': "时间复杂度和空间复杂度",
      'summary': "分析算法效率，理解大 O 表示法。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 时间复杂度和空间复杂度 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 时间复杂度和空间复杂度 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 时间复杂度和空间复杂度 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"时间复杂度和空间复杂度\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"时间复杂度和空间复杂度\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"时间复杂度和空间复杂度\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 时间复杂度和空间复杂度 的核心概念",
            "理解 时间复杂度和空间复杂度 的常见用法",
            "注意 时间复杂度和空间复杂度 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-73",
      'title': "常用设计模式：单例模式",
      'summary': "单例模式的多种实现方式，线程安全、懒加载。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 常用设计模式：单例模式 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 常用设计模式：单例模式 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 常用设计模式：单例模式 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"常用设计模式：单例模式\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"常用设计模式：单例模式\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"常用设计模式：单例模式\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 常用设计模式：单例模式 的核心概念",
            "理解 常用设计模式：单例模式 的常见用法",
            "注意 常用设计模式：单例模式 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-74",
      'title': "常用设计模式：工厂模式",
      'summary': "简单工厂、工厂方法、抽象工厂，解耦对象创建。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 常用设计模式：工厂模式 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 常用设计模式：工厂模式 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 常用设计模式：工厂模式 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"常用设计模式：工厂模式\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"常用设计模式：工厂模式\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"常用设计模式：工厂模式\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 常用设计模式：工厂模式 的核心概念",
            "理解 常用设计模式：工厂模式 的常见用法",
            "注意 常用设计模式：工厂模式 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-75",
      'title': "常用设计模式：观察者模式",
      'summary': "发布-订阅模式，事件监听与通知机制。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 常用设计模式：观察者模式 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 常用设计模式：观察者模式 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 常用设计模式：观察者模式 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"常用设计模式：观察者模式\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"常用设计模式：观察者模式\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"常用设计模式：观察者模式\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 常用设计模式：观察者模式 的核心概念",
            "理解 常用设计模式：观察者模式 的常见用法",
            "注意 常用设计模式：观察者模式 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-76",
      'title': "函数式编程进阶",
      'summary': "Function 组合、柯里化、惰性求值等函数式编程概念。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 函数式编程进阶 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 函数式编程进阶 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 函数式编程进阶 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"函数式编程进阶\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"函数式编程进阶\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"函数式编程进阶\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 函数式编程进阶 的核心概念",
            "理解 函数式编程进阶 的常见用法",
            "注意 函数式编程进阶 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-77",
      'title': "Java 内存模型与垃圾回收简介",
      'summary': "堆、栈、方法区，GC 的基本原理和调优思路。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 Java 内存模型与垃圾回收简介 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 Java 内存模型与垃圾回收简介 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 Java 内存模型与垃圾回收简介 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Java 内存模型与垃圾回收简介\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Java 内存模型与垃圾回收简介\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Java 内存模型与垃圾回收简介\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 Java 内存模型与垃圾回收简介 的核心概念",
            "理解 Java 内存模型与垃圾回收简介 的常见用法",
            "注意 Java 内存模型与垃圾回收简介 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-78",
      'title': "常用工具类：Objects、Optional、StringJoiner",
      'summary': "Java 7+ 工具类，简化空值检查、字符串拼接。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 常用工具类：Objects、Optional、StringJoiner 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 常用工具类：Objects、Optional、StringJoiner 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 常用工具类：Objects、Optional、StringJoiner 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"常用工具类：Objects、Optional、StringJoiner\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"常用工具类：Objects、Optional、StringJoiner\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"常用工具类：Objects、Optional、StringJoiner\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 常用工具类：Objects、Optional、StringJoiner 的核心概念",
            "理解 常用工具类：Objects、Optional、StringJoiner 的常见用法",
            "注意 常用工具类：Objects、Optional、StringJoiner 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-79",
      'title': "综合实战：学生成绩管理系统",
      'summary': "综合运用 Java 核心知识，完成一个完整的成绩管理系统。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 综合实战：学生成绩管理系统 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 综合实战：学生成绩管理系统 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 综合实战：学生成绩管理系统 的各种操作，我们将从最简单的例子开始，逐步深入。"
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
            "掌握 综合实战：学生成绩管理系统 的核心概念",
            "理解 综合实战：学生成绩管理系统 的常见用法",
            "注意 综合实战：学生成绩管理系统 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    },
    {
      'id': "jv-80",
      'title': "面试题精选与求职指南",
      'summary': "Java 面试高频题汇总，简历与面试技巧。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "本章讲解 面试题精选与求职指南 的核心概念和用法。"
        },
        {
          'type': "p",
          'text': "在学习本章之前，请确保你已经掌握了前面的基础知识。本章内容涵盖 面试题精选与求职指南 的各个方面，包括基本语法、常见用法、注意事项和最佳实践。"
        },
        {
          'type': "p",
          'text': "Java 提供了丰富的 API 和工具来支持 面试题精选与求职指南 的各种操作，我们将从最简单的例子开始，逐步深入。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"面试题精选与求职指南\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"面试题精选与求职指南\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"面试题精选与求职指南\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "掌握 面试题精选与求职指南 的核心概念",
            "理解 面试题精选与求职指南 的常见用法",
            "注意 面试题精选与求职指南 的陷阱和最佳实践",
            "通过练习巩固所学知识"
          ]
        }
      ],
      'templates': [
        {
          'name': "基础示例",
          'code': "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"学习Java！\");\n    }\n}"
        }
      ]
    }
  ]
});

