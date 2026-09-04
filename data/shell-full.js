/* ============================================================
   计算机知识库 · 数据：Shell / Bash 完整课程（80 章，从下载安装到进阶）
   ============================================================ */
window.LANGUAGE_EXTRA = window.LANGUAGE_EXTRA || [];
window.LANGUAGE_EXTRA.push({
  'id': "shell",
  'name': "Shell / Bash",
  'icon': "Sh",
  'tagline': "指挥操作系统的手，自动化一切的胶水语言。",
  'intro': "这是一套从零开始的 Shell / Bash 完整课程。第 1 章教你在 Windows、macOS、Linux 上打开终端，之后从文件系统、命令导航讲起，一路讲到 grep/sed/awk 文本三剑客、管道重定向、条件循环、函数、数组、实战脚本与面试题。学完这套课程，你将能熟练地操作 Linux 系统、写出健壮高效的自动化脚本，胜任运维、开发与数据处理工作。",
  'meta': {
    "难度": "从零到进阶",
    "章节": "80 章",
    "场景": "运维/开发/自动化"
  },
  'lessons': [
    {
      'id': "sh-1",
      'title': "什么是 Shell、打开终端（零基础第一步）",
      'summary': "搞懂 Shell 是什么，然后在 Windows/macOS/Linux 上打开终端，验证 Bash。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "在开始敲命令之前，先搞清楚一个基本概念：Shell 到底是什么？简单说，Shell 是连接你和操作系统之间的翻译官。你在终端里输入一行文字，Shell 把它翻译成操作系统能懂的命令去执行，再把结果显示给你。"
        },
        {
          'type': "h",
          'text': "图形界面与命令行"
        },
        {
          'type': "p",
          'text': "平时我们点鼠标、拖文件、双击图标，用的是「图形界面」（GUI）。而 Shell 靠的是「命令行界面」（CLI），它运行在一个叫「终端」的程序里。命令行看起来不花哨，但能做很多图形界面做不了、或者做起来极其费劲的事，尤其是批量处理和自动化。"
        },
        {
          'type': "table",
          'head': [
            "系统",
            "如何打开终端"
          ],
          'rows': [
            [
              "Windows",
              "按 Win 键，搜索 PowerShell 或 cmd 回车；想用真正的 Bash 就装 Git Bash"
            ],
            [
              "macOS",
              "按 Cmd+空格 搜 Terminal（终端），回车打开"
            ],
            [
              "Linux",
              "通常按 Ctrl+Alt+T 即可打开终端（不同发行版略有差异）"
            ]
          ]
        },
        {
          'type': "h",
          'text': "Windows 用户的重要选择"
        },
        {
          'type': "p",
          'text': "Windows 原生的 PowerShell 和 cmd 用的是 Windows 自己的命令语法。而本课程讲的是 Bash（Linux 和 macOS 的默认 Shell）。想在 Windows 上体验真正的 Bash，最常用的办法是安装完全免费的 <a href='https://git-scm.com' target='_blank' rel='noopener'>Git for Windows</a>，安装后开始菜单里会多出一个「Git Bash」，它就是一套完整的 Bash 环境。"
        },
        {
          'type': "h",
          'text': "验证你的 Bash 环境"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "验证 Bash 版本",
          'code': "bash --version"
        },
        {
          'type': "p",
          'text': "打开终端，输入 <code.inline>bash --version</code.inline> 然后回车。如果看到类似 <code.inline>GNU bash, version 5.x</code.inline> 的输出，说明环境就绪。macOS 新版默认终端是 zsh，输入 bash 也能进入 Bash；Linux 的终端默认就是 Bash。"
        },
        {
          'type': "tip",
          'title': "命令的输入方式",
          'text': "命令的基本输入方式是：先敲命令名，再敲参数（空格隔开），最后按回车执行。比如 <code.inline>bash --version</code.inline> 中，bash 是命令名，--version 是参数。"
        },
        {
          'type': "warn",
          'title': "新手大坑：混用 PowerShell 和 Bash 语法",
          'text': "PowerShell 里用的是 dir、copy、Get-Content 这类语法，和 Bash 完全不同。本课程所有命令请在 Git Bash（或 Linux/macOS 终端）里练习，不要拿到 PowerShell 里硬套。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"什么是 Shell、打开终端（零基础第一步）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"什么是 Shell、打开终端（零基础第一步）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"什么是 Shell、打开终端（零基础第一步）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Shell 是用户和操作系统之间的翻译官",
            "终端（Terminal）是运行命令行的程序",
            "Windows 上想学 Bash 推荐装 Git for Windows 的 Git Bash",
            "bash --version 可验证 Bash 是否可用",
            "命令=命令名+参数+回车"
          ]
        }
      ],
      'templates': [
        {
          'name': "和 Shell 打个招呼",
          'code': "echo \"你好，Shell！\"\necho \"我的第一个命令行程序\"\nbash --version"
        }
      ]
    },
    {
      'id': "sh-2",
      'title': "文件系统基础（目录树、根目录、家目录）",
      'summary': "理解文件目录树、根目录 /、家目录，以及相对路径与绝对路径。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "电脑里所有东西都以「文件」的形式存放，文件放在「目录」（也叫文件夹）里。Shell 里的操作几乎都围绕文件和目录展开。这一章我们先建立对文件系统的整体认识，这是后续一切命令的地基。"
        },
        {
          'type': "h",
          'text': "目录树：一棵倒挂的大树"
        },
        {
          'type': "p",
          'text': "所有目录组成一棵倒挂的树。最顶层叫「根目录」，用正斜杠 <code.inline>/</code.inline> 表示。从根开始往下分叉出一层层目录，就像树干长出树枝、树枝长出树叶。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "查看根目录下有什么",
          'code': "ls /"
        },
        {
          'type': "p",
          'text': "在 Linux 或 macOS 的终端里输入 <code.inline>ls /</code.inline>，会看到根目录下的一堆系统目录，比如 <code.inline>/home</code.inline>（用户的家目录所在处）、<code.inline>/etc</code.inline>（配置文件）、<code.inline>/usr</code.inline>（软件）、<code.inline>/var</code.inline>（日志等动态数据）。"
        },
        {
          'type': "table",
          'head': [
            "目录",
            "作用"
          ],
          'rows': [
            [
              "/",
              "根目录，整棵树的最顶层"
            ],
            [
              "/home",
              "普通用户的家目录都放在这里"
            ],
            [
              "/root",
              "超级管理员 root 的家目录"
            ],
            [
              "/etc",
              "存放系统配置文件"
            ],
            [
              "/usr",
              "存放已安装的软件和程序"
            ],
            [
              "/var",
              "存放日志、缓存等经常变化的数据"
            ]
          ]
        },
        {
          'type': "h",
          'text': "家目录：你的私人小窝"
        },
        {
          'type': "p",
          'text': "每个用户都有自己的「家目录」。普通用户的家目录是 <code.inline>/home/用户名</code.inline>，root 用户是 <code.inline>/root</code.inline>。你打开终端后，默认就待在自己的家目录里，可以用波浪号 <code.inline>~</code.inline> 表示它。"
        },
        {
          'type': "h",
          'text': "相对路径与绝对路径"
        },
        {
          'type': "p",
          'text': "「绝对路径」从根目录写起，比如 <code.inline>/home/xiaoming/note.txt</code.inline>，无论你在哪个目录，用它都能定位到同一个文件。「相对路径」从当前位置写起，比如 <code.inline>note.txt</code.inline> 表示当前目录下的文件，<code.inline>docs/readme.md</code.inline> 表示当前目录下 docs 文件夹里的 readme.md。"
        },
        {
          'type': "info",
          'title': "路径分隔符",
          'text': "Linux/macOS 以及 Git Bash 里的路径分隔符都是正斜杠 <code.inline>/</code.inline>，和 Windows 资源管理器里的反斜杠不一样。在 Git Bash 里千万别写反斜杠路径，会报错。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"文件系统基础（目录树、根目录、家目录）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"文件系统基础（目录树、根目录、家目录）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"文件系统基础（目录树、根目录、家目录）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "文件系统是一棵以 / 为根的目录树",
            "根目录是 /，家目录是 ~，普通用户家在 /home/用户名",
            "绝对路径从 / 开始，相对路径从当前位置开始",
            "路径分隔符用正斜杠 /，不要用反斜杠"
          ]
        }
      ],
      'templates': [
        {
          'name': "观察你的家目录",
          'code': "pwd\necho \"我的家目录是：$HOME\"\nls ~\nls /"
        }
      ]
    },
    {
      'id': "sh-3",
      'title': "路径与导航（pwd、cd、ls）",
      'summary': "用 pwd 看我在哪，cd 去任何目录，ls 查看目录内容。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "上一章建立了文件系统的地图，这一章学三个最常用的导航命令：pwd 告诉你现在在哪，cd 让你去想去的地方，ls 让你看看这里有什么。"
        },
        {
          'type': "h",
          'text': "pwd：我在哪"
        },
        {
          'type': "p",
          'text': "pwd（print working directory 的缩写）会输出你当前所在目录的绝对路径。迷路的时候敲它准没错。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "查看当前位置",
          'code': "pwd"
        },
        {
          'type': "h",
          'text': "cd：去别的地方"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "切换目录",
          'code': "cd /tmp\npwd\ncd /\npwd\ncd ~\npwd\ncd ..\npwd"
        },
        {
          'type': "list",
          'items': [
            "<code.inline>cd 目录名</code.inline>：进入某个目录",
            "<code.inline>cd /</code.inline>：回到根目录",
            "<code.inline>cd ~</code.inline> 或直接 <code.inline>cd</code.inline>：回到家目录",
            "<code.inline>cd ..</code.inline>：回到上一级目录",
            "<code.inline>cd -</code.inline>：回到刚才所在的目录"
          ]
        },
        {
          'type': "h",
          'text': "ls：看看这里有什么"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "列出目录内容",
          'code': "ls\nls -l\nls -a\nls -la\nls /home"
        },
        {
          'type': "table",
          'head': [
            "选项",
            "作用"
          ],
          'rows': [
            [
              "-l",
              "以详细列表显示，包含权限、所有者、大小、修改时间"
            ],
            [
              "-a",
              "显示所有文件，包括以 . 开头的隐藏文件"
            ],
            [
              "-h",
              "以人类易读的方式显示大小（K/M/G）"
            ],
            [
              "-t",
              "按修改时间排序，最新的在前"
            ],
            [
              "-R",
              "递归列出子目录"
            ]
          ]
        },
        {
          'type': "tip",
          'title': "Tab 补全",
          'text': "输入目录名时按 Tab 键可以自动补全，输入一半再按 Tab，Shell 会帮你补完剩下的部分，又快又不容易打错。"
        },
        {
          'type': "warn",
          'title': "隐藏文件不是真的隐藏",
          'text': "以点开头的文件（比如 .bashrc）用 <code.inline>ls</code.inline> 看不到，要用 <code.inline>ls -a</code.inline> 才能看到。它们只是约定俗成不显示，并不神秘。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"路径与导航（pwd、cd、ls）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"路径与导航（pwd、cd、ls）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"路径与导航（pwd、cd、ls）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "pwd 查看当前位置（绝对路径）",
            "cd 切换目录，cd ~ 回家，cd .. 返回上级，cd - 回上一个目录",
            "ls 列出内容，-l 详细、-a 含隐藏、-h 人性化大小",
            "Tab 键自动补全路径"
          ]
        }
      ],
      'templates': [
        {
          'name': "一次完整的旅行",
          'code': "pwd\ncd /tmp\npwd\nls -la\ncd ..\npwd"
        }
      ]
    },
    {
      'id': "sh-4",
      'title': "查看帮助（man、--help、help）",
      'summary': "不会用命令？man、命令 --help、help 三种方式随时查。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "Shell 命令成千上万，没人能全记住。关键是学会「查帮助」的方法。这一章教你三种查法，以后遇到不会的命令再也不慌。"
        },
        {
          'type': "h",
          'text': "方式一：命令 --help"
        },
        {
          'type': "p",
          'text': "几乎每个命令都支持 <code.inline>命令 --help</code.inline> 或 <code.inline>命令 -h</code.inline>，会输出一段简要说明，列出常用选项。这是最快的方式。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "查看 ls 的用法",
          'code': "ls --help"
        },
        {
          'type': "h",
          'text': "方式二：man 手册"
        },
        {
          'type': "p",
          'text': "man（manual 手册）是完整的命令说明书，内容详细得多。输入 <code.inline>man ls</code.inline> 后进入翻页模式：按空格或 <code.inline>f</code.inline> 往下翻页，<code.inline>b</code.inline> 往上翻，按 <code.inline>q</code.inline> 退出。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "查看完整手册",
          'code': "man ls\n# 进去后按 q 退出"
        },
        {
          'type': "h",
          'text': "方式三：help（内建命令）"
        },
        {
          'type': "p",
          'text': "一部分命令是 Shell 自带的「内建命令」（比如 cd、echo），它们没有 man 手册，要用 <code.inline>help 命令名</code.inline> 查看。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "查看内建命令的帮助",
          'code': "help cd\nhelp echo"
        },
        {
          'type': "table",
          'head': [
            "命令",
            "适用对象",
            "特点"
          ],
          'rows': [
            [
              "命令 --help",
              "几乎所有命令",
              "最快，简要列出选项"
            ],
            [
              "man 命令",
              "绝大多数外部命令",
              "最完整，带详细说明和示例"
            ],
            [
              "help 命令",
              "Shell 内建命令",
              "针对 cd/echo 等内建命令"
            ]
          ]
        },
        {
          'type': "tip",
          'title': "在 man 里搜索",
          'text': "在 man 翻页界面里按 <code.inline>/</code.inline> 然后输入关键词回车，可以搜索手册内容，按 n 跳到下一个匹配。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"查看帮助（man、--help、help）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"查看帮助（man、--help、help）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"查看帮助（man、--help、help）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "命令 --help 是最快的帮助方式",
            "man 命令 打开完整手册，q 退出",
            "内建命令（cd/echo 等）用 help 命令名 查看",
            "遇到不会的命令先查帮助，别硬背"
          ]
        }
      ],
      'templates': [
        {
          'name': "查一个陌生命令",
          'code': "mkdir --help\nman pwd\nhelp cd"
        }
      ]
    },
    {
      'id': "sh-5",
      'title': "文件与目录操作（mkdir、cp、mv、rm、touch）",
      'summary': "创建、复制、移动、删除文件与目录，文件操作五虎将。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "这一章学习操作文件与目录的五个基本命令：mkdir 建目录、touch 建空文件、cp 复制、mv 移动/改名、rm 删除。它们是日常使用频率最高的命令。"
        },
        {
          'type': "h",
          'text': "mkdir：创建目录"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "创建目录",
          'code': "mkdir mydir\nmkdir -p a/b/c\necho \"用 -p 可以一次性创建多级目录\""
        },
        {
          'type': "h",
          'text': "touch：创建空文件 / 更新时间"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "创建空文件",
          'code': "touch new.txt\nls -l new.txt"
        },
        {
          'type': "h",
          'text': "cp：复制"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "复制文件与目录",
          'code': "cp new.txt copy.txt\ncp -r mydir mydir_backup\ncp -i old.txt new.txt   # -i 覆盖前询问"
        },
        {
          'type': "h",
          'text': "mv：移动与改名"
        },
        {
          'type': "p",
          'text': "mv 既能移动文件，也能改名（把文件移动到另一个名字的位置）。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "移动与重命名",
          'code': "mv copy.txt /tmp/copy.txt\nmv new.txt renamed.txt\nls"
        },
        {
          'type': "h",
          'text': "rm：删除"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "删除文件与目录",
          'code': "rm renamed.txt\nrm -r mydir_backup\nrm -rf /tmp/copy.txt   # 危险！谨慎使用"
        },
        {
          'type': "danger",
          'title': "rm -rf 的威力",
          'text': "rm -rf 会递归强制删除，不会进回收站，删了就没了！在真实服务器上操作前，一定要先 ls 看清楚再删。建议新手先养成用 <code.inline>rm -i</code.inline> 的习惯，删除前会询问。"
        },
        {
          'type': "table",
          'head': [
            "命令",
            "作用",
            "常用选项"
          ],
          'rows': [
            [
              "mkdir",
              "创建目录",
              "-p 创建多级"
            ],
            [
              "touch",
              "创建空文件",
              "无"
            ],
            [
              "cp",
              "复制",
              "-r 复制目录、-i 覆盖询问"
            ],
            [
              "mv",
              "移动/改名",
              "无"
            ],
            [
              "rm",
              "删除",
              "-r 删目录、-f 强制、-i 询问"
            ]
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"文件与目录操作（mkdir、cp、mv、rm、touch）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"文件与目录操作（mkdir、cp、mv、rm、touch）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"文件与目录操作（mkdir、cp、mv、rm、touch）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "mkdir 建目录，-p 可建多级",
            "touch 建空文件，cp 复制，-r 复制目录",
            "mv 既可移动也可改名",
            "rm 删除不可恢复，rm -rf 极度危险",
            "重要操作前先 ls 确认"
          ]
        }
      ],
      'templates': [
        {
          'name': "建个文件夹练手",
          'code': "mkdir -p project/src\ncd project\ntouch readme.txt\ncp readme.txt backup.txt\nls -l\nmv backup.txt src/\ncd .."
        }
      ]
    },
    {
      'id': "sh-6",
      'title': "查看文件内容（cat、less、head、tail）",
      'summary': "cat 全看、less 翻页看、head/tail 看头看尾，读文件四件套。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "会建文件了，还得会读文件。这一章学习查看文件内容的四个命令：cat 一次性看完全部、less 翻页阅读、head 看开头、tail 看结尾。"
        },
        {
          'type': "h",
          'text': "cat：一口气看完"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "输出文件内容",
          'code': "cat /etc/hostname\ncat file1.txt file2.txt   # 可以把多个文件连起来输出"
        },
        {
          'type': "h",
          'text': "less：翻页阅读大文件"
        },
        {
          'type': "p",
          'text': "文件很大时用 cat 会刷屏，根本来不及看。less 让你像看书一样翻页：空格往下翻、b 往上翻、q 退出，还能用 / 搜索。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "用 less 阅读",
          'code': "less /etc/passwd\n# 空格翻页，/关键词 搜索，q 退出"
        },
        {
          'type': "h",
          'text': "head / tail：只看开头或结尾"
        },
        {
          'type': "p",
          'text': "head 默认显示前 10 行，tail 默认显示后 10 行。想自定义行数就加 <code.inline>-n</code.inline>。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "看开头和结尾",
          'code': "head /etc/passwd\nhead -5 /etc/passwd\ntail -5 /etc/passwd"
        },
        {
          'type': "h",
          'text': "tail -f：实时跟踪文件"
        },
        {
          'type': "p",
          'text': "tail 的 <code.inline>-f</code.inline>（follow 跟随）选项可以持续监视文件，文件有新内容就自动显示。这是查看日志的利器，按 <code.inline>Ctrl+C</code.inline> 退出。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "实时跟踪日志",
          'code': "tail -f /var/log/syslog\n# Ctrl+C 退出"
        },
        {
          'type': "table",
          'head': [
            "命令",
            "用途",
            "常用选项"
          ],
          'rows': [
            [
              "cat",
              "查看全部内容",
              "-n 显示行号"
            ],
            [
              "less",
              "翻页阅读大文件",
              "/搜索、q 退出"
            ],
            [
              "head",
              "看开头 10 行",
              "-n 指定行数"
            ],
            [
              "tail",
              "看结尾 10 行",
              "-n 行数、-f 实时跟随"
            ]
          ]
        },
        {
          'type': "tip",
          'title': "带行号查看",
          'text': "cat -n 文件名 会显示行号，调试脚本或对比文件时很方便。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"查看文件内容（cat、less、head、tail）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"查看文件内容（cat、less、head、tail）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"查看文件内容（cat、less、head、tail）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "cat 查看整个文件，可拼接多个文件",
            "大文件用 less 翻页，q 退出",
            "head 看开头，tail 看结尾，-n 指定行数",
            "tail -f 实时跟踪日志，Ctrl+C 退出"
          ]
        }
      ],
      'templates': [
        {
          'name': "读文件练习",
          'code': "head -3 /etc/passwd\necho \"---\"\ntail -3 /etc/passwd\necho \"---\"\nwc -l /etc/passwd"
        }
      ]
    },
    {
      'id': "sh-7",
      'title': "文件链接 ln 与文件类型 file",
      'summary': "硬链接和软链接的区别，以及 file 命令识别文件真实类型。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "这一章学两个认识文件的命令：file 告诉你文件真实类型；ln 为文件创建链接，让同一个文件有多个入口。"
        },
        {
          'type': "h",
          'text': "file：识别文件真实类型"
        },
        {
          'type': "p",
          'text': "文件后缀名（如 .txt、.png）只是约定，骗不了人。file 命令会真正读取文件内容来判断它到底是什么类型。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "识别文件类型",
          'code': "file /etc/hostname\nfile /bin/ls\nfile /etc/passwd\nfile /etc"
        },
        {
          'type': "h",
          'text': "ln：创建链接"
        },
        {
          'type': "p",
          'text': "链接分两种：「硬链接」和「软链接」（也叫符号链接，symbolic link）。软链接就像 Windows 的快捷方式，它指向另一个文件；硬链接则让两个名字指向同一份数据。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "创建软链接",
          'code': "echo \"hello\" > real.txt\nln -s real.txt shortcut\nls -l\ncat shortcut   # 内容一样"
        },
        {
          'type': "table",
          'head': [
            "特点",
            "硬链接",
            "软链接 ln -s"
          ],
          'rows': [
            [
              "本质",
              "同一份数据的另一个名字",
              "指向另一个文件的快捷方式"
            ],
            [
              "删除原文件",
              "链接仍可用",
              "链接失效（红字）"
            ],
            [
              "能否链接目录",
              "不能",
              "可以"
            ],
            [
              "能否跨文件系统",
              "不能",
              "可以"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "别在 Windows 里双击软链接",
          'text': "在 Git Bash 里用 ln -s 创建的软链接，Windows 资源管理器不一定认识，可能显示异常。这是环境差异，在 Linux/macOS 上才是完整行为。"
        },
        {
          'type': "info",
          'title': "删除链接本身",
          'text': "rm 删除的是「链接」，不是它指向的原文件。要删除原文件才真正删数据。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"文件链接 ln 与文件类型 file\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"文件链接 ln 与文件类型 file\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"文件链接 ln 与文件类型 file\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "file 命令按内容识别文件真实类型",
            "软链接 ln -s 是快捷方式，指向目标路径",
            "硬链接是同一份数据的另一个名字",
            "软链接可跨系统、可指目录；硬链接不能"
          ]
        }
      ],
      'templates': [
        {
          'name': "玩转链接",
          'code': "echo \"数据\" > a.txt\nln -s a.txt b\nls -l a.txt b\ncat b\nfile a.txt b"
        }
      ]
    },
    {
      'id': "sh-8",
      'title': "通配符（*、?、[]）",
      'summary': "用 * ? [] 一次匹配多个文件，批量操作不再一个个敲。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "想一次删除所有 .log 文件、查看所有以 a 开头的文件？通配符就是干这个的。Shell 会在执行命令前把带通配符的路径自动展开成匹配到的文件列表。"
        },
        {
          'type': "h",
          'text': "三个基本通配符"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "通配符示例",
          'code': "touch a1.txt a2.txt b1.txt b2.txt\nls *.txt        # 所有 .txt 结尾的文件\nls a?.txt       # 一个字符 a 加任意一个字符\nls [ab]*.txt    # 以 a 或 b 开头的 .txt 文件"
        },
        {
          'type': "table",
          'head': [
            "通配符",
            "含义",
            "示例"
          ],
          'rows': [
            [
              "*",
              "匹配任意多个字符（含零个）",
              "*.log 匹配所有 .log 文件"
            ],
            [
              "?",
              "匹配恰好一个字符",
              "a?.txt 匹配 a1.txt 不匹配 a10.txt"
            ],
            [
              "[...]",
              "匹配方括号内任意一个字符",
              "[ab]* 匹配 a 或 b 开头"
            ],
            [
              "[a-z]",
              "匹配一个范围内的字符",
              "[0-9]* 匹配数字开头"
            ]
          ]
        },
        {
          'type': "h",
          'text': "配合其他命令批量操作"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "批量删除与复制",
          'code': "rm *.tmp\necho \"删除所有 .tmp 文件\"\ncp *.txt /tmp/\nls /tmp/*.txt"
        },
        {
          'type': "warn",
          'title': "通配符展开失败会怎样",
          'text': "如果通配符一个文件都没匹配到，Shell 会把 <code.inline>*</code.inline> 原样传给命令。比如当前目录没有 .log 文件时，<code.inline>ls *.log</code.inline> 会提示找不到 *.log 而不是安静地什么都不做。"
        },
        {
          'type': "tip",
          'title': "最常用的两个组合",
          'text': "<code.inline>*</code.inline> 全匹配和 <code.inline>*.后缀</code.inline> 是最常用的。想要「除了某类之外」的其他文件，暂时做不到，后面学 find 时会用到取反。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"通配符（*、?、[]）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"通配符（*、?、[]）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"通配符（*、?、[]）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "* 匹配任意多个字符",
            "? 匹配恰好一个字符",
            "[...] 匹配集合或范围中的一个字符",
            "通配符在命令执行前由 Shell 自动展开",
            "没有匹配时通配符会被原样传给命令"
          ]
        }
      ],
      'templates': [
        {
          'name': "通配符小实验",
          'code': "touch a.txt b.txt c.log\nls *\nls *.txt\nls [ab].*\nrm *.txt\nls"
        }
      ]
    },
    {
      'id': "sh-9",
      'title': "权限管理 chmod（rwx 与数字权限）",
      'summary': "看懂 rwx 权限位，用 chmod 数字法或符号法修改权限。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "Linux 是多用户系统，每个文件都带着「谁能读、谁能写、谁能执行」的权限信息。这一章学最常用的 chmod，让你的脚本能运行、别人才看得见。"
        },
        {
          'type': "h",
          'text': "先看懂权限位"
        },
        {
          'type': "p",
          'text': "用 <code.inline>ls -l</code.inline> 查看文件，第一列就是权限，例如 <code.inline>-rwxr-xr--</code.inline>。第一个字符是类型（- 普通文件、d 目录、l 链接），后面每三位一组，分别表示「所有者」「所属组」「其他人」的权限。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "查看权限",
          'code': "touch test.sh\nls -l test.sh"
        },
        {
          'type': "table",
          'head': [
            "字符",
            "含义",
            "数字值"
          ],
          'rows': [
            [
              "r",
              "读权限，能查看内容",
              "4"
            ],
            [
              "w",
              "写权限，能修改内容",
              "2"
            ],
            [
              "x",
              "执行权限，能运行/进入",
              "1"
            ],
            [
              "-",
              "无此权限",
              "0"
            ]
          ]
        },
        {
          'type': "h",
          'text': "数字法（最常用）"
        },
        {
          'type': "p",
          'text': "把 rwx 对应的数字相加，得到每个角色的权限数字。例如 rwx=7、rw-=6、r--=4。三个数字依次代表所有者、组、其他人。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "用数字设置权限",
          'code': "echo \"echo hello\" > hello.sh\nchmod 755 hello.sh\nls -l hello.sh\n./hello.sh"
        },
        {
          'type': "h",
          'text': "符号法"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "用符号增减权限",
          'code': "chmod +x hello.sh    # 给所有人加执行权限\nchmod u+x hello.sh    # 只给所有者加执行\nchmod g-w file.txt    # 去掉组的写权限\nchmod o-r file.txt    # 去掉其他人的读权限"
        },
        {
          'type': "warn",
          'title': "权限太宽是安全隐患",
          'text': "<code.inline>chmod 777</code.inline>（所有人可读可写可执行）会带来安全风险，服务器上千万别随手用。一般文件 644、脚本/程序 755 就够用。"
        },
        {
          'type': "tip",
          'title': "目录的权限不一样",
          'text': "目录的 r 权限决定能否列出内容，w 决定能否新建/删除文件，x 决定能否进入目录。所以目录通常是 755。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"权限管理 chmod（rwx 与数字权限）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"权限管理 chmod（rwx 与数字权限）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"权限管理 chmod（rwx 与数字权限）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "权限分三组：所有者、组、其他人",
            "r=4、w=2、x=1，数字相加得到权限",
            "chmod 755 是常用数字法，chmod +x 是符号法",
            "脚本要执行需要 x 权限，chmod +x 即可",
            "慎用 777，注意安全"
          ]
        }
      ],
      'templates': [
        {
          'name': "给脚本加执行权限",
          'code': "touch run.sh\nchmod +x run.sh\nls -l run.sh\nchmod 644 run.sh\nls -l run.sh"
        }
      ]
    },
    {
      'id': "sh-10",
      'title': "chown 与用户组（谁拥有这个文件）",
      'summary': "改文件所有者与所属组，理解用户、组、root 三者的关系。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "每个文件都有「所有者」和「所属组」。这一章学习用 chown 修改所有者、chgrp 修改所属组，并搞懂用户、组和 root 的关系。"
        },
        {
          'type': "h",
          'text': "先看当前用户"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "查看我是谁",
          'code': "whoami\nid\nid -un"
        },
        {
          'type': "h",
          'text': "chown：修改所有者"
        },
        {
          'type': "p",
          'text': "chown 的格式是 <code.inline>chown 新所有者 文件</code.inline>。只有 root 用户能修改别人的文件所有者，普通用户通常改不了，所以需要 sudo。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "修改所有者",
          'code': "sudo chown root file.txt\nsudo chown xiaoming file.txt\nsudo chown root:root file.txt   # 同时改所有者和组"
        },
        {
          'type': "h",
          'text': "chgrp：修改所属组"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "修改所属组",
          'code': "sudo chgrp staff file.txt\nsudo chown :staff file.txt   # :组名 只改组"
        },
        {
          'type': "h",
          'text': "递归修改 -R"
        },
        {
          'type': "p",
          'text': "对目录加上 <code.inline>-R</code.inline>，会连同里面所有子文件和子目录一起改。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "递归修改",
          'code': "sudo chown -R xiaoming:xiaoming /home/xiaoming/app"
        },
        {
          'type': "table",
          'head': [
            "概念",
            "说明"
          ],
          'rows': [
            [
              "root",
              "超级管理员，能改任何文件的所有者"
            ],
            [
              "所有者 u",
              "文件的当前主人，通常创建者"
            ],
            [
              "所属组 g",
              "一组用户共享，方便协作授权"
            ],
            [
              "sudo",
              "临时以 root 身份执行命令"
            ]
          ]
        },
        {
          'type': "danger",
          'title': "chown 是高风险命令",
          'text': "把系统目录（比如 /etc、/usr）的所有者改错，可能导致系统无法启动。务必精确指定路径，操作前先 ls -l 确认。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"chown 与用户组（谁拥有这个文件）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"chown 与用户组（谁拥有这个文件）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"chown 与用户组（谁拥有这个文件）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "chown 改所有者，chgrp 改所属组",
            "只有 root（配合 sudo）能改他人文件所有者",
            "-R 递归应用到目录内所有内容",
            "格式 chown 用户:组 文件",
            "别乱改系统目录的所有者"
          ]
        }
      ],
      'templates': [
        {
          'name': "查看用户与组信息",
          'code': "whoami\nid\ngroups\nls -l /etc/hostname"
        }
      ]
    },
    {
      'id': "sh-11",
      'title': "文本处理 grep 基础（大海捞针）",
      'summary': "grep 在文件里搜索关键词，把匹配的行找出来。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "grep 是 Linux 文本处理三剑客之一，作用是「按关键词搜索文件，输出匹配的行」。日志分析、配置排查全靠它。"
        },
        {
          'type': "h",
          'text': "最基本的用法"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "搜索关键词",
          'code': "grep \"root\" /etc/passwd\ngrep \"nologin\" /etc/passwd"
        },
        {
          'type': "h",
          'text': "常用选项"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "常用选项示例",
          'code': "grep -i \"error\" app.log     # -i 忽略大小写\ngrep -c \"404\" access.log     # -c 只数匹配行数\ngrep -v \"debug\" app.log      # -v 反向，输出不匹配的\ngrep -n \"warn\" app.log       # -n 显示行号\ngrep -r \"password\" /etc/     # -r 递归搜索目录"
        },
        {
          'type': "table",
          'head': [
            "选项",
            "作用"
          ],
          'rows': [
            [
              "-i",
              "忽略大小写"
            ],
            [
              "-c",
              "统计匹配的行数"
            ],
            [
              "-v",
              "反向匹配，输出不包含关键词的行"
            ],
            [
              "-n",
              "显示行号"
            ],
            [
              "-r / -R",
              "递归搜索目录"
            ],
            [
              "-l",
              "只列出包含匹配的文件名"
            ]
          ]
        },
        {
          'type': "h",
          'text': "从管道里过滤"
        },
        {
          'type': "p",
          'text': "grep 最常用的场景是和管道搭配：把前面命令的输出过滤一遍。后面学管道时你会频繁见到它。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "过滤命令输出",
          'code': "ps aux | grep nginx\nls -la / | grep \"^d\"   # 只看目录行"
        },
        {
          'type': "tip",
          'title': "搜索多个关键词",
          'text': "用 <code.inline>-e</code.inline> 可以同时指定多个关键词：<code.inline>grep -e 'error' -e 'warn' app.log</code.inline>，匹配任一即输出。"
        },
        {
          'type': "warn",
          'title': "关键词是正则表达式",
          'text': "grep 默认支持基础正则，像 . * [ ] 这些符号有特殊含义。想搜一个纯字面的点号，要写 <code.inline>grep -F '1.2.3'</code.inline> 或加反斜杠。第 36-37 章会详细讲正则。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"文本处理 grep 基础（大海捞针）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"文本处理 grep 基础（大海捞针）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"文本处理 grep 基础（大海捞针）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "grep 关键词 文件 搜索并输出匹配行",
            "-i 忽略大小写、-c 计数、-v 反向、-n 行号",
            "-r 递归目录、-l 只列文件名",
            "常与管道搭配过滤命令输出",
            "grep 支持正则，特殊符号要转义"
          ]
        }
      ],
      'templates': [
        {
          'name': "在 passwd 里找人",
          'code': "grep \"root\" /etc/passwd\ngrep -c \"bin\" /etc/passwd\ngrep -v \"#\" /etc/hostname"
        }
      ]
    },
    {
      'id': "sh-12",
      'title': "sed 流编辑器基础（批量替换好帮手）",
      'summary': "sed 对文本流做替换、删除、打印，不改原文件也能改。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "sed（stream editor，流编辑器）专门用来对文本做自动化修改，最常用的功能是「查找替换」。它像一条流水线：一行一行读入，处理完输出。"
        },
        {
          'type': "h",
          'text': "最基本的替换"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "替换第一个匹配",
          'code': "echo \"hello world\" | sed 's/world/universe/'"
        },
        {
          'type': "p",
          'text': "上面的 <code.inline>s/world/universe/</code.inline> 中，s 表示替换（substitute），把 world 换成 universe。注意输出的是替换后的结果，原文件没变。"
        },
        {
          'type': "h",
          'text': "替换所有匹配 / 全局替换"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "全局替换",
          'code': "echo \"a b a b\" | sed 's/a/A/g'"
        },
        {
          'type': "p",
          'text': "不加 <code.inline>g</code.inline> 只替换每行第一个匹配；加 <code.inline>g</code.inline>（global）替换整行所有匹配。"
        },
        {
          'type': "h",
          'text': "真正修改文件 -i"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "原地修改文件",
          'code': "sed -i 's/old/new/g' config.txt\nsed -i.bak 's/old/new/g' config.txt   # 修改前先备份为 .bak"
        },
        {
          'type': "h",
          'text': "删除行和打印行"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "删除与打印指定行",
          'code': "sed '3d' file.txt          # 删除第 3 行\nsed '1,5d' file.txt        # 删除 1 到 5 行\nsed -n '2p' file.txt       # 只打印第 2 行\nsed -n '1,5p' file.txt     # 打印 1 到 5 行"
        },
        {
          'type': "table",
          'head': [
            "sed 写法",
            "含义"
          ],
          'rows': [
            [
              "s/旧/新/",
              "替换每行第一个匹配"
            ],
            [
              "s/旧/新/g",
              "替换整行所有匹配"
            ],
            [
              "N d",
              "删除第 N 行"
            ],
            [
              "N p",
              "打印第 N 行（常配 -n）"
            ],
            [
              "-i",
              "直接修改原文件"
            ]
          ]
        },
        {
          'type': "danger",
          'title': "sed -i 是直接改文件",
          'text': "加了 -i 后原文件会被改写且无法撤销。操作重要文件前，先不加 -i 看输出是否正确，或先备份。"
        },
        {
          'type': "tip",
          'title': "分隔符不一定是 /",
          'text': "替换的旧内容里含 / 时，可以换成别的分隔符，比如 <code.inline>sed 's#/usr/bin#/opt/bin#g' file</code.inline>。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"sed 流编辑器基础（批量替换好帮手）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"sed 流编辑器基础（批量替换好帮手）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"sed 流编辑器基础（批量替换好帮手）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "sed 是流编辑器，逐行处理文本",
            "s/旧/新/ 替换，g 表示全局",
            "-i 直接改文件（先备份）",
            "N d 删行、N p 打印行",
            "分隔符可用 # 等代替 /"
          ]
        }
      ],
      'templates': [
        {
          'name': "sed 替换练习",
          'code': "echo \"apple banana apple\" | sed 's/apple/APPLE/g'\necho \"hello world\" | sed 's/world/Bash/'"
        }
      ]
    },
    {
      'id': "sh-13",
      'title': "awk 文本处理基础（按列处理神器）",
      'summary': "awk 按列处理文本，$1、$2 取字段，NR 是行号。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "如果说 grep 是按行搜、sed 是按行改，awk 就是「按列处理」。日志、表格、配置文件大多是空格或冒号分隔的列，awk 能精准提取出你想要的每一列。"
        },
        {
          'type': "h",
          'text': "提取列：$1 $2 $3"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "取出每一列",
          'code': "echo 'a b c d' | awk '{print $1, $3}'"
        },
        {
          'type': "p",
          'text': "awk 默认用连续空格把一行切成多个「字段」，<code.inline>$1</code.inline> 是第 1 个字段，<code.inline>$2</code.inline> 是第 2 个，<code.inline>$0</code.inline> 是整行。"
        },
        {
          'type': "h",
          'text': "指定分隔符 -F"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "用冒号分隔",
          'code': "awk -F: '{print $1, $3}' /etc/passwd"
        },
        {
          'type': "h",
          'text': "内置变量 NR NF"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "行号与字段数",
          'code': "awk '{print NR, NF, $0}' /etc/passwd"
        },
        {
          'type': "h",
          'text': "条件过滤"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "按条件输出",
          'code': "awk '$3 > 1000 {print $1}' /etc/passwd\nawk '/root/ {print $1}' /etc/passwd"
        },
        {
          'type': "table",
          'head': [
            "awk 概念",
            "含义"
          ],
          'rows': [
            [
              "$1 $2 $3",
              "第 1、2、3 个字段"
            ],
            [
              "$0",
              "整行"
            ],
            [
              "-F 分隔符",
              "指定字段分隔符，如 -F: 按冒号切"
            ],
            [
              "NR",
              "当前是第几行（行号）"
            ],
            [
              "NF",
              "当前行有几个字段"
            ]
          ]
        },
        {
          'type': "tip",
          'title': "awk 也是语言",
          'text': "awk 不止会取列，还能做统计、累加、格式化输出，是一个完整的编程语言。第 39 章会深入讲解。"
        },
        {
          'type': "warn",
          'title': "单引号别丢",
          'text': "awk 程序必须用单引号包住，因为里面 $ 符号会被 Shell 抢走当变量。写成 <code.inline>awk '{print $1}'</code.inline> 才对。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"awk 文本处理基础（按列处理神器）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"awk 文本处理基础（按列处理神器）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"awk 文本处理基础（按列处理神器）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "awk 按列处理文本，$1 $2 取字段",
            "$0 是整行，NF 是字段数，NR 是行号",
            "-F 指定分隔符，默认空格",
            "awk 程序要用单引号包裹",
            "能条件过滤、统计求和"
          ]
        }
      ],
      'templates': [
        {
          'name': "提取字段",
          'code': "echo 'name:age:city' | awk -F: '{print $1, $3}'\necho 'a b c' | awk '{print NF}'\nawk -F: '{print NR, $1}' /etc/passwd"
        }
      ]
    },
    {
      'id': "sh-14",
      'title': "wc、sort、uniq（统计、排序、去重三兄弟）",
      'summary': "数行数字、排序、去重统计，文本分析的入门组合。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "这一章学三个常配合使用的命令：wc 统计行数/字数、sort 排序、uniq 去重。它们合起来就是最朴素的「数据分析」。"
        },
        {
          'type': "h",
          'text': "wc：数一数"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "统计行数字数",
          'code': "wc -l /etc/passwd\nwc -w readme.txt\nwc -c readme.txt\nwc /etc/passwd   # 输出行 词 字节 三个数"
        },
        {
          'type': "h",
          'text': "sort：排序"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "排序",
          'code': "sort names.txt\nsort -r names.txt      # 倒序\nsort -n scores.txt     # 按数字大小排序\nsort -u names.txt      # 排序同时去重"
        },
        {
          'type': "h",
          'text': "uniq：去重"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "去重",
          'code': "uniq list.txt\nuniq -c list.txt      # 统计每个重复出现几次\nuniq -d list.txt      # 只显示重复的行"
        },
        {
          'type': "warn",
          'title': "uniq 只去掉相邻的重复",
          'text': "uniq 只能去掉「相邻且相同」的行。如果重复行不相邻（中间隔了别的），它去不掉。所以常规用法是 <code.inline>sort 文件 | uniq -c</code.inline>：先排序让相同行聚到一起，再去重统计。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "经典组合：统计出现次数",
          'code': "sort access.log | uniq -c | sort -rn\n# 统计每个 IP 出现的次数，从多到少排"
        },
        {
          'type': "h",
          'text': "sort 的其他技巧"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "按第几列排序",
          'code': "sort -k2 -n data.txt   # 按第 2 列的数字排序\nsort -t: -k3 -n /etc/passwd  # 按冒号分隔的第 3 列排"
        },
        {
          'type': "table",
          'head': [
            "命令",
            "作用",
            "常用选项"
          ],
          'rows': [
            [
              "wc",
              "统计",
              "-l 行、-w 词、-c 字节"
            ],
            [
              "sort",
              "排序",
              "-n 按数字、-r 倒序、-k 按列、-u 去重"
            ],
            [
              "uniq",
              "去重",
              "-c 计数、-d 只看重复"
            ]
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"wc、sort、uniq（统计、排序、去重三兄弟）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"wc、sort、uniq（统计、排序、去重三兄弟）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"wc、sort、uniq（统计、排序、去重三兄弟）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "wc -l 统计行数",
            "sort 排序，-n 按数字、-r 倒序、-k 按列",
            "uniq 去重但只能去相邻重复",
            "sort | uniq -c | sort -rn 是统计词频的黄金组合"
          ]
        }
      ],
      'templates': [
        {
          'name': "统计词频",
          'code': "echo \"apple apple banana apple\" | tr ' ' '\\n' | sort | uniq -c | sort -rn"
        }
      ]
    },
    {
      'id': "sh-15",
      'title': "cut、paste、tr（裁剪、拼接、转换）",
      'summary': "cut 按列裁剪、paste 并排拼接、tr 逐个字符转换。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "这一章学三个文本加工命令：cut 按列或字符裁剪出片段、paste 把多列并排拼起来、tr 对单个字符做转换（大小写、删除、替换）。"
        },
        {
          'type': "h",
          'text': "cut：裁剪列"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "按列裁剪",
          'code': "cut -d: -f1 /etc/passwd   # 冒号分隔，取第 1 列\ncut -d: -f1,3 /etc/passwd  # 取第 1 和第 3 列\necho 'a-b-c' | cut -d- -f2  # 输出 b"
        },
        {
          'type': "p",
          'text': "<code.inline>-d</code.inline> 指定分隔符，<code.inline>-f</code.inline> 指定要第几列。也可以用 <code.inline>-c</code.inline> 按字符位置切。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "按字符裁剪",
          'code': "echo \"hello world\" | cut -c1-5    # hello\necho \"hello world\" | cut -c7-11   # world"
        },
        {
          'type': "h",
          'text': "paste：并排拼接"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "把两个文件并排",
          'code': "paste a.txt b.txt\npaste -d, a.txt b.txt   # 用逗号连接每行的两列"
        },
        {
          'type': "h",
          'text': "tr：字符转换"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "大小写与删除",
          'code': "echo 'hello' | tr 'a-z' 'A-Z'     # HELLO\necho 'a1b2c3' | tr -d '0-9'         # abc 删除数字\necho 'a b c' | tr -s ' '            # 把连续多个空格压成一个"
        },
        {
          'type': "table",
          'head': [
            "命令",
            "作用",
            "关键选项"
          ],
          'rows': [
            [
              "cut",
              "裁剪列/字符",
              "-d 分隔符、-f 列号、-c 字符位置"
            ],
            [
              "paste",
              "并排拼接列",
              "-d 指定分隔符"
            ],
            [
              "tr",
              "单字符转换",
              "-d 删除、-s 压缩重复"
            ]
          ]
        },
        {
          'type': "tip",
          'title': "三件套常合体",
          'text': "cut 取列、tr 转换、paste 拼接，经常和 grep、sort 组合成一条分析流水线。第 59 章会讲组合实战。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"cut、paste、tr（裁剪、拼接、转换）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"cut、paste、tr（裁剪、拼接、转换）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"cut、paste、tr（裁剪、拼接、转换）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "cut -d 分隔符 -f 列号 按列裁剪",
            "cut -c 按字符位置裁剪",
            "paste 把文件并排拼接成多列",
            "tr 做大小写转换、-d 删除、-s 压缩"
          ]
        }
      ],
      'templates': [
        {
          'name': "文本加工流水线",
          'code': "cut -d: -f1 /etc/passwd | sort | head\necho 'hello world' | tr 'a-z' 'A-Z'\necho 'a1b2' | tr -d '0-9'"
        }
      ]
    },
    {
      'id': "sh-16",
      'title': "管道与重定向（|、>、>>、<、2>&1）",
      'summary': "管道把命令串起来，重定向把输出导入文件。Shell 的灵魂。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "这一章是整个 Shell 最重要的一章：管道与重定向。掌握了它们，你就能把一个个小命令组合成强大的流水线。"
        },
        {
          'type': "h",
          'text': "重定向：把输出写进文件"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "输出重定向",
          'code': "echo \"hello\" > out.txt\necho \"world\" >> out.txt\ncat out.txt"
        },
        {
          'type': "p",
          'text': "> 会覆盖写入（文件原有内容清空重建），>> 是追加写入（保留原有内容，在末尾增加）。"
        },
        {
          'type': "h",
          'text': "输入重定向：从文件读"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "输入重定向",
          'code': "wc -l < out.txt\ngrep \"hello\" < out.txt"
        },
        {
          'type': "h",
          'text': "管道：把输出接给下一个命令"
        },
        {
          'type': "p",
          'text': "管道符号 | 把左边命令的输出，当作右边命令的输入，像工厂流水线一样一环接一环。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "管道示例",
          'code': "ls -la / | head -5\nps aux | grep bash\ngrep -v \"^#\" /etc/passwd | wc -l"
        },
        {
          'type': "h",
          'text': "标准错误 2>&1"
        },
        {
          'type': "p",
          'text': "每个命令都有两个输出：标准输出（1，正常结果）和标准错误（2，报错信息）。默认都显示在屏幕。想把报错也存进文件，用 <code.inline>2>&1</code.inline>。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "合并错误输出",
          'code': "ls /nonexistent 2> err.txt\nls /nonexistent 2>&1\nls /nonexistent >> log.txt 2>&1"
        },
        {
          'type': "table",
          'head': [
            "符号",
            "作用"
          ],
          'rows': [
            [
              ">",
              "输出重定向，覆盖写入"
            ],
            [
              ">>",
              "追加写入"
            ],
            [
              "<",
              "输入重定向，从文件读"
            ],
            [
              "2>",
              "错误输出到文件"
            ],
            [
              "2>&1",
              "把错误合并到标准输出"
            ],
            [
              "|",
              "把前一个命令输出接给后一个命令"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "> 会瞬间清空文件",
          'text': "<code.inline>cat file.txt > file.txt</code.inline> 这种「读同一个文件又写回同一个文件」的操作会先把文件清空，导致数据丢失。需要原文件修改要用 sed -i 或先写到临时文件。"
        },
        {
          'type': "tip",
          'title': "丢弃输出",
          'text': "不想要的输出可以丢到 <code.inline>/dev/null</code.inline>（黑洞设备）：<code.inline>命令 > /dev/null 2>&1</code.inline> 表示什么都不要。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"管道与重定向（|、>、>>、<、2>&1）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"管道与重定向（|、>、>>、<、2>&1）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"管道与重定向（|、>、>>、<、2>&1）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "> 覆盖写、>> 追加写、< 从文件读",
            "| 管道把命令串成流水线",
            "2>&1 把报错也合并到正常输出",
            "> 会清空文件，别把同一文件又读又写",
            "/dev/null 是丢弃输出的黑洞"
          ]
        }
      ],
      'templates': [
        {
          'name': "我的第一条流水线",
          'code': "ls / | head -3\necho \"记录\" >> log.txt\ngrep \"记录\" < log.txt\ncat log.txt | wc -l"
        }
      ]
    },
    {
      'id': "sh-17",
      'title': "进程管理 ps（看看系统里跑着什么）",
      'summary': "用 ps 查看进程列表，aux 与 -ef 两种经典姿势。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "正在运行的程序叫「进程」。这一章学习用 ps 查看系统里都有哪些进程、谁占了多少 CPU。"
        },
        {
          'type': "h",
          'text': "ps：查看进程"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "查看当前 shell 的进程",
          'code': "ps\nps -ef\nps aux"
        },
        {
          'type': "p",
          'text': "<code.inline>ps aux</code.inline> 是最常用的姿势（BSD 风格），会列出所有进程及详细信息，包括用户、PID、CPU、内存、启动命令。前几列含义：USER 用户名、PID 进程号、%CPU CPU 占用、%MEM 内存占用、COMMAND 命令。"
        },
        {
          'type': "table",
          'head': [
            "列名",
            "含义"
          ],
          'rows': [
            [
              "USER",
              "哪个用户启动的"
            ],
            [
              "PID",
              "进程编号（唯一）"
            ],
            [
              "%CPU",
              "CPU 占用百分比"
            ],
            [
              "%MEM",
              "内存占用百分比"
            ],
            [
              "COMMAND",
              "启动它的命令"
            ]
          ]
        },
        {
          'type': "h",
          'text': "查找特定进程"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "结合 grep 查找",
          'code': "ps aux | grep nginx\nps aux | grep -v grep | grep bash   # 排除 grep 自身"
        },
        {
          'type': "h",
          'text': "pgrep：按名字找 PID"
        },
        {
          'type': "p",
          'text': "pgrep 直接按进程名返回 PID，不用再管道 grep。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "用 pgrep 找 PID",
          'code': "pgrep -l bash\npgrep nginx"
        },
        {
          'type': "tip",
          'title': "ps 与 top 的区别",
          'text': "ps 是某一瞬间的「快照」；top 是实时刷新的「监控」。后面一章讲 top。"
        },
        {
          'type': "warn",
          'title': "grep 自己会被搜到",
          'text': "<code.inline>ps aux | grep xxx</code.inline> 时，grep 这个命令自己也包含 xxx，会出现在结果里。常用 <code.inline>grep -v grep</code.inline> 把它过滤掉。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"进程管理 ps（看看系统里跑着什么）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"进程管理 ps（看看系统里跑着什么）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"进程管理 ps（看看系统里跑着什么）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "ps 查看进程，ps aux 看全部进程详细信息",
            "PID 是进程唯一编号",
            "ps aux | grep 名字 查找特定进程",
            "pgrep -l 名字 直接返回 PID",
            "ps 是快照，top 是实时"
          ]
        }
      ],
      'templates': [
        {
          'name': "看看自己的进程",
          'code': "ps\nps aux | grep bash\npgrep -l bash"
        }
      ]
    },
    {
      'id': "sh-18",
      'title': "进程管理 kill、top、jobs（终止与后台任务）",
      'summary': "top 实时看资源，kill 终止进程，& 放后台跑。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "上一章会看进程，这一章会管进程：top 实时监控资源、kill 终止进程、把任务放到后台运行。"
        },
        {
          'type': "h",
          'text': "top：实时资源监控"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "打开 top",
          'code': "top\n# 按 q 退出"
        },
        {
          'type': "p",
          'text': "top 界面每几秒刷新一次，按 CPU 占用排序显示所有进程。想按内存排序，进入 top 后按 <code.inline>M</code.inline>；按 <code.inline>q</code.inline> 退出。"
        },
        {
          'type': "h",
          'text': "kill：终止进程"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "先启动一个后台进程再终止",
          'code': "sleep 60 &\npgrep -l sleep\nkill $(pgrep sleep)\necho \"已终止 sleep\""
        },
        {
          'type': "p",
          'text': "kill 默认发送 TERM 信号，请进程「优雅退出」。如果它不响应，再用 <code.inline>kill -9</code.inline>（SIGKILL）强制杀死。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "kill 的用法",
          'code': "kill 1234        # 优雅终止 PID 1234\nkill -9 1234     # 强制杀死\nkillall nginx     # 按名字杀所有 nginx"
        },
        {
          'type': "h",
          'text': "后台任务 & 与 jobs"
        },
        {
          'type': "p",
          'text': "命令末尾加 <code.inline>&</code.inline> 让它到后台运行，终端不会被占用。jobs 查看后台任务，fg 把它调回前台。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "后台任务",
          'code': "sleep 30 &\nsleep 30 &\njobs\nfg 1   # 把第 1 个任务调回前台（Ctrl+C 终止）"
        },
        {
          'type': "table",
          'head': [
            "命令",
            "作用"
          ],
          'rows': [
            [
              "top",
              "实时监控所有进程资源"
            ],
            [
              "kill PID",
              "按 PID 发信号终止"
            ],
            [
              "kill -9 PID",
              "强制杀死（SIGKILL）"
            ],
            [
              "命令 &",
              "放到后台运行"
            ],
            [
              "jobs",
              "列出后台任务"
            ],
            [
              "fg / bg",
              "任务调回前台 / 后台"
            ]
          ]
        },
        {
          'type': "danger",
          'title': "kill -9 是最后手段",
          'text': "kill -9 不给进程任何善后机会，可能留下未保存数据或损坏文件。先试普通 kill，无效再用 -9。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"进程管理 kill、top、jobs（终止与后台任务）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"进程管理 kill、top、jobs（终止与后台任务）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"进程管理 kill、top、jobs（终止与后台任务）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "top 实时看 CPU/内存，q 退出",
            "kill PID 优雅终止，kill -9 强制杀死",
            "命令加 & 放后台，jobs 查看，fg 调回前台",
            "killall 按进程名批量终止"
          ]
        }
      ],
      'templates': [
        {
          'name': "后台任务体验",
          'code': "sleep 60 &\nsleep 30 &\njobs\nkill %1\necho \"第 1 个后台任务已终止\""
        }
      ]
    },
    {
      'id': "sh-19",
      'title': "变量与环境变量（var=value、$var）",
      'summary': "变量存数据，$ 取值，理解 Shell 变量与编程变量。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "变量就是给数据起个名字，用的时候用美元符号 $ 把值取出来。脚本里到处是变量，这一章打好基础。"
        },
        {
          'type': "h",
          'text': "定义与使用"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "变量定义与取值",
          'code': "name=\"小明\"\nage=10\necho $name\necho \"我$age岁了\"\necho \"我的名字是 $name\""
        },
        {
          'type': "p",
          'text': "定义变量用 <code.inline>变量名=值</code.inline>（等号两侧不能有空格），取值用 <code.inline>$变量名</code.inline>。推荐给值加双引号，可以保留空格。"
        },
        {
          'type': "warn",
          'title': "等号两边不能有空格",
          'text': "<code.inline>name = \"小明\"</code.inline> 是错的！Shell 会把它当成三个词。必须写 <code.inline>name=\"小明\"</code.inline>，这是新手最常见的报错。"
        },
        {
          'type': "h",
          'text': "取值的两种写法"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "$var 与 ${var}",
          'code': "fruit=\"苹果\"\necho \"$fruit好吃\"\necho \"${fruit}很好吃\"   # 花括号防止歧义"
        },
        {
          'type': "p",
          'text': "当变量名后面紧跟其他字符时，用 <code.inline>${变量名}</code.inline> 明确边界，否则 Shell 会把后面的字符当成变量名的一部分。"
        },
        {
          'type': "h",
          'text': "环境变量"
        },
        {
          'type': "p",
          'text': "Shell 变量分两种：普通变量只对当前 Shell 有效；环境变量会传递给从这个 Shell 启动的子进程。用 <code.inline>export</code.inline> 可以把普通变量提升为环境变量（下一章细讲）。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "查看环境变量",
          'code': "echo $HOME\necho $USER\necho $PATH\nenv | head"
        },
        {
          'type': "table",
          'head': [
            "写法",
            "含义"
          ],
          'rows': [
            [
              "var=value",
              "定义变量（等号无空格）"
            ],
            [
              "$var",
              "取出变量值"
            ],
            [
              "${var}",
              "取出变量值，花括号定边界"
            ],
            [
              "export var",
              "提升为环境变量"
            ],
            [
              "$HOME $PATH $USER",
              "系统自带的环境变量"
            ]
          ]
        },
        {
          'type': "tip",
          'title': "未定义变量是空",
          'text': "访问没定义过的变量不会报错，得到空字符串。可以用这个特性做默认值（第 23 章讲 ${var:-默认值}）。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"变量与环境变量（var=value、$var）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"变量与环境变量（var=value、$var）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"变量与环境变量（var=value、$var）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "变量=值 定义，$变量名 取值",
            "等号两侧绝对不能有空格",
            "${var} 花括号用于界定变量名边界",
            "export 让变量传给子进程",
            "环境变量如 $HOME、$PATH 系统自带"
          ]
        }
      ],
      'templates': [
        {
          'name': "我的第一个变量",
          'code': "name=\"小明\"\ncity=\"上海\"\necho \"你好，$name！\"\necho \"你住在 $city\"\necho \"${name}喜欢的城市是$city\""
        }
      ]
    },
    {
      'id': "sh-20",
      'title': "export 与 PATH（让子进程认识你的变量）",
      'summary': "export 传递变量给子进程，PATH 决定命令在哪找。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "这一章讲两个关键概念：export 让变量被子进程继承，PATH 决定系统去哪找命令。理解了 PATH，你就明白了为什么有的命令能直接敲、有的要写完整路径。"
        },
        {
          'type': "h",
          'text': "子进程不会自动继承普通变量"
        },
        {
          'type': "p",
          'text': "当你运行一个命令或脚本时，它是个「子进程」，只看得见「环境变量」。普通变量它看不见。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "export 前后对比",
          'code': "myvar=\"hello\"\nbash -c 'echo \"子进程看到: $myvar\"'   # 空的\n\nexport myvar\nbash -c 'echo \"export 后: $myvar\"'  # hello"
        },
        {
          'type': "h",
          'text': "PATH：命令的搜索路径"
        },
        {
          'type': "p",
          'text': "你在终端敲 ls，系统怎么知道 ls 在哪？答案是通过 PATH。PATH 是一串用冒号分隔的目录，系统按顺序去这些目录里找命令。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "查看 PATH",
          'code': "echo $PATH\nwhich ls\ntype ls"
        },
        {
          'type': "h",
          'text': "给 PATH 加目录"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "追加自己的目录",
          'code': "export PATH=$PATH:/home/xiaoming/bin\necho $PATH"
        },
        {
          'type': "warn",
          'title': "PATH 修改只在当前会话有效",
          'text': "直接在终端 export PATH 只对当前窗口有效，关掉终端就失效。想永久生效，要写进 .bashrc（第 54 章讲）。另外千万别覆盖掉原有 PATH，一定要写成 $PATH:新目录 这种追加方式。"
        },
        {
          'type': "table",
          'head': [
            "场景",
            "做法"
          ],
          'rows': [
            [
              "临时用一下",
              "export PATH=$PATH:新目录"
            ],
            [
              "永久生效",
              "写进 ~/.bashrc"
            ],
            [
              "把命令装到系统目录",
              "放到 /usr/local/bin（推荐）"
            ],
            [
              "查看命令在哪",
              "which 命令名"
            ]
          ]
        },
        {
          'type': "info",
          'title': "为什么 which 有用",
          'text': "两个目录都有同名命令时，PATH 顺序决定先执行哪个。用 which 命令 查看实际用的是哪个。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"export 与 PATH（让子进程认识你的变量）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"export 与 PATH（让子进程认识你的变量）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"export 与 PATH（让子进程认识你的变量）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "普通变量子进程看不见，export 后变成环境变量",
            "PATH 是命令搜索目录列表，冒号分隔",
            "追加目录用 export PATH=$PATH:新目录",
            "永久修改写进 .bashrc",
            "别覆盖原有 PATH"
          ]
        }
      ],
      'templates': [
        {
          'name': "让子进程看到变量",
          'code': "name=\"世界\"\necho \"外层: $name\"\nbash -c 'echo \"内层: $name\"'\nexport name\nbash -c 'echo \"export后内层: $name\"'"
        }
      ]
    },
    {
      'id': "sh-21",
      'title': "引号与转义（单引号、双引号、反斜杠）",
      'summary': "单引号原样、双引号留变量、反斜杠转义，引号三兄弟。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "Shell 里的引号不只是用来包裹文字，它们决定里面的内容怎么被解释。搞懂三种引号，很多诡异报错就消失了。"
        },
        {
          'type': "h",
          'text': "双引号：保留变量和空格"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "双引号内变量会展开",
          'code': "name=\"小明\"\necho \"你好，$name\"\necho \"这是一个 空格 的世界\""
        },
        {
          'type': "h",
          'text': "单引号：全部原样"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "单引号内不展开",
          'code': "name=\"小明\"\necho '你好，$name'    # 原样输出 $name\necho '单引号里的 空格 不动'"
        },
        {
          'type': "p",
          'text': "单引号内的一切都是字面意思，包括 $、*、空格等特殊字符，全部原样输出。双引号会保留空格但展开 $变量 和命令替换。"
        },
        {
          'type': "h",
          'text': "反斜杠：转义单个字符"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "反斜杠转义",
          'code': "echo 这是个\\ 空格\necho \\$HOME\necho \"价格是 \\$100\""
        },
        {
          'type': "h",
          'text': "组合使用"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "引号里嵌引号",
          'code': "echo \"他说：'你好'\"\necho '外面单引号 里面 \"双引号\" 原样'"
        },
        {
          'type': "table",
          'head': [
            "写法",
            "作用",
            "举例"
          ],
          'rows': [
            [
              "双引号",
              "保留空格，展开 $变量 和 $() 命令替换",
              "echo \"$HOME\""
            ],
            [
              "单引号",
              "所有字符原样输出",
              "echo '$HOME' 输出 $HOME"
            ],
            [
              "反斜杠",
              "转义紧跟的一个特殊字符",
              "echo \\$HOME 输出 $HOME 字样"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "单引号里不能再用单引号",
          'text': "单引号内想表示单引号本身很麻烦。可以用反斜杠拼接：<code.inline>echo 'it\\'s'</code.inline>，或改用双引号。"
        },
        {
          'type': "tip",
          'title': "什么时候用哪种",
          'text': "默认能用双引号就用双引号；想输出纯字面内容（比如 awk 脚本、正则）就用单引号；只想转义一个特殊字符用反斜杠。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"引号与转义（单引号、双引号、反斜杠）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"引号与转义（单引号、双引号、反斜杠）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"引号与转义（单引号、双引号、反斜杠）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "双引号保留空格并展开 $变量",
            "单引号所有字符原样输出",
            "反斜杠转义紧跟的单个特殊字符",
            "单引号里不能再套单引号"
          ]
        }
      ],
      'templates': [
        {
          'name': "引号对比实验",
          'code': "name=\"Shell\"\necho \"双引号: $name\"\necho '单引号: $name'\necho 反斜杠: \\$name\necho 拼接: \"你好\"'，'\"世界\""
        }
      ]
    },
    {
      'id': "sh-22",
      'title': "命令替换 $( ) 与反引号",
      'summary': "把命令的输出当值用，$(...) 是现代写法。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "命令替换（command substitution）让你「先运行一个命令，再把它的输出当成值使用」。这是脚本自动化的核心能力之一。"
        },
        {
          'type': "h",
          'text': "$( ) 基本用法"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "把命令输出赋给变量",
          'code': "today=$(date)\necho \"今天是 $today\"\ncount=$(ls | wc -l)\necho \"当前目录有 $count 个文件\""
        },
        {
          'type': "h",
          'text': "直接嵌入字符串"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "命令替换嵌在文字里",
          'code': "echo \"现在时间是 $(date +%H:%M)\"\necho \"当前用户是 $(whoami)\""
        },
        {
          'type': "h",
          'text': "反引号：老写法"
        },
        {
          'type': "p",
          'text': "老脚本里用反引号 ` 包命令：<code.inline>`date`</code.inline>。它和 $( ) 效果相同，但 $( ) 更清晰、支持嵌套，推荐用 $( )。"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "两种写法对比",
          'code': "echo `date`        # 反引号\necho $(date)        # 现代写法\necho $(echo $(date))  # $( ) 可以嵌套"
        },
        {
          'type': "table",
          'head': [
            "写法",
            "说明"
          ],
          'rows': [
            [
              "$(命令)",
              "现代写法，推荐，可嵌套"
            ],
            [
              "`命令`",
              "反引号老写法，不可嵌套"
            ]
          ]
        },
        {
          'type': "danger",
          'title': "反引号和单引号别搞混",
          'text': "反引号是键盘左上角 ~ 键下面的那个符号，不是单引号。反引号是命令替换，单引号是原样输出，混用会出错。"
        },
        {
          'type': "tip",
          'title': "命令替换 vs 管道",
          'text': "管道是「一批数据的传递」，命令替换是「把结果存下来用」。各有各的用途，脚本里常常一起用。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"命令替换 $( ) 与反引号\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"命令替换 $( ) 与反引号\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"命令替换 $( ) 与反引号\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "$(命令) 把命令输出当作值",
            "可用在变量赋值、字符串拼接里",
            "反引号是旧写法，$( ) 可嵌套更清晰",
            "反引号和单引号是不同符号"
          ]
        }
      ],
      'templates': [
        {
          'name': "自动采集信息",
          'code': "user=$(whoami)\nhome=$(echo $HOME)\necho \"我是 $user，家目录在 $home\"\necho \"当前时间：$(date)\"\necho \"我有 $(ls | wc -l) 个文件在 $(pwd)\""
        }
      ]
    },
    {
      'id': "sh-23",
      'title': "参数扩展 ${}（默认值、截取、删除）",
      'summary': "${} 里可以做默认值、截取子串、删除前后缀。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "花括号不只是界定变量名的边界，还能在 ${} 内部做很多字符串操作：给默认值、截取、删除前后缀。这一章学会最常用的几个。"
        },
        {
          'type': "h",
          'text': "默认值：变量为空就用它"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "${var:-默认值}",
          'code': "echo \"今天是 ${day:-周一}\"\nday=\"周五\"\necho \"今天是 $day\"\nname=\"\"\necho \"你好，${name:-朋友}\""
        },
        {
          'type': "p",
          'text': "<code.inline>${var:-默认值}</code.inline>：var 未定义或为空时，用默认值，但 var 本身不变。这常用于给脚本参数提供默认值。"
        },
        {
          'type': "h",
          'text': "赋值默认值"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "${var:=默认值}",
          'code': "unset dir\necho ${dir:=\"/tmp\"}\necho \"dir 现在是 $dir\"   # 被赋上了"
        },
        {
          'type': "h",
          'text': "截取子串"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "截取",
          'code': "s=\"HelloWorld\"\necho \"${s:0:5}\"   # Hello\necho \"${s:5}\"     # World\necho \"${s: -3}\"    # rld 取末尾 3 个"
        },
        {
          'type': "h",
          'text': "删除前后缀"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "删除前缀和后缀",
          'code': "file=\"photo.jpg\"\necho \"${file%.jpg}\"      # photo 删后缀\necho \"${file#photo}\"     # .jpg 删前缀\npath=\"/a/b/c.txt\"\necho \"${path##*/}\"       # c.txt 删到只剩文件名\necho \"${path%/*}\"        # /a/b 删掉最后一段"
        },
        {
          'type': "table",
          'head': [
            "写法",
            "作用"
          ],
          'rows': [
            [
              "${var:-默认}",
              "为空时用默认值（不改变 var）"
            ],
            [
              "${var:=默认}",
              "为空时赋值默认值（改变 var）"
            ],
            [
              "${s:start:len}",
              "截取子串"
            ],
            [
              "${s: -n}",
              "取末尾 n 个字符"
            ],
            [
              "${var#前/##前}",
              "删除最短/最长前缀"
            ],
            [
              "${var%后/%%后}",
              "删除最短/最长后缀"
            ]
          ]
        },
        {
          'type': "tip",
          'title': "最常用的是 - 和 截取",
          'text': "给脚本参数设默认值用 ${1:-默认}，取文件名用 ${path##*/}，这两个是实战高频用法。"
        },
        {
          'type': "warn",
          'title': "负数的取末尾要小心",
          'text': "<code.inline>${s: -3}</code.inline> 里减号前要留空格（或写 <code.inline>${s:(-3)}</code.inline>），否则会被当成「从位置 0 减去 3」，结果不同。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"参数扩展 ${}（默认值、截取、删除）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"参数扩展 ${}（默认值、截取、删除）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"参数扩展 ${}（默认值、截取、删除）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "${var:-默认} 为空时用默认值",
            "${s:0:5} 截取子串",
            "${path##*/} 取文件名，${path%/*} 取目录",
            "${var#前} ${var%后} 删除前后缀",
            "取末尾 ${s: -3} 减号前要空格"
          ]
        }
      ],
      'templates': [
        {
          'name': "文件路径处理",
          'code': "f=\"/home/xiaoming/docs/report.pdf\"\necho \"文件名: ${f##*/}\"\necho \"目录: ${f%/*}\"\necho \"去掉扩展名: ${f%.pdf}\"\necho \"默认值: ${BACKUP_DIR:-/backup}\""
        }
      ]
    },
    {
      'id': "sh-24",
      'title': "条件判断 if、test、[]（注意空格！）",
      'summary': "if 条件判断，[ ] 里外都要留空格，这是最大的坑。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "脚本的「智能」来自条件判断。这一章学习 if 语句和 test 命令，并重点讲新手最常踩的空格坑。"
        },
        {
          'type': "h",
          'text': "if 的基本结构"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "if 结构",
          'code': "if [ \"$USER\" = \"root\" ]; then\n  echo \"你是管理员\"\nelse\n  echo \"你是普通用户 $USER\"\nfi"
        },
        {
          'type': "p",
          'text': "结构是 if 条件; then 语句 else 语句 fi。fi 是 if 倒过来写，表示结束。分号或换行表示 then 前面语句结束。"
        },
        {
          'type': "danger",
          'title': "最大坑：[ 两侧必须有空格",
          'text': "<code.inline>[ \"$USER\" = \"root\" ]</code.inline> 中，[ 的右边、] 的左边、= 的两边都必须有空格。写成 <code.inline>[\"$USER\"=root]</code.inline> 会直接报错。因为 [ 其实是一个命令，参数之间要用空格分隔。"
        },
        {
          'type': "h",
          'text': "test 是 [ 的另一种写法"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "test 与 [ 等价",
          'code': "if test \"$a\" = \"x\"; then echo \"a是x\"; fi\nif [ \"$a\" = \"x\" ]; then echo \"a是x\"; fi\nif [[ \"$a\" = \"x\" ]]; then echo \"a是x\"; fi"
        },
        {
          'type': "p",
          'text': "<code.inline>[ ]</code.inline> 等价于 <code.inline>test</code.inline> 命令。<code.inline>[[ ]]</code.inline> 是 bash 增强版，支持更丰富的语法（正则匹配、&& ||），写脚本时更推荐。"
        },
        {
          'type': "h",
          'text': "elif：多分支"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "多分支",
          'code': "score=85\nif [ \"$score\" -ge 90 ]; then\n  echo \"优秀\"\nelif [ \"$score\" -ge 60 ]; then\n  echo \"及格\"\nelse\n  echo \"不及格\"\nfi"
        },
        {
          'type': "h",
          'text': "判断命令是否成功"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "用命令作为条件",
          'code': "if grep -q \"root\" /etc/passwd; then\n  echo \"找到了 root\"\nfi"
        },
        {
          'type': "table",
          'head': [
            "写法",
            "说明"
          ],
          'rows': [
            [
              "if 条件; then",
              "条件成立则执行"
            ],
            [
              "elif 条件; then",
              "再判断下一个条件"
            ],
            [
              "else",
              "都不成立时执行"
            ],
            [
              "fi",
              "结束 if"
            ],
            [
              "[ 条件 ]",
              "test 的另一种写法"
            ],
            [
              "[[ 条件 ]]",
              "bash 增强版，推荐"
            ]
          ]
        },
        {
          'type': "tip",
          'title': "用 -q 安静模式",
          'text': "grep -q 不输出匹配内容，只返回成功/失败，非常适合作为 if 的条件。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"条件判断 if、test、[]（注意空格！）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"条件判断 if、test、[]（注意空格！）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"条件判断 if、test、[]（注意空格！）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "if/then/elif/else/fi 构成条件判断",
            "[ 和 ] 两侧必须有空格",
            "[[ ]] 是 bash 增强版，写脚本推荐",
            "可以用命令返回值作为条件",
            "fi 是 if 的结束标记"
          ]
        }
      ],
      'templates': [
        {
          'name': "判断是几",
          'code': "n=7\nif [ \"$n\" -gt 10 ]; then\n  echo \"大于 10\"\nelif [ \"$n\" -eq 7 ]; then\n  echo \"正好是 7\"\nelse\n  echo \"小于 10 但不是 7\"\nfi"
        }
      ]
    },
    {
      'id': "sh-25",
      'title': "数值比较与字符串比较（-eq、== 等）",
      'summary': "数字用 -eq/-lt，字符串用 =/!=，别混用。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "条件判断里最常见的是比较：比数字大小、比字符串是否相等。Shell 里数值比较和字符串比较用的是两套完全不同的运算符，这是新手最容易踩的坑之一。"
        },
        {
          'type': "h",
          'text': "数值比较"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "数值比较运算符",
          'code': "a=10\nb=20\n[ \"$a\" -lt \"$b\" ] && echo \"a 小于 b\"\n[ \"$a\" -gt 5 ] && echo \"a 大于 5\"\n[ \"$a\" -eq 10 ] && echo \"a 等于 10\"\n[ \"$a\" -ne 99 ] && echo \"a 不等于 99\""
        },
        {
          'type': "table",
          'head': [
            "数值运算符",
            "含义"
          ],
          'rows': [
            [
              "-eq",
              "等于（equal）"
            ],
            [
              "-ne",
              "不等于"
            ],
            [
              "-gt",
              "大于（greater than）"
            ],
            [
              "-lt",
              "小于（less than）"
            ],
            [
              "-ge",
              "大于等于"
            ],
            [
              "-le",
              "小于等于"
            ]
          ]
        },
        {
          'type': "h",
          'text': "字符串比较"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "字符串比较运算符",
          'code': "s=\"hello\"\n[ \"$s\" = \"hello\" ] && echo \"相等\"\n[ \"$s\" != \"world\" ] && echo \"不相等\"\n[ -z \"$s\" ] && echo \"字符串为空\"\n[ -n \"$s\" ] && echo \"字符串非空\""
        },
        {
          'type': "table",
          'head': [
            "字符串运算符",
            "含义"
          ],
          'rows': [
            [
              "=",
              "等于"
            ],
            [
              "!=",
              "不等于"
            ],
            [
              "< 和 >",
              "按字典序比较（[[ ]] 里）"
            ],
            [
              "-z",
              "长度为 0（空）"
            ],
            [
              "-n",
              "长度非 0（非空）"
            ]
          ]
        },
        {
          'type': "danger",
          'title': "-eq 和 = 不能混用",
          'text': "比数字必须用 -eq/-gt 等，比字符串必须用 =/!=。写成 <code.inline>[ \"10\" -gt \"9\" ]</code.inline> 没问题（数字按数值比），但写成 <code.inline>[ \"10\" = 10 ]</code.inline> 会因类型不匹配报错或得到错误结果。字符串比较时用 <code.inline>[[ 10 < 9 ]]</code.inline> 是按字典序比。"
        },
        {
          'type': "h",
          'text': "变量记得加引号"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "空变量陷阱",
          'code': "empty=\"\"\n[ -n \"$empty\" ] && echo \"非空\" || echo \"是空的（加了引号才安全）\"\n# 不加引号：[ -n $empty ] 会被展开成 [ -n ] 恒为真"
        },
        {
          'type': "tip",
          'title': "用 [[ ]] 更省心",
          'text': "在 [[ ]] 里，即使变量为空也不会因为展开产生语法错误，还支持 && || 直接写。<code.inline>[[ $a -gt 1 && $b -lt 2 ]]</code.inline> 一行搞定。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"数值比较与字符串比较（-eq、== 等）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"数值比较与字符串比较（-eq、== 等）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"数值比较与字符串比较（-eq、== 等）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "数字比较用 -eq/-ne/-gt/-lt/-ge/-le",
            "字符串比较用 = 和 !=",
            "-z 判空、-n 判非空",
            "变量在 [ ] 里要加引号防空值",
            "[[ ]] 更强大更安全"
          ]
        }
      ],
      'templates': [
        {
          'name': "比较小练习",
          'code': "a=5\nb=5\nif [ \"$a\" -eq \"$b\" ]; then echo \"数字相等\"; fi\ns1=\"hi\"\ns2=\"hi\"\nif [ \"$s1\" = \"$s2\" ]; then echo \"字符串相等\"; fi\nif [ -z \"\" ]; then echo \"空字符串判断成功\"; fi"
        }
      ]
    },
    {
      'id': "sh-26",
      'title': "文件测试（-f、-d、-e、-x）",
      'summary': "判断文件存不存在、是文件还是目录、能不能执行。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "脚本里经常要问：「这个文件存在吗？它是目录吗？我有权限执行吗？」文件测试运算符就是回答这些问题的。"
        },
        {
          'type': "h",
          'text': "最常用的文件测试"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "文件测试示例",
          'code': "[ -e /etc/passwd ] && echo \"存在\"\n[ -f /etc/passwd ] && echo \"是普通文件\"\n[ -d /etc ] && echo \"是目录\"\n[ -x /bin/ls ] && echo \"可以执行\"\n[ -r /etc/passwd ] && echo \"可读\"\n[ -w /tmp ] && echo \"可写\""
        },
        {
          'type': "table",
          'head': [
            "运算符",
            "含义"
          ],
          'rows': [
            [
              "-e",
              "文件存在（存在即可）"
            ],
            [
              "-f",
              "是普通文件"
            ],
            [
              "-d",
              "是目录"
            ],
            [
              "-r",
              "可读"
            ],
            [
              "-w",
              "可写"
            ],
            [
              "-x",
              "可执行"
            ],
            [
              "-s",
              "文件存在且非空"
            ],
            [
              "-L",
              "是符号链接"
            ]
          ]
        },
        {
          'type': "h",
          'text': "实战：检查文件再处理"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "存在才处理",
          'code': "if [ -f \"config.ini\" ]; then\n  echo \"读取配置 config.ini\"\nelse\n  echo \"config.ini 不存在，创建默认配置\"\nfi"
        },
        {
          'type': "h",
          'text': "判断可执行再运行"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "判断脚本可执行",
          'code': "if [ -x \"./app\" ]; then\n  echo \"运行 ./app\"\n  ./app\nelse\n  echo \"./app 不可执行，先 chmod +x\"\nfi"
        },
        {
          'type': "h",
          'text': "与条件运算符结合"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "&& 与 ||",
          'code': "[ -d /var/log ] && echo \"日志目录在\" || echo \"没有日志目录\"\n[ -f a.txt ] && [ -f b.txt ] && echo \"两个文件都在\""
        },
        {
          'type': "tip",
          'title': "现代写法 [[ -f ]]",
          'text': "同样推荐在 [[ ]] 里写文件测试，比如 <code.inline>[[ -f $file ]]</code.inline>，语法更宽容。"
        },
        {
          'type': "warn",
          'title': "-e 和 -f 别混",
          'text': "-e 只问「存不存在」；-f 更严格，要求「是普通文件」。目录是 -d 不是 -f。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"文件测试（-f、-d、-e、-x）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"文件测试（-f、-d、-e、-x）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"文件测试（-f、-d、-e、-x）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "-e 存在、-f 普通文件、-d 目录",
            "-r/-w/-x 判断读、写、执行权限",
            "-s 判断非空文件",
            "文件测试常作为 if 的条件",
            "配合 && 和 || 可以写紧凑逻辑"
          ]
        }
      ],
      'templates': [
        {
          'name': "检查配置与目录",
          'code': "cfg=\"my.conf\"\nif [ -f \"$cfg\" ]; then\n  echo \"$cfg 存在\"\nelse\n  echo \"$cfg 不存在，正在创建\"\n  touch \"$cfg\"\nfi\n[ -d /tmp ] && echo \"/tmp 是目录\""
        }
      ]
    },
    {
      'id': "sh-27",
      'title': "case 分支语句（多选一）",
      'summary': "case 按值匹配多个分支，比一堆 elif 更清爽。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "当你要按一个变量的值走不同分支（比如用户输入 1/2/3 分别做不同的事），用一堆 elif 会很啰嗦。case 语句就是为「多选一」设计的。"
        },
        {
          'type': "h",
          'text': "case 的基本结构"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "case 结构",
          'code': "read -p \"输入一个数字(1-3): \" n\ncase $n in\n  1) echo \"你选了 1\" ;;\n  2) echo \"你选了 2\" ;;\n  3) echo \"你选了 3\" ;;\n  *) echo \"输入无效\" ;;\nesac"
        },
        {
          'type': "p",
          'text': "结构是 case 变量 in 各分支 esac。每个分支写「值) 语句」用两个分号 ;; 结尾；* 是通配分支，匹配所有没被前面接住的情况。"
        },
        {
          'type': "h",
          'text': "分支可以用通配符和组合"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "组合与范围",
          'code': "color=\"red\"\ncase $color in\n  red|yellow|blue) echo \"这是个基本色\" ;;\n  gr*|bl*) echo \"以 gr 或 bl 开头\" ;;\n  [a-f]) echo \"单个字母 a-f\" ;;\n  *) echo \"其他颜色\" ;;\nesac"
        },
        {
          'type': "h",
          'text': "判断系统平台"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "实战：判断操作系统",
          'code': "os=$(uname -s)\ncase \"$os\" in\n  Linux) echo \"你是 Linux\" ;;\n  Darwin) echo \"你是 macOS\" ;;\n  MINGW*|MSYS*) echo \"你是 Windows 的 Git Bash\" ;;\n  *) echo \"未知系统: $os\" ;;\nesac"
        },
        {
          'type': "table",
          'head': [
            "写法",
            "含义"
          ],
          'rows': [
            [
              "值)",
              "匹配该值的分支"
            ],
            [
              "值1|值2)",
              "匹配其中任一个"
            ],
            [
              "通配符)",
              "支持 * ? [..] 等通配"
            ],
            [
              "*)",
              "默认分支，其余都走这"
            ],
            [
              ";;",
              "结束当前分支"
            ],
            [
              "esac",
              "case 倒写，结束语句"
            ]
          ]
        },
        {
          'type': "tip",
          'title': "case 比 elif 更清晰",
          'text': "三分支以上用 case 会让脚本更容易读。case 也常和菜单（第 70 章）配合。"
        },
        {
          'type': "warn",
          'title': "别忘 ;; 和 esac",
          'text': "每个分支末尾必须有 <code.inline>;;</code.inline>，整个 case 必须以 <code.inline>esac</code.inline> 结束，漏了会报语法错误。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"case 分支语句（多选一）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"case 分支语句（多选一）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"case 分支语句（多选一）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "case 变量 in ... esac 是多选一",
            "分支写法 值) 语句 ;;",
            "* 是默认分支",
            "支持 | 组合多个值、通配符匹配",
            "适合做菜单和按值分流"
          ]
        }
      ],
      'templates': [
        {
          'name': "星期的判断",
          'code': "day=\"mon\"\ncase $day in\n  mon|tue|wed|thu|fri) echo \"工作日\" ;;\n  sat|sun) echo \"周末\" ;;\n  *) echo \"非法输入\" ;;\nesac"
        }
      ]
    },
    {
      'id': "sh-28",
      'title': "for 循环（把一件事重复做 N 次）",
      'summary': "for 遍历列表或数字范围，批量操作的发动机。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "循环让脚本「重复做某事」，是自动化的发动机。for 循环用于「遍历一个列表，对每个元素做一遍」。"
        },
        {
          'type': "h",
          'text': "遍历一组词"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "遍历列表",
          'code': "for fruit in 苹果 香蕉 橙子; do\n  echo \"我喜欢 $fruit\"\ndone"
        },
        {
          'type': "h",
          'text': "遍历数字范围"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "1 到 5",
          'code': "for i in 1 2 3 4 5; do\n  echo \"第 $i 次\"\ndone\n\nfor i in {1..5}; do\n  echo \"第 $i 次（花括号生成）\"\ndone"
        },
        {
          'type': "h",
          'text': "遍历文件"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "处理一批文件",
          'code': "for f in *.txt; do\n  echo \"处理文件 $f\"\n  wc -l \"$f\"\ndone"
        },
        {
          'type': "p",
          'text': "循环体是 do ... done。in 后面的列表可以是显式写的词、花括号生成的数字范围，也可以是被通配符展开的文件名。"
        },
        {
          'type': "h",
          'text': "C 风格 for（进阶一点）"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "带步长的循环",
          'code': "for ((i=1; i<=10; i+=2)); do\n  echo \"奇数次: $i\"\ndone"
        },
        {
          'type': "table",
          'head': [
            "写法",
            "说明"
          ],
          'rows': [
            [
              "for 变量 in 列表",
              "遍历列表，最常用"
            ],
            [
              "for i in {1..10}",
              "生成 1 到 10 的数字"
            ],
            [
              "for 变量 in *.txt",
              "遍历通配符匹配的文件"
            ],
            [
              "for ((i=1;i<=10;i++))",
              "C 风格，可控制步长"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "文件名带空格会拆开",
          'text': "<code.inline>for f in *.txt</code.inline> 如果文件名里有空格（如 my file.txt），会被拆成两个词。稳妥写法是对 $f 加引号 <code.inline>\"$f\"</code.inline>，或用 <code.inline>find ... -print0</code.inline> 配合（第 49、58 章讲）。"
        },
        {
          'type': "tip",
          'title': "文件多时慎用 for",
          'text': "一个目录里有上万个文件时，用通配符的 for 可能因为参数太长失败，此时改用 while + find 或 xargs 更稳。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"for 循环（把一件事重复做 N 次）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"for 循环（把一件事重复做 N 次）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"for 循环（把一件事重复做 N 次）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "for 变量 in 列表; do ... done 遍历",
            "{1..10} 生成数字序列",
            "通配符匹配的文件可以直接遍历",
            "循环体里的变量要加引号防空格拆词",
            "C 风格 for ((...)) 支持步长"
          ]
        }
      ],
      'templates': [
        {
          'name': "打印九九乘法表",
          'code': "for i in {1..9}; do\n  for j in {1..9}; do\n    printf \"%dx%d=%-2d \" $i $j $((i*j))\n  done\n  echo\ndone"
        }
      ]
    },
    {
      'id': "sh-29",
      'title': "while 循环（条件成立就一直做）",
      'summary': "while 条件为真就一直循环，适合读文件和等待条件。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "for 循环擅长「数着做」；while 循环擅长「看着做」——只要条件成立就一直执行，适合读文件、轮询、累加等场景。"
        },
        {
          'type': "h",
          'text': "while 的基本结构"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "while 结构",
          'code': "count=1\nwhile [ \"$count\" -le 5 ]; do\n  echo \"第 $count 次\"\n  count=$((count + 1))\ndone"
        },
        {
          'type': "p",
          'text': "结构是 while 条件; do 语句 done。每次循环先判断条件，为真就执行循环体，为假就退出。上面用 count 计数，每轮 +1，到 5 就停。"
        },
        {
          'type': "h",
          'text': "逐行读文件"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "读文件每一行",
          'code': "while read line; do\n  echo \"读到: $line\"\ndone < /etc/hostname"
        },
        {
          'type': "p",
          'text': "<code.inline>while read line; do ... done < 文件</code.inline> 是处理文件的经典写法，read 每读一行，循环体处理一行，读完自动结束。"
        },
        {
          'type': "h",
          'text': "无限循环"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "死循环（Ctrl+C 退出）",
          'code': "while true; do\n  echo \"我在跑 $(date)\"\n  sleep 2\ndone\n# Ctrl+C 强制退出"
        },
        {
          'type': "h",
          'text': "从管道读"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "处理命令输出",
          'code': "ps aux | while read line; do\n  echo \"进程: $(echo $line | awk '{print $11}')\"\ndone | head"
        },
        {
          'type': "table",
          'head': [
            "写法",
            "场景"
          ],
          'rows': [
            [
              "while 条件; do done",
              "条件型循环"
            ],
            [
              "while read line; do done < 文件",
              "逐行读文件"
            ],
            [
              "while true; do done",
              "无限循环，配合 sleep 做监控"
            ],
            [
              "while :; do done",
              ": 等价于 true"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "别忘改循环条件",
          'text': "while 循环体里一定要有「让条件最终变为假」的操作（比如计数 +1），否则会死循环。while true 是故意的死循环，要有退出手段。"
        },
        {
          'type': "tip",
          'title': "read 从标准输入读",
          'text': "while read line 的 read 从标准输入读，默认按换行分隔；读管道、读文件、读键盘都是这个 read，第 45 章详讲。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"while 循环（条件成立就一直做）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"while 循环（条件成立就一直做）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"while 循环（条件成立就一直做）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "while 条件成立就一直循环",
            "while read line; do done < 文件 逐行读文件",
            "while true 无限循环配合 sleep 做监控",
            "循环体要能改变条件否则死循环",
            "Ctrl+C 终止无限循环"
          ]
        }
      ],
      'templates': [
        {
          'name': "倒计时",
          'code': "n=5\nwhile [ \"$n\" -ge 1 ]; do\n  echo \"倒计时: $n\"\n  n=$((n - 1))\n  sleep 1\ndone\necho \"时间到！\""
        }
      ]
    },
    {
      'id': "sh-30",
      'title': "until 循环与循环嵌套",
      'summary': "until 条件为假才继续，循环里还能套循环。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "until 和 while 相反：while 是「条件为真就继续」，until 是「条件为假就继续」。再加上循环嵌套，就能做更多复杂的事。"
        },
        {
          'type': "h",
          'text': "until：直到条件为真才停"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "until 结构",
          'code': "n=1\nuntil [ \"$n\" -gt 3 ]; do\n  echo \"n 现在是 $n\"\n  n=$((n + 1))\ndone\necho \"n 已经大于 3，结束\""
        },
        {
          'type': "p",
          'text': "上面直到 n 大于 3 才停止。很多场景用 while 更自然，until 适合「等到某条件满足」的语义，比如等一个文件出现。"
        },
        {
          'type': "h",
          'text': "循环嵌套"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "嵌套循环",
          'code': "for i in 1 2 3; do\n  for j in A B; do\n    echo \"外层 $i, 内层 $j\"\n  done\ndone"
        },
        {
          'type': "p",
          'text': "外层每跑一轮，内层就完整跑一遍。上面会输出 3×2=6 行。嵌套常用在表格、矩阵、九九乘法表等场景。"
        },
        {
          'type': "h",
          'text': "嵌套循环读文件与过滤"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "实战：多文件逐行处理",
          'code': "for f in *.txt; do\n  echo \"== $f ==\"\n  while read line; do\n    echo \"  $line\"\n  done < \"$f\"\ndone"
        },
        {
          'type': "table",
          'head': [
            "结构",
            "含义"
          ],
          'rows': [
            [
              "while 条件",
              "真则继续，假则停"
            ],
            [
              "until 条件",
              "假则继续，真则停"
            ],
            [
              "for ... for ...",
              "嵌套循环，外层每轮内层跑一遍"
            ],
            [
              "while 套 for 等",
              "可任意组合"
            ]
          ]
        },
        {
          'type': "tip",
          'title': "什么时候用 until",
          'text': "语义上「等到…就停」的场景，比如轮询等一个端口开启、等一个文件生成，用 until 读起来更顺。"
        },
        {
          'type': "warn",
          'title': "嵌套太深难调试",
          'text': "超过两层嵌套尽量拆成函数，否则逻辑混乱、缩进一乱就难排查。后面会学函数。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"until 循环与循环嵌套\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"until 循环与循环嵌套\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"until 循环与循环嵌套\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "until 与 while 相反，假则继续",
            "循环可以嵌套，外层每轮内层跑一遍",
            "嵌套常用来处理多文件多行",
            "嵌套太深建议拆函数"
          ]
        }
      ],
      'templates': [
        {
          'name': "生成小表格",
          'code': "for row in 1 2 3; do\n  for col in x y; do\n    printf \"%s%s \" $row $col\n  done\n  echo\ndone"
        }
      ]
    },
    {
      'id': "sh-31",
      'title': "循环控制 break / continue",
      'summary': "break 跳出循环，continue 跳过本轮，循环的刹车和油门。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "循环有时需要提前收手：break 直接跳出整个循环，continue 跳过本轮剩下的语句、直接进入下一轮。"
        },
        {
          'type': "h",
          'text': "break：跳出循环"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "break 示例",
          'code': "for i in {1..10}; do\n  if [ \"$i\" -eq 5 ]; then\n    echo \"到 5 了，提前结束\"\n    break\n  fi\n  echo \"现在是 $i\"\ndone\necho \"循环结束\""
        },
        {
          'type': "p",
          'text': "上面 i 到 5 时 break 跳出循环，4 以后的输出都不会发生。"
        },
        {
          'type': "h",
          'text': "continue：跳过本轮"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "continue 示例",
          'code': "for i in {1..5}; do\n  if [ $((i % 2)) -eq 0 ]; then\n    continue   # 偶数跳过，不打印\n  fi\n  echo \"奇数: $i\"\ndone"
        },
        {
          'type': "p",
          'text': "continue 不结束循环，只是「跳过本轮剩下的语句」直接进下一轮。上面偶数轮被跳过，只打印奇数。"
        },
        {
          'type': "h",
          'text': "break N：跳出多层循环"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "跳出多层嵌套",
          'code': "for i in {1..3}; do\n  for j in {1..3}; do\n    if [ \"$j\" -eq 2 ]; then\n      echo \"在 内层j=2 跳出所有循环\"\n      break 2\n    fi\n    echo \"i=$i j=$j\"\n  done\ndone"
        },
        {
          'type': "table",
          'head': [
            "语句",
            "作用"
          ],
          'rows': [
            [
              "break",
              "跳出当前循环"
            ],
            [
              "break N",
              "跳出 N 层循环"
            ],
            [
              "continue",
              "跳过本轮，进入下一轮"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "break 和 continue 的位置",
          'text': "它们只对最近的循环起作用（除非 break 带数字）。想提前结束外层循环，在嵌套里要用 break 2。"
        },
        {
          'type': "tip",
          'title': "配合标志变量",
          'text': "想在深层循环里控制外层，除了 break N，也可以用标志变量：发现条件时置 1，外层再判断标志 break。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"循环控制 break / continue\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"循环控制 break / continue\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"循环控制 break / continue\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "break 提前跳出循环",
            "continue 跳过本轮继续下一轮",
            "break 2 跳出两层嵌套循环",
            "continue 常用于过滤条件不满足的情况"
          ]
        }
      ],
      'templates': [
        {
          'name': "找第一个能被3整除的数",
          'code': "for i in {10..20}; do\n  if [ $((i % 3)) -eq 0 ]; then\n    echo \"找到第一个: $i\"\n    break\n  fi\ndone\nfor i in {1..6}; do\n  [ $((i % 2)) -ne 0 ] && continue\n  echo \"偶数: $i\"\ndone"
        }
      ]
    },
    {
      'id': "sh-32",
      'title': "函数定义与调用（把代码打包复用）",
      'summary': "函数把一段逻辑打包，起个名字，随时调用。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "脚本长了之后，重复代码越来越多。函数就是「把一段逻辑打包成一个模块，起个名字，想用就调用」。这是脚本保持整洁的关键。"
        },
        {
          'type': "h",
          'text': "定义与调用"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "最简单的函数",
          'code': "greet() {\n  echo \"你好，世界！\"\n}\n\ngreet\ngreet   # 可以多次调用"
        },
        {
          'type': "p",
          'text': "定义语法是 <code.inline>函数名() { ... }</code.inline>，调用就是直接写函数名。注意调用时后面不要加括号（那是别的语言的写法）。"
        },
        {
          'type': "h",
          'text': "另一种定义方式"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "function 关键字",
          'code': "function info {\n  echo \"文件名: $0\"\n  echo \"进程号: $$\"\n}\ninfo"
        },
        {
          'type': "h",
          'text': "函数放在脚本前部"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "先定义后调用",
          'code': "say_hi() {\n  echo \"Hi, $1\"\n}\n\nsay_hi \"小明\"\nsay_hi \"小红\""
        },
        {
          'type': "p",
          'text': "Shell 是逐行执行的，函数必须先定义再调用（把定义写在脚本开头，调用写在后面）。函数里也可以用 $1、$2 等参数，下一章详讲。"
        },
        {
          'type': "table",
          'head': [
            "写法",
            "说明"
          ],
          'rows': [
            [
              "名字() { ... }",
              "定义函数的两种方式之一"
            ],
            [
              "function 名字 { ... }",
              "另一种定义方式"
            ],
            [
              "名字",
              "调用函数（不加括号）"
            ],
            [
              "return 数字",
              "返回一个退出码（0-255）"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "函数名别和命令冲突",
          'text': "函数名最好别叫 ls、cd 这种系统命令名，否则会遮蔽原命令，导致意外行为。起名尽量具体。"
        },
        {
          'type': "tip",
          'title': "函数的好处",
          'text': "一个功能一个函数、函数短小、名字清晰，脚本就像搭积木。出问题时也能快速定位是哪个函数。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"函数定义与调用（把代码打包复用）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"函数定义与调用（把代码打包复用）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"函数定义与调用（把代码打包复用）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "函数把逻辑打包，名字() { ... } 定义",
            "调用直接写函数名，不加括号",
            "函数要先定义后调用",
            "函数内可用 $1 $2 等参数",
            "函数名别覆盖系统命令"
          ]
        }
      ],
      'templates': [
        {
          'name': "两个小函数",
          'code': "show_date() {\n  echo \"今天是 $(date +%F)\"\n}\nshow_who() {\n  echo \"我是 $(whoami)\"\n}\nshow_date\nshow_who"
        }
      ]
    },
    {
      'id': "sh-33",
      'title': "函数参数与返回值（$?、return）",
      'summary': "函数里用 $1 $2 接参数，return 返回状态码。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "函数不是只会打招呼，它应该能「接收输入、给出结果」。这一章学函数参数和返回值：调用时传参，函数里 $1 $2 接住，return 返回状态。"
        },
        {
          'type': "h",
          'text': "给函数传参"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "函数参数",
          'code': "add() {\n  a=$1\n  b=$2\n  echo \"$a + $b = $((a + b))\"\n}\nadd 3 5\nadd 10 20"
        },
        {
          'type': "p",
          'text': "调用时写在函数名后面的词就是参数，函数内部用 <code.inline>$1</code.inline> <code.inline>$2</code.inline> 依次取第 1 个、第 2 个参数。"
        },
        {
          'type': "h",
          'text': "return：返回状态码"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "return 与 $?",
          'code': "is_even() {\n  if [ $(( $1 % 2 )) -eq 0 ]; then\n    return 0   # 成功\n  else\n    return 1   # 失败\n  fi\n}\n\nis_even 4\necho \"4 是偶数吗? 状态码 $?\"\nis_even 7\necho \"7 是偶数吗? 状态码 $?\""
        },
        {
          'type': "p",
          'text': "return 只能返回 0-255 的整数，约定 0 表示成功、非 0 表示失败。调用后立刻用 <code.inline>$?</code.inline> 取状态码。"
        },
        {
          'type': "h",
          'text': "用 echo 返回字符串"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "函数输出当返回值",
          'code': "get_name() {\n  echo \"小明\"   # echo 的内容会被捕获\n}\nname=$(get_name)\necho \"名字是 $name\""
        },
        {
          'type': "p",
          'text': "想返回字符串，用命令替换 <code.inline>变量=$(函数)</code.inline> 捕获函数 echo 的输出。这是返回「字符串结果」的标准做法。"
        },
        {
          'type': "table",
          'head': [
            "语法",
            "作用"
          ],
          'rows': [
            [
              "$1 $2 ...",
              "函数/脚本的第 1、2 个参数"
            ],
            [
              "return 数字",
              "返回 0-255 状态码"
            ],
            [
              "$?",
              "上一条命令的退出码"
            ],
            [
              "变量=$(函数)",
              "捕获函数输出作为值"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "return 不是返回字符串",
          'text': "return 只返回 0-255 的整数状态码，别用它返回文字。返回文字用 echo + 命令替换。"
        },
        {
          'type': "tip",
          'title': "0 成功非 0 失败",
          'text': "这是 Unix 约定：命令成功返回 0，失败返回非 0。if 判断的就是这个状态码。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"函数参数与返回值（$?、return）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"函数参数与返回值（$?、return）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"函数参数与返回值（$?、return）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "函数内 $1 $2 取调用时的参数",
            "return 返回 0-255 状态码，0 成功",
            "$? 立刻取上一条命令的退出码",
            "返回字符串用 $(函数) 捕获 echo 输出"
          ]
        }
      ],
      'templates': [
        {
          'name': "加减法函数",
          'code': "calc() {\n  echo \"$1 + $2 = $(( $1 + $2 ))\"\n  echo \"$1 - $2 = $(( $1 - $2 ))\"\n}\ncalc 8 3\ncalc 20 7"
        }
      ]
    },
    {
      'id': "sh-34",
      'title': "位置参数 $1 $2 $@ $# $0（脚本怎么接参）",
      'summary': "脚本从命令行接参数：$1..$n、$@、$#、$0 逐个吃透。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "脚本可以像命令一样接收参数，比如 <code.inline>./my.sh a b c</code.inline>。脚本内部用位置参数 $1 $2 $3 依次拿到它们。这一章把位置参数讲透。"
        },
        {
          'type': "h",
          'text': "$1 $2 ... 按位置取"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "位置参数",
          'code': "#!/bin/bash\n# 保存为 args.sh 后执行: ./args.sh 张三 25 上海\necho \"第 1 个参数: $1\"\necho \"第 2 个参数: $2\"\necho \"第 3 个参数: $3\""
        },
        {
          'type': "h",
          'text': "$0：脚本自身的名字"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "脚本名",
          'code': "echo \"脚本名: $0\""
        },
        {
          'type': "h",
          'text': "$#：参数的个数"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "参数个数",
          'code': "echo \"一共传了 $# 个参数\"\nif [ \"$#\" -lt 2 ]; then\n  echo \"至少需要 2 个参数\"\nfi"
        },
        {
          'type': "h",
          'text': "$@ 与 $*：所有参数"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "遍历所有参数",
          'code': "echo \"用 $@ 遍历:\"\nfor arg in \"$@\"; do\n  echo \"  $arg\"\ndone"
        },
        {
          'type': "p",
          'text': "<code.inline>$@</code.inline> 表示所有参数（每个参数保持独立），<code.inline>$*</code.inline> 把所有参数合并成一个字符串。遍历参数时用 <code.inline>\"$@\"</code.inline> 更安全。"
        },
        {
          'type': "table",
          'head': [
            "写法",
            "含义"
          ],
          'rows': [
            [
              "$0",
              "脚本自身的名字"
            ],
            [
              "$1 $2 $3",
              "第 1、2、3 个参数"
            ],
            [
              "$#",
              "参数的总个数"
            ],
            [
              "$@",
              "所有参数（每个独立）"
            ],
            [
              "$*",
              "所有参数（合并成一个字符串）"
            ],
            [
              "$$",
              "当前脚本的进程号"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "$@ 记得加引号",
          'text': "遍历参数要写 <code.inline>for arg in \"$@\"</code.inline>（加引号），否则含空格的参数会被拆开。$@ 和 $* 的区别只有加引号时才显现。"
        },
        {
          'type': "tip",
          'title': "参数太少时的默认值",
          'text': "常用 <code.inline>${1:-默认值}</code.inline> 给缺失的参数兜底，避免脚本因缺少参数而报错。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"位置参数 $1 $2 $@ $# $0（脚本怎么接参）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"位置参数 $1 $2 $@ $# $0（脚本怎么接参）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"位置参数 $1 $2 $@ $# $0（脚本怎么接参）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "$1..$n 按位置取命令行参数",
            "$0 是脚本名，$# 是参数个数",
            "$@ 是所有参数（每个独立），$* 合并成一个",
            "遍历参数用 \"$@\" 防空格拆词",
            "$$ 是脚本进程号"
          ]
        }
      ],
      'templates': [
        {
          'name': "接收参数并统计",
          'code': "echo \"脚本: $0\"\necho \"参数个数: $#\"\nfor arg in \"$@\"; do\n  echo \"参数: $arg\"\ndone\necho \"第一个参数是: ${1:-无}\""
        }
      ]
    },
    {
      'id': "sh-35",
      'title': "shift 与 getopts（高级参数处理）",
      'summary': "shift 消费参数，getopts 解析 -a -b 这类选项。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "有些脚本要处理 -v、-h、-f 文件 这类「选项参数」。这一章学 shift 逐个消费参数，和 getopts 系统解析选项。"
        },
        {
          'type': "h",
          'text': "shift：把参数整体前移"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "shift 示例",
          'code': "echo \"参数: $1 $2 $3\"\nshift\necho \"shift 后: $1 $2\"   # 原来的 $2 $3 顶上来了\nshift\necho \"再 shift: $1\""
        },
        {
          'type': "p",
          'text': "shift 把 $2 变成 $1、$3 变成 $2，依次类推。常用于 while 循环里逐个处理参数。"
        },
        {
          'type': "h",
          'text': "用 while + shift 遍历参数"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "逐个消费参数",
          'code': "while [ \"$#\" -gt 0 ]; do\n  echo \"处理参数: $1\"\n  shift\ndone"
        },
        {
          'type': "h",
          'text': "getopts：解析选项"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "getopts 解析选项",
          'code': "while getopts \"vho:\" opt; do\n  case $opt in\n    v) echo \"开启 verbose\" ;;\n    o) echo \"输出到 $OPTARG\" ;;\n    h) echo \"用法: $0 [-v] [-o 文件]\" ;;\n    *) echo \"未知选项\"; exit 1 ;;\n  esac\ndone"
        },
        {
          'type': "p",
          'text': "getopts 后面跟的字符串定义选项：字母后面带冒号表示「该选项需要一个参数」，参数放在 <code.inline>$OPTARG</code.inline> 里。<code.inline>$OPTIND</code.inline> 是下一个参数的索引。"
        },
        {
          'type': "table",
          'head': [
            "写法",
            "含义"
          ],
          'rows': [
            [
              "shift",
              "参数整体左移一位"
            ],
            [
              "shift N",
              "左移 N 位"
            ],
            [
              "getopts 字符串 变量",
              "解析选项到变量"
            ],
            [
              "字母:",
              "该选项带参数"
            ],
            [
              "$OPTARG",
              "当前选项的参数"
            ],
            [
              "$OPTIND",
              "下一个要处理的位置"
            ]
          ]
        },
        {
          'type': "tip",
          'title': "什么时候用 getopts",
          'text': "只传几个固定位置参数用 $1 $2 就行；要支持 -x 这种选项、还想让用户自由组合顺序，就上 getopts。"
        },
        {
          'type': "warn",
          'title': "getopts 与 getopt 区别",
          'text': "getopts 是 bash 内建的，简单可靠；getopt 是外部命令，支持长选项（--file）但行为更复杂，新手先用 getopts。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"shift 与 getopts（高级参数处理）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"shift 与 getopts（高级参数处理）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"shift 与 getopts（高级参数处理）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "shift 把参数整体前移，可 shift N",
            "while + shift 逐个消费参数",
            "getopts 解析 -a -b 选项，冒号表示带参",
            "$OPTARG 取当前选项的参数",
            "getopts 是内建，getopt 是外部命令"
          ]
        }
      ],
      'templates': [
        {
          'name': "简易参数解析",
          'code': "verbose=0\noutfile=\"\"\nwhile getopts \"vo:\" opt; do\n  case $opt in\n    v) verbose=1 ;;\n    o) outfile=$OPTARG ;;\n  esac\ndone\necho \"verbose=$verbose outfile=$outfile\"\necho \"剩余位置参数: $@\""
        }
      ]
    },
    {
      'id': "sh-36",
      'title': "正则表达式基础（模式匹配的语法）",
      'summary': "元字符、字符类、量词、锚点，正则四板斧。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "正则表达式（regex）是一种描述「文本模式」的语言。grep、sed、awk、vim、几乎所有文本工具都支持它。掌握它，你的文本处理能力会上一个台阶。"
        },
        {
          'type': "h",
          'text': "字面匹配与元字符"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "字面匹配",
          'code': "echo \"apple\" | grep \"ap\"\necho \"apple\" | grep \"le\"\necho \"apple\" | grep \"^ap\"   # ^ 表示行首\necho \"apple\" | grep \"le$\"   # $ 表示行尾"
        },
        {
          'type': "h",
          'text': "点号：匹配任意一个字符"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': ". 匹配任意字符",
          'code': "echo \"cat\" | grep \"c.t\"\necho \"cut\" | grep \"c.t\"\necho \"caat\" | grep \"c.t\"   # 不匹配，. 只占一个位置"
        },
        {
          'type': "h",
          'text': "字符类 []"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "字符类",
          'code': "echo \"cat\" | grep \"c[au]t\"\necho \"cot\" | grep \"c[au]t\"   # 不匹配\necho \"c1t\" | grep \"c[0-9]t\"   # 数字\necho \"cat\" | grep \"c[^0-9]t\"  # ^ 在 [] 内表示取反"
        },
        {
          'type': "h",
          'text': "量词：重复多少次"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "量词",
          'code': "echo \"caaat\" | grep \"ca*t\"   # * 表示 0 次或多次\necho \"ct\" | grep \"ca*t\"       # 也匹配（a 出现 0 次）\necho \"cat\" | grep \"ca?t\"      # ? 表示 0 次或 1 次\necho \"caat\" | grep \"ca\\{2\\}t\"  # 恰好 2 次"
        },
        {
          'type': "table",
          'head': [
            "元字符",
            "含义"
          ],
          'rows': [
            [
              "^",
              "行首"
            ],
            [
              "$",
              "行尾"
            ],
            [
              ".",
              "任意单个字符"
            ],
            [
              "[...]",
              "字符类，匹配其中一个"
            ],
            [
              "[^...]",
              "取反，不匹配其中的字符"
            ],
            [
              "*",
              "前面的字符出现 0 次或多次"
            ],
            [
              "+",
              "前面的字符出现 1 次或多次（扩展正则）"
            ],
            [
              "?",
              "0 次或 1 次（扩展正则）"
            ],
            [
              "\\{n\\}",
              "恰好 n 次（基础正则）"
            ],
            [
              "\\{n,\\}",
              "至少 n 次"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "基础正则与扩展正则",
          'text': "grep 默认是基础正则（BRE），+ ? 需要转义或用 grep -E（扩展正则）。建议直接养成用 grep -E / egrep 的习惯，语法更接近主流。"
        },
        {
          'type': "info",
          'title': "点号真的通配一切吗",
          'text': "在大多数工具里，. 不匹配换行符。并且匹配的是「字符」而非「词」，c.t 只占三个字符位。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"正则表达式基础（模式匹配的语法）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"正则表达式基础（模式匹配的语法）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"正则表达式基础（模式匹配的语法）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "^ 行首、$ 行尾、. 任意单字符",
            "[] 字符类，[^] 取反",
            "* 重复 0+ 次、+ 重复 1+ 次、? 0 或 1 次",
            "grep 默认基础正则，用 -E 启用扩展正则",
            "正则用于匹配文本模式，不是固定字符串"
          ]
        }
      ],
      'templates': [
        {
          'name': "正则探针",
          'code': "echo \"hello123\" | grep -E \"^[a-z]+[0-9]+$\"\necho \"abc\" | grep -E \"^[a-z]+$\"\necho \"123\" | grep -E \"^[0-9]+$\"\necho \"hello\" | grep -E \"^h.*o$\""
        }
      ]
    },
    {
      'id': "sh-37",
      'title': "grep 正则应用（实战搜索）",
      'summary': "用正则做精确搜索：IP、邮箱、注释行、重复词。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "这一章把正则用在 grep 上，做真实场景的搜索。学完你就能从日志、配置文件里精准捞出想要的信息。"
        },
        {
          'type': "h",
          'text': "匹配 IP 地址"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "搜索 IP",
          'code': "grep -E \"[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+\" access.log\ngrep -E \"([0-9]{1,3}\\.){3}[0-9]{1,3}\" access.log"
        },
        {
          'type': "h",
          'text': "匹配邮箱"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "搜索邮箱",
          'code': "grep -E \"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}\" users.txt"
        },
        {
          'type': "h",
          'text': "过滤注释行和空行"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "排除注释",
          'code': "grep -v \"^#\" /etc/ssh/sshd_config\ngrep -v \"^#\" /etc/ssh/sshd_config | grep -v \"^$\"   # 再排除空行"
        },
        {
          'type': "h",
          'text': "搜索时间戳或日志级别"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "搜 ERROR 和日期",
          'code': "grep \"2026-08-28\" app.log\ngrep -E \"ERROR|FATAL\" app.log\ngrep -w \"error\" app.log   # -w 整词匹配"
        },
        {
          'type': "h",
          'text': "统计与上下文"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "统计与上下文",
          'code': "grep -c \"500\" access.log\ngrep -A2 \"panic\" app.log    # 匹配后 2 行\ngrep -B1 \"panic\" app.log    # 匹配前 1 行\ngrep -C2 \"panic\" app.log    # 前后各 2 行"
        },
        {
          'type': "table",
          'head': [
            "grep 选项",
            "作用"
          ],
          'rows': [
            [
              "-E",
              "扩展正则"
            ],
            [
              "-w",
              "整词匹配"
            ],
            [
              "-A n",
              "匹配行之后 n 行"
            ],
            [
              "-B n",
              "匹配行之前 n 行"
            ],
            [
              "-C n",
              "匹配行前后各 n 行"
            ],
            [
              "-o",
              "只输出匹配的部分而非整行"
            ]
          ]
        },
        {
          'type': "tip",
          'title': "-o 只打印匹配片段",
          'text': "<code.inline>grep -oE \"[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+\" log</code.inline> 会只输出每个 IP，方便后续排序统计。"
        },
        {
          'type': "warn",
          'title': "正则的转义点号",
          'text': "匹配字面点号要写 <code.inline>\\.</code.inline>，因为裸 . 匹配任意字符。搜 1.2.3.4 时不转义会匹配出很多无关行。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"grep 正则应用（实战搜索）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"grep 正则应用（实战搜索）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"grep 正则应用（实战搜索）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "IP 正则 ([0-9]{1,3}\\.){3}[0-9]{1,3}",
            "-v \"^#\" 过滤注释，\"^$\" 过滤空行",
            "-w 整词、-A/-B/-C 上下文、-o 只出匹配部分",
            "grep -E 启用扩展正则更顺手"
          ]
        }
      ],
      'templates': [
        {
          'name': "实战搜索命令",
          'code': "echo \"IP: 192.168.1.10\" | grep -oE \"([0-9]{1,3}\\.){3}[0-9]{1,3}\"\necho \"mail: a@b.com\" | grep -oE \"[a-z0-9.]+@[a-z0-9.]+\\.[a-z]{2,}\"\necho \"2026-08-28 ERROR\" | grep -E \"ERROR|WARN\""
        }
      ]
    },
    {
      'id': "sh-38",
      'title': "sed 正则与替换（进阶编辑）",
      'summary': "sed 正则匹配行、分组捕获替换、行范围编辑。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "sed 的 s 命令支持正则，还能用「分组捕获」把匹配的部分重新组合。这一章把 sed 的替换能力拉满。"
        },
        {
          'type': "h",
          'text': "正则替换"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "正则替换",
          'code': "echo 'user: root' | sed 's/[a-z]*$/admin/'\necho 'hello' | sed 's/^h/H/'"
        },
        {
          'type': "h",
          'text': "分组捕获与替换"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "用 \\1 \\2 引用分组",
          'code': "echo '2026-08-28' | sed 's/\\([0-9][0-9][0-9][0-9]\\)-/\\1年-/'\necho 'abc123' | sed 's/\\([a-z]*\\)\\([0-9]*\\)/\\2-\\1/'"
        },
        {
          'type': "p",
          'text': "用圆括号（基础正则里要转义成 \\( \\)）把部分内容圈成「组」，替换串里用 \\1、\\2 引用第 1、第 2 组。"
        },
        {
          'type': "h",
          'text': "按行范围操作"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "行范围替换",
          'code': "sed '10,20s/foo/bar/g' file.txt    # 只改 10-20 行\nsed '/^#/d' config.txt               # 删除注释行\nsed '/ERROR/,+3p' app.log            # 匹配行往后 3 行"
        },
        {
          'type': "h",
          'text': "输出匹配行的行号"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "带行号输出",
          'code': "sed -n '/root/p' /etc/passwd\nsed -n '/root/=' /etc/passwd"
        },
        {
          'type': "table",
          'head': [
            "sed 语法",
            "含义"
          ],
          'rows': [
            [
              "s/正则/新串/g",
              "正则替换全部匹配"
            ],
            [
              "\\( \\) 与 \\1",
              "分组捕获与引用"
            ],
            [
              "/正则/ d",
              "删除匹配行"
            ],
            [
              "地址范围",
              "10,20s/.../ 只处理 10-20 行"
            ],
            [
              "-n 与 p",
              "只打印匹配行"
            ]
          ]
        },
        {
          'type': "danger",
          'title': "基础正则里括号要转义",
          'text': "sed 默认用基础正则，( ) 和 + ? 都要加反斜杠才能当特殊符号用。嫌麻烦可用 <code.inline>sed -E</code.inline> 启用扩展正则，括号就不用转义了。"
        },
        {
          'type': "tip",
          'title': "更省心的 -E",
          'text': "现代 sed（GNU、macOS 也支持）都提供 -E 选项，推荐写 <code.inline>sed -E 's/(...)/(...)/'</code.inline>，分组不再需要转义。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"sed 正则与替换（进阶编辑）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"sed 正则与替换（进阶编辑）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"sed 正则与替换（进阶编辑）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "sed s/正则/替换/g 用正则替换",
            "分组 \\( \\) 与 \\1 \\2 引用",
            "-E 启用扩展正则，括号免转义",
            "可用行范围或正则做地址限制",
            "-n p 组合只输出匹配行"
          ]
        }
      ],
      'templates': [
        {
          'name': "日期格式转换",
          'code': "echo '2026-08-28' | sed -E 's/([0-9]{4})-([0-9]{2})-([0-9]{2})/\\3-\\2-\\1/'\necho 'hello' | sed -E 's/(hello)/HI \\1/'\necho 'a,b,c' | sed -E 's/,/ /g'"
        }
      ]
    },
    {
      'id': "sh-39",
      'title': "awk 正则与字段处理（进阶）",
      'summary': "awk 正则匹配行、统计求和、格式化输出、BEGIN/END。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "awk 不仅会取列，还能做统计、按条件处理、格式化输出。这一章把 awk 当成一门小语言来用。"
        },
        {
          'type': "h",
          'text': "正则匹配行"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "awk 正则",
          'code': "awk '/^root/' /etc/passwd\nawk '/[0-9]{3}/' /etc/passwd\nawk '$1 ~ /^a/' list.txt   # ~ 表示匹配"
        },
        {
          'type': "h",
          'text': "BEGIN 与 END"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "首尾动作",
          'code': "awk 'BEGIN {print \"开始处理\"} {print $1} END {print \"处理完成\"}' /etc/passwd"
        },
        {
          'type': "p",
          'text': "BEGIN 段在读取文件前执行一次（常用于初始化），END 段在全部处理完后执行一次（常用于汇总）。"
        },
        {
          'type': "h",
          'text': "统计求和"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "累加求和",
          'code': "echo -e '销量:10\\n销量:20\\n销量:30' | awk -F: '{sum += $2} END {print \"总销量: \" sum}'"
        },
        {
          'type': "h",
          'text': "格式化输出 printf"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "printf 格式化",
          'code': "awk '{printf \"%s 的用户，UID=%d\\n\", $1, $3}' FS=: /etc/passwd"
        },
        {
          'type': "h",
          'text': "字段默认值 $NF"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "取最后一列",
          'code': "awk '{print $NF}' words.txt\nawk '{print $(NF-1)}' words.txt   # 倒数第二列"
        },
        {
          'type': "table",
          'head': [
            "awk 语法",
            "含义"
          ],
          'rows': [
            [
              "/正则/",
              "匹配该正则的行"
            ],
            [
              "$1 ~ /正则/",
              "某字段匹配正则"
            ],
            [
              "BEGIN {...}",
              "读文件前执行一次"
            ],
            [
              "END {...}",
              "全部处理完后执行一次"
            ],
            [
              "sum += $2",
              "累加"
            ],
            [
              "printf 格式",
              "格式化输出"
            ],
            [
              "$NF",
              "最后一个字段"
            ]
          ]
        },
        {
          'type': "tip",
          'title': "管道生成数据给 awk",
          'text': "awk 常配合其他命令：<code.inline>ls -l | awk '{sum += $5} END {print sum}'</code.inline> 可以统计目录总大小。"
        },
        {
          'type': "warn",
          'title': "单引号内不能再有单引号",
          'text': "awk 程序整体用单引号包裹，程序里想用单引号会很麻烦。尽量用双引号包裹 awk 内部的字符串。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"awk 正则与字段处理（进阶）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"awk 正则与字段处理（进阶）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"awk 正则与字段处理（进阶）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "awk /正则/ 匹配行，$1 ~ 匹配字段",
            "BEGIN 预处理、END 汇总",
            "sum += $x 累加做统计",
            "printf 格式化输出",
            "$NF 取最后一列"
          ]
        }
      ],
      'templates': [
        {
          'name': "awk 统计小实验",
          'code': "echo -e 'a:1\\nb:2\\nc:3' | awk -F: '{print $1\" = \"$2}'\necho -e '1\\n2\\n3' | awk '{s+=$1} END {print \"sum=\" s}'\necho 'hello world' | awk '{print $NF}'"
        }
      ]
    },
    {
      'id': "sh-40",
      'title': "调试技巧（set -x、set -e、bash -x）",
      'summary': "脚本出错了怎么办：set -x 看每一步、bash -x 启动调试。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "脚本报错时最痛苦的是「不知道哪一步出问题」。这一章教你几个调试神器：set -x 逐步打印、set -e 出错即停、bash -x 启动脚本时开启跟踪。"
        },
        {
          'type': "h",
          'text': "set -x：跟踪每一步"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "set -x 打开跟踪",
          'code': "set -x\na=10\nb=20\nc=$((a + b))\necho \"结果是 $c\"\nset +x   # 关闭跟踪"
        },
        {
          'type': "p",
          'text': "加了 set -x 后，脚本会打印每一条执行的命令（前面带 + 号），以及变量展开后的样子，一眼就能看出哪步出了问题。"
        },
        {
          'type': "h",
          'text': "set -e：出错立刻退出"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "set -e 出错即停",
          'code': "set -e\nls /nonexistent   # 这行会失败\necho \"这一行不会执行\"   # 因为 set -e 已让脚本退出"
        },
        {
          'type': "p",
          'text': "set -e 让脚本在遇到第一个失败的命令时立刻退出，避免「带着错误继续跑」造成更大损失。生产脚本建议开启。"
        },
        {
          'type': "h",
          'text': "bash -x：运行时调试"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "不修改脚本也能调试",
          'code': "bash -x my_script.sh\nbash -n my_script.sh   # 只检查语法不执行"
        },
        {
          'type': "p",
          'text': "<code.inline>bash -x 脚本</code.inline> 等于全程开启 set -x，不用改脚本内容。<code.inline>bash -n 脚本</code.inline> 只做语法检查，不真的运行，适合快速找语法错。"
        },
        {
          'type': "h",
          'text': "局部调试"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "函数内部调试",
          'code': "myfunc() {\n  set -x\n  echo \"调试: 参数是 $1\"\n  set +x\n}\nmyfunc \"测试\""
        },
        {
          'type': "table",
          'head': [
            "调试手段",
            "作用"
          ],
          'rows': [
            [
              "set -x / set +x",
              "打开/关闭命令跟踪"
            ],
            [
              "set -e",
              "出错立刻退出脚本"
            ],
            [
              "bash -x 脚本",
              "运行脚本并全程跟踪"
            ],
            [
              "bash -n 脚本",
              "只查语法不运行"
            ],
            [
              "bash -v 脚本",
              "打印读到的每一行"
            ]
          ]
        },
        {
          'type': "tip",
          'title': "组合使用更省心",
          'text': "开发阶段常用 <code.inline>bash -x</code.inline> 定位；写正式脚本时在开头加 <code.inline>set -euo pipefail</code.inline>（第 73 章详解）保证健壮。"
        },
        {
          'type': "warn",
          'title': "set -e 的例外",
          'text': "在 if 条件、&& || 左侧、管道非末尾等「被当作判断」的场合，命令失败不会触发 set -e，这是设计如此，别被误导。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"调试技巧（set -x、set -e、bash -x）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"调试技巧（set -x、set -e、bash -x）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"调试技巧（set -x、set -e、bash -x）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "set -x 打印每步命令方便跟踪",
            "set -e 出错立即退出脚本",
            "bash -x 脚本 不改代码就能全程调试",
            "bash -n 脚本 快速查语法",
            "set -e 在条件判断处不生效"
          ]
        }
      ],
      'templates': [
        {
          'name': "调试一个小脚本",
          'code': "set -x\nfor i in 1 2 3; do\n  echo \"第 $i 次\"\ndone\nset +x\necho \"调试结束\""
        }
      ]
    },
    {
      'id': "sh-41",
      'title': "数组与关联数组（一个变量装一堆值）",
      'summary': "数组下标从 0 开始，关联数组用名字当索引，让脚本能处理一组数据。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "到目前为止，一个变量只装一个值。这一章学数组：一个变量可以装一列值，就像抽屉柜。Bash 数组的下标从 0 开始编号，关联数组则用文字名字当索引。"
        },
        {
          'type': "h",
          'text': "定义数组"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "几种定义方式",
          'code': "names=(\"小明\" \"小红\" \"小刚\")\nfruits=(apple banana orange)\nnums=(1 2 3 4 5)"
        },
        {
          'type': "h",
          'text': "访问元素"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "取数组里的值",
          'code': "names=(\"小明\" \"小红\" \"小刚\")\necho \"第一个人: ${names[0]}\"\necho \"所有人: ${names[@]}\"\necho \"一共几个人: ${#names[@]}\""
        },
        {
          'type': "p",
          'text': "访问数组元素必须写成 <code.inline>${数组[下标]}</code.inline> 的完整花括号形式。<code.inline>${names[@]}</code.inline> 表示全部元素，<code.inline>${#names[@]}</code.inline> 是元素个数。"
        },
        {
          'type': "h",
          'text': "遍历数组"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "for 循环遍历",
          'code': "names=(\"小明\" \"小红\" \"小刚\")\nfor name in \"${names[@]}\"; do\n  echo \"你好，$name\"\ndone"
        },
        {
          'type': "h",
          'text': "追加与删除元素"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "动态增删",
          'code': "nums=(1 2 3)\nnums+=(4 5)          # 末尾追加\necho \"${nums[@]}\"   # 1 2 3 4 5\nunset \"nums[1]\"     # 删除下标 1（第二个）\necho \"${nums[@]}\"   # 1 3 4 5"
        },
        {
          'type': "h",
          'text': "关联数组（用名字当下标）"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "declare -A 声明关联数组",
          'code': "declare -A score\nscore[小明]=98\nscore[小红]=87\necho \"小明的分数: ${score[小明]}\"\nfor name in \"${!score[@]}\"; do\n  echo \"$name 得了 ${score[$name]} 分\"\ndone"
        },
        {
          'type': "table",
          'head': [
            "写法",
            "含义"
          ],
          'rows': [
            [
              "${a[0]}",
              "第 0 个元素"
            ],
            [
              "${a[@]}",
              "所有元素"
            ],
            [
              "${#a[@]}",
              "元素个数"
            ],
            [
              "a+=(x y)",
              "末尾追加"
            ],
            [
              "unset \"a[1]\"",
              "删除指定元素"
            ],
            [
              "declare -A a",
              "声明关联数组"
            ],
            [
              "${!a[@]}",
              "关联数组的所有键"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "关联数组必须先用 declare -A",
          'text': "不声明直接 <code.inline>score[小明]=98</code.inline> 会把「小明」当成数字下标，得到奇怪结果。写脚本开头先 <code.inline>declare -A score</code.inline> 就没问题。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"数组与关联数组（一个变量装一堆值）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"数组与关联数组（一个变量装一堆值）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"数组与关联数组（一个变量装一堆值）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "数组下标从 0 开始",
            "${a[@]} 全部、${#a[@]} 个数",
            "for x in \"${a[@]}\" 遍历最稳妥",
            "a+=(x) 追加、unset 删除",
            "关联数组要先 declare -A"
          ]
        }
      ],
      'templates': [
        {
          'name': "数组小练习",
          'code': "names=(\"小明\" \"小红\" \"小刚\")\nfor name in \"${names[@]}\"; do\n  echo \"你好，$name\"\ndone\necho \"一共 ${#names[@]} 个人\""
        }
      ]
    },
    {
      'id': "sh-42",
      'title': "字符串操作（长度、切片、替换、大小写）",
      'summary': "${#str} 长度、${str:0:5} 切片、${str//a/b} 替换、${str^^} 转大写。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "字符串是脚本里最常见的「原料」。这一章教你用参数扩展对字符串做长度、切片、替换、删除前后缀、大小写转换，几乎不用额外命令就能完成。"
        },
        {
          'type': "h",
          'text': "长度与切片"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "取长度、切一段",
          'code': "str=\"hello world\"\necho ${#str}          # 11\necho ${str:0:5}       # hello\necho ${str:6}         # world（从下标6到结尾）\necho ${str:6:3}       # wor"
        },
        {
          'type': "h",
          'text': "替换子串"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "替换 apple",
          'code': "str=\"apple apple\"\necho ${str/apple/pear}     # 只换第一个: pear apple\necho ${str//apple/pear}    # 全部替换: pear pear"
        },
        {
          'type': "h",
          'text': "删除前缀 / 后缀（处理文件名很好用）"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "去掉扩展名",
          'code': "file=\"photo.tar.gz\"\necho ${file%.gz}      # photo.tar（删最短后缀）\necho ${file%%.*}     # photo（删最长后缀）\necho ${file#*.}      # tar.gz（删最短前缀）\necho ${file##*.}     # gz（删最长前缀）"
        },
        {
          'type': "p",
          'text': "记忆口诀：<code.inline>%</code.inline> 从右往左删（去后缀），<code.inline>#</code.inline> 从左往右删（去前缀）；写一个删最短，写两个删最长。"
        },
        {
          'type': "h",
          'text': "大小写转换"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "转换大小写",
          'code': "str=\"hello World\"\necho ${str^^}    # HELLO WORLD（全大写）\necho ${str,,}    # hello world（全小写）"
        },
        {
          'type': "table",
          'head': [
            "写法",
            "作用"
          ],
          'rows': [
            [
              "${#str}",
              "字符串长度"
            ],
            [
              "${str:开始:个数}",
              "切片"
            ],
            [
              "${str/a/b}",
              "替换第一个 a"
            ],
            [
              "${str//a/b}",
              "替换所有 a"
            ],
            [
              "${str%.*} / ${str%%.*}",
              "删最短/最长后缀"
            ],
            [
              "${str#*.} / ${str##*.}",
              "删最短/最长前缀"
            ],
            [
              "${str^^} / ${str,,}",
              "全大写 / 全小写"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "花括号绝对不能省",
          'text': "写 <code.inline>${str^^}</code.inline> 必须带花括号，写成 <code.inline>$str^^</code.inline> 会被解析成变量 <code.inline>$str</code.inline> 后面跟两个 <code.inline>^</code.inline>，结果完全不对。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"字符串操作（长度、切片、替换、大小写）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"字符串操作（长度、切片、替换、大小写）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"字符串操作（长度、切片、替换、大小写）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "${#str} 求长度",
            "${str:起始:个数} 切片",
            "${str//a/b} 全部替换、单斜杠只换第一个",
            "% 去后缀、# 去前缀，双写删最多",
            "${str^^}/${str,,} 转换大小写"
          ]
        }
      ],
      'templates': [
        {
          'name': "字符串加工练习",
          'code': "name=\"Alice Smith\"\necho \"长度: ${#name}\"\necho \"大写: ${name^^}\"\necho \"替换: ${name/Smith/Jones}\""
        }
      ]
    },
    {
      'id': "sh-43",
      'title': "算术运算（$(( )) 与整数计算）",
      'summary': "$(( )) 里做加减乘除取余幂，变量不用加 $，还支持 += ++ 简写。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "脚本经常要算数：计数、求和、做循环步长。Bash 里做整数运算的正规姿势是 <code.inline>$(( 表达式 ))</code.inline>，写起来干净又安全。"
        },
        {
          'type': "h",
          'text': "基本运算"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "四则运算",
          'code': "echo $((3 + 5))\necho $((10 - 4))\necho $((2 * 3))\necho $((7 / 2))    # 整除，结果是 3\necho $((7 % 2))    # 取余，结果是 1\necho $((2 ** 10))  # 2 的 10 次方，1024"
        },
        {
          'type': "h",
          'text': "变量参与运算"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "变量直接算",
          'code': "a=10\nb=3\necho $((a + b))   # 13，变量不用加 $\n((a += 5))       # 等价于 a = a + 5\necho \"$a\"         # 15"
        },
        {
          'type': "h",
          'text': "自增自减"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "i++ 与 ++i",
          'code': "i=1\necho $((i++))    # 先用后加，输出 1\necho \"$i\"        # 现在 i=2\necho $((++i))    # 先加后用，输出 3"
        },
        {
          'type': "h",
          'text': "let 与 declare -i"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "另一种写法",
          'code': "let \"x = 10 * 2\"\necho $x            # 20\ndeclare -i n=5\nn=n+1             # 声明为整数后直接写算式\necho $n            # 6"
        },
        {
          'type': "table",
          'head': [
            "运算符",
            "含义"
          ],
          'rows': [
            [
              "+ - * /",
              "加减乘除（整除）"
            ],
            [
              "%",
              "取余"
            ],
            [
              "**",
              "幂运算"
            ],
            [
              "+= -= *= /=",
              "自增自减自乘自除"
            ],
            [
              "i++ / ++i",
              "先用后加 / 先加后用"
            ],
            [
              "< <= > >= == !=",
              "比较"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "整数除法会丢小数",
          'text': "<code.inline>$((7 / 2))</code.inline> 得到 3 而不是 3.5，因为 $(( )) 只做整数运算。要小数请用 bc 或 awk（下一章讲）。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"算术运算（$(( )) 与整数计算）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"算术运算（$(( )) 与整数计算）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"算术运算（$(( )) 与整数计算）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "整数运算用 $(( 表达式 ))",
            "表达式里变量不用加 $",
            "除号是整除、% 取余、** 幂",
            "+= ++ -- 简写要包在 (( )) 里",
            "要小数用 bc 或 awk"
          ]
        }
      ],
      'templates': [
        {
          'name': "整数计算器",
          'code': "read -p \"输入 a: \" a\nread -p \"输入 b: \" b\necho \"和: $((a+b))\"\necho \"积: $((a*b))\"\necho \"商: $((a/b))\"\necho \"余: $((a%b))\""
        }
      ]
    },
    {
      'id': "sh-44",
      'title': "浮点数计算（bc）与随机数（$RANDOM）",
      'summary': "bc 做小数运算、scale 控制精度，$RANDOM 生成随机数，组合出实用小工具。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "<code.inline>$(( ))</code.inline> 只能算整数，遇到 <code.inline>5 / 2 = 2.5</code.inline> 这类需求就要用 bc（一个命令行计算器）。随机数则用 <code.inline>$RANDOM</code.inline> 变量。"
        },
        {
          'type': "h",
          'text': "bc 基本用法"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "管道把表达式交给 bc",
          'code': "echo \"5 / 2\" | bc          # 2，默认还是整数\necho \"scale=2; 5 / 2\" | bc # 2.50\necho \"3.14 * 2\" | bc       # 6.28"
        },
        {
          'type': "p",
          'text': "<code.inline>scale=2</code.inline> 表示保留 2 位小数。bc 默认精度是 0，要小数必须显式设 scale。"
        },
        {
          'type': "h",
          'text': "bc 的函数与变量"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "开方、常量",
          'code': "echo \"scale=4; sqrt(16) + 2.5\" | bc\necho \"3.14 * 10^2\" | bc       # 圆的面积"
        },
        {
          'type': "h",
          'text': "用 awk 替代 bc"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "awk 也能算浮点",
          'code': "awk \"BEGIN {print 5 / 2}\"\nawk \"BEGIN {printf \\\"%.2f\\\", 5 / 2}\""
        },
        {
          'type': "h",
          'text': "随机数 $RANDOM"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "生成随机数",
          'code': "echo $RANDOM                 # 0 到 32767 随机整数\necho $((RANDOM % 100))       # 0-99\necho $((RANDOM % 6 + 1))     # 1-6，模拟骰子\necho $((RANDOM % 900000 + 100000))  # 6 位随机数"
        },
        {
          'type': "h",
          'text': "综合：算平均分"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "循环求和再除",
          'code': "scores=\"80 90 95\"\nsum=0; count=0\nfor s in $scores; do\n  sum=$((sum + s))\n  count=$((count + 1))\ndone\necho \"scale=2; $sum / $count\" | bc"
        },
        {
          'type': "warn",
          'title': "bc 不一定预装",
          'text': "部分最小化系统没有 bc（Linux 的包管理器 <code.inline>apt install bc</code.inline> 或 <code.inline>yum install bc</code.inline> 可装）。没有 bc 时用 awk 也能算浮点，更通用。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"浮点数计算（bc）与随机数（$RANDOM）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"浮点数计算（bc）与随机数（$RANDOM）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"浮点数计算（bc）与随机数（$RANDOM）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "bc 做浮点运算，靠管道传表达式",
            "scale=n 控制小数位数",
            "awk 是 bc 的通用替代品",
            "$RANDOM 每次给出 0-32767 随机数",
            "$((RANDOM % N)) 限制范围"
          ]
        }
      ],
      'templates': [
        {
          'name': "bc 除法计算器",
          'code': "read -p \"输入两个数: \" x y\necho \"scale=2; $x / $y\" | bc"
        }
      ]
    },
    {
      'id': "sh-45",
      'title': "逻辑运算符（&& || !）与 [[ ]] 高级条件",
      'summary': "&& 成功才继续、|| 失败才继续、! 取反，[[ ]] 里还能直接写正则。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "逻辑运算符让多个条件、多个命令联动起来：<code.inline>&&</code.inline> 前面成功才执行后面，<code.inline>||</code.inline> 前面失败才执行后面，<code.inline>!</code.inline> 取反。这是写健壮脚本的地基。"
        },
        {
          'type': "h",
          'text': "&& 与 ||"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "成功/失败才执行",
          'code': "mkdir newdir && echo \"创建成功\"\ncd /nonexistent || echo \"目录不存在\"\ntrue && echo \"前面成功，所以执行\"\nfalse || echo \"前面失败，所以执行\""
        },
        {
          'type': "h",
          'text': "! 取反"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "不存在才创建",
          'code': "if [ ! -d backup ]; then\n  mkdir backup\nfi\necho \"backup 目录就绪\""
        },
        {
          'type': "h",
          'text': "复合条件组合"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "-a 与 -o 别用，用 && ||",
          'code': "a=10\nif [ \"$a\" -gt 5 ] && [ \"$a\" -lt 20 ]; then\n  echo \"a 在 5 到 20 之间\"\nfi\nif [ \"$a\" -eq 10 ] || [ \"$a\" -eq 20 ]; then\n  echo \"a 是 10 或 20\"\nfi"
        },
        {
          'type': "h",
          'text': "[[ ]] 双中括号（推荐）"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "支持通配符和正则",
          'code': "a=\"hello\"\nif [[ $a == h* ]]; then\n  echo \"a 以 h 开头\"\nfi\nif [[ $a =~ ^h.llo$ ]]; then\n  echo \"正则匹配 ^h.llo$\"\nfi"
        },
        {
          'type': "table",
          'head': [
            "符号",
            "含义"
          ],
          'rows': [
            [
              "cmd1 && cmd2",
              "cmd1 成功才执行 cmd2"
            ],
            [
              "cmd1 || cmd2",
              "cmd1 失败才执行 cmd2"
            ],
            [
              "!",
              "取反"
            ],
            [
              "[ ! -d x ]",
              "x 不是目录才为真"
            ],
            [
              "[[ $a == h* ]]",
              "通配符比较"
            ],
            [
              "[[ $a =~ 正则 ]]",
              "正则匹配"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "[ ] 里的 -a / -o 有坑",
          'text': "老式写法 <code.inline>[ -f a -a -f b ]</code.inline> 容易踩坑且不推荐。统一用 <code.inline>[ ... ] && [ ... ]</code.inline> 或 <code.inline>[[ ... && ... ]]</code.inline> 更清晰安全。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"逻辑运算符（&& || !）与 [[ ]] 高级条件\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"逻辑运算符（&& || !）与 [[ ]] 高级条件\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"逻辑运算符（&& || !）与 [[ ]] 高级条件\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "&& 前面成功才执行后面",
            "|| 前面失败才执行后面",
            "! 取反用在判断里",
            "复合条件用 && || 组合多个 []",
            "[[ ]] 支持通配符与 =~ 正则"
          ]
        }
      ],
      'templates': [
        {
          'name': "登录检查小脚本",
          'code': "read -p \"用户名: \" u\nread -s -p \"密码: \" p\necho\nif [[ $u == admin && $p == 123456 ]]; then\n  echo \"登录成功\"\nelse\n  echo \"登录失败\"\nfi"
        }
      ]
    },
    {
      'id': "sh-46",
      'title': "read 读取输入（交互式脚本）",
      'summary': "read 让脚本能问用户要数据，-p 提示、-s 静默、-t 超时、一次读多个。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "脚本不只是闷头干活，还常常需要和用户对话。这一章的主角是 <code.inline>read</code.inline>：它从键盘读一行，存进变量。"
        },
        {
          'type': "h",
          'text': "基本用法"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "读一个变量",
          'code': "echo \"你叫什么名字?\"\nread name\necho \"你好，$name!\""
        },
        {
          'type': "h",
          'text': "-p 提示符（推荐）"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "提示和读取一步到位",
          'code': "read -p \"请输入年龄: \" age\necho \"你 $age 岁\""
        },
        {
          'type': "h",
          'text': "-s 静默输入（密码）"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "输入密码不显示",
          'code': "read -s -p \"请输入密码: \" pwd\necho\necho \"密码长度: ${#pwd}\""
        },
        {
          'type': "h",
          'text': "-t 超时 与 -n 限长"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "限时与限字",
          'code': "read -t 5 -p \"5秒内输入: \" v || echo \"超时了\"\nread -n 1 -p \"按任意键继续\" key\necho"
        },
        {
          'type': "h",
          'text': "一次读多个变量"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "空格分隔多个值",
          'code': "read a b c <<< \"1 2 3\"\necho \"a=$a b=$b c=$c\""
        },
        {
          'type': "table",
          'head': [
            "选项",
            "作用"
          ],
          'rows': [
            [
              "read v",
              "读一行存入 v"
            ],
            [
              "-p 提示",
              "先显示提示文字"
            ],
            [
              "-s",
              "静默输入，不回显"
            ],
            [
              "-t 秒数",
              "超时则失败"
            ],
            [
              "-n N",
              "只读 N 个字符"
            ],
            [
              "-r",
              "原样读，不处理反斜杠"
            ],
            [
              "read a b c",
              "按空白拆成多个变量"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "read 在管道里的坑",
          'text': "<code.inline>cat list.txt | while read line</code.inline> 会在子 shell 里执行，循环里改的变量外面看不到。正确做法是把文件重定向给循环（下一章细讲）。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"read 读取输入（交互式脚本）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"read 读取输入（交互式脚本）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"read 读取输入（交互式脚本）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "read 从键盘读一行到变量",
            "-p 显示提示、-s 隐藏输入",
            "-t 超时、-n 限制字符数",
            "read a b c 一次拆多个变量",
            "管道里的 read 是子 shell，有坑"
          ]
        }
      ],
      'templates': [
        {
          'name': "自我介绍小脚本",
          'code': "read -p \"你的名字: \" name\nread -p \"你的城市: \" city\necho \"$name 住在 $city，欢迎！\""
        }
      ]
    },
    {
      'id': "sh-47",
      'title': "逐行读取文件（while read）",
      'summary': "while read line + 重定向逐行处理文件，IFS 处理 CSV，警惕管道子 shell。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "处理文件是脚本最常干的活：读配置文件、统计清单、批量处理每一行。标准姿势是 <code.inline>while read</code.inline> 加文件重定向。"
        },
        {
          'type': "h",
          'text': "逐行读取"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "while read 标准写法",
          'code': "while read line; do\n  echo \"读到: $line\"\ndone < list.txt"
        },
        {
          'type': "h",
          'text': "处理 CSV（逗号分隔）"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "IFS 指定分隔符",
          'code': "while IFS=\",\" read -r name age; do\n  echo \"$name 今年 $age 岁\"\ndone < people.csv"
        },
        {
          'type': "p",
          'text': "<code.inline>IFS=,</code.inline> 告诉 read 用逗号当分隔符，<code.inline>-r</code.inline> 防止反斜杠被吃掉。这个写法能处理带中文、带空格的字段。"
        },
        {
          'type': "h",
          'text': "管道子 shell 的坑"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "这个 count 传不出来",
          'code': "cat list.txt | while read line; do\n  count=$((count + 1))\ndone\necho \"count=$count\"    # 输出 0！"
        },
        {
          'type': "p",
          'text': "管道左边会让整个 while 跑在子 shell 里，子 shell 改的变量传不回来。解决方法是别用管道，直接重定向：<code.inline>while ... done < 文件</code.inline>，或者在子 shell 里把结果写到文件再读。"
        },
        {
          'type': "tip",
          'title': "进程替换也能救场",
          'text': "如果数据真的来自命令而不是文件，可以用 <code.inline>while read x; do ...; done < <(命令)</code.inline>，下一章讲 here document 和进程替换。"
        },
        {
          'type': "table",
          'head': [
            "写法",
            "说明"
          ],
          'rows': [
            [
              "done < file",
              "从文件读，推荐"
            ],
            [
              "done < <(命令)",
              "从命令输出读，不产生子 shell 坑"
            ],
            [
              "cmd | while read",
              "能用但变量传不回来"
            ],
            [
              "IFS=, read a b",
              "自定义分隔符拆字段"
            ],
            [
              "-r",
              "原样读不转义"
            ]
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"逐行读取文件（while read）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"逐行读取文件（while read）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"逐行读取文件（while read）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "while read line; done < 文件 逐行处理",
            "IFS=分隔符 read 拆 CSV 字段",
            "-r 防止反斜杠被吃掉",
            "管道 | 会让 while 进子 shell",
            "用重定向或 <( ) 绕开子 shell 坑"
          ]
        }
      ],
      'templates': [
        {
          'name': "数字求和",
          'code': "sum=0\nwhile read -r num; do\n  sum=$((sum + num))\ndone < nums.txt\necho \"总和: $sum\""
        }
      ]
    },
    {
      'id': "sh-48",
      'title': "here document（<<EOF 多行输入）",
      'summary': "<<EOF 把多行内容当输入，加引号不展开变量，<<- 去前导 Tab，<<< 是单行版本。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "想给命令喂一段多行文本，或者给文件写入一大块内容，别一行行 echo——用 here document（也叫 heredoc）。它的样子是 <code.inline>命令 <<EOF ... EOF</code.inline>。"
        },
        {
          'type': "h",
          'text': "基本用法"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "把多行文本传给 cat",
          'code': "cat <<EOF\n你好，这是多行文本\n第二行内容\nEOF"
        },
        {
          'type': "h",
          'text': "变量会展开"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "heredoc 里的变量",
          'code': "name=小明\ncat <<EOF\n你好，$name\n今天天气不错\nEOF"
        },
        {
          'type': "h",
          'text': "禁止展开（加引号）"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "<<'EOF' 原样输出",
          'code': "name=小明\ncat <<'EOF'\n这里 $name 不会被展开\nEOF"
        },
        {
          'type': "h",
          'text': "写入文件"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "生成配置文件",
          'code': "cat > myapp.conf <<EOF\nserver {\n  listen 8080;\n  root /var/www;\n}\nEOF\ncat myapp.conf"
        },
        {
          'type': "h",
          'text': "追加与去掉前导 Tab"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': ">> 追加、<<- 去 Tab",
          'code': "cat >> notes.txt <<EOF\n新的一行\nEOF\ncat <<-EOF\n\t这一行前面有 Tab，会被去掉\nEOF"
        },
        {
          'type': "h",
          'text': "here string <<<"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "单行 heredoc",
          'code': "grep \"root\" <<< \"root:x:0:0\"\nread a b <<< \"1 2\"\necho \"$a $b\""
        },
        {
          'type': "warn",
          'title': "结束标记必须顶格",
          'text': "结尾的 EOF 必须顶格写，前面不能有空格或 Tab，否则 heredoc 不结束，脚本会卡住或报错。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"here document（<<EOF 多行输入）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"here document（<<EOF 多行输入）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"here document（<<EOF 多行输入）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "cat <<EOF ... EOF 多行输入",
            "不加引号会展开变量和命令替换",
            "<<'EOF' 原样输出不展开",
            "cat > 文件 <<EOF 生成文件、>> 追加",
            "<<< 是单行版 heredoc"
          ]
        }
      ],
      'templates': [
        {
          'name': "生成一个 HTML 页面",
          'code': "title=\"我的页面\"\ncat <<EOF > page.html\n<html><body><h1>$title</h1></body></html>\nEOF\necho \"已生成 page.html\""
        }
      ]
    },
    {
      'id': "sh-49",
      'title': "重定向进阶与文件描述符（exec、2>&1、tee）",
      'summary': "描述符 0/1/2 是什么，2>&1 的顺序坑，exec 打开自定义描述符，tee 双写。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "第 16 章学过 <code.inline>></code.inline> 和 <code.inline>2>&1</code.inline>。这一章把背后的文件描述符讲透：0 是标准输入、1 是标准输出、2 是错误输出，理解了它重定向就不会再迷路。"
        },
        {
          'type': "h",
          'text': "描述符是什么"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "三个默认描述符",
          'code': "ls /nonexistent 2>/dev/null   # 错误丢进黑洞\necho \"标准输出\" 1>/dev/null    # 输出丢进黑洞\nread x < file                  # 0 号输入重定向"
        },
        {
          'type': "h",
          'text': "2>&1 的顺序坑"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "顺序写错就失效",
          'code': "ls 2>&1 > out.txt    # 错误还是去了屏幕！\nls > out.txt 2>&1    # 这样才对，都进文件"
        },
        {
          'type': "p",
          'text': "重定向是从左到右生效的。<code.inline>2>&1 > out.txt</code.inline> 先让错误指向「当前标准输出」（还是屏幕），再把标准输出指向文件，所以错误留在屏幕上。把 <code.inline>2>&1</code.inline> 放后面才正确。"
        },
        {
          'type': "h",
          'text': "exec 打开自定义描述符"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "3 号描述符写日志",
          'code': "exec 3>log.txt\necho \"重要信息\" >&3\nls /nonexistent 2>&3   # 错误也写进日志\nexec 3>&-             # 用完关闭\necho \"日志内容:\"\ncat log.txt"
        },
        {
          'type': "h",
          'text': "tee 同时显示和保存"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "tee 双写",
          'code': "echo \"数据\" | tee out.txt\necho \"追加\" | tee -a out.txt\ncat out.txt"
        },
        {
          'type': "table",
          'head': [
            "描述符",
            "默认指向",
            "常见用法"
          ],
          'rows': [
            [
              "0",
              "键盘 stdin",
              "< 文件 读入"
            ],
            [
              "1",
              "屏幕 stdout",
              "> 文件 写输出"
            ],
            [
              "2",
              "屏幕 stderr",
              "2> 文件 写错误"
            ],
            [
              "2>&1",
              "合并到 1",
              "> 文件 2>&1 都进文件"
            ],
            [
              "3...9",
              "自定义",
              "exec 3> 文件 打开"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "2>&1 必须写在 > 后面",
          'text': "想同时把输出和错误都进同一个文件，标准写法是 <code.inline>cmd > file 2>&1</code.inline>，写反了错误会漏到屏幕。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"重定向进阶与文件描述符（exec、2>&1、tee）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"重定向进阶与文件描述符（exec、2>&1、tee）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"重定向进阶与文件描述符（exec、2>&1、tee）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "0 输入、1 输出、2 错误三个描述符",
            "> 文件 2>&1 顺序不能反",
            "exec 3>文件 可开自定义描述符",
            ">&3 写入、exec 3>&- 关闭",
            "tee 同时显示并存盘，-a 追加"
          ]
        }
      ],
      'templates': [
        {
          'name': "日志分流",
          'code': "exec 3>>app.log\necho \"重要信息\" >&3\nls /nonexistent 2>&3\ncat app.log\nexec 3>&-"
        }
      ]
    },
    {
      'id': "sh-50",
      'title': "进程替换 <( ) 与命名管道（mkfifo）",
      'summary': "<(命令) 把命令输出当文件用，mkfifo 建管道文件让两个进程对话。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "进程替换 <code.inline><( 命令 )</code.inline> 把命令的输出伪装成一个「虚拟文件」传给别的命令；命名管道（FIFO）则是一个真实存在的管道文件，两个进程可以读写它来通信。"
        },
        {
          'type': "h",
          'text': "进程替换 <( )"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "比较两个目录",
          'code': "diff <(ls dir1) <(ls dir2) && echo \"目录内容一样\""
        },
        {
          'type': "h",
          'text': "给 while 用，避开子 shell"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "< <(命令) 逐行处理",
          'code': "count=0\nwhile read line; do\n  count=$((count + 1))\ndone < <(echo -e \"a\nb\nc\")\necho \"一共 $count 行\"   # 这次能传出来了"
        },
        {
          'type': "h",
          'text': "输出进程替换 >( )"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "把输出喂给命令",
          'code': "echo \"hello world\" > >(grep hello)\ncat <(echo \"来自进程替换的内容\")"
        },
        {
          'type': "h",
          'text': "命名管道 mkfifo"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "创建 FIFO",
          'code': "mkfifo mypipe\nls -l mypipe    # 文件类型显示 p"
        },
        {
          'type': "p",
          'text': "FIFO 就像一个水管。终端 A 里 <code.inline>cat > mypipe</code.inline> 写入，终端 B 里 <code.inline>cat < mypipe</code.inline> 就能读到，而且是边写边传。注意：没有对端读/写时，写的一端会阻塞等待。"
        },
        {
          'type': "tip",
          'title': "临时 FIFO 用完就删",
          'text': "命名管道是文件，不用了记得 <code.inline>rm mypipe</code.inline> 清理。进程替换 <( ) 是临时的，命令结束自动消失，日常更省心。"
        },
        {
          'type': "table",
          'head': [
            "用法",
            "作用"
          ],
          'rows': [
            [
              "<(命令)",
              "把命令输出当文件"
            ],
            [
              ">(命令)",
              "把命令当输出目标"
            ],
            [
              "< <(命令)",
              "喂给 while 等避开子 shell"
            ],
            [
              "mkfifo 名",
              "创建命名管道文件"
            ],
            [
              "cat > fifo / cat < fifo",
              "两个进程一个写一个读"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "管道是单向的",
          'text': "普通管道和 FIFO 都是单向流动。要双向通信得建两个管道，或者用更高级的工具（如 socat）。别指望一个管道能两个方向同时传。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"进程替换 <( ) 与命名管道（mkfifo）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"进程替换 <( ) 与命名管道（mkfifo）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"进程替换 <( ) 与命名管道（mkfifo）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "<(命令) 输出伪装成文件",
            "< <(命令) 给 while 用避开子 shell",
            ">(命令) 把命令当输出目标",
            "mkfifo 建命名管道，类型是 p",
            "FIFO 单向、无对端会阻塞"
          ]
        }
      ],
      'templates': [
        {
          'name': "比较两个目录差异",
          'code': "diff <(ls -1 dir1) <(ls -1 dir2) && echo \"目录内容相同\" || echo \"有差异\""
        }
      ]
    },
    {
      'id': "sh-51",
      'title': "信号与 trap（拦截 Ctrl+C、退出清理）",
      'summary': "trap 捕获信号和退出：按 Ctrl+C 不被打断、退出前清理临时文件。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "按 <code.inline>Ctrl+C</code.inline> 会给当前进程发 SIGINT 信号，关终端发 SIGHUP，杀进程用 SIGTERM。脚本可以用 <code.inline>trap</code.inline> 捕获这些信号，在退出前做清理，或者干脆忽略掉。"
        },
        {
          'type': "h",
          'text': "查看信号列表"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "kill -l 列出所有信号",
          'code': "kill -l"
        },
        {
          'type': "h",
          'text': "捕获 Ctrl+C"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "trap 拦截 SIGINT",
          'code': "trap \"echo 你按了Ctrl+C，但我不会退出\" SIGINT\nwhile true; do\n  sleep 1\ndone"
        },
        {
          'type': "p",
          'text': "运行上面脚本时按 Ctrl+C，不会退出而是打印提示。要强制结束，用 <code.inline>Ctrl+\\</code.inline> 发 SIGQUIT，或在另一个终端 kill 掉进程。"
        },
        {
          'type': "h",
          'text': "退出前自动清理 EXIT"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "trap ... EXIT",
          'code': "trap \"echo 清理临时文件; rm -f /tmp/tmp$$\" EXIT\ntouch /tmp/tmp$$\necho \"脚本运行中...\"\n# 不管正常结束还是出错退出，都会触发 EXIT"
        },
        {
          'type': "h",
          'text': "忽略某个信号"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "trap \"\" 表示忽略",
          'code': "trap \"\" SIGINT\n# 现在 Ctrl+C 完全无效\nsleep 10\necho \"终于结束了\""
        },
        {
          'type': "table",
          'head': [
            "信号",
            "产生方式",
            "默认行为"
          ],
          'rows': [
            [
              "SIGINT (2)",
              "Ctrl+C",
              "终止进程"
            ],
            [
              "SIGTERM (15)",
              "kill 命令默认发",
              "终止进程"
            ],
            [
              "SIGHUP (1)",
              "关终端",
              "终止进程"
            ],
            [
              "SIGQUIT (3)",
              "Ctrl+\\",
              "终止并产生核心转储"
            ],
            [
              "SIGKILL (9)",
              "kill -9",
              "无法捕获，直接杀"
            ],
            [
              "EXIT",
              "脚本退出时",
              "trap 专用伪信号"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "SIGKILL 拦不住",
          'text': "SIGKILL（kill -9）连 trap 都拦不住，会立刻杀掉进程。生产环境慎用 kill -9，先试 SIGTERM 让脚本自己清理。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"信号与 trap（拦截 Ctrl+C、退出清理）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"信号与 trap（拦截 Ctrl+C、退出清理）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"信号与 trap（拦截 Ctrl+C、退出清理）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "trap '动作' 信号 捕获信号",
            "SIGINT 是 Ctrl+C、SIGTERM 是 kill 默认",
            "trap '清理' EXIT 退出必执行",
            "trap \"\" 信号 忽略信号",
            "SIGKILL (kill -9) 无法捕获"
          ]
        }
      ],
      'templates': [
        {
          'name': "安全退出脚本",
          'code': "trap \"echo 检测到退出，正在清理; rm -f /tmp/tmp$$\" EXIT\ntouch /tmp/tmp$$\necho \"做点事\"\nsleep 1\necho \"完成\""
        }
      ]
    },
    {
      'id': "sh-52",
      'title': "后台任务与 wait、超时控制",
      'summary': "& 放后台、wait 等结果、timeout 限时、多个任务并行跑完再汇总。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "有些命令跑得慢，可以让它在后台运行，主脚本继续往下走；等需要结果时再用 <code.inline>wait</code.inline> 等它。这就是最简单的并行。"
        },
        {
          'type': "h",
          'text': "后台运行 &"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "& 放后台",
          'code': "sleep 5 &\necho \"主脚本不等待，继续执行\"\necho \"后台任务 PID 是 $!\""
        },
        {
          'type': "h",
          'text': "wait 等待后台任务"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "等后台跑完",
          'code': "sleep 3 &\nwait\necho \"后台任务结束了\""
        },
        {
          'type': "h",
          'text': "多个任务并行"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "一起跑，一起等",
          'code': "echo \"任务A\" & echo \"任务B\" & echo \"任务C\" &\nwait\necho \"三个任务都完成了\""
        },
        {
          'type': "p",
          'text': "并行能让总耗时从「三个相加」变成「最慢的那一个」。如果任务互相独立，尽量这样提速。"
        },
        {
          'type': "h",
          'text': "timeout 限制命令时间"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "超时就杀掉",
          'code': "timeout 3 sleep 100   # 3 秒后自动终止\necho \"超时控制生效\""
        },
        {
          'type': "h",
          'text': "退出终端也不停 nohup"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "nohup + disown",
          'code': "nohup ./long_task.sh > out.log 2>&1 &\ndisown\necho \"即使关终端任务也会继续\""
        },
        {
          'type': "table",
          'head': [
            "写法",
            "作用"
          ],
          'rows': [
            [
              "cmd &",
              "放后台运行"
            ],
            [
              "$!",
              "上一个后台任务的 PID"
            ],
            [
              "wait",
              "等待所有后台任务"
            ],
            [
              "wait $pid",
              "只等指定 PID"
            ],
            [
              "timeout N cmd",
              "N 秒超时自动终止"
            ],
            [
              "nohup cmd &",
              "脱离终端运行"
            ],
            [
              "disown",
              "把任务移出 shell 管理"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "后台任务输出会乱",
          'text': "多个后台任务同时往终端打印，输出会互相穿插。正式场景记得把每个任务重定向到各自日志：<code.inline>cmd > log1.txt 2>&1 &</code.inline>。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"后台任务与 wait、超时控制\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"后台任务与 wait、超时控制\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"后台任务与 wait、超时控制\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "cmd & 后台运行，$! 拿 PID",
            "wait 等全部、wait $pid 等指定",
            "独立任务并行能大幅提速",
            "timeout N cmd 限时防卡死",
            "nohup+& 脱离终端，disown 移出管理"
          ]
        }
      ],
      'templates': [
        {
          'name': "并行下载演示",
          'code': "echo \"任务A开始\" > a.log & echo \"任务B开始\" > b.log &\nwait\necho \"全部完成\"\ncat a.log b.log"
        }
      ]
    },
    {
      'id': "sh-53",
      'title': "定时任务 cron 与 at（让脚本自动跑）",
      'summary': "crontab -e 编辑定时任务，五个字段定时间，at 安排一次性任务。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "备份、清理日志、定时监控……这些事不该靠人记着做。cron 是 Linux 自带的定时任务系统，到点自动执行脚本。Windows 上对应的工具是「任务计划程序」。"
        },
        {
          'type': "h",
          'text': "管理自己的 cron"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "crontab 三个命令",
          'code': "crontab -e    # 编辑当前用户的定时任务\ncrontab -l    # 查看已有任务\ncrontab -r    # 删除全部任务"
        },
        {
          'type': "h",
          'text': "五个字段的格式"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "分 时 日 月 周",
          'code': "# 分 时 日 月 周 命令\n# 每天 8 点执行备份\n0 8 * * * /home/me/backup.sh\n# 每 5 分钟检查一次\n*/5 * * * * /home/me/check.sh\n# 每周一凌晨 3 点\n0 3 * * 1 /home/me/weekly.sh\n# 每天 8-18 点整点\n0 8-18 * * * /home/me/hourly.sh"
        },
        {
          'type': "h",
          'text': "添加一条任务"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "crontab -e 后加一行",
          'code': "crontab -e\n# 在打开的编辑器里加入这一行：\n# 每天 2 点把网站目录打包\n# 0 2 * * * tar -czf /backup/www-$(date +\\%F).tar.gz /var/www\ncrontab -l   # 确认添加成功"
        },
        {
          'type': "h",
          'text': "一次性任务 at"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "at 安排一次执行",
          'code': "echo \"echo 到点了，执行一次\" | at now + 1 minute\natq          # 查看排队中的任务\natrm 编号     # 删除某个任务"
        },
        {
          'type': "table",
          'head': [
            "字段",
            "含义",
            "取值"
          ],
          'rows': [
            [
              "第1个",
              "分钟",
              "0-59"
            ],
            [
              "第2个",
              "小时",
              "0-23"
            ],
            [
              "第3个",
              "日",
              "1-31"
            ],
            [
              "第4个",
              "月",
              "1-12"
            ],
            [
              "第5个",
              "周",
              "0-7（0和7都是周日）"
            ],
            [
              "*",
              "任意值",
              "每个"
            ],
            [
              "*/5",
              "每隔",
              "每 5 个"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "cron 里环境变量很少",
          'text': "cron 执行时的 PATH 很精简，最好在脚本开头写上绝对路径或 <code.inline>export PATH=/usr/local/bin:/usr/bin:/bin</code.inline>，否则找不到命令。还要注意 <code.inline>%</code.inline> 在 cron 行里要转义成 <code.inline>\\%</code.inline>。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"定时任务 cron 与 at（让脚本自动跑）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"定时任务 cron 与 at（让脚本自动跑）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"定时任务 cron 与 at（让脚本自动跑）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "crontab -e/-l/-r 管理定时任务",
            "五字段：分 时 日 月 周",
            "*/5 表示每隔、0 8 * * * 每天8点",
            "cron 环境精简，PATH 要自己配",
            "at 安排一次性任务，atq/atrm 管理"
          ]
        }
      ],
      'templates': [
        {
          'name': "查看现有 cron",
          'code': "crontab -l\n# 如果没有输出说明还没任务\n# 想加任务就执行 crontab -e"
        }
      ]
    },
    {
      'id': "sh-54",
      'title': "系统监控（内存、磁盘、CPU、进程）",
      'summary': "free 看内存、df 看磁盘、du 看目录大小、uptime 看负载，组合成体检脚本。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "服务器卡了？磁盘满了？内存不够？这一章收集监控系统状态的核心命令，最后把它们拼成一段「一键体检」脚本。"
        },
        {
          'type': "h",
          'text': "内存：free"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "看内存占用",
          'code': "free -h   # 人类可读单位\nfree -m   # 单位 MB"
        },
        {
          'type': "h",
          'text': "磁盘：df 与 du"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "磁盘与目录大小",
          'code': "df -h                     # 各分区使用率\ndu -sh ~                   # 家目录总大小\ndu -sh * | sort -rh | head # 当前目录最大的几个"
        },
        {
          'type': "h",
          'text': "负载：uptime 与 top"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "CPU 负载",
          'code': "uptime            # 看 load average\ntop -bn1 | head -20   # 非交互抓一次 top 快照"
        },
        {
          'type': "h",
          'text': "进程：ps"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "按内存/CPU 排序",
          'code': "ps aux --sort=-%mem | head   # 内存占用最高的进程\nps aux | grep nginx           # 找特定进程"
        },
        {
          'type': "h",
          'text': "综合体检脚本"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "一键体检",
          'code': "echo \"== 内存 ==\"\nfree -h\necho \"== 磁盘 ==\"\ndf -h\necho \"== 负载 ==\"\nuptime\necho \"== 占用最高进程 ==\"\nps aux --sort=-%mem | head -5"
        },
        {
          'type': "table",
          'head': [
            "命令",
            "作用"
          ],
          'rows': [
            [
              "free -h",
              "内存使用"
            ],
            [
              "df -h",
              "分区磁盘使用率"
            ],
            [
              "du -sh 目录",
              "目录占用大小"
            ],
            [
              "uptime",
              "负载与开机时长"
            ],
            [
              "top",
              "实时进程监控"
            ],
            [
              "ps aux",
              "进程快照"
            ]
          ]
        },
        {
          'type': "tip",
          'title': "组合 + 告警",
          'text': "在体检脚本里判断阈值：磁盘使用率超过 80% 就 <code.inline>echo</code.inline> 告警或发通知，配合上一章的 cron 就能实现自动巡检。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"系统监控（内存、磁盘、CPU、进程）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"系统监控（内存、磁盘、CPU、进程）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"系统监控（内存、磁盘、CPU、进程）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "free -h 看内存",
            "df -h 看磁盘、du -sh 看目录大小",
            "uptime 看负载、top 实时监控",
            "ps aux --sort=-%mem 找吃内存大户",
            "把命令拼成体检脚本配合 cron 巡检"
          ]
        }
      ],
      'templates': [
        {
          'name': "一键体检",
          'code': "echo \"== 内存 ==\"\nfree -h\necho \"== 磁盘 ==\"\ndf -h\necho \"== 负载 ==\"\nuptime\necho \"== 占用最高进程 ==\"\nps aux --sort=-%mem | head -5"
        }
      ]
    },
    {
      'id': "sh-55",
      'title': "日志分析与轮转（logrotate）",
      'summary': "统计日志错误、按字段汇总访问量，logrotate 自动轮转让日志不撑爆磁盘。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "日志是排错和统计的金矿，但也最容易撑爆磁盘。这一章先讲怎么快速分析日志，再讲怎么让日志自动轮转。"
        },
        {
          'type': "h",
          'text': "统计错误"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "数一数有多少错误",
          'code': "grep -c \"ERROR\" app.log\ngrep \"ERROR\" app.log | sort | uniq -c | sort -rn"
        },
        {
          'type': "h",
          'text': "按访问时间汇总"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "统计每天的访问量",
          'code': "cut -d' ' -f4 access.log | cut -d: -f1 | sort | uniq -c"
        },
        {
          'type': "p",
          'text': "上面把每行的日期列取出来、再按日期去重计数，就能看到每天的访问量分布。awk 能做更花哨的统计：<code.inline>awk '{print $1}' access.log | sort | uniq -c</code.inline> 统计每个来源 IP 的次数。"
        },
        {
          'type': "h",
          'text': "logrotate 自动轮转"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "系统已有轮转配置",
          'code': "cat /etc/logrotate.conf\nls /etc/logrotate.d/\ncat /etc/logrotate.d/nginx   # 看某个服务的轮转规则"
        },
        {
          'type': "h",
          'text': "自己写轮转脚本"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "手动轮转演示",
          'code': "mv app.log.3 app.log.4 2>/dev/null\nmv app.log.2 app.log.3 2>/dev/null\nmv app.log.1 app.log.2 2>/dev/null\nmv app.log app.log.1 2>/dev/null\n: > app.log   # 清空原日志重新开始"
        },
        {
          'type': "tip",
          'title': "logrotate 关键配置",
          'text': "典型的轮转配置长这样：<code.inline>daily</code.inline>（每天轮）、<code.inline>rotate 7</code.inline>（保留 7 份）、<code.inline>compress</code.inline>（压缩旧日志）、<code.inline>missingok</code.inline>（缺失不报错）。"
        },
        {
          'type': "table",
          'head': [
            "工具",
            "用途"
          ],
          'rows': [
            [
              "grep -c",
              "统计匹配行数"
            ],
            [
              "grep | uniq -c | sort -rn",
              "统计频率排名"
            ],
            [
              "cut -d' ' -f4",
              "取日期字段"
            ],
            [
              "logrotate",
              "自动轮转+压缩+清理"
            ],
            [
              "logrotate.d",
              "按应用放轮转配置"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "别手动删正在写入的日志",
          'text': "服务正在往 app.log 写日志时直接 rm 删掉，句柄还开着，磁盘空间不会释放。正确做法是先 mv 改名，再通知服务重开日志（很多服务收到 HUP 信号会重开）。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"日志分析与轮转（logrotate）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"日志分析与轮转（logrotate）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"日志分析与轮转（logrotate）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "grep -c 数错误、uniq -c + sort -rn 排名",
            "cut 取字段做按天/按 IP 统计",
            "logrotate 自动轮转日志",
            "rotate 7 + compress 控制保留份数",
            "删日志要 mv 改名而不是直接 rm"
          ]
        }
      ],
      'templates': [
        {
          'name': "日志错误 TOP",
          'code': "grep \"ERROR\" app.log | sort | uniq -c | sort -rn | head -10"
        }
      ]
    },
    {
      'id': "sh-56",
      'title': "nohup、setsid 与终端复用（screen、tmux）",
      'summary': "nohup 让命令脱离终端，screen/tmux 让会话可恢复，挂机跑任务不慌。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "远程跑一个要一小时的任务，一关终端就断了，太尴尬。这一章解决「长任务」问题：nohup 让进程脱离终端，screen/tmux 提供可随时恢复的终端会话。"
        },
        {
          'type': "h",
          'text': "nohup 脱离终端"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "nohup 后台跑",
          'code': "nohup ./server.sh > server.log 2>&1 &\ndisown\necho \"关掉终端任务也会继续\""
        },
        {
          'type': "h",
          'text': "setsid 彻底独立"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "setsid 开新会话",
          'code': "setsid ./daemon.sh < /dev/null &\necho \"daemon 已独立运行\""
        },
        {
          'type': "h",
          'text': "screen 终端复用"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "screen 基本操作",
          'code': "screen -S mysession   # 新建会话\n# 在会话里跑长任务，然后按 Ctrl+A 再按 D 脱离\nscreen -ls              # 列出会话\nscreen -r mysession     # 重新连接"
        },
        {
          'type': "h",
          'text': "tmux（更现代的选择）"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "tmux 基本操作",
          'code': "tmux new -s work        # 新建会话\n# 跑长任务后按 Ctrl+B 再按 D 脱离\ntmux ls                  # 列出会话\ntmux attach -t work      # 重新连接"
        },
        {
          'type': "p",
          'text': "区别一句话：nohup 只是让单个命令「不随终端退出而死」，screen/tmux 是给你一个「关不掉、能回来继续看」的终端窗口，还能开多个窗口分屏。"
        },
        {
          'type': "table",
          'head': [
            "工具",
            "用途",
            "特点"
          ],
          'rows': [
            [
              "nohup cmd &",
              "让命令脱离终端",
              "简单，但看不到输出交互"
            ],
            [
              "setsid cmd",
              "彻底新会话",
              "连 SIGHUP 都不受"
            ],
            [
              "screen -S 名",
              "可恢复终端会话",
              "老牌，Ctrl+A 前缀"
            ],
            [
              "tmux new -s 名",
              "可恢复终端会话",
              "现代，分屏强，Ctrl+B 前缀"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "nohup 要配合 & 和重定向",
          'text': "光写 <code.inline>nohup cmd</code.inline> 不加 <code.inline>&</code.inline> 还是占用当前终端；不重定向的话输出还是会写到当前终端。标准写法：<code.inline>nohup cmd > log 2>&1 &</code.inline>。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"nohup、setsid 与终端复用（screen、tmux）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"nohup、setsid 与终端复用（screen、tmux）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"nohup、setsid 与终端复用（screen、tmux）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "nohup cmd > log 2>&1 & 脱离终端",
            "disown 移出 shell 管理",
            "setsid 开全新会话",
            "screen 老牌、tmux 现代，都能断线重连",
            "长任务用 screen/tmux 更从容"
          ]
        }
      ],
      'templates': [
        {
          'name': "后台跑长任务",
          'code': "nohup ./long_task.sh > run.log 2>&1 &\necho \"已后台启动，PID=$!\"\nsleep 2\ntail -5 run.log"
        }
      ]
    },
    {
      'id': "sh-57",
      'title': "select 交互式菜单（做个真菜单）",
      'summary': "select 自动编号菜单，case 分支处理选择，PS3 自定义提示符。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "想给用户一个「1 查看 2 备份 3 退出」的菜单？Bash 的 <code.inline>select</code.inline> 命令一行就能生成带编号的菜单，配合 case 处理选择，交互式工具信手拈来。"
        },
        {
          'type': "h",
          'text': "基础 select 菜单"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "select + case",
          'code': "select opt in 查看 备份 退出; do\n  case $opt in\n    查看) echo \"执行查看功能\";;\n    备份) echo \"执行备份功能\";;\n    退出) echo \"再见\"; break;;\n    *) echo \"无效选择\";;\n  esac\ndone"
        },
        {
          'type': "p",
          'text': "select 会自动把选项编号显示出来，并把用户输入的数字存入 <code.inline>$REPLY</code.inline>、把选中的文字存入变量 <code.inline>$opt</code.inline>，然后进入循环体。没选对就一直循环，选了「退出」用 break 跳出。"
        },
        {
          'type': "h",
          'text': "自定义提示符 PS3"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "PS3 改变默认提示",
          'code': "PS3=\"请选择(1-3): \"\nselect c in 一 二 三; do\n  echo \"你选了 $c，编号是 $REPLY\"\ndone"
        },
        {
          'type': "h",
          'text': "菜单里调用函数"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "菜单驱动工具雏形",
          'code': "start() { echo \"服务启动中...\"; }\nstop() { echo \"服务停止中...\"; }\nPS3=\"请选择: \"\nselect act in 启动 停止 退出; do\n  case $act in\n    启动) start;;\n    停止) stop;;\n    退出) echo \"结束\"; break;;\n  esac\ndone"
        },
        {
          'type': "table",
          'head': [
            "元素",
            "含义"
          ],
          'rows': [
            [
              "select v in 选项...",
              "生成编号菜单"
            ],
            [
              "$REPLY",
              "用户输入的数字"
            ],
            [
              "$v",
              "选中的选项文字"
            ],
            [
              "case $v in ... esac",
              "按选择分发处理"
            ],
            [
              "PS3",
              "菜单提示符"
            ],
            [
              "break",
              "跳出循环"
            ]
          ]
        },
        {
          'type': "tip",
          'title': "select 的默认循环",
          'text': "select 自带一个无限循环（除非 break），所以结构上天然适合做「操作完继续显示菜单」的管理工具。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"select 交互式菜单（做个真菜单）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"select 交互式菜单（做个真菜单）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"select 交互式菜单（做个真菜单）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "select v in 选项 自动编号",
            "选择文字在 $v、输入数字在 $REPLY",
            "配合 case 分发不同操作",
            "PS3 自定义提示符",
            "break 退出菜单循环"
          ]
        }
      ],
      'templates': [
        {
          'name': "简易服务管理菜单",
          'code': "PS3=\"请选择: \"\nselect o in 启动 停止 退出; do\n  case $o in\n    启动) echo 启动中;;\n    停止) echo 停止中;;\n    退出) break;;\n  esac\ndone"
        }
      ]
    },
    {
      'id': "sh-58",
      'title': "实战：日志分析报告生成脚本",
      'summary': "把 grep、cut、sort、uniq、awk 组合起来，从原始日志产出分析报告。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "前面学了一堆文本处理命令，这一章把它们拼成真实的报告脚本：统计访问日志的 Top IP、404 数量、按天访问量，最后生成一份带标题的报告文件。"
        },
        {
          'type': "h",
          'text': "Top 10 访问来源 IP"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "统计最活跃的 IP",
          'code': "cut -d' ' -f1 access.log | sort | uniq -c | sort -rn | head -10"
        },
        {
          'type': "h",
          'text': "统计 404 数量"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "数 404 错误",
          'code': "grep ' 404 ' access.log | wc -l\nawk '{print $1}' access.log | sort | uniq -c | sort -rn | head -5"
        },
        {
          'type': "h",
          'text': "按天统计访问量"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "每天多少请求",
          'code': "cut -d' ' -f4 access.log | cut -d: -f1 | sort | uniq -c"
        },
        {
          'type': "h",
          'text': "汇总成报告"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "生成 report.txt",
          'code': "{\n  echo '==== 访问分析报告 ===='\n  echo\n  echo '--- Top IP ---'\n  cut -d' ' -f1 access.log | sort | uniq -c | sort -rn | head -10\n  echo\n  echo '--- 404 数量 ---'\n  grep -c ' 404 ' access.log\n  echo\n  echo '--- 每天访问量 ---'\n  cut -d' ' -f4 access.log | cut -d: -f1 | sort | uniq -c\n} > report.txt\ncat report.txt"
        },
        {
          'type': "p",
          'text': "<code.inline>{ ... } > 文件</code.inline> 能把一段命令的所有输出整体重定向到一个文件，比每条命令都写一遍 <code.inline>>></code.inline> 干净多了。这样一个脚本，配合 cron 每天跑一次，就自动生成日报了。"
        },
        {
          'type': "table",
          'head': [
            "命令",
            "在本例中的作用"
          ],
          'rows': [
            [
              "cut -d' ' -f1",
              "取 IP 字段"
            ],
            [
              "sort | uniq -c | sort -rn",
              "统计并降序排名"
            ],
            [
              "grep ' 404 ' | wc -l",
              "统计 404 次数"
            ],
            [
              "cut -d: -f1",
              "把时间戳里的日期部分取出来"
            ],
            [
              "{ ... } > file",
              "整段输出写入报告"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "日志格式决定命令",
          'text': "不同软件的日志字段顺序不一样（nginx、apache、自研格式都不同）。上面的字段位置只是示例，实际要先用 <code.inline>head -3 access.log</code.inline> 看清楚再写对应命令。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"实战：日志分析报告生成脚本\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"实战：日志分析报告生成脚本\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"实战：日志分析报告生成脚本\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "文本处理命令可自由组合成流水线",
            "cut 取字段、sort|uniq -c 做统计排名",
            "{ ... } > 文件 整段输出重定向",
            "先 head 看日志格式再写命令",
            "脚本 + cron = 自动日报"
          ]
        }
      ],
      'templates': [
        {
          'name': "统计 Top10 IP",
          'code': "cut -d' ' -f1 access.log | sort | uniq -c | sort -rn | head -10"
        }
      ]
    },
    {
      'id': "sh-59",
      'title': "批量重命名与文件批量处理",
      'summary': "for 循环 + mv 批量改后缀、加前缀，find -exec 批量操作，注意空格文件名。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "一百个 .txt 要改成 .md？给所有照片加个日期前缀？手工改会疯掉。用 for 循环 + mv，一条命令搞定。"
        },
        {
          'type': "h",
          'text': "批量改后缀"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "txt 全变 md",
          'code': "for f in *.txt; do\n  mv \"$f\" \"${f%.txt}.md\"\ndone\necho \"完成\"\nls *.md"
        },
        {
          'type': "h",
          'text': "加前缀"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "给照片加前缀",
          'code': "for f in *.jpg; do\n  mv \"$f\" \"photo_$f\"\ndone\nls"
        },
        {
          'type': "h",
          'text': "find 批量处理"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "删除临时文件",
          'code': "find . -name \"*.tmp\" -exec rm {} \\;\nfind . -type f -size +100M -exec ls -lh {} \\;"
        },
        {
          'type': "p",
          'text': "<code.inline>find ... -exec 命令 {} \\;</code.inline> 会对每个找到的文件执行一次命令，<code.inline>{}</code.inline> 代表当前文件名。<code.inline>-exec ... +</code.inline>（把 + 放结尾）则把所有文件名一次传给命令，更快。"
        },
        {
          'type': "h",
          'text': "rename 命令（部分系统有）"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "正则改名",
          'code': "rename \"s/.txt/.md/\" *.txt\n# 没有 rename 就用 for 循环，最通用"
        },
        {
          'type': "table",
          'head': [
            "需求",
            "写法"
          ],
          'rows': [
            [
              "改后缀",
              "mv \"$f\" \"${f%.txt}.md\""
            ],
            [
              "加前缀",
              "mv \"$f\" \"prefix_$f\""
            ],
            [
              "加后缀",
              "mv \"$f\" \"${f}.bak\""
            ],
            [
              "删临时文件",
              "find . -name '*.tmp' -exec rm {} \\;"
            ],
            [
              "按大小找",
              "find . -type f -size +100M"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "文件名有空格必须加引号",
          'text': "写 <code.inline>mv $f new</code.inline> 遇到 <code.inline>我的 照片.jpg</code.inline> 会拆成两个词出错。务必写成 <code.inline>mv \"$f\" \"新名\"</code.inline>，引号不能省。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"批量重命名与文件批量处理\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"批量重命名与文件批量处理\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"批量重命名与文件批量处理\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "for f in *.txt; do ... done 批量处理",
            "${f%.txt}.md 改造文件名",
            "mv \"$f\" 双引号防空格",
            "find -exec 批量操作文件",
            "先在小范围测试再批量执行"
          ]
        }
      ],
      'templates': [
        {
          'name': "批量改名演示",
          'code': "for f in *.txt; do\n  mv \"$f\" \"${f%.txt}.md\"\ndone\necho \"完成\"\nls *.md"
        }
      ]
    },
    {
      'id': "sh-60",
      'title': "归档、压缩与备份（tar、gzip、zip）",
      'summary': "tar 打包、gzip/bzip2 压缩、zip 通用格式，rsync 做增量同步备份。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "备份就是把一堆文件装进一个包，再压缩省空间。Linux 世界的老搭档是 <code.inline>tar</code.inline>（打包）+ <code.inline>gzip</code.inline>（压缩），还有一个跨平台的 <code.inline>zip</code.inline>。"
        },
        {
          'type': "h",
          'text': "tar 打包与解包"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "tar 三兄弟",
          'code': "tar -cvf backup.tar dir1 dir2   # c 创建\nls backup.tar\ntar -tvf backup.tar           # t 查看\ntar -xvf backup.tar           # x 解包"
        },
        {
          'type': "h",
          'text': "打包并压缩"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "-z 用 gzip、-j 用 bzip2",
          'code': "tar -czvf backup.tar.gz dir1 dir2    # 压缩更快\ntar -xzvf backup.tar.gz\n\ntar -cjvf backup.tar.bz2 dir1         # 压缩更小\ntar -xjvf backup.tar.bz2"
        },
        {
          'type': "h",
          'text': "gzip 单独使用"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "单文件压缩",
          'code': "gzip file.txt        # 变 file.txt.gz\ngzip -d file.txt.gz   # 解回来"
        },
        {
          'type': "h",
          'text': "zip / unzip（跨平台友好）"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "zip 打包",
          'code': "zip -r archive.zip dir1   # -r 递归\nunzip archive.zip\nunzip -l archive.zip      # 只查看不解开"
        },
        {
          'type': "h",
          'text': "rsync 增量同步"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "rsync 同步目录",
          'code': "rsync -av dir1/ dir2/                  # 本地同步\nrsync -avz dir1/ user@server:/backup/   # 同步到远程"
        },
        {
          'type': "table",
          'head': [
            "命令",
            "作用"
          ],
          'rows': [
            [
              "tar -cvf x.tar 目录",
              "打包"
            ],
            [
              "tar -xvf x.tar",
              "解包"
            ],
            [
              "tar -czvf x.tar.gz 目录",
              "打包+gzip"
            ],
            [
              "tar -xzvf x.tar.gz",
              "解压"
            ],
            [
              "zip -r x.zip 目录 / unzip x.zip",
              "通用压缩/解压"
            ],
            [
              "rsync -av 源 目标",
              "增量同步备份"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "-f 后面紧跟文件名",
          'text': "tar 的 <code.inline>-f</code.inline> 指定文件名，习惯上放在最后（<code.inline>tar -cvf backup.tar ...</code.inline>）。如果写 <code.inline>tar -cfv</code.inline> 这类乱序，<code.inline>-f</code.inline> 后面的参数会被当文件名，容易出错。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"归档、压缩与备份（tar、gzip、zip）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"归档、压缩与备份（tar、gzip、zip）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"归档、压缩与备份（tar、gzip、zip）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "tar -cvf 打包、-xvf 解包、-tvf 查看",
            "-z 配 gzip、-j 配 bzip2",
            "zip/unzip 跨平台通用",
            "rsync -av 增量同步，传远程加 -z",
            "-f 后面紧跟文件名"
          ]
        }
      ],
      'templates': [
        {
          'name': "带日期打包备份",
          'code': "tar -czvf backup-$(date +%F).tar.gz dir1 dir2\necho \"备份完成\"\nls -lh backup-*.tar.gz"
        }
      ]
    },
    {
      'id': "sh-61",
      'title': "网络命令（curl、wget、ping、nc）",
      'summary': "curl 抓网页、wget 下载、ping 测连通、nc 探端口，脚本也能联网干活。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "脚本不只是本地干活，还能联网：抓网页内容、下载文件、探测端口是否开放。这一章介绍最常用的几个网络命令。"
        },
        {
          'type': "h",
          'text': "curl：多才多艺的传输工具"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "抓取网页",
          'code': "curl https://example.com\ncurl -I https://example.com          # 只看响应头\ncurl -o page.html https://example.com   # 存成文件\ncurl -s https://example.com          # 静默，不显示进度"
        },
        {
          'type': "h",
          'text': "wget：专精下载"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "下载文件",
          'code': "wget https://example.com/file.zip\nwget -c https://example.com/file.zip   # 断点续传\nwget -r -l 1 https://example.com/      # 递归下载一层"
        },
        {
          'type': "h",
          'text': "ping：测网络连通"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "ping 4 次",
          'code': "ping -c 4 baidu.com\ntimeout 5 ping -c 4 8.8.8.8 || echo \"网络不通\""
        },
        {
          'type': "h",
          'text': "nc：端口探测"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "看端口通不通",
          'code': "nc -zv 127.0.0.1 22    # 测本机 22 端口\nnc -zvw 3 192.168.1.1 80   # 3 秒超时"
        },
        {
          'type': "h",
          'text': "实战：检查网站是否存活"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "返回 200 才算正常",
          'code': "code=$(curl -s -o /dev/null -w \"%{http_code}\" https://example.com)\nif [ \"$code\" = \"200\" ]; then\n  echo \"网站正常 (HTTP $code)\"\nelse\n  echo \"网站异常 (HTTP $code)\"\nfi"
        },
        {
          'type': "table",
          'head': [
            "命令",
            "用途"
          ],
          'rows': [
            [
              "curl",
              "传输数据，抓网页/调接口"
            ],
            [
              "wget",
              "下载文件，支持断点续传"
            ],
            [
              "ping",
              "测试网络连通与延迟"
            ],
            [
              "nc",
              "端口探测/原始 TCP 连接"
            ],
            [
              "curl -I",
              "只看响应头"
            ],
            [
              "curl -w %{http_code}",
              "输出 HTTP 状态码"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "curl 报证书或代理错",
          'text': "公司内网常遇到代理：<code.inline>curl -x http://proxy:8080 url</code.inline> 指定代理。证书报错可加 <code.inline>-k</code.inline>（仅测试用，别在生产这么干）。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"网络命令（curl、wget、ping、nc）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"网络命令（curl、wget、ping、nc）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"网络命令（curl、wget、ping、nc）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "curl 抓网页/接口，-o 存文件、-I 看头",
            "wget 下载，-c 断点续传",
            "ping -c N 测连通",
            "nc -zv 地址 端口 探端口",
            "curl -w %{http_code} 判断网站是否正常"
          ]
        }
      ],
      'templates': [
        {
          'name': "网站存活检查",
          'code': "code=$(curl -s -o /dev/null -w \"%{http_code}\" https://example.com)\n[ \"$code\" = \"200\" ] && echo \"正常\" || echo \"异常: $code\""
        }
      ]
    },
    {
      'id': "sh-62",
      'title': "SSH 与远程操作（ssh、scp、rsync）",
      'summary': "ssh 远程登录和跑命令，scp 传文件，rsync 同步，公钥免密登录。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "管理多台服务器是运维日常。SSH 是 Linux 远程登录的标准方式，配合 scp、rsync 就能远程传文件，还能在脚本里批量操作多台机器。"
        },
        {
          'type': "h",
          'text': "ssh 远程登录"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "登录与指定端口",
          'code': "ssh user@192.168.1.10\nssh -p 2222 user@host    # 非默认 22 端口"
        },
        {
          'type': "h",
          'text': "远程直接执行命令"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "不用登录就能跑",
          'code': "ssh user@host \"df -h\"\nssh user@host \"uptime && free -m\"\nssh user@host \"tail -20 /var/log/nginx/error.log\""
        },
        {
          'type': "h",
          'text': "scp 传文件"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "双向传输",
          'code': "scp file.txt user@host:/home/user/\nscp user@host:/home/user/file.txt .\nscp -r dir user@host:/home/user/   # 传整个目录"
        },
        {
          'type': "h",
          'text': "rsync 同步（增量）"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "只传有变化的文件",
          'code': "rsync -avz dir1/ user@host:/backup/\nrsync -av --delete dir1/ user@host:/backup/   # 删除目标多余文件"
        },
        {
          'type': "h",
          'text': "公钥免密登录"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "配置一次，之后免密",
          'code': "ssh-keygen -t ed25519       # 一路回车生成密钥\nssh-copy-id user@host       # 把公钥装到远程\nssh user@host               # 以后不用再输密码"
        },
        {
          'type': "p",
          'text': "公钥登录原理：本机保留私钥（不能泄露），把公钥放到远程服务器的 <code.inline>~/.ssh/authorized_keys</code.inline>，之后 SSH 用密钥做身份验证，比输密码安全也方便。"
        },
        {
          'type': "warn",
          'title': "别在脚本里硬编码密码",
          'text': "用 sshpass 之类把密码写进脚本非常危险。正确做法是配好公钥免密，让脚本 <code.inline>ssh user@host 命令</code.inline> 直接跑。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"SSH 与远程操作（ssh、scp、rsync）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"SSH 与远程操作（ssh、scp、rsync）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"SSH 与远程操作（ssh、scp、rsync）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "ssh user@host 远程登录或跑命令",
            "scp 传文件，-r 传目录",
            "rsync -avz 增量同步，--delete 保持目标一致",
            "ssh-keygen + ssh-copy-id 配公钥免密",
            "私钥绝不能外泄"
          ]
        }
      ],
      'templates': [
        {
          'name': "远程批量看磁盘",
          'code': "for h in server1 server2 server3; do\n  echo \"=== $h ===\"\n  ssh admin@$h \"df -h /\"\ndone"
        }
      ]
    },
    {
      'id': "sh-63",
      'title': "环境配置与 alias（.bashrc、别名、持久化）",
      'summary': "alias 起别名、.bashrc 开机加载、环境变量持久化、函数当命令用。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "每次打开终端都要重新 export？换个系统命令敲起来费劲？这一章讲 Shell 的启动配置文件 <code.inline>.bashrc</code.inline>，以及让命令更顺手的 alias 别名。"
        },
        {
          'type': "h",
          'text': "配置文件有哪些"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "家目录的配置文件",
          'code': "ls -la ~ | grep -E \"bash|profile\"\ncat ~/.bashrc      # 每次开交互终端都加载\ncat ~/.profile     # 登录时加载"
        },
        {
          'type': "h",
          'text': "alias 起别名"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "常用别名",
          'code': "alias ll=\"ls -la\"\nalias gs=\"git status\"\nalias ..=\"cd ..\"\nalias c=\"clear\"\nalias la=\"ls -A\""
        },
        {
          'type': "h",
          'text': "别名立即生效"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "source 或直接 alias",
          'code': "source ~/.bashrc\nalias hi=\"echo 你好\"\nhi"
        },
        {
          'type': "h",
          'text': "环境变量持久化"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "写进 .bashrc 开机自动设置",
          'code': "echo \"export MY_HOME=/data\" >> ~/.bashrc\nsource ~/.bashrc\necho $MY_HOME"
        },
        {
          'type': "h",
          'text': "函数比别名更强"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "带参数的「命令」",
          'code': "mydir() { mkdir -p \"$1\" && cd \"$1\"; }\nmydir /tmp/abc   # 建目录并进入"
        },
        {
          'type': "table",
          'head': [
            "文件/命令",
            "作用"
          ],
          'rows': [
            [
              "~/.bashrc",
              "每次开交互终端加载"
            ],
            [
              "~/.profile",
              "登录时加载"
            ],
            [
              "alias x=命令",
              "起别名，立即生效"
            ],
            [
              "source 文件",
              "让配置立即生效"
            ],
            [
              "export 变量=值",
              "设为环境变量"
            ],
            [
              "函数名() {...}",
              "自定义带参命令"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "alias 只在交互 shell 生效",
          'text': "脚本（非交互 shell）里默认不展开 alias。脚本里想要类似效果，直接定义函数或写完整命令，别依赖 alias。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"环境配置与 alias（.bashrc、别名、持久化）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"环境配置与 alias（.bashrc、别名、持久化）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"环境配置与 alias（.bashrc、别名、持久化）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            ".bashrc 交互终端加载、.profile 登录加载",
            "alias 起别名，source 立即生效",
            "export 变量 >> ~/.bashrc 实现持久化",
            "函数能带参数，比 alias 灵活",
            "脚本里别依赖 alias"
          ]
        }
      ],
      'templates': [
        {
          'name': "给 .bashrc 加个别名",
          'code': "echo \"alias myls=\\\"ls -lh --color=auto\\\"\" >> ~/.bashrc\nsource ~/.bashrc\nmyls"
        }
      ]
    },
    {
      'id': "sh-64",
      'title': "终端技巧与 readline（补全、历史、快捷键）",
      'summary': "Tab 补全、history 历史、Ctrl 组合键、Ctrl+R 搜索，敲命令效率翻倍。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "命令行编辑由 readline 库支撑。学会补全、历史、快捷键，敲命令的速度能快一倍。这些不改变脚本能力，但极大改善日常体验。"
        },
        {
          'type': "h",
          'text': "Tab 自动补全"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "补全路径和命令",
          'code': "cd /usr/l<Tab>   # 自动补全为 /usr/local\nls *.py<Tab>      # 补全通配符匹配\n<Tab><Tab>        # 连续按两次列出所有候选"
        },
        {
          'type': "h",
          'text': "历史记录"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "回看和重用历史",
          'code': "history        # 列出历史\n!123           # 重新执行第 123 条\n!!             # 重跑上一条\n!$             # 上一条命令的最后一个参数"
        },
        {
          'type': "h",
          'text': "常用快捷键"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "移动与删除",
          'code': "Ctrl+A   跳到行首\nCtrl+E   跳到行尾\nCtrl+U   删除到行首\nCtrl+K   删除到行尾\nCtrl+W   删除前一个词\nCtrl+L   清屏（等同 clear）\nCtrl+R   反向搜索历史（按多次继续往前）"
        },
        {
          'type': "h",
          'text': "查看和修改绑定"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "bind 命令",
          'code': "bind -P | grep -i undo\nbind \"\\C-u\":unix-line-discard   # 示例：自定义绑定"
        },
        {
          'type': "table",
          'head': [
            "操作",
            "效果"
          ],
          'rows': [
            [
              "Tab",
              "补全命令/路径/参数"
            ],
            [
              "Ctrl+R",
              "搜索历史命令"
            ],
            [
              "!! / !$",
              "上一条 / 上一条的尾参数"
            ],
            [
              "Ctrl+A / Ctrl+E",
              "行首 / 行尾"
            ],
            [
              "Ctrl+U / Ctrl+K",
              "删到行首 / 删到行尾"
            ],
            [
              "Ctrl+W",
              "删前一个词"
            ],
            [
              "Ctrl+L",
              "清屏"
            ]
          ]
        },
        {
          'type': "tip",
          'title': "Ctrl+R 是效率神器",
          'text': "想重跑一个只记得片段的长命令？按 Ctrl+R 输入几个关键词，历史里立刻匹配出来，回车即执行。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"终端技巧与 readline（补全、历史、快捷键）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"终端技巧与 readline（补全、历史、快捷键）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"终端技巧与 readline（补全、历史、快捷键）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Tab 补全命令/路径，双 Tab 列候选",
            "history / !! / !$ 重用历史",
            "Ctrl+A/E 移动，Ctrl+U/K 删除",
            "Ctrl+R 搜索历史",
            "readline 可用 bind 自定义"
          ]
        }
      ],
      'templates': [
        {
          'name': "看自己最常用的 10 条命令",
          'code': "history | awk \"{print \\$2}\" | sort | uniq -c | sort -rn | head -10"
        }
      ]
    },
    {
      'id': "sh-65",
      'title': "set 与 shopt：Bash 选项开关",
      'summary': "set -x/-e/-u 控制脚本行为，shopt 开关通配符等特性，set -o 查看状态。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "Bash 有几十个可开关的行为选项。<code.inline>set</code.inline> 控制最常用的一批（跟踪、出错退出、未定义变量），<code.inline>shopt</code.inline> 控制通配符、历史等扩展特性。"
        },
        {
          'type': "h",
          'text': "set 常用选项"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "三个最常用的开关",
          'code': "set -x    # 打印每条执行的命令（跟踪）\nset -e    # 命令失败立即退出\nset -u    # 使用未定义变量时报错\nset -o pipefail   # 管道中任一步失败就算整体失败"
        },
        {
          'type': "h",
          'text': "组合开启与关闭"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "一行开三个",
          'code': "set -euo pipefail   # 健壮脚本标配\nset +e              # 关闭 -e（+ 表示关）\nset -v              # 打印读到的输入行"
        },
        {
          'type': "h",
          'text': "shopt 开关扩展特性"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "通配符相关",
          'code': "shopt -s nullglob   # 无匹配时展开为空，而不是保留 *\nshopt -s dotglob    # * 也匹配隐藏文件\nshopt -u dotglob    # 关闭 dotglob\nshopt -s histappend # 历史追加而不是覆盖"
        },
        {
          'type': "h",
          'text': "查看当前设置"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "set -o 与 shopt 查看",
          'code': "set -o          # 列出 set 选项状态\nshopt           # 列出 shopt 选项状态\nshopt -q nullglob && echo \"nullglob 已开启\""
        },
        {
          'type': "table",
          'head': [
            "选项",
            "作用"
          ],
          'rows': [
            [
              "set -x / +x",
              "开/关命令跟踪"
            ],
            [
              "set -e / +e",
              "开/关出错即停"
            ],
            [
              "set -u / +u",
              "开/关未定义变量报错"
            ],
            [
              "set -o pipefail",
              "管道任一失败即失败"
            ],
            [
              "shopt -s nullglob",
              "无匹配时展开为空"
            ],
            [
              "shopt -s dotglob",
              "* 匹配隐藏文件"
            ],
            [
              "shopt -q 选项",
              "查询某选项是否开启"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "set -u 与空变量的坑",
          'text': "开启 set -u 后，未赋值就引用变量会报错。想给「可能没设置」的变量兜底，用默认值语法 <code.inline>${var:-默认}</code.inline>，下一章细讲。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"set 与 shopt：Bash 选项开关\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"set 与 shopt：Bash 选项开关\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"set 与 shopt：Bash 选项开关\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "set 管脚本行为：-x -e -u pipefail",
            "+ 号关闭、- 号开启（set +e）",
            "shopt 管扩展特性：nullglob dotglob",
            "set -o / shopt 查看全部状态",
            "shopt -q 判断某选项是否开启"
          ]
        }
      ],
      'templates': [
        {
          'name': "感受 set -x",
          'code': "set -x\na=10\nb=20\necho \"a+b=$((a+b))\"\nset +x\necho \"跟踪结束\""
        }
      ]
    },
    {
      'id': "sh-66",
      'title': "严格模式与健壮脚本（set -euo pipefail）",
      'summary': "脚本开头三件套防呆：出错即停、变量必定义、管道失败也算失败。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "脚本默认很「宽容」：命令失败也继续跑、用错变量也不吭声。生产脚本要吃这套亏。这一章教你在脚本开头开启「严格模式」，把问题尽早暴露。"
        },
        {
          'type': "h",
          'text': "三件套是什么"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "严格模式开头",
          'code': "#!/usr/bin/env bash\nset -euo pipefail\n\necho \"脚本开始了\"\nls /nonexistent   # -e 会让这行失败后直接退出\necho \"这行不会执行\""
        },
        {
          'type': "h",
          'text': "每个开关的含义"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "逐个解释",
          'code': "set -e          # 出错即停\nset -u          # 未定义变量就报错\nset -o pipefail # 管道中任一步失败就算整体失败\n\n# 未开启时：\necho $未定义的变量   # 输出空，不报错\nls /no | grep x     # ls 失败但管道整体“成功”"
        },
        {
          'type': "h",
          'text': "配合出错函数"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "die 函数统一报错退出",
          'code': "#!/usr/bin/env bash\nset -euo pipefail\ndie() {\n  echo \"错误: $*\" >&2\n  exit 1\n}\n\n[ -f config.conf ] || die \"缺少配置文件\"\necho \"继续执行\""
        },
        {
          'type': "h",
          'text': "变量默认值兜底"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "${var:-默认}",
          'code': "name=${1:-默认名字}\necho \"你好，$name\"\nport=${PORT:-8080}\necho \"端口 $port\"\ncount=${count:-0}\necho \"计数 $count\"   # 未定义也不报错"
        },
        {
          'type': "h",
          'text': "检查命令是否存在"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "依赖检测",
          'code': "command -v curl >/dev/null || die \"需要安装 curl\"\ncommand -v jq  >/dev/null || die \"需要安装 jq\"\necho \"依赖齐全\""
        },
        {
          'type': "table",
          'head': [
            "写法",
            "作用"
          ],
          'rows': [
            [
              "set -e",
              "命令失败立即退出"
            ],
            [
              "set -u",
              "未定义变量报错"
            ],
            [
              "set -o pipefail",
              "管道任一失败即失败"
            ],
            [
              "${var:-默认}",
              "变量为空/未定义时用默认值"
            ],
            [
              "command -v x",
              "检测命令是否存在"
            ],
            [
              "die() {...}",
              "统一错误处理函数"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "set -e 在条件里不生效",
          'text': "在 if 判断、<code.inline>cmd1 && cmd2</code.inline> 左侧、管道中间等「被当作判断」的位置，命令失败不会触发 set -e，这是设计行为，别误以为脚本坏了。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"严格模式与健壮脚本（set -euo pipefail）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"严格模式与健壮脚本（set -euo pipefail）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"严格模式与健壮脚本（set -euo pipefail）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "set -euo pipefail 严格模式三件套",
            "-e 出错即停、-u 变量必定义",
            "pipefail 让管道整体感知失败",
            "${var:-默认} 给未定义变量兜底",
            "command -v 检测依赖命令"
          ]
        }
      ],
      'templates': [
        {
          'name': "严格模式骨架",
          'code': "#!/usr/bin/env bash\nset -euo pipefail\ndie() { echo \"错误: $*\" >&2; exit 1; }\ncommand -v curl >/dev/null || die \"需要 curl\"\necho \"脚本就绪\""
        }
      ]
    },
    {
      'id': "sh-67",
      'title': "错误处理与日志记录（log 函数、trap ERR）",
      'summary': "写日志函数统一记录、trap ERR 捕捉意外错误、退出码让调用方知道成败。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "脚本跑在没人盯着的半夜，出错怎么排查？答案是日志。这一章教你把「什么时候、发生了什么」记下来，并用 trap ERR 捕获意外错误。"
        },
        {
          'type': "h",
          'text': "统一的日志函数"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "log 函数带时间戳",
          'code': "log() {\n  echo \"[$(date +\"%F %T\")] $*\" >> app.log\n}\nlog \"服务启动\"\nlog \"开始处理数据\"\nlog \"处理完成\""
        },
        {
          'type': "h",
          'text': "trap ERR 捕获错误"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "出错时自动记录",
          'code': "#!/usr/bin/env bash\nset -e\nlog() { echo \"[$(date +\"%F %T\")] $*\" >> app.log; }\ntrap \"log 脚本在第 $LINENO 行出错\" ERR\n\nlog \"开始\"\nfalse      # 触发 ERR\necho \"继续\""
        },
        {
          'type': "h",
          'text': "退出码让调用方知道结果"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "成功返回 0，失败返回非 0",
          'code': "if [ -f config.conf ]; then\n  echo \"配置存在\"\n  exit 0\nelse\n  echo \"配置缺失\" >&2\n  exit 1\nfi"
        },
        {
          'type': "h",
          'text': "简洁的条件处理"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "&& 与 || 一行搞定",
          'code': "make && echo \"构建成功\" || { echo \"构建失败\" >&2; exit 1; }\ncp a.txt b.txt || die \"复制失败\""
        },
        {
          'type': "table",
          'head': [
            "技术",
            "用途"
          ],
          'rows': [
            [
              "log() 函数",
              "统一格式写日志"
            ],
            [
              "trap ... ERR",
              "意外错误自动记录"
            ],
            [
              "$LINENO",
              "出错所在行号"
            ],
            [
              "exit 0 / exit 1",
              "成功/失败退出码"
            ],
            [
              "cmd && A || B",
              "成功做 A，失败做 B"
            ],
            [
              ">&2",
              "错误信息写到 stderr"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "别到处用 $? 判断",
          'text': "<code.inline>$?</code.inline> 只能取「上一条命令」的退出码，中间多一条 echo 就被覆盖了。要判断就用 <code.inline>if 命令; then</code.inline> 或 <code.inline>cmd && A || B</code.inline>，更可靠。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"错误处理与日志记录（log 函数、trap ERR）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"错误处理与日志记录（log 函数、trap ERR）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"错误处理与日志记录（log 函数、trap ERR）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "log() 函数统一记日志，带时间戳",
            "trap ... ERR + $LINENO 记录出错位置",
            "exit 0 成功、非 0 失败",
            "if 命令 / cmd && A || B 判断成败",
            "错误信息写 stderr（>&2）"
          ]
        }
      ],
      'templates': [
        {
          'name': "带日志的小脚本",
          'code': "log() { echo \"[$(date +\"%F %T\")] $*\" >> app.log; }\nlog \"开始备份\"\ntar -czf backup.tar.gz /var/www 2>/dev/null && log \"备份成功\" || log \"备份失败\"\ncat app.log"
        }
      ]
    },
    {
      'id': "sh-68",
      'title': "并行处理（xargs -P、wait 并行、GNU parallel）",
      'summary': "多个任务同时跑：xargs -P 控制并发数，后台 & 加 wait，parallel 更强大。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "处理 1000 个文件、下载 100 个 URL，一个个来太慢。并行让它们同时跑，配合并发数限制防止把机器压垮。"
        },
        {
          'type': "h",
          'text': "xargs -P 并行"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "4 个同时跑",
          'code': "seq 1 10 | xargs -P 4 -I{} echo \"处理 {}\"\ncat urls.txt | xargs -P 5 -I{} curl -O {}"
        },
        {
          'type': "h",
          'text': "后台 & 加 wait"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "并行并等待",
          'code': "for i in 1 2 3 4; do\n  (sleep $i; echo \"任务$i完成\") &\ndone\nwait\necho \"全部完成\""
        },
        {
          'type': "h",
          'text': "手动限制并发数"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "最多同时 4 个",
          'code': "jobs=0\nfor i in $(seq 1 10); do\n  (sleep 1; echo \"job $i 完成\") &\n  jobs=$((jobs + 1))\n  if [ $jobs -ge 4 ]; then\n    wait -n     # 等最早结束的一个\n    jobs=$((jobs - 1))\n  fi\ndone\nwait\necho \"全部完成\""
        },
        {
          'type': "h",
          'text': "GNU parallel（更强）"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "parallel 简介",
          'code': "parallel -j 4 echo \"跑 {}\" ::: 1 2 3 4 5\nparallel -j 4 -a urls.txt curl -O {}"
        },
        {
          'type': "table",
          'head': [
            "方法",
            "用途",
            "特点"
          ],
          'rows': [
            [
              "xargs -P N",
              "按行输入并行执行",
              "简单，适合管道数据"
            ],
            [
              "cmd & ... wait",
              "手写并行",
              "灵活，但要自己管"
            ],
            [
              "wait -n",
              "等最早完成的一个",
              "配合手动限流"
            ],
            [
              "GNU parallel",
              "复杂并行任务",
              "功能最强，需单独安装"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "并发写同一文件会互相覆盖",
          'text': "多个并行任务同时 echo >> 到同一个日志，内容会乱串甚至丢失。每个任务写自己的文件，或串行写日志。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"并行处理（xargs -P、wait 并行、GNU parallel）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"并行处理（xargs -P、wait 并行、GNU parallel）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"并行处理（xargs -P、wait 并行、GNU parallel）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "xargs -P N 控制并发数",
            "cmd & 放后台、wait 统一等待",
            "wait -n 等最早结束的，可做限流",
            "GNU parallel 处理复杂并行",
            "并发任务别同时写同一文件"
          ]
        }
      ],
      'templates': [
        {
          'name': "并行下载多个文件",
          'code': "printf \"a.zip\\nb.zip\\nc.zip\\n\" > list.txt\ncat list.txt | xargs -P 3 -I{} wget https://example.com/{}"
        }
      ]
    },
    {
      'id': "sh-69",
      'title': "find 高级用法（时间、大小、-exec、-print0）",
      'summary': "按名字类型时间大小找文件，-exec 对结果执行命令，-print0 防空格坑。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "find 不只会按名字找文件，还能按修改时间、大小、权限筛选，并直接对结果执行命令。这一章把 find 用透。"
        },
        {
          'type': "h",
          'text': "按名字与类型"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "基础筛选",
          'code': "find /tmp -name \"*.log\"\nfind . -type f      # 只找文件\nfind . -type d      # 只找目录\nfind . -name \"*.py\" -type f   # 组合条件"
        },
        {
          'type': "h",
          'text': "按修改时间"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "最近/较早修改",
          'code': "find . -mtime -7    # 7 天内修改过的\nfind . -mtime +30   # 30 天前修改过的\nfind . -newer setup.sh   # 比某文件更新的"
        },
        {
          'type': "h",
          'text': "按大小"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "大文件定位",
          'code': "find . -size +100M   # 大于 100MB\nfind . -size -1k      # 小于 1KB\nfind . -size +10k -size -1M"
        },
        {
          'type': "h",
          'text': "-exec 对结果执行命令"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "批量操作",
          'code': "find . -name \"*.tmp\" -exec rm {} \\;\nfind . -type f -exec chmod 644 {} \\;\nfind . -name \"*.jpg\" -exec ls -lh {} +"
        },
        {
          'type': "h",
          'text': "-print0 防空格文件名"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "配合 xargs -0",
          'code': "find . -name \"*.log\" -print0 | xargs -0 rm\nfind . -name \"*.zip\" -delete   # 更简单的删除"
        },
        {
          'type': "table",
          'head': [
            "参数",
            "作用"
          ],
          'rows': [
            [
              "-name / -iname",
              "按名字（忽略大小写）"
            ],
            [
              "-type f / d",
              "文件 / 目录"
            ],
            [
              "-mtime -7 / +30",
              "7 天内 / 30 天前修改"
            ],
            [
              "-size +100M",
              "大于 100MB"
            ],
            [
              "-newer 文件",
              "比某文件新"
            ],
            [
              "-exec 命令 {} \\;",
              "对每个结果执行"
            ],
            [
              "-print0 | xargs -0",
              "安全处理含空格文件名"
            ],
            [
              "-delete",
              "直接删除结果"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "文件名带空格别用默认 xargs",
          'text': "<code.inline>find . -print | xargs rm</code.inline> 遇到 <code.inline>我的 文件.txt</code.inline> 会拆词出错。必须用 <code.inline>-print0</code> 配合 <code.inline>xargs -0</code>。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"find 高级用法（时间、大小、-exec、-print0）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"find 高级用法（时间、大小、-exec、-print0）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"find 高级用法（时间、大小、-exec、-print0）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "find 按名字/类型/时间/大小筛选",
            "-mtime -7 最近修改、-size +100M 大文件",
            "-exec 命令 {} \\; 对结果执行",
            "-delete 直接删除",
            "-print0 + xargs -0 防空格文件名"
          ]
        }
      ],
      'templates': [
        {
          'name': "清理 7 天前的临时文件",
          'code': "find /tmp -name \"*.tmp\" -mtime +7 -delete\necho \"已清理 7 天前的 .tmp 文件\""
        }
      ]
    },
    {
      'id': "sh-70",
      'title': "权限与安全（sudo、umask、setuid、防注入）",
      'summary': "sudo 提权、umask 默认权限、特殊权限位、脚本里的安全红线。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "权限管理不当是安全漏洞的最大来源。这一章讲 sudo 提权、umask 默认权限、特殊权限位，以及脚本里必须守的安全红线。"
        },
        {
          'type': "h",
          'text': "sudo 提权"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "临时用 root 权限",
          'code': "sudo apt update\nsudo -l        # 看当前用户能执行哪些 sudo 命令\nsudo -i        # 进入 root shell（慎用）"
        },
        {
          'type': "h",
          'text': "umask：新文件的默认权限"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "umask 决定默认权限",
          'code': "umask          # 查看，常见 022\ntouch new1\nls -l new1     # 644\numask 077      # 新文件默认只给自己读写\ntouch new2\nls -l new2     # 600"
        },
        {
          'type': "h",
          'text': "特殊权限位"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "s 与 t 权限",
          'code': "ls -l /usr/bin/passwd   # 属主是 root 且有 s\nchmod u+s script.sh      # 加 setuid（危险！慎用）\nls -ld /tmp              # 有 t（sticky 位）"
        },
        {
          'type': "h",
          'text': "脚本里检查权限"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "先检查再干活",
          'code': "if [ -w /etc ]; then\n  echo \"有写权限\"\nelse\n  echo \"没有写权限，换个方式\"\nfi\n[ -r config.conf ] || echo \"读不了配置\""
        },
        {
          'type': "h",
          'text': "防注入：永远别 eval 不可信输入"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "对比安全与危险",
          'code': "name=\"abc; rm -rf /\"\necho \"$name\"      # 安全：当普通字符串打印\neval \"echo $name\" # 危险！会执行 rm -rf /"
        },
        {
          'type': "table",
          'head': [
            "主题",
            "要点"
          ],
          'rows': [
            [
              "sudo",
              "以 root 权限执行，sudo -l 查看权限"
            ],
            [
              "umask",
              "022=默认644/755，077=只给自己"
            ],
            [
              "setuid (s)",
              "以属主身份运行，极危险"
            ],
            [
              "sticky (t)",
              "/tmp 防别人删自己文件"
            ],
            [
              "权限测试",
              "-w -r -x 判断读写执行权限"
            ],
            [
              "eval",
              "执行拼接的命令，勿用于不可信输入"
            ]
          ]
        },
        {
          'type': "danger",
          'title': "eval 是最危险的内建命令",
          'text': "<code.inline>eval \"echo $name\"</code.inline> 会把 <code.inline>$name</code.inline> 的内容当成命令执行。用户输入里藏一句 <code.inline>rm -rf /</code.inline> 就直接中招。规则：不要对任何不可信输入使用 eval。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"权限与安全（sudo、umask、setuid、防注入）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"权限与安全（sudo、umask、setuid、防注入）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"权限与安全（sudo、umask、setuid、防注入）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "sudo 提权，sudo -l 看可用权限",
            "umask 决定新文件默认权限",
            "setuid/sticky 特殊权限要小心",
            "脚本里先用 -w -r 检查权限",
            "绝不 eval 不可信输入"
          ]
        }
      ],
      'templates': [
        {
          'name': "检查是否有写权限",
          'code': "if [ -w . ]; then\n  echo \"当前目录可写，继续\"\nelse\n  echo \"没有写权限，退出\"\n  exit 1\nfi"
        }
      ]
    },
    {
      'id': "sh-71",
      'title': "文件校验与加密（md5sum、sha256sum、gpg）",
      'summary': "哈希校验文件完整性，sha256sum 防篡改，base64 编码，gpg 加密解密。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "下载的文件被篡改过吗？备份的数据完整吗？密码想加密存放？这一章讲哈希校验（md5sum、sha256sum）和加密工具。"
        },
        {
          'type': "h",
          'text': "md5 与 sha256 校验"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "计算哈希",
          'code': "echo -n \"hello\" | md5sum\necho -n \"hello\" | sha256sum\nsha256sum file.txt"
        },
        {
          'type': "h",
          'text': "校验文件是否一致"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "生成清单并核对",
          'code': "md5sum file1.txt file2.txt > checksum.md5\nmd5sum -c checksum.md5\n# 输出 OK 表示一致，FAILED 表示被改过"
        },
        {
          'type': "h",
          'text': "下载后和官网比对"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "防止下载被篡改",
          'code': "curl -O https://example.com/app.zip\nsha256sum app.zip\n# 把结果和官网公布的哈希值逐字比对，一致才放心"
        },
        {
          'type': "h",
          'text': "base64 编码（不是加密）"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "编码与解码",
          'code': "echo -n \"hello\" | base64        # aGVsbG8=\nbase64 -d <<< \"aGVsbG8=\"         # 解码回 hello"
        },
        {
          'type': "h",
          'text': "gpg 加密文件"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "对称加密与解密",
          'code': "gpg --full-generate-key   # 首次生成密钥对\n gpg -c secret.txt         # 用口令对称加密\n gpg -d secret.txt.gpg     # 解密"
        },
        {
          'type': "table",
          'head': [
            "命令",
            "用途"
          ],
          'rows': [
            [
              "md5sum / sha256sum",
              "计算/校验文件哈希"
            ],
            [
              "sha256sum -c 清单",
              "批量校验是否被改"
            ],
            [
              "base64",
              "编码（可逆，非加密）"
            ],
            [
              "gpg -c",
              "口令加密文件"
            ],
            [
              "gpg -d",
              "解密文件"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "哈希不等于加密",
          'text': "md5/sha 是「摘要」，用来验完整性和防篡改，不是加密——从哈希还原不出原文。真正加密用 gpg、openssl。md5 已有碰撞风险，重要场景用 sha256。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"文件校验与加密（md5sum、sha256sum、gpg）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"文件校验与加密（md5sum、sha256sum、gpg）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"文件校验与加密（md5sum、sha256sum、gpg）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "md5sum/sha256sum 算哈希验证完整性",
            "生成 .md5 清单后 -c 批量校验",
            "下载完和官网哈希比对防篡改",
            "base64 只是编码，可逆",
            "gpg 加密解密，sha256 比 md5 安全"
          ]
        }
      ],
      'templates': [
        {
          'name': "校验下载文件",
          'code': "wget https://example.com/app.zip\nsha256sum app.zip > app.zip.sha256\nsha256sum -c app.zip.sha256"
        }
      ]
    },
    {
      'id': "sh-72",
      'title': "可移植脚本（shebang、版本检测、跨平台）",
      'summary': "写一处脚本多环境跑：env 式 shebang、检测 Bash 版本、按系统分支处理。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "脚本可能要在不同 Linux 发行版、macOS、甚至 Windows 的 Git Bash 上跑。这一章讲可移植性的关键点，让脚本换个环境也能跑。"
        },
        {
          'type': "h",
          'text': "shebang 的两种写法"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "更可移植的 shebang",
          'code': "#!/usr/bin/env bash    # 用 PATH 里找到的 bash，更通用\n#!/bin/bash             # 指定绝对路径，最直接"
        },
        {
          'type': "h",
          'text': "检测 Bash 版本"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "版本太低就警告",
          'code': "echo \"Bash 版本: $BASH_VERSION\"\nif [ \"${BASH_VERSINFO[0]}\" -lt 4 ]; then\n  echo \"警告：需要 Bash 4+，部分语法不可用\"\nfi"
        },
        {
          'type': "h",
          'text': "按操作系统分支"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "uname 判断系统",
          'code': "case \"$(uname)\" in\n  Linux)   echo \"Linux 系统\";;\n  Darwin)  echo \"macOS 系统\";;\n  MINGW*|MSYS*) echo \"Windows (Git Bash)\";;\n  *)       echo \"未知系统: $(uname)\";;\nesac"
        },
        {
          'type': "h",
          'text': "判断是否被 source 还是直接执行"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "区分两种调用方式",
          'code': "if [ \"${BASH_SOURCE[0]}\" = \"$0\" ]; then\n  echo \"直接执行脚本\"\nelse\n  echo \"被 source 引入（当库用）\"\nfi"
        },
        {
          'type': "h",
          'text': "依赖工具检测"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "缺啥报啥",
          'code': "for c in git curl node python3; do\n  if command -v $c >/dev/null 2>&1; then\n    echo \"$c OK\"\n  else\n    echo \"$c 缺失\"\n  fi\ndone"
        },
        {
          'type': "table",
          'head': [
            "做法",
            "作用"
          ],
          'rows': [
            [
              "#!/usr/bin/env bash",
              "按 PATH 找 bash，更可移植"
            ],
            [
              "$BASH_VERSION",
              "查看版本，做兼容判断"
            ],
            [
              "case \"$(uname)\"",
              "按系统分支处理"
            ],
            [
              "${BASH_SOURCE[0]} = $0",
              "判断是执行还是被 source"
            ],
            [
              "command -v 工具",
              "检测依赖是否安装"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "sh 不是 bash",
          'text': "很多系统 <code.inline>sh</code.inline> 指向 dash（一个精简 shell），不支持 <code.inline>[[ ]]</code.inline>、数组等 bash 特性。写了 bash 语法就老老实实用 <code.inline>#!/usr/bin/env bash</code.inline> 并用 <code.inline>bash 脚本</code.inline> 运行。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"可移植脚本（shebang、版本检测、跨平台）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"可移植脚本（shebang、版本检测、跨平台）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"可移植脚本（shebang、版本检测、跨平台）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "env 式 shebang 更通用",
            "$BASH_VERSION 检测版本做兼容",
            "case \"$(uname)\" 按系统分支",
            "BASH_SOURCE 判断执行方式",
            "sh≠bash，别拿 sh 跑 bash 语法"
          ]
        }
      ],
      'templates': [
        {
          'name': "跨平台问候",
          'code': "case \"$(uname)\" in\n  Linux) echo \"你好，Linux\";;\n  Darwin) echo \"你好，macOS\";;\n  MINGW*|MSYS*) echo \"你好，Windows\";;\n  *) echo \"你好，未知系统\";;\nesac"
        }
      ]
    },
    {
      'id': "sh-73",
      'title': "实战：开发一个命令行工具（getopts 完整版）",
      'summary': "getopts 解析 -v -n 选项，配合帮助信息、版本号，做出规范的命令行工具。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "把零散知识收拢成一件作品：用 getopts 做一个带选项、带帮助、带参数的命令行小工具。以后你的脚本就能像 <code.inline>ls -l</code.inline> 一样规范地收参数。"
        },
        {
          'type': "h",
          'text': "getopts 解析选项"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "解析 -v -n -h",
          'code': "#!/usr/bin/env bash\ncount=1\nwhile getopts \"vn:h\" opt; do\n  case $opt in\n    v) echo \"版本 1.0.0\"; exit 0;;\n    n) count=$OPTARG;;\n    h) echo \"用法: $0 [-v] [-n 次数] 名字\"; exit 0;;\n    *) echo \"未知选项\"; exit 1;;\n  esac\ndone"
        },
        {
          'type': "p",
          'text': "<code.inline>getopts \"vn:h\"</code.inline> 里的字符串声明了支持的选项：<code.inline>v</code.inline> 和 <code.inline>h</code.inline> 是无参数选项，<code.inline>n:</code.inline> 后面的冒号表示 <code.inline>-n</code.inline> 需要一个参数，参数值在 <code.inline>$OPTARG</code.inline> 里。"
        },
        {
          'type': "h",
          'text': "选项和位置参数分离"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "shift 去掉选项",
          'code': "shift $((OPTIND - 1))\nname=${1:-世界}\necho \"你好，$name！\""
        },
        {
          'type': "h",
          'text': "完整版工具"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "可运行的完整工具",
          'code': "#!/usr/bin/env bash\nusage() {\n  cat <<EOF\n用法: $0 [-v] [-n 次数] 名字\n\n选项:\n  -v         显示版本号\n  -n 次数    重复问候次数（默认 1）\n  -h         显示本帮助\nEOF\n  exit 0\n}\ncount=1\nwhile getopts \"vn:h\" opt; do\n  case $opt in\n    v) echo \"greet v1.0.0\"; exit 0;;\n    n) count=$OPTARG;;\n    h) usage;;\n    *) usage;;\n  esac\ndone\nshift $((OPTIND - 1))\nname=${1:-世界}\nfor i in $(seq 1 \"$count\"); do\n  echo \"你好，$name！($i)\"\ndone"
        },
        {
          'type': "h",
          'text': "运行效果"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "试试各种用法",
          'code': "./greet.sh 小明\n./greet.sh -n 3 小红\n./greet.sh -v\n./greet.sh -h"
        },
        {
          'type': "table",
          'head': [
            "要点",
            "说明"
          ],
          'rows': [
            [
              "getopts \"ab:c\"",
              "声明选项，冒号表示需要参数"
            ],
            [
              "$OPTARG",
              "选项的参数值"
            ],
            [
              "$OPTIND",
              "下一个待处理参数的下标"
            ],
            [
              "shift $((OPTIND-1))",
              "跳过选项，剩位置参数"
            ],
            [
              "usage() 函数",
              "统一帮助信息"
            ]
          ]
        },
        {
          'type': "tip",
          'title': "工具要带帮助和版本",
          'text': "一个合格命令行工具至少要有 <code.inline>-h</code.inline>（帮助）和 <code.inline>-v</code.inline>（版本），这是 Unix 工具的通用约定，用户会习惯性先敲它们。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"实战：开发一个命令行工具（getopts 完整版）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"实战：开发一个命令行工具（getopts 完整版）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"实战：开发一个命令行工具（getopts 完整版）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "getopts 字符串声明选项，冒号=需参数",
            "$OPTARG 取值、$OPTIND 定位",
            "shift $((OPTIND-1)) 分离位置参数",
            "usage() 帮助 + -h -v 约定",
            "完整工具：选项+参数+帮助+版本"
          ]
        }
      ],
      'templates': [
        {
          'name': "greet 问候工具",
          'code': "#!/usr/bin/env bash\nusage() { echo \"用法: $0 [-n 次数] 名字\"; exit 0; }\ncount=1\nwhile getopts \"n:h\" opt; do\n  case $opt in\n    n) count=$OPTARG;;\n    h) usage;;\n    *) usage;;\n  esac\ndone\nshift $((OPTIND - 1))\nname=${1:-世界}\nfor i in $(seq 1 \"$count\"); do\n  echo \"你好，$name！($i)\"\ndone"
        }
      ]
    },
    {
      'id': "sh-74",
      'title': "实战：一键部署脚本（初始化环境）",
      'summary': "把装依赖、拉代码、构建、重启服务串成一条命令，部署不再手忙脚乱。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "部署服务是最典型的自动化场景：检查权限、装依赖、拉代码、构建、重启服务。手写容易漏步骤，写成脚本一次搞定。"
        },
        {
          'type': "h",
          'text': "脚本骨架与检查"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "严格模式 + 日志 + 权限检查",
          'code': "#!/usr/bin/env bash\nset -euo pipefail\nLOG=deploy.log\nlog() { echo \"[$(date +\"%F %T\")] $*\" | tee -a \"$LOG\"; }\ndie() { log \"错误: $*\"; exit 1; }\n\n[ \"$(id -u)\" -eq 0 ] || die \"请用 root 或 sudo 运行\"\nlog \"开始部署\""
        },
        {
          'type': "h",
          'text': "检查依赖是否齐全"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "缺依赖直接报错",
          'code': "for c in git curl make; do\n  command -v $c >/dev/null || die \"缺少依赖: $c\"\ndone\nlog \"依赖检查通过\""
        },
        {
          'type': "h",
          'text': "拉代码与构建"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "拉取最新代码并构建",
          'code': "cd /srv/app\nif [ -d .git ]; then\n  git pull || die \"拉取代码失败\"\nelse\n  git clone https://example.com/repo.git . || die \"克隆失败\"\nfi\nmake build || die \"构建失败\"\nlog \"代码就绪\""
        },
        {
          'type': "h",
          'text': "重启服务并验证"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "重启 + 检查状态",
          'code': "systemctl restart myapp || die \"重启失败\"\nsleep 2\nsystemctl is-active myapp >/dev/null || die \"服务未运行\"\nlog \"服务运行正常\""
        },
        {
          'type': "h",
          'text': "完整一键脚本"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "合起来的完整版",
          'code': "#!/usr/bin/env bash\nset -euo pipefail\nLOG=deploy.log\nlog() { echo \"[$(date +\"%F %T\")] $*\" | tee -a \"$LOG\"; }\ndie() { log \"错误: $*\"; exit 1; }\n\nlog \"== 部署开始 ==\"\ncd /srv/app\nfor c in git make; do\n  command -v $c >/dev/null || die \"缺少依赖: $c\"\ndone\ngit pull || die \"拉取失败\"\nmake build || die \"构建失败\"\nsystemctl restart myapp || die \"重启失败\"\nlog \"== 部署完成 ==\""
        },
        {
          'type': "table",
          'head': [
            "阶段",
            "关键命令"
          ],
          'rows': [
            [
              "权限",
              "[ \"$(id -u)\" -eq 0 ]"
            ],
            [
              "依赖",
              "command -v 工具"
            ],
            [
              "代码",
              "git pull / git clone"
            ],
            [
              "构建",
              "make build"
            ],
            [
              "服务",
              "systemctl restart + is-active"
            ],
            [
              "日志",
              "log()/die() 统一记录"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "生产脚本先在小环境演练",
          'text': "部署脚本会动真实环境，一定先在测试机完整跑通，再上生产。出了错，日志和 die() 能帮你快速定位是哪一步。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"实战：一键部署脚本（初始化环境）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"实战：一键部署脚本（初始化环境）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"实战：一键部署脚本（初始化环境）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "set -euo pipefail + log/die 保证可追查",
            "先检查权限和依赖再动手",
            "git pull 拉码、make build 构建",
            "systemctl restart + is-active 验证服务",
            "生产部署脚本先演练再上线"
          ]
        }
      ],
      'templates': [
        {
          'name': "部署脚本骨架",
          'code': "#!/usr/bin/env bash\nset -euo pipefail\nLOG=deploy.log\nlog() { echo \"[$(date +\"%F %T\")] $*\" | tee -a \"$LOG\"; }\ndie() { log \"错误: $*\"; exit 1; }\nlog \"开始\"\n# 在这里写你的部署步骤\nlog \"结束\""
        }
      ]
    },
    {
      'id': "sh-75",
      'title': "实战：系统监控与告警脚本",
      'summary': "自动检查磁盘、内存、负载，超阈值写告警日志，配合 cron 定时巡检。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "服务器半夜磁盘满了没人知道。把第 54 章的监控命令做成自动检查：超过阈值就告警，配合 cron 每天/每小时跑一次，实现无人值守巡检。"
        },
        {
          'type': "h",
          'text': "磁盘使用率检查"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "超过 80% 就告警",
          'code': "usage=$(df -h / | tail -1 | tr -s \" \" | cut -d\" \" -f5 | tr -d \"%\")\nif [ \"$usage\" -gt 80 ]; then\n  echo \"警告：磁盘使用率已达 ${usage}%\"\nelse\n  echo \"磁盘正常：${usage}%\"\nfi"
        },
        {
          'type': "h",
          'text': "内存使用检查"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "看内存用了多少",
          'code': "total=$(free -m | tr -s \" \" | sed -n \"2p\" | cut -d\" \" -f2)\nused=$(free -m | tr -s \" \" | sed -n \"2p\" | cut -d\" \" -f3)\necho \"内存 ${used}M / ${total}M\"\nif [ $((used * 100 / total)) -gt 90 ]; then\n  echo \"警告：内存使用率过高\"\nfi"
        },
        {
          'type': "h",
          'text': "负载检查"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "负载过高告警",
          'code': "load=$(uptime | grep -o \"load average.*\" | cut -d: -f2)\necho \"当前负载:$load\"\n# 1 分钟负载超过 CPU 核数就告警\nif [ \"$(uptime | awk -F\"load average: \" \"{print \\$2}\" | cut -d. -f1)\" -gt 4 ]; then\n  echo \"警告：负载过高\"\nfi"
        },
        {
          'type': "h",
          'text': "写告警日志"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "把告警记下来",
          'code': "alert() {\n  echo \"[$(date +\"%F %T\")] $*\" >> /var/log/monitor.log\n}\nusage=$(df -h / | tail -1 | tr -s \" \" | cut -d\" \" -f5 | tr -d \"%\")\n[ \"$usage\" -gt 80 ] && alert \"磁盘告警: ${usage}%\" || echo \"磁盘正常\""
        },
        {
          'type': "h",
          'text': "完整巡检脚本"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "磁盘+内存+负载一体",
          'code': "#!/usr/bin/env bash\nLOG=/var/log/monitor.log\nalert() { echo \"[$(date +\"%F %T\")] $*\" >> \"$LOG\"; }\n\n# 磁盘\nusage=$(df -h / | tail -1 | tr -s \" \" | cut -d\" \" -f5 | tr -d \"%\")\n[ \"$usage\" -gt 80 ] && alert \"磁盘使用率 ${usage}%\"\n\n# 内存\ntotal=$(free -m | tr -s \" \" | sed -n \"2p\" | cut -d\" \" -f2)\nused=$(free -m | tr -s \" \" | sed -n \"2p\" | cut -d\" \" -f3)\n[ $((used * 100 / total)) -gt 90 ] && alert \"内存使用率过高 ${used}M/${total}M\"\n\necho \"巡检完成，日志见 $LOG\""
        },
        {
          'type': "table",
          'head': [
            "指标",
            "命令",
            "告警线"
          ],
          'rows': [
            [
              "磁盘",
              "df -h /",
              ">80%"
            ],
            [
              "内存",
              "free -m",
              ">90%"
            ],
            [
              "负载",
              "uptime",
              ">CPU核数"
            ]
          ]
        },
        {
          'type': "tip",
          'title': "接入 cron 实现自动巡检",
          'text': "把脚本存成 check.sh 加执行权限，然后 <code.inline>crontab -e</code.inline> 加一行：<code.inline>*/30 * * * * /home/me/check.sh</code.inline>，每半小时自动跑一次。"
        },
        {
          'type': "warn",
          'title': "告警阈值要留余量",
          'text': "磁盘 80% 就告警，别等到 99%——那时可能连清理空间都来不及了。内存、负载同理，留出反应时间。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"实战：系统监控与告警脚本\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"实战：系统监控与告警脚本\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"实战：系统监控与告警脚本\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "df/free/uptime 取关键指标",
            "tr -s + cut 提取字段数值",
            "超过阈值写告警日志",
            "完整脚本：磁盘+内存+负载",
            "配合 cron 实现定时自动巡检"
          ]
        }
      ],
      'templates': [
        {
          'name': "磁盘告警小脚本",
          'code': "usage=$(df -h / | tail -1 | tr -s \" \" | cut -d\" \" -f5 | tr -d \"%\")\n[ \"$usage\" -gt 80 ] && echo \"磁盘告警 ${usage}%\" || echo \"磁盘正常 ${usage}%\""
        }
      ]
    },
    {
      'id': "sh-76",
      'title': "实战：数据备份与恢复脚本",
      'summary': "定时打包网站、备份数据库、只保留最近 N 份，出问题能快速恢复。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "备份的黄金法则是「3-2-1」：3 份副本、2 种介质、1 份异地。这一章用 tar 打包网站、mysqldump 备份数据库，并自动清理旧备份。"
        },
        {
          'type': "h",
          'text': "打包目录"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "带时间戳的备份",
          'code': "backup_dir=/backup\nstamp=$(date +%F_%H%M)\ntar -czf \"$backup_dir/www-$stamp.tar.gz\" /var/www\nls -lh \"$backup_dir\"/www-$stamp.tar.gz"
        },
        {
          'type': "h",
          'text': "只保留最近 N 份"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "保留最近 6 份，其余删除",
          'code': "ls -t /backup/www-*.tar.gz | tail -n +7 | xargs -r rm\necho \"清理完成，剩余:\"\nls /backup/www-*.tar.gz"
        },
        {
          'type': "h",
          'text': "备份数据库"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "mysqldump 导出",
          'code': "stamp=$(date +%F)\nmysqldump -u root mydb > /backup/db-$stamp.sql\ngzip /backup/db-$stamp.sql\nls -lh /backup/db-$stamp.sql.gz"
        },
        {
          'type': "h",
          'text': "恢复演练"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "备份要能恢复才是备份",
          'code': "# 恢复网站\nmkdir -p /tmp/restore\ntar -xzf /backup/www-2026-01-01.tar.gz -C /tmp/restore\n# 恢复数据库\ngzip -d db-2026-01-01.sql.gz\nmysql -u root mydb < db-2026-01-01.sql"
        },
        {
          'type': "h",
          'text': "完整备份脚本"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "一键全量备份",
          'code': "#!/usr/bin/env bash\nset -euo pipefail\nbackup_dir=/backup\nstamp=$(date +%F)\nlog() { echo \"[$(date +\"%F %T\")] $*\" >> \"$backup_dir/backup.log\"; }\n\nlog \"开始备份\"\ntar -czf \"$backup_dir/www-$stamp.tar.gz\" /var/www 2>/dev/null || { log \"网站备份失败\"; exit 1; }\nls -t \"$backup_dir\"/www-*.tar.gz | tail -n +8 | xargs -r rm\nlog \"备份完成: $backup_dir/www-$stamp.tar.gz\""
        },
        {
          'type': "table",
          'head': [
            "操作",
            "命令"
          ],
          'rows': [
            [
              "打包",
              "tar -czf 备份.tar.gz 目录"
            ],
            [
              "带时间戳",
              "date +%F_%H%M"
            ],
            [
              "清理旧备份",
              "ls -t | tail -n +N | xargs rm"
            ],
            [
              "数据库导出",
              "mysqldump -u 用户 库"
            ],
            [
              "恢复",
              "tar -xzf / gzip -d + mysql <"
            ]
          ]
        },
        {
          'type': "danger",
          'title': "备份不测试等于没有备份",
          'text': "定期从备份里实际恢复一次！很多事故是「备份了一堆，恢复时才发现是坏的」。恢复演练要和备份一样成为例行任务。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"实战：数据备份与恢复脚本\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"实战：数据备份与恢复脚本\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"实战：数据备份与恢复脚本\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "tar + date 时间戳生成带日期的备份",
            "ls -t | tail +N | xargs rm 只留最近 N 份",
            "mysqldump 导出、gzip 压缩数据库",
            "恢复：tar -xzf、mysql < 导入",
            "定期做恢复演练，别让备份成摆设"
          ]
        }
      ],
      'templates': [
        {
          'name': "每日备份脚本",
          'code': "#!/usr/bin/env bash\nbackup_dir=/backup\nstamp=$(date +%F)\ntar -czf \"$backup_dir/www-$stamp.tar.gz\" /var/www 2>/dev/null\nls -t \"$backup_dir\"/www-*.tar.gz | tail -n +8 | xargs -r rm\necho \"备份完成: $backup_dir/www-$stamp.tar.gz\""
        }
      ]
    },
    {
      'id': "sh-77",
      'title': "实战：批量文件处理与报表脚本",
      'summary': "批量转格式、批量压缩、扫描目录生成 CSV 报表，出错不中断继续跑。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "整理几千个文件、给每个文件生成一行报表——这类重复劳动正是脚本的用武之地。这一章组合 for 循环、转换命令、stat 统计，做批量处理流水线。"
        },
        {
          'type': "h",
          'text': "批量转换格式"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "PNG 转 JPG（用 ImageMagick）",
          'code': "for img in *.png; do\n  convert \"$img\" \"${img%.png}.jpg\" 2>/dev/null && echo \"OK: $img\" || echo \"失败: $img\"\ndone"
        },
        {
          'type': "h",
          'text': "批量压缩日志"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "gzip 压缩所有 .log",
          'code': "count=0\nfor f in *.log; do\n  gzip \"$f\"\n  count=$((count + 1))\ndone\necho \"已压缩 $count 个日志文件\""
        },
        {
          'type': "h",
          'text': "生成 CSV 报表"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "扫描目录生成报表",
          'code': "echo \"文件名,大小,修改时间\" > report.csv\nfor f in *; do\n  if [ -f \"$f\" ]; then\n    echo \"$f,$(stat -c%s \"$f\"),$(stat -c%y \"$f\")\" >> report.csv\n  fi\ndone\ncat report.csv"
        },
        {
          'type': "h",
          'text': "出错不中断"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "单个失败继续处理下一个",
          'code': "for f in *.jpg; do\n  if convert \"$f\" \"${f%.jpg}.png\" 2>/dev/null; then\n    echo \"OK $f\"\n  else\n    echo \"跳过失败: $f\" >> errors.log\n  fi\ndone"
        },
        {
          'type': "table",
          'head': [
            "需求",
            "写法"
          ],
          'rows': [
            [
              "批量转换",
              "convert \"$f\" 新名 2>/dev/null"
            ],
            [
              "批量压缩",
              "for f in *.log; do gzip \"$f\"; done"
            ],
            [
              "CSV 报表",
              "stat -c%s/%y 取大小和时间"
            ],
            [
              "出错继续",
              "if 命令; then ... else 记录; fi"
            ],
            [
              "跳过不可转",
              "2>/dev/null 丢弃报错"
            ]
          ]
        },
        {
          'type': "tip",
          'title': "先在小目录试跑",
          'text': "批量脚本会动大量文件，先在 <code.inline>mkdir /tmp/test && cp *.jpg /tmp/test/</code.inline> 的副本里试跑，确认无误再对真实数据执行。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"实战：批量文件处理与报表脚本\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"实战：批量文件处理与报表脚本\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"实战：批量文件处理与报表脚本\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "for 循环批量处理文件",
            "转换/压缩命令 + && || 判断成败",
            "stat -c%s %y 取文件大小和修改时间",
            "CSV 报表逐行追加",
            "单个失败记录后继续，别中断整个任务"
          ]
        }
      ],
      'templates': [
        {
          'name': "目录报表生成",
          'code': "echo \"文件名,大小,修改时间\" > report.csv\nfor f in *; do\n  if [ -f \"$f\" ]; then\n    echo \"$f,$(stat -c%s \"$f\"),$(stat -c%y \"$f\")\" >> report.csv\n  fi\ndone\ncat report.csv"
        }
      ]
    },
    {
      'id': "sh-78",
      'title': "性能优化与脚本优化技巧",
      'summary': "少起外部进程、多用内建命令、合并调用、用 time 测量，让脚本跑得快。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "脚本慢大多不是算法问题，而是「进程启动开销」：每调用一次外部命令就 fork 一个新进程。优化核心就是少启动进程、多利用 shell 内建功能。"
        },
        {
          'type': "h",
          'text': "优先用内建命令"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "内建 vs 外部命令",
          'code': "echo ${#str}      # 内建，快\n[ -f file ]        # 内建测试，快\nstr=${str,,}       # 内建大小写转换\necho $((a + b))    # 内建算术"
        },
        {
          'type': "h",
          'text': "减少管道和子进程"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "能合并就合并",
          'code': "# 慢：一个文件开多个进程处理\ngrep \"ERROR\" app.log | sort | uniq -c | sort -rn | head\n\n# 大文件场景，awk 一次读完字段更省\nsort access.log | uniq -c | sort -rn | head -5"
        },
        {
          'type': "h",
          'text': "合并多次输出调用"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "一次 printf 替代多次 echo",
          'code': "printf \"%s\\n\" \"第一行\" \"第二行\" \"第三行\"  # 一次调用\necho -e \"第一行\\n第二行\\n第三行\"            # 或者 echo -e"
        },
        {
          'type': "h",
          'text': "用 time 测量找瓶颈"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "量化才知快慢",
          'code': "time tar -czf b.tar.gz dir1\nTIMEFORMAT=\"耗时 %R 秒\"\ntime for i in $(seq 1 1000); do :; done"
        },
        {
          'type': "table",
          'head': [
            "技巧",
            "收益"
          ],
          'rows': [
            [
              "内建命令代替外部命令",
              "省去 fork 进程开销"
            ],
            [
              "少用管道",
              "减少子进程"
            ],
            [
              "printf 合并输出",
              "一次调用多次输出"
            ],
            [
              "awk 大文件",
              "一次遍历多字段"
            ],
            [
              "time 测量",
              "找到真瓶颈"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "先保证正确，再优化速度",
          'text': "脚本跑得再快，算错就是灾难。先把功能做对、测试通过，再谈优化；优化后重新测一遍结果是否一致。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"性能优化与脚本优化技巧\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"性能优化与脚本优化技巧\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"性能优化与脚本优化技巧\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "进程启动是主要开销",
            "内建命令 > 外部命令",
            "减少管道与子进程",
            "printf/echo -e 合并输出",
            "time 量化后再优化"
          ]
        }
      ],
      'templates': [
        {
          'name': "对比内外建耗时",
          'code': "str=\"hello world\"\ntime echo ${#str}          # 内建\ntime echo \"$str\" | wc -c   # 外部命令"
        }
      ]
    },
    {
      'id': "sh-79",
      'title': "常见坑大全与最佳实践（新手避雷）",
      'summary': "汇总十个最容易踩的坑：空格、引号、[] 空格、子 shell、未加引号展开……",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "这一章把新手最容易踩的坑集中排一遍雷，配合对应的正确写法。建议收藏，写脚本遇到诡异问题先回来看这里。"
        },
        {
          'type': "h",
          'text': "坑 1：等号两边加空格"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "赋值不能有空格",
          'code': "x = 5     # 错！x 当成命令，= 和 5 当参数\nx=5       # 对！等号两边不能有空格\necho $x"
        },
        {
          'type': "h",
          'text': "坑 2：[ ] 里的空格"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "[ ] 里外都要空格",
          'code': "[ \"$x\" -eq 5 ]      # 对\n[ \"$x\"-eq 5 ]       # 错！] 前要有空格\n[ \"$x\" -eq 5 ]      # 中括号里外都要留空格"
        },
        {
          'type': "h",
          'text': "坑 3：变量不加引号被拆分"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "含空格的文件名必须加引号",
          'code': "file=\"我的 文件.txt\"\ncat $file     # 错：被拆成两个参数\ncat \"$file\"   # 对：整体当参数"
        },
        {
          'type': "h",
          'text': "坑 4：空变量在 [ ] 里报错"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "加引号防空变量",
          'code': "name=\"\"\nif [ $name = \"admin\" ]; then   # 错：展开成 [ = admin ] 语法错\n  echo 是\nfi\nif [ \"$name\" = \"admin\" ]; then # 对\n  echo 是\nfi"
        },
        {
          'type': "h",
          'text': "坑 5：管道子 shell 变量传不出"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "用重定向代替管道",
          'code': "count=0\ncat list.txt | while read line; do\n  count=$((count+1))   # 子 shell 里改的\n  # 外面 count 还是 0！\ndone\nwhile read line; do\n  count=$((count+1))\ndone < list.txt          # 这样才对"
        },
        {
          'type': "h",
          'text': "坑 6-10：一句话清单"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "其余高频坑",
          'code': "ls | grep foo   # 别让 grep 白白消费管道（可以，但注意管道副作用）\ncd /tmp && cmd  # cd 只在当前 shell 生效\nrm -rf $DIR    # DIR 为空会变成 rm -rf /，务必判空\nset -e         # 想健壮就开，别省\n[ \"$a\" > 5 ]   # 数字比较用 -gt，不是 >"
        },
        {
          'type': "table",
          'head': [
            "坑",
            "正确写法"
          ],
          'rows': [
            [
              "x = 5",
              "x=5（无空格）"
            ],
            [
              "[ $x -eq 5]",
              "[ \"$x\" -eq 5 ]（空格齐全）"
            ],
            [
              "cat $file",
              "cat \"$file\""
            ],
            [
              "[ $name = x ]",
              "[ \"$name\" = x ]"
            ],
            [
              "cmd | while read",
              "while read ... done < file"
            ],
            [
              "rm -rf $DIR",
              "先 [ -n \"$DIR\" ] 判空"
            ],
            [
              "数字比大小用 >",
              "用 -gt / -lt"
            ]
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"常见坑大全与最佳实践（新手避雷）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"常见坑大全与最佳实践（新手避雷）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"常见坑大全与最佳实践（新手避雷）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "赋值等号两边无空格",
            "[ ] 内外的空格一个不能少",
            "变量展开尽量加双引号",
            "管道让 while 进子 shell",
            "删文件先判空、数字比较用 -gt"
          ]
        }
      ],
      'templates': [
        {
          'name': "安全删文件",
          'code': "dir=/tmp/clean\nif [ -n \"$dir\" ] && [ -d \"$dir\" ]; then\n  rm -rf \"$dir\"\n  echo \"已删除 $dir\"\nelse\n  echo \"路径无效，未执行\"\nfi"
        }
      ]
    },
    {
      'id': "sh-80",
      'title': "面试题精选与综合大项目（毕业篇）",
      'summary': "高频 Shell 面试题 + 一个集监控、备份、日志于一体的综合运维项目，收官。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "最后一章两部分：一是面试官最爱问的 Shell 题，二是把所有知识串起来的综合大项目。做完这章，你的 Shell 就算出师了。"
        },
        {
          'type': "h",
          'text': "高频面试题"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "先思考，再看答案",
          'code': "# 1. 统计日志里出现次数最多的 5 个 IP\ncut -d\" \" -f1 access.log | sort | uniq -c | sort -rn | head -5\n\n# 2. 判断文件是否存在\n[ -f /etc/hosts ] && echo \"存在\" || echo \"不存在\"\n\n# 3. 把当前目录所有 .txt 改成 .bak\nfor f in *.txt; do mv \"$f\" \"${f%.txt}.bak\"; done\n\n# 4. 求 1 到 100 的和\necho $((100 * 101 / 2))\n# 或用循环：sum=0; for i in $(seq 1 100); do sum=$((sum+i)); done"
        },
        {
          'type': "h",
          'text': "综合大项目：每日运维脚本"
        },
        {
          'type': "code",
          'lang': "bash",
          'title': "监控 + 备份 + 清理 一体",
          'code': "#!/usr/bin/env bash\n# 综合运维脚本：交给 cron 每天凌晨运行\nset -euo pipefail\nLOG=/var/log/ops.log\nstamp=$(date +%F)\nlog() { echo \"[$(date +\"%F %T\")] $*\" >> \"$LOG\"; }\n\nlog \"开始每日巡检\"\n\n# 1. 磁盘告警\nusage=$(df -h / | tail -1 | tr -s \" \" | cut -d\" \" -f5 | tr -d \"%\")\n[ \"$usage\" -gt 85 ] && log \"磁盘告警: ${usage}%\"\n\n# 2. 备份网站\ntar -czf \"/backup/www-$stamp.tar.gz\" /var/www 2>/dev/null \\\n  && log \"网站已备份\" || log \"备份失败\"\n\n# 3. 清理 7 天前的备份\nfind /backup -name \"www-*.tar.gz\" -mtime +7 -delete\n\n# 4. 清理 3 天前的临时文件\nfind /tmp -name \"*.tmp\" -mtime +3 -delete\n\nlog \"巡检完成\"\necho \"巡检完成，详情见 $LOG\""
        },
        {
          'type': "h",
          'text': "面试小贴士"
        },
        {
          'type': "list",
          'items': [
            "把「管道的子 shell 坑」「[ ] 空格」「变量加引号」讲清楚，面试会加分",
            "现场让写统计日志 Top IP 要能张口就来",
            "提到 set -euo pipefail 严格模式，体现工程素养",
            "能讲一个自己写的完整脚本，比背命令强一百倍"
          ]
        },
        {
          'type': "h",
          'text': "继续深入的方向"
        },
        {
          'type': "list",
          'items': [
            "正则再深挖：backreferences、extended regex（第 36-39 章基础上）",
            "学会 xargs 的 -I 和 -0 组合玩法",
            "探索 awk/sed 的单行技巧（one-liner）",
            "熟悉 systemd 的 unit 文件，脚本和它配合",
            "进阶工具链：jq（JSON）、yq（YAML）、git 的 shell 封装"
          ]
        },
        {
          'type': "table",
          'head': [
            "能力",
            "覆盖章节"
          ],
          'rows': [
            [
              "命令与文件系统",
              "1-16 章"
            ],
            [
              "变量、条件、循环",
              "19-31 章"
            ],
            [
              "函数与参数",
              "32-35 章"
            ],
            [
              "正则与文本处理",
              "36-39 章"
            ],
            [
              "进阶与实战",
              "40-60 章"
            ],
            [
              "网络、安全、项目",
              "61-79 章"
            ],
            [
              "面试与收官",
              "80 章"
            ]
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"面试题精选与综合大项目（毕业篇）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"面试题精选与综合大项目（毕业篇）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"面试题精选与综合大项目（毕业篇）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "熟记日志统计、判文件、批量改名高频题",
            "综合项目 = 监控+备份+清理一体",
            "set -euo pipefail + log 函数是工程素养",
            "讲清楚子 shell 坑和引号是面试亮点",
            "学完 80 章，Shell 已可独当一面"
          ]
        }
      ],
      'templates': [
        {
          'name': "毕业作品：每日巡检脚本",
          'code': "#!/usr/bin/env bash\nset -euo pipefail\nLOG=/var/log/ops.log\nstamp=$(date +%F)\nlog() { echo \"[$(date +\"%F %T\")] $*\" >> \"$LOG\"; }\nlog \"开始巡检\"\nusage=$(df -h / | tail -1 | tr -s \" \" | cut -d\" \" -f5 | tr -d \"%\")\n[ \"$usage\" -gt 85 ] && log \"磁盘告警: ${usage}%\"\ntar -czf \"/backup/www-$stamp.tar.gz\" /var/www 2>/dev/null && log \"已备份\" || log \"备份失败\"\nlog \"巡检完成\""
        }
      ]
    }
  ]
});

