/* ============================================================
   计算机知识库 · 数据：前端全栈工程
   schema: { id, name, icon, description, children:[{id,name,icon,tagline,intro,meta,lessons:[{id,title,summary,difficulty,blocks,templates}]}] }
   block.type: p | h | h3 | list(ordered?) | tip | info | warn | danger | keypoints | code | table
   ============================================================ */
window.CS_FRONTEND_ENG = {
  "id": "cs-frontend-eng",
  "name": "前端全栈工程",
  "icon": "栈",
  "description": "从『会用一点 JS』到『能交付一个线上全栈产品』的工程能力：React 与 Vue 两大框架、前端工程化与构建、状态管理、SPA 路由，再到后端 API 工程与数据库，最后用一个全栈项目把他们串起来。这是现代前端工程师的完整必修课。",
  "children": [
    /* ================= React ================= */
    {
      "id": "fe-react",
      "name": "前端框架：React",
      "icon": "Rc",
      "tagline": "用『组件』拼 UI，用『数据驱动』更新页面。",
      "intro": "React 三件事：组件化（把界面拆成可复用的函数）、数据驱动（状态变了界面自动更新）、单向数据流（父传子用 props，组件内用 state）。掌握这三点，就握住了 React 的核心。",
      "meta": { "难度": "进阶", "场景": "前端框架" },
      "lessons": [
        {
          "id": "react-1-component",
          "title": "React 组件化与 JSX",
          "summary": "组件、props、state，数据驱动界面更新的第一课。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "React 把页面拆成一个个『组件』——返回一段 UI 的 JS 函数。函数名大写，接受 props（来自父级的数据），内在 state（自己的状态）。**state 一变，界面自动重渲染**，你不用手动操作 DOM。" },
            { "type": "code", "lang": "javascript", "title": "React 组件三分法（本地用 Vite 运行）",
              "code": "// 安装并运行：npm create vite@latest my-app && cd my-app\n// then: npm i && npm run dev\n\n// 1) 组件 = 一个返回 JSX 的函数（大写开头）\nfunction Card({ title, children }) {   // props 解构\n  return <div className=\"card\">{title}: {children}</div>;\n}\n\n// 2) useState：组件的『本地状态』，改了界面自动更新\nimport { useState } from \"react\";\nfunction Counter() {\n  const [count, setCount] = useState(0);   // [值, 改值函数]\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      点了 {count} 次\n    </button>\n  );\n}\n\n// 3) 组装\nfunction App() {\n  return (\n    <>\n      <Card title=\"计数器\"><Counter /></Card>\n    </>\n  );\n}\n\nexport default App;" },
            { "type": "code", "lang": "javascript", "title": "条件渲染与列表（纯 JS 概念，可运行）",
              "code": "// React 的 JSX 不能直接跑在浏览器，但下面的逻辑等价于任何框架\nconst todos = [\n  { id: 1, text: \"学 React\", done: true },\n  { id: 2, text: \"学 Vue\", done: false },\n];\n\n// 列表渲染：map 出每一项（记得给 key）\nconst list = todos.map((t) => `${t.id}: ${t.done ? \"✅\" : \"⬜\"} ${t.text}`);\nconsole.log(\"列表渲染结果:\");\nlist.forEach((s) => console.log(s));\n\n// 条件渲染：三元判断\nconst doneCount = todos.filter((t) => t.done).length;\nconsole.log(doneCount === todos.length ? \"全部完成 🎉\" : \"还有未完成的\");" },
            { "type": "info", "title": "key 为什么必须", "text": "列表每一项都要给唯一 <code.inline>key</code.inline>。React 靠它判断『哪些项新增/删除/移动』来复用 DOM。用数组下标当 key 会导致删除中间项时状态错乱——这是新手高频 bug。" },
            { "type": "warn", "title": "讲真，React 代码要本地跑", "text": "JSX 需要 Babel/构建器转译成 JS，纯浏览器沙箱跑不了。这里用『纯逻辑等价版』演示思想，真正的组件代码请按代码块顶部提示用 Vite 本地运行体验。" },
            { "type": "keypoints", "items": ["组件 = 大写开头的 UI 函数；props 父传子、state 组件内", "state 一变界面自动更新，无需手动改 DOM", "列表用 map + 唯一 key；条件用三元/与运算", "父子单向数据流，子通过回调通知父"] }
          ]
        },
        {
          "id": "react-2-hooks",
          "title": "React Hooks 实战",
          "summary": "useState/useEffect/useRef/useMemo，摆脱 class 的现代写法。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "Hooks 让你在函数组件里『挂』能力：<code.inline>useState</code.inline> 存状态、<code.inline>useEffect</code.inline> 处理副作用（请求/定时器/订阅）、<code.inline>useRef</code.inline> 引用不渲染的值或 DOM、<code.inline>useMemo</code.inline> 缓存昂贵计算。它们是现代 React 的主力。" },
            { "type": "code", "lang": "javascript", "title": "四大基础 Hook 用法（本地 Vite 运行）",
              "code": "import { useState, useEffect, useRef, useMemo } from \"react\";\n\nexport default function Demo() {\n  const [query, setQuery] = useState(\"\");        // 状态\n  const inputRef = useRef(null);                  // 引 DOM\n\n  // 副作用：query 一变就执行（依赖数组 [query]）\n  useEffect(() => {\n    // 模拟请求\假：这里只是示意\n    console.log(\"搜索\", query);\n  }, [query]);\n\n  // 缓存：过滤公式仅当 query/todos 变化才重算\n  const filtered = useMemo(() => todos.filter(t => t.includes(query)), [query]);\n\n  return (\n    <input\n      ref={inputRef}\n      value={query}\n      onChange={e => setQuery(e.target.value)}\n    />\n  );\n}" },
            { "type": "code", "lang": "javascript", "title": "自定义 Hook：把逻辑抽成可复用（纯函数演示，可运行）",
              "code": "// 自定义 Hook 本质是『复用一段状态逻辑的函数』。\n// 下面用纯 JS 演示『计数器逻辑可复用』的思想（React 里用函数封装）\n\nfunction createCounter(initial = 0) {\n  let state = initial;\n  const set = (next) => { state = next; };\n  return { get: () => state, inc: () => set(state + 1), set };\n}\n\nconst a = createCounter(0);\na.inc(); a.inc();\nconsole.log(\"计数器 a:\", a.get());   // 2\n\n// React 里等价写法：\n// function useCounter(initial) {\n//   const [v, setV] = useState(initial);\n//   return { v, inc: () => setV(v + 1) };\n// }\n// 两个组件都用 useCounter()，逻辑零重复" },
            { "type": "info", "title": "依赖数组是 useEffect 的灵魂", "text": "<code.inline>useEffect(cb, deps)</code.inline>：deps 为空 [] 只在挂载跑一次；有值则值变才跑；不写则每次渲染都跑。用错依赖会引发重复请求或闭包旧值 bug。用 lint 插件（eslint-plugin-react-hooks）帮你抓。" },
            { "type": "keypoints", "items": ["useState 状态、useEffect 副作用、useRef 引用、useMemo 缓存", "useEffect 依赖数组控制执行时机", "自定义 Hook 让跨组件逻辑可复用", "Hooks 规则：顶层调用、别放循环/条件里"] }
          ]
        }
      ]
    },

    /* ================= Vue ================= */
    {
      "id": "fe-vue",
      "name": "前端框架：Vue",
      "icon": "Vu",
      "tagline": "声明式模板 + 响应式数据，写起来像写 HTML。",
      "intro": "Vue 用『模板语法』把数据和界面绑定，改了数据界面自动更新；用 ref/reactive 管理响应式状态；用指令 v-for/v-if/v-model 完成列表、条件、双向绑定。上手曲线平缓，适合快速做产品。",
      "meta": { "难度": "进阶", "场景": "前端框架" },
      "lessons": [
        {
          "id": "vue-1-template",
          "title": "Vue 响应式与模板语法",
          "summary": "ref/reactive、计算属性、指令与 v-model 双向绑定。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "Vue 组合式 API：<code.inline>ref</code.inline> 包一个响应式值（取值要 .value），<code.inline>reactive</code.inline> 包对象，<code.inline>computed</code.inline> 派生出依赖其它值的新值。模板里用 <code.inline>{{ }}</code.inline> 插值、用指令做循环/判断/绑定。" },
            { "type": "code", "lang": "html", "title": "Vue 模板核心指令（本地 Vite 运行）",
              "code": "<script setup lang=\"ts\">\nimport { ref, computed } from \"vue\";\n\nconst todos = ref([\n  { id: 1, text: \"学 Vue\", done: false },\n  { id: 2, text: \"学工程化\", done: false },\n]);\nconst newText = ref(\"\");\n\n// 计算属性：依赖别的值自动更新\nconst doneCount = computed(() => todos.value.filter(t => t.done).length);\n\nfunction add() {\n  todos.value.push({ id: Date.now(), text: newText.value, done: false });\n  newText.value = \"\";\n}\n</script>\n\n<template>\n  <!-- v-model 双向绑定：输入框和 newText 同步 -->\n  <input v-model=\"newText\" placeholder=\"新待办\" @keyup.enter=\"add\" />\n  <button @click=\"add\">添加</button>\n\n  <!-- v-for 列表 + :key -->\n  <ul>\n    <li v-for=\"t in todos\" :key=\"t.id\">{{ t.done ? \"✅\" : \"⬜\" }} {{ t.text }}</li>\n  </ul>\n  <p>已完成：{{ doneCount }} / {{ todos.length }}</p>\n</template>" },
            { "type": "code", "lang": "text", "title": "Vue 指令速查",
              "code": "v-bind:attr  或  :attr     → 属性绑定  :class=\"{active: on}\"\nv-on:event   或  @event     → 事件绑定  @click=\"fn\"\nv-for=\"i in list\"            → 列表渲染 + :key\nv-if / v-else-if / v-show     → 条件渲染（show 只切换 css）\nv-model                       → 双向绑定（input/select/textarea）\n{{ expr }}                    → 文本插值\n:key                          → 列表唯一标识" },
            { "type": "info", "title": "ref vs reactive", "text": "<code.inline>ref(1)</code.inline> 包基本类型/数组，模板自动解包（不用 .value）、脚本里要 .value；<code.inline>reactive({})</code.inline> 包对象，直接访问。新手建议统一用 ref，代码更一致。" },
            { "type": "keypoints", "items": ["ref(值) 响应式数据（脚本里 .value），模板自动解包", "computed 派生态度：依赖变了它自动重算", "v-for 列表、v-if 条件、v-model 双向绑定", "@click 事件、:prop 绑定，是高频三大指令"] }
          ]
        },
        {
          "id": "vue-2-component",
          "title": "Vue 组件通信与状态",
          "summary": "props/emit、defineProps/defineEmits、依赖注入与状态库。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "组件间通信五种方式：父→子用 props，子→父用 emit 事件，深层级用 provide/inject，改全局用 Pinia，同页面平级多用父级中转。理解清楚这几种边界，组件才不会写成一团乱麻。" },
            { "type": "code", "lang": "text", "title": "父子组件通信模型",
              "code": "父组件 Parent\n  │ props 传数据（只读）  ──────▶ 子组件 Child\n  ◀── emit 发事件（含数据） ────── │\n\n// 子声明：\n//   const props = defineProps([\"title\"])\n//   const emit = defineEmits([\"update\"])\n//   emit(\"update\", newValue)      // 通知父级\n\n// 深组件：provide/inject 跳过中间层\n// 全局：Pinia store（跨任意组件共享）" },
            { "type": "code", "lang": "html", "title": "Provide / Inject 概念（Vue 组合式）",
              "code": "<!-- 上层：provide 提供数据 -->\n<script setup>\nimport { provide, ref } from \"vue\";\nconst user = ref({ name: \"小明\", role: \"admin\" });\nprovide(\"currentUser\", user);\n</script>\n\n<!-- 任意深层后代：inject 取用，无需一层层传 props -->\n<script setup>\nimport { inject } from \"vue\";\nconst user = inject(\"currentUser\");\n// 模板里直接 {{ user.name }}\n</script>" },
            { "type": "info", "title": "状态库 Pinia 何时用", "text": "只有『多个不相关组件要共享同一份数据』（登录态、购物车、主题）才值得上状态库。组件不多时，props/emit 更清晰。别什么都放进全局 store，会让数据来源不可追踪。" },
            { "type": "warn", "title": "props 是只读的", "text": "子组件不能直接改 prop。想改，就 emit 一个事件让父级改。这条『单向数据流』纪律能避免大量难排查的脏状态问题。" },
            { "type": "keypoints", "items": ["父→子 props；子→父 emit；深层 provide/inject", "跨不相关组件共享用 Pinia，别滥用", "props 只读，改数据靠 emit 通知父级", "组件边界清楚，代码才长期好维护"] }
          ]
        }
      ]
    },

    /* ================= 前端工程化与构建 ================= */
    {
      "id": "fe-build",
      "name": "前端工程化与构建",
      "icon": "构",
      "tagline": "离开脚手架，前端寸步难行；理解构建，我们才不惧黑盒。",
      "intro": "现代前端都跑在构建工具上：Vite 秒级冷启动、ESM 模块化、开发与生产两套产物、环境变量注入、按需分包。这一板块揭开创建项目背后的工程化机制。",
      "meta": { "难度": "进阶", "场景": "前端工程" },
      "lessons": [
        {
          "id": "fe-build-1-vite",
          "title": "Vite 工程与模块化",
          "summary": "一条命令建项目，看懂目录、ESM 与开发/生产差异。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "Vite 是现代前端默认脚手架：开发时用原生 ES Module 按需加载（秒级热更新 HMR），生产时再打包压缩成最优化产物。你只需一条命令创建 React 或 Vue 项目。" },
            { "type": "code", "lang": "bash", "title": "创建并运行一个 Vite 项目",
              "code": "# 创建（交互选框架：React/Vue/Svelte…）\nnpm create vite@latest my-app\ncd my-app\nnpm install\nnpm run dev      # 开发服务器，热更新\nnpm run build    # 生产构建，产物出到 dist/\nnpm run preview  # 本地预览构建产物" },
            { "type": "code", "lang": "text", "title": "典型的 Vite 项目骨架",
              "code": "my-app/\n  index.html          # 入口 HTML\n  vite.config.js      # 构建配置（别名、代理、插件）\n  src/\n    main.tsx          # 应用入口，挂载根组件\n    App.tsx           # 根组件\n    components/       # 组件\n    assets/           # 静态资源\n    router/           # 路由\n    stores/           # 状态\n  package.json        # 依赖与脚本\n  .env.development    # 开发环境变量\n  .env.production     # 生产环境变量\n\n# 构建原理：ESM import 按需加载 → 生产时打包成多个小 chunk + hash" },
            { "type": "info", "title": "dev 快 vs build 慢，各有分工", "text": "开发环境追求『改一下立刻看到』，所以 Vite 用原生 ESM 直出、不打包；生产环境追求『加载最快』，所以要把几千个模块打包压缩、tree-shake 掉没用代码、切片缓存。两条流水线，目标完全不同。" },
            { "type": "keypoints", "items": ["npm create vite 一条命令建项目", "开发用 ESM 热更新，生产打包+压缩+切片", "vite.config.js 配别名/代理；.env 管理环境变量", "dist/ 是可直接上线的产物目录"] }
          ]
        },
        {
          "id": "fe-build-2-prod",
          "title": "生产构建：加载性能与缓存",
          "summary": "分包、懒加载、Tree-shaking，让首屏秒开。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "构建优化的目标：首屏加载尽量小、尽量少。三招：**分包**（把不常变的库单拎出来吃长缓存）、**路由级懒加载**（点进页面才下载该页代码）、**Tree-shaking**（自动剔除未用代码）。" },
            { "type": "code", "lang": "text", "title": "路由懒加载：用到才下载",
              "code": "// React Router：不再 import 全部页面，而是动态 import\n// const Home = lazy(() => import(\"./pages/Home\"));\n// const About = lazy(() => import(\"./pages/About\"));\n// 每个页面被切成独立 chunk，访问到了才加载\n\n// Vue Router：同样\n// const Home = () => import(\"./views/Home.vue\");\n\n// 效果：首屏只下载首屏需要的代码，文件→体积大幅下降" },
            { "type": "code", "lang": "bash", "title": "分包 + 长缓存",
              "code": "# Vite 手动分包示例（vite.config.js）\n# build.rollupOptions.output.manualChunks = {\n#   vendor: [\"react\", \"react-dom\"],   // 框架单独成块\n# }\n# 作用：业务代码常更新，框架几乎不变\n# → 框架块带长缓存 hash，上架后用户只重新下载业务块\n\n# 缓存策略签名：\n#   index-a1b2c3.js   内容变则 hash 变 → 浏览器重新拉\n#   vendor-x9y8.js    内容没变 hash 不变 → 浏览器命中缓存\n# 所以别用固定文件名，hash 才是缓存正确性的关键" },
            { "type": "info", "title": "Tree-shaking 的前提：ESM", "text": "只有 ES Module（import/export 静态结构）才能被 tree-shake 自动摇掉未用代码。用 <code.inline>import { debounce } from \"lodash-es\"</code.inline> 这类 ESM 版本、别整库 import，产物体积才有救。" },
            { "type": "warn", "title": "先测量再优化", "text": "别凭感觉调。用 <code.inline>npm run build</code> 后的产物报告（vite-plugin-visualizer）或 Lighthouse 看实际首屏构成。真正的大块头往往是『误把整库、内联 JSON、两套 React』灌进去了。" },
            { "type": "keypoints", "items": ["路由懒加载把页面切成按需 chunk", "手动分包让不常变库吃长缓存", "Tree-shaking 依赖 ESM 才能摇掉未用代码", "用构建报告/Lighthouse 数据驱动优化"] }
          ]
        }
      ]
    },

    /* ================= 状态管理与 SPA 路由 ================= */
    {
      "id": "fe-state-router",
      "name": "状态管理与 SPA 路由",
      "icon": "状",
      "tagline": "数据怎么共享，页与页怎么跳转而不刷新。",
      "intro": "前端两大工程问题：**状态**（多组件共享一份数据怎么管）与**路由**（单页应用如何切换视图、同步地址栏且前进后退可用）。这一板块讲透原理和框架做法。",
      "meta": { "难度": "进阶", "场景": "前端工程" },
      "lessons": [
        {
          "id": "fe-state-1",
          "title": "状态管理：为什么需要，怎么选",
          "summary": "Props 钻透的痛、全局 Store、服务端状态缓存。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "『状态』就是会影响界面的数据。问题出在跨组件共享时：a 要改、b 要显示、c 要联动，层层传 props 又臭又脆。解决靠**状态提升**（提到共同父级）或**全局 Store**（Redux / Pinia / Zustand）。二者各有边界。" },
            { "type": "code", "lang": "javascript", "title": "状态提升：把数据放到共同父级（纯 JS 演示，可运行）",
              "code": "// 思路：两个子组件需要共享数据，就把数据放它们共同的父级。\n// 这里用一个 Store 对象模拟：数据集中 + 变更集中\nconst store = { count: 0 };\nconst listeners = [];\nfunction setCount(fn) {\n  store.count = fn(store.count);\n  listeners.forEach((l) => l(store.count));  // 通知所有关心的人\n}\n\n// 组件A：显示\nlisteners.push((v) => console.log(\"组件A看到:\", v));\n// 组件B：显示\nlisteners.push((v) => console.log(\"组件B看到:\", v));\n\nsetCount((n) => n + 1);   // A、B 都被通知，界面同步更新\n// 这就是『全局 store』最朴素的模样：一份数据 + 通知机制" },
            { "type": "table", "head": ["方案", "适用", "代表", "心智负担"], "rows": [["props 直传", "少数父子", "——", "低"], ["状态提升", "兄弟/小范围", "共同父级", "低"], ["全局 Store", "多组件共享登录态/购物车", "Redux/Pinia/Zustand", "中-高"], ["服务端状态库", "请求回来的数据缓存/过期", "React Query/TanStack Query", "中"]] },
            { "type": "info", "title": "客户端状态 vs 服务端状态", "text": "前端状态分两类：**客户端状态**（弹窗开关、主题）直接放 Store；**服务端状态**（用户列表、订单）是要从 API 拉、会过期、要缓存重试的——这类交给 React Query/SWR 处理，别硬塞进 Redux。" },
            { "type": "warn", "title": "别什么都塞全局", "text": "全局 Store 用多了，数据来源变得不可追踪、组件不再自洽。纪律：只有『多个不相关组件真需要同一份数据』才放全局，其余用 props 或本地 state。" },
            { "type": "keypoints", "items": ["跨组件共享 = 状态提升到共同父级 或 全局 Store", "登录态/购物车这类才值得上全局 Store", "服务端状态用 React Query/SWR 管缓存", "Store 越少越好的辐射面，别滥用"] }
          ]
        },
        {
          "id": "fe-router-1",
          "title": "SPA 路由：原理与实现",
          "summary": "hash 与 history 两种模式，手写一个迷你前端路由。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "单页应用只有一个 HTML，靠前端路由在 JS 里换视图、并同步地址栏，让刷新和前进后退可用。两种实现：**hash 模式**（#/home）用 hashchange，无需服务器配合；**History 模式**（/home）用 history.pushState，好看但服务器要配置回退。" },
            { "type": "code", "lang": "javascript", "title": "手写迷你 hash 路由（浏览器环境可运行）",
              "code": "// 依赖浏览器，本地用编辑器 HTML 环境或浏览器即可\n// 路由表：路径 -> 组件函数\nconst routes = {\n  \"#/\": () => \"<h2>首页</h2>\",\n  \"#/about\": () => \"<h2>关于我们</h2>\",\n};\n\nfunction render() {\n  const handler = routes[location.hash] || routes[\"#/\"];\n  document.getElementById(\"app\").innerHTML = handler();\n}\n\n// 地址栏变化即重渲染\nwindow.addEventListener(\"hashchange\", render);\n\n// 点击链接跳转：\n// <a href=\"#/about\">关于</a>  —— 纯<a>标签即可，无需 JS\n\n// 关键：hash 变了不刷新页面，只触发 hashchange\n// 刷新/前进后退/直接输地址都能正确落到对应视图" },
            { "type": "table", "head": ["模式", "URL 形态", "实现", "服务器要求"], "rows": [["Hash", "#/about", "hashchange 事件", "无"], ["History", "/about", "history.pushState + popstate", "需把所有路由回退到 index.html（防刷新404）"]] },
            { "type": "info", "title": "框架路由帮你都封装好了", "text": "React Router / Vue Router 就是把上面那套『路由表 + 监听 + 渲染』封装成 <code.inline>&lt;Route path=...&gt;</code.inline> 组件 + <code.inline>&lt;Link&gt;</code.inline>。但理解了原理，出了问题才知道去查哪。" },
            { "type": "warn", "title": "History 模式上线的坑", "text": "History 模式直接访问 /about 刷新，服务器找不到文件会 404。必须在 Nginx/静态托管配置『try_files $uri /index.html』回退。很多全栈新人上线后『一刷新就白屏』就是这个原因。" },
            { "type": "keypoints", "items": ["SPA 路由 = 换视图 + 同步地址栏 + 支持前进后退", "hash 模式免服务器配置；history 模式更美观但需服务器回退", "手写路由：路由表 + 监听 + 渲染", "上线白屏先查 history 模式的回退配置"] }
          ]
        }
      ]
    },

    /* ================= 前后端与接口 ================= */
    {
      "id": "fe-api",
      "name": "后端 API 工程",
      "icon": "API",
      "tagline": "接口不只是『能通』，要规范、安全、可规模化。",
      "intro": "一个能上线的后端 API：RESTful 资源设计、统一错误、输入校验、分页、鉴权。这一板块用 Node + Express 讲透工程化的接口写法。",
      "meta": { "难度": "进阶", "场景": "后端 API" },
      "lessons": [
        {
          "id": "api-1-rest",
          "title": "RESTful API 设计与错误处理",
          "summary": "把接口当『资源』设计，统一状态码与错误返回。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "REST 把数据当**资源**，用 URL 定位资源、用 HTTP 方法表达动作：GET 读、POST 建、PUT 全量改、DELETE 删。设计规范后，前端不用猜、后端不用解释。" },
            { "type": "table", "head": ["方法", "路径", "动作", "成功状态码"], "rows": [["GET", "/api/todos", "查列表", "200"], ["GET", "/api/todos/:id", "查单个", "200"], ["POST", "/api/todos", "新建", "201"], ["PUT", "/api/todos/:id", "整体更新", "200"], ["PATCH", "/api/todos/:id", "部分更新", "200"], ["DELETE", "/api/todos/:id", "删除", "204"]] },
            { "type": "code", "lang": "javascript", "title": "Express 工程化接口骨架（本地运行）",
              "code": "import express from \"express\";\nimport bodyParser from \"body-parser\";\n\nconst app = express();\napp.use(express.json());               // 解析 JSON 请求体\n\n// 中间件：给所有响应包一层统一格式（可选）\napp.use((req, res, next) => {\n  res.ok = (data) => res.json({ ok: true, data });\n  res.fail = (msg, code = 400) => res.status(code).json({ ok: false, msg });\n  next();\n});\n\nconst todos = [{ id: 1, text: \"写接口\", done: false }];\n\napp.get(\"/api/todos\", (req, res) => {\n  res.ok(todos);\n});\n\napp.post(\"/api/todos\", (req, res) => {\n  const { text } = req.body ?? {};\n  if (!text || typeof text !== \"string\" || !text.trim()) {\n    return res.fail(\"text 不能为空\", 422);   // 输入校验\n  }\n  const t = { id: todos.length + 1, text: text.trim(), done: false };\n  todos.push(t);\n  res.status(201).ok(t);\n});\n\n// 404 兜底 + 统一错误中间件\napp.use((req, res) => res.fail(\"接口不存在\", 404));\napp.use((err, req, res, next) => {\n  console.error(err);\n  res.fail(\"服务器内部错误\", 500);\n});\n\napp.listen(3000, () => console.log(\"API 运行在 3000 端口\"));" },
            { "type": "info", "title": "状态码用对，前端才好处理", "text": "2xx 成功、4xx 客户端问题（400 参数错/401 未登录/403 无权限/404 不存在/422 校验不过）、5xx 服务器问题。风格统一的返回结构 + 语义化的状态码，是接口工程质量的第一关。" },
            { "type": "keypoints", "items": ["REST：URL 定位资源 + 方法表达动作 + 状态码表达结果", "POST 建返回 201，删除返回 204", "输入校验要在接口内做，别信前端", "统一错误中间件，避免到处裸 try/catch"] }
          ]
        },
        {
          "id": "api-2-auth",
          "title": "鉴权：JWT 登录与权限控制",
          "summary": "无状态 Token 鉴权，登录、校验、权限一次说清。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "HTTP 是无状态的，服务器不记得『谁是谁』。**JWT（JSON Web Token）** 让服务器把身份信息签成一个带签名的 token 发给前端，前端每次请求带上它，服务器验签即可识别身份——无需在服务器存 session，天然适合水平扩展。" },
            { "type": "code", "lang": "bash", "title": "JWT 登录 + 鉴权中间件（本地 Node，示意）",
              "code": "# 用 jsonwebtoken 库（npm i jsonwebtoken bcryptjs）\n#\n# 1) 登录：输入验证 → 查库（密码 bcrypt 比对）→ 签发 token\n#    const token = jwt.sign({ id: user.id, role: user.role }, SECRET, { expiresIn: \"2h\" });\n#    res.ok({ token });\n#\n# 2) 前端存储：localStorage（简单）/ 更安全用 httpOnly Cookie + CSRF 防护\n#    请求头： Authorization: Bearer <token>\n#\n# 3) 鉴权中间件：统一拦截需登录的接口\n#    function auth(req, res, next) {\n#      const h = req.headers.authorization || \"\";\n#      const token = h.replace(\"Bearer \", \"\");\n#      try {\n#        const payload = jwt.verify(token, SECRET);\n#        req.user = payload;              // 挂到请求上供后续用\n#        next();\n#      } catch { res.status(401).json({ ok: false, msg: \"未登录或已过期\" }); }\n#    }\n#    app.use(\"/api/admin\", auth, adminOnly);   // 组合中间件" },
            { "type": "table", "head": ["概念", "含义", "注意"], "rows": [["JWT", "带签名的身份令牌", "过期时间 expiresIn 必须设"], ["Bearer 前缀", "标准携带方式", "Authorization: Bearer xxx"], ["Secret", "签发与验签密钥", "绝不放前端/源码，走环境变量"], ["权限", "基于 role 的访问控制", "前端隐藏只改善体验，后端必须验"]] },
            { "type": "warn", "title": "安全铁律", "text": "① SECRET 存在环境变量，绝不进 Git/前端；② 鉴权必须在**后端**做，前端隐藏按钮只是体验；③ 敏感数据别塞进 token 明文；④ 密码用 bcrypt 哈希存储，永不保存明文。" },
            { "type": "keypoints", "items": ["JWT = 无状态鉴权，签名即身份，免 session", "前端每次请求带 Authorization: Bearer token", "权限判断必须在后端，前端只是演示", "Secret 走环境变量、密码 bcrypt 哈希"] }
          ]
        }
      ]
    },

    /* ================= 全栈实战 ================= */
    {
      "id": "fullstack-proj",
      "name": "全栈工程实战",
      "icon": "产",
      "tagline": "把前端、接口、数据库串成一个能上线的产品。",
      "intro": "把前面所有能力兑现成一件完整的产品：React 前端 + Express/Node 后端 + 数据库，再加构建、鉴权与部署。用一个『用户 + 待办』的全栈项目贯穿，看全栈工程师怎么把它组织起来。",
      "meta": { "难度": "高级", "场景": "综合实战" },
      "lessons": [
        {
          "id": "fullstack-1-todo",
          "title": "全栈项目结构：前端 + API + 数据库",
          "summary": "分层、端点设计、跨域与部署，把一条数据从浏览器走到数据库。",
          "difficulty": "高级",
          "blocks": [
            { "type": "p", "text": "一个最小的全栈系统长这样：React 前端（Vite）→ 通过 fetch 调 Express API → API 校验/鉴权后读写数据库 → 返回 JSON → 前端渲染。下面用『用户 + 待办』串起来，重点看**数据如何一路流动、接口如何设计、跨域如何解、如何上线**。" },
            { "type": "code", "lang": "text", "title": "全栈项目结构",
              "code": "fullstack-app/\n  client/               # 前端\n    src/\n      App.jsx\n      pages/Login.jsx\n      pages/Todos.jsx\n      api/http.js          # 封装 fetch + token\n  server/                # 后端\n    index.js              # Express 入口\n    routes/auth.js        # 登录/注册\n    routes/todos.js       # 待办 CRUD（需登录）\n    db.js                 # 数据库连接\n  .env                    # 密钥/端口（不提交 Git）\n  README.md\n\n# 分工：client 只管 UI 和调接口；server 只管校验+数据；db 只管存取" },
            { "type": "code", "lang": "javascript", "title": "前端练习：封装 fetch，带 token 与统一错误（浏览器可运行）",
              "code": "// api/http.js —— 前端请求封装（纯 JS 演示逻辑）\nfunction request(path, { method = \"GET\", body } = {}) {\n  const token = localStorage.getItem(\"token\");   // 若已登录\n  const headers = { \"Content-Type\": \"application/json\" };\n  if (token) headers.Authorization = \"Bearer \" + token;  // 带上 token\n\n  return fetch(`/api${path}`, {\n    method,\n    headers,\n    body: body ? JSON.stringify(body) : undefined,\n  }).then(async (res) => {\n    const data = await res.json();\n    if (!res.ok) throw new Error(data.msg || \"请求失败\");\n    return data.data;\n  });\n}\n\n// 用起来\n// request(\"/todos\").then((list) => console.log(\"待办:\", list));\n// request(\"/todos\", { method: \"POST\", body: { text: \"学全栈\" } })\n//   .then((t) => console.log(\"新建:\", t))\n//   .catch((e) => console.error(e.message));\n\n// 统一在服务端和 client 都用 res.ok/fail 风格 → 前端 catch 就能拿到中文错误" },
            { "type": "info", "title": "跨域 CORS 这样解", "text": "前端(3001) 调后端(3000) 端口不同会触发跨域。开发期在 Vite 配 <code.inline>server.proxy</code.inline> 由代理转发（最省心）；生产期前端构建产物交给后端/网关托管在**同源**下，天然不跨域。别用随意放开 CORS 的方式。" },
            { "type": "code", "lang": "bash", "title": "部署全栈",
              "code": "# 前端：构建出静态产物\n#   cd client && npm run build   → 产出 client/dist\n#   部署到 Nginx/云静态托管/托管平台（同源路径下\n#   这样 /api 直接到后端，无跨域）\n\n# 后端：起 Node 服务\n#   cd server && npm start\n#   用 PM2/容器/云函数进程守护： pm2 start index.js\n\n# 静态托管注意：Vite dist 是单页应用，需配 history 回退\n# Nginx:  location / { try_files $uri /index.html; }\n#         location /api { proxy_pass http://127.0.0.1:3000; }" },
            { "type": "warn", "title": "别一把梭直接上生产", "text": "全栈上线前自检：① 密钥走 env；② 数据库有索引与事务；③ 接口有鉴权与校验；④ 前端构建失败/接口不通有回退。先本地/预发跑通全流程，再上生产。功能的链路越完整，越需要纪律。" },
            { "type": "keypoints", "items": ["全栈 = 前端(UI) + API(校验/鉴权/数据) + 数据库(存取)", "前端封装 fetch 统一带 token、统一抛错", "跨域用代理或同源托管，别乱开 CORS", "密钥走 env、库加索引、接口有鉴权，再上线"] }
          ]
        }
      ]
    }
  ]
};