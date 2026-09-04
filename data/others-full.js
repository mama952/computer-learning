/* ============================================================
   计算机知识库 · 数据：更多语言速览（16 章，从下载安装到精通）
   ============================================================ */
window.LANGUAGE_EXTRA = window.LANGUAGE_EXTRA || [];
window.LANGUAGE_EXTRA.push({
  'id': "others",
  'name': "更多语言速览",
  'icon': "+",
  'tagline': "从 PowerShell 到 Solidity、从 Assembly 到 Haskell，一次看够 15 种语言。",
  'intro': "编程语言的世界远比主流语言丰富。本套课程带你走进 PowerShell、Groovy、Objective-C、MATLAB、汇编、Solidity、Verilog、Zig、Elixir、Clojure、Haskell、Perl、OCaml 等 13 种语言的语法核心，并从语言地图总览出发，最终教你怎样从速览过渡到真正精通。每一章都有真实可运行的代码示例，难度从入门逐步上升到进阶。",
  'meta': {
    "难度": "入门到进阶",
    "章节": "16 章",
    "场景": "语言视野拓展 / 跨领域工具"
  },
  'lessons': [
    {
      'id': "ot-1",
      'title': "下载与安装 PowerShell（Windows 脚本利器）",
      'summary': "到官网下载、用 PowerShell 跑脚本，Windows 自动化从这步开始。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "学习任何编程语言的第一步，都是把它装好。PowerShell 是微软官方推出的命令行工具，默认装在 Windows 10/11 上，但你仍需确保版本是最新的，这样才支持所有现代语法特性。"
        },
        {
          'type': "h",
          'text': "检查你电脑上是否已有 PowerShell"
        },
        {
          'type': "p",
          'text': "按 <code.inline>Win + R</code.inline>，输入 <code.inline>powershell</code.inline> 回车。如果弹出一个蓝色窗口并显示版本号（例如 <code.inline>PowerShell 7.x.x</code.inline>），说明已经装好了。如果提示找不到命令，才需要下载。"
        },
        {
          'type': "h",
          'text': "下载安装 PowerShell 7（最新版）"
        },
        {
          'type': "list",
          'items': [
            "打开微软官方下载页：<a href='https://learn.microsoft.com/powershell/' target='_blank' rel='noopener'>learn.microsoft.com/powershell/</a>",
            "向下滚动找到『下载 PowerShell 7（预览/稳定版）』，选 Windows x64 版本",
            "双击安装包，一路点『下一步』完成安装",
            "安装完成后重新打开 PowerShell，运行 <code.inline>$PSVersionTable.PSVersion</code.inline> 验证版本"
          ]
        },
        {
          'type': "warn",
          'title': "别下错安装包",
          'text': "PowerShell 有两个大版本：Windows PowerShell 5.1（内置于系统，较老）和 PowerShell 7+（现代版，推荐）。本教程针对 PowerShell 7+，装最新版不会错。"
        },
        {
          'type': "h",
          'text': "第一个 PowerShell 脚本"
        },
        {
          'type': "code",
          'lang': "powershell",
          'title': "Hello PowerShell",
          'code': "$name = \"小明\"\nWrite-Host \"你好，$name ！\"\nWrite-Host \"PowerShell 已就绪：$($PSVersionTable.PSVersion)\""
        },
        {
          'type': "tip",
          'title': "用 VS Code 写 PowerShell",
          'text': "推荐装 VS Code（<a href='https://code.visualstudio.com' target='_blank' rel='noopener'>code.visualstudio.com</a>），再装『PowerShell』扩展，写脚本会有语法高亮和自动补全。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"下载与安装 PowerShell（Windows 脚本利器）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"下载与安装 PowerShell（Windows 脚本利器）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"下载与安装 PowerShell（Windows 脚本利器）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "PowerShell 7+ 是微软官方最新版，需单独下载",
            "官网：learn.microsoft.com/powershell/",
            "验证版本：$PSVersionTable.PSVersion",
            "PowerShell 脚本文件扩展名是 .ps1"
          ]
        }
      ],
      'templates': [
        {
          'name': "我的第一条脚本",
          'code': "$name = \"小明\"\n$age = 20\nWrite-Host \"你好，$name，今年 $age 岁！\"\nWrite-Host \"PowerShell 版本：$($PSVersionTable.PSVersion)\""
        },
        {
          'name': "当前系统信息",
          'code': "Write-Host \"操作系统：$($PSVersionTable.OS)\"\nWrite-Host \"PowerShell 版本：$($PSVersionTable.PSVersion)\"\nWrite-Host \"当前时间：$(Get-Date)\""
        }
      ]
    },
    {
      'id': "ot-2",
      'title': "语言地图总览：100 种语言，20 种常用",
      'summary': "站在高处看语言版图，按领域选语言，不再迷路。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "世界上有超过 700 种编程语言，但日常用的不过 20 种左右。TIOBE 指数每月发布一次语言排名，是观察语言热度的权威参考。了解语言地图，是为了帮你建立心理坐标系，学起来才不会迷路。"
        },
        {
          'type': "h",
          'text': "TIOBE 指数地图（2025 年概况）"
        },
        {
          'type': "table",
          'head': [
            "排名",
            "语言",
            "擅长领域",
            "入门难度"
          ],
          'rows': [
            [
              "1",
              "Python",
              "AI / 数据分析 / 自动化",
              "★☆☆"
            ],
            [
              "2",
              "C",
              "系统 / 嵌入式 / 性能",
              "★★★"
            ],
            [
              "3",
              "C++",
              "游戏 / 引擎 / 高性能",
              "★★★★"
            ],
            [
              "4",
              "Java",
              "企业后端 / Android",
              "★★☆"
            ],
            [
              "5",
              "JavaScript",
              "前端 / 全栈 / 服务端",
              "★★☆"
            ],
            [
              "6",
              "C#",
              "Windows / Unity 游戏",
              "★★☆"
            ],
            [
              "7",
              "Go",
              "云原生 / 后端 / 工具链",
              "★★☆"
            ],
            [
              "8",
              "Swift",
              "iOS / macOS",
              "★★☆"
            ],
            [
              "9",
              "Kotlin",
              "Android / JVM 后端",
              "★★☆"
            ],
            [
              "10",
              "Rust",
              "系统 / 安全 / WASM",
              "★★★★"
            ]
          ]
        },
        {
          'type': "h",
          'text': "按领域选语言"
        },
        {
          'type': "list",
          'items': [
            "Web 全栈：JavaScript + TypeScript + HTML/CSS + Python/Go/Java 任选后端",
            "数据分析 / AI：Python（首选）、R、Julia",
            "移动端：Swift（iOS）、Kotlin（Android）、Flutter + Dart（跨平台）",
            "游戏开发：C#（Unity）、C++（Unreal）、GDScript（Godot）",
            "系统 / 底层：C、Rust、Zig、Assembly（x86 / ARM）",
            "DevOps / 脚本：Python、PowerShell、Bash、Go",
            "硬件设计：Verilog、VHDL（FPGA / ASIC）",
            "区块链：Solidity（以太坊）、Rust（Solana）"
          ]
        },
        {
          'type': "info",
          'title': "语言之间共性很多",
          'text': "变量、循环、条件、函数、对象——这些核心概念在任何语言里都有，只是写法不同。掌握两三种语言后，学新语言只是「换个口音说话」。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"语言地图总览：100 种语言，20 种常用\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"语言地图总览：100 种语言，20 种常用\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"语言地图总览：100 种语言，20 种常用\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "TIOBE 指数是语言热度的权威参考",
            "根据领域选语言比追热门更重要",
            "编程核心概念所有语言相通",
            "先精通一两种，再扩展视野"
          ]
        }
      ],
      'templates': []
    },
    {
      'id': "ot-3",
      'title': "PowerShell 基础语法：变量、条件、循环",
      'summary': "PowerShell 不是简单封装 cmd，它有完整的脚本能力。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "PowerShell 是一门真正的脚本语言。它用 <code.inline>$</code.inline> 开头声明变量，条件用 <code.inline>if</code.inline> / <code.inline>elseif</code.inline> / <code.inline>else</code.inline>，循环有 <code.inline>for</code.inline>、<code.inline>foreach</code.inline> 和 <code.inline>while</code.inline>。语法跟 C 系语言很像，但更亲和自然语言。"
        },
        {
          'type': "h",
          'text': "变量与输出"
        },
        {
          'type': "code",
          'lang': "powershell",
          'title': "变量声明与输出",
          'code': "# 变量一律以 $ 开头\n$name = \"小明\"\n$age = 20\n$pi = 3.14159\n\n# Write-Host 输出到控制台\nWrite-Host \"我叫 $name，今年 $age 岁\"\nWrite-Host \"圆周率约等于 $pi\"\n\n# 字符串插值（双引号）\nWrite-Host \"十年后我 $($age + 10) 岁\""
        },
        {
          'type': "h",
          'text': "条件判断"
        },
        {
          'type': "code",
          'lang': "powershell",
          'title': "if / elseif / else",
          'code': "# 条件判断\n$score = 88\nif ($score -ge 90) {\n    Write-Host \"优秀\"\n} elseif ($score -ge 80) {\n    Write-Host \"良好\"\n} elseif ($score -ge 60) {\n    Write-Host \"及格\"\n} else {\n    Write-Host \"不及格\"\n}\n\n# 常用比较运算符\n# -eq 等于  -ne 不等于\n# -gt 大于  -ge 大于等于  -lt 小于  -le 小于等于\n# -and 且  -or 或  -not 非\nif ($score -ge 60 -and $score -lt 80) {\n    Write-Host \"中等水平\"\n}"
        },
        {
          'type': "h",
          'text': "循环"
        },
        {
          'type': "code",
          'lang': "powershell",
          'title': "for 与 foreach 循环",
          'code': "# for 循环\nfor ($i = 1; $i -le 5; $i++) {\n    Write-Host \"第 $i 次循环\"\n}\n\n# foreach 遍历数组\n$fruits = @(\"苹果\", \"香蕉\", \"橙子\")\nforeach ($f in $fruits) {\n    Write-Host \"水果：$f\"\n}\n\n# 区间写法（简洁版）\n1..10 | ForEach-Object { Write-Host $_ }"
        },
        {
          'type': "warn",
          'title': "PowerShell 比较运算符",
          'text': "PowerShell 不用 <code.inline>==</code.inline> 比较，而是用 <code.inline>-eq</code.inline>。同样 <code.inline>!=</code.inline> 写成 <code.inline>-ne</code.inline>。这是新手最容易踩的坑。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"PowerShell 基础语法：变量、条件、循环\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"PowerShell 基础语法：变量、条件、循环\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"PowerShell 基础语法：变量、条件、循环\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "变量以 $ 开头",
            "比较运算符是 -eq / -ne / -gt 等，不是 == / !=",
            "if/elseif/else 是条件判断",
            "foreach 遍历数组，1..10 生成区间"
          ]
        }
      ],
      'templates': [
        {
          'name': "斐波那契数列",
          'code': "function Get-Fib { param($n)\n    $a = 0; $b = 1\n    1..$n | ForEach-Object {\n        Write-Host $a\n        $temp = $a + $b\n        $a = $b\n        $b = $temp\n    }\n}\nGet-Fib 10"
        },
        {
          'name': "判断奇偶",
          'code': "$num = 7\nif ($num % 2 -eq 0) {\n    Write-Host \"$num 是偶数\"\n} else {\n    Write-Host \"$num 是奇数\"\n}"
        }
      ]
    },
    {
      'id': "ot-4",
      'title': "PowerShell 命令管线与常用 cmdlet",
      'summary': "PowerShell 的核心哲学：万物皆管道，一条命令串一条。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "PowerShell 的「管道」<code.inline>|</code.inline> 是它最强大的特性。一个命令的输出，可以直接作为下一个命令的输入，像工厂流水线一样。PowerShell 命令叫 <strong>cmdlet</strong>（读作「command-let」），命名规则是 <code.inline>动词-名词</code.inline>，比如 <code.inline>Get-Process</code.inline>、<code.inline>Stop-Service</code.inline>。"
        },
        {
          'type': "h",
          'text': "管道基础"
        },
        {
          'type': "code",
          'lang': "powershell",
          'title': "管道入门",
          'code': "# 获取所有进程，过滤出占用内存大的，按内存排序\nGet-Process | Sort-Object WorkingSet -Descending | Select-Object -First 5 | Format-Table Name, WorkingSet\n\n# 统计当前目录下的文件数\n(Get-ChildItem).Count\n\n# 找出包含某关键词的文件内容\nGet-ChildItem -Filter \"*.txt\" | Get-Content | Select-String \"error\""
        },
        {
          'type': "h",
          'text': "常用 cmdlet 速查"
        },
        {
          'type': "table",
          'head': [
            "cmdlet",
            "作用"
          ],
          'rows': [
            [
              "Get-Process",
              "查看进程"
            ],
            [
              "Get-Service",
              "查看系统服务"
            ],
            [
              "Get-ChildItem / ls / dir",
              "列目录"
            ],
            [
              "Get-Content / cat",
              "读文件内容"
            ],
            [
              "Select-Object",
              "选属性"
            ],
            [
              "Where-Object",
              "过滤"
            ],
            [
              "Sort-Object",
              "排序"
            ],
            [
              "Measure-Object",
              "统计（求和/平均/计数）"
            ],
            [
              "New-Item",
              "新建文件/目录"
            ],
            [
              "Remove-Item",
              "删除文件/目录"
            ]
          ]
        },
        {
          'type': "h",
          'text': "Where-Object 过滤"
        },
        {
          'type': "code",
          'lang': "powershell",
          'title': "用 Where-Object 过滤数据",
          'code': "# 找出所有大于 100MB 的进程\nGet-Process | Where-Object { $_.WorkingSet -gt 100MB }\n\n# 找出停止状态的服务\nGet-Service | Where-Object { $_.Status -eq \"Stopped\" }"
        },
        {
          'type': "tip",
          'title': "别名",
          'text': "PowerShell 的 <code.inline>ls</code.inline>、<code.inline>dir</code.inline>、<code.inline>cat</code.inline> 都是 <code.inline>Get-ChildItem</code>/Get-Content 的别名，用哪个都行，但推荐用完整名称，更易读。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"PowerShell 命令管线与常用 cmdlet\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"PowerShell 命令管线与常用 cmdlet\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"PowerShell 命令管线与常用 cmdlet\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "管道 | 把前一个输出喂给后一个命令",
            "cmdlet 命名是动词-名词格式",
            "Where-Object 用 { } 写过滤条件",
            "ls/dir/cat 是别名，了解即可"
          ]
        }
      ],
      'templates': [
        {
          'name': "进程监控脚本",
          'code': "Write-Host \"当前运行的进程数：$(Get-Process).Count\"\nWrite-Host \"--- 内存占用 Top 5 ---\"\nGet-Process | Sort-Object WorkingSet -Descending | Select-Object -First 5 | Format-Table Name, @{N=\"内存(MB)\";E={[math]::Round($_.WorkingSet/1MB,2)}} -AutoSize"
        },
        {
          'name': "服务状态统计",
          'code': "$services = Get-Service\nWrite-Host \"运行中：$(($services | Where-Object {$_.Status -eq \"Running\"}).Count)\"\nWrite-Host \"已停止：$(($services | Where-Object {$_.Status -eq \"Stopped\"}).Count)\"\nWrite-Host \"禁用：$(($services | Where-Object {$_.StartType -eq \"Disabled\"}).Count)\""
        }
      ]
    },
    {
      'id': "ot-5",
      'title': "PowerShell 数组、哈希表与对象",
      'summary': "PowerShell 的数据结构不是数组那么简单，对象才是核心。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "PowerShell 里几乎所有东西都是 <strong>对象</strong>。数组用 <code.inline>@()</code.inline> 定义，哈希表（类似字典）用 <code.inline>@{}</code.inline> 定义。理解这一点，就理解了 PowerShell 脚本的核心。"
        },
        {
          'type': "h",
          'text': "数组"
        },
        {
          'type': "code",
          'lang': "powershell",
          'title': "数组操作",
          'code': "# 数组用 @()\n$fruits = @(\"苹果\", \"香蕉\", \"橙子\")\nWrite-Host $fruits[0]     # 苹果（索引从0开始）\nWrite-Host $fruits[-1]    # 橙子（负索引=从末尾）\nWrite-Host $fruits.Count  # 3\n\n# 追加元素\n$fruits += \"葡萄\"\n\n# 切片\nWrite-Host ($fruits[0..1] -join \", \")  # 苹果, 香蕉"
        },
        {
          'type': "h",
          'text': "哈希表"
        },
        {
          'type': "code",
          'lang': "powershell",
          'title': "哈希表（字典）",
          'code': "# 哈希表用 @{key = value}\n$person = @{\n    Name = \"小明\"\n    Age = 20\n    City = \"北京\"\n}\nWrite-Host $person[\"Name\"]\nWrite-Host $person.Age  # 也可以用 . 语法\n\n# 遍历\nforeach ($key in $person.Keys) {\n    Write-Host \"$key => $($person[$key])\"\n}"
        },
        {
          'type': "h",
          'text': "对象（PSCustomObject）"
        },
        {
          'type': "code",
          'lang': "powershell",
          'title': "创建自定义对象",
          'code': "# 用 [PSCustomObject] 创建对象\n$student = [PSCustomObject]@{\n    Name = \"小红\"\n    Score = 92\n    Grade = \"A\"\n}\n\n# 访问对象属性\nWrite-Host $student.Name\n\n# 多个对象放数组，再管道过滤\n$students = @(\n    [PSCustomObject]@{Name=\"小明\"; Score=88},\n    [PSCustomObject]@{Name=\"小红\"; Score=95},\n    [PSCustomObject]@{Name=\"小刚\"; Score=76}\n)\n$students | Where-Object { $_.Score -ge 90 } | Format-Table"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"PowerShell 数组、哈希表与对象\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"PowerShell 数组、哈希表与对象\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"PowerShell 数组、哈希表与对象\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "数组用 @()，哈希表用 @{key=val}",
            "PowerShell 一切都是对象",
            "[PSCustomObject] 可创建自定义对象",
            "对象属性可用 . 点语法访问"
          ]
        }
      ],
      'templates': [
        {
          'name': "学生成绩统计",
          'code': "$students = @(\n    [PSCustomObject]@{Name=\"小明\"; Score=88},\n    [PSCustomObject]@{Name=\"小红\"; Score=95},\n    [PSCustomObject]@{Name=\"小刚\"; Score=76},\n    [PSCustomObject]@{Name=\"小丽\"; Score=91}\n)\n$total = ($students | Measure-Object -Property Score -Sum).Sum\n$avg = [math]::Round($total / $students.Count, 1)\nWrite-Host \"总分：$total  平均分：$avg\""
        },
        {
          'name': "图书管理哈希表",
          'code': "$books = @{\n    \"978-7-111\" = \"深入理解计算机系统\"\n    \"978-7-121\" = \"JavaScript高级程序设计\"\n    \"978-7-302\" = \"算法导论\"\n}\nforeach ($isbn in $books.Keys) {\n    Write-Host \"$isbn => $($books[$isbn])\"\n}"
        }
      ]
    },
    {
      'id': "ot-6",
      'title': "Groovy：JVM 上的灵活脚本语言",
      'summary': "Groovy 语法像简化版 Java，写 Gradle 和 Jenkins 必会。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "Groovy 运行在 Java 虚拟机（JVM）上，语法和 Java 很像但更简洁。它是 <strong>Gradle</strong>（Android 和 Java 项目的构建工具）的脚本语言，也是 Jenkins 持续集成常用的脚本语言。学了 Groovy，构建自动化不再是黑盒。"
        },
        {
          'type': "h",
          'text': "Groovy 基础语法"
        },
        {
          'type': "code",
          'lang': "groovy",
          'title': "Groovy 基础",
          'code': "// Groovy 变量默认是 def（类似动态类型）\ndef name = \"小明\"\nprintln \"你好，$name\"\n\n// 列表（动态数组）\ndef fruits = [\"苹果\", \"香蕉\", \"橙子\"]\nprintln fruits[0]\nfruits << \"葡萄\"  // 追加元素\nprintln fruits.size()  // 4\n\n// Map（哈希表）\ndef person = [name: \"小明\", age: 20]\nprintln person.name   // 小明\nprintln person[\"age\"] // 20\n\n// 字符串插值（双引号支持 $ 插值）\nprintln \"我今年 ${person.age} 岁\""
        },
        {
          'type': "h",
          'text': "闭包（Closure）"
        },
        {
          'type': "code",
          'lang': "groovy",
          'title': "闭包是 Groovy 的灵魂",
          'code': "// 闭包是一等公民，可以赋值给变量、作为参数传递\ndef greet = { name -> println \"你好, $name\" }\ngreet(\"小红\")\n\n// each 遍历\n[1, 2, 3, 4, 5].each { println it * 2 }\n\n// collect 类似 map\ndef doubled = [1, 2, 3].collect { it * 10 }\nprintln doubled  // [10, 20, 30]\n\n// find 类似 filter\ndef evens = [1, 2, 3, 4, 5].findAll { it % 2 == 0 }\nprintln evens  // [2, 4]"
        },
        {
          'type': "h",
          'text': "Gradle 依赖声明示例"
        },
        {
          'type': "code",
          'lang': "groovy",
          'title': "build.gradle 依赖声明",
          'code': "// build.gradle 是 Groovy 脚本，声明项目依赖\nplugins {\n    id \"java\"\n}\n\ndependencies {\n    // 依赖声明：组名:坐标:版本\n    implementation \"org.slf4j:slf4j-api:2.0.9\"\n    testImplementation \"junit:junit:4.13.2\"\n}\n\ntasks.register(\"hello\") {\n    doLast {\n        println \"Gradle 构建完成！\"\n    }\n}"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Groovy：JVM 上的灵活脚本语言\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Groovy：JVM 上的灵活脚本语言\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Groovy：JVM 上的灵活脚本语言\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Groovy 运行在 JVM，语法简洁于 Java",
            "def 定义变量，无需声明类型",
            "闭包是 Groovy 最强大的特性",
            "Gradle 配置文件就是 Groovy 脚本"
          ]
        }
      ],
      'templates': [
        {
          'name': "列表与 Map 操作",
          'code': "def scores = [88, 92, 76, 85, 90]\nprintln \"平均分: ${scores.sum() / scores.size()}\"\nprintln \"最高分: ${scores.max()}\"\n\n// 找出大于 85 的分数\ndef high = scores.findAll { it > 85 }\nprintln \"高分: $high\""
        },
        {
          'name': "Gradle 任务模板",
          'code': "task hello(type: Copy) {\n    from \"src\"\n    into \"build\"\n    doLast {\n        println \"文件已复制到 build 目录\"\n    }\n}\n\nhello.doLast {\n    println \"任务完成！\"\n}"
        }
      ]
    },
    {
      'id': "ot-7",
      'title': "Objective-C：苹果旧时代的王者",
      'summary': "@interface、@implementation、alloc/init，理解苹果历史。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "Objective-C（简称 ObjC）是苹果在 1980 年代设计的面向对象语言，在 Swift 诞生之前一直是 iOS/macOS 开发的主力语言。它的语法看起来很奇特，但逻辑其实很清晰。了解它，有助于读懂苹果旧代码库，理解 Swift 的设计哲学。"
        },
        {
          'type': "h",
          'text': "@interface 与 @implementation"
        },
        {
          'type': "code",
          'lang': "objectivec",
          'title': "类和对象",
          'code': "// 头文件：声明接口\n#import <Foundation/Foundation.h>\n\n@interface Dog : NSObject\n@property NSString *name;\n@property NSInteger age;\n- (void)bark;\n- (NSString *)describe;\n@end\n\n// 实现文件：实现方法\n@implementation Dog\n- (void)bark {\n    NSLog(@\"%@ 在汪汪叫！\", self.name);\n}\n- (NSString *)describe {\n    return [NSString stringWithFormat:@\"%@，%ld岁\", self.name, (long)self.age];\n}\n@end\n\nint main() {\n    Dog *dog = [[Dog alloc] init];\n    dog.name = @\"旺财\";\n    dog.age = 3;\n    [dog bark];\n    NSLog(@\"%@\", [dog describe]);\n    return 0;\n}"
        },
        {
          'type': "h",
          'text': "alloc/init 与内存管理"
        },
        {
          'type': "p",
          'text': "Objective-C 用 <code.inline>alloc</code.inline>（分配内存）+ <code.inline>init</code.inline>（初始化）创建对象，这是它的经典写法：<code.inline>[[ClassName alloc] init]</code.inline>。内存管理方面，旧版用引用计数（retain/release），现在引入了 ARC（自动引用计数），自动帮你管理，和 Swift 一样。"
        },
        {
          'type': "info",
          'title': "与 Swift 对比",
          'text': "Swift 几乎保留了 ObjC 的全部能力，但语法现代得多：去掉了 <code.inline>@interface</code>、<code.inline>NSLog</code> 换成了 <code.inline>print</code>、可选类型用 <code.inline>?</code> 表示空安全。Swift 是 ObjC 的现代化继承者。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Objective-C：苹果旧时代的王者\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Objective-C：苹果旧时代的王者\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Objective-C：苹果旧时代的王者\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "@interface 声明类，@implementation 实现类",
            "alloc/init 创建对象，[[Class alloc] init] 是标准写法",
            "ARC 自动管理内存，不再需要手动 release",
            "Swift 继承了 ObjC 但语法更简洁现代"
          ]
        }
      ],
      'templates': [
        {
          'name': "Dog 类示例",
          'code': "#import <Foundation/Foundation.h>\n@interface Cat : NSObject\n@property NSString *name;\n- (void)meow;\n@end\n@implementation Cat\n- (void)meow { NSLog(@\"%@ 喵喵叫\", self.name); }\n@end\nint main() {\n    Cat *cat = [[Cat alloc] init];\n    cat.name = @\"小橘\";\n    [cat meow];\n    return 0;\n}"
        },
        {
          'name': "NSArray 与 NSDictionary",
          'code': "#import <Foundation/Foundation.h>\nint main() {\n    NSArray *fruits = @[@\"苹果\", @\"香蕉\", @\"橙子\"];\n    NSLog(@\"第一个: %@\", fruits[0]);\n\n    NSDictionary *person = @{\n        @\"name\": @\"小明\",\n        @\"age\": @20\n    };\n    NSLog(@\"%@\", person);\n    return 0;\n}"
        }
      ]
    },
    {
      'id': "ot-8",
      'title': "MATLAB：数值计算与科研绘图的王者",
      'summary': "矩阵即一切，MATLAB 用几行代码完成复杂的数学运算与可视化。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "MATLAB（Matrix Laboratory 的缩写）是工程与科学计算领域最经典的语言之一。它最大的特点是：<strong>矩阵是基本数据类型</strong>，所有的数学运算都是向量化的，写一行代码就能完成矩阵运算，不用写循环。"
        },
        {
          'type': "h",
          'text': "矩阵语法"
        },
        {
          'type': "code",
          'lang': "matlab",
          'title': "矩阵基础",
          'code': "  % 创建矩阵\n  A = [1 2 3; 4 5 6; 7 8 9];\n  B = [10 20; 30 40];\n\n  % 矩阵运算\n  C = A * B;\n  D = A';   % 转置\n\n  % 特殊矩阵\n  zeros(3)   % 3x3 全零矩阵\n  ones(2,3)  % 2行3列全1矩阵\n  rand(3)    % 3x3 随机矩阵(0-1)\n\n  % 索引（MATLAB 从 1 开始！）\n  A(2,3)     % 第2行第3列元素\n  A(:,2)     % 第2列全部\n  A(1,:)     % 第1行全部"
        },
        {
          'type': "h",
          'text': "脚本运行"
        },
        {
          'type': "code",
          'lang': "matlab",
          'title': "保存为 .m 脚本运行",
          'code': "% 保存为 my_script.m\n% 在命令行输入：my_script\nx = 0:0.1:10;\ny = sin(x);\nplot(x, y);\ntitle(\"正弦波\");\n xlabel(\"x\");\n ylabel(\"sin(x)\");"
        },
        {
          'type': "h",
          'text': "绘图"
        },
        {
          'type': "code",
          'lang': "matlab",
          'title': "plot 绘图",
          'code': "% 基础绘图\nx = 0:0.01:2*pi;\ny1 = sin(x);\ny2 = cos(x);\nplot(x, y1, \"r-\", \"LineWidth\", 2); hold on;\nplot(x, y2, \"b--\", \"LineWidth\", 2); hold off;\nlegend(\"sin\", \"cos\");\ntitle(\"正弦与余弦\");\n\n% 多子图\nsubplot(2,1,1); plot(x, y1); title(\"正弦\");\nsubplot(2,1,2); plot(x, y2); title(\"余弦\");\n\n% 散点图\nscatter(rand(50,1), rand(50,1), 50, \"filled\");\n\n% 三维绘图\n[X,Y] = meshgrid(-3:0.1:3);\nZ = sin(X) .* cos(Y);\nsurf(X, Y, Z); colorbar;"
        },
        {
          'type': "h",
          'text': "Simulink 简介"
        },
        {
          'type': "p",
          'text': "Simulink 是 MATLAB 的图形化仿真环境，用拖拽模块的方式来搭建系统模型，常用于控制系统、信号处理、通信系统等领域。它适合描述连续时间系统，不需要写代码，适合工程建模。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"MATLAB：数值计算与科研绘图的王者\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"MATLAB：数值计算与科研绘图的王者\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"MATLAB：数值计算与科研绘图的王者\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "MATLAB 中矩阵是核心，索引从 1 开始",
            "[1 2; 3 4] 创建 2x2 矩阵，分号换行",
            "plot 是绘图核心函数，支持多条曲线",
            "Simulink 是图形化仿真环境，拖拽建模"
          ]
        }
      ],
      'templates': [
        {
          'name': "绘制函数图像",
          'code': "x = -10:0.1:10;\ny = x.^2 - 4*x + 3;\nplot(x, y, \"b\", \"LineWidth\", 2);\ntitle(\"二次函数 y = x^2 - 4x + 3\");\ngrid on;"
        },
        {
          'name': "矩阵运算示例",
          'code': "  A = [1 2; 3 4];\n  B = [5 6; 7 8];\n  disp('矩阵相乘：');\n  disp(A * B)\n  disp('矩阵转置：');\n  disp(A')\n  disp('行列式：');\n  disp(det(A))"
        }
      ]
    },
    {
      'id': "ot-9",
      'title': "Assembly x86：最底层的语言",
      'summary': "直接和 CPU 对话，理解寄存器和指令集。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "汇编语言是离硬件最近的编程语言。每条汇编指令几乎都对应一条 CPU 指令，理解汇编能让你真正看懂「程序是怎么跑起来的」。x86 是 Intel 和 AMD 处理器的指令集，也是 PC 上最常见的架构。"
        },
        {
          'type': "h",
          'text': "寄存器基础"
        },
        {
          'type': "table",
          'head': [
            "寄存器",
            "用途"
          ],
          'rows': [
            [
              "EAX",
              "累加器，算术运算常用"
            ],
            [
              "EBX",
              "基址寄存器"
            ],
            [
              "ECX",
              "计数寄存器，循环计数"
            ],
            [
              "EDX",
              "数据寄存器"
            ],
            [
              "ESI",
              "源索引（字符串操作）"
            ],
            [
              "EDI",
              "目标索引"
            ],
            [
              "ESP",
              "栈指针"
            ],
            [
              "EBP",
              "基址指针"
            ],
            [
              "EIP",
              "指令指针（不能直接操作）"
            ]
          ]
        },
        {
          'type': "h",
          'text': "常用指令"
        },
        {
          'type': "code",
          'lang': "nasm",
          'title': "NASM x86 语法示例",
          'code': "; NASM x86 汇编（32位）\nsection .data\n    msg db \"Hello, x86!\", 10\n    msgLen equ $ - msg\n\nsection .text\n    global _start\n\n_start:\n    ; 系统调用：写stdout (sys_write = 4)\n    mov eax, 4      ; 系统调用号：write\n    mov ebx, 1      ; 文件描述符：stdout\n    mov ecx, msg    ; 消息地址\n    mov edx, msgLen ; 消息长度\n    int 0x80        ; 触发内核中断\n\n    ; 系统调用：退出 (sys_exit = 1)\n    mov eax, 1\n    mov ebx, 0\n    int 0x80\n\n    ; MOV：移动数据\n    ; ADD：加法\n    ; SUB：减法\n    ; JMP：无条件跳转\n    ; JE/JNE：条件跳转"
        },
        {
          'type': "h",
          'text': "机器码到汇编"
        },
        {
          'type': "p",
          'text': "CPU 只能理解 <strong>机器码</strong>（0和1组成的二进制）。汇编语言是机器码的人类可读形式——程序员用助记符（如 <code.inline>Mov</code.inline>、<code.inline>ADD</code.inline>）代替二进制数字，再由汇编器（如 <code.inline>nasm</code>）翻译成机器码。"
        },
        {
          'type': "warn",
          'title': "汇编学习曲线陡峭",
          'text': "汇编没有高级语言的语法糖，每一条指令都需要精确理解寄存器和内存地址。它不是用来写大型项目的，而是用来<strong>理解计算机本质</strong>的。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Assembly x86：最底层的语言\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Assembly x86：最底层的语言\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Assembly x86：最底层的语言\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "x86 寄存器 EAX/EBX/ECX/EDX 是核心",
            "MOV 赋值、ADD 加法、JMP 跳转、JE 条件跳转",
            "NASM 是最常用的 x86 汇编器之一",
            "汇编是机器码的人类可读形式"
          ]
        }
      ],
      'templates': [
        {
          'name': "加法程序",
          'code': "section .text\n    global _start\n_start:\n    mov eax, 10\n    mov ebx, 20\n    add eax, ebx    ; eax = 30\n    ; 此时 EAX = 30\n    mov eax, 1      ; 系统调用：exit\n    xor ebx, ebx    ; 返回码 0\n    int 0x80"
        },
        {
          'name': "比较跳转示例",
          'code': "section .text\n    global _start\n_start:\n    mov eax, 100\n    mov ebx, 50\n    cmp eax, ebx    ; 比较\n    jg  is_greater  ; 如果 eax > ebx，跳转\n    jmp done\nis_greater:\n    ; 处理大于的情况\n    jmp done\ndone:\n    mov eax, 1\n    xor ebx, ebx\n    int 0x80"
        }
      ]
    },
    {
      'id': "ot-10",
      'title': "Assembly ARM：移动设备的底层语言",
      'summary': "ARM 是手机和嵌入式的主流架构，与 x86 有何不同？",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "ARM 架构是当今手机（iPhone、安卓）、平板、嵌入式设备的主导架构，连苹果 M 系列芯片也是 ARM。ARM 和 x86 最大的区别是：ARM 采用 <strong>RISC</strong>（精简指令集），指令更简单、能耗更低；x86 采用 <strong>CISC</strong>（复杂指令集），单条指令可以做更多事。"
        },
        {
          'type': "h",
          'text': "ARM 寄存器"
        },
        {
          'type': "table",
          'head': [
            "寄存器",
            "用途"
          ],
          'rows': [
            [
              "X0-X7",
              "参数传递 / 返回值"
            ],
            [
              "X8",
              "间接调用结果"
            ],
            [
              "X9-X15",
              "临时寄存器"
            ],
            [
              "X16-X17",
              "链接寄存器"
            ],
            [
              "X18",
              "平台专用"
            ],
            [
              "X19-X28",
              " callee-saved"
            ],
            [
              "X29",
              "栈帧指针 (FP)"
            ],
            [
              "X30",
              "链接寄存器 (LR)"
            ],
            [
              "SP",
              "栈指针"
            ],
            [
              "PC",
              "程序计数器"
            ]
          ]
        },
        {
          'type': "h",
          'text': "ARM 指令集简介"
        },
        {
          'type': "code",
          'lang': "arm",
          'title': "ARM 汇编示例",
          'code': "; ARM 64位汇编（AArch64）\n.section .text\n.globl _start\n_start:\n    ; 寄存器传参：x0, x1, x2...\n    mov x0, 10      ; x0 = 10\n    mov x1, 20      ; x1 = 20\n    add x2, x0, x1  ; x2 = x0 + x1 = 30\n\n    ; 条件分支\n    cmp x0, x1\n    b.gt  greater   ; 如果 x0 > x1，跳到 greater\n    b  done        ; 否则跳到 done\n\ngreater:\n    ; 大于的处理\n    b  done\n\ndone:\n    ; 系统调用退出（Linux ARM）\n    mov x8, 93      ; sys_exit\n    mov x0, 0\n    svc 0"
        },
        {
          'type': "h",
          'text': "x86 与 ARM 的主要区别"
        },
        {
          'type': "list",
          'items': [
            "指令数量：x86 有 300+ 条，ARM 只有约 100 条",
            "寻址方式：x86 更灵活，ARM 更规则",
            "寄存器命名：x86 用 EAX/EBX，ARM 用 X0/X1",
            "调用约定：ARM 用 x0-x7 传参，x86 用栈",
            "能耗：ARM 设计目标是低功耗，x86 设计目标是高性能"
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Assembly ARM：移动设备的底层语言\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Assembly ARM：移动设备的底层语言\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Assembly ARM：移动设备的底层语言\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "ARM 是手机和嵌入式的主流架构",
            "RISC vs CISC：ARM 指令少且能耗低",
            "x86 寄存器用 EAX/EBX，ARM 用 X0/X1",
            "B 系列指令做条件跳转"
          ]
        }
      ],
      'templates': [
        {
          'name': "简单算术",
          'code': "mov x0, 100\nmov x1, 3\ndiv x2, x0, x1    ; x2 = 33\nmov x8, 93\nmov x0, 0\nsvc 0"
        },
        {
          'name': "循环示例",
          'code': "mov x0, 0      ; i = 0\nmov x1, 10     ; limit\nmov x2, 0      ; sum = 0\nloop_start:\n    add x2, x2, x0  ; sum += i\n    add x0, x0, 1   ; i++\n    cmp x0, x1\n    blt loop_start  ; 如果 i < 10，继续循环\n    ; 此时 x2 = 45"
        }
      ]
    },
    {
      'id': "ot-11",
      'title': "Solidity：以太坊智能合约语言",
      'summary': "用 Solidity 写区块链合约，去中心化应用的根基。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "Solidity 是专为以太坊区块链设计的合约语言。智能合约是一段「部署在区块链上、一旦被触发就无法更改」的代码。它决定了代幣的发行、转账、投票逻辑等。写合约需要用 <a href='https://remix.ethereum.org' target='_blank' rel='noopener'>Remix</a> 在线环境，因为不需要安装任何东西。"
        },
        {
          'type': "h",
          'text': "合约基本结构"
        },
        {
          'type': "code",
          'lang': "solidity",
          'title': "简单代币合约",
          'code': "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ncontract SimpleToken {\n    string public name = \"我的代币\";\n    string public symbol = \"MYT\";\n    uint8  public decimals = 18;\n    uint256 public totalSupply = 1000000 * 10 ** decimals;\n\n    mapping(address => uint256) public balanceOf;\n    mapping(address => mapping(address => uint256)) public allowance;\n\n    constructor() {\n        balanceOf[msg.sender] = totalSupply;\n    }\n\n    function transfer(address to, uint256 amount) public returns (bool) {\n        require(balanceOf[msg.sender] >= amount, \"余额不足\");\n        balanceOf[msg.sender] -= amount;\n        balanceOf[to] += amount;\n        return true;\n    }\n}"
        },
        {
          'type': "h",
          'text': "mapping / address 关键字"
        },
        {
          'type': "code",
          'lang': "solidity",
          'title': "mapping 与 address",
          'code': "mapping(address => uint256) balances;\n// mapping 像哈希表，key 是地址，value 是余额\n// address 是以太坊地址，20字节，如 0xAbC...123\n\nfunction setBalance(address who, uint256 amount) public {\n    balances[who] = amount;\n}\n\nfunction getBalance(address who) public view returns (uint256) {\n    return balances[who];\n}\n// view 表示只读，不花钱 gas"
        },
        {
          'type': "h",
          'text': "Remix 环境"
        },
        {
          'type': "p",
          'text': "<a href='https://remix.ethereum.org' target='_blank' rel='noopener'>Remix 编辑器</a> 是最流行的 Solidity 在线 IDE，直接把合约编译、部署到模拟网络（VM）或真实的测试链（Goerli、Sepolia）上。不需要安装任何软件，打开浏览器就能写合约。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Solidity：以太坊智能合约语言\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Solidity：以太坊智能合约语言\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Solidity：以太坊智能合约语言\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Solidity 专为以太坊智能合约设计",
            "contract 关键字定义合约，mapping 是哈希表",
            "address 是 20 字节的以太坊地址",
            "Remix 是官方推荐的在线开发环境"
          ]
        }
      ],
      'templates': [
        {
          'name': "简单投票合约",
          'code': "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\ncontract Voting {\n    bytes32[] public candidates;\n    mapping(bytes32 => uint256) public votes;\n    mapping(address => bool) public voted;\n    constructor(bytes32[] memory _candidates) {\n        candidates = _candidates;\n    }\n    function vote(bytes32 candidate) public {\n        require(!voted[msg.sender]);\n        voted[msg.sender] = true;\n        votes[candidate] += 1;\n    }\n}"
        },
        {
          'name': "存储合约",
          'code': "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\ncontract Storage {\n    uint256 storedValue;\n    function set(uint256 x) public {\n        storedValue = x;\n    }\n    function get() public view returns (uint256) {\n        return storedValue;\n    }\n}"
        }
      ]
    },
    {
      'id': "ot-12",
      'title': "Verilog：硬件描述语言入门",
      'summary': "用代码描述电路，FPGA 和芯片设计的起点。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "Verilog 不是传统意义上的「编程语言」，而是一种<strong>硬件描述语言（HDL）</strong>。用 Verilog 写的代码描述的是<strong>电路</strong>——有多少个门、如何连接、何时翻转。它被广泛用于 FPGA 开发和芯片设计。理解 Verilog，就理解数字电路如何从代码变成物理器件。"
        },
        {
          'type': "h",
          'text': "module / wire / reg"
        },
        {
          'type': "code",
          'lang': "verilog",
          'title': "基础模块与数据类型",
          'code': "// 与门模块\ncircuit and_gate (\n    input  a,\n    input  b,\n    output y\n);\n    assign y = a & b;  // 组合逻辑\nendmodule\n\n// 寄存器（时序元件）\nmodule d_flip_flop (\n    input  clk,\n    input  d,\n    output reg q\n);\n    always @(posedge clk) begin\n        q <= d;  // 上升沿触发，d 值传给 q\n    end\nendmodule\n\n// 数据类型：wire（连线）vs reg（存储）\n// wire：组合逻辑连线\n// reg： 时序逻辑存储（always 块中赋值）"
        },
        {
          'type': "h",
          'text': "组合逻辑 vs 时序逻辑"
        },
        {
          'type': "list",
          'items': [
            "组合逻辑：输出只取决于当前输入，用 <code.inline>assign</code.inline> 描述",
            "时序逻辑：输出取决于时钟边沿，用 <code.inline>always @(posedge clk)</code.inline> 描述",
            "<code.inline>wire</code.inline> 是连线，<code.inline>reg</code.inline> 是存储单元",
            "always 块里 <code.inline>=(赋值)</code> 是组合逻辑，<code.inline><=(非阻塞赋值)</code> 是时序逻辑"
          ]
        },
        {
          'type': "h",
          'text': "仿真概念"
        },
        {
          'type': "code",
          'lang': "verilog",
          'title': "测试平台（Testbench）",
          'code': "module tb_and_gate;\n    reg a, b;\n    wire y;\n    and_gate U1 (.a(a), .b(b), .y(y));\n    initial begin\n        $dumpfile(\"wave.vcd\");\n        $dumpvars;\n        a = 0; b = 0; #10;\n        a = 0; b = 1; #10;\n        a = 1; b = 0; #10;\n        a = 1; b = 1; #10;\n        $finish;\n    end\nendmodule\n// 用 ModelSim / Icarus Verilog 编译运行\n// 生成波形文件 wave.vcd 用于观察信号变化"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Verilog：硬件描述语言入门\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Verilog：硬件描述语言入门\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Verilog：硬件描述语言入门\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Verilog 描述电路，不是写软件",
            "module 定义模块，assign 描述组合逻辑",
            "always @(posedge clk) 描述时序逻辑",
            "测试平台（Testbench）用于仿真验证"
          ]
        }
      ],
      'templates': [
        {
          'name': "4位加法器",
          'code': "module adder_4bit(\n    input  [3:0] a,\n    input  [3:0] b,\n    output [3:0] sum,\n    output       carry\n);\n    assign {carry, sum} = a + b;\nendmodule"
        },
        {
          'name': "计数器模块",
          'code': "module counter(\n  input  clk,\n  input  reset,\n  output reg [3:0] count\n);\n  always @(posedge clk or posedge reset) begin\n    if (reset)\n      count <= 4'b0000;\n    else\n      count <= count + 1;\n  end\nendmodule"
        }
      ]
    },
    {
      'id': "ot-13",
      'title': "Zig：替代 C 的新系统语言",
      'summary': "显式内存管理、编译期计算、错误处理 Result type，C 的现代化替代者。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "Zig 是一门旨在替代 C 的现代系统语言。它保留了 C 的性能和底层控制能力，但修复了 C 的诸多痛点：显式的内存管理、编译期代码执行、优雅的错误处理（<code.inline>error!T</code> 类型），以及零隐藏控制流。"
        },
        {
          'type': "h",
          'text': "编译期计算"
        },
        {
          'type': "code",
          'lang': "zig",
          'title': "编译期代码执行",
          'code': "const std = @import(\"std\");\n\n// 编译期计算：在编译时就算出结果\nconst pi_approx = 3.141592653589793;\n\n// comptime 块：在编译期执行\ncomptime {\n    var sum: u32 = 0;\n    var i: u32 = 1;\n    while (i <= 10) : (i += 1) {\n        sum += i;\n    }\n    // 编译期验证：sum = 55\n    if (sum != 55) @compileError(\"编译期计算错误！\");\n}\n\n// 编译期函数\nfn factorial(comptime n: u32) u32 {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\n\npub fn main() void {\n    std.debug.print(\"10! = {}\n\", .{factorial(10)});\n}"
        },
        {
          'type': "h",
          'text': "错误处理 Result Type"
        },
        {
          'type': "code",
          'lang': "zig",
          'title': "错误处理",
          'code': "const std = @import(\"std\");\n\n// 定义错误集合\nconst MyError = error{\n    InvalidInput,\n    OutOfMemory,\n    FileNotFound,\n};\n\n// 函数返回 error!T：成功返回 T，失败返回 error\nfn divide(a: f64, b: f64) MyError!f64 {\n    if (b == 0) return MyError.InvalidInput;\n    return a / b;\n}\n\npub fn main() void {\n    const result = divide(10.0, 3.0) catch |err| {\n        std.debug.print(\"出错: {}\n\", .{err});\n        return;\n    };\n    std.debug.print(\"结果: {}\n\", .{result});\n}"
        },
        {
          'type': "h",
          'text': "显式内存管理"
        },
        {
          'type': "code",
          'lang': "zig",
          'title': "堆内存与栈内存",
          'code': "const std = @import(\"std\");\n\npub fn main() void {\n    const allocator = std.heap.page_allocator;\n\n    // 在堆上分配内存\n    var list = std.ArrayList(i32).init(allocator);\n    defer list.deinit();  // 自动释放\n\n    list.append(10) catch unreachable;\n    list.append(20) catch unreachable;\n    list.append(30) catch unreachable;\n\n    for (list.items) |item| {\n        std.debug.print(\"{} \", .{item});\n    }\n    std.debug.print(\"\n\", .{});\n}"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Zig：替代 C 的新系统语言\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Zig：替代 C 的新系统语言\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Zig：替代 C 的新系统语言\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "comptime 块在编译期执行，适合生成代码",
            "error!T 让错误处理显式且类型安全",
            "defer 类似其他语言的 finally，保证释放",
            "显式 allocator 管理堆内存"
          ]
        }
      ],
      'templates': [
        {
          'name': "Hello World",
          'code': "const std = @import(\"std\");\npub fn main() void {\n    const stdout = std.io.getStdOut().writer();\n    try stdout.writeAll(\"Hello, Zig!\n\");\n}"
        },
        {
          'name': "斐波那契数列",
          'code': "const std = @import(\"std\");\nfn fib(n: u32) u32 {\n    if (n <= 1) return n;\n    var a: u32 = 0;\n    var b: u32 = 1;\n    var i: u32 = 2;\n    while (i <= n) : (i += 1) {\n        const temp = a + b;\n        a = b;\n        b = temp;\n    }\n    return b;\n}\npub fn main() void {\n    var i: u32 = 0;\n    while (i < 10) : (i += 1) {\n        std.debug.print(\"{} \", .{fib(i)});\n    }\n    std.debug.print(\"\n\", .{});\n}"
        }
      ]
    },
    {
      'id': "ot-14",
      'title': "Elixir：高并发函数式语言",
      'summary': "Erlang VM 上的现代语言，模式匹配与轻量进程是其杀手锏。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "Elixir 运行在 Erlang VM（BEAM）上，专为高并发分布式系统而生。WhatsApp、Discord 等巨型聊天系统都是用 Erlang/Elixir 搭建的。它的核心武器是：<strong>模式匹配</strong>、<strong>不可变数据</strong>、<strong>轻量级进程</strong>，三者结合让并发编程变得异常简单。"
        },
        {
          'type': "h",
          'text': "基础语法与模式匹配"
        },
        {
          'type': "code",
          'lang': "elixir",
          'title': "Elixir 基础",
          'code': "#!/usr/bin/env elixir\n# 变量不可变（不可变数据）\nname = \"小明\"\nIO.puts(\"你好，#{name}\")\n\n# 模式匹配（= 不是赋值，是匹配）\n{x, y} = {1, 2}\nIO.inspect(x)  # 1\nIO.inspect(y)  # 2\n\n# 函数定义\n# defmodule 定义模块\n# def 定义公共函数\n# defp 定义私有函数\n\ndefmodule Math do\n  def add(a, b), do: a + b\n  def multiply(a, b), do: a * b\n\n  # 模式匹配在函数参数中使用\n  def greet(\"Admin\"), do: IO.puts(\"欢迎管理员\")\n  def greet(name), do: IO.puts(\"你好，#{name}\")\nend\n\nMath.add(3, 5)\nMath.greet(\"小明\")\nMath.greet(\"Admin\")"
        },
        {
          'type': "h",
          'text': "进程与消息传递"
        },
        {
          'type': "code",
          'lang': "elixir",
          'title': "轻量级进程",
          'code': "# spawn 创建轻量级进程\n# send 发消息，receive 收消息\n\npid = spawn(fn ->\n  receive do\n    {:add, a, b} ->\n      IO.puts(\"#{a} + #{b} = #{a + b}\")\n    {:multiply, a, b} ->\n      IO.puts(\"#{a} * #{b} = #{a * b}\")\n    _ ->\n      IO.puts(\"未知消息\")\n  end\nend)\n\nsend(pid, {:add, 3, 5})\nsend(pid, {:multiply, 4, 6})\nsleep(1000)  # 等待进程结束\n\n# spawn_link 创建链接进程（故障传播）\n# 这是 Elixir 高可用的核心机制"
        },
        {
          'type': "h",
          'text': "OTP 行为简介"
        },
        {
          'type': "p",
          'text': "OTP（Open Telecom Platform）是 Elixir/Erlang 的并发框架，提供 <code.inline>GenServer</code.inline>、<code.inline>Supervisor</code.inline>、<code.inline>Task</code.inline> 等现成行为。GenServer 是最常用的 OTP 行为，封装了「状态管理 + 并发请求处理」，一行代码就能启动一个并发服务器。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Elixir：高并发函数式语言\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Elixir：高并发函数式语言\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Elixir：高并发函数式语言\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Elixir 在 Erlang VM 上运行，专为高并发而生",
            "= 是模式匹配，不是赋值",
            "defmodule/def/defp 定义模块和函数",
            "spawn 创建轻量进程，send/receive 传递消息"
          ]
        }
      ],
      'templates': [
        {
          'name': "FizzBuzz",
          'code': "defmodule FizzBuzz do\n  def solve(n) do\n    cond do\n      rem(n, 15) == 0 -> \"FizzBuzz\"\n      rem(n, 3) == 0  -> \"Fizz\"\n      rem(n, 5) == 0  -> \"Buzz\"\n      true            -> to_string(n)\n    end\n  end\nend\n1..100 |> Enum.map(&FizzBuzz.solve/1) |> Enum.each(&IO.puts/1)"
        },
        {
          'name': "简单服务器",
          'code': "defmodule Server do\n  use GenServer\n  def start_link(_) do\n    GenServer.start_link(__MODULE__, %{}, name: __MODULE__)\n  end\n  def init(state) do\n    {:ok, state}\n  end\n  def get(pid, key) do\n    GenServer.call(pid, {:get, key})\n  end\n  def handle_call({:get, key}, _from, state) do\n    {:reply, Map.get(state, key), state}\n  end\nend\nServer.start_link(nil)\nIO.inspect(Server.get(Server, \"name\"))"
        }
      ]
    },
    {
      'id': "ot-15",
      'title': "Perl：文本处理老将",
      'summary': "正则之王，$_ 默认变量，CPAN 模块生态。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "Perl 被称为「正则表达式之王」，是 Unix 世界中处理文本的首选工具。虽然近年热度下降，但 Perl 的正则能力、`$_` 默认变量、以及 CPAN 庞大的模块生态，仍然值得了解。现代 Perl（2000 年后）已经修正了早期的混乱，代码更加清晰。"
        },
        {
          'type': "h",
          'text': "基础语法与 $_ 默认变量"
        },
        {
          'type': "code",
          'lang': "perl",
          'title': "Perl 基础",
          'code': "#!/usr/bin/env perl\nuse strict;\nuse warnings;\n\n# 字符串与变量\nmy $name = \"小明\";\nprint \"你好，$name！\\n\";\n\n# 数组（注意：索引从 0 开始）\nmy @fruits = (\"苹果\", \"香蕉\", \"橙子\");\nprint \"第一个：$fruits[0]\\n\";\nprint \"数量：\", scalar @fruits, \"\\n\";\n\n# 哈希（关联数组）\nmy %person = (name => \"小明\", age => 20);\nprint \"$person{name}\\n\";\n\n# 列表与 range 运算符\nmy @nums = (1..10);\nprint join(\", \", @nums), \"\\n\";"
        },
        {
          'type': "h",
          'text': "正则表达式"
        },
        {
          'type': "code",
          'lang': "perl",
          'title': "正则表达式匹配",
          'code': "my $text = \"联系电话：138-1234-5678\";\n\n# 匹配模式\nif ($text =~ /(\\d+)-(\\d+)-(\\d+)/) {\n    print \"区号：$1\\n\";\n    print \"前缀：$2\\n\";\n    print \"后缀：$3\\n\";\n}\n\n# 替换\nmy $new = $text;\n$new =~ s/\\d/x/g;  # 所有数字替换为 x\nprint \"$new\\n\";  # 联系电话：xxxx-xxxx-xxxx\n\n# 单词边界匹配\nmy $sentence = \"The quick brown fox\";\nif ($sentence =~ /\\bfox\\b/) {\n    print \"找到 fox\\n\";\n}"
        },
        {
          'type': "h",
          'text': "CPAN 模块简介"
        },
        {
          'type': "p",
          'text': "CPAN（Comprehensive Perl Archive Network）是 Perl 最大的开源模块仓库，有超过 20 万个模块。安装模块只需一行命令：<code.inline>cpan Module::Name</code.inline> 或 <code.inline>cpanm Module::Name</code.inline>。常用模块包括 <code.inline>Data::Dumper</code.inline>（调试）、<code.inline>JSON</code.inline>（JSON 处理）、<code.inline>LWP::Simple</code.inline>（HTTP 请求）。"
        },
        {
          'type': "warn",
          'title': "老式 Perl vs 现代 Perl",
          'text': "老式 Perl（Perl 4 及更早）代码风格混乱，大量使用全局变量和 <> 运算符。现代 Perl 使用 <code.inline>use strict</code.inline> 和 <code.inline>my</code.inline> 关键字，强烈推荐从现代风格学起。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Perl：文本处理老将\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Perl：文本处理老将\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Perl：文本处理老将\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Perl 是文本处理和正则表达式的王者",
            "<code.inline>$_</code.inline> 是默认变量，很多函数隐式操作它",
            "CPAN 有 20 万+ 模块，扩展性极强",
            "现代 Perl 用 use strict + my，避免全局变量"
          ]
        }
      ],
      'templates': [
        {
          'name': "文本统计脚本",
          'code': "use strict;\nuse warnings;\nmy $text = \"Hello world. Perl is great. Hello again.\";\nmy %count;\nforeach my $word (split /\\W+/, lc $text) {\n    $count{$word}++ if $word;\n}\nforeach my $w (sort keys %count) {\n    print \"$w: $count{$w}\\n\";\n}"
        },
        {
          'name': "文件名处理",
          'code': "use strict;\nuse warnings;\nforeach my $file (\"report.pdf\", \"image.png\", \"data.csv\") {\n    if ($file =~ /^(.+?)\\.(\\w+)$/) {\n        print \"文件名：$1  扩展名：$2\\n\";\n    }\n}"
        }
      ]
    },
    {
      'id': "ot-16",
      'title': "OCaml：ML 家族的现代语言",
      'summary': "模块系统、模式匹配、类型推断，ML 系语言的现代代表。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "OCaml 是 ML 家族中工业化最成功的语言。它有强大的静态类型系统（带类型推断，无需手动标注），模式匹配非常强大，模块系统是编程语言设计的经典。OCaml 也是许多现代语言（Rust、Swift、Haskell）的重要灵感来源。"
        },
        {
          'type': "h",
          'text': "基础语法与类型推断"
        },
        {
          'type': "code",
          'lang': "ocaml",
          'title': "OCaml 基础",
          'code': "(* OCaml 注释 *)\n\n(* 不可变变量：let 绑定 *)\nlet name = \"小明\"\nlet age = 20\n\n(* 函数定义 *)\nlet greet who = \"你好, \" ^ who ^ \"！\"\nlet _ = print_endline (greet name)\n\n(* 列表 *)\nlet nums = [1; 2; 3; 4; 5]\nlet doubled = List.map (fun x -> x * 2) nums\n\n(* 模式匹配 *)\nlet describe n = match n with\n  | 0 -> \"零\"\n  | 1 -> \"一\"\n  | 2 -> \"二\"\n  | _ -> \"其他\"\nlet _ = print_endline (describe 3)"
        },
        {
          'type': "h",
          'text': "模式匹配与递归"
        },
        {
          'type': "code",
          'lang': "ocaml",
          'title': "模式匹配高级用法",
          'code': "(* 列表模式匹配 *)\nlet rec sum = function\n  | [] -> 0\n  | h :: t -> h + sum t\n\n(* 选项类型：option = Some x | None *)\nlet find_first_even lst =\n  match lst with\n  | [] -> None\n  | h :: t -> if h mod 2 = 0 then Some h else find_first_even t\n\n(* 递归函数 *)\nlet rec fib n =\n  if n <= 1 then n\n  else fib (n - 1) + fib (n - 2)\n\nlet _ =\n  print_endline (string_of_int (sum [1; 2; 3; 4; 5]))\n  (* 输出：15 *)"
        },
        {
          'type': "h",
          'text': "模块系统"
        },
        {
          'type': "code",
          'lang': "ocaml",
          'title': "模块与接口",
          'code': "(* 模块定义 *)\nmodule type STACK = sig\n  type 'a t\n  val empty : 'a t\n  val push : 'a -> 'a t -> 'a t\n  val pop : 'a t -> 'a * 'a t\nend\n\nmodule IntStack : STACK with type 'a = int = struct\n  type int t = int list\n  let empty = []\n  let push x s = x :: s\n  let pop = function\n    | [] -> failwith \"empty\"\n    | h :: t -> (h, t)\nend\n\n(* 使用模块 *)\nlet _ =\n  let s = IntStack.push 1 IntStack.empty in\n  let (v, s') = IntStack.pop s in\n  print_endline (string_of_int v)"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"OCaml：ML 家族的现代语言\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"OCaml：ML 家族的现代语言\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"OCaml：ML 家族的现代语言\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "OCaml 有静态类型推断，无需手动标注类型",
            "模式匹配是核心武器，支持列表/元组/选项",
            "module 系统是 OCaml 最独特的设计",
            "递归+模式匹配替代循环，函数式风格"
          ]
        }
      ],
      'templates': [
        {
          'name': "斐波那契数列",
          'code': "let rec fib n =\n  if n <= 1 then n\n  else fib (n - 1) + fib (n - 2)\n\nlet _ =\n  for i = 0 to 10 do\n    print_int (fib i); print_string \" \"\n  done;\n  print_newline()"
        },
        {
          'name': "列表处理",
          'code': "let _ =\n  let nums = [1; 2; 3; 4; 5; 6; 7; 8; 9; 10] in\n  let evens = List.filter (fun x -> x mod 2 = 0) nums in\n  let doubled = List.map (fun x -> x * 2) evens in\n  let sum = List.fold_left (+) 0 doubled in\n  print_endline (string_of_int sum)\n  (* 输出：240 = 2*2 + 4*2 + 6*2 + 8*2 + 10*2 *)"
        }
      ]
    }
  ]
});

