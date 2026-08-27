/* ============================================================
   计算机知识库 · 数据：计算机基础（核心理论）
   ============================================================ */
window.CS_FUNDAMENTALS = {
  id: "cs-fundamentals",
  name: "计算机基础",
  icon: "基",
  description:
    "无论你会多少种语言，这些不随语言变化的核心知识才是计算机专业的真正内功：数据结构、算法、网络、操作系统、数据库与组成原理。每个概念都用生活化的语言讲透。",
  children: [
    /* ================= 数据结构 ================= */
    {
      id: "ds",
      name: "数据结构",
      icon: "据",
      tagline: "数据在内存里的『摆法』——不同摆法，效率天差地别。",
      intro:
        "数据结构研究『数据怎么组织、怎么存放』。选对结构，查找、插入可能从秒级变毫秒级。它和算法是程序的两大支柱。",
      meta: { 难度: "入门", 面试: "必考" },
      lessons: [
        {
          id: "ds-array-list",
          title: "数组与链表：连续 vs 手牵手",
          summary: "为什么有人查得快，有人插得快？用排队比喻讲清两大基础结构。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "数组就像电影院座位：所有人挨着坐，每一排有固定编号。知道座号就能『瞬间』找到人（O(1) 随机访问），但中间插个人很难——得让后面的人全部往后退一位（O(n)）。" },
            { type: "p", text: "链表像玩『萝卜蹲』游戏：每个人只记住『下一个人是谁』（指针）。想插进来很容易，只需改一下前后两个人的指向（O(1)），但要找第 n 个人，必须从队头一个个数过去（O(n) 查找）。" },
            { type: "code", lang: "javascript", title: "数组 vs 链表（结构示意）", code: '// 数组：内存连续，按下标随机访问快\nconst arr = ["A", "B", "C", "D", "E"];\nconsole.log("直接访问 arr[2] =", arr[2]);  // O(1)\n\n// 插入到中间需要移动元素\narr.splice(2, 0, "X");\nconsole.log("插入后:", arr);  // 移动了后面的元素\n\n// 链表：每个节点保存 值 + 指向下一个的指针\nclass ListNode {\n  constructor(val) { this.val = val; this.next = null; }\n}\nlet a = new ListNode("A");\nlet b = new ListNode("B");\na.next = b;\n// 想在 a、b 之间插入 X：\nlet x = new ListNode("X");\nx.next = b;\na.next = x;\n// 只需改两根指针，无需移动其余节点\nconsole.log("链表: A -> X -> B");' },
            { type: "table", head: ["结构", "随机访问", "中间插入", "特点"], rows: [["数组", "O(1) 快", "O(n) 慢", "内存连续，需预分配"], ["链表", "O(n) 慢", "O(1) 快", "内存离散，动态增减"]] },
            { type: "keypoints", items: ["数组连续存储，按下标 O(1) 访问", "链表靠指针串联，插入删除 O(1)", "各有千秋，场景决定选择", "链表还分单向 / 双向 / 循环"] },
          ],
        },
        {
          id: "ds-stack-queue",
          title: "栈与队列：后进先出与先进先出",
          summary: "栈像一叠盘子，队列像排队买饭。生活中无处不在的结构。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "栈（Stack）遵循「后进先出 LIFO」：像一叠盘子，后放的先取。浏览器返回按钮、函数调用、撤销操作（Ctrl+Z），底层都是栈。" },
            { type: "p", text: "队列（Queue）遵循「先进先出 FIFO」：像排队买饭，先来的先服务。任务调度、打印机队列、消息队列，都是队列的用武之地。" },
            { type: "code", lang: "javascript", title: "用 JS 数组模拟栈与队列", code: '// 栈：push 入栈，pop 出栈（后进先出）\nconst stack = [];\nstack.push("页面1");\nstack.push("页面2");\nstack.push("页面3");\nconsole.log("栈顶:", stack[stack.length-1]);\nconsole.log("点击返回:", stack.pop());  // 取出页面3\nconsole.log("此时栈:", stack);\n\n// 队列：push 入队，shift 出队（先进先出）\nconst queue = [];\nqueue.push("顾客A");\nqueue.push("顾客B");\nqueue.push("顾客C");\nconsole.log("开始服务:", queue.shift());  // 先服务A\nconsole.log("队列剩余:", queue);' },
            { type: "info", title: "进阶玩法", text: "在算法里，栈用于深度优先搜索（DFS）、表达式求值、括号匹配；队列用于广度优先搜索（BFS）。这是后文「算法」分类的重点。" },
            { type: "keypoints", items: ["栈：后进先出 LIFO，push/pop", "队列：先进先出 FIFO，入队/出队", "栈：浏览器返回、撤销、函数调用", "队列：任务调度、消息队列、BFS"] },
          ],
        },
        {
          id: "ds-hashmap",
          title: "哈希表：O(1) 查找的秘密",
          summary: "一本『按名字找座位』的花名册，快得不可思议。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "哈希表（Hash Map，在 Python 里叫字典、JS 里叫对象）为什么查找几乎是瞬时的？因为它在存入数据时，用哈希函数算出该对象的『门牌号』，查找时再用同样函数算出门牌号直接去取——不需要挨个对比。" },
            { type: "code", lang: "javascript", title: "哈希表用法", code: '// 哈希表：键 => 值 的映射，平均 O(1) 访问\nconst scores = {};\nscores["小明"] = 95;\nscores["小红"] = 88;\nscores["小刚"] = 76;\n\nconsole.log("小明得分:", scores["小明"]);  // 直接查\nconsole.log("是否存在小王:", "小王" in scores);\n\n// 常用操作：统计数组元素出现次数\nconst nums = [1, 3, 2, 3, 1, 1, 3];\nconst count = {};\nfor (const n of nums) {\n  count[n] = (count[n] || 0) + 1;\n}\nconsole.log("每个数字出现次数:", count);' },
            { type: "warn", title: "哈希冲突", text: "两个不同键可能算出相同门牌号，这叫冲突。常见解法是『链地址法』——门牌号下挂一个链表。正因为冲突，哈希表是『平均』 O(1)，最坏情况会退化。" },
            { type: "keypoints", items: ["哈希函数把键映射成存储位置", "键值对映射，平均 O(1) 查找", "冲突用链地址/开放寻址解决", "适合『快速按名查找』场景"] },
          ],
        },
        {
          id: "ds-heap",
          title: "堆与优先队列",
          summary: "一个能快速『取最值』的结构，用『插队出队』的直觉理解。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "堆（Heap）是一种特殊的完全二叉树：最大堆保证『根是全局最大』，最小堆保证根全局最小。它不是为了排序，而是为了『快速找出最大值/最小值并取出』，常用于任务调度、Top-K、Dijkstra 最短路。" },
            { type: "code", lang: "javascript", title: "用数组实现最小堆（可运行）", code: 'class MinHeap {\n  constructor(){ this.a = []; }\n  /* 子节点索引: 左 2i+1 右 2i+2, 父节点 Math.floor((i-1)/2) */\n  push(v){\n    this.a.push(v);\n    let i = this.a.length - 1;\n    while(i > 0){\n      const p = (i-1) >> 1;\n      if(this.a[p] <= this.a[i]) break;\n      [this.a[p], this.a[i]] = [this.a[i], this.a[p]];\n      i = p;\n    }\n  }\n  pop(){ // 弹出最小值\n    const n = this.a.length, res = this.a[0];\n    this.a[0] = this.a[n-1]; this.a.pop();\n    let i = 0;\n    while(true){\n      const l = 2*i+1, r = 2*i+2; let m = i;\n      if(l < this.a.length && this.a[l] < this.a[m]) m = l;\n      if(r < this.a.length && this.a[r] < this.a[m]) m = r;\n      if(m === i) break;\n      [this.a[m], this.a[i]] = [this.a[i], this.a[m]];\n      i = m;\n    }\n    return res;\n  }\n}\nconst h = new MinHeap();\n[5,3,8,1,9,2].forEach(x=>h.push(x));\nconsole.log("依序弹出最小值:", h.pop(), h.pop(), h.pop(), h.pop(), h.pop(), h.pop()); // 1 2 3 5 8 9\n\n// 用堆做 Top-K：大数据里找最大的3个\nfunction topK(arr, k){\n  // 维护大小为k的最小堆，堆顶是当前最小的候选\n  const h = new MinHeap();\n  for(const v of arr){\n    if(h.a.length < k) h.push(v);\n    else if(v > h.a[0]){ h.pop(); h.push(v); }\n  }\n  return h.a.sort((x,y)=>y-x);\n}\nconsole.log("Top-3:", topK([10,5,20,3,50,40,7], 3));' },
            { type: "keypoints", items: ["堆是快速取最值的完全二叉树", "最小堆根是最小值，pop O(log n)", "用数组存：2i+1/2i+2 是孩子", "Top-K 问题用大小为 k 的堆"] },
          ],
        },
        {
          id: "ds-tree",
          title: "树与二叉树",
          summary: "文件系统、网站目录、排序都长这样——树无处不在。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "树是一种『一个根，往下分叉』的结构，就像家谱。每个节点可以有多个子节点，但有且只有一个父节点。最常用的是二叉树（每个节点最多两个孩子）和二叉搜索树（BST：左小右大）。" },
            { type: "code", lang: "javascript", title: "二叉树与遍历", code: 'class TreeNode {\n  constructor(val) { this.val = val; this.left = null; this.right = null; }\n}\n\n// 构建一棵小树\n//        1\n//      /   \\\n//     2     3\n//    / \\\n//   4   5\nconst root = new TreeNode(1);\nroot.left = new TreeNode(2);\nroot.right = new TreeNode(3);\nroot.left.left = new TreeNode(4);\nroot.left.right = new TreeNode(5);\n\n// 前序遍历：根 左 右\nfunction preorder(n, out = []) {\n  if (!n) return out;\n  out.push(n.val);\n  preorder(n.left, out);\n  preorder(n.right, out);\n  return out;\n}\n// 中序遍历：左 根 右\nfunction inorder(n, out = []) {\n  if (!n) return out;\n  inorder(n.left, out);\n  out.push(n.val);\n  inorder(n.right, out);\n  return out;\n}\nconsole.log("前序:", preorder(root));\nconsole.log("中序:", inorder(root));\n\n// 二叉树最大深度\nfunction maxDepth(n) {\n  if (!n) return 0;\n  return 1 + Math.max(maxDepth(n.left), maxDepth(n.right));\n}\nconsole.log("树的深度:", maxDepth(root));' },
            { type: "info", title: "二叉搜索树 BST", text: "若左子树所有节点 < 根 < 右子树所有节点，就得到 BST。它的查找类似二分查找，平均 O(log n)。但插入顺序不好会退化成链表，所以有了平衡树（如 AVL、红黑树）。" },
            { type: "keypoints", items: ["树 = 根 + 子节点分叉，有层级关系", "二叉树每节点最多两个孩子", "前序/中序/后序是三种遍历方式", "BST 左小右大，支撑高效查找"] },
          ],
        },
      ],
    },

    /* ================= 算法 ================= */
    {
      id: "algo",
      name: "算法",
      icon: "法",
      tagline: "一步步解决问题的方法，代码的『兵法』。",
      intro:
        "算法是『解决特定问题的明确步骤』。从排序、查找，到递归、回溯、动态规划。掌握算法思维，等于给程序员的大脑装上通用解题引擎。",
      meta: { 难度: "入门", 面试: "重中之重" },
      lessons: [
        {
          id: "algo-complexity",
          title: "复杂度：如何衡量算法的快慢",
          summary: "大 O 表示法，一眼看出谁的算法更优秀。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "聊算法好坏，绕不开『时间复杂度』。我们用大 O 表示法描述：当数据规模 n 变大时，运行时间按什么『曲线』增长。它忽略常数，只看趋势。" },
            { type: "code", lang: "javascript", title: "常见复杂度的直观对比", code: '// O(1) 常数级：与 n 无关，最快\nfunction getFirst(arr){ return arr[0]; }\n\n// O(n) 线性：跑一遍\nfunction findMax(arr){\n  let m = arr[0];\n  for (const v of arr) if (v > m) m = v;\n  return m;\n}\n\n// O(n^2) 平方：双重循环（如简单选择排序）\nfunction hasDuplicate(arr){\n  for(let i=0;i<arr.length;i++)\n    for(let j=i+1;j<arr.length;j++)\n      if(arr[i]===arr[j]) return true;\n  return false;\n}\n\n// O(log n) 对数级：二分查找，每次砍一半\nfunction binarySearch(arr, target){\n  let lo=0, hi=arr.length-1;\n  while(lo<=hi){\n    const mid=(lo+hi)>>1;\n    if(arr[mid]===target) return mid;\n    if(arr[mid]<target) lo=mid+1; else hi=mid-1;\n  }\n  return -1;\n}\nconsole.log("二分查找 7 的下标:", binarySearch([1,3,5,7,9], 7));' },
            { type: "table", head: ["复杂度", "含义", "示例"], rows: [["O(1)", "常数时间", "数组按下标访问"], ["O(log n)", "对数级", "二分查找"], ["O(n)", "线性", "遍历数组"], ["O(n log n)", "线性对数", "快速/归并排序"], ["O(n²)", "平方", "冒泡、嵌套循环"], ["O(2ⁿ) / O(n!)", "爆炸级", "暴力搜索/排列"]] },
            { type: "keypoints", items: ["大 O 看趋势，忽略常数与低阶项", "n 越大，不同复杂度差距越惊人", "推荐掌握 log n 与 n log n 级别算法", "二分查找是 O(log n) 的经典代表"] },
          ],
        },
        {
          id: "algo-sort",
          title: "三大经典排序",
          summary: "冒泡、选择、快速排序——排序是算法的敲门砖。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "排序用途极广（如成绩排名、价格排序）。我们从『最容易理解』的冒泡排序出发，一路到实际工程中最常用的快速排序。所有语言都有内置排序，但理解原理能帮你判断何时该自定义。" },
            { type: "code", lang: "javascript", title: "冒泡 / 选择 / 快速 排序", code: '// 冒泡排序：相邻比较，大的往后冒\nfunction bubbleSort(arr){\n  const a=[...arr];\n  for(let i=0;i<a.length-1;i++)\n    for(let j=0;j<a.length-1-i;j++)\n      if(a[j]>a[j+1]) [a[j],a[j+1]]=[a[j+1],a[j]];\n  return a;\n}\n\n// 选择排序：每轮选最小的放前面\nfunction selectionSort(arr){\n  const a=[...arr];\n  for(let i=0;i<a.length-1;i++){\n    let min=i;\n    for(let j=i+1;j<a.length;j++) if(a[j]<a[min]) min=j;\n    [a[i],a[min]]=[a[min],a[i]];\n  }\n  return a;\n}\n\n// 快速排序：分而治之，选基准划分\nfunction quickSort(arr){\n  if(arr.length<=1) return arr;\n  const pivot=arr[Math.floor(arr.length/2)];\n  const left=[], right=[], eq=[];\n  for(const v of arr){\n    if(v<pivot) left.push(v);\n    else if(v>pivot) right.push(v);\n    else eq.push(v);\n  }\n  return [...quickSort(left), ...eq, ...quickSort(right)];\n}\n\nconst data=[38,27,43,3,9,82,10];\nconsole.log("初始:    ", data);\nconsole.log("冒泡排序:", bubbleSort(data));\nconsole.log("选择排序:", selectionSort(data));\nconsole.log("快速排序:", quickSort(data));' },
            { type: "table", head: ["算法", "平均时间", "最坏", "是否稳定", "特点"], rows: [["冒泡", "O(n²)", "O(n²)", "稳定", "易理解，教学用"], ["选择", "O(n²)", "O(n²)", "不稳定", "交换次数最少"], ["快速", "O(n log n)", "O(n²)", "不稳定", "工程首选，原地划分"]] },
            { type: "keypoints", items: ["冒泡：相邻交换，大数冒泡到尾部", "选择：每轮挑最小放前面", "快排：选基准、划分、递归，平均 n log n", "实际开发直接调用语言内置排序即可"] },
          ],
        },
        {
          id: "algo-search",
          title: "查找与二分搜索",
          summary: "在百万数据里秒查目标，二分搜索是基本功。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "在一个『已排序』的数组里找目标，最聪明的办法是二分搜索：每次都取中间值比较，一次排除一半。一百万条数据，最多只需比较约 20 次，这就是 O(log n) 的威力。" },
            { type: "code", lang: "javascript", title: "二分搜索实现", code: '// 前提：数组已升序排列\nfunction binarySearch(nums, target) {\n  let lo = 0, hi = nums.length - 1;\n  let iterations = 0;\n  while (lo <= hi) {\n    iterations++;\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] === target) {\n      console.log(`找到了，下标 ${mid}，共比较 ${iterations} 次`);\n      return mid;\n    }\n    if (nums[mid] < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  console.log(`比较了 ${iterations} 次，未找到`);\n  return -1;\n}\n\nconst nums = [];\nfor (let i = 1; i <= 100; i++) nums.push(i);\nconsole.log(binarySearch(nums, 73));\nconsole.log("线性查找要 73 次，二分只需", Math.ceil(Math.log2(100)), "次左右");' },
            { type: "info", title: "适用条件", text: "二分查找的前提是『有序』。所以很多场景会先排序再复用二分思想。求平方根、找旋转数组、找边界值，都是二分的变体。" },
            { type: "keypoints", items: ["二分查找每次排除一半元素", "要求数据已排序", "时间复杂度 O(log n)", "可用于求各类『单调性』问题"] },
          ],
        },
        {
          id: "algo-recursion",
          title: "递归与分治",
          summary: "把大问题拆成同类小问题——递归是编程思维的跃迁。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "递归就是『函数调用自己』，配合一个中止条件。它的思想是分治：把大问题拆成一个更小的问题 + 最后一块拼图。比如求 n!：n! = n * (n-1)!，规模一步步缩小直到 1。" },
            { type: "code", lang: "javascript", title: "递归三连：阶乘、斐波那契、分治求和", code: '// 必须有终结条件return\nfunction factorial(n){\n  if(n<=1) return 1;      // 基线条件：最小子问题\n  return n * factorial(n-1);  // 递归步骤\n}\nconsole.log("5! =", factorial(5));\n\n// 斐波那契（朴素版，指数级，演示思想）\nfunction fib(n){\n  if(n<=1) return n;\n  return fib(n-1)+fib(n-2);\n}\nconsole.log("fib(8) =", fib(8));\n\n// 分治：数组求和 = 左半和 + 右半和\nfunction sumRange(arr, lo, hi){\n  if(lo===hi) return arr[lo];\n  const mid=(lo+hi)>>1;\n  return sumRange(arr,lo,mid)+sumRange(arr,mid+1,hi);\n}\nconsole.log("分治求和:", sumRange([1,2,3,4,5,6,7,8,9,10],0,9));' },
            { type: "warn", title: "小心栈溢出", text: "递归每调用一次就占用一层调用栈，层数过深（如十万次）会爆栈。能改成循环或尾递归更好。斐波那契朴素递归是指数级，实际要用记忆化/动态规划。" },
            { type: "keypoints", items: ["递归 = 函数调用自身 + 基线条件", "分治：大问题拆成小问题再合并", "二分、快排、树遍历都是递归最佳舞台", "过深会栈溢出，慎用"] },
          ],
        },
        {
          id: "algo-dp",
          title: "动态规划：聪明的记忆化",
          summary: "把重复计算的结果记下来，指数爆炸变线性增长。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "动态规划（DP）的精髓一句话：把子问题的答案存起来（记忆化），避免重复计算。以斐波那契为例，朴素递归算 fib(5) 时 fib(3) 会被算无数遍；DP 从下往上存结果，只算一次。" },
            { type: "code", lang: "javascript", title: "动态规划名著：斐波那契 & 爬楼梯", code: '// 动态规划：自底向上，用数组存中间结果\nfunction fibDP(n){\n  if(n<=1) return n;\n  const dp=[0,1];\n  for(let i=2;i<=n;i++){\n    dp[i]=dp[i-1]+dp[i-2];  // 状态转移方程\n  }\n  return dp[n];\n}\nconsole.log("DP 算 fib(50) =", fibDP(50));  // 瞬间出结果\n\n// 爬楼梯：每次走 1 或 2 阶，到 n 阶有几种走法\nfunction climbStairs(n){\n  if(n<=2) return n;\n  let a=1, b=2;\n  for(let i=3;i<=n;i++){\n    const tmp=a+b;  // 到 i = 到 i-1 + 到 i-2\n    a=b; b=tmp;\n  }\n  return b;\n}\nconsole.log("10 阶楼梯走法:", climbStairs(10));' },
            { type: "info", title: "DP 三步法", text: "① 定义 dp[i] 的含义（如到第 i 阶的走法数）；② 找状态转移方程（dp[i]=dp[i-1]+dp[i-2]）；③ 确定初始值。看懂这三步，DP 题不再可怕。" },
            { type: "keypoints", items: ["DP = 记忆化 + 状态转移", "避免重复计算，空间换时间", "典型：斐波那契、爬楼梯、背包、最长子序列", "先定义 dp 含义，再找转移方程"] },
          ],
        },
        {
          id: "algo-sort-all",
          title: "八大排序全家桶",
          summary: "插入、归并、堆排序补完——一张图看全所有主流排序。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "前面讲了冒泡、选择、快速排序，这里补齐插入、归并、堆排序等，凑齐『八大排序』。归并是稳定的 O(n log n)，堆排序用数据结构里的堆，插入排序在小数据上极快。" },
            { type: "code", lang: "javascript", title: "插入 / 归并 / 堆排序（可运行）", code: '// 插入排序：像整理扑克牌，把每张插到已排好的位置\nfunction insertion(a){\n  const x=[...a];\n  for(let i=1;i<x.length;i++){\n    const cur=x[i]; let j=i-1;\n    while(j>=0 && x[j]>cur){ x[j+1]=x[j]; j--; }\n    x[j+1]=cur;\n  }\n  return x;\n}\nconsole.log("插入排序:", insertion([5,2,9,1,7]).join(" "));\n\n// 归并排序：分治合并两个有序数组（稳定）\nfunction mergeSort(a){\n  if(a.length<=1) return a;\n  const mid=a.length>>1, L=mergeSort(a.slice(0,mid)), R=mergeSort(a.slice(mid));\n  const res=[]; let i=0,j=0;\n  while(i<L.length && j<R.length) res.push(L[i]<R[j]?L[i++]:R[j++]);\n  return res.concat(L.slice(i), R.slice(j));\n}\nconsole.log("归并排序:", mergeSort([3,1,4,1,5,9,2,6]).join(" "));\n\n// 堆排序：建最大堆后逐个弹出到尾部\nfunction heapSort(a){\n  const x=[...a];\n  function down(n,i){\n    while(true){ let l=2*i+1,r=2*i+2,m=i;\n      if(l<n && x[l]>x[m]) m=l;\n      if(r<n && x[r]>x[m]) m=r;\n      if(m===i) break;\n      [x[m],x[i]]=[x[i],x[m]]; i=m; } }\n  for(let i=(x.length>>1)-1;i>=0;i--) down(x.length,i);\n  for(let i=x.length-1;i>0;i--){ [x[0],x[i]]=[x[i],x[0]]; down(i,0); }\n  return x;\n}\nconsole.log("堆排序:", heapSort([7,3,9,2,8,1]).join(" "));' },
            { type: "table", head: ["算法", "最好", "平均", "最坏", "稳定"], rows: [["冒泡", "O(n)", "O(n²)", "O(n²)", "是"], ["插入", "O(n)", "O(n²)", "O(n²)", "是"], ["选择", "O(n²)", "O(n²)", "O(n²)", "否"], ["快速", "O(n log n)", "O(n log n)", "O(n²)", "否"], ["归并", "O(n log n)", "O(n log n)", "O(n log n)", "是"], ["堆", "O(n log n)", "O(n log n)", "O(n log n)", "否"]] },
            { type: "keypoints", items: ["八大排序：冒泡/选择/插入/快速/归并/堆/希尔/基数", "快排平均最快但最坏退化，归并稳定", "插入排序处理近有序数组极快", "实际开发直接用语言内置 sorted"] },
          ],
        },
        {
          id: "algo-misc",
          title: "贪心、回溯与滑动窗口",
          summary: "再补三种面试常考的思想武器。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "贪心：每步都取局部最优，希望通过『局部最优的叠加』得到全局最优。回溯：像走迷宫，走不通就退回去换条路（本质是 DFS + 撤销）。滑动窗口：用左右两个指针维护一段区间，处理子串/子数组问题。" },
            { type: "code", lang: "javascript", title: "三种思想（可运行）", code: '// 1. 贪心：找零钱尽量少的硬币数(用零钱充分的情况下)\nfunction coinChange(coins, amount){\n  coins.sort((a,b)=>b-a);  // 降序，先大后小\n  let count=0;\n  for(const c of coins){\n    while(amount>=c){ amount-=c; count++; }\n  }\n  return amount===0 ? count : -1;\n}\nconsole.log("凑11用[1,5,10]最少硬币:", coinChange([1,5,10], 11)); // 3 (10+1)\n\n// 2. 回溯：求数组所有子集（走分支，不满足就回去）\nfunction subsets(nums){\n  const res=[];\n  function dfs(i, cur){\n    res.push([...cur]);      // 当前选择成一个子集\n    for(let j=i;j<nums.length;j++){\n      cur.push(nums[j]);\n      dfs(j+1, cur);  // 递归选下一个\n      cur.pop();      // 撤销选择 ← 回溯核心\n    }\n  }\n  dfs(0, []);\n  return res;\n}\nconsole.log("[1,2]的所有子集:", JSON.stringify(subsets([1,2,3])));\n\n// 3. 滑动窗口：求无重复字符的最长子串\nfunction lengthOfLongestSubstring(s){\n  let left=0, max=0; const seen=new Set();\n  for(let right=0;right<s.length;right++){\n    while(seen.has(s[right])){ seen.delete(s[left]); left++; } // 收缩左边界\n    seen.add(s[right]);\n    max=Math.max(max, right-left+1);\n  }\n  return max;\n}\nconsole.log(\'"abcabcbb\" 最长无重复子串长度:\', lengthOfLongestSubstring("abcabcbb")); // 3' },
            { type: "warn", title: "贪心不总是对的", text: "贪心只有在『局部最优能推出全局最优』时成立（如找零在币值充分时、活动选择）。很多题贪心会得到次优解，需证明或用其他方法。找零在币值不规律时贪心会失效，例如 [1,3,4] 凑 6，贪心得 4+1+1=3 枚，最优其实是 3+3=2 枚。" },
            { type: "keypoints", items: ["贪心 = 每步局部最优，未必全局最优", "回溯 = DFS + 撤销选择，穷举所有可能", "滑动窗口 = 双指针维护区间解子串问题", "贪心需证明，回溯保证正确但可能慢"] },
          ],
        },
        {
          id: "algo-bfs-dfs",
          title: "图与 BFS/DFS 遍历",
          summary: "地图导航、社交网络、网页爬虫都靠图。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "图由『节点』和『连线（边）』组成，用来表达任何『谁和谁相连』的关系。遍历图有两条路线：深度优先（DFS：一条路走到底再回头）和广度优先（BFS：像水波一层层扩散）。" },
            { type: "code", lang: "javascript", title: "BFS 找到最短路径步数", code: '// 图：邻接表表示\nconst graph = {\n  0: [1, 2],\n  1: [0, 3],\n  2: [0, 3, 4],\n  3: [1, 2, 4],\n  4: [2, 3]\n};\n\n// BFS：队列实现，适合求最短步数\nfunction bfsShortest(graph, start, target) {\n  const queue = [[start, 0]];  // [节点, 已走步数]\n  const visited = new Set([start]);\n  while (queue.length) {\n    const [node, dist] = queue.shift();\n    if (node === target) return dist;\n    for (const next of graph[node] || []) {\n      if (!visited.has(next)) {\n        visited.add(next);\n        queue.push([next, dist + 1]);\n      }\n    }\n  }\n  return -1;\n}\nconsole.log("0 到 4 的最短步数:", bfsShortest(graph, 0, 4));\n\n// DFS：递归 + visited 防止死循环\nfunction dfs(graph, start, target, visited = new Set()) {\n  if (start === target) return true;\n  visited.add(start);\n  for (const next of graph[start] || []) {\n    if (!visited.has(next) && dfs(graph, next, target, visited)) return true;\n  }\n  return false;\n}\nconsole.log("0 能否到达 4:", dfs(graph, 0, 4));' },
            { type: "table", head: ["遍历", "数据结构", "特点", "适用"], rows: [["BFS 广度优先", "队列", "一层层扩散", "最短路径、最少步数"], ["DFS 深度优先", "栈/递归", "一条路走到底", "连通性、回溯、迷宫路径"]] },
            { type: "keypoints", items: ["图用节点+边表示连接关系", "BFS 用队列，适合求最短路", "DFS 用栈/递归，适合搜索所有路径", "visited 数组防止重复访问死循环"] },
          ],
        },
      ],
    },

    /* ================= 网络 ================= */
    {
      id: "network",
      name: "计算机网络",
      icon: "网",
      tagline: "数据如何穿越世界，从 HTTP 到 TCP/IP。",
      intro:
        "计算机网络是互联网的骨骼。理解它，你就明白为什么网页能加载、视频能播放、你打的字如何飞跨大洋。重点是分层模型和 HTTP 协议。",
      meta: { 难度: "入门", 面试: "高频" },
      lessons: [
        {
          id: "net-http",
          title: "HTTP 协议：网页的聊天语言",
          summary: "请求响应、状态码、GET/POST，一次看懂 Web 通信。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "你打开网页时，浏览器（客户端）向服务器发一个「HTTP 请求」，服务器回一个「HTTP 响应」。请求里有方法（GET 取数据、POST 提交数据）、路径、Header；响应里有状态码和正文。" },
            { type: "table", head: ["状态码", "含义", "场景"], rows: [["200", "成功", "页面加载成功"], ["301/302", "重定向", "网址换了，跳转"], ["400", "请求有误", "参数写错"], ["401/403", "未认证/无权限", "没登录/不让访问"], ["404", "找不到", "页面不存在"], ["500", "服务器内部错误", "后端程序崩溃"], ["503", "服务不可用", "服务器过载/维护"]] },
            { type: "code", lang: "javascript", title: "可运行的 HTTP 请求示例", code: '// 用 fetch 发 HTTP 请求（GET，取到一个可公开的接口）\nasync function demo() {\n  try {\n    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");\n    console.log("状态码:", res.status);          // 200\n    console.log("Content-Type:", res.headers.get("content-type"));\n    const data = await res.json();\n    console.log("返回数据:", data);\n  } catch (e) {\n    console.log("请求失败（本环境可能无网络）:", e.message);\n  }\n}\ndemo();\n\n// 查看你自己的 request 头也能用常见 Header\nconsole.log("GET 拿数据 / POST 提交数据，HTTP 就是去很多趟的请求-响应循环");' },
            { type: "info", title: "HTTP 无状态但有 Cookie", text: "HTTP 本身『记不住你是谁』（无状态）。为了登录态，浏览器用 Cookie 保存身份，每次请求自动带上，服务器就能认出是你了。" },
            { type: "keypoints", items: ["HTTP = 请求/响应模型，方法 + 路径 + Headers", "200 成功 404 找不到 500 服务器错误", "GET 查询、POST 提交", "无状态，用 Cookie/Session 维持登录"] },
          ],
        },
        {
          id: "net-tcp-ip",
          title: "TCP/IP 与三次握手",
          summary: "数据怎么可靠地到达？分层模型一次讲清。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "为了把复杂问题拆解，网络采用分层模型。核心是 TCP/IP 四层：链路层（网线/网卡）、网络层（IP 路由）、传输层（TCP/UDP 端口）、应用层（HTTP/DNS 等）。每层各司其职。" },
            { type: "table", head: ["层次", "代表协议", "职责"], rows: [["应用层", "HTTP, DNS, FTP", "和人的需求对接"], ["传输层", "TCP, UDP", "端口与可靠/非可靠传输"], ["网络层", "IP, ICMP", "寻址与路由"], ["链路层", "以太网, WIFI", "物理传输"]] },
            { type: "code", lang: "text", title: "三次握手与四次挥手", code: '三次握手（建立连接，保证双方都能收发）\n1. 客户端 -> 服务器 : 我可以发吗？(SYN)\n2. 服务器 -> 客户端 : 收到，我也可以发。(SYN+ACK)\n3. 客户端 -> 服务器 : 确认。(ACK)\n   -> 连接建立\n\n四次挥手（断开连接）\n1. 客户端 -> 服务器 : 我要关了 (FIN)\n2. 服务器 -> 客户端 : 收到，稍等 (ACK)\n3. 服务器 -> 客户端 : 我也好了 (FIN)\n4. 客户端 -> 服务器 : 确认 (ACK)\n   -> 连接断开' },
            { type: "warn", title: "TCP vs UDP", text: "TCP 可靠但慢（保证顺序、会重传），适合文件、网页；UDP 快但可能丢包，适合视频、游戏（丢一帧无所谓）。HTTP/3 甚至用 UDP 来提速。" },
            { type: "keypoints", items: ["四层模型：链路→网络→传输→应用", "TCP 可靠、UDP 快速但可能丢包", "三次握手建立可靠连接", "IP 负责寻址路由，TCP 负责端口与可靠"] },
          ],
        },
      ],
    },

    /* ================= 操作系统 ================= */
    {
      id: "os",
      name: "操作系统",
      icon: "系",
      tagline: "管理 CPU、内存、文件的大管家，程序的房东。",
      intro:
        "操作系统（OS）管理计算机的所有硬件资源，并把它们抽象成好用的接口给程序用。理解进程、线程、内存管理，是进阶后端与系统的必修课。",
      meta: { 难度: "进阶", 场景: "系统 / 后端" },
      lessons: [
        {
          id: "os-process",
          title: "进程与线程：程序如何『同时』运行",
          summary: "进程独立、线程共享，靠时间片让无数程序看似并行。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "进程是『正在运行的程序』，有自己的独立内存空间，互不干扰；线程是进程里的『执行流』，一个进程可以有多个线程，它们共享进程的内存，协作更快但也更容易出竞争问题。" },
            { type: "p", text: "你的电脑 CPU 核数有限，却能同时跑几百个程序，靠的是『时间片轮转』：操作系统把 CPU 时间切成小片，飞快地在各进程间切换，人眼看起来就是并行的。" },
            { type: "code", lang: "text", title: "进程 vs 线程", code: '进程 = 独立的办公室（有独立的内存、文件、安全权限）\n  - 开销大：切换要换环境\n  - 隔离强：一个崩了不影响别人\n\n线程 = 办公室里的多个员工（共享这个办公室的资源）\n  - 开销小：切换快\n  - 共享：容易互相踩脚（数据竞争）\n  - 需要用『锁』保护共享资源\n\n上下文切换：CPU 从执行一个进程切换到另一个\n  = 保存现场 + 恢复现场，这是并发的基础\n\n并发 vs 并行\n  - 并发：多个任务交替进行（宏观同时）\n  - 并行：真的同时跑（多核同时执行）' },
            { type: "warn", title: "死锁", text: "两个线程各自拿了一把锁，又都在等对方手里的锁，谁也不肯放手，双双卡死，就是死锁。避免它的常用原则是『按统一顺序加锁』。" },
            { type: "keypoints", items: ["进程独立内存，线程共享内存", "时间片轮转实现多任务", "线程竞争需用锁保护", "死锁 = 相互等待永远不释放"] },
          ],
        },
        {
          id: "os-memory",
          title: "内存管理与虚拟内存",
          summary: "程序以为独占整块内存，其实是一场精妙的『骗局』。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "每个进程都『感觉自己拥有独立的一大块连续内存』，这是虚拟内存的功劳：操作系统用一张页表，把程序的虚拟地址映射到物理内存的真实地址。多个进程互不干扰，也能让内存不够时把暂时不用的数据换到磁盘。" },
            { type: "code", lang: "text", title: "内存模型一览", code: '程序运行的地址空间（自高到低）\n+------------------+\n| 栈 Stack          |  局部变量、函数调用（向下增长）\n|  ...              |\n| 堆 Heap           |  动态分配（new/malloc，向上增长）\n| 全局/静态区        |  全局变量、static\n| 代码区 Text        |  编译后的机器指令\n+------------------+\n\n栈（Stack）：自动管理，快，但空间有限→ 栈溢出\n堆（Heap）：手动/GC 管理，空间大，但慢\n\n页表：虚拟地址 -> 物理地址 的映射表\n换页：物理内存不够时，把页面写回磁盘，腾出空间' },
            { type: "info", title: "为什么理解的堆和栈重要", text: "递归过深会栈溢出；无脑 new 对象不再用会占满堆导致 OOM 或内存泄漏。写 C/C++ 时更是直接面对这些概念。这是很多面试题的根源。" },
            { type: "keypoints", items: ["虚拟内存让进程独占内存的假象", "栈自动管理、堆需手动/GC", "页表完成虚拟到物理的映射", "内存不足时页面换出到磁盘"] },
          ],
        },
      ],
    },

    /* ================= 数据库基础 ================= */
    {
      id: "db-basics",
      name: "数据库基础",
      icon: "库",
      tagline: "数据永久可靠的存放地，事务与索引初体验。",
      intro:
        "数据库用来『持久化』数据——程序重启数据不丢。关系型数据库（如 MySQL、PostgreSQL）用表和 SQL 管理数据，是现代应用的核心存储。",
      meta: { 难度: "入门", 场景: "所有应用" },
      lessons: [
        {
          id: "db-transaction",
          title: "事务与 ACID",
          summary: "要么全做要么全不做，转账不丢钱就靠它。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "『转账』要把 A 账户扣钱、B 账户加钱——两步必须同时成功，否则要么 A 少了不补，要么凭空多钱。事务就是『要么全部成功，要么全部回滚』的操作单元。它有四大特性，合称 ACID。" },
            { type: "table", head: ["特性", "含义", "生活中的例子"], rows: [["原子性 Atomicity", "要么全成功要么全回滚", "转账扣钱加钱不分家"], ["一致性 Consistency", "数据始终合法", "余额不能为负"], ["隔离性 Isolation", "事务间互不干扰", "两个同时转账不乱"], ["持久性 Durability", "提交后永久保存", "断电也不丢"]] },
            { type: "code", lang: "sql", title: "事务的 SQL 写法", code: 'BEGIN;  -- 开始事务\n\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;  -- 扣钱\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;  -- 加钱\n\n-- 若一切正常\nCOMMIT;  -- 提交，两步一起生效\n\n-- 若中途出错\n-- ROLLBACK;  -- 回滚，像没发生过一样' },
            { type: "keypoints", items: ["事务 = 全做或全不做，要么提交要么回滚", "ACID：原子、一致、隔离、持久", "转账是事务最经典例子", "并发事务可能需要隔离级别与锁"] },
          ],
        },
        {
          id: "db-index",
          title: "索引：为什么查询能这么快",
          summary: "数据库的书签，本质是让查找从全表扫描变成树查找。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "没有索引时，数据库查一条记录要『全表扫描』——把每一行都看一遍，百万行就是百万次比较。加了索引后，数据库建立一棵树（通常是 B+ 树），查找通过树逐层逼近，快了几个数量级。" },
            { type: "code", lang: "sql", title: "创建索引", code: '-- 为 name 列建立索引，加速按名字查询\nCREATE INDEX idx_users_name ON users(name);\n\n-- 唯一索引（不允许重复）\nCREATE UNIQUE INDEX idx_users_email ON users(email);\n\n-- 查询时会自动使用索引\nSELECT * FROM users WHERE name = "小明";\n\n-- 查看执行计划，看是否用上索引\nEXPLAIN SELECT * FROM users WHERE name = "小明";' },
            { type: "warn", title: "索引不是越多越好", text: "索引能加速查询，但会拖慢插入/更新（因为每次写数据都要同步维护树），也占磁盘空间。无脑加索引是新手常见误区。原则：给高频 WHERE/JOIN 的列建，别给高写入选建立。" },
            { type: "keypoints", items: ["索引 = 数据库的书签/目录", "B+ 树按层查找，log 级复杂度", "加速查询但拖慢写入并占空间", "给常用查询列建索引，别滥用"] },
          ],
        },
      ],
    },

    /* ================= 计算机组成 ================= */
    {
      id: "composer",
      name: "计算机组成原理",
      icon: "组",
      tagline: "从晶体管到 CPU，一台电脑到底怎么算的？",
      intro:
        "组成原理回答『计算机硬件是如何工作的』：CPU 如何取指执行、内存如何存取、数据如何用二进制表示。它是计算机科学最底层的世界观。",
      meta: { 难度: "进阶", 场景: "底层 / 系统" },
      lessons: [
        {
          id: "composer-binary",
          title: "二进制与数据表示",
          summary: "计算机只懂 0 和 1，其余全是翻译。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "计算机底层只认识两种状态：通电/断电，用 0 和 1 表示。所有数字、文字、图片、声音，最终都编码成一串 0/1。字节是基本单位（8 个 bit），1KB=1024 字节，1MB=1024KB。" },
            { type: "code", lang: "javascript", title: "进制转换可运行", code: '// 十进制转二进制、十六进制\nconst num = 255;\nconsole.log("255 的二进制:", num.toString(2));  // 11111111\nconsole.log("255 的十六进制:", num.toString(16)); // ff\nconsole.log("40 的二进制:", (40).toString(2));  // 101000\n\n// 二进制数相加（模拟\nfunction addBinary(a, b){\n  return (a + b).toString(2);\n}\nconsole.log("5+3 的二进制:", addBinary(5, 3));  // 1000\n\n// 负数用补码表示（最左边是符号位）\nconsole.log("-1 的二进制(32位视为补码):", (-1 >>> 0).toString(2));' },
            { type: "info", title: "ASCII 与 Unicode", text: "文字如何存？每个字符对应一个编码：ASCII 用 7 位（字母数字）；Unicode 统一全球文字，UTF-8 则是对 Unicode 的『省空间』编码，中文一般占 3 字节。" },
            { type: "keypoints", items: ["一切皆 0/1，bit 是基本单位，byte=8bit", "字节、KB、MB、GB 是容量单位", "字符按 ASCII/Unicode/UTF-8 编码", "负数用补码表示"] },
          ],
        },
        {
          id: "composer-cpu",
          title: "CPU 与冯·诺依曼架构",
          summary: "取指-译码-执行的循环，就是 CPU 的一生。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "冯·诺依曼架构设计了现代计算机：一个处理器（CPU）+ 存储（内存）+ 输入输出，程序和数据都存在内存里。CPU 内核不断循环：从内存取指令 → 译码搞清楚要干嘛 → 执行 → 再取下一条。" },
            { type: "code", lang: "text", title: "CPU 工作过程", code: 'CPU 核心组成\n  - 控制单元 CU：指挥调度（译码）\n  - 算术逻辑单元 ALU：做加减乘除与与或非\n  - 寄存器：CPU 内部的高速小仓库\n  - 缓存 Cache：CPU 与内存之间的缓冲层\n\n指令周期（反复执行）\n1. 取指：从内存读一条指令\n2. 译码：解析这条指令\n3. 执行：用 ALU 计算\n4. 写回：把结果写回寄存器/内存\n\n访存延迟（越靠近 CPU 越快）\n寄存器 > L1缓存 > L2/L3缓存 > 内存 > 磁盘(SSD) > 硬盘(HDD)' },
            { type: "p", text: "『缓存为什么快』在于它的层级设计：CPU 用几百根的寄存器，常访问数据放多级缓存，次常访问放内存，不常用的放磁盘。每往下一层，速度快约 10 倍，但容量大得多。" },
            { type: "keypoints", items: ["冯·诺依曼：CPU+存储+I/O，程序存内存", "CPU 循环：取指→译码→执行→写回", "缓存层级：寄存器→缓存→内存→磁盘", "理解缓存命中率是性能优化核心"] },
          ],
        },
      ],
    },
  ],
};