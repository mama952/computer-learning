/* ============================================================
   计算机知识库 · 数据：编程语言分类
   schema: { id, name, icon, description, children:[{id,name,icon,tagline,intro,meta,lessons:[{id,title,summary,difficulty,blocks,templates}]}] }
   block.type: p | h | h3 | list(ordered?) | tip | info | warn | danger | keypoints | code | table
   ============================================================ */
window.LANGUAGE_DATA = {
  id: "languages",
  name: "编程语言",
  icon: "字",
  description:
    "编程语言是我们和计算机沟通的桥梁。这里用大白话讲清每一门主流语言的语法、特性、适用场景与常见陷阱，从零开始也能看懂。",
  children: [
    /* ================= Python ================= */
    {
      id: "python",
      name: "Python",
      icon: "Py",
      tagline: "最友好的入门语言，适合数据分析、AI、自动化与后端开发。",
      intro:
        "Python 之所以被评为最友好的语言，是因为它的语法极度接近英语，代码像在读一段自然语言。它不需要像 C 那样手动管理内存，也不需要声明变量类型，写起来非常省心。",
      meta: { 难度: "入门", 场景: "数据/AI/后端/自动化" },
      lessons: [
        {
          id: "python-1",
          title: "Python 为什么人人都能上手",
          summary: "从 '万物皆对象' 到缩进即结构，理解 Python 的设计哲学。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "Python 的设计哲学是「简单、优雅、明确」。最直观的体现就是：用一个普通缩进（4 个空格）来表示代码块，而不是像其他语言那样用花括号 {}。这意味着你写的每一行代码，都像在讲述一个故事。" },
            { type: "code", lang: "python", title: "第一个 Python 程序", code: '# 这是一条注释，解释下面这行在做什么\nprint("你好，世界！")  # 把文字打印到屏幕\n# 变量不需要声明类型，直接赋值即可\nname = "小明"\nage = 20\nheight = 1.75\nprint(f"我叫{name}，今年{age}岁，身高{height}米")' },
            { type: "p", text: "变量无需声明类型，Python 会自动推断。字符串用引号，整数、小数直接写。用 <code.inline>f\"...\"</code.inline> 可以在字符串里插入变量值，这叫「格式化字符串」，非常常用。" },
            { type: "h", text: "四大常用结构：条件、循环、函数、列表" },
            { type: "code", lang: "python", title: "条件判断", code: 'score = 88\nif score >= 90:\n    print("优秀")\nelif score >= 60:\n    print("及格")\nelse:\n    print("不及格")' },
            { type: "code", lang: "python", title: "for 循环与列表", code: 'fruits = ["苹果", "香蕉", "橙子"]\nfor fruit in fruits:\n    print(fruit)\n\n# range 生成数字序列\nfor i in range(1, 6):\n    print(i, "的平方是", i * i)' },
            { type: "code", lang: "python", title: "函数：把代码打包成工具", code: 'def greet(name, greeting="你好"):\n    """给指定的人打招呼，可自定义问候语"""\n    return f"{greeting}，{name}！"\n\nprint(greet("小红"))\nprint(greet("小刚", "早上好"))' },
            { type: "p", text: "函数用 <code.inline>def</code.inline> 定义，括号里是参数，<code.inline>return</code.inline> 返回结果。可以给参数设默认值，调用时不传就用默认值。" },
            { type: "info", title: "Python 缩进是语法", text: "缩进不对会直接报错 <code.inline>IndentationError</code.inline>，所以务必统一用 4 个空格缩进，这是 Python 新手第一个会踩的坑。" },
            { type: "code", lang: "python", title: "字典：键值对映射", code: 'person = {\n    "name": "小明",\n    "age": 20,\n    "city": "北京"\n}\nprint(person["name"])\nperson["age"] = 21  # 修改值\nprint(person)\n\n# 遍历字典\nfor key, value in person.items():\n    print(key, "=>", value)' },
            { type: "keypoints", items: ["Python 用缩进表示代码块，而不是花括号", "变量无需声明类型，f-string 可便捷格式化", "def 定义函数，return 返回结果，可设默认参数", "列表 []、字典 {} 是最常用的两种容器", "字典的 items() 方法用于遍历键值对"] },
          ],
          templates: [{ name: "列表遍历", code: 'fruits = ["苹果", "香蕉", "橙子"]\nfor fruit in fruits:\n    print(fruit)\n\nfor i in range(1, 6):\n    print(i, "的平方是", i * i)' }, { name: "求和平均数", code: 'scores = [88, 92, 76, 85, 90]\ntotal = sum(scores)\navg = total / len(scores)\nprint("总分：", total)\nprint("平均分：", avg)\nprint("最高分：", max(scores))' }],
        },
        {
          id: "python-2",
          title: "面向对象：把世界建模成「对象」",
          summary: "理解类与对象，这是 Python 进阶与一切大型项目的地基。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "面向对象编程（OOP）是一种思考方式：把现实世界的东西，比如一辆车、一个学生，抽象成一个「类」（模板），再根据模板创建出具体的「对象」（实例）。类是图纸，对象是照着图纸造出来的车。" },
            { type: "code", lang: "python", title: "定义一个类", code: 'class Dog:\n    """狗这个类"""\n    species = "犬科"  # 类属性，所有实例共享\n\n    def __init__(self, name, age):\n        # __init__ 是构造方法，创建对象时自动调用\n        self.name = name  # self 代表当前对象自己\n        self.age = age\n\n    def bark(self):\n        return f"{self.name} 在汪汪叫！"\n\n# 创建两个对象\nd1 = Dog("旺财", 3)\nd2 = Dog("小黑", 5)\nprint(d1.bark())\nprint(d2.bark())\nprint(Dog.species)' },
            { type: "p", text: "<code.inline>__init__</code.inline> 是特殊方法，在创建对象时自动执行，用来给对象初始化属性。<code.inline>self</code.inline> 固定的指向「当前对象」，所有实例方法第一个参数都是它。" },
            { type: "info", title: "继承：复用别人的代码", text: "可以让一个类「继承」另一个类，自动拥有父类的方法，再改写或新增自己的方法，避免重复写代码。" },
            { type: "code", lang: "python", title: "继承示例", code: 'class Animal:\n    def sound(self):\n        return "发出声响"\n\n# Cat 继承 Animal，覆盖 sound 方法\nclass Cat(Animal):\n    def sound(self):\n        return "喵～"\n\nc = Cat()\nprint(c.sound())  # 使用自己的版本' },
            { type: "keypoints", items: ["类是模板，对象是根据模板创建的实例", "__init__ 构造方法负责初始化对象属性", "实例方法第一个参数必须是 self", "继承让子类自动获得父类能力并允许覆盖"] },
          ],
        },
      ],
    },

    /* ================= JavaScript ================= */
    {
      id: "javascript",
      name: "JavaScript",
      icon: "JS",
      tagline: "网页的灵魂，让页面活起来的语言，支持在浏览器中实时运行。",
      intro:
        "JavaScript 是唯一内置在浏览器里的编程语言，用它可以让网页拥有交互：点击按钮、弹窗、发请求、做动画。如今它也跑在服务器（Node.js）上，可谓「一统前后端」。本题支持在编辑器里直接运行 JS。",
      meta: { 难度: "入门", 场景: "前端 / 后端 / 全栈" },
      lessons: [
        {
          id: "js-1",
          title: "JavaScript 从第一行代码开始",
          summary: "变量、数据类型、函数与浏览器交互，全部能在这里立刻运行。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "在网页里，JS 负责「动」：接收用户输入、改变页面内容、和服务器通信。它最适合边写边看结果——这正是本题编辑器存在的意义。点击右上角「运行」，看下面的代码输出什么。" },
            { type: "code", lang: "javascript", title: "运行你的第一段 JS", code: '// 变量用 let 声明，常量用 const\nlet name = "小明"\nconst birthday = "2000-01-01"  // 常量不可重新赋值\n\nconsole.log("你好，" + name)\nconsole.log(`我出生在${birthday}`)  // 模板字符串\n\n// 类型判断\nconsole.log(typeof name)   // string\nconsole.log(typeof 42)     // number\nconsole.log(typeof true)   // boolean' },
            { type: "p", text: "<code.inline>console.log()</code.inline> 把内容打印到控制台（本题会显示在下方「输出」区）。模板字符串用反引号 <code.inline>`</code.inline> 包裹，并用 <code.inline>${}</code.inline> 插入变量。" },
            { type: "code", lang: "javascript", title: "数组与对象", code: '// 数组：有序列表\nconst fruits = ["苹果", "香蕉", "橙子"]\nconsole.log(fruits[0])          // 第一个元素\nconsole.log(fruits.length)      // 长度\nfruits.push("芒果")             // 末尾添加\nfor (const f of fruits) console.log(f)\n\n// 对象：键值对\nconst person = {\n  name: "小明",\n  age: 20,\n  greet() { return `我是${this.name}` }\n}\nconsole.log(person.name)\nconsole.log(person.greet())' },
            { type: "code", lang: "javascript", title: "函数与箭头函数", code: '// 传统函数\nfunction add(a, b) {\n  return a + b\n}\n\n// 箭头函数，写法更简洁\nconst multiply = (a, b) => a * b\n\nconsole.log(add(3, 4))\nconsole.log(multiply(3, 4))\n\n// 数组的高阶方法：map / filter / reduce\nconst nums = [1, 2, 3, 4, 5]\nconst doubled = nums.map(n => n * 2)     // 每个元素映射\nconst evens = nums.filter(n => n % 2 === 0) // 过滤出偶数\nconst sum = nums.reduce((acc, n) => acc + n, 0) // 累加\nconsole.log("翻倍:", doubled)\nconsole.log("偶数:", evens)\nconsole.log("总和:", sum)' },
            { type: "info", title: "浏览器中的 DOM 交互", text: "真正的网页交互要操作 DOM：用 <code.inline>document.getElementById</code.inline> 找到元素，改它的 <code.inline>textContent</code.inline>。这在纯 JS 运行环境里无法演示，需要 HTML 环境，见「HTML & CSS」分类。" },
            { type: "keypoints", items: ["let 声明可变变量，const 声明常量", "console.log 打印调试信息", "模板字符串用反引号 + ${} 插值", "map/filter/reduce 是数组三大神器", "箭头函数 () => {} 是现代的简洁写法"] },
          ],
          templates: [
            { name: "斐波那契数列", code: 'function fib(n) {\n  if (n <= 1) return n\n  return fib(n - 1) + fib(n - 2)\n}\nfor (let i = 0; i < 10; i++) {\n  console.log(`fib(${i}) = ${fib(i)}`)\n}' },
            { name: "对象与遍历", code: 'const student = {\n  name: "小红",\n  scores: { math: 95, english: 88 },\n  getTotal() { return this.scores.math + this.scores.english }\n}\nconsole.log(`${student.name} 总分 ${student.getTotal()}`)\nObject.keys(student).forEach(k => console.log(k))' },
          ],
        },
        {
          id: "js-2",
          title: "异步与 AJAX：让网页和服务器对话",
          summary: "理解 Promise、async/await 与现代前端数据交互。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "网页需要按需从服务器拿数据（比如点赞数、评论、天气），而不是一次性全下载。这个过程叫异步：页面先显示，数据到了再更新。JavaScript 用「事件循环」处理异步，核心工具是 Promise。" },
            { type: "code", lang: "javascript", title: "Promise 与 async/await", code: '// Promise 代表一个「将来才有结果」的操作\nfunction fakeRequest(ms, data) {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(data), ms)\n  })\n}\n\nasync function fetchData() {\n  console.log("开始请求...")\n  const user = await fakeRequest(500, { name: "小明" })\n  console.log("拿到用户:", user)\n  const posts = await fakeRequest(500, ["文章1", "文章2"])\n  console.log("拿到文章:", posts)\n  return "全部完成"\n}\n\nfetchData().then(msg => console.log(msg))\nconsole.log("这条会先打印，因为上面是异步的")' },
            { type: "warn", title: "async/await 是 Promise 的语法糖", text: "用 <code.inline>await</code.inline> 等待异步结果时，所在函数必须标 <code.inline>async</code.inline>。<code.inline>.then()</code.inline> 和 <code.inline>await</code.inline> 是等价的，只是写法不同。" },
            { type: "keypoints", items: ["异步让页面不卡顿，数据到达后更新", "Promise 代表未来的结果，then 处理成功", "async 函数里可以用 await 顺序书写异步逻辑", "事件循环保证 JS 单线程也能流畅协作"] },
          ],
        },
      ],
    },

    /* ================= HTML & CSS ================= */
    {
      id: "htmlcss",
      name: "HTML & CSS",
      icon: "H5",
      tagline: "搭建网页骨架与外貌，所见即所得，直接在浏览器预览。",
      intro:
        "HTML 决定网页「有什么」（标题、按钮、图片），CSS 决定网页「长什么样」（颜色、布局、动画）。两者是前端的基础，且都能在本题编辑器里直接运行预览。",
      meta: { 难度: "入门", 场景: "前端" },
      lessons: [
        {
          id: "html-1",
          title: "HTML：网页的骨架",
          summary: "认识标签、元素与常用结构，亲手搭一个页面。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "HTML 用成对的「标签」来标记内容：<code.inline><h1>标题</h1></code.inline>。开始标签、内容、结束标签合起来叫一个「元素」。标签可以嵌套，像俄罗斯套娃。" },
            { type: "info", title: "写在编辑器里直接预览", text: "点击「在编辑器中打开」，然后在右上角点「运行」，就能在浏览器里渲染出真正的页面效果。" },
            { type: "code", lang: "htmlcss", title: "一个完整的页面", code: '<!DOCTYPE html>\n<html lang="zh-CN">\n<head>\n  <meta charset="UTF-8">\n  <style>\n    h1 { color: #4f46e5; }\n    .card {\n      border: 1px solid #e5e7eb;\n      border-radius: 12px;\n      padding: 16px;\n      max-width: 320px;\n    }\n    .card h2 { margin-top: 0; }\n  </style>\n</head>\n<body>\n  <h1>我的第一个网页</h1>\n  <div class="card">\n    <h2>自我介绍</h2>\n    <p>大家好，我是新手程序员。</p>\n  </div>\n</body>\n</html>' },
            { type: "code", lang: "htmlcss", title: "常用标签一览", code: '<h1>我是一级标题</h1>\n<h2>我是二级标题</h2>\n<p>这是段落文字。</p>\n<a href="https://example.com">这是一个链接</a><br>\n<strong>加粗文字</strong> 与 <em>斜体文字</em>\n<ul>\n  <li>无序列表第一项</li>\n  <li>第二项</li>\n</ul>\n<ol>\n  <li>有序列表第一项</li>\n</ol>\n<img src="data:image/svg+xml,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;100&quot; height=&quot;50&quot;><rect width=&quot;100&quot; height=&quot;50&quot; fill=&quot;%234f46e5&quot;/></svg>" alt="示例图片" width="100">\n<button>我是一个按钮</button>\n<input placeholder="我是输入框">' },
            { type: "keypoints", items: ["HTML 用成对标签标记内容，开始+内容+结束", "head 放元数据与样式，body 放可见内容", "div 是通用容器，class 用于 CSS 定位", "a 是链接、img 是图片、button 是按钮"] },
          ],
        },
        {
          id: "css-1",
          title: "CSS：让网页变漂亮",
          summary: "选择器、盒模型、Flexbox 布局与过渡动画。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "CSS 的语法是「选择器 + 声明」：先选出要美化的元素，再写它该有的样式。核心概念是「盒模型」——每个元素都是一个盒子：内容、内边距 padding、边框 border、外边距 margin。" },
            { type: "code", lang: "css", title: "盒模型与选择器", code: '/* 元素选择器选择所有 button */\nbutton {\n  background: #4f46e5;\n  color: #fff;\n  border: none;\n  padding: 10px 18px;         /* 内边距 */\n  border-radius: 8px;         /* 圆角 */\n  cursor: pointer;            /* 鼠标变手指 */\n}\n\n/* 类选择器：. 开头 */\n.highlight {\n  background: yellow;\n}\n\n/* 悬停效果 */\nbutton:hover {\n  background: #4338ca;\n}' },
            { type: "code", lang: "htmlcss", title: "Flexbox 布局实作", code: '<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<style>\n  .container {\n    display: flex;          /* 变成弹性布局 */\n    gap: 12px;              /* 元素间距 */\n    justify-content: center;/* 水平居中 */\n    padding: 24px;\n  }\n  .box {\n    width: 80px; height: 80px;\n    background: #4f46e5;\n    color: #fff;\n    display: flex;\n    align-items: center;    /* 垂直居中 */\n    justify-content: center;\n    border-radius: 12px;\n    transition: transform 0.3s; /* 过渡动画 */\n  }\n  .box:hover { transform: translateY(-6px) scale(1.1); }\n</style>\n</head>\n<body>\n  <div class="container">\n    <div class="box">1</div>\n    <div class="box">2</div>\n    <div class="box">3</div>\n  </div>\n</body>\n</html>' },
            { type: "info", title: "Flexbox 是布局核心", text: "给容器设 <code.inline>display: flex</code.inline>，子元素就会水平排布。控制主轴用 <code.inline>justify-content</code.inline>，控制交叉轴用 <code.inline>align-items</code.inline>。掌握它就能搞定 90% 的布局。" },
            { type: "keypoints", items: ["CSS = 选择器 + 声明，用 . 选类、# 选 id", "盒模型：content / padding / border / margin", "Flexbox 一行 `display:flex` 实现现代布局", "transition + :hover 制作流畅动画"] },
          ],
        },
      ],
    },

    /* ================= Java ================= */
    {
      id: "java",
      name: "Java",
      icon: "Ja",
      tagline: "企业后端的中流砥柱，跨平台「一次编写，处处运行」。",
      intro:
        "Java 是诞生近 30 年的企业级语言，强调严谨与稳定。它的口号是 WORA——一次编写，处处运行，靠的是 JVM 虚拟机。语法类似 C，但独占一份内存管理（GC）。",
      meta: { 难度: "入门", 场景: "企业后端 / Android / 大数据" },
      lessons: [
        {
          id: "java-1",
          title: "Java 语言基础与类的世界",
          summary: "强类型、类为一切、代码要写在类里，认识 Java 的核心习惯。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "Java 是强类型语言：每个变量必须声明类型。它几乎「一切都在类里」——就连程序的入口 main 方法也必须放在某个类中。这是它和 Python/JS 最大的区别，也是新手初学的门槛。" },
            { type: "code", lang: "java", title: "Hello World 与变量", code: 'public class Main {\n    public static void main(String[] args) {\n        // 声明变量必须先给类型\n        int age = 20;            // 整数\n        String name = "小明";     // 字符串\n        double height = 1.75;    // 小数\n        boolean isStudent = true;// 布尔\n\n        System.out.println("你好，" + name);\n        System.out.println("年龄: " + age);\n        System.out.println("身高: " + height + "，学生: " + isStudent);\n    }\n}' },
            { type: "info", title: "为什么要装 JDK 才能跑", text: "Java 代码先编译成字节码（.class），再由 JVM 解释执行。所以需要 JDK（编译+运行环境），这也是它跨平台的原因。本题编辑器无法直接运行 Java，请复制到本地运行。" },
            { type: "code", lang: "java", title: "条件、循环与数组", code: 'public class Demo {\n    public static void main(String[] args) {\n        // 条件\n        int score = 88;\n        if (score >= 90) System.out.println("优秀");\n        else if (score >= 60) System.out.println("及格");\n        else System.out.println("不及格");\n\n        // 数组\n        int[] nums = {1, 2, 3, 4, 5};\n        int sum = 0;\n        // for-each 循环\n        for (int n : nums) sum += n;\n        System.out.println("总和: " + sum);\n    }\n}' },
            { type: "keypoints", items: ["Java 强类型，变量必须声明类型", "一切代码都在类里，入口是 main 方法", "System.out.println 打印输出", "for-each 语法 `for(int n : arr)` 遍历数组", "运行需 JDK，此处仅讲解"] },
          ],
        },
      ],
    },

    /* ================= C ================= */
    {
      id: "c-lang",
      name: "C",
      icon: "C",
      tagline: "操作系统与底层的语言，让你理解计算机真正的运行方式。",
      intro:
        "C 是一门贴近硬件的语言，很多现代语言（C++、Java、Go、Python 解释器）都受它影响或用它编写。学 C 的意义在于理解内存、指针和程序如何真正运行。",
      meta: { 难度: "进阶", 场景: "系统 / 嵌入式 / 底层" },
      lessons: [
        {
          id: "c-1",
          title: "C 语言与指针的直觉",
          summary: "变量、指针、数组——用『门牌号』的比喻讲透指针。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "C 的变量存在内存中，每个变量有一个「地址」（像门牌号）。指针就是存放这个门牌号的变量。声明 <code.inline>int *p</code.inline> 表示 p 是一个指向整数地址的指针，用 <code.inline>&</code.inline> 取地址，用 <code.inline>*</code.inline> 解引用（顺着门牌号找里面的值）。" },
            { type: "code", lang: "c", title: "指针入门", code: "#include <stdio.h>\n\nint main(void) {\n    int a = 10;\n    int *p = &a;   // p 存 a 的地址\n\n    printf(\"a 的值: %d\\n\", a);\n    printf(\"a 的地址: %p\\n\", (void*)&a);\n    printf(\"p 里存的地址: %p\\n\", (void*)p);\n    printf(\"通过 p 取 a 的值: %d\\n\", *p);  // 解引用\n\n    *p = 99;   // 通过指针修改 a\n    printf(\"修改后 a = %d\\n\", a);\n    return 0;\n}" },
            { type: "warn", title: "指针是双刃剑", text: "指针强大但危险——可以访问任意内存。必须初始化指针、用完释放（free），否则会出现「悬垂指针」「内存泄漏」等难缠问题。" },
            { type: "code", lang: "c", title: "数组名就是指针", code: "#include <stdio.h>\n\nint main(void) {\n    int arr[5] = {10, 20, 30, 40, 50};\n    // arr 是首元素地址，arr + i 是第 i 个元素地址\n    for (int i = 0; i < 5; i++) {\n        printf(\"arr[%d] = %d\\n\", i, *(arr + i));\n    }\n    return 0;\n}" },
            { type: "keypoints", items: ["指针存变量的内存地址，类型决定步长", "& 取地址，* 解引用取值", "数组名本质是首元素地址", "必须管理内存，用 free 释放 malloc 的内存"] },
          ],
        },
      ],
    },

    /* ================= C++ ================= */
    {
      id: "cpp",
      name: "C++",
      icon: "C+",
      tagline: "高性能游戏与系统开发，在 C 之上加入面向对象。",
      intro:
        "C++ 在 C 的基础上加入了类、继承、模板等能力，性能仍接近 C，常用于游戏引擎、高频交易、桌面应用。它让「既要性能、又要抽象」成为可能。",
      meta: { 难度: "进阶", 场景: "游戏 / 性能敏感 / 桌面" },
      lessons: [
        {
          id: "cpp-1",
          title: "从 C 到 C++：面向对象与标准库",
          summary: "类、引用、vector 容器，感受现代 C++。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "C++ 能写 C 的代码，但更推荐用现代写法：用 <code.inline>vector</code.inline> 代替裸数组，用 <code.inline>std::cout</code.inline> 输出，用类组织代码。它兼顾了性能和开发效率。" },
            { type: "code", lang: "cpp", title: "Modern C++ 入门", code: '#include <iostream>\n#include <vector>\n#include <string>\n\nclass Student {\npublic:\n    // 构造函数\n    Student(std::string n, int a) : name(n), age(a) {}\n\n    void introduce() const {\n        std::cout << "我叫" << name << "，今年" << age << "岁\\n";\n    }\n\nprivate:\n    std::string name;\n    int age;\n};\n\nint main() {\n    Student s("小明", 20);\n    s.introduce();\n\n    // vector：动态数组容器\n    std::vector<int> nums = {1, 2, 3, 4, 5};\n    nums.push_back(6);\n    for (int n : nums) {\n        std::cout << n << " ";\n    }\n    std::cout << "\\n";\n    return 0;\n}' },
            { type: "keypoints", items: ["C++ = C + 面向对象 + 模板 + 标准库", "vector 是安全易用的动态数组", "类用 public/private 控制访问权限", "编译运行需编译器，此处仅讲解"] },
          ],
        },
      ],
    },

    /* ================= C# ================= */
    {
      id: "csharp",
      name: "C#",
      icon: "C#",
      tagline: "微软生态的主力，桌面到游戏的全面手。",
      intro:
        "C#（读作 C-Sharp）是微软推出的语言，语法优雅、与 Java 相似，深度集成 .NET 生态，从 Windows 桌面（WPF）、Web（ASP.NET）到 Unity 游戏开发，无处不在。",
      meta: { 难度: "入门", 场景: "Windows / Unity / Web" },
      lessons: [
        {
          id: "csharp-1",
          title: "C# 基础与 .NET 概念",
          summary: "类型、类、LINQ，用几句大白话认识 C#。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "C# 是强类型、面向对象语言，运行在 .NET 运行时上。它和 Java 非常像，学过一个能迅速迁移。它最大的亮点之一是 LINQ——用类似 SQL 的写法操作集合，非常惊艳。" },
            { type: "code", lang: "csharp", title: "C# Hello World", code: 'using System;\nusing System.Linq;\n\nclass Program {\n    static void Main() {\n        string name = "小明";\n        int age = 20;\n        Console.WriteLine($"我叫{name}，今年{age}岁");  // 字符串插值\n\n        // LINQ：声明式操作集合\n        var numbers = new int[] { 1, 2, 3, 4, 5, 6 };\n        var evens = numbers.Where(n => n % 2 == 0);\n        var doubled = numbers.Select(n => n * 2);\n        Console.WriteLine("偶数: " + string.Join(", ", evens));\n        Console.WriteLine("翻倍: " + string.Join(", ", doubled));\n    }\n}' },
            { type: "keypoints", items: ["C# 运行在 .NET，强类型面向对象", "$ 前缀字符串支持插值", "LINQ 用 Where/Select 声明式处理集合", "通常用 Visual Studio / Rider 开发"] },
          ],
        },
      ],
    },

    /* ================= Go ================= */
    {
      id: "go",
      name: "Go",
      icon: "Go",
      tagline: "极简并发大师，云原生时代的后端宠儿。",
      intro:
        "Go（Golang）由 Google 开发，语法极其简洁，内置「并发」支持（goroutine），编译出单个可执行文件，一次编译到处运行。Docker、Kubernetes 都用 Go 编写，是云原生的首选。",
      meta: { 难度: "入门", 场景: "后端 / 云原生 / DevOps 工具" },
      lessons: [
        {
          id: "go-1",
          title: "Go 的极简风格与并发",
          summary: "语法简洁、无类但更简单，goroutine 一把梭。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "Go 故意砍掉了大量语法糖：没有类（借 struct + 方法替代）、没有继承、没有异常（用返回值处理错误）。它追求简单、可读、易维护，也让编译飞快。" },
            { type: "code", lang: "go", title: "Go 基础", code: 'package main\n\nimport "fmt"\n\n// struct：结构化数据，类似其他语言的类\n// 变量类型写在变量名后面，这是 Go 的特色\ntype Student struct {\n    Name string\n    Age  int\n}\n\nfunc main() {\n    s := Student{Name: "小明", Age: 20}  // := 是简短声明\n    fmt.Printf("我叫%s，今年%d岁\\n", s.Name, s.Age)\n\n    // 切片（类似数组）\n    nums := []int{1, 2, 3, 4, 5}\n    sum := 0\n    for _, n := range nums {   // range 遍历\n        sum += n\n    }\n    fmt.Println("总和:", sum)\n}' },
            { type: "code", lang: "go", title: "goroutine 并发", code: 'package main\n\nimport ("fmt"; "sync"; "time")\n\nfunc work(id int, wg *sync.WaitGroup) {\n    defer wg.Done()\n    time.Sleep(100 * time.Millisecond)\n    fmt.Println("任务", id, "完成")\n}\n\nfunc main() {\n    var wg sync.WaitGroup\n    // go 关键字启动并发\n    for i := 1; i <= 5; i++ {\n        wg.Add(1)\n        go work(i, &wg)\n    }\n    wg.Wait()  // 等待所有完成\n    fmt.Println("所有任务完成")\n}' },
            { type: "keypoints", items: ["类型后置声明，:= 简短声明变量", "无类无继承，用 struct + 方法代替", "go 关键字一行启动并发 goroutine", "range 遍历、defer 延迟执行、wg 同步"] },
          ],
        },
      ],
    },

    /* ================= Rust ================= */
    {
      id: "rust",
      name: "Rust",
      icon: "Ru",
      tagline: "最受推崇的安全系统语言，无垃圾回收也内存安全。",
      intro:
        "Rust 近年在 TIOBE 与开发者调查中屡获「最受喜爱」头衔。它兼具 C 的性能，却通过「所有权」机制在没有垃圾回收的前提下保证内存安全，消灭了一大类 bug，适合写系统软件、工具链、WASM。",
      meta: { 难度: "困难", 场景: "系统 / 工具 / 区块链 / WASM" },
      lessons: [
        {
          id: "rust-1",
          title: "Rust 的所有权机制",
          summary: "用『借书与还书』比喻，讲透 Rust 最核心的概念。",
          difficulty: "困难",
          blocks: [
            { type: "p", text: "Rust 最与众不同的是「所有权」：每个值有且只有一个「拥有者」，当拥有者离开作用域，值就被自动释放。想临时给别人用，就「借用」（&），但同一时刻要么只有一个可变借用，要么多个不可变借用。这个编译期规则杜绝了悬垂指针和数据竞争。" },
            { type: "code", lang: "rust", title: "所有权与借用", code: 'fn main() {\n    let s1 = String::from("hello"); // s1 拥有这块堆内存\n    let s2 = s1;                     // 所有权移动给 s2\n    // println!("{s1}");              // 错误！s1 已被移动\n    println!("{s2}");                // 正常\n\n    let x = 10;\n    let y = x;  // 拷贝，因为整数在栈上\n    println!("{x} {y}");\n\n    // 借用：不转移所有权，只临时借用\n    let data = String::from("rust");\n    print_len(&data);  // &data 借用\n    println!("仍可使用: {data}");\n}\n\nfn print_len(s: &String) {\n    println!("长度: {}", s.len());\n}' },
            { type: "warn", title: "借用规则", text: "不能再对已被移动的变量使用；同一作用域内，一个值不能被「可变借用」和「不可变借用」同时使用。理解这些约束是 Rust 的入门关键，也是它强大的原因。" },
            { type: "keypoints", items: ["所有权：每个值只有一个拥有者", "赋值默认是移动而非拷贝（栈上类型除外）", "& 引用/借用不转移所有权", "借用规则保证线程安全无数据竞争"] },
          ],
        },
      ],
    },

    /* ================= SQL ================= */
    {
      id: "sql",
      name: "SQL",
      icon: "SQL",
      tagline: "和数据库对话的语言，所有数据应用的地基。",
      intro:
        "SQL（结构化查询语言）用来对关系型数据库做增删改查。它虽然名字叫「查询语言」，但掌握了它，几乎所有 CRUD 应用的后端都不成问题。我们用自然语言式的讲解带你入门。",
      meta: { 难度: "入门", 场景: "后端 / 数据分析 / 任何涉及存储的系统" },
      lessons: [
        {
          id: "sql-1",
          title: "SQL 的增删改查",
          summary: "SELECT、INSERT、UPDATE、DELETE 四大金刚，一个都不少。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "数据库像一张张表格，行是记录，列是字段。SQL 重点关注四类操作：增（INSERT）、删（DELETE）、改（UPDATE）、查（SELECT）。查是重中之重，能写出复杂查询是硬核能力。" },
            { type: "code", lang: "sql", title: "建表与插入", code: '-- 创建学生表\nCREATE TABLE students (\n    id   INTEGER PRIMARY KEY,\n    name TEXT NOT NULL,\n    age  INTEGER,\n    city TEXT\n);\n\n-- 插入数据\nINSERT INTO students (name, age, city) VALUES\n  ("小明", 20, "北京"),\n  ("小红", 19, "上海"),\n  ("小刚", 21, "广州");' },
            { type: "code", lang: "sql", title: "查询：SELECT 的核心", code: '-- 查询所有列\nSELECT * FROM students;\n\n-- 只查特定列，并给别名\nSELECT name AS 姓名, age AS 年龄 FROM students;\n\n-- 条件过滤\nSELECT * FROM students WHERE age > 20;\n\n-- 排序\nSELECT * FROM students ORDER BY age DESC;\n\n-- 聚合统计\nSELECT city, COUNT(*) AS 人数, AVG(age) AS 平均年龄\nFROM students\nGROUP BY city;\n\n-- 连接两表（示例结构）\n-- SELECT s.name, c.score FROM students s\n-- JOIN scores c ON s.id = c.student_id;' },
            { type: "info", title: "SQL 大小写不敏感", text: "SQL 关键字大写小写都可以，习惯上关键字大写、表名列名小写，方便阅读。字符串值用单引号。" },
            { type: "keypoints", items: ["SELECT 查、INSERT 增、UPDATE 改、DELETE 删", "WHERE 过滤出符合条件的行", "ORDER BY 排序，GROUP BY 分组聚合", "JOIN 把多张表关联起来查询"] },
          ],
        },
      ],
    },

    /* ================= Shell ================= */
    {
      id: "shell",
      name: "Shell / Bash",
      icon: "sh",
      tagline: "指挥操作系统的手，自动化一切的胶水语言。",
      intro:
        "Shell 是你敲进终端、被操作系统执行的命令语言。它能组合各种命令自动完成批量任务。几乎所有后端和系统工程师每天都在用它。",
      meta: { 难度: "入门", 场景: "运维 / 开发 / 自动化" },
      lessons: [
        {
          id: "shell-1",
          title: "Bash 命令与脚本",
          summary: "文件操作、管道、变量与判断，会用这些就走通日常。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "终端里的每行命令都是「命令 + 参数」。掌握了文件导航、查看、管道（把前一个命令的输出喂给下一个命令），就能高效完成大量操作。写进 .sh 文件就成了可重复执行的脚本。" },
            { type: "code", lang: "bash", title: "最常用的命令集", code: 'pwd               # 显示当前目录\necho "你好"        # 打印\n\n# 文件与目录\nls                 # 列出文件\nls -la             # 详细列表（含隐藏文件）\ncd /tmp            # 切换目录\nmkdir myproj       # 新建目录\nrm file.txt        # 删除文件\ncp a.txt b.txt     # 复制\nmv a.txt b.txt     # 移动/重命名\ntouch newfile      # 新建空文件\n\n# 查看文件\ncat file.txt       # 打印整个文件\nless file.txt      # 分页查看\nhead -5 file.txt   # 前5行\ntail -f log.txt    # 实时跟踪（看日志神器）' },
            { type: "code", lang: "bash", title: "管道、变量与脚本判断", code: '#!/bin/bash\n# 管道：| 把左边输出交给右边处理\nps aux | grep nginx      # 找 nginx 进程\ncat access.log | wc -l   # 统计行数\n\n# 环境变量\necho $HOME\nNAME="小明"\necho "你好，$NAME"\n\n# 条件判断\nif [ -f "$1" ]; then\n    echo "$1 文件存在" \nelse\n    echo "$1 不存在"\nfi\n\n# 循环遍历当前目录所有 txt\nfor f in *.txt; do\n    echo "处理 $f"\ndone' },
            { type: "warn", title: "注意空格", text: "Shell 对空格敏感，比如 <code.inline>[ 条件 ]</code.inline> 的方括号两侧必须有空格，<code.inline>变量=值</code.inline> 等号两侧不能有空格。" },
            { type: "keypoints", items: ["shell 命令 = 命令 + 参数", "管道 | 串联命令输出", "$变量 引用变量，echo 打印", "if [ 条件 ] 判断，循环 for 处理批量"] },
          ],
        },
      ],
    },

    /* ================= TypeScript ================= */
    {
      id: "typescript",
      name: "TypeScript",
      icon: "TS",
      tagline: "给 JavaScript 加上类型，大型前端项目的工业标准。",
      intro:
        "TypeScript 是 JavaScript 的超集：在 JS 基础上加上了「类型系统」，让错误在编译期就暴露，代码更可维护。React/Vue 大型项目的标配。它兼容所有 JS 语法，学会 JS 即可上手。",
      meta: { 难度: "进阶", 场景: "前端 / 全栈" },
      lessons: [
        {
          id: "ts-1",
          title: "类型系统与接口",
          summary: "给代码穿上『紧身衣』，把错误扼杀在编译期。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "没有类型时，函数接错参数要等运行才报错；有了类型，编辑器里立刻标红。TypeScript 帮你「在写的时候就发现 bug」——这是它最大的价值。它最终会编译成纯 JavaScript。" },
            { type: "code", lang: "javascript", title: "TypeScript 类语法（概念演示，可运行）", code: '// TypeScript 代码需编译为 JS 后运行，这里以 JS 演示概念\n// 原理：为参数和返回值标注类型\nconst scale = (n) => n * 2\n\nfunction trueTsVersion() {\n  // 真正的 TS：\n  // function add(a: number, b: number): number {\n  //   return a + b\n  // }\n  // interface Person { name: string; age: number }\n  return "TS 在编译期静态检查类型" \n}\nconsole.log(trueTsVersion())' },
            { type: "info", title: "接口 interface", text: "TS 用 <code.inline>interface</code.inline> 定义对象的「形状」，实现它时属性必须齐全、类型必须匹配，非常利于团队协作。" },
            { type: "keypoints", items: ["TS = JS + 类型系统", "让错误在编译期暴露", "interface 定义对象形状", "最终编译成 JS 执行"] },
          ],
        },
      ],
    },

    /* ================= Ruby ================= */
    {
      id: "ruby",
      name: "Ruby",
      icon: "Ru",
      tagline: "极致优雅的脚本语言，Rails 缔造了 Web 开发黄金时代。",
      intro:
        "Ruby 的设计哲学是「让程序员快乐」，语法非常自然。配合 Rails 框架，曾以极快速度搭建出无数著名网站（GitHub、Airbnb 早期都用它）。",
      meta: { 难度: "入门", 场景: "Web / 自动化" },
      lessons: [
        {
          id: "ruby-1",
          title: "Ruby 的优雅语法",
          summary: "近乎英语的写法与块（block）的魔力。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "Ruby 力求让代码读起来像英语：<code.inline>5.times { puts \"hi\" }</code.inline>。它的一切都是对象，连数字也是。它的「块」（block）提供了一种别具一格的迭代写法。" },
            { type: "code", lang: "ruby", title: "Ruby 基础", code: '# 注释用 #\nname = "小明"          # 变量无需声明类型\nputs "你好，#{name}"     # 字符串插值\n\n# 块与迭代\n5.times do |i|\n  puts "第 #{i} 次" \nend\n\nnums = [1,2,3,4,5]\n# each 遍历 + do..end 块\nevens = nums.select { |n| n.even? }\nputs "偶数: #{evens.join(", ")}"\n\n# 方法定义\ndef greet(person)\n  "辛苦啦，#{person}！"\nend\nputs greet("小红")\n\n# 一切皆对象\nputs 0.5.class.center(20) rescue nil' },
            { type: "keypoints", items: ["语法接近英语，一切皆对象", "#{var} 进行字符串插值", "块 block 与 .each/.select 是精髓", "方法用 def..end 定义"] },
          ],
        },
      ],
    },

    /* ================= PHP ================= */
    {
      id: "php",
      name: "PHP",
      icon: "Ph",
      tagline: "Web 后端老将，WordPress 世界的绝对主力。",
      intro:
        "PHP 专为 Web 而生，服务端渲染生成网页。全世界近八成的网站由它驱动（尤以 WordPress 为代表）。特别适合快速搭建内容型网站。",
      meta: { 难度: "入门", 场景: "Web 后端" },
      lessons: [
        {
          id: "php-1",
          title: "PHP 与 Web 请求处理",
          summary: "$ 变量、echo 输出、与表单交互。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "PHP 代码通常嵌在 HTML 里，用 <code.inline><?php ... ?></code.inline> 包裹。它在服务器端运行，生成纯 HTML 返回给浏览器。变量一律以 <code.inline>$</code.inline> 开头。" },
            { type: "code", lang: "php", title: "PHP 基础", code: '<?php\n// 变量以 $ 开头\n$name = "小明";\n$age = 20;\necho "你好，{$name}！";\necho "<br>";\n\n// 关联数组（类似字典）\n$user = [\n    "name" => "小明",\n    "role" => "admin"\n];\necho $user["name"] . " 的角色是 " . $user["role"];\necho "<br>";\n\n// 遍历\nforeach ($user as $key => $val) {\n    echo "$key: $val<br>";\n}\n\n// 函数\nfunction add($a, $b) {\n    return $a + $b;\n}\necho "3+4 = " . add(3, 4);\n?>\n<p>这段是纯 HTML</p>' },
            { type: "keypoints", items: ["PHP 嵌入 HTML，用 <?php ?> 包裹", "$ 开头的变量，. 用于字符串连接", "echo 输出，foreach 遍历数组", "在服务器端运行，返回 HTML"] },
          ],
        },
      ],
    },

    /* ================= Swift / Kotlin ================= */
    {
      id: "mobile",
      name: "Swift & Kotlin",
      icon: "Mo",
      tagline: "iOS 与 Android 的官方语言，掌上应用的根基。",
      intro:
        "Swift 是苹果官方语言（iOS/macOS），Kotlin 是谷歌钦定的 Android 语言。两者都现代、安全、简洁，且能与本方向发展。这里用对照方式快速认识它们。",
      meta: { 难度: "入门", 场景: "移动端" },
      lessons: [
        {
          id: "mobile-1",
          title: "Swift 与 Kotlin 双雄",
          summary: "两大移动语言并排学习，一组示例看差异。",
          difficulty: "入门",
          blocks: [
            { type: "code", lang: "swift", title: "Swift（iOS）示例", code: 'import Foundation\n\n// 变量 let 常量 var 变量\nlet name = "小明"\nvar age = 20\n\nprint("你好，\\(name)，今年\\(age)岁")  // 插值\\( )\n\n// 数组与闭包\nlet nums = [1, 2, 3, 4, 5]\nlet doubled = nums.map { $0 * 2 }\nprint(doubled)\n\nstruct Student {\n    var name: String\n    var score: Int\n}\n\nlet s = Student(name: "小红", score: 95)\nprint("\\(s.name) 得分 \\(s.score)")' },
            { type: "code", lang: "kotlin", title: "Kotlin（Android）示例", code: '// 变量 val 只读 var 可写\nval name = "小明"\nvar age = 20\n\nprintln("你好，$name，今年${age}岁")  // 字符串模板\n\n// 集合与 Lambda\nval nums = listOf(1, 2, 3, 4, 5)\nval doubled = nums.map { it * 2 }  // it 是默认参数名\nprintln(doubled)\n\n// 数据类：自动生成 toString/equals\ndata class Student(val name: String, val score: Int)\n\nval s = Student("小红", 95)\nprintln(s)' },
            { type: "info", title: "两者惊人相似", text: "两者都基于 JVM/LLVM、都支持数据类、Lambda、空安全。会一个，另一个很快能上道。移动开发通常还需要掌握各自的 UI 框架（SwiftUI / Jetpack Compose）。" },
            { type: "keypoints", items: ["Swift 属苹果生态，Kotlin 属 Android 生态", "两者都安全、现代、支持空安全", "Swift 用 \\( ) 插值，Kotlin 用 ${} 插值", "都支持数据类与函数式集合操作"] },
          ],
        },
      ],
    },

    /* ================= Node.js（脚本运行环境） ================= */
    {
      id: "node",
      name: "Node.js",
      icon: "No",
      tagline: "让 JavaScript 跑在服务器，一次学习全栈通吃。",
      intro:
        "Node.js 是浏览器外的 JS 运行时，基于 V8 引擎。它让 JS 从『只能放网页里』变成『能写后端、写工具、写爬虫』的全能选手。同时它也是本编辑器运行 JS 的环境。",
      meta: { 难度: "入门", 场景: "后端 / 工具 / 全栈" },
      lessons: [
        {
          id: "node-1",
          title: "Node.js 与 npm",
          summary: "理解运行时、模块与包管理器 npm。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "Node.js 提供的核心能力：文件读写、HTTP 服务、系统操作——这些是浏览器里没有的。它还自带 <code.inline>npm</code.inline> 包管理器，把全世界的开源组件（包）安装到你的项目里，一行命令就行。" },
            { type: "code", lang: "javascript", title: "Node 模块与文件操作（概念）", code: '// 在 Node 中，用 require 引入模块（浏览器里没有）\n// const fs = require("fs");\n// const http = require("http");\n\n// 概念示例：每个文件是一个模块，export 导出\nfunction greet(name) {\n  return `Hello ${name}`\n}\n\nmodule.exports = { greet }  // 供其他文件 require\n\n// 简单 HTTP 服务器（真实 Node 代码）\nconst http = require("http")\nconst server = http.createServer((req, res) => {\n  res.end("Hello from Node")\n})\nserver.listen(3000, () => console.log("服务器在 3000 端口"))\n\n// 本编辑器无法访问 Node 的 fs/http，以上为概念演示\nconsole.log(greet("world"))' },
            { type: "warn", title: "npm 常用命令", text: "<code.inline>npm init -y</code.inline> 初始化项目，<code.inline>npm install 包名</code.inline> 安装依赖，<code.inline>npm run 脚本</code.inline> 运行 package.json 里定义的脚本。" },
            { type: "keypoints", items: ["Node.js = 服务器上的 JavaScript 运行时", "require/module.exports 实现模块化", "npm 是 Node 的包管理器", "可写 HTTP 服务、文件系统、命令行工具"] },
          ],
        },
      ],
    },

    /* ================= 其他语言一览 ================= */
    {
      id: "others",
      name: "更多语言速览",
      icon: "+",
      tagline: "R、Lua、Dart、Haskell、R… 一段话认识一种。",
      intro:
        "除了上述主流语言，计算机世界还有众多针对特定领域的语言。这里用最简短的篇幅帮助你建立『词汇表』式的认识，需要时再深入。",
      meta: { 难度: "了解", 场景: "视野拓展" },
      lessons: [
        {
          id: "others-1",
          title: "三十种语言的『一句话』认知清单",
          summary: "遇到什么语言都不慌，看懂它擅长什么。",
          difficulty: "了解",
          blocks: [
            { type: "p", text: "编程语言各有专长。快速建立一张心理地图，你就能在面对陌生语言时迅速判断它是不是你的菜。真正的学习入口是语法 + 你的需求场景。" },
            { type: "code", lang: "text", title: "语言速查表", code: 'R          : 统计与数据分析，学术统计首选\nLua       : 极轻量脚本，游戏配置（魔兽、LÖVE）\nDart      : 配合 Flutter 做跨平台移动/桌面\nScala     : 兼得面向对象与函数式，Spark 大数据\nHaskell   : 纯函数式语言，学术与严谨思维的训练场\nKotlin    : Android 官方语言，也支持多端\nSwift     : iOS/macOS 官方语言, 现代而安全\nDart      : Flutter 的核心语言\nMATLAB    : 数学计算与科研仿真\nR          : 统计与数据可视化\nGroovy    : JVM 平台脚本，Grails 框架\nPerl      : 文本处理老将，正则之王\nLisp      : 最古老系别(1958)，函数式鼻祖，Emacs\nLua       : 嵌入脚本，游戏行业常用\nJulia     : 高性能科学计算, 速度接近 C\nCOBOL     : 银行/保险核心系统老古董\nFortran   : 数值计算元老，超算科学计算\nAssembly  : 最底层语言, 直接对应机器指令\nObjective-C: 苹果旧时代语言(Kotlin 前身之一)\nVisual Basic: 微软速成开发语言\nPowerShell: Windows 系统自动化脚本\nSolidity  : 以太坊智能合约语言\nVerilog   : 硬件描述语言(数字电路)\nRust      : 安全系统语言\nZig       : 替代 C 的新系统语言' },
            { type: "tip", title: "怎么选语言", text: "别被语言数量吓到。核心思想（变量、分支、循环、函数、对象）是通用的，掌握两三种后，学新语言只是换换语法。『先用熟悉的语言把问题解决』远比『追求噱头语言』重要。" },
            { type: "keypoints", items: ["语法不同但编程思想相通", "根据应用场景选语言更高效", "新手建议从 Python / JS 入门", "TIOBE 指数可看语言热度趋势"] },
          ],
        },
      ],
    },

    /* ================= Dart ================= */
    {
      id: "dart",
      name: "Dart",
      icon: "Da",
      tagline: "Flutter 的母语，一套代码多端运行。",
      intro:
        "Dart 由 Google 开发，是跨平台 UI 框架 Flutter 的语言。它语法现代、上手轻松，能同时编译出 iOS、Android、Web、桌面应用。",
      meta: { 难度: "入门", 场景: "跨平台移动" },
      lessons: [
        {
          id: "dart-1",
          title: "Dart 基础与可选类型",
          summary: "var、final、类与混入——一次看清 Flutter 语言。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "Dart 语法吸收了 Java（强类型）与 JS（简洁）的优点：既可用 <code.inline>var</code.inline> 让类型自动推断，也可显式标注类型。<code.inline>final</code.inline> 表示运行时不可变，<code.inline>const</code.inline> 表示编译期常量。" },
            { type: "code", lang: "dart", title: "Dart 基础", code: 'void main() {\n  // 类型可推断或显式\n  var name = "小明";\n  int age = 20;\n  final city = "北京";   // 运行期不可变\n  // city = "上海";      // 错误\n\n  print("我叫 $name，今年 $age 岁，住在 $city");  // 字符串插值\n\n  // 列表与映射\n  var nums = [1, 2, 3, 4, 5];\n  var doubled = nums.map((n) => n * 2).toList();\n  print("翻倍: $doubled");\n\n  // 可选参数\n  String greet(String who, {String msg = "你好"}) => "$msg，$who！";\n  print(greet("小红"));\n  print(greet("小刚", msg: "早"));\n\n  // 面向对象\n  var s = Student("小李", 95);\n  print("${s.name} 得分 ${s.score}");\n}\n\nclass Student {\n  String name;\n  int score;\n  Student(this.name, this.score);  // 构造参数直接赋值\n}' },
            { type: "keypoints", items: ["var 自动推断 / final 不可变", "$var 与 ${expr} 字符串插值", "map().toList() 做映射", "Flutter 基于此语言构建 UI"] },
          ],
        },
      ],
    },

    /* ================= Lua ================= */
    {
      id: "lua",
      name: "Lua",
      icon: "Lu",
      tagline: "世界上最轻量的脚本语言，游戏与嵌入之王。",
      intro:
        "Lua 只有不到 30KB 的解释器，虚拟机极小，被大量嵌入到游戏引擎（用 Coroutine 写逻辑）、Redis（写 Lua 脚本）、Nginx（OpenResty）。它只有一种通用数据结构：table。",
      meta: { 难度: "入门", 场景: "游戏/嵌入脚本" },
      lessons: [
        {
          id: "lua-1",
          title: "Lua 与万能 table",
          summary: "只有 table 一种结构，却能表达数组+字典。",
          difficulty: "入门",
          blocks: [
            { type: "code", lang: "lua", title: "Lua 基础", code: '-- 注释用 --\n-- 变量默认是全局的! 用 local 才是局部\nlocal name = "小明"\nlocal age = 20\nprint("你好，" .. name .. "，今年" .. age .. "岁")  -- .. 拼接\n\n-- table 是唯一的数据结构，可当数组=表=对象\nlocal fruits = {"苹果", "香蕉", "橙子"}   -- 数组(从1开始!)\nprint("第二个水果:", fruits[2])           -- 索引从 1 开始\n\n-- table 当字典\nlocal person = { name = "小红", score = 95 }\nprint(person.name, person.score)\n\n-- 遍历\nfor i, v in ipairs(fruits) do   -- ipairs 数组, pairs 字典\n  print(i, v)\nend\n\n-- 函数(一等公民可传递)\nlocal function square(n)\n  return n * n\nend\nprint(table.unpack and "Lua5.3 以上" or "Lua")\nprint("3 的平方:", square(3))\n\n-- table 当对象 + 冒号语法(自动传 self)\nlocal dog = { name = "旺财" }\nfunction dog.bark(self)\n  return self.name .. " 汪汪叫"\nend\nfunction dog:run() return self.name .. " 在跑" end\nprint(dog.bark(dog))\nprint(dog:run())' },
            { type: "keypoints", items: ["local 声明局部，默认是全局", "table 是唯一结构，索引从 1 开始", ".. 拼接、ipairs/pairs 遍历", "冒号语法自传 self，适合嵌入脚本"] },
          ],
        },
      ],
    },

    /* ================= R ================= */
    {
      id: "r-lang",
      name: "R",
      icon: "R",
      tagline: "统计学家的第一语言，数据可视化利器。",
      intro:
        "R 是统计与数据分析的专业语言，生态里 ggplot2（画图）、dplyr（数据处理）在学术界与科研界是标配。它一切皆向量。",
      meta: { 难度: "入门", 场景: "统计/数据科学" },
      lessons: [
        {
          id: "r-1",
          title: "R 的向量化思维",
          summary: "别写循环，用向量运算——这是 R 的性能哲学。",
          difficulty: "入门",
          blocks: [
            { type: "code", lang: "r", title: "R 基础", code: '# 注释用 #，赋值用 <- \nname <- "小明"\nage <- 20\nprint(paste("你好", name, "今年", age, "岁"))  # paste 拼接\n\n# 向量:c() 创建, 一切皆向量\nscores <- c(88, 92, 76, 85, 90)\nprint(scores)\nprint(paste("平均分:", mean(scores)))\nprint(paste("最高/最低:", max(scores), "/", min(scores)))\n\n# 向量化运算: 不用循环!\nscores2 <- scores * 2        # 每个元素都翻倍\nprint(scores2)\nabove85 <- scores[scores > 85]  # 条件索引\nprint(paste("高于85的:", paste(above85, collapse=", ")))\n\n# 数据框(类似表格/DataFrame)\ndf <- data.frame(\n  name = c("小明", "小红", "小刚"),\n  score = c(88, 95, 76))\nprint(df)\nprint(df$score)   # $ 访问列\n\n# 函数\nsquare <- function(x) x * x\nprint(square(9))' },
            { type: "keypoints", items: ["赋值用 <-，一切皆向量", "用向量化运算代替循环", "c() 建向量、data.frame() 建表格", "ggplot2/dplyr 才是 R 的生态核心"] },
          ],
        },
      ],
    },

    /* ================= Scala ================= */
    {
      id: "scala",
      name: "Scala",
      icon: "Sc",
      tagline: "面向对象+函数式双修，JVM 大数据圈的宠儿。",
      intro:
        "Scala 跑在 JVM 上，同时支持面向对象和函数式编程。它是大数据框架 Spark、Kafka 的实现语言，想深入大数据源码，Scala 是绕不开的。",
      meta: { 难度: "进阶", 场景: "大数据/后端" },
      lessons: [
        {
          id: "scala-1",
          title: "Scala 的函数式与对象式",
          summary: "val/var、集合算子、case class——认识 JVM 上的多面手。",
          difficulty: "进阶",
          blocks: [
            { type: "code", lang: "scala", title: "Scala 基础", code: 'object Main extends App {\n  // val 不可变, var 可变\n  val name = "小明"\n  var age = 20\n  println(s"你好，$name，今年 $age 岁")   // s 插值\n\n  // 集合算子(函数式)\n  val nums = List(1,2,3,4,5)\n  val doubled = nums.map(_ * 2)        // 下划线是占位符\n  val evens   = nums.filter(_ % 2 == 0)\n  val sum     = nums.sum\n  println(s"翻倍: $doubled")\n  println(s"偶数: $evens, 总和: $sum")\n\n  // case class: 自动生成 equals/toString/hashCode\n  case class Student(name: String, score: Int)\n  val s1 = Student("小红", 95)\n  println(s1)\n\n  // 模式匹配(强大的 switch)\n  def grade(score: Int) = score match {\n    case n if n >= 90 => "优"\n    case n if n >= 60 => "及格"\n    case _ => "不及格"\n  }\n  println("88 分 -> " + grade(88))\n}' },
            { type: "keypoints", items: ["JVM 语言，兼收并蓄 OOP+FP", "val/var，s 插值，case class", "map/filter 函数式，下划线占位", "模式匹配 match 强于 switch"] },
          ],
        },
      ],
    },

    /* ================= Julia ================= */
    {
      id: "julia",
      name: "Julia",
      icon: "Ju",
      tagline: "动态语言的爽快 + C 的速度，科学计算新星。",
      intro:
        "Julia 主打『写得像 Python，跑得像 C』，通过多重派发与即时编译（JIT）在数值计算上表现出色，正在科学计算、机器学习领域崛起。",
      meta: { 难度: "进阶", 场景: "科学计算/AI" },
      lessons: [
        {
          id: "julia-1",
          title: "Julia 基础与多重派发",
          summary: "类型标注、广播运算——看Julia如何兼得性能与易用。",
          difficulty: "进阶",
          blocks: [
            { type: "code", lang: "julia", title: "Julia 基础", code: '# 注释用 #\nname = "小明"\nprintln("你好，$name")   # 字符串插值 $var\n\n# 数组与广播(不用循环)\nnums = [1, 2, 3, 4, 5]\ndoubled = nums .* 2      # 点运算=广播\nprintln("翻倍: ", doubled)\n\nscores = [88, 92, 76, 85, 90]\nprintln("平均分: ", sum(scores) / length(scores))\n\n# 多重派发: 同名函数按参数类型选实现\nf(x::Int) = "整数"        # :: 类型标注\nf(x::Float64) = "浮点数"\nprintln(f(3))            # 整数\nprintln(f(3.0))          # 浮点数\n\n# 构造性与循环\ntotal = 0\nfor i in 1:5\n  global total += i\nend\nprintln("1到5之和: ", total)\n\n# 函数定义 + 返回值\nsquare(n) = n * n\nprintln("9 的平方: ", square(9))\n\n# 性能哲学\nprintln("Julia: JIT编译, 动态写法+静态性能")' },
            { type: "keypoints", items: ["数组 .* 广播避免循环", ":: 类型标注, 多重派发选实现", "$var 插值，1:5 区间", "JIT 编译兼得易用与性能"] },
          ],
        },
      ],
    },

    /* ================= 函数式与应用脚本速览 ================= */
    {
      id: "func-langs",
      name: "函数式与应用速览",
      icon: "⇒",
      tagline: "Haskell、Elixir、Groovy、MATLAB、Lisp 各来一段。",
      intro:
        "函数式语言强调『纯函数、不可变、表达式』，思想深刻值得了解。这里对 Haskell、Lisp、Groovy 等做入门速览。",
      meta: { 难度: "进阶", 场景: "视野" },
      lessons: [
        {
          id: "func-1",
          title: "函数式语言思想速览",
          summary: "Haskell 纯函数、Lisp 一统数据结构、Groovy 脚本。",
          difficulty: "进阶",
          blocks: [
            { type: "code", lang: "haskell", title: "Haskell（纯函数式）", code: '-- 纯函数: 同输入必同输出, 无副作用, 不改变状态\n-- 惰性求值, 类型系统异常严谨\n\n-- 定义函数\nsquare :: Int -> Int     -- 类型签名: Int→Int\nsquare x = x * x\n\nfib :: Int -> Int\nfib 0 = 0\nfib 1 = 1\nfib n = fib (n-1) + fib (n-2)\n\n-- 列表推导\n-- doubles = [x*2 | x <- [1..5]]\n-- 让抽象: map (.map lambda), filter, fold\nmapSquare :: [Int] -> [Int]\nmapSquare xs = [x*x | x <- xs]\n\n-- 概念说明: 无赋值、无循环, 一切是表达式求值\n-- $ ghci 里可交互运行; 此处仅讲解' },
            { type: "code", lang: "lisp", title: "Lisp 家族（前缀表达式）", code: '; 注释用 ;\n; 一切皆「列表」, 函数调用是前缀写法\n(+ 1 2 3)   ; => 6  (加号在前)\n(defun square (x) (* x x))\n(square 9)  ; => 81\n\n; 定义一个列表\n(defvar fruits (quote (apple banana orange)))\n; 递归是常态\n(defun length-of (lst)\n  (if (null lst) 0\n    (+ 1 (length-of (cdr lst)))))\n; 宏(macro)元编程是其杀手锏\n(print "Lisp: 代码即数据(homoiconic)")' },
            { type: "table", head: ["语言", "定位", "给谁"], rows: [["Haskell", "纯函数式", "想严谨训练思维"], ["Clojure/CommonLisp", "Lisp 系", "想体验元编程"], ["Elixir", "Erlang VM", "高并发分布式"], ["Groovy", "JVM 脚本", "Gradle/DSL"], ["MATLAB", "数值仿真", "科研/控制"]] },
            { type: "keypoints", items: ["函数式强调纯函数与不可变", "Lisp: 代码即数据，前缀表达式", "Haskell 类型系统极严谨, 陡峭但深刻", "函数式思想已渗透主流(如 reduce/map)"] },
          ],
        },
      ],
    },
  ],
};