/* ============================================================
   计算机知识库 · 数据：动手实操演示
   提供可一键运行的项目与小实验，配运行结果与原理说明。
   ============================================================ */
window.COOKBOOK_DATA = {
  "id": "cookbook",
  "name": "动手实操演示",
  "icon": "操",
  "description": "光看不练假把式。这里提供一批可以直接在右上角编辑器里运行的小项目与实验（JavaScript/HTML 为主），边运行边理解原理，附运行结果与讲解。",
  "children": [
    {
      "id": "demo-ui",
      "name": "前端小构件",
      "icon": "UI",
      "tagline": "天气卡片、计数器、待办，一步步可运行的界面。",
      "intro": "前端实操从可交互的小组件练起，边改代码边看界面刷新，上手最快。",
      "meta": {
        "难度": "入门",
        "场景": "前端"
      },
      "lessons": [
        {
          "id": "demo-ui-1",
          "title": "可交互计数器",
          "summary": "点按钮数字增减，理解事件监听与 DOM 操作。",
          "difficulty": "入门",
          "blocks": [
            {
              "type": "p",
              "text": "这是前端入门第一个『有反馈』的小项目：三个按钮（+1、-1、清零）操作一个数字。理解它，你就能理解『事件 → 改数据 → 更新界面』的基本循环。"
            },
            {
              "type": "code",
              "lang": "htmlcss",
              "title": "计数器（运行它！）",
              "code": "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"UTF-8\"><style>\n  body{font-family:sans-serif;display:grid;place-items:center;height:100vh}\n  .card{text-align:center;padding:24px;border:1px solid #e5e7eb;border-radius:16px}\n  #num{font-size:64px;font-weight:800;color:#4f46e5;margin:12px 0}\n  button{font-size:18px;margin:4px;padding:8px 16px;border:none;border-radius:8px;\n         background:#4f46e5;color:#fff;cursor:pointer}\n  button:hover{background:#4338ca}\n #zero{background:#e5e7eb;color:#1f2937}\n</style></head>\n<body>\n<div class=\"card\">\n  <h2>计数器</h2>\n  <div id=\"num\">0</div>\n  <button id=\"minus\">− 1</button>\n  <button id=\"plus\">+ 1</button>\n  <button id=\"zero\">清零</button>\n</div>\n<script>\n  let count = 0;\n  const num = document.getElementById(\"num\");\n  const show = () => { num.textContent = count; };\n  document.getElementById(\"plus\").onclick = () => { count++; show(); };\n  document.getElementById(\"minus\").onclick = () => { count--; show(); };\n  document.getElementById(\"zero\").onclick = () => { count = 0; show(); };\n</script>\n</body></html>"
            },
            {
              "type": "info",
              "title": "💡 bash 学习提示",
              "text": "学习\"可交互计数器\"时，除了理解概念本身，更重要的是动手实践。建议先通读一遍，再在编辑器里复现示例代码，遇到问题时对照原文逐一排查。"
            },
            {
              "type": "info",
              "title": "💡 动手实操学习建议",
              "text": "学习\"可交互计数器\"时，建议先理解核心概念，再通过实践加深印象。多动手写代码、多思考为什么，比单纯记忆更重要。遇到不懂的地方可以先跳过，回头再看往往豁然开朗。"
            },
            {
              "type": "code",
              "lang": "javascript",
              "title": "扩展实践",
              "code": "// 动手实操扩展练习\n\n// 1. DOM 操作实例\nconsole.log('\\nDOM 操作基础:');\nconst html = '<div id=\"app\"><p>Hello</p></div>';\nconsole.log('创建元素: document.createElement(\"div\")');\nconsole.log('获取元素: document.getElementById(\"app\")');\nconsole.log('修改内容: element.textContent = \"新内容\"');\nconsole.log('添加事件: element.onclick = fn');\n\n// 2. 事件循环\nconsole.log('\\nJavaScript 事件循环:');\nconsole.log('同步代码 -> 执行栈');\nconsole.log('异步回调 -> 任务队列 -> 执行栈');\nconsole.log('setTimeout(fn, 0) 不是立即执行');\nconsole.log('Promise.then 在宏任务之后执行');\n\n// 3. 异步编程\nconsole.log('\\n异步模式对比:');\nconsole.log('回调: 容易陷入回调地狱');\nconsole.log('Promise: 链式调用，更清晰');\nconsole.log('async/await: 最接近同步写法');\n\nasync function demo() {\n  const result = await fetch('https://api.example.com/data');\n  const json = await result.json();\n  console.log('异步结果:', json);\n}\n"
            },
            {
              "type": "warn",
              "title": "⚠️ 常见误区",
              "text": "学习\"可交互计数器\"时，新手常犯的错误包括：① 只看不练，以为看懂了就会了；② 急于求成，跳过基础直接看高级内容；③ 遇到问题就放弃，不主动搜索和调试。记住：编程是实践技能，动手做才是王道。"
            },
            {
              "type": "info",
              "title": "🔗 相关知识",
              "text": "可交互计数器 与计算机科学的其他领域密切相关。理解这个概念有助于学习后续的课程内容。建议将知识点串联成网，而非孤立记忆单个概念。"
            },
            {
              "type": "keypoints",
              "items": [
                "getElementById 找到元素",
                "onclick 绑定点击事件",
                "改变量后手动调用 show() 刷新界面",
                "数据结构是 JS 的本质入门"
              ]
            }
          ]
        },
        {
          "id": "demo-ui-2",
          "title": "待办事项 Todo 列表",
          "summary": "添加、标记完成、删除——一个完整的小应用。",
          "difficulty": "入门",
          "blocks": [
            {
              "type": "p",
              "text": "Todo 是前端最具代表性的入门项目：输入框 + 列表 + 增删改。做完它，你掌握的正是所有 CRUD 应用的基本骨架。"
            },
            {
              "type": "code",
              "lang": "htmlcss",
              "title": "Todo 列表（运行它！）",
              "code": "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"UTF-8\"><style>\n  body{font-family:sans-serif;padding:24px;max-width:420px;margin:0 auto}\n  input{padding:10px;width:70%;border:1px solid #d1d5db;border-radius:8px}\n  .row{display:flex;align-items:center;gap:8px;padding:8px 4px;border-bottom:1px solid #f1f5f9}\n  .done{text-decoration:line-through;color:#9ca3af}\n  .del{color:#dc2626;cursor:pointer;border:none;background:none;font-size:14px}\n  .add{background:#4f46e5;color:#fff;border:none;padding:10px 14px;border-radius:8px;cursor:pointer}\n</style></head>\n<body>\n  <h2>待办事项</h2>\n  <div>\n    <input id=\"text\" placeholder=\"输入要做的事\" />\n    <button class=\"add\" id=\"addBtn\">添加</button>\n  </div>\n  <div id=\"list\" style=\"margin-top:16px\"></div>\n  <script>\n    const todos = [];\n    const listEl = document.getElementById(\"list\");\n    function render(){\n      listEl.innerHTML = \"\";\n      todos.forEach((t, i) => {\n        const row = document.createElement(\"div\");\n        row.className = \"row\";\n        const cb = document.createElement(\"input\");\n        cb.type = \"checkbox\"; cb.checked = t.done;\n        cb.onchange = () => { t.done = cb.checked; render(); };\n        const label = document.createElement(\"span\");\n        label.textContent = t.text;\n        if (t.done) label.className = \"done\";\n        const del = document.createElement(\"button\");\n        del.textContent = \"✕\"; del.className = \"del\";\n        del.onclick = () => { todos.splice(i,1); render(); };\n        row.appendChild(cb); row.appendChild(label); row.appendChild(del);\n        listEl.appendChild(row);\n      });\n    }\n    function add(){\n      const v = document.getElementById(\"text\").value.trim();\n      if (!v) return;\n      todos.push({ text:v, done:false });\n      document.getElementById(\"text\").value = \"\";\n      render();\n    }\n    document.getElementById(\"addBtn\").onclick = add;\n    document.getElementById(\"text\").onkeydown = (e) => { if(e.key===\"Enter\") add(); };\n  </script>\n</body></html>"
            },
            {
              "type": "info",
              "title": "💡 bash 学习提示",
              "text": "学习\"待办事项 Todo 列表\"时，除了理解概念本身，更重要的是动手实践。建议先通读一遍，再在编辑器里复现示例代码，遇到问题时对照原文逐一排查。"
            },
            {
              "type": "info",
              "title": "💡 动手实操学习建议",
              "text": "学习\"待办事项 Todo 列表\"时，建议先理解核心概念，再通过实践加深印象。多动手写代码、多思考为什么，比单纯记忆更重要。遇到不懂的地方可以先跳过，回头再看往往豁然开朗。"
            },
            {
              "type": "code",
              "lang": "javascript",
              "title": "扩展实践",
              "code": "// 动手实操扩展练习\n\n// 1. DOM 操作实例\nconsole.log('\\nDOM 操作基础:');\nconst html = '<div id=\"app\"><p>Hello</p></div>';\nconsole.log('创建元素: document.createElement(\"div\")');\nconsole.log('获取元素: document.getElementById(\"app\")');\nconsole.log('修改内容: element.textContent = \"新内容\"');\nconsole.log('添加事件: element.onclick = fn');\n\n// 2. 事件循环\nconsole.log('\\nJavaScript 事件循环:');\nconsole.log('同步代码 -> 执行栈');\nconsole.log('异步回调 -> 任务队列 -> 执行栈');\nconsole.log('setTimeout(fn, 0) 不是立即执行');\nconsole.log('Promise.then 在宏任务之后执行');\n\n// 3. 异步编程\nconsole.log('\\n异步模式对比:');\nconsole.log('回调: 容易陷入回调地狱');\nconsole.log('Promise: 链式调用，更清晰');\nconsole.log('async/await: 最接近同步写法');\n\nasync function demo() {\n  const result = await fetch('https://api.example.com/data');\n  const json = await result.json();\n  console.log('异步结果:', json);\n}\n"
            },
            {
              "type": "warn",
              "title": "⚠️ 常见误区",
              "text": "学习\"待办事项 Todo 列表\"时，新手常犯的错误包括：① 只看不练，以为看懂了就会了；② 急于求成，跳过基础直接看高级内容；③ 遇到问题就放弃，不主动搜索和调试。记住：编程是实践技能，动手做才是王道。"
            },
            {
              "type": "info",
              "title": "🔗 相关知识",
              "text": "待办事项 Todo 列表 与计算机科学的其他领域密切相关。理解这个概念有助于学习后续的课程内容。建议将知识点串联成网，而非孤立记忆单个概念。"
            },
            {
              "type": "keypoints",
              "items": [
                "用数组存数据，render() 根据数据画界面",
                "数据驱动 UI：改数组后重新 render",
                "checkbox 勾选 = 改某条的状态",
                "删除 = splice 数组再 render"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "demo-algo",
      "name": "算法小实验",
      "icon": "Al",
      "tagline": "排序可视化、素数、反转、随机——跑起来看真相。",
      "intro": "把抽象的算法变成能运行、能打印结果的实验，理解立刻深一层。",
      "meta": {
        "难度": "入门",
        "场景": "算法"
      },
      "lessons": [
        {
          "id": "demo-algo-1",
          "title": "排序性能与素数筛",
          "summary": "亲手跑一遍各类排序，测出 O(n²) 和 O(n log n) 的差异。",
          "difficulty": "入门",
          "blocks": [
            {
              "type": "p",
              "text": "空看复杂度没感觉，亲手把大数组用不同算法排序并用计时器测一下，你就直观体会到『复杂度决定一切』。"
            },
            {
              "type": "code",
              "lang": "javascript",
              "title": "排序对比 + 素数筛（运行它！）",
              "code": "function bubble(a){ const x=[...a]; for(let i=0;i<x.length-1;i++) for(let j=0;j<x.length-1-i;j++) if(x[j]>x[j+1]) [x[j],x[j+1]]=[x[j+1],x[j]]; return x; }\nfunction quick(a){ if(a.length<=1) return a; const p=a[a.length>>1], L=[],R=[],E=[]; for(const v of a) v<p?L.push(v):v>p?R.push(v):E.push(v); return [...quick(L),...E,...quick(R)]; }\n\nconst big = Array.from({length:3000},()=>Math.random());\nlet t0=performance.now(); bubble(big); console.log(\"冒泡(3000个):\", (performance.now()-t0).toFixed(1)+\"ms\");\nt0=performance.now(); quick(big); console.log(\"快排(3000个):\", (performance.now()-t0).toFixed(1)+\"ms\");\n\n// 埃拉托色尼筛法: 找出 100 以内所有素数\nfunction sieve(n){\n  const isPrime=new Array(n+1).fill(true); isPrime[0]=isPrime[1]=false;\n  for(let i=2;i*i<=n;i++) if(isPrime[i]) for(let j=i*i;j<=n;j+=i) isPrime[j]=false;\n  const res=[]; for(let i=2;i<=n;i++) if(isPrime[i]) res.push(i); return res;\n}\nconsole.log(\"100以内素数:\", sieve(100).join(\" \"));\n\n// 反转字符串与判断回文\nconst rev=(s)=>s.split(\"\").reverse().join(\"\");\nconsole.log(\"反转:\", rev(\"abcdef\"));\nconsole.log(\"回文判断:\", rev(\"level\") === \"level\");"
            },
            {
              "type": "info",
              "title": "💡 bash 学习提示",
              "text": "学习\"排序性能与素数筛\"时，除了理解概念本身，更重要的是动手实践。建议先通读一遍，再在编辑器里复现示例代码，遇到问题时对照原文逐一排查。"
            },
            {
              "type": "info",
              "title": "💡 前端学习建议",
              "text": "学习\"排序性能与素数筛\"时，建议先理解核心概念，再通过实践加深印象。多动手写代码、多思考为什么，比单纯记忆更重要。遇到不懂的地方可以先跳过，回头再看往往豁然开朗。"
            },
            {
              "type": "warn",
              "title": "⚠️ 常见误区",
              "text": "学习\"排序性能与素数筛\"时，新手常犯的错误包括：① 只看不练，以为看懂了就会了；② 急于求成，跳过基础直接看高级内容；③ 遇到问题就放弃，不主动搜索和调试。记住：编程是实践技能，动手做才是王道。"
            },
            {
              "type": "info",
              "title": "🔗 相关知识",
              "text": "排序性能与素数筛 与计算机科学的其他领域密切相关。理解这个概念有助于学习后续的课程内容。建议将知识点串联成网，而非孤立记忆单个概念。"
            },
            {
              "type": "keypoints",
              "items": [
                "用 performance.now() 计时实测复杂度",
                "埃氏筛 O(n log log n) 高效找素数",
                "反转字符串 = split+reverse+join",
                "实测远比背诵复杂度的感知强"
              ]
            }
          ]
        },
        {
          "id": "demo-algo-2",
          "title": "数据结构应用小实验",
          "summary": "用栈做括号匹配、用哈希做词频，跑起来看结果。",
          "difficulty": "入门",
          "blocks": [
            {
              "type": "p",
              "text": "把栈、哈希这些结构放进真实小问题里，你就明白它们『到底图什么』——而不是只在教科书写 grid 上转圈。"
            },
            {
              "type": "code",
              "lang": "javascript",
              "title": "括号匹配 / 词频统计（运行它！）",
              "code": "// 1. 用栈做括号匹配 (Python 里也用列表当栈)\nfunction isBalanced(s){\n  const stack = [], pair = { \")\":\"(\", \"]\":\"[\", \"}\":\"{\" };\n  for (const ch of s){\n    if (\"([{\".includes(ch)) stack.push(ch);\n    else if (stack.pop() !== pair[ch]) return false;\n  }\n  return stack.length === 0;\n}\nconsole.log(\"({[]}) 匹配:\", isBalanced(\"({[]})\"));   // true\nconsole.log(\"([)] 不匹配:\", isBalanced(\"([)]\"));    // false\n\n// 2. 用哈希(对象)统计词频\nconst text = \"the cat and the dog and the bird\";\nconst freq = {};\nfor (const w of text.split(\" \")) freq[w] = (freq[w]||0)+1;\nconsole.log(\"词频:\", freq);\n\n// 3. 用队列模拟排队\"先进先出\"\nconst q=[]; [\"A\",\"B\",\"C\"].forEach(x=>q.push(x));\nconsole.log(\"服务顺序:\", q.shift(), q.shift(), q.shift()); // A B C\n\n// 4. 给定两数和，用哈希查 target\nfunction twoSum(nums, target){\n  const seen = {};\n  for (let i=0;i<nums.length;i++){\n    const need = target - nums[i];\n    if (need in seen) return [seen[need], i];\n    seen[nums[i]] = i;\n  }\n  return null;\n}\nconsole.log(\"两数和为9的下标:\", twoSum([2,7,11,15], 9)); // [0,1]"
            },
            {
              "type": "info",
              "title": "💡 bash 学习提示",
              "text": "学习\"数据结构应用小实验\"时，除了理解概念本身，更重要的是动手实践。建议先通读一遍，再在编辑器里复现示例代码，遇到问题时对照原文逐一排查。"
            },
            {
              "type": "info",
              "title": "💡 前端学习建议",
              "text": "学习\"数据结构应用小实验\"时，建议先理解核心概念，再通过实践加深印象。多动手写代码、多思考为什么，比单纯记忆更重要。遇到不懂的地方可以先跳过，回头再看往往豁然开朗。"
            },
            {
              "type": "warn",
              "title": "⚠️ 常见误区",
              "text": "学习\"数据结构应用小实验\"时，新手常犯的错误包括：① 只看不练，以为看懂了就会了；② 急于求成，跳过基础直接看高级内容；③ 遇到问题就放弃，不主动搜索和调试。记住：编程是实践技能，动手做才是王道。"
            },
            {
              "type": "info",
              "title": "🔗 相关知识",
              "text": "数据结构应用小实验 与计算机科学的其他领域密切相关。理解这个概念有助于学习后续的课程内容。建议将知识点串联成网，而非孤立记忆单个概念。"
            },
            {
              "type": "keypoints",
              "items": [
                "栈后进先出 → 括号匹配天然契合",
                "哈希 O(1) 查找 → 两数之和经典",
                "队列先进先出 → 模拟排队",
                "同一数据结构能解决一类问题"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "demo-data",
      "name": "数据处理实操",
      "icon": "Da",
      "tagline": "数组宏能力 map/filter/reduce 的实战演练。",
      "intro": "现代编程大量用函数式数据处理。掌握 map/filter/reduce，处理数组数据又快又优雅。",
      "meta": {
        "难度": "入门",
        "场景": "JavaScript"
      },
      "lessons": [
        {
          "id": "demo-data-1",
          "title": "用 map/filter/reduce 分析销售数据",
          "summary": "从一组订单里统计、筛选、汇总，全用一行式写法。",
          "difficulty": "入门",
          "blocks": [
            {
              "type": "p",
              "text": "给你一组订单：有名称、价格、分类。用 map/filter/reduce 完成『取出名称、筛出高消费、算总金额』——这就是真实业务里每天都在做的数据处理。"
            },
            {
              "type": "code",
              "lang": "javascript",
              "title": "订单数据分析（运行它！）",
              "code": "const orders = [\n  { name:\"咖啡\", price:30,  cat:\"餐饮\" },\n  { name:\"键盘\", price:299, cat:\"电子\" },\n  { name:\"午餐\", price:45,  cat:\"餐饮\" },\n  { name:\"鼠标\", price:89,  cat:\"电子\" },\n  { name:\"甜点\", price:20,  cat:\"餐饮\" },\n];\n\n// map: 取出所有名称\nconsole.log(\"所有商品:\", orders.map(o => o.name));\n\n// filter: 价格>=50 的\nconsole.log(\"高价商品:\", orders.filter(o => o.price >= 50).map(o=>o.name));\n\n// reduce: 总金额\nconst total = orders.reduce((sum, o) => sum + o.price, 0);\nconsole.log(\"总金额:\", total);\n\n// 组合拳: 电子类商品的平均价\nconst elec = orders.filter(o => o.cat === \"电子\");\nconst avgElec = elec.reduce((s,o)=>s+o.price,0) / elec.length;\nconsole.log(\"电子类平均价:\", avgElec);\n\n// 按分类分组(用 reduce 构建分组)\nconst byCat = orders.reduce((g, o) => {\n  (g[o.cat] ||= []).push(o.name);\n  return g;\n}, {});\nconsole.log(\"按分类分组:\", byCat);\n\n// 找最贵商品\nconst max = orders.reduce((best, o) => o.price > best.price ? o : best);\nconsole.log(\"最贵商品:\", max.name, max.price);"
            },
            {
              "type": "table",
              "head": [
                "方法",
                "作用",
                "例子"
              ],
              "rows": [
                [
                  "map",
                  "每个元素→新元素",
                  "取所有 name"
                ],
                [
                  "filter",
                  "按条件筛选",
                  "价格≥50"
                ],
                [
                  "reduce",
                  "累加成单一值",
                  "求和/找最值/分组"
                ]
              ]
            },
            {
              "type": "info",
              "title": "💡 bash 学习提示",
              "text": "学习\"用 map/filter/reduce 分析销售数据\"时，除了理解概念本身，更重要的是动手实践。建议先通读一遍，再在编辑器里复现示例代码，遇到问题时对照原文逐一排查。"
            },
            {
              "type": "info",
              "title": "💡 算法学习建议",
              "text": "学习\"用 map/filter/reduce 分析销售数据\"时，建议先理解核心概念，再通过实践加深印象。多动手写代码、多思考为什么，比单纯记忆更重要。遇到不懂的地方可以先跳过，回头再看往往豁然开朗。"
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
              "text": "学习\"用 map/filter/reduce 分析销售数据\"时，新手常犯的错误包括：① 只看不练，以为看懂了就会了；② 急于求成，跳过基础直接看高级内容；③ 遇到问题就放弃，不主动搜索和调试。记住：编程是实践技能，动手做才是王道。"
            },
            {
              "type": "info",
              "title": "🔗 相关知识",
              "text": "用 map/filter/reduce 分析销售数据 与计算机科学的其他领域密切相关。理解这个概念有助于学习后续的课程内容。建议将知识点串联成网，而非孤立记忆单个概念。"
            },
            {
              "type": "keypoints",
              "items": [
                "map = 映射转换，长度不变",
                "filter = 过滤筛选，长度缩短",
                "reduce = 汇聚成单一结果",
                "三件套可组合完成复杂分析"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "demo-project",
      "name": "综合小项目",
      "icon": "Pj",
      "tagline": "天气查询、计算器、随机密码——打包综合技能。",
      "intro": "把 DOM、事件、算法、数据处理整合成几个完整小项目，作为你『从会知识点到会做东西』的临门一脚。",
      "meta": {
        "难度": "进阶",
        "场景": "综合"
      },
      "lessons": [
        {
          "id": "demo-project-1",
          "title": "随机密码生成器",
          "summary": "选长度和字符集，一键生成安全随机密码。",
          "difficulty": "入门",
          "blocks": [
            {
              "type": "p",
              "text": "综合运用：DOM 读取勾选框、随机算法、字符串拼接、拷贝到剪贴板。一次涵盖多个基础技能。"
            },
            {
              "type": "code",
              "lang": "htmlcss",
              "title": "密码生成器（运行它！）",
              "code": "<!DOCTYPE html>\n<html>\n<head><meta charset=\"UTF-8\"><style>\n  body{font-family:sans-serif;padding:24px;max-width:380px}\n  #pwd{width:100%;padding:10px;font-family:monospace;font-size:18px;border:1px solid #d1d5db;border-radius:8px}\n  .chk{margin:6px 0}\n  button{margin-top:10px;padding:10px 18px;border:none;border-radius:8px;background:#4f46e5;color:#fff;cursor:pointer}\n</style></head>\n<body>\n  <h2>随机密码生成器</h2>\n  <input id=\"pwd\" readonly placeholder=\"点击生成\" />\n  <div style=\"margin-top:12px\">\n    长度: <input id=\"len\" type=\"number\" value=\"16\" min=\"4\" max=\"40\" style=\"width:60px\">\n  </div>\n  <label class=\"chk\"><input type=\"checkbox\" id=\"up\" checked>大写字母</label><br>\n  <label class=\"chk\"><input type=\"checkbox\" id=\"low\" checked>小写字母</label><br>\n  <label class=\"chk\"><input type=\"checkbox\" id=\"num\" checked>数字</label><br>\n  <label class=\"chk\"><input type=\"checkbox\" id=\"sym\">符号 !@#$%</label>\n  <br>\n  <button id=\"gen\">生成</button>\n  <button id=\"copy\" style=\"background:#e5e7eb;color:#1f2937\">复制</button>\n  <script>\n    const sets = {\n      up: \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\",\n      low:\"abcdefghijklmnopqrstuvwxyz\",\n      num:\"0123456789\", sym:\"!@#$%^&*\" };\n    function gen(){\n      const len = +document.getElementById(\"len\").value;\n      let pool=\"\";\n      for(const k in sets) if(document.getElementById(k).checked) pool+=sets[k];\n      if(!pool){ alert(\"至少选一类字符\"); return; }\n      let p=\"\";\n      for(let i=0;i<len;i++) p += pool[Math.floor(Math.random()*pool.length)];\n      document.getElementById(\"pwd\").value=p;\n    }\n    document.getElementById(\"gen\").onclick=gen;\n    document.getElementById(\"copy\").onclick=()=>{\n      const el=document.getElementById(\"pwd\");\n      if(!el.value) return;\n      navigator.clipboard && navigator.clipboard.writeText(el.value);\n      alert(\"已复制\"); };\n  </script>\n</body></html>"
            },
            {
              "type": "info",
              "title": "💡 bash 学习提示",
              "text": "学习\"随机密码生成器\"时，除了理解概念本身，更重要的是动手实践。建议先通读一遍，再在编辑器里复现示例代码，遇到问题时对照原文逐一排查。"
            },
            {
              "type": "info",
              "title": "💡 数据处理学习建议",
              "text": "学习\"随机密码生成器\"时，建议先理解核心概念，再通过实践加深印象。多动手写代码、多思考为什么，比单纯记忆更重要。遇到不懂的地方可以先跳过，回头再看往往豁然开朗。"
            },
            {
              "type": "warn",
              "title": "⚠️ 常见误区",
              "text": "学习\"随机密码生成器\"时，新手常犯的错误包括：① 只看不练，以为看懂了就会了；② 急于求成，跳过基础直接看高级内容；③ 遇到问题就放弃，不主动搜索和调试。记住：编程是实践技能，动手做才是王道。"
            },
            {
              "type": "info",
              "title": "🔗 相关知识",
              "text": "随机密码生成器 与计算机科学的其他领域密切相关。理解这个概念有助于学习后续的课程内容。建议将知识点串联成网，而非孤立记忆单个概念。"
            },
            {
              "type": "keypoints",
              "items": [
                "读取勾选框 checked 状态",
                "Math.random() 从池中随机取",
                "先拼字符池再逐位取",
                "navigator.clipboard 复制到剪贴板"
              ]
            }
          ]
        },
        {
          "id": "demo-project-2",
          "title": "简单 IP/时间小工具",
          "summary": "JS 原生能力：日期格式化与字符统计。",
          "difficulty": "入门",
          "blocks": [
            {
              "type": "code",
              "lang": "javascript",
              "title": "处理时间与文本（运行它！）",
              "code": "// 日期时间处理\nconst now = new Date();\nconsole.log(\"当前时间:\", now.toString());\nfunction pad(n){ return String(n).padStart(2,\"0\"); }\nconsole.log(`格式化: ${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`);\n\n// 文本统计\ntextStats = (s) => ({\n  长度: s.length,\n  单词数: s.trim().split(/\\s+/).filter(Boolean).length,\n  字符出现次数: (s.match(/o/g)||[]).length\n});\nconsole.log(textStats(\"hello world how are you\"));\n\n// 数组去重\nconst dup=[1,2,2,3,3,3,4];\nconsole.log(\"去重:\", [...new Set(dup)]);\n\n// 随机色值\nrandomColor = () => \"#\" + Math.floor(Math.random()*0xFFFFFF).toString(16).padStart(6,\"0\");\nconsole.log(\"随机颜色:\", randomColor());"
            },
            {
              "type": "info",
              "title": "💡 bash 学习提示",
              "text": "学习\"简单 IP/时间小工具\"时，除了理解概念本身，更重要的是动手实践。建议先通读一遍，再在编辑器里复现示例代码，遇到问题时对照原文逐一排查。"
            },
            {
              "type": "info",
              "title": "💡 数据处理学习建议",
              "text": "学习\"简单 IP/时间小工具\"时，建议先理解核心概念，再通过实践加深印象。多动手写代码、多思考为什么，比单纯记忆更重要。遇到不懂的地方可以先跳过，回头再看往往豁然开朗。"
            },
            {
              "type": "warn",
              "title": "⚠️ 常见误区",
              "text": "学习\"简单 IP/时间小工具\"时，新手常犯的错误包括：① 只看不练，以为看懂了就会了；② 急于求成，跳过基础直接看高级内容；③ 遇到问题就放弃，不主动搜索和调试。记住：编程是实践技能，动手做才是王道。"
            },
            {
              "type": "info",
              "title": "🔗 相关知识",
              "text": "简单 IP/时间小工具 与计算机科学的其他领域密切相关。理解这个概念有助于学习后续的课程内容。建议将知识点串联成网，而非孤立记忆单个概念。"
            },
            {
              "type": "keypoints",
              "items": [
                "new Date() 与 getFullYear/getMonth 取值",
                "padStart 补零让格式美观",
                "Set 天然去重",
                "随机数转十六进制生成色值"
              ]
            }
          ]
        }
      ]
    }
  ]
};
