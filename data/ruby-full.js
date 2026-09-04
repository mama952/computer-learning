/* ============================================================
   计算机知识库 · 数据：Ruby 完整课程（16 章，从下载安装到进阶）
   ============================================================ */
window.LANGUAGE_EXTRA = window.LANGUAGE_EXTRA || [];
window.LANGUAGE_EXTRA.push({
  'id': "ruby",
  'name': "Ruby",
  'icon': "Ru",
  'tagline': "让程序员快乐的脚本语言，16 章从安装到 Rails 全栈入门。",
  'intro': "这是一套从零开始的 Ruby 完整课程。第 1 章带你认识 Ruby 这门『让程序员快乐』的语言，第 2 章教你在 Windows/macOS/Linux 上安装，之后从变量、字符串、条件、循环一路讲到数组、哈希、方法、面向对象、模块、异常、文件，最后速览 Ruby on Rails 并动手做两个小项目。每一章都用大白话讲透概念和坑，配可运行的示例代码和编辑器模板。",
  'meta': {
    "难度": "从零到进阶",
    "章节": "16 章",
    "场景": "Web / 自动化 / 脚本"
  },
  'lessons': [
    {
      'id': "rb-1",
      'title': "Ruby 是什么：让程序员快乐的脚本语言",
      'summary': "认识 Ruby 的设计哲学、历史与适用场景，明确学习路线。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "Ruby 是一种**让程序员感到快乐**的编程语言。它诞生于 1995 年的日本，由松本行弘（Yukihiro Matsumoto，大家都叫他 Matz）发明。和 Python、JavaScript 一样，Ruby 是解释型脚本语言：写起来快、读起来像英语，非常适合新手入门，也足够强大到支撑 GitHub、Shopify 这样的顶级公司。"
        },
        {
          'type': "h",
          'text': "Ruby 的诞生与设计哲学"
        },
        {
          'type': "p",
          'text': "Matz 创造 Ruby 的初衷就是『让程序员快乐』。他希望语言更关注『人的感受』而不是『机器的感受』，所以 Ruby 有很多贴心的设计：语法接近自然语言、方法名结尾常常带问号或感叹号（如 <code.inline>include?</code.inline>、<code.inline>map!</code.inline>）、同一个功能往往有好几种写法供你选择。这种哲学被称为**最小惊讶原则**（Principle of Least Surprise）。"
        },
        {
          'type': "list",
          'items': [
            "语法优雅自然，读起来像英语句子",
            "解释执行，写一行跑一行，调试方便",
            "高度灵活，内置类都可以扩展（元编程）",
            "社区崇尚『程序员幸福』，生态成熟"
          ]
        },
        {
          'type': "h",
          'text': "谁在用它"
        },
        {
          'type': "list",
          'items': [
            "GitHub 早期完全基于 Ruby on Rails 构建，核心至今仍是 Ruby",
            "Airbnb 早期用 Rails 快速搭建，完成了从 0 到 1 的起飞",
            "Shopify（全球最大的电商 SaaS 之一）整个平台用 Rails 编写",
            "Twitter 最早也是 Rails 应用，后来因性能才迁移走"
          ]
        },
        {
          'type': "h",
          'text': "Ruby 适合做什么"
        },
        {
          'type': "list",
          'items': [
            "Web 应用开发：Ruby on Rails 是它的杀手锏",
            "自动化脚本：批量处理文件、抓取网页数据",
            "DevOps 工具：Chef、Puppet 等配置管理工具用 Ruby 编写",
            "命令行小工具：Ruby 的 gem 体系一行命令就能装库"
          ]
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "先感受一下 Ruby",
          'code': "puts \"Hello, World!\"\nputs \"Ruby 是一门让程序员快乐的编程语言\"\n5.times { puts \"我很喜欢 Ruby\" }"
        },
        {
          'type': "warn",
          'title': "别怕『选择困难』",
          'text': "Ruby 有个特点：同一个功能往往有多种写法（比如块既能用 do..end 也能用 {}）。新手容易纠结选哪种。建议先记一种最顺手的写法用起来，等熟悉了再慢慢了解其他写法。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Ruby 是什么：让程序员快乐的脚本语言\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Ruby 是什么：让程序员快乐的脚本语言\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Ruby 是什么：让程序员快乐的脚本语言\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Ruby 由松本行弘于 1995 年创造，核心哲学是『让程序员快乐』",
            "解释型脚本语言，语法接近英语，适合新手",
            "GitHub、Airbnb、Shopify 早期都用 Ruby/Rails",
            "擅长 Web 开发（Rails）、自动化脚本与命令行工具"
          ]
        }
      ],
      'templates': [
        {
          'name': "我的第一个 Ruby 程序",
          'code': "puts \"Hello, World!\"\nputs \"Ruby 让我很快乐\""
        }
      ]
    },
    {
      'id': "rb-2",
      'title': "下载与安装 Ruby（Windows / macOS / Linux）",
      'summary': "三平台分别装好 Ruby，用 ruby --version 验证。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "这一章教你分别在三大平台装好 Ruby。装好后打开终端输入 <code.inline>ruby --version</code.inline>，能看到版本号就成功了。"
        },
        {
          'type': "h",
          'text': "Windows：用 RubyInstaller"
        },
        {
          'type': "list",
          'items': [
            "打开官网下载页：<a href='https://rubyinstaller.org/' target='_blank' rel='noopener'>https://rubyinstaller.org/</a>",
            "下载最新的『WITH DEVKIT』版本（自带开发工具包，后续装 gem 需要）",
            "双击安装，**务必勾选『Add Ruby executables to your PATH』**，一路 Next 完成",
            "安装收尾会提示配置 DevKit，按提示输入 3 回车即可完成"
          ]
        },
        {
          'type': "warn",
          'title': "PATH 没配置怎么办",
          'text': "如果安装后输入 <code.inline>ruby -v</code.inline> 提示『不是内部或外部命令』，说明 PATH 没生效。最简单的方法是**重新运行安装程序再勾选一次**，或者重启一次终端再试。"
        },
        {
          'type': "h",
          'text': "macOS：用 rbenv 管理版本"
        },
        {
          'type': "list",
          'items': [
            "先装 Homebrew（macOS 包管理器）：<a href='https://brew.sh' target='_blank' rel='noopener'>https://brew.sh</a>",
            "终端执行 <code.inline>brew install rbenv ruby-build</code.inline>",
            "执行 <code.inline>rbenv install 3.2.2</code.inline> 安装指定版本",
            "执行 <code.inline>rbenv global 3.2.2</code.inline> 设为默认版本"
          ]
        },
        {
          'type': "h",
          'text': "Linux（Debian / Ubuntu）"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "用系统包管理器安装",
          'code': "sudo apt update\nsudo apt install -y ruby-full\nruby --version"
        },
        {
          'type': "h",
          'text': "验证安装"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "验证版本",
          'code': "ruby --version   # 输出类似 ruby 3.2.2 (2023-03-30) [x64-mingw-ucrt]"
        },
        {
          'type': "tip",
          'title': "顺手装个好编辑器",
          'text': "推荐 VS Code（完全免费）：<a href='https://code.visualstudio.com' target='_blank' rel='noopener'>https://code.visualstudio.com</a>。装好后在扩展商店搜『Ruby』，安装由 rebornix 开发的那个 Ruby 扩展，写代码就有语法高亮和自动补全了。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"下载与安装 Ruby（Windows / macOS / Linux）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"下载与安装 Ruby（Windows / macOS / Linux）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"下载与安装 Ruby（Windows / macOS / Linux）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Windows 用 RubyInstaller，装 WITH DEVKIT 版并勾选 PATH",
            "macOS 推荐 rbenv 管理多版本 Ruby",
            "Linux 用 apt 直接装 ruby-full",
            "ruby --version 验证安装成功",
            "配合 VS Code + Ruby 扩展写代码"
          ]
        }
      ],
      'templates': [
        {
          'name': "验证安装",
          'code': "puts RUBY_VERSION\nputs \"Ruby 安装成功！\""
        }
      ]
    },
    {
      'id': "rb-3",
      'title': "第一个程序与 irb 交互环境",
      'summary': "用 puts 输出、用 ruby 命令运行文件，认识 irb。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "装好 Ruby 之后，我们来写第一个程序。Ruby 输出文字用 <code.inline>puts</code.inline>，意思是『put string』（把字符串放出来）。"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "第一个程序",
          'code': "puts \"Hello, World!\"\nputs \"你好，Ruby！\""
        },
        {
          'type': "h",
          'text': "把代码存成文件运行"
        },
        {
          'type': "p",
          'text': "在任意目录新建一个文件，命名为 <code.inline>hello.rb</code.inline>（扩展名必须是 .rb），用记事本或 VS Code 写入上面的代码保存。然后在终端进入该目录，运行 <code.inline>ruby hello.rb</code.inline> 就能看到输出。"
        },
        {
          'type': "h",
          'text': "puts / print / p 三兄弟"
        },
        {
          'type': "table",
          'head': [
            "方法",
            "行为",
            "示例"
          ],
          'rows': [
            [
              "puts",
              "输出并自动换行",
              "puts \"hi\""
            ],
            [
              "print",
              "输出但不换行",
              "print \"hi\""
            ],
            [
              "p",
              "原样打印对象，调试用",
              "p \"hi\" 会带引号"
            ]
          ]
        },
        {
          'type': "h",
          'text': "irb：Ruby 的交互式环境"
        },
        {
          'type': "p",
          'text': "在终端输入 <code.inline>irb</code.inline> 回车，就进入 Ruby 的交互式环境（Interactive RuBy）。在这里输入一行、立刻执行一行并显示结果，非常适合做小实验。输入 <code.inline>exit</code.inline> 退出。"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "irb 里的小实验",
          'code': "irb> 1 + 2\n=> 3\nirb> \"ab\" * 3\n=> \"ababab\""
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "注释写法",
          'code': "# 这是单行注释，以 # 开头，Ruby 运行时会忽略\nputs \"注释不影响程序运行\"  # 注释也可以写在行尾\n=begin\n这是多行注释\n以 =begin 开始，=end 结束\n=end"
        },
        {
          'type': "warn",
          'title': "文件扩展名与运行方式",
          'text': "新手常见的坑：把文件保存成 <code.inline>hello.txt</code.inline>，或者运行时打错文件名。保存为 <code.inline>.rb</code.inline>，运行时用 <code.inline>ruby 文件名.rb</code.inline>，注意文件名大小写要和实际完全一致。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"第一个程序与 irb 交互环境\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"第一个程序与 irb 交互环境\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"第一个程序与 irb 交互环境\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "puts 输出并换行，print 不换行，p 原样调试输出",
            "用 ruby 文件名.rb 运行 .rb 文件",
            "irb 是交互式环境，适合边写边试",
            "# 是单行注释，=begin/=end 是多行注释"
          ]
        }
      ],
      'templates': [
        {
          'name': "第一个程序",
          'code': "puts \"Hello, World!\"\nprint \"不换行\"\np \"原始对象\""
        }
      ]
    },
    {
      'id': "rb-4",
      'title': "变量与数据类型",
      'summary': "变量无需声明类型，掌握数字、字符串、布尔、nil 与 Symbol。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "变量就是给数据起一个名字，之后用名字来引用它。Ruby 的变量**不需要声明类型**，你直接赋值，Ruby 自动知道它是数字还是字符串。"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "变量赋值",
          'code': "name = \"小明\"\nage = 18\nheight = 1.75\nis_student = true\nputs \"我叫 #{name}，今年 #{age} 岁\""
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "数字运算",
          'code': "a = 10\nb = 3\nputs a + b    # 13  加法\nputs a - b    # 7   减法\nputs a * b    # 30  乘法\nputs a / b    # 3   整数相除取整数部分\nputs a / 3.0  # 3.333... 除以浮点数得到浮点数\nputs a % b    # 1   取余\nputs a ** b   # 1000 幂运算"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "三种基础类型",
          'code': "s = \"hello\"\nis_ok = false\nnothing = nil   # nil 表示『什么都没有』\nputs s.upcase    # HELLO\nputs is_ok       # false\nputs nothing     # 输出空行，因为 nil 打印出来是空的"
        },
        {
          'type': "h",
          'text': "Symbol 符号：Ruby 特有的类型"
        },
        {
          'type': "p",
          'text': "Symbol 的写法是在名字前加冒号，比如 <code.inline>:name</code.inline>、<code.inline>:active</code.inline>。它的特点是**不可变**且**唯一**：同一个符号在内存里只有一份。因此它非常适合做哈希的键、状态的标记，比字符串省内存、比较速度快。"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "Symbol 示例",
          'code': "status = :active\nputs status\nputs status.class   # Symbol\nputs \"active\".to_sym   # :active\nputs :active.to_s      # \"active\""
        },
        {
          'type': "h",
          'text': "查看类型：.class 与命名习惯"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "查看变量类型",
          'code': "puts 10.class     # Integer\nputs 3.14.class   # Float\nputs \"hi\".class   # String\nputs true.class   # TrueClass\nputs nil.class    # NilClass"
        },
        {
          'type': "warn",
          'title': "注意变量名规则",
          'text': "变量名不能以数字开头（<code.inline>1name</code.inline> 是错的），不能用 Ruby 关键字（如 class、def、if）。另外 @name 是实例变量、$name 是全局变量、Name 是常量，首字符决定了它的『地位』，别写混。"
        },
        {
          'type': "info",
          'title': "Ruby 命名习惯",
          'text': "局部变量和文件名用 <code.inline>snake_case</code.inline>（小写加下划线，如 user_name）；常量首字母大写（如 <code.inline>PI = 3.14</code.inline>）；后面学类时会看到 <code.inline>@实例变量</code.inline> 和 <code.inline>$全局变量</code.inline>。"
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
            "变量无需声明类型，直接赋值即可",
            "整数 / 浮点数 / 字符串 / 布尔 / nil 是基本类型",
            "nil 表示『什么都没有』",
            "Symbol（:name）不可变且唯一，适合做键",
            ".class 查看类型，命名用 snake_case"
          ]
        }
      ],
      'templates': [
        {
          'name': "变量练习",
          'code': "name = \"小红\"\nage = 9\nputs \"我叫 #{name}，今年 #{age} 岁\"\nputs age.class"
        }
      ]
    },
    {
      'id': "rb-5",
      'title': "字符串与常用方法",
      'summary': "插值、方法链、单双引号区别，字符串操作一网打尽。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "字符串是编程里用得最多的类型。Ruby 的字符串功能非常丰富，这一章把最常用的方法和最常踩的坑一次讲透。"
        },
        {
          'type': "h",
          'text': "单引号与双引号"
        },
        {
          'type': "p",
          'text': "双引号字符串支持**插值**（把变量嵌入字符串）和转义符；单引号字符串是**原样输出**。日常推荐用双引号。"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "双引号插值",
          'code': "name = \"Ruby\"\nputs \"你好，#{name}！\"     # 双引号里 #{name} 会被替换成变量的值\nsentence = \"我学习的是#{name}\"\nputs sentence"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "单引号原样输出",
          'code': "puts '你好'\nputs '#{name}'   # 单引号不会做插值，原样输出 #{name}"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "大小写与长度",
          'code': "s = \"Hello Ruby\"\nputs s.length       # 10  字符个数\nputs s.upcase       # HELLO RUBY\nputs s.downcase     # hello ruby\nputs s.capitalize   # Hello ruby\nputs s.reverse      # ybuR olleH\nputs s.swapcase     # hELLO rUBY"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "判断与切分",
          'code': "s = \"ruby is awesome\"\nputs s.include?(\"ruby\")    # true  是否包含\nputs s.start_with?(\"ruby\") # true  是否以...开头\nputs s.end_with?(\"!\")      # false\np s.split(\" \")             # 按空格切分，得到数组 [\"ruby\", \"is\", \"awesome\"]"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "替换与清理",
          'code': "s = \"  hello world  \"\nputs s.strip       # 去掉首尾空白，输出 hello world\nputs s.gsub(\"world\", \"Ruby\")  # 把 world 替换成 Ruby\nputs s.delete(\" \")  # 删除所有空格，输出 helloworld"
        },
        {
          'type': "h",
          'text': "方法链：一口气做多件事"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "方法链",
          'code': "result = \"  hello RUBY  \".strip.downcase.capitalize\nputs result   # Hello ruby\n\nwords = \"a,b,c\".split(\",\").map { |w| w.upcase }\np words       # [\"A\", \"B\", \"C\"]"
        },
        {
          'type': "warn",
          'title': "插值只能用双引号",
          'text': "很多新手写 <code.inline>puts '#{name}'</code.inline>，结果原样输出了 <code.inline>#{name}</code.inline>，原因就是用了单引号。记住：**插值 <code.inline>#{}</code.inline> 只在双引号字符串里生效**。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"字符串与常用方法\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"字符串与常用方法\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"字符串与常用方法\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "双引号支持插值 #{var}，单引号原样输出",
            "length/upcase/downcase/capitalize/reverse 是常用方法",
            "include?/start_with? 用于判断，split 用于切分",
            "gsub 替换、strip 去空白、delete 删除字符",
            "方法可以链式调用，读起来很自然"
          ]
        }
      ],
      'templates': [
        {
          'name': "字符串方法",
          'code': "s = \"Hello Ruby\"\nputs s.length\nputs s.upcase\nputs s.reverse\nputs \"你好，#{s}\""
        }
      ]
    },
    {
      'id': "rb-6",
      'title': "条件判断：if / unless / case",
      'summary': "掌握真假值判定、if/elsif/else、unless、case when 与修饰符语法。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "程序需要根据条件做不同的选择，这就是条件判断。Ruby 的条件判断语法非常直观、接近英语。"
        },
        {
          'type': "h",
          'text': "if / elsif / else"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "if 判断",
          'code': "score = 85\nif score >= 90\n  puts \"优秀\"\nelsif score >= 60\n  puts \"及格\"\nelse\n  puts \"不及格\"\nend"
        },
        {
          'type': "h",
          'text': "Ruby 的真假值判定"
        },
        {
          'type': "p",
          'text': "在 Ruby 里，**只有 <code.inline>nil</code.inline> 和 <code.inline>false</code.inline> 是『假』**，其他一切都是『真』。这和很多语言不一样：<code.inline>0</code.inline>、<code.inline>\"\"</code.inline>（空字符串）、<code.inline>[]</code.inline>（空数组）在 Ruby 里都是真。"
        },
        {
          'type': "warn",
          'title': "0 也是真！",
          'text': "如果你写过其他语言，注意 Ruby 里 <code.inline>0</code.inline> 是真值。所以判断『数组是否为空』别用 <code.inline>if arr</code.inline>（空数组也是真），要写成 <code.inline>if arr.empty?</code.inline> 或用 <code.inline>unless arr.empty?</code.inline>。"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "unless",
          'code': "age = 17\nunless age >= 18\n  puts \"未满 18 岁\"\nend\n# 等价写法\nif age < 18\n  puts \"未满 18 岁\"\nend"
        },
        {
          'type': "h",
          'text': "case when：多分支"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "case when",
          'code': "day = \"周日\"\ncase day\nwhen \"周六\", \"周日\"\n  puts \"今天是周末\"\nwhen \"周一\"\n  puts \"新的一周开始\"\nelse\n  puts \"工作日\"\nend"
        },
        {
          'type': "h",
          'text': "修饰符语法：一行写法"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "修饰符与三目",
          'code': "x = 10\nputs \"x 是正数\" if x > 0\nputs \"x 不是零\" unless x == 0\n# 三目运算符\nresult = x > 0 ? \"正数\" : \"非正数\"\nputs result"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"条件判断：if / unless / case\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"条件判断：if / unless / case\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"条件判断：if / unless / case\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "if/elsif/else 表达多分支判断",
            "只有 nil 和 false 是假，0 和空字符串都是真",
            "unless 是 if 的反面",
            "case when 适合多分支，可并列多个值",
            "if/unless 可以写在行尾当修饰符，三目 ?: 也常用"
          ]
        }
      ],
      'templates': [
        {
          'name': "条件判断",
          'code': "score = 75\nif score >= 90\n  puts \"优秀\"\nelsif score >= 60\n  puts \"及格\"\nelse\n  puts \"不及格\"\nend"
        }
      ]
    },
    {
      'id': "rb-7",
      'title': "循环与迭代：each / times / while",
      'summary': "用迭代器而不是 for，掌握 each、times、while 与 break/next。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "循环就是重复做某件事。Ruby 崇尚『迭代器』而不是传统 for 循环，写起来非常优雅。"
        },
        {
          'type': "h",
          'text': "each：最常用的迭代"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "each 遍历",
          'code': "names = [\"小明\", \"小红\", \"小刚\"]\nnames.each do |name|\n  puts \"你好，#{name}\"\nend\n# 也可以写成一行花括号形式\nnames.each { |name| puts \"再见，#{name}\" }"
        },
        {
          'type': "h",
          'text': "times / upto / downto：计数循环"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "计数循环",
          'code': "3.times { puts \"hi\" }        # 打印 3 次 hi\n1.upto(5) { |i| print i }    # 12345\n5.downto(1) { |i| print i }  # 54321\nputs\n5.times { |i| puts \"第 #{i} 次\" }"
        },
        {
          'type': "h",
          'text': "while / until"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "while 与 until",
          'code': "i = 1\nwhile i <= 3\n  puts \"while: #{i}\"\n  i += 1\nend\n\nj = 1\nuntil j > 3\n  puts \"until: #{j}\"\n  j += 1\nend"
        },
        {
          'type': "h",
          'text': "break 与 next"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "break 与 next",
          'code': "(1..10).each do |n|\n  next if n.even?    # 跳过偶数\n  puts n\n  break if n == 7    # 到 7 就停\nend\n# 输出 1 3 5 7"
        },
        {
          'type': "warn",
          'title': "小心死循环",
          'text': "写 <code.inline>while true</code.inline> 时，循环体里一定要改循环变量（比如 <code.inline>i += 1</code.inline>），或者有 <code.inline>break</code.inline>，否则程序会永远跑下去。在 irb 里按 <code.inline>Ctrl+C</code.inline> 可以中断。"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "for 循环",
          'code': "for i in 1..3\n  puts i\nend\n# for 在 Ruby 里存在，但社区更推荐用 each 等迭代器"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"循环与迭代：each / times / while\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"循环与迭代：each / times / while\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"循环与迭代：each / times / while\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "each 是 Ruby 最常用的遍历方式",
            "times/upto/downto 适合固定次数的循环",
            "while 条件为真时执行，until 条件为假时执行",
            "next 跳过本次，break 结束整个循环",
            "优先用迭代器，少用 for"
          ]
        }
      ],
      'templates': [
        {
          'name': "循环练习",
          'code': "3.times { puts \"hi\" }\n(1..5).each { |n| print n }\nputs\n5.downto(1) { |n| print n }"
        }
      ]
    },
    {
      'id': "rb-8",
      'title': "数组：有序的集合",
      'summary': "创建、索引、修改、遍历，掌握 map/select/reject 与 splat。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "数组（Array）是有序的集合，可以装任意类型的数据，是编程中最常用的数据结构之一。"
        },
        {
          'type': "h",
          'text': "创建数组"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "创建数组",
          'code': "empty = []\nnums = [1, 2, 3, 4]\nmixed = [1, \"two\", 3.0, :four]\nwords = %w[apple banana cherry]   # %w 快捷创建字符串数组\np words   # [\"apple\", \"banana\", \"cherry\"]"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "索引访问",
          'code': "arr = [10, 20, 30, 40]\nputs arr[0]     # 10\nputs arr[3]     # 40\nputs arr[-1]    # 40  负数从末尾数\nputs arr.first  # 10\nputs arr.last   # 40\nputs arr.length # 4\nputs arr.include?(20)  # true"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "修改与添加",
          'code': "arr = [1, 2]\narr << 3          # 在末尾追加，<< 是 Ruby 特色写法\narr.push(4)       # 同样追加\narr.unshift(0)    # 加到开头\narr[1] = 99       # 修改索引 1 的元素\np arr             # [0, 99, 2, 3, 4]\narr.pop           # 删除并返回末尾元素\narr.shift         # 删除并返回开头元素"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "each 与 each_with_index",
          'code': "total = 0\n[1, 2, 3, 4].each do |n|\n  total += n\nend\nputs total   # 10\n\n[\"a\", \"b\", \"c\"].each_with_index do |item, i|\n  puts \"#{i}: #{item}\"\nend"
        },
        {
          'type': "h",
          'text': "map / select / reject：变换与筛选"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "变换与筛选",
          'code': "nums = [1, 2, 3, 4, 5]\nsquares = nums.map { |n| n * n }\np squares   # [1, 4, 9, 16, 25]\n\nevens = nums.select { |n| n.even? }\np evens     # [2, 4]\n\nodds = nums.reject { |n| n.even? }\np odds      # [1, 3, 5]"
        },
        {
          'type': "h",
          'text': "splat 展开与常用方法"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "splat 与常用方法",
          'code': "def sum_all(*numbers)   # * 收集所有参数\n  numbers.sum\nend\nputs sum_all(1, 2, 3)   # 6\n\na = [1, 2]\nb = [0, *a, 3]   # *a 把数组展开进去\np b               # [0, 1, 2, 3]\n\nnums = [3, 1, 2]\np nums.sort.inspect      # [1, 2, 3]\np nums.join(\"-\")         # \"3-1-2\"\np [1, 2, 2, 3].uniq      # [1, 2, 3]"
        },
        {
          'type': "warn",
          'title': "小心数组越界",
          'text': "访问不存在的索引（如 <code.inline>arr[100]</code.inline>）Ruby **不会报错**，而是返回 <code.inline>nil</code.inline>。这既方便也容易埋坑，取出来的值要先判断是否为 nil 再用。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"数组：有序的集合\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"数组：有序的集合\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"数组：有序的集合\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "数组用 [] 创建，索引从 0 开始，负数从末尾数",
            "<< 追加、push/unshift 添加，pop/shift 删除",
            "each/each_with_index 遍历",
            "map 变换、select 筛选、reject 排除",
            "splat（*）可以收集参数或展开数组"
          ]
        }
      ],
      'templates': [
        {
          'name': "数组练习",
          'code': "nums = [3, 1, 2]\np nums.sort\np nums.map { |n| n * 2 }\np nums.select { |n| n > 1 }"
        }
      ]
    },
    {
      'id': "rb-9",
      'title': "哈希 Hash：键值对集合",
      'summary': "创建、访问、默认值、遍历与合并，符号键的用法。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "哈希（Hash）是键值对的集合，类似字典：给一个键，查到对应的值。它在 Ruby 里和数组一样无处不在。"
        },
        {
          'type': "h",
          'text': "创建哈希"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "创建哈希",
          'code': "empty = {}\nperson = { \"name\" => \"小明\", \"age\" => 18 }   # 老写法：=> 箭头\nperson2 = { name: \"小红\", age: 20 }          # 现代写法：符号键，冒号在后\nputs person2[:name]   # 小红\nputs person2[:age]    # 20"
        },
        {
          'type': "h",
          'text': "访问与修改"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "访问修改",
          'code': "h = { name: \"Ruby\", version: 3.2 }\nputs h[:name]        # Ruby\nputs h[:version]     # 3.2\nh[:version] = 3.3    # 修改\nh[:created] = 1995   # 新增键\np h\nputs h.key?(:name)   # true  判断键是否存在\nh.delete(:version)   # 删除键"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "Hash.new 默认值",
          'code': "counter = Hash.new(0)   # 访问不存在的键返回 0\ncounter[\"apple\"] += 1\nputs counter[\"apple\"]    # 1\nputs counter[\"banana\"]   # 0  不存在的键返回默认值 0"
        },
        {
          'type': "h",
          'text': "遍历哈希"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "each 遍历",
          'code': "scores = { math: 90, chinese: 85, english: 88 }\nscores.each do |subject, score|\n  puts \"#{subject}: #{score} 分\"\nend\np scores.keys      # [:math, :chinese, :english]\np scores.values    # [90, 85, 88]"
        },
        {
          'type': "h",
          'text': "合并与常用方法"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "merge 合并",
          'code': "a = { x: 1, y: 2 }\nb = { y: 3, z: 4 }\nc = a.merge(b)\np c      # {:x=>1, :y=>3, :z=>4}  相同键 b 覆盖 a\np a      # {:x=>1, :y=>2}  原哈希不变，merge 不修改原对象\nputs a.size   # 2"
        },
        {
          'type': "warn",
          'title': "符号键和字符串键不是一回事",
          'text': "<code.inline>{ name: \"x\" }[:name]</code.inline> 能取到值，但 <code.inline>{ name: \"x\" }[\"name\"]</code.inline> 返回 nil！它们键不一样。混用会导致取不到值还不报错，排查很久才发现。建议统一用符号键。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"哈希 Hash：键值对集合\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"哈希 Hash：键值对集合\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"哈希 Hash：键值对集合\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "哈希是键值对集合，{} 创建",
            "现代写法用符号键 { name: \"x\" }，冒号在后",
            "访问用 h[:key]，修改/新增直接赋值",
            "Hash.new(0) 给不存在的键一个默认值",
            "each 遍历键值对，keys/values 取键或值，merge 合并"
          ]
        }
      ],
      'templates': [
        {
          'name': "哈希练习",
          'code': "person = { name: \"小明\", age: 18 }\nperson.each { |k, v| puts \"#{k}: #{v}\" }\np person.keys\np person.values"
        }
      ]
    },
    {
      'id': "rb-10",
      'title': "方法与块 block",
      'summary': "def 定义方法、参数与返回值，掌握块、yield 与 proc/lambda。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "方法（Method）就是给一段代码起个名字，需要时反复调用。Ruby 里几乎一切都是对象，方法通过 <code.inline>def ... end</code.inline> 定义。"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "定义方法",
          'code': "def greet(name)\n  puts \"你好，#{name}！\"\nend\ngreet(\"小明\")\ngreet(\"小红\")\n\n# 默认参数\ndef welcome(name = \"朋友\")\n  puts \"欢迎，#{name}\"\nend\nwelcome          # 欢迎，朋友\nwelcome(\"张三\")  # 欢迎，张三"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "返回值",
          'code': "def add(a, b)\n  a + b        # 最后一行表达式的值自动作为返回值\nend\nputs add(3, 4)   # 7\n\ndef max(a, b)\n  return a if a > b   # 也可以显式用 return 提前返回\n  b\nend\nputs max(5, 9)   # 9"
        },
        {
          'type': "h",
          'text': "块 block：方法与 do..end / {}"
        },
        {
          'type': "p",
          'text': "块是一段可以传给方法执行的代码。很多 Ruby 内置方法（each、map、times）都会接受块。块用 <code.inline>do ... end</code.inline> 或花括号 <code.inline>{ ... }</code.inline> 包裹，块参数写在竖线 <code.inline>|x|</code.inline> 里。"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "块的使用",
          'code': "3.times do |i|\n  puts \"第 #{i} 次\"\nend\n3.times { |i| puts \"第 #{i} 次\" }\n\n[1, 2, 3].each { |n| puts n * 2 }"
        },
        {
          'type': "h",
          'text': "yield 与 block_given?"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "yield",
          'code': "def repeat(times)\n  times.times do\n    yield   # 调用传入的块\n  end\nend\nrepeat(3) { puts \"hello\" }\n\ndef maybe_run\n  if block_given?   # 判断有没有传块\n    yield\n  else\n    puts \"没有块\"\n  end\nend\nmaybe_run { puts \"传了块\" }\nmaybe_run"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "proc 与 lambda",
          'code': "double = proc { |x| x * 2 }\nputs double.call(4)   # 8\n\nsquare = lambda { |x| x * x }\nputs square.call(4)   # 16\n\ndef run(block)\n  block.call\nend\nrun(proc { puts \"proc 被调用了\" })"
        },
        {
          'type': "info",
          'title': "proc 与 lambda 的区别",
          'text': "简单记：lambda 更像方法，参数数量必须匹配，<code.inline>return</code.inline> 只退出自己；proc 参数可以少传（缺失为 nil），<code.inline>return</code.inline> 会直接跳出外层方法。平时在方法内用块，想把块当对象传递时用 proc/lambda。"
        },
        {
          'type': "warn",
          'title': "do..end 与 {} 优先级不同",
          'text': "在方法调用中 <code.inline>{}</code.inline> 的优先级更高，容易绑定错对象。例如 <code.inline>puts [1,2].map { |n| n*2 }</code.inline> 输出数组，而 <code.inline>puts [1,2].map do |n| n*2 end</code.inline> 输出的却是 puts 的返回值。建议多行块用 do..end，单行块用 {}。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"方法与块 block\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"方法与块 block\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"方法与块 block\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "def..end 定义方法，最后一行自动作为返回值",
            "参数可以有默认值，也可以 return 提前返回",
            "块用 do..end 或 {} 写，参数写在 |x| 里",
            "yield 调用传入的块，block_given? 判断是否传了块",
            "proc/lambda 把块变成可传递的对象"
          ]
        }
      ],
      'templates': [
        {
          'name': "方法与块",
          'code': "def greet(name)\n  \"你好，#{name}\"\nend\nputs greet(\"世界\")\n[1, 2, 3].each { |n| puts n * 10 }"
        }
      ]
    },
    {
      'id': "rb-11",
      'title': "面向对象：类与对象",
      'summary': "class、initialize、实例变量、attr_accessor 与类方法。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "面向对象（OOP）就是把相关的数据和操作它们的方法打包成一个『类』，类再创建出具体的『对象』。Ruby 是彻底的面向对象语言，数字、字符串都是对象。"
        },
        {
          'type': "h",
          'text': "定义一个类"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "定义类",
          'code': "class Person\n  def initialize(name, age)\n    @name = name   # @name 是实例变量，属于每个对象\n    @age = age\n  end\n\n  def introduce\n    \"我叫 #{@name}，今年 #{@age} 岁\"\n  end\nend\n\np1 = Person.new(\"小明\", 18)\np2 = Person.new(\"小红\", 20)\nputs p1.introduce\nputs p2.introduce"
        },
        {
          'type': "h",
          'text': "initialize：构造函数"
        },
        {
          'type': "p",
          'text': "对象创建时自动调用的方法叫 <code.inline>initialize</code.inline>，用来设置初始状态。<code.inline>Person.new(\"小明\", 18)</code.inline> 里的参数会原样传给 initialize，存在以 <code.inline>@</code.inline> 开头的实例变量里。"
        },
        {
          'type': "h",
          'text': "attr_accessor：读写属性"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "attr 系列",
          'code': "class Dog\n  attr_reader :name     # 只读\n  attr_writer :age      # 只写\n  attr_accessor :color  # 读写都有\n\n  def initialize(name, color)\n    @name = name\n    @color = color\n  end\nend\n\nd = Dog.new(\"旺财\", \"棕色\")\nputs d.name      # 旺财\nd.color = \"黑色\" # 写入\nd.age = 3        # 只写，可以赋值\nputs d.color     # 黑色"
        },
        {
          'type': "h",
          'text': "实例方法 vs 类方法"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "类方法 self.",
          'code': "class Calculator\n  def add(a, b)      # 实例方法：靠对象调用\n    a + b\n  end\n\n  def self.info      # 类方法：用 self. 定义，靠类名调用\n    \"这是一个计算器类\"\n  end\nend\n\nputs Calculator.info          # 这是一个计算器类\nputs Calculator.new.add(1, 2) # 3"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "万物皆对象",
          'code': "puts 10.class      # Integer\nputs 10.to_s       # \"10\"\nputs 10.zero?      # false\nputs \"ruby\".upcase # RUBY\nputs [].class      # Array"
        },
        {
          'type': "warn",
          'title': "别漏了 @ 前缀",
          'text': "在方法里访问属性必须写 <code.inline>@name</code.inline>，写 <code.inline>name</code.inline> 会被当成局部变量，初值是 nil，拿到的不是你要的数据。这是面向对象新手最常见的 bug。"
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
            "class..end 定义类，new 创建对象",
            "initialize 是构造函数，@ 开头的是实例变量",
            "attr_reader/attr_writer/attr_accessor 定义属性的读写",
            "实例方法靠对象调用，类方法用 self. 定义靠类名调用",
            "Ruby 万物皆对象，连数字都带方法"
          ]
        }
      ],
      'templates': [
        {
          'name': "定义类",
          'code': "class Dog\n  attr_accessor :name\n  def initialize(name)\n    @name = name\n  end\n  def bark\n    \"#{@name} 汪汪叫\"\n  end\nend\nd = Dog.new(\"旺财\")\nputs d.bark\nputs d.name"
        }
      ]
    },
    {
      'id': "rb-12",
      'title': "继承与模块 Mixin",
      'summary': "继承 <、模块定义、include/extend、方法可见性。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "面向对象还有一个重要能力：复用代码。Ruby 提供了**继承**和**模块 Mixin** 两种复用方式。"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "继承",
          'code': "class Animal\n  def initialize(name)\n    @name = name\n  end\n\n  def speak\n    \"....\"   # 父类默认声音\n  end\nend\n\nclass Dog < Animal\n  def speak\n    \"#{@name} 说：汪汪！\"   # 子类覆盖父类方法\n  end\nend\n\nclass Cat < Animal\n  def speak\n    \"#{@name} 说：喵喵！\"\n  end\nend\n\ndog = Dog.new(\"旺财\")\ncat = Cat.new(\"咪咪\")\nputs dog.speak\nputs cat.speak\nputs dog.is_a?(Animal)   # true"
        },
        {
          'type': "h",
          'text': "模块：把公共方法打包"
        },
        {
          'type': "p",
          'text': "Ruby **不支持多重继承**（一个类只能继承一个父类），但可以用模块解决复用问题。模块用 <code.inline>module</code.inline> 定义，通过 <code.inline>include</code.inline> 混入类中，这种用法叫 **Mixin**。"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "include mixin",
          'code': "module Swimmable\n  def swim\n    \"#{@name} 在游泳\"\n  end\nend\n\nclass Fish\n  include Swimmable\n  def initialize(name)\n    @name = name\n  end\nend\n\nfish = Fish.new(\"尼莫\")\nputs fish.swim   # 尼莫 在游泳\nputs fish.respond_to?(:swim)  # true  有这个方法"
        },
        {
          'type': "h",
          'text': "extend：把模块方法变成类方法"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "extend",
          'code': "module Greet\n  def hello\n    \"你好\"\n  end\nend\n\nclass Person\n  extend Greet   # extend 让模块方法变成类方法\nend\n\nputs Person.hello   # 你好，不用实例化对象就能调用"
        },
        {
          'type': "h",
          'text': "模块的另一种用途：命名空间"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "命名空间",
          'code': "module MyUtils\n  PI = 3.14159\n  def self.square(x)   # 模块方法\n    x * x\n  end\nend\n\nputs MyUtils::PI\nputs MyUtils.square(4)   # 16"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "可见性",
          'code': "class BankAccount\n  def initialize(balance)\n    @balance = balance\n  end\n\n  def show_balance\n    check_private   # 私有方法可以在类内部调用\n    puts \"余额：#{@balance}\"\n  end\n\n  private\n  def check_private\n    puts \"正在查询余额…\"\n  end\nend\n\nacc = BankAccount.new(1000)\nacc.show_balance\n# acc.check_private   # 会报错：私有方法不能从外部调用"
        },
        {
          'type': "warn",
          'title': "继承是 is-a，模块是 has-a",
          'text': "判断该用哪种：子类『是』父类的一种（Dog 是一种 Animal）用继承；对象『拥有』某种能力（会游泳、会飞）用模块。滥用继承会让继承链越来越深、难以维护。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"继承与模块 Mixin\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"继承与模块 Mixin\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"继承与模块 Mixin\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "继承用 < 符号，子类可覆盖父类方法",
            "Ruby 单继承，多能力用模块 include 混入（Mixin）",
            "extend 把模块方法变成类方法",
            "模块还能当命名空间，用 :: 访问常量",
            "private 私有方法只能在内部调用，public 默认公开"
          ]
        }
      ],
      'templates': [
        {
          'name': "模块 mixin",
          'code': "module Flyable\n  def fly\n    \"#{@name} 在飞\"\n  end\nend\nclass Bird\n  include Flyable\n  def initialize(name)\n    @name = name\n  end\nend\nb = Bird.new(\"小燕子\")\nputs b.fly"
        }
      ]
    },
    {
      'id': "rb-13",
      'title': "异常处理：begin / rescue",
      'summary': "捕获异常、主动抛出 raise、自定义异常类。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "程序运行时可能会出错（比如文件不存在、除数为零），Ruby 把这些错误叫**异常（Exception）**。如果不处理，程序会直接崩溃；学会了异常处理，就能优雅地应对各种意外。"
        },
        {
          'type': "h",
          'text': "begin / rescue / ensure"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "异常处理基础",
          'code': "begin\n  result = 10 / 0\n  puts result\nrescue ZeroDivisionError => e\n  puts \"出错了：#{e.message}\"\nensure\n  puts \"无论是否出错都会执行这里\"\nend\n# 输出：\n# 出错了：divided by 0\n# 无论是否出错都会执行这里"
        },
        {
          'type': "h",
          'text': "不写具体异常类型"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "通用 rescue",
          'code': "begin\n  puts \"abc\" + 1\nrescue => e\n  puts \"发生了异常：#{e.class} - #{e.message}\"\nend\n# 输出：发生了异常：TypeError - no implicit conversion of Integer into String"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "raise",
          'code': "def check_age(age)\n  raise ArgumentError, \"年龄不能为负数\" if age < 0\n  puts \"年龄：#{age}\"\nend\n\ncheck_age(18)   # 正常\nbegin\n  check_age(-1)  # 抛异常\nrescue ArgumentError => e\n  puts \"捕获到：#{e.message}\"\nend"
        },
        {
          'type': "h",
          'text': "自定义异常类"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "自定义异常",
          'code': "class NotEnoughMoneyError < StandardError; end\n\nclass Wallet\n  def initialize(money)\n    @money = money\n  end\n\n  def pay(amount)\n    raise NotEnoughMoneyError, \"余额不足\" if amount > @money\n    @money -= amount\n    puts \"支付成功，剩余 #{@money}\"\n  end\nend\n\nw = Wallet.new(100)\nbegin\n  w.pay(500)\nrescue NotEnoughMoneyError => e\n  puts \"支付失败：#{e.message}\"\nend"
        },
        {
          'type': "h",
          'text': "else 分支"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "else",
          'code': "begin\n  num = Integer(\"42\")\nrescue ArgumentError\n  puts \"转换失败\"\nelse\n  puts \"没有异常，转换成功：#{num}\"\nend\n# rescue 处理异常，else 在没有异常时执行"
        },
        {
          'type': "warn",
          'title': "不要吞掉异常",
          'text': "有人为了省事写一个空的 <code.inline>rescue</code.inline> 把异常静默吞掉，程序『看似正常』实则隐藏了严重 bug。至少要把异常信息打印出来，或者记录到日志里。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"异常处理：begin / rescue\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"异常处理：begin / rescue\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"异常处理：begin / rescue\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "begin/rescue/ensure 捕获异常，ensure 总是执行",
            "rescue => e 拿到异常对象，查看 e.message",
            "raise 主动抛出异常，可以带类型和消息",
            "可以自定义异常类（继承 StandardError）",
            "else 在没有异常时执行，别用空 rescue 吞异常"
          ]
        }
      ],
      'templates': [
        {
          'name': "异常处理",
          'code': "begin\n  puts 10 / 0\nrescue ZeroDivisionError => e\n  puts \"出错：#{e.message}\"\nensure\n  puts \"收尾工作\"\nend"
        }
      ]
    },
    {
      'id': "rb-14",
      'title': "文件读写与常用库",
      'summary': "File 读写、require 引入库、gem 安装与常用 gem 介绍。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "编程的常见需求是读写文件：读配置、写日志、处理数据。Ruby 内置的 File 类就够用了，另外 gem 生态提供了大量现成的库。"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "读文件",
          'code': "content = File.read(\"notes.txt\")\nputs content\n\n# 逐行读取\nFile.readlines(\"notes.txt\").each do |line|\n  puts \"行内容：#{line}\"\nend"
        },
        {
          'type': "h",
          'text': "写入文件"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "写文件",
          'code': "File.write(\"output.txt\", \"第一行\\n第二行\\n\")\n# 追加内容：用 File.open + \"a\" 模式\nFile.open(\"log.txt\", \"a\") do |f|\n  f.puts \"日志：程序启动了\"\nend"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "require 标准库",
          'code': "require \"json\"\nrequire \"date\"\n\ndata = { name: \"Ruby\", year: 1995 }\nputs JSON.generate(data)   # {\"name\":\"Ruby\",\"year\":1995}\nputs Date.today"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "gem 命令",
          'code': "gem install httparty\ngem install nokogiri\ngem list   # 查看已安装的 gem"
        },
        {
          'type': "h",
          'text': "常用 gem 一览"
        },
        {
          'type': "table",
          'head': [
            "gem",
            "用途"
          ],
          'rows': [
            [
              "httparty",
              "发起 HTTP 请求，抓取网页 / 调用 API"
            ],
            [
              "nokogiri",
              "解析 HTML/XML，爬虫必备"
            ],
            [
              "json",
              "处理 JSON 数据（Ruby 已内置）"
            ],
            [
              "sqlite3",
              "操作 SQLite 数据库"
            ],
            [
              "rails",
              "Web 开发框架"
            ]
          ]
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "httparty 请求示例",
          'code': "require \"httparty\"\n\nresponse = HTTParty.get(\"https://api.github.com\")\nputs response.code          # 200\nputs response.headers[\"content-type\"]\nputs response.body[0, 100]  # 响应体前 100 个字符"
        },
        {
          'type': "warn",
          'title': "国内 gem 源慢",
          'text': "在国内执行 <code.inline>gem install</code.inline> 可能很慢。可以换成清华镜像源：<code.inline>gem sources --remove https://rubygems.org/</code.inline>，再 <code.inline>gem sources -a https://mirrors.tuna.tsinghua.edu.cn/rubygems/</code.inline>。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"文件读写与常用库\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"文件读写与常用库\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"文件读写与常用库\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "File.read / File.readlines 读取文件",
            "File.write 写入，File.open + a 模式追加",
            "require 引入标准库和 gem",
            "gem install 安装第三方库，gem list 查看",
            "httparty 做 HTTP 请求，nokogiri 解析网页"
          ]
        }
      ],
      'templates': [
        {
          'name': "文件读写",
          'code': "File.write(\"hello.txt\", \"你好，Ruby！\\n\")\nputs File.read(\"hello.txt\")"
        }
      ]
    },
    {
      'id': "rb-15",
      'title': "Ruby on Rails 速览",
      'summary': "了解 MVC 架构、rails new、生成器、路由与数据库迁移。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "Ruby 最出名的用途就是 Ruby on Rails（简称 Rails），一个让 Web 开发快得离谱的框架。GitHub、Shopify、Airbnb 早期都是 Rails 建起来的。"
        },
        {
          'type': "p",
          'text': "Rails 遵循 **MVC 架构**，把 Web 应用分成三层：模型（Model）管数据、视图（View）管显示、控制器（Controller）管流程。它信奉『**约定优于配置**』，只要按它的命名约定来，几乎不用写配置文件。"
        },
        {
          'type': "table",
          'head': [
            "层",
            "职责",
            "例子"
          ],
          'rows': [
            [
              "Model 模型",
              "和数据库打交道、存数据",
              "User、Article"
            ],
            [
              "View 视图",
              "生成页面 HTML",
              "app/views/..."
            ],
            [
              "Controller 控制器",
              "接收请求、调模型、渲染视图",
              "UsersController"
            ]
          ]
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "创建 Rails 项目",
          'code': "gem install rails\nrails new my_blog\ncd my_blog\nrails server\n# 浏览器打开 http://localhost:3000 就能看到欢迎页"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "生成器",
          'code': "rails generate model Article title:string body:text\nrails generate controller Articles index show\nrails db:migrate"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "路由配置",
          'code': "# config/routes.rb\nRails.application.routes.draw do\n  root \"articles#index\"        # 首页\n  resources :articles          # 自动生成 7 个 RESTful 路由\nend\n# 访问 /articles 会交给 ArticlesController 的 index 方法"
        },
        {
          'type': "h",
          'text': "数据库迁移"
        },
        {
          'type': "p",
          'text': "迁移（migration）是 Rails 管理数据库结构的方式。你不需要手写 SQL 建表，而是用 Ruby 描述『要加一张 articles 表，有 title 和 body 字段』，然后执行 <code.inline>rails db:migrate</code.inline> 自动建表。"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "迁移文件",
          'code': "# db/migrate/xxx_create_articles.rb\nclass CreateArticles < ActiveRecord::Migration\n  def change\n    create_table :articles do |t|\n      t.string :title\n      t.text :body\n      t.timestamps\n    end\n  end\nend"
        },
        {
          'type': "warn",
          'title': "装 Rails 的小坑",
          'text': "在新系统上直接 <code.inline>gem install rails</code.inline> 可能因为权限或版本问题失败。推荐用 rbenv 管理 Ruby 版本再装，并在项目目录里用 <code.inline>bundle install</code.inline> 安装依赖。"
        },
        {
          'type': "info",
          'title': "现在要学 Rails 吗",
          'text': "如果你已经把前面的 Ruby 基础学完，完全可以开始 Rails 了。但先别急，把数组、哈希、方法、类这些基础练熟，后面学 Rails 会轻松很多。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Ruby on Rails 速览\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Ruby on Rails 速览\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Ruby on Rails 速览\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Rails 是 Ruby 的 Web 框架，遵循 MVC 架构",
            "rails new 创建项目，rails server 启动",
            "生成器一行命令生成模型/控制器",
            "路由把 URL 分发给控制器方法",
            "迁移用 Ruby 描述数据库结构，db:migrate 执行"
          ]
        }
      ],
      'templates': [
        {
          'name': "Rails 速览",
          'code': "puts \"Ruby on Rails 是基于 MVC 的 Web 框架\"\nputs \"核心：约定优于配置，一行命令生成基础代码\"\nputs \"下一站：Rails\""
        }
      ]
    },
    {
      'id': "rb-16",
      'title': "实战小项目与下一步",
      'summary': "做命令行待办工具和批量文件脚本，规划 Rails 全栈之路。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "理论学完，动手做两个小项目把知识串起来。这两个项目都不需要额外装 gem，用 Ruby 内置功能就能跑。"
        },
        {
          'type': "h",
          'text': "项目一：命令行待办工具"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "待办工具 todo.rb",
          'code': "# todo.rb  运行：ruby todo.rb\nrequire \"json\"\n\nFILE = \"todos.json\"\ntodos = File.exist?(FILE) ? JSON.parse(File.read(FILE)) : []\n\nputs \"待办事项：\"\ntodos.each_with_index { |t, i| puts \"#{i + 1}. #{t}\" }\n\nputs \"输入新待办（输入 q 退出）：\"\nwhile (input = gets.chomp) != \"q\"\n  todos << input\n  File.write(FILE, JSON.generate(todos))\n  puts \"已添加：#{input}\"\nend\nputs \"再见！\""
        },
        {
          'type': "h",
          'text': "项目二：批量文件处理脚本"
        },
        {
          'type': "code",
          'lang': "ruby",
          'title': "批量重命名 rename.rb",
          'code': "# rename.rb：把当前目录下所有 .txt 改成 .md\nDir.glob(\"*.txt\").each do |f|\n  new_name = f.sub(\".txt\", \".md\")\n  File.rename(f, new_name)\n  puts \"重命名 #{f} -> #{new_name}\"\nend\nputs \"完成！\""
        },
        {
          'type': "h",
          'text': "怎么跑这些项目"
        },
        {
          'type': "list",
          'items': [
            "把代码保存成 <code.inline>.rb</code.inline> 文件",
            "在终端运行 <code.inline>ruby 文件名.rb</code.inline>",
            "待办工具的存储文件 todos.json 会自动生成，可以用记事本打开看看内容"
          ]
        },
        {
          'type': "warn",
          'title': "Windows 上中文乱码",
          'text': "在 Windows 终端运行含中文的 Ruby 脚本，如果输出乱码，多半是文件编码或终端代码页问题。把 .rb 文件保存为 UTF-8 编码，再在终端执行 <code.inline>chcp 65001</code.inline> 切换到 UTF-8 代码页即可。"
        },
        {
          'type': "h",
          'text': "下一步怎么走"
        },
        {
          'type': "list",
          'items': [
            "继续深入 Ruby：块、proc、元编程（多在 irb 里试）",
            "学 Ruby on Rails 做全栈 Web：<a href='https://rubyonrails.org' target='_blank' rel='noopener'>https://rubyonrails.org</a>",
            "读优秀开源项目源码：Rails、Jekyll（静态博客）",
            "刷题巩固：Ruby 在 LeetCode 等平台都可以用"
          ]
        },
        {
          'type': "tip",
          'title': "练习建议",
          'text': "编程是练出来的。每天在 irb 里敲 20 分钟，把每章的代码都自己打一遍再改一改，进步会比只看不练快得多。"
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
            "用 JSON + File 做了一个可持久化的待办工具",
            "用 Dir.glob + File.rename 做批量文件处理",
            "ruby 文件名.rb 运行脚本",
            "下一步：Rails 全栈、读开源源码、刷题巩固"
          ]
        }
      ],
      'templates': [
        {
          'name': "批量重命名",
          'code': "# 把当前目录所有 .txt 改成 .md\nDir.glob(\"*.txt\").each do |f|\n  new_name = f.sub(\".txt\", \".md\")\n  File.rename(f, new_name)\n  puts \"重命名 #{f} -> #{new_name}\"\nend\nputs \"完成！\""
        }
      ]
    }
  ]
});

