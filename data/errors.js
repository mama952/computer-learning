/* ============================================================
   计算机知识库 · 数据：常见错误与排坑全集
   收录各语言/领域最高频的报错、踩坑、误区与对策。
   ============================================================ */
window.ERRORS_DATA = {
  "id": "errors",
  "name": "常见错误与排坑",
  "icon": "错",
  "description": "学编程一半的时间都在和报错搏斗。这里把最经典、最高频的报错、踩坑与误区做成『字典』：每个都讲清楚为什么错、怎么改、怎么预防。",
  "children": [
    {
      "id": "err-python",
      "name": "Python 报错诊断",
      "icon": "Py",
      "tagline": "缩进、编码、类型、可空——Python 最常出的问题全收录。",
      "intro": "Python 的报错信息其实很友好，但新手常被吓到。看懂报错类型 + 行号，就能快速定位。",
      "meta": {
        "难度": "入门",
        "场景": "Python"
      },
      "lessons": [
        {
          "id": "err-py-1",
          "title": "缩进 / 编码 / 变量未定义",
          "summary": "IndentationError、SyntaxError、NameError 三连击。",
          "difficulty": "入门",
          "blocks": [
            {
              "type": "p",
              "text": "Python 用缩进代表代码块，所以缩进错误极常见；遇到中文没加声明、变量名拼写错了也会报一堆名。下面按住最典型的三种。"
            },
            {
              "type": "code",
              "lang": "bash",
              "title": "三个高频报错原文",
              "code": "# 报错1: IndentationError: expected an indented block\n# 原因: def/if/for 下面没有写缩进的代码块\ndef foo():\n    pass   # 之前这里空白会报错\n\n# 报错2: SyntaxError: Non-ASCII character\n# 原因: 代码含中文但没在文件开头声明编码(Python2)或在Python3用了错误\n# Python3 默认utf-8，一般不需声明；但控制台/文件需确保utf-8\n\n# 报错3: NameError: name 'xxx' is not defined\n# 原因: 变量/函数名拼错，或在使用前未定义，或作用域外使用\nscores = 90\nprint(scroes)   # 拼错 NameError\n\n# 口诀: 报错给出行号, 先看行号再看名字"
            },
            {
              "type": "table",
              "head": [
                "报错",
                "含义",
                "对策"
              ],
              "rows": [
                [
                  "IndentationError",
                  "缩进不一致/缺块",
                  "统一 4 空格，检查混合 Tab"
                ],
                [
                  "SyntaxError",
                  "语法错误",
                  "看行号，查括号/引号/冒号"
                ],
                [
                  "NameError",
                  "名字未定义",
                  "查拼写、变量顺序、作用域"
                ],
                [
                  "TypeError",
                  "类型不符",
                  "如向 int 用 len()，检查类型"
                ]
              ]
            },
            {
              "type": "info",
              "title": "💡 bash 学习提示",
              "text": "学习\"缩进 / 编码 / 变量未定义\"时，除了理解概念本身，更重要的是动手实践。建议先通读一遍，再在编辑器里复现示例代码，遇到问题时对照原文逐一排查。"
            },
            {
              "type": "info",
              "title": "💡 错误与排坑学习建议",
              "text": "学习\"缩进 / 编码 / 变量未定义\"时，建议先理解核心概念，再通过实践加深印象。多动手写代码、多思考为什么，比单纯记忆更重要。遇到不懂的地方可以先跳过，回头再看往往豁然开朗。"
            },
            {
              "type": "code",
              "lang": "sql",
              "title": "扩展实践",
              "code": "// 错误与排错扩展练习\n\n// 1. Python 常见错误演示\nconsole.log('\\nPython 错误类型:');\nconsole.log('IndentationError: 缩进错误');\nconsole.log('NameError: 变量未定义');\nconsole.log('TypeError: 类型不匹配');\nconsole.log('KeyError: 字典键不存在');\nconsole.log('AttributeError: 属性不存在');\nconsole.log('ValueError: 值不正确');\nconsole.log('IndexError: 索引越界');\nconsole.log('FileNotFoundError: 文件不存在');\n\n// 2. JS 错误处理模式\nconsole.log('\\nJS 错误处理:');\ntry {\n  const result = undefined.value; // 会抛错\n} catch (e) {\n  console.log('捕获错误:', e.name, '-', e.message);\n}\n\n// 3. 断言测试\nfunction assert(condition, msg) {\n  if (!condition) throw new Error('断言失败: ' + msg);\n}\nassert(1 + 1 === 2, '算术错误');\nassert([1,2].length === 2, '数组长度错误');\nconsole.log('所有断言通过!');\n\n// 4. 调试技巧\nconsole.log('\\n调试三板斧:');\nconsole.log('1. 打印中间值: console.log(variable)');\nconsole.log('2. 使用 debugger: 在代码中设置断点');\nconsole.log('3. 二分定位: 注释一半代码缩小范围');"
            },
            {
              "type": "warn",
              "title": "⚠️ 常见误区",
              "text": "学习\"缩进 / 编码 / 变量未定义\"时，新手常犯的错误包括：① 只看不练，以为看懂了就会了；② 急于求成，跳过基础直接看高级内容；③ 遇到问题就放弃，不主动搜索和调试。记住：编程是实践技能，动手做才是王道。"
            },
            {
              "type": "info",
              "title": "🔗 相关知识",
              "text": "缩进 / 编码 / 变量未定义 与计算机科学的其他领域密切相关。理解这个概念有助于学习后续的课程内容。建议将知识点串联成网，而非孤立记忆单个概念。"
            },
            {
              "type": "keypoints",
              "items": [
                "缩进即语法，统一 4 空格",
                "报错先看行号与变量名",
                "中文一般不会报错，UTF-8 即可",
                "用 print/调试确认变量真的存在"
              ]
            }
          ]
        },
        {
          "id": "err-py-2",
          "title": "类型与可空陷阱",
          "summary": "TypeError、NoneType、深浅拷贝、可变默认参数。",
          "difficulty": "进阶",
          "blocks": [
            {
              "type": "p",
              "text": "这几个问题几乎是 Python 面试的必问陷阱，也是写代码最容易踩的隐性 bug。很多人代码『看着对』却出错，根源都在这里。"
            },
            {
              "type": "code",
              "lang": "python",
              "title": "可变默认参数陷阱",
              "code": "# 陷阱: 用可变对象(列表/字典)作默认参数\n# 默认参数在函数定义时只创建一次，会累积!  ← bug\ndef add(item, bucket=[]):\n    bucket.append(item)\n    return bucket\n\nprint(add(\"a\"))   # ['a']\nprint(add(\"b\"))   # ['a', 'b']  ← 意外累积了!\n\n# 正确做法: 用 None 占位，函数内再创建\ndef add_ok(item, bucket=None):\n    if bucket is None:\n        bucket = []\n    bucket.append(item)\n    return bucket\n\nprint(add_ok(\"a\"))   # ['a']\nprint(add_ok(\"b\"))   # ['b']  ← 干净\n\n# 另一个坑: NoneType 没有某些属性\n# users = None; users.append(x)  → AttributeError: 'NoneType'\n# 对策: 使用前判断 if users is not None:"
            },
            {
              "type": "warn",
              "title": "深浅拷贝",
              "text": "直接 <code.inline>new_list = old_list</code.inline> 只是复制引用，改 rewritten 会影响原列表。要真正复制用 <code.inline>copy.copy()</code.inline>（浅）或 <code.inline>copy.deepcopy()</code.inline>（深）。"
            },
            {
              "type": "info",
              "title": "💡 bash 学习提示",
              "text": "学习\"类型与可空陷阱\"时，除了理解概念本身，更重要的是动手实践。建议先通读一遍，再在编辑器里复现示例代码，遇到问题时对照原文逐一排查。"
            },
            {
              "type": "info",
              "title": "💡 错误与排坑学习建议",
              "text": "学习\"类型与可空陷阱\"时，建议先理解核心概念，再通过实践加深印象。多动手写代码、多思考为什么，比单纯记忆更重要。遇到不懂的地方可以先跳过，回头再看往往豁然开朗。"
            },
            {
              "type": "code",
              "lang": "sql",
              "title": "扩展实践",
              "code": "// 错误与排错扩展练习\n\n// 1. Python 常见错误演示\nconsole.log('\\nPython 错误类型:');\nconsole.log('IndentationError: 缩进错误');\nconsole.log('NameError: 变量未定义');\nconsole.log('TypeError: 类型不匹配');\nconsole.log('KeyError: 字典键不存在');\nconsole.log('AttributeError: 属性不存在');\nconsole.log('ValueError: 值不正确');\nconsole.log('IndexError: 索引越界');\nconsole.log('FileNotFoundError: 文件不存在');\n\n// 2. JS 错误处理模式\nconsole.log('\\nJS 错误处理:');\ntry {\n  const result = undefined.value; // 会抛错\n} catch (e) {\n  console.log('捕获错误:', e.name, '-', e.message);\n}\n\n// 3. 断言测试\nfunction assert(condition, msg) {\n  if (!condition) throw new Error('断言失败: ' + msg);\n}\nassert(1 + 1 === 2, '算术错误');\nassert([1,2].length === 2, '数组长度错误');\nconsole.log('所有断言通过!');\n\n// 4. 调试技巧\nconsole.log('\\n调试三板斧:');\nconsole.log('1. 打印中间值: console.log(variable)');\nconsole.log('2. 使用 debugger: 在代码中设置断点');\nconsole.log('3. 二分定位: 注释一半代码缩小范围');"
            },
            {
              "type": "warn",
              "title": "⚠️ 常见误区",
              "text": "学习\"类型与可空陷阱\"时，新手常犯的错误包括：① 只看不练，以为看懂了就会了；② 急于求成，跳过基础直接看高级内容；③ 遇到问题就放弃，不主动搜索和调试。记住：编程是实践技能，动手做才是王道。"
            },
            {
              "type": "info",
              "title": "🔗 相关知识",
              "text": "类型与可空陷阱 与计算机科学的其他领域密切相关。理解这个概念有助于学习后续的课程内容。建议将知识点串联成网，而非孤立记忆单个概念。"
            },
            {
              "type": "keypoints",
              "items": [
                "可变默认参数会在调用间累积——用 None 占位",
                "list 赋值=共享引用，改动互相影响",
                "None 参与运算会抛 AttributeError",
                "深拷贝用 import copy; copy.deepcopy()"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "err-js",
      "name": "JavaScript 报错诊断",
      "icon": "JS",
      "tagline": "undefined、NaN、作用域、类型转换——JS 的坑最隐蔽。",
      "intro": "JS 很灵活，但也因为『弱类型』『隐式转换』暗藏不少坑。这些坑可以在编辑器里直接运行看到。",
      "meta": {
        "难度": "进阶",
        "场景": "JS"
      },
      "lessons": [
        {
          "id": "err-js-1",
          "title": "undefined / NaN / 类型转换陷阱",
          "summary": "为什么 0.1+0.2 !== 0.3？为什么 '10'+2 等于 '102'？",
          "difficulty": "进阶",
          "blocks": [
            {
              "type": "code",
              "lang": "javascript",
              "title": "可运行的经典 JS 坑",
              "code": "// 坑1: 浮点精度\ndebugger && console.log(0.1 + 0.2);            // 0.30000000000000004\nconsole.log(\"0.1+0.2===0.3?\", 0.1+0.2===0.3); // false\nconsole.log(\"解决办法(乘100整除后再除):\", Math.round((0.1+0.2)*100)/100);\n\n// 坑2: + 的隐式转换\nconsole.log(\"10 + 2 =\", 10 + 2);      // 12 数字\nconsole.log(\"\"10\" + 2 =\", \"10\" + 2);  // \"102\" 字符串 (拼接!)\nconsole.log(\"\"10\" - 2 =\", \"10\" - 2);  // 8 数字 (- 强制转数)\n// 对策: 明确用 Number() 或 + 前缀转换\nconsole.log(\"Number(\"10\")+2 =\", Number(\"10\") + 2);\n\n// 坑3: undefined 运算\ndefault_name = \"x\";\nlet user = {};\nconsole.log(\"user.name 未定义:\", user.name);     // undefined\n// console.log(user.name.length);  // TypeError: Cannot read \nconsole.log(\"安全访问:\", user.name?.length ?? \"用默认值\");\n\n// 坑4: == 与 === 的差异\nconsole.log(\"0 == false?\", 0 == false);      // true (宽松)\nconsole.log(\"0 === false?\", 0 === false);     // false (严格)\n// 对策: 永远用 ==="
            },
            {
              "type": "table",
              "head": [
                "现象",
                "本质",
                "对策"
              ],
              "rows": [
                [
                  "0.1+0.2≠0.3",
                  "浮点二进制精度",
                  "用整数运算或 toFixed/库"
                ],
                [
                  "'10'+2='102'",
                  "+ 优先拼接",
                  "显式 Number()/parseInt"
                ],
                [
                  "undefined.x 报错",
                  "访问空对象属性",
                  "可选链 ?. 和 ?? 默认值"
                ],
                [
                  "0==false 为真",
                  "宽松转换",
                  "一律用三等号 ==="
                ]
              ]
            },
            {
              "type": "info",
              "title": "💡 bash 学习提示",
              "text": "学习\"undefined / NaN / 类型转换陷阱\"时，除了理解概念本身，更重要的是动手实践。建议先通读一遍，再在编辑器里复现示例代码，遇到问题时对照原文逐一排查。"
            },
            {
              "type": "info",
              "title": "💡 Python学习建议",
              "text": "学习\"undefined / NaN / 类型转换陷阱\"时，建议先理解核心概念，再通过实践加深印象。多动手写代码、多思考为什么，比单纯记忆更重要。遇到不懂的地方可以先跳过，回头再看往往豁然开朗。"
            },
            {
              "type": "warn",
              "title": "⚠️ 常见误区",
              "text": "学习\"undefined / NaN / 类型转换陷阱\"时，新手常犯的错误包括：① 只看不练，以为看懂了就会了；② 急于求成，跳过基础直接看高级内容；③ 遇到问题就放弃，不主动搜索和调试。记住：编程是实践技能，动手做才是王道。"
            },
            {
              "type": "info",
              "title": "🔗 相关知识",
              "text": "undefined / NaN / 类型转换陷阱 与计算机科学的其他领域密切相关。理解这个概念有助于学习后续的课程内容。建议将知识点串联成网，而非孤立记忆单个概念。"
            },
            {
              "type": "keypoints",
              "items": [
                "浮点精度是 IEEE754 固有问题",
                "+ 遇字符串先拼接，- 会转数",
                "用 === 避免隐式转换的坑",
                "可选链 ?. 安全访问嵌套属性"
              ]
            }
          ]
        },
        {
          "id": "err-js-2",
          "title": "作用域、闭包与 this",
          "summary": "var 提升、let 块级、setTimeout 在循环里、this 指向。",
          "difficulty": "进阶",
          "blocks": [
            {
              "type": "code",
              "lang": "javascript",
              "title": "作用域与闭包坑（可运行）",
              "code": "// 坑1: var 的函数作用域 vs let 块级\nfor (var i = 0; i < 3; i++){}\nconsole.log(\"var 的 i 泄漏到函数外:\", i);  // 3 (var 无块级作用域)\n\n// 坑2: setTimeout + var 的经典闭包陷阱\nfor (var j = 0; j < 3; j++){\n  setTimeout(() => console.log(\"var 循环后:\", j), 0);\n  // 全部输出 3, 因为共享同一个 j\n}\nfor (let k = 0; k < 3; k++){\n  setTimeout(() => console.log(\"let 每次新变量:\", k), 0);\n  // 输出 0,1,2 正确\n}\n\n// 坑3: this 的指向取决于调用方式\nregular = () => console.log(\"箭头函数 this=外层:\", this);\nconst obj = {\n  name: \"X\",\n  normal(){ console.log(\"方法里的 this:\", this.name); },\n  arrow: () => console.log(\"箭头函数拿不到 obj 的 this:\", this.name)\n};\nobj.normal();   // X\nobj.arrow();    // undefined (箭头函数 this 固定为定义时的外层)"
            },
            {
              "type": "info",
              "title": "💡 bash 学习提示",
              "text": "学习\"作用域、闭包与 this\"时，除了理解概念本身，更重要的是动手实践。建议先通读一遍，再在编辑器里复现示例代码，遇到问题时对照原文逐一排查。"
            },
            {
              "type": "info",
              "title": "💡 Python学习建议",
              "text": "学习\"作用域、闭包与 this\"时，建议先理解核心概念，再通过实践加深印象。多动手写代码、多思考为什么，比单纯记忆更重要。遇到不懂的地方可以先跳过，回头再看往往豁然开朗。"
            },
            {
              "type": "warn",
              "title": "⚠️ 常见误区",
              "text": "学习\"作用域、闭包与 this\"时，新手常犯的错误包括：① 只看不练，以为看懂了就会了；② 急于求成，跳过基础直接看高级内容；③ 遇到问题就放弃，不主动搜索和调试。记住：编程是实践技能，动手做才是王道。"
            },
            {
              "type": "info",
              "title": "🔗 相关知识",
              "text": "作用域、闭包与 this 与计算机科学的其他领域密切相关。理解这个概念有助于学习后续的课程内容。建议将知识点串联成网，而非孤立记忆单个概念。"
            },
            {
              "type": "keypoints",
              "items": [
                "let/const 有块级作用域，var 没有",
                "循环+异步用 let 或立即执行函数捕获",
                "箭头函数不绑定自己的 this",
                "this 指向由『调用者』决定"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "err-algo",
      "name": "算法 / 逻辑常见错误",
      "icon": "Al",
      "tagline": "边界、死循环、溢出、off-by-one——靠代码正确把关。",
      "intro": "算法题折戟大多不是不会，而是边界没照顾好。这里盘点出镜率最高的算法『暗坑』。",
      "meta": {
        "难度": "进阶",
        "场景": "算法/面试"
      },
      "lessons": [
        {
          "id": "err-algo-1",
          "title": "边界与经典逻辑陷阱",
          "summary": "off-by-one、死循环、空集合、整数溢出。",
          "difficulty": "进阶",
          "blocks": [
            {
              "type": "code",
              "lang": "javascript",
              "title": "四大算法暗坑（可运行）",
              "code": "// 坑1: off-by-one 越界\nconst arr = [1,2,3];\n// for(let i=0; i<=arr.length; i++) → 最后一次越界 arr[3]=undefined\n// 对策: 用 i<arr.length\n\n// 坑2: 死循环\nfunction badWhile(n){\n  let i = 0;\n  while(i !== n){ i += 2; }  // n 为奇数时永远追不上 → 死循环\n  return i;\n}\n// console.log(badWhile(5)); // 会卡死! 别运行\nfunction goodWhile(n){\n  let i = 0;\n  while(i < n){ i += 2; }  // 总能退出\n  return i;\n}\nconsole.log(\"正确退出:\", goodWhile(5));  // 6, 但不会卡死\n\n// 坑3: 整数溢出(其它语言int溢出回绕)\n// JS number 是双精度，超安全整数仍会有精度问题\nconsole.log(\"大整数精度:\", 9007199254740993 === 9007199254740992); // true(丢失)\nconsole.log(\"用 BigInt:\", BigInt(9007199254740993n+1n) === 9007199254740994n);\n\n// 坑4: 空集合/极小输入的边界\nfunction avg(nums){ return nums.reduce((a,b)=>a+b,0) / nums.length; }\n// avg([]) → NaN (0/0)! 对策: 先判空\nconsole.log(\"空数组均值:\", avg([])); // NaN, 应提前 if(!nums.length) return 0;"
            },
            {
              "type": "table",
              "head": [
                "暗坑",
                "表现",
                "对策"
              ],
              "rows": [
                [
                  "off-by-one",
                  "多跑一次越界",
                  "用 < 不是 <="
                ],
                [
                  "死循环",
                  "程序卡死",
                  "确保循环变量单调向终止移动"
                ],
                [
                  "整数溢出",
                  "数值回绕/精度丢",
                  "大数用 BigInt/64位"
                ],
                [
                  "空输入",
                  "NaN/崩溃",
                  "先处理边界空集合"
                ]
              ]
            },
            {
              "type": "info",
              "title": "💡 bash 学习提示",
              "text": "学习\"边界与经典逻辑陷阱\"时，除了理解概念本身，更重要的是动手实践。建议先通读一遍，再在编辑器里复现示例代码，遇到问题时对照原文逐一排查。"
            },
            {
              "type": "info",
              "title": "💡 JavaScript学习建议",
              "text": "学习\"边界与经典逻辑陷阱\"时，建议先理解核心概念，再通过实践加深印象。多动手写代码、多思考为什么，比单纯记忆更重要。遇到不懂的地方可以先跳过，回头再看往往豁然开朗。"
            },
            {
              "type": "warn",
              "title": "⚠️ 常见误区",
              "text": "学习\"边界与经典逻辑陷阱\"时，新手常犯的错误包括：① 只看不练，以为看懂了就会了；② 急于求成，跳过基础直接看高级内容；③ 遇到问题就放弃，不主动搜索和调试。记住：编程是实践技能，动手做才是王道。"
            },
            {
              "type": "info",
              "title": "🔗 相关知识",
              "text": "边界与经典逻辑陷阱 与计算机科学的其他领域密切相关。理解这个概念有助于学习后续的课程内容。建议将知识点串联成网，而非孤立记忆单个概念。"
            },
            {
              "type": "keypoints",
              "items": [
                "循环边界用 < 避免越界",
                "循环变量必须能逼近终止条件",
                "先处理空输入/单元素等边界",
                "测试补0、负数、极大值用例"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "err-web",
      "name": "前后端 / 部署常见错误",
      "icon": "Wb",
      "tagline": "CORS、404、跨域、环境变量——上线前必查清单。",
      "intro": "从开发到上线，前端报错、请求失败、环境不一致的问题层出不穷。这里给一份『查错清单』。",
      "meta": {
        "难度": "进阶",
        "场景": "Web/部署"
      },
      "lessons": [
        {
          "id": "err-web-1",
          "title": "CORS / 404 / 请求失败排查",
          "summary": "为什么浏览器拦截我的请求？为什么部署后 404？",
          "difficulty": "进阶",
          "blocks": [
            {
              "type": "p",
              "text": "前端日常三大拦路虎：跨域被浏览器拦截（CORS）、资源 404、部署后接口地址不对。下面分别说清原因与对策。"
            },
            {
              "type": "code",
              "lang": "text",
              "title": "CORS / 404 / 部署 排查清单",
              "code": "一、CORS 跨域被拦截\n现象: fetch 提示 'No Allow-Access-Control'\n原因: 浏览器安全策略，前端域名≠后端域名/端口\n对策:\n  1. 后端设置响应头\n     Access-Control-Allow-Origin: *\n     (或用具体域名、配合白名单)\n  2. 前端用代理(开发期 vite/webpack proxy)\n  3. 生产环境把前后端放到同一域名\n\n二、404 资源找不到\n   1. html/css/js 路径写错 → 用相对路径/检查大小写\n   2. 部署后没传全目录\n   3. 纯静态站用 history 路由 → 需平台 SPA rewrite\n\n三、部署后请求失败\n   1. 接口地址写死成 localhost → 用环境变量\n   2. 后端未启动/未开放端口\n   3. HTTPS 页面请求 HTTP 接口(混合内容)会被禁\n\n四、环境变量\n   开发用 .env 本地, 生产在平台设置里配置\n   别把密钥提交进 git(加进 .gitignore)"
            },
            {
              "type": "code",
              "lang": "javascript",
              "title": "正确处理 fetch 错误（可运行）",
              "code": "async function safeFetch(url) {\n  try {\n    const res = await fetch(url);\n    if (!res.ok) {                       // 任何非 2xx\n      throw new Error(`HTTP ${res.status}`);\n    }\n    return await res.json();\n  } catch (err) {\n    // 网络错误 / CORS 都会进这里\n    return { error: true, msg: err.message };\n  }\n}\n\n// 区分: 网络层报错 vs 业务状态码\n// 网络/CORS/DNS → catch 块；4xx/5xx → res.ok 分支\n(async () => {\n  const r = await safeFetch(\"https://example.com/nope\");\n  console.log(r);   // 打印 {error:true,...} 因为 404\n  console.log(\"fetch 不会对 404 自动抛错, 必须自行检查 res.ok\");\n})();"
            },
            {
              "type": "info",
              "title": "💡 bash 学习提示",
              "text": "学习\"CORS / 404 / 请求失败排查\"时，除了理解概念本身，更重要的是动手实践。建议先通读一遍，再在编辑器里复现示例代码，遇到问题时对照原文逐一排查。"
            },
            {
              "type": "info",
              "title": "💡 算法学习建议",
              "text": "学习\"CORS / 404 / 请求失败排查\"时，建议先理解核心概念，再通过实践加深印象。多动手写代码、多思考为什么，比单纯记忆更重要。遇到不懂的地方可以先跳过，回头再看往往豁然开朗。"
            },
            {
              "type": "code",
              "lang": "javascript",
              "title": "扩展实践",
              "code": "// 算法扩展练习\n\n// 1. 快速排序优化版（原地排序）\nfunction quickSort(arr, left = 0, right = arr.length - 1) {\n  if (left >= right) return arr;\n  const pivot = arr[Math.floor((left + right) / 2)];\n  let i = left, j = right;\n  while (i <= j) {\n    while (arr[i] < pivot) i++;\n    while (arr[j] > pivot) j--;\n    if (i <= j) { [arr[i], arr[j]] = [arr[j], arr[i]]; i++; j--; }\n  }\n  if (left < j) quickSort(arr, left, j);\n  if (i < right) quickSort(arr, i, right);\n  return arr;\n}\nconsole.log(\"快排:\", quickSort([38, 27, 43, 3, 9, 82, 10]).join(','));\n\n// 2. 归并排序（稳定排序）\nfunction mergeSort(arr) {\n  if (arr.length <= 1) return arr;\n  const mid = Math.floor(arr.length / 2);\n  const left = mergeSort(arr.slice(0, mid));\n  const right = mergeSort(arr.slice(mid));\n  return merge(left, right);\n}\nfunction merge(left, right) {\n  const result = [];\n  let i = 0, j = 0;\n  while (i < left.length && j < right.length) {\n    if (left[i] <= right[j]) result.push(left[i++]);\n    else result.push(right[j++]);\n  }\n  return result.concat(left.slice(i)).concat(right.slice(j));\n}\nconsole.log(\"归并:\", mergeSort([3,1,4,1,5,9,2,6]).join(','));\n\n// 3. 二分查找：找插入位置\nfunction binarySearch(arr, target) {\n  let lo = 0, hi = arr.length - 1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  return lo; // 插入位置\n}\nconsole.log(\"查找位置:\", binarySearch([1,3,5,7,9], 6));\n\n// 4. 图的最短路径：Dijkstra 算法\nfunction dijkstra(graph, start) {\n  const dist = {};\n  const visited = new Set();\n  for (const node in graph) dist[node] = Infinity;\n  dist[start] = 0;\n  \n  while (true) {\n    let minNode = null, minDist = Infinity;\n    for (const node in graph) {\n      if (!visited.has(node) && dist[node] < minDist) {\n        minNode = node; minDist = dist[node];\n      }\n    }\n    if (!minNode) break;\n    visited.add(minNode);\n    for (const [neighbor, weight] of graph[minNode]) {\n      if (dist[minNode] + weight < dist[neighbor]) {\n        dist[neighbor] = dist[minNode] + weight;\n      }\n    }\n  }\n  return dist;\n}\nconst graph = { A:[['B',1],['C',4]], B:[['C',2],['D',5]], C:[['D',1]], D:[] };\nconsole.log(\"最短路径从A:\", JSON.stringify(dijkstra(graph, 'A')));"
            },
            {
              "type": "warn",
              "title": "⚠️ 常见误区",
              "text": "学习\"CORS / 404 / 请求失败排查\"时，新手常犯的错误包括：① 只看不练，以为看懂了就会了；② 急于求成，跳过基础直接看高级内容；③ 遇到问题就放弃，不主动搜索和调试。记住：编程是实践技能，动手做才是王道。"
            },
            {
              "type": "info",
              "title": "🔗 相关知识",
              "text": "CORS / 404 / 请求失败排查 与计算机科学的其他领域密切相关。理解这个概念有助于学习后续的课程内容。建议将知识点串联成网，而非孤立记忆单个概念。"
            },
            {
              "type": "keypoints",
              "items": [
                "CORS 是浏览器策略，解决在服务端加白名单",
                "404 常因路径/目录/路由配置",
                "fetch 对 4xx/5xx 不抛错，要查 res.ok",
                "线上接口用环境变量，别硬编码 localhost"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "err-git",
      "name": "Git 常见错误",
      "icon": "Gt",
      "tagline": "冲突、推送被拒、误删——Git 翻车自救手册。",
      "intro": "Git 的报错信息通常很吓人，但 90% 都有标准解法。这一节把高频 git 问题与其救人命令整理成速查表。",
      "meta": {
        "难度": "进阶",
        "场景": "版本控制"
      },
      "lessons": [
        {
          "id": "err-git-1",
          "title": "推送被拒 / 冲突 / 误操作补救",
          "summary": "non-fast-forward、merge conflict、回退与找回丢失的提交。",
          "difficulty": "进阶",
          "blocks": [
            {
              "type": "code",
              "lang": "bash",
              "title": "Git 报错与解法速查",
              "code": "# 1. 推送被拒: 'non-fast-forward'\n# 原因: 远程已有别人/自己的新提交, 而你本地落后\ngit pull --rebase        # 先变基拉取(推荐)\n# 或 git pull            # 直接合并\n# 再推送\ngit push\n\n# 2. 合并冲突 merge conflict\n# 会出现 <<<<<<< ======= >>>>>>> 标记\n# 手动编辑成最终想要的样子后:\ngit add 文件\ngit commit\n\n# 3. 误删/改坏, 还没提交 — 从暂存区或HEAD恢复\ngit checkout -- 文件      # 放弃工作区修改, 恢复成最新提交\n\n# 4. 提交回退 reset(慎用)\ngit log --oneline         # 先看哈希\ngit reset --hard <哈希>   # 回到该提交(会丢后面提交, 谨慎)\n\n# 5. 找回误删的提交(还没被GC)\ngit reflog                # 所有历史记录\ngit reset --hard <哈希>   # 从那恢复\n\n# 6. 撤销最新一次提交但保留改动\ngit reset --soft HEAD~1\n\n# 7. 忘记加文件, 补进上一个提交\ngit add 漏掉的文件\ngit commit --amend"
            },
            {
              "type": "warn",
              "title": "铁律",
              "text": "<code.inline>reset --hard</code.inline> 会丢弃未提交的改动。动手前先 <code.inline>git status</code> 和 <code.inline>git stash</code> 存档（<code.inline>git stash</code> 可临时藏起改动）。"
            },
            {
              "type": "info",
              "title": "💡 bash 学习提示",
              "text": "学习\"推送被拒 / 冲突 / 误操作补救\"时，除了理解概念本身，更重要的是动手实践。建议先通读一遍，再在编辑器里复现示例代码，遇到问题时对照原文逐一排查。"
            },
            {
              "type": "info",
              "title": "💡 Git学习建议",
              "text": "学习\"推送被拒 / 冲突 / 误操作补救\"时，建议先理解核心概念，再通过实践加深印象。多动手写代码、多思考为什么，比单纯记忆更重要。遇到不懂的地方可以先跳过，回头再看往往豁然开朗。"
            },
            {
              "type": "warn",
              "title": "⚠️ 常见误区",
              "text": "学习\"推送被拒 / 冲突 / 误操作补救\"时，新手常犯的错误包括：① 只看不练，以为看懂了就会了；② 急于求成，跳过基础直接看高级内容；③ 遇到问题就放弃，不主动搜索和调试。记住：编程是实践技能，动手做才是王道。"
            },
            {
              "type": "info",
              "title": "🔗 相关知识",
              "text": "推送被拒 / 冲突 / 误操作补救 与计算机科学的其他领域密切相关。理解这个概念有助于学习后续的课程内容。建议将知识点串联成网，而非孤立记忆单个概念。"
            },
            {
              "type": "keypoints",
              "items": [
                "推送被拒先 pull --rebase 再 push",
                "冲突手动解决后 add+commit",
                "git reflog 能找回丢失的提交",
                "危险命令前先 stash 或备份"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "err-method",
      "name": "通用排错方法论",
      "icon": "M",
      "tagline": "记下这套『遇错不慌』的流程，任何报错都能攻下。",
      "intro": "方法比知识更重要。掌控一套系统化排错流程，你面对任何报错都能从容应对，而不会在报错海洋里乱撞。",
      "meta": {
        "难度": "入门",
        "场景": "一切"
      },
      "lessons": [
        {
          "id": "err-method-1",
          "title": "遇错不慌七步法",
          "summary": "读懂 → 复现 → 定位 → 修复 → 回归，一套流程通用。",
          "difficulty": "入门",
          "blocks": [
            {
              "type": "p",
              "text": "报错不可怕，可怕的是『看着眼晕就瞎改』。记住这套七步法，把它当成条件反射，绝大多数问题都能 20 分钟内解决。"
            },
            {
              "type": "code",
              "lang": "text",
              "title": "七步排错法",
              "code": "1. 完整读报错: 错误类型 + 文件名 + 行号 + 堆栈\n   报错第一行的最后，往往是关键线索\n\n2. 弄清楚\"正确的行为\"是什么\n   先定义期望，才知道差距在哪\n\n3. 稳定复现\n   能稳定复现 = 已掌握一半；把条件缩到最小\n\n4. 打印中间值 / 打断点\n   在每个可能出错处看实际值，对比期望\n\n5. 二分定位\n   从两端缩小范围，确定\"最初出错的那一行\"\n\n6. 修复 + 立即验证\n   一次改一处，改完就跑，别一次改十处\n\n7. 写回归测试/记笔记\n   防止同样的坑再踩一遍\n\n配套心态:\n- 报错信息是你的朋友，不是骂你\n- 90% 的问题网上有人踩过，搜索整段报错大有用\n- 改一处测一处，胜过盲改十处"
            },
            {
              "type": "info",
              "title": "💡 bash 学习提示",
              "text": "学习\"遇错不慌七步法\"时，除了理解概念本身，更重要的是动手实践。建议先通读一遍，再在编辑器里复现示例代码，遇到问题时对照原文逐一排查。"
            },
            {
              "type": "info",
              "title": "💡 错误与排坑学习建议",
              "text": "学习\"遇错不慌七步法\"时，建议先理解核心概念，再通过实践加深印象。多动手写代码、多思考为什么，比单纯记忆更重要。遇到不懂的地方可以先跳过，回头再看往往豁然开朗。"
            },
            {
              "type": "code",
              "lang": "sql",
              "title": "扩展实践",
              "code": "// 错误与排错扩展练习\n\n// 1. Python 常见错误演示\nconsole.log('\\nPython 错误类型:');\nconsole.log('IndentationError: 缩进错误');\nconsole.log('NameError: 变量未定义');\nconsole.log('TypeError: 类型不匹配');\nconsole.log('KeyError: 字典键不存在');\nconsole.log('AttributeError: 属性不存在');\nconsole.log('ValueError: 值不正确');\nconsole.log('IndexError: 索引越界');\nconsole.log('FileNotFoundError: 文件不存在');\n\n// 2. JS 错误处理模式\nconsole.log('\\nJS 错误处理:');\ntry {\n  const result = undefined.value; // 会抛错\n} catch (e) {\n  console.log('捕获错误:', e.name, '-', e.message);\n}\n\n// 3. 断言测试\nfunction assert(condition, msg) {\n  if (!condition) throw new Error('断言失败: ' + msg);\n}\nassert(1 + 1 === 2, '算术错误');\nassert([1,2].length === 2, '数组长度错误');\nconsole.log('所有断言通过!');\n\n// 4. 调试技巧\nconsole.log('\\n调试三板斧:');\nconsole.log('1. 打印中间值: console.log(variable)');\nconsole.log('2. 使用 debugger: 在代码中设置断点');\nconsole.log('3. 二分定位: 注释一半代码缩小范围');"
            },
            {
              "type": "warn",
              "title": "⚠️ 常见误区",
              "text": "学习\"遇错不慌七步法\"时，新手常犯的错误包括：① 只看不练，以为看懂了就会了；② 急于求成，跳过基础直接看高级内容；③ 遇到问题就放弃，不主动搜索和调试。记住：编程是实践技能，动手做才是王道。"
            },
            {
              "type": "info",
              "title": "🔗 相关知识",
              "text": "遇错不慌七步法 与计算机科学的其他领域密切相关。理解这个概念有助于学习后续的课程内容。建议将知识点串联成网，而非孤立记忆单个概念。"
            },
            {
              "type": "keypoints",
              "items": [
                "先读清报错类型+行号+堆栈再动手",
                "能稳定复现等于解决一半",
                "二分定位最初出错行",
                "一次改一处并及时验证",
                "学会搜索完整报错，站在前人肩膀上"
              ]
            }
          ]
        }
      ]
    }
  ]
};
