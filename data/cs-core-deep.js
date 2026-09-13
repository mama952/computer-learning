/* ============================================================
   计算机知识库 · 数据：计算机核心进阶（四大件深讲）
   schema: { id, name, icon, description, children:[{id,name,icon,tagline,intro,meta,lessons:[{id,title,summary,difficulty,blocks}]}] }
   block.type: p | h | h3 | list | tip | info | warn | danger | keypoints | code | table
   这些是国内科班必考的『四大件』进阶版，与 cs-fundamentals 的基础版互补。
   ============================================================ */
window.CS_CORE_DEEP = {
  "id": "cs-core-deep",
  "name": "计算机核心进阶",
  "icon": "核",
  "description": "面试与深造躲不开的『四大件』进阶版：数据结构与算法、操作系统、计算机网络、数据库原理。基础版能让你看懂，进阶版让你能解题、能设计、能讲清楚原理——这是编程语言之外，区分普通开发与高阶工程师的功力分水岭。",
  "children": [
    /* ================= 算法与数据结构进阶 ================= */
    {
      "id": "deep-algo",
      "name": "数据结构与算法进阶",
      "icon": "算",
      "tagline": "排序、树、动态规划、图论——把『会写』练成『能解』。",
      "intro": "算法不是背模板，而是模式识别：看到题目先归到『二分/排序/DP/图/双指针』等范式。这一板块从排序与二分入手，到树与堆，再到动态规划与图，一步步建立解题手感。所有代码都用纯 JS/Python，可在站内在线编辑器直接运行调试。",
      "meta": { "难度": "进阶", "场景": "算法笔试" },
      "lessons": [
        {
          "id": "deep-algo-1-sort-binary",
          "title": "排序的本质与二分查找模板",
          "summary": "归并/快排思想、复杂度、二分搜索左边界右边界。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "排序不只是『把数组排好』，更是理解 O(n log n) 的窗口：**归并**靠分治+合并保证稳定，**快排**靠随机选主元配合原地交换，在常数上胜出。二分查找则是面试最高频模板之一，关键在于『怎么写不出现死循环』。" },
            { "type": "code", "lang": "javascript", "title": "归并排序：分治思维（可直接运行）",
              "code": `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = arr.length >> 1;          // 取中点
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  // 合并两个已有序数组
  const res = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) res.push(left[i++]);
    else res.push(right[j++]);
  }
  return res.concat(left.slice(i), right.slice(j));
}

const arr = [38, 27, 43, 3, 9, 82, 10];
console.log('归并排序:', mergeSort(arr));
console.log('复杂度: O(n log n)，稳定');` },
            { "type": "code", "lang": "javascript", "title": "二分查找：左闭右开模板（可直接运行）",
              "code": `// 标准二分——在有序数组找 target 下标，找不到返回 -1
function bisect(nums, target) {
  let lo = 0, hi = nums.length;          // 左闭右开 [lo, hi)
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) lo = mid + 1;
    else hi = mid;
  }
  return -1;
}

// 找‘左边界’：第一个 >= target 的下标（很多题要这个）
function lowerBound(nums, target) {
  let lo = 0, hi = nums.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (nums[mid] >= target) hi = mid;   // mid 保留
    else lo = mid + 1;
  }
  return lo;                             // 可能是插入位置
}

const a = [1, 3, 3, 5, 7, 9];
console.log('bisect(5):', bisect(a, 5));
console.log('lowerBound(3):', lowerBound(a, 3)); // 第一个>=3的下标=1
console.log('lowerBound(6):', lowerBound(a, 6)); // 插入位置=4` },
            { "type": "info", "title": "写二分的两个心法", "text": "① 区间开闭统一：全程用左闭右开 <code.inline>[lo, hi)</code.inline>，终止条件 <code.inline>lo < hi</code.inline>；② 处理 <code.inline>nums[mid] == target</code.inline> 时，找左边界就 <code.inline>hi = mid</code.inline>（让右边靠过来），找右边界就 <code.inline>lo = mid + 1</code.inline>。模板记熟，笔试不慌。" },
            { "type": "keypoints", "items": ["归并：分治+合并，稳定，O(n log n)", "快排：随机主元+原地交换，平均 O(n log n)", "二分关键在开闭区间统一与边界分类", "lowerBound/upperBound 是很多难题的最小积木"] }
          ]
        },
        {
          "id": "deep-algo-2-tree-heap",
          "title": "二叉树、二叉搜索树与堆",
          "summary": "递归遍历、BST 性质、优先队列与堆的妙用。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "树几乎绕不开**递归**：前/中/后序遍历就是三种『先访问自己还是先访问孩子』的顺序。**二叉搜索树（BST）** 的关键性质是中序遍历有序；**堆**则是能 O(1) 拿最值、O(log n) 增删的数据结构，是实现优先队列、Top-K 问题的利器。" },
            { "type": "code", "lang": "javascript", "title": "二叉树遍历：递归三板斧（可直接运行）",
              "code": `// 用对象模拟二叉树节点
const root = {
  val: 1,
  left: { val: 2, left: { val: 4 }, right: null },
  right: { val: 3, left: { val: 5 }, right: null },
};

function preorder(n, out = []) {     // 前序：根->左->右
  if (!n) return out;
  out.push(n.val);
  preorder(n.left, out);
  preorder(n.right, out);
  return out;
}
function inorder(n, out = []) {      // 中序：左->根->右
  if (!n) return out;
  inorder(n.left, out);
  out.push(n.val);
  inorder(n.right, out);
  return out;
}
function postorder(n, out = []) {    // 后序：左->右->根
  if (!n) return out;
  postorder(n.left, out);
  postorder(n.right, out);
  out.push(n.val);
  return out;
}

console.log('前序:', preorder(root));
console.log('中序:', inorder(root));
console.log('后序:', postorder(root));` },
            { "type": "code", "lang": "javascript", "title": "二叉搜索树：插入与查找（可直接运行）",
              "code": `// BST：左子 < 根 < 右子；中序遍历结果就是排好序的
function insert(root, val) {
  if (!root) return { val, left: null, right: null };
  if (val < root.val) root.left = insert(root.left, val);
  else if (val > root.val) root.right = insert(root.right, val);
  return root;   // 相等则忽略（约束要求唯一）
}
function search(root, val) {
  if (!root || root.val === val) return root;
  return val < root.val ? search(root.left, val) : search(root.right, val);
}

// BST 中序遍历结果是升序（本块自带实现，方便单独运行观察）
function inorder(n, out = []) {
  if (!n) return out;
  inorder(n.left, out);
  out.push(n.val);
  inorder(n.right, out);
  return out;
}

let bst = null;
[5, 3, 7, 2, 4, 8].forEach((v) => (bst = insert(bst, v)));
console.log('查找 4:', search(bst, 4)?.val ?? '未找到');
console.log('查找 9:', search(bst, 9)?.val ?? '未找到');
console.log('中序遍历(应升序):', inorder(bst));
// 平衡的 BST 增删查都是 O(log n)；退化为链则 O(n)` },
            { "type": "info", "title": "堆为什么能玩转 Top-K", "text": "找『最大 k 个数』维护大小为 k 的小顶堆：新元素比堆顶小就跳过，大就把堆顶弹出再入堆，最终堆里就是最大的 k 个。复杂度 O(n log k)，比全排序 O(n log n) 快很多，还能边来边算。" },
            { "type": "keypoints", "items": ["递归遍历三顺序：前/中/后看『自己先还是孩子先』", "BST 中序有序，插入查找 O(log n)（平衡时）", "堆：O(1) 拿最值、O(log n) 增删，做 Top-K/优先队列", "堆原型是数组，父=(i-1)/2、左右子=2i+1/2i+2"] }
          ]
        },
        {
          "id": "deep-algo-3-dp",
          "title": "动态规划：从递归到状态表",
          "summary": "重叠子问题、状态转移方程、记忆化与递推。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "动态规划（DP）秒杀很多看似无解的题。三句话：**定义状态**（dp[i] 表示什么）、**写转移方程**（dp[i] 由哪些前序状态推出）、**定初值**。核心思想是：把大问题拆成重叠的小问题，每个小问题只算一次。" },
            { "type": "code", "lang": "javascript", "title": "爬楼梯：从暴力递归到 DP（可直接运行）",
              "code": `// 题目：一次爬 1 或 2 阶，爬到 n 阶有几种爬法
// 递推：f(n) = f(n-1) + f(n-2)，f(1)=1, f(2)=2

// ① 记忆化递归（自顶而下）：避免重复计算
const memo = {};
function climb(n) {
  if (n <= 2) return n;
  if (memo[n] !== undefined) return memo[n];
  memo[n] = climb(n - 1) + climb(n - 2);
  return memo[n];
}
console.log('f(10) 记忆化:', climb(10));

// ② 滚动数组递推（自底而上）——空间 O(1)
function climbDP(n) {
  if (n <= 2) return n;
  let a = 1, b = 2;
  for (let i = 3; i <= n; i++) {
    const c = a + b;   // 只关心前两个，滚动更新
    a = b;
    b = c;
  }
  return b;
}
console.log('f(10) DP:', climbDP(10));
console.log('f(30):', climbDP(30));` },
            { "type": "code", "lang": "python", "title": "0-1 背包：经典 DP（可直接运行）",
              "code": `# 容量 W=5，物品(重量,价值)：
# [2,3] [3,4] [4,5] [5,6]，最多装多少价值？
W = 5
w = [0, 2, 3, 4, 5]   # 下标 1 起，凑 0 占位
v = [0, 3, 4, 5, 6]
n = len(w) - 1

# dp[j] = 容量为 j 时能装的最大价值
# 一维滚动：倒序遍历防同一个物品被重复选
dp = [0] * (W + 1)
for i in range(1, n + 1):
    for j in range(W, w[i] - 1, -1):   # 注意倒序！
        dp[j] = max(dp[j], dp[j - w[i]] + v[i])

print('0-1 背包最大价值:', dp[W])
# 为什么倒序？一维 dp 正序会让 dp[j-w[i]] 已被本物品更新过，造成重复选。
# 倒序保证每个物品最多用一次。` },
            { "type": "info", "title": "怎么识别该用 DP", "text": "看到『求最值、计数、是否存在某种方案』+『每一步的最优取决于之前的选择』+『问题规模能被拆小』→ 先想 DP。写题顺序固定：暴力递归 → 记忆化 → 递推填表 → 滚动数组压缩空间。" },
            { "type": "warn", "title": "经典坑", "text": "① 忘记初始化边界（如 dp[0]）；② 一维滚动忘了倒序导致重复选物；③ 转移方程写反方向。多数 DP bug 都出在这三处，逐项排查即可。" },
            { "type": "keypoints", "items": ["DP 三文：状态定义 / 转移方程 / 初值", "记忆化递归 = 递归 + 缓存，等价于递推", "滚动数组把 O(n) 空间压到 O(1)", "0-1 背包一维滚动必须倒序遍历"] }
          ]
        },
        {
          "id": "deep-algo-4-graph-two-pointer",
          "title": "图、双指针与滑动窗口",
          "summary": "BFS/DFS、环检测，以及高频的双指针与滑动窗口套路。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "图题围绕**遍历**：DFS 用栈/递归，BFS 用队列（天然给出最短步数）。此外笔试秒杀题常考**双指针**（有序数组）与**滑动窗口**（子串/子数组的最长/最小问题）。这些是可复制的套路，练熟就稳。" },
            { "type": "code", "lang": "javascript", "title": "BFS 最短路径：邻接表的层序遍历（可直接运行）",
              "code": `// 图：0-1, 0-2, 1-3, 2-3, 3-4
const graph = { 0: [1, 2], 1: [0, 3], 2: [0, 3], 3: [1, 2, 4], 4: [3] };

function bfsShortest(start, target) {
  const queue = [start];
  const seen = new Set([start]);      // 防回头
  let dist = 0;
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {  // 按层扩散
      const cur = queue.shift();
      if (cur === target) return dist;
      for (const nb of graph[cur] || []) {
        if (!seen.has(nb)) { seen.add(nb); queue.push(nb); }
      }
    }
    dist++;
  }
  return -1;  // 不可达
}
console.log('0 到 4 最短边数:', bfsShortest(0, 4));  // 2

// DFS 就是换顺序：递归进入每个邻居（此处省略）；
// BFS 用于最短步数，DFS 用于判断连通性/做题串逻辑。` },
            { "type": "code", "lang": "javascript", "title": "双指针：有序数组两数和（可直接运行）",
              "code": `// 在升序数组里找两数之和等于 target 的下标
function twoSumSorted(nums, target) {
  let lo = 0, hi = nums.length - 1;
  while (lo < hi) {
    const s = nums[lo] + nums[hi];
    if (s === target) return [lo, hi];
    if (s < target) lo++;   // 和太小，左指针右移
    else hi--;               // 和太大，右指针左移
  }
  return null;
}
console.log('两数之和:', twoSumSorted([1, 2, 3, 6, 8, 11], 10)); // [1,4]` },
            { "type": "code", "lang": "javascript", "title": "滑动窗口：最长无重复字符子串（可直接运行）",
              "code": `// 最长不含重复字符的子串长度（LeetCode 3）
function lengthOfLongest(s) {
  const seen = new Set();
  let left = 0, maxLen = 0;
  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);    // 收缩左边界直到无重复
      left++;
    }
    seen.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
console.log('abcabcbb 最长无重复:', lengthOfLongest('abcabcbb')); // 3

// 滑动窗口套路：右指针扩张 + 条件破坏时收缩左指针 + 记录最优。` },
            { "type": "keypoints", "items": ["BFS 层扩散求最短步数，DFS 递归做全解 / 环检测", "双指针适用于有序数组，一路相向收敛", "滑动窗口 = 右扩 + 左缩 + 记录最优，解决子串最值", "三个套路都能压到 O(n)，是强面试加分项"] }
          ]
        }
      ]
    },    /* ================= 操作系统进阶 ================= */
    {
      "id": "deep-os",
      "name": "操作系统进阶",
      "icon": "OS",
      "tagline": "进程线程、内存虚拟化、锁与死锁——底层的世界观。",
      "intro": "操作系统是『软件最底层的地基』。理解进程/线程如何并发、虚拟内存如何骗过进程、锁与死锁如何发生，才能写出既快又稳的并发程序。概念类以讲解为主（这类无法在浏览器沙箱真实运行，标注『说明型』，可用电脑本地运行示意代码）。",
      "meta": { "难度": "进阶", "场景": "系统底子" },
      "lessons": [
        {
          "id": "deep-os-1-process-thread",
          "title": "进程、线程与并发模型",
          "summary": "区别、上下文切换、用户态与内核态、线程池。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "**进程**是资源分配的基本单位（有独立内存/文件），**线程**是 CPU 调度的基本单位（同一进程内共享内存，切换更轻）。GIL 让 Python 多线程对 CPU 密集无效，但多进程可以；Node 单线程靠事件循环加异步 IO。选对并发模型，比堆线程数更重要。" },
            { "type": "code", "lang": "python", "title": "多进程 vs 多线程的差别（说明型，本地运行）",
              "code": `# 说明型：需真实多核/IO 才能看到差异，站内沙箱仅供阅读
# 建议在本地 Python 环境运行体会

from multiprocessing import Process
import threading, time

def cpu_busy():
    s = 0
    for _ in range(2_000_000):   # CPU 密集型
        s += 1

def io_sleep():
    time.sleep(1)                # IO 密集型

if __name__ == '__main__':
    # CPU 密集：Python 受 GIL 影响，多线程不加速
    start = time.time()
    threads = [threading.Thread(target=cpu_busy) for _ in range(4)]
    [t.start() for t in threads]; [t.join() for t in threads]
    print('4 线程做 CPU 密集:', round(time.time() - start, 2), 's（GIL 下几乎不并行）')

    # IO 密集：多线程/异步能明显提速（把时间花在等待上）
    start = time.time()
    threads = [threading.Thread(target=io_sleep) for _ in range(4)]
    [t.start() for t in threads]; [t.join() for t in threads]
    print('4 线程做 IO 等待: ', round(time.time() - start, 2), 's（接近 1s，并行等待）')` },
            { "type": "info", "title": "用户态 vs 内核态", "text": "操作系统把 CPU 分成**内核态**（可访问硬件、受保护）与**用户态**（应用运行处、受限）。应用要读写文件、发网络包，必须通过**系统调用**陷入内核。一次『系统调用』需要用户态→内核态→返回的上下文切换，是高并发优化的隐形成本。" },
            { "type": "keypoints", "items": ["进程=资源单位，线程=调度单位，线程切换更轻", "GIL 让 Python 多线程难并行 CPU，多进程可以", "Node 单线程+事件循环适合 IO 密集异步", "系统调用伴随用户态/内核态切换，是并发成本之一"] }
          ]
        },
        {
          "id": "deep-os-2-memory",
          "title": "虚拟内存与分页",
          "summary": "地址空间、分页、页表、缺页中断与局部性。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "每个进程都以为自己独占一片连续的内存——这是**虚拟内存**在骗人。它把虚拟地址通过**页表**映射到物理页，不常用的页还能被换出到磁盘（交换区）。好处：隔离（进程互不影响）、安全、能跑比物理内存更大的程序。" },
            { "type": "code", "lang": "python", "title": "用数组模拟虚拟→物理映射（说明型，本地运行）",
              "code": `# 说明型：用纯 Python 模拟分页地址转换的‘思路’，站内只读

# 假设页大小 4096 字节，页表记录 虚拟页 -> 物理帧
PAGE_SIZE = 4096
page_table = {0: 7, 1: 3, 2: 9, 3: 1}   # 虚拟页 -> 物理帧

def translate(virt_addr):
    vp = virt_addr // PAGE_SIZE    # 高几位=虚拟页号
    offset = virt_addr % PAGE_SIZE # 低位=页内偏移
    if vp not in page_table:
        raise Exception("缺页！触发缺页中断，从磁盘换入")
    phys = page_table[vp] * PAGE_SIZE + offset
    return vp, page_table[vp], phys

for addr in [0, 8192, 15000]:
    vp, pf, pa = translate(addr)
    print(f"虚拟地址 {addr} -> 虚拟页 {vp} -> 物理帧 {pf} -> 物理地址 {pa}")

# 两个进程各自的虚拟地址 0x.. 可以映射到不同物理帧 → 彼此隔离。` },
            { "type": "info", "title": "局部性与缺页", "text": "程序访问内存是**局部性**的：刚访问的地址附近很快还会被访问（时间/空间局部性）。缺页中断把磁盘页调入内存很贵（毫秒级），所以现代 OS 用多级页表 + TLB 快表缓存 + LRU 淘汰来降低缺页率。" },
            { "type": "keypoints", "items": ["虚拟内存：每进程独立地址空间，经页表映射到物理页", "分页隔离了进程也让内存可超卖到磁盘", "缺页中断很贵，靠局部性 + TLB + LRU 优化", "虚拟地址 = 页号 + 页内偏移，页表完成映射"] }
          ]
        },
        {
          "id": "deep-os-3-lock-deadlock",
          "title": "锁、同步与死锁",
          "summary": "竞争条件、互斥锁、信号量、死锁四条件与预防。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "多个线程同时改共享变量，结果取决于谁先谁后，这叫**竞争条件**，可能计算出错。解决办法是加**锁**（互斥/信号量）保证临界区互斥。但锁用多又会引入**死锁**——大家都卡在等对方占有的资源上。" },
            { "type": "code", "lang": "python", "title": "竞争条件 + 用锁修复（说明型，本地运行）",
              "code": `# 说明型：需真多线程才复现，站内只读；本地跑看结果
import threading

counter = 0
lock = threading.Lock()

def add_without_lock():
    global counter
    for _ in range(100000):
        counter += 1          # 读-改-写非原子，多线程会丢更新

def add_with_lock():
    global counter
    for _ in range(100000):
        with lock:            # 临界区互斥
            counter += 1

counter = 0
threads = [threading.Thread(target=add_without_lock) for _ in range(10)]
[t.start() for t in threads]; [t.join() for t in threads]
print('不加锁 10 线程 x10万 累加 =', counter, '（常小于 1000000）')

counter = 0
threads = [threading.Thread(target=add_with_lock) for _ in range(10)]
[t.start() for t in threads]; [t.join() for t in threads]
print('加锁   10 线程 x10万 累加 =', counter, '（正确 = 1000000）')` },
            { "type": "table", "head": ["死锁四条件", "含义", "破坏手段"], "rows": [["互斥", "资源同时只能一个进程用", "（一般保留）"], ["占有并等待", "手里握着资源又去要新的", "一次性申请全部资源"], ["不可剥夺", "已拿的资源不能被强抢", "可剥夺：超时释放"], ["循环等待", "A 等 B、B 等 A 成环", "按固定顺序加锁"]] },
            { "type": "info", "title": "工程上的加锁纪律", "text": "① 把所有涉及同一组资源的锁**按一致的顺序获取**，从源头断掉循环等待；② 加锁尽量缩小临界区（只包必要的行）；③ 用库层面的并发原语（信号量限流、读写锁、乐观锁/版本号）代替手撸锁；④ 高并发写场景优先考虑无锁结构或数据库事务。" },
            { "type": "keypoints", "items": ["竞争条件：并发改共享变量结果不确定，必须同步", "锁保证临界区互斥；信号量还能限流", "死锁四条件：互斥/占有等待/不可剥夺/循环等待", "固定顺序加锁 + 缩小临界区是工程标配"] }
          ]
        }
      ]
    },
    /* ================= 计算机网络进阶 ================= */
    {
      "id": "deep-net",
      "name": "计算机网络进阶",
      "icon": "网",
      "tagline": "TCP/IP、HTTP/HTTPS、DNS 与 CDN——上网背后的协议。",
      "intro": "面试与排障都绕不开的『网络』概念：TCP 三次握手/四次挥手、可靠性如何保证、HTTP 从 1.1 到 2/3 的演进、HTTPS 加密链路、DNS 解析到一个请求怎么被 CDN 加速。这部分是概念讲解为主，配少量可运行的示意代码。",
      "meta": { "难度": "进阶", "场景": "网络原理" },
      "lessons": [
        {
          "id": "deep-net-1-tcp",
          "title": "TCP：三次握手与可靠性",
          "summary": "握手/挥手、序列号、确认重传、流量与拥塞控制。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "TCP 是**可靠、面向连接**的字节流协议。建立连接要**三次握手**（SYN→SYN+ACK→ACK，同步双方序列号，避免过期连接），断开要**四次挥手**（FIN×2 + ACK×2，因为 TCP 是全双工的，两端各自独立关闭）。" },
            { "type": "code", "lang": "text", "title": "三次握手 / 四次挥手流程",
              "code": `三次握手（建立连接）:
  Client ── SYN(seq=x) ──────────▶ Server   # 我要连接，带我的起始序号 x
  Client ◀─ SYN+ACK(seq=y,ack=x+1) ── Server # 好，这是我的序号 y，确认你的 x
  Client ── ACK(ack=y+1) ──────────▶ Server   # 确认你的 y，连接建立
  关键：双方都确认了彼此的收发能力；同步初始序号。

四次挥手（断开连接，全双工两端各自关）:
  Client ── FIN ──▶ Server     # A 不再发数据
  Client ◀─ ACK ──── Server    # B 确认，但 B 还能继续发（半关闭）
  Client ◀─ FIN ──── Server    # B 发完了，也请求关闭
  Client ── ACK ──▶ Server     # A 确认，连接 (延迟2MSL) 关闭` },
            { "type": "info", "title": "TCP 怎么保证『可靠』", "text": "① **序号+确认**：每节字节有 seq，接收方回 ack 说明收到；② **超时重传**：等不到 ack 就重发；③ **滑动窗口**：控制发送量不致淹没接收方（流量控制）；④ **拥塞控制**：慢启动/拥塞避免/快重传，根据网络状况动态调节。这四件套缺一不可。" },
            { "type": "keypoints", "items": ["三次握手同步双方序号、防过期连接；四次挥手因全双工各关一次", "可靠性：序号确认 + 超时重传 + 滑动窗口 + 拥塞控制", "流量控制防接收方被淹没；拥塞控制防网络拥塞", "TCP 面向字节流、可靠；UDP 无连接、尽力而为、更低延迟"] }
          ]
        },
        {
          "id": "deep-net-2-http-https",
          "title": "HTTP/HTTPS：从 1.1 到 3",
          "summary": "请求响应模型、状态码、HTTPS 加密链路与各版本演进。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "HTTP 是应用层协议，基于『请求-响应』。**1.1** 用文本头、支持 keep-alive 与管线化；**2.0** 二进制分帧、多路复用、头部压缩、服务器推送，极大提升并发；**3.0 (QUIC)** 基于 UDP 实现可靠性，把握手和 TLS 合并、连接迁移更强。" },
            { "type": "code", "lang": "javascript", "title": "一次 HTTP 请求：状态从 URL 到响应（浏览器可运行）",
              "code": `// 用 fetch 发一次真实 GET，看状态码与头（浏览器可用）
async function demo(url) {
  const res = await fetch(url);        // 发出请求
  const text = await res.text();
  console.log('状态码:', res.status, res.ok ? '(OK)' : '(失败)');
  console.log('Content-Type:', res.headers.get('content-type'));
  console.log('cache-control:', res.headers.get('cache-control'));
  console.log('响应前 80 字:', text.slice(0, 80));
}
// demo('https://example.com')  —— 取消注释以运行

// 状态码速记：
// 2xx 成功 | 3xx 重定向 | 4xx 客户端错(400参数/401未登录/403禁止/404不存在) | 5xx 服务端错
console.log('curl 的 200/301/404 就是这么来的')` },
            { "type": "info", "title": "HTTPS 为什么安全", "text": "HTTPS = HTTP + TLS。三个目标：① **加密**（对称密钥加密数据，防窃听）；② **身份认证**（服务器证书 + 客户端校验 CA 签名，防伪造）；③ **完整性**（消息摘要防篡改）。密钥协商用非对称（RSA/ECDHE），数据加密用对称（AES），兼顾安全与速度。" },
            { "type": "keypoints", "items": ["HTTP 1.1 文本/keep-alive；2.0 二进制分帧+多路复用+头压缩", "3.0/QUIC 基于 UDP，握手快、连接迁移强", "状态码：2xx/3xx/4xx/5xx 语义分层", "HTTPS=TLS：加密+证书认证+完整性，非对称协商、对称加密数据"] }
          ]
        },
        {
          "id": "deep-net-3-dns-cdn",
          "title": "从 DNS 到 CDN：一个域名的访问之旅",
          "summary": "DNS 解析层级、缓存、CDN 就近分发与 HTTPS。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "你在浏览器输入域名，到看到页面，中间发生了：**DNS 解析**（网站域名→IP）→ **建立连接** → **CDN 就近分发静态资源** → **请求真正源站**。DNS 用分层递归：根→顶级(com)→权威服务器，逐级查到 IP，并用多级缓存加速。" },
            { "type": "code", "lang": "text", "title": "DNS 解析完整流程",
              "code": `浏览器输入 www.example.com
  ① 查本地缓存（浏览器/OS）→ 命中则直接用
  ② 查 hosts / 本地 DNS（路由器）缓存 → 命中则返回
  ③ 未命中 → 本地 DNS 递归向上查询:
     向根服务器问 .com 在哪 → 向 .com 顶级域问 example.com
     → 向 example.com 权威服务器要 www 的 IP → 返回并缓存
  ④ 浏览器拿到 IP，开启 TCP(443) → TLS 握手 → HTTP 请求

CDN 介入后：example.com 解析结果被 CNAME 到 CDN 节点的智能 DNS，
再按用户地理位置返回最近节点的 IP，静态资源从附近缓存分发 → 首屏更快的原理。` },
            { "type": "table", "head": ["DNS 记录", "作用", "使用场景"], "rows": [["A / AAAA", "域名→IPv4 / IPv6 地址", "直接指向服务器"], ["CNAME", "别名指向另一域名", "指向 CDN / 云厂商域名"], ["MX", "邮件交换记录", "邮箱指向邮件服务器"], ["NS", "权威服务器记录", "授权某域名由谁解析"]] },
            { "type": "info", "title": "CDN 到底做了什么", "text": "CDN 把静态资源（图片/JS/CSS/视频）缓存到全球边缘节点，用户**就近**获取，避免跨地域长链路。它和源站配合：HTML 走源站（动态），静态资源走 CDN。配置好 Cache-Control/ETag 让缓存正确命中，是提升首屏的关键。" },
            { "type": "keypoints", "items": ["DNS 分层递归：根→顶级→权威，靠多级缓存提速", "CNAME 指向 CDN，配合智能 DNS 就近返回节点 IP", "CDN 就近缓存静态资源，动态 HTML 走源站", "Cache-Control/ETag 决定缓存命中率，直接影响 Web 性能"] }
          ]
        }
      ]
    },
    /* ================= 数据库原理进阶 ================= */
    {
      "id": "deep-db",
      "name": "数据库原理进阶",
      "icon": "库",
      "tagline": "范式、索引、事务与锁——从『会写 SQL』到『懂原理』。",
      "intro": "前面已有 SQL 基础语法，这里补**原理**：关系模型与范式、索引（B+ 树）怎么让查询变快、事务的 ACID 与隔离级别、锁与并发控制。SQL 类代码可直接在站内 SQL 在线环境运行，原理类配合讲解。",
      "meta": { "难度": "进阶", "场景": "数据库原理" },
      "lessons": [
        {
          "id": "deep-db-1-normal-form",
          "title": "关系模型与范式设计",
          "summary": "1NF~3NF、主外键、为什么避免冗余与更新异常。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "范式是**消除数据冗余与更新异常**的设计准则。1NF 要求列不可再分；2NF 要求非主属性完全依赖主键；3NF 要求非主属性不传递依赖。拆表的本质是：**每个表只存一件事**，通过外键关联。" },
            { "type": "table", "head": ["范式", "核心要求", "常见反例"], "rows": [["1NF", "列原子不可再分", "一个字段存多个手机号"], ["2NF", "非主键完全依赖主键", "订单表同时存订单和商品（部分依赖）"], ["3NF", "非主键不传递依赖", "订单表存了员工所在城市（传到订单）"], ["BCNF", "每个决定因素都是候选键", "高并发系统的进一步约束"]] },
            { "type": "code", "lang": "sql", "title": "规范化示例：拆成订单与用户两张表（可直接运行）",
              "code": `-- 反例：一张表里冗余用户昵称/地址（订单多 → 用户信息反复抄）
CREATE TABLE bad_orders (
  id INT PRIMARY KEY,
  uid INT, user_name VARCHAR(50),   -- 冗余，用户改名要改好多行
  addr VARCHAR(100),                -- 传递依赖
  product VARCHAR(50), amount DECIMAL(10,2)
);

-- 规范化到 3NF：用户信息单独一张表，订单只存外键
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  addr VARCHAR(100)
);
CREATE TABLE orders (
  id INT PRIMARY KEY,
  uid INT REFERENCES users(id),     -- 外键
  product VARCHAR(50),
  amount DECIMAL(10,2)
);

-- 好处：用户改了名，只需 update users 一行；无冗余、无更新异常。
-- 代价：查询（业务常见）要 join。所以别教条，读多写少的场景可适度反范式。` },
            { "type": "info", "title": "先按业务语义，再谈范式", "text": "范式是理论下限，实务讲究**取舍**：读写比例、查询频率、join 成本都是变量。读非常频繁且用户字段几乎不变时，适度冗余能少一次 join。设计原则永远是『减少冗余 + 避免更新异常』，遇到极端读场景再权衡。" },
            { "type": "keypoints", "items": ["1NF 原子、2NF 完全依赖、3NF 无传递依赖", "目标：去冗余、避更新异常，每个表只存一件事", "外键/主键是关系模型的粘合剂", "实务按读多/写多权衡，可适度反范式"] }
          ]
        },
        {
          "id": "deep-db-2-index",
          "title": "索引：B+ 树如何让查询变快",
          "summary": "聚簇/非聚簇索引、B+ 树、最左前缀、Explain 分析。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "全表扫描 O(n)，加索引后用 **B+ 树**把查询压到 O(log n)。B+ 树特点：内节点只存键、叶子存数据并链成有序链表，特别适合范围查询与磁盘「一页一读」。InnoDB 主键是**聚簇索引**（叶子直接存整行），普通索引叶子存主键值（需要回表）。" },
            { "type": "code", "lang": "sql", "title": "创建索引 + 用 EXPLAIN 看扫描方式（可直接运行）",
              "code": `CREATE TABLE users (
  id INT PRIMARY KEY,          -- 聚簇索引，叶子存整行
  email VARCHAR(100),
  city VARCHAR(50),
  age INT
);

-- 普通索引：叶子存主键 id，查询命中后需回表取整行
CREATE INDEX idx_city ON users(city);

-- 复合索引（最左前缀）：city 在前
CREATE INDEX idx_city_age ON users(city, age);

-- EXPLAIN 看执行计划：
EXPLAIN SELECT * FROM users WHERE city = '北京';
-- 关注 key（用到的索引）、type（const/ref/range/index/all）、rows（扫多少行）
-- type=ALL 表示全表扫描，是慢查询的首要信号。

-- 注意：查询条件必须包含复合索引最左列才会命中（最左前缀原则）
EXPLAIN SELECT * FROM users WHERE age = 25;
-- 只有 age 条件，无法使用 (city,age) 索引 → 可能全表扫。` },
            { "type": "info", "title": "给哪些列建索引", "text": "① 高频出现在 WHERE / JOIN 的列；② 区分度高的列（性别区分度低，索引意义小）；③ 别在每个列都建索引——每个索引都占磁盘且拖慢 INSERT/UPDATE；④ 尽量用**覆盖索引**（select 的列都在索引里）避免回表。目标：让慢查询的 type 从 <code.inline>ALL</code.inline> 变成 <code.inline>ref/range/const</code.inline>。" },
            { "type": "warn", "title": "几个常见的索引失效", "text": "① 对索引列做函数运算或隐式类型转换；② <code.inline>LIKE '%xx'</code.inline>前导通配符；③ 用 <code.inline>OR</code.inline> 连接且有一侧无索引；④ 复合索引没按最左前缀。看到慢查询先 Explain，命中这些就懂为什么快不起来。" },
            { "type": "keypoints", "items": ["B+ 树 O(log n) 查、叶子有序链表利于范围查询", "聚簇索引叶子存整行，二级索引叶子存主键需回表", "复合索引遵循最左前缀", "Explain 看 type/rows/key，ALL=全表慢查询预警"] }
          ]
        },
        {
          "id": "deep-db-3-transaction",
          "title": "事务、ACID 与隔离级别",
          "summary": "原子/一致/隔离/持久，脏读不可重复读幻读，MVCC 与锁。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "事务打包一组操作要么全成要么全废，四特性 **ACID**：原子性（Atomicity）、一致性（Consistency）、隔离性（Isolation）、持久性（Durability）。隔离性有层级权衡，从宽松到严格：读未提交 → 读已提交 → 可重复读 → 串行化，逐级解决脏读/不可重复读/幻读。" },
            { "type": "table", "head": ["隔离级别", "脏读", "不可重复读", "幻读", "实现手段"], "rows": [["读未提交", "有", "有", "有", "几乎不锁"], ["读已提交", "无", "有", "有", "行锁（快照）"], ["可重复读(MySQL默认)", "无", "无", "有(间隙锁解决)", "MVCC"], ["串行化", "无", "无", "无", "全程加锁"]] },
            { "type": "code", "lang": "sql", "title": "事务与 MVCC 快照读（可直接运行）",
              "code": `CREATE TABLE accounts (
  id INT PRIMARY KEY,
  balance INT
);
INSERT INTO accounts VALUES (1, 1000), (2, 1000);

-- 转账：必须原子，要么都成功要么都回滚
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
--   （若第2步出错）
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;   -- 出错则 ROLLBACK 回滚，保证总金额不变

-- 上面的 select 是普通读，InnoDB 用 MVCC 快照：
-- 读到的是一致性快照的旧版本，不加锁，与写不互斥 → 支持高并发。
-- 可重复读下，同一事务两次 select 结果一致，靠快照实现。` },
            { "type": "info", "title": "MVCC 与版本链", "text": "InnoDB 的 <code.inline>可重复读</code.inline> 靠 **MVCC（多版本并发控制）**：每行记录携带事务版本号，读操作读『快照』，写操作加锁并产生新版本 → 读写不互相阻塞，大幅提升并发。典型写写冲突的场景再配合行锁/间隙锁防幻读。" },
            { "type": "keypoints", "items": ["ACID：原子/一致/隔离/持久四特性", "隔离级别从宽到严：读未提交→读已提交→可重复读→串行化", "脏读/不可重复读/幻读逐级被解决", "MVCC 快照读+行锁，让读写并发不打结"] }
          ]
        }
      ]
    }
  ]
};
