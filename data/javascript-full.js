/* ============================================================
   计算机知识库 · 数据：JavaScript 完整课程（80 章，从下载安装到进阶）
   ============================================================ */
window.LANGUAGE_EXTRA = window.LANGUAGE_EXTRA || [];
window.LANGUAGE_EXTRA.push({
  'id': "javascript",
  'name': "JavaScript",
  'icon': "JS",
  'tagline': "网页的灵魂，让页面活起来的语言，从下载安装到实战的 80 章完整课程。",
  'intro': "这是一套从零开始的 JavaScript 完整课程。第 1 章先教你把环境装好（下载 Node.js），然后一步步用大白话讲清楚变量、数据类型、运算符、条件判断、循环、数组、函数、对象、DOM 操作、异步编程、面向对象、Node.js 与前端工程化，最后用待办清单实战项目收尾，并附上面试常问 30 题。每一章都配了可以立刻运行的中文示例代码和编辑器模板，你只需要照着敲、照着改，就能学会让网页动起来的 JavaScript。",
  'meta': {
    "难度": "从零到进阶",
    "章节": "80 章",
    "场景": "前端 / 后端 / 全栈"
  },
  'lessons': [
    {
      'id': "js-1",
      'title': "下载与安装 Node.js（零基础第一步）",
      'summary': "到官方免费下载 Node.js，装好并用 node -v 验证，环境就绪。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "学习 JavaScript 的第一步，是先把「运行环境」装到你的电脑上。JavaScript 有两个主要的使用地方：一个是浏览器（打开网页就能用），另一个就是 Node.js——它让我们在电脑的命令行里直接运行 JavaScript 代码。咱们先把 Node.js 装好，因为装好它之后，你可以用任何普通的文本编辑器写代码，然后用命令行运行，这是最接近真正程序员工作方式的做法。"
        },
        {
          'type': "h",
          'text': "什么是 Node.js"
        },
        {
          'type': "p",
          'text': "Node.js 简单说就是「把 JavaScript 搬到电脑上的运行时」。它完全免费、开源，由全球开发者共同维护。装好它之后，你的电脑就能把 .js 文件当作程序来执行。它还自带一个叫 npm 的「软件商店」，以后可以一行命令安装别人写好的现成工具，非常方便。"
        },
        {
          'type': "h",
          'text': "第一步：打开官网下载"
        },
        {
          'type': "list",
          'items': [
            "打开 Node.js 官网：<a href='https://nodejs.org' target='_blank' rel='noopener'>https://nodejs.org</a>",
            "页面上会有两个大按钮：LTS（长期支持版）和 Current（最新尝鲜版）。咱们选 LTS 就好，它最稳定，适合学习",
            "点击 LTS 那个按钮，网站会自动下载适合你系统的安装包（Windows 是 .msi 文件）"
          ]
        },
        {
          'type': "h",
          'text': "第二步：安装"
        },
        {
          'type': "p",
          'text': "双击下载好的安装包，一路点「Next」（下一步），安装过程中全部保持默认选项即可。唯一要留意的是别改安装目录，默认装到 C 盘就好，这样后面各种工具都能找到它。安装大概一两分钟，看到「Finish」（完成）按钮就说明装好了。"
        },
        {
          'type': "warn",
          'title': "新手第一大坑",
          'text': "如果安装过程中弹窗要「管理员权限」，直接点是（Yes）。另外装完之后最好重启一下命令行窗口（或者干脆重启电脑），否则有时候系统还没反应过来，输入 node 会提示找不到命令。"
        },
        {
          'type': "h",
          'text': "第三步：验证安装（最重要）"
        },
        {
          'type': "p",
          'text': "按键盘上的 <code.inline>Win + R</code.inline>，在弹出的窗口里输入 <code.inline>cmd</code.inline> 然后回车，打开命令行窗口（黑乎乎的窗口，别怕）。然后敲下面的命令并回车："
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "验证 Node.js 是否装好（在命令行里敲）",
          'code': "node -v\nnpm -v"
        },
        {
          'type': "p",
          'text': "如果屏幕上显示出两行版本号，比如 <code.inline>v20.x.x</code.inline> 和 <code.inline>10.x.x</code.inline>，恭喜你，环境装好了！以后咱们写的 JavaScript 代码，都可以用 <code.inline>node 文件名.js</code> 这种方式来运行。"
        },
        {
          'type': "tip",
          'title': "顺手装个好编辑器",
          'text': "推荐安装 VS Code（完全免费）：<a href='https://code.visualstudio.com' target='_blank' rel='noopener'>code.visualstudio.com</a>。它是全世界最流行的代码编辑器之一，装好后写 JavaScript 会自动高亮、自动补全，学习体验好很多。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"下载与安装 Node.js（零基础第一步）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"下载与安装 Node.js（零基础第一步）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"下载与安装 Node.js（零基础第一步）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Node.js 让 JavaScript 能在电脑命令行里运行，完全免费",
            "官网 nodejs.org 下载 LTS 稳定版，一路 Next 安装",
            "用 node -v 和 npm -v 验证是否装好",
            "推荐配 VS Code 编辑器，写代码更轻松"
          ]
        }
      ],
      'templates': [
        {
          'name': "验证环境",
          'code': "console.log(\"我的 Node.js 环境装好了！\")\nconsole.log(\"我开始学 JavaScript 啦！\")"
        }
      ]
    },
    {
      'id': "js-2",
      'title': "如何运行 JavaScript：浏览器 F12 控制台 + Node",
      'summary': "两种最常用的运行方式：浏览器开发者工具控制台，以及用 node 命令跑 .js 文件。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "装好环境之后，咱们先搞清楚一件事：JavaScript 代码到底在哪里运行？其实你身边就有现成的「运行器」——你每天打开网页用的那个浏览器！浏览器天生就会执行 JavaScript。这一章教你两种运行方式，随便哪种都能立刻看到代码结果。"
        },
        {
          'type': "h",
          'text': "方式一：浏览器 F12 控制台（零安装）"
        },
        {
          'type': "list",
          'items': [
            "打开任意一个浏览器（Chrome、Edge、Firefox 都行）",
            "在页面空白处按键盘 <code.inline>F12</code.inline>（笔记本可能还要同时按 Fn）",
            "在弹出的开发者工具里点「Console」标签页（中文叫「控制台」）",
            "在最下方的一行输入框里直接输入 JavaScript 代码，按回车立即执行"
          ]
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "在控制台输入这段，按回车",
          'code': "console.log(\"你好，世界！\")\nconsole.log(1 + 1)"
        },
        {
          'type': "p",
          'text': "你会立刻看到控制台打印出 <code.inline>你好，世界！</code.inline> 和 <code.inline>2</code.inline>。控制台就像一个「草稿本」，专门用来随手测试代码，做前端开发的人天天都在用它。"
        },
        {
          'type': "h",
          'text': "方式二：用 Node 运行 .js 文件（正式做法）"
        },
        {
          'type': "list",
          'items': [
            "打开 VS Code，新建一个文件，另存为 hello.js（注意后缀一定是 .js）",
            "在文件里写几行 JavaScript",
            "在这个文件所在的目录下打开命令行（VS Code 里按 Ctrl + ` 打开内置终端）",
            "输入 node hello.js 然后回车，就能看到运行结果"
          ]
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "hello.js 文件的内容",
          'code': "console.log(\"这段代码来自一个文件\")\nconsole.log(\"它由 node 命令运行\")"
        },
        {
          'type': "warn",
          'title': "注意当前目录",
          'text': "运行 node hello.js 之前，命令行必须「站在」hello.js 所在的文件夹里。如果不确定，可以先敲 <code.inline>dir</code.inline>（Windows 列出文件）看看当前目录里有没有 hello.js。文件不在当前目录，node 就找不到它，会报错。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"如何运行 JavaScript：浏览器 F12 控制台 + Node\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"如何运行 JavaScript：浏览器 F12 控制台 + Node\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"如何运行 JavaScript：浏览器 F12 控制台 + Node\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "浏览器按 F12 打开控制台，能直接运行 JS 代码",
            "控制台是测试代码最快的「草稿本」",
            "正式做法：写 .js 文件，用 node 文件名.js 运行",
            "运行前确认命令行在正确的目录里"
          ]
        }
      ]
    },
    {
      'id': "js-3",
      'title': "第一个程序：console.log 与注释",
      'summary': "用 console.log 打印输出，用注释给代码写说明，打好语法基础。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "几乎每一门编程语言的第一课，都是让程序「说句话」给你听。在 JavaScript 里，负责「说话」的就是 <code.inline>console.log()</code.inline>。这个函数（函数就是一段可以重复调用的功能代码）会把括号里的内容打印到控制台。你可以把 console.log 理解成「告诉电脑：把这个东西显示给我看」。注意这里的 log 是「记录」的意思，不是数学里的对数，别被吓到。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "我的第一个程序",
          'code': "console.log(\"你好，世界！\")\nconsole.log(\"我在学 JavaScript\")\nconsole.log(123)\nconsole.log(3 + 4)"
        },
        {
          'type': "p",
          'text': "注意看上面的输出：<code.inline>\"你好，世界！\"</code.inline> 是被双引号包起来的，这叫「字符串」，就是一段文字；<code.inline>123</code.inline> 是数字，不用加引号；<code.inline>3 + 4</code.inline> 则会被先算成 7 再打印出来。这就是程序的基本工作：你告诉它要算什么、显示什么，它就老老实实照做。"
        },
        {
          'type': "h",
          'text': "注释：写给人和自己的说明"
        },
        {
          'type': "p",
          'text': "注释是代码里「不执行」的部分，专门用来写解释和说明，帮助你自己或别人看懂这段代码在干嘛。电脑执行代码时会直接跳过注释。写注释是一个特别好的习惯，尤其是代码一多，几天后回来自己都忘了当初为啥这么写。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "单行注释 // 与多行注释 /* */",
          'code': "// 这是单行注释，以两个斜杠开头，后面都是说明文字\nconsole.log(\"第一行输出\")\n\n/*\n  这是多行注释\n  可以写很多行\n  都不会被执行\n*/\nconsole.log(\"第二行输出\")"
        },
        {
          'type': "info",
          'title': "注释还有大用处",
          'text': "调试代码时，可以把某一行「注释掉」（在行首加 //），这样它就不执行了，用来排查是哪一行出了问题。这是程序员最常用的技巧之一。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"第一个程序：console.log 与注释\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"第一个程序：console.log 与注释\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"第一个程序：console.log 与注释\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "console.log() 用于把内容打印到控制台",
            "字符串要加引号，数字不用加引号",
            "// 单行注释，/* */ 多行注释，注释不执行",
            "善用注释解释代码，对学习和协作都有帮助"
          ]
        }
      ],
      'templates': [
        {
          'name': "自我介绍",
          'code': "console.log(\"大家好！\")\nconsole.log(\"我叫小明\")\nconsole.log(\"我正在学 JavaScript\")\n// 下面是算术\nconsole.log(10 + 5)"
        }
      ]
    },
    {
      'id': "js-4",
      'title': "变量：let、const 与 var",
      'summary': "用盒子装数据，let 可变、const 常量、var 老写法，三个声明方式的区别。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "变量是什么？你可以把它想成一个「贴了标签的盒子」。盒子里装东西（数据），标签上写着盒子的名字（变量名）。以后你想用盒子里的东西，只要喊出它的名字就行。比如「age 这个盒子里装的是 18」，以后想用 18 这个数字，直接写 age 就行。声明变量，就是告诉电脑：我要一个盒子，叫这个名字。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "用 let 声明变量",
          'code': "let age = 18            // 声明变量 age，里面装数字 18\nlet name = \"小明\"        // 声明变量 name，里面装字符串\nconsole.log(name)\nconsole.log(age)\n\nage = 19                 // 用 let 声明的变量可以重新赋值\nconsole.log(age)"
        },
        {
          'type': "h",
          'text': "let 与 const 的区别"
        },
        {
          'type': "p",
          'text': "现代 JavaScript 推荐用 <code.inline>let</code.inline> 和 <code.inline>const</code.inline> 两个关键字声明变量。规则很简单：**你觉得这个值以后可能会变，就用 let；你觉得它永远不该变，就用 const（常量的意思）**。用 const 声明的变量一旦赋值，就不能再改了，改会直接报错——这其实是在保护你的代码，防止不小心改错重要数据。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "const 常量",
          'code': "const birthday = \"2000-01-01\"  // 生日不会变，用 const\nconsole.log(birthday)\n\n// 下面这行如果去掉注释运行会报错：不能给常量重新赋值\n// birthday = \"1999-01-01\"\n\nconst PI = 3.14159\nconsole.log(\"圆周率约等于\", PI)"
        },
        {
          'type': "h",
          'text': "var：古老的历史遗留"
        },
        {
          'type': "p",
          'text': "<code.inline>var</code.inline> 是老版本 JavaScript 用来声明变量的关键字，现在写新代码基本不用了，但你会在网上和旧项目里看到它。它最大的问题是「作用域混乱」（后面有专门一章讲），容易造成 bug。所以记住一个原则：**新代码一律用 let 和 const**。"
        },
        {
          'type': "warn",
          'title': "新手最容易犯的错",
          'text': "变量名不能以数字开头，比如 <code.inline>1name</code.inline> 是错的；不能有空格；不能和保留字重名（比如 <code.inline>let let = 1</code.inline> 是错的）。另外 JavaScript 是区分大小写的，<code.inline>Age</code.inline> 和 <code.inline>age</code.inline> 是两个不同的变量。"
        },
        {
          'type': "table",
          'head': [
            "关键字",
            "能否重新赋值",
            "作用域",
            "推荐度"
          ],
          'rows': [
            [
              "let",
              "能",
              "块级作用域（更安全）",
              "推荐使用"
            ],
            [
              "const",
              "不能（常量）",
              "块级作用域",
              "默认优先用"
            ],
            [
              "var",
              "能",
              "函数作用域（容易乱）",
              "新代码别用"
            ]
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"变量：let、const 与 var\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"变量：let、const 与 var\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"变量：let、const 与 var\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "变量是贴标签的盒子，let 声明可变变量",
            "const 声明常量，赋值后不可改",
            "var 是历史遗留，新代码不用它",
            "变量名不能数字开头、不能含空格、区分大小写"
          ]
        }
      ]
    },
    {
      'id': "js-5",
      'title': "数据类型：数字、字符串、布尔、null、undefined",
      'summary': "认识 JavaScript 里常见的数据类型，每个类型都有固定的「长相」。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "盒子（变量）里装的东西五花八门，JavaScript 把这些「东西」分成了好几种类型。就像人分男女、水果分苹果香蕉一样，每种数据都有自己固定的长相和脾气。理解数据类型，是你学会编程的重要一步。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "认识常见数据类型",
          'code': "let num = 42          // number 数字：整数、小数都算\nlet str = \"你好\"       // string 字符串：文字，必须加引号\nlet isOk = true       // boolean 布尔值：只有 true 和 false 两种\nlet empty = null      // null 空：表示「什么都没有」\nlet notDefined        // undefined 未定义：声明了但没赋值\nlet obj = { a: 1 }    // object 对象：成对儿的键值对\nlet arr = [1, 2, 3]   // array 数组：一串数据的列表\n\nconsole.log(num, str, isOk)\nconsole.log(empty, notDefined)"
        },
        {
          'type': "h",
          'text': "number 数字"
        },
        {
          'type': "p",
          'text': "数字类型涵盖整数和小数，比如 <code.inline>42</code.inline>、<code.inline>3.14</code.inline>、<code.inline>-7</code.inline>。它还能表示特别大、特别小的数，比如科学计数法 <code.inline>1e10</code.inline> 表示 1 后面跟 10 个 0。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "数字运算",
          'code': "console.log(10 + 5)     // 15\nconsole.log(10 - 3)     // 7\nconsole.log(6 * 7)      // 42\nconsole.log(10 / 4)     // 2.5\nconsole.log(10 % 3)     // 1 余数"
        },
        {
          'type': "h",
          'text': "null 和 undefined 到底有什么区别"
        },
        {
          'type': "p",
          'text': "这两个最容易搞混。<code.inline>undefined</code.inline> 表示「声明了变量但没给值」，是系统默认的状态；<code.inline>null</code.inline> 表示「我主动把它设成空」。打个比方：undefined 像抽屉里「本来就没放过东西」，null 像「我把东西拿走了，抽屉现在空了」。都是「空」，但含义不同。"
        },
        {
          'type': "warn",
          'title': "一个真实的坑",
          'text': "检查一个变量是不是「空」时，别用 <code.inline>==</code.inline> 直接和 null 比较（后面讲 == 和 === 的坑）。先把变量的值打印出来，看看它是 undefined 还是 null，再对症下药。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"数据类型：数字、字符串、布尔、null、undefined\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"数据类型：数字、字符串、布尔、null、undefined\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"数据类型：数字、字符串、布尔、null、undefined\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "number 数字、string 字符串、boolean 布尔值",
            "null 是主动置空，undefined 是没赋值",
            "object 是键值对容器，array 是列表",
            "字符串必须加引号，数字不加引号"
          ]
        }
      ]
    },
    {
      'id': "js-6",
      'title': "typeof：查看数据是什么类型",
      'summary': "用 typeof 一眼看出变量类型，理解几个著名的 typeof 陷阱。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "有时候你会拿到一个变量，但不确定它里面装的是数字还是字符串。这时候就用 <code.inline>typeof</code.inline> 这个「验货工具」，它像一个标签机，告诉你这个变量的类型。它是个关键字，写法是 <code.inline>typeof 变量名</code.inline>，返回结果是一个表示类型的字符串。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "typeof 查看类型",
          'code': "console.log(typeof 42)          // number\nconsole.log(typeof \"hello\")     // string\nconsole.log(typeof true)        // boolean\nconsole.log(typeof undefined)   // undefined\nconsole.log(typeof {a:1})       // object\nconsole.log(typeof [1,2,3])     // object 注意！数组也是 object\nconsole.log(typeof null)        // object 注意！这是个著名的坑"
        },
        {
          'type': "p",
          'text': "看到没，有两个特别出乎意料的地方。**数组 typeof 出来的结果是 object**（因为数组本质是特殊的对象）；**null typeof 出来的结果也是 object**——这是 JavaScript 从诞生那天就有的一个 bug，官方承认过，但因为修了会影响无数老代码，就干脆保留到现在。所以判断类型时，不能只看 typeof。"
        },
        {
          'type': "warn",
          'title': "怎么正确判断数组和 null",
          'text': "判断是不是数组，用 <code.inline>Array.isArray(变量)</code.inline>；判断是不是 null，直接 <code.inline>变量 === null</code.inline>。千万别依赖 typeof 判断这两种情况。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "正确的类型判断",
          'code': "let arr = [1, 2, 3]\nlet empty = null\n\nconsole.log(Array.isArray(arr))   // true 是数组\nconsole.log(Array.isArray(empty)) // false 不是数组\nconsole.log(empty === null)       // true 确实是 null"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"typeof：查看数据是什么类型\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"typeof：查看数据是什么类型\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"typeof：查看数据是什么类型\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "typeof 返回表示类型的字符串",
            "数组 typeof 是 object，要用 Array.isArray 判断",
            "null 的 typeof 也是 object，这是历史遗留 bug",
            "判断 null 要用 === null"
          ]
        }
      ]
    },
    {
      'id': "js-7",
      'title': "字符串方法：长度、截取、拆分、替换",
      'summary': "字符串是一串文字，学会用 .length、slice、split、replace 等方法处理它。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "字符串就是「一串文字」，在编程里到处都是：用户名、网址、聊天内容，全是字符串。JavaScript 给字符串准备了一整套现成的方法（方法就是「挂在某个东西身上的函数」），这一章挑最常用的几个讲透。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "长度与截取",
          'code': "let msg = \"你好，世界！\"\n\nconsole.log(msg.length)      // 6 字符串的长度（字符个数）\nconsole.log(msg[0])          // 你 用下标取第1个字符\nconsole.log(msg[2])          // 世 第3个字符（从0数起）\nconsole.log(msg.slice(3))    // 世界！从第4个字符截到结尾\nconsole.log(msg.slice(0, 2)) // 你好 截取从0到2（不含2）\nconsole.log(msg.slice(-2))   // 界！负数表示从结尾往前数"
        },
        {
          'type': "p",
          'text': "注意一个反直觉的点：**计数从 0 开始**。第一个字符的下标是 0，不是 1。这是编程界的通用规矩，从 JavaScript 到 Java、Python 全都这样，习惯了就好。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "拆分、替换、大小写",
          'code': "let sentence = \"我喜欢学习JavaScript\"\nconsole.log(sentence.includes(\"学习\"))   // true 是否包含\nconsole.log(sentence.startsWith(\"我\"))   // true 是否以它开头\nconsole.log(sentence.endsWith(\"JS\"))     // false 是否以它结尾\n\nlet words = \"苹果,香蕉,橙子\"\nconsole.log(words.split(\",\"))  // 拆成数组 [\"苹果\",\"香蕉\",\"橙子\"]\n\nlet txt = \"hello world\"\nconsole.log(txt.toUpperCase()) // HELLO WORLD 转大写\nconsole.log(txt.replace(\"world\", \"js\"))  // hello js 替换"
        },
        {
          'type': "info",
          'title': "字符串是不可变的",
          'text': "字符串一旦创建，里面的字符就不能被单独修改。比如 <code.inline>txt[0] = \"H\"</code.inline> 是没用的。所有「修改」字符串的方法（replace、toUpperCase 等）其实都是返回一个**新的字符串**，原来的字符串保持不变。这是 JavaScript 的重要特点。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"字符串方法：长度、截取、拆分、替换\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"字符串方法：长度、截取、拆分、替换\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"字符串方法：长度、截取、拆分、替换\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "字符串的字符从下标 0 开始数",
            ".length 得到长度，.slice 截取片段",
            ".split 按分隔符拆成数组，.includes 判断是否包含",
            "字符串不可变，方法返回新字符串，原串不变"
          ]
        }
      ],
      'templates': [
        {
          'name': "拆分与重组",
          'code': "let full = \"张三,李四,王五\"\nlet names = full.split(\",\")\nconsole.log(names)\nconsole.log(\"共 \" + names.length + \" 个人\")\nconsole.log(names.join(\" 和 \"))"
        }
      ]
    },
    {
      'id': "js-8",
      'title': "模板字符串：反引号 + ${} 插值",
      'summary': "用反引号和 ${} 把变量直接塞进字符串里，还能写多行字符串。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "以前往字符串里塞变量，用的是「拼接」：<code.inline>\"我叫\" + name + \"，今年\" + age + \"岁\"</code.inline>，加号一多，又麻烦又容易漏。ES6（JavaScript 的第 6 个版本，2015 年发布）带来了模板字符串，彻底解放双手。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "模板字符串基础",
          'code': "let name = \"小明\"\nlet age = 18\n\n// 用反引号 ` 包起来，用 ${} 塞变量\nlet intro = `我叫${name}，今年${age}岁`\nconsole.log(intro)\n\n// 花括号里还可以放表达式（能算出结果的东西）\nconsole.log(`明年我就${age + 1}岁了`)\nconsole.log(`2 的 10 次方是 ${2 ** 10}`)"
        },
        {
          'type': "p",
          'text': "注意模板字符串用的是**反引号**（`），在键盘上一般在数字 1 键的左边，英文输入法下按那个键就能打出来。它和单引号、双引号长得不一样，别打错了。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "多行字符串不用再加 \\n",
          'code': "// 传统写法：要手动加 \\n 换行符\nlet old = \"第一行\\n第二行\\n第三行\"\nconsole.log(old)\n\n// 模板字符串：直接换行写，天然支持多行\nlet poem = `春眠不觉晓\n处处闻啼鸟\n夜来风雨声`\nconsole.log(poem)"
        },
        {
          'type': "warn",
          'title': "反引号和单引号别混用",
          'text': "很多人把反引号打成单引号，结果报错。记住：模板字符串开头和结尾必须是**反引号**，而普通字符串才是单引号或双引号。一眼区分：反引号在键盘左上角，单引号在回车键左边。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"模板字符串：反引号 + ${} 插值\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"模板字符串：反引号 + ${} 插值\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"模板字符串：反引号 + ${} 插值\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "模板字符串用反引号包裹，用 ${} 插入变量或表达式",
            "比加号拼接更清晰，代码更易读",
            "模板字符串天然支持多行，不用手动加换行符",
            "反引号键在键盘数字 1 的左边，别和单引号混淆"
          ]
        }
      ]
    },
    {
      'id': "js-9",
      'title': "算术运算符：+ - * / % 和求余",
      'summary': "加减乘除、求余、幂运算，以及浮点数精度的坑。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "运算符就是数学里的加减乘除那些符号，编程里叫「运算符」。JavaScript 的算术运算符和数学几乎一模一样，多了一个叫「求余」的 <code.inline>%</code.inline>，和「幂运算」的 <code.inline>**</code.inline>。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "基本算术运算",
          'code': "console.log(10 + 3)    // 13 加\nconsole.log(10 - 3)    // 7  减\nconsole.log(10 * 3)    // 30 乘\nconsole.log(10 / 3)    // 3.3333... 除（结果是小数）\nconsole.log(10 % 3)    // 1  求余：10 除以 3 余 1\nconsole.log(2 ** 10)   // 1024 幂运算：2 的 10 次方"
        },
        {
          'type': "p",
          'text': "<code.inline>%</code.inline> 叫「取模」或「求余」，它求的是除法算完之后的余数。这个操作特别常用：判断一个数是奇数还是偶数（除以 2 余 0 就是偶数），判断某个数能不能被另一个整除，等等。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "求余的实际用处",
          'code': "let num = 17\nconsole.log(num % 2)      // 1，说明 17 是奇数\n\nlet num2 = 24\nconsole.log(num2 % 2)     // 0，说明 24 是偶数\n\n// 每隔 3 个做一个标记（i 从 0 到 9）\nfor (let i = 0; i < 10; i++) {\n  if (i % 3 === 0) console.log(i + \" 是 3 的倍数\")\n}"
        },
        {
          'type': "warn",
          'title': "浮点数精度坑（必看）",
          'text': "因为计算机用二进制表示小数，有些小数算不准。比如 <code.inline>0.1 + 0.2</code.inline> 的结果不是 0.3，而是 0.30000000000000004。处理金额等敏感数据时，最好换算成「分」（整数）再运算，或者用 toFixed 只保留需要的位数。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "浮点数陷阱演示",
          'code': "console.log(0.1 + 0.2)              // 0.30000000000000004 不是 0.3！\nconsole.log((0.1 + 0.2).toFixed(2)) // \"0.30\" 保留两位小数\n\n// 金额建议用整数分来算\nlet priceFen = 1350   // 13.50 元 = 1350 分\nlet count = 3\nconsole.log(priceFen * count)  // 4050 分 = 40.50 元"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"算术运算符：+ - * / % 和求余\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"算术运算符：+ - * / % 和求余\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"算术运算符：+ - * / % 和求余\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "算术运算符有 + - * / % 和幂 **",
            "% 求余数，用来判断奇偶、整除很常用",
            "0.1+0.2 不等于 0.3，这是浮点数精度问题",
            "金额类数据建议用整数分计算避免误差"
          ]
        }
      ]
    },
    {
      'id': "js-10",
      'title': "比较运算符与逻辑运算符",
      'summary': "> < == === 比较大小相等，&& || ! 做逻辑组合，结果都是布尔值。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "程序要会「做决定」，做决定的依据就是比较。比较的结果只有两种：成立（true）或不成立（false）。这些 true / false 就是布尔值，是程序的「判断开关」。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "比较运算符",
          'code': "console.log(5 > 3)      // true 大于\nconsole.log(5 >= 5)     // true 大于等于\nconsole.log(5 < 3)      // false 小于\nconsole.log(5 === 5)    // true 严格相等（后面专门讲）\nconsole.log(5 !== 3)    // true 严格不相等\n\nconsole.log(\"abc\" < \"abd\")  // true 字符串按字典顺序比较"
        },
        {
          'type': "p",
          'text': "比较运算符的结果永远是布尔值（true 或 false）。注意相等用三个等号 <code.inline>===</code.inline>，这是现代 JavaScript 的正确写法，后面有一整章专门讲为什么用 === 而不用 ==。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "逻辑运算符 && || !",
          'code': "let age = 20\nlet hasCard = true\n\n// && 且：两边都成立才 true\nconsole.log(age > 18 && hasCard)   // true 成年且有卡\n\n// || 或：有一边成立就 true\nconsole.log(age > 60 || hasCard)   // true\n\n// ! 非：取反，true 变 false\nconsole.log(!hasCard)              // false\nconsole.log(!(5 > 3))              // false"
        },
        {
          'type': "p",
          'text': "三个逻辑运算符很好记：<code.inline>&&</code.inline> 是「并且」（AND），要求两边都对；<code.inline>||</code.inline> 是「或者」（OR），一边对就行；<code.inline>!</code.inline> 是「取反」（NOT），把结果反过来。它们可以组合使用，比如 <code.inline>(age > 18 && hasCard) || isVip</code.inline>。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"比较运算符与逻辑运算符\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"比较运算符与逻辑运算符\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"比较运算符与逻辑运算符\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "比较运算符返回布尔值 true/false",
            "相等用 ===，不等用 !==",
            "&& 且、|| 或、! 取反，可自由组合",
            "&& 两边都真才真，|| 一边真就真"
          ]
        }
      ]
    },
    {
      'id': "js-11",
      'title': "赋值运算符与自增自减",
      'summary': "+=、-= 简写赋值，++、-- 自增自减，一个数加 1 的最快写法。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "写代码时最常用的操作就是「让一个变量变成它自己加某个数」。比如计数器：<code.inline>count = count + 1</code.inline>。这种写法太啰嗦，JavaScript 提供了简写形式，也让代码看起来更像数学。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "复合赋值运算符",
          'code': "let score = 100\n\nscore += 10    // 等价于 score = score + 10\nconsole.log(score)   // 110\n\nscore -= 20    // 等价于 score = score - 20\nconsole.log(score)   // 90\n\nscore *= 2     // 等价于 score = score * 2\nconsole.log(score)   // 180\n\nscore /= 3     // 等价于 score = score / 3\nconsole.log(score)   // 60"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "自增 ++ 与自减 --",
          'code': "let n = 0\nn++          // 等价于 n = n + 1，自增\nconsole.log(n)   // 1\nn++\nconsole.log(n)   // 2\nn--          // 等价于 n = n - 1，自减\nconsole.log(n)   // 1"
        },
        {
          'type': "warn",
          'title': "++ 在前和在后的区别（面试常问）",
          'text': "<code.inline>n++</code.inline> 是先返回 n 的旧值再自增；<code.inline>++n</code.inline> 是先自增再返回新值。比如 <code.inline>let a = 5; console.log(a++)</code.inline> 打印 5（打印完 a 才变 6）；而 <code.inline>console.log(++a)</code.inline> 打印 6。平时自己写代码，建议把 <code.inline>n++</code.inline> 单独放一行，避免踩这种细节坑。"
        },
        {
          'type': "info",
          'title': "字符串也有 += ",
          'text': "如果左边是字符串，<code.inline>+=</code.inline> 就是把字符串接在后面。比如 <code.inline>let s = \"你好\"; s += \"世界\"</code.inline>，结果 s 是「你好世界」。这是字符串拼接的常用写法。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"赋值运算符与自增自减\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"赋值运算符与自增自减\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"赋值运算符与自增自减\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "+= -= *= /= 是复合赋值，等价于 x = x 运算符 值",
            "++ 自增 1，-- 自减 1",
            "单独使用时 n++ 和 ++n 没区别，组合使用才要注意",
            "字符串 += 表示拼接"
          ]
        }
      ]
    },
    {
      'id': "js-12",
      'title': "类型转换与 NaN 的坑",
      'summary': "Number()、String()、Boolean() 显式转换，以及 NaN 这个「不是数字的数字」。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "现实里数据经常「变样」：用户输入的都是字符串（哪怕输入的是数字），但你要拿来算数，就得把它转成数字。JavaScript 提供了三种「强制转换」工具：<code.inline>Number()</code.inline> 转数字、<code.inline>String()</code.inline> 转字符串、<code.inline>Boolean()</code.inline> 转布尔。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "显式转换（主动转）",
          'code': "let numStr = \"42\"\nconsole.log(Number(numStr))      // 42 字符串变数字\nconsole.log(Number(\"3.14\"))      // 3.14\n\nlet n = 100\nconsole.log(String(n))           // \"100\" 数字变字符串\n\nconsole.log(Boolean(1))          // true\nconsole.log(Boolean(0))          // false\nconsole.log(Boolean(\"\"))         // false 空字符串是 false"
        },
        {
          'type': "h",
          'text': "隐式转换（自动转，容易出坑）"
        },
        {
          'type': "p",
          'text': "JavaScript 有时会「自作主张」帮你转换类型。比如 <code.inline>\"5\" + 1</code.inline>，因为一边是字符串，加号就变成「拼接」，结果是 <code.inline>\"51\"</code.inline> 而不是 6！这种自动转换经常让人防不胜防，是新手最容易踩的坑之一。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "隐式转换演示",
          'code': "console.log(\"5\" + 1)      // \"51\" 加号遇字符串变成拼接\nconsole.log(\"5\" - 1)      // 4 减号只有数学意义，自动转成数字\nconsole.log(\"5\" * \"2\")    // 10 乘号也只有数学意义\nconsole.log(\"abc\" - 1)    // NaN 转不出数字，得到 NaN"
        },
        {
          'type': "h",
          'text': "NaN：不是数字的数字"
        },
        {
          'type': "p",
          'text': "<code.inline>NaN</code.inline> 全称 Not a Number，意思是「这不是一个数字」。它出现在「想转数字但转不出来」的时候，比如 <code.inline>Number(\"abc\")</code.inline>、<code.inline>\"abc\" - 1</code.inline>。NaN 有个著名的坑：**它不等于它自己**，<code.inline>NaN === NaN</code.inline> 是 false！"
        },
        {
          'type': "danger",
          'title': "NaN 判断陷阱",
          'text': "千万别用 <code.inline>x === NaN</code.inline> 判断，永远不成立。判断是不是 NaN 要用 <code.inline>Number.isNaN(x)</code.inline>。还有更常见的场景：用户输入的字符串转数字失败返回 NaN，运算一路传播，最后结果全是 NaN，找半天 bug。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "正确判断 NaN",
          'code': "let x = Number(\"hello\")\nconsole.log(x)               // NaN\nconsole.log(x === NaN)       // false ！这么判断是错的\nconsole.log(Number.isNaN(x)) // true 要用这个方法判断\n\n// 实战：解析用户输入\nlet input = \"20岁\"   // 假设用户这么输入的\nlet age = Number(input)\nif (Number.isNaN(age)) {\n  console.log(\"输入的不是有效数字，请重新输入\")\n} else {\n  console.log(\"年龄是\", age)\n}"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"类型转换与 NaN 的坑\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"类型转换与 NaN 的坑\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"类型转换与 NaN 的坑\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Number()/String()/Boolean() 做显式类型转换",
            "加号遇字符串会拼接，\"5\"+1 是 \"51\"，容易踩坑",
            "转数字失败得到 NaN，且 NaN 不等于它自己",
            "判断 NaN 用 Number.isNaN()，别用 === NaN"
          ]
        }
      ],
      'templates': [
        {
          'name': "解析用户输入",
          'code': "let input = \"25\"\nlet n = Number(input)\nif (Number.isNaN(n)) {\n  console.log(\"无效数字\")\n} else {\n  console.log(\"数字是\", n, \"加 5 等于\", n + 5)\n}"
        }
      ]
    },
    {
      'id': "js-13",
      'title': "条件判断：if / else / else if",
      'summary': "让程序根据条件走不同分支，这是程序「思考」的基础。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "程序最核心的能力之一就是「做决定」：如果怎么样就怎样，否则就怎样。这就是条件判断。JavaScript 用 <code.inline>if</code.inline>（如果）和 <code.inline>else</code.inline>（否则）来表达。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "最简单的 if / else",
          'code': "let score = 85\n\nif (score >= 60) {\n  console.log(\"及格了，恭喜！\")\n} else {\n  console.log(\"不及格，要加油！\")\n}"
        },
        {
          'type': "p",
          'text': "理解这段代码：括号里 <code.inline>score >= 60</code.inline> 是一个条件，它会被算成 true 或 false。为 true 就执行第一个花括号里的代码；为 false 就执行 else 后面的代码。注意花括号 <code.inline>{}</code.inline> 包起来的区域叫「代码块」，缩进（开头留几个空格）只是让代码更好看，不是必须的。"
        },
        {
          'type': "h",
          'text': "多个条件：else if"
        },
        {
          'type': "p",
          'text': "如果判断不止两个分支，比如成绩分优秀、良好、及格、不及格，就用 <code.inline>else if</code.inline> 一直往下接。程序会从上往下依次检查，碰到第一个成立的条件就执行，后面的都不看了。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "多分支判断",
          'code': "let score = 88\n\nif (score >= 90) {\n  console.log(\"优秀\")\n} else if (score >= 80) {\n  console.log(\"良好\")\n} else if (score >= 60) {\n  console.log(\"及格\")\n} else {\n  console.log(\"不及格\")\n}"
        },
        {
          'type': "warn",
          'title': "条件顺序很重要",
          'text': "if / else if 是从上往下检查的，**第一个成立的就执行，然后整个判断结束**。所以写的时候要把「条件最严的」放前面。比如上面 90 分以上必须先判断，如果先写 <code.inline>score >= 60</code.inline>，那 95 分也会先命中「及格」分支，后面的优秀永远执行不到。"
        },
        {
          'type': "info",
          'title': "可以省略 else",
          'text': "如果只有「满足条件才做某事」这种需求，可以只写 if，不写 else。比如「如果天气好就去散步」，天气不好就不做任何事。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"条件判断：if / else / else if\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"条件判断：if / else / else if\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"条件判断：if / else / else if\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "if(条件){} 条件为 true 就执行里面的代码",
            "else 处理条件为 false 的情况",
            "else if 可以接多个分支，从上往下第一个成立即执行",
            "严格的判断条件要放前面，避免被前面的分支抢走"
          ]
        }
      ]
    },
    {
      'id': "js-14",
      'title': "switch：多分支判断的另一种写法",
      'summary': "当要拿一个值跟很多固定值比，switch 比一堆 else if 更清晰。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "有时候你要拿一个值跟一大串固定值比较，比如根据星期几做不同的事。这时用一堆 else if 会很啰嗦，<code.inline>switch</code.inline> 就是专门为这种情况准备的：它把值「切」成几个 case（情况），命中哪个执行哪个。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "switch 基础用法",
          'code': "let day = 3   // 假设星期几，1-7\n\nswitch (day) {\n  case 1:\n    console.log(\"星期一，加油\")\n    break\n  case 2:\n    console.log(\"星期二，坚持\")\n    break\n  case 3:\n    console.log(\"星期三，过半了\")\n    break\n  default:\n    console.log(\"其他日子\")\n}"
        },
        {
          'type': "p",
          'text': "程序会拿 <code.inline>day</code.inline> 的值和每个 <code.inline>case</code.inline> 后面写的值去比对（注意这里用的是类似 <code.inline>===</code.inline> 的严格比对），命中了就执行那一行下面的代码。每个 case 最后都有一个 <code.inline>break</code.inline>，意思是「执行完这里，跳出整个 switch」。"
        },
        {
          'type': "danger",
          'title': "忘写 break 的坑",
          'text': "如果 case 里忘了写 break，程序不会停，会「掉下去」继续执行下一个 case 的代码，这叫「穿透」。比如上面 case 1 没写 break，day=1 时会把 1、2、3 的内容全打印出来。所以**每个 case 结尾一定写 break**。多个 case 共享同一段代码时，可以故意省掉 break 连写，但新手先老老实实都写上。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "default 与共享分支",
          'code': "let fruit = \"苹果\"\n\nswitch (fruit) {\n  case \"苹果\":\n  case \"香蕉\":\n    console.log(\"常见水果\")\n    break\n  case \"榴莲\":\n    console.log(\"榴莲，爱的人很爱\")\n    break\n  default:\n    console.log(\"不认识这种水果\")\n}"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"switch：多分支判断的另一种写法\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"switch：多分支判断的另一种写法\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"switch：多分支判断的另一种写法\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "switch 适合一个值和很多固定值比较的场景",
            "每个 case 结尾必须写 break，防止穿透",
            "default 处理所有没命中的情况，类似 else",
            "多个 case 想执行相同代码可以连续写，共用最后一个 break"
          ]
        }
      ]
    },
    {
      'id': "js-15",
      'title': "三元运算符：一行 if-else",
      'summary': "用 条件 ? A : B 的写法，把简单的 if-else 压缩成一行。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "如果判断只有两个分支，而且每个分支只是「返回一个值」，用 if-else 写要好几行。三元运算符（也叫条件运算符）能把它压缩成一行，写法是：<code.inline>条件 ? 值A : 值B</code.inline>——条件成立给 A，否则给 B。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "三元运算符基础",
          'code': "let age = 20\nlet type = age >= 18 ? \"成年人\" : \"未成年人\"\nconsole.log(type)   // 成年人\n\n// 等价于下面的 if-else\nlet type2\nif (age >= 18) {\n  type2 = \"成年人\"\n} else {\n  type2 = \"未成年人\"\n}\nconsole.log(type2)"
        },
        {
          'type': "p",
          'text': "上面两段代码效果完全一样。三元运算符就是把「条件成立赋 A，不成立赋 B」这种模式写得紧凑。它常用于给变量赋一个「二选一」的值。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "三元运算符进阶用法",
          'code': "let score = 92\n// 可以嵌套，但别太多，否则难读\nlet level = score >= 90 ? \"优秀\" : score >= 60 ? \"及格\" : \"不及格\"\nconsole.log(level)\n\n// 也可以直接在 console.log 里用\nlet isLogged = true\nconsole.log(isLogged ? \"欢迎回来\" : \"请先登录\")"
        },
        {
          'type': "warn",
          'title': "别滥用嵌套",
          'text': "三元运算符虽然酷，但**嵌套太多会很难读**。比如上面 score 那个写法，很多人一眼看不懂。经验法则：只有一层判断用三元，多层判断老老实实用 if / else if。可读性永远比「写得短」重要。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"三元运算符：一行 if-else\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"三元运算符：一行 if-else\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"三元运算符：一行 if-else\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "三元：条件 ? A : B，成立取 A 否则取 B",
            "适合简单二选一的赋值场景",
            "嵌套使用可以，但超过一层建议用 if-else",
            "代码可读性比写得短更重要"
          ]
        }
      ]
    },
    {
      'id': "js-16",
      'title': "== 与 ===：相等比较的大坑",
      'summary': "== 会自动转类型，=== 要求类型和值都相等。永远用 === 就对了。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "JavaScript 里有两种「相等」：<code.inline>==</code.inline>（宽松相等）和 <code.inline>===</code.inline>（严格相等）。它们的差别是判断时要不要「看类型」。这一章把这个关键区别讲透，它是面试高频题，也是平时写代码最容易出 bug 的地方。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "== 会偷偷转类型",
          'code': "console.log(5 == \"5\")      // true！数字和字符串被认为相等\nconsole.log(0 == false)     // true！0 和 false 被认为相等\nconsole.log(\"\" == 0)         // true！空字符串和 0 被认为相等\nconsole.log(null == undefined) // true 两个「空」被认为相等"
        },
        {
          'type': "p",
          'text': "看到没，<code.inline>==</code.inline> 会在比较前偷偷把两边的类型转成一样再比。这导致很多「八竿子打不着」的值被认为相等，非常容易埋下 bug。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "=== 严格相等",
          'code': "console.log(5 === \"5\")      // false！类型不同，直接不等\nconsole.log(5 === 5)        // true\nconsole.log(0 === false)    // false\nconsole.log(\"\" === 0)        // false\nconsole.log(null === undefined) // false"
        },
        {
          'type': "danger",
          'title': "铁律：永远用 ===",
          'text': "**写代码一律用 === 和 !==**，别用 == 和 !=。使用 === 时，只有「类型相同且值相同」才相等，行为符合直觉，几乎不会踩坑。这是所有现代 JavaScript 代码规范和面试官都强调的点。"
        },
        {
          'type': "table",
          'head': [
            "表达式",
            "== 的结果",
            "=== 的结果",
            "原因"
          ],
          'rows': [
            [
              "5 == \"5\"",
              "true",
              "false",
              "== 先转类型再比"
            ],
            [
              "0 == false",
              "true",
              "false",
              "== 把 false 当 0"
            ],
            [
              "\"\" == 0",
              "true",
              "false",
              "== 类型转换混乱"
            ],
            [
              "null == undefined",
              "true",
              "false",
              "== 把两个空视为相等"
            ]
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"== 与 ===：相等比较的大坑\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"== 与 ===：相等比较的大坑\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"== 与 ===：相等比较的大坑\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "== 会隐式转换类型，=== 要求类型和值都相等",
            "=== 更严格更安全，是唯一的推荐写法",
            "== 导致 5==\"5\"、0==false 都为 true，全是坑",
            "判断相等、判断 null 都用 === 或 !== "
          ]
        }
      ]
    },
    {
      'id': "js-17",
      'title': "真值与假值：truthy 和 falsy",
      'summary': "哪些值在 if 里会被当成 true，哪些被当成 false，一次记全。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "你可能以为只有布尔值 true / false 才能做条件判断。其实 JavaScript 有一个特性：**任何值放在 if 的条件里，都会被自动换算成 true 或 false**。换算成 false 的值叫「假值」（falsy），剩下的全是「真值」（truthy）。搞清楚这个，你就能理解很多看似奇怪的程序行为。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "六个假值，记住它们",
          'code': "// 下面这 6 个值放在条件里都会被当成 false\nlet falsyValues = [false, 0, \"\", null, undefined, NaN]\n\nfor (let v of falsyValues) {\n  if (v) {\n    console.log(v, \"被当成 true\")\n  } else {\n    console.log(String(v), \"是假值，被当成 false\")\n  }\n}"
        },
        {
          'type': "p",
          'text': "六个假值：<code.inline>false</code.inline>、<code.inline>0</code.inline>、<code.inline>空字符串 \"\"</code.inline>、<code.inline>null</code.inline>、<code.inline>undefined</code.inline>、<code.inline>NaN</code.inline>。**除了这 6 个，其他所有值都是真值**——包括负数、非零小数、空格字符串 <code.inline>\" \"</code.inline>、空数组 <code.inline>[]</code.inline>、空对象 <code.inline>{}</code.inline>。是的，空数组空对象也是真值！这是最容易记错的地方。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "实战：检查用户是否输入了内容",
          'code': "function checkInput(value) {\n  // 空字符串、null、undefined 都是假值，一句话搞定判断\n  if (value) {\n    console.log(\"有内容：\", value)\n  } else {\n    console.log(\"没有输入内容\")\n  }\n}\n\ncheckInput(\"你好\")   // 有内容\ncheckInput(\"\")       // 没有输入内容\ncheckInput(null)     // 没有输入内容"
        },
        {
          'type': "warn",
          'title': "真假值判断的小坑",
          'text': "<code.inline>0</code.inline> 是假值，所以写 <code.inline>if (num)</code.inline> 判断「数字存不存在」时，数字 0 会被当成「不存在」，这可能不是你想要的结果。如果你只想判断「是不是 null / undefined」，更严谨的写法是 <code.inline>if (num !== null && num !== undefined)</code.inline> 或 <code.inline>if (num != null)</code.inline>。"
        },
        {
          'type': "info",
          'title': "!! 双重取反的妙用",
          'text': "<code.inline>!!value</code.inline> 的意思是把任意值强制转成真正的布尔值。第一个 ! 取反得到布尔，第二个 ! 再取反回来。比如 <code.inline>!!\"abc\"</code.inline> 得到 true，<code.inline>!!0</code.inline> 得到 false。当你需要明确的 true/false 时很好用。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"真值与假值：truthy 和 falsy\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"真值与假值：truthy 和 falsy\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"真值与假值：truthy 和 falsy\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "6 个假值：false、0、空字符串、null、undefined、NaN",
            "其余全是真值，包括空数组 [] 和空对象 {}",
            "用 if(值) 快速判断「有没有内容」",
            "判断是否为空用 if(值)，判断是否为 0 要单独处理"
          ]
        }
      ]
    },
    {
      'id': "js-18",
      'title': "for 循环：重复做事",
      'summary': "用 for 循环让一段代码重复执行 N 次，理解循环三要素。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "写代码最怕重复劳动。如果让你打印「你好」一百遍，你不会真的写一百行吧？循环就是用来「重复做事」的。for 循环是用的最多的一种，它把「从哪开始、到哪结束、每次怎么走」都写在括号里。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "for 循环基本结构",
          'code': "// 三部分：初始化 ; 继续条件 ; 每次迭代后要做的事\nfor (let i = 0; i < 5; i++) {\n  console.log(\"第\", i, \"次循环\")\n}"
        },
        {
          'type': "p",
          'text': "拆解一下：<code.inline>let i = 0</code.inline> 是初始化，先建一个计数器 i 并设为 0；<code.inline>i < 5</code.inline> 是继续条件，只要它还成立就继续循环；<code.inline>i++</code.inline> 是每次循环体执行完后的收尾，让 i 加 1。所以这段代码会打印 i=0、1、2、3、4 一共 5 次。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "用循环求和",
          'code': "let sum = 0\nfor (let i = 1; i <= 100; i++) {\n  sum += i   // 每次把 i 累加进 sum\n}\nconsole.log(\"1 加到 100 等于\", sum)   // 5050\n\n// 偶数求和\nlet evenSum = 0\nfor (let i = 2; i <= 100; i += 2) {\n  evenSum += i\n}\nconsole.log(\"2 到 100 的偶数和\", evenSum)"
        },
        {
          'type': "warn",
          'title': "新手最容易写出的死循环",
          'text': "如果忘了写 <code.inline>i++</code.inline>，或者条件写反了，i 永远不增加，循环就永远不会结束，程序会卡死（浏览器甚至会崩溃）。写循环时一定要确认：计数器会变、条件最终会不成立。"
        },
        {
          'type': "info",
          'title': "i 从 0 开始是习惯",
          'text': "你会看到几乎所有代码里循环都从 <code.inline>i = 0</code.inline> 开始，而不是 1。这和数组下标从 0 开始是配套的（数组第一个元素下标就是 0）。想循环 N 次就写 <code.inline>i < N</code.inline>。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"for 循环：重复做事\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"for 循环：重复做事\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"for 循环：重复做事\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "for(初始化; 条件; 收尾) 三要素构成循环",
            "循环体是花括号里要重复执行的代码",
            "求累加和是循环最经典的练习",
            "忘了让计数器变化会写死循环，程序卡死"
          ]
        }
      ],
      'templates': [
        {
          'name': "打印 1 到 10",
          'code': "for (let i = 1; i <= 10; i++) {\n  console.log(\"数字：\", i)\n}\nconsole.log(\"循环结束\")"
        }
      ]
    },
    {
      'id': "js-19",
      'title': "while 与 do-while 循环",
      'summary': "当不知道要循环几次时用 while，至少执行一次的用 do-while。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "for 循环适合「知道循环多少次」的情况。但有时候你不知道要循环几次，比如「一直输入，直到输入正确为止」。这时候用 <code.inline>while</code.inline>（当…时）更合适：只要条件成立就一直循环。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "while 循环",
          'code': "let count = 0\n// 条件写在 while 后面，成立就执行循环体\nwhile (count < 5) {\n  console.log(\"count =\", count)\n  count++\n}\nconsole.log(\"结束，count =\", count)"
        },
        {
          'type': "p",
          'text': "while 的循环条件在进入循环体之前检查：条件成立才进，不成立直接跳过。所以「一次都不执行」是可能的。上面的例子：count 从 0 开始，打印 0、1、2、3、4 五次，当 count 变 5 时条件不成立，循环结束。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "do-while：先做一次再判断",
          'code': "let n = 10\n// do-while 会先执行一次循环体，再判断条件\n// 所以即使条件一开始不成立，也会至少执行一次\ndo {\n  console.log(\"至少打印一次，n =\", n)\n  n++\n} while (n < 5)\nconsole.log(\"结束\")"
        },
        {
          'type': "p",
          'text': "注意上面 do-while 的结果：n 一开始就是 10，条件 <code.inline>n < 5</code.inline> 不成立，但它**还是打印了一次**才结束。这就是 do-while 和 while 的区别：do-while 保证循环体至少执行一次。用场景就是「先让用户输入，再检查对不对，不对就重新输入」。"
        },
        {
          'type': "danger",
          'title': "死循环警告",
          'text': "while 比 for 更容易写出死循环，因为你可能忘了在循环体里更新变量。比如忘了写 <code.inline>count++</code.inline>，条件永远成立，程序永远卡住。写 while 时请默念：**一定要让条件在某个时刻变成 false**。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"while 与 do-while 循环\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"while 与 do-while 循环\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"while 与 do-while 循环\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "while(条件) 先判断后执行，可能一次都不执行",
            "do-while 先执行一次再判断，保证至少执行一次",
            "适合不知道循环次数的场景，比如反复输入直到正确",
            "while 更容易写出死循环，务必让条件能结束"
          ]
        }
      ]
    },
    {
      'id': "js-20",
      'title': "break 与 continue：控制循环走向",
      'summary': "break 提前结束整个循环，continue 跳过本次循环直接进入下一次。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "循环不一定每次都从头跑到尾。有时候找到答案就要「中途下车」——用 <code.inline>break</code.inline> 提前退出整个循环；有时候某个值不符合要求，想「跳过这一个，继续下一个」——用 <code.inline>continue</code.inline>。这两个关键字是控制循环的两把钥匙。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "break：找到就停",
          'code': "// 从 1 开始找第一个能被 7 整除的数\nfor (let i = 1; i <= 100; i++) {\n  if (i % 7 === 0) {\n    console.log(\"找到了：\", i)\n    break   // 找到立刻退出循环\n  }\n}\nconsole.log(\"循环结束\")\n\n// 输出：找到了：7，然后就停了，不会继续找"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "continue：跳过本次",
          'code': "// 打印 1 到 10，但跳过 3 的倍数\nfor (let i = 1; i <= 10; i++) {\n  if (i % 3 === 0) {\n    continue   // 跳过本次，直接进入下一次循环\n  }\n  console.log(\"i =\", i)\n}\n// 输出：1 2 4 5 7 8 10（3、6、9 被跳过）"
        },
        {
          'type': "p",
          'text': "区别要记牢：<code.inline>break</code.inline> 是「整个循环我都不干了，直接出去」；<code.inline>continue</code.inline> 是「这次我不干了，但循环还得继续」。break 只在循环（或 switch）里用，continue 只在循环里用。"
        },
        {
          'type': "info",
          'title': "break 在 switch 里的用法",
          'text': "前面讲 switch 时每个 case 后面的 break，用的就是这个 break：执行完当前 case 就跳出整个 switch。所以 break 的「跳出」能力既作用于循环，也作用于 switch。"
        },
        {
          'type': "warn",
          'title': "别滥用 break/continue",
          'text': "有些新手喜欢到处用 break 和 continue，把逻辑搞得支离破碎。能用循环条件优雅表达的就别硬塞。比如「只要 i < 10 且还没找到就继续」，把两个条件合并到循环条件里往往更清晰。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"break 与 continue：控制循环走向\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"break 与 continue：控制循环走向\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"break 与 continue：控制循环走向\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "break 立即结束整个循环，跳出循环体",
            "continue 跳过本次迭代，继续下一次循环",
            "break 也用于 switch 里跳出",
            "循环里寻找目标用 break 提前终止更高效"
          ]
        }
      ]
    },
    {
      'id': "js-21",
      'title': "for...of 与 for...in：遍历数组和对象",
      'summary': "for...of 取数组的每个元素，for...in 取对象的每个键。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "处理数组和对象时，最常用的就是「把它们里面的东西一个个拿出来看看」。for 循环配下标可以做，但更优雅的是两个专门的遍历写法：<code.inline>for...of</code.inline> 和 <code.inline>for...in</code.inline>。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "for...of：遍历数组的值",
          'code': "let fruits = [\"苹果\", \"香蕉\", \"橙子\"]\n\n// for...of 每次把数组里的一个元素放进 fruit\nfor (let fruit of fruits) {\n  console.log(\"水果：\", fruit)\n}\n\n// 也可以遍历字符串\nfor (let ch of \"你好吗\") {\n  console.log(ch)\n}"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "for...in：遍历对象的键",
          'code': "let person = { name: \"小明\", age: 20, city: \"北京\" }\n\n// for...in 每次把对象的一个「键」（属性名）放进 key\nfor (let key in person) {\n  console.log(key, \"=>\", person[key])\n}"
        },
        {
          'type': "p",
          'text': "区别一句话：**for...of 给你「值」，for...in 给你「键」**。数组用 for...of 拿元素最方便；对象用 for...in 拿属性名。注意访问对象属性值要写成 <code.inline>person[key]</code.inline>（方括号），因为 key 是个变量，不能用点号 <code.inline>person.key</code.inline>（那是找名为 key 的属性）。"
        },
        {
          'type': "warn",
          'title': "for...in 遍历数组的坑",
          'text': "虽然 for...in 也能用在数组上，但它遍历的是**下标**（0、1、2...），而且可能把数组上额外挂的属性也遍历出来，行为不可控。所以记住：**遍历数组用 for...of，遍历对象用 for...in**，别混用。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"for...of 与 for...in：遍历数组和对象\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"for...of 与 for...in：遍历数组和对象\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"for...of 与 for...in：遍历数组和对象\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "for...of 遍历数组、字符串，每次拿到一个元素（值）",
            "for...in 遍历对象，每次拿到一个属性名（键）",
            "遍历对象取属性值用 person[key] 方括号形式",
            "数组遍历用 for...of，别用 for...in 混用"
          ]
        }
      ]
    },
    {
      'id': "js-22",
      'title': "循环嵌套：循环里套循环",
      'summary': "外层循环转一圈，内层循环转一整圈，用嵌套打印乘法表和图形。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "循环里可以再套循环，这叫「嵌套循环」。最常见的理解方式：外层循环每走一步，内层循环要完整地从头跑到尾。就像钟表：分针走一圈（内层 60 格），时针才走一格（外层）。嵌套循环是打印九九乘法表、二维图形、处理二维数组的基础。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "打印九九乘法表",
          'code': "for (let i = 1; i <= 9; i++) {\n  let line = \"\"   // 收集一行\n  for (let j = 1; j <= i; j++) {\n    line += `${j}x${i}=${i * j} `\n  }\n  console.log(line)\n}"
        },
        {
          'type': "p",
          'text': "这段代码的运行逻辑：i=1 时，内层 j 从 1 到 1，只执行一次；i=2 时，内层 j 从 1 到 2，执行两次；以此类推。所以每行输出的内容会越来越长，正好形成乘法表的样子。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "用星号打印三角形",
          'code': "// 打印一个用 * 组成的三角形\nfor (let i = 1; i <= 5; i++) {\n  let row = \"\"\n  for (let j = 0; j < i; j++) {\n    row += \"*\"\n  }\n  console.log(row)\n}\n// 输出：\n// *\n// **\n// ***\n// ****\n// *****"
        },
        {
          'type': "info",
          'title': "嵌套循环的耗时",
          'text': "嵌套循环执行的次数是「乘法关系」：外层 n 次，内层 m 次，总执行 n×m 次。所以嵌套多了，循环次数会暴涨，写之前想清楚是不是真的需要嵌套，这也是后面讲性能优化的伏笔。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"循环嵌套：循环里套循环\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"循环嵌套：循环里套循环\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"循环嵌套：循环里套循环\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "嵌套循环：外层走一步，内层走一整圈",
            "内层循环的条件常依赖外层变量（如 j <= i）",
            "乘法表、星号图形是嵌套循环的经典练习",
            "嵌套越多循环总量越大，谨慎使用"
          ]
        }
      ],
      'templates': [
        {
          'name': "九九乘法表",
          'code': "for (let i = 1; i <= 9; i++) {\n  let line = \"\"\n  for (let j = 1; j <= i; j++) {\n    line += `${j}x${i}=${i * j} `\n  }\n  console.log(line)\n}"
        }
      ]
    },
    {
      'id': "js-23",
      'title': "循环综合练习：质数、斐波那契",
      'summary': "把前面的知识串起来，用循环解决两个经典小问题。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "学了这么多循环，来两个小练习巩固一下。这些题目都是面试和笔试常客，把思路搞清楚，循环就算真正入门了。别怕，一步步拆解，代码一点都不神秘。"
        },
        {
          'type': "h",
          'text': "练习一：判断一个数是不是质数"
        },
        {
          'type': "p",
          'text': "质数是「只能被 1 和它本身整除」的大于 1 的数。思路：从 2 一直试到 n-1，只要有任何一个能整除 n，n 就不是质数。找到第一个能整除的就可以 break 了。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "判断质数",
          'code': "function isPrime(n) {\n  if (n <= 1) return false   // 小于等于 1 不是质数\n  for (let i = 2; i < n; i++) {\n    if (n % i === 0) {\n      return false   // 能被整除，不是质数，直接返回\n    }\n  }\n  return true   // 全程没被整除，是质数\n}\n\nconsole.log(isPrime(7))   // true\nconsole.log(isPrime(9))   // false (9=3x3)\nconsole.log(isPrime(97))  // true"
        },
        {
          'type': "h",
          'text': "练习二：斐波那契数列"
        },
        {
          'type': "p",
          'text': "斐波那契数列是每个数等于前两个数之和：1、1、2、3、5、8、13... 写代码从第三个数开始，每次把「前两个」加起来。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "生成前 N 个斐波那契数",
          'code': "function fibonacci(n) {\n  let a = 1, b = 1\n  let result = [a, b]\n  for (let i = 2; i < n; i++) {\n    let next = a + b\n    result.push(next)\n    a = b\n    b = next\n  }\n  return result\n}\n\nconsole.log(fibonacci(10))  // [1,1,2,3,5,8,13,21,34,55]"
        },
        {
          'type': "info",
          'title': "练习的意义",
          'text': "这些练习看起来「没用」，但它们在训练你把问题拆成「一步一步重复做」的能力——这正是写程序的本质：**把复杂问题拆成简单步骤，再让计算机重复执行**。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"循环综合练习：质数、斐波那契\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"循环综合练习：质数、斐波那契\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"循环综合练习：质数、斐波那契\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "质数判断：从 2 试到 n-1，能整除即非质数",
            "斐波那契：每个数是前两个数之和",
            "用 return 提前结束函数，避免多余计算",
            "写程序 = 拆解问题 + 让循环重复执行"
          ]
        }
      ]
    },
    {
      'id': "js-24",
      'title': "数组：创建与访问",
      'summary': "数组是一串数据的列表，下标从 0 开始，用 length 获取长度。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "数组（Array）就是一串数据的「列表」。比如一篮子水果、一个班的学生名单、一周七天的名字，都很适合用数组装。数组用方括号 <code.inline>[]</code.inline> 表示，里面用逗号分隔每一项。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "创建数组",
          'code': "let empty = []            // 空数组\nlet fruits = [\"苹果\", \"香蕉\", \"橙子\"]   // 字符串数组\nlet numbers = [1, 2, 3, 4]  // 数字数组\nlet mixed = [\"小明\", 18, true]  // 可以混合类型\nlet nested = [[1, 2], [3, 4]]  // 数组里套数组\n\nconsole.log(fruits)\nconsole.log(numbers.length)   // 4 数组长度\nconsole.log(mixed)"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "访问数组元素",
          'code': "let fruits = [\"苹果\", \"香蕉\", \"橙子\"]\n\nconsole.log(fruits[0])   // 苹果 第一个元素（下标 0）\nconsole.log(fruits[1])   // 香蕉\nconsole.log(fruits[2])   // 橙子\nconsole.log(fruits[3])   // undefined 越界了\nconsole.log(fruits[fruits.length - 1])  // 橙子 最后一个元素"
        },
        {
          'type': "p",
          'text': "访问数组元素用「数组名 + 方括号 + 下标」。**下标从 0 开始**，所以第一个元素是 <code.inline>arr[0]</code.inline>，最后一个元素是 <code.inline>arr[arr.length - 1]</code.inline>。访问超过长度的下标会得到 <code.inline>undefined</code.inline>，不会报错，但通常说明你下标算错了。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "修改元素",
          'code': "let nums = [1, 2, 3]\nnums[0] = 100   // 把第一个元素改成 100\nconsole.log(nums)   // [100, 2, 3]\n\n// 往末尾追加元素\nnums.push(4)\nconsole.log(nums)   // [100, 2, 3, 4]"
        },
        {
          'type': "warn",
          'title': "const 声明的数组能改吗",
          'text': "能改元素！<code.inline>const arr = [1,2,3]</code.inline> 之后 <code.inline>arr[0] = 9</code.inline>、<code.inline>arr.push(4)</code.inline> 都是合法的。const 限制的是「变量 arr 不能重新指向别的数组」，而不是「数组里的内容不能变」。这个点面试常考。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"数组：创建与访问\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"数组：创建与访问\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"数组：创建与访问\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "数组用 [] 表示，逗号分隔各项，可装任意类型",
            "下标从 0 开始，arr[0] 是第一个元素",
            "arr.length 获取长度，最后一个元素下标是 length-1",
            "const 数组内容可改，只是不能重新赋值新数组"
          ]
        }
      ]
    },
    {
      'id': "js-25",
      'title': "数组增删：push、pop、shift、unshift",
      'summary': "四个最常用方法：尾插 push、尾删 pop、头插 unshift、头删 shift。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "数组最常见的操作就是「增」和「删」。JavaScript 给你准备了四个对应不同位置的现成方法：<code.inline>push</code.inline>（末尾加）、<code.inline>pop</code.inline>（末尾删）、<code.inline>unshift</code.inline>（开头加）、<code.inline>shift</code.inline>（开头删）。四个词记不住没关系，看代码感受一下。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "push 和 pop：操作末尾",
          'code': "let stack = [1, 2, 3]\n\nstack.push(4)   // 末尾加一个\nstack.push(5)   // 再加一个\nconsole.log(stack)   // [1,2,3,4,5]\n\nlet last = stack.pop()  // 弹出末尾，并返回被弹出的元素\nconsole.log(last)       // 5\nconsole.log(stack)      // [1,2,3,4]"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "unshift 和 shift：操作开头",
          'code': "let queue = [2, 3]\n\nqueue.unshift(1)   // 开头加一个\nconsole.log(queue)  // [1,2,3]\n\nlet first = queue.shift()  // 移除开头，并返回被移除的元素\nconsole.log(first)  // 1\nconsole.log(queue)  // [2,3]"
        },
        {
          'type': "p",
          'text': "注意这 4 个方法都会**直接修改原数组**（叫「原地修改」）。其中 pop 和 shift 还会把「被删掉的那个元素」作为返回值交给你，方便你接着用。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "找元素：indexOf 与 includes",
          'code': "let fruits = [\"苹果\", \"香蕉\", \"橙子\"]\n\nconsole.log(fruits.indexOf(\"香蕉\"))  // 1 香蕉在第 2 个位置\nconsole.log(fruits.indexOf(\"葡萄\"))  // -1 没找到返回 -1\nconsole.log(fruits.includes(\"橙子\")) // true 是否存在\nconsole.log(fruits.includes(\"西瓜\")) // false"
        },
        {
          'type': "warn",
          'title': "indexOf 找不到返回 -1",
          'text': "<code.inline>indexOf</code.inline> 找不到目标时返回 <code.inline>-1</code.inline>，不是返回 undefined，也不是返回 null。判断是否存在，通常写 <code.inline>if (arr.indexOf(x) !== -1)</code.inline>，或者干脆用更直白的 <code.inline>includes</code.inline>。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"数组增删：push、pop、shift、unshift\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"数组增删：push、pop、shift、unshift\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"数组增删：push、pop、shift、unshift\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "push 末尾加、pop 末尾删（返回被删元素）",
            "unshift 开头加、shift 开头删（返回被删元素）",
            "这 4 个方法都直接修改原数组",
            "indexOf 找不到返回 -1，includes 直接判断存在与否"
          ]
        }
      ]
    },
    {
      'id': "js-26",
      'title': "数组截取：slice 与 splice",
      'summary': "slice 复制一段（不改原数组），splice 删除/插入（改原数组）。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "数组还有两个「截取」方法，名字很像但行为完全不同，新手经常搞混，这一章给你彻底讲清。记住一句话：**slice 是「复制一段新的」，splice 是「在原数组上动刀」**。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "slice：截取并返回新数组",
          'code': "let arr = [10, 20, 30, 40, 50]\n\nlet part = arr.slice(1, 3)   // 从下标1 到下标3（不含3）\nconsole.log(part)   // [20, 30]\nconsole.log(arr)    // [10,20,30,40,50] 原数组没变！\n\nconsole.log(arr.slice(2))    // [30,40,50] 从2到结尾\nconsole.log(arr.slice(-2))   // [40,50] 从倒数第2个到结尾"
        },
        {
          'type': "p",
          'text': "<code.inline>slice(开始, 结束)</code.inline>：从「开始」下标一直截到「结束」下标之前（不包含结束）。它**不会改动原数组**，而是返回一个新数组。负数下标表示从结尾往前数。slice 的典型用法是复制数组：<code.inline>let copy = arr.slice()</code.inline>。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "splice：删除、替换、插入",
          'code': "let arr = [10, 20, 30, 40, 50]\n\n// 删除：从下标1开始删2个\nlet removed = arr.splice(1, 2)\nconsole.log(removed)  // [20,30] 被删掉的\nconsole.log(arr)      // [10,40,50] 原数组被改了！\n\n// 插入：在下标1的位置插入\narr.splice(1, 0, 99, 98)\nconsole.log(arr)      // [10,99,98,40,50]\n\n// 替换：从下标1开始删1个，换成 100\narr.splice(1, 1, 100)\nconsole.log(arr)      // [10,100,98,40,50]"
        },
        {
          'type': "p",
          'text': "<code.inline>splice(起点, 删除个数, 要插入的元素...)</code.inline>。它会**直接修改原数组**。删掉的元素组成一个数组返回。第三个及以后的参数是要插入的元素。splice 参数多、行为灵活，初学先用好「删除」和「插入」两种模式即可。"
        },
        {
          'type': "warn",
          'title': "别搞反这两个方法",
          'text': "容易记混的四个点：slice 不改变原数组、splice 改变原数组；slice 只截取、splice 能删能插能替换；slice 没有「删除个数」参数、splice 第二个参数是删除个数。记口诀：**slice 是温柔的复制，splice 是动刀的改造**。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"数组截取：slice 与 splice\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"数组截取：slice 与 splice\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"数组截取：slice 与 splice\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "slice(起,止) 复制一段返回新数组，不改原数组",
            "splice(起,个数,...插入) 删除/插入/替换，改原数组",
            "splice 返回被删元素组成的数组",
            "slice() 无参数可复制整个数组"
          ]
        }
      ],
      'templates': [
        {
          'name': "复制与删除",
          'code': "let arr = [1, 2, 3, 4, 5]\nlet copy = arr.slice()          // 复制一份\nlet deleted = arr.splice(1, 2)  // 删掉第2、3个\nconsole.log(\"原数组被改成：\", arr)\nconsole.log(\"被删除的：\", deleted)\nconsole.log(\"复制的那份：\", copy)"
        }
      ]
    },
    {
      'id': "js-27",
      'title': "数组高阶方法：map、filter、reduce、forEach",
      'summary': "把「遍历 + 处理」写成一句话，是函数式编程的入门，也是面试高频。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "处理数组时，最常用的套路无非三种：把每个元素都变一下（map）、把符合条件的挑出来（filter）、把全部元素聚合成一个结果（reduce）。JavaScript 为这三种套路准备了对应的方法，让代码又短又清晰，这就是大名鼎鼎的「数组三兄弟」。先看最朴素的 forEach。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "forEach：逐个处理，不做变换",
          'code': "let nums = [1, 2, 3]\n\n// 对每个元素做点事（这里只是打印）\nnums.forEach(function (n) {\n  console.log(\"元素：\", n)\n})\n\n// 箭头函数写法更简洁\nnums.forEach(n => console.log(\"再来一遍：\", n))"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "map：每个元素映射成新值",
          'code': "let nums = [1, 2, 3, 4]\n\nlet doubled = nums.map(n => n * 2)\nconsole.log(doubled)   // [2,4,6,8]\n\nlet labels = nums.map(n => `数字${n}`)\nconsole.log(labels)    // [\"数字1\",\"数字2\",\"数字3\",\"数字4\"]\n\n// map 不改变原数组，返回新数组\nconsole.log(nums)      // [1,2,3,4]"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "filter：过滤出符合条件的",
          'code': "let nums = [1, 2, 3, 4, 5, 6]\n\nlet evens = nums.filter(n => n % 2 === 0)\nconsole.log(evens)   // [2,4,6]\n\nlet big = nums.filter(n => n > 3)\nconsole.log(big)     // [4,5,6]"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "reduce：把全部聚合成一个结果",
          'code': "let nums = [1, 2, 3, 4, 5]\n\n// 初始值 0，每次把「累计值 acc」和当前元素相加\nlet sum = nums.reduce((acc, n) => acc + n, 0)\nconsole.log(sum)   // 15\n\n// 求最大值\nlet max = nums.reduce((acc, n) => (n > acc ? n : acc), nums[0])\nconsole.log(max)   // 5\n\n// 统计出现次数（进阶用法）\nlet words = [\"a\", \"b\", \"a\", \"c\", \"b\", \"a\"]\nlet count = words.reduce((acc, w) => {\n  acc[w] = (acc[w] || 0) + 1\n  return acc\n}, {})\nconsole.log(count)   // {a:3, b:2, c:1}"
        },
        {
          'type': "warn",
          'title': "回调函数的参数",
          'text': "这些方法的参数是一个「回调函数」（后面讲函数时细说）。回调函数按顺序接收：当前元素、下标、整个数组。比如 <code.inline>nums.map((n, i) => ...)</code.inline> 里的第二个参数 i 就是下标。需要下标时记得用第二个参数。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"数组高阶方法：map、filter、reduce、forEach\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"数组高阶方法：map、filter、reduce、forEach\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"数组高阶方法：map、filter、reduce、forEach\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "forEach 逐个处理但不产生新数组",
            "map 每个元素变换后返回新数组",
            "filter 挑出满足条件的元素组成新数组",
            "reduce 把全部元素聚合成单个结果，可带初始值"
          ]
        }
      ],
      'templates': [
        {
          'name': "数组三连",
          'code': "let nums = [1, 2, 3, 4, 5, 6]\nlet doubled = nums.map(n => n * 2)\nlet evens = nums.filter(n => n % 2 === 0)\nlet sum = nums.reduce((a, b) => a + b, 0)\nconsole.log(\"翻倍：\", doubled)\nconsole.log(\"偶数：\", evens)\nconsole.log(\"总和：\", sum)"
        }
      ]
    },
    {
      'id': "js-28",
      'title': "数组排序与去重",
      'summary': "sort 默认按字符串排序有坑，compare 函数指定规则；用 Set 一行去重。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "排序和去重是数据处理里最常碰到的需求。JavaScript 自带的 <code.inline>sort</code.inline> 有个大坑：它默认按「字符串」排序，数字排序会出鬼。去重则可以用 ES6 的 <code.inline>Set</code.inline> 一行搞定。这一章两个都讲透。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "sort 默认的坑",
          'code': "let nums = [10, 1, 9, 2, 8]\n\nlet bad = nums.slice().sort()   // 不传参数直接排\nconsole.log(bad)   // [1,10,2,8,9] ！10 跑到 2 前面了\n\n// 原因：sort 默认把元素转成字符串按字典序排\nconsole.log(\"10\" < \"2\")   // true 字符串比较\"10\"排在\"2\"前"
        },
        {
          'type': "p",
          'text': "看到没，[10, 1, 9, 2, 8] 排序后 10 居然排在 2 前面！因为默认 sort 把数字当字符串，「10」和「2」按字符比，1 比 2 小所以 10 在前。要按数字大小排，必须传一个「比较函数」。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "正确排序：传比较函数",
          'code': "let nums = [10, 1, 9, 2, 8]\n\n// 升序：a - b 是负数说明 a 该在前\nlet asc = nums.slice().sort((a, b) => a - b)\nconsole.log(asc)   // [1,2,8,9,10]\n\n// 降序：b - a\nlet desc = nums.slice().sort((a, b) => b - a)\nconsole.log(desc)  // [10,9,8,2,1]\n\n// 字符串数组排序就简单了\nlet fruits = [\"橙子\", \"苹果\", \"香蕉\"]\nconsole.log(fruits.slice().sort())  // 按字典序\n\n// 对象数组按某个字段排\nlet users = [{name:\"小明\",age:20},{name:\"小红\",age:18},{name:\"小刚\",age:25}]\nusers.sort((x, y) => x.age - y.age)\nconsole.log(users.map(u => u.name + u.age).join(\", \"))"
        },
        {
          'type': "h",
          'text': "去重：用 Set 一行搞定"
        },
        {
          'type': "p",
          'text': "<code.inline>Set</code.inline> 是 ES6 新增的「集合」，它天生不允许有重复值。把数组丢进 Set 再转回数组，重复值就被自动去掉了。注意 sort 和去重都要小心别把原数组改了——sort 是原地修改，所以要先去 slice() 复制一份。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "数组去重",
          'code': "let arr = [1, 2, 2, 3, 3, 3, 4]\n\nlet unique = [...new Set(arr)]   // 展开运算符 + Set\nconsole.log(unique)   // [1,2,3,4]\n\n// 字符串数组去重同样适用\nlet names = [\"小明\", \"小红\", \"小明\", \"小刚\"]\nconsole.log([...new Set(names)])  // [\"小明\",\"小红\",\"小刚\"]"
        },
        {
          'type': "warn",
          'title': "sort 会改原数组",
          'text': "sort 是**原地排序**，直接改掉原数组。如果你不想动原数组，先 <code.inline>arr.slice()</code.inline> 复制一份再 sort。这是很多新手踩的坑：排序后发现原数组也被打乱了。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"数组排序与去重\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"数组排序与去重\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"数组排序与去重\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "sort 默认按字符串排，数字排序必须传比较函数",
            "升序用 (a,b)=>a-b，降序用 (a,b)=>b-a",
            "sort 原地修改原数组，想保留原数组先 slice() 复制",
            "去重用 [...new Set(arr)] 一行搞定"
          ]
        }
      ],
      'templates': [
        {
          'name': "排序与去重",
          'code': "let nums = [3, 1, 4, 1, 5, 9, 2, 6, 5]\nlet sorted = nums.slice().sort((a, b) => a - b)\nlet unique = [...new Set(nums)]\nconsole.log(\"升序：\", sorted)\nconsole.log(\"去重：\", unique)"
        }
      ]
    },
    {
      'id': "js-29",
      'title': "函数：声明与函数表达式",
      'summary': "把代码打包成工具，想用就调用。掌握 function 声明与表达式两种写法。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "函数就是把一段代码打包起来、起个名字、随时可以调用的「工具」。好比做菜要洗菜切菜炒菜，你可以把「炒土豆丝」打包成一个步骤，以后直接说「来一份炒土豆丝」就行。函数是组织代码的基石，几乎所有程序都由无数函数拼成。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "函数声明",
          'code': "// 定义：function 函数名(参数) { 代码; return 返回值 }\nfunction greet(name) {\n  return \"你好，\" + name + \"！\"\n}\n\n// 调用：函数名(实参)\nconsole.log(greet(\"小明\"))   // 你好，小明！\nconsole.log(greet(\"小红\"))   // 你好，小红！"
        },
        {
          'type': "p",
          'text': "定义一个函数要写四件事：<code.inline>function</code.inline> 关键字、函数名（greet）、括号里的参数（name，可以没有）、花括号里的函数体。函数体里用 <code.inline>return</code.inline> 把结果「交出来」。调用函数就是写「函数名(参数值)」。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "函数表达式",
          'code': "// 把函数赋值给变量，这叫函数表达式\nconst add = function (a, b) {\n  return a + b\n}\n\nconsole.log(add(3, 4))    // 7\nconsole.log(add(10, 20))   // 30\n\n// 函数表达式也可以直接传参使用\nconst result = (function (a, b) { return a * b })(3, 4)\nconsole.log(result)   // 12 立即执行函数（IIFE）"
        },
        {
          'type': "info",
          'title': "声明式与表达式的一个区别",
          'text': "用 <code.inline>function 名字</code.inline> 声明的方式会被「提升」（hoisting），意思是在声明之前调用也能工作；而赋值给变量的函数表达式不会。平时写代码推荐函数声明式，直观好读。这个细节后面讲作用域时还会提到。"
        },
        {
          'type': "warn",
          'title': "函数要调用才会执行",
          'text': "只定义不调用，函数体里的代码永远不执行。新手常犯的错：写了函数没调用，或者忘了加调用的小括号。函数名（不加括号）只是一个「引用」，加上括号 <code.inline>()</code.inline> 才是真正去执行它。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"函数：声明与函数表达式\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"函数：声明与函数表达式\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"函数：声明与函数表达式\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "函数 = 打包一段代码 + 起名 + 可反复调用",
            "函数声明用 function 名字(){}，函数表达式赋值给变量",
            "return 把结果交出来，调用用 函数名()",
            "不调用就不执行；函数名加括号才是调用"
          ]
        }
      ]
    },
    {
      'id': "js-30",
      'title': "箭头函数：更简洁的写法",
      'summary': "() => {} 代替 function，代码更短，现代 JavaScript 的主流写法。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "ES6 带来了箭头函数，用 <code.inline>=></code.inline>（箭头）代替 <code.inline>function</code.inline> 关键字，代码一下子精简很多。现在的现代项目里，箭头函数几乎是主流，你必须认识它、会用它。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "箭头函数基础",
          'code': "// 传统写法\nfunction add1(a, b) {\n  return a + b\n}\n\n// 箭头函数：去掉 function，在参数后加 =>\nconst add2 = (a, b) => {\n  return a + b\n}\n\n// 只有一个表达式时可以更简：省略 return 和花括号\nconst add3 = (a, b) => a + b\n\nconsole.log(add1(1, 2), add2(1, 2), add3(1, 2))  // 3 3 3"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "只有一个参数的简写",
          'code': "// 只有一个参数时，括号都可以省略\nconst double = n => n * 2\nconsole.log(double(5))   // 10\n\n// 没有参数时，空括号必须写\nconst hi = () => \"你好！\"\nconsole.log(hi())\n\n// 返回对象要加小括号包裹\nconst makeUser = (name, age) => ({ name, age })\nconsole.log(makeUser(\"小明\", 20))"
        },
        {
          'type': "p",
          'text': "箭头函数的省略规则：函数体只有一个「表达式」（就是一句能算出结果的话）时，可以省略花括号和 return，箭头函数会自动把这个表达式的结果作为返回值。比如 <code.inline>n => n * 2</code.inline>。返回对象时因为花括号会被误会成函数体，所以要加一层小括号 <code.inline>({ ... })</code.inline>。"
        },
        {
          'type': "warn",
          'title': "箭头函数和 this（先记结论）",
          'text': "箭头函数**没有自己的 this**，它里面的 this 是定义它时外层那个 this（后面讲对象时会深入讲）。如果你还没学到 this，先记住：**在需要动态 this 的场合（比如给元素绑事件）箭头函数可能行为不一样**，等讲完 this 再回来看这条。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"箭头函数：更简洁的写法\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"箭头函数：更简洁的写法\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"箭头函数：更简洁的写法\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "箭头函数 () => {} 是 function 的简写",
            "单表达式函数体可省略 return 和花括号",
            "单参数可省括号，返回对象要加 () 包裹",
            "箭头函数没有自己的 this，继承外层 this"
          ]
        }
      ],
      'templates': [
        {
          'name': "箭头函数练习",
          'code': "const square = n => n * n\nconst add = (a, b) => a + b\nconst greet = name => `你好，${name}！`\nconsole.log(square(6))\nconsole.log(add(3, 4))\nconsole.log(greet(\"小红\"))"
        }
      ]
    },
    {
      'id': "js-31",
      'title': "参数、默认值与 rest 参数",
      'summary': "给参数设默认值，用 arguments 和 rest 收集任意数量的参数。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "函数是「工具」，参数就是「往工具里喂的料」。这一章讲参数的高级用法：参数忘了传怎么办（默认值）、参数数量不固定怎么办（rest 参数）、以及函数里那个隐藏的 arguments 是什么。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "参数默认值",
          'code': "// 调用时没传的参数，用默认值顶上\nfunction greet(name, greeting = \"你好\") {\n  return `${greeting}，${name}！`\n}\n\nconsole.log(greet(\"小明\"))        // 你好，小明！\nconsole.log(greet(\"小红\", \"早上好\"))  // 早上好，小红！\n\n// 箭头函数同样支持默认值\nconst add = (a, b = 10) => a + b\nconsole.log(add(5))       // 15\nconsole.log(add(5, 20))   // 25"
        },
        {
          'type': "p",
          'text': "默认值的写法是 <code.inline>参数 = 默认值</code.inline>。调用时不传这个参数（或传 undefined），就用默认值；传了就用你传的。这招让函数「进可攻退可守」，非常实用。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "rest 参数：收集剩余参数",
          'code': "// ...args 会把所有传入的参数收集成一个数组\nfunction sumAll(...args) {\n  let total = 0\n  for (let n of args) {\n    total += n\n  }\n  return total\n}\n\nconsole.log(sumAll(1, 2))           // 3\nconsole.log(sumAll(1, 2, 3, 4, 5))  // 15\nconsole.log(sumAll(10, 20, 30))     // 60"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "arguments：老式写法",
          'code': "// 传统写法：用函数内部自动存在的 arguments\nfunction oldSum() {\n  let total = 0\n  // arguments 是类数组，能用下标访问\n  for (let i = 0; i < arguments.length; i++) {\n    total += arguments[i]\n  }\n  return total\n}\n\nconsole.log(oldSum(1, 2, 3))   // 6"
        },
        {
          'type': "info",
          'title': "rest 与 arguments 的区别",
          'text': "<code.inline>arguments</code.inline> 是函数里自动存在的「类数组」（不是真数组，没有 map 等方法）；<code.inline>rest</code.inline> 参数（<code.inline>...</code.inline> 开头）是真正的数组。现代代码推荐用 rest 参数，更直观、更好用。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"参数、默认值与 rest 参数\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"参数、默认值与 rest 参数\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"参数、默认值与 rest 参数\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "参数可以设默认值：function f(a, b=10)",
            "rest 参数 ...args 收集所有剩余参数成真数组",
            "arguments 是旧的类数组写法，了解即可",
            "默认值在没传参或传 undefined 时生效"
          ]
        }
      ],
      'templates': [
        {
          'name': "rest 求和",
          'code': "function sumAll(...args) {\n  return args.reduce((a, b) => a + b, 0)\n}\nconsole.log(sumAll(1, 2, 3))\nconsole.log(sumAll(10, 20, 30, 40))\nconsole.log(sumAll(5))"
        }
      ]
    },
    {
      'id': "js-32",
      'title': "return 与返回值",
      'summary': "return 把计算结果交出去，遇到 return 函数立刻结束。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "函数有两种：一种是「干活型」，比如把文字打印到屏幕，干完就结束，不需要把结果交给你；一种是「计算型」，算出一个结果要交回给你用，这就要靠 <code.inline>return</code.inline>。return 是整个函数的「出口」。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "return 返回结果",
          'code': "function add(a, b) {\n  return a + b   // 把计算结果交出去\n}\n\n// 调用的结果可以直接用\nlet result = add(3, 4)\nconsole.log(result)   // 7\n\n// 也可以直接参与运算\nconsole.log(add(1, 2) * 10)   // 30"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "没有 return 会怎样",
          'code': "function sayHi(name) {\n  console.log(\"你好，\" + name)\n  // 没有 return\n}\n\nlet x = sayHi(\"小明\")   // 函数内部会打印，但...\nconsole.log(x)          // undefined ！没有 return 返回 undefined\n\n// 所以判断有没有返回值的函数，用 undefined\nif (x === undefined) {\n  console.log(\"这个函数没有返回任何东西\")\n}"
        },
        {
          'type': "p",
          'text': "重要结论：**没有 return（或 return 后面不跟值）的函数，返回的是 undefined**。这就是为什么 <code.inline>console.log</code.inline> 这个函数本身没有返回值（它只是负责打印）。很多新手困惑「为什么我打印 console.log 得到 undefined」，就是这个原因。"
        },
        {
          'type': "warn",
          'title': "return 一执行，函数立即结束",
          'text': "return 后面的代码永远不会执行！比如 <code.inline>function f() { return 1; console.log(\"这句话不会打印\") }</code.inline>。但要注意：return 只能在函数里用，在最外层代码里写 return 会直接报错。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "提前 return 的使用场景",
          'code': "function checkAge(age) {\n  if (age < 0) {\n    return \"年龄不能为负数\"   // 异常情况提前返回\n  }\n  if (age >= 18) {\n    return \"成年人\"\n  }\n  return \"未成年人\"\n}\n\nconsole.log(checkAge(20))   // 成年人\nconsole.log(checkAge(10))   // 未成年人\nconsole.log(checkAge(-5))   // 年龄不能为负数"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"return 与返回值\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"return 与返回值\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"return 与返回值\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "return 把结果交出去，调用处可用变量接住",
            "没有 return 的函数返回 undefined",
            "return 后面的代码不执行，常用来提前结束",
            "return 只能在函数体内使用"
          ]
        }
      ]
    },
    {
      'id': "js-33",
      'title': "作用域：var、let、const 的区别",
      'summary': "变量在哪个「领地」里有效，块级作用域 vs 函数作用域，彻底分清。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "作用域（Scope）就是「变量有效的地盘」。你在一个函数里定义的变量，出了函数还能用吗？在 if 的花括号里定义的变量，出了 if 还能用吗？这些问题都和作用域有关。理解作用域，你才能看懂为什么有的变量「说没就没」。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "全局与局部作用域",
          'code': "let globalVar = \"我是全局变量\"   // 在函数外面，到处都能用\n\nfunction test() {\n  let localVar = \"我是局部变量\"   // 只在函数内部有效\n  console.log(globalVar)   // 可以访问全局\n  console.log(localVar)    // 可以访问自己函数内的\n}\n\ntest()\n// console.log(localVar)  // 报错！函数外的代码访问不到它"
        },
        {
          'type': "p",
          'text': "在函数外边（最顶层）声明的变量叫「全局变量」，哪里都能访问；在函数内部声明的叫「局部变量」，只有这个函数里能访问。就像学校的广播（全局）全校都能听到，教室里的小声说话（局部）只有那个教室能听到。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "块级作用域：let 和 const 的领地",
          'code': "if (true) {\n  let inside = \"我在 if 块里\"\n  const alsoInside = \"我也是\"\n  var leaked = \"我是 var，我能跑出去\"   // var 没有块级作用域\n}\n\n// console.log(inside)      // 报错！let 只在那个 {} 块内有效\n// console.log(alsoInside)  // 报错！const 也一样\nconsole.log(leaked)   // 能打印！var 会泄漏到外面"
        },
        {
          'type': "p",
          'text': "这就是 var 的经典坑：<code.inline>let</code.inline> 和 <code.inline>const</code.inline> 是「块级作用域」——只在最近的一层花括号 <code.inline>{}</code.inline> 内有效；而 <code.inline>var</code.inline> 是「函数作用域」——只管函数边界，不管花括号块。所以 var 在 if、for 里声明的变量会「泄漏」出去，容易造成变量冲突。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "for 循环里的经典陷阱",
          'code': "// 用 var：循环结束后 i 还在，而且一直是同一个变量\nfor (var i = 0; i < 3; i++) {}\nconsole.log(i)   // 3 ！i 泄漏到了外面\n\n// 用 let：i 只在循环里有效\nfor (let j = 0; j < 3; j++) {}\n// console.log(j)  // 报错！循环外访问不到 j"
        },
        {
          'type': "table",
          'head': [
            "特性",
            "let",
            "const",
            "var"
          ],
          'rows': [
            [
              "能否重新赋值",
              "能",
              "不能",
              "能"
            ],
            [
              "块级作用域",
              "有",
              "有",
              "没有（只有函数作用域）"
            ],
            [
              "变量提升",
              "有但暂存死区",
              "有但暂存死区",
              "有且初始化为 undefined"
            ],
            [
              "推荐",
              "常用",
              "默认用",
              "别用"
            ]
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"作用域：var、let、const 的区别\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"作用域：var、let、const 的区别\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"作用域：var、let、const 的区别\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "作用域是变量有效的地盘，函数内是局部，最外层是全局",
            "let/const 是块级作用域，只在一层 {} 内有效",
            "var 是函数作用域，会从 if/for 里泄漏出去",
            "新代码一律用 let 和 const，别再用 var"
          ]
        }
      ]
    },
    {
      'id': "js-34",
      'title': "闭包：函数记住自己的家",
      'summary': "内层函数能记住外层函数的变量，即使外层已经执行完。理解闭包的经典计数器。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "闭包（Closure）是 JavaScript 里最出名也最让新手头疼的概念，它其实不难：**当一个函数在它外面那个函数里被定义时，它能「记住」外层函数里的变量，即使外层函数已经执行完了，这些变量也不会消失**。就像你离开了老家，但还留着老家的钥匙和记忆。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "闭包经典例子：计数器",
          'code': "function createCounter() {\n  let count = 0   // 这个变量被下面的函数「记住」了\n\n  return function () {\n    count++        // 每次调用都让 count 加 1\n    return count\n  }\n}\n\nconst counter = createCounter()\nconsole.log(counter())   // 1\nconsole.log(counter())   // 2\nconsole.log(counter())   // 3\n\n// count 没有被销毁！它被闭包牢牢记住"
        },
        {
          'type': "p",
          'text': "正常情况下，createCounter 执行完，它里面的 count 就应该被销毁了。但因为内层函数「引用」了 count，JavaScript 就会把这个变量保留下来，让它跟着内层函数一起存活。所以每次调用 counter()，count 都能接着往上加。这个「记住」就是闭包。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "闭包做工厂函数",
          'code': "// 用闭包给每个函数「记住」各自的问候语\nfunction makeGreeter(greeting) {\n  return function (name) {\n    return `${greeting}，${name}！`\n  }\n}\n\nconst sayHi = makeGreeter(\"你好\")\nconst sayHello = makeGreeter(\"Hello\")\n\nconsole.log(sayHi(\"小明\"))      // 你好，小明！\nconsole.log(sayHello(\"Tom\"))   // Hello，Tom！\n// 两个函数各自记住了自己的 greeting，互不干扰"
        },
        {
          'type': "warn",
          'title': "闭包陷阱：循环里的 var",
          'code': "// 经典坑：用 var 在循环里创建闭包\nfor (var i = 0; i < 3; i++) {\n  setTimeout(function () {\n    console.log(i)   // 打印 3 3 3，不是 0 1 2！\n  }, 100)\n}\n\n// 原因：var 只有一个 i，等回调执行时 i 已经是 3\n// 解决：把 var 改成 let（每次循环都有独立的 i）\nfor (let j = 0; j < 3; j++) {\n  setTimeout(() => console.log(j), 100)   // 0 1 2\n}"
        },
        {
          'type': "info",
          'title': "别怕闭包",
          'text': "闭包并不玄学：它就是「内层函数保留对外层变量的引用」。它无处不在——事件回调、定时器、模块化都离不开它。先用计数器和工厂函数这两个例子把它用熟，以后自然就懂了。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"闭包：函数记住自己的家\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"闭包：函数记住自己的家\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"闭包：函数记住自己的家\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "闭包 = 内层函数记住外层函数的变量",
            "即使外层函数执行完，被记住的变量也不销毁",
            "闭包经典应用：计数器、工厂函数",
            "循环里建闭包用 let 代替 var 避免共享同一个变量"
          ]
        }
      ]
    },
    {
      'id': "js-35",
      'title': "对象：键值对的集合",
      'summary': "用 {} 创建对象，键值对描述现实事物，掌握增删改查四种操作。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "对象（Object）是 JavaScript 里最灵活的容器。数组用下标取元素，对象用「键」（也叫属性名）取对应的「值」。一个对象就像一张填好的登记表：<code.inline>name: \"小明\"</code.inline> 意思是「名字这一栏填的是小明」。现实里的任何东西——人、商品、订单——都可以用对象描述。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "创建对象",
          'code': "// 用花括号创建对象，键和值用冒号连接，逗号分隔\nlet person = {\n  name: \"小明\",\n  age: 20,\n  city: \"北京\",\n  isStudent: true\n}\n\nconsole.log(person)\nconsole.log(person.name)     // 小明 点号访问\nconsole.log(person[\"age\"])   // 20 方括号访问"
        },
        {
          'type': "p",
          'text': "访问对象的属性有两种方式：点号 <code.inline>person.name</code.inline> 最常用；方括号 <code.inline>person[\"age\"]</code.inline> 在「键名是变量」时必用。比如 <code.inline>let key = \"age\"; person[key]</code.inline>。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "增、删、改、查",
          'code': "let user = { name: \"小明\", age: 20 }\n\n// 改：给已有属性赋新值\nuser.age = 21\nconsole.log(user.age)   // 21\n\n// 增：直接给不存在的属性赋值\nuser.city = \"北京\"\nconsole.log(user)   // 多了一个 city\n\n// 查：判断有没有这个属性\nconsole.log(\"name\" in user)   // true\nconsole.log(\"height\" in user) // false\n\n// 删：用 delete 关键字\ndelete user.city\nconsole.log(user)   // city 没了"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "方法：对象里的函数",
          'code': "let person = {\n  name: \"小明\",\n  age: 20,\n  // 对象里的函数叫「方法」\n  greet() {\n    return \"你好，我是\" + this.name   // this 指向当前对象\n  }\n}\n\nconsole.log(person.greet())   // 你好，我是小明\nconsole.log(typeof person.greet)  // function"
        },
        {
          'type': "info",
          'title': "键名可以加引号",
          'text': "大多数键名不需要引号（比如 name、age），但如果键名有特殊字符或空格，比如 <code.inline>\"first name\"</code.inline>，就必须加引号，并且访问时也只能用方括号 <code.inline>obj[\"first name\"]</code.inline>。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"对象：键值对的集合\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"对象：键值对的集合\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"对象：键值对的集合\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "对象用 {} 表示，由键值对组成",
            "点号或方括号访问属性，键是变量时用方括号",
            "改：赋值；增：给新属性赋值；删：delete 关键字",
            "对象里存函数叫方法，方法里用 this 访问本对象"
          ]
        }
      ],
      'templates': [
        {
          'name': "我的名片",
          'code': "let me = {\n  name: \"小明\",\n  age: 20,\n  hobby: [\"编程\", \"篮球\"],\n  intro() { return `我是${this.name}，今年${this.age}岁` }\n}\nconsole.log(me.intro())\nconsole.log(\"爱好：\" + me.hobby.join(\"、\"))"
        }
      ]
    },
    {
      'id': "js-36",
      'title': "this：当前的主角是谁",
      'summary': "this 指向「当前调用它的对象」，普通函数看怎么调，箭头函数看定义在哪。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "<code.inline>this</code.inline> 是 JavaScript 里最绕的概念之一，无数人在这里栽过跟头。一句话本质：**this 表示「当前正在操作的那个对象」**。但它的值不是写死在你定义的地方，而是看「谁调用它」——同样的函数，被不同对象调用，this 就指向不同对象。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "方法里的 this 指向调用它的对象",
          'code': "let person = {\n  name: \"小明\",\n  greet() {\n    return \"你好，我是\" + this.name   // this 是谁调的？是 person\n  }\n}\n\nconsole.log(person.greet())   // 你好，我是小明\n\n// 把函数拿出来，在全局里调用\nlet fn = person.greet\n// 全局没有 name，this 指向 window/undefined，这里会报错或得 undefined\nconsole.log(typeof this)   // 注意：模块顶层 this 不是 person"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "this 的经典坑：事件回调",
          'code': "// 这是给浏览器写的示例（本环境无法直接跑，理解思路）\n// let btn = document.querySelector(\"button\")\n// btn.addEventListener(\"click\", function () {\n//   console.log(this)   // 普通函数：this 指向触发事件的元素 btn\n// })\n\n// 箭头函数就不一样：this 是外层定义时的 this\n// btn.addEventListener(\"click\", () => {\n//   console.log(this)   // 箭头函数：this 是外层（可能是 window）\n// })"
        },
        {
          'type': "p",
          'text': "普通函数的 this 是「谁调用就是谁」；箭头函数没有自己的 this，它用的是「定义它那个位置」的 this。这就是箭头函数在事件回调里可能给你带来惊喜（或者惊吓）的原因。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "用 call/apply/bind 指定 this",
          'code': "function introduce(prefix) {\n  return prefix + \"我是\" + this.name\n}\n\nlet a = { name: \"小明\" }\nlet b = { name: \"小红\" }\n\n// call：立即调用，第一个参数指定 this\nconsole.log(introduce.call(a, \"大家好，\"))  // 大家好，我是小明\nconsole.log(introduce.call(b, \"哈喽，\"))    // 哈喽，我是小红\n\n// bind：返回一个固定 this 的新函数，不立即调用\nlet bindA = introduce.bind(a)\nconsole.log(bindA(\"再强调一次，\"))  // 再强调一次，我是小明"
        },
        {
          'type': "warn",
          'title': "this 的三个场景速记",
          'text': "1) 对象方法里：this 指向调用方法的对象；2) 全局或普通函数里：浏览器中是 window，严格模式是 undefined；3) 箭头函数里：this 来自定义处的外层。实在分不清时，先 console.log(this) 看看到底指向谁，比瞎猜快。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"this：当前的主角是谁\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"this：当前的主角是谁\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"this：当前的主角是谁\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "this = 当前正在操作的那个对象",
            "普通函数：谁调用 this 就指向谁",
            "箭头函数：没有自己的 this，用外层的 this",
            "call/bind 可以手动指定 this，事件回调里注意区别"
          ]
        }
      ]
    },
    {
      'id': "js-37",
      'title': "Object.keys / values / entries",
      'summary': "把对象的键、值、键值对分别提取成数组，方便遍历和处理。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "之前讲过 for...in 可以遍历对象的键。但现代 JavaScript 更推荐用三个「提取方法」把对象变成数组再处理，配合数组那套方法（map、forEach）特别顺手。这三个方法是：<code.inline>Object.keys()</code.inline>（拿键）、<code.inline>Object.values()</code.inline>（拿值）、<code.inline>Object.entries()</code.inline>（拿键值对）。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "提取键、值、键值对",
          'code': "let person = { name: \"小明\", age: 20, city: \"北京\" }\n\nconsole.log(Object.keys(person))      // [\"name\",\"age\",\"city\"]\nconsole.log(Object.values(person))    // [\"小明\",20,\"北京\"]\nconsole.log(Object.entries(person))\n// [[\"name\",\"小明\"],[\"age\",20],[\"city\",\"北京\"]]\n\nconsole.log(Object.keys(person).length)   // 3 属性的个数"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "用数组方法处理对象",
          'code': "let scores = { math: 90, english: 85, chinese: 88 }\n\n// 遍历键值对：解构出 key 和 value\nfor (let [key, value] of Object.entries(scores)) {\n  console.log(`${key}：${value} 分`)\n}\n\n// 求总分：把值取出来用 reduce\nlet total = Object.values(scores).reduce((a, b) => a + b, 0)\nconsole.log(\"总分：\", total)   // 263\n\n// 找出成绩高于 86 的科目\nlet good = Object.entries(scores)\n  .filter(([key, value]) => value > 86)\n  .map(([key]) => key)\nconsole.log(\"高于86分的科目：\", good)   // [\"math\",\"chinese\"]"
        },
        {
          'type': "info",
          'title': "顺序问题",
          'text': "Object.keys/values/entries 返回的键的顺序：数字键会按从小到大排在前面，字符串键按插入顺序排后面。一般应用不用太在意，但如果要严格保证顺序，可以考虑用 Map（后面会讲）。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Object.keys / values / entries\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Object.keys / values / entries\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Object.keys / values / entries\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Object.keys() 拿全部键组成数组",
            "Object.values() 拿全部值组成数组",
            "Object.entries() 拿键值对组成二维数组",
            "配合 for...of 解构、filter/map/reduce 处理对象很爽"
          ]
        }
      ],
      'templates': [
        {
          'name': "统计总分",
          'code': "let scores = { math: 90, english: 85, chinese: 88 }\nlet total = Object.values(scores).reduce((a, b) => a + b, 0)\nlet avg = (total / Object.keys(scores).length).toFixed(1)\nconsole.log(\"总分\", total, \"平均\", avg)"
        }
      ]
    },
    {
      'id': "js-38",
      'title': "解构赋值：拆包取数据",
      'summary': "从数组和对象里一次性取出多个值赋给变量，代码瞬间变清爽。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "解构（Destructuring）就是把「包好的数据」拆开，把里面的值一个个取出来直接赋给变量。以前你要写 <code.inline>let a = arr[0]; let b = arr[1]</code.inline> 好几行，解构一行搞定。它是 ES6 带来的「拆包神器」。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "数组解构",
          'code': "let nums = [10, 20, 30]\n\n// 按位置依次赋给变量\nlet [a, b, c] = nums\nconsole.log(a, b, c)   // 10 20 30\n\n// 只取前两个，后面用逗号跳过\nlet [x, , z] = nums\nconsole.log(x, z)   // 10 30\n\n// 交换两个变量的值，不用中间变量\nlet m = 1, n = 2\n;[m, n] = [n, m]\nconsole.log(m, n)   // 2 1"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "对象解构",
          'code': "let person = { name: \"小明\", age: 20, city: \"北京\" }\n\n// 按属性名取，顺序无所谓\nlet { name, age } = person\nconsole.log(name, age)   // 小明 20\n\n// 改名：取 city 存到变量 addr 里\nlet { city: addr } = person\nconsole.log(addr)   // 北京\n\n// 设默认值：没有的属性用默认值\nlet { height = 170 } = person\nconsole.log(height)   // 170"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "函数参数解构",
          'code': "function greet({ name, age }) {\n  // 直接把对象的属性拆出来用\n  return `${name}，今年${age}岁`\n}\n\nconsole.log(greet({ name: \"小明\", age: 20 }))\n\n// 数组参数解构\nfunction sum([a, b, c]) {\n  return a + b + c\n}\nconsole.log(sum([1, 2, 3]))   // 6"
        },
        {
          'type': "warn",
          'title': "解构不存在的值会得 undefined",
          'text': "解构时如果数组不够长、对象没有这个属性，得到的值是 undefined，不会报错。所以对象解构常配合默认值使用：<code.inline>let { a = 0 } = obj</code.inline>，这样即使没有 a 也有兜底。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"解构赋值：拆包取数据\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"解构赋值：拆包取数据\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"解构赋值：拆包取数据\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "数组解构按位置取值，逗号跳过，可交换变量",
            "对象解构按属性名取值，可用 属性:新名 改名",
            "解构支持默认值，防止 undefined",
            "函数参数解构让调用更清爽，前后端传对象常用"
          ]
        }
      ],
      'templates': [
        {
          'name': "解构应用",
          'code': "let user = { name: \"小红\", scores: { math: 95, english: 88 } }\nlet { name, scores: { math, english } } = user\nconsole.log(`${name} 数学${math} 英语${english}`)\nconsole.log(`总分 ${math + english}`)"
        }
      ]
    },
    {
      'id': "js-39",
      'title': "展开运算符：三个点的魔法",
      'summary': "... 把数组或对象「拆开铺平」，复制、合并、传参样样行。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "展开运算符是三个点 <code.inline>...</code.inline>，作用是把数组、对象里的每一项「拆开铺平」展示出来。它和解构是好搭档，用来复制、合并、传参特别顺手，是 ES6 里使用率最高的语法之一。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "展开数组",
          'code': "let arr = [1, 2, 3]\n\nconsole.log(...arr)   // 1 2 3 把数组铺开成一个个值\n\n// 复制数组（浅拷贝）\nlet copy = [...arr]\nconsole.log(copy)   // [1,2,3]\n\n// 合并数组\nlet arr2 = [4, 5]\nlet merged = [...arr, ...arr2]\nconsole.log(merged)   // [1,2,3,4,5]\n\n// 插入到中间\nlet withZero = [0, ...arr, 9]\nconsole.log(withZero)   // [0,1,2,3,9]"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "展开对象",
          'code': "let person = { name: \"小明\", age: 20 }\nlet more = { city: \"北京\", age: 21 }\n\n// 合并对象：后面的同名属性会覆盖前面的\nlet full = { ...person, ...more }\nconsole.log(full)   // {name:\"小明\", age:21, city:\"北京\"}\n\n// 复制对象并修改一个属性\nlet updated = { ...person, age: 22 }\nconsole.log(updated)   // {name:\"小明\", age:22}"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "配合函数传参",
          'code': "function add(a, b, c) {\n  return a + b + c\n}\n\nlet nums = [1, 2, 3]\nconsole.log(add(...nums))   // 6 把数组拆成三个参数传入\n\n// 顺便和 Math 配合：找最大值\nconsole.log(Math.max(...[5, 9, 2]))   // 9"
        },
        {
          'type': "warn",
          'title': "展开是浅拷贝",
          'text': "展开运算符复制的是「第一层」。如果数组里装的是对象，复制出来的新数组和原数组共享那些对象。改内层对象的属性，两边都会变。需要深拷贝（连内层都复制）要用 JSON 方法或专门的库。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"展开运算符：三个点的魔法\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"展开运算符：三个点的魔法\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"展开运算符：三个点的魔法\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "... 把数组/对象拆开铺平",
            "复制数组 [...arr]、合并 [...a,...b]",
            "复制对象并改某属性 {...obj, 属性:新值}",
            "展开是浅拷贝，内层引用类型仍共享"
          ]
        }
      ],
      'templates': [
        {
          'name': "展开与合并",
          'code': "let a = [1, 2]\nlet b = [3, 4]\nlet c = [...a, ...b, 5]\nconsole.log(c)\n\nlet o1 = { x: 1 }\nlet o2 = { y: 2, x: 9 }\nconsole.log({ ...o1, ...o2 })   // x 被覆盖成 9"
        }
      ]
    },
    {
      'id': "js-40",
      'title': "字符串进阶方法",
      'summary': "includes、startsWith、padStart、trim、repeat 等实用方法一网打尽。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "第 7 章讲过字符串的基础方法，这一章把 ES6 及以后新增的实用方法补全。这些方法在真实项目里天天用：判断包含、补零、去空格、重复……掌握它们能少写很多笨代码。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "判断类方法",
          'code': "let email = \"user@example.com\"\n\nconsole.log(email.includes(\"@\"))       // true 是否包含\nconsole.log(email.startsWith(\"user\"))  // true 是否以...开头\nconsole.log(email.endsWith(\".com\"))    // true 是否以...结尾\nconsole.log(email.indexOf(\"example\"))  // 5 第一次出现的位置\n\n// 判断是否为空或全空白\nlet s = \"   \"\nconsole.log(s.trim().length === 0)   // true 去掉空格后是空的\nconsole.log(s.trim())   // 去掉首尾空白"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "格式化类方法",
          'code': "// padStart：在开头补字符到指定长度（常用于数字补零）\nlet hour = 8\nconsole.log(String(hour).padStart(2, \"0\"))   // \"08\"\n\n// repeat：重复字符串\nconsole.log(\"哈\".repeat(3))   // 哈哈哈\n\n// 大小写转换\nconsole.log(\"hello\".toUpperCase())   // HELLO\nconsole.log(\"WORLD\".toLowerCase())   // world\n\n// 截取：slice 和 substring\nlet txt = \"abcdef\"\nconsole.log(txt.slice(2, 4))    // cd\nconsole.log(txt.substring(2, 4)) // cd"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "字符串转数字与模板拼接",
          'code': "// 数字和字符串互转\nconsole.log(Number(\"123\"))      // 123\nconsole.log(parseInt(\"123px\"))  // 123 提取开头的整数\nconsole.log(parseFloat(\"3.14元\")) // 3.14\n\n// 字符串重复拼接用模板字符串\nlet items = [\"苹果\", \"香蕉\"]\nconsole.log(`我有${items.length}种水果：${items.join(\"、\")}`)"
        },
        {
          'type': "info",
          'title': "用正则替换还是 split？",
          'text': "想替换「所有」匹配内容，<code.inline>replace</code.inline> 默认只替换第一个，要用正则加全局标志 <code.inline>replaceAll</code.inline>。ES2021 提供了 <code.inline>replaceAll</code.inline> 方法，直接替换全部，更直观。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"字符串进阶方法\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"字符串进阶方法\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"字符串进阶方法\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "includes/startsWith/endsWith 判断包含与开头结尾",
            "padStart 补零、repeat 重复、trim 去空白",
            "Number()/parseInt()/parseFloat() 把字符串变数字",
            "replace 默认只替换第一个，全部替换用 replaceAll"
          ]
        }
      ]
    },
    {
      'id': "js-41",
      'title': "正则表达式入门",
      'summary': "用 /pattern/ 描述「长什么样的文本」，test、match、replace 三大用途。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "正则表达式（Regular Expression）是一套用来「匹配文本模式」的语法。简单说：你描述「我想要长什么样的字符串」，正则就去一堆文本里帮你找出来。它是验证手机号、邮箱，提取、替换文字的神器，写起来像天书，但拆开看并不可怕。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "创建正则与 test",
          'code': "// 用两个斜杠 / / 创建正则\nlet pattern = /abc/\n\n// test：测试字符串是否「匹配」这个模式，返回布尔\nconsole.log(pattern.test(\"abcdef\"))    // true 包含 abc\nconsole.log(pattern.test(\"xyz\"))       // false\n\n// 常用字面量形式\nconsole.log(/\\d/.test(\"abc123\"))   // true \\d 表示数字\nconsole.log(/^a/.test(\"abc\"))      // true ^a 表示以 a 开头\nconsole.log(/c$/.test(\"abc\"))      // true c$ 表示以 c 结尾"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "match 与 replace",
          'code': "let phone = \"我的电话是 138-1234-5678\"\n\n// match：找出匹配的部分\nlet result = phone.match(/\\d{3}-\\d{4}-\\d{4}/)\nconsole.log(result[0])   // 138-1234-5678\n\n// replace：替换匹配的部分\nconsole.log(phone.replace(/138/, \"139\"))   // 我的电话是 139-...\n\n// 全局替换（加 g 标志）\nlet txt = \"aaa\"\nconsole.log(txt.replace(/a/g, \"X\"))   // XXX"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "常用正则速查",
          'code': "// 验证手机号（11 位，1 开头）\nlet mobile = /^1\\d{10}$/\nconsole.log(mobile.test(\"13812345678\"))   // true\nconsole.log(mobile.test(\"12345\"))         // false\n\n// 验证邮箱（简化版）\nlet mail = /^[\\w.-]+@[\\w.-]+\\.\\w+$/\nconsole.log(mail.test(\"a@b.com\"))   // true\nconsole.log(mail.test(\"not-an-email\"))   // false\n\n// 提取所有数字\nlet s = \"价格 12 元，数量 3 个\"\nconsole.log(s.match(/\\d+/g))   // [\"12\",\"3\"]"
        },
        {
          'type': "info",
          'title': "常见符号速记",
          'text': "<code.inline>\\d</code.inline> 数字、<code.inline>\\w</code.inline> 字母数字下划线、<code.inline>\\s</code.inline> 空白、<code.inline>.</code.inline> 任意字符、<code.inline>*</code.inline> 0 次或多次、<code.inline>+</code.inline> 1 次或多次、<code.inline>?</code.inline> 0 次或 1 次、<code.inline>{n}</code.inline> 恰好 n 次、<code.inline>[]</code.inline> 字符集合、<code.inline>(a|b)</code.inline> 或。先用这些就能解决大部分需求。"
        },
        {
          'type': "warn",
          'title': "正则里的 \\d 要写 \\d",
          'text': "在 JS 字符串里写 <code.inline>/\\d/</code.inline> 时，斜杠后面直接写反斜杠 d 就行。但如果你用 <code.inline>new RegExp(\"\\\\d\")</code.inline> 这种字符串方式创建，反斜杠要双重转义，很绕。**推荐一律用斜杠字面量 <code.inline>/\\d/</code.inline> 写法**，省心。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"正则表达式入门\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"正则表达式入门\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"正则表达式入门\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "正则用 /模式/ 创建，test() 判断是否匹配",
            "match() 提取匹配内容，replace() 替换匹配内容",
            "加 g 标志可全局匹配，^ $ 表示开头结尾",
            "手机号、邮箱验证是正则最常用场景"
          ]
        }
      ],
      'templates': [
        {
          'name': "正则验证手机号",
          'code': "function isMobile(s) {\n  return /^1\\d{10}$/.test(s)\n}\nconsole.log(isMobile(\"13812345678\"))  // true\nconsole.log(isMobile(\"12345\"))        // false"
        }
      ]
    },
    {
      'id': "js-42",
      'title': "Math：数学工具箱",
      'summary': "round、floor、ceil、random、max、min、pow、sqrt 等常用数学方法。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "<code.inline>Math</code.inline> 是 JavaScript 自带的「数学工具箱」，里面全是现成的数学方法和常量，不用自己实现。比如四舍五入、取整、取绝对值、取随机数，全都现成。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "取整三兄弟",
          'code': "console.log(Math.round(4.5))   // 5 四舍五入\nconsole.log(Math.round(4.4))   // 4\nconsole.log(Math.floor(4.9))   // 4 向下取整（往小取）\nconsole.log(Math.ceil(4.1))    // 5 向上取整（往大取）\nconsole.log(Math.trunc(4.9))   // 4 直接砍掉小数\n\n// 注意负数方向不同\nconsole.log(Math.floor(-4.1))  // -5 向下取整是往更小\nconsole.log(Math.trunc(-4.1))  // -4 直接砍小数"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "随机数",
          'code': "// Math.random() 返回 0（含）到 1（不含）之间的小数\nconsole.log(Math.random())\n\n// 想要 1 到 10 的随机整数\nlet n = Math.floor(Math.random() * 10) + 1\nconsole.log(\"1~10 的随机整数：\", n)\n\n// 封装成函数\nfunction randInt(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min\n}\nconsole.log(\"50~100 的随机整数：\", randInt(50, 100))"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "其他常用方法",
          'code': "console.log(Math.abs(-7))        // 7 绝对值\nconsole.log(Math.max(3, 9, 5))   // 9 最大值\nconsole.log(Math.min(3, 9, 5))   // 3 最小值\nconsole.log(Math.pow(2, 10))     // 1024 幂运算\nconsole.log(2 ** 10)             // 1024 运算符写法也可以\nconsole.log(Math.sqrt(81))       // 9 平方根\nconsole.log(Math.PI)             // 3.141592653589793\nconsole.log(Math.floor(Math.random() * 100))  // 随机两位数"
        },
        {
          'type': "warn",
          'title': "random 不能保证唯一",
          'text': "Math.random() 是「随机」但不是「每次保证不重复」。抽奖、验证码这种要唯一性的场景，不能光靠它，还得配合时间戳或集合去重。而且它产生的随机数用于密码等安全场景是不够安全的（要用 crypto 模块）。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Math：数学工具箱\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Math：数学工具箱\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Math：数学工具箱\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Math.round/floor/ceil 四舍五入/向下/向上取整",
            "Math.random() 生成 0~1 随机小数",
            "取 N~M 随机整数：floor(random*(M-N+1))+N",
            "Math.max/min/pow/sqrt/abs 是常用数学工具"
          ]
        }
      ],
      'templates': [
        {
          'name': "猜数字小游戏",
          'code': "let target = Math.floor(Math.random() * 100) + 1\nfunction guess(n) {\n  if (n === target) return \"猜中了！\"\n  return n > target ? \"大了\" : \"小了\"\n}\nconsole.log(\"目标数字藏在 1~100 之间\")\nconsole.log(guess(50))\nconsole.log(guess(25))\nconsole.log(guess(37))"
        }
      ]
    },
    {
      'id': "js-43",
      'title': "Date：日期与时间",
      'summary': "创建日期对象，获取年月日时分秒，格式化成中文习惯的日期。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "程序里经常要跟时间打交道：显示当前时间、计算两个日期差几天、把时间戳转成人类能看懂的样子。JavaScript 用 <code.inline>Date</code.inline> 这个内置对象处理日期和时间。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "创建日期对象",
          'code': "// 当前时间\nlet now = new Date()\nconsole.log(now)\n\n// 指定日期（注意：月份从 0 开始！0 是一月）\nlet d1 = new Date(2025, 0, 15)        // 2025年1月15日\nconsole.log(d1)\nlet d2 = new Date(\"2025-12-25\")      // 字符串方式\nconsole.log(d2)\n\n// 时间戳（从1970年1月1日算起的毫秒数）\nconsole.log(Date.now())   // 一串大数字\nconsole.log(new Date(Date.now()))"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "获取年月日时分秒",
          'code': "let now = new Date()\n\nconsole.log(now.getFullYear())  // 年，比如 2026\nconsole.log(now.getMonth())     // 月，0~11，0 是一月！\nconsole.log(now.getDate())      // 日，1~31\nconsole.log(now.getDay())       // 星期几，0 是周日\nconsole.log(now.getHours())     // 时\nconsole.log(now.getMinutes())   // 分\nconsole.log(now.getSeconds())   // 秒"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "格式化日期",
          'code': "function formatDate(date) {\n  let y = date.getFullYear()\n  let m = String(date.getMonth() + 1).padStart(2, \"0\")\n  let d = String(date.getDate()).padStart(2, \"0\")\n  let h = String(date.getHours()).padStart(2, \"0\")\n  let min = String(date.getMinutes()).padStart(2, \"0\")\n  return `${y}-${m}-${d} ${h}:${min}`\n}\n\nconsole.log(formatDate(new Date()))\n\n// 计算两个日期差几天\nfunction daysBetween(a, b) {\n  let diff = Math.abs(a - b)   // 相减得到毫秒数\n  return Math.floor(diff / (1000 * 60 * 60 * 24))\n}\nconsole.log(daysBetween(new Date(\"2025-01-01\"), new Date(\"2025-01-15\")))  // 14"
        },
        {
          'type': "warn",
          'title': "月份从 0 开始，一定 +1",
          'text': "getMonth() 返回的是 0~11，0 表示一月。新手几乎必踩这个坑：显示 6 月却出来 5 月。记住取月份后一定要 <code.inline>+1</code.inline>。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Date：日期与时间\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Date：日期与时间\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Date：日期与时间\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "new Date() 创建当前时间，也可指定日期",
            "getFullYear/getMonth/getDate/getHours 取各部分",
            "getMonth() 从 0 开始，要显示要 +1",
            "两个日期相减得到毫秒数，可换算成天数"
          ]
        }
      ],
      'templates': [
        {
          'name': "当前日期",
          'code': "let now = new Date()\nlet y = now.getFullYear()\nlet m = String(now.getMonth() + 1).padStart(2, \"0\")\nlet d = String(now.getDate()).padStart(2, \"0\")\nconsole.log(`今天是 ${y}年${m}月${d}日`)\nconsole.log(\"时间戳：\", Date.now())"
        }
      ]
    },
    {
      'id': "js-44",
      'title': "JSON：数据的通用语言",
      'summary': "JSON.stringify 把对象转成字符串，JSON.parse 把字符串转回对象，前后端传数据的标准格式。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "前后端之间传数据，不能直接传 JS 对象，得先变成一种「通用格式」。这个格式就是 JSON（JavaScript Object Notation）。它长得很像 JS 对象，但有一点区别：**所有键和字符串都必须用双引号**。JSON 是目前互联网上最主流的数据格式。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "对象转 JSON 字符串：stringify",
          'code': "let user = {\n  name: \"小明\",\n  age: 20,\n  skills: [\"JS\", \"HTML\"]\n}\n\n// 对象 -> JSON 字符串\nlet jsonStr = JSON.stringify(user)\nconsole.log(jsonStr)\n// {\"name\":\"小明\",\"age\":20,\"skills\":[\"JS\",\"HTML\"]}\n\n// 注意：JSON 里所有键都带双引号\nconsole.log(typeof jsonStr)   // string 它已经是字符串了"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "JSON 字符串转对象：parse",
          'code': "let jsonStr = '{\"name\":\"小红\",\"age\":18}'\n\n// JSON 字符串 -> 对象\nlet obj = JSON.parse(jsonStr)\nconsole.log(obj.name)   // 小红\nconsole.log(obj.age)    // 18\nconsole.log(typeof obj) // object"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "实战：深拷贝与本地存储",
          'code': "// 深拷贝：JSON 序列化再反序列化（简单对象适用）\nlet original = { a: 1, b: { c: 2 } }\nlet copy = JSON.parse(JSON.stringify(original))\ncopy.b.c = 99\nconsole.log(original.b.c)   // 2 没被影响，是真正的深拷贝\n\n// 本地存储只能存字符串，所以要序列化\n// localStorage.setItem(\"user\", JSON.stringify(user))\n// let back = JSON.parse(localStorage.getItem(\"user\"))"
        },
        {
          'type': "warn",
          'title': "JSON 序列化不了的家伙",
          'text': "undefined、函数（方法）、Symbol 在 stringify 时会被忽略或变成 null；NaN 和 Infinity 会变成 null；Date 会变成字符串。所以别把带方法的对象直接序列化，先只留纯数据。"
        },
        {
          'type': "info",
          'title': "try/catch 保护 parse",
          'text': "JSON.parse 遇到不合法的字符串会直接抛错，中断程序。从外部（用户输入、接口返回）拿数据时，建议用 try/catch 包住 parse，后面讲错误处理时会细说。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"JSON：数据的通用语言\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"JSON：数据的通用语言\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"JSON：数据的通用语言\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "JSON 是前后端传数据的标准格式，键和字符串必须双引号",
            "JSON.stringify 对象转字符串，JSON.parse 字符串转对象",
            "JSON 序列化+反序列化可以做简单的深拷贝",
            "undefined/函数/NaN 不能被正常序列化"
          ]
        }
      ],
      'templates': [
        {
          'name': "JSON 往返",
          'code': "let obj = { name: \"小明\", age: 20, tags: [\"a\", \"b\"] }\nlet str = JSON.stringify(obj)\nconsole.log(\"字符串：\", str)\nlet back = JSON.parse(str)\nconsole.log(\"转回：\", back)\nconsole.log(\"名字：\", back.name)"
        }
      ]
    },
    {
      'id': "js-45",
      'title': "DOM 入门：让 JS 操作网页",
      'summary': "认识 DOM 树，用 document.querySelector 找到网页里的元素。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "前面的章节都在「纯 JS」里打转，现在进入最激动人心的部分：**用 JavaScript 操控网页**。网页里的每个标签（标题、按钮、段落）在 JS 里都是一个「元素对象」，JS 可以找到它们、修改它们、给它们加事件。这一整套结构叫 DOM（文档对象模型）。"
        },
        {
          'type': "p",
          'text': "DOM 把 HTML 看成一棵树：<code.inline>html</code.inline> 是根，下面长着 <code.inline>head</code.inline> 和 <code.inline>body</code.inline> 两个大树枝，body 里又挂着一个个标签。每个标签是一个「节点」。JS 通过各种方法在这棵树上「找节点、改节点、加节点」。"
        },
        {
          'type': "code",
          'lang': "html",
          'title': "先准备一个简单页面",
          'code': "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n</head>\n<body>\n  <h1 id=\"title\">欢迎来到我的网页</h1>\n  <p class=\"intro\">这是一个段落</p>\n  <button id=\"btn\">点我</button>\n  <script>\n    // 下面这几行代码就是 JS，写在 script 标签里\n    let t = document.getElementById(\"title\")\n    t.textContent = \"标题被 JS 改掉了！\"\n\n    let p = document.querySelector(\".intro\")\n    p.textContent = \"段落也被改了\"    \n  </script>\n</body>\n</html>"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "querySelector：最常用的查找法",
          'code': "// 假设页面里有上面那些元素，查找方式：\n// 按 id 查找（id 前加 #）\n// document.querySelector(\"#title\")\n\n// 按 class 查找（class 前加 .）\n// document.querySelector(\".intro\")\n\n// 按标签名查找\n// document.querySelector(\"h1\")\n\n// 找出一整组匹配的元素（返回类数组）\n// document.querySelectorAll(\"p\")\n\n// 这里用纯 JS 演示选择器语法本身\nlet selector = \"#title\"\nconsole.log(\"选择器语法：\" + selector + \" 表示按 id 查找\")\nconsole.log(\"document.querySelector(\\\"#title\\\") 返回第一个匹配元素\")\nconsole.log(\"document.querySelectorAll(\\\"p\\\") 返回所有匹配的列表\")"
        },
        {
          'type': "info",
          'title': "本环境能跑吗",
          'text': "document 对象只在浏览器里有。本编辑器里 <code.inline>document.querySelector</code.inline> 可能无法执行，所以请把上面 HTML 那个代码块复制到浏览器里的 .html 文件（或在线编辑器）中运行。这也是网页开发的真实方式。"
        },
        {
          'type': "warn",
          'title': "querySelector vs getElementById",
          'text': "<code.inline>document.getElementById</code.inline> 只按 id 找，快但单一；<code.inline>querySelector</code.inline> 支持所有 CSS 选择器（id、class、标签、后代选择器等），更灵活，是现代推荐写法。找到多个时 querySelector 只返回第一个，要全部用 querySelectorAll。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"DOM 入门：让 JS 操作网页\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"DOM 入门：让 JS 操作网页\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"DOM 入门：让 JS 操作网页\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "DOM 是网页标签组成的树，JS 通过它操控网页",
            "document.querySelector(\"#id\") 按 id 找，(\".cls\") 按 class 找",
            "querySelectorAll 返回匹配的一整组元素",
            "DOM 操作需要浏览器环境，用 .html 文件运行"
          ]
        }
      ]
    },
    {
      'id': "js-46",
      'title': "创建与插入元素",
      'summary': "用 createElement 造出新元素，用 appendChild / insertBefore 放进页面。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "光会「改已有的元素」还不够，网页经常要**动态造出新元素**：比如用户点一下「添加」，列表里就多一行；点「发送」，聊天框里就多一条消息。这一章学怎么凭空造元素并塞进页面。"
        },
        {
          'type': "code",
          'lang': "html",
          'title': "完整示例：动态添加列表项",
          'code': "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n</head>\n<body>\n  <ul id=\"list\"></ul>\n  <button id=\"addBtn\">添加一项</button>\n\n  <script>\n    const list = document.getElementById(\"list\")\n    const btn = document.getElementById(\"addBtn\")\n\n    btn.addEventListener(\"click\", () => {\n      // 1. 造一个新的 li 元素\n      const li = document.createElement(\"li\")\n      // 2. 往里面填文字\n      li.textContent = \"新项目 \" + (list.children.length + 1)\n      // 3. 塞进 ul 的末尾\n      list.appendChild(li)\n    })\n  </script>\n</body>\n</html>"
        },
        {
          'type': "p",
          'text': "造元素的固定三连：<code.inline>document.createElement(\"标签名\")</code.inline> 先造出来（此时它在内存里，还没上页面）→ 往元素里填内容（textContent、innerHTML、appendChild 子元素等）→ 用 <code.inline>父元素.appendChild(新元素)</code.inline> 把它挂到页面上。三步缺一不可。"
        },
        {
          'type': "code",
          'lang': "html",
          'title': "insertBefore 与批量插入",
          'code': "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n</head>\n<body>\n  <ul id=\"list\">\n    <li>第二项</li>\n    <li>第三项</li>\n  </ul>\n  <script>\n    const list = document.getElementById(\"list\")\n\n    // 在第一个子元素之前插入\n    const first = document.createElement(\"li\")\n    first.textContent = \"第一项\"\n    list.insertBefore(first, list.firstElementChild)\n\n    // 批量创建\n    const frag = document.createDocumentFragment()\n    for (let i = 4; i <= 6; i++) {\n      const li = document.createElement(\"li\")\n      li.textContent = \"第\" + i + \"项\"\n      frag.appendChild(li)\n    }\n    list.appendChild(frag)   // 一次性挂上去\n  </script>\n</body>\n</html>"
        },
        {
          'type': "warn",
          'title': "先造好再挂，别反复挂",
          'text': "createElement 造出来的元素要先「组装好」再一次性 appendChild。特别是循环里造多个元素时，别在循环里每次都对页面做一次真实插入——性能很差。用 <code.inline>DocumentFragment</code.inline>（上面例子里的 frag）先攒着，最后一次挂上，又快又稳。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"创建与插入元素\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"创建与插入元素\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"创建与插入元素\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "createElement 造新元素，appendChild 挂到末尾",
            "insertBefore(新, 参考元素) 插到参考元素之前",
            "造元素三步：创建 → 填内容 → 挂到页面",
            "批量造元素用 DocumentFragment 一次性挂载"
          ]
        }
      ]
    },
    {
      'id': "js-47",
      'title': "事件监听：addEventListener",
      'summary': "监听用户操作，点击、悬停、输入，让网页「响应」人的动作。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "网页之所以「活」，是因为它能**响应人的动作**：你点按钮，它弹窗；你点菜单，它展开；你提交表单，它跳转。这一切靠「事件」。事件就是「发生了什么事」——点击、键盘按下、鼠标移入、页面加载，全是事件。JS 通过「监听」事件，在事件发生时执行对应的代码。"
        },
        {
          'type': "code",
          'lang': "html",
          'title': "最简单的点击事件",
          'code': "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n</head>\n<body>\n  <button id=\"btn\">点我试试</button>\n  <p id=\"msg\">还没点过</p>\n\n  <script>\n    const btn = document.getElementById(\"btn\")\n    const msg = document.getElementById(\"msg\")\n\n    // addEventListener：监听 btn 的 click（点击）事件\n    btn.addEventListener(\"click\", function () {\n      msg.textContent = \"你刚刚点击了按钮！\"\n    })\n\n    // 箭头函数写法一样\n    // btn.addEventListener(\"click\", () => {\n    //   msg.textContent = \"又点了一次！\"\n    // })\n  </script>\n</body>\n</html>"
        },
        {
          'type': "p",
          'text': "<code.inline>addEventListener</code.inline> 是两个词的组合：add（加）+ Event（事件）+ Listener（监听器）。写法：<code.inline>元素.addEventListener(\"事件类型\", 回调函数)</code.inline>。事件类型是字符串，最常见的是 <code.inline>\"click\"</code.inline>；回调函数在事件发生时执行。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "给函数传事件对象",
          'code': "// 回调函数可以接收一个「事件对象」，里面装着事件的信息\n// btn.addEventListener(\"click\", function (event) {\n//   console.log(\"点击位置 x:\", event.clientX)\n//   console.log(\"点击位置 y:\", event.clientY)\n//   console.log(\"被点击的元素:\", event.target)\n// })\n\n// 用纯 JS 演示事件对象的概念\nconsole.log(\"event.target    -> 触发事件的元素\")\nconsole.log(\"event.clientX   -> 鼠标横坐标\")\nconsole.log(\"event.clientY   -> 鼠标纵坐标\")\nconsole.log(\"event.type      -> 事件类型，比如 click\")\nconsole.log(\"event.preventDefault() -> 阻止默认行为\")\nconsole.log(\"event.stopPropagation() -> 阻止冒泡\")"
        },
        {
          'type': "info",
          'title': "三种绑事件的方式",
          'text': "老代码里你可能见到：<code.inline>btn.onclick = fn</code.inline>（属性方式）或 HTML 里 <code.inline>onclick=\"fn()\"</code.inline>（标签属性方式）。推荐用 <code.inline>addEventListener</code.inline>：它能让一个元素挂多个同类型监听器、还能用 removeEventListener 移除，功能最全。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"事件监听：addEventListener\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"事件监听：addEventListener\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"事件监听：addEventListener\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "事件 = 用户或页面发生的事，JS 监听事件来响应",
            "addEventListener(\"click\", 回调) 是标准绑定方式",
            "回调函数能收到 event 对象，里面有位置、目标等信息",
            "元素、文档、窗口都能绑定事件"
          ]
        }
      ],
      'templates': [
        {
          'name': "事件对象演示（概念）",
          'code': "// 概念演示：事件对象里有什么\nconst event = { type: \"click\", clientX: 120, clientY: 80 }\nfunction handle(e) {\n  console.log(\"事件类型:\", e.type)\n  console.log(\"坐标:\", e.clientX, e.clientY)\n}\nhandle(event)\nconsole.log(\"真实场景：浏览器里点元素就会触发这样的回调\")"
        }
      ]
    },
    {
      'id': "js-48",
      'title': "classList 与样式操作",
      'summary': "用 classList 增删切换类名，用 style 属性直接改样式，给网页换衣服。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "让网页变好看、变交互，最常用的是「给元素加类名」和「直接改样式」。JS 提供了两套工具：<code.inline>classList</code.inline> 负责管理 CSS 类名，<code.inline>style</code.inline> 属性负责直接设置行内样式。它们分工不同，配合使用效果最好。"
        },
        {
          'type': "code",
          'lang': "html",
          'title': "classList 增删切换",
          'code': "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .box {\n      width: 120px; height: 60px;\n      background: #e5e7eb;\n      transition: all 0.3s;\n    }\n    .highlight {\n      background: #fbbf24;\n      transform: scale(1.1);\n    }\n  </style>\n</head>\n<body>\n  <div id=\"box\" class=\"box\">看看我</div>\n  <button id=\"toggle\">切换高亮</button>\n\n  <script>\n    const box = document.getElementById(\"box\")\n    const btn = document.getElementById(\"toggle\")\n\n    btn.addEventListener(\"click\", () => {\n      box.classList.add(\"highlight\")      // 加类\n      // box.classList.remove(\"highlight\") // 移除类\n      // box.classList.toggle(\"highlight\") // 有就移除，没有就加\n    })\n\n    // 判断是否有某个类\n    console.log(box.classList.contains(\"box\"))   // true\n  </script>\n</body>\n</html>"
        },
        {
          'type': "p",
          'text': "<code.inline>classList</code.inline> 上的方法：<code.inline>add</code.inline> 加类、<code.inline>remove</code.inline> 删类、<code.inline>toggle</code.inline> 切换（有就删、没有就加，像开关）、<code.inline>contains</code.inline> 判断有没有。最妙的是 toggle，配 CSS 过渡动画，一秒做出「点击变色/展开收起」的效果。"
        },
        {
          'type': "code",
          'lang': "html",
          'title': "style 直接改样式",
          'code': "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n</head>\n<body>\n  <div id=\"box\">被我变绿</div>\n  <button id=\"colorBtn\">变绿</button>\n\n  <script>\n    const box = document.getElementById(\"box\")\n    const btn = document.getElementById(\"colorBtn\")\n\n    btn.addEventListener(\"click\", () => {\n      // 注意：CSS 里的 kebab-case（background-color）\n      // 在 JS 里要写成驼峰 backgroundColor\n      box.style.backgroundColor = \"green\"\n      box.style.color = \"white\"\n      box.style.fontSize = \"20px\"\n      box.style.padding = \"20px\"\n    })\n  </script>\n</body>\n</html>"
        },
        {
          'type': "warn",
          'title': "JS 里样式名是驼峰",
          'text': "CSS 里是 <code.inline>background-color</code.inline>，到 JS 的 style 里要写成 <code.inline>backgroundColor</code.inline>（去掉横线，后面单词首字母大写）。所有「-」连接的 CSS 属性都这样。另外通过 style 设置的样式优先级最高（行内样式），会盖过 CSS 文件里的规则。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"classList 与样式操作\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"classList 与样式操作\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"classList 与样式操作\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "classList.add/remove/toggle 管理类名",
            "toggle 像开关，配 CSS transition 做动画很香",
            "style.属性名 直接改行内样式",
            "CSS 的 kebab-case 到 JS 要变驼峰 backgroundColor"
          ]
        }
      ],
      'templates': [
        {
          'name': "classList 概念演示",
          'code': "// 概念演示：classList 的增删切换\nlet classList = new Set()\nconst el = {\n  get classList() { return this },\n  add(c) { classList.add(c) },\n  remove(c) { classList.delete(c) },\n  toggle(c) { classList.has(c) ? classList.delete(c) : classList.add(c) },\n  contains(c) { return classList.has(c) },\n  toString() { return [...classList].join(\" \") }\n}\nel.classList.add(\"box\")\nconsole.log(\"初始类：\", String(el))\nel.classList.toggle(\"highlight\")\nconsole.log(\"切换后：\", String(el))\nel.classList.toggle(\"highlight\")\nconsole.log(\"再切换：\", String(el))"
        }
      ]
    },
    {
      'id': "js-49",
      'title': "修改文本与属性：textContent、innerHTML、setAttribute",
      'summary': "改元素里的文字、插入 HTML、操作任意属性，注意 innerHTML 的安全隐患。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "这一章集中讲「怎么改元素里的内容」：<code.inline>textContent</code.inline> 改纯文本、<code.inline>innerHTML</code.inline> 插 HTML、<code.inline>setAttribute</code.inline> 改任意属性。改内容是网页交互最核心的操作之一。"
        },
        {
          'type': "code",
          'lang': "html",
          'title': "textContent 与 innerHTML",
          'code': "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n</head>\n<body>\n  <div id=\"box\">旧文字</div>\n  <button id=\"t1\">改成纯文本</button>\n  <button id=\"t2\">插入HTML</button>\n\n  <script>\n    const box = document.getElementById(\"box\")\n\n    document.getElementById(\"t1\").addEventListener(\"click\", () => {\n      // textContent：里面的字会被当纯文本显示\n      box.textContent = \"<b>我是加粗？</b>\"\n      // 页面显示：<b>我是加粗？</b> 原样展示，不会加粗\n    })\n\n    document.getElementById(\"t2\").addEventListener(\"click\", () => {\n      // innerHTML：里面的字会被当 HTML 解析\n      box.innerHTML = \"<b>我真的加粗了！</b>\"\n      // 页面显示加粗文字\n    })\n  </script>\n</body>\n</html>"
        },
        {
          'type': "p",
          'text': "区别一句话：**textContent 把内容当「普通文字」显示，innerHTML 把内容当「HTML 代码」解析**。想显示用户输入的文字、要安全，用 textContent；想插入结构化的标签，用 innerHTML。"
        },
        {
          'type': "danger",
          'title': "innerHTML 的 XSS 风险",
          'text': "千万别把「用户输入的内容」直接塞进 innerHTML！比如用户输入 <code.inline>&lt;img src=x onerror=alert(1)&gt;</code.inline>，就会被浏览器当成代码执行，这叫 XSS 攻击（跨站脚本攻击）。**凡是要展示用户数据，一律用 textContent**。这是写网页的安全红线。"
        },
        {
          'type': "code",
          'lang': "html",
          'title': "setAttribute 操作属性",
          'code': "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n</head>\n<body>\n  <a id=\"link\">点我（还没链接）</a>\n  <img id=\"pic\" width=\"100\">\n\n  <script>\n    const link = document.getElementById(\"link\")\n    const pic = document.getElementById(\"pic\")\n\n    // 设置 href 属性\n    link.setAttribute(\"href\", \"https://example.com\")\n    link.textContent = \"现在是个真链接了\"\n\n    // 设置 src 属性（放一张网络图）\n    pic.setAttribute(\"src\", \"https://picsum.photos/200/120\")\n    pic.setAttribute(\"alt\", \"一张随机图片\")\n\n    // 读取属性\n    console.log(link.getAttribute(\"href\"))\n\n    // 常用快捷写法\n    // link.href = \"https://example.com\"\n    // link.id = \"newId\"\n  </script>\n</body>\n</html>"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"修改文本与属性：textContent、innerHTML、setAttribute\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"修改文本与属性：textContent、innerHTML、setAttribute\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"修改文本与属性：textContent、innerHTML、setAttribute\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "textContent 当纯文本显示，innerHTML 当 HTML 解析",
            "展示用户输入必须用 textContent，防 XSS 攻击",
            "setAttribute/getAttribute 操作任意属性",
            "a.href 这种常见属性也有快捷写法"
          ]
        }
      ]
    },
    {
      'id': "js-50",
      'title': "事件冒泡与捕获",
      'summary': "点击一个元素会「一路向上」触发祖先的事件，用 stopPropagation 阻止。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "你点击页面里一个按钮，这个「点击事件」不会只停在按钮上，它会像水里的涟漪一样，一层一层往上传：按钮 → 按钮的父级 → 祖父级 → ... → body → document。这个「从下往上传播」的过程就叫**事件冒泡**。理解它，你才能解释很多「奇怪」的页面行为。"
        },
        {
          'type': "code",
          'lang': "html",
          'title': "演示事件冒泡",
          'code': "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n</head>\n<body>\n  <div id=\"outer\" style=\"padding:20px;background:#ddd\">\n    外层\n    <div id=\"inner\" style=\"padding:20px;background:#aaa\">\n      内层\n      <button id=\"btn\">最里面的按钮</button>\n    </div>\n  </div>\n\n  <script>\n    function log(e) {\n      console.log(\"触发冒泡：\", e.currentTarget.id)\n    }\n    // 三个元素都监听 click\n    document.getElementById(\"btn\").addEventListener(\"click\", log)\n    document.getElementById(\"inner\").addEventListener(\"click\", log)\n    document.getElementById(\"outer\").addEventListener(\"click\", log)\n    // 点击按钮，控制台会依次打印 btn → inner → outer\n    // 因为事件从最里层一路冒泡到最外层\n  </script>\n</body>\n</html>"
        },
        {
          'type': "p",
          'text': "上面点击按钮时，btn、inner、outer 的点击回调**都会被触发**，顺序是 btn → inner → outer（由内向外）。这就是冒泡：事件沿着 DOM 树从触发点一路上传。冒泡是默认行为，并不是 bug。"
        },
        {
          'type': "code",
          'lang': "html",
          'title': "阻止冒泡 stopPropagation",
          'code': "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n</head>\n<body>\n  <div id=\"outer\" style=\"padding:20px;background:#ddd\">\n    外层\n    <button id=\"btn\">点我不会惊动外层</button>\n  </div>\n\n  <script>\n    document.getElementById(\"btn\").addEventListener(\"click\", function (e) {\n      console.log(\"按钮被点击\")\n      e.stopPropagation()   // 阻止事件继续往上冒泡\n    })\n\n    document.getElementById(\"outer\").addEventListener(\"click\", function () {\n      console.log(\"外层也监听了，但不会触发，因为冒泡被阻止\")\n    })\n  </script>\n</body>\n</html>"
        },
        {
          'type': "info",
          'title': "捕获阶段（了解即可）",
          'text': "事件传播分三个阶段：捕获（从外到内）、到达目标、冒泡（从内到外）。默认监听是在冒泡阶段触发。想监听捕获阶段，给 addEventListener 传第三个参数 true：<code.inline>addEventListener(\"click\", fn, true)</code.inline>。实战中 99% 场景只用冒泡，捕获了解概念即可。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"事件冒泡与捕获\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"事件冒泡与捕获\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"事件冒泡与捕获\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "事件默认会从触发元素一路冒泡到 document",
            "冒泡顺序由内向外：btn → ... → body → document",
            "e.stopPropagation() 阻止冒泡继续上传",
            "事件传播有捕获、目标、冒泡三个阶段"
          ]
        }
      ]
    },
    {
      'id': "js-51",
      'title': "事件委托：一个监听器管一片",
      'summary': "利用冒泡，把子元素的监听统一挂到父元素上，动态元素也能响应。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "上一章学了冒泡，现在学它最经典的用法：**事件委托**。如果你有一百个按钮要绑定点击事件，一个个绑既啰嗦又慢。利用冒泡，可以把监听器只绑在它们的共同父元素上，父元素负责「接住」所有子元素冒上来的事件，再判断是哪个子元素触发的。这就是「委托」。好处是代码少、性能好，而且**后来动态添加的子元素也能自动响应**。"
        },
        {
          'type': "code",
          'lang': "html",
          'title': "事件委托示例",
          'code': "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n</head>\n<body>\n  <ul id=\"list\">\n    <li data-id=\"1\">苹果</li>\n    <li data-id=\"2\">香蕉</li>\n    <li data-id=\"3\">橙子</li>\n  </ul>\n\n  <script>\n    const list = document.getElementById(\"list\")\n\n    // 只给父级 ul 绑一个监听器\n    list.addEventListener(\"click\", function (e) {\n      // e.target 是真正被点击的元素（可能是 li）\n      const li = e.target\n      if (li.tagName === \"LI\") {          // 确认点的是 li\n        console.log(\"你点了：\", li.textContent, \"id=\", li.dataset.id)\n      }\n    })\n\n    // 好处：以后动态加的 li 不用再单独绑事件\n    const newLi = document.createElement(\"li\")\n    newLi.textContent = \"西瓜\"\n    list.appendChild(newLi)\n    // 点这个新加的 li，上面的委托照样生效！\n  </script>\n</body>\n</html>"
        },
        {
          'type': "p",
          'text': "委托的关键是事件对象里的 <code.inline>e.target</code.inline>——它永远是「真正触发事件的元素」，而不是「监听器挂在的元素」（那个叫 e.currentTarget）。拿到 target 后，再判断是不是自己想要的元素（比如 tagName 是 LI），是就处理。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "用 closest 精确匹配",
          'code': "// 实战中，子元素里可能还有嵌套结构（图标、文字等）\n// 这时可以用 closest() 向上找到最近的匹配祖先\n// list.addEventListener(\"click\", function (e) {\n//   const item = e.target.closest(\"li\")   // 向上找最近的 li\n//   if (item) {\n//     console.log(\"处理条目：\", item.textContent)\n//   }\n// })\n\nconsole.log(\"e.target.closest(\\\"li\\\") 向上找最近的 li 祖先\")\nconsole.log(\"找不到返回 null，找到了返回那个元素\")"
        },
        {
          'type': "warn",
          'title': "委托时的性能与范围",
          'text': "事件委托别把监听器挂得太高（比如挂在 window 上），否则页面上所有点击都先经过它，判断多了也拖慢速度。一般挂到「最近的那个公共父元素」上最合适。另外只有支持冒泡的事件（click、mouseover 等）才能委托，个别事件（focus）不冒泡，不能委托。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"事件委托：一个监听器管一片\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"事件委托：一个监听器管一片\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"事件委托：一个监听器管一片\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "事件委托：父元素监听，接住所有子元素冒泡的事件",
            "用 e.target 判断真正触发的元素，用 closest 找祖先",
            "好处：代码少、性能好、动态元素自动生效",
            "委托挂在最近的公共父元素上，别挂太高"
          ]
        }
      ],
      'templates': [
        {
          'name': "委托的概念演示",
          'code': "// 概念演示：父容器统一处理子项点击\nconst container = {\n  items: [\"苹果\", \"香蕉\", \"橙子\"],\n  onClick(target) {\n    const li = { tagName: \"LI\", textContent: target }\n    if (li.tagName === \"LI\") {\n      console.log(\"父容器处理了：\", li.textContent)\n    }\n  }\n}\ncontainer.onClick(\"橙子\")   // 模拟点击列表项"
        }
      ]
    },
    {
      'id': "js-52",
      'title': "表单事件：submit、input、change",
      'summary': "拦截表单提交、监听输入变化、读取输入框的值，表单交互全掌握。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "表单（form）是网页收集用户输入的窗口：登录、注册、搜索、留言全是表单。JS 在表单上最常用的三件事：拦截提交（自己处理数据不发往服务器）、监听输入（边输入边验证）、读取和设置输入框的值。"
        },
        {
          'type': "code",
          'lang': "html",
          'title': "表单提交与取值",
          'code': "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n</head>\n<body>\n  <form id=\"loginForm\">\n    <input type=\"text\" id=\"username\" placeholder=\"用户名\">\n    <input type=\"password\" id=\"password\" placeholder=\"密码\">\n    <button type=\"submit\">登录</button>\n  </form>\n\n  <script>\n    const form = document.getElementById(\"loginForm\")\n\n    form.addEventListener(\"submit\", function (e) {\n      e.preventDefault()   // 阻止表单默认的刷新页面行为\n\n      const name = document.getElementById(\"username\").value\n      const pwd = document.getElementById(\"password\").value\n\n      console.log(\"用户名：\", name)\n      console.log(\"密码：\", pwd)\n\n      if (name === \"\" || pwd === \"\") {\n        alert(\"用户名和密码不能为空！\")\n      } else {\n        alert(\"登录成功（演示）\")\n      }\n    })\n  </script>\n</body>\n</html>"
        },
        {
          'type': "p",
          'text': "表单提交事件里最关键的一行是 <code.inline>e.preventDefault()</code.inline>：它阻止表单的「默认行为」——刷新页面并把数据发到服务器。不想刷新、想自己在 JS 里处理，就调用它。读输入框的值用 <code.inline>输入框.value</code.inline>。"
        },
        {
          'type': "code",
          'lang': "html",
          'title': "input 与 change 的区别",
          'code': "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n</head>\n<body>\n  <input type=\"text\" id=\"name\" placeholder=\"输入名字\">\n  <p id=\"live\">实时显示：</p>\n\n  <script>\n    const input = document.getElementById(\"name\")\n    const live = document.getElementById(\"live\")\n\n    // input 事件：每次输入内容都触发（边输边响应）\n    input.addEventListener(\"input\", function () {\n      live.textContent = \"实时显示：\" + input.value\n    })\n\n    // change 事件：输入结束、失去焦点时才触发\n    input.addEventListener(\"change\", function () {\n      console.log(\"输入完毕，最终值是：\", input.value)\n    })\n  </script>\n</body>\n</html>"
        },
        {
          'type': "info",
          'title': "其他表单元素取值",
          'text': "复选框看 <code.inline>checkbox.checked</code.inline>（布尔值）；单选框一组里看哪个 <code.inline>.checked</code.inline> 为 true；下拉框用 <code.inline>select.value</code.inline>。都用 value / checked 这两个属性就能拿到。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"表单事件：submit、input、change\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"表单事件：submit、input、change\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"表单事件：submit、input、change\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "form 的 submit 事件配合 e.preventDefault() 拦截默认提交",
            "读输入框用 .value，设置也能直接赋值",
            "input 事件每次输入都触发，change 事件失焦才触发",
            "checkbox 用 .checked，select 用 .value 取值"
          ]
        }
      ]
    },
    {
      'id': "js-53",
      'title': "键盘与鼠标事件",
      'summary': "监听 keydown/keyup 和 click/mouseover/mousemove，读取按键和鼠标信息。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "键盘和鼠标是网页交互的「两大输入设备」。键盘事件让你能做出方向键控制游戏、快捷键操作；鼠标事件让你能做悬停效果、跟随鼠标的小特效。这一章把常用事件一次讲清。"
        },
        {
          'type': "code",
          'lang': "html",
          'title': "键盘事件",
          'code': "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n</head>\n<body>\n  <p>按下键盘上的任意键试试（先点一下页面空白处）</p>\n  <p id=\"info\">...</p>\n\n  <script>\n    const info = document.getElementById(\"info\")\n\n    // 监听整个文档的按键\n    document.addEventListener(\"keydown\", function (e) {\n      info.textContent = \"你按下了：\" + e.key\n      if (e.key === \"Enter\") {\n        info.textContent += \"（这是回车键）\"\n      }\n      if (e.key === \" \") {\n        info.textContent += \"（这是空格键）\"\n      }\n      // 组合键：e.ctrlKey / e.shiftKey / e.altKey 是布尔\n      if (e.ctrlKey && e.key === \"s\") {\n        info.textContent += \"（你按了 Ctrl+S）\"\n        e.preventDefault()   // 阻止浏览器默认的保存\n      }\n    })\n  </script>\n</body>\n</html>"
        },
        {
          'type': "code",
          'lang': "html",
          'title': "鼠标事件",
          'code': "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n</head>\n<body>\n  <div id=\"area\" style=\"width:200px;height:120px;background:#eee;\n    display:flex;align-items:center;justify-content:center\">\n    鼠标移进来\n  </div>\n  <p id=\"pos\">位置：-</p>\n\n  <script>\n    const area = document.getElementById(\"area\")\n    const pos = document.getElementById(\"pos\")\n\n    area.addEventListener(\"mouseenter\", () => {\n      area.textContent = \"鼠标进来了！\"\n    })\n    area.addEventListener(\"mouseleave\", () => {\n      area.textContent = \"鼠标移出去了\"\n    })\n\n    // mousemove：鼠标在元素内移动时持续触发\n    area.addEventListener(\"mousemove\", function (e) {\n      pos.textContent = `位置：(${e.offsetX}, ${e.offsetY})`\n    })\n\n    // 鼠标右键：contextmenu\n    area.addEventListener(\"contextmenu\", function (e) {\n      e.preventDefault()\n      pos.textContent = \"你点了右键！\"\n    })\n  </script>\n</body>\n</html>"
        },
        {
          'type': "p",
          'text': "常用鼠标事件：<code.inline>click</code.inline> 单击、<code.inline>dblclick</code.inline> 双击、<code.inline>mouseenter/mouseleave</code.inline> 移入/移出（注意它俩不冒泡，比 mouseover/mouseout 好用）、<code.inline>mousemove</code.inline> 移动、<code.inline>contextmenu</code.inline> 右键。事件对象里有 <code.inline>clientX/clientY</code.inline>（相对视口）和 <code.inline>offsetX/offsetY</code.inline>（相对元素本身）等坐标。"
        },
        {
          'type': "warn",
          'title': "keydown vs keyup vs keypress",
          'text': "keydown 按下即触发（可按住连发），keyup 松开时触发一次，keypress 已废弃别用。做「按住某键持续动作」（比如长按加速）用 keydown + 自己管理状态；做「按一下触发一次」（比如跳跃）用 keyup。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"键盘与鼠标事件\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"键盘与鼠标事件\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"键盘与鼠标事件\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "keydown/keyup 监听键盘，e.key 拿到按下的键",
            "e.ctrlKey/shiftKey/altKey 判断组合键",
            "click/dblclick/mouseenter/mousemove/contextmenu 常用鼠标事件",
            "mouseenter/leave 不冒泡，比 mouseover/out 更好用"
          ]
        }
      ]
    },
    {
      'id': "js-54",
      'title': "滚动与窗口事件",
      'summary': "监听 scroll 做滚动加载，监听 resize 适配窗口，DOMContentLoaded 与 load。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "除了用户主动的点击和按键，页面本身也在「动」：滚动、窗口大小变化、加载完成。这些也有对应的事件。掌握它们，你就能做出「滚动到某处高亮」「图片懒加载」「窗口变化自适应」等效果。"
        },
        {
          'type': "code",
          'lang': "html",
          'title': "scroll 滚动事件",
          'code': "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    body { height: 2000px; }\n    #tip { position: fixed; top: 10px; }\n  </style>\n</head>\n<body>\n  <p id=\"tip\">向下滚动看看</p>\n  <script>\n    const tip = document.getElementById(\"tip\")\n\n    // 监听窗口滚动\n    window.addEventListener(\"scroll\", function () {\n      const y = window.scrollY   // 已经滚动了多少像素\n      tip.textContent = \"已滚动：\" + Math.round(y) + \"px\"\n\n      // 经典用法：滚到某位置后显示「回到顶部」按钮\n      if (y > 300) {\n        tip.textContent += \"（显示回到顶部按钮）\"\n      }\n    })\n  </script>\n</body>\n</html>"
        },
        {
          'type': "code",
          'lang': "html",
          'title': "resize 与加载事件",
          'code': "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n</head>\n<body>\n  <p id=\"size\">窗口大小：-</p>\n  <p id=\"load\">加载状态：-</p>\n\n  <script>\n    const size = document.getElementById(\"size\")\n\n    // 窗口大小变化时触发\n    window.addEventListener(\"resize\", function () {\n      size.textContent =\n        `窗口大小：${window.innerWidth} x ${window.innerHeight}`\n    })\n\n    // DOMContentLoaded：HTML 解析完就触发（不用等图片）\n    document.addEventListener(\"DOMContentLoaded\", function () {\n      document.getElementById(\"load\").textContent = \"DOM 已就绪\"\n    })\n\n    // load：所有资源（含图片样式）都加载完才触发\n    window.addEventListener(\"load\", function () {\n      console.log(\"全部加载完成\")\n    })\n  </script>\n</body>\n</html>"
        },
        {
          'type': "warn",
          'title': "scroll 别做太重的操作",
          'text': "scroll 事件在滚动时会**非常频繁地触发**（每秒几十次）。如果在里面做重操作（大量计算、改 DOM），页面会卡顿。解决方法是「防抖 / 节流」（后面性能优化章详细讲），核心思路是降低处理频率。"
        },
        {
          'type': "info",
          'title': "script 放在 body 末尾的原因",
          'text': "很多人困惑为什么 <code.inline><script></code.inline> 通常写在 body 最后。因为 script 里的代码如果急着找 DOM 元素，而元素还没解析到，就会找不到。放 body 末尾（或等 DOMContentLoaded）能保证 DOM 已就绪。这是前端常见的一个「为什么」。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"滚动与窗口事件\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"滚动与窗口事件\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"滚动与窗口事件\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "scroll 事件配合 window.scrollY 做滚动效果",
            "resize 事件适配窗口大小变化",
            "DOMContentLoaded 在 DOM 就绪时触发，load 在所有资源加载完",
            "scroll 触发极频繁，重操作要防抖/节流"
          ]
        }
      ]
    },
    {
      'id': "js-55",
      'title': "ES6+ 新特性总览",
      'summary': "把模板字符串、解构、展开、箭头函数、let/const 串起来看一遍，形成体系。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "ES6（也叫 ES2015）是 JavaScript 历史上最重要的一次版本升级，之后的 ES7、ES8……统称「ES6+」。前面的课程其实已经讲了不少 ES6 特性：let/const、模板字符串、箭头函数、解构、展开、Set/Map。这一章把它们汇总成一个「全家桶」，让你形成体系感，也方便复习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "ES6 全家桶示例",
          'code': "// 1. let / const：块级作用域\nconst base = 100\nlet count = 0\n\n// 2. 模板字符串\nconst name = \"小明\"\nconsole.log(`姓名：${name}`)\n\n// 3. 箭头函数\nconst double = n => n * 2\n\n// 4. 解构赋值\nconst [a, b] = [1, 2]\nconst { x } = { x: 9 }\n\n// 5. 展开运算符\nconst arr = [...[1, 2], 3]\nconst obj = { ...{ m: 1 }, n: 2 }\n\nconsole.log(a, b, x, arr, obj)"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "ES6 之后的常用新语法",
          'code': "// 对象属性简写：属性名和变量名一致时\nlet age = 20\nlet person = { age }   // 等价于 { age: age }\nconsole.log(person)\n\n// 幂运算 **\nconsole.log(2 ** 3)   // 8\n\n// 数组 includes\nconsole.log([1, 2, 3].includes(2))   // true\n\n// 可选链 ?.（下一章讲）\nconst user = { info: { name: \"小红\" } }\nconsole.log(user?.info?.name)   // 小红\n\n// 空值合并 ??（下一章讲）\nconst n = null ?? 42\nconsole.log(n)   // 42"
        },
        {
          'type': "p",
          'text': "这些特性不是「锦上添花」，而是现在所有现代项目的基本功。写代码时：变量用 let/const、字符串拼接用模板字符串、回调用箭头函数、取数据用解构、复制合并用展开。这些习惯能让你的代码既短又清晰。"
        },
        {
          'type': "info",
          'title': "怎么知道浏览器支不支持",
          'text': "担心老浏览器不支持 ES6+ 语法？工程上会用 Babel 等工具把新语法「编译」成老语法，保证兼容。你平时写代码可以放心大胆用新特性，构建工具会帮你兜底。这就是后面「前端工程化」一章要讲的内容。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"ES6+ 新特性总览\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"ES6+ 新特性总览\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"ES6+ 新特性总览\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "ES6+ = let/const、模板字符串、箭头函数、解构、展开、Set/Map",
            "对象属性简写、幂运算、includes 等小语法很常用",
            "现代代码的习惯：let/const + 模板字符串 + 箭头函数",
            "构建工具会把新语法编译成兼容老浏览器的代码"
          ]
        }
      ]
    },
    {
      'id': "js-56",
      'title': "可选链 ?. 与空值合并 ??",
      'summary': "?. 安全地访问深层属性，?? 在 null/undefined 时给默认值，再也不怕「报错」。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "访问对象深层属性时，最怕中间某层是 null 或 undefined：<code.inline>user.address.city</code.inline> 如果 user.address 不存在，直接报错崩溃。以前要用一串 if 判断，现在用**可选链** <code.inline>?.</code.inline> 一行搞定：中间断了就返回 undefined，不报错。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "可选链 ?. 的基础",
          'code': "let user = { name: \"小明\" }\n\n// 传统写法：要一层层判断，很啰嗦\nlet city1 = user && user.address && user.address.city\nconsole.log(city1)   // undefined\n\n// 可选链写法：中间任何一层为空，就安全返回 undefined\nlet city2 = user?.address?.city\nconsole.log(city2)   // undefined，不报错！\n\n// user 本身为 null 也安全\nlet nobody = null\nconsole.log(nobody?.name)   // undefined，不报错！"
        },
        {
          'type': "p",
          'text': "<code.inline>?. </code.inline> 的意思是：如果 `?.` 前面的值是 null 或 undefined，就停下来，整个表达式返回 undefined，不再往后访问。这避免了「访问 undefined 的属性」这种最常见的崩溃。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "可选链的其他用法",
          'code': "let user = { profile: { nickname: \"小明\" } }\n\n// 访问方法（如果方法不存在也不报错）\nconsole.log(user.save?.())   // undefined 方法不存在\n\n// 访问数组元素\nlet arr = null\nconsole.log(arr?.[0])   // undefined\n\n// 配合函数调用\nfunction showName(u) {\n  return u?.profile?.nickname ?? \"匿名用户\"\n}\nconsole.log(showName(user))    // 小明\nconsole.log(showName(null))    // 匿名用户"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "空值合并 ??",
          'code': "// ?? 只关心「null 或 undefined」这两种情况\nlet a = null\nlet b = undefined\nlet c = 0\nlet d = \"\"\n\nconsole.log(a ?? \"默认值\")   // 默认值（a 是 null）\nconsole.log(b ?? \"默认值\")   // 默认值（b 是 undefined）\nconsole.log(c ?? \"默认值\")   // 0 （c 是 0，不是 null，保留！）\nconsole.log(d ?? \"默认值\")   // \"\" （空字符串也保留）"
        },
        {
          'type': "warn",
          'title': "?? 和 || 的区别（面试高频）",
          'text': "<code.inline>||</code.inline> 取「第一个真值」，0、空字符串、false 都会被当成假值走默认；<code.inline>??</code.inline> 只认 null 和 undefined。所以想「空字符串和 0 都算有效值」时用 ??，想「假值一律走默认」时用 ||。另外 ?? 不能直接和 || 混用，需要加括号。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"可选链 ?. 与空值合并 ??\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"可选链 ?. 与空值合并 ??\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"可选链 ?. 与空值合并 ??\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "?. 安全访问深层属性，中间为空返回 undefined 不报错",
            "?. 也支持调用方法 user.save?.() 和数组 user?.[0]",
            "?? 只在值是 null/undefined 时给默认值",
            "|| 会把 0/空串/false 当假值，?? 不会，二者有区别"
          ]
        }
      ],
      'templates': [
        {
          'name': "安全取数据",
          'code': "function safeName(user) {\n  return user?.profile?.name ?? \"未知\"\n}\nconsole.log(safeName({ profile: { name: \"小明\" } }))  // 小明\nconsole.log(safeName({}))        // 未知\nconsole.log(safeName(null))      // 未知\nconsole.log(safeName(undefined)) // 未知"
        }
      ]
    },
    {
      'id': "js-57",
      'title': "模块化：import 与 export",
      'summary': "把代码拆成多个文件，用 import/export 互相引用，大型项目的地基。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "代码写到一定程度，全堆在一个文件里就没法看了。**模块化**就是「把代码拆成一个个小文件，每个文件只负责一件事，再用 import/export 互相引用」。它是所有大型项目的基石。现代 JavaScript 用 ESM（ECMAScript Modules）标准：用 <code.inline>export</code.inline> 导出，用 <code.inline>import</code.inline> 导入。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "导出：math.js",
          'code': "// math.js —— 一个专门放数学函数的模块\n\n// 命名导出：可以导出一堆\nexport function add(a, b) {\n  return a + b\n}\n\nexport function multiply(a, b) {\n  return a * b\n}\n\n// 默认导出：每个文件只能有一个\nexport default function subtract(a, b) {\n  return a - b\n}"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "导入：main.js",
          'code': "// main.js —— 使用 math.js 里的东西\n\n// 导入命名导出（名字要对应）\nimport { add, multiply } from \"./math.js\"\n\n// 导入默认导出（名字随便起）\nimport subtract from \"./math.js\"\n\nconsole.log(add(3, 4))        // 7\nconsole.log(multiply(3, 4))   // 12\nconsole.log(subtract(10, 4))  // 6\n\n// 也可以整体导入\n// import * as math from \"./math.js\"\n// console.log(math.add(1, 2))"
        },
        {
          'type': "p",
          'text': "两种导出方式：<code.inline>export function 名字</code.inline> 是「命名导出」，导入时必须用同样的名字（用花括号包住）；<code.inline>export default</code.inline> 是「默认导出」，每个文件只能有一个，导入时可以随便起名。命名导出适合「一个模块提供多个功能」，默认导出适合「一个模块主打一个东西」。"
        },
        {
          'type': "info",
          'title': "怎么让浏览器支持 import",
          'text': "浏览器要认出 import/export，需要在 HTML 里给 script 加 <code.inline>type=\"module\"</code.inline>：<code.inline>&lt;script type=\"module\" src=\"main.js\"&gt;&lt;/script&gt;</code.inline>。另外注意：模块代码是「严格模式」，而且 import 只能在文件顶层。本编辑器不支持多文件 import，理解概念即可。"
        },
        {
          'type': "warn",
          'title': "Node 里也能用 import",
          'text': "Node.js 默认用 CommonJS 的 <code.inline>require</code.inline> 语法（后面 Node 章节讲），但新版 Node 也支持 ESM。记住两条路线：浏览器 / 现代前端用 import/export，Node 老项目用 require/module.exports。它们都是「模块化」这件事的两种实现。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"模块化：import 与 export\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"模块化：import 与 export\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"模块化：import 与 export\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "模块化 = 拆文件 + import/export 互相引用",
            "export 命名导出，import { 名字 } 导入",
            "export default 默认导出，每文件一个，导入可随便命名",
            "浏览器里 script 要加 type=module，Node 里也可用 ESM"
          ]
        }
      ]
    },
    {
      'id': "js-58",
      'title': "Set 与 Map：ES6 新容器",
      'summary': "Set 是天然去重的集合，Map 是任意类型作键的字典，比对象更强大。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "ES6 带来了两个新「容器」：<code.inline>Set</code.inline>（集合）和 <code.inline>Map</code.inline>（映射）。Set 里的元素**不能重复**，天然适合去重；Map 是「键值对」容器，而且键可以是任意类型（对象、数字、布尔都行），比普通对象更灵活。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "Set 集合",
          'code': "// 创建 Set，会自动去重\nlet s = new Set([1, 2, 2, 3, 3, 3])\nconsole.log(s)   // Set {1, 2, 3}\n\n// 常用操作\ns.add(4)          // 添加\ns.delete(2)       // 删除\nconsole.log(s.has(3))   // true 判断有没有\nconsole.log(s.size)     // 3 大小\n\n// 去重神器：数组去重\nlet arr = [1, 2, 2, 3]\nconsole.log([...new Set(arr)])   // [1,2,3]\n\n// 遍历\nfor (let v of s) console.log(v)"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "Map 映射",
          'code': "// 创建 Map，键可以是任意类型\nlet m = new Map()\n\n// 增\nm.set(\"name\", \"小明\")\nm.set(42, \"数字键也行\")\nm.set({ id: 1 }, \"对象也能当键\")\n\n// 查\nconsole.log(m.get(\"name\"))   // 小明\nconsole.log(m.get(42))       // 数字键也行\nconsole.log(m.has(\"name\"))   // true\nconsole.log(m.size)          // 3\n\n// 改（set 相同键会覆盖）\nm.set(\"name\", \"小红\")\nconsole.log(m.get(\"name\"))   // 小红\n\n// 删\nm.delete(42)\nconsole.log(m.size)   // 2\n\n// 遍历\nm.forEach((value, key) => {\n  console.log(key, \"=>\", value)\n})"
        },
        {
          'type': "info",
          'title': "Map 和普通对象怎么选",
          'text': "需求简单、键就是字符串时，用普通对象 <code.inline>{}</code.inline> 最方便；需要按插入顺序遍历、键不是字符串、或经常增删大量键值对时，用 Map 更合适。前端很多「配置表」「缓存」都用 Map。"
        },
        {
          'type': "warn",
          'title': "Set 判断引用类型用引用比较",
          'text': "Set 的去重对数字、字符串没问题，但对对象是按「引用」比较的：两个内容一样但不同的对象，会被当成两个元素。想按内容去重对象，需要自己写逻辑（比如根据某个唯一 id）。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Set 与 Map：ES6 新容器\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Set 与 Map：ES6 新容器\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Set 与 Map：ES6 新容器\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Set 元素不重复，天然适合去重",
            "Set 常用：add/delete/has/size，可用 for...of 遍历",
            "Map 的键可以是任意类型，用 set/get/has 操作",
            "Map 适合按插入顺序遍历和键非字符串的场景"
          ]
        }
      ],
      'templates': [
        {
          'name': "统计字母出现次数",
          'code': "let text = \"hello world\"\nlet count = new Map()\nfor (let ch of text.replace(/\\s/g, \"\")) {\n  count.set(ch, (count.get(ch) || 0) + 1)\n}\ncount.forEach((v, k) => console.log(k, v))"
        }
      ]
    },
    {
      'id': "js-59",
      'title': "同步与异步：理解事件循环",
      'summary': "同步代码排队执行，异步代码先放着等结果，用 setTimeout 感受异步。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "JavaScript 是**单线程**的——同一时间只能干一件事。那它怎么一边让页面流畅滚动，一边还能等网络请求？答案是**异步**。这一章用大白话讲清「同步 / 异步」和著名的「事件循环」，这是理解 Promise、async/await 的前提，也是前端面试必问。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "setTimeout 感受异步",
          'code': "console.log(\"第 1 行：同步代码，立刻执行\")\n\nsetTimeout(() => {\n  console.log(\"第 3 行：定时器回调，2 秒后执行\")\n}, 2000)\n\nconsole.log(\"第 2 行：也是同步代码，先于定时器执行\")\n\n// 输出顺序：第1行 → 第2行 → （等2秒）→ 第3行\n// 第 2 行不会等定时器！同步的排前面"
        },
        {
          'type': "p",
          'text': "注意上面输出顺序：第 1 行、第 2 行先打印，2 秒后才打印第 3 行。因为 <code.inline>setTimeout</code.inline> 是「异步」的——它把回调函数放到一边，说「2 秒后叫我」，然后程序继续往下执行同步代码。同步代码全跑完后，才轮到异步回调。"
        },
        {
          'type': "h",
          'text': "事件循环（事件队列）"
        },
        {
          'type': "p",
          'text': "JavaScript 的运行机制可以简化成：**先执行完所有同步代码，然后不停地在「任务队列」里取异步任务来执行**。这个「执行同步 → 取异步任务 → 执行」的循环就叫事件循环（Event Loop）。异步任务（定时器、网络请求的回调）都排在队列里，同步代码全部跑完才会轮到它们。这也是为什么 <code.inline>console.log</code.inline> 总是先于 setTimeout 回调打印。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "再看一个顺序题（面试常考）",
          'code': "console.log(\"A\")\n\nsetTimeout(() => console.log(\"B\"), 0)   // 即使 0 毫秒也是异步\n\nPromise.resolve().then(() => console.log(\"C\"))   // 微任务\n\nconsole.log(\"D\")\n\n// 输出：A D C B\n// 同步 A、D 先执行；微任务 C 先于宏任务 B\n// 原因：Promise 的 then 是微任务，setTimeout 是宏任务"
        },
        {
          'type': "info",
          'title': "微任务 vs 宏任务（了解）",
          'text': "异步任务还分两类：微任务（Promise.then、queueMicrotask 等）优先执行，宏任务（setTimeout、setInterval、事件回调等）后执行。所以上面 C 在 B 之前。这个细节面试常考，先用结论：微任务比宏任务先执行。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"同步与异步：理解事件循环\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"同步与异步：理解事件循环\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"同步与异步：理解事件循环\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "JS 单线程，靠事件循环处理异步",
            "同步代码先全部执行完，再执行异步回调",
            "setTimeout 即使 0 毫秒也是异步，排在同步后面",
            "微任务（Promise.then）比宏任务（setTimeout）先执行"
          ]
        }
      ],
      'templates': [
        {
          'name': "感受异步顺序",
          'code': "console.log(\"开始\")\nsetTimeout(() => console.log(\"我是异步的\"), 1000)\nconsole.log(\"我是同步的\")\nconsole.log(\"结束\")\n// 预期：开始 → 我是同步的 → 结束 → （1秒后）我是异步的"
        }
      ]
    },
    {
      'id': "js-60",
      'title': "Promise：把异步包装得规规矩矩",
      'summary': "Promise 代表一个未来的结果，then 处理成功、catch 处理失败、all 同时等多个。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "光用 setTimeout 的「回调」写异步，嵌套多了就是传说中的「回调地狱」——一层套一层，根本没法看。Promise（承诺）就是来解决这个问题的：它代表「一个现在还拿不到、但将来一定会有结果的操作」，成功走 <code.inline>then</code.inline>，失败走 <code.inline>catch</code.inline>，把异步逻辑写得整整齐齐。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "创建一个 Promise",
          'code': "// new Promise 传入一个「执行函数」，函数里有两个参数\n// resolve：成功后调用（把结果交出去）\n// reject：失败后调用（把错误交出去）\nconst p = new Promise((resolve, reject) => {\n  // 模拟一个耗时的操作（比如请求服务器）\n  setTimeout(() => {\n    const ok = true\n    if (ok) {\n      resolve(\"数据获取成功\")\n    } else {\n      reject(\"出错了\")\n    }\n  }, 1000)\n})\n\n// 用 .then 拿成功结果，用 .catch 拿失败原因\np.then((result) => {\n  console.log(\"成功：\", result)\n}).catch((err) => {\n  console.log(\"失败：\", err)\n})\n\nconsole.log(\"Promise 创建完，继续往下走（异步的）\")"
        },
        {
          'type': "p",
          'text': "Promise 有三个状态：pending（进行中）、fulfilled（成功）、rejected（失败）。创建时是 pending，调用 resolve 变成 fulfilled，调用 reject 变成 rejected。之后用 <code.inline>.then(成功回调)</code.inline> 和 <code.inline>.catch(失败回调)</code.inline> 来「接住」结果。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "链式调用与 Promise.all",
          'code': "// then 可以链式调用，每个 then 的返回值传给下一个\nPromise.resolve(10)\n  .then((n) => n * 2)\n  .then((n) => n + 1)\n  .then((n) => console.log(\"链式结果：\", n))   // 21\n  .catch((err) => console.log(\"出错了\", err))\n\n// Promise.all：同时等好几个，全部成功才继续\nconst p1 = Promise.resolve(\"结果1\")\nconst p2 = new Promise((r) => setTimeout(() => r(\"结果2\"), 500))\nconst p3 = Promise.resolve(\"结果3\")\n\nPromise.all([p1, p2, p3]).then((results) => {\n  console.log(\"全部完成：\", results)   // [\"结果1\",\"结果2\",\"结果3\"]\n})\n\n// Promise.race：谁先完成用谁的\nPromise.race([p2, p3]).then((r) => console.log(\"先到的是：\", r))"
        },
        {
          'type': "warn",
          'title': "then 里别忘 return",
          'text': "链式 then 里，如果下一个 then 要用上一个的结果，上一个 then 必须 <code.inline>return</code.inline> 那个值。忘了 return，下一个 then 收到的就是 undefined，bug 神不知鬼不觉就出现了。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Promise：把异步包装得规规矩矩\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Promise：把异步包装得规规矩矩\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Promise：把异步包装得规规矩矩\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Promise 代表未来的结果，三状态：pending/fulfilled/rejected",
            "resolve 交成功结果，reject 交失败原因",
            ".then 处理成功、.catch 处理失败，可链式调用",
            "Promise.all 同时等多个，全部成功才继续"
          ]
        }
      ],
      'templates': [
        {
          'name': "Promise 模拟请求",
          'code': "function fakeRequest(name, ms) {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(name + \" 完成\"), ms)\n  })\n}\n\nfakeRequest(\"任务A\", 800).then((r) => console.log(r))\nfakeRequest(\"任务B\", 300).then((r) => console.log(r))\n\nPromise.all([\n  fakeRequest(\"任务C\", 500),\n  fakeRequest(\"任务D\", 200),\n]).then((rs) => console.log(\"并行结果：\", rs))"
        }
      ]
    },
    {
      'id': "js-61",
      'title': "async / await：写异步像写同步",
      'summary': "async 标记异步函数，await 等待结果，让 Promise 代码读起来像普通代码。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "Promise 虽然比回调强，但 .then 一多还是有那么点绕。ES2017 带来了 <code.inline>async/await</code.inline>：它是 Promise 的「语法糖」，让你**用写同步代码的方式写异步代码**——遇到 await 就「停在这等结果」，拿到再继续。这是如今写异步的主流方式。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "async/await 基础",
          'code': "function delay(ms, value) {\n  return new Promise((resolve) => setTimeout(() => resolve(value), ms))\n}\n\n// async 修饰的函数就是异步函数\nasync function main() {\n  console.log(\"开始\")\n\n  // await 会暂停这个函数，等 Promise 有结果再继续\n  const a = await delay(500, \"第一个结果\")\n  console.log(a)\n\n  const b = await delay(300, \"第二个结果\")\n  console.log(b)\n\n  console.log(\"全部完成\")\n  return \"我是返回值\"\n}\n\n// 调用 async 函数，它本身返回一个 Promise\nmain().then((msg) => console.log(msg))\n\nconsole.log(\"这行会先打印（main 里 await 期间，外面照常走）\")"
        },
        {
          'type': "p",
          'text': "关键理解：<code.inline>await</code.inline> 会「暂停」当前 async 函数，等到后面的 Promise 有结果再继续往下走。但注意：**它只暂停自己所在的 async 函数**，外面的代码照常执行。所以上面「这行会先打印」。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "try/catch 处理失败",
          'code': "function mayFail(ok) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => (ok ? resolve(\"成功\") : reject(\"失败啦\")), 300)\n  })\n}\n\nasync function run() {\n  try {\n    const r = await mayFail(false)\n    console.log(\"拿到：\", r)\n  } catch (err) {\n    // await 的 Promise 失败时，会在这里被抓住\n    console.log(\"捕获到错误：\", err)\n  }\n}\n\nrun()"
        },
        {
          'type': "danger",
          'title': "await 只能在 async 函数里",
          'text': "在普通函数里写 <code.inline>await</code.inline> 会直接报错：<code.inline>await is only valid in async functions</code.inline>。解决办法：把它所在的函数声明成 async。另外，顶层 await 只有浏览器模块（type=module）和现代 Node 才支持，平时写代码还是包在 async 函数里最稳。"
        },
        {
          'type': "warn",
          'title': "别在循环里串行 await（可以优化）",
          'text': "如果循环里每个 await 之间没有依赖，串行等会浪费时间。比如 5 个请求串行要等 5 倍时间。可以先 <code.inline>Promise.all(任务列表.map(async x => await ...))</code.inline> 并行执行。只有「下一步依赖上一步结果」时才需要串行。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"async / await：写异步像写同步\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"async / await：写异步像写同步\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"async / await：写异步像写同步\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "async 标记异步函数，函数返回 Promise",
            "await 暂停当前 async 函数，等 Promise 有结果再继续",
            "用 try/catch 捕获 await 的失败",
            "await 只能在 async 函数里用；无依赖的循环 await 改用 Promise.all 并行"
          ]
        }
      ],
      'templates': [
        {
          'name': "async/await 串联",
          'code': "function wait(ms) {\n  return new Promise((r) => setTimeout(r, ms))\n}\nasync function process() {\n  console.log(\"1. 加载用户\")\n  await wait(500)\n  console.log(\"2. 加载文章\")\n  await wait(400)\n  console.log(\"3. 完成！\")\n}\nprocess()\nconsole.log(\"（主流程不阻塞）\")"
        }
      ]
    },
    {
      'id': "js-62",
      'title': "fetch：跟服务器要数据",
      'summary': "用 fetch 发网络请求，拿到 JSON 数据，前后端交互的核心技能。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "网页的数据（用户列表、商品、天气）通常来自服务器。浏览器内置了 <code.inline>fetch</code.inline> 函数，专门用来发网络请求：告诉它「我要什么」，它返回一个 Promise，等拿到服务器回复再处理。这是现代前端「向服务器要数据」的标准方式。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "fetch 基本用法",
          'code': "// fetch 返回 Promise，.then 拿响应，再 .json() 解析\nfetch(\"https://jsonplaceholder.typicode.com/users/1\")\n  .then((response) => response.json())   // 响应转成 JSON\n  .then((data) => {\n    console.log(\"用户信息：\", data)\n    console.log(\"名字：\", data.name)\n  })\n  .catch((err) => {\n    console.log(\"请求失败：\", err)\n  })"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "async/await 版本更清晰",
          'code': "async function getUser() {\n  try {\n    // 发请求，拿到响应\n    const response = await fetch(\"https://jsonplaceholder.typicode.com/users/1\")\n    // 把响应体解析成 JSON\n    const data = await response.json()\n    console.log(\"用户名：\", data.username)\n    console.log(\"邮箱：\", data.email)\n  } catch (err) {\n    console.log(\"出错了：\", err)\n  }\n}\n\ngetUser()\nconsole.log(\"请求已发出，页面不卡顿（异步）\")"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "POST 提交数据",
          'code': "async function createPost() {\n  const response = await fetch(\"https://jsonplaceholder.typicode.com/posts\", {\n    method: \"POST\",   // 提交\n    headers: {\n      \"Content-Type\": \"application/json\"   // 告诉服务器发的是 JSON\n    },\n    body: JSON.stringify({\n      title: \"我的第一篇帖子\",\n      body: \"这是正文\",\n      userId: 1\n    })\n  })\n  const data = await response.json()\n  console.log(\"创建成功，返回：\", data)\n}\n\ncreatePost()"
        },
        {
          'type': "warn",
          'title': "注意两点",
          'text': "1) fetch 只有在 `response.ok` 为 false 时才该当失败处理，网络错误才进 catch，HTTP 404/500 也会正常返回响应，所以要手动检查 <code.inline>response.ok</code.inline>；2) 浏览器有「同源策略」，跨域名请求可能被 CORS 拦截。本编辑器无法发真实网络请求，请把代码放到浏览器环境测试。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"fetch：跟服务器要数据\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"fetch：跟服务器要数据\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"fetch：跟服务器要数据\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "fetch 发网络请求，返回 Promise",
            "response.json() 把响应解析成 JSON",
            "常用 async/await + try/catch 组合更清晰",
            "POST 要传 method/headers/body，body 用 JSON.stringify"
          ]
        }
      ]
    },
    {
      'id': "js-63",
      'title': "错误处理 try/catch 与定时器",
      'summary': "try/catch 兜住运行时错误，throw 主动抛错，setTimeout/setInterval 定时做事。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "程序不可能永远不出错，关键是「出错时不崩」。<code.inline>try/catch</code.inline> 就是安全网：把可能出错的代码放进 try，一旦出错就跳到 catch 处理，程序继续跑。另外这一章把两个定时器 <code.inline>setTimeout</code.inline> 和 <code.inline>setInterval</code.inline> 一并讲完。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "try/catch 基本用法",
          'code': "try {\n  // 故意访问一个不存在的函数的属性\n  null.name   // 这里会抛出 TypeError\n  console.log(\"这行不会执行\")\n} catch (err) {\n  // 出错后跳到这\n  console.log(\"捕获到错误：\", err.message)\n} finally {\n  // finally 无论成不成功都会执行\n  console.log(\"无论成败，都会走到这里\")\n}\nconsole.log(\"程序继续运行，没有崩溃\")"
        },
        {
          'type': "p",
          'text': "结构三部分：<code.inline>try</code.inline> 放可能出错的代码；<code.inline>catch(err)</code.inline> 在出错时执行，err 是错误对象（用 err.message 看描述）；<code.inline>finally</code.inline> 可选，不管成败都会执行（常用于关资源、清理工作）。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "throw：主动抛错",
          'code': "function divide(a, b) {\n  if (b === 0) {\n    throw new Error(\"除数不能为 0！\")   // 主动抛出一个错误\n  }\n  return a / b\n}\n\ntry {\n  console.log(divide(10, 0))\n} catch (err) {\n  console.log(\"捕获：\", err.message)\n}\n\n// 也可以用自定义对象抛错\nfunction checkAge(age) {\n  if (age < 0) {\n    throw new Error(\"年龄不能为负\")\n  }\n  return \"年龄合法\"\n}\ntry {\n  console.log(checkAge(-1))\n} catch (e) {\n  console.log(\"校验失败：\", e.message)\n}"
        },
        {
          'type': "h",
          'text': "setTimeout 与 setInterval"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "两个定时器",
          'code': "// setTimeout：延迟执行一次\nsetTimeout(() => {\n  console.log(\"2 秒后打印一次\")\n}, 2000)\n\n// setInterval：每隔一段时间重复执行\nlet tick = 0\nconst timer = setInterval(() => {\n  tick++\n  console.log(\"第\", tick, \"次（每 1 秒一次）\")\n  if (tick >= 3) {\n    clearInterval(timer)   // 到 3 次就停\n    console.log(\"定时器已清除\")\n  }\n}, 1000)\n\n// 提前取消 setTimeout\n// clearTimeout(某个定时器变量)"
        },
        {
          'type': "p",
          'text': "<code.inline>setTimeout(回调, 毫秒)</code.inline> 延迟执行一次；<code.inline>setInterval(回调, 毫秒)</code.inline> 反复执行。两者都会返回一个「定时器 id」，用 <code.inline>clearTimeout(id)</code.inline> / <code.inline>clearInterval(id)</code.inline> 取消。setInterval 尤其要记得条件满足后 clearInterval，否则会无限执行下去。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"错误处理 try/catch 与定时器\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"错误处理 try/catch 与定时器\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"错误处理 try/catch 与定时器\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "try/catch 兜住错误，程序不崩溃",
            "catch 的 err.message 是错误描述，finally 总会执行",
            "throw new Error(\"...\") 主动抛出错误",
            "setTimeout 执行一次，setInterval 反复执行，clear 取消"
          ]
        }
      ],
      'templates': [
        {
          'name': "倒计时",
          'code': "let count = 5\nconst timer = setInterval(() => {\n  console.log(\"倒计时：\", count)\n  count--\n  if (count === 0) {\n    clearInterval(timer)\n    console.log(\"时间到！\")\n  }\n}, 1000)"
        }
      ]
    },
    {
      'id': "js-64",
      'title': "面向对象：class 与 constructor",
      'summary': "用 class 创建「模板」，用 new 造出对象，面向对象编程的入门。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "面向对象编程（OOP）是一种组织代码的思路：把「一类东西的共同特征和行为」定义成模板，然后按模板造出一个个具体实例。比如「狗」是一个模板（类），它有二条腿、会汪汪叫；你家的「旺财」就是按这个模板造出来的具体对象（实例）。JavaScript 的类用 <code.inline>class</code.inline> 关键字定义。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "定义一个类",
          'code': "// class 是模板，name 大写是惯例\nclass Dog {\n  // constructor 构造方法：new 的时候自动执行\n  constructor(name, age) {\n    this.name = name   // this 指向将来创建的实例\n    this.age = age\n  }\n\n  // 实例方法：每个实例都能用\n  bark() {\n    return `${this.name}在汪汪叫！`\n  }\n\n  info() {\n    return `${this.name}今年${this.age}岁`\n  }\n}\n\n// 用 new 造出两个实例\nconst dog1 = new Dog(\"旺财\", 3)\nconst dog2 = new Dog(\"小黑\", 5)\n\nconsole.log(dog1.bark())    // 旺财在汪汪叫！\nconsole.log(dog1.info())    // 旺财今年3岁\nconsole.log(dog2.bark())    // 小黑在汪汪叫！\nconsole.log(dog2 instanceof Dog)   // true 是 Dog 的实例"
        },
        {
          'type': "p",
          'text': "拆解：<code.inline>constructor</code.inline> 是构造方法，用 <code.inline>new Dog(...)</code.inline> 创建实例时会自动调用它，把传进来的参数通过 <code.inline>this.xxx = xxx</code.inline> 存到实例上。<code.inline>bark()</code.inline> 这类叫「实例方法」，所有实例都能调用。类的名字惯例用大写开头。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "字段初始化与简写",
          'code': "class Person {\n  // 直接在这里写，就是默认属性\n  species = \"人类\"   // 字段初始化（新语法）\n\n  constructor(name, age) {\n    this.name = name\n    this.age = age\n  }\n\n  greet() {\n    return `你好，我是${this.name}，${this.species}`\n  }\n}\n\nconst p = new Person(\"小明\", 20)\nconsole.log(p.greet())\nconsole.log(p.species)   // 人类\n\n// 类也可以当成类型模板，判断实例用 instanceof\nconsole.log(p instanceof Person)   // true"
        },
        {
          'type': "warn",
          'title': "class 不是函数定义的新语法糖",
          'text': "本质上 class 也是基于「原型」（下一章讲）实现的，但写起来比原型直观多了。class 有几点要注意：不能用 <code.inline>class</code.inline> 重复声明同名类；类不会「提升」，要在定义之后再用；类里默认就是严格模式。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"面向对象：class 与 constructor\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"面向对象：class 与 constructor\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"面向对象：class 与 constructor\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "class 定义模板，new 关键字创建实例",
            "constructor 在 new 时自动执行，负责初始化属性",
            "this.xxx 把数据挂到当前实例上",
            "实例方法对所有实例可用，instanceof 判断类型"
          ]
        }
      ],
      'templates': [
        {
          'name': "学生类",
          'code': "class Student {\n  constructor(name, math, english) {\n    this.name = name\n    this.math = math\n    this.english = english\n  }\n  total() {\n    return this.math + this.english\n  }\n}\nconst s = new Student(\"小红\", 95, 88)\nconsole.log(`${s.name} 总分 ${s.total()}`)"
        }
      ]
    },
    {
      'id': "js-65",
      'title': "继承：extends 与 super",
      'summary': "子类继承父类的能力，用 super 调用父类的构造和方法，代码复用不再重复。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "现实里「猫是动物」「狗是动物」——猫和狗都有动物的共同特征（会呼吸、要吃饭），又有自己的特点（猫会喵、狗会汪）。编程里就用**继承**来表达这种「父子关系」：子类（猫、狗）继承父类（动物）的能力，再添加或改写自己的。继承让代码不用重复写，是面向对象的核心特性。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "extends 继承基础",
          'code': "// 父类（基类）\nclass Animal {\n  constructor(name) {\n    this.name = name\n  }\n\n  eat() {\n    return `${this.name}在吃东西`\n  }\n}\n\n// 子类（派生类）：用 extends 继承 Animal\nclass Dog extends Animal {\n  // 不写 constructor 时，会自动用父类的构造\n  bark() {\n    return `${this.name}在汪汪叫`\n  }\n}\n\nconst d = new Dog(\"旺财\")\nconsole.log(d.eat())     // 旺财在吃东西（继承来的）\nconsole.log(d.bark())    // 旺财在汪汪叫（自己的）"
        },
        {
          'type': "p",
          'text': "子类用 <code.inline>extends</code.inline> 继承父类后，**自动拥有父类的所有方法和属性**。上面 Dog 没写 constructor，就自动用父类 Animal 的构造；Dog 自己没有 eat 方法，但继承来了，所以能调用。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "super：调用父类的构造和方法",
          'code': "class Animal {\n  constructor(name) {\n    this.name = name\n  }\n  eat() {\n    return `${this.name}在吃东西`\n  }\n}\n\nclass Cat extends Animal {\n  constructor(name, color) {\n    // 必须先调用 super()，把父类的构造跑一遍\n    super(name)\n    // 再设置自己的属性\n    this.color = color\n  }\n\n  // 覆盖父类的方法\n  eat() {\n    return `${this.name}（${this.color}）在吃鱼`\n  }\n\n  // 在方法里调用父类方法\n  eatAndMew() {\n    return super.eat() + \"，然后喵了一声\"\n  }\n}\n\nconst c = new Cat(\"咪咪\", \"橘色\")\nconsole.log(c.eat())        // 咪咪（橘色）在吃鱼（覆盖了）\nconsole.log(c.eatAndMew())  // 咪咪在吃东西，然后喵了一声"
        },
        {
          'type': "p",
          'text': "<code.inline>super</code.inline> 有两个作用：在构造方法里 <code.inline>super(参数)</code.inline> 调用父类的构造方法（**必须在 this 之前调用**，这是语法要求）；在方法里 <code.inline>super.方法名()</code.inline> 调用父类的同名方法。子类可以「覆盖」父类方法（写一个同名的新实现），也可以调用父类原版。"
        },
        {
          'type': "warn",
          'title': "经典报错：Must call super constructor",
          'text': "在子类的 constructor 里，如果你写了 this.xxx 却没先调 <code.inline>super()</code.inline>，会报错 <code.inline>Must call super constructor in derived class</code.inline>。规则很简单：**子类构造方法第一行必须是 super(...)**。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"继承：extends 与 super\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"继承：extends 与 super\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"继承：extends 与 super\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "extends 让子类继承父类的方法和属性",
            "子类不写 constructor 就自动用父类的",
            "子类写 constructor 必须先 super() 再 this",
            "super.方法() 调用父类方法，同名方法在子类里可覆盖"
          ]
        }
      ],
      'templates': [
        {
          'name': "继承练习",
          'code': "class Shape {\n  constructor(name) { this.name = name }\n  area() { return 0 }\n}\nclass Square extends Shape {\n  constructor(side) { super(\"正方形\"); this.side = side }\n  area() { return this.side * this.side }\n}\nclass Circle extends Shape {\n  constructor(r) { super(\"圆形\"); this.r = r }\n  area() { return Math.PI * this.r * this.r }\n}\nconsole.log(new Square(4).area())\nconsole.log(new Circle(2).area().toFixed(2))"
        }
      ]
    },
    {
      'id': "js-66",
      'title': "getter / setter 与静态方法",
      'summary': "用 get/set 拦截属性的读取和赋值，用 static 定义不需要实例就能调的方法。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "class 里还有两个进阶工具：**getter/setter** 让你在「读属性 / 写属性」时能偷偷做点处理（比如校验、计算），**静态方法**让方法挂在「类本身」而不是实例上。它们能让你写出更优雅、更安全的类。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "getter 与 setter",
          'code': "class Person {\n  constructor(first, last) {\n    this.first = first\n    this.last = last\n    this._age = 0   // 下划线约定：内部私有\n  }\n\n  // getter：读取 fullName 时，自动算出结果\n  get fullName() {\n    return this.first + \" \" + this.last\n  }\n\n  // setter：给 fullName 赋值时，自动拆开存\n  set fullName(value) {\n    const parts = value.split(\" \")\n    this.first = parts[0]\n    this.last = parts[1]\n  }\n\n  // 带校验的 setter\n  set age(value) {\n    if (value < 0 || value > 150) {\n      throw new Error(\"年龄不合法\")\n    }\n    this._age = value\n  }\n\n  get age() {\n    return this._age\n  }\n}\n\nconst p = new Person(\"张\", \"三\")\nconsole.log(p.fullName)     // 张三 像属性一样用，不是方法\np.fullName = \"李 四\"        // 像属性一样赋值\nconsole.log(p.first, p.last)  // 李 四\n\np.age = 25\nconsole.log(p.age)   // 25"
        },
        {
          'type': "p",
          'text': "getter（<code.inline>get 名字()</code.inline>）和 setter（<code.inline>set 名字(值)</code.inline>）让外部**用起来像普通属性**，但背后可以加逻辑。上面的 fullName 就是个「虚拟属性」：没存它，靠 first + last 实时算出。age 的 setter 加了范围校验，不合法的直接抛错。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "静态方法 static",
          'code': "class MathUtil {\n  // 静态方法：挂在类上，不需要 new 就能调用\n  static add(a, b) {\n    return a + b\n  }\n\n  static max(arr) {\n    return Math.max(...arr)\n  }\n\n  // 静态属性（较新语法）\n  static version = \"1.0.0\"\n}\n\n// 直接通过类名调用，不用 new\nconsole.log(MathUtil.add(3, 4))      // 7\nconsole.log(MathUtil.max([1, 9, 4]))  // 9\nconsole.log(MathUtil.version)         // 1.0.0\n\n// 实例方法才需要 new\n// const m = new MathUtil()   // 没必要，静态方法直接调"
        },
        {
          'type': "p",
          'text': "<code.inline>static</code.inline> 方法挂在类本身上，通过 <code.inline>类名.方法()</code.inline> 直接调用，**不需要创建实例**。适合放「工具函数」和「与具体实例无关的通用逻辑」。内置对象里就很多，比如 <code.inline>Math.random()</code.inline>、<code.inline>Array.isArray()</code.inline> 都是静态方法。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"getter / setter 与静态方法\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"getter / setter 与静态方法\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"getter / setter 与静态方法\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "get/set 把逻辑包装得像普通属性",
            "setter 里可加校验，getter 里可动态计算",
            "static 方法挂在类上，类名.方法() 直接调用",
            "内置的 Math.random、Array.isArray 就是静态方法"
          ]
        }
      ]
    },
    {
      'id': "js-67",
      'title': "原型链：class 的底层真相",
      'summary': "一切对象都有原型，查找属性会沿着原型链向上找，这是继承的真正机制。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "class、extends 只是「看起来」这么写，底层靠的是一套叫**原型（prototype）**的机制。理解原型链，你就能解释「为什么 d.eat() 能调用父类的方法」这类问题，也是面试里的经典深水区。这一章用大白话把它讲明白。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "每个对象都有原型",
          'code': "const obj = { name: \"小明\" }\n\n// __proto__ 指向这个对象的原型（一个对象）\nconsole.log(obj.__proto__)\nconsole.log(Object.getPrototypeOf(obj) === obj.__proto__)   // true\n\n// 对象没有 toString 方法，但能用——因为原型上有\nconsole.log(obj.toString())\nconsole.log(typeof obj.toString)   // function"
        },
        {
          'type': "p",
          'text': "为什么 obj 没有定义 toString，却能调用？因为当你访问 obj 的某个属性时，JS 先在 obj 自己身上找，找不到就顺着 <code.inline>__proto__</code.inline> 去它的原型上找，还找不到就再往原型的原型上找……这条「向上找」的链就是**原型链**。toString 就是沿着链在顶层的 Object.prototype 上找到的。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "class 和原型的关系",
          'code': "class Animal {\n  constructor(name) { this.name = name }\n  eat() { return this.name + \"在吃\" }\n}\n\n// 实例的方法不在实例身上，而在类的 prototype 上\nconst a = new Animal(\"猫\")\nconsole.log(a.hasOwnProperty(\"eat\"))   // false 自己身上没有\nconsole.log(Animal.prototype.hasOwnProperty(\"eat\"))   // true 在原型上\n\n// 实例能调用，是因为顺着原型链找到了\nconsole.log(a.eat())   // 猫在吃\n\n// 两个实例共享同一个原型上的方法\nconst b = new Animal(\"狗\")\nconsole.log(a.eat === b.eat)   // true 同一个函数，省内存！"
        },
        {
          'type': "p",
          'text': "class 里的方法并不会复制到每个实例上，而是放在 <code.inline>类.prototype</code.inline> 这个共享对象上，所有实例通过原型链共享它们。好处是省内存，改一处全都生效。这正是「原型」的设计初衷。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "手动设置原型",
          'code': "const animal = { eat() { return \"吃东西\" } }\n\n// 用 Object.create 创建一个以 animal 为原型的对象\nconst dog = Object.create(animal)\ndog.bark = function () { return \"汪汪\" }\n\nconsole.log(dog.bark())   // 汪汪（自己的）\nconsole.log(dog.eat())    // 吃东西（沿着原型链找到的）\n\n// 给原型加方法，所有基于它的对象立刻能用\nanimal.sleep = function () { return \"睡觉\" }\nconsole.log(dog.sleep())   // 睡觉"
        },
        {
          'type': "info",
          'title': "原型链长什么样",
          'text': "dog → animal → Object.prototype → null。查属性时沿链向上找，找到就用，找不到返回 undefined。class 的继承（extends）在底层就是「把子类的 prototype 的原型指向父类的 prototype」。理解到这一层，前面讲的所有对象行为就都通了。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"原型链：class 的底层真相\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"原型链：class 的底层真相\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"原型链：class 的底层真相\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "每个对象都有原型 __proto__，属性找不到就沿链向上找",
            "class 的方法放在 类.prototype 上，实例共享",
            "原型链是继承的真正机制，extends 底层靠它实现",
            "链的尽头是 Object.prototype，再往上就是 null"
          ]
        }
      ]
    },
    {
      'id': "js-68",
      'title': "localStorage 与 sessionStorage",
      'summary': "把数据存在浏览器里，刷新页面还在（localStorage），关标签页就没了（sessionStorage）。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "有时候你想让数据「记住」：用户上次选了深色模式，下次打开还是深色；购物车加了东西，刷新别丢。浏览器提供了 <code.inline>localStorage</code.inline>（本地存储）和 <code.inline>sessionStorage</code.inline>（会话存储）来存小数据（一般几 MB）。区别一句话：**localStorage 关掉浏览器还在，sessionStorage 关掉标签页就没了**。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "localStorage 基本操作",
          'code': "// 存：键值对，值必须是字符串\nlocalStorage.setItem(\"username\", \"小明\")\nlocalStorage.setItem(\"theme\", \"dark\")\n\n// 取\nconsole.log(localStorage.getItem(\"username\"))   // 小明\nconsole.log(localStorage.getItem(\"theme\"))     // dark\n\n// 没有的键返回 null\nconsole.log(localStorage.getItem(\"age\"))   // null\n\n// 删：删单个 / 清空\nlocalStorage.removeItem(\"theme\")\n// localStorage.clear()   // 清空全部\n\n// 数量与遍历\nconsole.log(localStorage.length)\nfor (let i = 0; i < localStorage.length; i++) {\n  const key = localStorage.key(i)\n  console.log(key, localStorage.getItem(key))\n}"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "存对象：要 JSON 序列化",
          'code': "// 不能直接存对象！会变成 \"[object Object]\"\nconst user = { name: \"小明\", age: 20 }\n\n// 存：转成 JSON 字符串\nlocalStorage.setItem(\"user\", JSON.stringify(user))\n\n// 取：解析回对象\nconst raw = localStorage.getItem(\"user\")\nconst back = JSON.parse(raw)\nconsole.log(back.name)   // 小明\nconsole.log(back.age)    // 20"
        },
        {
          'type': "warn",
          'title': "localStorage 的两个限制",
          'text': "1) 只能存字符串，存对象/数组要先 JSON.stringify，取回要 JSON.parse；2) 有容量上限（大约 5MB），别往里塞大文件或大图片。另外它存的是明文，**千万别存密码等敏感信息**。"
        },
        {
          'type': "info",
          'title': "实战：记住主题偏好",
          'text': "经典的用法：<code.inline>localStorage.setItem(\"theme\", \"dark\")</code.inline> 存偏好 → 页面加载时读出来 <code.inline>let t = localStorage.getItem(\"theme\")</code.inline> → 有值就应用对应样式。这样用户下次打开网站，偏好还在。这个模式叫「持久化」。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"localStorage 与 sessionStorage\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"localStorage 与 sessionStorage\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"localStorage 与 sessionStorage\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "localStorage 持久保存，关浏览器还在",
            "sessionStorage 会话级，关标签页就没了",
            "只能存字符串，对象要 JSON.stringify/parse",
            "容量约 5MB，别存敏感数据"
          ]
        }
      ],
      'templates': [
        {
          'name': "存储模拟（浏览器专用）",
          'code': "// 概念演示：localStorage 的用法（需浏览器环境）\n// localStorage.setItem(\"key\", \"value\")\n// localStorage.getItem(\"key\")\n// localStorage.removeItem(\"key\")\n// localStorage.clear()\n\nconst storage = new Map()   // 用 Map 模拟\nfunction setItem(k, v) { storage.set(k, String(v)) }\nfunction getItem(k) { return storage.has(k) ? storage.get(k) : null }\n\nsetItem(\"username\", \"小明\")\nconsole.log(getItem(\"username\"))\nconsole.log(getItem(\"nope\"))"
        }
      ]
    },
    {
      'id': "js-69",
      'title': "Canvas 入门：网页画布",
      'summary': "用 canvas 标签和 JS 画矩形、圆、文字，做出图表和游戏的基础。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "<code.inline>&lt;canvas&gt;</code.inline> 是网页里的一块「画布」，你可以用 JavaScript 在上面画线条、矩形、圆、文字，甚至做动画和游戏。它和 SVG 的区别：canvas 是「像素级」的位图，画完就固定了。图表库、小游戏、图像处理背后都是它。"
        },
        {
          'type': "code",
          'lang': "html",
          'title': "在 canvas 上画图形",
          'code': "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n</head>\n<body>\n  <canvas id=\"cv\" width=\"400\" height=\"250\" style=\"border:1px solid #ccc\"></canvas>\n\n  <script>\n    const canvas = document.getElementById(\"cv\")\n    // ctx（context 上下文）是画笔\n    const ctx = canvas.getContext(\"2d\")\n\n    // 画一个实心矩形\n    ctx.fillStyle = \"#4f46e5\"        // 填充色\n    ctx.fillRect(20, 20, 120, 80)    // x, y, 宽, 高\n\n    // 画一个空心矩形（描边）\n    ctx.strokeStyle = \"#ef4444\"      // 描边色\n    ctx.lineWidth = 4\n    ctx.strokeRect(160, 20, 120, 80)\n\n    // 画一个圆\n    ctx.beginPath()                  // 开始新路径\n    ctx.arc(300, 60, 40, 0, Math.PI * 2)  // 圆心x, y, 半径, 起角, 终角\n    ctx.fillStyle = \"#10b981\"\n    ctx.fill()                       // 填充\n\n    // 画文字\n    ctx.fillStyle = \"#111\"\n    ctx.font = \"20px sans-serif\"\n    ctx.fillText(\"你好，Canvas！\", 30, 180)\n\n    // 画一条线\n    ctx.beginPath()\n    ctx.moveTo(20, 200)\n    ctx.lineTo(380, 220)\n    ctx.strokeStyle = \"#f59e0b\"\n    ctx.stroke()\n  </script>\n</body>\n</html>"
        },
        {
          'type': "p",
          'text': "要点拆解：先用 <code inline>canvas.getContext(\"2d\")</code.inline> 拿到画笔 ctx；设置颜色 <code.inline>fillStyle</code.inline> / <code.inline>strokeStyle</code.inline>；矩形直接 <code.inline>fillRect</code.inline>；圆形要 beginPath + arc + fill；文字用 <code.inline>fillText</code.inline>。记住 canvas 的坐标系：原点在左上角，x 向右，y 向下。"
        },
        {
          'type': "code",
          'lang': "html",
          'title': "画一个会动的球（动画）",
          'code': "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n</head>\n<body>\n  <canvas id=\"cv\" width=\"400\" height=\"250\" style=\"border:1px solid #ccc\"></canvas>\n\n  <script>\n    const canvas = document.getElementById(\"cv\")\n    const ctx = canvas.getContext(\"2d\")\n    let x = 40, vx = 3, r = 20\n\n    function draw() {\n      ctx.clearRect(0, 0, canvas.width, canvas.height)  // 清屏\n\n      ctx.beginPath()\n      ctx.arc(x, 120, r, 0, Math.PI * 2)\n      ctx.fillStyle = \"#4f46e5\"\n      ctx.fill()\n\n      x += vx\n      // 撞到左右边界反弹\n      if (x + r > canvas.width || x - r < 0) vx = -vx\n\n      requestAnimationFrame(draw)   // 请求下一帧动画\n    }\n\n    draw()\n  </script>\n</body>\n</html>"
        },
        {
          'type': "info",
          'title': "requestAnimationFrame",
          'text': "做 canvas 动画用 <code.inline>requestAnimationFrame(draw)</code.inline>，它会在屏幕每帧刷新前调用你的函数（约 60 次/秒），比 setTimeout 更流畅更省资源，是浏览器做动画的正规姿势。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Canvas 入门：网页画布\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Canvas 入门：网页画布\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Canvas 入门：网页画布\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "canvas 是网页画布，getContext(\"2d\") 拿画笔",
            "fillRect/arc/fillText 画矩形/圆/文字，fillStyle 设颜色",
            "坐标系原点在左上角，x 向右 y 向下",
            "动画用 requestAnimationFrame，先 clearRect 再重画"
          ]
        }
      ],
      'templates': [
        {
          'name': "Canvas 概念（代码演示）",
          'code': "// canvas 需要浏览器环境，这里演示它的绘图 API 名称\nconst api = [\n  \"ctx.fillRect(x, y, w, h)\",\n  \"ctx.strokeRect(x, y, w, h)\",\n  \"ctx.beginPath(); ctx.arc(cx, cy, r, 0, 2*PI); ctx.fill()\",\n  \"ctx.fillText(文字, x, y)\",\n  \"ctx.clearRect(0, 0, w, h)  清屏\"\n]\napi.forEach(a => console.log(a))\nconsole.log(\"放到 <canvas> 页面里即可画出图形\")"
        }
      ]
    },
    {
      'id': "js-70",
      'title': "拖拽与文件读取",
      'summary': "把文件拖进网页、用 input 选择文件，用 FileReader 读取文件内容。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "网页应用越来越像本地软件：拖拽上传、读取本地文件预览图片、解析 CSV。这一章教你两件套：怎么让元素「接住」拖进来的文件，怎么用 <code.inline>input type=\"file\"</code.inline> 选文件，再用 <code.inline>FileReader</code.inline> 读出内容。"
        },
        {
          'type': "code",
          'lang': "html",
          'title': "文件拖拽上传区域",
          'code': "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    #drop {\n      width: 300px; height: 120px;\n      border: 2px dashed #999;\n      display: flex; align-items: center; justify-content: center;\n      margin: 20px;\n    }\n    #drop.over { border-color: #4f46e5; background: #eef2ff; }\n  </style>\n</head>\n<body>\n  <div id=\"drop\">把文件拖到这里</div>\n  <p id=\"info\"></p>\n\n  <script>\n    const drop = document.getElementById(\"drop\")\n    const info = document.getElementById(\"info\")\n\n    // 拖动经过时高亮（必须阻止默认行为才能接住拖拽）\n    drop.addEventListener(\"dragover\", (e) => {\n      e.preventDefault()\n      drop.classList.add(\"over\")\n    })\n    drop.addEventListener(\"dragleave\", () => {\n      drop.classList.remove(\"over\")\n    })\n\n    // 松手放下时\n    drop.addEventListener(\"drop\", (e) => {\n      e.preventDefault()\n      drop.classList.remove(\"over\")\n      const files = e.dataTransfer.files   // 拖进来的文件列表\n      if (files.length > 0) {\n        info.textContent = \"收到文件：\" + files[0].name +\n          \"，大小 \" + (files[0].size / 1024).toFixed(1) + \" KB\"\n      }\n    })\n  </script>\n</body>\n</html>"
        },
        {
          'type': "code",
          'lang': "html",
          'title': "input 选文件 + FileReader 读内容",
          'code': "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n</head>\n<body>\n  <input type=\"file\" id=\"fileInput\" accept=\".txt,image/*\">\n  <pre id=\"content\"></pre>\n\n  <script>\n    const input = document.getElementById(\"fileInput\")\n    const content = document.getElementById(\"content\")\n\n    input.addEventListener(\"change\", function () {\n      const file = this.files[0]   // 选中的第一个文件\n      if (!file) return\n\n      const reader = new FileReader()\n\n      // 读取完成后的回调\n      reader.onload = function (e) {\n        if (file.type.startsWith(\"image/\")) {\n          // 图片文件：显示预览\n          content.innerHTML = '<img src=\"' + e.target.result + '\" width=\"200\">'\n        } else {\n          // 文本文件：显示内容\n          content.textContent = e.target.result\n        }\n      }\n\n      // 开始读取：按文本读，或按 DataURL 读\n      if (file.type.startsWith(\"image/\")) {\n        reader.readAsDataURL(file)\n      } else {\n        reader.readAsText(file)\n      }\n    })\n  </script>\n</body>\n</html>"
        },
        {
          'type': "warn",
          'title': "安全限制",
          'text': "浏览器出于安全，JS 只能读取用户「主动选择」的文件（input 或拖拽），不能随便读电脑上任意路径的文件，这是设计如此，别想着绕过。文件内容在本地读取，不会自动上传，要上传还得走 fetch/formdata。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"拖拽与文件读取\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"拖拽与文件读取\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"拖拽与文件读取\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "拖拽：监听 dragover/drop，drop 里 e.dataTransfer.files 拿文件",
            "input type=file 用 change 事件 + files[0] 拿文件",
            "FileReader 读文件：readAsText 读文本、readAsDataURL 读图片",
            "浏览器只能读用户主动选择的文件"
          ]
        }
      ]
    },
    {
      'id': "js-71",
      'title': "常见报错：ReferenceError、TypeError、SyntaxError",
      'summary': "认识三种最常见的报错和 NaN，看到报错不再慌，知道怎么修。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "写代码一定会报错，报错不可怕，可怕的是看到红字就慌。这一章把 JavaScript 最常见的三类报错讲清楚，教你**看报错信息**：报错通常会告诉你「哪一行 + 什么类型 + 什么原因」，顺着就能修。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "ReferenceError：变量没定义",
          'code': "// 访问一个不存在的变量\n// console.log(age)   // ReferenceError: age is not defined\n\n// 正确的写法：先声明再使用\nlet age = 20\nconsole.log(age)   // 20\n\n// 常见原因：拼错变量名、忘记声明、用了没 import 的变量\nconsole.log(\"解决：先 let/const 声明，检查拼写\")"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "TypeError：类型不对",
          'code': "// 在 null / undefined 上取属性\nlet user = null\n// console.log(user.name)   // TypeError: Cannot read properties of null\n\n// 在数字上调方法\n// console.log((5).toUpperCase())   // TypeError: ... is not a function\n\n// 正确的处理\nlet safe = user && user.name\nconsole.log(safe)   // null\n// 现代写法：user?.name 可选链，更优雅"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "SyntaxError：语法写错了",
          'code': "// 语法错误：代码根本没法解析，一运行就报\n// 比如少了一个括号：\n// console.log(\"hello\"\n\n// 正确的写法：括号成对\nconsole.log(\"hello\")\n\n// 再比如字符串没闭合：\n// let s = \"abc\n\n// 这类错误通常会在「报错信息里指到出问题的位置附近」\n// 检查：括号配对、引号配对、分号、关键字拼写"
        },
        {
          'type': "table",
          'head': [
            "报错类型",
            "意思",
            "典型场景",
            "怎么修"
          ],
          'rows': [
            [
              "ReferenceError",
              "引用错误",
              "用了没定义的变量",
              "先声明，检查拼写"
            ],
            [
              "TypeError",
              "类型错误",
              "null 上取属性、数字上调方法",
              "判空、可选链、确认类型"
            ],
            [
              "SyntaxError",
              "语法错误",
              "少括号、引号没闭合",
              "检查配对和拼写"
            ],
            [
              "NaN",
              "不是数字",
              "转数字失败、非法运算",
              "用 Number.isNaN 判断"
            ]
          ]
        },
        {
          'type': "danger",
          'title': "怎么读报错",
          'text': "报错信息从左到右读：第一段是「错误类型」（ReferenceError / TypeError / SyntaxError），括号里是「原因描述」（is not defined / cannot read properties of null），后面会附「文件路径 + 行号 + 列号」。修复思路：先定位到那一行，再看错误类型猜原因，最后打印相关变量确认。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"常见报错：ReferenceError、TypeError、SyntaxError\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"常见报错：ReferenceError、TypeError、SyntaxError\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"常见报错：ReferenceError、TypeError、SyntaxError\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "ReferenceError：变量没定义，先声明再使用",
            "TypeError：在 null/undefined 上取属性等类型问题",
            "SyntaxError：括号引号不配对等语法问题",
            "报错信息 = 类型 + 原因 + 行号，照着排查即可"
          ]
        }
      ],
      'templates': [
        {
          'name': "防报错示例",
          'code': "function safeGet(user, key) {\n  if (!user) return \"用户不存在\"\n  return user[key] ?? \"无此属性\"\n}\nconsole.log(safeGet(null, \"name\"))\nconsole.log(safeGet({ name: \"小明\" }, \"name\"))\nconsole.log(safeGet({}, \"age\"))"
        }
      ]
    },
    {
      'id': "js-72",
      'title': "console 调试技巧与断点",
      'summary': "console.log/warn/error/table 各显神通，配合浏览器断点一步步查问题。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "调试（Debug）就是「找到并修掉 bug」的过程。工具分两档：轻量级的用 <code.inline>console</code.inline> 家族的打印方法，重度疑难杂症就用浏览器「断点调试」一步步看执行过程。这一章两样都教。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "console 家族",
          'code': "console.log(\"普通日志：\", 123, \"abc\", { a: 1 })\nconsole.warn(\"警告信息（黄色）：这是个潜在问题\")\nconsole.error(\"错误信息（红色）：出错了\")\n\nconst users = [\n  { name: \"小明\", age: 20 },\n  { name: \"小红\", age: 18 }\n]\nconsole.table(users)   // 表格形式展示对象数组，超直观\n\n// 分组\nconsole.group(\"用户数据\")\nconsole.log(\"名字：小明\")\nconsole.log(\"年龄：20\")\nconsole.groupEnd()\n\n// 统计执行次数\nconsole.count(\"点击\")  // 点击: 1\nconsole.count(\"点击\")  // 点击: 2"
        },
        {
          'type': "p",
          'text': "不同级别用不同方法：普通日志 log、潜在问题 warn、真错误 error、表格数据 table、分组 group。**给 console.log 加标签**是救命习惯：<code.inline>console.log(\"user 数据\", user)</code.inline>，否则一堆值分不清谁是谁。"
        },
        {
          'type': "code",
          'lang': "html",
          'title': "断点调试（浏览器操作）",
          'code': "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n</head>\n<body>\n  <button id=\"btn\">点我调试</button>\n  <script>\n    function calculate(a, b) {\n      // 在浏览器 Sources 面板里，点击这行的行号就能加断点\n      const sum = a + b\n      const result = sum * 2\n      return result\n    }\n\n    document.getElementById(\"btn\").addEventListener(\"click\", () => {\n      const value = calculate(3, 4)\n      console.log(\"结果：\", value)\n    })\n  </script>\n</body>\n</html>"
        },
        {
          'type': "p",
          'text': "断点调试步骤：按 F12 打开开发者工具 → 点「Sources」（源代码）面板 → 找到要调试的 JS 文件 → **在代码行号上点一下**打一个红点（断点）→ 刷新页面或触发事件 → 程序会在断点处暂停，右侧能看到所有变量的当前值 → 用「Step over」（跳过）、「Step into」（进入函数）、「Continue」（继续）按钮控制执行 → 一步步观察哪里出了问题。这比瞎猜高效得多。"
        },
        {
          'type': "warn",
          'title': "console.log 找不到变量？",
          'text': "如果你 console.log 一个对象，展开箭头看到的「最终值」可能不是打印那一刻的值（因为对象是引用）。想要那一刻的快照，可以 <code.inline>console.log(JSON.parse(JSON.stringify(obj)))</code.inline> 复制一份再打，或者干脆用断点看。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"console 调试技巧与断点\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"console 调试技巧与断点\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"console 调试技巧与断点\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "console.log/warn/error/table 分级别打印",
            "日志加标签：console.log(\"名字\", 值) 避免混乱",
            "断点调试：Sources 面板点行号打断点，逐步执行观察变量",
            "想看对象那一刻的值，先序列化复制一份再打印"
          ]
        }
      ],
      'templates': [
        {
          'name': "console 全家福",
          'code': "const items = [{ n: \"a\", v: 1 }, { n: \"b\", v: 2 }]\nconsole.log(\"普通\")\nconsole.warn(\"警告\")\nconsole.error(\"错误\")\nconsole.table(items)\nconsole.log(\"共\", items.length, \"条\")"
        }
      ]
    },
    {
      'id': "js-73",
      'title': "性能优化基础：防抖、节流与减少重排",
      'summary': "让网页更快不卡顿：防抖、节流、DocumentFragment、减少 DOM 操作。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "网页「卡」通常因为代码干得太频繁、太重。性能优化就是「少干、攒着干、挑重点干」。这一章讲三个必学技巧：**防抖**（debounce，停一下再干）、**节流**（throttle，限频率地干）、以及减少 DOM 操作。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "防抖：停止输入后才执行",
          'code': "// 场景：搜索框，用户打字太快，别每次按键都发请求\n// 防抖：事件触发后等 N 毫秒，期间又被触发就重新计时\nfunction debounce(fn, delay) {\n  let timer = null\n  return function (...args) {\n    clearTimeout(timer)          // 取消上一次的定时\n    timer = setTimeout(() => {   // 重新计时\n      fn.apply(this, args)\n    }, delay)\n  }\n}\n\n// 使用：包装一下搜索函数\nconst search = debounce((keyword) => {\n  console.log(\"发起搜索：\", keyword)   // 实际这里会发请求\n}, 500)\n\n// 模拟用户快速输入\nsearch(\"j\")\nsearch(\"ja\")\nsearch(\"jav\")\nsearch(\"java\")   // 只会在最后一次输入后 500ms 触发一次\nconsole.log(\"（只执行一次）\")"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "节流：固定频率执行",
          'code': "// 场景：滚动、mousemove，事件触发太频繁\n// 节流：保证 N 毫秒内最多执行一次\nfunction throttle(fn, interval) {\n  let last = 0\n  return function (...args) {\n    const now = Date.now()\n    if (now - last >= interval) {\n      last = now\n      fn.apply(this, args)\n    }\n  }\n}\n\nconst onScroll = throttle(() => {\n  console.log(\"处理滚动（最多每 1 秒一次）\")\n}, 1000)\n\n// 模拟滚动触发多次\nonScroll(); onScroll(); onScroll(); onScroll()\nconsole.log(\"（1 秒内只触发一次）\")"
        },
        {
          'type': "p",
          'text': "区别一句话：**防抖是「等你停下来才做」，节流是「不管多频繁，固定节奏做」**。搜索联想用防抖（等用户停笔），滚动/拖拽用节流（保持流畅）。两者都靠闭包 + 定时器实现，正好复习闭包。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "减少 DOM 操作的技巧",
          'code': "// 1. 批量插入用 DocumentFragment（前面讲过）\n// 2. 合并样式修改，别一行一改\n// 3. 缓存查到的元素，别每次都 document.getElementById\n\n// 缓存元素示例\n// 慢：循环里每次查\n// for (let i = 0; i < 100; i++) {\n//   document.getElementById(\"box\").textContent = i\n// }\n\n// 快：先查一次存起来\n// const box = document.getElementById(\"box\")\n// for (let i = 0; i < 100; i++) {\n//   box.textContent = i\n// }\n\nconsole.log(\"缓存 DOM 引用、批量操作、减少重排是三大原则\")"
        },
        {
          'type': "info",
          'title': "重排与重绘",
          'text': "改布局相关样式（宽高、位置）会触发「重排」，很贵；改颜色这种只触发「重绘」，相对便宜。所以尽量一次性改（比如切换类名），别一点一点改，也别在循环里反复改 DOM。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"性能优化基础：防抖、节流与减少重排\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"性能优化基础：防抖、节流与减少重排\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"性能优化基础：防抖、节流与减少重排\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "防抖：停止触发后 N 毫秒再执行，适合搜索输入",
            "节流：固定时间间隔最多执行一次，适合滚动",
            "两者都靠闭包+定时器，是面试必问手写题",
            "缓存 DOM 引用、批量插入、减少重排提升性能"
          ]
        }
      ],
      'templates': [
        {
          'name': "防抖节流直接调用",
          'code': "function debounce(fn, ms) {\n  let t\n  return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms) }\n}\nconst f = debounce((x) => console.log(\"触发\", x), 300)\nf(1); f(2); f(3)\nconsole.log(\"3 秒后只打一个 3\")"
        }
      ]
    },
    {
      'id': "js-74",
      'title': "Node.js 与 CommonJS 模块",
      'summary': "Node 环境里的模块：require 引入、module.exports 导出，认识 process 和全局对象。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "回到最开始装好的 Node.js。在 Node 里，你可以做浏览器做不了的事：读写文件、启动服务器、访问系统。Node 的代码组织靠 CommonJS 模块系统：一个文件就是一个模块，用 <code.inline>require</code.inline> 引入别的模块，用 <code.inline>module.exports</code.inline> 导出自己。注意：**require 是 Node 专属，浏览器里没有**。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "一个模块导出，另一个导入",
          'code': "// ===== math.js =====\n// function add(a, b) { return a + b }\n// module.exports = { add }   // 导出\n\n// ===== main.js =====\n// const math = require(\"./math.js\")   // 引入\n// console.log(math.add(2, 3))\n\n// 也可以用对象简写一次导多个\n// module.exports = {\n//   add: (a, b) => a + b,\n//   multiply: (a, b) => a * b,\n// }\n\n// 概念演示（本环境不能真的 require 文件）\nconst math = { add: (a, b) => a + b, multiply: (a, b) => a * b }\nconsole.log(math.add(2, 3))       // 5\nconsole.log(math.multiply(2, 3))  // 6"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "Node 全局对象与内置模块",
          'code': "// Node 专属的全局对象\nconsole.log(process.version)   // Node 版本（本环境可能没有，try 一下）\nconsole.log(__dirname)         // 当前文件所在目录\n\n// 常用内置模块\n// const fs = require(\"fs\")      // 文件系统（下一章）\n// const path = require(\"path\")  // 路径处理\n// const http = require(\"http\")  // HTTP 服务器\n\n// 命令行参数\n// node app.js hello world\n// process.argv 会得到 [node, app.js, \"hello\", \"world\"]\n\nconsole.log(\"process.argv[0]:\", process.argv[0])\nconsole.log(\"process.argv[1]:\", process.argv[1])"
        },
        {
          'type': "info",
          'title': "require 和 import 两条路线",
          'text': "现代 Node 也支持 ES6 的 import/export，但传统 Node 项目仍大量用 require/module.exports。理解它们只是「模块化」的两种实现即可：require 是 CommonJS（同步、运行时加载），import 是 ESM（可以静态分析）。前端用 import，Node 老项目用 require。"
        },
        {
          'type': "warn",
          'title': "本编辑器跑不了 Node 专属 API",
          'text': "require、fs、http 都是 Node 环境特有的，浏览器和本编辑器里没有。请把这一章和后面 Node 章节的代码复制到你本地的 .js 文件里，用 <code.inline>node 文件名.js</code.inline> 运行。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Node.js 与 CommonJS 模块\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Node.js 与 CommonJS 模块\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Node.js 与 CommonJS 模块\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Node 让 JS 能读写文件、起服务器、访问系统",
            "CommonJS：require 引入、module.exports 导出",
            "process/__dirname 是 Node 全局对象",
            "require 是 Node 专属，浏览器里没有"
          ]
        }
      ]
    },
    {
      'id': "js-75",
      'title': "fs 文件读写与 path 路径",
      'summary': "用 Node 的 fs 模块读写文件，用 path 处理路径，实现「程序操作文件」。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "程序能「读写文件」是它变得有用的关键：存配置、读数据、生成日志。Node 的 <code.inline>fs</code.inline> 模块（file system 文件系统）就是干这个的。这一章学最常用的读和写，以及配套的 <code.inline>path</code.inline> 路径工具。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "读取文件（同步版）",
          'code': "// 需要 Node 环境运行：node 文件名.js\n// const fs = require(\"fs\")\n\n// 同步读取：代码会等文件读完才继续\n// const data = fs.readFileSync(\"data.txt\", \"utf8\")\n// console.log(data)\n\n// 异步读取：推荐，不阻塞其他代码\n// fs.readFile(\"data.txt\", \"utf8\", (err, data) => {\n//   if (err) {\n//     console.error(\"读取失败：\", err.message)\n//     return\n//   }\n//   console.log(\"文件内容：\", data)\n// })\n\nconsole.log(\"fs.readFileSync(path, \\\"utf8\\\") 同步读\")\nconsole.log(\"fs.readFile(path, \\\"utf8\\\", 回调) 异步读\")\nconsole.log(\"回调第一个参数是 err，第二个是内容\")"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "写入文件",
          'code': "// const fs = require(\"fs\")\n\n// 写入（覆盖）：不存在就创建，存在就覆盖\n// fs.writeFileSync(\"output.txt\", \"你好，文件！\\n第二行\", \"utf8\")\n\n// 追加：在文件末尾接着写\n// fs.appendFileSync(\"log.txt\", \"新的日志一行\\n\")\n\n// 检查文件是否存在\n// if (fs.existsSync(\"data.txt\")) {\n//   console.log(\"文件存在\")\n// }\n\n// 删除文件\n// fs.unlinkSync(\"temp.txt\")\n\nconsole.log(\"writeFileSync 写入/覆盖\")\nconsole.log(\"appendFileSync 追加\")\nconsole.log(\"existsSync 判断存在，unlinkSync 删除\")"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "path 路径处理",
          'code': "// const path = require(\"path\")\n\n// 拼接路径（自动处理斜杠方向）\n// const full = path.join(__dirname, \"data\", \"user.json\")\n// console.log(full)   // 比如 D:\\myproj\\data\\user.json\n\n// 取文件名和扩展名\n// console.log(path.basename(\"/a/b/file.txt\"))   // file.txt\n// console.log(path.extname(\"/a/b/file.txt\"))    // .txt\n// console.log(path.dirname(\"/a/b/file.txt\"))    // /a/b\n\nconsole.log(\"path.join 拼接路径，自动处理分隔符\")\nconsole.log(\"path.basename/extname/dirname 拆路径\")"
        },
        {
          'type': "warn",
          'title': "同步 vs 异步",
          'text': "同步方法（readFileSync）会让程序「卡住」等文件读完，文件大时会拖慢整个程序；异步方法（readFile）不阻塞。**服务器程序里优先用异步**；简单的命令行小脚本用同步更省事。新手先会同步的，跑通流程再学异步。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"fs 文件读写与 path 路径\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"fs 文件读写与 path 路径\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"fs 文件读写与 path 路径\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "fs 模块读写文件：readFileSync/readFile/writeFileSync",
            "异步 readFile 回调的第一个参数是错误 err",
            "path.join 拼接路径，处理跨平台分隔符",
            "本编辑器跑不了，复制到本地用 node 运行"
          ]
        }
      ]
    },
    {
      'id': "js-76",
      'title': "http：用 Node 起一个简易服务器",
      'summary': "http.createServer 创建服务器，监听端口，返回网页或 JSON，感受后端。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "Node 最经典的能力就是「起服务器」：别人通过浏览器访问你的电脑，你的程序负责回应。用内置的 <code.inline>http</code.inline> 模块，几行代码就能起一个 Web 服务器。这也是你第一次感受「后端」是什么。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "第一个 HTTP 服务器",
          'code': "// 需要 Node 环境运行：node server.js\n// const http = require(\"http\")\n\n// const server = http.createServer((req, res) => {\n//   // req 请求对象，res 响应对象\n//   res.statusCode = 200          // 状态码 200 表示成功\n//   res.setHeader(\"Content-Type\", \"text/plain; charset=utf-8\")\n//   res.end(\"你好！这是我的 Node 服务器\")   // 发送响应并结束\n// })\n\n// server.listen(3000, () => {\n//   console.log(\"服务器已启动：http://localhost:3000\")\n// })\n\nconsole.log(\"然后浏览器打开 http://localhost:3000 就能看到文字\")\nconsole.log(\"Ctrl+C 在终端里可以停掉服务器\")"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "返回 JSON 与路由",
          'code': "// const http = require(\"http\")\n\n// const server = http.createServer((req, res) => {\n//   const url = req.url   // 用户访问的路径\n//   res.setHeader(\"Content-Type\", \"application/json; charset=utf-8\")\n\n//   if (url === \"/\") {\n//     res.end(JSON.stringify({ message: \"首页\", ok: true }))\n//   } else if (url === \"/about\") {\n//     res.end(JSON.stringify({ message: \"关于我们\", ok: true }))\n//   } else {\n//     res.statusCode = 404\n//     res.end(JSON.stringify({ message: \"页面不存在\", ok: false }))\n//   }\n// })\n\n// server.listen(3000)\n\nconsole.log(\"req.url 是访问路径\")\nconsole.log(\"res.end(JSON) 返回 JSON 给前端\")"
        },
        {
          'type': "p",
          'text': "核心流程就三步：<code inline>http.createServer(回调)</code.inline> 创建服务器 → 回调里处理请求（读 req.url 判断路径，用 res 返回内容）→ <code inline>server.listen(端口)</code.inline> 启动。之后浏览器访问 <code inline>http://localhost:3000</code> 就能收到响应。这就是「前端发请求、后端回数据」最朴素的样子。"
        },
        {
          'type': "info",
          'title': "express 更省心",
          'text': "真实项目一般不用手搓 http，而是用 <code inline>express</code> 这类框架：路由写法更清爽、中间件丰富。但理解底层的 http.createServer 能帮你明白框架在做什么。"
        },
        {
          'type': "warn",
          'title': "端口占用",
          'text': "如果启动时提示 <code inline>EADDRINUSE</code>，说明 3000 端口被占了。换个端口（比如 3001）就行，或者关掉占用它的程序。这是新手常遇到的小坎。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"http：用 Node 起一个简易服务器\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"http：用 Node 起一个简易服务器\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"http：用 Node 起一个简易服务器\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "http.createServer 创建服务器，listen(端口) 启动",
            "回调参数 req（请求）、res（响应）",
            "req.url 拿路径，res.end 返回内容",
            "浏览器访问 http://localhost:3000 测试，端口占用就换一个"
          ]
        }
      ]
    },
    {
      'id': "js-77",
      'title': "npm 与 package.json",
      'summary': "用 npm 安装第三方包，用 package.json 管理项目依赖和脚本，进入工程化。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "自己造轮子太慢，全世界的开发者把常用功能做成了「包」（package），免费发布到 npm 仓库。用 <code inline>npm install</code> 一行命令就能把包装进你的项目。而 <code inline>package.json</code> 就是这个项目的「说明书 + 清单」：记录项目叫什么、依赖了哪些包、有哪些脚本命令。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "初始化项目",
          'code': "// 在项目文件夹里运行：\n// npm init -y\n\n// 会生成一个 package.json，大概长这样：\n// {\n//   \"name\": \"my-project\",\n//   \"version\": \"1.0.0\",\n//   \"description\": \"\",\n//   \"main\": \"index.js\",\n//   \"scripts\": {\n//     \"start\": \"node index.js\"\n//   }\n// }\n\nconsole.log(\"npm init -y 一键生成 package.json\")"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "安装与使用第三方包",
          'code': "// 安装一个包（比如常用的工具库 lodash）：\n// npm install lodash\n\n// 会在 node_modules 里装好，并在 package.json 里记下依赖\n// {\n//   \"dependencies\": {\n//     \"lodash\": \"^4.17.21\"\n//   }\n// }\n\n// 使用：\n// const _ = require(\"lodash\")\n// console.log(_.chunk([1,2,3,4,5], 2))  // 按 2 个一组分组\n\n// 概念演示\nconst _ = { chunk: (arr, n) => { const r = []; for (let i = 0; i < arr.length; i += n) r.push(arr.slice(i, i + n)); return r } }\nconsole.log(_.chunk([1, 2, 3, 4, 5], 2))  // [[1,2],[3,4],[5]]"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "scripts 脚本与常用命令",
          'code': "// package.json 里的 scripts 可以定义快捷命令：\n// {\n//   \"scripts\": {\n//     \"start\": \"node index.js\",\n//     \"dev\": \"vite\",\n//     \"build\": \"vite build\"\n//   }\n// }\n\n// 然后运行：\n// npm run start\n// npm run dev\n// npm run build\n\n// 其他常用命令：\n// npm install     安装 package.json 里所有依赖\n// npm uninstall 包名  卸载\n// npm list        列出已安装的包\n\nconsole.log(\"npm run 脚本名 执行 package.json 里的命令\")\nconsole.log(\"npm install 恢复全部依赖（别人 clone 你的项目后）\")"
        },
        {
          'type': "warn",
          'title': "node_modules 别提交",
          'text': "安装的包全在 node_modules 文件夹里，特别大。它不会提交到 git（用 .gitignore 忽略），别人拿到你的项目后执行 <code inline>npm install</code> 就能根据 package.json 重新装好。这就是「清单管理依赖」的意义。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"npm 与 package.json\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"npm 与 package.json\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"npm 与 package.json\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "npm 是 Node 的包管理器，npm install 安装第三方包",
            "package.json 记录项目依赖和 scripts 脚本",
            "npm run 脚本名 执行自定义命令",
            "node_modules 不提交 git，用 npm install 恢复"
          ]
        }
      ],
      'templates': [
        {
          'name': "chunk 函数演示",
          'code': "function chunk(arr, size) {\n  const result = []\n  for (let i = 0; i < arr.length; i += size) {\n    result.push(arr.slice(i, i + size))\n  }\n  return result\n}\nconsole.log(chunk([1,2,3,4,5,6,7], 3))"
        }
      ]
    },
    {
      'id': "js-78",
      'title': "前端工程化：打包工具与框架",
      'summary': "认识 Vite、webpack 等构建工具和 React、Vue 两大框架，了解现代前端长什么样。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "真实项目不会用「记事本写一堆 JS 文件」这么原始。现代前端有一套「工程化」流程：用框架组织界面（React/Vue）、用打包工具处理各种资源（Vite/webpack）、用 npm 管理依赖。这一章让你对这些名词有个概念，知道它们各自解决什么问题，为下一步深入学习指路。"
        },
        {
          'type': "code",
          'lang': "html",
          'title': "vite 项目的典型结构",
          'code': "my-app/\n├── index.html        # 入口页面\n├── package.json      # 依赖清单\n├── vite.config.js    # vite 配置\n└── src/\n    ├── main.js       # 入口 JS\n    ├── App.vue       # 组件（Vue）\n    └── style.css     # 全局样式\n\n<!-- index.html 只挂一个入口点 -->\n<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n</head>\n<body>\n  <div id=\"app\"></div>\n  <script type=\"module\" src=\"/src/main.js\"></script>\n</body>\n</html>"
        },
        {
          'type': "p",
          'text': "构建工具（Vite、webpack）干三件事：**打包**（把很多 JS/CSS/图片合并优化成浏览器能高效加载的文件）、**转换**（把新语法、TS、Vue/React 组件编译成浏览器认识的 JS）、**开发服务器**（Vite 开发时提供秒开的热更新）。webpack 是老牌选手，Vite 是新生代（基于 ESM，启动飞快），现在是主流。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "React 与 Vue 一句话示例",
          'code': "// ===== React（函数组件）=====\n// function App() {\n//   const [count, setCount] = useState(0)\n//   return (\n//     <button onClick={() => setCount(count + 1)}>\n//       点了 {count} 次\n//     </button>\n//   )\n// }\n\n// ===== Vue（单文件组件）=====\n// <template>\n//   <button @click=\"count++\">点了 {{ count }} 次</button>\n// </template>\n// <script setup>\n// import { ref } from \"vue\"\n// const count = ref(0)\n// </script>\n\nconsole.log(\"React：组件函数 + useState 管理状态\")\nconsole.log(\"Vue：模板 + 响应式 ref，上手平缓\")\nconsole.log(\"二者都是『数据变了，界面自动更新』\")"
        },
        {
          'type': "table",
          'head': [
            "工具/框架",
            "是什么",
            "一句话"
          ],
          'rows': [
            [
              "Vite",
              "构建工具",
              "新一代打包器，启动快，开发体验好"
            ],
            [
              "webpack",
              "构建工具",
              "老牌打包器，配置灵活但复杂"
            ],
            [
              "React",
              "UI 框架",
              "组件化 + 状态，生态最大"
            ],
            [
              "Vue",
              "UI 框架",
              "模板语法，上手平缓，中文社区友好"
            ],
            [
              "TypeScript",
              "超集语言",
              "给 JS 加类型，大型项目标配"
            ]
          ]
        },
        {
          'type': "info",
          'title': "学习路线建议",
          'text': "先扎实掌握本课程（原生 JS），再用 Vite 搭个项目练手，然后选 React 或 Vue 之一深入。千万别还没学 JS 就扑向框架，地基不牢很容易云里雾里。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"前端工程化：打包工具与框架\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"前端工程化：打包工具与框架\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"前端工程化：打包工具与框架\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "构建工具（Vite/webpack）负责打包、转换、开发服务器",
            "框架（React/Vue）用组件组织界面，数据变了界面自动更新",
            "Vite 是新主流，基于 ESM 启动快",
            "先学好原生 JS 再学框架，地基才稳"
          ]
        }
      ]
    },
    {
      'id': "js-79",
      'title': "综合实战：待办清单 Todo App",
      'summary': "用 HTML + CSS + JS 从零写一个能添加、完成、删除、持久化的待办清单。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "学到这里，咱们把前面的知识串起来，做一个真正完整、可运行的**待办清单（Todo App）**：能添加任务、勾选完成、删除任务，还用 localStorage 记住数据，刷新页面不丢失。这个项目是「前端入门必做项目」，把它吃透，你的 JS 就毕业了一大半。"
        },
        {
          'type': "h",
          'text': "第一步：HTML 结构"
        },
        {
          'type': "code",
          'lang': "html",
          'title': "页面结构",
          'code': "<!DOCTYPE html>\n<html lang=\"zh-CN\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>我的待办清单</title>\n  <style>\n    body { font-family: sans-serif; max-width: 420px; margin: 40px auto; }\n    input { padding: 8px; width: 70%; }\n    button { padding: 8px 14px; cursor: pointer; }\n    ul { list-style: none; padding: 0; }\n    li {\n      display: flex; align-items: center; gap: 10px;\n      padding: 10px; border-bottom: 1px solid #eee;\n    }\n    li.done span { text-decoration: line-through; color: #999; }\n    li .del { margin-left: auto; }\n  </style>\n</head>\n<body>\n  <h1>待办清单</h1>\n  <div>\n    <input id=\"input\" placeholder=\"输入新任务，回车添加\">\n    <button id=\"add\">添加</button>\n  </div>\n  <ul id=\"list\"></ul>\n\n  <script src=\"app.js\"></script>\n</body>\n</html>"
        },
        {
          'type': "h",
          'text': "第二步：CSS 样式（上面已内嵌）"
        },
        {
          'type': "p",
          'text': "上面的 <code inline>style</code> 里已经写好了样式：整体居中、输入框和按钮、列表项的布局，以及完成任务的删除线效果（<code inline>.done span</code>）。CSS 只管「长什么样」，交互逻辑全靠 JS。"
        },
        {
          'type': "h",
          'text': "第三步：JavaScript 逻辑"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "app.js 完整逻辑",
          'code': "const input = document.getElementById(\"input\")\nconst addBtn = document.getElementById(\"add\")\nconst list = document.getElementById(\"list\")\n\n// 数据源：从 localStorage 读，没有就用空数组\nlet todos = JSON.parse(localStorage.getItem(\"todos\") || \"[]\")\n\n// 渲染列表\nfunction render() {\n  list.innerHTML = \"\"\n  todos.forEach((todo, index) => {\n    const li = document.createElement(\"li\")\n    if (todo.done) li.classList.add(\"done\")\n\n    li.innerHTML = `\n      <input type=\"checkbox\" ${todo.done ? \"checked\" : \"\"}>\n      <span>${todo.text}</span>\n      <button class=\"del\">删除</button>\n    `\n\n    // 勾选切换完成\n    li.querySelector(\"input\").addEventListener(\"change\", function () {\n      todos[index].done = this.checked\n      save()\n      render()\n    })\n\n    // 删除\n    li.querySelector(\".del\").addEventListener(\"click\", function () {\n      todos.splice(index, 1)\n      save()\n      render()\n    })\n\n    list.appendChild(li)\n  })\n}\n\n// 保存到 localStorage\nfunction save() {\n  localStorage.setItem(\"todos\", JSON.stringify(todos))\n}\n\n// 添加任务\nfunction addTodo() {\n  const text = input.value.trim()\n  if (text === \"\") return\n  todos.push({ text, done: false })\n  save()\n  input.value = \"\"\n  render()\n}\n\naddBtn.addEventListener(\"click\", addTodo)\ninput.addEventListener(\"keydown\", function (e) {\n  if (e.key === \"Enter\") addTodo()\n})\n\n// 首次渲染\nrender()"
        },
        {
          'type': "p",
          'text': "代码用了咱们学过的一堆知识：<code inline>JSON.parse/stringify</code>（存取 localStorage）、<code inline>forEach</code>（遍历）、<code inline>createElement</code>（造元素）、<code inline>addEventListener</code>（事件）、<code inline>classList</code>（样式切换）、<code inline>splice</code>（删除）、模板字符串（拼 HTML）。你会发现：之前学的每一样都在这里派上了用场。"
        },
        {
          'type': "info",
          'title': "怎么运行",
          'text': "把这个页面的 HTML 保存成 index.html，把 JS 部分保存成 app.js（放在同一目录），双击 index.html 用浏览器打开就能用。新增、勾选、删除、刷新都不丢数据，这就是一个完整的应用了。"
        },
        {
          'type': "warn",
          'title': "把 JS 单独成文件的好处",
          'text': "这里把逻辑放 app.js，是为了练「分离」：结构（HTML）、样式（CSS）、行为（JS）各管各的，这就是前端开发的基本分工。实际项目里还会用框架，但思路完全一样。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"综合实战：待办清单 Todo App\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"综合实战：待办清单 Todo App\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"综合实战：待办清单 Todo App\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Todo App 完整流程：HTML 结构 + CSS 样式 + JS 逻辑",
            "localStorage 持久化：JSON.stringify 存、parse 取",
            "增删改用 forEach + splice + 事件监听实现",
            "结构/样式/行为分离是前端开发的基本分工"
          ]
        }
      ],
      'templates': [
        {
          'name': "Todo 核心逻辑（纯 JS）",
          'code': "let todos = []\nfunction add(text) { todos.push({ text, done: false }) }\nfunction toggle(i) { todos[i].done = !todos[i].done }\nfunction remove(i) { todos.splice(i, 1) }\nadd(\"学 JS\")\nadd(\"写项目\")\ntoggle(0)\nremove(1)\nconsole.log(todos)"
        }
      ]
    },
    {
      'id': "js-80",
      'title': "面试常问 30 题与最终复习",
      'summary': "把整套课程浓缩成 30 道经典面试题，附答案要点，作为毕业前的总复习。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "恭喜你，走到最后一章了！这一章把整套课程浓缩成**面试常问 30 题**，每道题附上「答案要点」。它们既是面试准备清单，也是帮你检查自己有没有真正学会的复习清单。每道题都能答上来，你的 JavaScript 就真的入门了。"
        },
        {
          'type': "list",
          'ordered': true,
          'items': [
            "let、const、var 的区别是什么？——作用域、能否重新赋值、块级 vs 函数级",
            "== 和 === 的区别？——== 会转类型，=== 严格比较，永远用 ===",
            "null 和 undefined 的区别？——主动置空 vs 未赋值",
            "typeof null 的结果？——\"object\"，历史遗留 bug",
            "数组去重有哪几种方法？——new Set、filter+indexOf、reduce",
            "map、filter、reduce 各有什么用？——映射、过滤、聚合",
            "slice 和 splice 的区别？——不改原数组 vs 改原数组",
            "箭头函数和普通函数的区别？——this 不同、更简洁",
            "什么是闭包？举一个例子——内层函数记住外层变量，计数器",
            "什么是事件冒泡？——事件从内向外传播，stopPropagation 阻止",
            "什么是事件委托？有什么用？——父元素监听子元素事件，动态元素生效",
            "Promise 是什么？三种状态——pending/fulfilled/rejected",
            "async/await 是什么？——Promise 的语法糖，await 只能在 async 里",
            "怎么处理异步里的错误？——try/catch 或 .catch",
            "微任务和宏任务的区别？——微任务先执行",
            "this 指向什么时候会变？——谁调用指向谁，箭头函数继承外层",
            "call、apply、bind 的区别？——call 传参逐个，apply 传数组，bind 返回新函数",
            "什么是原型链？——对象沿 __proto__ 向上找属性",
            "class 里 super 的作用？——调用父类构造和方法",
            "localStorage 和 sessionStorage 的区别？——持久 vs 会话",
            "防抖和节流的区别？——停稳再干 vs 固定频率干",
            "深拷贝和浅拷贝？——浅拷贝只复制第一层，JSON 方法可做简单深拷贝",
            "同步和异步的区别？事件循环是什么？——同步先跑完，再跑异步",
            "怎么判断一个变量是数组？——Array.isArray",
            "NaN 怎么判断？——Number.isNaN",
            "字符串拼接有哪几种方式？——+、模板字符串",
            "JSON.stringify 和 parse 干什么用？——序列化、反序列化",
            "fetch 的基本用法？——返回 Promise，.json() 解析",
            "node 里 require 和 module.exports 是什么？——CommonJS 模块系统",
            "Vite/webpack 是干嘛的？React/Vue 是什么？——构建工具、UI 框架"
          ]
        },
        {
          'type': "table",
          'head': [
            "知识块",
            "对应章节",
            "核心掌握"
          ],
          'rows': [
            [
              "基础语法",
              "js-1 ~ js-12",
              "变量、类型、运算符、转换"
            ],
            [
              "流程控制",
              "js-13 ~ js-23",
              "if/switch/循环"
            ],
            [
              "数据结构",
              "js-24 ~ js-28",
              "数组方法 map/filter/reduce"
            ],
            [
              "函数进阶",
              "js-29 ~ js-34",
              "箭头函数、作用域、闭包"
            ],
            [
              "对象",
              "js-35 ~ js-44",
              "this、解构、JSON"
            ],
            [
              "浏览器",
              "js-45 ~ js-54",
              "DOM、事件、表单"
            ],
            [
              "ES6+",
              "js-55 ~ js-58",
              "可选链、模块、Set/Map"
            ],
            [
              "异步",
              "js-59 ~ js-63",
              "Promise、async/await、fetch"
            ],
            [
              "OOP",
              "js-64 ~ js-67",
              "class、继承、原型"
            ],
            [
              "进阶应用",
              "js-68 ~ js-80",
              "存储、Canvas、Node、工程化、实战"
            ]
          ]
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "毕业自测：你能不能写出这段代码",
          'code': "// 综合自测：把 30 题里的知识点揉进一段代码\n// 1. 造一批用户数据\nconst users = [\n  { name: \"小明\", age: 20, city: \"北京\" },\n  { name: \"小红\", age: 17, city: \"上海\" },\n  { name: \"小刚\", age: 25, city: \"北京\" }\n]\n\n// 2. filter + map：找北京的成年人，只要名字\nconst adults = users\n  .filter(u => u.age >= 18)\n  .filter(u => u.city === \"北京\")\n  .map(u => u.name)\nconsole.log(adults)   // [\"小明\",\"小刚\"]\n\n// 3. reduce：平均年龄\nconst avg = (users.reduce((s, u) => s + u.age, 0) / users.length).toFixed(1)\nconsole.log(\"平均年龄：\", avg)\n\n// 4. 模板字符串 + 解构\nconst [first, ...rest] = users\nconsole.log(`第一个用户是${first.name}，还剩${rest.length}个`)\n\n// 5. 深拷贝 + JSON\nconst clone = JSON.parse(JSON.stringify(users))\nconsole.log(clone.length)   // 3"
        },
        {
          'type': "info",
          'title': "接下来学什么",
          'text': "把这 80 章过一遍之后，建议：① 用 Vite 搭个小项目巩固；② 学一个框架（React 或 Vue）；③ 如果做后端，继续学 Node 的 express、数据库；④ 有空把 30 题自己敲一遍，写出来才是真的会。"
        },
        {
          'type': "p",
          'text': "最后送你一句大实话：**编程是「练」出来的，不是「看」出来的**。这 80 章只是给你铺好了路，真正的成长在于你照着示例自己敲、自己改、自己造 bug 再自己修。动手越多，理解越深。祝你写出属于自己的程序！"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"面试常问 30 题与最终复习\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"面试常问 30 题与最终复习\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"面试常问 30 题与最终复习\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "30 道面试题覆盖基础、函数、对象、异步、工程化五大块",
            "每道题能讲出「是什么 + 为什么 + 怎么用」才算会",
            "综合自测：filter/map/reduce/解构/JSON 一把梭",
            "下一步：Vite 建项目、学框架、多写多练"
          ]
        }
      ],
      'templates': [
        {
          'name': "毕业自测代码",
          'code': "const users = [\n  { name: \"小明\", age: 20, city: \"北京\" },\n  { name: \"小红\", age: 17, city: \"上海\" },\n  { name: \"小刚\", age: 25, city: \"北京\" }\n]\nconst adults = users\n  .filter(u => u.age >= 18)\n  .filter(u => u.city === \"北京\")\n  .map(u => u.name)\nconsole.log(\"北京成年人：\", adults)\nconst avg = (users.reduce((s, u) => s + u.age, 0) / users.length).toFixed(1)\nconsole.log(\"平均年龄：\", avg)"
        }
      ]
    }
  ]
});

