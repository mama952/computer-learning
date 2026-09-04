/* ============================================================
   计算机知识库 · 数据：Julia 完整课程（16 章，从下载安装到进阶实战）
   ============================================================ */
window.LANGUAGE_EXTRA = window.LANGUAGE_EXTRA || [];
window.LANGUAGE_EXTRA.push({
  'id': "julia",
  'name': "Julia",
  'icon': "Ju",
  'tagline': "动态语言的爽快 + C 的速度，科学计算的首选语言。",
  'intro': "这是一套从零开始的 Julia 完整课程。第 1 章教你下载安装，之后每一章都从大白话讲起，配可运行的示例代码和编辑器模板。学完这套课程，你将掌握 Julia 的语法、类型系统、并发编程、数值计算和数据科学，足以应对科学计算和机器学习的需求。",
  'meta': {
    "难度": "从零到进阶",
    "章节": "16 章",
    "场景": "科学计算/数值分析/机器学习"
  },
  'lessons': [
    {
      'id': "jl-1",
      'title': "Julia 是什么：动态语言的爽快 + C 的速度",
      'summary': "了解 Julia 的定位、多重派发和 JIT 编译优势。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "Julia 是一门专为科学计算设计的编程语言，于 2012 年发布。它的目标是让科学家既能享受 Python 一样的易写性，又能获得 C 语言一样的执行速度。Julia 的核心优势是多重派发（multiple dispatch）和 JIT（即时编译）技术。"
        },
        {
          'type': "h",
          'text': "为什么选择 Julia？"
        },
        {
          'type': "list",
          'items': [
            "JIT 编译让代码运行速度接近 C",
            "多重派发让代码组织更自然",
            "原生支持并行计算和分布式计算",
            "丰富的数学和科学计算库",
            "兼容 Python、R、MATLAB 生态"
          ]
        },
        {
          'type': "h",
          'text': "多重派发是什么？"
        },
        {
          'type': "p",
          'text': "多重派发是 Julia 的核心特性。函数可以根据所有参数的类型选择不同的实现，而不是只根据第一个参数（接收者）的类型。这让代码更灵活，不需要写大量 if/else 判断类型。"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "多重派发示例",
          'code': "# 定义通用函数\nf(x, y) = \"默认版本\"\n\n# 为不同类型定义方法\nf(x::Int, y::Int) = \"两个整数\"\nf(x::Float64, y::Float64) = \"两个浮点数\"\nf(x::String, y::String) = \"两个字符串\"\n\nprintln(f(1, 2))      # 两个整数\nprintln(f(1.5, 2.5))  # 两个浮点数\nprintln(f(\"a\", \"b\"))  # 两个字符串"
        },
        {
          'type': "info",
          'title': "Julia 和 Python 的关系",
          'text': "Julia 可以像 Python 一样交互运行，但执行速度通常快几十倍。Julia 也提供了 PyCall 包来调用 Python 代码，两者可以互补使用。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Julia 是什么：动态语言的爽快 + C 的速度\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Julia 是什么：动态语言的爽快 + C 的速度\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Julia 是什么：动态语言的爽快 + C 的速度\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Julia 专为科学计算设计，速度快且易用",
            "JIT 编译让代码即时编译为机器码",
            "多重派发根据参数类型选择方法",
            "适合数值计算、机器学习和数据分析"
          ]
        }
      ],
      'templates': [
        {
          'name': "Hello Julia",
          'code': "# 打印问候语\nprintln(\"Hello, Julia!\")\nprintln(\"我正在学习 Julia 编程\")\n\n# 简单的数学运算\nprintln(2 + 3)\nprintln(sqrt(16))"
        }
      ]
    },
    {
      'id': "jl-2",
      'title': "下载与安装 Julia",
      'summary': "从官网下载 Julia，配置环境变量，运行 REPL。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "安装 Julia 非常简单。Julia 官方提供完全免费的安装包，支持 Windows、macOS 和 Linux 三大系统。"
        },
        {
          'type': "h",
          'text': "下载 Julia"
        },
        {
          'type': "list",
          'items': [
            "打开官网：<a href=\"https://julialang.org/downloads/\" target=\"_blank\" rel=\"noopener\">https://julialang.org/downloads/</a>",
            "选择最新的稳定版本（目前推荐 1.10+）",
            "Windows 用户下载 Windows x86 64-bit installer",
            "安装完成后重启电脑使环境变量生效"
          ]
        },
        {
          'type': "h",
          'text': "验证安装"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "验证安装",
          'code': "# 打开终端，输入 julia 进入 REPL\njulia>\n\n# 查看版本\nprintln(versioninfo())\n\n# 运行简单计算\nprintln(2 + 3)\nprintln(5^3)\n\n# 退出 REPL\njulia> exit()"
        },
        {
          'type': "h",
          'text': "安装 Jupyter 支持"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "安装 IJulia",
          'code': "# 在 Julia REPL 中运行\nusing Pkg\nPkg.add(\"IJulia\")\n\n# 配置 Jupyter\nusing IJulia\njupyterlab()  # 启动 Jupyter Lab\n# 或\nnotebook()    # 启动 Jupyter Notebook"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"下载与安装 Julia\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"下载与安装 Julia\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"下载与安装 Julia\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Julia 从 julialang.org/downloads 下载",
            "安装后运行 julia 进入 REPL",
            "用 versioninfo() 查看版本信息",
            "Pkg.add() 安装包，IJulia 支持 Jupyter"
          ]
        }
      ],
      'templates': [
        {
          'name': "环境检测",
          'code': "# 查看版本信息\nprintln(versioninfo())\n\n# 查看已安装包\nusing Pkg\nPkg.status()"
        }
      ]
    },
    {
      'id': "jl-3",
      'title': "第一个程序与基础运算",
      'summary': "学会 println、变量赋值和基本运算符。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "Julia 的第一行代码通常是打印一句话。Julia 的语法简洁，和 Python 很像，但更强大。变量赋值用等号，不需要声明类型。"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "第一个程序",
          'code': "# 打印输出\nprintln(\"Hello, Julia!\")\nprintln(\"我的第一个 Julia 程序\")\n\n# 注释：以 # 开头\n# 这行不会被执行\n\n# 直接表达式会自动输出\n2 + 3\n10 * 5"
        },
        {
          'type': "h",
          'text': "变量赋值"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "变量与赋值",
          'code': "# 变量赋值\nname = \"小明\"\nage = 10\nheight = 1.55\nis_student = true\n\nprintln(name)\nprintln(age)\nprintln(height)\n\n# 变量可以重新赋值\nage = 11\nprintln(\"十年后：\", age)\n\n# 多变量同时赋值\na, b = 1, 2\nprintln(a, b)"
        },
        {
          'type': "h",
          'text': "算术运算符"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "算术运算",
          'code': "a = 15\nb = 4\n\nprintln(a + b)   # 加法：19\nprintln(a - b)   # 减法：11\nprintln(a * b)   # 乘法：60\nprintln(a / b)   # 除法：3.75\nprintln(a // b)  # 整除：3\nprintln(a % b)   # 取余：3\nprintln(a ^ b)   # 幂运算：506255\n\n# 字符串操作\nprintln(\"Hello\" * \" \" * \"World\")  # 拼接\nprintln(\"Ha\" ^ 3)  # 重复：HaHaHa"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"第一个程序与基础运算\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"第一个程序与基础运算\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"第一个程序与基础运算\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "println 输出到屏幕，# 是注释",
            "变量赋值用 =，不需要类型声明",
            "算术运算符：+ - * / // % ^",
            "// 是整除，% 是取余，^ 是幂"
          ]
        }
      ],
      'templates': [
        {
          'name': "计算器",
          'code': "# 简单计算器\na = 10\nb = 3\n\nprintln(\"a + b = \", a + b)\nprintln(\"a - b = \", a - b)\nprintln(\"a * b = \", a * b)\nprintln(\"a / b = \", a / b)\nprintln(\"a // b = \", a // b)\nprintln(\"a % b = \", a % b)\nprintln(\"a ^ b = \", a ^ b)"
        }
      ]
    },
    {
      'id': "jl-4",
      'title': "基础类型详解",
      'summary': "掌握 Int/Float/Bool/String 类型和类型推断。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "Julia 的类型系统很灵活，支持数值类型、字符串、布尔值等。Julia 会自动推断类型，但也可以显式声明。理解类型有助于写出更高效的代码。"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "数值类型",
          'code': "# 整数类型\nx::Int8 = 10\ny::Int16 = 100\nz::Int32 = 1000\nw::Int64 = 10000\n\nprintln(typeof(x))  # Int64（默认）\nprintln(typeof(y))\n\n# 无符号整数\nu::UInt8 = 255\n\n# 浮点数\na::Float32 = 3.14\nb::Float64 = 3.14159\n\nprintln(typeof(a))  # Float64（默认）\n\n# 复数\nc = 1 + 2im\nprintln(real(c))    # 1\nprintln(imag(c))    # 2"
        },
        {
          'type': "h",
          'text': "字符串与布尔"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "字符串和布尔",
          'code': "# 字符串\nname = \"小明\"\nprintln(typeof(name))  # String\n\n# 字符串插值\nage = 10\nprintln(\"我叫$name，今年$age岁\")\nprintln(\"圆周率是 pi ≈ $(3.14159)\")\n\n# 布尔值\nis_student = true\nis_raining = false\n\nprintln(typeof(is_student))  # Bool\nprintln(!is_student)  # 取反：false"
        },
        {
          'type': "h",
          'text': "类型转换"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "类型转换",
          'code': "# 类型转换函数\nprintln(Int(\"10\"))       # 10\nprintln(Float64(\"3.14\")) # 3.14\nprintln(String(65))      # \"A\"\nprintln(bool(1))         # true\nprintln(bool(0))         # false\n\n# 检查类型\nprintln(isinteger(10))      # true\nprintln(isfloat(3.14))      # true\nprintln(isa(\"hello\", String)) # true"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"基础类型详解\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"基础类型详解\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"基础类型详解\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Int64/Float64 是默认数值类型",
            "可以用 Int8/Int16/Int32 等节省内存",
            "字符串用双引号，支持插值 $var",
            "isa(x, Type) 检查类型，typeof(x) 获取类型"
          ]
        }
      ],
      'templates': [
        {
          'name': "类型侦探",
          'code': "# 查看类型\nprintln(typeof(10))        # Int64\nprintln(typeof(3.14))      # Float64\nprintln(typeof(\"hello\"))   # String\nprintln(typeof(true))      # Bool\n\n# 类型转换\nx = 10\nprintln(float(x))          # 10.0\nprintln(string(x))         # \"10\"\n\n# 数值范围\nprintln(typeof(typemax(Int64)))  # 最大值"
        }
      ]
    },
    {
      'id': "jl-5",
      'title': "算术与比较运算",
      'summary': "掌握比较运算符、NaN 陷阱和数学函数。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "Julia 的比较运算和数学函数非常完善。需要注意浮点数的精度问题和 NaN（Not a Number）的特殊行为。"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "比较运算",
          'code': "# 比较运算符\nprintln(5 > 3)     # true\nprintln(5 < 3)     # false\nprintln(5 == 5)    # true\nprintln(5 != 5)    # false\nprintln(5 >= 5)    # true\nprintln(5 <= 4)    # false\n\n# 链式比较（Julia 特色）\nprintln(1 < 2 < 3)  # true\nprintln(1 < 2 <= 3) # true\n\n# 类型稳定比较\nprintln(1 === 1)    # true（值和类型都相同）\nprintln(\"5\" == 5)   # false"
        },
        {
          'type': "h",
          'text': "NaN 和 Inf"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "特殊数值",
          'code': "# NaN（非数字）\nprintln(0.0 / 0.0)      # NaN\nprintln(sqrt(-1))        # NaN\nprintln(isnan(NaN))     # true\n\n# Inf（无穷大）\nprintln(1.0 / 0.0)      # Inf\nprintln(-1.0 / 0.0)     # -Inf\nprintln(isinf(Inf))     # true\n\n# NaN 的特殊行为\nprintln(NaN == NaN)     # false（NaN 不等于任何数）\nprintln(NaN < 5)        # false\nprintln(NaN > 5)        # false"
        },
        {
          'type': "h",
          'text': "数学函数"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "常用数学函数",
          'code': "println(sqrt(16))       # 4.0\nprintln(cbrt(27))       # 3.0\nprintln(exp(1))         # 2.718...\nprintln(log(10))        # 2.302...\nprintln(log2(8))        # 3.0\nprintln(log10(100))     # 2.0\nprintln(sin(π/2))       # 1.0\nprintln(cos(0))         # 1.0\nprintln(abs(-5))        # 5\nprintln(round(3.6))     # 4.0\nprintln(floor(3.9))     # 3.0\nprintln(ceil(3.1))      # 4.0"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"算术与比较运算\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"算术与比较运算\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"算术与比较运算\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "比较运算符：== != < > <= >=",
            "Julia 支持链式比较：1 < x < 10",
            "NaN 不等于任何数，包括自身",
            "sqrt/exp/log 等数学函数丰富"
          ]
        }
      ],
      'templates': [
        {
          'name': "数学运算模板",
          'code': "# 数学运算示例\nx = 10\ny = 3\n\nprintln(\"加：\", x + y)\nprintln(\"减：\", x - y)\nprintln(\"乘：\", x * y)\nprintln(\"除：\", x / y)\nprintln(\"整除：\", x // y)\nprintln(\"取余：\", x % y)\nprintln(\"幂：\", x ^ y)\nprintln(\"平方根：\", sqrt(x))\nprintln(\"正弦：\", sin(π/2))"
        }
      ]
    },
    {
      'id': "jl-6",
      'title': "字符串操作进阶",
      'summary': "掌握字符串插值、三引号、replace/trim 和正则。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "Julia 的字符串功能强大，支持插值、多行字符串、替换、搜索等多种操作。"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "字符串插值与多行字符串",
          'code': "# 字符串插值\nname = \"小明\"\nage = 10\nprintln(\"我叫$name，今年$age岁\")\nprintln(\"明年我将 $(age + 1) 岁\")\n\n# 三引号多行字符串\ntext = \"\"\"\n这是第一行\n这是第二行\n这是第三行\n\"\"\"\nprintln(text)\n\n# 原始字符串（不转义）\npath = r\"C:Users\name\"\nprintln(path)"
        },
        {
          'type': "h",
          'text': "字符串方法"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "常用字符串方法",
          'code': "s = \"  Hello, World!  \"\nprintln(trim(s))           # \"Hello, World!\"\nprintln(uppercase(s))      # \"  HELLO, WORLD!  \"\nprintln(lowercase(s))      # \"  hello, world!  \"\nprintln(replace(s, \"World\" => \"Julia\"))\nprintln(findfirst(\"o\", s)) # 5（第一个 o 的位置）\nprintln(endswith(s, \"!\"))  # true\nprintln(startswith(s, \"H\")) # false（有空格）\nprintln(split(s, \", \"))    # [\"  Hello\", \"World!  \"]\""
        },
        {
          'type': "h",
          'text': "parse 与 tryparse"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "解析字符串",
          'code': "# parse：转换失败会报错\nprintln(parse(Int, \"123\"))     # 123\nprintln(parse(Float64, \"3.14\")) # 3.14\n\n# tryparse：转换失败返回 nothing\nresult = tryparse(Int, \"abc\")\nprintln(isnothing(result))     # true\n\n# 字符串转字符\nprintln(first(\"hello\"))       # 'h'\nprintln(last(\"hello\"))        # 'o'\nprintln(iseven(length(\"hello\"))) # true"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"字符串操作进阶\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"字符串操作进阶\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"字符串操作进阶\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "$var 插值，$(expr) 执行表达式",
            "三个引号 \"\"\" 创建多行字符串",
            "trim/uppercase/lowercase/replace 是常用方法",
            "parse 和 tryparse 转换字符串到数值"
          ]
        }
      ],
      'templates': [
        {
          'name': "文本处理",
          'code': "# 文本处理示例\ntext = \"Julia is a great programming language\"\nprintln(uppercase(text))\nprintln(lowercase(text))\nprintln(replace(text, \"great\" => \"amazing\"))\nprintln(split(text))\nprintln(count(\"a\", text))\nprintln(startswith(text, \"Julia\"))"
        }
      ]
    },
    {
      'id': "jl-7",
      'title': "数组与矩阵",
      'summary': "掌握 Array 创建、索引、push!/pop! 和矩阵运算。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "Julia 的数组（Array）是核心数据结构，类似 Python 的列表但更强大。注意 Julia 的数组索引从 1 开始，这是新手最容易踩的坑。"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "数组创建",
          'code': "# 创建数组\nnums = [1, 2, 3, 4, 5]\nfruits = [\"苹果\", \"香蕉\", \"橙子\"]\nmixed = [1, \"hello\", 3.14, true]\n\nprintln(typeof(nums))      # Vector{Int64}\nprintln(length(nums))      # 5\nprintln(first(nums))       # 1\nprintln(last(nums))        # 5\n\n# 空数组\nempty = Int[]\nprintln(empty)"
        },
        {
          'type': "h",
          'text': "索引与切片"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "数组索引",
          'code': "# Julia 索引从 1 开始！\na = [10, 20, 30, 40, 50]\nprintln(a[1])      # 10（第一个）\nprintln(a[end])    # 50（最后一个）\nprintln(a[2:4])    # [20, 30, 40]\nprintln(a[1:2:end]) # [10, 30, 50]（步长2）\n\n# 负索引（从末尾开始）\nprintln(a[end-1])  # 40\n\n# 逻辑索引\nprintln(a[a .> 25]) # [30, 40, 50]"
        },
        {
          'type': "h",
          'text': "数组操作"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "增删改查",
          'code': "a = [1, 2, 3]\n\n# 添加元素\npush!(a, 4)        # [1, 2, 3, 4]\nappend!(a, [5, 6]) # [1, 2, 3, 4, 5, 6]\ninsert!(a, 2, 99)  # [1, 99, 2, 3, 4, 5, 6]\n\n# 删除元素\npop!(a)            # 删除最后一个，返回 6\npopfirst!(a)       # 删除第一个，返回 1\n\n# 修改元素\na[1] = 100\n\nprintln(sort(a))   # 排序\nprintln(reverse(a)) # 反转"
        },
        {
          'type': "h",
          'text': "矩阵 Matrix"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "矩阵创建与运算",
          'code': "# 创建矩阵\nm = [1 2 3; 4 5 6; 7 8 9]\nprintln(size(m))      # (3, 3)\nprintln(m[1, 2])     # 2（行, 列）\n\n# 矩阵运算\na = [1 2; 3 4]\nb = [5 6; 7 8]\nprintln(a + b)       # 矩阵加法\nprintln(a * b)       # 矩阵乘法\nprintln(a')         # 转置\nprintln(det(a))      # 行列式\nprintln(inv(a))      # 逆矩阵"
        },
        {
          'type': "warn",
          'title': "广播操作",
          'text': "Julia 用 . 前缀进行广播操作（逐元素运算）：<code.inline>a .+ 1</code.inline> 对数组每个元素加 1，<code.inline>a .* b</code.inline> 逐元素相乘。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"数组与矩阵\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"数组与矩阵\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"数组与矩阵\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Julia 数组索引从 1 开始",
            "push!/pop!/append!/insert! 操作数组",
            "a[row, col] 访问矩阵元素",
            "矩阵运算：+ - * ' det inv",
            ". 前缀是广播运算符"
          ]
        }
      ],
      'templates': [
        {
          'name': "矩阵运算",
          'code': "# 矩阵运算示例\nA = [1 2; 3 4]\nB = [5 6; 7 8]\n\nprintln(\"加法: \", A + B)\nprintln(\"乘法: \", A * B)\nprintln(\"转置: \", A')\nprintln(\"行列式: \", det(A))\nprintln(\"逆矩阵: \", inv(A))\n\n# 广播操作\nC = [1 2 3; 4 5 6]\nprintln(C .^ 2)\nprintln(C .+ 10)"
        }
      ]
    },
    {
      'id': "jl-8",
      'title': "字典与集合",
      'summary': "掌握 Dict 字典和 Set 集合的创建与操作。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "Julia 的字典（Dict）和集合（Set）类似于 Python 的字典和集合。Dict 用于键值对映射，Set 用于存储不重复的元素。"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "字典操作",
          'code': "# 创建字典\nd = Dict(\"name\" => \"小明\", \"age\" => 10, \"city\" => \"北京\")\nprintln(d[\"name\"])      # 小明\nprintln(d[\"age\"])       # 10\n\n# 添加元素\nd[\"score\"] = 92\nprintln(haskey(d, \"score\"))  # true\n\n# 删除元素\npop!(d, \"city\")\nprintln(get(d, \"city\", \"未知\"))  # 未知（默认值）\n\n# 遍历\nfor (k, v) in d\n  println(\"$k => $v\")\nend"
        },
        {
          'type': "h",
          'text': "集合操作"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "集合操作",
          'code': "# 创建集合\ns1 = Set([1, 2, 3, 4, 5])\ns2 = Set([4, 5, 6, 7, 8])\n\nprintln(union(s1, s2))   # 并集\nprintln(intersect(s1, s2)) # 交集\nprintln(setdiff(s1, s2))  # 差集\nprintln(issubset(s1, s2))  # 子集判断\n\n# 集合运算\npush!(s1, 10)\nprintln(pop!(s1))\nprintln(1 in s1)       # true"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"字典与集合\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"字典与集合\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"字典与集合\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Dict(key => value) 创建字典",
            "haskey/get 安全访问字典",
            "union/intersect/setdiff 集合运算",
            "Set 自动去重"
          ]
        }
      ],
      'templates': [
        {
          'name': "成绩统计",
          'code': "# 成绩统计示例\nscores = Dict(\"小明\" => 92, \"小红\" => 85, \"小刚\" => 78, \"小丽\" => 95)\nprintln(\"平均分: \", mean(values(scores)))\nprintln(\"最高分: \", maximum(values(scores)))\nprintln(\"最低分: \", minimum(values(scores)))\n\n# 查找及格学生\npassed = [k for (k, v) in scores if v >= 80]\nprintln(\"及格学生: \", passed)"
        }
      ]
    },
    {
      'id': "jl-9",
      'title': "条件与循环",
      'summary': "掌握 if/else、for/while 循环和 enumerate。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "Julia 的控制流语句和 Python 类似，但更灵活。for 循环可以配合 enumerate 使用，while 循环和 if/else 表达式也很常用。"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "条件语句",
          'code': "# if/elseif/else\nx = 10\nif x > 0\n  println(\"正数\")\nelseif x < 0\n  println(\"负数\")\nelse\n  println(\"零\")\nend\n\n# 三元运算符\nresult = x > 0 ? \"正数\" : \"非正数\"\nprintln(result)\n\n# if 表达式可以返回值\nstatus = if x > 0\n  \"正数\"\nelseif x == 0\n  \"零\"\nelse\n  \"负数\"\nend"
        },
        {
          'type': "h",
          'text': "for 循环"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "for 循环",
          'code': "# 基本 for 循环\nfor i in 1:5\n  println(i)\nend\n\n# 遍历数组\nfruits = [\"苹果\", \"香蕉\", \"橙子\"]\nfor f in fruits\n  println(f)\nend\n\n# enumerate 带索引\nfor (i, f) in enumerate(fruits)\n  println(\"$i: $f\")\nend\n\n# 嵌套循环\nfor i in 1:3, j in 1:3\n  println(\"($i, $j)\")\nend"
        },
        {
          'type': "h",
          'text': "while 循环"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "while 循环",
          'code': "# while 循环\ncount = 1\nwhile count <= 5\n  println(count)\n  global count += 1\nend\n\n# break 和 continue\nfor i in 1:10\n  if i % 3 == 0\n    continue  # 跳过 3 的倍数\n  end\n  if i > 7\n    break     # 超过 7 停止\n  end\n  println(i)\nend"
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
            "if/elseif/else 条件判断",
            "三元运算符 ? : 简化条件",
            "for i in range 遍历范围",
            "enumerate 同时获取索引和值",
            "break 跳出循环，continue 跳过本次"
          ]
        }
      ],
      'templates': [
        {
          'name': "筛选偶数",
          'code': "# 筛选偶数\nnums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\n# 方法一：循环\nfor n in nums\n  if n % 2 == 0\n    println(n, \" 是偶数\")\n  end\nend\n\n# 方法二：理解式\neven_nums = [n for n in nums if n % 2 == 0]\nprintln(even_nums)"
        }
      ]
    },
    {
      'id': "jl-10",
      'title': "函数定义与高阶函数",
      'summary': "掌握 function 定义、多返回值、可选参数和匿名函数。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "Julia 的函数定义灵活，支持多返回值、可选参数、命名参数和可变参数。函数是一等公民，可以作为参数传递。"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "基本函数",
          'code': "# 定义函数\nfunction greet(name::String)\n  return \"你好，$name!\"\nend\nprintln(greet(\"小明\"))\n\n# 单行函数（简洁写法）\ngreet2(name) = \"你好，$name!\"\n\n# 多返回值\nfunction stats(arr)\n  return maximum(arr), minimum(arr), mean(arr)\nend\nmax_val, min_val, avg = stats([1, 2, 3, 4, 5])\nprintln(\"最大值: $max_val, 最小值: $min_val, 平均值: $avg\")"
        },
        {
          'type': "h",
          'text': "参数类型"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "可选与命名参数",
          'code': "# 可选参数\nfunction power(base, exp=2)\n  return base ^ exp\nend\nprintln(power(3))     # 9\nprintln(power(3, 3))  # 27\n\n# 命名参数\nfunction introduce(name::String, age::Int; city::String=\"北京\")\n  return \"我是$name，$age岁，来自$city\"\nend\nprintln(introduce(\"小明\", 10))\nprintln(introduce(\"小红\", 12, city=\"上海\"))\n\n# 可变参数\nfunction sum_all(nums...)\n  return sum(nums)\nend\nprintln(sum_all(1, 2, 3, 4, 5))"
        },
        {
          'type': "h",
          'text': "匿名函数与高阶函数"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "匿名函数",
          'code': "# 匿名函数\nsquare = x -> x^2\nprintln(square(5))\n\n# map/filter/reduce\nnums = [1, 2, 3, 4, 5]\nprintln(map(square, nums))        # 每个元素平方\nprintln(filter(x -> x > 2, nums)) # 过滤大于2的\nprintln(reduce(+, nums))          # 求和\n\n# 组合函数\nf = x -> x + 1\ng = x -> x * 2\nh = x -> f(g(x))  # 先 g 后 f\nprintln(h(3))  # 8"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"函数定义与高阶函数\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"函数定义与高阶函数\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"函数定义与高阶函数\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "function 定义函数，可以省略 function",
            "支持多返回值，用逗号分隔",
            "可选参数放最后，命名参数用 ;",
            "高阶函数 map/filter/reduce 很实用"
          ]
        }
      ],
      'templates': [
        {
          'name': "函数模板",
          'code': "# 函数定义模板\n# 基本函数\nfunction add(a, b)\n  return a + b\nend\n\n# 带默认参数\nfunction greet(name, greeting=\"你好\")\n  return \"$greeting，$name！\"\nend\n\n# 匿名函数\nsquare = x -> x^2\nsquares = map(square, 1:5)\nprintln(squares)"
        }
      ]
    },
    {
      'id': "jl-11",
      'title': "多重派发与类型标注",
      'summary': "深入理解多重派发机制和性能优化技巧。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "多重派发是 Julia 的核心特性。函数方法根据所有参数的类型选择，这让你可以写出非常灵活的代码。类型标注可以帮助编译器生成更高效的代码。"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "多重派发示例",
          'code': "# 定义通用函数\nadd(x, y) = x + y\n\n# 为不同类型定义方法\nadd(x::Int, y::Int) = x + y\nadd(x::Float64, y::Float64) = x + y\nadd(x::String, y::String) = x * y\n\nprintln(add(1, 2))        # 3\nprintln(add(1.5, 2.5))    # 4.0\nprintln(add(\"Hello\", \"World\"))  # \"HelloWorld\""
        },
        {
          'type': "h",
          'text': "方法重载"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "方法重载",
          'code': "# 定义通用函数\ndescribe(x) = \"未知类型: $(typeof(x))\"\n\ndescribe(x::Int) = \"整数: $x\"\ndescribe(x::Float64) = \"浮点数: $x\"\ndescribe(x::String) = \"字符串: $x\"\ndescribe(x::Vector{Int}) = \"整数数组: $x\"\n\nprintln(describe(42))\nprintln(describe(3.14))\nprintln(describe(\"hello\"))\nprintln(describe([1, 2, 3]))"
        },
        {
          'type': "h",
          'text': "性能优化"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "@time 性能分析",
          'code': "# 使用 @time 宏分析性能\n@time sum(1:1000000)\n\n# 类型标注提升性能\nfunction optimized_sum(arr::Vector{Float64})\n  total = 0.0\n  for x in arr\n    total += x\n  end\n  return total\nend\n\n@time optimized_sum(rand(1000000))\n\n# 避免全局变量\nglobal_sum() = sum(1:1000000)\n@time global_sum()"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"多重派发与类型标注\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"多重派发与类型标注\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"多重派发与类型标注\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "多重派发根据所有参数类型选择方法",
            "函数方法可以用 methods() 查看",
            "类型标注帮助 JIT 编译优化",
            "@time 宏用于性能分析"
          ]
        }
      ],
      'templates': [
        {
          'name': "类型分发",
          'code': "# 多重派发示例\nfunction process(x)\n  println(\"默认: \", x)\nend\n\nfunction process(x::Int)\n  println(\"整数: \", x)\nend\n\nfunction process(x::String)\n  println(\"字符串: \", x)\nend\n\nfunction process(x::Vector)\n  println(\"数组: \", join(x, \", \"))\nend\n\nprocess(10)\nprocess(\"hello\")\nprocess([1, 2, 3])"
        }
      ]
    },
    {
      'id': "jl-12",
      'title': "模块化与包管理",
      'summary': "学会 module 定义、using/using Pkg 和包管理。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "Julia 的包管理系统非常强大。用 <code.inline>using Pkg</code.inline> 可以安装、更新、管理包。JuliaHub 是 Julia 包的官方仓库，类似 Python 的 PyPI。"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "包管理",
          'code': "using Pkg\n\n# 添加包\nPkg.add(\"DataFrames\")\nPkg.add(\"Plots\")\n\n# 查看已安装包\nPkg.status()\n\n# 更新包\nPkg.update()\n\n# 删除包\nPkg.rm(\"旧包名\")\n\n# 从 GitHub 安装\nPkg.add(url=\"https://github.com/user/package.jl\")"
        },
        {
          'type': "h",
          'text': "模块定义"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "模块与 using",
          'code': "# 定义模块\nmodule MyModule\n\n  export greet, add\n  \n  function greet(name)\n    return \"你好，$name!\"\n  end\n  \n  function add(a, b)\n    return a + b\n  end\n  \n  function private_func()\n    return \"这是私有的\"\n  end\nend\n\nusing .MyModule\nprintln(greet(\"小明\"))\nprintln(add(1, 2))\n\n# 使用全名调用\nprintln(MyModule.greet(\"小红\"))"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"模块化与包管理\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"模块化与包管理\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"模块化与包管理\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Pkg.add() 安装包，Pkg.status() 查看状态",
            "module/end 定义模块，export 导出函数",
            "using ModuleName 导入模块",
            "JuliaHub 是官方包仓库"
          ]
        }
      ],
      'templates': [
        {
          'name': "模块模板",
          'code': "# 模块定义模板\nmodule MathUtils\nexport add, subtract, multiply\n\nfunction add(a, b)\n  return a + b\nend\n\nfunction subtract(a, b)\n  return a - b\nend\n\nfunction multiply(a, b)\n  return a * b\nend\n\nend\n\nusing .MathUtils\nprintln(add(1, 2))"
        }
      ]
    },
    {
      'id': "jl-13",
      'title': "数值计算与线性代数",
      'summary': "掌握 LinearAlgebra 标准库和数值运算。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "Julia 内置了强大的线性代数功能，通过 LinearAlgebra 标准库提供。矩阵运算、特征值分解、数值积分等都是 Julia 的强项。"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "LinearAlgebra 基础",
          'code': "using LinearAlgebra\n\n# 矩阵运算\nA = [1 2; 3 4]\nB = [5 6; 7 8]\n\nprintln(A + B)      # 矩阵加法\nprintln(A * B)      # 矩阵乘法\nprintln(A')         # 转置\nprintln(det(A))     # 行列式\nprintln(inv(A))     # 逆矩阵\nprintln(eigvals(A)) # 特征值\nprintln(norm(A))    # 范数\n\n# 特殊矩阵\nprintln(zeros(3, 3))\nprintln(ones(3, 3))\nprintln(eye(3))\nprintln(rand(3, 3))\nprintln(diagm(0 => [1, 2, 3]))"
        },
        {
          'type': "h",
          'text': "数值求解"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "线性方程组求解",
          'code': "# 解线性方程组 Ax = b\nA = [1 2; 3 4]\nb = [5, 6]\n\n# 方法一：逆矩阵\nx1 = A \\ b\nprintln(x1)\n\n# 方法二：lu 分解\nF = lu(A)\nx2 = F \\ b\nprintln(x2)\n\n# 特征值问题\nA = [1 2; 3 4]\nvals, vecs = eigen(A)\nprintln(\"特征值: \", vals)\nprintln(\"特征向量: \", vecs)"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"数值计算与线性代数\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"数值计算与线性代数\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"数值计算与线性代数\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "using LinearAlgebra 导入线性代数库",
            "\\ 运算符求解线性方程组",
            "eigen() 计算特征值",
            "zeros/ones/rand/eye 创建特殊矩阵"
          ]
        }
      ],
      'templates': [
        {
          'name': "矩阵运算模板",
          'code': "using LinearAlgebra\n\n# 矩阵运算\nA = rand(3, 3)\nB = rand(3, 3)\n\nprintln(\"矩阵 A:\\n\", A)\nprintln(\"矩阵 B:\\n\", B)\nprintln(\"A + B:\\n\", A + B)\nprintln(\"A * B:\\n\", A * B)\nprintln(\"det(A): \", det(A))\nprintln(\"eigvals(A): \", eigen(A).values)\n\n# 求解方程组\nb = rand(3)\nx = A \\ b\nprintln(\"解: \", x)"
        }
      ]
    },
    {
      'id': "jl-14",
      'title': "数据科学：DataFrames",
      'summary': "学会 DataFrame 创建、列操作、CSV 读写和数据处理。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "DataFrames.jl 是 Julia 最流行的数据处理包，类似 Python 的 pandas。它可以高效地处理表格数据，支持筛选、分组、合并等操作。"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "DataFrame 基础",
          'code': "using DataFrames\n\n# 创建 DataFrame\ndf = DataFrame(\n  name = [\"小明\", \"小红\", \"小刚\", \"小丽\"],\n  age = [10, 11, 10, 12],\n  score = [92, 85, 78, 95]\n)\n\nprintln(df)\nprintln(typeof(df))\nprintln(size(df))\nprintln(names(df))\nprintln(df[:, :name])"
        },
        {
          'type': "h",
          'text': "数据操作"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "筛选与排序",
          'code': "using DataFrames\n\ndf = DataFrame(\n  name = [\"小明\", \"小红\", \"小刚\", \"小丽\"],\n  score = [92, 85, 78, 95]\n)\n\n# 筛选\nhigh_score = df[df.score .> 85, :]\nprintln(high_score)\n\n# 排序\nsorted_df = sort(df, :score, rev=true)\nprintln(sorted_df)\n\n# 添加列\ndf.grade = [\"优秀\", \"良好\", \"及格\", \"优秀\"]\nprintln(df)\n\n# 删除列\ndropcols!(df, :grade)\nprintln(df)"
        },
        {
          'type': "h",
          'text': "CSV 读写"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "CSV 操作",
          'code': "using DataFrames, CSV\n\n# 读取 CSV\ndf = CSV.read(\"data.csv\", DataFrame)\nprintln(df)\nprintln(size(df))\n\n# 写入 CSV\nCSV.write(\"output.csv\", df)\n\n# 查看信息\nprintln(first(df, 5))\nprintln(last(df, 5))\nprintln(describe(df))"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"数据科学：DataFrames\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"数据科学：DataFrames\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"数据科学：DataFrames\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "DataFrame 是表格数据结构",
            "df[df.col .> 条件, :] 筛选数据",
            "sort/groupby 进行排序和分组",
            "CSV.read/write 读写 CSV 文件"
          ]
        }
      ],
      'templates': [
        {
          'name': "成绩分析",
          'code': "using DataFrames\n\n# 创建数据\ndf = DataFrame(\n  name = [\"小明\", \"小红\", \"小刚\", \"小丽\", \"小强\"],\n  math = [92, 85, 78, 95, 88],\n  chinese = [88, 90, 82, 93, 85]\n)\n\n# 分析\nprintln(\"平均分：\")\nprintln(mean(df.math))\nprintln(mean(df.chinese))\n\nprintln(\"最高分：\")\nprintln(maximum(df.math))\nprintln(maximum(df.chinese))\n\n# 排序\nsorted = sort(df, :math, rev=true)\nprintln(sorted)"
        }
      ]
    },
    {
      'id': "jl-15",
      'title': "可视化与绘图",
      'summary': "掌握 Plots.jl 和 Makie.jl，创建各类图形。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "Julia 有多种绘图包，最常用的是 Plots.jl 和 Makie.jl。Plots 简单易用，Makie 更强大但学习曲线稍陡。本章主要学习 Plots。"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "Plots 基础",
          'code': "using Plots\n\n# 绘制散点图\nx = 1:10\ny = x.^2\nscatter(x, y, label=\"散点图\", title=\"平方关系\")\n\n# 绘制折线图\nplot(x, y, label=\"折线图\", lw=2)\n\n# 绘制直方图\nusing Random\nhistogram(randn(1000), label=\"正态分布\", bins=30)\n\n# 绘制多个图形\nplt = plot(layout=(2,2), size=(800,600))\nplot!(plt[1], x, x, label=\"直线\")\nplot!(plt[2], x, x.^2, label=\"平方\")\nplot!(plt[3], x, sin.(x), label=\"正弦\")\nplot!(plt[4], x, cos.(x), label=\"余弦\")\n\n# 保存图形\nsavefig(\"plot.png\")"
        },
        {
          'type': "h",
          'text': "交互式图形"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "Makie 示例",
          'code': "# 安装 Makie\n# using Pkg; Pkg.add(\"Makie\")\n\nusing Makie\n\n# 创建图形\nfig = Figure(size=(800, 600))\nax = Axis(fig[1, 1], title=\"示例图形\")\n\n# 绘制数据\nx = 1:10\ny = x.^2\nscatter!(ax, x, y, color=:blue, markersize=10)\nlines!(ax, x, y, color=:red)\n\n# 显示图形\ndisplay(fig)"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"可视化与绘图\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"可视化与绘图\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"可视化与绘图\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Plots.jl 简单易用，Makie.jl 功能更强大",
            "scatter/plot/histogram 是常用图形",
            "layout 创建多子图布局",
            "savefig 保存图形"
          ]
        }
      ],
      'templates': [
        {
          'name': "图形模板",
          'code': "using Plots\n\n# 绘制函数图像\nx = linspace(-pi, pi, 100)\ny1 = sin.(x)\ny2 = cos.(x)\n\nplot(x, y1, label=\"sin(x)\", linewidth=2)\nplot!(x, y2, label=\"cos(x)\", linewidth=2)\nxlabel!(\"x\")\nylabel!(\"y\")\ntitle!(\"三角函数图像\")\ngrid!(true)\nlegend(:topright)\n\nsavefig(\"trig.png\")"
        }
      ]
    },
    {
      'id': "jl-16",
      'title': "实战项目：科学计算流程",
      'summary': "完成从数据加载到可视化的完整科学计算项目。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章将前面所学知识串联起来，完成一个完整的科学计算项目。我们将使用内置数据集或生成的随机数据，演示数据分析的完整流程。"
        },
        {
          'type': "h",
          'text': "步骤一：加载数据"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "数据加载",
          'code': "using DataFrames, CSV, Random\n\n# 生成示例数据\nRandom.seed!(42)\nn = 100\ndata = DataFrame(\n  id = 1:n,\n  x = randn(n),\n  y = 2 .* randn(n) .+ 1,\n  group = rand([\"A\", \"B\", \"C\"], n)\n)\n\nprintln(first(data, 5))\nprintln(size(data))\nprintln(describe(data))"
        },
        {
          'type': "h",
          'text': "步骤二：数据清洗"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "数据清洗",
          'code': "using DataFrames\n\n# 添加噪声\nRandom.seed!(42)\ndata.random_noise = randn(n)\n\n# 处理缺失值\nprintln(sum(ismissing.(data.x)))\n\n# 创建新列\ndata.category = ifelse.(data.x .> 0, \"正\", \"负\")\nprintln(first(data, 5))"
        },
        {
          'type': "h",
          'text': "步骤三：统计分析"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "统计分析",
          'code': "using DataFrames, Statistics\n\n# 分组统计\nresult = combine(groupby(data, :group),\n  :x => mean => \"mean_x\",\n  :x => std => \"std_x\",\n  :y => mean => \"mean_y\"\n)\nprintln(result)\n\n# 相关性\nprintln(cor(data.x, data.y))"
        },
        {
          'type': "h",
          'text': "步骤四：可视化"
        },
        {
          'type': "code",
          'lang': "julia",
          'title': "可视化",
          'code': "using Plots\n\n# 分组散点图\nscatter(data.x, data.y, group=data.group,\n  label=\"\", title=\"分组散点图\",\n  xlabel=\"x\", ylabel=\"y\", legend=:topleft\n)\n\n# 保存\nsavefig(\"scatter.png\")\n\n# 直方图\nhistogram(data.x, bins=20, label=\"x分布\", alpha=0.7)\nsavefig(\"hist.png\")"
        },
        {
          'type': "h",
          'text': "下一步"
        },
        {
          'type': "p",
          'text': "完成分析后，你可以尝试用 <a href='https://github.com/JuliaData/CSV.jl' target='_blank' rel='noopener'>CSV.jl</a> 读取真实数据，或用 <a href='https://github.com/FluxML/Flux.jl' target='_blank' rel='noopener'>Flux.jl</a> 进行机器学习建模。Jupyter Notebook 也是展示分析结果的好工具。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"实战项目：科学计算流程\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"实战项目：科学计算流程\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"实战项目：科学计算流程\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "DataFrames 是数据处理核心包",
            "combine/groupby 进行分组聚合",
            "Plots 创建可视化图形",
            "Jupyter + Julia 是交互式分析的好组合"
          ]
        }
      ],
      'templates': [
        {
          'name': "完整分析流程",
          'code': "using DataFrames, Plots, Random, Statistics\n\n# 生成数据\nRandom.seed!(42)\nn = 200\ndf = DataFrame(\n  x = randn(n),\n  y = 2 .* randn(n) .+ 1,\n  group = rand([\"A\", \"B\", \"C\"], n)\n)\n\n# 分析\nmean_x = mean(groupby(df, :group).x)\nmean_y = mean(groupby(df, :group).y)\n\n# 可视化\nscatter(df.x, df.y, group=df.group, label=\"\",\n  title=\"数据分析示例\", xlabel=\"x\", ylabel=\"y\")\nsavefig(\"analysis.png\")\n\nprintln(\"分析完成！\")"
        }
      ]
    }
  ]
});

