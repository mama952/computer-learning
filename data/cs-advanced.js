/* ============================================================
   计算机知识库 · 数据：进阶与工程实践
   ============================================================ */
window.CS_ADVANCED = {
  id: "cs-advanced",
  name: "进阶与工程",
  icon: "进",
  description:
    "从『写得出』到『写得对、写得好』的进阶之路：版本控制、设计模式、前后端工程、软件安全、云原生的 DevOps 与人工智能。这一板块面向真实项目。",
  children: [
    /* ================= Git ================= */
    {
      id: "git",
      name: "Git 与版本控制",
      icon: "Gt",
      tagline: "代码的时光机，团队写作的基石，每个程序员必备。",
      intro:
        "Git 记录你代码的每一次修改，随时回退、分叉、合并，多人协作也井井有条。它和 GitHub 配合，已成为软件开发的事实标准。",
      meta: { 难度: "入门", 场景: "一切项目" },
      lessons: [
        {
          id: "git-basics",
          title: "Git 核心概念与常用命令",
          summary: "仓库、提交、分支、推送，30 分钟上手协作。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "Git 的核心想法：把一份代码的『每次修改』都保存成一个快照，叫一次提交 commit。提交在任何时刻都能回溯。你的工作分成三步：工作区（改动）→ 暂存区（staging）→ 仓库（已保存）。" },
            { type: "code", lang: "bash", title: "Git 常用命令", code: '# 初始配置（只需一次）\ngit config --global user.name "你的名字"\ngit config --global user.email "you@example.com"\n\n# 在当前目录开启仓库\ngit init\n\n# 查看状态（红色=改了未暂存，绿色=已暂存）\ngit status\n\n# 添加文件到暂存区\ngit add .          # 全部\ngit add main.py    # 指定文件\n\n# 提交到仓库快照\ngit commit -m "完成登录功能"\n\n# 查看历史\ngit log --oneline\n\n# 回退到某次提交（慎重！）\ngit reset --hard <commit的哈希>' },
            { type: "code", lang: "bash", title: "分支与远程协作", code: '# 分支：在同一代码上开多条线\ngit branch feature-login   # 建新分支\ngit checkout feature-login # 切到该分支\n# 或者用一行\ngit checkout -b feature-login\n\ngit branch                # 列出分支\ngit checkout main         # 切回主分支\n\n# 合并分支\ngit merge feature-login   # 把 feature 合并到当前分支\n\n# 关联远程仓库(GitHub) 并推送\ngit remote add origin https://github.com/你/项目.git\ngit push -u origin main    # 首次推送到远程\n# 之后推送\ngit push\n# 拉取别人更新\ngit pull' },
            { type: "warn", title: "合并冲突", text: "多人都改了同一行，合并时 Git 无法自动决定，就出现冲突（冲突标记 <<<<<<< ======= >>>>>>>）。解决方式是手动编辑成想要的样子，再 commit。" },
            { type: "keypoints", items: ["Git 每个 commit 是一个快照可回退", "流程：工作区→暂存区(add)→仓库(commit)", "分支并行开发，merge 合并", "push 推送远端、pull 拉取更新"] },
          ],
        },
        {
          id: "git-flow",
          title: "团队协作工作流",
          summary: "分支策略与 PR 文化，像正规团队一样写作。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "个人开发随便 commit，团队协作却需要纪律。主流做法是 GitFlow 的分支模型：main（长期稳定）+ feature/*（功能分支）+ release + hotfix。每一份代码改动通过『Pull Request（拉取请求）』并入主分支，方便他人 review 把关。" },
            { type: "code", lang: "bash", title: "规范的团队协作流程", code: '# 1. 从最新 main 拉新分支\n git checkout -b feature/payment main\n\n# 2. 在自己的分支上开发、提交\ngit add .\ngit commit -m "feat: 增加支付回调"\n\n# 3. 推送并创建 Pull Request\ngit push origin feature/payment\n# 然后在 GitHub 上发起 PR，邀请他人 review\n\n# 4. 通过后，合入 main（在 GitHub 上点 Merge）\n\n# 提交信息规范（Conventional Commits）\n# fix:  修复 bug\ngit commit -m "fix: 修复订单金额精度问题"\n# feat: 新功能\ngit commit -m "feat: 新增导出报表功能"\n# docs: 文档\ngit commit -m "docs: 更新部署说明"' },
            { type: "info", title: "最佳实践", text: "① commit 信息写清楚『做了什么+为什么』；② 每个 commit 只做一件事；③ 频繁提交、推送；④ 大改动拆成多个小 PR；⑤ 别把密码提交进仓库（用 .gitignore）。" },
            { type: "keypoints", items: ["团队用分支 + PR 组织写作", "main 长期稳定，feature 分支开发功能", "Conventional Commits 规范提交信息", "用 .gitignore 忽略敏感文件"] },
          ],
        },
      ],
    },

    /* ================= 软件工程 & 设计模式 ================= */
    {
      id: "softeng",
      name: "软件工程与设计模式",
      icon: "程",
      tagline: "前人踩坑千遍总结出的『建筑蓝图』。",
      intro:
        "设计模式是常见问题的『成熟解决方案模板』，软件工程则是『如何规模化地开发可靠软件』的方法论（测试、重构、文档、敏捷）。",
      meta: { 难度: "进阶", 场景: "大型项目" },
      lessons: [
        {
          id: "softeng-patterns",
          title: "经典设计模式",
          summary: "单例、工厂、观察者——三个最常用的一网打尽。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "设计模式是被反复验证的解决方案，不是语法而是『套路』。不必死记硬背所有 23 种，先把最常用的三种用熟：单例（全程序只有一个实例）、工厂（统一创建对象）、观察者（一个变化通知多个订阅者）。" },
            { type: "code", lang: "javascript", title: "三种常用设计模式", code: '// 1. 单例模式：保证全局只有一个实例\nclass Config {\n  static instance;\n  constructor() {\n    if (Config.instance) return Config.instance;\n    this.theme = "light";\n    Config.instance = this;\n  }\n}\nconst a = new Config();\nconst b = new Config();\nconsole.log("是同一个实例吗:", a === b);  // true\n\n// 2. 工厂模式：集中创建对象\nclass Button {\n  constructor(text) { this.text = text; }\n}\nfunction createButton(type){\n  switch(type){\n    case "primary": return new Button("主要按钮");\n    case "danger":  return new Button("危险操作");\n    default: return new Button("普通按钮");\n  }\n}\nconsole.log(createButton("primary").text);\n\n// 3. 观察者模式：发布-订阅\nclass EventBus {\n  constructor(){ this.listeners = {}; }\n  on(event, fn){ (this.listeners[event] ||= []).push(fn); }\n  emit(event, data){ (this.listeners[event]||[]).forEach(fn=>fn(data)); }\n}\nconst bus = new EventBus();\nbus.on("login", user => console.log("登录通知:", user));\nbus.on("login", user => console.log("埋点记录:", user.name));\nbus.emit("login", { name: "小明" });  // 两个订阅者都被通知' },
            { type: "keypoints", items: ["设计模式是成熟解决方案模板", "单例：全局唯一实例", "工厂：集中创建，屏蔽细节", "观察者/发布订阅：一对多通知"] },
          ],
        },
        {
          id: "softeng-testing",
          title: "测试与代码质量",
          summary: "单元测试、可读性、重构——让代码经得起时间。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "有质量的代码不只是『能跑』，更要『可靠』『可读』『可维护』。可靠靠测试（自动化验证行为），可读靠命名与结构，可维护靠持续重构。工程团队都追求『高测试覆盖率』。" },
            { type: "code", lang: "javascript", title: "测试驱动（概念演示）", code: 'function add(a, b) { return a + b; }\n\n// 用极简断言模拟测试框架\nfunction test(name, fn){ const result = fn(); console.log(`${result ? "通过" : "失败"}: ${name}`); }\n\ntest("add(2,3) 应等于 5", () => add(2,3) === 5);\ntest("add(-1,1) 应等于 0", () => add(-1,1) === 0);\ntest("add(0.1,0.2) 应约等于 0.3", () => Math.abs(add(0.1,0.2)-0.3) < 1e-9);\n\n// 命名讲究：能看懂变量/函数意图\n// 差: let x = 24;\n// 好: let userAgeInYears = 24;\n\n// 边界情况要测：空值、极大极小、非法输入\nfunction divide(a, b){ if(b===0) throw new Error("不能除以0"); return a/b; }\ntest("除数为0 应抛错", () => { try { divide(1,0); return false; } catch { return true; } });' },
            { type: "table", head: ["测试类型", "粒度", "目的"], rows: [["单元测试", "单函数/单模块", "每个零件正确"], ["集成测试", "多模块协作", "零件组装正确"], ["端到端 E2E", "整个系统", "用户操作全流程正确"]] },
            { type: "keypoints", items: ["可靠靠测试，可读靠命名，可维护靠重构", "单元测试验证单个函数行为", "命名讲究：让意图一眼可读", "情绪测试边界与异常输入"] },
          ],
        },
      ],
    },

    /* ================= 前端工程 ================= */
    {
      id: "frontend",
      name: "现代前端工程",
      icon: "前",
      tagline: "React/Vue 驱动的组件化开发与状态管理。",
      intro:
        "现代前端用框架（React、Vue）把 UI 拆成可复用组件，用声明式写法让数据和界面自动同步。理解组件、Props、State、虚拟 DOM，是进入框架世界的大门。",
      meta: { 难度: "进阶", 场景: "前端" },
      lessons: [
        {
          id: "frontend-framework",
          title: "组件化与 React/Vue 思想",
          summary: "把界面拆成积木，数据变了界面自动刷新。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "框架的核心价值：声明式 UI。你只需描述『界面的最终样子 + 数据』，框架负责在数据变化时自动更新对应部分（通过虚拟 DOM 高效比对）。组件则把界面拆成可复用的积木。" },
            { type: "code", lang: "javascript", title: "React 组件（概念，可运行 JSX 前的原始形态）", code: '// React 用组件拼界面，理念示意（可运行的核心机制）\nfunction createElement(type, props, ...children){ return { type, props, children }; }\n\n// 一个可复用组件：接收 props\ngreeting = (props) => `你好，${props.name}！`;\n\n// React 三大概念\nconsole.log(\'1. Props：父组件传数据给子组件\');\nconsole.log(\'2. State：组件自己的状态，变了就重渲染\');\nconsole.log(\'3. 组件：可复用的 UI 积木\');\n\n// 虚拟 DOM：先改内存里的树，再最小化更新真实 DOM\nconst oldVNode = ["<ul>", "<li>A</li>", "</ul>"].join("");\nfunction virtualize(){ return "内存中的轻量描述，diff 后只改差异部分"; }\nconsole.log(virtualize());\n\n// 极简实现一个状态驱动的渲染\nlet count = 0;\nfunction render(){ console.log(`界面: 计数 = ${count} (自动刷新)`); }\nfunction setCount(v){ count = v; render(); }  // 改状态→重渲染\nsetCount(1); setCount(2); setCount(3);' },
            { type: "table", head: ["框架", "语言", "特点"], rows: [["React", "JS/TS", "Hooks、生态最大、Flexible"], ["Vue", "JS/TS", "模板直观、上手快、渐进式"], ["Svelte", "JS", "编译器框架，运行时最小"], ["Solid", "JS", "细粒度响应式，性能强"]] },
            { type: "info", title: "构建工具", text: "真实项目用 Vite / Webpack 打包，把 JSX、TypeScript 等编译成浏览器能跑的 JS，并做压缩、按需加载。这正是『工程化』的含义。" },
            { type: "keypoints", items: ["框架核心=声明式 UI+组件化", "Props 父传子，State 组件内状态", "虚拟 DOM 高效更新真实 DOM", "Vite/Webpack 负责打包编译"] },
          ],
        },
      ],
    },

    /* ================= 后端 & API ================= */
    {
      id: "backend",
      name: "后端与 API 设计",
      icon: "后",
      tagline: "服务器端逻辑、RESTful API 与数据库的协同。",
      intro:
        "后端负责『业务逻辑 + 数据存储 + 对外提供 API』。REST 风格 API 是前后端通信的事实标准，理解路由、请求处理、响应格式是后端入门的核心。",
      meta: { 难度: "进阶", 场景: "后端 / 全栈" },
      lessons: [
        {
          id: "backend-rest",
          title: "RESTful API 设计",
          summary: "资源、方法、状态码——设计一个优雅的接口。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "REST 是一种 API 设计风格，核心是『把数据看作资源』，用 URL 表示资源，用 HTTP 方法表示操作：GET 读、POST 新建、PUT/PATCH 改、DELETE 删。返回码表达结果。" },
            { type: "code", lang: "text", title: "RESTful 接口设计示例", code: '针对「用户资源 /users」的 REST 设计\n\nGET    /users        获取用户列表\nGET    /users/5      获取 id=5 的用户\nPOST   /users        创建一个新用户\nPUT    /users/5      整体更新 id=5 的用户\nPATCH  /users/5      部分更新(只改姓名)\nDELETE /users/5      删除 id=5 的用户\n\n返回状态码\n200 OK          成功\n201 Created     创建成功\n400 Bad Request 参数错误\n401 未认证      未登录\n404 不存在\n\n响应体(JSON)示例\n{ "id": 5, "name": "小明", "email": "x@e.com" }\n\n规范命名：资源用复数名词，不要出现动词\n好:  GET /orders/123\n坏:  GET /getOrder?id=123' },
            { type: "code", lang: "javascript", title: "后端语义（Express 示意，可运行核心逻辑）", code: '// 后端路由意味着：URL + 方法 => 处理函数\nconst routes = [];\nfunction app(route){ routes.push(route); }\nfunction get(path, handler){ app({ method: "GET", path, handler }); }\nfunction post(path, handler){ app({ method: "POST", path, handler }); }\n\n// 定义接口（概念演示，真实是 Express/Flask/Django 等框架）\nget("/users", () => ({ code: 200, data: [{id:1,name:"小明"}] }));\npost("/users", (body) => ({ code: 201, data: { ...body, id: 99 } }));\n\n// 模拟请求\nconst req = { method: "GET", url: "/users" };\nconst route = routes.find(r => r.method === req.method && r.path === req.url);\nconst resp = route ? route.handler({}) : { code: 404, error: "Not Found" };\nconsole.log("GET /users =>", resp);\n\nconsole.log("post /users 则会 201 并返回新资源");' },
            { type: "keypoints", items: ["URL 表示资源，HTTP 方法表示操作", "GET读 POST建 PUT/PATCH改 DELETE删", "状态码表达请求结果", "返回 JSON，命名用复数"] },
          ],
        },
        {
          id: "backend-auth",
          title: "认证与授权基础",
          summary: "JWT、Session、Cookie——你是怎么『被认出来』的。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "认证（你是谁）与授权（你能干什么）是所有应用的安全地基。常见方案：Session（服务器保存登录态，发 Cookie）和 Token/JWT（服务器签发一段加密签名，客户端保管并每次带上）。" },
            { type: "code", lang: "javascript", title: "JWT 原理剖析", code: '// JWT 由三部分组成：头部.载荷.签名\n// 签名用密钥生成，防止篡改\n\nfunction base64(json){ return btoa(JSON.stringify(json)); }\n\nconst header = { alg: "HS256", typ: "JWT" };\nconst payload = { sub: "用户id=5", name: "小明", iat: 1680000000 };\nconst signature = "HMACSHA256(不计签名)";\n\nconst token = base64(header) + "." + base64(payload) + "." + signature;\nconsole.log("JWT 结构:");\nconsole.log(token.split(".")[0] + "  <- 头部");\nconsole.log("（载荷）类似: " + base64(payload).slice(0,30) + "...");\nconsole.log("（签名）由服务器密钥生成，改动即失效");\n\n// 流程\ndemoFlow = () => {\n  console.log("登录 -> 服务器签发 JWT -> 客户端保存");\n  console.log("每次请求 -> 带上 Authorization: Bearer <JWT>");\n  console.log("服务器验签 -> 通过则放行");\n};\n\n// 注意：JWT 载荷可被 base64 解码查看，别放密码等敏感信息！\nconsole.log("警告：JWT 内容并非加密，只是签名防篡改");' },
            { type: "warn", title: "安全提醒", text: "JWT 的载荷只是 base64 编码，人人可见，绝不能放密码。密码的存放也要用 bcrypt 等哈希算法加盐处理，绝不存明文。" },
            { type: "keypoints", items: ["认证=你是谁，授权=你能干什么", "Session 存服务器，Cookie 存浏览器", "JWT 三部分，签名防篡改", "密码必须哈希+加盐，不存明文"] },
          ],
        },
      ],
    },

    /* ================= 信息安全 ================= */
    {
      id: "security",
      name: "信息安全",
      icon: "安",
      tagline: "理解攻击才能防守——OWASP 十大风险的入门。",
      intro:
        "安全是『信任边界』的游戏。理解常见攻击（XSS、SQL 注入、CSRF）才能写出安全的代码。这里从攻击者的视角看问题，再反过来加固。",
      meta: { 难度: "进阶", 场景: "任何生产系统" },
      lessons: [
        {
          id: "security-xss",
          title: "XSS 与输入输出安全",
          summary: "用户输入不可信——杜绝脚本注入的第一课。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "XSS（跨站脚本）指攻击者把恶意脚本混进你的页面，坑害其他用户。最常见的成因是：直接把用户输入拼进 HTML，却没转义。预防铁律：所有动态内容输出时转义，用户输入一律『不可信』。" },
            { type: "code", lang: "htmlcss", title: "XSS 演示（安全示例）", code: '<!DOCTYPE html>\n<html>\n<head><meta charset="UTF-8"><style>body{font-family:sans-serif}</style></head>\n<body style="padding:20px">\n  <h2>XSS 演示</h2>\n  <p>用户输入（假设攻击者输入了脚本标签）：</p>\n  <input id="input" placeholder="输入 &lt;script&gt;alert(1)&lt;/script&gt;" value="&lt;img src=x onerror=alert(&#39;攻击!&#39;)&gt;" style="width:100%;padding:8px">\n  <br><br>\n  <div id="bad" style="padding:12px;border:2px solid red;border-radius:8px;margin-bottom:12px"></div>\n  <div id="good" style="padding:12px;border:2px solid green;border-radius:8px"></div>\n  <script>\n    const input = document.getElementById("input").value;\n    // 危险做法：直接 innerHTML 插入（会执行恶意脚本）\n    document.getElementById("bad").innerHTML = "危险(innerHTML): " + input;\n\n    // 安全做法：textContent 只会当纯文本显示，无法执行\n    document.getElementById("good").textContent = "安全(textContent): " + input;\n  </script>\n  <p style="color:green">上面红色框用 innerHTML 会触发攻击，绿色框用 textContent 则安全。</p>\n</body>\n</html>' },
            { type: "table", head: ["攻击", "简述", "防御"], rows: [["XSS", "注入脚本执行", "输出转义 + CSP"], ["SQL 注入", "拼 SQL 被篡改", "参数化查询/ORM"], ["CSRF", "借用户身份发请求", "Token 校验"], ["越权", "访问无权资源", "后端校验权限"]] },
            { type: "keypoints", items: ["用户输入永不可信", "输出用 textContent 而非 innerHTML", "参数化查询防 SQL 注入", "权限校验必须在服务端做"] },
          ],
        },
      ],
    },

    /* ================= 云与 DevOps ================= */
    {
      id: "devops",
      name: "云计算与 DevOps",
      icon: "云",
      tagline: "Docker 容器、CI/CD 与云部署，让交付自动化。",
      intro:
        "DevOps 文化强调『开发与运维协作 + 自动化』。容器（Docker）统一环境、CI/CD 自动构建发布、云平台弹性扩展——现代产品上线的方式。",
      meta: { 难度: "进阶", 场景: "DevOps / 部署" },
      lessons: [
        {
          id: "devops-docker",
          title: "Docker 容器：环境不再四分五裂",
          summary: "『代码 + 环境』打包成镜像，到处运行。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "「在我电脑上是好的啊！」——Docker 用容器解决了环境不一致。它把『代码 + 依赖 + 系统配置』打包成一个标准化的镜像，任何装 Docker 的机器都能以相同方式运行，像海运行装箱一样标准。" },
            { type: "code", lang: "yaml", title: "Dockerfile 示例", code: '# 基于 Node 官方镜像\nFROM node:18\n\n# 设置工作目录\nWORKDIR /app\n\n# 拷贝依赖清单并安装\nCOPY package*.json ./\nRUN npm install\n\n# 拷贝源码\nCOPY . .\n\n# 暴露端口\nEXPOSE 3000\n\n# 启动命令\nCMD ["npm", "start"]' },
            { type: "code", lang: "bash", title: "Docker 常用命令", code: '# 构建镜像\ndocker build -t my-app .\n\n# 运行容器（映射端口）\ndocker run -p 3000:3000 my-app\n\n# 查看运行中的容器\ndocker ps\n\n# 停止容器\ndocker stop <id>\n\n# docker-compose 一键启动多个服务(如 app+db)\n# docker-compose.yml 里声明 services，然后\ndocker-compose up -d' },
            { type: "info", title: "镜像 vs 容器", text: "镜像（image）像软件的『安装包/模板』，只读；容器（container）是镜像运行时的一个实例，可写。一个镜像能 launch 出很多容器，像一张母盘刻出多张盘。" },
            { type: "keypoints", items: ["容器解决环境不一致问题", "镜像=模板，容器=运行实例", "Dockerfile 描述打包步骤", "docker build/run/ps 是核心命令"] },
          ],
        },
        {
          id: "devops-cicd",
          title: "CI/CD 持续集成与部署",
          summary: "提交代码自动测试自动上线，告别手动发布。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "CI（持续集成）：代码一推送到仓库，就自动跑测试和构建，尽早发现错误；CD（持续部署）：测试通过后自动部署到服务器。这就是『把发布变成自动化流水线』。" },
            { type: "code", lang: "yaml", title: "GitHub Actions CI 示例", code: '# .github/workflows/ci.yml\nname: CI\n\non:\n  push:\n    branches: [main]\n  pull_request:\n\njobs:\n  build-and-test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: 安装依赖\n        run: npm install\n\n      - name: 运行测试\n        run: npm test\n\n      - name: 构建\n        run: npm run build\n\n      - name: 部署到云平台\n        run: ./deploy.sh' },
            { type: "table", head: ["阶段", "内容", "收益"], rows: [["CI 持续集成", "自动测试+构建", "尽早暴露错误"], ["CD 持续部署", "自动发布", "小步快跑，风险低"], ["监控", "日志、指标、告警", "上线后出问题能快速定位"]] },
            { type: "keypoints", items: ["CI 自动测试构建，CD 自动发布", "上线改配置文件即自动化流水线", "GitHub Actions / GitLab CI 是常用工具", "先自动化再谈规模化交付"] },
          ],
        },
        {
          id: "devops-cloud",
          title: "云服务与静态托管",
          summary: "把网站放到云上，免费方案也能专业上线。",
          difficulty: "入门",
          blocks: [
            { type: "p", text: "建好的网站要上线，托管是刚需。所谓『静态托管』就是把纯 HTML/CSS/JS 扔到 CDN 上，有免费 SSL 证书（https 绿锁）、免费自定义域名、无限带宽的方案就非常香。" },
            { type: "info", title: "本站正是这么部署的", text: "本网站就是一个纯静态站点，可免费托管到 <strong>Cloudflare Pages</strong>：只需连接 GitHub 仓库，每次 push 自动构建部署，自动签发免费 SSL 证书，还支持绑定自己的域名，且免费带宽无上限。类似方案还有 GitHub Pages、Netlify、Vercel。" },
            { type: "code", lang: "bash", title: "本地预览与通用部署步骤", code: '# 1. 本地启动一个静态服务器预览\n# 用 Python（需安装 python）\npython -m http.server 8000\n# 或 npx\nnpx serve .\n\n# 2. 把代码推送到 GitHub\n git init\ngit add .\ngit commit -m "init: 我的网站"\ngit branch -M main\ngit remote add origin https://github.com/你/仓库.git\ngit push -u origin main\n\n# 3. 到 Cloudflare Pages / GitHub Pages / Netlify\n#    连接仓库，选构建目录(静态站通常是根目录或 dist)\n#    平台自动签发 SSL、提供域名\n\n# 自定义域名（可选，需已购买且过实名）\n# 在平台设置里绑定，并把域名 DNS 指向平台提供的 CNAME' },
            { type: "tip", title: "免费托管选谁", text: "要免费 + SSL + 静态 + 额度足：优先级 Cloudflare Pages（无限带宽）> GitHub Pages > Netlify。Vercel 免费版限制『非商业用途』，商用需注意。" },
            { type: "keypoints", items: ["静态托管把 HTML/CSS/JS 放 CDN", "Cloudflare Pages 免费且带宽无限", "自动签发免费 SSL，支持自定义域名", "教程文件里含完整部署指南"] },
          ],
        },
      ],
    },

    /* ================= AI 与机器学习 ================= */
    {
      id: "ai",
      name: "AI 与机器学习",
      icon: "智",
      tagline: "从线性回归到神经网络，理解 AI 的核心原理。",
      intro:
        "机器学习让程序从数据中『学』规律，而不是被显式编程。理解监督/无监督学习、损失函数、梯度下降与神经网络，就拿到了进入 AI 世界的钥匙。",
      meta: { 难度: "进阶", 场景: "AI / 数据" },
      lessons: [
        {
          id: "ai-ml-basics",
          title: "机器学习三分类与训练流程",
          summary: "监督、无监督、强化学习——以及训练背后的数学。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "传统编程是『写规则 → 给数据 → 得结果』；机器学习反过来了：『给数据 + 结果 → 学出规则』。学习方式分三类：监督学习（给标注好的例子）、无监督学习（只有数据自己找规律）、强化学习（靠奖励反馈试错）。" },
            { type: "code", lang: "javascript", title: "梯度下降的直观实现（线性回归）", code: '// 用梯度下降拟合一条直线 y = wx + b\n// 数据：少量样本 (x, y)\nconst data = [[1,2],[2,4],[3,6],[4,8]];  // 理想 w=2 b=0\n\nlet w = 0, b = 0;\nconst lr = 0.01;  // 学习率\n\n// 损失函数：均方误差\nfunction loss(){\n  let sum=0;\n  for(const [x,y] of data) sum += Math.pow(w*x+b - y, 2);\n  return sum/data.length;\n}\n\n// 梯度下降循环\nfor(let iter=0; iter<2000; iter++){\n  let dw=0, db=0;\n  for(const [x,y] of data){\n    const err = (w*x+b) - y;\n    dw += err * x;\n    db += err;\n  }\n  dw = dw/data.length * 2;\n  db = db/data.length * 2;\n  w -= lr * dw;\n  b -= lr * db;\n}\nconsole.log(`训练出: y = ${w.toFixed(2)}x + ${b.toFixed(2)}`);\nconsole.log(`最终损失(loss): ${loss().toFixed(4)}（越接近0越好）`);' },
            { type: "table", head: ["范式", "输入", "输出", "例子"], rows: [["监督学习", "带标签数据", "预测标签", "垃圾邮件分类/房价预测"], ["无监督学习", "无标签数据", "发现结构", "客户分群、降维"], ["强化学习", "环境+奖励", "策略", "下棋、机器人控制"]] },
            { type: "keypoints", items: ["机器学习从数据学规则，而非写死规则", "监督/无监督/强化三大范式", "损失函数衡量预测好坏", "梯度下降迭代最小化损失，w/b 学会参数"] },
          ],
        },
        {
          id: "ai-neural",
          title: "神经网络与 Generative AI",
          summary: "从感知机到 Transformer，理解现代 AI 的浪潮。",
          difficulty: "进阶",
          blocks: [
            { type: "p", text: "神经网络是把『无数个简单的计算单元（神经元）』层层堆叠：每层加权求和 + 非线性激活，深层网络能逼近极复杂的函数。今天的大语言模型（LLM，如 GPT）基于 Transformer 架构，用『注意力』机制处理句子，吃了海量文本后学会了生成语言。" },
            { type: "code", lang: "javascript", title: "单层神经元的本质（可运行）", code: '// 一个神经元做的事情：加权求和 -> 激活函数\nfunction neuron(inputs, weights, bias, activate = relu){\n  let sum = bias;\n  for(let i=0;i<inputs.length;i++) sum += inputs[i]*weights[i];\n  return activate(sum);\n}\n\n// 激活函数：引入非线性，否则多层也无意义\nconst relu = (x) => Math.max(0, x);\nconst sigmoid = (x) => 1/(1+Math.exp(-x));\n\n// 模拟：根据 (是否晴天, 是否有空) 决定是否出门\nconst inputs = [0.9, 1.0];  // 两个特征\nconst weights = [0.5, 0.6];\nconst output = neuron(inputs, weights, -0.3, sigmoid);\nconsole.log("神经元输出(越接近1越倾向出门):", output.toFixed(3));\n\n// 堆叠神经元 + 多层 = 深度神经网络\n// 注意力机制(Transformer 核心)让模型关注相关词\nconsole.log("LLM 本质：海量参数的 Transformer，从语料学语言概率分布");' },
            { type: "tip", title: "上手建议", text: "别被数学吓住。先用 <code.inline>scikit-learn</code.inline>（Python）跑通分类/回归，再用 PyTorch 搭个神经网络，最后用现成的大模型 API 做应用。实践驱动学习最有效。" },
            { type: "keypoints", items: ["神经元=加权求和+激活函数", "深层网络能拟合复杂函数", "Transformer+注意力是现代 LLM 基础", "从上手实践(如 PyTorch)开始最有效"] },
          ],
        },
      ],
    },

    /* ================= 前沿与视野 ================= */
    {
      id: "frontier",
      name: "前沿技术视野",
      icon: "前",
      tagline: "微服务、区块链、Web3、边缘计算… 建立技术雷达。",
      intro:
        "技术日新月异，本板块帮你建立『技术雷达』：知道有哪些前沿方向、各自解决什么问题，遇到真实需求时能做出有信息量的判断。",
      meta: { 难度: "了解", 场景: "视野" },
      lessons: [
        {
          id: "frontier-radar",
          title: "技术趋势一览",
          summary: "微服务、云原生、LLM 应用、物联网… 各一句话说清。",
          difficulty: "了解",
          blocks: [
            { type: "p", text: "与其追逐每一个新词，不如理解『趋势背后的共同逻辑』：更解耦、更云化、更智能化、更开放。下面用最短篇幅认识几个高频方向。" },
            { type: "table", head: ["方向", "一句话本质", "代表"], rows: [["微服务", "把大单体拆成独立小服务", "Spring Cloud, 容器编排"], ["云原生", "面向云设计：容器+微服务+声明式", "K8s, Serverless"], ["LLM 应用", "让语言模型驱动应用（Agent/RAG）", "Copilot, 智能助手"], ["边缘/物联网", "计算下沉到设备端", "智能家居, 车联网"], ["Web3/区块链", "去中心化信任与数字资产", "以太坊, DeFi"], ["量子计算", "用量子态并行计算", "仍有大量未解决难题"]] },
            { type: "keypoints", items: ["理解趋势本质比记新词更重要", "解耦、云化、智能化是共同主线", "LLM 应用是当前最热落地方向", "持续学习比掌握特定技术更重要"] },
          ],
        },
      ],
    },
  ],
};