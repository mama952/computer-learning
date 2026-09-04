/* ============================================================
   计算机知识库 · 数据：Rust 完整课程（80 章，从下载安装到进阶）
   ============================================================ */
window.LANGUAGE_EXTRA = window.LANGUAGE_EXTRA || [];
window.LANGUAGE_EXTRA.push({
  'id': "rust",
  'name': "Rust",
  'icon': "Rs",
  'tagline': "最受推崇的安全系统语言，无垃圾回收也内存安全。",
  'intro': "这是一套从零开始的 Rust 完整课程，共 80 章。第 1 章教你下载安装工具链，之后每一章都用大白话讲透一个核心概念，配可运行的示例代码和编辑器模板。你会从变量、函数一路学到所有权、借用、生命周期、trait、闭包、迭代器、并发与智能指针，再通过多个实战项目巩固，最后用三章高频面试题检验水平。学完这套课程，你将具备用 Rust 写系统工具、命令行程序与 WebAssembly 的扎实基础。",
  'meta': {
    "难度": "从零到进阶",
    "章节": "80 章",
    "场景": "系统/工具/区块链/WASM"
  },
  'lessons': [
    {
      'id': "rs-1",
      'title': "下载与安装 Rust（零基础第一步）",
      'summary': "到官网免费下载 rustup，一条命令装好工具链，验证 rustc --version。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "学习 Rust 的第一步，是把它装到你的电脑上。Rust 官方提供完全免费的工具链安装器 rustup，支持 Windows、macOS、Linux 三大系统。装上之后你会得到三个核心工具：rustc（编译器）、cargo（构建与包管理）、rustup（工具链管理器）。"
        },
        {
          'type': "h",
          'text': "第一步：打开官网下载页"
        },
        {
          'type': "list",
          'items': [
            "打开 Rust 官网安装页：<a href='https://www.rust-lang.org/tools/install' target='_blank' rel='noopener'>https://www.rust-lang.org/tools/install</a>（完全免费）",
            "页面会根据你的系统自动显示对应的安装方式",
            "Windows 用户下载 rustup-init.exe；macOS/Linux 用户用下面的 curl 命令"
          ]
        },
        {
          'type': "h",
          'text': "第二步：安装 rustup"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "macOS / Linux 一条命令安装",
          'code': "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh"
        },
        {
          'type': "p",
          'text': "Windows 用户双击下载好的 rustup-init.exe，一路回车选择默认安装即可。安装完成后 rustup 会提示把 cargo 的 bin 目录加进 PATH，通常新开的终端会自动生效。"
        },
        {
          'type': "warn",
          'title': "Windows 新手第一大坑",
          'text': "Windows 上装 Rust 需要 **MSVC 构建工具（Build Tools for Visual Studio）**。如果编译时报错找不到 link.exe，说明没装。到微软官网免费下载 Build Tools for Visual Studio，安装时勾选『使用 C++ 的桌面开发』工作负载即可。"
        },
        {
          'type': "h",
          'text': "第三步：验证安装"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "验证安装",
          'code': "rustc --version\ncargo --version\nrustup show"
        },
        {
          'type': "p",
          'text': "打开终端输入 <code.inline>rustc --version</code.inline>，看到类似 <code.inline>rustc 1.8x.x</code.inline> 的版本号就装好了。注意要**新开一个终端窗口**，因为 PATH 是安装后才更新的。"
        },
        {
          'type': "tip",
          'title': "顺手装个好编辑器",
          'text': "推荐 VS Code（免费）：<a href='https://code.visualstudio.com' target='_blank' rel='noopener'>code.visualstudio.com</a>，再装 rust-analyzer 扩展。写代码时会有自动补全和实时错误提示，学 Rust 事半功倍。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"下载与安装 Rust（零基础第一步）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"下载与安装 Rust（零基础第一步）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"下载与安装 Rust（零基础第一步）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "官网安装页 rust-lang.org/tools/install 完全免费",
            "rustup 是官方工具链安装器，一条命令装好",
            "Windows 需额外装 MSVC 构建工具，否则 link.exe 报错",
            "rustc --version 验证安装成功",
            "推荐 VS Code + rust-analyzer"
          ]
        }
      ],
      'templates': [
        {
          'name': "验证环境",
          'code': "fn main() {\n    println!(\"Hello, Rust!\");\n}"
        }
      ]
    },
    {
      'id': "rs-2",
      'title': "Rust 的特点与第一个 Hello World",
      'summary': "认识 Rust 的内存安全与无 GC 哲学，用 rustc 手动编译第一个程序。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "Rust 是一门系统级编程语言，最大卖点是**内存安全**：不需要垃圾回收器（GC），却能在编译期就杜绝空指针、悬垂指针、数据竞争等内存错误。很多其他语言在运行时才崩溃的 Bug，Rust 在编译阶段就拦住了。"
        },
        {
          'type': "list",
          'items': [
            "性能：接近 C/C++，没有运行时开销",
            "内存安全：编译期检查所有权与借用，无需 GC",
            "并发安全：数据竞争在编译期被阻止",
            "生态：Cargo 统一管理依赖、构建、发布",
            "适用：系统软件、命令行工具、WebAssembly、嵌入式"
          ]
        },
        {
          'type': "h",
          'text': "第一个程序：Hello World"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "hello.rs",
          'code': "fn main() {\n    println!(\"Hello, world!\");\n}"
        },
        {
          'type': "p",
          'text': "用编辑器把上面代码保存为 <code.inline>hello.rs</code.inline>，注意后缀是 .rs。然后打开终端，进入文件所在目录，用 rustc 直接编译运行："
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "编译运行",
          'code': "rustc hello.rs\n./hello        # Linux/macOS\nhello.exe      # Windows"
        },
        {
          'type': "p",
          'text': "<code.inline>fn main()</code.inline> 是程序入口，程序从这里开始执行。<code.inline>println!</code.inline> 后面带感叹号，说明它是一个**宏**（macro），不是普通函数，这是 Rust 的语法特点，第 55 章会专门讲宏。"
        },
        {
          'type': "warn",
          'title': "分号问题",
          'text': "println! 这一行以分号结尾，表示它是一个语句。如果删掉分号也能编译通过（因为它是函数里最后一个表达式），但建议平时都加分号，养成习惯避免踩坑。"
        },
        {
          'type': "h",
          'text': "手动 rustc vs Cargo"
        },
        {
          'type': "p",
          'text': "rustc 适合编译单个文件的小程序，但真实项目要管理依赖、多文件、配置，这时候用 Cargo（下一章）才是正道。本章只是让你看到编译的最底层原理。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Rust 的特点与第一个 Hello World\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Rust 的特点与第一个 Hello World\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Rust 的特点与第一个 Hello World\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Rust 内存安全靠编译期检查，无 GC 也能防内存错误",
            "fn main() 是程序入口，println! 是宏不是函数",
            ".rs 后缀，rustc 文件名 直接编译",
            "rustc 适合单文件，复杂项目用 Cargo"
          ]
        }
      ],
      'templates': [
        {
          'name': "Hello World",
          'code': "fn main() {\n    println!(\"Hello, world!\");\n}"
        },
        {
          'name': "打印多行",
          'code': "fn main() {\n    println!(\"第一行\");\n    println!(\"第二行\");\n}"
        }
      ]
    },
    {
      'id': "rs-3",
      'title': "Cargo：项目与依赖管理工具",
      'summary': "cargo new 创建项目，cargo build/run 构建运行，理解 Cargo.toml。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "Cargo 是 Rust 官方的构建系统和包管理器，类似 Python 的 pip 加构建工具，或者 JavaScript 的 npm。真实项目几乎都用 Cargo，而不是手动 rustc。"
        },
        {
          'type': "h",
          'text': "创建新项目"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "创建 hello 项目",
          'code': "cargo new hello\ncd hello\nls"
        },
        {
          'type': "list",
          'items': [
            "cargo new hello 会创建名为 hello 的目录",
            "里面自动生成 src/main.rs（源码）和 Cargo.toml（配置文件）",
            "还有 .gitignore（自动初始化 git 仓库）"
          ]
        },
        {
          'type': "h",
          'text': "构建与运行"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "构建并运行",
          'code': "cargo build\ncargo run"
        },
        {
          'type': "p",
          'text': "<code.inline>cargo run</code.inline> 会自动构建再运行程序。<code.inline>cargo build</code.inline> 只编译不运行，产物放在 <code.inline>target/debug/</code.inline> 目录里。"
        },
        {
          'type': "h",
          'text': "认识 Cargo.toml"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "Cargo.toml 内容",
          'code': "[package]\nname = \"hello\"\nversion = \"0.1.0\"\nedition = \"2021\"\n\n[dependencies]"
        },
        {
          'type': "p",
          'text': "<code.inline>[package]</code.inline> 声明项目元信息（名称、版本、Rust 版本 edition）。<code.inline>[dependencies]</code.inline> 声明外部依赖，比如写 <code.inline>serde = \"1\"</code.inline> 就表示引入 serde 库。"
        },
        {
          'type': "tip",
          'title': "版本控制",
          'text': "cargo new 默认初始化 git 仓库。如果不想用 git，可用 <code.inline>cargo new hello --vcs none</code.inline>。"
        },
        {
          'type': "info",
          'title': "debug 与 release",
          'text': "cargo build 默认是 debug 模式（编译快、运行慢）。要发布时用 <code.inline>cargo build --release</code.inline>，会做全面优化，运行快很多。第 71 章会细讲。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Cargo：项目与依赖管理工具\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Cargo：项目与依赖管理工具\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Cargo：项目与依赖管理工具\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "cargo new 创建项目，cargo run 构建并运行",
            "Cargo.toml 是项目配置，声明依赖",
            "cargo build 产物在 target/ 目录",
            "release 模式用 cargo build --release"
          ]
        }
      ],
      'templates': [
        {
          'name': "Cargo 项目入口",
          'code': "fn main() {\n    println!(\"Hello, Cargo!\");\n}"
        }
      ]
    },
    {
      'id': "rs-4",
      'title': "变量与不可变性（let 与 mut）",
      'summary': "Rust 变量默认不可变，用 mut 声明可变变量，理解不可变的好处。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "Rust 里用 <code.inline>let</code.inline> 声明变量。和其他语言最大的不同是：**Rust 变量默认不可变**（immutable）。一旦绑定了一个值就不能再改。要可变，必须显式加 <code.inline>mut</code.inline>。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "默认不可变",
          'code': "fn main() {\n    let x = 5;\n    println!(\"x = {}\", x);\n    // x = 6;  // 错误：不能给不可变变量赋两次值\n}"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "可变变量",
          'code': "fn main() {\n    let mut x = 5;\n    println!(\"x = {}\", x);\n    x = 6;   // 加了 mut 才能重新赋值\n    println!(\"x = {}\", x);\n}"
        },
        {
          'type': "warn",
          'title': "最容易碰到的编译错误",
          'text': "如果你写了 <code.inline>let x = 5;</code.inline> 又写 <code.inline>x = 6;</code.inline>，编译器会报 <code.inline>cannot assign twice to immutable variable</code.inline>。别慌，看提示：把 let 改成 <code.inline>let mut</code.inline> 就解决了。这个报错以后你会经常见到。"
        },
        {
          'type': "h",
          'text': "为什么默认不可变？"
        },
        {
          'type': "list",
          'items': [
            "不可变让代码更容易推理：一个值不会悄悄改变",
            "避免一类很难查的 Bug（值被意外修改）",
            "编译器能做更多优化，提升性能",
            "想要可变时显式写 mut，意图更清晰"
          ]
        },
        {
          'type': "p",
          'text': "类型可以由编译器自动推断。比如 <code.inline>let x = 5</code.inline>，编译器知道 x 是 i32。但有时需要显式标注类型，用冒号：<code.inline>let x: i32 = 5;</code.inline>。"
        },
        {
          'type': "info",
          'title': "术语",
          'text': "Rust 里把 let 叫「绑定」（binding）而不是「声明」。变量是「绑定到值上的名字」，这个术语后面讲所有权时很重要。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"变量与不可变性（let 与 mut）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"变量与不可变性（let 与 mut）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"变量与不可变性（let 与 mut）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "let 声明变量，默认不可变",
            "加 mut 才能重新赋值",
            "编译器自动推断类型，也可用冒号标注",
            "不可变是默认选择，更安全更易推理"
          ]
        }
      ],
      'templates': [
        {
          'name': "不可变变量",
          'code': "fn main() {\n    let name = \"Rust\";\n    println!(\"我在学 {}！\", name);\n}"
        },
        {
          'name': "可变计数",
          'code': "fn main() {\n    let mut count = 0;\n    count = count + 1;\n    count += 2;\n    println!(\"count = {}\", count);\n}"
        }
      ]
    },
    {
      'id': "rs-5",
      'title': "常量 const 与变量遮蔽 Shadowing",
      'summary': "const 常量必须在编译期确定，let 同名变量可以遮蔽旧值。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "常量用 <code.inline>const</code.inline> 声明，值必须在编译期就能确定，并且**必须显式标注类型**。常量一旦定义永远不可变，不需要 mut。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "常量",
          'code': "const MAX_POINTS: u32 = 100_000;\nconst GOLDEN_RATIO: f64 = 1.618;\n\nfn main() {\n    println!(\"最大值: {}\", MAX_POINTS);\n}"
        },
        {
          'type': "list",
          'items': [
            "常量用 const 声明，必须标注类型",
            "命名规范：全大写 + 下划线（MAX_POINTS）",
            "编译期确定，不占运行时内存",
            "数字里可以用下划线分隔提高可读性（100_000）"
          ]
        },
        {
          'type': "h",
          'text': "遮蔽 Shadowing"
        },
        {
          'type': "p",
          'text': "Rust 允许用同一个名字再次 <code.inline>let</code.inline>，新变量会「遮蔽」旧的。这不是重新赋值，而是创建了一个全新的变量。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "遮蔽示例",
          'code': "fn main() {\n    let x = 5;\n    let x = x + 1;   // 新的 x 遮蔽旧的 x，值为 6\n    let x = x * 2;   // 再遮蔽一次，值为 12\n    println!(\"x = {}\", x);  // 12\n}"
        },
        {
          'type': "p",
          'text': "遮蔽和 mut 的区别在于：遮蔽是**创建新变量**（可以改变类型），mut 是**修改同一个变量**（类型不能变）。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "遮蔽可以改变类型",
          'code': "fn main() {\n    let spaces = \"   \";          // &str 类型\n    let spaces = spaces.len();   // 换成 usize 类型\n    println!(\"空格数: {}\", spaces);\n}"
        },
        {
          'type': "warn",
          'title': "新手困惑点",
          'text': "遮蔽不是删掉旧变量，只是让旧名字「暂时失效」。想改同一个变量的值用 mut，想换个新变量（哪怕同名）用 let 遮蔽。二者概念不同，别混。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"常量 const 与变量遮蔽 Shadowing\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"常量 const 与变量遮蔽 Shadowing\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"常量 const 与变量遮蔽 Shadowing\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "const 编译期常量，必须标类型，全大写命名",
            "let 同名声明叫遮蔽，创建新变量",
            "遮蔽可以换类型，mut 不能",
            "const 不需要 mut，因为永远不可变"
          ]
        }
      ],
      'templates': [
        {
          'name': "常量与遮蔽",
          'code': "const TAX: f64 = 0.08;\n\nfn main() {\n    let price = 100.0;\n    let total = price * (1.0 + TAX);\n    println!(\"含税价: {}\", total);\n}"
        }
      ]
    },
    {
      'id': "rs-6",
      'title': "标量类型：整数、浮点、布尔、字符",
      'summary': "四种标量类型逐个讲透：整数 i32/u32、浮点 f64、布尔 bool、字符 char。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "Rust 的标量类型有四种：整数、浮点数、布尔、字符。它们是语言内建的最基本数据类型。"
        },
        {
          'type': "h",
          'text': "整数类型"
        },
        {
          'type': "p",
          'text': "有符号（i 开头，可正可负）和无符号（u 开头，只非负）两种。默认是 <code.inline>i32</code.inline>。"
        },
        {
          'type': "table",
          'head': [
            "类型",
            "长度",
            "范围"
          ],
          'rows': [
            [
              "i8 / u8",
              "8 位",
              "-128~127 / 0~255"
            ],
            [
              "i16 / u16",
              "16 位",
              "±3 万级"
            ],
            [
              "i32 / u32",
              "32 位",
              "±21 亿级（最常用）"
            ],
            [
              "i64 / u64",
              "64 位",
              "极大范围"
            ],
            [
              "i128 / u128",
              "128 位",
              "超大整数"
            ],
            [
              "isize / usize",
              "跟随指针",
              "与系统位数相同"
            ]
          ]
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "整数示例",
          'code': "fn main() {\n    let a: i32 = -100;           // 有符号\n    let b: u32 = 100;            // 无符号\n    let c = 100_000;             // 默认 i32，下划线分隔\n    let d: i64 = 9_000_000_000;  // 大数用 i64\n    println!(\"{} {} {} {}\", a, b, c, d);\n}"
        },
        {
          'type': "h",
          'text': "浮点类型"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "浮点",
          'code': "fn main() {\n    let x = 2.5;        // 默认 f64（双精度）\n    let y: f32 = 1.5;   // f32 单精度\n    println!(\"x = {}, y = {}\", x, y);\n    println!(\"加法: {}\", x + y);\n}"
        },
        {
          'type': "h",
          'text': "布尔与字符"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "bool 与 char",
          'code': "fn main() {\n    let is_ok = true;     // bool\n    let is_no: bool = false;\n    println!(\"{} {}\", is_ok, is_no);\n\n    let c = 'A';            // char 用单引号\n    let heart = '❤';\n    println!(\"{} {}\", c, heart);\n}"
        },
        {
          'type': "info",
          'title': "单引号 vs 双引号",
          'text': "char 是 Unicode 字符，用单引号 <code.inline>'A'</code.inline>；字符串用双引号 <code.inline>\"A\"</code.inline>。两者类型不同，一个是 char 一个是 &str。"
        },
        {
          'type': "warn",
          'title': "整数溢出",
          'text': "整数溢出在 debug 模式会 panic（程序崩溃），release 模式会回绕。比如 u8 最大值 255 加 1 就会出问题。多数时候选 i32 就够用。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"标量类型：整数、浮点、布尔、字符\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"标量类型：整数、浮点、布尔、字符\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"标量类型：整数、浮点、布尔、字符\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "整数分 i 有符号 / u 无符号，默认 i32",
            "浮点默认 f64，精度更高",
            "bool 只有 true/false，char 是 Unicode 字符用单引号",
            "char 单引号，字符串双引号",
            "数字可用 _ 分隔提高可读性"
          ]
        }
      ],
      'templates': [
        {
          'name': "标量全家桶",
          'code': "fn main() {\n    let int_val: i32 = 42;\n    let float_val: f64 = 3.14;\n    let bool_val: bool = true;\n    let char_val: char = 'R';\n    println!(\"{} {} {} {}\", int_val, float_val, bool_val, char_val);\n}"
        }
      ]
    },
    {
      'id': "rs-7",
      'title': "复合类型：元组 tuple 与数组 array",
      'summary': "元组可装不同类型，数组只能装同类型固定长度，索引从 0 开始。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "标量类型只能存一个值。要一次存多个值，需要复合类型。这一章学两种：元组 tuple 和数组 array。"
        },
        {
          'type': "h",
          'text': "元组 tuple"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "元组",
          'code': "fn main() {\n    let tup: (i32, f64, char) = (500, 6.4, 'x');\n    // 解构：把元组拆开\n    let (a, b, c) = tup;\n    println!(\"a={} b={} c={}\", a, b, c);\n    // 用点号访问某个元素\n    println!(\"tup.0 = {}\", tup.0);\n}"
        },
        {
          'type': "list",
          'items': [
            "元组长度固定，声明后不能增减",
            "每个元素可以是不同类型",
            "用小括号 () 包裹，逗号分隔",
            "访问用 .0 .1 .2 或解构"
          ]
        },
        {
          'type': "h",
          'text': "数组 array"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "数组",
          'code': "fn main() {\n    let arr = [1, 2, 3, 4, 5];              // 同类型，长度固定\n    let arr2: [i32; 5] = [1, 2, 3, 4, 5];   // 显式类型：5 个 i32\n    let arr3 = [0; 10];                     // 10 个 0\n    println!(\"第一个元素: {}\", arr[0]);\n    println!(\"数组长度: {}\", arr.len());\n}"
        },
        {
          'type': "h",
          'text': "元组 vs 数组"
        },
        {
          'type': "table",
          'head': [
            "对比项",
            "tuple 元组",
            "array 数组"
          ],
          'rows': [
            [
              "元素类型",
              "可以不同",
              "必须相同"
            ],
            [
              "长度",
              "固定",
              "固定"
            ],
            [
              "写法",
              "( ... )",
              "[ ... ]"
            ],
            [
              "访问",
              "tup.0",
              "arr[0]"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "越界会崩溃",
          'text': "数组索引越界（比如 <code.inline>arr[10]</code.inline>）在运行时会 panic 崩溃。Rust 会做边界检查，这点比 C 安全，但你要注意索引别超过 <code.inline>arr.len() - 1</code.inline>。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"复合类型：元组 tuple 与数组 array\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"复合类型：元组 tuple 与数组 array\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"复合类型：元组 tuple 与数组 array\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "tuple 可装不同类型，用 .0 访问",
            "array 只装同类型，固定长度，[] 访问",
            "数组类型写法 [T; N]：类型 + 长度",
            "[0; 10] 生成 10 个 0 的数组",
            "越界访问会 panic 崩溃"
          ]
        }
      ],
      'templates': [
        {
          'name': "元组点坐标",
          'code': "fn main() {\n    let point = (3.5, 2.0);\n    println!(\"x = {}, y = {}\", point.0, point.1);\n    let (x, y) = point;\n    println!(\"解构后 x = {}, y = {}\", x, y);\n}"
        },
        {
          'name': "数组求和",
          'code': "fn main() {\n    let arr = [10, 20, 30, 40];\n    let mut sum = 0;\n    for n in arr {\n        sum += n;\n    }\n    println!(\"和 = {}\", sum);\n}"
        }
      ]
    },
    {
      'id': "rs-8",
      'title': "函数：定义、参数与返回值",
      'summary': "fn 定义函数，参数要标类型，用 -> 声明返回类型。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "函数把一段逻辑打包，起个名字，随时调用。Rust 用 <code.inline>fn</code.inline> 定义函数，函数名用小写蛇形命名（snake_case）。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "基本函数",
          'code': "fn greet() {\n    println!(\"你好，世界！\");\n}\n\nfn main() {\n    greet();   // 调用\n    greet();\n}"
        },
        {
          'type': "h",
          'text': "带参数与返回值"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "参数与返回值",
          'code': "fn add(a: i32, b: i32) -> i32 {\n    a + b    // 注意：没有分号！这是表达式，作为返回值\n}\n\nfn main() {\n    let sum = add(3, 4);\n    println!(\"3 + 4 = {}\", sum);\n}"
        },
        {
          'type': "list",
          'items': [
            "每个参数都要标注类型，如 a: i32",
            "返回值类型用 -> 声明，如 -> i32",
            "函数体最后一个表达式作为返回值（不带分号）",
            "无返回值可写 () 或不写 -> 类型"
          ]
        },
        {
          'type': "h",
          'text': "return 关键字"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "return 提前返回",
          'code': "fn abs(x: i32) -> i32 {\n    if x < 0 {\n        return -x;\n    }\n    x   // 最后一个表达式作为返回值\n}\n\nfn main() {\n    println!(\"{}\", abs(-5));\n    println!(\"{}\", abs(3));\n}"
        },
        {
          'type': "warn",
          'title': "最常见错误：多了分号",
          'text': "新手常把最后一行写成 <code.inline>a + b;</code.inline>（加了分号），这会让它变成「语句」，返回类型不匹配导致编译错误。记住：**返回值的表达式不要加分号**。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"函数：定义、参数与返回值\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"函数：定义、参数与返回值\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"函数：定义、参数与返回值\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "fn 定义函数，参数标类型",
            "-> 类型 声明返回值",
            "最后一个表达式不带分号即返回值",
            "return 用于提前返回",
            "函数名用 snake_case"
          ]
        }
      ],
      'templates': [
        {
          'name': "问候函数",
          'code': "fn greet(name: &str) {\n    println!(\"你好，{}！\", name);\n}\n\nfn main() {\n    greet(\"小明\");\n    greet(\"小红\");\n}"
        },
        {
          'name': "乘法函数",
          'code': "fn multiply(a: i32, b: i32) -> i32 {\n    a * b\n}\n\nfn main() {\n    println!(\"{}\", multiply(6, 7));\n}"
        }
      ]
    },
    {
      'id': "rs-9",
      'title': "语句与表达式：Rust 的函数式基因",
      'summary': "语句执行不返回值，表达式求值产生值，if 也是表达式。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "Rust 是**表达式语言**（expression-based）。大多数代码块都是表达式，会求值产生一个值。理解语句（statement）和表达式（expression）的区别，是看懂 Rust 代码的关键。"
        },
        {
          'type': "list",
          'items': [
            "语句：执行操作，不返回值，以分号结尾",
            "表达式：求值产生一个值，不带分号",
            "let x = 5; 是语句",
            "x + 1 是表达式，求值为某个数"
          ]
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "语句 vs 表达式",
          'code': "fn main() {\n    let y = {           // 花括号是一个块表达式\n        let x = 3;      // 这是语句\n        x + 1           // 这是表达式，块的值 = 4\n    };\n    println!(\"y = {}\", y);  // 4\n}"
        },
        {
          'type': "h",
          'text': "if 也是表达式"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "if 表达式",
          'code': "fn main() {\n    let age = 18;\n    let status = if age >= 18 {\n        \"成年\"      // 两个分支都是 &str\n    } else {\n        \"未成年\"\n    };\n    println!(\"状态：{}\", status);\n}"
        },
        {
          'type': "p",
          'text': "注意 <code.inline>let status = if ...</code.inline>：if 的每个分支都返回一个值，赋给 status。这是 Rust 很优雅的地方——不需要先声明再赋值。"
        },
        {
          'type': "warn",
          'title': "if 表达式要类型一致",
          'text': "用 if 当表达式时，所有分支必须返回**相同类型**。比如一个分支返回 <code.inline>5</code.inline>，另一个返回 <code.inline>\"hi\"</code.inline>，编译器会报类型不匹配错误。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "表达式风格 vs 语句风格",
          'code': "fn main() {\n    // 表达式风格\n    let a = 10;\n    let b = 20;\n    let max = if a > b { a } else { b };\n\n    // 语句风格（等价的传统写法）\n    let mut max2;\n    if a > b { max2 = a; } else { max2 = b; }\n\n    println!(\"{} {}\", max, max2);\n}"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"语句与表达式：Rust 的函数式基因\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"语句与表达式：Rust 的函数式基因\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"语句与表达式：Rust 的函数式基因\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "语句以分号结尾不返回值，表达式求值产生值",
            "块 { } 是一个表达式，最后一行是它的值",
            "if 可以作为表达式赋给变量",
            "表达式各分支类型必须一致"
          ]
        }
      ],
      'templates': [
        {
          'name': "块表达式",
          'code': "fn main() {\n    let result = {\n        let a = 5;\n        let b = 6;\n        a * b\n    };\n    println!(\"5 * 6 = {}\", result);\n}"
        }
      ]
    },
    {
      'id': "rs-10",
      'title': "注释：//、/// 与 //! 的三种用法",
      'summary': "普通注释 // 说明代码，文档注释 /// 生成 API 文档。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "注释是写给人类看的说明文字，编译器会忽略它们。Rust 有三种常用注释形式：普通注释 <code.inline>//</code.inline>、文档注释 <code.inline>///</code.inline> 和 <code.inline>//!</code.inline>。"
        },
        {
          'type': "h",
          'text': "普通注释 //"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "单行与行尾注释",
          'code': "fn main() {\n    // 这是单行注释\n    let x = 5;  // 行尾注释\n    // 另一行注释\n    println!(\"x = {}\", x);\n}"
        },
        {
          'type': "h",
          'text': "文档注释 /// 与 //!"
        },
        {
          'type': "p",
          'text': "<code.inline>///</code.inline> 写在函数、结构体等定义**上方**，会成为该条目的文档；<code.inline>//!</code.inline> 写在文件或模块**开头**，说明整个文件/模块。<code.inline>cargo doc</code.inline> 会根据它们生成 HTML 文档。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "文档注释",
          'code': "/// 计算两个整数的和\n///\n/// # 示例\n/// ```\n/// let s = add(1, 2);\n/// assert_eq!(s, 3);\n/// ```\nfn add(a: i32, b: i32) -> i32 {\n    a + b\n}\n\nfn main() {\n    let s = add(1, 2);\n    println!(\"sum = {}\", s);\n}"
        },
        {
          'type': "tip",
          'title': "生成文档",
          'text': "用 <code.inline>cargo doc --open</code.inline> 可以在浏览器里打开自动生成的文档，看到你的 /// 注释被渲染成漂亮的 API 文档。"
        },
        {
          'type': "warn",
          'title': "文档里的代码会被检查",
          'text': "文档注释里的代码块会被 <code.inline>cargo test</code.inline> 当作「文档测试」运行（第 54 章）。如果写错会报错，所以文档注释里的代码也要保证正确。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "模块级注释 //!",
          'code': "//! 这个文件演示了 Rust 的注释用法\n//! 模块级注释用 //! 写在文件开头\n\n/// 这个函数返回两数之和\nfn add(a: i32, b: i32) -> i32 { a + b }\n\nfn main() {\n    println!(\"{}\", add(2, 3));\n}"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"注释：//、/// 与 //! 的三种用法\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"注释：//、/// 与 //! 的三种用法\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"注释：//、/// 与 //! 的三种用法\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "// 单行注释，编译器忽略",
            "/// 文档注释，写在条目上方，生成 API 文档",
            "//! 模块级文档注释，写在文件/模块开头",
            "cargo doc 生成文档，cargo test 会跑文档里的示例"
          ]
        }
      ],
      'templates': [
        {
          'name': "带注释的程序",
          'code': "//! 我的计算器模块说明\n\n/// 加法函数\nfn add(a: i32, b: i32) -> i32 {\n    a + b  // 直接返回结果\n}\n\nfn main() {\n    println!(\"{}\", add(10, 20));\n}"
        }
      ]
    },
    {
      'id': "rs-11",
      'title': "所有权 ownership：Rust 的灵魂（核心）",
      'summary': "每个值只有一个所有者，作用域结束自动释放内存，移动转移所有权。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "所有权（ownership）是 Rust 最核心、也最与众不同的概念。它解决「内存什么时候释放」的问题——不需要 GC，靠一套规则在编译期保证内存安全。**这一章值得反复读。**"
        },
        {
          'type': "h",
          'text': "三大规则"
        },
        {
          'type': "list",
          'items': [
            "每个值都有一个所有者（owner），即声明它的变量",
            "同一时刻，一个值只能有一个所有者",
            "所有者离开作用域时，值会被自动释放（drop）"
          ]
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "作用域与释放",
          'code': "fn main() {\n    {                    // s 在这里才有效\n        let s = String::from(\"hello\");\n        println!(\"{}\", s);\n    }                    // 这里 s 离开作用域，内存被自动释放\n    // println!(\"{}\", s); // 错误：s 已经不存在了\n}"
        },
        {
          'type': "h",
          'text': "移动 Move（不是拷贝）"
        },
        {
          'type': "p",
          'text': "整数的赋值是拷贝，但 <code.inline>String</code.inline> 这类堆数据不是拷贝，而是**移动**：赋值后旧变量失效，所有权转移给了新变量。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "移动示例",
          'code': "fn main() {\n    let s1 = String::from(\"hello\");\n    let s2 = s1;               // 所有权移动给 s2\n    println!(\"{}\", s2);        // 正常\n    // println!(\"{}\", s1);     // 错误：s1 已被移动，不能再用\n}"
        },
        {
          'type': "warn",
          'title': "为什么不让两个变量指向同一块内存？",
          'text': "如果 s1 和 s2 都指向同一块堆内存，作用域结束时两者都会尝试释放它，造成「双重释放」内存错误。Rust 用移动规则从根上避免：旧变量作废，只有一个所有者负责释放。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "拷贝 vs 移动",
          'code': "fn main() {\n    let x = 5;         // i32 实现了 Copy\n    let y = x;         // 这是拷贝，x 仍然有效\n    println!(\"{} {}\", x, y);  // 都能用\n\n    let s = String::from(\"hi\");\n    let t = s;         // 这是移动，s 失效\n    println!(\"{}\", t);\n}"
        },
        {
          'type': "info",
          'title': "怎么判断是拷贝还是移动？",
          'text': "实现了 <code.inline>Copy</code.inline> trait 的类型（整数、浮点、bool、char、元素都是 Copy 的元组等）赋值是拷贝；否则（String、Vec 等堆类型）是移动。第 56 章会讲 Copy。"
        },
        {
          'type': "h",
          'text': "函数传参也会移动"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "函数调用转移所有权",
          'code': "fn take(s: String) {\n    println!(\"拿到: {}\", s);\n} // 这里 s 被释放\n\nfn main() {\n    let s = String::from(\"hello\");\n    take(s);\n    // println!(\"{}\", s); // 错误：所有权已移入函数\n}"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"所有权 ownership：Rust 的灵魂（核心）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"所有权 ownership：Rust 的灵魂（核心）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"所有权 ownership：Rust 的灵魂（核心）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "三大规则：唯一所有者、同时只有一人、离开作用域释放",
            "String 等堆类型赋值是移动不是拷贝",
            "拷贝 vs 移动取决于是否实现 Copy",
            "函数传参会转移所有权",
            "这是所有借用/生命周期的基石"
          ]
        }
      ],
      'templates': [
        {
          'name': "移动演示",
          'code': "fn main() {\n    let s1 = String::from(\"Rust\");\n    let s2 = s1;\n    println!(\"s2 = {}\", s2);\n    // s1 已失效\n}"
        }
      ]
    },
    {
      'id': "rs-12",
      'title': "借用 borrowing：引用 & 不夺走所有权",
      'summary': "用 & 创建引用临时借用，函数借参数而不拿走所有权。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "第 11 章学了「函数传参会把所有权移进去，用完就被释放」。那如果函数只是**看看**这个值，不想销毁它呢？答案是**借用（borrowing）**：用 <code.inline>&</code.inline> 创建引用，只借不拿，所有权还在原变量手里。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "引用示例",
          'code': "fn len(text: &String) -> usize {\n    text.len()\n}\n\nfn main() {\n    let s = String::from(\"hello\");\n    let l = len(&s);     // 借用，不转移所有权\n    println!(\"长度 = {}，s 还能用：{}\", l, s);\n}"
        },
        {
          'type': "p",
          'text': "把 <code.inline>&String</code.inline> 想成「借书证」：你可以读这本书，但书还是主人的，看完要还。函数签名里用 <code.inline>&</code.inline> 表示「借来用一下」。"
        },
        {
          'type': "h",
          'text': "引用不会移动所有权"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "引用 vs 直接传值",
          'code': "fn show(s: &String) {\n    println!(\"{}\", s);\n} // s 是引用，离开作用域不会销毁原值\n\nfn main() {\n    let s = String::from(\"hello\");\n    show(&s);       // 借出去\n    show(&s);       // 还能再借，s 一直活着\n    println!(\"结束，s 还能用：{}\", s);\n}"
        },
        {
          'type': "info",
          'title': "读法",
          'text': "<code.inline>&s</code.inline> 读作「对 s 的引用」或「s 的借用」。引用本身也是值，<code.inline>&String</code.inline> 类型表示「一个指向 String 的引用」。"
        },
        {
          'type': "warn",
          'title': "借用不能修改",
          'text': "引用只是借用，**不能通过 & 修改原值**。想修改需要可变引用 <code.inline>&mut</code.inline>，这是下一章的重点。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"借用 borrowing：引用 & 不夺走所有权\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"借用 borrowing：引用 & 不夺走所有权\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"借用 borrowing：引用 & 不夺走所有权\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "& 创建引用，只借不拿，所有权还在原变量",
            "函数用 &T 参数可以只读不转移所有权",
            "引用离开作用域不会释放原值",
            "借用让你能多次使用同一数据"
          ]
        }
      ],
      'templates': [
        {
          'name': "借用查看",
          'code': "fn describe(s: &String) {\n    println!(\"内容: {}，长度: {}\", s, s.len());\n}\n\nfn main() {\n    let name = String::from(\"Rust编程\");\n    describe(&name);\n    describe(&name);\n}"
        }
      ]
    },
    {
      'id': "rs-13",
      'title': "可变引用 &mut 与引用规则",
      'summary': "&mut 允许修改借用值，但不能同时有别的借用，这是数据竞争防护。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "通过 <code.inline>&mut</code.inline> 可以创建**可变引用**，借来的东西可以修改。但 Rust 对此有严格规则，这是很多新手痛苦的地方，也是防数据竞争的关键。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "可变引用",
          'code': "fn add_one(x: &mut i32) {\n    *x += 1;   // *x 解引用，修改指向的值\n}\n\nfn main() {\n    let mut n = 5;\n    add_one(&mut n);\n    println!(\"n = {}\", n);  // 6\n}"
        },
        {
          'type': "h",
          'text': "两条引用铁律"
        },
        {
          'type': "list",
          'items': [
            "同一时刻，只能有一个可变引用（&mut）",
            "不能同时有可变引用和不可变引用（&）",
            "多个不可变引用（&）可以同时存在"
          ]
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "违反规则会报错",
          'code': "fn main() {\n    let mut s = String::from(\"hello\");\n    let r1 = &s;\n    let r2 = &s;      // 两个不可变引用，可以\n    println!(\"{} {}\", r1, r2);\n\n    // let r3 = &mut s;  // 错误：前面 r1 r2 还在借用\n    // println!(\"{}\", r1); // 错误：r1 在可变借用后不能用了\n}"
        },
        {
          'type': "warn",
          'title': "借用检查器的经典报错",
          'text': "编译错误 <code.inline>cannot borrow `s` as mutable because it is also borrowed as immutable</code.inline> 几乎每个 Rust 新手都见过。它保护你免受**数据竞争**（data race）：一个线程读、另一个线程同时写就会出问题。解法：把可变借用和不可变借用的使用分开。"
        },
        {
          'type': "h",
          'text': "借用的作用域"
        },
        {
          'type': "p",
          'text': "借用有一个作用域：从创建引用的地方到它**最后一次使用**的地方。Rust 的 NLL（Non-Lexical Lifetimes，非词法生命周期）让引用在不再使用后提前「失效」，所以下面的代码是合法的："
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "最后一次使用后可以再借用",
          'code': "fn main() {\n    let mut s = String::from(\"hi\");\n    let r = &s;\n    println!(\"{}\", r);       // r 最后一次使用\n    let m = &mut s;          // 现在可以了\n    m.push_str(\"!!\");\n    println!(\"{}\", m);\n}"
        },
        {
          'type': "h",
          'text': "什么时候用哪种引用？"
        },
        {
          'type': "table",
          'head': [
            "需求",
            "用什么"
          ],
          'rows': [
            [
              "只读数据",
              "&T"
            ],
            [
              "要修改数据",
              "&mut T"
            ],
            [
              "要把所有权交出去",
              "直接传值 T"
            ]
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"可变引用 &mut 与引用规则\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"可变引用 &mut 与引用规则\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"可变引用 &mut 与引用规则\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "&mut 可修改借用的值，用 * 解引用",
            "同一时刻只能有一个 &mut",
            "& 与 &mut 不能同时存在",
            "多个 & 可以共存",
            "借用检查器防数据竞争，报错要看提示改结构"
          ]
        }
      ],
      'templates': [
        {
          'name': "可变引用计数器",
          'code': "fn increment(x: &mut i32) {\n    *x += 1;\n}\n\nfn main() {\n    let mut count = 0;\n    for _ in 0..5 {\n        increment(&mut count);\n    }\n    println!(\"count = {}\", count);\n}"
        }
      ]
    },
    {
      'id': "rs-14",
      'title': "切片 slice：&str 与 &[T]",
      'summary': "取字符串或数组的一段而不复制，&str 是最常用的字符串引用。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "切片（slice）是对集合中**一段连续元素**的引用，不拥有数据，只是「借来一段看」。它没有拷贝，效率高。字符串切片类型是 <code.inline>&str</code.inline>。"
        },
        {
          'type': "h",
          'text': "字符串切片 &str"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "字符串切片",
          'code': "fn main() {\n    let s = String::from(\"hello world\");\n    let hello = &s[0..5];    // 前 5 个字节 \"hello\"\n    let world = &s[6..11];   // 从 6 到 11 \"world\"\n    println!(\"{} {}\", hello, world);\n}"
        },
        {
          'type': "list",
          'items': [
            "[start..end] 取从 start 到 end 之前的范围",
            "[0..5] 等价于 [..5]（从头开始）",
            "[6..11] 等价于 [6..]（到结尾）",
            "切片是引用，不复制数据"
          ]
        },
        {
          'type': "h",
          'text': "数组切片 &[T]"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "数组切片",
          'code': "fn main() {\n    let arr = [1, 2, 3, 4, 5];\n    let part = &arr[1..4];    // [2, 3, 4]\n    println!(\"{:?}\", part);\n    println!(\"前两个: {:?}\", &arr[..2]);\n    println!(\"全部: {:?}\", &arr[..]);\n}"
        },
        {
          'type': "h",
          'text': "&str 与 String 的关系"
        },
        {
          'type': "p",
          'text': "<code.inline>String</code.inline> 拥有数据，<code.inline>&str</code.inline> 只是引用。字符串字面量 <code.inline>\"hi\"</code.inline> 的类型直接就是 <code.inline>&str</code.inline>。函数参数用 <code.inline>&str</code.inline> 比 <code.inline>&String</code.inline> 更灵活，因为两者都能传。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "参数用 &str",
          'code': "fn first_word(s: &str) -> &str {\n    // 找到第一个空格的位置\n    match s.find(' ') {\n        Some(pos) => &s[..pos],\n        None => s,\n    }\n}\n\nfn main() {\n    let s = String::from(\"hello world\");\n    let w = first_word(&s);\n    println!(\"第一个单词: {}\", w);\n}"
        },
        {
          'type': "warn",
          'title': "切片要按字符边界",
          'text': "中文等多字节字符占多个字节，如果切片切到字符中间会 panic。比如对 <code.inline>\"你好世界\"</code.inline> 做 <code.inline>&s[0..3]</code.inline> 可能崩溃（一个汉字占 3 字节）。处理文本尽量别手动切字节，用 chars() 迭代。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"切片 slice：&str 与 &[T]\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"切片 slice：&str 与 &[T]\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"切片 slice：&str 与 &[T]\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "切片是集合一段的引用，不拷贝",
            "字符串切片类型是 &str",
            "[..5] [6..] [..] 是范围简写",
            "函数参数优先用 &str 更灵活",
            "多字节字符别按字节切，会 panic"
          ]
        }
      ],
      'templates': [
        {
          'name': "取第一个单词",
          'code': "fn main() {\n    let s = \"hello world\";\n    let first = &s[..5];\n    println!(\"{}\", first);\n}"
        }
      ]
    },
    {
      'id': "rs-15",
      'title': "结构体 struct：把数据打包",
      'summary': "struct 定义自定义类型，字段打包在一起，实例化与访问字段。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "结构体（struct）让你把相关的数据打包成一个自定义类型。比如用户有名字、年龄、邮箱，就可以定义一个 User 结构体。"
        },
        {
          'type': "h",
          'text': "定义与实例化"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "定义结构体",
          'code': "struct User {\n    name: String,\n    age: u8,\n    email: String,\n    active: bool,\n}\n\nfn main() {\n    let u = User {\n        name: String::from(\"小明\"),\n        age: 18,\n        email: String::from(\"ming@example.com\"),\n        active: true,\n    };\n    println!(\"{} {} {}\", u.name, u.age, u.active);\n}"
        },
        {
          'type': "list",
          'items': [
            "struct 名用大驼峰（User）",
            "字段名用小蛇形（name、age）",
            "每个字段都要标注类型",
            "实例化时字段顺序随意",
            "访问用点号 u.name"
          ]
        },
        {
          'type': "h",
          'text': "修改与更新语法"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "mut 实例与 .. 更新",
          'code': "struct Point { x: i32, y: i32 }\n\nfn main() {\n    let mut p = Point { x: 1, y: 2 };\n    p.x = 10;                    // 需要 mut 才能改\n    println!(\"({}, {})\", p.x, p.y);\n\n    let p2 = Point { x: 5, ..p };  // ..p 继承其余字段\n    println!(\"p2 = ({}, {})\", p2.x, p2.y);\n}"
        },
        {
          'type': "h",
          'text': "元组结构体 tuple struct"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "元组结构体",
          'code': "struct Color(i32, i32, i32);\nstruct Point(i32, i32);\n\nfn main() {\n    let black = Color(0, 0, 0);\n    let origin = Point(0, 0);\n    println!(\"({}, {}, {})\", black.0, black.1, black.2);\n    println!(\"({}, {})\", origin.0, origin.1);\n}"
        },
        {
          'type': "info",
          'title': "元组结构体",
          'text': "元组结构体字段没有名字，用 .0 .1 访问。适合「只有一个语义标签的元组」，比如颜色 RGB、坐标等。"
        },
        {
          'type': "warn",
          'title': "结构体会移动",
          'text': "把结构体实例传给函数会移动所有权（除非它实现了 Copy）。要借用用 <code.inline>&u</code.inline>，第 11、12 章的内容在这里会用到。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"结构体 struct：把数据打包\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"结构体 struct：把数据打包\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"结构体 struct：把数据打包\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "struct 定义自定义类型，字段打包",
            "大驼峰命名类型，小蛇形命名字段",
            "实例化 { 字段: 值 }，点号访问",
            "..p 继承其他字段的更新语法",
            "元组结构体用 .0 .1 访问"
          ]
        }
      ],
      'templates': [
        {
          'name': "书籍结构体",
          'code': "struct Book {\n    title: String,\n    author: String,\n    pages: u32,\n}\n\nfn main() {\n    let b = Book {\n        title: String::from(\"Rust编程\"),\n        author: String::from(\"小明\"),\n        pages: 300,\n    };\n    println!(\"《{}》by {}, {} 页\", b.title, b.author, b.pages);\n}"
        }
      ]
    },
    {
      'id': "rs-16",
      'title': "方法：impl 块给结构体加行为",
      'summary': "impl 块里定义方法，self 代表实例本身，让数据拥有行为。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "结构体只存数据。要给它加「行为」（函数），用 <code.inline>impl</code.inline> 块。impl 里的函数叫**方法**（method），第一个参数是 <code.inline>self</code.inline>，代表调用它的实例。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "定义方法",
          'code': "struct Rectangle {\n    width: u32,\n    height: u32,\n}\n\nimpl Rectangle {\n    fn area(&self) -> u32 {\n        self.width * self.height\n    }\n\n    fn is_square(&self) -> bool {\n        self.width == self.height\n    }\n}\n\nfn main() {\n    let r = Rectangle { width: 3, height: 4 };\n    println!(\"面积 = {}\", r.area());\n    println!(\"是正方形吗 = {}\", r.is_square());\n}"
        },
        {
          'type': "h",
          'text': "self 的三种形式"
        },
        {
          'type': "table",
          'head': [
            "签名",
            "含义"
          ],
          'rows': [
            [
              "fn m(&self)",
              "只读借用，最常见"
            ],
            [
              "fn m(&mut self)",
              "可变借用，可修改实例"
            ],
            [
              "fn m(self)",
              "拿走所有权（很少用）"
            ]
          ]
        },
        {
          'type': "p",
          'text': "方法调用用点号：<code.inline>r.area()</code.inline>。Rust 会自动处理引用，所以不管变量是 r 还是 &r，写 <code.inline>r.area()</code.inline> 都能调用 &self 方法。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "&mut self 方法",
          'code': "struct Counter {\n    value: i32,\n}\n\nimpl Counter {\n    fn new() -> Counter {\n        Counter { value: 0 }\n    }\n    fn add(&mut self, n: i32) {\n        self.value += n;\n    }\n    fn get(&self) -> i32 {\n        self.value\n    }\n}\n\nfn main() {\n    let mut c = Counter::new();\n    c.add(5);\n    c.add(3);\n    println!(\"计数 = {}\", c.get());\n}"
        },
        {
          'type': "warn",
          'title': "&mut self 需要 mut 实例",
          'text': "调用 <code.inline>&mut self</code> 方法要求实例本身是 mut 的：<code.inline>let mut c = ...</code.inline>。否则报错 cannot borrow as mutable。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"方法：impl 块给结构体加行为\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"方法：impl 块给结构体加行为\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"方法：impl 块给结构体加行为\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "impl 块给结构体定义方法",
            "方法第一个参数是 self（&self / &mut self / self）",
            "&self 只读，&mut self 可改",
            "点号调用，Rust 自动处理引用",
            "多个 impl 块可以拆开写"
          ]
        }
      ],
      'templates': [
        {
          'name': "矩形面积",
          'code': "struct Rect { w: u32, h: u32 }\n\nimpl Rect {\n    fn area(&self) -> u32 { self.w * self.h }\n}\n\nfn main() {\n    let r = Rect { w: 5, h: 6 };\n    println!(\"面积 = {}\", r.area());\n}"
        }
      ]
    },
    {
      'id': "rs-17",
      'title': "关联函数与 new 惯用法",
      'summary': "不带 self 的函数是关联函数，用 :: 调用，new 是构造实例的惯例。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "上章的 <code.inline>Counter::new()</code.inline> 其实不是方法——它的第一个参数**不是 self**。这类函数叫**关联函数**（associated function），用 <code.inline>类型::函数名()</code.inline> 调用，类似其他语言的「静态方法」。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "关联函数 new",
          'code': "struct Person {\n    name: String,\n    age: u8,\n}\n\nimpl Person {\n    // 关联函数：没有 self，用 :: 调用\n    fn new(name: String, age: u8) -> Person {\n        Person { name, age }\n    }\n\n    // 方法：有 &self\n    fn greet(&self) {\n        println!(\"你好，我是 {}，今年 {}\", self.name, self.age);\n    }\n}\n\nfn main() {\n    let p = Person::new(String::from(\"小明\"), 20);\n    p.greet();\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>new</code> 不是语言关键字，只是**约定俗成**的名字：写一个 <code.inline>new</code> 关联函数用来构造新实例，代码读起来很自然。你完全可以用别的名字（如 <code.inline>from</code>、<code.inline>default</code>），但 <code.inline>new</code> 是社区标准。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "字段简写",
          'code': "struct Circle { radius: f64 }\n\nimpl Circle {\n    fn new(radius: f64) -> Circle {\n        // 字段名和参数名相同可简写为 { radius }\n        Circle { radius }\n    }\n    fn area(&self) -> f64 {\n        3.14159 * self.radius * self.radius\n    }\n}\n\nfn main() {\n    let c = Circle::new(2.0);\n    println!(\"面积 = {}\", c.area());\n}"
        },
        {
          'type': "tip",
          'title': "字段简写糖",
          'text': "当字段名和构造参数名完全一致时，可以简写成 <code.inline>Circle { radius }</code.inline>，不用写 <code.inline>radius: radius</code.inline>。"
        },
        {
          'type': "h",
          'text': "什么时候用 :: 什么时候用 .？"
        },
        {
          'type': "list",
          'items': [
            "关联函数（无 self）用 :: 调用：Person::new(...)",
            "方法（有 self）用 . 调用：p.greet()",
            "类型相关的常量也常用 :: 访问"
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"关联函数与 new 惯用法\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"关联函数与 new 惯用法\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"关联函数与 new 惯用法\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "关联函数没有 self，用 类型::函数() 调用",
            "new 是构造新实例的社区惯例",
            "字段名与参数同名可简写",
            ":: 调关联函数，. 调方法"
          ]
        }
      ],
      'templates': [
        {
          'name': "新建学生",
          'code': "struct Student {\n    name: String,\n    score: u32,\n}\n\nimpl Student {\n    fn new(name: String, score: u32) -> Student {\n        Student { name, score }\n    }\n    fn show(&self) {\n        println!(\"{} 得分 {}\", self.name, self.score);\n    }\n}\n\nfn main() {\n    let s = Student::new(String::from(\"小红\"), 95);\n    s.show();\n}"
        }
      ]
    },
    {
      'id': "rs-18",
      'title': "枚举 enum：一组可能的值",
      'summary': "enum 定义一组取值，可以携带数据，比其它语言更强大。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "枚举（enum）用来表达「一组可能的情况」。比如方向有上下左右，一周有七天。Rust 的枚举比 C 的更强大：每个成员还能**携带数据**。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "简单枚举",
          'code': "enum Direction {\n    Up,\n    Down,\n    Left,\n    Right,\n}\n\nfn main() {\n    let d = Direction::Up;\n    println!(\"方向变量创建好了\");\n}"
        },
        {
          'type': "h",
          'text': "枚举成员携带数据"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "带数据的枚举",
          'code': "enum Message {\n    Quit,                     // 不带数据\n    Move { x: i32, y: i32 },  // 带具名数据\n    Write(String),            // 带一个 String\n    ChangeColor(u8, u8, u8),  // 带三个值\n}\n\nfn main() {\n    let m1 = Message::Write(String::from(\"hi\"));\n    let m2 = Message::Move { x: 1, y: 2 };\n    let m3 = Message::ChangeColor(255, 0, 0);\n    // 先创建出来，下一章用 match 处理\n}"
        },
        {
          'type': "p",
          'text': "每个成员可以带不同的数据。这样**同一种类型就能表达多种形态**，是 Rust 表达「多态」的核心方式之一。"
        },
        {
          'type': "h",
          'text': "枚举也可以加 impl 方法"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "枚举的方法",
          'code': "enum IpAddr {\n    V4(String),\n    V6(String),\n}\n\nimpl IpAddr {\n    fn kind(&self) -> &str {\n        match self {\n            IpAddr::V4(_) => \"IPv4\",\n            IpAddr::V6(_) => \"IPv6\",\n        }\n    }\n}\n\nfn main() {\n    let addr = IpAddr::V4(String::from(\"127.0.0.1\"));\n    println!(\"类型: {}\", addr.kind());\n}"
        },
        {
          'type': "tip",
          'title': "最常用的内置枚举",
          'text': "Rust 标准库里最常用的枚举是 <code.inline>Option</code>（有值/无值）和 <code.inline>Result</code>（成功/失败），第 21、22 章专门讲。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"枚举 enum：一组可能的值\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"枚举 enum：一组可能的值\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"枚举 enum：一组可能的值\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "enum 定义一组取值，成员可携带数据",
            "成员用 枚举名::成员 访问",
            "不同成员可带不同类型数据",
            "枚举可以有自己的方法",
            "Option 和 Result 是最常用的内置枚举"
          ]
        }
      ],
      'templates': [
        {
          'name': "星期枚举",
          'code': "enum Day {\n    Mon, Tue, Wed, Thu, Fri, Sat, Sun,\n}\n\nfn main() {\n    let today = Day::Fri;\n    println!(\"今天星期五\");\n}"
        }
      ]
    },
    {
      'id': "rs-19",
      'title': "模式匹配 match：穷尽所有可能",
      'summary': "match 像 switch 加强版，必须覆盖所有情况，_ 通配符兜底。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "<code.inline>match</code.inline> 是 Rust 最强大的控制流工具：拿一个值，和各个「模式」逐一比较，命中就执行对应分支。它的最大特点是**必须穷尽所有可能**，否则编译不通过。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "match 基础",
          'code': "fn main() {\n    let n = 3;\n    match n {\n        1 => println!(\"一\"),\n        2 => println!(\"二\"),\n        3 => println!(\"三\"),\n        _ => println!(\"其他\"),  // _ 通配所有未列出的情况\n    }\n}"
        },
        {
          'type': "h",
          'text': "match 是表达式，可以返回值"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "match 返回值",
          'code': "fn describe(n: u32) -> &str {\n    match n {\n        0 => \"零\",\n        1 | 2 => \"小\",      // | 表示「或」\n        3..=9 => \"中\",       // ..= 范围\n        _ => \"大\",\n    }\n}\n\nfn main() {\n    println!(\"{}\", describe(0));\n    println!(\"{}\", describe(2));\n    println!(\"{}\", describe(7));\n    println!(\"{}\", describe(100));\n}"
        },
        {
          'type': "h",
          'text': "配合枚举使用"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "match 枚举",
          'code': "enum Coin {\n    Penny, Nickel, Dime, Quarter,\n}\n\nfn value(c: Coin) -> u32 {\n    match c {\n        Coin::Penny => 1,\n        Coin::Nickel => 5,\n        Coin::Dime => 10,\n        Coin::Quarter => 25,\n    }\n}\n\nfn main() {\n    println!(\"{}\", value(Coin::Quarter));\n}"
        },
        {
          'type': "warn",
          'title': "分支必须穷尽",
          'text': "如果 match 没有覆盖所有可能性且没有 <code.inline>_</code.inline> 兜底，编译器会报 <code.inline>non-exhaustive patterns</code.inline>。这是 Rust 的「强制」：它逼你考虑所有情况，从源头减少 Bug。比如枚举加了新成员，所有 match 都会报错提醒你处理。"
        },
        {
          'type': "info",
          'title': "模式可以绑定变量",
          'text': "模式里能绑定变量：<code.inline>Some(x) => x</code.inline> 会把匹配到的数据绑到 x。这在处理 Option 时极其常用（第 21 章）。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"模式匹配 match：穷尽所有可能\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"模式匹配 match：穷尽所有可能\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"模式匹配 match：穷尽所有可能\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "match 逐分支比较，必须穷尽所有可能",
            "_ 通配符兜底未列出的情况",
            "match 是表达式，可返回值",
            "1 | 2 表示或，3..=9 表示范围",
            "模式可绑定变量 Some(x) => x"
          ]
        }
      ],
      'templates': [
        {
          'name': "数字转文字",
          'code': "fn to_text(n: u32) -> &str {\n    match n {\n        0 => \"zero\",\n        1 => \"one\",\n        2 => \"two\",\n        _ => \"many\",\n    }\n}\n\nfn main() {\n    println!(\"{}\", to_text(1));\n    println!(\"{}\", to_text(99));\n}"
        }
      ]
    },
    {
      'id': "rs-20",
      'title': "if let 与 while let：简洁模式匹配",
      'summary': "只想匹配一种情况时用 if let，循环匹配用 while let，省去 match 样板。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "有时候你只关心某一种匹配结果，其他情况统统忽略。用完整 match 要写一堆样板代码，这时候 <code.inline>if let</code.inline> 更简洁。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "match vs if let",
          'code': "fn main() {\n    let opt = Some(5);\n\n    // 完整 match 写法\n    match opt {\n        Some(x) => println!(\"值是 {}\", x),\n        None => (),\n    }\n\n    // if let 简洁写法\n    if let Some(x) = opt {\n        println!(\"值还是 {}\", x);\n    }\n}"
        },
        {
          'type': "h",
          'text': "if let 带 else"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "if let ... else",
          'code': "enum Color { Rgb(u8, u8, u8), Hex(String) }\n\nfn main() {\n    let c = Color::Hex(String::from(\"#ff0000\"));\n\n    if let Color::Hex(h) = c {\n        println!(\"十六进制颜色: {}\", h);\n    } else {\n        println!(\"不是十六进制颜色\");\n    }\n}"
        },
        {
          'type': "h",
          'text': "while let 循环"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "while let 处理栈",
          'code': "fn main() {\n    let mut stack = vec![1, 2, 3];\n\n    // 只要还能 pop 出 Some 就继续\n    while let Some(top) = stack.pop() {\n        println!(\"弹出 {}\", top);\n    }\n    println!(\"栈空了\");\n}"
        },
        {
          'type': "tip",
          'title': "什么时候用 while let",
          'text': "<code.inline>while let</code.inline> 特别适合处理「重复提取直到没有」的场景，比如弹出队列、逐行读取等。它是 match 在循环里的简化版。"
        },
        {
          'type': "h",
          'text': "怎么选？"
        },
        {
          'type': "table",
          'head': [
            "场景",
            "推荐写法"
          ],
          'rows': [
            [
              "要处理所有分支",
              "match"
            ],
            [
              "只关心一种情况",
              "if let"
            ],
            [
              "循环提取直到空",
              "while let"
            ]
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"if let 与 while let：简洁模式匹配\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"if let 与 while let：简洁模式匹配\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"if let 与 while let：简洁模式匹配\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "if let 只匹配一种模式，忽略其他",
            "if let 可带 else 处理不匹配的情况",
            "while let 循环匹配直到失败",
            "比完整 match 更简洁，适合单一关心的情况"
          ]
        }
      ],
      'templates': [
        {
          'name': "if let 检查",
          'code': "fn main() {\n    let value = Some(42);\n    if let Some(n) = value {\n        println!(\"拿到了 {}\", n);\n    } else {\n        println!(\"什么都没有\");\n    }\n}"
        }
      ]
    },
    {
      'id': "rs-21",
      'title': "Option 枚举：有值还是无值",
      'summary': "用 Option<T> 表达「可能有值也可能没有」，避免空指针。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "很多语言里「没有值」用 null 表示，但访问 null 会崩溃（空指针异常）。Rust 用 <code.inline>Option<T></code.inline> 显式表达「可能有值，也可能没有」，编译器强制你处理无值的情况，从根源消灭空指针。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "Option 的两种状态",
          'code': "fn main() {\n    let some = Some(5);                // 有值\n    let none: Option<i32> = None;      // 无值，需标注类型\n\n    println!(\"{:?}\", some);\n    println!(\"{:?}\", none);\n}"
        },
        {
          'type': "p",
          'text': "<code.inline>Option<T></code.inline> 是个枚举，只有两个成员：<code.inline>Some(T)</code.inline>（有值）和 <code.inline>None</code.inline>（无值）。标准库已经导入，直接用。"
        },
        {
          'type': "h",
          'text': "处理 Option：match"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "match 处理 Option",
          'code': "fn main() {\n    let x = Some(10);\n    match x {\n        Some(v) => println!(\"有值: {}\", v),\n        None => println!(\"没有值\"),\n    }\n}"
        },
        {
          'type': "h",
          'text': "为什么 Option 不能直接当数字用？"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "Option 不能直接相加",
          'code': "fn main() {\n    let a = Some(2);\n    let b = Some(3);\n    // let sum = a + b;  // 错误：Option<i32> 不能直接相加\n    // 必须先取出里面的值\n    let sum = a.unwrap() + b.unwrap();\n    println!(\"{}\", sum);\n}"
        },
        {
          'type': "info",
          'title': "这个报错是保护",
          'text': "「不能直接相加」的报错正是 Rust 的保护：它逼你先思考 None 的情况。取出值的方法很多（unwrap、expect、if let、match），第 23 章细讲。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "if let 取值",
          'code': "fn main() {\n    let name = Some(String::from(\"Rust\"));\n    if let Some(n) = name {\n        println!(\"语言是 {}\", n);\n    }\n}"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Option 枚举：有值还是无值\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Option 枚举：有值还是无值\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Option 枚举：有值还是无值\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Option<T> 只有 Some(值) 和 None 两种状态",
            "强制处理无值情况，消灭空指针",
            "Option 不能直接参与运算，要先取里面的值",
            "取值的常用姿势：match、if let、unwrap"
          ]
        }
      ],
      'templates': [
        {
          'name': "Option 示例",
          'code': "fn main() {\n    let a = Some(7);\n    let b: Option<i32> = None;\n    println!(\"{:?} {:?}\", a, b);\n}"
        }
      ]
    },
    {
      'id': "rs-22",
      'title': "Result 枚举：成功还是失败",
      'summary': "用 Result<T, E> 表达可能失败的操作，成功 Ok 失败 Err。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "程序运行中很多操作会失败：打开文件、网络请求、除法除零……Rust 用 <code.inline>Result<T, E></code.inline> 表达这种可能性：成功返回 <code.inline>Ok(T)</code.inline>，失败返回 <code.inline>Err(E)</code.inline>。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "使用 Result",
          'code': "use std::fs::File;\n\nfn main() {\n    let f = File::open(\"hello.txt\");\n    match f {\n        Ok(file) => println!(\"打开成功: {:?}\", file),\n        Err(e) => println!(\"打开失败: {}\", e),\n    }\n}"
        },
        {
          'type': "h",
          'text': "自定义返回 Result 的函数"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "自己写返回 Result 的函数",
          'code': "fn divide(a: i32, b: i32) -> Result<i32, String> {\n    if b == 0 {\n        Err(String::from(\"除数不能为零\"))\n    } else {\n        Ok(a / b)\n    }\n}\n\nfn main() {\n    match divide(10, 2) {\n        Ok(v) => println!(\"结果是 {}\", v),\n        Err(e) => println!(\"出错了: {}\", e),\n    }\n    match divide(10, 0) {\n        Ok(v) => println!(\"结果是 {}\", v),\n        Err(e) => println!(\"出错了: {}\", e),\n    }\n}"
        },
        {
          'type': "list",
          'items': [
            "Result<T, E> 的两个成员：Ok(T) 和 Err(E)",
            "T 是成功时的值类型，E 是错误类型",
            "函数签名就告诉调用者：这个操作可能失败",
            "处理 Result 用 match 或 ? 运算符"
          ]
        },
        {
          'type': "warn",
          'title': "panic vs Result",
          'text': "panic 是程序直接崩溃（严重、不可恢复）；Result 是把失败变成普通值让你处理（可恢复）。库函数几乎都用 Result，让调用者决定怎么办。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Result 枚举：成功还是失败\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Result 枚举：成功还是失败\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Result 枚举：成功还是失败\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Result<T, E> 表达可能失败的操作",
            "Ok 成功带值，Err 失败带错误",
            "函数签名用 Result 就声明了「可能失败」",
            "panic 崩溃 vs Result 可处理，多数用 Result"
          ]
        }
      ],
      'templates': [
        {
          'name': "除法 Result",
          'code': "fn divide(a: i32, b: i32) -> Result<i32, String> {\n    if b == 0 { Err(String::from(\"不能除零\")) }\n    else { Ok(a / b) }\n}\n\nfn main() {\n    println!(\"{:?}\", divide(10, 2));\n    println!(\"{:?}\", divide(10, 0));\n}"
        }
      ]
    },
    {
      'id': "rs-23",
      'title': "unwrap、expect 与 ? 传播运算符",
      'summary': "快速取值用 unwrap/expect，函数间传播错误用 ? 最优雅。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "match 处理 Result 很啰嗦。Rust 提供几个便捷方法：<code.inline>unwrap()</code.inline> 成功直接取值，失败就 panic；<code.inline>expect()</code.inline> 类似但可自定义 panic 信息；<code.inline>?</code> 运算符把错误自动向上传播。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "unwrap 与 expect",
          'code': "fn main() {\n    let a: Option<i32> = Some(10);\n    println!(\"{}\", a.unwrap());   // 10，没有值会 panic\n\n    let r: Result<i32, &str> = Ok(5);\n    println!(\"{}\", r.expect(\"取结果失败\"));  // 5\n}"
        },
        {
          'type': "warn",
          'title': "unwrap 会 panic",
          'text': "unwrap 在 None/Err 时会 panic 崩溃。仅用于「确定不会有错」的场景（如测试、原型）。真实程序里用 unwrap 要谨慎，别让程序轻易崩溃。"
        },
        {
          'type': "h",
          'text': "? 运算符"
        },
        {
          'type': "p",
          'text': "在一个返回 Result 的函数里，<code.inline>?</code.inline> 的意思：如果操作成功，取出 Ok 里的值继续；如果失败，直接把 Err 返回给上层调用者。它让错误处理代码非常简洁。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "? 传播错误",
          'code': "use std::fs::File;\nuse std::io::Read;\n\nfn read_file(path: &str) -> Result<String, std::io::Error> {\n    let mut f = File::open(path)?;      // 失败就向上返回错误\n    let mut s = String::new();\n    f.read_to_string(&mut s)?;\n    Ok(s)\n}\n\nfn main() {\n    match read_file(\"hello.txt\") {\n        Ok(content) => println!(\"{}\", content),\n        Err(e) => println!(\"读取失败: {}\", e),\n    }\n}"
        },
        {
          'type': "info",
          'title': "main 也能返回 Result",
          'text': "? 只能在返回 Result（或 Option）的函数里用。main 也可以返回 Result，比如 <code.inline>fn main() -> Result<(), Box<dyn std::error::Error>></code.inline>，这样 main 里也能用 ?。"
        },
        {
          'type': "h",
          'text': "三种方式对比"
        },
        {
          'type': "table",
          'head': [
            "方式",
            "成功时",
            "失败时"
          ],
          'rows': [
            [
              "unwrap()",
              "返回值",
              "panic 崩溃"
            ],
            [
              "expect(\"msg\")",
              "返回值",
              "panic + 自定义信息"
            ],
            [
              "? 运算符",
              "返回值",
              "把 Err 返回给上层"
            ]
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"unwrap、expect 与 ? 传播运算符\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"unwrap、expect 与 ? 传播运算符\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"unwrap、expect 与 ? 传播运算符\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "unwrap 失败即 panic，expect 可加说明",
            "? 在返回 Result/Option 的函数里传播错误",
            "main 可返回 Result，配合 ? 很优雅",
            "真实代码少用 unwrap，多用 ? 或 match"
          ]
        }
      ],
      'templates': [
        {
          'name': "unwrap 演示",
          'code': "fn main() {\n    let num: Option<i32> = Some(42);\n    let n = num.expect(\"num 应该是有值的\");\n    println!(\"n = {}\", n);\n}"
        }
      ]
    },
    {
      'id': "rs-24",
      'title': "模块系统 mod：组织代码",
      'summary': "用 mod 把代码拆成模块，代码结构清晰，私有默认私有。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "项目变大后，把所有代码塞进一个文件会很难维护。Rust 用**模块（module）**组织代码：mod 定义一个模块，里面可以有函数、结构体、其他模块。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "内联模块",
          'code': "mod math {\n    pub fn add(a: i32, b: i32) -> i32 {\n        a + b\n    }\n}\n\nfn main() {\n    println!(\"{}\", math::add(2, 3));\n}"
        },
        {
          'type': "h",
          'text': "pub 公开"
        },
        {
          'type': "p",
          'text': "模块里的东西默认**私有**，只有加上 <code.inline>pub</code.inline> 才能被外面访问。这和很多语言相反（默认 public），Rust 默认私有，需要时再显式公开。"
        },
        {
          'type': "h",
          'text': "拆分成文件"
        },
        {
          'type': "p",
          'text': "当模块很大时，可以拆成单独文件。新建 src/math.rs，然后在 main.rs 里写 <code.inline>mod math;</code.inline>，Rust 会自动加载 src/math.rs。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "math.rs（单独文件）",
          'code': "pub fn add(a: i32, b: i32) -> i32 { a + b }\npub fn sub(a: i32, b: i32) -> i32 { a - b }"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "main.rs 引入",
          'code': "mod math;   // 加载 src/math.rs\n\nfn main() {\n    println!(\"{}\", math::add(10, 4));\n    println!(\"{}\", math::sub(10, 4));\n}"
        },
        {
          'type': "h",
          'text': "子模块"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "嵌套模块",
          'code': "mod front_of_house {\n    pub mod hosting {\n        pub fn add_to_waitlist() {\n            println!(\"加入等候名单\");\n        }\n    }\n}\n\nfn main() {\n    front_of_house::hosting::add_to_waitlist();\n}"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"模块系统 mod：组织代码\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"模块系统 mod：组织代码\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"模块系统 mod：组织代码\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "mod 定义模块，组织代码结构",
            "默认私有，pub 才对外可见",
            "大模块可拆成单独 .rs 文件，用 mod 加载",
            "模块可以嵌套，用 :: 逐层访问"
          ]
        }
      ],
      'templates': [
        {
          'name': "模块示例",
          'code': "mod greeting {\n    pub fn hello() {\n        println!(\"你好！\");\n    }\n}\n\nfn main() {\n    greeting::hello();\n}"
        }
      ]
    },
    {
      'id': "rs-25",
      'title': "路径与 use：简化调用",
      'summary': "用绝对/相对路径定位条目，use 引入后直接写短名字。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "模块像文件系统的目录，条目（函数、结构体）用**路径**定位：<code.inline>crate::math::add</code.inline> 从 crate 根开始（绝对路径），<code.inline>super::x</code.inline> 是上一级。每次都写全路径太长，用 <code.inline>use</code> 引入后就能写短名。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "绝对路径",
          'code': "mod math {\n    pub mod basic {\n        pub fn add(a: i32, b: i32) -> i32 { a + b }\n    }\n}\n\nfn main() {\n    // 绝对路径：从 crate 根开始\n    let a = crate::math::basic::add(1, 2);\n    println!(\"{}\", a);\n}"
        },
        {
          'type': "h",
          'text': "use 引入"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "use 简化调用",
          'code': "mod math {\n    pub mod basic {\n        pub fn add(a: i32, b: i32) -> i32 { a + b }\n    }\n}\n\nuse math::basic::add;\n\nfn main() {\n    println!(\"{}\", add(3, 4));   // 直接写短名\n}"
        },
        {
          'type': "h",
          'text': "use 的其他写法"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "别名与合并引入",
          'code': "use std::collections::{HashMap, HashSet};   // 一次引入多个\nuse std::io::Result as IoResult;             // 起别名\n\nfn main() {\n    let mut m: HashMap<String, i32> = HashMap::new();\n    m.insert(String::from(\"a\"), 1);\n    println!(\"{:?}\", m);\n}"
        },
        {
          'type': "tip",
          'title': "pub use 再导出",
          'text': "用 <code.inline>pub use</code> 可以把模块里的条目「再导出」出去，让外部使用者不用深入多层路径。标准库大量使用 pub use。"
        },
        {
          'type': "info",
          'title': "社区风格",
          'text': "惯用风格：引入函数常用全路径 <code.inline>use std::fs::read_to_string</code.inline>；引入结构体/枚举时引入父模块再写 <code.inline>std::collections::HashMap</code.inline>。没有强制，跟社区风格走。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"路径与 use：简化调用\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"路径与 use：简化调用\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"路径与 use：简化调用\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "crate:: 绝对路径，super:: 上一级，self:: 当前",
            "use 引入后可直接写短名",
            "use a::{b, c} 合并，use a as b 别名",
            "pub use 再导出给外部使用"
          ]
        }
      ],
      'templates': [
        {
          'name': "use 简化",
          'code': "use std::collections::HashMap;\n\nfn main() {\n    let mut m = HashMap::new();\n    m.insert(\"苹果\", 5);\n    println!(\"{:?}\", m);\n}"
        }
      ]
    },
    {
      'id': "rs-26",
      'title': "集合 Vec：动态数组",
      'summary': "vec! 创建，push/pop 增删，索引访问，所有元素类型相同。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "<code.inline>Vec<T></code.inline> 是 Rust 最常用的集合：动态数组，可以随时增删元素，所有元素类型相同。它把数据存在堆上，长度可以变化。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "创建与增删",
          'code': "fn main() {\n    let mut v: Vec<i32> = Vec::new();\n    v.push(1);\n    v.push(2);\n    v.push(3);\n    println!(\"{:?}\", v);\n\n    let last = v.pop();   // 移除并返回最后一个\n    println!(\"pop 出 {:?}，还剩 {:?}\", last, v);\n\n    let v2 = vec![10, 20, 30];   // vec! 宏快速创建\n    println!(\"{:?}\", v2);\n}"
        },
        {
          'type': "h",
          'text': "访问元素"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "索引与 get",
          'code': "fn main() {\n    let v = vec![10, 20, 30];\n    println!(\"{}\", v[1]);      // 20，索引越界会 panic\n\n    match v.get(10) {          // get 返回 Option，越界给 None\n        Some(x) => println!(\"{}\", x),\n        None => println!(\"越界了\"),\n    }\n}"
        },
        {
          'type': "h",
          'text': "遍历"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "遍历 Vec",
          'code': "fn main() {\n    let v = vec![1, 2, 3];\n    for x in &v {           // 借用遍历，不移动\n        println!(\"{}\", x);\n    }\n    for (i, x) in v.iter().enumerate() {\n        println!(\"索引 {} 值是 {}\", i, x);\n    }\n}"
        },
        {
          'type': "info",
          'title': "常用方法",
          'text': "<code.inline>len()</code.inline> 长度、<code.inline>contains()</code.inline> 是否包含、<code.inline>sort()</code.inline> 排序、<code.inline>insert()</code.inline> 插入。这些方法后面会大量用到。"
        },
        {
          'type': "warn",
          'title': "借用冲突",
          'text': "不可变借用和可变借用不能同时进行。比如 <code.inline>let first = &v[0]; v.push(5);</code.inline> 会报错，因为 push 需要可变借用而 first 还持着不可变借用。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"集合 Vec：动态数组\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"集合 Vec：动态数组\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"集合 Vec：动态数组\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Vec<T> 动态数组，同类型元素",
            "vec! 宏快速创建，push/pop 增删",
            "索引越界 panic，get() 返回 Option 更安全",
            "遍历用 &v 借用不移动",
            "注意可变借用与不可变借用冲突"
          ]
        }
      ],
      'templates': [
        {
          'name': "Vec 增删",
          'code': "fn main() {\n    let mut nums = vec![1, 2, 3];\n    nums.push(4);\n    nums.pop();\n    println!(\"{:?}\", nums);\n    println!(\"长度 {}\", nums.len());\n}"
        }
      ]
    },
    {
      'id': "rs-27",
      'title': "集合 HashMap 与 HashSet",
      'summary': "键值对存储用 HashMap，去重集合用 HashSet。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "<code.inline>HashMap<K, V></code.inline> 存键值对（类似 Python 的 dict），<code.inline>HashSet<T></code.inline> 存不重复的元素集合。两者都基于哈希表，查找速度接近 O(1)。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "HashMap 增删查",
          'code': "use std::collections::HashMap;\n\nfn main() {\n    let mut scores = HashMap::new();\n    scores.insert(String::from(\"小明\"), 90);\n    scores.insert(String::from(\"小红\"), 95);\n\n    println!(\"{:?}\", scores.get(\"小明\"));   // Some(&90)\n\n    for (name, score) in &scores {\n        println!(\"{}: {}\", name, score);\n    }\n}"
        },
        {
          'type': "h",
          'text': "更新值"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "覆盖与 entry",
          'code': "use std::collections::HashMap;\n\nfn main() {\n    let mut m = HashMap::new();\n    m.insert(String::from(\"a\"), 1);\n    m.insert(String::from(\"a\"), 2);   // 覆盖成 2\n\n    // entry + or_insert：没有才插入，返回已有值的可变引用\n    m.entry(String::from(\"a\")).or_insert(100);\n    m.entry(String::from(\"b\")).or_insert(100);\n\n    println!(\"{:?}\", m);  // {\"a\": 2, \"b\": 100}\n}"
        },
        {
          'type': "h",
          'text': "HashSet 去重"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "HashSet 统计不重复",
          'code': "use std::collections::HashSet;\n\nfn main() {\n    let mut seen = HashSet::new();\n    for word in [\"apple\", \"banana\", \"apple\", \"pear\"] {\n        seen.insert(word);\n    }\n    println!(\"不重复的词: {:?}\", seen);\n    println!(\"数量: {}\", seen.len());\n}"
        },
        {
          'type': "tip",
          'title': "计数器惯用法",
          'text': "HashMap 常用于「统计频率」：<code.inline>let count = map.entry(key).or_insert(0); *count += 1;</code.inline>。这是计数器惯用法，第 70 章键值存储会再遇到。"
        },
        {
          'type': "warn",
          'title': "所有权",
          'text': "HashMap 的键和值默认会「移动」进 map。用 <code.inline>&str</code.inline> 字面量做键就没有所有权问题，但用 String 做键要注意键的所有权转移。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"集合 HashMap 与 HashSet\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"集合 HashMap 与 HashSet\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"集合 HashMap 与 HashSet\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "HashMap 键值对，查找 O(1)",
            "insert 覆盖旧值，entry().or_insert() 只在没有时插入",
            "HashSet 存不重复元素",
            "遍历返回引用，注意借用规则"
          ]
        }
      ],
      'templates': [
        {
          'name': "单词计数",
          'code': "use std::collections::HashMap;\n\nfn main() {\n    let text = \"apple banana apple pear apple\";\n    let mut count = HashMap::new();\n    for word in text.split_whitespace() {\n        *count.entry(word).or_insert(0) += 1;\n    }\n    println!(\"{:?}\", count);\n}"
        }
      ]
    },
    {
      'id': "rs-28",
      'title': "String 与 &str 的关系、常用方法",
      'summary': "String 拥有数据可修改，&str 只借用不可改，掌握常用方法。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "<code.inline>String</code.inline> 是拥有数据的可增长 UTF-8 字符串；<code.inline>&str</code.inline> 是对字符串的只读引用。字符串字面量 <code.inline>\"hi\"</code.inline> 的类型是 <code.inline>&str</code.inline>。"
        },
        {
          'type': "h",
          'text': "创建与修改"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "String 修改",
          'code': "fn main() {\n    let mut s = String::from(\"hello\");\n    s.push(' ');            // 加一个字符\n    s.push_str(\"world\");     // 加一段字符串\n    println!(\"{}\", s);\n\n    let s2 = String::from(\"!\");\n    let s3 = s + &s2;        // + 拼接，s 被移动\n    println!(\"{}\", s3);\n}"
        },
        {
          'type': "h",
          'text': "String 与 &str 互转"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "互相转换",
          'code': "fn main() {\n    let s = String::from(\"hello\");\n    let slice: &str = &s;        // String -> &str（借用）\n    println!(\"{}\", slice);\n\n    let back = slice.to_string();   // &str -> String（拷贝）\n    println!(\"{}\", back);\n}"
        },
        {
          'type': "h",
          'text': "常用方法"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "常用字符串方法",
          'code': "fn main() {\n    let s = String::from(\"Hello, Rust!\");\n    println!(\"长度: {}\", s.len());\n    println!(\"转小写: {}\", s.to_lowercase());\n    println!(\"转大写: {}\", s.to_uppercase());\n    println!(\"包含: {}\", s.contains(\"Rust\"));\n    println!(\"替换: {}\", s.replace(\"Rust\", \"Go\"));\n    println!(\"切割: {:?}\", s.split(\",\").collect::<Vec<_>>());\n    println!(\"去除空白: {}\", \"  hi  \".trim());\n}"
        },
        {
          'type': "h",
          'text': "按字符遍历"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "chars() 遍历",
          'code': "fn main() {\n    let s = \"你好世界\";\n    for c in s.chars() {\n        println!(\"{}\", c);\n    }\n    println!(\"字节数: {}\", s.len());\n    println!(\"字符数: {}\", s.chars().count());\n}"
        },
        {
          'type': "warn",
          'title': "len() 是字节数不是字符数",
          'text': "<code.inline>len()</code.inline> 返回的是**字节数**不是字符数！\"你好世界\" 有 4 个字符但 12 个字节（每个汉字 3 字节）。要数字符用 <code.inline>chars().count()</code.inline>。这也是前面切片章节强调别按字节切的原因。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"String 与 &str 的关系、常用方法\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"String 与 &str 的关系、常用方法\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"String 与 &str 的关系、常用方法\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "String 拥有数据可修改，&str 只借用",
            "字面量类型是 &str，String::from 创建 String",
            "+ 拼接会移动左边的 String",
            "len() 是字节数，chars().count() 才是字符数",
            "常用方法：replace/contains/trim/split"
          ]
        }
      ],
      'templates': [
        {
          'name': "字符串处理",
          'code': "fn main() {\n    let msg = String::from(\"  hello world  \");\n    println!(\"{}\", msg.trim().to_uppercase());\n}"
        }
      ]
    },
    {
      'id': "rs-29",
      'title': "泛型：类型也可以当参数",
      'summary': "fn/struct 用 <T> 让类型成为参数，一份代码适用多种类型。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "泛型（generics）让「类型」也能当参数传进去。比如一个求最大值函数，不想为 i32、f64、u32 各写一遍，用泛型 T 写一份就行。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "函数泛型",
          'code': "fn largest<T: PartialOrd>(list: &[T]) -> &T {\n    let mut big = &list[0];\n    for item in list {\n        if item > big {\n            big = item;\n        }\n    }\n    big\n}\n\nfn main() {\n    let nums = vec![3, 7, 1, 9];\n    println!(\"最大: {}\", largest(&nums));\n    let chars = vec!['a', 'z', 'm'];\n    println!(\"最大: {}\", largest(&chars));\n}"
        },
        {
          'type': "h",
          'text': "结构体泛型"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "结构体泛型",
          'code': "struct Point<T> {\n    x: T,\n    y: T,\n}\n\nfn main() {\n    let p1 = Point { x: 1, y: 2 };       // Point<i32>\n    let p2 = Point { x: 1.5, y: 2.5 };   // Point<f64>\n    println!(\"{} {}\", p1.x, p2.x);\n}"
        },
        {
          'type': "h",
          'text': "两个泛型参数"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "多泛型参数",
          'code': "struct Pair<A, B> {\n    first: A,\n    second: B,\n}\n\nfn main() {\n    let p = Pair {\n        first: 42,\n        second: String::from(\"答案\"),\n    };\n    println!(\"{} {}\", p.first, p.second);\n}"
        },
        {
          'type': "info",
          'title': "零成本抽象",
          'text': "编译器会为每个具体类型生成对应代码（单态化），所以泛型不会带来运行时开销。这是 Rust 泛型「零成本抽象」的一环。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"泛型：类型也可以当参数\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"泛型：类型也可以当参数\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"泛型：类型也可以当参数\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "泛型 <T> 让类型当参数",
            "fn 和 struct 都支持泛型",
            "可多个泛型参数 <A, B>",
            "T: PartialOrd 这类约束，第 63 章细讲",
            "泛型零成本，编译器单态化"
          ]
        }
      ],
      'templates': [
        {
          'name': "泛型 Point",
          'code': "struct Point<T> { x: T, y: T }\n\nfn main() {\n    let a = Point { x: 1, y: 2 };\n    let b = Point { x: 1.5, y: 2.5 };\n    println!(\"({}, {})\", a.x, a.y);\n    println!(\"({}, {})\", b.x, b.y);\n}"
        }
      ]
    },
    {
      'id': "rs-30",
      'title': "trait：定义共享行为",
      'summary': "trait 声明一组方法，impl Trait for Type 为类型实现。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "trait（特征）定义一组「能力/行为」。任何类型实现了这个 trait，就具备这些方法。类似其他语言的「接口 interface」。它是 Rust 多态的基础。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "定义 trait 并实现",
          'code': "trait Summary {\n    fn summarize(&self) -> String;\n}\n\nstruct Article {\n    title: String,\n    content: String,\n}\n\nimpl Summary for Article {\n    fn summarize(&self) -> String {\n        format!(\"文章: {}\", self.title)\n    }\n}\n\nfn main() {\n    let a = Article {\n        title: String::from(\"Rust 入门\"),\n        content: String::from(\"...\"),\n    };\n    println!(\"{}\", a.summarize());\n}"
        },
        {
          'type': "h",
          'text': "为别人的类型实现 trait"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "为内置类型实现 trait",
          'code': "trait Sound {\n    fn make_sound(&self) -> String;\n}\n\nimpl Sound for i32 {\n    fn make_sound(&self) -> String {\n        format!(\"数字 {}\", self)\n    }\n}\n\nfn main() {\n    println!(\"{}\", 42.make_sound());\n}"
        },
        {
          'type': "h",
          'text': "trait 约束泛型"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "trait 约束",
          'code': "trait Greet {\n    fn greet(&self) -> String;\n}\n\nfn print_greet<T: Greet>(x: T) {\n    println!(\"{}\", x.greet());\n}\n\nstruct Dog;\nimpl Greet for Dog {\n    fn greet(&self) -> String { String::from(\"汪汪\") }\n}\n\nfn main() {\n    print_greet(Dog);\n}"
        },
        {
          'type': "warn",
          'title': "孤儿规则",
          'text': "想给类型实现 trait，trait 或类型至少有一个是本 crate 定义的。不能给标准库的类型实现标准库的 trait。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"trait：定义共享行为\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"trait：定义共享行为\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"trait：定义共享行为\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "trait 定义一组方法签名",
            "impl Trait for Type 实现",
            "trait 是 Rust 多态和代码复用的基础",
            "T: Trait 约束泛型可用哪些方法",
            "孤儿规则限制实现组合"
          ]
        }
      ],
      'templates': [
        {
          'name': "动物叫声",
          'code': "trait Speak {\n    fn speak(&self) -> String;\n}\n\nstruct Cat;\nimpl Speak for Cat {\n    fn speak(&self) -> String { String::from(\"喵\") }\n}\n\nfn main() {\n    println!(\"{}\", Cat.speak());\n}"
        }
      ]
    },
    {
      'id': "rs-31",
      'title': "默认方法与 trait 参数（impl Trait / dyn Trait）",
      'summary': "trait 可带默认实现；函数参数用 impl Trait 或 dyn Trait 接收多态。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "trait 的方法可以给**默认实现**，实现者可以不重写。另外，函数参数想要「任何实现了某 trait 的类型」，有 <code.inline>impl Trait</code.inline> 和 <code.inline>dyn Trait</code.inline> 两种写法。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "默认实现",
          'code': "trait Greeter {\n    fn name(&self) -> String;\n    // 默认实现，用到了 name()\n    fn greet(&self) -> String {\n        format!(\"你好，{}！\", self.name())\n    }\n}\n\nstruct Person { n: String }\nimpl Greeter for Person {\n    fn name(&self) -> String { self.n.clone() }\n    // greet 用默认实现，不用写\n}\n\nfn main() {\n    let p = Person { n: String::from(\"小明\") };\n    println!(\"{}\", p.greet());\n}"
        },
        {
          'type': "h",
          'text': "impl Trait 参数"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "impl Trait 参数",
          'code': "trait Area {\n    fn area(&self) -> f64;\n}\n\nstruct Circle { r: f64 }\nimpl Area for Circle {\n    fn area(&self) -> f64 { 3.14 * self.r * self.r }\n}\n\nfn show(a: impl Area) {\n    println!(\"面积: {}\", a.area());\n}\n\nfn main() {\n    show(Circle { r: 2.0 });\n}"
        },
        {
          'type': "h",
          'text': "dyn Trait 与 Box"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "dyn Trait 动态分发",
          'code': "trait Shape {\n    fn area(&self) -> f64;\n}\n\nstruct Circle { r: f64 }\nimpl Shape for Circle {\n    fn area(&self) -> f64 { 3.14 * self.r * self.r }\n}\n\nstruct Square { s: f64 }\nimpl Shape for Square {\n    fn area(&self) -> f64 { self.s * self.s }\n}\n\nfn main() {\n    let shapes: Vec<Box<dyn Shape>> = vec![\n        Box::new(Circle { r: 1.0 }),\n        Box::new(Square { s: 2.0 }),\n    ];\n    for s in shapes {\n        println!(\"{}\", s.area());\n    }\n}"
        },
        {
          'type': "info",
          'title': "静态 vs 动态",
          'text': "impl Trait 是静态分发（编译期确定具体类型，零开销）；dyn Trait 是动态分发（运行时查 vtable，但类型可以不同放进同一个 Vec）。Box<dyn Trait> 把任意实现该 trait 的类型装箱。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"默认方法与 trait 参数（impl Trait / dyn Trait）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"默认方法与 trait 参数（impl Trait / dyn Trait）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"默认方法与 trait 参数（impl Trait / dyn Trait）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "trait 方法可带默认实现",
            "impl Trait 参数接收任意实现者（静态分发）",
            "dyn Trait 动态分发，可放进 Vec<Box<dyn T>>",
            "静态分发零开销，动态分发更灵活"
          ]
        }
      ],
      'templates': [
        {
          'name': "默认方法",
          'code': "trait Info {\n    fn id(&self) -> String;\n    fn describe(&self) -> String {\n        format!(\"id: {}\", self.id())\n    }\n}\n\nstruct Item { id: String }\nimpl Info for Item {\n    fn id(&self) -> String { self.id.clone() }\n}\n\nfn main() {\n    let i = Item { id: String::from(\"A-1\") };\n    println!(\"{}\", i.describe());\n}"
        }
      ]
    },
    {
      'id': "rs-32",
      'title': "生命周期标注基础（<'a>）",
      'summary': "生命周期是引用存活时长的标注，解决悬垂引用问题。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "生命周期（lifetime）是 Rust 最难也最重要的概念之一。它的目的：保证引用**不会悬垂**（引用指向的数据已被释放）。编译器自己会推断大部分生命周期，只有少数情况需要你显式标注 <code.inline>'a</code.inline>。"
        },
        {
          'type': "h",
          'text': "悬垂引用问题"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "悬垂引用会被拒绝",
          'code': "fn main() {\n    let r;\n    {\n        let x = 5;\n        // r = &x;   // 错误：x 离开作用域就没了，r 会悬垂\n    }\n    println!(\"{}\", r);\n}"
        },
        {
          'type': "h",
          'text': "函数返回引用的生命周期问题"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "需要标注生命周期的函数",
          'code': "// 返回两个 &str 中较长的那个\n// 需要告诉编译器：返回值的生命周期 = 两个参数中较短的那个\nfn longest<'a>(x: &'a str, y: &'a str) -> &'a str {\n    if x.len() > y.len() { x } else { y }\n}\n\nfn main() {\n    let s1 = String::from(\"long string\");\n    let result;\n    {\n        let s2 = String::from(\"short\");\n        result = longest(&s1, &s2);\n        println!(\"较长的是: {}\", result);\n    }\n}"
        },
        {
          'type': "h",
          'text': "'a 是什么意思？"
        },
        {
          'type': "list",
          'items': [
            "'a 只是一个名字（a 是随便起的，可以是 'b、'c）",
            "&'a str 表示「这个引用至少活到 'a 这个生命周期」",
            "longest<'a> 声明函数里有一个生命周期参数",
            "x、y、返回值都用 'a，表示三者关联：返回值活不过参数中最短的那个"
          ]
        },
        {
          'type': "p",
          'text': "生命周期标注**不会改变**引用的实际存活时间，只是把编译器的推理「写下来」，让编译器检查时更清楚。它主要影响函数/结构体签名，一般函数体里不用写。"
        },
        {
          'type': "warn",
          'title': "为什么重要",
          'text': "生命周期和引用规则配合，保证了一个安全承诺：**引用永远不会指向已释放的内存**。这在 C 语言里是悬垂指针（严重 bug），Rust 在编译期就拒绝。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"生命周期标注基础（<'a>）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"生命周期标注基础（<'a>）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"生命周期标注基础（<'a>）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "生命周期是引用存活时长的标注",
            "解决悬垂引用问题",
            "函数签名可写 <'a> 关联参数和返回值",
            "标注不改变存活时间，只是帮编译器检查",
            "引用绝不悬垂，这是 Rust 的安全保证之一"
          ]
        }
      ],
      'templates': [
        {
          'name': "longest 函数",
          'code': "fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {\n    if x.len() > y.len() { x } else { y }\n}\n\nfn main() {\n    println!(\"{}\", longest(\"abc\", \"xy\"));\n}"
        }
      ]
    },
    {
      'id': "rs-33",
      'title': "生命周期省略规则",
      'summary': "大多数时候不用写生命周期，因为编译器按省略规则自动补全。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "好消息：上一章的 <code.inline>'a</code.inline> 大多数情况**不用写**。编译器有一套「生命周期省略规则」（lifetime elision），能自动补全。它帮你省掉了大量模板代码。"
        },
        {
          'type': "h",
          'text': "常见的省略例子"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "不用写生命周期的函数",
          'code': "fn first_word(s: &str) -> &str {\n    // 省略规则自动处理：输入和输出生命周期一致\n    match s.find(' ') {\n        Some(i) => &s[..i],\n        None => s,\n    }\n}\n\nfn main() {\n    println!(\"{}\", first_word(\"hello world\"));\n}"
        },
        {
          'type': "h",
          'text': "三条省略规则"
        },
        {
          'type': "list",
          'items': [
            "规则一：每个引用参数都有自己的生命周期（一个参数一个）",
            "规则二：如果只有一个输入生命周期，输出引用用它",
            "规则三：如果有多个输入，且其中一个是 &self 或 &mut self，输出引用用 self 的生命周期",
            "只要上面能推出输出引用的生命周期，就不用写 'a"
          ]
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "方法通常不用写生命周期",
          'code': "struct Book {\n    title: String,\n}\n\nimpl Book {\n    // &self 的生命周期自动用于返回值\n    fn title(&self) -> &str {\n        &self.title\n    }\n}\n\nfn main() {\n    let b = Book { title: String::from(\"Rust 编程\") };\n    println!(\"{}\", b.title());\n}"
        },
        {
          'type': "info",
          'title': "什么时候必须写？",
          'text': "当「多个输入引用」且没有 self，返回值又关联其中一个时，编译器推不出来，就必须显式标注。比如第 32 章的 <code.inline>longest</code.inline> 就必须写。"
        },
        {
          'type': "warn",
          'title': "省略只是快捷方式",
          'text': "省略规则只是编译器默认的「快捷方式」，它减少的是**书写量**，不是安全要求。先理解 'a，再看省略规则会觉得非常自然。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"生命周期省略规则\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"生命周期省略规则\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"生命周期省略规则\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "三条省略规则让大多数引用函数不用写 'a",
            "单输入引用 -> 输出引用自动关联",
            "有 &self 的方法 -> 输出关联 self",
            "longest 这类多输入函数仍需显式标注"
          ]
        }
      ],
      'templates': [
        {
          'name': "省略生命周期",
          'code': "fn shout(s: &str) -> &str {\n    s\n}\n\nfn main() {\n    println!(\"{}\", shout(\"你好\"));\n}"
        }
      ]
    },
    {
      'id': "rs-34",
      'title': "生命周期在结构体里",
      'summary': "结构体存引用时必须标注生命周期，否则编译器不知道引用活多久。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "当结构体的字段是**引用**（&str、&T）时，必须给结构体标注生命周期。因为编译器要知道：结构体实例存活期间，字段引用的数据必须还活着。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "结构体存引用",
          'code': "struct Excerpt<'a> {\n    part: &'a str,\n}\n\nfn main() {\n    let novel = String::from(\"第一句很长。第二句也很长。\");\n    let first = novel.split(\"。\").next().expect(\"有句子\");\n    let e = Excerpt { part: first };\n    println!(\"片段: {}\", e.part);\n}"
        },
        {
          'type': "h",
          'text': "多个生命周期参数"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "多字段不同生命周期",
          'code': "struct Pair<'a, 'b> {\n    x: &'a str,\n    y: &'b str,\n}\n\nfn main() {\n    let a = String::from(\"甲\");\n    let p;\n    {\n        let b = String::from(\"乙\");\n        p = Pair { x: &a, y: &b };\n        println!(\"{} {}\", p.x, p.y);\n    }\n}"
        },
        {
          'type': "h",
          'text': "生命周期与 impl"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "impl 里也要写",
          'code': "struct Book<'a> {\n    title: &'a str,\n}\n\nimpl<'a> Book<'a> {\n    fn title(&self) -> &str {\n        self.title\n    }\n}\n\nfn main() {\n    let t = String::from(\"Rust 入门\");\n    let b = Book { title: &t };\n    println!(\"{}\", b.title());\n}"
        },
        {
          'type': "warn",
          'title': "能拥有就不要引用",
          'text': "存储引用 vs 存储拥有数据：能拥有（String）就不要存引用（&str），省去生命周期烦恼。生命周期标注是「不得不存引用」时才需要的工具。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"生命周期在结构体里\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"生命周期在结构体里\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"生命周期在结构体里\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "结构体字段是引用时必须标 <'a>",
            "多个引用字段可用 <'a, 'b>",
            "impl 块也要带 <'a>",
            "尽量用拥有类型（String）而非引用，减少烦恼"
          ]
        }
      ],
      'templates': [
        {
          'name': "结构体引用",
          'code': "struct Wrapper<'a> {\n    text: &'a str,\n}\n\nfn main() {\n    let s = String::from(\"被引用\");\n    let w = Wrapper { text: &s };\n    println!(\"{}\", w.text);\n}"
        }
      ]
    },
    {
      'id': "rs-35",
      'title': "闭包 closure：可以捕获环境的函数",
      'summary': "用 || 定义闭包，能捕获周围变量，像匿名函数。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "闭包（closure）是可以**捕获周围环境变量**的匿名函数。用 <code.inline>||</code.inline> 语法定义，参数写在两条竖线中间。它特别适合作为回调、传给迭代器方法。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "闭包基础",
          'code': "fn main() {\n    let add = |a: i32, b: i32| a + b;\n    println!(\"{}\", add(2, 3));\n\n    let multiply = |a: i32, b: i32| { a * b };\n    println!(\"{}\", multiply(4, 5));\n}"
        },
        {
          'type': "h",
          'text': "捕获环境"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "捕获环境变量",
          'code': "fn main() {\n    let x = 10;\n    let add_x = |n: i32| n + x;   // 捕获了 x\n    println!(\"{}\", add_x(5));     // 15\n    println!(\"x 还在: {}\", x);\n}"
        },
        {
          'type': "h",
          'text': "闭包与函数对比"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "闭包类型自动推断",
          'code': "fn main() {\n    // 闭包不需要标注参数/返回类型（除非严格要求）\n    let double = |n| n * 2;   // 类型由调用推断\n    println!(\"{}\", double(21));\n\n    // 和普通函数对比\n    fn double_fn(n: i32) -> i32 { n * 2 }\n    println!(\"{}\", double_fn(21));\n}"
        },
        {
          'type': "h",
          'text': "作为参数传递"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "闭包作为参数",
          'code': "fn apply<F: Fn(i32) -> i32>(f: F, val: i32) -> i32 {\n    f(val)\n}\n\nfn main() {\n    let add_10 = |x| x + 10;\n    println!(\"{}\", apply(add_10, 5));\n    println!(\"{}\", apply(|x| x * 3, 5));\n}"
        },
        {
          'type': "info",
          'title': "三个 trait",
          'text': "闭包实现三个 trait：<code.inline>Fn</code.inline>（只读借用捕获）、<code.inline>FnMut</code.inline>（可变借用捕获）、<code.inline>FnOnce</code.inline>（拿走所有权捕获）。下一章细讲，包括 move。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"闭包 closure：可以捕获环境的函数\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"闭包 closure：可以捕获环境的函数\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"闭包 closure：可以捕获环境的函数\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "闭包用 || 定义，可捕获环境变量",
            "参数/返回类型通常可推断",
            "可作为参数传给其他函数",
            "闭包实现 Fn/FnMut/FnOnce 三个 trait"
          ]
        }
      ],
      'templates': [
        {
          'name': "简单闭包",
          'code': "fn main() {\n    let greeting = |name: &str| format!(\"你好，{}！\", name);\n    println!(\"{}\", greeting(\"世界\"));\n}"
        }
      ]
    },
    {
      'id': "rs-36",
      'title': "闭包捕获与 move 关键字",
      'summary': "Fn/FnMut/FnOnce 三种捕获方式，move 强制拿走所有权。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "闭包捕获环境有三种方式，对应三个 trait：<code.inline>Fn</code.inline> 只读借用、<code.inline>FnMut</code.inline> 可变借用、<code.inline>FnOnce</code.inline> 拿走所有权。编译器根据闭包体内的操作自动决定。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "Fn 只读捕获",
          'code': "fn main() {\n    let name = String::from(\"Rust\");\n    let print_name = || println!(\"{}\", name);   // 只读借用\n    print_name();\n    print_name();       // 还能再用\n    println!(\"name 还在: {}\", name);\n}"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "FnMut 修改捕获",
          'code': "fn main() {\n    let mut count = 0;\n    let mut add_one = || { count += 1; };   // 可变借用\n    add_one();\n    add_one();\n    println!(\"count = {}\", count);\n}"
        },
        {
          'type': "h",
          'text': "move 强制拿走所有权"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "move 闭包",
          'code': "fn main() {\n    let s = String::from(\"hello\");\n    // move 把 s 的所有权移进闭包\n    let closure = move || println!(\"{}\", s);\n    closure();\n    // println!(\"{}\", s);  // 错误：s 已被移进闭包\n}"
        },
        {
          'type': "info",
          'title': "move 最常见的用途",
          'text': "move 最常见的用途：**线程里使用闭包**（第 44 章）。新线程不知道外部变量能活多久，move 把所有权送进去最安全。"
        },
        {
          'type': "h",
          'text': "FnOnce 拿走所有权"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "FnOnce 只能调用一次",
          'code': "fn main() {\n    let text = String::from(\"secret\");\n    let consume = move || drop(text);   // drop 拿走所有权\n    consume();\n    // consume();  // 错误：FnOnce 只能调用一次\n}"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"闭包捕获与 move 关键字\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"闭包捕获与 move 关键字\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"闭包捕获与 move 关键字\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Fn 只读借用、FnMut 可变借用、FnOnce 拿走所有权",
            "编译器按闭包操作自动选捕获方式",
            "move 强制按值捕获，常用在线程场景",
            "FnOnce 只能调用一次"
          ]
        }
      ],
      'templates': [
        {
          'name': "move 闭包",
          'code': "fn main() {\n    let s = String::from(\"move 示例\");\n    let c = move || println!(\"{}\", s);\n    c();\n}"
        }
      ]
    },
    {
      'id': "rs-37",
      'title': "迭代器：Iterator trait 与 next",
      'summary': "迭代器按顺序产出元素，next() 一次取一个，惰性求值。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "迭代器（iterator）是「能依次产出元素」的东西。Rust 的迭代器是**惰性**的：你不去取，它不会真的遍历。核心方法是 <code.inline>next()</code.inline>，一次返回一个 <code.inline>Option</code.inline>。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "next() 手动迭代",
          'code': "fn main() {\n    let v = vec![10, 20, 30];\n    let mut it = v.iter();\n    println!(\"{:?}\", it.next());   // Some(&10)\n    println!(\"{:?}\", it.next());   // Some(&20)\n    println!(\"{:?}\", it.next());   // Some(&30)\n    println!(\"{:?}\", it.next());   // None，取完了\n}"
        },
        {
          'type': "h",
          'text': "三种迭代器"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "iter / iter_mut / into_iter",
          'code': "fn main() {\n    let v = vec![1, 2, 3];\n    for x in v.iter() {          // 借用，不移动\n        println!(\"{}\", x);\n    }\n    let mut v2 = vec![1, 2, 3];\n    for x in v2.iter_mut() {     // 可变借用\n        *x *= 10;\n    }\n    println!(\"{:?}\", v2);\n    for x in v2.into_iter() {    // 拿走所有权\n        println!(\"{}\", x);\n    }\n}"
        },
        {
          'type': "h",
          'text': "for 循环其实是迭代器"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "for 与 next",
          'code': "fn main() {\n    let v = vec![1, 2, 3];\n    // for 循环底层就是反复调 next()\n    for x in v {\n        println!(\"{}\", x);\n    }\n}"
        },
        {
          'type': "info",
          'title': "选哪个？",
          'text': "<code.inline>.iter()</code.inline> 借用产生 &T；<code.inline>.into_iter()</code.inline> 拿走所有权产生 T；<code.inline>.iter_mut()</code.inline> 可变借用产生 &mut T。for 循环默认用 into_iter。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"迭代器：Iterator trait 与 next\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"迭代器：Iterator trait 与 next\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"迭代器：Iterator trait 与 next\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "迭代器惰性：不调用不遍历",
            "next() 返回 Option，None 表示取完",
            "iter 借用 / iter_mut 可变 / into_iter 取所有权",
            "for 循环底层就是迭代器"
          ]
        }
      ],
      'templates': [
        {
          'name': "遍历 Vec",
          'code': "fn main() {\n    let v = vec![1, 2, 3];\n    let mut it = v.iter();\n    while let Some(x) = it.next() {\n        println!(\"{}\", x);\n    }\n}"
        }
      ]
    },
    {
      'id': "rs-38",
      'title': "迭代器方法链：map / filter / collect",
      'summary': "用 map 变换、filter 过滤、collect 收集，一条链搞定数据处理。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "迭代器的真正威力是**方法链**：map 变换每个元素、filter 过滤、collect 把结果收集回集合。一条链就把「遍历 + 处理 + 收集」写完了，代码非常清晰。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "map 与 collect",
          'code': "fn main() {\n    let nums = vec![1, 2, 3, 4];\n    let doubled: Vec<i32> = nums.into_iter().map(|x| x * 2).collect();\n    println!(\"{:?}\", doubled);  // [2, 4, 6, 8]\n}"
        },
        {
          'type': "h",
          'text': "filter 过滤"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "filter 过滤",
          'code': "fn main() {\n    let nums = vec![1, 2, 3, 4, 5, 6];\n    let evens: Vec<i32> = nums.into_iter().filter(|x| *x % 2 == 0).collect();\n    println!(\"{:?}\", evens);   // [2, 4, 6]\n}"
        },
        {
          'type': "h",
          'text': "链式组合与 sum"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "完整方法链",
          'code': "fn main() {\n    let data = vec![1, 2, 3, 4, 5, 6];\n    // 先平方，再过滤出偶数，求和\n    let sum: i32 = data\n        .iter()\n        .map(|&x| x * x)\n        .filter(|&n| n % 2 == 0)\n        .sum();\n    println!(\"偶数的平方和 = {}\", sum);  // 4+16+36 = 56\n}"
        },
        {
          'type': "info",
          'title': "惰性 + 组合",
          'text': "方法链不会立刻执行，直到 .collect()/.sum()/.for_each() 等「消费」动作。中间步骤不分配中间集合，性能好。"
        },
        {
          'type': "tip",
          'title': "模式解引用",
          'text': "filter 的闭包参数是引用（&Item），所以常用 <code.inline>|&x|</code.inline> 或 <code.inline>*x</code.inline> 解引用。map 用 into_iter 的迭代器则直接拿到值。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"迭代器方法链：map / filter / collect\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"迭代器方法链：map / filter / collect\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"迭代器方法链：map / filter / collect\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "map 变换、filter 过滤、collect 收集",
            "into_iter().map(|x| x*2) 按值处理最简单",
            "filter 闭包拿到 &Item",
            "链惰性执行，消费动作触发",
            "sum/collect 等是终点"
          ]
        }
      ],
      'templates': [
        {
          'name': "方法链",
          'code': "fn main() {\n    let nums = vec![1, 2, 3, 4, 5];\n    let result: Vec<i32> = nums.into_iter().filter(|x| *x % 2 == 1).map(|x| x * 10).collect();\n    println!(\"{:?}\", result);\n}"
        }
      ]
    },
    {
      'id': "rs-39",
      'title': "智能指针 Box<T>：堆上分配",
      'summary': "Box 把值放到堆上，用于递归类型、大对象、trait 对象。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "智能指针是一类「像指针又有额外能力」的类型。<code.inline>Box<T></code.inline> 是最简单的一个：把值分配到堆上，栈上只放一个指针。离开作用域时 Box 自动释放堆内存。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "Box 基础",
          'code': "fn main() {\n    let b = Box::new(5);\n    println!(\"b = {}\", b);        // 自动解引用\n    println!(\"*b = {}\", *b);      // 手动解引用\n}"
        },
        {
          'type': "h",
          'text': "递归类型必须用 Box"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "递归结构用 Box",
          'code': "enum List {\n    Cons(i32, Box<List>),\n    Nil,\n}\n\nfn main() {\n    let list = List::Cons(1, Box::new(List::Cons(2, Box::new(List::Nil))));\n    println!(\"递归列表创建成功\");\n}"
        },
        {
          'type': "p",
          'text': "为什么递归类型必须 Box？因为枚举的大小要「能容纳最大成员」，而递归成员大小不确定（无限）。用 Box 后成员只是固定大小的指针，编译就能算出来。"
        },
        {
          'type': "h",
          'text': "解引用 *"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "Box 与解引用",
          'code': "fn main() {\n    let x = 5;\n    let y = Box::new(x);   // 拷贝进堆\n    assert_eq!(5, *y);     // 解引用取回值\n    println!(\"y 解引用 = {}\", *y);\n}"
        },
        {
          'type': "tip",
          'title': "Box<dyn Trait>",
          'text': "第 31 章的 <code.inline>Box<dyn Trait></code.inline> 就是「把任意实现该 trait 的类型装箱」——这也要求用 Box，因为不同具体类型大小不同，得放堆上。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"智能指针 Box<T>：堆上分配\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"智能指针 Box<T>：堆上分配\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"智能指针 Box<T>：堆上分配\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Box<T> 把值放堆上，自动释放",
            "递归类型必须用 Box 打破无限大小",
            "解引用用 * 或自动解引用",
            "Box<dyn Trait> 做 trait 对象"
          ]
        }
      ],
      'templates': [
        {
          'name': "Box 堆分配",
          'code': "fn main() {\n    let b = Box::new(42);\n    println!(\"栈上指针指向堆里的 {}\", b);\n}"
        }
      ]
    },
    {
      'id': "rs-40",
      'title': "Rc<T> 引用计数与 RefCell<T> 简介",
      'summary': "Rc 允许多个所有者共享数据，RefCell 把借用检查推迟到运行时。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "默认一个值只有一个所有者。但有些场景（如图结构）需要**多个所有者**共享同一数据，Rust 提供 <code.inline>Rc<T></code.inline>（引用计数）。每 clone 一次计数加一，计数归零才释放。**只用于单线程。**"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "Rc 共享",
          'code': "use std::rc::Rc;\n\nfn main() {\n    let a = Rc::new(String::from(\"共享数据\"));\n    let b = Rc::clone(&a);   // 计数 +1，不是深拷贝\n    let c = Rc::clone(&a);   // 计数 +2\n    println!(\"引用计数 = {}\", Rc::strong_count(&a));  // 3\n    println!(\"{} {}\", b, c);\n}"
        },
        {
          'type': "h",
          'text': "Rc + RefCell 实现可变共享"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "Rc<RefCell<T>>",
          'code': "use std::cell::RefCell;\nuse std::rc::Rc;\n\nfn main() {\n    let value = Rc::new(RefCell::new(5));\n    let v2 = Rc::clone(&value);\n\n    // 通过 RefCell 在运行时修改\n    *value.borrow_mut() += 1;\n    *value.borrow_mut() += 1;\n\n    println!(\"现在 = {}\", *v2.borrow());  // 7\n}"
        },
        {
          'type': "info",
          'title': "RefCell 把检查推迟到运行时",
          'text': "<code.inline>RefCell<T></code.inline> 把借用检查从「编译期」推迟到「运行时」：<code.inline>borrow()</code.inline> 不可变借用、<code.inline>borrow_mut()</code.inline> 可变借用，违反规则时运行时会 panic 而不是编译报错。"
        },
        {
          'type': "warn",
          'title': "注意",
          'text': "Rc 只适合单线程；多线程共享要用 Arc（第 46 章）。RefCell 的借用错误发生在运行时（panic），比编译期报错更难发现，用时要小心。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Rc<T> 引用计数与 RefCell<T> 简介\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Rc<T> 引用计数与 RefCell<T> 简介\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Rc<T> 引用计数与 RefCell<T> 简介\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Rc 引用计数，允许多所有者共享，单线程",
            "Rc::clone 只增计数，不深拷贝",
            "RefCell 把借用检查推迟到运行时",
            "Rc<RefCell<T>> 组合实现「多所有者 + 可修改」",
            "多线程共享用 Arc 不用 Rc"
          ]
        }
      ],
      'templates': [
        {
          'name': "Rc 共享",
          'code': "use std::rc::Rc;\n\nfn main() {\n    let a = Rc::new(10);\n    let b = Rc::clone(&a);\n    println!(\"{} {}\", a, b);\n    println!(\"计数 = {}\", Rc::strong_count(&a));\n}"
        }
      ]
    },
    {
      'id': "rs-41",
      'title': "内部可变性与 RefCell 借用规则",
      'summary': "RefCell 让不可变引用也可以修改内部数据，借用规则在运行时检查。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "「内部可变性」（interior mutability）指：一个类型虽然持有不可变引用，却能修改内部数据。RefCell<T> 就提供了这种能力——把借用检查从编译期挪到运行时。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "RefCell 基本用法",
          'code': "use std::cell::RefCell;\n\nfn main() {\n    let cell = RefCell::new(10);\n    {\n        let mut v = cell.borrow_mut();  // 可变借用\n        *v += 5;\n    }\n    println!(\"{:?}\", cell);  // RefCell { value: 15 }\n}"
        },
        {
          'type': "h",
          'text': "为什么需要它？"
        },
        {
          'type': "p",
          'text': "回顾借用规则：同一时刻不能同时有可变引用和不可变引用，这是**编译期**强制的。但有些合法模式编译期无法证明，比如「多个不可变引用，但每个只改自己那部分」。RefCell 允许你把规则推迟到运行时。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "运行时借用检查",
          'code': "use std::cell::RefCell;\n\nfn main() {\n    let cell = RefCell::new(5);\n    let b1 = cell.borrow();     // 不可变借用\n    // let b2 = cell.borrow_mut(); // 错误！运行时会 panic：\n    // already borrowed: BorrowMutError\n    println!(\"{}\", *b1);\n}"
        },
        {
          'type': "warn",
          'title': "运行时 panic",
          'text': "RefCell 违反借用规则时不会在编译期报错，而是**运行时 panic**（BorrowMutError）。这比编译期报错更隐蔽，所以要尽量少用。能用普通借用规则解决的，就用普通规则。"
        },
        {
          'type': "h",
          'text': "RefCell + Rc 经典组合"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "Rc<RefCell<T>> 可变共享",
          'code': "use std::cell::RefCell;\nuse std::rc::Rc;\n\nfn main() {\n    let data = Rc::new(RefCell::new(0));\n    let a = Rc::clone(&data);\n    let b = Rc::clone(&data);\n\n    *a.borrow_mut() += 1;   // 通过 a 修改\n    *b.borrow_mut() += 1;   // 通过 b 修改\n\n    println!(\"结果 = {}\", *data.borrow());  // 2\n}"
        },
        {
          'type': "table",
          'head': [
            "类型",
            "借用检查时机",
            "谁可以用"
          ],
          'rows': [
            [
              "&T / &mut T",
              "编译期",
              "所有代码"
            ],
            [
              "RefCell<T>",
              "运行时",
              "单线程"
            ],
            [
              "Rc<T> + RefCell<T>",
              "运行时",
              "单线程，多所有者"
            ],
            [
              "Arc<T> + Mutex<T>",
              "运行时",
              "多线程（第 46 章）"
            ]
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"内部可变性与 RefCell 借用规则\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"内部可变性与 RefCell 借用规则\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"内部可变性与 RefCell 借用规则\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "内部可变性：不可变引用也能改内部数据",
            "RefCell 把借用检查挪到运行时",
            "违反规则运行时会 panic（BorrowMutError）",
            "Rc<RefCell<T>> 是「多所有者 + 可修改」的组合",
            "能不用 RefCell 就不用，编译期检查更安全"
          ]
        }
      ],
      'templates': [
        {
          'name': "RefCell 修改",
          'code': "use std::cell::RefCell;\n\nfn main() {\n    let cell = RefCell::new(1);\n    *cell.borrow_mut() += 1;\n    *cell.borrow_mut() += 1;\n    println!(\"{}\", *cell.borrow());\n}"
        }
      ]
    },
    {
      'id': "rs-42",
      'title': "引用循环与内存泄漏风险",
      'summary': "Rc 之间互相引用会造成引用循环，计数永远不归零导致内存泄漏。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "Rc 靠引用计数释放内存：计数为 0 才释放。但如果两个 Rc 互相引用对方，形成**引用循环**，它们的计数永远不会降到 0，内存就泄漏了。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "引用循环示例",
          'code': "use std::rc::Rc;\nuse std::cell::RefCell;\n\n#[derive(Debug)]\nstruct Node {\n    value: i32,\n    next: RefCell<Option<Rc<Node>>>,\n}\n\nfn main() {\n    let a = Rc::new(Node { value: 1, next: RefCell::new(None) });\n    let b = Rc::new(Node { value: 2, next: RefCell::new(None) });\n\n    a.next.borrow_mut() = Some(Rc::clone(&b));\n    b.next.borrow_mut() = Some(Rc::clone(&a));  // a <-> b 互相引用\n\n    println!(\"a 的计数: {}\", Rc::strong_count(&a));  // 2\n    println!(\"b 的计数: {}\", Rc::strong_count(&b));  // 2\n    // a、b 离开作用域后计数不会归零，内存泄漏\n}"
        },
        {
          'type': "h",
          'text': "为什么泄漏？"
        },
        {
          'type': "list",
          'items': [
            "a 离开作用域时，计数从 2 减到 1（还有 b 指向它）",
            "b 离开作用域时，计数从 2 减到 1（还有 a 指向它）",
            "谁都不会先归零，两块内存永远释放不了",
            "这就是引用循环导致的泄漏"
          ]
        },
        {
          'type': "h",
          'text': "解决方法：Weak"
        },
        {
          'type': "p",
          'text': "把其中一个引用改为**弱引用** <code.inline>Weak<T></code.inline>。弱引用不增加 strong_count，需要时再 upgrade 成 Rc（可能失败）。这样循环被打破，内存正常释放。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "Weak 打破循环",
          'code': "use std::rc::{Rc, Weak};\nuse std::cell::RefCell;\n\nstruct Node {\n    value: i32,\n    next: RefCell<Option<Rc<Node>>>,\n    // parent 用 Weak，不增加强引用计数\n    parent: RefCell<Weak<Node>>,\n}\n\nfn main() {\n    let a = Rc::new(Node { value: 1, next: RefCell::new(None), parent: RefCell::new(Weak::new()) });\n    let b = Rc::new(Node { value: 2, next: RefCell::new(None), parent: RefCell::new(Weak::new()) });\n    a.next.borrow_mut() = Some(Rc::clone(&b));\n    b.parent.borrow_mut() = Rc::downgrade(&a);   // 弱引用\n    println!(\"a strong = {}, weak = {}\", Rc::strong_count(&a), Rc::weak_count(&a));\n}"
        },
        {
          'type': "warn",
          'title': "泄漏是安全但不好的",
          'text': "内存泄漏在 Rust 里是**安全**的（不会崩溃或 UB），但程序长期运行会耗尽内存。设计图、树、链表这类结构时要留意：环要打破，父子关系用 Weak。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"引用循环与内存泄漏风险\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"引用循环与内存泄漏风险\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"引用循环与内存泄漏风险\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Rc 循环引用导致计数永不归零 -> 内存泄漏",
            "泄漏在 Rust 中是安全但不是好事",
            "Weak 弱引用不增加计数，可打破循环",
            "树/图的父子引用常用 Weak",
            "upgrade 返回 Option，目标可能已释放"
          ]
        }
      ],
      'templates': [
        {
          'name': "Weak 演示",
          'code': "use std::rc::{Rc, Weak};\n\nfn main() {\n    let strong = Rc::new(5);\n    let weak = Rc::downgrade(&strong);\n    println!(\"strong = {}, weak = {}\", Rc::strong_count(&strong), Rc::weak_count(&strong));\n    if let Some(v) = weak.upgrade() {\n        println!(\"upgrade 成功: {}\", v);\n    }\n}"
        }
      ]
    },
    {
      'id': "rs-43",
      'title': "Drop trait：离开作用域时自动收尾",
      'summary': "实现 Drop 定义释放时的行为，变量离开作用域自动调用 drop。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "<code.inline>Drop</code.inline> trait 定义一个值离开作用域时的清理动作（类似其他语言的析构函数）。String、Vec 等类型都实现了它来释放内存。你也可以为自己的类型实现。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "实现 Drop",
          'code': "struct Resource {\n    name: String,\n}\n\nimpl Drop for Resource {\n    fn drop(&mut self) {\n        println!(\"资源 {} 被释放了\", self.name);\n    }\n}\n\nfn main() {\n    let r = Resource { name: String::from(\"文件\") };\n    println!(\"使用资源中\");\n}   // 离开作用域时自动调用 drop"
        },
        {
          'type': "h",
          'text': "显式调用 drop()"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "提前释放",
          'code': "struct Token { id: u32 }\n\nimpl Drop for Token {\n    fn drop(&mut self) {\n        println!(\"释放 Token {}\", self.id);\n    }\n}\n\nfn main() {\n    let t = Token { id: 1 };\n    drop(t);              // 手动提前释放\n    println!(\"后面还有代码\");\n}"
        },
        {
          'type': "h",
          'text': "变量按什么顺序释放？"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "释放顺序",
          'code': "struct Item;\nimpl Drop for Item {\n    fn drop(&mut self) {\n        println!(\"Item 释放\");\n    }\n}\n\nfn main() {\n    let a = Item;\n    let b = Item;\n    // 释放顺序与声明相反（后声明先释放）：b 先，a 后\n}"
        },
        {
          'type': "warn",
          'title': "别手动调 drop()",
          'text': "不能手动调用 <code.inline>t.drop()</code.inline>（会报错 explicit destructor calls not allowed），要用 <code.inline>drop(t)</code> 函数（std::mem::drop）。drop 之后变量不能再使用。"
        },
        {
          'type': "info",
          'title': "RAII",
          'text': "Drop 也常用于「资源获取即初始化」（RAII）：打开文件、获取锁等，离开作用域自动关闭，防止忘记释放资源。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Drop trait：离开作用域时自动收尾\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Drop trait：离开作用域时自动收尾\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Drop trait：离开作用域时自动收尾\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Drop trait 定义释放时的行为",
            "离开作用域自动调用 drop",
            "想提前释放用 drop(t) 而不是 t.drop()",
            "释放顺序：后声明先释放",
            "RAII：资源自动清理，防止泄漏"
          ]
        }
      ],
      'templates': [
        {
          'name': "Drop 演示",
          'code': "struct Box2;\nimpl Drop for Box2 {\n    fn drop(&mut self) {\n        println!(\"Box2 释放\");\n    }\n}\n\nfn main() {\n    let b = Box2;\n    println!(\"main 结束前\");\n}"
        }
      ]
    },
    {
      'id': "rs-44",
      'title': "线程：thread::spawn 基础",
      'summary': "thread::spawn 创建新线程，join 等待线程结束，move 送数据进线程。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "线程（thread）让程序同时做多件事。Rust 用 <code.inline>std::thread::spawn</code> 创建线程，传入一个闭包作为线程要执行的代码。闭包里需要外部数据时用 move。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "创建线程",
          'code': "use std::thread;\nuse std::time::Duration;\n\nfn main() {\n    thread::spawn(|| {\n        for i in 1..=5 {\n            println!(\"子线程: {}\", i);\n            thread::sleep(Duration::from_millis(100));\n        }\n    });\n\n    for i in 1..=3 {\n        println!(\"主线程: {}\", i);\n        thread::sleep(Duration::from_millis(100));\n    }\n}"
        },
        {
          'type': "h",
          'text': "join 等待线程结束"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "join 等待",
          'code': "use std::thread;\n\nfn main() {\n    let handle = thread::spawn(|| {\n        println!(\"子线程计算中\");\n        42   // 闭包可以返回一个值\n    });\n\n    let result = handle.join().unwrap();   // 等待并取回结果\n    println!(\"子线程返回: {}\", result);\n}"
        },
        {
          'type': "h",
          'text': "move 把数据送进线程"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "move 闭包进线程",
          'code': "use std::thread;\n\nfn main() {\n    let data = String::from(\"线程要用的数据\");\n    let handle = thread::spawn(move || {\n        println!(\"{}\", data);   // data 的所有权移进线程\n    });\n    handle.join().unwrap();\n    // println!(\"{}\", data);  // 错误：data 已移入线程\n}"
        },
        {
          'type': "warn",
          'title': "不 move 会怎样？",
          'text': "如果闭包只借用 data，编译器无法保证主线程的数据活得比子线程久，会报错 <code.inline>may outlive borrowed value</code>。用 move 把所有权交过去就安全了。"
        },
        {
          'type': "info",
          'title': "线程安全本质",
          'text': "线程之间共享数据要满足 Send/Sync（第 47 章），共享修改要加锁（Arc<Mutex<T>>，第 46 章）。Rust 从编译期防止数据竞争。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"线程：thread::spawn 基础\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"线程：thread::spawn 基础\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"线程：thread::spawn 基础\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "thread::spawn 创建线程，传闭包",
            "join() 等待线程结束并取回结果",
            "move 把数据所有权送进线程",
            "线程间数据竞争在编译期被阻止"
          ]
        }
      ],
      'templates': [
        {
          'name': "双线程",
          'code': "use std::thread;\n\nfn main() {\n    let h = thread::spawn(|| {\n        println!(\"来自子线程\");\n    });\n    println!(\"来自主线程\");\n    h.join().unwrap();\n}"
        }
      ]
    },
    {
      'id': "rs-45",
      'title': "消息传递：mpsc 通道",
      'summary': "mpsc 通道让线程间安全传数据，tx 发送 rx 接收，多发送单接收。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "线程间通信的一种优雅方式是**消息传递**：一个线程发送消息，另一个接收。Rust 提供 <code.inline>mpsc</code>（多生产者单消费者）通道：可以有多个发送端 tx，但只有一个接收端 rx。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "通道基础",
          'code': "use std::sync::mpsc;\nuse std::thread;\n\nfn main() {\n    let (tx, rx) = mpsc::channel();\n\n    thread::spawn(move || {\n        tx.send(String::from(\"你好\")).unwrap();\n    });\n\n    let received = rx.recv().unwrap();\n    println!(\"收到: {}\", received);\n}"
        },
        {
          'type': "h",
          'text': "发送多条消息"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "迭代接收",
          'code': "use std::sync::mpsc;\nuse std::thread;\n\nfn main() {\n    let (tx, rx) = mpsc::channel();\n\n    thread::spawn(move || {\n        for i in 1..=5 {\n            tx.send(i).unwrap();\n        }\n    });\n\n    for received in rx {   // 迭代接收，直到发送端关闭\n        println!(\"收到: {}\", received);\n    }\n}"
        },
        {
          'type': "h",
          'text': "多个发送端"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "多发送端 clone",
          'code': "use std::sync::mpsc;\nuse std::thread;\n\nfn main() {\n    let (tx, rx) = mpsc::channel();\n    let tx2 = tx.clone();   // 第二个发送端\n\n    thread::spawn(move || { tx.send(String::from(\"来自线程1\")).unwrap(); });\n    thread::spawn(move || { tx2.send(String::from(\"来自线程2\")).unwrap(); });\n\n    for msg in rx {\n        println!(\"收到: {}\", msg);\n    }\n}"
        },
        {
          'type': "tip",
          'title': "接收方式",
          'text': "recv() 阻塞等待；try_recv() 不阻塞立即返回 Result；rx 可迭代（for received in rx）自动阻塞接收。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"消息传递：mpsc 通道\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"消息传递：mpsc 通道\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"消息传递：mpsc 通道\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "mpsc = 多生产者单消费者通道",
            "tx.send 发送，rx.recv 接收",
            "tx.clone() 创建多个发送端",
            "for received in rx 迭代接收",
            "消息传递避免共享内存的锁竞争"
          ]
        }
      ],
      'templates': [
        {
          'name': "通道演示",
          'code': "use std::sync::mpsc;\nuse std::thread;\n\nfn main() {\n    let (tx, rx) = mpsc::channel();\n    thread::spawn(move || {\n        tx.send(\"hello\").unwrap();\n    });\n    println!(\"{}\", rx.recv().unwrap());\n}"
        }
      ]
    },
    {
      'id': "rs-46",
      'title': "共享状态：Arc<Mutex<T>>",
      'summary': "Arc 多线程共享所有权，Mutex 提供互斥锁保护数据，锁内修改。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "第 45 章用消息传递在线程间传数据。另一种方式：**共享状态**。多个线程共享同一份数据，用 <code.inline>Mutex<T></code.inline>（互斥锁）保证同一时刻只有一个线程能改它，用 <code.inline>Arc<T></code.inline> 让多线程共享所有权。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "Arc + Mutex 基本用法",
          'code': "use std::sync::{Arc, Mutex};\n\nfn main() {\n    let counter = Arc::new(Mutex::new(0));\n    let c2 = Arc::clone(&counter);\n\n    // 加锁修改\n    let mut guard = c2.lock().unwrap();\n    *guard += 1;\n    drop(guard);   // 解锁\n\n    println!(\"counter = {}\", counter.lock().unwrap());\n}"
        },
        {
          'type': "h",
          'text': "多线程共享计数"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "多个线程加锁",
          'code': "use std::sync::{Arc, Mutex};\nuse std::thread;\n\nfn main() {\n    let counter = Arc::new(Mutex::new(0));\n    let mut handles = vec![];\n\n    for _ in 0..10 {\n        let counter = Arc::clone(&counter);\n        handles.push(thread::spawn(move || {\n            let mut num = counter.lock().unwrap();\n            *num += 1;\n        }));\n    }\n\n    for h in handles {\n        h.join().unwrap();\n    }\n    println!(\"结果 = {}\", *counter.lock().unwrap());  // 10\n}"
        },
        {
          'type': "h",
          'text': "为什么 Arc 而不是 Rc？"
        },
        {
          'type': "p",
          'text': "Rc 不是线程安全的（它的计数加减不是原子的），跨线程共享必须用 <code.inline>Arc</code>（原子引用计数）。Mutex 提供原子性的 lock/unlock。"
        },
        {
          'type': "warn",
          'title': "死锁风险",
          'text': "如果在持有锁的时候又去获取另一把锁，或忘了释放锁，就可能死锁。用 <code.inline>Mutex::lock()</code> 返回的 guard 会在离开作用域时自动解锁，但要注意别在持锁时做耗时或递归加锁操作。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"共享状态：Arc<Mutex<T>>\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"共享状态：Arc<Mutex<T>>\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"共享状态：Arc<Mutex<T>>\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Arc 原子引用计数，多线程共享所有权",
            "Mutex 互斥锁，同一时刻只一个线程能改",
            "lock() 返回 guard，自动解锁",
            "Rc 不能跨线程，必须用 Arc",
            "多线程修改共享数据用 Arc<Mutex<T>>"
          ]
        }
      ],
      'templates': [
        {
          'name': "共享计数",
          'code': "use std::sync::{Arc, Mutex};\n\nfn main() {\n    let counter = Arc::new(Mutex::new(0));\n    {\n        let mut g = counter.lock().unwrap();\n        *g += 1;\n    }\n    println!(\"{}\", *counter.lock().unwrap());\n}"
        }
      ]
    },
    {
      'id': "rs-47",
      'title': "Send 与 Sync：线程安全标记 trait",
      'summary': "Send 可跨线程移动，Sync 可被多线程共享引用，自动实现。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "<code.inline>Send</code.inline> 和 <code.inline>Sync</code.inline> 是 Rust 的两个特殊「标记 trait」：它们没有方法，只表达能力。编译器自动为大多数类型实现，你基本不用手动实现。"
        },
        {
          'type': "h",
          'text': "两个标记的含义"
        },
        {
          'type': "list",
          'items': [
            "Send：该类型的值可以**移动**到另一个线程（所有权转移）",
            "Sync：该类型的**引用**可以被多个线程同时共享",
            "几乎所有内置类型都是 Send + Sync",
            "Rc 不是 Send（非原子计数），裸指针 *mut T 也不是 Send"
          ]
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "Rc 不是 Send",
          'code': "use std::rc::Rc;\nuse std::thread;\n\nfn main() {\n    let rc = Rc::new(5);\n    // thread::spawn(move || {\n    //     println!(\"{}\", rc);  // 错误：Rc 不是 Send\n    // });\n    println!(\"Rc 不能跨线程移动\");\n}"
        },
        {
          'type': "h",
          'text': "为什么编译期能查出来？"
        },
        {
          'type': "p",
          'text': "thread::spawn 要求闭包捕获的数据是 Send。编译器在编译期检查，不满足就报错。所以「跨线程移动了非 Send 数据」这类 bug 根本编译不过——数据竞争在编译期被消灭。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "多线程安全的类型",
          'code': "use std::sync::{Arc, Mutex};\nuse std::thread;\n\nfn main() {\n    let shared = Arc::new(Mutex::new(String::from(\"safe\")));\n    let s2 = Arc::clone(&shared);\n    thread::spawn(move || {\n        let mut g = s2.lock().unwrap();\n        g.push_str(\" + thread\");\n    }).join().unwrap();\n    println!(\"{}\", *shared.lock().unwrap());\n}"
        },
        {
          'type': "info",
          'title': "记忆规律",
          'text': "Rc<T> 不是 Send 也不是 Sync；Arc<T> 是 Send + Sync（T 是 Send + Sync 时）；Mutex<T> 是 Send + Sync；裸指针 *const T 不是 Send。这些规则让你不用自己记，编译器帮你把关。"
        },
        {
          'type': "warn",
          'title': "别手动实现",
          'text': "手动实现 Send/Sync 要用 unsafe，因为一旦标错就会出现数据竞争。除非你非常清楚底层原理，否则不要手动实现。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Send 与 Sync：线程安全标记 trait\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Send 与 Sync：线程安全标记 trait\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Send 与 Sync：线程安全标记 trait\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Send：值可跨线程移动；Sync：引用可多线程共享",
            "编译器自动为大多数类型实现",
            "Rc 不是 Send，Arc 是",
            "thread::spawn 在编译期检查 Send",
            "数据竞争在编译期被消灭"
          ]
        }
      ],
      'templates': [
        {
          'name': "Arc 线程共享",
          'code': "use std::sync::{Arc, Mutex};\nuse std::thread;\n\nfn main() {\n    let v = Arc::new(Mutex::new(0));\n    let w = Arc::clone(&v);\n    thread::spawn(move || {\n        *w.lock().unwrap() += 1;\n    }).join().unwrap();\n    println!(\"{}\", *v.lock().unwrap());\n}"
        }
      ]
    },
    {
      'id': "rs-48",
      'title': "文件读写：std::fs 基础",
      'summary': "read_to_string 读文件，write 写文件，错误处理用 Result。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "读写文件是程序的基本功。Rust 的 <code.inline>std::fs</code> 提供了简洁的函数：<code.inline>fs::read_to_string</code> 一行读全文，<code.inline>fs::write</code> 一行写文件。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "写入文件",
          'code': "use std::fs;\n\nfn main() {\n    fs::write(\"hello.txt\", \"你好，Rust！\\n第二行\").expect(\"写入失败\");\n    println!(\"写入完成\");\n}"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "读取文件",
          'code': "use std::fs;\n\nfn main() {\n    let content = fs::read_to_string(\"hello.txt\").expect(\"读取失败\");\n    println!(\"文件内容:\\n{}\", content);\n}"
        },
        {
          'type': "h",
          'text': "追加内容"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "追加写",
          'code': "use std::fs::OpenOptions;\nuse std::io::Write;\n\nfn main() {\n    OpenOptions::new()\n        .append(true)          // 追加模式\n        .open(\"hello.txt\")\n        .expect(\"打开失败\")\n        .write_all(b\"追加一行\\n\")\n        .expect(\"追加失败\");\n    println!(\"追加完成\");\n}"
        },
        {
          'type': "h",
          'text': "逐行读取"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "逐行读取",
          'code': "use std::fs::File;\nuse std::io::{BufRead, BufReader};\n\nfn main() {\n    let file = File::open(\"hello.txt\").expect(\"打开失败\");\n    let reader = BufReader::new(file);\n    for line in reader.lines() {\n        println!(\"{}\", line.expect(\"读取行失败\"));\n    }\n}"
        },
        {
          'type': "warn",
          'title': "文件操作都会失败",
          'text': "文件操作几乎都会失败（文件不存在、无权限），所以一律返回 Result，记得处理错误或用 expect/?。不要假设文件一定存在。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"文件读写：std::fs 基础\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"文件读写：std::fs 基础\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"文件读写：std::fs 基础\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "fs::read_to_string 读全文",
            "fs::write 写文件",
            "OpenOptions::append 追加",
            "BufReader + lines 逐行读",
            "文件操作返回 Result，务必处理错误"
          ]
        }
      ],
      'templates': [
        {
          'name': "写入并读取",
          'code': "use std::fs;\n\nfn main() {\n    fs::write(\"note.txt\", \"第一行\\n第二行\").expect(\"写入失败\");\n    let s = fs::read_to_string(\"note.txt\").expect(\"读取失败\");\n    println!(\"{}\", s);\n}"
        }
      ]
    },
    {
      'id': "rs-49",
      'title': "路径与目录操作：std::path",
      'summary': "Path/PathBuf 处理路径，create_dir 建目录，read_dir 遍历目录。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "处理文件路径用 <code.inline>std::path</code> 的 <code.inline>Path</code>（借用）和 <code.inline>PathBuf</code>（拥有）。目录操作在 <code.inline>std::fs</code>：create_dir 建目录、read_dir 列目录。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "路径操作",
          'code': "use std::path::Path;\n\nfn main() {\n    let p = Path::new(\"/tmp/hello.txt\");\n    println!(\"文件名: {:?}\", p.file_name());\n    println!(\"父目录: {:?}\", p.parent());\n    println!(\"扩展名: {:?}\", p.extension());\n    println!(\"存在吗: {}\", p.exists());\n}"
        },
        {
          'type': "h",
          'text': "目录操作"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "创建与遍历目录",
          'code': "use std::fs;\n\nfn main() {\n    // 创建目录（create_dir_all 可递归创建）\n    fs::create_dir_all(\"my_data/sub\").expect(\"创建目录失败\");\n\n    // 列出目录内容\n    for entry in fs::read_dir(\"my_data\").expect(\"读取目录失败\") {\n        let entry = entry.expect(\"读取条目失败\");\n        let path = entry.path();\n        if path.is_dir() {\n            println!(\"[目录] {}\", path.display());\n        } else {\n            println!(\"[文件] {}\", path.display());\n        }\n    }\n}"
        },
        {
          'type': "h",
          'text': "Path 与字符串互转"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "路径转字符串",
          'code': "use std::path::Path;\n\nfn main() {\n    let p = Path::new(\"/a/b/c.txt\");\n    // display() 用于安全打印路径\n    let s = p.display().to_string();\n    println!(\"字符串: {}\", s);\n\n    let joined = Path::new(\"/a\").join(\"b\").join(\"c.txt\");\n    println!(\"拼接: {}\", joined.display());\n}"
        },
        {
          'type': "tip",
          'title': "join 跨平台",
          'text': "join 方法自动处理分隔符，跨平台安全（Windows 用 \\，Linux 用 /）。别自己拼字符串路径。"
        },
        {
          'type': "warn",
          'title': "路径是平台相关的",
          'text': "Path 的 API 隐藏了平台差异（Windows 和 Unix 的路径格式不同）。跨平台代码尽量用 Path API，别硬编码 / 或 \\。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"路径与目录操作：std::path\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"路径与目录操作：std::path\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"路径与目录操作：std::path\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Path 借用路径，PathBuf 拥有路径",
            "create_dir_all 递归建目录",
            "read_dir 遍历目录，entry.path() 拿路径",
            "display() 安全打印路径",
            "join 拼接路径，跨平台安全"
          ]
        }
      ],
      'templates': [
        {
          'name': "路径信息",
          'code': "use std::path::Path;\n\nfn main() {\n    let p = Path::new(\"data/rust.txt\");\n    println!(\"文件名: {:?}\", p.file_name());\n    println!(\"父目录: {:?}\", p.parent());\n}"
        }
      ]
    },
    {
      'id': "rs-50",
      'title': "命令行参数：std::env 与输入读取",
      'summary': "args 拿命令行参数，read_line 读用户输入，构建交互程序。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "命令行程序需要接收参数和用户输入。<code.inline>std::env::args()</code.inline> 拿到启动时的命令行参数；<code.inline>std::io::stdin().read_line()</code.inline> 读取用户输入。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "读取命令行参数",
          'code': "use std::env;\n\nfn main() {\n    let args: Vec<String> = env::args().collect();\n    println!(\"程序名: {}\", args[0]);\n    for (i, arg) in args.iter().enumerate().skip(1) {\n        println!(\"参数 {}: {}\", i, arg);\n    }\n}"
        },
        {
          'type': "h",
          'text': "读取用户输入"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "读取用户输入",
          'code': "use std::io;\n\nfn main() {\n    println!(\"请输入你的名字：\");\n    let mut name = String::new();\n    io::stdin()\n        .read_line(&mut name)\n        .expect(\"读取输入失败\");\n    let name = name.trim();   // 去掉末尾换行\n    println!(\"你好，{}！\", name);\n}"
        },
        {
          'type': "h",
          'text': "解析数字参数"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "解析参数为数字",
          'code': "use std::env;\n\nfn main() {\n    let args: Vec<String> = env::args().collect();\n    if args.len() < 2 {\n        println!(\"用法: 程序名 <数字>\");\n        return;\n    }\n    let n: i32 = args[1].parse().expect(\"不是合法数字\");\n    println!(\"平方 = {}\", n * n);\n}"
        },
        {
          'type': "warn",
          'title': "args[0] 是程序路径",
          'text': "args[0] 是程序路径本身，真正的参数从 args[1] 开始。忘记这点常导致「第一个参数丢了」的困惑。"
        },
        {
          'type': "info",
          'title': "更专业的解析",
          'text': "更专业的命令行解析可以用第三方库 clap，支持 --flag、-h 帮助等。本章先用标准库，理解原理。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"命令行参数：std::env 与输入读取\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"命令行参数：std::env 与输入读取\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"命令行参数：std::env 与输入读取\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "env::args() 拿到命令行参数",
            "args[0] 是程序名，参数从 args[1] 开始",
            "read_line 读用户输入，记得 trim()",
            "parse() 把字符串解析成数字，失败返回 Err"
          ]
        }
      ],
      'templates': [
        {
          'name': "打招呼程序",
          'code': "use std::io;\n\nfn main() {\n    println!(\"你叫什么名字？\");\n    let mut name = String::new();\n    io::stdin().read_line(&mut name).expect(\"读取失败\");\n    println!(\"你好，{}！\", name.trim());\n}"
        }
      ]
    },
    {
      'id': "rs-51",
      'title': "格式化输出：println! 与 format! 占位符",
      'summary': "{} 显示、{:?} 调试、{:.2} 小数位，format! 把结果存字符串。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "打印和格式化是调试的命脉。Rust 用 <code.inline>{}</code> 占位符：<code.inline>{}</code> 走 Display（人类友好），<code.inline>{:?}</code> 走 Debug（调试格式）。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "基础占位符",
          'code': "fn main() {\n    let name = \"Rust\";\n    let year = 2015;\n    println!(\"{} 诞生于 {}\", name, year);\n    println!(\"{:?} {:?}\", name, year);   // Debug 格式\n}"
        },
        {
          'type': "h",
          'text': "格式化数字"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "数字格式化",
          'code': "fn main() {\n    let pi = 3.1415926;\n    println!(\"默认: {}\", pi);\n    println!(\"两位小数: {:.2}\", pi);\n    println!(\"宽度6: {:6}\", 42);\n    println!(\"左对齐: {:<6}结束\", 42);\n    println!(\"补零: {:06}\", 42);\n}"
        },
        {
          'type': "h",
          'text': "命名参数与位置"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "位置与命名",
          'code': "fn main() {\n    println!(\"{0} 再来一个 {0} 和 {1}\", \"A\", \"B\");\n    println!(\"{name} 今年 {age} 岁\", name = \"小明\", age = 18);\n}"
        },
        {
          'type': "h",
          'text': "format! 与 eprintln!"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "format 与错误输出",
          'code': "fn main() {\n    let greeting = format!(\"你好，{}！\", \"世界\");\n    println!(\"{}\", greeting);   // 再打印出来\n\n    eprintln!(\"这是错误信息，走 stderr\");\n}"
        },
        {
          'type': "table",
          'head': [
            "占位符",
            "含义"
          ],
          'rows': [
            [
              "{}",
              "Display 人类可读"
            ],
            [
              "{:?}",
              "Debug 调试格式"
            ],
            [
              "{:.2}",
              "保留 2 位小数"
            ],
            [
              "{:6}",
              "宽度 6，右对齐"
            ],
            [
              "{:<6}",
              "宽度 6，左对齐"
            ],
            [
              "{:06}",
              "补零到 6 位"
            ]
          ]
        },
        {
          'type': "tip",
          'title': "让自己的类型支持打印",
          'text': "想让自己的类型支持 {} 打印，实现 Display trait；支持 {:?}，实现 Debug（或 #[derive(Debug)]）。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"格式化输出：println! 与 format! 占位符\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"格式化输出：println! 与 format! 占位符\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"格式化输出：println! 与 format! 占位符\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "{} 用 Display，{:?} 用 Debug",
            "自定义结构体要 derive(Debug) 才能 {:?}",
            "{:.2} 控制小数位，{:6} 控制宽度",
            "format! 返回字符串，eprintln! 输出到 stderr"
          ]
        }
      ],
      'templates': [
        {
          'name': "格式化输出",
          'code': "fn main() {\n    let x = 42;\n    let pi = 3.14159;\n    println!(\"x = {}, pi = {:.2}\", x, pi);\n}"
        }
      ]
    },
    {
      'id': "rs-52",
      'title': "错误处理最佳实践与自定义错误类型",
      'summary': "设计清晰的错误类型，用自定义 enum，合理选择 panic 还是 Result。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "好的错误处理让程序在出错时给出清晰信息。核心原则：**可恢复的错误用 Result，不可恢复的（bug）用 panic**。这一章讲如何设计自己的错误类型。"
        },
        {
          'type': "h",
          'text': "自定义错误枚举"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "自定义错误类型",
          'code': "use std::fmt;\n\n#[derive(Debug)]\nenum MyError {\n    NotFound(String),\n    InvalidInput(String),\n}\n\nimpl fmt::Display for MyError {\n    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {\n        match self {\n            MyError::NotFound(s) => write!(f, \"找不到: {}\", s),\n            MyError::InvalidInput(s) => write!(f, \"输入无效: {}\", s),\n        }\n    }\n}\n\nimpl std::error::Error for MyError {}\n\nfn main() {\n    let e = MyError::NotFound(String::from(\"file.txt\"));\n    println!(\"错误: {}\", e);\n}"
        },
        {
          'type': "h",
          'text': "什么时候 panic？"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "panic 的合理使用",
          'code': "fn main() {\n    // 程序逻辑 bug，无法恢复，直接 panic\n    let idx = 100;\n    let arr = [1, 2, 3];\n    if idx >= arr.len() {\n        panic!(\"索引 {} 越界，这是程序 bug\", idx);\n    }\n    println!(\"{}\", arr[idx]);\n}"
        },
        {
          'type': "h",
          'text': "统一的错误转换"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "Box<dyn Error> 简化",
          'code': "use std::fs;\n\nfn load_config(path: &str) -> Result<String, Box<dyn std::error::Error>> {\n    // ? 自动把各种错误转成 Box<dyn Error>\n    let content = fs::read_to_string(path)?;\n    Ok(content)\n}\n\nfn main() {\n    match load_config(\"config.toml\") {\n        Ok(c) => println!(\"配置: {}\", c),\n        Err(e) => eprintln!(\"加载失败: {}\", e),\n    }\n}"
        },
        {
          'type': "list",
          'items': [
            "能用 ? 就用 ?，别到处 match 套 match",
            "把第三方库错误转成自己的错误类型（用 Box<dyn Error> 或 thiserror）",
            "库代码尽量返回 Result，让调用者决定",
            "main 函数返回 Result 时，错误会带退出码打印出来",
            "unwrap 只在「不可能失败」的地方用，并加注释说明"
          ]
        },
        {
          'type': "warn",
          'title': "别把 panic 当错误处理",
          'text': "panic 是崩溃，用户输入错误、文件不存在这类「预期内失败」应该用 Result 优雅处理，而不是让程序崩溃。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"错误处理最佳实践与自定义错误类型\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"错误处理最佳实践与自定义错误类型\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"错误处理最佳实践与自定义错误类型\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "可恢复错误用 Result，不可恢复 bug 用 panic",
            "自定义错误用 enum + Display + Error",
            "Box<dyn Error> 简化多种错误的统一传播",
            "库函数返回 Result，unwrap 留给测试/原型",
            "错误信息要清晰：说出哪里错了、为什么"
          ]
        }
      ],
      'templates': [
        {
          'name': "自定义错误",
          'code': "#[derive(Debug)]\nenum AppError { Empty, TooLong }\n\nfn check(s: &str) -> Result<(), AppError> {\n    if s.is_empty() { Err(AppError::Empty) }\n    else if s.len() > 5 { Err(AppError::TooLong) }\n    else { Ok(()) }\n}\n\nfn main() {\n    println!(\"{:?}\", check(\"hi\"));\n    println!(\"{:?}\", check(\"\"));\n}"
        }
      ]
    },
    {
      'id': "rs-53",
      'title': "单元测试：#[test] 与 cargo test",
      'summary': "用 #[test] 写测试函数，断言 assert_eq!，cargo test 跑全部测试。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "测试是保证代码正确性的关键。Rust 用 <code.inline>#[test]</code> 属性标记测试函数，<code.inline>cargo test</code> 运行所有测试。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "写测试",
          'code': "fn add(a: i32, b: i32) -> i32 { a + b }\n\n#[cfg(test)]\nmod tests {\n    use super::*;\n\n    #[test]\n    fn test_add() {\n        assert_eq!(add(2, 3), 5);\n    }\n\n    #[test]\n    fn test_add_negative() {\n        assert_eq!(add(-1, 1), 0);\n    }\n}\n\nfn main() {\n    println!(\"{}\", add(1, 2));\n}"
        },
        {
          'type': "h",
          'text': "断言宏"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "assert 系列",
          'code': "#[cfg(test)]\nmod tests {\n    #[test]\n    fn test_assert() {\n        assert!(true);                 // 条件为真\n        assert_eq!(1 + 1, 2);          // 相等\n        assert_ne!(1, 2);              // 不相等\n    }\n}\n\nfn main() {}"
        },
        {
          'type': "h",
          'text': "测试失败与 panic"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "should_panic",
          'code': "#[cfg(test)]\nmod tests {\n    #[test]\n    #[should_panic]   // 期望这段代码 panic\n    fn test_should_panic() {\n        let v = vec![1];\n        let _ = v[5];   // 越界 panic\n    }\n}\n\nfn main() {}"
        },
        {
          'type': "h",
          'text': "运行测试"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "cargo test 命令",
          'code': "cargo test\n# 运行单个测试\ncargo test test_add\n# 安静模式只看结果\ncargo test -q"
        },
        {
          'type': "tip",
          'title': "测试里的 println!",
          'text': "测试代码里可以用 <code.inline>println!</code.inline>，但默认被捕获不显示；失败时才显示。加 <code.inline>cargo test -- --nocapture</code> 可强制显示。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"单元测试：#[test] 与 cargo test\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"单元测试：#[test] 与 cargo test\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"单元测试：#[test] 与 cargo test\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "#[test] 标记测试函数",
            "assert!/assert_eq!/assert_ne! 断言",
            "cargo test 运行所有测试",
            "should_panic 期望 panic 的测试",
            "测试模块用 #[cfg(test)] 只在测试时编译"
          ]
        }
      ],
      'templates': [
        {
          'name': "简单测试",
          'code': "fn double(x: i32) -> i32 { x * 2 }\n\n#[cfg(test)]\nmod tests {\n    use super::*;\n    #[test]\n    fn test_double() {\n        assert_eq!(double(4), 8);\n    }\n}\n\nfn main() {\n    println!(\"{}\", double(4));\n}"
        }
      ]
    },
    {
      'id': "rs-54",
      'title': "测试进阶：集成测试与文档测试",
      'summary': "tests/ 目录做集成测试，文档注释里的代码也是测试。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "单元测试（第 53 章）写在 src 内部。更大型的项目还需要**集成测试**（把 crate 当黑盒测）和**文档测试**（确保文档示例正确）。"
        },
        {
          'type': "h",
          'text': "集成测试目录 tests/"
        },
        {
          'type': "p",
          'text': "在项目根建 <code.inline>tests/</code.inline> 目录，里面每个 .rs 文件都是一个集成测试 crate。它可以直接 use 你的库 crate。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "tests/integration_test.rs",
          'code': "// 假设你的库 crate 名是 mylib\n// use mylib::add;\n\n#[test]\nfn test_add() {\n    // assert_eq!(add(1, 2), 3);\n    assert_eq!(1 + 2, 3);\n}"
        },
        {
          'type': "h",
          'text': "文档测试 doctest"
        },
        {
          'type': "p",
          'text': "第 10 章讲过 /// 文档注释。注释里的代码块会被 cargo test 当作测试运行。这保证文档示例永远是对的。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "文档测试示例",
          'code': "/// 把两个数相加\n///\n/// ```\n/// let result = add(1, 2);\n/// assert_eq!(result, 3);\n/// ```\nfn add(a: i32, b: i32) -> i32 {\n    a + b\n}\n\nfn main() {\n    println!(\"{}\", add(1, 2));\n}"
        },
        {
          'type': "h",
          'text': "测试组织对比"
        },
        {
          'type': "table",
          'head': [
            "类型",
            "位置",
            "目的"
          ],
          'rows': [
            [
              "单元测试",
              "src 内 #[cfg(test)]",
              "测内部函数"
            ],
            [
              "集成测试",
              "tests/ 目录",
              "从外部测 crate"
            ],
            [
              "文档测试",
              "/// 文档注释里",
              "保证示例正确"
            ]
          ]
        },
        {
          'type': "info",
          'title': "一起跑",
          'text': "运行 cargo test 会同时跑三种测试：单元 + 集成 + 文档。集成测试目录里的文件也可以用 <code.inline>cargo test --test integration_test</code> 单独跑。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"测试进阶：集成测试与文档测试\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"测试进阶：集成测试与文档测试\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"测试进阶：集成测试与文档测试\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "集成测试放 tests/ 目录，黑盒测试",
            "文档测试保证文档示例可运行",
            "cargo test 一次性跑三种测试",
            "测试是信心来源：改代码不怕改坏"
          ]
        }
      ],
      'templates': [
        {
          'name': "文档测试",
          'code': "/// 求平方\n///\n/// ```\n/// assert_eq!(square(3), 9);\n/// ```\nfn square(x: i32) -> i32 { x * x }\n\nfn main() {\n    println!(\"{}\", square(5));\n}"
        }
      ]
    },
    {
      'id': "rs-55",
      'title': "宏基础：macro_rules! 与常用宏",
      'summary': "宏生成代码，println!/vec! 都是宏，macro_rules! 自定义简单宏。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "宏（macro）是在编译期「生成代码的代码」。你一直在用宏：<code.inline>println!</code.inline>、<code.inline>vec!</code.inline>、<code.inline>assert_eq!</code.inline> 都是。宏和函数的区别：宏可以接受数量可变的参数、操作语法，更灵活。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "常见内置宏",
          'code': "fn main() {\n    println!(\"println! 是宏\");\n    let v = vec![1, 2, 3];\n    println!(\"{:?}\", v);\n    assert_eq!(1 + 1, 2);\n}"
        },
        {
          'type': "h",
          'text': "自定义宏 macro_rules!"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "macro_rules! 定义宏",
          'code': "macro_rules! say_hi {\n    () => {\n        println!(\"你好！\")\n    };\n    ($name:expr) => {\n        println!(\"你好，{}！\", $name)\n    };\n}\n\nfn main() {\n    say_hi!();\n    say_hi!(\"小明\");\n}"
        },
        {
          'type': "h",
          'text': "理解宏匹配"
        },
        {
          'type': "p",
          'text': "<code.inline>macro_rules! 名字 { 模式 => 展开 }</code.inline>。<code.inline>$name:expr</code.inline> 表示匹配一个表达式并命名为 $name。宏在编译期展开成普通代码，零运行时开销。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "类似 vec! 的自定义宏",
          'code': "macro_rules! my_vec {\n    ($($x:expr),*) => {\n        {\n            let mut temp = Vec::new();\n            $(temp.push($x);)*\n            temp\n        }\n    };\n}\n\nfn main() {\n    let v = my_vec![1, 2, 3];\n    println!(\"{:?}\", v);\n}"
        },
        {
          'type': "warn",
          'title': "宏调试困难",
          'text': "宏的调试比较难（展开后的代码报错不好定位）。保持宏简单、多用带参的表达式宏。复杂宏建议用 derive 或过程宏（proc macro）而不是 macro_rules!。"
        },
        {
          'type': "info",
          'title': "现代元编程",
          'text': "现代 Rust 更推荐用 derive 宏（第 56 章）和过程宏实现复杂元编程。macro_rules! 适合简单的语法糖。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"宏基础：macro_rules! 与常用宏\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"宏基础：macro_rules! 与常用宏\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"宏基础：macro_rules! 与常用宏\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "println!/vec! 都是宏",
            "macro_rules! 用 模式 => 展开 定义宏",
            "$name:expr 匹配表达式",
            "宏编译期展开，零运行时开销",
            "复杂元编程用过程宏，别硬写 macro_rules!"
          ]
        }
      ],
      'templates': [
        {
          'name': "自定义宏",
          'code': "macro_rules! double {\n    ($x:expr) => { $x * 2 };\n}\n\nfn main() {\n    println!(\"{}\", double!(21));\n}"
        }
      ]
    },
    {
      'id': "rs-56",
      'title': "派生宏 derive：Debug/Clone/Copy/PartialEq",
      'summary': "#[derive(...)] 一键生成常用 trait 实现，省去手写样板。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "很多 trait 的实现是样板代码（打印、比较、复制）。<code.inline>#[derive(...)]</code.inline> 让编译器自动生成这些实现，极其常用。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "derive 常用组合",
          'code': "#[derive(Debug, Clone, Copy, PartialEq)]\nstruct Point {\n    x: i32,\n    y: i32,\n}\n\nfn main() {\n    let p1 = Point { x: 1, y: 2 };\n    let p2 = p1;              // Copy：赋值是拷贝\n    println!(\"{:?}\", p1);     // Debug：直接打印\n    println!(\"相等吗: {}\", p1 == p2);   // PartialEq：== 比较\n}"
        },
        {
          'type': "h",
          'text': "各 trait 作用"
        },
        {
          'type': "table",
          'head': [
            "trait",
            "用途"
          ],
          'rows': [
            [
              "Debug",
              "{:?} 调试打印"
            ],
            [
              "Clone",
              ".clone() 深拷贝（需要 &self）"
            ],
            [
              "Copy",
              "赋值自动拷贝（栈上小类型）"
            ],
            [
              "PartialEq",
              "== != 比较"
            ],
            [
              "PartialOrd",
              "< > 排序比较"
            ],
            [
              "Eq + Hash",
              "作为 HashMap 键"
            ]
          ]
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "没有 derive 的痛苦",
          'code': "struct User {\n    name: String,\n}\n\nfn main() {\n    let u = User { name: String::from(\"小明\") };\n    // println!(\"{:?}\", u);  // 错误！User 没实现 Debug\n    // 要打印就得手写 impl Debug，太麻烦\n    println!(\"User 无法直接打印\");\n}"
        },
        {
          'type': "h",
          'text': "Copy 与 Clone 的区别"
        },
        {
          'type': "p",
          'text': "<code.inline>Copy</code.inline> 是隐式拷贝（赋值时自动），<code.inline>Clone</code.inline> 是显式拷贝（调 .clone()）。Copy 类型必须能按位复制（栈上小数据），String、Vec 不能 Copy 只能 Clone。"
        },
        {
          'type': "warn",
          'title': "非 Copy 字段",
          'text': "如果类型里有 String、Vec 这类非 Copy 字段，就不能 derive(Copy)，只能 derive(Clone)。derive 时编译器会告诉你哪些能用。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"派生宏 derive：Debug/Clone/Copy/PartialEq\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"派生宏 derive：Debug/Clone/Copy/PartialEq\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"派生宏 derive：Debug/Clone/Copy/PartialEq\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "#[derive(...)] 自动生成 trait 实现",
            "Debug 打印 / Clone 拷贝 / Copy 自动复制 / PartialEq 比较",
            "Copy 只能用于按位复制的简单类型",
            "String、Vec 只能 Clone 不能 Copy",
            "减少大量样板代码"
          ]
        }
      ],
      'templates': [
        {
          'name': "derive 全家桶",
          'code': "#[derive(Debug, Clone, PartialEq)]\nstruct Book { title: String }\n\nfn main() {\n    let b = Book { title: String::from(\"Rust\") };\n    let c = b.clone();\n    println!(\"{:?} {:?} 相等: {}\", b, c, b == c);\n}"
        }
      ]
    },
    {
      'id': "rs-57",
      'title': "序列化：serde + serde_json",
      'summary': "serde 是序列化框架，derive Serialize/Deserialize 后与 JSON 互转。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "程序之间交换数据常需要**序列化**（结构体 <-> JSON/其他格式）。Rust 生态的标配是 <code.inline>serde</code> + <code.inline>serde_json</code>。需要先加依赖。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "Cargo.toml 加依赖",
          'code': "[dependencies]\nserde = { version = \"1\", features = [\"derive\"] }\nserde_json = \"1\""
        },
        {
          'type': "h",
          'text': "结构体与 JSON 互转"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "序列化与反序列化",
          'code': "use serde::{Serialize, Deserialize};\n\n#[derive(Serialize, Deserialize, Debug)]\nstruct User {\n    name: String,\n    age: u8,\n}\n\nfn main() {\n    let u = User { name: String::from(\"小明\"), age: 18 };\n\n    // 结构体 -> JSON 字符串\n    let json = serde_json::to_string(&u).unwrap();\n    println!(\"JSON: {}\", json);\n\n    // JSON 字符串 -> 结构体\n    let back: User = serde_json::from_str(&json).unwrap();\n    println!(\"转回: {:?}\", back);\n}"
        },
        {
          'type': "h",
          'text': "处理 JSON 值"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "动态 JSON",
          'code': "fn main() {\n    let data = r#\"\n    {\n        \"name\": \"Rust\",\n        \"tags\": [\"system\", \"safe\"],\n        \"year\": 2015\n    }\n    \"#;\n    let v: serde_json::Value = serde_json::from_str(data).unwrap();\n    println!(\"name: {}\", v[\"name\"]);\n    println!(\"第一个 tag: {}\", v[\"tags\"][0]);\n    println!(\"year: {}\", v[\"year\"]);\n}"
        },
        {
          'type': "warn",
          'title': "别忘了依赖",
          'text': "记得在 Cargo.toml 加 serde 依赖并开启 derive feature，否则用不了 Serialize/Deserialize 派生宏。忘了会报「找不到 derive」。"
        },
        {
          'type': "info",
          'title': "多种格式",
          'text': "serde 支持很多格式：serde_json（JSON）、serde_yaml（YAML）、serde_bincode（二进制）、toml 等。换格式只需换库，结构体代码不变。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"序列化：serde + serde_json\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"序列化：serde + serde_json\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"序列化：serde + serde_json\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "serde 是 Rust 序列化事实标准",
            "derive(Serialize, Deserialize) 一键支持",
            "serde_json::to_string / from_str 互转",
            "Value 类型可动态访问 JSON",
            "换格式只需换对应 serde_xxx 库"
          ]
        }
      ],
      'templates': [
        {
          'name': "JSON 互转",
          'code': "use serde::{Serialize, Deserialize};\n\n#[derive(Serialize, Deserialize, Debug)]\nstruct Item { id: u32, name: String }\n\nfn main() {\n    let item = Item { id: 1, name: String::from(\"苹果\") };\n    let json = serde_json::to_string(&item).unwrap();\n    println!(\"{}\", json);\n    let back: Item = serde_json::from_str(&json).unwrap();\n    println!(\"{:?}\", back);\n}"
        }
      ]
    },
    {
      'id': "rs-58",
      'title': "时间处理：chrono 简介",
      'summary': "chrono 是时间库，Utc/Local 获取时间，NaiveDateTime 无时区时间。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "处理日期和时间在编程里很常见。Rust 生态的标配是 <code.inline>chrono</code>。它在标准库之外，需要加依赖。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "Cargo.toml",
          'code': "[dependencies]\nchrono = \"0.4\""
        },
        {
          'type': "h",
          'text': "获取当前时间"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "当前时间",
          'code': "use chrono::{Local, Utc};\n\nfn main() {\n    let now_utc = Utc::now();\n    println!(\"UTC 时间: {}\", now_utc);\n\n    let now_local = Local::now();\n    println!(\"本地时间: {}\", now_local);\n}"
        },
        {
          'type': "h",
          'text': "时间运算"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "时间加减",
          'code': "use chrono::{Utc, Duration};\n\nfn main() {\n    let now = Utc::now();\n    let tomorrow = now + Duration::days(1);\n    let yesterday = now - Duration::days(1);\n    println!(\"明天: {}\", tomorrow);\n    println!(\"昨天: {}\", yesterday);\n}"
        },
        {
          'type': "h",
          'text': "格式化与解析"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "格式化时间",
          'code': "use chrono::NaiveDate;\n\nfn main() {\n    // 从字符串解析日期\n    let d = NaiveDate::parse_from_str(\"2026-08-28\", \"%Y-%m-%d\").unwrap();\n    println!(\"解析: {}\", d);\n\n    // 格式化输出\n    println!(\"年: {}\", d.format(\"%Y\"));\n    println!(\"月日: {}\", d.format(\"%m/%d\"));\n}"
        },
        {
          'type': "table",
          'head': [
            "格式符",
            "含义"
          ],
          'rows': [
            [
              "%Y",
              "四位年份"
            ],
            [
              "%m",
              "月份 01-12"
            ],
            [
              "%d",
              "日 01-31"
            ],
            [
              "%H",
              "小时 00-23"
            ],
            [
              "%M",
              "分钟"
            ],
            [
              "%S",
              "秒"
            ]
          ]
        },
        {
          'type': "warn",
          'title': "时区坑",
          'text': "时区容易踩坑：存储时间建议统一用 UTC，展示时再转本地。别在数据库里混存不同时区的时间。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"时间处理：chrono 简介\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"时间处理：chrono 简介\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"时间处理：chrono 简介\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "chrono 是 Rust 时间处理标配",
            "Utc::now() 与 Local::now() 获取时间",
            "Duration 做时间加减",
            "format / parse_from_str 格式化与解析",
            "存储统一用 UTC，展示再转本地"
          ]
        }
      ],
      'templates': [
        {
          'name': "显示时间",
          'code': "use chrono::Local;\n\nfn main() {\n    let now = Local::now();\n    println!(\"{}\", now.format(\"%Y-%m-%d %H:%M:%S\"));\n}"
        }
      ]
    },
    {
      'id': "rs-59",
      'title': "随机数：rand 简介",
      'summary': "rand 生成随机数，thread_rng 随机数生成器，gen_range 取范围。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "生成随机数用 <code.inline>rand</code> crate。<code.inline>rand::thread_rng()</code> 得到一个随机数生成器，<code.inline>gen_range</code> 生成指定范围的值。第 69 章的猜数字游戏会用到。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "Cargo.toml",
          'code': "[dependencies]\nrand = \"0.8\""
        },
        {
          'type': "h",
          'text': "生成随机数"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "基础随机数",
          'code': "use rand::Rng;\n\nfn main() {\n    let mut rng = rand::thread_rng();\n\n    let n: u32 = rng.gen();        // 任意 u32\n    println!(\"随机 u32: {}\", n);\n\n    let in_range: i32 = rng.gen_range(1..=100);   // 1 到 100\n    println!(\"1~100: {}\", in_range);\n\n    let f: f64 = rng.gen();        // 0~1 之间浮点\n    println!(\"浮点: {}\", f);\n}"
        },
        {
          'type': "h",
          'text': "随机布尔与随机选择"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "随机布尔与数组选择",
          'code': "use rand::Rng;\n\nfn main() {\n    let mut rng = rand::thread_rng();\n    let coin: bool = rng.gen();\n    println!(\"抛硬币: {}\", if coin { \"正面\" } else { \"反面\" });\n\n    // 从数组里随机选一个\n    let choices = [\"石头\", \"剪刀\", \"布\"];\n    let idx = rng.gen_range(0..choices.len());\n    println!(\"出拳: {}\", choices[idx]);\n}"
        },
        {
          'type': "info",
          'title': "伪随机",
          'text': "随机数是伪随机，seed 可复现（用于测试）。thread_rng 每次程序运行 seed 都不同。用 <code.inline>StdRng::seed_from_u64</code> 可固定 seed 复现。"
        },
        {
          'type': "warn",
          'title': "密码学安全",
          'text': "密码学安全的随机数用 <code.inline>rand::rngs::OsRng</code> 或专用库，别用 thread_rng 生成密钥。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"随机数：rand 简介\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"随机数：rand 简介\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"随机数：rand 简介\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "rand::thread_rng() 获取随机数生成器",
            "gen() 任意值，gen_range(1..=100) 指定范围",
            "gen 返回 bool 可做抛硬币",
            "伪随机可固定 seed 复现",
            "密钥等敏感随机用 OsRng"
          ]
        }
      ],
      'templates': [
        {
          'name': "随机数演示",
          'code': "use rand::Rng;\n\nfn main() {\n    let mut rng = rand::thread_rng();\n    let roll: u8 = rng.gen_range(1..=6);\n    println!(\"掷骰子: {}\", roll);\n}"
        }
      ]
    },
    {
      'id': "rs-60",
      'title': "网络基础：TcpListener 简介",
      'summary': "标准库 TcpListener 监听端口，TcpStream 处理连接，构建迷你服务器。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "网络编程入门从 TCP 开始。Rust 标准库的 <code.inline>std::net</code> 提供 <code.inline>TcpListener</code>（监听端口）和 <code.inline>TcpStream</code>（一次连接）。可以搭一个最简服务器。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "最简服务器",
          'code': "use std::net::TcpListener;\n\nfn main() {\n    // 监听 127.0.0.1:8080\n    let listener = TcpListener::bind(\"127.0.0.1:8080\").expect(\"绑定端口失败\");\n    println!(\"服务器已启动，监听 8080 端口...\");\n\n    for stream in listener.incoming() {\n        match stream {\n            Ok(stream) => println!(\"新连接: {:?}\", stream),\n            Err(e) => println!(\"连接出错: {}\", e),\n        }\n    }\n}"
        },
        {
          'type': "h",
          'text': "读取客户端数据"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "读取请求数据",
          'code': "use std::io::Read;\nuse std::net::TcpListener;\n\nfn main() {\n    let listener = TcpListener::bind(\"127.0.0.1:8080\").expect(\"绑定失败\");\n    for stream in listener.incoming() {\n        let mut stream = stream.expect(\"连接失败\");\n        let mut buf = [0; 1024];\n        let n = stream.read(&mut buf).expect(\"读取失败\");\n        let text = String::from_utf8_lossy(&buf[..n]);\n        println!(\"收到: {}\", text);\n    }\n}"
        },
        {
          'type': "h",
          'text': "连接客户端"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "连接服务器",
          'code': "use std::io::Write;\nuse std::net::TcpStream;\n\nfn main() {\n    let mut stream = TcpStream::connect(\"127.0.0.1:8080\").expect(\"连接失败\");\n    stream.write_all(b\"你好，服务器！\").expect(\"写入失败\");\n    println!(\"已发送数据\");\n}"
        },
        {
          'type': "info",
          'title': "底层还是框架？",
          'text': "标准库只提供底层 TCP。真实 Web 服务用第三方框架，如 tokio + axum（异步）或 actix-web。第 61 章讲 HTTP 概念。"
        },
        {
          'type': "warn",
          'title': "绑定地址",
          'text': "bind 到 127.0.0.1 只能本机访问；bind 0.0.0.0 才对外。端口被占用会 bind 失败。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"网络基础：TcpListener 简介\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"网络基础：TcpListener 简介\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"网络基础：TcpListener 简介\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "TcpListener::bind 监听端口",
            "listener.incoming() 迭代接受连接",
            "TcpStream 读写数据（Read/Write trait）",
            "标准库只有底层 TCP，Web 用框架",
            "127.0.0.1 本机，0.0.0.0 对外"
          ]
        }
      ],
      'templates': [
        {
          'name': "迷你服务器",
          'code': "use std::net::TcpListener;\n\nfn main() {\n    let listener = TcpListener::bind(\"127.0.0.1:8080\").expect(\"绑定失败\");\n    println!(\"监听中...\");\n    for stream in listener.incoming() {\n        if let Ok(s) = stream {\n            println!(\"有连接: {:?}\", s);\n        }\n    }\n}"
        }
      ]
    },
    {
      'id': "rs-61",
      'title': "HTTP 与 Web 概念：请求、响应、状态码",
      'summary': "搞懂 HTTP 是什么，请求与响应长什么样，常见状态码的含义。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "从第 61 章开始进入 Web 与实战。学 Web 必须先懂 HTTP。HTTP 是浏览器和服务器之间对话的**协议**（规矩）：浏览器发一个「请求」过去，服务器回一个「响应」回来。这条对话简单、直白，却撑起了整个互联网。"
        },
        {
          'type': "h",
          'text': "HTTP 请求长什么样"
        },
        {
          'type': "p",
          'text': "一次 HTTP 请求由**请求行**（方法 + 路径 + 版本）、**请求头**（一堆 key: value）和可选的**请求体**组成。最常见的请求方法有 GET（拿数据）和 POST（提交数据）。"
        },
        {
          'type': "code",
          'lang': "text",
          'title': "一个 GET 请求的样子",
          'code': "GET /index.html HTTP/1.1\nHost: example.com\nUser-Agent: RustClient/1.0\nAccept: text/html\n"
        },
        {
          'type': "h",
          'text': "HTTP 响应长什么样"
        },
        {
          'type': "p",
          'text': "服务器回一个**状态行**（版本 + 状态码 + 原因短语）、**响应头**和**响应体**。状态码是最需要记住的东西。"
        },
        {
          'type': "code",
          'lang': "text",
          'title': "一个响应的样子",
          'code': "HTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13\n\nHello, World!"
        },
        {
          'type': "table",
          'head': [
            "状态码",
            "含义",
            "场景"
          ],
          'rows': [
            [
              "200",
              "OK 成功",
              "请求正常返回"
            ],
            [
              "301/302",
              "重定向",
              "资源换了地址，浏览器去新地址"
            ],
            [
              "400",
              "请求错误",
              "客户端请求写得不对"
            ],
            [
              "401/403",
              "未授权/禁止",
              "没登录或没权限"
            ],
            [
              "404",
              "未找到",
              "路径不存在"
            ],
            [
              "500",
              "服务器内部错误",
              "服务器自己出 bug 了"
            ]
          ]
        },
        {
          'type': "info",
          'title': "URL 的组成",
          'text': "一个 URL 比如 http://example.com:8080/path?q=rust 由协议(http)、域名(example.com)、端口(8080)、路径(/path)、查询参数(?q=rust)组成。Web 框架会自动帮你解析这些。"
        },
        {
          'type': "warn",
          'title': "别背状态码",
          'text': "不需要全背下来。先记住 200 成功、404 找不到、500 服务器错，其它用到再查。第 62 章我们用 Rust 手写一个能解析 HTTP 的迷你服务器。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"HTTP 与 Web 概念：请求、响应、状态码\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"HTTP 与 Web 概念：请求、响应、状态码\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"HTTP 与 Web 概念：请求、响应、状态码\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "HTTP 是浏览器与服务器对话的协议",
            "请求 = 方法 + 路径 + 头 + 体",
            "响应 = 状态码 + 头 + 体",
            "常见状态码：200 / 301 / 404 / 500",
            "URL 由协议、域名、端口、路径、参数组成"
          ]
        }
      ],
      'templates': [
        {
          'name': "状态码速查",
          'code': "fn main() {\n    // 常用状态码速查\n    let codes = [(\"200\", \"成功\"), (\"301\", \"重定向\"), (\"404\", \"未找到\"), (\"500\", \"服务器错误\")];\n    for (code, meaning) in codes {\n        println!(\"{} {}\", code, meaning);\n    }\n}"
        }
      ]
    },
    {
      'id': "rs-62",
      'title': "迷你 HTTP 服务器实战：手写解析请求",
      'summary': "用第 60 章的 TcpListener 手写一个能解析 HTTP 请求并返回响应的迷你服务器。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "有了 HTTP 概念，现在动手写一个迷你 Web 服务器：用标准库的 <code.inline>TcpListener</code> 接收连接，把收到的字节按 HTTP 格式解析，再按格式回一个响应。这一步能让你彻底看清 Web 的本质——不过是「读文本、写文本」。"
        },
        {
          'type': "h",
          'text': "接收并打印请求"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "解析请求行",
          'code': "use std::net::TcpListener;\n\nfn main() {\n    let listener = TcpListener::bind(\"127.0.0.1:8080\").expect(\"绑定失败\");\n    for stream in listener.incoming() {\n        let mut stream = stream.expect(\"连接失败\");\n        let mut buf = [0; 4096];\n        let n = stream.read(&mut buf).expect(\"读取失败\");\n        let request = String::from_utf8_lossy(&buf[..n]);\n        // 请求的第一行就是请求行，例如 GET /hello HTTP/1.1\n        if let Some(first) = request.lines().next() {\n            println!(\"收到请求行: {}\", first);\n        }\n    }\n}"
        },
        {
          'type': "h",
          'text': "根据路径返回不同响应"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "按路径路由",
          'code': "use std::io::{Read, Write};\nuse std::net::TcpListener;\n\nfn handle(request: &str) -> String {\n    // 取请求行，例如 \"GET /hello HTTP/1.1\"\n    let line = request.lines().next().unwrap_or(\"\");\n    let path = line.split_whitespace().nth(1).unwrap_or(\"/\");\n    match path {\n        \"/\" => String::from(\"欢迎来到迷你服务器！\"),\n        \"/hello\" => String::from(\"你好，世界！\"),\n        _ => String::from(\"404 页面不存在\"),\n    }\n}\n\nfn main() {\n    let listener = TcpListener::bind(\"127.0.0.1:8080\").unwrap();\n    for stream in listener.incoming() {\n        let mut stream = stream.unwrap();\n        let mut buf = [0; 4096];\n        let n = stream.read(&mut buf).unwrap();\n        let request = String::from_utf8_lossy(&buf[..n]);\n        let body = handle(&request);\n        let response = format!(\n            \"HTTP/1.1 200 OK\\r\\nContent-Length: {}\\r\\n\\r\\n{}\",\n            body.len(),\n            body\n        );\n        stream.write_all(response.as_bytes()).unwrap();\n    }\n}"
        },
        {
          'type': "info",
          'title': "Content-Length 是干什么的",
          'text': "响应头里的 <code.inline>Content-Length</code> 告诉浏览器响应体有多长（按字节）。少了它浏览器不知道该读多少内容。这是 HTTP/1.1 必须有的字段。"
        },
        {
          'type': "warn",
          'title': "只学概念，别造轮子",
          'text': "手写迷你服务器是为了**理解原理**。生产环境请用 axum / actix-web 等成熟框架，它们处理了编码、超时、并发、安全等大量细节。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"迷你 HTTP 服务器实战：手写解析请求\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"迷你 HTTP 服务器实战：手写解析请求\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"迷你 HTTP 服务器实战：手写解析请求\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "读字节 → 解析请求行 → 匹配路径 → 返回响应",
            "请求行格式: 方法 路径 版本",
            "响应必须带 Content-Length",
            "手写是为了理解，生产用框架",
            "用浏览器访问 http://127.0.0.1:8080 测试"
          ]
        }
      ],
      'templates': [
        {
          'name': "迷你服务器",
          'code': "use std::io::{Read, Write};\nuse std::net::TcpListener;\n\nfn main() {\n    let listener = TcpListener::bind(\"127.0.0.1:8080\").unwrap();\n    for stream in listener.incoming() {\n        let mut stream = stream.unwrap();\n        let mut buf = [0; 4096];\n        let n = stream.read(&mut buf).unwrap();\n        let body = String::from_utf8_lossy(&buf[..n]);\n        println!(\"收到: {}\", body);\n        let resp = \"HTTP/1.1 200 OK\\r\\nContent-Length: 13\\r\\n\\r\\nHello, World!\";\n        stream.write_all(resp.as_bytes()).unwrap();\n    }\n}"
        }
      ]
    },
    {
      'id': "rs-63",
      'title': "异步编程：async/await 与 tokio 运行时",
      'summary': "理解同步阻塞问题，学会用 async/await 写不阻塞的代码，引入 tokio 运行时。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "真实 Web 服务要同时处理成千上万个连接，如果每个连接都占一个线程，资源很快耗尽。解决思路叫**异步**：线程在等待 I/O 时去干别的活。Rust 用 <code.inline>async</code>/<code.inline>await</code> 语法表示异步，配套一个**运行时**（最常用 tokio）来调度。"
        },
        {
          'type': "h",
          'text': "什么是 async/await"
        },
        {
          'type': "p",
          'text': "在函数前加 <code.inline>async</code>，它就变成一个异步函数，调用时不会立即执行，而是返回一个「待办任务」。用 <code.inline>.await</code> 等待它完成。关键在于：等待期间线程不会被占死，可以去处理别的任务。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "第一个异步程序",
          'code': "// Cargo.toml 添加: tokio = { version = \"1\", features = [\"full\"] }\nasync fn say_hello() {\n    println!(\"你好，异步！\");\n}\n\n// #[tokio::main] 把 main 包进异步运行时\n#[tokio::main]\nasync fn main() {\n    say_hello().await;\n    println!(\"主函数结束\");\n}"
        },
        {
          'type': "h",
          'text': "异步的好处"
        },
        {
          'type': "list",
          'items': [
            "一个线程能同时处理海量 I/O 任务",
            "适合网络请求、文件读写、数据库访问等场景",
            "相比多线程，省内存、少切换开销",
            "代码看起来还是同步写法（await 一行搞定）"
          ]
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "等待时干别的活",
          'code': "async fn task(name: &str) {\n    println!(\"{} 开始\", name);\n    // 模拟耗时：睡 500ms，但这段时间线程可以去干别的\n    tokio::time::sleep(std::time::Duration::from_millis(500)).await;\n    println!(\"{} 结束\", name);\n}\n\n#[tokio::main]\nasync fn main() {\n    let t1 = task(\"任务一\");\n    let t2 = task(\"任务二\");\n    // 两个任务同时开始，总耗时约 500ms 而不是 1000ms\n    tokio::join!(t1, t2);\n}"
        },
        {
          'type': "warn",
          'title': "别在异步里睡线程",
          'text': "异步代码里用 <code.inline>std::thread::sleep</code> 会**阻塞整个线程**，破坏异步效果。应该用 <code.inline>tokio::time::sleep</code>，它只挂起当前任务，不占线程。"
        },
        {
          'type': "info",
          'title': "没有运行时不行",
          'text': "async/await 只是语法，真正干活需要运行时。tokio 是最主流的，也常见 async-std、smol。标准库本身不提供运行时。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"异步编程：async/await 与 tokio 运行时\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"异步编程：async/await 与 tokio 运行时\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"异步编程：async/await 与 tokio 运行时\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "async 函数返回任务，.await 等待完成",
            "异步让一个线程同时处理海量 I/O",
            "tokio 是最主流的异步运行时",
            "异步里用 tokio::time::sleep 而非 thread::sleep",
            "#[tokio::main] 启动运行时"
          ]
        }
      ],
      'templates': [
        {
          'name': "异步模板",
          'code': "// Cargo.toml: tokio = { version = \"1\", features = [\"full\"] }\nasync fn work() {\n    println!(\"工作中...\");\n    tokio::time::sleep(std::time::Duration::from_millis(100)).await;\n    println!(\"完成\");\n}\n\n#[tokio::main]\nasync fn main() {\n    work().await;\n}"
        }
      ]
    },
    {
      'id': "rs-64",
      'title': "tokio 进阶：spawn 任务与并发控制",
      'summary': "用 tokio::spawn 开后台任务，用 join!/select! 控制并发，学会真正的并行。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "上一章学了 async/await，但那是「逐个等待」。要真正并发，需要把任务**同时**丢给运行时：<code.inline>tokio::spawn</code> 把任务丢进后台，<code.inline>join!</code> 并行等一批，<code.inline>select!</code> 谁先完成用谁。"
        },
        {
          'type': "h",
          'text': "tokio::spawn 开后台任务"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "后台任务",
          'code': "#[tokio::main]\nasync fn main() {\n    // spawn 返回一个 JoinHandle，可以 .await 等它\n    let handle = tokio::spawn(async {\n        for i in 1..=3 {\n            println!(\"后台任务: {}\", i);\n            tokio::time::sleep(std::time::Duration::from_millis(100)).await;\n        }\n        42 // 任务的返回值\n    });\n    // 主线程干点别的\n    println!(\"主任务继续...\");\n    // 等后台任务结束并取回结果\n    let result = handle.await.expect(\"任务 panic\");\n    println!(\"后台结果: {}\", result);\n}"
        },
        {
          'type': "h",
          'text': "join! 并行等待多个任务"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "join! 并行",
          'code': "async fn download(id: u32) -> u32 {\n    // 模拟下载 1 秒\n    tokio::time::sleep(std::time::Duration::from_millis(1000)).await;\n    id * 100\n}\n\n#[tokio::main]\nasync fn main() {\n    // join! 让三个下载同时进行，总耗时约 1 秒\n    let (a, b, c) = tokio::join!(\n        download(1),\n        download(2),\n        download(3),\n    );\n    println!(\"下载结果: {} {} {}\", a, b, c);\n}"
        },
        {
          'type': "h",
          'text': "select! 谁先完成用谁"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "select! 竞速",
          'code': "async fn fast() -> &'static str { \"快速服务\" }\nasync fn slow() -> &'static str { \"慢速服务\" }\n\n#[tokio::main]\nasync fn main() {\n    // 两个服务同时请求，谁先返回就用谁（常用于请求超时）\n    let result = tokio::select! {\n        r = fast() => r,\n        r = slow() => r,\n    };\n    println!(\"先用: {}\", result);\n}"
        },
        {
          'type': "warn",
          'title': "任务 panic 会怎样",
          'text': "tokio::spawn 的任务 panic 不会直接搞崩主程序，但 <code.inline>handle.await</code> 会返回 <code.inline>Err</code>。生产代码要处理这个错误，别直接 unwrap。"
        },
        {
          'type': "tip",
          'title': "异步不是银弹",
          'text': "CPU 密集计算在异步里反而可能阻塞线程。纯计算的活用 <code.inline>spawn_blocking</code> 或专用线程；I/O 密集才最适合 async。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"tokio 进阶：spawn 任务与并发控制\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"tokio 进阶：spawn 任务与并发控制\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"tokio 进阶：spawn 任务与并发控制\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "tokio::spawn 开后台任务并返回 JoinHandle",
            "join! 并行等待一批任务",
            "select! 取先完成的结果（可用于超时）",
            "任务 panic 要处理 Err",
            "CPU 密集任务别硬塞 async"
          ]
        }
      ],
      'templates': [
        {
          'name': "spawn 模板",
          'code': "#[tokio::main]\nasync fn main() {\n    let handle = tokio::spawn(async {\n        tokio::time::sleep(std::time::Duration::from_millis(100)).await;\n        100\n    });\n    let v = handle.await.expect(\"任务失败\");\n    println!(\"结果: {}\", v);\n}"
        }
      ]
    },
    {
      'id': "rs-65",
      'title': "axum Web 框架入门：第一个路由服务",
      'summary': "用 axum 写真正的 Web 服务：路由、路径参数、返回 JSON，体验生产级开发。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "手写服务器只是理解原理，真正开发用框架。axum 是 tokio 官方生态里的 Web 框架，类型安全、上手快、社区最活跃。这章用 axum 写一个真正的 Web 服务。"
        },
        {
          'type': "h",
          'text': "创建项目并加依赖"
        },
        {
          'type': "code",
          'lang': "toml",
          'title': "Cargo.toml 依赖",
          'code': "[dependencies]\naxum = \"0.8\"\ntokio = { version = \"1\", features = [\"full\"] }"
        },
        {
          'type': "h",
          'text': "第一个路由"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "hello world 服务",
          'code': "use axum::{routing::get, Router};\n\nasync fn hello() -> &'static str {\n    \"Hello, World!\"\n}\n\n#[tokio::main]\nasync fn main() {\n    // Router 把路径绑定到处理函数\n    let app = Router::new().route(\"/\", get(hello));\n    let listener = tokio::net::TcpListener::bind(\"127.0.0.1:3000\")\n        .await\n        .unwrap();\n    println!(\"服务器运行在 http://127.0.0.1:3000\");\n    axum::serve(listener, app).await.unwrap();\n}"
        },
        {
          'type': "h",
          'text': "路径参数与返回 JSON"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "带参数并返回 JSON",
          'code': "use axum::{extract::Path, routing::get, Json, Router};\nuse serde_json::{json, Value};\n\n// 路径 /hello/:name，用 Path 提取\nasync fn greet(Path(name): Path<String>) -> Json<Value> {\n    Json(json!({\n        \"message\": format!(\"你好，{}！\", name),\n        \"time\": 1234567890,\n    }))\n}\n\n#[tokio::main]\nasync fn main() {\n    let app = Router::new()\n        .route(\"/\", get(|| async { \"主页\" }))\n        .route(\"/hello/:name\", get(greet));\n    let listener = tokio::net::TcpListener::bind(\"127.0.0.1:3000\").await.unwrap();\n    axum::serve(listener, app).await.unwrap();\n}"
        },
        {
          'type': "list",
          'items': [
            "用 <code.inline>Router::new()</code> 创建路由表",
            "<code.inline>.route(\"/路径\", get(处理函数))</code> 绑定",
            "<code.inline>Path</code> 提取路径参数，<code.inline>Json</code> 返回 JSON",
            "<code.inline>axum::serve</code> 启动服务"
          ]
        },
        {
          'type': "tip",
          'title': "试试看",
          'text': "启动后用浏览器或 curl 访问 http://127.0.0.1:3000/hello/小明，会看到返回的 JSON。第 66 章加中间件和框架对比。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"axum Web 框架入门：第一个路由服务\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"axum Web 框架入门：第一个路由服务\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"axum Web 框架入门：第一个路由服务\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "axum 是 tokio 生态的主流 Web 框架",
            "Router::new().route() 定义路由",
            "Path 提取路径参数",
            "Json 类型自动序列化返回 JSON",
            "axum::serve 启动服务器"
          ]
        }
      ],
      'templates': [
        {
          'name': "axum 模板",
          'code': "use axum::{routing::get, Router};\n\nasync fn index() -> &'static str { \"主页\" }\n\n#[tokio::main]\nasync fn main() {\n    let app = Router::new().route(\"/\", get(index));\n    let listener = tokio::net::TcpListener::bind(\"127.0.0.1:3000\").await.unwrap();\n    println!(\"运行在 http://127.0.0.1:3000\");\n    axum::serve(listener, app).await.unwrap();\n}"
        }
      ]
    },
    {
      'id': "rs-66",
      'title': "中间件与 Web 框架对比",
      'summary': "给 axum 加日志、CORS 等中间件，横向对比 axum / actix-web / rocket 怎么选。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "真实服务都需要「通用能力」：请求日志、跨域 CORS、限流、超时、鉴权。这些不该写进每个路由，而是做成**中间件**，像洋葱一样包在路由外面，请求进来先过中间件再进路由。"
        },
        {
          'type': "h",
          'text': "在 axum 里加中间件"
        },
        {
          'type': "code",
          'lang': "toml",
          'title': "加 tower-http 依赖",
          'code': "[dependencies]\naxum = \"0.8\"\ntokio = { version = \"1\", features = [\"full\"] }\ntower-http = { version = \"0.6\", features = [\"trace\"] }"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "使用 TraceLayer 打印日志",
          'code': "use axum::{routing::get, Router};\nuse tower_http::trace::TraceLayer;\n\nasync fn ping() -> &'static str { \"pong\" }\n\n#[tokio::main]\nasync fn main() {\n    let app = Router::new()\n        .route(\"/ping\", get(ping))\n        // layer 把中间件加到所有路由上\n        .layer(TraceLayer::new_for_http());\n    let listener = tokio::net::TcpListener::bind(\"127.0.0.1:3000\").await.unwrap();\n    axum::serve(listener, app).await.unwrap();\n}"
        },
        {
          'type': "table",
          'head': [
            "框架",
            "特点",
            "适合"
          ],
          'rows': [
            [
              "axum",
              "tokio 生态、类型安全、tower 中间件",
              "新项目首选，社区最活跃"
            ],
            [
              "actix-web",
              "Actor 模型、性能极佳、生态成熟",
              "高性能场景、老项目"
            ],
            [
              "rocket",
              "配置化、上手极快",
              "中小型项目、快速原型"
            ],
            [
              "warp",
              "过滤器组合式 API",
              "喜欢函数式风格的开发者"
            ]
          ]
        },
        {
          'type': "info",
          'title': "选型建议",
          'text': "新手直接选 axum：文档全、教程多、和 tokio 一家亲。actix-web 性能好但学习曲线略陡。别纠结，能写出服务最重要。"
        },
        {
          'type': "warn",
          'title': "中间件的顺序",
          'text': "中间件有**执行顺序**，先加的 layer 在外层。顺序不同行为可能不同（比如日志层应在外层才能记录所有请求）。用错了排查半天，记住「先加的先执行」。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"中间件与 Web 框架对比\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"中间件与 Web 框架对比\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"中间件与 Web 框架对比\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "中间件给所有路由加通用能力",
            "日志/CORS/限流/鉴权都可用中间件",
            "tower-http 提供常用中间件",
            "axum 适合新手首选",
            "中间件顺序影响行为"
          ]
        }
      ],
      'templates': [
        {
          'name': "带日志的 axum",
          'code': "use axum::{routing::get, Router};\nuse tower_http::trace::TraceLayer;\n\nasync fn ping() -> &'static str { \"pong\" }\n\n#[tokio::main]\nasync fn main() {\n    let app = Router::new().route(\"/ping\", get(ping)).layer(TraceLayer::new_for_http());\n    let listener = tokio::net::TcpListener::bind(\"127.0.0.1:3000\").await.unwrap();\n    axum::serve(listener, app).await.unwrap();\n}"
        }
      ]
    },
    {
      'id': "rs-67",
      'title': "数据库入门：rusqlite 连接 SQLite",
      'summary': "用 rusqlite 操作 SQLite：建表、插入、查询，掌握 Rust 里最基础的数据库操作。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "程序要保存数据，最轻量的方式是 SQLite：一个文件就是整个数据库，零配置，适合学习和小型项目。Rust 里最常用的驱动是 <code.inline>rusqlite</code>。"
        },
        {
          'type': "h",
          'text': "添加依赖"
        },
        {
          'type': "code",
          'lang': "toml",
          'title': "Cargo.toml",
          'code': "[dependencies]\n# bundled 让 rusqlite 自带 SQLite，不用系统安装\nrusqlite = { version = \"0.31\", features = [\"bundled\"] }"
        },
        {
          'type': "h",
          'text': "连接、建表、插入"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "SQLite 基础操作",
          'code': "use rusqlite::{Connection, Result};\n\nfn main() -> Result<()> {\n    // 打开（不存在会自动创建）数据库文件\n    let conn = Connection::open(\"data.db\")?;\n\n    // 建表：IF NOT EXISTS 避免重复建\n    conn.execute(\n        \"CREATE TABLE IF NOT EXISTS users (\n            id INTEGER PRIMARY KEY AUTOINCREMENT,\n            name TEXT NOT NULL,\n            age INTEGER\n        )\",\n        [],\n    )?;\n\n    // 插入：?1 是占位符，安全防注入\n    conn.execute(\n        \"INSERT INTO users (name, age) VALUES (?1, ?2)\",\n        [\"小明\", 18],\n    )?;\n\n    // 查询计数\n    let count: i64 = conn.query_row(\"SELECT COUNT(*) FROM users\", [], |r| r.get(0))?;\n    println!(\"共 {} 个用户\", count);\n    Ok(())\n}"
        },
        {
          'type': "list",
          'items': [
            "<code.inline>Connection::open</code> 打开数据库文件",
            "<code.inline>execute</code> 执行 INSERT/UPDATE/DELETE",
            "<code.inline>query_row</code> 查单行，<code.inline>prepare</code> 查多行",
            "占位符 ?1 防止 SQL 注入"
          ]
        },
        {
          'type': "warn",
          'title': "为什么用占位符",
          'text': "绝不要把用户输入直接拼进 SQL 字符串。用 ?1 占位符让库自动转义，否则会被 SQL 注入攻击。这是数据库开发的红线。"
        },
        {
          'type': "info",
          'title': "其他数据库",
          'text': "生产环境常用 PostgreSQL（tokio-postgres）和 MySQL（sqlx/mysql）。SQLite 学会后 SQL 语法通用，换数据库只是换驱动。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"数据库入门：rusqlite 连接 SQLite\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"数据库入门：rusqlite 连接 SQLite\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"数据库入门：rusqlite 连接 SQLite\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "SQLite 是单文件数据库，零配置",
            "rusqlite 的 bundled 特性免装系统 SQLite",
            "execute 增删改，query_row/prepare 查",
            "占位符 ?1 防 SQL 注入",
            "SQL 语法各大数据库通用"
          ]
        }
      ],
      'templates': [
        {
          'name': "SQLite 模板",
          'code': "use rusqlite::{Connection, Result};\n\nfn main() -> Result<()> {\n    let conn = Connection::open(\"data.db\")?;\n    conn.execute(\n        \"CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)\",\n        [],\n    )?;\n    conn.execute(\"INSERT INTO users (name) VALUES (?1)\", [\"张三\"])?;\n    let count: i64 = conn.query_row(\"SELECT COUNT(*) FROM users\", [], |r| r.get(0))?;\n    println!(\"用户数: {}\", count);\n    Ok(())\n}"
        }
      ]
    },
    {
      'id': "rs-68",
      'title': "数据库实战：完整的增删改查（CRUD）",
      'summary': "把数据库操作封装成函数：增、删、改、查，做一个完整的用户管理模块。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "上一章学会了基础操作，这章把它做成真正的模块：增（Create）、删（Delete）、改（Update）、查（Read）四个函数，这是几乎所有业务系统的核心。"
        },
        {
          'type': "h",
          'text': "定义数据结构和查询函数"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "封装增删改查",
          'code': "use rusqlite::{params, Connection, Result};\n\nstruct User {\n    id: i64,\n    name: String,\n    age: i64,\n}\n\n// 增：插入新用户\nfn add_user(conn: &Connection, name: &str, age: i64) -> Result<()> {\n    conn.execute(\n        \"INSERT INTO users (name, age) VALUES (?1, ?2)\",\n        params![name, age],\n    )?;\n    Ok(())\n}\n\n// 查：列出所有用户\nfn list_users(conn: &Connection) -> Result<Vec<User>> {\n    let mut stmt = conn.prepare(\"SELECT id, name, age FROM users\")?;\n    let rows = stmt.query_map([], |r| {\n        Ok(User { id: r.get(0)?, name: r.get(1)?, age: r.get(2)? })\n    })?;\n    rows.collect()\n}\n\n// 改：按 id 改名\nfn rename(conn: &Connection, id: i64, new_name: &str) -> Result<()> {\n    conn.execute(\"UPDATE users SET name = ?1 WHERE id = ?2\", params![new_name, id])?;\n    Ok(())\n}\n\n// 删：按 id 删除\nfn delete_user(conn: &Connection, id: i64) -> Result<()> {\n    conn.execute(\"DELETE FROM users WHERE id = ?1\", params![id])?;\n    Ok(())\n}\n\nfn main() -> Result<()> {\n    let conn = Connection::open(\"data.db\")?;\n    add_user(&conn, \"小红\", 20)?;\n    add_user(&conn, \"小刚\", 22)?;\n    rename(&conn, 1, \"大红\")?;\n    for u in list_users(&conn)? {\n        println!(\"{}: {} ({}岁)\", u.id, u.name, u.age);\n    }\n    delete_user(&conn, 2)?;\n    println!(\"删除后剩 {} 人\", list_users(&conn)?.len());\n    Ok(())\n}"
        },
        {
          'type': "tip",
          'title': "封装的好处",
          'text': "把数据库操作封装成函数后，上层代码（比如 Web 路由）不用碰 SQL，只调用 add_user、list_users 这些函数。代码清晰、好测试、好复用。"
        },
        {
          'type': "warn",
          'title': "WHERE 别忘",
          'text': "UPDATE 和 DELETE 忘记写 WHERE 会把**所有**行改掉或删掉。写 SQL 时先想清楚条件，生产库建议先 SELECT 确认再执行。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"数据库实战：完整的增删改查（CRUD）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"数据库实战：完整的增删改查（CRUD）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"数据库实战：完整的增删改查（CRUD）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "CRUD = 增删改查四个操作",
            "用函数封装数据库操作",
            "params! 宏传多个参数",
            "UPDATE/DELETE 必须写 WHERE",
            "封装后上层不直接碰 SQL"
          ]
        }
      ],
      'templates': [
        {
          'name': "CRUD 模板",
          'code': "use rusqlite::{params, Connection, Result};\n\nfn add(conn: &Connection, name: &str) -> Result<()> {\n    conn.execute(\"INSERT INTO items (name) VALUES (?1)\", params![name])?;\n    Ok(())\n}\n\nfn list(conn: &Connection) -> Result<Vec<String>> {\n    let mut stmt = conn.prepare(\"SELECT name FROM items\")?;\n    let names = stmt.query_map([], |r| r.get::<_, String>(0))?;\n    names.collect()\n}\n\nfn main() -> Result<()> {\n    let conn = Connection::open(\"data.db\")?;\n    conn.execute(\"CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY, name TEXT)\", [])?;\n    add(&conn, \"写代码\")?;\n    for n in list(&conn)? { println!(\"- {}\", n); }\n    Ok(())\n}"
        }
      ]
    },
    {
      'id': "rs-69",
      'title': "serde 进阶：嵌套结构、枚举与自定义序列化",
      'summary': "处理复杂 JSON：嵌套结构、带标签的枚举、默认值、日期字段，彻底掌握 serde。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "第 57 章学了 serde 基础，这章进阶：真实 API 的 JSON 往往很复杂——有嵌套对象、数组、可空字段、枚举分支。学会这些才能从容解析真实数据。"
        },
        {
          'type': "h",
          'text': "嵌套结构体"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "解析嵌套 JSON",
          'code': "use serde::{Deserialize, Serialize};\n\n#[derive(Serialize, Deserialize, Debug)]\nstruct Address {\n    city: String,\n    street: String,\n}\n\n#[derive(Serialize, Deserialize, Debug)]\nstruct User {\n    name: String,\n    age: u8,\n    // Option 表示字段可能缺失或为 null\n    email: Option<String>,\n    address: Address,\n}\n\nfn main() {\n    let json = r#\"{\n        \"name\": \"小明\",\n        \"age\": 18,\n        \"email\": null,\n        \"address\": { \"city\": \"北京\", \"street\": \"长安街\" }\n    }\"#;\n    let user: User = serde_json::from_str(json).unwrap();\n    println!(\"{:?}\", user);\n    // 序列化回去\n    println!(\"{}\", serde_json::to_string_pretty(&user).unwrap());\n}"
        },
        {
          'type': "h",
          'text': "带标签的枚举（tagged enum）"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "解析消息类型",
          'code': "use serde::{Deserialize, Serialize};\n\n// 常见 API 风格: {\"type\": \"Text\", \"content\": \"...\"}\n#[derive(Serialize, Deserialize, Debug)]\n#[serde(tag = \"type\")]\nenum Message {\n    Text { content: String },\n    Image { url: String, size: u32 },\n}\n\nfn main() {\n    let msg = Message::Text { content: \"你好\".into() };\n    let json = serde_json::to_string(&msg).unwrap();\n    println!(\"{}\", json);\n    // 反序列化回来\n    let back: Message = serde_json::from_str(&json).unwrap();\n    println!(\"{:?}\", back);\n}"
        },
        {
          'type': "h",
          'text': "字段改名与默认值"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "属性宏微调字段",
          'code': "use serde::{Deserialize, Serialize};\n\n#[derive(Serialize, Deserialize, Debug)]\nstruct Config {\n    // JSON 里叫 server_name，Rust 里叫 name\n    #[serde(rename = \"server_name\")]\n    name: String,\n    // 缺失时给默认值\n    #[serde(default = \"default_port\")]\n    port: u16,\n}\n\nfn default_port() -> u16 { 8080 }\n\nfn main() {\n    let json = r#\"{\"server_name\": \"my_app\"}\"#;\n    let cfg: Config = serde_json::from_str(json).unwrap();\n    println!(\"{:?}\", cfg); // port 自动填了默认值 8080\n}"
        },
        {
          'type': "warn",
          'title': "字段名不匹配",
          'text': "JSON 字段和结构体字段名不一致时解析会失败。用 <code.inline>#[serde(rename)]</code> 映射，或字段声明为 <code.inline>Option</code> 容忍缺失。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"serde 进阶：嵌套结构、枚举与自定义序列化\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"serde 进阶：嵌套结构、枚举与自定义序列化\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"serde 进阶：嵌套结构、枚举与自定义序列化\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Option 字段容忍 null 或缺失",
            "嵌套结构体直接对应嵌套 JSON",
            "#[serde(tag)] 解析带标签的枚举",
            "#[serde(rename)] 映射不同字段名",
            "#[serde(default)] 提供缺失字段默认值"
          ]
        }
      ],
      'templates': [
        {
          'name': "serde 嵌套模板",
          'code': "use serde::{Deserialize, Serialize};\n\n#[derive(Serialize, Deserialize, Debug)]\nstruct Data {\n    id: u32,\n    note: Option<String>,\n}\n\nfn main() {\n    let json = r#\"{\"id\": 1, \"note\": null}\"#;\n    let d: Data = serde_json::from_str(json).unwrap();\n    println!(\"{:?}\", d);\n}"
        }
      ]
    },
    {
      'id': "rs-70",
      'title': "命令行工具：clap 解析参数",
      'summary': "用 clap 做专业命令行工具：子命令、选项、帮助文档，自动生成 usage。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "Rust 是写命令行工具的绝佳语言（编译成单文件、启动快、内存安全）。clap 是事实标准的参数解析库，写两行就能得到专业的命令行界面，连帮助文档都自动生成。"
        },
        {
          'type': "h",
          'text': "添加依赖"
        },
        {
          'type': "code",
          'lang': "toml",
          'title': "Cargo.toml",
          'code': "[dependencies]\n# derive 特性让 clap 用宏自动生成解析代码\nclap = { version = \"4\", features = [\"derive\"] }"
        },
        {
          'type': "h",
          'text': "定义参数结构体"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "用 derive 定义参数",
          'code': "use clap::Parser;\n\n/// 一个简单的问候工具\n#[derive(Parser)]\n#[command(name = \"greet\", version, about = \"向某人打招呼\")]\nstruct Args {\n    /// 你的名字\n    name: String,\n\n    /// 打招呼的次数\n    #[arg(short, long, default_value_t = 1)]\n    count: u32,\n\n    /// 是否加上感叹号\n    #[arg(short, long)]\n    excited: bool,\n}\n\nfn main() {\n    let args = Args::parse();\n    for _ in 0..args.count {\n        let msg = format!(\"你好，{}\", args.name);\n        if args.excited {\n            println!(\"{}！\", msg);\n        } else {\n            println!(\"{}。\", msg);\n        }\n    }\n}"
        },
        {
          'type': "code",
          'lang': "text",
          'title': "运行效果",
          'code': "cargo run -- 小明\n# 输出: 你好，小明。\ncargo run -- 小明 -c 2 -e\n# 输出:\n# 你好，小明！\n# 你好，小明！\ncargo run -- --help\n# 自动生成的帮助文档\ncargo run -- --version\n# greet 0.1.0"
        },
        {
          'type': "list",
          'items': [
            "位置参数（name）必填，写在命令行对应位置",
            "-c/--count 用 #[arg(short, long)] 变成选项",
            "default_value_t 给选项默认值",
            "--help / --version 自动生成",
            "/// 文档注释会变成帮助文字"
          ]
        },
        {
          'type': "info",
          'title': "从系统参数读取",
          'text': "第 50 章学的 <code.inline>std::env::args</code> 是手搓版；clap 是专业版——支持选项、默认值、帮助、错误提示，开发效率天差地别。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"命令行工具：clap 解析参数\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"命令行工具：clap 解析参数\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"命令行工具：clap 解析参数\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "clap 是 Rust 命令行工具标准库",
            "#[derive(Parser)] 自动解析",
            "位置参数、选项、默认值、帮助全搞定",
            "/// 注释自动成为帮助文档",
            "编译成单文件，随处分发"
          ]
        }
      ],
      'templates': [
        {
          'name': "clap 模板",
          'code': "use clap::Parser;\n\n/// 模板工具\n#[derive(Parser)]\n#[command(name = \"demo\")]\nstruct Args {\n    /// 要处理的名字\n    name: String,\n    /// 是否详细输出\n    #[arg(short, long)]\n    verbose: bool,\n}\n\nfn main() {\n    let args = Args::parse();\n    println!(\"处理: {}\", args.name);\n    if args.verbose {\n        println!(\"详细模式已开启\");\n    }\n}"
        }
      ]
    },
    {
      'id': "rs-71",
      'title': "项目实战一：命令行待办清单",
      'summary': "综合运用文件读写、循环、集合，做一个能增删查的待办清单工具。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "知识学了要落地。这个项目综合运用前面所有基础：文件读写（第 48 章）、String/Vec（第 26/28 章）、match 与循环。做一个交互式待办清单：输入内容添加，输入 list 查看，输入空行退出。"
        },
        {
          'type': "h",
          'text': "保存与加载"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "文件持久化",
          'code': "use std::fs;\n\n// 把待办写进 tasks.txt，一行一条\nfn save(tasks: &[String]) {\n    let content = tasks.join(\"\\n\");\n    fs::write(\"tasks.txt\", content).expect(\"保存失败\");\n}\n\n// 从 tasks.txt 读回，文件不存在就返回空\nfn load() -> Vec<String> {\n    fs::read_to_string(\"tasks.txt\")\n        .map(|s| s.lines().map(String::from).collect())\n        .unwrap_or_default()\n}"
        },
        {
          'type': "h",
          'text': "主循环"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "交互主程序",
          'code': "use std::io::{self, Write};\n\nfn main() {\n    let mut tasks = load();\n    loop {\n        print!(\"> \");\n        io::stdout().flush().unwrap(); // 立刻显示提示符\n        let mut input = String::new();\n        io::stdin().read_line(&mut input).unwrap();\n        let input = input.trim();\n        match input {\n            \"\" => break, // 空行退出\n            \"list\" => {\n                if tasks.is_empty() {\n                    println!(\"还没有待办\");\n                } else {\n                    for (i, t) in tasks.iter().enumerate() {\n                        println!(\"{}. {}\", i + 1, t);\n                    }\n                }\n            }\n            cmd => {\n                // 其他输入都当成新待办\n                tasks.push(cmd.to_string());\n                save(&tasks);\n                println!(\"已添加: {}\", cmd);\n            }\n        }\n    }\n    println!(\"再见！\");\n}"
        },
        {
          'type': "tip",
          'title': "体验完整流程",
          'text': "运行后输入 写作业、买牛奶、list，再关掉程序重开，数据还在——因为写进了 tasks.txt。这就是最简单的「数据持久化」。"
        },
        {
          'type': "h",
          'text': "还能怎么扩展"
        },
        {
          'type': "list",
          'items': [
            "加 delete N 命令删除第 N 条",
            "加 done N 标记已完成",
            "把存储换成 SQLite（第 67 章）",
            "用 clap（第 70 章）改成命令行参数模式"
          ]
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"项目实战一：命令行待办清单\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"项目实战一：命令行待办清单\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"项目实战一：命令行待办清单\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "综合运用文件读写、Vec、match、循环",
            "fs::read_to_string 读、fs::write 写",
            "flush 让提示符立即显示",
            "数据持久化 = 存到文件",
            "项目可以逐步加功能扩展"
          ]
        }
      ],
      'templates': [
        {
          'name': "待办清单",
          'code': "use std::fs;\nuse std::io::{self, Write};\n\nfn main() {\n    let mut tasks: Vec<String> = fs::read_to_string(\"tasks.txt\")\n        .map(|s| s.lines().map(String::from).collect())\n        .unwrap_or_default();\n    loop {\n        print!(\"> \");\n        io::stdout().flush().unwrap();\n        let mut input = String::new();\n        io::stdin().read_line(&mut input).unwrap();\n        let input = input.trim();\n        if input.is_empty() { break; }\n        if input == \"list\" {\n            for (i, t) in tasks.iter().enumerate() { println!(\"{}. {}\", i + 1, t); }\n        } else {\n            tasks.push(input.to_string());\n            fs::write(\"tasks.txt\", tasks.join(\"\\n\")).unwrap();\n        }\n    }\n}"
        }
      ]
    },
    {
      'id': "rs-72",
      'title': "项目实战二：文件遍历与统计工具",
      'summary': "递归遍历目录，统计每个 Rust 文件的代码行数，练熟路径、递归、迭代器。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "第二个实战：写一个代码统计工具，递归扫描目录，找出所有 <code.inline>.rs</code> 文件并统计行数。会用到第 49 章的 <code.inline>std::path</code> 和递归、迭代器。"
        },
        {
          'type': "h",
          'text': "递归遍历目录"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "遍历目录树",
          'code': "use std::env;\nuse std::fs;\nuse std::path::Path;\n\nfn walk(dir: &Path, depth: usize) {\n    for entry in fs::read_dir(dir).unwrap() {\n        let entry = entry.unwrap();\n        let path = entry.path();\n        if path.is_dir() {\n            // 递归进入子目录\n            println!(\"{}[目录] {}\", \"  \".repeat(depth), path.display());\n            walk(&path, depth + 1);\n        } else {\n            println!(\"{}[文件] {}\", \"  \".repeat(depth), path.display());\n        }\n    }\n}\n\nfn main() {\n    let dir = env::args().nth(1).unwrap_or_else(|| \".\".to_string());\n    walk(Path::new(&dir), 0);\n}"
        },
        {
          'type': "h",
          'text': "统计代码行数"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "统计 .rs 文件行数",
          'code': "use std::env;\nuse std::fs;\nuse std::path::Path;\n\nfn count_lines(path: &Path) -> usize {\n    fs::read_to_string(path)\n        .map(|s| s.lines().count())\n        .unwrap_or(0) // 读不了就当 0 行\n}\n\n// 递归收集所有 .rs 文件及行数\nfn collect_rs(dir: &Path, out: &mut Vec<(String, usize)>) {\n    for entry in fs::read_dir(dir).unwrap() {\n        let entry = entry.unwrap();\n        let p = entry.path();\n        if p.is_dir() {\n            collect_rs(&p, out);\n        } else if p.extension().map(|e| e == \"rs\").unwrap_or(false) {\n            out.push((p.display().to_string(), count_lines(&p)));\n        }\n    }\n}\n\nfn main() {\n    let dir = env::args().nth(1).unwrap_or_else(|| \".\".to_string());\n    let mut files = Vec::new();\n    collect_rs(Path::new(&dir), &mut files);\n    files.sort_by(|a, b| b.1.cmp(&a.1)); // 按行数从多到少排序\n    let total: usize = files.iter().map(|(_, n)| n).sum();\n    println!(\"共 {} 个 .rs 文件，{} 行代码\", files.len(), total);\n    for (f, n) in &files {\n        println!(\"{:>6} 行  {}\", n, f);\n    }\n}"
        },
        {
          'type': "tip",
          'title': "递归的要点",
          'text': "递归函数要处理「目录 → 再进下一层」和「文件 → 处理」两种分支，并且要有一个终止条件（文件就是终止）。<code.inline>read_dir</code> 返回迭代器，逐个处理。"
        },
        {
          'type': "warn",
          'title': "unwrap 在真实工具里的问题",
          'text': "示例为了简短大量用 unwrap，真实工具里遇到无权限目录会直接崩溃。应该用 match 或 ? 优雅处理错误。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"项目实战二：文件遍历与统计工具\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"项目实战二：文件遍历与统计工具\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"项目实战二：文件遍历与统计工具\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "read_dir 遍历目录，is_dir 判断子目录",
            "递归处理目录树",
            "extension() 判断文件后缀",
            "unwrap_or_default 容错",
            "迭代器 + 排序做汇总统计"
          ]
        }
      ],
      'templates': [
        {
          'name': "统计工具",
          'code': "use std::fs;\nuse std::path::Path;\n\nfn walk(dir: &Path, out: &mut usize) {\n    for entry in fs::read_dir(dir).unwrap() {\n        let p = entry.unwrap().path();\n        if p.is_dir() {\n            walk(&p, out);\n        } else if p.extension().map(|e| e == \"rs\").unwrap_or(false) {\n            *out += fs::read_to_string(&p).map(|s| s.lines().count()).unwrap_or(0);\n        }\n    }\n}\n\nfn main() {\n    let mut total = 0;\n    walk(Path::new(\".\"), &mut total);\n    println!(\"Rust 代码总行数: {}\", total);\n}"
        }
      ]
    },
    {
      'id': "rs-73",
      'title': "日志与调试：dbg!、env_logger",
      'summary': "学会高效排查 bug：dbg! 快速打印、env_logger 分级日志、常用调试思路。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "程序出 bug 了怎么办？不会调试的程序员寸步难行。这章教三个武器：<code.inline>dbg!</code> 快速打印变量、<code.inline>env_logger</code> 分级日志、以及一套排查思路。"
        },
        {
          'type': "h",
          'text': "dbg!：最方便的调试宏"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "dbg! 打印表达式",
          'code': "fn main() {\n    let x = 42;\n    // dbg! 会打印\"表达式 = 值\"和所在文件行号，输出到 stderr\n    let y = dbg!(x * 2);\n    let s = String::from(\"rust\");\n    dbg!(&s);\n    dbg!(s.len());\n    // 不需要时删掉这些行就行\n}"
        },
        {
          'type': "h",
          'text': "env_logger：分级日志"
        },
        {
          'type': "code",
          'lang': "toml",
          'title': "依赖",
          'code': "[dependencies]\nlog = \"0.4\"\nenv_logger = \"0.11\""
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "四种日志级别",
          'code': "use log::{debug, error, info, warn};\n\nfn main() {\n    // 初始化日志，默认只显示 info 及以上\n    env_logger::init();\n    info!(\"程序启动\");\n    debug!(\"这是调试信息，默认不显示\");\n    warn!(\"磁盘空间不足 10%\");\n    error!(\"读取配置文件失败\");\n    // 运行: RUST_LOG=debug cargo run 可显示 debug 级别\n}"
        },
        {
          'type': "list",
          'items': [
            "<code.inline>RUST_LOG=debug cargo run</code> 显示 debug 日志",
            "日志级别：error > warn > info > debug > trace",
            "dbg! 适合开发期快速看值",
            "日志适合生产环境长期记录",
            "别把 println! 当日志用"
          ]
        },
        {
          'type': "warn",
          'title': "println! 不是日志",
          'text': "println! 没法控制级别、没法按模块过滤、生产代码还得逐个删。用 log + env_logger，运行时用 RUST_LOG 环境变量控制，删代码？不用。"
        },
        {
          'type': "tip",
          'title': "排查思路",
          'text': "先看错误信息，再缩小范围（注释掉怀疑的代码），用 dbg! 打印关键值，确认在哪一步数据不符合预期。一次只改一个变量，别乱试。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"日志与调试：dbg!、env_logger\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"日志与调试：dbg!、env_logger\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"日志与调试：dbg!、env_logger\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "dbg! 打印表达式+位置，方便快速调试",
            "log + env_logger 做分级日志",
            "RUST_LOG 环境变量控制日志级别",
            "错误信息优先，再定位到具体行",
            "println! 别当日志用"
          ]
        }
      ],
      'templates': [
        {
          'name': "日志模板",
          'code': "use log::{debug, error, info};\n\nfn main() {\n    env_logger::init();\n    info!(\"启动\");\n    debug!(\"调试细节\");\n    error!(\"出错了\");\n}"
        }
      ]
    },
    {
      'id': "rs-74",
      'title': "性能优化：release 编译与基准测试",
      'summary': "学会 release 编译、分析程序热点、用 criterion 写基准测试，让程序飞起来。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "Rust 以性能著称，但要真正快还得会优化。三个要点：用 release 编译（默认 debug 编译慢几十倍）、找到热点（别瞎优化）、用基准测试量化（凭感觉优化等于没优化）。"
        },
        {
          'type': "h",
          'text': "release 编译：一键提速"
        },
        {
          'type': "code",
          'lang': "text",
          'title': "编译方式对比",
          'code': "cargo run          # debug 模式：编译快、运行慢，带调试信息\ncargo run --release # release 模式：编译慢（要做优化）、运行飞快\ncargo build --release # 只编译不运行，产物在 target/release/"
        },
        {
          'type': "code",
          'lang': "toml",
          'title': "再榨一点性能",
          'code': "[profile.release]\n# 优化等级 3（最高），默认就是 3\nopt-level = 3\n# 打开 LTO，链接期全局优化，可能再快 10%-20%\nlto = true\n# 让代码体积更小、更对齐（可选）\ncodegen-units = 1"
        },
        {
          'type': "h",
          'text': "基准测试：量化性能"
        },
        {
          'type': "code",
          'lang': "toml",
          'title': "criterion 依赖",
          'code': "[dev-dependencies]\ncriterion = \"0.5\"\n\n[[bench]]\nname = \"bench\" # benchs/bench.rs\nharness = false"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "基准测试示例（benchs/bench.rs）",
          'code': "use criterion::{black_box, criterion_group, criterion_main, Criterion};\n\nfn sum_up_to(n: u64) -> u64 {\n    (1..=n).sum()\n}\n\nfn bench(c: &mut Criterion) {\n    // black_box 防止编译器把测试代码整个优化掉\n    c.bench_function(\"sum 10000\", |b| {\n        b.iter(|| sum_up_to(black_box(10_000)))\n    });\n}\n\ncriterion_group!(benches, bench);\ncriterion_main!(benches);"
        },
        {
          'type': "list",
          'items': [
            "先测量再优化：用 criterion 或 perf 找热点",
            "90% 的时间花在 10% 的代码上，别平均用力",
            "能用迭代器/标准库就别手写循环（已优化过）",
            "避免无谓的克隆和堆分配",
            "release 模式再谈性能，debug 测的是空气"
          ]
        },
        {
          'type': "warn",
          'title': "过早优化是万恶之源",
          'text': "先把功能写对、代码写清晰，测出瓶颈再优化。为「可能快一点」写出晦涩代码，后续维护全是泪。性能以数据说话。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"性能优化：release 编译与基准测试\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"性能优化：release 编译与基准测试\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"性能优化：release 编译与基准测试\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "release 模式比 debug 快几十倍",
            "opt-level / lto 可再压榨",
            "criterion 是标准基准测试库",
            "先测量热点再优化",
            "过早优化有害，以数据说话"
          ]
        }
      ],
      'templates': [
        {
          'name': "criterion 模板",
          'code': "use criterion::{black_box, criterion_group, criterion_main, Criterion};\n\nfn compute(n: u64) -> u64 { n * n + 1 }\n\nfn bench(c: &mut Criterion) {\n    c.bench_function(\"compute\", |b| b.iter(|| compute(black_box(5))));\n}\n\ncriterion_group!(benches, bench);\ncriterion_main!(benches);"
        }
      ]
    },
    {
      'id': "rs-75",
      'title': "unsafe Rust 与 FFI：调用 C 代码",
      'summary': "了解 unsafe 什么时候用、为什么危险，用 FFI 直接调用 C 标准库函数。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "Rust 强调安全，但现实世界离不开「不安全」：操作裸指针、调用 C 库、写操作系统内核。这些场景要显式写 <code.inline>unsafe</code>。Rust 的安全承诺是「把危险关进 unsafe 笼子里」。"
        },
        {
          'type': "h",
          'text': "unsafe 能做什么"
        },
        {
          'type': "list",
          'items': [
            "解引用裸指针（*const T / *mut T）",
            "调用 unsafe 函数（如 FFI 调 C）",
            "访问或修改可变静态变量",
            "实现 unsafe trait（如 Send/Sync 手写）"
          ]
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "裸指针示例",
          'code': "fn main() {\n    let mut num = 5;\n    // 把引用转成裸指针\n    let r1 = &num as *const i32;\n    let r2 = &mut num as *mut i32;\n    unsafe {\n        // 解引用裸指针必须在 unsafe 里\n        println!(\"r1 = {}\", *r1);\n        *r2 = 10;\n    }\n    println!(\"num = {}\", num);\n}"
        },
        {
          'type': "h",
          'text': "FFI：调用 C 标准库"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "extern 声明 C 函数",
          'code': "// 声明来自 C 标准库的函数，Rust 不知道它安不安全，所以要 unsafe\nunsafe extern \"C\" {\n    fn abs(input: i32) -> i32;\n}\n\nfn main() {\n    // 调用外部 C 函数要 unsafe\n    let v = unsafe { abs(-42) };\n    println!(\"abs(-42) = {}\", v);\n}"
        },
        {
          'type': "danger",
          'title': "unsafe 不关安全",
          'text': "unsafe 只是让**你**来保证安全，编译器不再检查。写错会导致内存损坏、段错误、安全漏洞。规则：能用安全 Rust 就不用 unsafe；用了要写注释说明为什么安全。"
        },
        {
          'type': "info",
          'title': "什么时候真要用",
          'text': "大多数业务代码完全用不到 unsafe。要用的情况：性能热点（手写 SIMD/裸指针）、和 C 库互操作（数据库驱动、图形库底层）、系统编程。学习阶段知道即可。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"unsafe Rust 与 FFI：调用 C 代码\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"unsafe Rust 与 FFI：调用 C 代码\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"unsafe Rust 与 FFI：调用 C 代码\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "unsafe 用于裸指针、调 C、操作静态变量等",
            "unsafe 把安全责任交给你自己",
            "FFI 用 extern 声明 C 函数",
            "能用安全 Rust 就别碰 unsafe",
            "用了 unsafe 要写注释说明安全性"
          ]
        }
      ],
      'templates': [
        {
          'name': "unsafe 模板",
          'code': "fn main() {\n    let mut x = 1;\n    let p = &mut x as *mut i32;\n    unsafe {\n        *p += 1;\n    }\n    println!(\"x = {}\", x);\n}"
        }
      ]
    },
    {
      'id': "rs-76",
      'title': "WebAssembly：把 Rust 编译成 WASM",
      'summary': "用 wasm-bindgen 把 Rust 函数编译成 WASM，在浏览器里运行，感受跨平台威力。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "WebAssembly（WASM）是一种浏览器能跑的字节码，性能接近原生。Rust 是 WASM 支持最好的语言之一：把 Rust 代码编译成 <code.inline>.wasm</code>，前端 JS 直接调用。计算密集的活（图像处理、加密、游戏逻辑）可以用 Rust 跑得飞快。"
        },
        {
          'type': "h",
          'text': "准备工具链"
        },
        {
          'type': "code",
          'lang': "text",
          'title': "安装 wasm 目标",
          'code': "rustup target add wasm32-unknown-unknown\n# 再装 wasm-bindgen-cli 和 wasm-pack（推荐）\ncargo install wasm-pack"
        },
        {
          'type': "code",
          'lang': "toml",
          'title': "Cargo.toml",
          'code': "[lib]\ncrate-type = [\"cdylib\"] # 编译成可以被 JS 加载的动态库\n\n[dependencies]\nwasm-bindgen = \"0.2\""
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "导出给 JS 的函数",
          'code': "use wasm_bindgen::prelude::*;\n\n// 这些函数会被编译成 WASM，JS 可以直接调用\n#[wasm_bindgen]\npub fn add(a: i32, b: i32) -> i32 {\n    a + b\n}\n\n#[wasm_bindgen]\npub fn greet(name: &str) -> String {\n    format!(\"你好，{}！\", name)\n}\n\n#[wasm_bindgen]\npub fn fibonacci(n: u32) -> u32 {\n    match n {\n        0 => 0,\n        1 => 1,\n        _ => fibonacci(n - 1) + fibonacci(n - 2),\n    }\n}"
        },
        {
          'type': "code",
          'lang': "text",
          'title': "编译并发布",
          'code': "wasm-pack build --target web\n# 生成 pkg/ 目录，里面有 .wasm 文件和 JS 胶水代码\n# 在 HTML 里 import 就能用:\n#   import init, { add } from \"./pkg/xxx.js\";\n#   await init();\n#   console.log(add(1, 2)); // 3"
        },
        {
          'type': "tip",
          'title': "何时该用 WASM",
          'text': "纯计算、性能敏感的代码适合 WASM；DOM 操作、与页面交互多的工作还是 JS 更方便。现代 WASM 还支持多线程（wasm threads）。"
        },
        {
          'type': "warn",
          'title': "类型边界",
          'text': "JS 和 WASM 之间传复杂类型（对象、闭包）有限制。字符串要转 <code.inline>String</code>，数组要转 Vec 等。先用简单的数字、字符串练手。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"WebAssembly：把 Rust 编译成 WASM\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"WebAssembly：把 Rust 编译成 WASM\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"WebAssembly：把 Rust 编译成 WASM\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "WASM 是浏览器里的高性能字节码",
            "Rust 对 WASM 支持最好",
            "wasm-pack 一键编译打包",
            "#[wasm_bindgen] 标记导出函数",
            "适合计算密集，DOM 操作留给 JS"
          ]
        }
      ],
      'templates': [
        {
          'name': "WASM 模板",
          'code': "use wasm_bindgen::prelude::*;\n\n#[wasm_bindgen]\npub fn add(a: i32, b: i32) -> i32 {\n    a + b\n}\n\n#[wasm_bindgen]\npub fn hello(name: &str) -> String {\n    format!(\"Hello, {}!\", name)\n}"
        }
      ]
    },
    {
      'id': "rs-77",
      'title': "密码学基础：哈希与常用加密库",
      'summary': "学会用 RustCrypto 生态算哈希、校验数据，理解密码学中的基本安全常识。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "网络安全离不开密码学。入门从**哈希**开始：把任意长度数据变成固定长度指纹，常用于校验文件完整性、存密码、做数字签名。Rust 的密码库集中在 RustCrypto 组织下，质量高、维护活跃。"
        },
        {
          'type': "h",
          'text': "SHA-256 哈希"
        },
        {
          'type': "code",
          'lang': "toml",
          'title': "依赖",
          'code': "[dependencies]\nsha2 = \"0.10\""
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "计算哈希",
          'code': "use sha2::{Digest, Sha256};\n\nfn sha256_hex(text: &str) -> String {\n    let mut hasher = Sha256::new();\n    hasher.update(text.as_bytes()); // 可以多次 update，效果等同拼接\n    let result = hasher.finalize();\n    // 把字节转成十六进制字符串\n    result.iter().map(|b| format!(\"{:02x}\", b)).collect()\n}\n\nfn main() {\n    let h1 = sha256_hex(\"hello world\");\n    let h2 = sha256_hex(\"hello world\");\n    println!(\"{}\", h1);\n    // 相同输入得到相同哈希，可用于校验\n    println!(\"两次结果一致: {}\", h1 == h2);\n}"
        },
        {
          'type': "h",
          'text': "验证文件是否被改动"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "校验文件哈希",
          'code': "use sha2::{Digest, Sha256};\nuse std::fs;\n\nfn file_hash(path: &str) -> String {\n    let bytes = fs::read(path).expect(\"读取失败\");\n    let mut hasher = Sha256::new();\n    hasher.update(&bytes);\n    hasher.finalize().iter().map(|b| format!(\"{:02x}\", b)).collect()\n}\n\nfn main() {\n    let h = file_hash(\"Cargo.toml\");\n    println!(\"Cargo.toml 的 SHA-256: {}\", h);\n}"
        },
        {
          'type': "list",
          'items': [
            "SHA-256：不可逆、固定 64 位十六进制、雪崩效应（改一个字节结果全变）",
            "存密码不能存明文，存哈希（最好用 argon2/bcrypt 加盐）",
            "HTTPS 的证书体系也大量使用哈希和签名",
            "常见库：sha2、md-5（别用于安全）、argon2、aes"
          ]
        },
        {
          'type': "danger",
          'title': "别自己发明加密",
          'text': "密码学极其容易用错（加盐、填充、模式、随机数……）。用经过审计的成熟库，别自己写加密算法。安全领域「自研」几乎等于「有漏洞」。"
        },
        {
          'type': "warn",
          'title': "MD5/SHA-1 已不安全",
          'text': "MD5 和 SHA-1 已被证明可碰撞（找到相同哈希的不同输入），不能用于安全场景。至少用 SHA-256。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"密码学基础：哈希与常用加密库\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"密码学基础：哈希与常用加密库\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"密码学基础：哈希与常用加密库\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "哈希把任意数据变成固定长度指纹",
            "SHA-256 是安全场景底线",
            "相同输入相同输出，可校验完整性",
            "密码要加盐哈希，存 argon2/bcrypt",
            "用成熟库，别自研加密"
          ]
        }
      ],
      'templates': [
        {
          'name': "哈希模板",
          'code': "use sha2::{Digest, Sha256};\n\nfn main() {\n    let mut h = Sha256::new();\n    h.update(b\"hello \");\n    h.update(b\"world\");\n    let hex: String = h.finalize().iter().map(|b| format!(\"{:02x}\", b)).collect();\n    println!(\"{}\", hex);\n}"
        }
      ]
    },
    {
      'id': "rs-78",
      'title': "区块链与智能合约：Rust 生态概览",
      'summary': "了解为什么区块链爱用 Rust，Solana/Substrate/ink! 分别是做什么的。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "Rust 是区块链领域最火的语言之一，因为区块链对**安全**（不能有内存 bug）、**性能**（节点要高吞吐）、**确定性**（跨平台行为一致）要求极高，这恰好是 Rust 的强项。"
        },
        {
          'type': "h",
          'text': "Rust 在区块链里的角色"
        },
        {
          'type': "list",
          'items': [
            "区块链节点（底层协议）：Solana、Polkadot 的节点用 Rust 写",
            "智能合约（链上运行的小程序）：用 Rust 写、编译成 WASM 部署",
            "工具链：钱包、CLI、索引器等生态工具大量用 Rust"
          ]
        },
        {
          'type': "table",
          'head': [
            "框架/链",
            "用 Rust 做什么",
            "说明"
          ],
          'rows': [
            [
              "Solana",
              "节点 + 合约（Program）",
              "高性能公链，合约用 Rust 写"
            ],
            [
              "Polkadot / Substrate",
              "节点框架",
              "用 Substrate 框架搭自己的链"
            ],
            [
              "ink!",
              "智能合约语言",
              "基于 Rust 的合约语言，编译成 WASM"
            ],
            [
              "Stellar / NEAR",
              "节点与合约",
              "其他用 Rust 生态的知名项目"
            ]
          ]
        },
        {
          'type': "h",
          'text': "一个极简「哈希链」概念"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "理解区块如何相连",
          'code': "// 极简演示：每个\"区块\"存上一个区块的哈希，形成链条\n// 任何人改动前面任何数据，后面的哈希全部对不上 -> 可被发现\nfn simple_hash(input: &str) -> u64 {\n    let mut h: u64 = 0;\n    for b in input.bytes() {\n        h = h.wrapping_mul(31).wrapping_add(b as u64);\n    }\n    h\n}\n\nfn main() {\n    // 创世区块\n    let genesis = \"genesis|data=hello\";\n    let h0 = simple_hash(genesis);\n    // 第二个区块：data + 上一个哈希\n    let block1 = format!(\"{}|prev={}\", \"data=world\", h0);\n    let h1 = simple_hash(&block1);\n    println!(\"区块0哈希: {}\", h0);\n    println!(\"区块1哈希: {}\", h1);\n}"
        },
        {
          'type': "info",
          'title': "真实合约更复杂",
          'text': "真实智能合约涉及账户、Gas、签名、共识等大量机制，这里只是展示「哈希链」这个核心直觉。真想做合约开发，从 ink! 或 Solana 官方教程入手。"
        },
        {
          'type': "warn",
          'title': "警惕炒作",
          'text': "区块链泡沫大、技术更新快。作为学习方向没问题，但要分清「概念炒作」和「真实工程价值」。Rust 底层能力本身（安全+性能）是实打实的。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"区块链与智能合约：Rust 生态概览\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"区块链与智能合约：Rust 生态概览\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"区块链与智能合约：Rust 生态概览\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "区块链需要安全、性能、确定性 → Rust 天然合适",
            "节点：Solana / Substrate",
            "合约：ink!（基于 Rust 编译成 WASM）",
            "区块靠哈希链相连，改动可被发现",
            "学习要分清概念炒作与工程价值"
          ]
        }
      ],
      'templates': [
        {
          'name': "哈希链演示",
          'code': "fn simple_hash(input: &str) -> u64 {\n    let mut h: u64 = 0;\n    for b in input.bytes() {\n        h = h.wrapping_mul(31).wrapping_add(b as u64);\n    }\n    h\n}\n\nfn main() {\n    let a = simple_hash(\"data=A\");\n    let b = simple_hash(&format!(\"{}|prev={}\", \"data=B\", a));\n    println!(\"A: {}\\nB: {}\", a, b);\n}"
        }
      ]
    },
    {
      'id': "rs-79",
      'title': "面试高频题一：所有权、借用、生命周期",
      'summary': "把 Rust 最核心的三个概念变成面试问答，查漏补缺，巩固理解。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "学完 78 章，该为面试/实战做准备了。Rust 面试最爱考**所有权、借用、生命周期**。这章以「面试题 + 答案」形式复习核心概念。"
        },
        {
          'type': "h",
          'text': "Q1：什么是所有权？"
        },
        {
          'type': "p",
          'text': "Rust 中每个值有且只有一个所有者（owner）。变量离开作用域时，它的值被自动释放（Drop）。赋值、传参、函数返回都会**移动**所有权。这避免了 C 的悬垂指针和 Java 的 GC 开销。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "移动示例",
          'code': "fn main() {\n    let s = String::from(\"hello\");\n    let t = s;          // s 的所有权移动到 t\n    // println!(\"{}\", s); // 错误！s 已被移动，不能再用\n    println!(\"{}\", t);\n}\n\n// 复制类型（Copy）不受影响：i32、f64、bool、char 等\nfn copy_demo() {\n    let a = 5;\n    let b = a;          // i32 是 Copy，a 还能用\n    println!(\"{} {}\", a, b);\n}"
        },
        {
          'type': "h",
          'text': "Q2：借用是什么？"
        },
        {
          'type': "p",
          'text': "不想移动所有权又想用值，可以**借用**——传引用 <code.inline>&T</code>。规则：要么同时有任意多个不可变借用，要么只有一个可变借用，不能共存。这就是「借用检查器」。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "借用规则示例",
          'code': "fn main() {\n    let mut s = String::from(\"hello\");\n    let r1 = &s;\n    let r2 = &s;        // 多个不可变借用，OK\n    println!(\"{} {}\", r1, r2);\n    // 上面两个借用不再使用后，才能取可变借用\n    let r3 = &mut s;    // 只有一个可变借用，OK\n    r3.push_str(\" world\");\n    println!(\"{}\", r3);\n}"
        },
        {
          'type': "h",
          'text': "Q3：生命周期为什么存在？"
        },
        {
          'type': "p",
          'text': "保证引用不悬垂。编译器需要知道引用和它指向的数据谁先死。多数情况编译器自动推断（省略规则），只有函数返回引用或结构体存引用时需要显式标注 <code.inline>'a</code.inline>。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "生命周期面试题",
          'code': "// 返回两个参数中较长的一个\nfn longest<'a>(x: &'a str, y: &'a str) -> &'a str {\n    if x.len() > y.len() { x } else { y }\n}\n\nfn main() {\n    let result = longest(\"abc\", \"de\");\n    println!(\"较长: {}\", result);\n}"
        },
        {
          'type': "tip",
          'title': "面试加分句",
          'text': "可以说：Rust 在编译期就把「悬垂引用、数据竞争、释放两次」这类内存错误拦截了，而不是运行时崩溃。这是和 C/C++ 最大的区别。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"面试高频题一：所有权、借用、生命周期\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"面试高频题一：所有权、借用、生命周期\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"面试高频题一：所有权、借用、生命周期\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "每个值一个所有者，离开作用域自动释放",
            "移动所有权 vs 借用（&T）",
            "不可变借用可多个，可变借用只能一个",
            "生命周期保证引用不悬垂",
            "多数情况编译器自动推断"
          ]
        }
      ],
      'templates': [
        {
          'name': "longest 面试题",
          'code': "fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {\n    if x.len() > y.len() { x } else { y }\n}\n\nfn main() {\n    println!(\"{}\", longest(\"hello\", \"hi\"));\n}"
        }
      ]
    },
    {
      'id': "rs-80",
      'title': "面试高频题二与结业：学习路线与项目建议",
      'summary': "最后一章：更多面试题、常见陷阱，以及从入门到进阶的完整学习路线。",
      'difficulty': "高级",
      'blocks': [
        {
          'type': "p",
          'text': "最后一章。先补充几个高频面试题，再给一份从新手到高级工程师的**学习路线**和**结业项目建议**。学完 80 章，你已经有能力独立做 Rust 项目了。"
        },
        {
          'type': "h",
          'text': "Q4：Vec 和数组有什么区别？"
        },
        {
          'type': "p",
          'text': "数组 <code.inline>[T; N]</code> 长度固定、在栈上；<code.inline>Vec&lt;T&gt;</code> 长度可变、在堆上。90% 场景用 Vec；知道长度且固定用数组（更快）。"
        },
        {
          'type': "code",
          'lang': "rust",
          'title': "Vec 常见操作",
          'code': "fn main() {\n    let mut v: Vec<i32> = Vec::new();\n    v.push(1);\n    v.push(2);\n    v.push(3);\n    println!(\"长度: {}\", v.len());\n    let sum: i32 = v.iter().sum();\n    println!(\"和: {}\", sum);\n    // 常用的 vec! 宏\n    let v2 = vec![10, 20, 30];\n    println!(\"{:?}\", v2);\n}"
        },
        {
          'type': "h",
          'text': "Q5：如何避免常见的坑？"
        },
        {
          'type': "list",
          'items': [
            "unwrap 在输入不可控时会让程序崩溃 → 用 ? 或 match",
            "字符串拼接用 push_str/format!，别频繁 +（会反复分配）",
            "闭包要修改捕获的变量记得 mut 或 move",
            "HashMap 找不到 key 用 entry API 处理",
            "迭代器惰性：用完要 collect() 才真正执行"
          ]
        },
        {
          'type': "h",
          'text': "后续学习路线"
        },
        {
          'type': "list",
          'items': [
            "第一阶段（已完成）：基础语法 + 所有权 + 集合 + 泛型 trait",
            "第二阶段：Web 全栈 —— axum + SQLite/PostgreSQL + 前端部署",
            "第三阶段：深入 tokio 异步、数据库连接池、错误处理架构",
            "第四阶段：系统编程 —— 网络协议、操作系统、嵌入式（no_std）",
            "常读资源：官方 《The Rust Book》（免费）、Rust 语言圣经（中文）、rustlings 练习题"
          ]
        },
        {
          'type': "h",
          'text': "结业项目建议（三选一）"
        },
        {
          'type': "list",
          'items': [
            "项目A：命令行工具 —— 用 clap + serde + rusqlite 做一个密码管理器或笔记工具",
            "项目B：Web 服务 —— 用 axum + SQLite 做一个待办 API（带用户、鉴权、CRUD）",
            "项目C：爬虫/数据分析 —— 用 reqwest 抓网页、serde 解析、打印统计报表"
          ]
        },
        {
          'type': "warn",
          'title': "最后一句忠告",
          'text': "看教程只是知道，**敲代码才叫学会**。每个例子都自己跑一遍，改一改、破坏一下再修复。遇到编译错误别慌——那是编译器在教你。"
        },
        {
          'type': "info",
          'title': "祝贺",
          'text': "恭喜你学完 80 章 Rust 课程！从安装到高级实战，你已覆盖语言核心、生态、Web、数据库、性能、安全等方向。接下来去动手做项目吧，遇到问题翻回对应的章节。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"面试高频题二与结业：学习路线与项目建议\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"面试高频题二与结业：学习路线与项目建议\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"面试高频题二与结业：学习路线与项目建议\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Vec 可变堆上，数组固定栈上",
            "unwrap 要谨慎，输入不可控用 ?",
            "闭包注意捕获与 mut",
            "路线：基础→Web→异步→系统编程",
            "动手做项目才是真学会"
          ]
        }
      ],
      'templates': [
        {
          'name': "最终模板",
          'code': "fn main() {\n    println!(\"Rust 80 章结业！\");\n    let skills = [\"所有权\", \"生命周期\", \"trait\", \"异步\", \"Web\", \"数据库\"];\n    for s in skills {\n        println!(\"已掌握: {}\", s);\n    }\n}"
        }
      ]
    }
  ]
});

