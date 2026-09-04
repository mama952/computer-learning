/* ============================================================
   计算机知识库 · 数据：R 完整课程（16 章，从下载安装到进阶实战）
   ============================================================ */
window.LANGUAGE_EXTRA = window.LANGUAGE_EXTRA || [];
window.LANGUAGE_EXTRA.push({
  'id': "r-lang",
  'name': "R",
  'icon': "R",
  'tagline': "统计学家的首选语言，从下载安装到数据科学的完整课程。",
  'intro': "这是一套从零开始的 R 完整课程。第 1 章教你下载安装，之后每一章都从大白话讲起，配可运行的示例代码和编辑器模板。学完这套课程，你将掌握 R 的语法、数据结构、数据处理、可视化、统计分析、包管理和实战项目，足以应对数据分析和科学计算的日常需求。",
  'meta': {
    "难度": "从零到进阶",
    "章节": "16 章",
    "场景": "统计分析/数据科学/学术科研"
  },
  'lessons': [
    {
      'id': "r-1",
      'title': "R 是什么：统计学家的首选语言",
      'summary': "了解 R 的历史、定位和 Tidyverse 生态。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "R 是一门专为统计计算和数据分析而生的编程语言。它由统计学家编写，也被统计学家广泛使用。R 最初由新西兰奥克兰大学的 Ross Ihaka 和 Robert Gentleman 在 1993 年发布，现在是全球数据科学家和统计分析师最常用的工具之一。"
        },
        {
          'type': "h",
          'text': "为什么选 R？"
        },
        {
          'type': "list",
          'items': [
            "强大的统计分析能力，内置大量统计方法",
            "丰富的可视化功能，尤其是 ggplot2",
            "包生态极其丰富，CRAN 上有 20000+ 个包",
            "学术界和药企广泛使用，尤其是生物统计领域",
            "完全免费开源，社区活跃"
          ]
        },
        {
          'type': "h",
          'text': "Tidyverse 生态"
        },
        {
          'type': "p",
          'text': "Tidyverse 是一组 R 包的集合，由 <a href='https://www.tidyverse.org' target='_blank' rel='noopener'>Hadley Wickham</a> 等人开发，提供了一致、易学的数据处理工具。核心包包括 dplyr（数据处理）、ggplot2（可视化）、tidyr（数据整理）、readr（读取数据）等。现代 R 编程几乎都离不开 Tidyverse。"
        },
        {
          'type': "info",
          'title': "R 和 RStudio 的关系",
          'text': "R 是编程语言本身，RStudio 是 R 的集成开发环境（IDE）。就像 Python 和 VS Code 的关系。RStudio 提供代码编辑、绘图窗口、包管理、环境变量等一体化功能，强烈推荐搭配使用。"
        },
        {
          'type': "warn",
          'title': "R 不是 Python 的替代品",
          'text': "R 在统计分析和可视化方面很强，但在通用编程、Web 开发、机器学习工程化方面不如 Python。两者可以互补使用。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"R 是什么：统计学家的首选语言\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"R 是什么：统计学家的首选语言\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"R 是什么：统计学家的首选语言\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "R 是专为统计计算设计的开源语言",
            "CRAN 包生态丰富，Tidyverse 是现代 R 编程核心",
            "RStudio 是推荐使用的 IDE",
            "R 适合数据分析，Python 适合通用编程"
          ]
        }
      ],
      'templates': [
        {
          'name': "查看版本和包列表",
          'code': "# 查看 R 版本\nR.version.string\n\n# 查看所有已安装的包\ninstalled.packages()[, \"Package\"]"
        }
      ]
    },
    {
      'id': "r-2",
      'title': "下载与安装 R 和 RStudio",
      'summary': "从官网下载 R 和 RStudio，三步装好开发环境。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "学习 R 的第一步是安装两个软件：R（语言本体）和 RStudio（编辑器）。它们是完全免费的，按照以下步骤操作即可。"
        },
        {
          'type': "h",
          'text': "第一步：安装 R"
        },
        {
          'type': "list",
          'items': [
            "打开 R 官方下载页：<a href='https://cran.r-project.org/' target='_blank' rel='noopener'>https://cran.r-project.org/</a>",
            "点击左侧『Download R for Windows』",
            "点击『install R for the first time』链接",
            "下载最新的 .exe 安装包（通常是 64 位版本）",
            "双击运行安装包，一路点击『下一步』即可完成安装"
          ]
        },
        {
          'type': "h",
          'text': "第二步：安装 RStudio"
        },
        {
          'type': "list",
          'items': [
            "打开 RStudio 官网：<a href='https://posit.co/download/rstudio-desktop' target='_blank' rel='noopener'>https://posit.co/download/rstudio-desktop</a>",
            "点击『Download RStudio Desktop』",
            "选择免费个人版（RStudio Desktop Open Source Edition）",
            "根据你的系统选择 Windows / macOS / Linux 安装包",
            "双击运行安装包，一路点击『下一步』完成安装"
          ]
        },
        {
          'type': "h",
          'text': "第三步：验证安装"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "打开 RStudio 并运行测试代码",
          'code': "# 安装完成后打开 RStudio\n# 在 Console（控制台）里输入以下代码并回车\n\n# 查看 R 版本\nprint(R.version.string)\n\n# 运行一个简单的计算\n2 + 2\n\n# 如果看到输出结果，说明安装成功！"
        },
        {
          'type': "info",
          'title': "RStudio 界面简介",
          'text': "RStudio 默认分四个面板：左上是代码编辑区（Source），左下是控制台（Console），右上是环境变量和历史记录（Environment/History），右下是文件/包/帮助/绘图（Files/Plots/Packages/Help）。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"下载与安装 R 和 RStudio\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"下载与安装 R 和 RStudio\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"下载与安装 R 和 RStudio\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "R 从 CRAN 下载：cran.r-project.org",
            "RStudio 从 Posit 下载：posit.co/download/rstudio-desktop",
            "R 是语言，RStudio 是编辑器，两者配套使用",
            "安装后打开 RStudio 运行 2+2 验证是否成功"
          ]
        }
      ],
      'templates': [
        {
          'name': "Hello R",
          'code': "print(\"Hello, R!\")\nprint(\"我准备好学习数据分析了\")"
        }
      ]
    },
    {
      'id': "r-3",
      'title': "第一个程序与基础运算",
      'summary': "学会用 print 输出、<- 赋值和基本算术运算。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "R 的第一行代码通常是从打印一句话开始。R 用 <code.inline>print()</code.inline> 输出，但 R 有个特殊之处：如果你只写一个表达式，R 会自动打印它，不需要 print 也可以。"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "最简单的输出",
          'code': "# 方式1：直接写表达式，R 自动打印\n2 + 3\n\n# 方式2：用 print 函数显式输出\nprint(\"你好，R 语言！\")\n\n# 方式3：cat 函数（更灵活的控制输出格式）\ncat(\"行1\n行2\n\")"
        },
        {
          'type': "h",
          'text': "赋值：用 <- 或 ="
        },
        {
          'type': "p",
          'text': "R 的赋值符号是 <code.inline><-</code.inline>（箭头），这是 R 的经典写法。你也可以用等号 <code.inline>=</code.inline>，效果一样。推荐新手使用箭头，更符合 R 的风格。"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "赋值与变量",
          'code': "# 赋值（两种写法都可以）\nx <- 10\ny = 20\n\n# 查看变量\nprint(x)\nprint(y)\n\n# 算术运算\nsum_result <- x + y    # 加法\ndiff <- x - y          # 减法\nproduct <- x * y       # 乘法\nquotient <- x / y      # 除法\nremainder <- x %% y    # 取余\ncube <- x ^ 2          # 幂运算\n\nprint(sum_result)\nprint(remainder)\nprint(cube)"
        },
        {
          'type': "h",
          'text': "常用运算符"
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
              "+",
              "-",
              "*",
              "/"
            ],
            [
              "加减乘除",
              "3 + 2 = 5",
              ""
            ],
            [
              "%%",
              "取余",
              "5 %% 2 = 1"
            ],
            [
              "%/%",
              "整除",
              "5 %/% 2 = 2"
            ],
            [
              "^ 或 **",
              "幂运算",
              "2 ^ 3 = 8"
            ]
          ]
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
            "print() 输出，或写表达式 R 自动打印",
            "赋值用 <- 或 =，推荐 <-",
            "算术运算符：+ - * / %% %/% ^",
            "R 大小写敏感：x 和 X 是不同的变量"
          ]
        }
      ],
      'templates': [
        {
          'name': "简单计算器",
          'code': "a <- 15\nb <- 4\nprint(a + b)   # 加法\nprint(a - b)   # 减法\nprint(a * b)   # 乘法\nprint(a / b)   # 除法\nprint(a %% b)  # 取余\nprint(a ^ b)   # 幂"
        }
      ]
    },
    {
      'id': "r-4",
      'title': "向量 Vector：R 最基础的数据结构",
      'summary': "学会用 c() 创建向量、索引、向量化运算和 NA 处理。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "向量是 R 中最基本的数据结构，它就像一排放置着多个值的盒子。用 <code.inline>c()</code.inline> 函数（combine 的缩写）可以创建向量。和其他语言不同，R 的向量索引从 1 开始，这是新手最容易踩的坑。"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "创建向量",
          'code': "# 创建数值向量\nnumbers <- c(1, 2, 3, 4, 5)\nprint(numbers)\n\n# 创建字符向量\nfruits <- c(\"苹果\", \"香蕉\", \"橙子\")\nprint(fruits)\n\n# 用冒号创建连续向量\nsequence <- 1:10\nprint(sequence)    # 1 2 3 4 5 6 7 8 9 10\n\n# 用 seq() 创建带步长的向量\nprint(seq(0, 1, by = 0.2))   # 0.0 0.2 0.4 0.6 0.8 1.0\n\n# 用 rep() 重复元素\nprint(rep(\"Hi\", 3))   # \"Hi\" \"Hi\" \"Hi\""
        },
        {
          'type': "h",
          'text': "向量索引：从 1 开始"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "向量的索引与切片",
          'code': "nums <- c(10, 20, 30, 40, 50)\n\n# 索引从 1 开始！\nprint(nums[1])   # 10（第一个元素）\nprint(nums[3])   # 30\n\n# 负索引表示排除\nprint(nums[-1])  # 排除第一个\nprint(nums[-c(1, 3)])  # 排除第1和第3个\n\n# 逻辑索引\nprint(nums[nums > 25])   # 30 40 50\n\n# 使用 which() 找到满足条件的位置\nprint(which(nums > 25))   # 3 4 5"
        },
        {
          'type': "h",
          'text': "向量化运算"
        },
        {
          'type': "p",
          'text': "R 的一大特色是向量化的运算：你不需要写循环，对整个向量进行运算会自动应用到每个元素。"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "向量化运算",
          'code': "x <- c(1, 2, 3, 4, 5)\n\n# 对整个向量运算\nprint(x + 10)        # 11 12 13 14 15\nprint(x * 2)         # 2 4 6 8 10\nprint(sqrt(x))       # 1 1.414 1.732 2 2.236\n\n# 两个向量对应位置运算\na <- c(1, 2, 3)\nb <- c(10, 20, 30)\nprint(a + b)         # 11 22 33\n\n# 常用向量函数\nprint(sum(x))        # 求和：15\nprint(mean(x))       # 均值：3\nprint(max(x))        # 最大值：5\nprint(min(x))        # 最小值：1\nprint(range(x))      # 范围：1 5\nprint(sort(x, decreasing = TRUE))  # 降序排列"
        },
        {
          'type': "h",
          'text': "NA：处理缺失值"
        },
        {
          'type': "warn",
          'title': "NA 陷阱",
          'text': "R 中用 NA 表示缺失值。任何涉及 NA 的运算结果也是 NA，需要用 <code.inline>is.na()</code.inline> 检测，用 <code.inline>na.rm = TRUE</code.inline> 选项跳过缺失值。"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "NA 的处理",
          'code': "x <- c(1, 2, NA, 4, 5)\nprint(sum(x))              # NA\nprint(sum(x, na.rm = TRUE))  # 12\nprint(mean(x, na.rm = TRUE)) # 3\nprint(is.na(x))            # FALSE FALSE TRUE FALSE FALSE\nprint(!is.na(x))           # TRUE TRUE FALSE TRUE TRUE（非NA的位置）\nprint(x[!is.na(x)])        # 1 2 4 5（去掉缺失值）"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"向量 Vector：R 最基础的数据结构\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"向量 Vector：R 最基础的数据结构\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"向量 Vector：R 最基础的数据结构\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "用 c() 创建向量，索引从 1 开始",
            "向量运算自动向量化，无需循环",
            "sum/mean/max/min 等函数可直接作用于向量",
            "NA 表示缺失值，用 na.rm=TRUE 跳过缺失计算"
          ]
        }
      ],
      'templates': [
        {
          'name': "向量统计",
          'code': "scores <- c(88, 92, 76, 85, NA, 90)\nprint(paste(\"有效分数:\", scores[!is.na(scores)]))\nprint(paste(\"平均分:\", mean(scores, na.rm = TRUE)))\nprint(paste(\"最高分:\", max(scores, na.rm = TRUE)))\nprint(paste(\"最低分:\", min(scores, na.rm = TRUE)))"
        }
      ]
    },
    {
      'id': "r-5",
      'title': "数据结构：矩阵、数据框、列表",
      'summary': "掌握 matrix、data.frame、list 三大数据结构及其使用场景。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "R 有三种最常用的数据结构：矩阵（matrix）、数据框（data.frame）和列表（list）。理解它们的区别是学好 R 的基础。"
        },
        {
          'type': "h",
          'text': "矩阵 Matrix"
        },
        {
          'type': "p",
          'text': "矩阵是二维数组，所有元素必须是同一类型（数值、字符或逻辑）。用 <code.inline>matrix()</code.inline> 创建。"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "矩阵的创建与操作",
          'code': "# 创建矩阵\nm <- matrix(1:12, nrow = 3, ncol = 4)\nprint(m)\n\n# 按行填充\nm2 <- matrix(1:12, nrow = 3, byrow = TRUE)\nprint(m2)\n\n# 矩阵运算\na <- matrix(c(1, 2, 3, 4), nrow = 2)\nb <- matrix(c(5, 6, 7, 8), nrow = 2)\nprint(a + b)\nprint(a %*% b)  # 矩阵乘法\n\n# 获取维度\nprint(dim(a))      # 2 2\nprint(nrow(a))     # 2\nprint(ncol(a))     # 2"
        },
        {
          'type': "h",
          'text': "数据框 data.frame"
        },
        {
          'type': "p",
          'text': "数据框是最常用的数据结构，类似 Excel 表格，每列可以有不同的类型（数值、字符、因子等）。用 <code.inline>data.frame()</code.inline> 创建。"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "数据框的创建与操作",
          'code': "# 创建数据框\nstudents <- data.frame(\n  name = c(\"小明\", \"小红\", \"小刚\"),\n  age = c(10, 11, 10),\n  score = c(92, 85, 78)\n)\nprint(students)\n\n# 查看结构\nstr(students)\n\n# 查看摘要信息\nsummary(students)\n\n# 访问列\nprint(students$name)\nprint(students$score)\n\n# 查看维度\nprint(dim(students))\nprint(nrow(students))\nprint(ncol(students))"
        },
        {
          'type': "h",
          'text': "列表 List"
        },
        {
          'type': "p",
          'text': "列表是 R 中最灵活的数据结构，可以包含不同类型的元素，甚至嵌套其他列表。用 <code.inline>list()</code.inline> 创建。"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "列表的创建与访问",
          'code': "# 创建列表\nmy_list <- list(\n  name = \"小明\",\n  age = 10,\n  scores = c(92, 85, 78),\n  is_student = TRUE\n)\nprint(my_list)\n\n# 访问列表元素\nprint(my_list$name)\nprint(my_list[[1]])      # 用双括号按位置访问\nprint(my_list[[\"age\"]])   # 用名称访问\n\n# 列表可以嵌套\nnested <- list(a = list(1, 2), b = c(\"x\", \"y\"))\nprint(nested)"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"数据结构：矩阵、数据框、列表\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"数据结构：矩阵、数据框、列表\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"数据结构：矩阵、数据框、列表\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "matrix 二维同类型数组，data.frame 列类型可不同，list 最灵活",
            "str() 查看结构，summary() 查看摘要",
            "data.frame 是数据分析最常用的数据结构",
            "list 用 [[ ]] 或 $ 访问元素"
          ]
        }
      ],
      'templates': [
        {
          'name': "创建成绩数据框",
          'code': "scores <- data.frame(\n  姓名 = c(\"小明\", \"小红\", \"小刚\", \"小丽\"),\n  数学 = c(92, 85, 78, 95),\n  语文 = c(88, 90, 82, 93)\n)\nprint(scores)\nstr(scores)\nsummary(scores)"
        }
      ]
    },
    {
      'id': "r-6",
      'title': "数据读取与清洗",
      'summary': "读取 CSV 文件、处理缺失值、转换数据类型。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "实际数据分析中，数据通常以文件形式存在。R 提供了多种方式读取数据，其中 <code.inline>read.csv()</code.inline> 和 <code.inline>read.table()</code.inline> 最常用。"
        },
        {
          'type': "h",
          'text': "读取 CSV 文件"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "读取 CSV 文件",
          'code': "# 读取 CSV（假设文件在同一目录下）\n# data <- read.csv(\"data.csv\")\n\n# 读取带表头的 CSV\ndata <- read.csv(\"data.csv\", header = TRUE)\n\n# 读取不带表头的 CSV，需指定列名\ndata <- read.csv(\"data.csv\", header = FALSE, names = c(\"姓名\", \"年龄\", \"分数\"))\n\n# 查看数据前几行\nprint(head(data))\n\n# 查看数据后几行\nprint(tail(data))\n\n# 查看所有数据\nprint(data)"
        },
        {
          'type': "h",
          'text': "数据清洗：处理缺失值"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "缺失值处理",
          'code': "# 创建含缺失值的数据\ndf <- data.frame(\n  name = c(\"A\", \"B\", \"C\", \"D\"),\n  score = c(90, NA, 85, NA)\n)\nprint(df)\n\n# 检测缺失值\nprint(is.na(df))\nprint(sum(is.na(df$score)))   # 缺失值个数\n\n# 删除含缺失值的行\nclean_df <- na.omit(df)\nprint(clean_df)\n\n# 或者用 subset 保留非缺失行\nclean_df2 <- subset(df, !is.na(score))\nprint(clean_df2)"
        },
        {
          'type': "h",
          'text': "数据类型转换"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "类型转换函数",
          'code': "# 查看当前类型\nprint(class(c(1, 2, 3)))    # numeric\nprint(class(c(\"a\", \"b\")))   # character\n\n# 类型转换\nprint(as.integer(\"10\"))     # 字符转整数\nprint(as.numeric(\"3.14\"))   # 字符转数值\nprint(as.character(100))    # 数值转字符\nprint(as.logical(\"TRUE\"))   # 字符转逻辑\n\n# 转换数据框中的列\ndf <- data.frame(x = c(\"1\", \"2\", \"3\"), stringsAsFactors = FALSE)\ndf$x <- as.numeric(df$x)\nprint(df)"
        },
        {
          'type': "warn",
          'title': "字符串自动转因子",
          'text': "旧版本 R 默认把字符串列转成因子（factor），可能导致意外行为。建议在 read.csv 时设置 stringsAsFactors = FALSE 避免此问题。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"数据读取与清洗\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"数据读取与清洗\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"数据读取与清洗\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "read.csv 读取逗号分隔文件，read.table 读取文本文件",
            "na.omit 删除含缺失值的行",
            "is.na 检测缺失值，sum(is.na()) 统计缺失个数",
            "as.integer/as.numeric/as.character 做类型转换",
            "设置 stringsAsFactors = FALSE 避免自动转因子"
          ]
        }
      ],
      'templates': [
        {
          'name': "读取并清洗数据",
          'code': "# 读取数据\ndf <- read.csv(\"data.csv\", stringsAsFactors = FALSE)\n\n# 查看基本信息\nprint(dim(df))\nprint(head(df))\n\n# 查看缺失值\nprint(colSums(is.na(df)))\n\n# 删除缺失行\nclean_df <- na.omit(df)\nprint(paste(\"原始行数:\", nrow(df)))\nprint(paste(\"清洗后行数:\", nrow(clean_df)))"
        }
      ]
    },
    {
      'id': "r-7",
      'title': "索引与子集提取",
      'summary': "学会用下标、逻辑条件和 subset 提取数据。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "从数据框中提取特定数据是数据分析的日常操作。R 提供多种索引方式，理解它们能让数据筛选变得轻松。"
        },
        {
          'type': "h",
          'text': "下标索引"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "下标索引",
          'code': "df <- data.frame(name = c(\"小明\", \"小红\", \"小刚\", \"小丽\"),\n                 score = c(92, 85, 78, 95), stringsAsFactors = FALSE)\n\n# 取第 2 行\nprint(df[2, ])\n\n# 取第 2 列\nprint(df[, 2])\n\n# 取第 1 和第 3 行，第 2 列\nprint(df[c(1, 3), 2])\n\n# 取多行多列\nprint(df[1:2, c(1, 3)])"
        },
        {
          'type': "h",
          'text': "逻辑索引"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "逻辑条件筛选",
          'code': "df <- data.frame(name = c(\"小明\", \"小红\", \"小刚\", \"小丽\"),\n                 score = c(92, 85, 78, 95), stringsAsFactors = FALSE)\n\n# 分数大于 85 的行\nprint(df[df$score > 85, ])\n\n# 分数在 80 到 90 之间\nprint(df[df$score >= 80 & df$score <= 90, ])\n\n# 名字包含\"小\"的学生\nprint(df[grepl(\"小\", df$name), ])\n\n# 使用 which() 获取行号\nprint(which(df$score > 85))"
        },
        {
          'type': "h",
          'text': "subset 函数"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "subset 和 order",
          'code': "df <- data.frame(name = c(\"小明\", \"小红\", \"小刚\", \"小丽\"),\n                 score = c(92, 85, 78, 95), stringsAsFactors = FALSE)\n\n# subset 更直观的筛选\nprint(subset(df, score > 85))\nprint(subset(df, score > 80, select = c(name, score)))\n\n# order 排序\nprint(df[order(df$score), ])           # 按分数升序\nprint(df[order(df$score, decreasing = TRUE), ])  # 降序"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"索引与子集提取\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"索引与子集提取\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"索引与子集提取\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "df[行, 列] 用下标提取",
            "df[df$列名 > 条件, ] 用逻辑条件提取",
            "subset(df, 条件, select = 列) 更简洁",
            "which() 返回满足条件的行号",
            "order() 用于排序"
          ]
        }
      ],
      'templates': [
        {
          'name': "筛选高分学生",
          'code': "df <- data.frame(name = c(\"小明\", \"小红\", \"小刚\", \"小丽\"),\n                 score = c(92, 85, 78, 95), stringsAsFactors = FALSE)\nprint(subset(df, score >= 90))\nprint(df[order(df$score, decreasing = TRUE), ])"
        }
      ]
    },
    {
      'id': "r-8",
      'title': "循环与函数",
      'summary': "掌握 for/while/repeat 循环、apply 系列函数和自定义函数。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "循环和函数是编程的核心概念。R 有多种循环方式，同时也提供 apply 系列函数作为更优雅的替代方案。理解作用域（变量在哪里可见）也很重要。"
        },
        {
          'type': "h",
          'text': "for 循环"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "for 循环",
          'code': "# 遍历向量\nfor (i in 1:5) {\n  print(paste(\"第\", i, \"次\"))\n}\n\n# 遍历列表\nfruits <- list(\"苹果\", \"香蕉\", \"橙子\")\nfor (f in fruits) {\n  print(f)\n}\n\n# 遍历数据框行\nfor (i in 1:nrow(df)) {\n  print(df$name[i])\n}"
        },
        {
          'type': "h",
          'text': "while 和 repeat"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "while 和 repeat",
          'code': "# while 循环\ncount <- 1\nwhile (count <= 3) {\n  print(count)\n  count <- count + 1\n}\n\n# repeat 循环（需要 break 退出）\nn <- 1\nrepeat {\n  print(n)\n  n <- n + 1\n  if (n > 3) break\n}"
        },
        {
          'type': "h",
          'text': "apply 系列函数"
        },
        {
          'type': "p",
          'text': "apply 系列是 R 中处理向量、矩阵和数据框的便捷函数，通常比写循环更高效。"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "apply / lapply / sapply",
          'code': "# 对向量应用函数\nx <- c(1, 2, 3, 4, 5)\nprint(sapply(x, function(v) v^2))  # 每个元素平方\n\n# lapply 返回列表\nresult <- lapply(1:3, function(i) i * 2)\nprint(result)\n\n# sapply 简化结果\nprint(sapply(1:3, function(i) i * 2))\n\n# apply 处理矩阵\nm <- matrix(1:9, nrow = 3)\nprint(apply(m, 1, sum))  # 按行求和\nprint(apply(m, 2, sum))  # 按列求和"
        },
        {
          'type': "h",
          'text': "自定义函数"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "定义函数",
          'code': "# 基本函数\nadd <- function(a, b) {\n  return(a + b)\n}\nprint(add(3, 5))\n\n# 有默认参数的函数\ngreet <- function(name = \"World\") {\n  paste(\"你好,\", name)\n}\nprint(greet())\nprint(greet(\"小明\"))\n\n# 多返回值（用列表）\nstats <- function(x) {\n  return(list(mean = mean(x), max = max(x), min = min(x)))\n}\nresult <- stats(c(1, 2, 3, 4, 5))\nprint(result$mean)"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"循环与函数\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"循环与函数\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"循环与函数\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "for 遍历向量/列表，while 和 repeat 也可以",
            "apply/lapply/sapply 是更优雅的循环替代",
            "函数用 function 定义，用 return 返回值",
            "默认参数和可变参数让函数更灵活"
          ]
        }
      ],
      'templates': [
        {
          'name': "求平均值函数",
          'code': "my_mean <- function(x) {\n  total <- 0\n  for (v in x) {\n    total <- total + v\n  }\n  return(total / length(x))\n}\nprint(my_mean(c(10, 20, 30, 40, 50)))"
        },
        {
          'name': "计算统计量",
          'code': "calc_stats <- function(x) {\n  list(mean = mean(x), sd = sd(x), min = min(x), max = max(x))\n}\nresult <- calc_stats(c(85, 92, 78, 90, 88))\nprint(result$mean)\nprint(result$sd)"
        }
      ]
    },
    {
      'id': "r-9",
      'title': "数据整理：dplyr 核心函数",
      'summary': "学会 filter/select/mutate/arrange/group_by/summarise 和 join。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "dplyr 是 Tidyverse 中最核心的数据处理包，提供了一组一致且易用的函数。使用之前需要先安装并加载：<code.inline>install.packages('dplyr')</code.inline> 然后 <code.inline>library(dplyr)</code.inline>。"
        },
        {
          'type': "h",
          'text': "管道操作"
        },
        {
          'type': "p",
          'text': "dplyr 使用管道 <code.inline>%>%</code.inline>（R 4.1+ 支持原生管道 <code.inline>|></code.inline>），让代码读起来像流水账：先做什么，再做什么。"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "管道与 filter/select",
          'code': "library(dplyr)\n\n# 创建示例数据\ndf <- data.frame(name = c(\"小明\", \"小红\", \"小刚\", \"小丽\"),\n                 age = c(10, 11, 10, 12),\n                 score = c(92, 85, 78, 95), stringsAsFactors = FALSE)\n\n# filter：按条件筛选行\nresult <- df %>% filter(score > 85)\nprint(result)\n\n# select：选择列\nresult2 <- df %>% select(name, score)\nprint(result2)"
        },
        {
          'type': "h",
          'text': "mutate 与 arrange"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "mutate 和 arrange",
          'code': "# mutate：创建新列或修改现有列\nresult <- df %>% mutate(score_rank = case_when(\n  score >= 90 ~ \"优秀\",\n  score >= 80 ~ \"良好\",\n  TRUE ~ \"及格\"\n))\nprint(result)\n\n# arrange：排序\nresult3 <- df %>% arrange(desc(score))\nprint(result3)"
        },
        {
          'type': "h",
          'text': "group_by 与 summarise"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "分组汇总",
          'code': "# 按年级分组统计\nstudents <- data.frame(name = c(\"小明\", \"小红\", \"小刚\", \"小丽\"),\n                 grade = c(\"一班\", \"一班\", \"二班\", \"二班\"),\n                 score = c(92, 85, 78, 95), stringsAsFactors = FALSE)\n\nresult <- students %>% group_by(grade) %>% summarise(\n  avg_score = mean(score),\n  max_score = max(score),\n  count = n()\n)\nprint(result)"
        },
        {
          'type': "h",
          'text': "join 连接"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "join 连接两个数据框",
          'code': "a <- data.frame(id = c(1, 2, 3), name = c(\"小明\", \"小红\", \"小刚\"))\nb <- data.frame(id = c(1, 2, 3), score = c(92, 85, 78))\n\n# 内连接\nresult <- inner_join(a, b, by = \"id\")\nprint(result)\n\n# 左连接（保留左边全部）\nresult2 <- left_join(a, b, by = \"id\")\nprint(result2)"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"数据整理：dplyr 核心函数\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"数据整理：dplyr 核心函数\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"数据整理：dplyr 核心函数\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "dplyr 是数据处理核心包，先用 library(dplyr)",
            "filter 筛选行、select 选择列、mutate 创建列",
            "arrange 排序、group_by + summarise 分组汇总",
            "inner_join/left_join 合并数据框",
            "管道 %>% 或 | > 串联操作"
          ]
        }
      ],
      'templates': [
        {
          'name': "成绩分析",
          'code': "library(dplyr)\ndf <- data.frame(name = c(\"小明\", \"小红\", \"小刚\", \"小丽\"),\n                 class = c(\"一班\", \"一班\", \"二班\", \"二班\"),\n                 score = c(92, 85, 78, 95), stringsAsFactors = FALSE)\n\nresult <- df %>%\n  filter(score >= 80) %>%\n  group_by(class) %>%\n  summarise(avg = mean(score), count = n()) %>%\n  arrange(desc(avg))\nprint(result)"
        }
      ]
    },
    {
      'id': "r-10",
      'title': "数据可视化：基础绘图",
      'summary': "掌握 plot、hist、boxplot、barplot 等基础图形函数。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "R 的基础绘图系统非常简单易用，适合快速查看数据分布。本章学习最常用的几种图形函数。"
        },
        {
          'type': "h",
          'text': "plot 散点图"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "plot 函数",
          'code': "# 散点图\nx <- 1:10\ny <- x^2\nplot(x, y, main = \"散点图示例\", xlab = \"x\", ylab = \"y = x^2\")\n\n# 添加拟合线\nlines(x, y, col = \"red\")"
        },
        {
          'type': "h",
          'text': "hist 直方图"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "直方图",
          'code': "# 生成随机数据\nset.seed(123)\ndata <- rnorm(1000, mean = 50, sd = 10)\n\n# 绘制直方图\nhist(data, main = \"正态分布直方图\", xlab = \"值\", col = \"lightblue\")"
        },
        {
          'type': "h",
          'text': "boxplot 箱线图"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "箱线图",
          'code': "# 按组绘制箱线图\nset.seed(123)\ndata <- data.frame(value = c(rnorm(50, 50, 10), rnorm(50, 60, 12)),\n                   group = rep(c(\"A\", \"B\"), each = 50))\nboxplot(value ~ group, data, main = \"分组箱线图\", col = c(\"lightblue\", \"lightgreen\"))"
        },
        {
          'type': "h",
          'text': "barplot 条形图"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "条形图",
          'code': "# 简单条形图\nfruits <- c(\"苹果\", \"香蕉\", \"橙子\", \"葡萄\")\ncounts <- c(120, 150, 90, 200)\nbarplot(counts, names.arg = fruits, main = \"水果销量\", col = rainbow(4))\n\n# 堆叠条形图\nmatrix_data <- matrix(c(10, 20, 30, 40, 50, 60), nrow = 2)\nbarplot(matrix_data, names.arg = c(\"A\", \"B\", \"C\"), col = c(\"blue\", \"red\"), legend = rownames(matrix_data))"
        },
        {
          'type': "h",
          'text': "par 参数设置"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "多图并排显示",
          'code': "# 设置多图布局：2行2列\npar(mfrow = c(2, 2))\n\n# 绘制四个图\nplot(1:10, type = \"l\", main = \"折线图\")\nhist(rnorm(100), main = \"直方图\")\nbarplot(c(1, 2, 3), main = \"条形图\")\nboxplot(list(A = rnorm(20), B = rnorm(20)), main = \"箱线图\")"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"数据可视化：基础绘图\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"数据可视化：基础绘图\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"数据可视化：基础绘图\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "plot() 绘制散点图和折线图",
            "hist() 绘制直方图查看分布",
            "boxplot() 绘制箱线图比较分组",
            "barplot() 绘制条形图",
            "par(mfrow) 设置多图布局"
          ]
        }
      ],
      'templates': [
        {
          'name': "成绩分布图",
          'code': "set.seed(42)\nscores <- rnorm(200, mean = 75, sd = 15)\nhist(scores, breaks = 15, main = \"考试成绩分布\", xlab = \"分数\", col = \"skyblue\")\nabline(v = mean(scores), col = \"red\", lwd = 2)"
        }
      ]
    },
    {
      'id': "r-11",
      'title': "ggplot2 可视化：语法与图层",
      'summary': "掌握 aes、geom_*、图层叠加、facet、theme 和 ggsave。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "ggplot2 是 R 中最流行的可视化工具，基于 <a href='https://ggplot2.tidyverse.org' target='_blank' rel='noopener'>Hadley Wickham</a> 提出的图形语法。它的核心思想是把图形拆解成独立的图层，逐层叠加。"
        },
        {
          'type': "h",
          'text': "ggplot2 基本语法"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "第一个 ggplot",
          'code': "library(ggplot2)\n\n# 内置数据集 mtcars\nggplot(mtcars, aes(x = wt, y = mpg)) +\n  geom_point()\n\n# 添加标题和轴标签\nggplot(mtcars, aes(x = wt, y = mpg)) +\n  geom_point(color = \"blue\") +\n  labs(title = \"重量与油耗的关系\", x = \"重量\", y = \"油耗\")"
        },
        {
          'type': "h",
          'text': "常用几何对象 geom_*"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "多种图形类型",
          'code': "# 散点图 + 拟合线\nggplot(mtcars, aes(x = wt, y = mpg)) +\n  geom_point() +\n  geom_smooth(method = \"lm\")\n\n# 直方图\nggplot(mtcars, aes(x = mpg)) +\n  geom_histogram(binwidth = 3, fill = \"steelblue\")\n\n# 箱线图\nggplot(mtcars, aes(x = factor(cyl), y = mpg)) +\n  geom_boxplot(fill = \"lightgreen\")\n\n# 条形图\nggplot(mtcars, aes(x = factor(cyl))) +\n  geom_bar(fill = \"orange\")"
        },
        {
          'type': "h",
          'text': "facet 分面"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "分面显示",
          'code': "# 按变量分面\np <- ggplot(mtcars, aes(x = wt, y = mpg)) +\n  geom_point()\n\n# 一行多列\nprint(p + facet_wrap(~ cyl))\n\n# 行列布局\nprint(p + facet_grid(cyl ~ vs))"
        },
        {
          'type': "h",
          'text': "主题与保存"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "主题与保存图形",
          'code': "# 使用主题\nggplot(mtcars, aes(x = wt, y = mpg)) +\n  geom_point(color = \"steelblue\") +\n  theme_minimal() +\n  labs(title = \"汽车重量与油耗\", subtitle = \"数据来源: mtcars\", x = \"重量\", y = \"油耗\") +\n  theme(plot.title = element_text(hjust = 0.5))\n\n# 保存图形\nggsave(\"my_plot.png\", width = 8, height = 6, dpi = 300)"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"ggplot2 可视化：语法与图层\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"ggplot2 可视化：语法与图层\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"ggplot2 可视化：语法与图层\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "ggplot(data, aes(x, y)) + geom_*() 是基本语法",
            "aes 设置美学映射，geom_* 设置几何对象",
            "图层用 + 叠加，支持多种图形类型",
            "facet_wrap/facet_grid 分面",
            "theme_* 设置主题，ggsave 保存图形"
          ]
        }
      ],
      'templates': [
        {
          'name': "散点图模板",
          'code': "library(ggplot2)\nggplot(mtcars, aes(x = wt, y = mpg)) +\n  geom_point(color = \"steelblue\", size = 2) +\n  geom_smooth(method = \"lm\", color = \"red\") +\n  labs(title = \"重量与油耗关系\", x = \"重量\", y = \"油耗\") +\n  theme_minimal()"
        }
      ]
    },
    {
      'id': "r-12",
      'title': "统计分析与假设检验",
      'summary': "掌握 t.test、chisq.test、lm 回归和结果解读。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "R 是统计学家编写的语言，内置了大量统计检验方法。这一章学习最常用的假设检验和回归分析。"
        },
        {
          'type': "h",
          'text': "t 检验"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "t 检验",
          'code': "# 生成两组数据\nset.seed(123)\ngroup_a <- rnorm(30, mean = 50, sd = 10)\ngroup_b <- rnorm(30, mean = 55, sd = 10)\n\n# 两独立样本 t 检验\nresult <- t.test(group_a, group_b)\nprint(result)\n\n# 解读：p.value < 0.05 表示两组有显著差异\nif (result$p.value < 0.05) {\n  print(\"两组有显著差异\")\n} else {\n  print(\"两组无显著差异\")\n}"
        },
        {
          'type': "h",
          'text': "卡方检验"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "卡方检验",
          'code': "# 创建列联表\nset.seed(123)\ntable_data <- matrix(c(40, 30, 20, 10), nrow = 2)\ncolnames(table_data) <- c(\"组1\", \"组2\")\nrownames(table_data) <- c(\"成功\", \"失败\")\nprint(table_data)\n\n# 卡方检验\nresult <- chisq.test(table_data)\nprint(result)\n\n# p < 0.05 表示分布有显著差异"
        },
        {
          'type': "h",
          'text': "线性回归"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "线性回归分析",
          'code': "# 内置数据集\nset.seed(123)\nx <- rnorm(100, mean = 50, sd = 10)\ny <- 2 * x + 5 + rnorm(100, sd = 10)\n\n# 拟合线性模型\nmodel <- lm(y ~ x)\n\n# 查看详细结果\nprint(summary(model))\n\n# 解读：\n# Coefficients: 系数估计值\n# Pr(>|t|): p 值，<0.05 显著\n# R-squared: 拟合优度\n# Residual standard error: 残差标准差"
        },
        {
          'type': "h",
          'text': "Wilcoxon 检验"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "非参数检验",
          'code': "# Wilcoxon 秩和检验（两独立样本）\nset.seed(123)\ngroup_a <- rnorm(30, mean = 50, sd = 10)\ngroup_b <- rnorm(30, mean = 55, sd = 10)\n\nresult <- wilcox.test(group_a, group_b)\nprint(result)\n\n# 适用于不满足正态分布的数据"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"统计分析与假设检验\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"统计分析与假设检验\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"统计分析与假设检验\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "t.test 进行 t 检验，比较两组均值",
            "chisq.test 进行卡方检验，分析分类变量关系",
            "lm() 拟合线性回归，summary() 查看详细结果",
            "p 值 < 0.05 通常认为结果显著",
            "wilcox.test 是非参数检验的替代方案"
          ]
        }
      ],
      'templates': [
        {
          'name': "回归分析模板",
          'code': "set.seed(123)\nx <- rnorm(100, mean = 50, sd = 10)\ny <- 2 * x + 5 + rnorm(100, sd = 10)\n\nmodel <- lm(y ~ x)\nsummary(model)\n\n# 预测新数据\nnew_data <- data.frame(x = c(40, 50, 60))\npredict(model, newdata = new_data)"
        }
      ]
    },
    {
      'id': "r-13",
      'title': "字符串与正则表达式",
      'summary': "掌握字符串操作、grep 系列函数和 stringr 包。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "R 提供了基础字符串函数和 stringr 包来处理文本数据。正则表达式是强大的文本匹配工具，学好它能解决很多数据清洗问题。"
        },
        {
          'type': "h",
          'text': "基础字符串函数"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "字符串操作",
          'code': "# 字符串基本操作\ns <- \"Hello, R Programming!\"\nprint(nchar(s))           # 字符串长度\nprint(tolower(s))         # 转小写\nprint(toupper(s))         # 转大写\nprint(substr(s, 1, 5))    # 截取子串：Hello\nprint(strsplit(s, \", \"))   # 分割字符串\n\n# 拼接与格式化\nname <- \"小明\"\nage <- 10\nprint(paste(\"我叫\", name, \"，今年\", age, \"岁\"))\nprint(sprintf(\"我叫%s，今年%d岁\", name, age))"
        },
        {
          'type': "h",
          'text': "grep 正则匹配"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "grep 系列函数",
          'code': "# 创建示例数据\nwords <- c(\"apple\", \"banana\", \"apricot\", \"cherry\", \"avocado\")\n\n# grep 返回匹配的索引\nprint(grep(\"app\", words))     # 1 3 5\n\n# grepl 返回逻辑值\nprint(grepl(\"app\", words))   # TRUE FALSE TRUE FALSE TRUE\n\n# sub/gsub 替换\nprint(sub(\"a\", \"A\", words))   # 只替换第一个\nprint(gsub(\"a\", \"A\", words))  # 替换所有\n\n# regexpr 获取匹配位置\nprint(regexpr(\"app\", words))"
        },
        {
          'type': "h",
          'text': "stringr 包"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "stringr 包操作",
          'code': "# 安装加载\n# install.packages(\"stringr\")\nlibrary(stringr)\n\nwords <- c(\"apple\", \"banana\", \"apricot\", \"cherry\", \"avocado\")\n\n# 匹配\nprint(str_detect(words, \"app\"))   # 逻辑值\nprint(str_count(words, \"a\"))      # 匹配次数\n\n# 提取\nprint(str_extract(words, \"a.*\"))  # 提取匹配部分\n\n# 替换\nprint(str_replace(words, \"a\", \"A\"))\nprint(str_replace_all(words, \"a\", \"A\"))\n\n# 分割\nprint(str_split(\"a-b-c\", \"-\"))\n\n# 字符串格式化\nprint(str_c(\"Hello\", \" \", \"World\"))"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"字符串与正则表达式\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"字符串与正则表达式\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"字符串与正则表达式\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "nchar/tolower/toupper/substr 是基础字符串函数",
            "paste 拼接，sprintf 格式化",
            "grep/grepl/sub/gsub 做正则匹配和替换",
            "stringr 提供一致易用的字符串函数",
            "正则表达式 . * + ? ^ $ 是常用元字符"
          ]
        }
      ],
      'templates': [
        {
          'name': "文本清洗",
          'code': "library(stringr)\nemails <- c(\"zhangsan@example.com\", \"lisi@test.org\", \"wangwu@gmail.com\")\n\n# 提取域名\ndomains <- str_extract(emails, \"@.*\")\nprint(domains)\n\n# 提取用户名\nusers <- str_extract(emails, \".*@\")\nprint(users)"
        }
      ]
    },
    {
      'id': "r-14",
      'title': "面向对象：S3/S4 系统",
      'summary': "了解 R 的 S3 和 S4 面向对象系统及其使用场景。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "R 有两种面向对象系统：S3（最常用、非正式）和 S4（更正式、更严格）。大多数 R 用户平时用不到 S4，但理解 S3 对编写自定义方法很有帮助。"
        },
        {
          'type': "h",
          'text': "S3 系统"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "S3 类与方法",
          'code': "# 创建 S3 类\nperson <- list(name = \"小明\", age = 10, salary = 5000)\nclass(person) <- \"employee\"\n\n# 定义通用函数\ndescribe <- function(x) UseMethod(\"describe\")\n\n# 定义特定方法\ndescribe.employee <- function(x) {\n  paste(\"员工\", x$name, \"，\", x$age, \"岁，月薪\", x$salary)\n}\n\n# 定义通用对象的方法\ndescribe.default <- function(x) {\n  paste(\"对象：\", deparse(substitute(x)))\n}\n\nprint(describe(person))\nprint(describe(123))"
        },
        {
          'type': "h",
          'text': "何时使用 S3"
        },
        {
          'type': "p",
          'text': "S3 系统简单灵活，大多数 R 包的内部实现都基于 S3。当你需要为自定义类定义方法时使用。但对于大型项目，S3 缺乏严格的类定义，容易导致方法冲突。"
        },
        {
          'type': "info",
          'title': "S3 vs S4",
          'text': "S3 是非正式系统，方法通过命名规则（generic.class）自动分发；S4 是正式系统，有严格的类定义和方法签名。S3 更灵活，S4 更安全但更复杂。现代 R 开发中，S3 使用更多。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"面向对象：S3/S4 系统\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"面向对象：S3/S4 系统\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"面向对象：S3/S4 系统\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "R 有 S3 和 S4 两种面向对象系统",
            "S3 通过 UseMethod 分发方法",
            "方法命名规则是 generic.class",
            "大多数 R 用户主要使用 S3",
            "S4 更严格但更复杂，使用较少"
          ]
        }
      ],
      'templates': [
        {
          'name': "S3 简单示例",
          'code': "# 定义通用函数\nshow_type <- function(x) UseMethod(\"show_type\")\n\n# 定义不同类的方法\nshow_type.numeric <- function(x) paste(\"数值类型:\", x)\nshow_type.character <- function(x) paste(\"字符类型:\", x)\nshow_type.default <- function(x) paste(\"其他类型\")\n\n# 测试\nprint(show_type(10))\nprint(show_type(\"hello\"))\nprint(show_type(TRUE))"
        }
      ]
    },
    {
      'id': "r-15",
      'title': "包管理与扩展生态",
      'summary': "学会安装、加载和管理 R 包，了解 tidyverse 全家桶。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "R 的生态系统非常丰富，超过 20000 个包涵盖了数据分析的各个方面。学会管理包是 R 用户的必备技能。"
        },
        {
          'type': "h",
          'text': "安装与加载包"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "安装和加载包",
          'code': "# 从 CRAN 安装\ninstall.packages(\"dplyr\")\ninstall.packages(\"ggplot2\")\ninstall.packages(\"tidyr\")\n\n# 从 GitHub 安装（需要 devtools）\n# install.packages(\"devtools\")\n# devtools::install_github(\"tidyverse/dplyr\")\n\n# 加载已安装的包\nlibrary(dplyr)\nlibrary(ggplot2)\n\n# 检查已安装的包\ninstalled.packages()[, \"Package\"]\n\n# 更新所有包\n# update.packages()"
        },
        {
          'type': "h",
          'text': "tidyverse 全家桶"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "tidyverse 核心包",
          'code': "# 一次性安装 tidyverse\ninstall.packages(\"tidyverse\")\n\n# 加载 tidyverse（同时加载多个核心包）\nlibrary(tidyverse)\n\n# tidyverse 包含的核心包\n# dplyr - 数据处理\n# ggplot2 - 可视化\n# tidyr - 数据整理\n# readr - 数据读取\n# purrr - 函数式编程\n# tibble - 现代数据框\n# forcats - 因子处理\n# stringr - 字符串处理"
        },
        {
          'type': "h",
          'text': "包管理最佳实践"
        },
        {
          'type': "list",
          'items': [
            "项目开始时先用 library() 加载所需包",
            "检查包的版本兼容性",
            "用 packrat 或 renv 管理项目依赖",
            "CRAN 包经过审核，GitHub 包需谨慎评估"
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"包管理与扩展生态\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"包管理与扩展生态\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"包管理与扩展生态\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "install.packages() 从 CRAN 安装包",
            "library() 加载已安装的包",
            "tidyverse 一键安装核心分析包",
            "GitHub 包用 devtools::install_github()"
          ]
        }
      ],
      'templates': [
        {
          'name': "包管理模板",
          'code': "# 安装必要包\npackages <- c(\"dplyr\", \"ggplot2\", \"tidyr\", \"readr\")\nnew_packages <- packages[!(packages %in% installed.packages()[, \"Package\"])]\nif (length(new_packages)) install.packages(new_packages)\n\n# 加载所有包\nlapply(packages, library, character.only = TRUE)"
        }
      ]
    },
    {
      'id': "r-16",
      'title': "实战项目：完整数据科学流程",
      'summary': "从数据加载到可视化输出，走一遍完整的数据分析流程。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "本章将前面所学的知识串联起来，完成一个完整的数据分析项目。我们将使用内置的 mtcars 数据集，完成从数据加载、清洗、分析到可视化的全流程。"
        },
        {
          'type': "h",
          'text': "步骤一：加载与探索数据"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "数据探索",
          'code': "# 加载数据\ndata(mtcars)\n\n# 查看基本信息\nprint(dim(mtcars))\nprint(head(mtcars))\nprint(str(mtcars))\nprint(summary(mtcars))"
        },
        {
          'type': "h",
          'text': "步骤二：数据清洗"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "数据清洗",
          'code': "library(dplyr)\n\n# 检查缺失值\nprint(colSums(is.na(mtcars)))\n\n# 创建新列：马力分组\nmtcars_clean <- mtcars %>%\n  mutate(\n    hp_group = cut(hp, breaks = c(0, 100, 150, 200, 300), labels = c(\"低\", \"中低\", \"中高\", \"高\")),\n    mpg_group = cut(mpg, breaks = quantile(mpg, probs = seq(0, 1, 0.25)), labels = c(\"低\", \"中低\", \"中\", \"中高\", \"高\"))\n  )\n\nprint(head(mtcars_clean))"
        },
        {
          'type': "h",
          'text': "步骤三：数据分析"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "分组分析",
          'code': "# 按气缸数统计\nresult <- mtcars_clean %>%\n  group_by(cyl) %>%\n  summarise(\n    avg_mpg = mean(mpg),\n    avg_hp = mean(hp),\n    count = n()\n  )\nprint(result)\n\n# 相关性分析\ncor(mtcars[, c(\"mpg\", \"hp\", \"wt\", \"disp\")])"
        },
        {
          'type': "h",
          'text': "步骤四：可视化"
        },
        {
          'type': "code",
          'lang': "r",
          'title': "可视化输出",
          'code': "library(ggplot2)\n\n# 散点图\np1 <- ggplot(mtcars, aes(x = wt, y = mpg)) +\n  geom_point(color = \"steelblue\") +\n  geom_smooth(method = \"lm\") +\n  labs(title = \"重量与油耗关系\", x = \"重量\", y = \"油耗\") +\n  theme_minimal()\nprint(p1)\n\n# 箱线图\np2 <- ggplot(mtcars, aes(x = factor(cyl), y = mpg, fill = factor(cyl))) +\n  geom_boxplot() +\n  labs(title = \"不同气缸数的油耗分布\", x = \"气缸数\", y = \"油耗\") +\n  theme_minimal()\nprint(p2)\n\n# 保存\n# ggsave(\"analysis.png\", width = 10, height = 6)"
        },
        {
          'type': "h",
          'text': "下一步：R Markdown 与 Shiny"
        },
        {
          'type': "p",
          'text': "完成分析后，你可以用 R Markdown 生成报告，或用 Shiny 构建交互式网页应用。这些都是 R 生态中非常强大的工具，建议在掌握基础后继续学习。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"实战项目：完整数据科学流程\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"实战项目：完整数据科学流程\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"实战项目：完整数据科学流程\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "用 data() 或 read.csv() 加载数据",
            "str() 和 summary() 探索数据结构",
            "dplyr 管道操作完成清洗和分析",
            "ggplot2 创建高质量可视化",
            "R Markdown 生成报告，Shiny 构建应用"
          ]
        }
      ],
      'templates': [
        {
          'name': "完整分析流程",
          'code': "library(dplyr)\nlibrary(ggplot2)\n\n# 1. 加载数据\ndata(mtcars)\n\n# 2. 探索\nprint(head(mtcars))\nprint(summary(mtcars))\n\n# 3. 分析\nresult <- mtcars %>%\n  group_by(cyl) %>%\n  summarise(avg_mpg = mean(mpg))\n\nprint(result)\n\n# 4. 可视化\nggplot(mtcars, aes(x = factor(cyl), y = mpg, fill = factor(cyl))) +\n  geom_boxplot() +\n  theme_minimal()"
        }
      ]
    }
  ]
});

