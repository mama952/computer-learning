/* ============================================================
   计算机知识库 · 数据：Scala 完整课程（16 章，从下载安装到进阶实战）
   ============================================================ */
window.LANGUAGE_EXTRA = window.LANGUAGE_EXTRA || [];
window.LANGUAGE_EXTRA.push({
  'id': "scala",
  'name': "Scala",
  'icon': "Sc",
  'tagline': "JVM 上的函数式+面向对象双修语言，Spark/Kafka 源码语言。",
  'intro': "这是一套从零开始的 Scala 完整课程。第 1 章教你下载安装，之后每一章都从大白话讲起，配可运行的示例代码和编辑器模板。学完这套课程，你将掌握 Scala 的语法、类型系统、函数式编程、面向对象、模式匹配和工程化实践，足以应对大数据开发和企业级应用开发。",
  'meta': {
    "难度": "从零到进阶",
    "章节": "16 章",
    "场景": "大数据/分布式系统/企业级开发"
  },
  'lessons': [
    {
      'id': "sc-1",
      'title': "Scala 是什么：JVM 上的函数式+面向对象双修",
      'summary': "了解 Scala 的定位、优势和 Spark/Kafka 生态。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "Scala 是一门运行在 JVM 上的多范式编程语言，由 Martin Odersky 于 2004 年发布。它的名字来源于 SCalable LA nguage，寓意这门语言能随着你的成长而成长。Scala 完美融合了面向对象编程和函数式编程两大范式，是构建大规模分布式系统的首选语言之一。"
        },
        {
          'type': "h",
          'text': "为什么学习 Scala？"
        },
        {
          'type': "list",
          'items': [
            "运行在 JVM 上，可调用所有 Java 库",
            "Spark 的源码就是用 Scala 写的",
            "Kafka 的 API 首选 Scala",
            "类型系统强大，编译期捕获更多错误",
            "代码简洁，函数式风格让并发更安全"
          ]
        },
        {
          'type': "h",
          'text': "Scala 的核心特性"
        },
        {
          'type': "p",
          'text': "Scala 把 Java 的面向对象思想提升到新高度：一切皆对象，一切皆是消息传递。同时它引入了函数式编程的核心概念：不可变数据、高阶函数、模式匹配、 Monad 等。这让 Scala 代码既简洁又安全。"
        },
        {
          'type': "info",
          'title': "Scala 和 Java 的关系",
          'text': "Scala 完全兼容 Java，可以在 Scala 中直接调用 Java 代码，反之亦然。这意味着你不需要重新学习整个生态系统，现有的 Java 库都可以直接使用。"
        },
        {
          'type': "warn",
          'title': "学习曲线较陡",
          'text': "Scala 的类型系统和函数式概念对新手有一定挑战。建议先掌握基本的面向对象编程，再学习函数式部分，循序渐进。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Scala 是什么：JVM 上的函数式+面向对象双修\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Scala 是什么：JVM 上的函数式+面向对象双修\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Scala 是什么：JVM 上的函数式+面向对象双修\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Scala 是 JVM 上的多范式语言，融合 OOP 和 FP",
            "Spark/Kafka 的核心语言",
            "一切皆对象，一切皆消息传递",
            "兼容 Java，可调用所有 Java 库"
          ]
        }
      ],
      'templates': [
        {
          'name': "查看 Scala 版本",
          'code': "object Version { def main(args: Array[String]): Unit = {\n  println(s\"Scala 版本: ${scala.util.Properties.versionString}\")\n}}"
        }
      ]
    },
    {
      'id': "sc-2",
      'title': "下载与安装 Scala 和 JDK",
      'summary': "安装 JDK 17+、Scala 和 sbt 构建工具。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "学习 Scala 需要安装两个核心组件：JDK（Java 开发工具包）和 Scala 编译器。推荐使用 JDK 17 或更高版本，它们提供了更好的性能和稳定性。"
        },
        {
          'type': "h",
          'text': "第一步：安装 JDK"
        },
        {
          'type': "list",
          'items': [
            "打开 Adoptium 官网：<a href='https://adoptium.net' target='_blank' rel='noopener'>https://adoptium.net</a>",
            "选择 JDK 17 或更新的 LTS 版本",
            "根据你的系统选择安装包（Windows/macOS/Linux）",
            "运行安装包，一路点击『下一步』完成安装",
            "安装完成后在终端运行 java -version 验证"
          ]
        },
        {
          'type': "h",
          'text': "第二步：安装 Scala"
        },
        {
          'type': "list",
          'items': [
            "打开 Scala 官网：<a href='https://www.scala-lang.org/download/' target='_blank' rel='noopener'>https://www.scala-lang.org/download/</a>",
            "下载最新的 Scala 2.13 或 3.x 版本",
            "Windows 用户下载 .zip 压缩包",
            "解压到合适的位置（如 C:\\Scala）",
            "将 Scala 的 bin 目录添加到系统 PATH 环境变量"
          ]
        },
        {
          'type': "h",
          'text': "第三步：安装 sbt 构建工具"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "验证安装",
          'code': "// 在终端运行以下命令验证安装\njava -version\nscalac -version\nscala -version\n\n// 安装 sbt（Scala 构建工具）\n// Windows 用户可以从 https://www.scala-sbt.org/download.html 下载安装\n// macOS 用户可以用 Homebrew：brew install sbt"
        },
        {
          'type': "info",
          'title': "Scala REPL",
          'text': "在终端输入 scala 可以进入 REPL（交互式命令行），这是快速测试 Scala 代码的好方法。输入 :quit 或 Ctrl+D 退出。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"下载与安装 Scala 和 JDK\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"下载与安装 Scala 和 JDK\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"下载与安装 Scala 和 JDK\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "JDK 17+ 是 Scala 运行环境，从 adoptium.net 下载",
            "Scala 从 scala-lang.org/download 下载",
            "sbt 是 Scala 项目的构建工具",
            "用 scala -version 验证安装"
          ]
        }
      ],
      'templates': [
        {
          'name': "Hello Scala",
          'code': "object Hello extends App {\n  println(\"Hello, Scala!\")\n  println(s\"Scala 版本: ${scala.util.Properties.versionString}\")\n}"
        }
      ]
    },
    {
      'id': "sc-3",
      'title': "第一个程序：object 和 App",
      'summary': "学会写 object、main 方法和 extend App 快捷方式。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "Scala 的入口是一个 object（单例对象），它包含 main 方法。你可以直接继承 App trait，这样不需要写 main 方法，顶层代码会自动执行。"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "第一个程序",
          'code': "// 方式一：继承 App（推荐新手使用）\nobject Hello extends App {\n  println(\"Hello, World!\")\n  println(\"这是我的第一个 Scala 程序\")\n}\n\n// 方式二：显式定义 main 方法\nobject Main {\n  def main(args: Array[String]): Unit = {\n    println(\"Hello, World!\")\n    println(\"这是第二个程序\")\n  }\n}"
        },
        {
          'type': "h",
          'text': "运行 Scala 程序"
        },
        {
          'type': "list",
          'items': [
            "保存文件为 Hello.scala",
            "编译：scalac Hello.scala",
            "运行：scala Hello",
            "或使用 sbt 构建工具运行项目"
          ]
        },
        {
          'type': "h",
          'text': "Scala REPL 交互模式"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "在 REPL 中测试",
          'code': "// 在终端输入 scala 进入 REPL\n// 然后直接输入代码，立即看到结果：\nscala> println(\"Hello, Scala!\")\nHello, Scala!\n\nscala> 2 + 3\nres0: Int = 5\n\nscala> :quit"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"第一个程序：object 和 App\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"第一个程序：object 和 App\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"第一个程序：object 和 App\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Scala 程序入口是 object",
            "继承 App 可以省略 main 方法",
            "用 scalac 编译，scala 运行",
            "REPL 是交互式测试代码的好工具"
          ]
        }
      ],
      'templates': [
        {
          'name': "自我介绍",
          'code': "object Intro extends App {\n  val name = \"小明\"\n  val age = 10\n  println(s\"大家好！我叫$name，今年$age岁\")\n  println(\"我正在学习Scala编程\")\n}"
        }
      ]
    },
    {
      'id': "sc-4",
      'title': "基础类型与 val/var",
      'summary': "掌握 val/var 区别、基础类型和类型推断。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "Scala 有两种变量声明方式：val（不可变，类似 Java 的 final）和 var（可变）。推荐优先使用 val，这样代码更安全，不容易被意外修改。"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "val 与 var",
          'code': "// val：不可变变量（推荐）\nval name = \"小明\"\n// name = \"小红\"  // 这会报错！\n\n// var：可变变量（尽量少用）\nvar count = 0\ncount = count + 1\n\n// 类型推断：Scala 自动推断类型\nval age = 10          // Int\nval score = 92.5      // Double\nval isStudent = true  // Boolean\nval greeting = \"Hello\" // String"
        },
        {
          'type': "h",
          'text': "基础类型"
        },
        {
          'type': "table",
          'head': [
            "类型",
            "说明",
            "示例"
          ],
          'rows': [
            [
              "Byte",
              "8位整数",
              "val b: Byte = 10"
            ],
            [
              "Short",
              "16位整数",
              "val s: Short = 1000"
            ],
            [
              "Int",
              "32位整数",
              "val i: Int = 100"
            ],
            [
              "Long",
              "64位整数",
              "val l: Long = 100L"
            ],
            [
              "Float",
              "32位浮点",
              "val f: Float = 3.14f"
            ],
            [
              "Double",
              "64位浮点",
              "val d: Double = 3.14"
            ],
            [
              "Char",
              "字符",
              "val c: Char = 'A'"
            ],
            [
              "String",
              "字符串",
              "val s: String = \"Hello\""
            ],
            [
              "Boolean",
              "布尔值",
              "val b: Boolean = true"
            ]
          ]
        },
        {
          'type': "h",
          'text': "字符串插值"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "字符串插值",
          'code': "val name = \"小明\"\nval age = 10\n\n// s 插值：直接插入变量\nprintln(s\"我叫$name，今年$age岁\")\n\n// f 插值：格式化输出\nval pi = 3.14159\nprintln(f\"圆周率是 pi = $pi%.2f\")\n\n// raw 插值：不做转义处理\nprintln(raw\"路径是 C:\\Users\\name\")"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"基础类型与 val/var\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"基础类型与 val/var\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"基础类型与 val/var\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "val 不可变，var 可变，优先用 val",
            "Int/Double/String/Boolean 是常用类型",
            "Scala 支持类型推断，可省略类型声明",
            "s/f/raw 字符串插值非常实用"
          ]
        }
      ],
      'templates': [
        {
          'name': "个人信息",
          'code': "object Person extends App {\n  val name = \"小红\"\n  val age = 12\n  val city = \"北京\"\n  val height = 1.55\n  println(s\"我叫$name，今年$age岁\")\n  println(s\"住在$city，身高$height米\")\n  println(f\"年龄格式化: ${age + 1}%3d\")\n}"
        }
      ]
    },
    {
      'id': "sc-5",
      'title': "运算符与表达式",
      'summary': "算术、比较、逻辑运算符，match 表达式和插值。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "Scala 的运算符和 Java 基本一致，但 Scala 中运算符其实是方法，可以用点号调用。match 表达式是 Scala 强大的模式匹配语法，类似于其他语言的 switch-case。"
        },
        {
          'type': "h",
          'text': "基本运算符"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "运算符使用",
          'code': "val a = 10\nval b = 3\n\n// 算术运算\nprintln(a + b)   // 13\nprintln(a - b)   // 7\nprintln(a * b)   // 30\nprintln(a / b)   // 3（整数除法）\nprintln(a % b)   // 1（取余）\n\n// 比较运算\nprintln(a > b)   // true\nprintln(a == b)  // false\n\n// 逻辑运算\nval x = true\nval y = false\nprintln(x && y)  // false\nprintln(x || y)  // true\nprintln(!x)      // false"
        },
        {
          'type': "h",
          'text': "if/else 与 match"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "条件与 match",
          'code': "// if/else\nval score = 85\nval grade = if (score >= 90) \"优秀\" else if (score >= 80) \"良好\" else \"及格\"\nprintln(grade)\n\n// match 表达式（类似 switch-case）\nval day = 3\nval dayName = day match {\n  case 1 => \"星期一\"\n  case 2 => \"星期二\"\n  case 3 => \"星期三\"\n  case 4 => \"星期四\"\n  case 5 => \"星期五\"\n  case 6 => \"星期六\"\n  case 7 => \"星期日\"\n  case _ => \"未知日期\"  // _ 是通配符\n}\nprintln(dayName)"
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
            "Scala 运算符和 Java 基本相同",
            "if/else 是表达式，可以返回值",
            "match 表达式替代 switch-case",
            "_ 通配符匹配所有其他情况"
          ]
        }
      ],
      'templates': [
        {
          'name': "成绩等级判断",
          'code': "object Grade extends App {\n  val score = 88\n  val grade = score match {\n    case s if s >= 90 => \"优秀\"\n    case s if s >= 80 => \"良好\"\n    case s if s >= 60 => \"及格\"\n    case _ => \"不及格\"\n  }\n  println(s\"成绩: $score, 等级: $grade\")\n}"
        }
      ]
    },
    {
      'id': "sc-6",
      'title': "条件与循环",
      'summary': "掌握 if/while/for 推导式和 Range 用法。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "Scala 的循环主要有 while 和 for，但推荐多用 for 推导式（for comprehension），它更简洁且功能强大。Scala 没有 break 和 continue，但可以通过其他方式实现类似功能。"
        },
        {
          'type': "h",
          'text': "while 循环"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "while 和 do-while",
          'code': "// while 循环\nvar i = 0\nwhile (i < 5) {\n  println(i)\n  i += 1\n}\n\n// do-while 循环（至少执行一次）\nvar j = 0\ndo {\n  println(j)\n  j += 1\n} while (j < 3)"
        },
        {
          'type': "h",
          'text': "for 推导式"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "for 循环",
          'code': "// 基本 for 循环\nfor (i <- 1 to 5) {\n  println(i)  // 1 2 3 4 5\n}\n\n// 不包含上限\nfor (i <- 1 until 5) {\n  println(i)  // 1 2 3 4\n}\n\n// 步长\nfor (i <- 1 to 10 by 2) {\n  println(i)  // 1 3 5 7 9\n}\n\n// 多重生成器\nfor (i <- 1 to 3; j <- 1 to 3) {\n  println(s\"($i, $j)\")\n}"
        },
        {
          'type': "h",
          'text': "for 推导式与 filter"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "for 与守卫",
          'code': "// for 推导式加条件（守卫）\nfor (i <- 1 to 20 if i % 2 == 0) {\n  println(s\"$i 是偶数\")\n}\n\n// 生成新集合\nval evenNumbers = for (i <- 1 to 20 if i % 2 == 0) yield i\nprintln(evenNumbers)"
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
            "while/do-while 与 Java 类似",
            "for (i <- Range) 遍历范围",
            "for 推导式可加 if 守卫",
            "yield 生成新集合"
          ]
        }
      ],
      'templates': [
        {
          'name': "打印乘法表",
          'code': "object Table extends App {\n  for (i <- 1 to 9) {\n    for (j <- 1 to i) {\n      print(s\"$j*$i=${i*j} \")\n    }\n    println()\n  }\n}"
        }
      ]
    },
    {
      'id': "sc-7",
      'title': "函数定义与递归",
      'summary': "掌握 def 定义函数、默认参数、命名参数和尾递归。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "Scala 的函数用 def 定义。函数是第一等公民，可以作为参数传递、作为返回值返回。递归在函数式编程中非常重要，Scala 支持尾递归优化。"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "基本函数",
          'code': "// 基本函数定义\ndef greet(name: String): String = {\n  s\"你好，$name!\"\n}\nprintln(greet(\"小明\"))\n\n// 单表达式可省略大括号\ndef add(a: Int, b: Int): Int = a + b\nprintln(add(3, 5))\n\n// 无返回值函数（Unit）\ndef sayHello(): Unit = {\n  println(\"Hello!\")\n}"
        },
        {
          'type': "h",
          'text': "参数类型"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "默认参数与命名参数",
          'code': "// 默认参数\ndef repeat(message: String, times: Int = 1): String = {\n  message * times\n}\nprintln(repeat(\"Hi\"))        // 使用默认值\nprintln(repeat(\"Hi\", 3))     // 自定义值\n\n// 命名参数\ndef introduce(name: String, age: Int, city: String): String = {\n  s\"$name, $age岁, 来自$city\"\n}\nprintln(introduce(age = 10, name = \"小明\", city = \"北京\"))"
        },
        {
          'type': "h",
          'text': "可变参数与递归"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "可变参数和尾递归",
          'code': "// 可变参数\ndef sum(nums: Int*): Int = {\n  nums.sum\n}\nprintln(sum(1, 2, 3, 4, 5))\n\n// 递归函数\n@annotation.tailrec\ndef factorial(n: Int): Int = {\n  if (n <= 1) 1 else n * factorial(n - 1)\n}\nprintln(factorial(5))  // 120\n\n// 注意：@tailrec 注解会检查是否是尾递归，不是则编译报错"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"函数定义与递归\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"函数定义与递归\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"函数定义与递归\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "def 定义函数，指定参数类型和返回类型",
            "默认参数和命名参数让函数调用更灵活",
            "* 表示可变参数",
            "@tailrec 注解确保尾递归优化"
          ]
        }
      ],
      'templates': [
        {
          'name': "阶乘计算",
          'code': "object Factorial extends App {\n  @annotation.tailrec\n  def factorial(n: Int, acc: Int = 1): Int = {\n    if (n <= 1) acc else factorial(n - 1, n * acc)\n  }\n  for (i <- 1 to 10) {\n    println(s\"$i! = ${factorial(i)}\")\n  }\n}"
        }
      ]
    },
    {
      'id': "sc-8",
      'title': "集合：List 与 Seq",
      'summary': "掌握不可变 List、可变 Seq 及常用高阶函数。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "Scala 的集合分为可变（mutable）和不可变（immutable）两类。推荐优先使用不可变集合，这样函数式编程更安全。List 是最常用的不可变序列。"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "List 基本操作",
          'code': "// 创建 List\nval fruits = List(\"苹果\", \"香蕉\", \"橙子\")\nval numbers = List(1, 2, 3, 4, 5)\n\n// 访问元素\nprintln(fruits(0))      // 苹果\nprintln(numbers.head)   // 1\nprintln(numbers.tail)   // List(2, 3, 4, 5)\nprintln(numbers.isEmpty) // false\n\n// 添加元素（返回新List）\nval newList = \"葡萄\" :: fruits\nprintln(newList)        // List(葡萄, 苹果, 香蕉, 橙子)\n\n// 连接列表\nval combined = numbers ++ List(6, 7)\nprintln(combined)"
        },
        {
          'type': "h",
          'text': "高阶函数"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "map/filter/flatMap",
          'code': "val nums = List(1, 2, 3, 4, 5)\n\n// map：每个元素应用函数\nprintln(nums.map(_ * 2))    // List(2, 4, 6, 8, 10)\n\n// filter：过滤元素\nprintln(nums.filter(_ > 3)) // List(4, 5)\n\n// flatMap：映射后展平\nval words = List(\"Hello\", \"World\")\nprintln(words.flatMap(_.toList))\n\n// foreach：遍历执行\nnums.foreach(println)\n\n// foldLeft：累积计算\nprintln(nums.foldLeft(0)(_ + _))  // 15"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"集合：List 与 Seq\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"集合：List 与 Seq\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"集合：List 与 Seq\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "List 是不可变序列，用 :: 或 :: 添加元素",
            "head/tail 访问首元素和剩余部分",
            "map/filter/flatMap/foreach 是核心高阶函数",
            "foldLeft 用于累积计算"
          ]
        }
      ],
      'templates': [
        {
          'name': "列表统计",
          'code': "object Stats extends App {\n  val scores = List(85, 92, 78, 90, 88)\n  println(s\"总分: ${scores.sum}\")\n  println(s\"平均分: ${scores.sum / scores.length}\")\n  println(s\"最高分: ${scores.max}\")\n  println(s\"最低分: ${scores.min}\")\n  println(s\"大于80分: ${scores.count(_ > 80)}\")\n}"
        }
      ]
    },
    {
      'id': "sc-9",
      'title': "集合：Set、Map、Tuple",
      'summary': "掌握 HashSet、Map、Tuple 和 Option 类型。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "Scala 的 Set 用于存储不重复的元素，Map 用于键值对映射，Tuple 用于打包不同类型的数据，Option 用于处理可能为空的值。"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "Set 操作",
          'code': "// 创建 Set\nval set = Set(1, 2, 3, 3, 4)  // 自动去重\nprintln(set)  // Set(1, 2, 3, 4)\n\n// Set 运算\nval a = Set(1, 2, 3)\nval b = Set(3, 4, 5)\nprintln(a | b)  // 并集：Set(1, 2, 3, 4, 5)\nprintln(a & b)  // 交集：Set(3)\nprintln(a - b)  // 差集：Set(1, 2)"
        },
        {
          'type': "h",
          'text': "Map 操作"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "Map 基本操作",
          'code': "// 创建 Map\nval scores = Map(\"小明\" -> 92, \"小红\" -> 85, \"小刚\" -> 78)\nprintln(scores(\"小明\"))   // 92\nprintln(scores.getOrElse(\"小丽\", 0))  // 0（不存在返回默认值）\n\n// 添加元素\nval newScores = scores + (\"小丽\" -> 95)\nprintln(newScores)\n\n// 遍历\nfor ((name, score) <- scores) {\n  println(s\"$name: $score\")\n}"
        },
        {
          'type': "h",
          'text': "Tuple 和 Option"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "Tuple 和 Option",
          'code': "// Tuple：打包不同类型\nval person = (\"小明\", 10, 1.55)\nprintln(person._1)   // 小明\nprintln(person._2)   // 10\n\n// Option：处理可能为空的值\nval map = Map(\"a\" -> 1, \"b\" -> 2)\nprintln(map.get(\"a\"))      // Some(1)\nprintln(map.get(\"c\"))      // None\nprintln(map.get(\"a\").get)  // 1（不安全）\nprintln(map.get(\"c\").getOrElse(0))  // 0（安全）\n\n// Option 常用方法\nval opt = Some(42)\nprintln(opt.isDefined)    // true\nprintln(opt.isEmpty)      // false"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"集合：Set、Map、Tuple\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"集合：Set、Map、Tuple\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"集合：Set、Map、Tuple\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Set 自动去重，支持集合运算",
            "Map 用 -> 创建键值对，getOrElse 安全取值",
            "Tuple 打包不同数据类型",
            "Option 替代 null，避免空指针异常"
          ]
        }
      ],
      'templates': [
        {
          'name': "成绩统计",
          'code': "object ScoreAnalysis extends App {\n  var scores = Map(\"小明\" -> 92, \"小红\" -> 85, \"小刚\" -> 78)\n  scores = scores + (\"小丽\" -> 95)\n  \n  val avg = scores.values.sum / scores.values.size\n  println(s\"平均分: $avg\")\n  \n  val best = scores.maxBy(_._2)\n  println(s\"最高分: ${best._1} - ${best._2}\")\n}"
        }
      ]
    },
    {
      'id': "sc-10",
      'title': "模式匹配",
      'summary': "掌握 match/case、case class、提取器和模式守卫。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "模式匹配是 Scala 最强大的特性之一。它不仅可以匹配值，还可以匹配类型、解构对象、提取值。case class 配合模式匹配使用效果更佳。"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "基本模式匹配",
          'code': "val day = 3\nval result = day match {\n  case 1 => \"星期一\"\n  case 2 => \"星期二\"\n  case 3 => \"星期三\"\n  case _ => \"其他\"\n}\nprintln(result)\n\n// 匹配类型\nval obj: Any = \"hello\"\nobj match {\n  case s: String => println(s\"字符串: $s\")\n  case i: Int => println(s\"整数: $i\")\n  case _ => println(\"其他类型\")\n}"
        },
        {
          'type': "h",
          'text': "case class 与提取器"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "case class 模式匹配",
          'code': "// 定义 case class\nsealed trait Animal\ncase class Dog(name: String, age: Int) extends Animal\ncase class Cat(name: String, color: String) extends Animal\ncase object Bird extends Animal\n\n// 模式匹配\ndef describe(animal: Animal): String = animal match {\n  case Dog(n, a) => s\"狗: $n, $a岁\"\n  case Cat(n, c) => s\"猫: $n, 颜色$c\"\n  case Bird => \"鸟\"\n}\n\nprintln(describe(Dog(\"旺财\", 3)))\nprintln(describe(Cat(\"咪咪\", \"白色\")))"
        },
        {
          'type': "h",
          'text': "提取器与模式守卫"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "提取器和守卫",
          'code': "// 提取器\nobject Email {\n  def unapply(email: String): Option[(String, String)] = {\n    val parts = email.split(\"@\")\n    if (parts.length == 2) Some((parts(0), parts(1))) else None\n  }\n}\n\nval addr = \"zhangsan@example.com\"\naddr match {\n  case Email(user, domain) => println(s\"用户: $user, 域名: $domain\")\n  case _ => println(\"不是邮箱\")\n}\n\n// 模式守卫\nval x = 10\nx match {\n  case i if i > 0 => println(\"正数\")\n  case i if i < 0 => println(\"负数\")\n  case _ => println(\"零\")\n}"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"模式匹配\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"模式匹配\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"模式匹配\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "match/case 替代 switch-case，更强大",
            "case class 自动生成 equals/hashCode/toString",
            "提取器 unapply 用于解构对象",
            "模式守卫 if 条件可进一步限制匹配"
          ]
        }
      ],
      'templates': [
        {
          'name': "星期匹配器",
          'code': "object DayMatcher extends App {\n  sealed trait Day\n  case object Monday extends Day\n  case object Tuesday extends Day\n  case object Wednesday extends Day\n  case object Thursday extends Day\n  case object Friday extends Day\n  case object Saturday extends Day\n  case object Sunday extends Day\n  \n  def weekend(day: Day): Boolean = day match {\n    case Saturday | Sunday => true\n    case _ => false\n  }\n  \n  println(weekend(Saturday))  // true\n  println(weekend(Monday))    // false\n}"
        }
      ]
    },
    {
      'id': "sc-11",
      'title': "面向对象：类与继承",
      'summary': "掌握 class、extends、override、abstract 和 this/super。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "Scala 的面向对象编程非常强大。每个值都是对象，每个操作都是方法调用。Scala 的类可以继承、覆写方法、定义抽象类，还支持单例对象和混入。"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "基本类定义",
          'code': "// 定义类\nclass Person(val name: String, var age: Int) {\n  // 主构造方法\n  def this() = this(\"Unknown\", 0)  // 辅助构造方法\n  \n  // 方法定义\n  def greet(): String = {\n    s\"你好，我叫${this.name}，今年${this.age}岁\"\n  }\n  \n  // 私有字段\n  private var secret = \"hidden\"\n}\n\n// 使用类\nval p = new Person(\"小明\", 10)\nprintln(p.greet())\nprintln(p.name)"
        },
        {
          'type': "h",
          'text': "继承与覆写"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "继承示例",
          'code': "// 父类\nclass Animal(val name: String, val legs: Int) {\n  def speak(): String = \"...\" \n  override def toString: String = s\"Animal($name, $legs)\"\n}\n\n// 子类\nclass Dog(name: String, var tailLength: Double) extends Animal(name, 4) {\n  override def speak(): String = \"汪汪!\" \n  override def toString: String = s\"Dog($name, $tailLength)\"\n}\n\nclass Cat(name: String) extends Animal(name, 4) {\n  override def speak(): String = \"喵喵!\" \n}\n\nval dog = new Dog(\"旺财\", 0.5)\nprintln(dog.speak())\nprintln(dog.name)"
        },
        {
          'type': "h",
          'text': "抽象类"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "抽象类",
          'code': "// 抽象类\nabstract class Shape {\n  def area(): Double\n  def perimeter(): Double\n  \n  // 具体方法\n  def describe(): String = s\"形状，面积=${area()}, 周长=${perimeter()}\"\n}\n\nclass Circle(radius: Double) extends Shape {\n  override def area(): Double = math.Pi * radius * radius\n  override def perimeter(): Double = 2 * math.Pi * radius\n}\n\nclass Rectangle(width: Double, height: Double) extends Shape {\n  override def area(): Double = width * height\n  override def perimeter(): Double = 2 * (width + height)\n}"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"面向对象：类与继承\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"面向对象：类与继承\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"面向对象：类与继承\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "class 定义类，val/var 定义字段",
            "extends 继承，override 覆写方法",
            "抽象类不能实例化，必须被子类实现",
            "this 指向当前对象，super 调用父类方法"
          ]
        }
      ],
      'templates': [
        {
          'name': "形状计算",
          'code': "object ShapeDemo extends App {\n  abstract class Shape {\n    def area(): Double\n  }\n  class Circle(r: Double) extends Shape {\n    override def area() = math.Pi * r * r\n  }\n  class Square(s: Double) extends Shape {\n    override def area() = s * s\n  }\n  \n  val shapes = List(new Circle(5), new Square(4))\n  shapes.foreach(s => println(s\"面积: ${s.area()}\"))\n}"
        }
      ]
    },
    {
      'id': "sc-12",
      'title': "Trait 与混入",
      'summary': "掌握 trait 定义、多重混入和线性化规则。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "Trait 是 Scala 特有的概念，类似于 Java 的接口但更强大。Trait 可以包含抽象方法和具体方法，一个类可以混入多个 trait，实现多重继承的效果。"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "基本 Trait",
          'code': "// 定义 trait\ntrait Logger {\n  def log(msg: String): Unit\n}\n\nclass ConsoleLogger extends Logger {\n  override def log(msg: String): Unit = {\n    println(s\"[LOG] $msg\")\n  }\n}\n\n// 使用\nclass Service extends ConsoleLogger {\n  def doWork(): Unit = {\n    log(\"开始工作\")\n    // 工作逻辑\n    log(\"工作完成\")\n  }\n}\n\nnew Service().doWork()"
        },
        {
          'type': "h",
          'text': "混入多个 Trait"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "多重混入",
          'code': "// 定义多个 trait\ntrait Flyable {\n  def fly(): String = \"飞翔中\"\n}\n\ntrait Swimmable {\n  def swim(): String = \"游泳中\"\n}\n\ntrait Runable {\n  def run(): String = \"奔跑中\"\n}\n\n// 混入多个 trait\nclass Duck extends Flyable with Swimmable with Runable {\n  override def fly(): String = \"鸭子飞\"\n  override def swim(): String = \"鸭子游\"\n}\n\nval duck = new Duck()\nprintln(duck.fly())\nprintln(duck.swim())"
        },
        {
          'type': "h",
          'text': "线性化规则"
        },
        {
          'type': "p",
          'text': "当多个 trait 有相同方法时，Scala 使用线性化规则决定调用顺序：从左到右，后混入的优先。子类的方法优先级最高。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Trait 与混入\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Trait 与混入\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Trait 与混入\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "trait 类似接口但可包含实现",
            "用 with 混入多个 trait",
            "线性化规则：右边优先",
            "trait 是 Scala 代码复用的核心机制"
          ]
        }
      ],
      'templates': [
        {
          'name': "可持久化对象",
          'code': "object PersistentDemo extends App {\n  trait Persistable {\n    def save(): Unit = println(s\"保存: ${this.getClass.getSimpleName}\")\n    def load(): Unit = println(s\"加载: ${this.getClass.getSimpleName}\")\n  }\n  \n  class User(name: String) extends Persistable {\n    override def save() = println(s\"保存用户: $name\")\n  }\n  \n  new User(\"小明\").save()\n  new User(\"小明\").load()\n}"
        }
      ]
    },
    {
      'id': "sc-13",
      'title': "类型系统进阶：泛型与边界",
      'summary': "掌握泛型、上界 <: 下界 >:、类型别名和上下文界定。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "Scala 的类型系统是函数式语言中最强大的之一。泛型让你可以编写与类型无关的代码，上界和下界约束类型参数，类型别名简化复杂类型。"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "泛型类与方法",
          'code': "// 泛型类\nclass Box[T](value: T) {\n  def getContent: T = value\n  def setValue(v: T): Unit = value = v\n}\n\n// 使用\nval intBox = new Box[Int](42)\nprintln(intBox.getContent)\n\nval strBox = new Box[String](\"hello\")\nprintln(strBox.getContent)\n\n// 泛型方法\ndef first[T](list: List[T]): T = list.head\nprintln(first(List(1, 2, 3)))"
        },
        {
          'type': "h",
          'text': "类型边界"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "上界与下界",
          'code': "// 上界 <: 子类\nabstract class Animal {\n  def speak(): String\n}\nclass Dog extends Animal {\n  override def speak() = \"汪汪\"\n}\nclass Cat extends Animal {\n  override def speak() = \"喵喵\"\n}\n\ndef makeSpeak[A <: Animal](a: A): String = a.speak()\nprintln(makeSpeak(new Dog()))\nprintln(makeSpeak(new Cat()))\n\n// 下界 >: 父类\nclass Node[+T](value: T) {\n  def prepend[U >: T](item: U): Node[U] = new Node[U](item)\n}\nval node1 = new Node[Int](1)\nval node2 = node1.prepend(2.5)  // Node[Double]"
        },
        {
          'type': "h",
          'text': "类型别名与上下文界定"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "类型别名和上下文界定",
          'code': "// 类型别名\ntype StringList = List[String]\ntype Callback[T] = T => Unit\n\nval names: StringList = List(\"小明\", \"小红\")\nval handler: Callback[Int] = x => println(x)\n\n// 上下文界定（需要隐式值）\nclass Container[T](value: T)(implicit ord: Ordering[T]) {\n  def larger(other: Container[T]): T = {\n    if (ord.gt(value, other.value)) value else other.value\n  }\n}\n\nprintln(new Container(5).larger(new Container(3)))"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"类型系统进阶：泛型与边界\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"类型系统进阶：泛型与边界\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"类型系统进阶：泛型与边界\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "泛型 [T] 让代码与类型无关",
            "<: 上界限制为子类，>: 下界限制为父类",
            "type 定义类型别名",
            "上下文界定需要隐式 Ordering 等参数"
          ]
        }
      ],
      'templates': [
        {
          'name': "泛型容器",
          'code': "object GenericBox extends App {\n  class Box[T](private var content: T) {\n    def get: T = content\n    def set(x: T): Unit = content = x\n    def empty: Boolean = false\n  }\n  \n  val box = new Box[Int](10)\n  println(box.get)\n  box.set(20)\n  println(box.get)\n}"
        }
      ]
    },
    {
      'id': "sc-14",
      'title': "隐式与类型类",
      'summary': "理解 implicit 参数、隐式转换和类型类模式。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "隐式系统是 Scala 最独特的特性之一。implicit 参数让编译器自动查找和注入依赖，隐式转换让类型可以自动转换，类型类模式实现多态而不需要继承。"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "隐式参数",
          'code': "// 定义隐式值\nimplicit val defaultName: String = \"默认用户\"\nimplicit val timeout: Int = 30\n\n// 隐式参数\ndef connect(host: String)(implicit timeout: Int): String = {\n  s\"连接到 $host，超时${timeout}秒\"\n}\n\nprintln(connect(\"example.com\"))  // 自动使用隐式 timeout"
        },
        {
          'type': "h",
          'text': "隐式转换"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "隐式转换",
          'code': "// 定义隐式转换函数\nimplicit def stringToInt(s: String): Int = s.toInt\nimplicit def intToString(i: Int): String = i.toString\n\n// 自动类型转换\nval num: Int = \"42\"\nprintln(num + 10)  // 52\n\nval text: String = 42\nprintln(text)  // 42"
        },
        {
          'type': "h",
          'text': "类型类模式"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "类型类",
          'code': "// 定义类型类\ntrait Serializer[T] {\n  def serialize(obj: T): String\n}\n\n// 为不同类型提供实现\nimplicit object StringSerializer extends Serializer[String] {\n  def serialize(obj: String): String = s\"\"\"\"$obj\"\"\"\"\n}\nimplicit object IntSerializer extends Serializer[Int] {\n  def serialize(obj: Int): String = obj.toString\n}\n\n// 使用类型类\nobject JsonUtils {\n  def toJson[T](obj: T)(implicit serializer: Serializer[T]): String = {\n    serializer.serialize(obj)\n  }\n}\n\nprintln(JsonUtils.toJson(\"hello\"))\nprintln(JsonUtils.toJson(42))"
        },
        {
          'type': "warn",
          'title': "隐式使用的注意事项",
          'text': "Scala 3 已经大幅简化了隐式系统，用 given/using 替代 implicit。新项目建议使用 Scala 3 的语法。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"隐式与类型类\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"隐式与类型类\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"隐式与类型类\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "implicit 参数让编译器自动注入依赖",
            "隐式转换可以自动在类型间转换",
            "类型类实现多态而不需要继承",
            "Scala 3 用 given/using 替代 implicit"
          ]
        }
      ],
      'templates': [
        {
          'name': "类型类示例",
          'code': "object TypeClassDemo extends App {\n  trait Show[T] {\n    def show(value: T): String\n  }\n  \n  implicit val intShow: Show[Int] = new Show[Int] {\n    def show(i: Int): String = s\"Int: $i\"\n  }\n  \n  implicit val strShow: Show[String] = new Show[String] {\n    def show(s: String): String = s\"String: $s\"\n  }\n  \n  def printValue[T](value: T)(implicit show: Show[T]): Unit = {\n    println(show.show(value))\n  }\n  \n  printValue(42)\n  printValue(\"hello\")\n}"
        }
      ]
    },
    {
      'id': "sc-15",
      'title': "Scala 与 Spark 的关系",
      'summary': "理解 Spark 为何用 Scala 编写及核心 API 概念。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "Apache Spark 是使用 Scala 编写的大数据处理框架。理解 Spark 的核心概念（RDD、DataFrame、SparkSession）是学习大数据开发的基础。"
        },
        {
          'type': "h",
          'text': "Spark 核心概念"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "SparkSession 入门",
          'code': "// Spark 入门示例\n// 需要引入 spark-sql 依赖\nimport org.apache.spark.sql.SparkSession\n\nval spark = SparkSession.builder()\n  .appName(\"Demo\")\n  .master(\"local[*]\")\n  .getOrCreate()\n\nimport spark.implicits._\n\n// 创建 DataFrame\nval df = Seq((1, \"小明\", 90), (2, \"小红\", 85), (3, \"小刚\", 78)).toDF(\"id\", \"name\", \"score\")\ndf.show()\n\n// 筛选\nval result = df.filter($\"score\" > 80)\nresult.show()\n\nspark.stop()"
        },
        {
          'type': "h",
          'text': "RDD 基础"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "RDD 操作",
          'code': "// RDD 是 Spark 最基础的数据抽象\nval data = Seq(1, 2, 3, 4, 5)\nval rdd = spark.sparkContext.parallelize(data)\n\n// 转换操作\nval doubled = rdd.map(x => x * 2)\nval filtered = rdd.filter(x => x > 2)\n\n// 行动操作\nprintln(doubled.collect().mkString(\", \"))\nprintln(filtered.count())"
        },
        {
          'type': "h",
          'text': "DataFrame API"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "DataFrame 操作",
          'code': "// DataFrame 更高级的 API\nval df = spark.read.csv(\"data.csv\")\ndf.createOrReplaceTempView(\"scores\")\n\nval result = spark.sql(\"\"\"\n  SELECT name, score,\n         CASE WHEN score >= 90 THEN \"优秀\"\n              WHEN score >= 80 THEN \"良好\"\n              ELSE \"及格\"\n         END as grade\n  FROM scores\n  WHERE score > 60\n  ORDER BY score DESC\n\"\"\")\nresult.show()"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Scala 与 Spark 的关系\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Scala 与 Spark 的关系\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Scala 与 Spark 的关系\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Spark 用 Scala 编写，API 最完善",
            "SparkSession 是入口点",
            "RDD 是低级 API，DataFrame 是高级 API",
            "SQL 和 DataFrame API 都可以使用"
          ]
        }
      ],
      'templates': [
        {
          'name': "简单数据分析",
          'code': "object SimpleAnalysis extends App {\n  import org.apache.spark.sql.SparkSession\n  val spark = SparkSession.builder().master(\"local[*]\").appName(\"test\").getOrCreate()\n  import spark.implicits._\n  \n  val data = Seq((\"小明\", 92), (\"小红\", 85), (\"小刚\", 78))\n  val df = data.toDF(\"name\", \"score\")\n  df.createOrReplaceTempView(\"scores\")\n  \n  val result = spark.sql(\"SELECT name, score FROM scores WHERE score >= 80\")\n  result.show()\n  spark.stop()\n}"
        }
      ]
    },
    {
      'id': "sc-16",
      'title': "工程化与实战：sbt 与项目结构",
      'summary': "学会使用 sbt 构建工具、Java 互调和项目最佳实践。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "学习 Scala 不只是学语法，还要学会工程化。sbt 是 Scala 的标准构建工具，类似 Maven 或 Gradle。掌握 sbt 能让你管理依赖、构建项目和运行测试。"
        },
        {
          'type': "h",
          'text': "sbt 项目结构"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "sbt 构建文件",
          'code': "// build.sbt 示例\nname := \"my-scala-project\"\nversion := \"1.0\"\nscalaVersion := \"2.13.12\"\n\nlibraryDependencies += \"org.apache.spark\" %% \"spark-sql\" % \"3.5.0\"\nlibraryDependencies += \"com.typesafe\" % \"config\" % \"1.4.3\"\n\n// 常用 sbt 命令\n// sbt compile     编译项目\n// sbt run         运行程序\n// sbt test        运行测试\n// sbt package     打包成 JAR\n// sbt clean       清理构建"
        },
        {
          'type': "h",
          'text': "与 Java 互调"
        },
        {
          'type': "code",
          'lang': "scala",
          'title': "Scala 调用 Java",
          'code': "// Scala 可以直接使用 Java 类\nimport java.util.ArrayList\nimport java.util.Arrays\n\nval list = new ArrayList[String]()\nlist.add(\"hello\")\nlist.add(\"world\")\nprintln(list)\n\n// Java 调用 Scala\n// Scala 的 object 会被编译成单例类\n// 方法用 static 调用"
        },
        {
          'type': "h",
          'text': "项目最佳实践"
        },
        {
          'type': "list",
          'items': [
            "优先使用不可变集合和 val",
            "用 Option 替代 null",
            "模式匹配处理复杂逻辑",
            "用 trait 定义接口，用 case class 定义数据",
            "编写单元测试（推荐 ScalaTest 或 specs2）"
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"工程化与实战：sbt 与项目结构\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"工程化与实战：sbt 与项目结构\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"工程化与实战：sbt 与项目结构\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "sbt 是 Scala 标准构建工具",
            "build.sbt 定义项目配置和依赖",
            "Scala 和 Java 代码可以互相调用",
            "不可变数据和模式匹配是核心实践"
          ]
        }
      ],
      'templates': [
        {
          'name': "sbt 项目模板",
          'code': "// 完整的 sbt 项目示例\n// build.sbt\nname := \"data-analysis\"\nversion := \"1.0\"\nscalaVersion := \"2.13.12\"\n\nlibraryDependencies ++= Seq(\n  \"org.apache.spark\" %% \"spark-sql\" % \"3.5.0\",\n  \"com.typesafe\" % \"config\" % \"1.4.3\"\n)\n\n// src/main/scala/Main.scala\nobject Main extends App {\n  println(\"项目构建成功！\")\n}"
        }
      ]
    }
  ]
});

