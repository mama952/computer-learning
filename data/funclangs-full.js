/* ============================================================
   计算机知识库 · 数据：函数式与应用速览（16 章，从函数式思想到主流语言渗透）
   ============================================================ */
window.LANGUAGE_EXTRA = window.LANGUAGE_EXTRA || [];
window.LANGUAGE_EXTRA.push({
  'id': "func-langs",
  'name': "函数式与应用速览",
  'icon': "⇒",
  'tagline': "从 Haskell 到 Elixir、Clojure、Lisp、Racket，深入函数式编程思想。",
  'intro': "函数式编程不是某一种语言的特权，而是一种思维方式：纯函数、不可变数据、无副作用、表达式优先于语句。本套课程带你系统学习 Haskell、Elixir、Clojure、Common Lisp、Racket 五种函数式语言，同时观察函数式思想如何在 JavaScript、Python、Swift 等主流语言中落地。16 章由浅入深，每章都有可运行的代码示例和编辑器模板。",
  'meta': {
    "难度": "入门到进阶",
    "章节": "16 章",
    "场景": "函数式思维 / 多语言对比"
  },
  'lessons': [
    {
      'id': "fl-1",
      'title': "下载与安装 Haskell（函数式编程的起点）",
      'summary': "安装 GHC 编译器，启动 ghci 交互环境，迈出函数式第一步。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "学习函数式编程最好的起点是 Haskell。它是最纯的函数式语言：没有副作用、没有可变变量、没有循环，只有函数和表达式。安装 Haskell 编译器 GHC（Glasgow Haskell Compiler）即可开始学习。"
        },
        {
          'type': "h",
          'text': "下载安装 GHC"
        },
        {
          'type': "list",
          'items': [
            "打开 Haskell 官网：<a href='https://www.haskell.org/downloads/' target='_blank' rel='noopener'>haskell.org/downloads</a>",
            "根据你的操作系统下载对应的安装包（Windows 选 .exe，macOS 选 .pkg）",
            "安装完成后，在终端运行 <code.inline>ghci</code.inline> 启动交互环境",
            "看到 <code.inline>Prelude></code.inline> 提示符，说明安装成功"
          ]
        },
        {
          'type': "warn",
          'title': "Windows 用户注意",
          'text': "Windows 上建议同时安装 <a href='https://code.visualstudio.com' target='_blank' rel='noopener'>VS Code</a> 并安装 <strong>Haskell</strong> 扩展，以获得语法高亮和类型提示。"
        },
        {
          'type': "h",
          'text': "第一个 Haskell 程序"
        },
        {
          'type': "code",
          'lang': "haskell",
          'title': "在 ghci 中运行",
          'code': "-- 在 ghci 中直接输入表达式即可求值\n-- ghci 是 Haskell 的交互环境\n\n-- 基本运算\n1 + 2 * 3\n\n-- 定义函数\nlet square x = x * x\nsquare 5\n\n-- 导入模块\nimport Data.List\nsort [3, 1, 4, 1, 5]"
        },
        {
          'type': "tip",
          'title': "用 VS Code 写 Haskell",
          'text': "安装 VS Code + Haskell 扩展后，可以用 <code.inline>:l hello.hs</code.inline> 在 ghci 中加载文件，实时看到类型推断结果。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"下载与安装 Haskell（函数式编程的起点）\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"下载与安装 Haskell（函数式编程的起点）\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"下载与安装 Haskell（函数式编程的起点）\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Haskell 官网下载地址：haskell.org/downloads",
            "安装后运行 ghci 进入交互环境",
            "Haskell 没有变量，只有函数绑定",
            "let 在 ghci 中定义局部绑定"
          ]
        }
      ],
      'templates': [
        {
          'name': "Hello World",
          'code': "main :: IO ()\nmain = putStrLn \"Hello, Haskell!\""
        },
        {
          'name': "判断奇偶",
          'code': "isEven :: Int -> Bool\nisEven n = n `mod` 2 == 0\n\nmain :: IO ()\nmain = do\n  print (isEven 4)\n  print (isEven 7)"
        }
      ]
    },
    {
      'id': "fl-2",
      'title': "函数式编程是什么：纯函数、不可变、无副作用",
      'summary': "理解函数式编程的三大核心原则，与命令式编程的根本区别。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "命令式编程告诉计算机<strong>怎么做</strong>（先做 A，再做 B），函数式编程告诉计算机<strong>是什么</strong>（结果是函数 f 作用于输入 x）。两者都能解决问题，但思维方式完全不同。"
        },
        {
          'type': "h",
          'text': "核心概念一：纯函数"
        },
        {
          'type': "p",
          'text': "纯函数是<strong>确定性函数</strong>：相同的输入永远产生相同的输出，且不产生任何副作用（不修改外部状态、不读写文件、不打印到屏幕）。纯函数是函数式编程的基石，因为它可以被安全地缓存结果（记忆化）、并行执行、随意组合。"
        },
        {
          'type': "code",
          'lang': "haskell",
          'title': "纯函数示例",
          'code': "-- 纯函数：同输入同输出，无副作用\nadd :: Int -> Int -> Int\nadd x y = x + y\n\n-- 下面这个不是纯函数（有副作用）\n-- badFunction :: Int -> Int\n-- badFunction x = do\n--   putStrLn \"我被调用了\"\n--   return (x + 1)"
        },
        {
          'type': "h",
          'text': "核心概念二：不可变数据"
        },
        {
          'type': "p",
          'text': "在函数式编程中，数据一旦创建就<strong>不能被修改</strong>。你只能通过函数创建一个<strong>新</strong>的数据结构，而不是修改原有的。这听起来低效，但现代函数式语言用<strong>持久化数据结构</strong>（结构共享）保证了高效性。"
        },
        {
          'type': "code",
          'lang': "haskell",
          'title': "不可变数据",
          'code': "-- 注意：let 绑定不可变\nlet x = [1, 2, 3]\nlet y = 0 : x  -- y = [0,1,2,3]，x 没有被修改\n-- x 仍然是 [1,2,3]"
        },
        {
          'type': "h",
          'text': "核心概念三：无副作用"
        },
        {
          'type': "p",
          'text': "副作用是指函数除了返回值之外，还对程序状态产生了影响（修改全局变量、写文件、网络请求等）。纯函数式程序将所有副作用隔离在专门的 <code.inline>IO</code> 类型中，核心逻辑保持纯函数风格。"
        },
        {
          'type': "warn",
          'title': "副作用不是坏的",
          'text': "函数式编程不禁止副作用，而是<strong>管理</strong>副作用。用 <code.inline>IO</code> 类型把副作用标记出来，让副作用的位置一目了然，避免意外耦合。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"函数式编程是什么：纯函数、不可变、无副作用\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"函数式编程是什么：纯函数、不可变、无副作用\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"函数式编程是什么：纯函数、不可变、无副作用\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "纯函数：同输入必同输出，无副作用",
            "不可变数据：创建新数据而非修改旧数据",
            "副作用被隔离在 IO 类型中",
            "函数式 ≠ 不能用副作用，而是显式管理副作用"
          ]
        }
      ],
      'templates': [
        {
          'name': "纯函数示例",
          'code': "absVal :: Int -> Int\nabsVal n\n  | n >= 0    = n\n  | otherwise = -n\n\nmain :: IO ()\nmain = print (absVal (-5))"
        },
        {
          'name': "多个纯函数组合",
          'code': "double :: Int -> Int\ndouble x = x * 2\n\nincrement :: Int -> Int\nincrement x = x + 1\n\ncomposed :: Int -> Int\ncomposed x = increment (double x)\n\nmain :: IO ()\nmain = print (composed 5)"
        }
      ]
    },
    {
      'id': "fl-3",
      'title': "Haskell 入门：纯函数与类型签名",
      'summary': "理解 :: 类型签名、基本类型、函数定义，Haskell 的类型系统是编程语言的教科书。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "Haskell 的类型系统被公认为最严谨的语言之一。每个函数都有<strong>类型签名</strong>（用 <code.inline>::</code> 标注），编译器会在编译期检查类型错误。这让你还没运行代码就知道函数会不会出错。"
        },
        {
          'type': "h",
          'text': "基本类型"
        },
        {
          'type': "code",
          'lang': "haskell",
          'title': "Haskell 基本类型",
          'code': "-- 类型签名：函数名 :: 参数类型 -> 返回类型\n-- Int：整数\n-- Integer：任意精度整数\n-- Double：浮点数\n-- Bool：布尔值\n-- Char：字符\n-- String：字符串（Char 的列表）\n\nadd :: Int -> Int -> Int\nadd x y = x + y\n\n-- 多参数函数：所有参数之间用 -> 分隔\ngreet :: String -> String\ngreet name = \"Hello, \" ++ name\n\nmain :: IO ()\nmain = do\n  print (add 3 4)        -- 7\n  print (greet \"Haskell\") -- \"Hello, Haskell\""
        },
        {
          'type': "h",
          'text': "定义函数"
        },
        {
          'type': "code",
          'lang': "haskell",
          'title': "多种定义方式",
          'code': "-- 等式定义\nsquare :: Int -> Int\nsquare x = x * x\n\n-- 条件定义（guard）\ngrade :: Int -> String\ngrade score\n  | score >= 90 = \"优秀\"\n  | score >= 60 = \"及格\"\n  | otherwise   = \"不及格\"\n\n  -- 注意：otherwise 就是 True 的别名\n\n-- 模式匹配定义（更强大）\nlengthOf :: [a] -> Int\nlengthOf []     = 0      -- 空列表\nlengthOf (_:xs) = 1 + lengthOf xs  -- 非空列表"
        },
        {
          'type': "info",
          'title': "泛型类型：类型变量用小写字母",
          'text': "<code.inline>[a]</code.inline> 表示任意类型的列表，<code.inline>a</code> 是类型变量（任何类型都可以）。这让你写出既通用又类型安全的函数。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Haskell 入门：纯函数与类型签名\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Haskell 入门：纯函数与类型签名\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Haskell 入门：纯函数与类型签名\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "类型签名用 :: 标注，编译期检查",
            "Int/Integer/Double/Bool/Char/String 是基本类型",
            "函数参数之间用 -> 分隔",
            "模式匹配让函数定义更简洁"
          ]
        }
      ],
      'templates': [
        {
          'name': "基本函数定义",
          'code': "fac :: Int -> Int\nfac 0 = 1\nfac n = n * fac (n - 1)\n\nmain :: IO ()\nmain = print (fac 10)"
        },
        {
          'name': "列表长度",
          'code': "myLength :: [a] -> Int\nmyLength [] = 0\nmyLength (_:xs) = 1 + myLength xs\n\nmain :: IO ()\nmain = print (myLength [1,2,3,4,5])"
        }
      ]
    },
    {
      'id': "fl-4",
      'title': "Haskell 的 List 与推导式",
      'summary': "列表推导、递归遍历、模式匹配——列表是 Haskell 的核心数据结构。",
      'difficulty': "入门",
      'blocks': [
        {
          'type': "p",
          'text': "Haskell 没有数组（或者说，列表就是最核心的数据结构）。它用<strong>列表推导式</strong>（list comprehension）生成列表，语法优雅得像数学公式。配合<strong>递归</strong>和<strong>模式匹配</strong>，可以不用任何循环完成所有列表操作。"
        },
        {
          'type': "h",
          'text': "列表推导式"
        },
        {
          'type': "code",
          'lang': "haskell",
          'title': "列表推导式",
          'code': "-- 基本推导式\n-- [表达式 | 生成器, 条件]\n\n-- 生成 1 到 10 的平方\ndoubles = [x * 2 | x <- [1..10]]\n-- 结果：[2,4,6,8,10,12,14,16,18,20]\n\n-- 带条件的推导式\nevens = [x | x <- [1..20], x `mod` 2 == 0]\n-- 结果：[2,4,6,8,10,12,14,16,18,20]\n\n-- 多重生成器（笛卡尔积）\npairs = [(x, y) | x <- [1,2,3], y <- [\"a\",\"b\"]]\n-- 结果：[(1,\"a\"),(1,\"b\"),(2,\"a\"),(2,\"b\"),(3,\"a\"),(3,\"b\")]"
        },
        {
          'type': "h",
          'text': "模式匹配与递归"
        },
        {
          'type': "code",
          'lang': "haskell",
          'title': "模式匹配递归",
          'code': "-- 求列表之和\nsumList :: [Int] -> Int\nsumList []     = 0\nsumList (x:xs) = x + sumList xs\n\n-- 求列表之积\nproductList :: [Int] -> Int\nproductList []     = 1\nproductList (x:xs) = x * productList xs\n\n-- 判断元素是否在列表中\ncontains :: Eq a => a -> [a] -> Bool\ncontains _ []     = False\ncontains y (x:xs) = y == x || contains y xs\n\nmain :: IO ()\nmain = do\n  print (sumList [1..10])\n  print (contains 3 [1,2,4,5])"
        },
        {
          'type': "h",
          'text': "递归是常态"
        },
        {
          'type': "p",
          'text': "Haskell 没有 for/while 循环（虽然可以用 <code.inline>map</code>/ <code.inline>filter</code> 等高级函数替代）。列表处理的最基础方式是<strong>递归 + 模式匹配</strong>：处理空列表是基本情况，处理非空列表时先处理第一个元素，再递归处理剩余部分。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Haskell 的 List 与推导式\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Haskell 的 List 与推导式\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Haskell 的 List 与推导式\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "列表推导式像数学公式：[表达式 | 生成器, 条件]",
            "<code.inline>x <- [1..10]</code> 表示从列表取元素",
            "递归 + 模式匹配是列表处理的基石",
            "[] 匹配空列表，(x:xs) 匹配非空列表"
          ]
        }
      ],
      'templates': [
        {
          'name': "斐波那契数列",
          'code': "fib :: Int -> Int\nfib 0 = 0\nfib 1 = 1\nfib n = fib (n-1) + fib (n-2)\n\nmain :: IO ()\nmain = mapM_ print (map fib [0..10])"
        },
        {
          'name': "列表推导式示例",
          'code': "-- 找出 1-100 中能被 3 或 5 整除的数\nresult = [x | x <- [1..100], x `mod` 3 == 0 || x `mod` 5 == 0]\nmain :: IO ()\nmain = print (sum result)"
        }
      ]
    },
    {
      'id': "fl-5",
      'title': "Haskell 的类型系统与 Maybe / Either",
      'summary': "用 Maybe 和 Either 优雅地处理「不存在」和「错误」，告别 Null 指针。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "在命令式语言中，空值通常用 <code.inline>null</code> 或 <code.inline>None</code> 表示，但这会导致大量的空指针异常。Haskell 用<strong>类型系统</strong>在编译期保证不会有空值：<code.inline>Maybe a</code> 表示「可能有值，也可能没有」，<code.inline>Either a b</code> 表示「成功或失败」。"
        },
        {
          'type': "h",
          'text': "Maybe：有或无"
        },
        {
          'type': "code",
          'lang': "haskell",
          'title': "Maybe 类型",
          'code': "-- Maybe 定义：data Maybe a = Nothing | Just a\n\n-- 安全除法：除数为 0 时返回 Nothing\nsafeDiv :: Double -> Double -> Maybe Double\nsafeDiv _ 0 = Nothing\nsafeDiv x y = Just (x / y)\n\n-- 使用 Maybe\nmain :: IO ()\nmain = do\n  print (safeDiv 10 2)   -- Just 5.0\n  print (safeDiv 10 0)   -- Nothing\n  -- 用 case 处理 Maybe\n  case safeDiv 10 0 of\n    Nothing -> putStrLn \"除数不能为零\"\n    Just v  -> putStrLn (\"结果是: \" ++ show v)"
        },
        {
          'type': "h",
          'text': "Either：成功或失败"
        },
        {
          'type': "code",
          'lang': "haskell",
          'title': "Either 类型",
          'code': "-- Either 定义：data Either a b = Left a | Right b\n-- 通常 Left 表示错误，Right 表示成功\n\n-- 尝试解析整数\ntoInt :: String -> Either String Int\ntoInt s = case reads s of\n  [(n, \"\")] -> Right n\n  _         -> Left (\"无法解析: \" ++ s)\n\nmain :: IO ()\nmain = do\n  print (toInt \"42\")   -- Right 42\n  print (toInt \"abc\")  -- Left \"无法解析: abc\"\n  -- 用 pattern matching 处理\n  case toInt \"42\" of\n    Left err  -> putStrLn err\n    Right val -> putStrLn (\"成功: \" ++ show val)"
        },
        {
          'type': "h",
          'text': "为什么这比 null 好"
        },
        {
          'type': "p",
          'text': "用 <code.inline>Maybe</code> / <code.inline>Either</code> 后，编译器会<strong>强制</strong>你处理所有情况。如果你忘了处理 <code.inline>Nothing</code> 或 <code.inline>Left</code>，代码根本编译不过。这在编译期就消灭了空指针异常，而不需要靠运行时防御。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Haskell 的类型系统与 Maybe / Either\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Haskell 的类型系统与 Maybe / Either\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Haskell 的类型系统与 Maybe / Either\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Maybe a = Nothing | Just a，表示可能有值",
            "Either a b = Left a | Right b，表示成功或失败",
            "编译器强制你处理所有情况，消灭空指针异常",
            "Haskell 没有 null，用 Maybe 表达」不存在」"
          ]
        }
      ],
      'templates': [
        {
          'name': "安全查找",
          'code': "import Data.List (find)\n\nfindMax :: [Int] -> Maybe Int\nfindMax [] = Nothing\nfindMax xs = Just (maximum xs)\n\nmain :: IO ()\nmain = do\n  print (findMax [1, 3, 5, 2, 4])  -- Just 5\n  print (findMax [])               -- Nothing"
        },
        {
          'name': "错误处理",
          'code': "data Parser a = OK a | Err String\n\nparseAge :: String -> Parser Int\nparseAge s = case reads s of\n  [(n, \"\")] -> if n >= 0 && n <= 150\n               then OK n\n               else Err \"年龄超出范围\"\n  _         -> Err \"无法解析\"\n\nmain :: IO ()\nmain = do\n  print (parseAge \"25\")   -- OK 25\n  print (parseAge \"-5\")   -- Err \"年龄超出范围\"\n  print (parseAge \"abc\")  -- Err \"无法解析\""
        }
      ]
    },
    {
      'id': "fl-6",
      'title': "Haskell 函数式思维：map / fold / filter",
      'summary': "高阶函数是 Haskell 的核心武器：map 映射、filter 过滤、fold 归约。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "函数式编程的核心是<strong>高阶函数</strong>：接受函数作为参数的函数。Haskell 提供了三个最常用的高阶函数：<code.inline>map</code>（映射）、<code.inline>filter</code>（过滤）、<code.inline>fold</code>（归约），合称「函数式三剑客」。学会它们，你就学会了函数式思维。"
        },
        {
          'type': "h",
          'text': "map / filter"
        },
        {
          'type': "code",
          'lang': "haskell",
          'title': "map 与 filter",
          'code': "-- map：对列表每个元素应用函数\n-- filter：保留满足条件的元素\n\nmain :: IO ()\nmain = do\n  -- map 示例：每个数乘以 2\n  let doubled = map (* 2) [1, 2, 3, 4, 5]\n  print doubled  -- [2,4,6,8,10]\n\n  -- filter 示例：只保留偶数\n  let evens = filter even [1..10]\n  print evens    -- [2,4,6,8,10,12,14,16,18,20]\n\n  -- 组合使用：先过滤再映射\n  let result = map (* 3) (filter even [1..10])\n  print result   -- [6,12,18,24,30]"
        },
        {
          'type': "h",
          'text': "fold：万能归约函数"
        },
        {
          'type': "code",
          'lang': "haskell",
          'title': "foldl 与 foldr",
          'code': "-- foldl：从左往右归约\n-- foldr：从右往左归约\n-- 三个参数：函数、初始值、列表\n\nmain :: IO ()\nmain = do\n  -- 求和\n  let sumVal = foldl (+) 0 [1..10]\n  print sumVal  -- 55\n\n  -- 求积\n  let prod = foldl (*) 1 [1..5]\n  print prod  -- 120\n\n  -- foldr 示例：反转列表\n  let reversed = foldr (:) [] [1..5]\n  print reversed  -- [5,4,3,2,1]\n\n  -- 函数组合：用 (.) 连接函数\n  let doubleThenPlus = ((+1) . (*2))\n  print (doubleThenPlus 5)  -- 11"
        },
        {
          'type': "h",
          'text': "函数组合（.) "
        },
        {
          'type': "p",
          'text': "Haskell 的 <code.inline>(.)</code> 运算符用于函数组合：<code.inline>(f . g) x = f (g x)</code>。它让多个小函数可以像管道一样连接起来，形成复杂的处理流程，同时保持代码的可读性。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Haskell 函数式思维：map / fold / filter\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Haskell 函数式思维：map / fold / filter\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Haskell 函数式思维：map / fold / filter\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "map f xs：对每个元素应用函数 f",
            "filter p xs：保留满足条件 p 的元素",
            "foldl/foldr：归约列表为单个值",
            "函数组合 (.) 让函数像管道一样连接"
          ]
        }
      ],
      'templates': [
        {
          'name': "字符串处理管道",
          'code': "import Data.Char (toUpper)\n\n-- 用函数组合处理字符串\nprocess :: String -> String\nprocess = unwords . map reverse . words\n\nmain :: IO ()\nmain = do\n  print (process \"hello world haskell\")  -- \"olleh dlrow llehsah\"\n  -- 用 map + filter 统计元音\n  let vowels = filter (`elem` \"aeiou\") \"hello world\"\n  print (length vowels)  -- 3"
        },
        {
          'name': "高阶函数实战",
          'code': "-- 自定义高阶函数\napplyTwice :: (a -> a) -> a -> a\napplyTwice f x = f (f x)\n\n-- 多次应用\napplyN :: Int -> (a -> a) -> a -> a\napplyN 0 f x = x\napplyN n f x = applyTwice f (applyN (div n 2) f x)\n\nmain :: IO ()\nmain = do\n  print (applyTwice (+3) 10)   -- 16\n  print (applyN 3 (*2) 1)      -- 8"
        }
      ]
    },
    {
      'id': "fl-7",
      'title': "Elixir 入门：不可变与模式匹配",
      'summary': "iex 交互环境、let 绑定、模式匹配 =，理解 Elixir 的不可变世界。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "Elixir 是运行在 Erlang VM（BEAM）上的现代函数式语言，专为高并发分布式系统设计。它的核心武器是<strong>模式匹配</strong>：<code.inline>=</code> 不是赋值，而是<strong>匹配</strong>——左边必须匹配右边，否则报错。配合<strong>不可变数据</strong>和<strong>守卫子句</strong>（guard），让代码既简洁又安全。"
        },
        {
          'type': "h",
          'text': "安装与 iex 交互"
        },
        {
          'type': "list",
          'items': [
            "访问 Elixir 官网：<a href='https://elixir-lang.org/install.html' target='_blank' rel='noopener'>elixir-lang.org/install.html</a>",
            "Windows 用户运行 <code.inline>iex</code> 进入交互环境",
            "macOS 用户运行 <code.inline>iex</code> 进入交互环境",
            "看到 <code.inline>iex(1)></code> 提示符即安装成功"
          ]
        },
        {
          'type': "h",
          'text': "模式匹配与不可变"
        },
        {
          'type': "code",
          'lang': "elixir",
          'title': "Elixir 基础",
          'code': "# 不可变变量\nname = \"小明\"\nIO.puts(\"你好，#{name}\")\n\n# 模式匹配：= 是匹配不是赋值\n{x, y} = {1, 2}\nIO.inspect(x)  # 1\nIO.inspect(y)  # 2\n\n# 模式匹配失败会抛错误\n# {_a, _b} = {1, 2, 3}  # ** (MatchError)\n\n# 丢弃变量\n{_a, y} = {1, 2}\nIO.inspect(y)  # 2\n\n# 字符串插值\nIO.puts(\"我的名字是 #{name}\")"
        },
        {
          'type': "h",
          'text': "守卫子句（Guard Clauses）"
        },
        {
          'type': "code",
          'lang': "elixir",
          'title': "case 与守卫",
          'code': "# case + 守卫\njudge_score = fn\n  score when score >= 90 -> \"优秀\"\n  score when score >= 60 -> \"及格\"\n  _ -> \"不及格\"\nend\n\nIO.puts(judge_score.(85))  # 及格\nIO.puts(judge_score.(45))  # 不及格\n\n# 列表模式匹配\n[head | tail] = [1, 2, 3]\nIO.inspect(head)  # 1\nIO.inspect(tail)  # [2, 3]\n\n# 空列表匹配\n[] = []  # 匹配成功\n[_ | _] = [1]  # 非空列表匹配"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Elixir 入门：不可变与模式匹配\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Elixir 入门：不可变与模式匹配\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Elixir 入门：不可变与模式匹配\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Elixir 变量不可变，重新赋值会报错",
            "= 是模式匹配，左边必须匹配右边",
            "case ... when ... 提供守卫子句",
            "列表解构 [head | tail] 是常用模式"
          ]
        }
      ],
      'templates': [
        {
          'name': "FizzBuzz",
          'code': "defmodule FizzBuzz do\n  def solve(n) do\n    cond do\n      rem(n, 15) == 0 -> \"FizzBuzz\"\n      rem(n, 3) == 0  -> \"Fizz\"\n      rem(n, 5) == 0  -> \"Buzz\"\n      true            -> to_string(n)\n    end\n  end\nend\n\nEnum.each(1..100, fn n -> IO.puts(FizzBuzz.solve(n)) end)"
        },
        {
          'name': "模式匹配示例",
          'code': "# 模式匹配与守卫\nprocess = fn\n  {0, y} -> IO.puts(\"x 是零，y = #{y}\")\n  {x, 0} -> IO.puts(\"y 是零，x = #{x}\")\n  {x, y} when x > y -> IO.puts(\"x 大于 y\")\n  {x, y} when x < y -> IO.puts(\"y 大于 x\")\n  _ -> IO.puts(\"相等\")\nend\n\nprocess.({3, 5})\nprocess.({5, 3})\nprocess.({3, 3})"
        }
      ]
    },
    {
      'id': "fl-8",
      'title': "Elixir 的函数与闭包",
      'summary': "def/defp、匿名函数 fn、管道 |> 运算符，Elixir 的函数式语法。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "Elixir 的函数定义非常简洁：<code.inline>def</code> 定义公共函数，<code.inline>defp</code> 定义私有函数。匿名函数用 <code.inline>fn</code> 定义，保存为变量后可以像其他语言一样传递。Elixir 最独特的特性是 <strong>管道运算符</strong> <code.inline>|></code>，让函数调用像数据流动一样清晰。"
        },
        {
          'type': "h",
          'text': "def / defp / 匿名函数"
        },
        {
          'type': "code",
          'lang': "elixir",
          'title': "函数定义",
          'code': "defmodule Math do\n  # 公共函数\n  def add(a, b) do\n    a + b\n  end\n\n  # 私有函数\n  defp double(x), do: x * 2\n\n  # 多参数函数\n  def greet(name, greeting \\ \"Hello\") do\n    \"#{greeting}, #{name}!\"\n  end\nend\n\nIO.puts(Math.add(3, 5))\nIO.puts(Math.greet(\"小明\"))\nIO.puts(Math.greet(\"小红\", \"早上好\"))\n\n# 匿名函数\nsquare = fn x -> x * x end\nIO.inspect(square.(4))  # 16\n\n# 捕获函数语法\ntriple = &(&1 * 3)\nIO.inspect(triple.(5))  # 15"
        },
        {
          'type': "h",
          'text': "管道运算符 |>"
        },
        {
          'type': "code",
          'lang': "elixir",
          'title': "管道运算符",
          'code': "IO.puts(\"管道示例：\")\n\n# 不用管道：嵌套调用\nresult = String.upcase(String.trim(\"  hello  \"))\nIO.inspect(result)  # \"HELLO\"\n\n# 用管道：从左到右读取\nresult2 = \"  hello  \" |> String.trim() |> String.upcase()\nIO.inspect(result2)  # \"HELLO\"\n\n# 管道是函数式风格的精髓\n\"hello world\" |> String.split() |> Enum.reverse() |> Enum.join(\"-\")\n|> IO.inspect()  # \"world-hello\""
        },
        {
          'type': "h",
          'text': "尾递归优化"
        },
        {
          'type': "p",
          'text': "Elixir（和所有 BEAM 语言）对<strong>尾递归</strong>有自动优化：当递归调用是函数的最后一个操作时，编译器不会创建新的栈帧，所以无限递归也不会栈溢出。这是 Elixir 实现循环的标准方式。"
        },
        {
          'type': "code",
          'lang': "elixir",
          'title': "尾递归示例",
          'code': "defmodule Sum do\n  def of(list), do: _sum(list, 0)\n\n  defp _sum([], acc), do: acc\n  defp _sum([h | t], acc), do: _sum(t, acc + h)\nend\n\nIO.inspect(Sum.of([1,2,3,4,5]))  # 15\n# 即使列表有 1 亿个元素也不会栈溢出"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Elixir 的函数与闭包\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Elixir 的函数与闭包\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Elixir 的函数与闭包\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "def 公共函数，defp 私有函数",
            "fn ... end 定义匿名函数",
            "|> 管道运算符让数据处理链清晰可读",
            "尾递归自动优化，实现高效循环"
          ]
        }
      ],
      'templates': [
        {
          'name': "列表处理管道",
          'code': "list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nresult = list\n  |> Enum.filter(fn x -> rem(x, 2) == 0 end)\n  |> Enum.map(fn x -> x * x end)\n  |> Enum.sum()\nIO.inspect(result)  # 220 = 4+16+36+64+100"
        },
        {
          'name': "字符串处理",
          'code': "words = [\"Hello\", \"World\", \"from\", \"Elixir\"]\n\nresult = words\n  |> Enum.map(&String.upcase/1)\n  |> Enum.join(\" \")\n  |> String.reverse()\n\nIO.puts(result)  # \"XILEE morf DLROW OLLEH\""
        }
      ]
    },
    {
      'id': "fl-9",
      'title': "Elixir 的进程与并发",
      'summary': "spawn 创建进程，send/receive 消息传递，轻量级并发是 Elixir 的核心武器。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "Elixir 并发的基础是<strong>轻量级进程</strong>。每个进程只有几 KB 内存，可以创建数百万个。进程之间通过<strong>消息传递</strong>通信，完全不共享内存。这比操作系统线程（几 MB 内存）轻量得多，也让并发编程变得简单。"
        },
        {
          'type': "h",
          'text': "spawn / send / receive"
        },
        {
          'type': "code",
          'lang': "elixir",
          'title': "进程与消息",
          'code': "# 创建进程\npid = spawn(fn ->\n  receive do\n    {:add, a, b} ->\n      IO.puts(\"#{a} + #{b} = #{a + b}\")\n    {:multiply, a, b} ->\n      IO.puts(\"#{a} * #{b} = #{a * b}\")\n    {:stop} ->\n      IO.puts(\"进程结束\")\n    _ ->\n      IO.puts(\"未知消息\")\n  end\nend)\n\n# 发送消息\nsend(pid, {:add, 3, 5})\nsend(pid, {:multiply, 4, 6})\nsend(pid, {:stop})\n\n# 等待进程结束\nProcess.sleep(1000)"
        },
        {
          'type': "h",
          'text': "GenServer 简介"
        },
        {
          'type': "p",
          'text': "<code.inline>GenServer</code> 是 Elixir 的通用服务器行为，封装了「状态管理 + 并发请求处理」的模板。你只需要实现几个回调函数，就能创建一个可靠的并发服务器，处理成千上万的请求。"
        },
        {
          'type': "code",
          'lang': "elixir",
          'title': "简单 GenServer",
          'code': "defmodule Counter do\n  use GenServer\n\n  # 客户端 API\n  def start_link(initial \\ 0) do\n    GenServer.start_link(__MODULE__, initial, name: __MODULE__)\n  end\n\n  def get do\n    GenServer.call(__MODULE__, :get)\n  end\n\n  def increment do\n    GenServer.cast(__MODULE__, :increment)\n  end\n\n  # 服务端回调\n  def init(state) do\n    {:ok, state}\n  end\n\n  def handle_call(:get, _from, state) do\n    {:reply, state, state}\n  end\n\n  def handle_cast(:increment, state) do\n    {:noreply, state + 1}\n  end\nend\n\nCounter.start_link(0)\nCounter.increment()\nCounter.increment()\nIO.inspect(Counter.get())  # 2"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Elixir 的进程与并发\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Elixir 的进程与并发\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Elixir 的进程与并发\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "spawn 创建轻量进程，几 KB 内存",
            "send/pid 发消息，receive 接收消息",
            "GenServer 封装了状态管理 + 并发处理",
            "进程完全隔离，不共享内存，天然线程安全"
          ]
        }
      ],
      'templates': [
        {
          'name': "并行计算示例",
          'code': "# 并行启动多个任务\ntasks = 1..5\n  |> Enum.map(fn i ->\n    Task.async(fn ->\n      Process.sleep(100)\n      i * i\n    end)\n  end)\n\nresults = tasks |> Enum.map(&Task.await/1)\nIO.inspect(results)  # [1,4,9,16,25]"
        },
        {
          'name': "简单计数器",
          'code': "defmodule Counter do\n  use GenServer\n  def start_link, do: GenServer.start_link(__MODULE__, 0, name: __MODULE__)\n  def get, do: GenServer.call(__MODULE__, :get)\n  def inc, do: GenServer.cast(__MODULE__, :inc)\n  def init(n), do: {:ok, n}\n  def handle_call(:get, _, n), do: {:reply, n, n}\n  def handle_cast(:inc, n), do: {:noreply, n + 1}\nend\nCounter.start_link()\nCounter.inc()\nIO.inspect(Counter.get())"
        }
      ]
    },
    {
      'id': "fl-10",
      'title': "Clojure 入门：代码即数据",
      'summary': "REPL 交互、列表语法、quote，Lisp 的核心哲学。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "Clojure 是 Lisp 家族在现代 JVM 上的代表，其核心哲学是<strong>代码即数据</strong>（homoiconicity）：代码本身就是数据结构（列表）。这意味着你可以用代码来生成和变换代码——这就是 Lisp 宏（macro）的能力来源。配合 <strong>REPL</strong>（读取-求值-打印循环）交互开发，是 Clojure 最强大的工作方式。"
        },
        {
          'type': "h",
          'text': "REPL 交互"
        },
        {
          'type': "code",
          'lang': "clojure",
          'title': "Clojure 基础",
          'code': "; Clojure 注释用分号\n\n; 基本运算\n(+ 1 2 3)    ; => 6\n(- 10 3)     ; => 7\n(* 2 3 4)    ; => 24\n\n; 定义不可变绑定\n(def name \"小明\")\n(def age 20)\n\n; 列表、向量、集合、映射\n(list 1 2 3)       ; => (1 2 3)\n[1 2 3]            ; => [1 2 3]  向量（有序可索引）\n#{1 2 3}           ; => #{1 2 3} 集合\n{:name \"小明\" :age 20}  ; => 映射\n\n; 函数定义\n(defn greet [who]\n  (str \"你好，\" who \"!\"))\n(greet \"小红\")\n\n; 匿名函数\n(#(+ %1 %2) 3 4)   ; => 7"
        },
        {
          'type': "h",
          'text': "quote 与代码即数据"
        },
        {
          'type': "code",
          'lang': "clojure",
          'title': "quote：代码是数据",
          'code': "; quote 阻止表达式被求值\n(quote (+ 1 2))   ; => (+ 1 2)  不是求值，而是返回列表\n\n; 简写：' 等价于 (quote ...)\n'(+ 1 2)         ; => (+ 1 2)\n\n; 这让我们可以操作代码本身\n(def code (quote (+ 1 2)))\n(first code)      ; => +\n(rest code)       ; => (1 2)\n\n; 这就是 Lisp 宏的基础：程序可以操作自己的代码结构"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Clojure 入门：代码即数据\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Clojure 入门：代码即数据\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Clojure 入门：代码即数据\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Clojure 用括号，函数调用是 (func args...)",
            "def 定义不可变绑定",
            "[1 2 3] 是向量（数组），(1 2 3) 是列表",
            "quote 让代码成为数据，这是宏的基础"
          ]
        }
      ],
      'templates': [
        {
          'name': "map / filter / reduce",
          'code': "; 三大高阶函数\n(map inc [1 2 3 4])          ; => (2 3 4 5)\n(filter even? [1 2 3 4 5])   ; => (2 4)\n(reduce + 0 [1 2 3 4 5])     ; => 15\n\n; 线程宏：让嵌套调用更清晰\n(->> [1 2 3 4 5]\n     (filter even?)\n     (map #(* % %))\n     (reduce +))\n; => 20  (2^2 + 4^2)"
        },
        {
          'name': "字符串处理",
          'code': "; 字符串操作\n(str \"Hello\" \" \" \"World\")     ; => \"Hello World\"\n(subs \"Hello\" 1 4)            ; => \"ell\"\n(reverse \"hello\")             ; => \"olleh\"\n\n; 用 split 分割\n(sPLIT \"a-b-c\" \"-\")           ; => (\"a\" \"b\" \"c\")"
        }
      ]
    },
    {
      'id': "fl-11",
      'title': "Clojure 的不可变数据结构",
      'summary': "assoc / conj / persistent vs transient，理解持久化数据结构。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "Clojure 的所有数据结构都是<strong>不可变的</strong>：一旦创建就不能修改。任何看起来「修改」的操作都会返回<strong>新的数据结构</strong>。这听起来低效，但 Clojure 用<strong>持久化数据结构</strong>（结构共享）技术，让修改操作接近 O(1) 时间复杂度。"
        },
        {
          'type': "h",
          'text': "assoc / conj / dissoc"
        },
        {
          'type': "code",
          'lang': "clojure",
          'title': "不可变数据操作",
          'code': "; 向量（不可变数组）\n(def scores [88 92 76 85])\n(conj scores 90)  ; => [88 92 76 85 90]（原 scores 不变）\n\n; 映射（不可变字典）\n(def person {:name \"小明\" :age 20})\n(assoc person :age 21)  ; => {:name \"小明\" :age 21}\n(dissoc person :age)    ; => {:name \"小明\"}\n\n; 持久化数据结构：修改不复制，内部共享\n; 所以 conj/assoc 非常快"
        },
        {
          'type': "h",
          'text': "transient：高性能临时修改"
        },
        {
          'type': "code",
          'lang': "clojure",
          'title': "transient 临时可变",
          'code': "; transient 允许在局部范围内临时可变，提升性能\n(let [t (transient [])]\n  (dotimes [i 10000]\n    (conj! t i))\n  (persistent! t))  ; => [0 1 2 ... 9999]\n\n; persistent! 将 transient 转回不可变结构\n; 之后不能再使用 transient 版本"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Clojure 的不可变数据结构\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Clojure 的不可变数据结构\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Clojure 的不可变数据结构\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "def 定义的变量不可变",
            "conj 追加元素，assoc 更新映射",
            "transient 允许局部范围内的可变，性能更高",
            "持久化数据结构：修改后旧数据仍存在，但共享内部结构"
          ]
        }
      ],
      'templates': [
        {
          'name': "数据统计",
          'code': "(def scores [88 92 76 85 90 78 95])\n\n(println \"总和:\" (reduce + scores))\n(println \"平均:\" (/ (reduce + scores) (count scores)))\n(println \"最高:\" (apply max scores))\n(println \"最低:\" (apply min scores))\n\n(println \"高分:\" (filter #(>= % 90) scores))"
        },
        {
          'name': "映射操作",
          'code': "(def scores {:小明 88 :小红 95 :小刚 76})\n\n(println \"更新后:\" (assoc scores :小刚 80))\n(println \"原映射:\" scores)\n(println \"删除后:\" (dissoc scores :小明))"
        }
      ]
    },
    {
      'id': "fl-12",
      'title': "Common Lisp 入门：S 表达式与前缀表达式",
      'summary': "defun、setq、car/cdr，理解 Lisp 的历史与现代语法。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "Common Lisp 是 Lisp 家族中最标准化的版本，诞生于 1980 年代，至今仍在工业界使用（尤其是 AI 领域）。它的核心特征是：<strong>S 表达式</strong>（符号表达式）——一切代码都是列表，前缀表达式，这让宏系统极其强大。学习 Common Lisp 是理解函数式编程历史的必经之路。"
        },
        {
          'type': "h",
          'text': "安装与交互"
        },
        {
          'type': "list",
          'items': [
            "Common Lisp 有多种实现：SBCL（推荐）、Clozure CL、ECL",
            "SBCL 下载地址：<a href='https://www.sbcl.org/' target='_blank' rel='noopener'>sbcl.org</a>",
            "安装后运行 <code.inline>sbcl</code> 进入 REPL",
            "在 REPL 中输入表达式，按回车执行"
          ]
        },
        {
          'type': "h",
          'text': "S 表达式与基本语法"
        },
        {
          'type': "code",
          'lang': "lisp",
          'title': "Common Lisp 基础",
          'code': ";; 注释用分号\n\n;; 前缀表达式：(函数 参数1 参数2 ...)\n(+ 1 2 3)        ; => 6\n(* 2 3 4)        ; => 24\n\n;; 定义变量（setq 赋值）\n(setq name \"小明\")\n(setq age 20)\n\n;; 定义函数（defun）\n(defun greet (who)\n  (format t \"你好, ~a!~%\" who))\n(greet \"小红\")\n\n;; 列表操作\n(car (quote (1 2 3)))        ; => 1  取第一个\n(cdr (quote (1 2 3)))        ; => (2 3)  取剩余\n(cons 0 (quote (1 2 3)))     ; => (0 1 2 3)  追加到头部\n\n;; 条件判断\n(if (> age 18)\n    (print \"成年人\")\n    (print \"未成年\"))"
        },
        {
          'type': "h",
          'text': "列表与递归"
        },
        {
          'type': "code",
          'lang': "lisp",
          'title': "列表递归",
          'code': ";; 求列表长度\n(defun my-length (lst)\n  (if (null lst)\n      0\n      (+ 1 (my-length (cdr lst)))))\n\n;; 求列表之和\n(defun my-sum (lst)\n  (if (null lst)\n      0\n      (+ (car lst) (my-sum (cdr lst)))))\n\n(my-length (quote (1 2 3 4 5)))  ; => 5\n(my-sum (quote (1 2 3 4 5)))     ; => 15"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Common Lisp 入门：S 表达式与前缀表达式\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Common Lisp 入门：S 表达式与前缀表达式\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Common Lisp 入门：S 表达式与前缀表达式\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Common Lisp 一切皆 S 表达式，前缀语法",
            "setq 赋值，defun 定义函数",
            "car 取第一个元素，cdr 取剩余列表",
            "递归是列表处理的基础"
          ]
        }
      ],
      'templates': [
        {
          'name': "斐波那契数列",
          'code': "(defun fib (n)\n  (cond ((= n 0) 0)\n        ((= n 1) 1)\n        (t (+ (fib (- n 1)) (fib (- n 2))))))\n\n(defun print-fib (n)\n  (dotimes (i n)\n    (format t \"~a \" (fib i)))\n  (terpri))\n\n(print-fib 10)"
        },
        {
          'name': "列表处理",
          'code': "(defun my-map (fn lst)\n  (if (null lst)\n      nil\n      (cons (funcall fn (car lst))\n            (my-map fn (cdr lst)))))\n\n(my-map (lambda (x) (* x x)) (quote (1 2 3 4 5)))\n; => (1 4 9 16 25)"
        }
      ]
    },
    {
      'id': "fl-13",
      'title': "Common Lisp 的函数式能力",
      'summary': "loop 宏、reduce、高阶函数，Lisp 的函数式一面。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "Common Lisp 不仅可以用递归处理列表，还有强大的 <strong>loop 宏</strong>、<strong>高阶函数</strong>（<code.inline>funcall</code>/ <code.inline>apply</code>）、以及 <code.inline>reduce</code> 等函数式工具。虽然 Lisp 语法看起来很古老，但它的函数式能力一点也不落后。"
        },
        {
          'type': "h",
          'text': "loop 宏"
        },
        {
          'type': "code",
          'lang': "lisp",
          'title': "loop 宏",
          'code': ";; loop 宏：Lisp 最强大的宏之一\n\n;; 求和\n(loop for i from 1 to 10 sum i)\n; => 55\n\n;; 过滤并映射\n(loop for x in (quote (1 2 3 4 5 6 7 8 9 10))\n      when (evenp x)\n      collect (* x x))\n; => (4 16 36 64 100)\n\n;; 累加\n(loop for x in (quote (1 2 3 4 5))\n      sum x)\n; => 15"
        },
        {
          'type': "h",
          'text': "高阶函数"
        },
        {
          'type': "code",
          'lang': "lisp",
          'title': "高阶函数",
          'code': ";; mapcar：类似 map\n(mapcar (lambda (x) (* x x)) (quote (1 2 3 4 5)))\n; => (1 4 9 16 25)\n\n;; remove-if-not：类似 filter\n(remove-if-not (lambda (x) (evenp x)) (quote (1 2 3 4 5)))\n; => (2 4)\n\n;; reduce：归约\n(reduce #'+ (quote (1 2 3 4 5)))\n; => 15\n\n;; funcall 和 apply\n(funcall #'+ 1 2 3)\n; => 6\n(apply #'+ (quote (1 2 3)))\n; => 6"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Common Lisp 的函数式能力\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Common Lisp 的函数式能力\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Common Lisp 的函数式能力\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "loop 宏是 Common Lisp 最强大的循环工具",
            "mapcar / remove-if-not / reduce 是函数式三剑客",
            "lambda 定义匿名函数，# 符号引用函数",
            "高阶函数让列表处理非常简洁"
          ]
        }
      ],
      'templates': [
        {
          'name': "筛选并映射",
          'code': "(defun square-evens (lst)\n  (mapcar (lambda (x) (* x x))\n          (remove-if-not (lambda (x) (evenp x)) lst)))\n\n(square-evens (quote (1 2 3 4 5 6 7 8 9 10)))\n; => (4 16 36 64 100)"
        },
        {
          'name': "字符串处理",
          'code': "(defparameter *words* (quote (\"hello\" \"world\" \"lisp\")))\n\n;; 大写所有单词\n(mapcar (lambda (w) (string-upcase w)) *words*)\n; => (\"HELLO\" \"WORLD\" \"LISP\")\n\n;; 连接所有单词\n(reduce (lambda (a b) (concatenate (quote string) a \" \" b)) *words*)\n; => \"hello world lisp\""
        }
      ]
    },
    {
      'id': "fl-14",
      'title': "Racket 入门：从小语言开始",
      'summary': "#lang racket、define、if、lambda——Racket 是最好的函数式入门语言。",
      'difficulty': "基础",
      'blocks': [
        {
          'type': "p",
          'text': "Racket（前身为 Scheme）是专门为<strong>教学</strong>设计的函数式语言。它从「小语言」开始，让你理解编程语言是如何一步步构建出来的。语法比 Common Lisp 简洁，比 Haskell 友好，是学习函数式编程的绝佳起点。"
        },
        {
          'type': "h",
          'text': "基础语法"
        },
        {
          'type': "code",
          'lang': "racket",
          'title': "Racket 基础",
          'code': "#lang racket\n\n; 定义函数\n(define (greet who)\n  (string-append \"你好, \" who \"!\"))\n\n(greet \"小明\")\n\n; 条件判断\n(define (grade score)\n  (cond\n    [(>= score 90) \"优秀\"]\n    [(>= score 60) \"及格\"]\n    [else \"不及格\"]))\n\n(grade 85)\n\n; 列表\n(define nums (list 1 2 3 4 5))\n\n; 递归求和\n(define (sum lst)\n  (if (null? lst)\n      0\n      (+ (first lst) (sum (rest lst)))))\n\n(sum nums)"
        },
        {
          'type': "h",
          'text': "lambda 与高阶函数"
        },
        {
          'type': "code",
          'lang': "racket",
          'title': "lambda 高阶函数",
          'code': "#lang racket\n\n; lambda 定义匿名函数\n(define square (lambda (x) (* x x)))\n(square 5)\n\n; map：映射\n(map (lambda (x) (* x x)) (list 1 2 3 4 5))\n; => (1 4 9 16 25)\n\n; filter：过滤\n(filter even? (list 1 2 3 4 5 6 7 8 9 10))\n; => (2 4 6 8 10)\n\n; fold：归约（reduce）\n(foldl + 0 (list 1 2 3 4 5))\n; => 15\n\n; 函数组合\n(define (compose f g) (lambda (x) (f (g x))))\n(define double-then-plus1 (compose (lambda (x) (+ x 1)) (lambda (x) (* x 2))))\n(double-then-plus1 5)  ; => 11"
        },
        {
          'type': "h",
          'text': "let 绑定"
        },
        {
          'type': "code",
          'lang': "racket",
          'title': "let 绑定",
          'code': "#lang racket\n\n; let 绑定局部变量\n(let ([x 10]\n      [y 20])\n  (+ x y))  ; => 30\n\n; letrec 递归绑定\n(letrec ([even? (lambda (n)\n                   (or (= n 0) (odd? (- n 1)))])\n         [odd? (lambda (n)\n                 (and (not (= n 0)) (even? (- n 1))))])\n  (even? 4))  ; => #t\n\n; 注意：Racket 用 #t/#f 表示 true/false"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Racket 入门：从小语言开始\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Racket 入门：从小语言开始\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Racket 入门：从小语言开始\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "Racket 用 <code.inline>#lang racket</code> 开头",
            "define 定义函数和变量",
            "lambda 定义匿名函数",
            "map/filter/foldl 是三大高阶函数"
          ]
        }
      ],
      'templates': [
        {
          'name': "斐波那契数列",
          'code': "#lang racket\n(define (fib n)\n  (cond\n    [(= n 0) 0]\n    [(= n 1) 1]\n    [else (+ (fib (- n 1)) (fib (- n 2)))]))\n\n(define (print-fib n)\n  (for ([i (in-range n)])\n    (display (fib i))\n    (display \" \"))\n  (newline))\n\n(print-fib 10)"
        },
        {
          'name': "列表处理",
          'code': "#lang racket\n(define (my-map f lst)\n  (if (null? lst)\n      null\n      (cons (f (first lst)) (my-map f (rest lst)))))\n\n(define (my-filter p lst)\n  (cond\n    [(null? lst) null]\n    [(p (first lst)) (cons (first lst) (my-filter p (rest lst)))]\n    [else (my-filter p (rest lst))]))\n\n(my-map (lambda (x) (* x x)) (list 1 2 3 4 5))\n(my-filter even? (list 1 2 3 4 5 6 7 8))"
        }
      ]
    },
    {
      'id': "fl-15",
      'title': "Racket 的模块与宏",
      'summary': "require、module、define-syntax——Racket 的宏系统是元编程利器。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "Racket 的模块系统和宏系统是它最强大的特性。模块让你可以把代码组织成独立的单元，而 <strong>宏</strong>（macro）让你在编译期操作代码本身——这被称为<strong>元编程</strong>。Racket 的宏系统非常强大，可以创建全新的语法，而不只是替换代码片段。"
        },
        {
          'type': "h",
          'text': "模块系统"
        },
        {
          'type': "code",
          'lang': "racket",
          'title': "模块与 require",
          'code': "#lang racket\n\n; 定义一个模块（保存为 math-utils.rkt）\n(module math-utils racket\n  (provide add multiply)\n  (define (add x y) (+ x y))\n  (define (multiply x y) (* x y)))\n\n; 使用模块\n(require math-utils)\n(add 3 4)\n(multiply 3 4)"
        },
        {
          'type': "h",
          'text': "模板宏（Template Macro）"
        },
        {
          'type': "code",
          'lang': "racket",
          'title': "define-syntax 宏",
          'code': "#lang racket\n\n; 定义一个简单宏：unless（与 if 相反）\n(define-syntax-rule (unless cond body ...)\n  (if (not cond) (begin body ...)))\n\n(unless #t\n  (display \"这不会打印\")\n  (newline))\n\n(unless #f\n  (display \"这会打印\")\n  (newline))\n\n; 定义一个 for 宏\n(define-syntax-rule (repeat n body ...)\n  (for ([i (in-range n)]) body ...))\n\n(repeat 3\n  (display \"hello\")\n  (newline))"
        },
        {
          'type': "h",
          'text': "模板宏示例"
        },
        {
          'type': "code",
          'lang': "racket",
          'title': "自定义语法",
          'code': "#lang racket\n\n; with-println 宏：打印后返回表达式结果\n(define-syntax (with-println stx)\n  (syntax-case stx ()\n    [(_ expr name)\n     (with-syntax ([result (make-tempor #'expr)])\n       #'(let ([result expr])\n           (printf \"~a: ~a~n\" (quote name) result)\n           result))]))\n\n(define x (with-println (+ 2 3) total))\n; 输出：total: 5"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"Racket 的模块与宏\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"Racket 的模块与宏\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"Racket 的模块与宏\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "module/require 实现代码模块化",
            "define-syntax-rule 创建简单宏",
            "define-syntax 创建复杂宏（syntax-case）",
            "宏在编译期执行，可以创造新语法"
          ]
        }
      ],
      'templates': [
        {
          'name': "简单宏示例",
          'code': "#lang racket\n(define-syntax-rule (when cond body ...)\n  (if cond (begin body ...)))\n\n(when (> 5 3)\n  (display \"5 大于 3\")\n  (newline))\n\n(define-syntax-rule (unless cond body ...)\n  (if (not cond) (begin body ...)))\n\n(unless (< 5 3)\n  (display \"5 不小于 3\")\n  (newline))"
        },
        {
          'name': "模块使用",
          'code': "#lang racket\n(module my-math racket\n  (provide factorial)\n  (define (factorial n)\n    (if (<= n 1) 1\n        (* n (factorial (- n 1))))))\n\n(require my-math)\n(factorial 10)"
        }
      ]
    },
    {
      'id': "fl-16",
      'title': "函数式在主流语言中的渗透：思维训练与生产实践",
      'summary': "JS map/filter/reduce、Python functools、Swift/Kotlin 高阶函数——函数式已无处不在。",
      'difficulty': "进阶",
      'blocks': [
        {
          'type': "p",
          'text': "函数式编程已经不只是一门语言的特性，而是<strong>主流语言的标配</strong>。JavaScript 有 map/filter/reduce，Python 有 functools，Swift 和 Kotlin 都有高阶函数。学会函数式思维，你已经在用函数式编程了——只是可能没意识到。"
        },
        {
          'type': "h",
          'text': "JavaScript 中的函数式"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "map / filter / reduce",
          'code': "// map：映射\nconst doubled = [1, 2, 3, 4, 5].map(x => x * 2)\n// => [2, 4, 6, 8, 10]\n\n// filter：过滤\nconst evens = [1, 2, 3, 4, 5].filter(x => x % 2 === 0)\n// => [2, 4]\n\n// reduce：归约\nconst sum = [1, 2, 3, 4, 5].reduce((acc, x) => acc + x, 0)\n// => 15\n\n// 组合使用\nconst result = [1, 2, 3, 4, 5]\n  .filter(x => x % 2 === 0)\n  .map(x => x * x)\n  .reduce((acc, x) => acc + x, 0)\n// => 20  (4 + 16)"
        },
        {
          'type': "h",
          'text': "Python 中的函数式"
        },
        {
          'type': "code",
          'lang': "python",
          'title': "Python 函数式",
          'code': "from functools import reduce\n\n# map\ndoubled = list(map(lambda x: x * 2, [1, 2, 3, 4, 5]))\n\n# filter\nevens = list(filter(lambda x: x % 2 == 0, [1, 2, 3, 4, 5]))\n\n# reduce\nresult = reduce(lambda acc, x: acc + x, [1, 2, 3, 4, 5], 0)\n\n# 列表推导式（Python 的函数式风格）\nresult = [x * x for x in range(1, 11) if x % 2 == 0]\n# => [4, 16, 36, 64, 100]"
        },
        {
          'type': "h",
          'text': "Swift 与 Kotlin 的高阶函数"
        },
        {
          'type': "code",
          'lang': "swift",
          'title': "Swift 函数式",
          'code': "let numbers = [1, 2, 3, 4, 5]\n\n// map\nlet doubled = numbers.map { $0 * 2 }\n// => [2, 4, 6, 8, 10]\n\n// filter\nlet evens = numbers.filter { $0 % 2 == 0 }\n// => [2, 4]\n\n// reduce\nlet sum = numbers.reduce(0, +)\n// => 15\n\n// 链式调用\nlet result = numbers\n  .filter { $0 % 2 == 0 }\n  .map { $0 * $0 }\n  .reduce(0, +)\n// => 20"
        },
        {
          'type': "info",
          'title': "函数式思维的核心价值",
          'text': "函数式编程的核心价值不是语法，而是<strong>思维模式</strong>：把问题分解为纯函数，用不可变数据保证安全，用高阶函数避免重复。这些思想在任何语言中都适用，即使你不用 Haskell 写生产代码，函数式思维也能让你写出更健壮的程序。"
        },
        {
          'type': "info",
          'title': "💡 学习建议",
          'text': "学习\"函数式在主流语言中的渗透：思维训练与生产实践\"时，最重要的是动手实践。先在编辑器中运行示例代码，观察输出结果，然后尝试修改代码中的参数，看看会发生什么变化。遇到错误不要害怕，仔细阅读错误信息，它通常会告诉你问题在哪一行。记住：编程能力来自持续的动手练习。"
        },
        {
          'type': "code",
          'lang': "javascript",
          'title': "本章扩展练习",
          'code': "// 练习：尝试修改下面的代码\nlet lesson = \"函数式在主流语言中的渗透：思维训练与生产实践\";\nconsole.log(\"我正在学习:\", lesson);\nconsole.log(\"动手实践是学习编程的最好方式！\");"
        },
        {
          'type': "warn",
          'title': "⚠️ 常见误区",
          'text': "学习\"函数式在主流语言中的渗透：思维训练与生产实践\"时，新手常犯的错误：①只看不练——看懂了不代表会写；②跳过基础直接学高级内容；③遇到错误就放弃；④不善于利用文档和搜索引擎。每个程序员都是从新手过来的，多写多练才能进步。"
        },
        {
          'type': "keypoints",
          'items': [
            "JavaScript/Python/Swift/Kotlin 都有 map/filter/reduce",
            "列表推导式是函数式风格的常见表达",
            "函数式思维：纯函数 + 不可变 + 高阶函数",
            "学会函数式思维，任何语言都能受益"
          ]
        }
      ],
      'templates': [
        {
          'name': "JavaScript 函数式",
          'code': "// 纯函数：无副作用\nconst add = (a, b) => a + b;\nconst square = x => x * x;\n\n// 组合函数\nconst compose = (f, g) => x => f(g(x));\nconst doubleThenSquare = compose(square, add(1));\nconsole.log(doubleThenSquare(5)); // 36 = (5+1)^2\n\n// 数组链式处理\nconst result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n  .filter(n => n % 2 === 0)\n  .map(n => n * n)\n  .reduce((sum, n) => sum + n, 0);\nconsole.log(result); // 220"
        },
        {
          'name': "Python 函数式",
          'code': "from functools import reduce\n\n# 纯函数\ndef add(a, b): return a + b\ndef square(x): return x * x\n\n# 组合\ndef compose(f, g): return lambda x: f(g(x))\n\ndouble_then_square = compose(square, lambda x: x + 1)\nprint(double_then_square(5))  # 36\n\n# 链式处理\nresult = reduce(lambda s, n: s + n,\n    map(lambda n: n * n,\n        filter(lambda n: n % 2 == 0,\n            range(1, 11))), 0)\nprint(result)  # 220"
        }
      ]
    }
  ]
});

