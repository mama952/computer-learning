/* ============================================================
   计算机知识库 · 数据：大型软件项目工程
   schema: { id, name, icon, description, children:[{id,name,icon,tagline,intro,meta,lessons:[{id,title,summary,difficulty,blocks,templates}]}] }
   block.type: p | h | h3 | list(ordered?) | tip | info | warn | danger | keypoints | code | table
   ============================================================ */
window.CS_PROJECT_ENG = {
  "id": "cs-project-devtools",
  "name": "大型软件项目工程",
  "icon": "项",
  "description": "从『写代码』到『做产品』的关键一跃：项目结构、依赖管理、构建打包、单元测试、Git 协作、CI/CD、部署运维、架构设计、微服务与分布式，再到一个真实项目从 0 到上线。这是面向真实工业级项目的完整工程能力地图。",
  "children": [
    /* ================= 项目结构与工程化 ================= */
    {
      "id": "proj-structure",
      "name": "项目结构与工程化",
      "icon": "构",
      "tagline": "一个能支撑多年维护的代码库，长什么样。",
      "intro": "小项目随意写，大项目必须讲结构。工程化的本质是用约定与工具，把『只有你能维护的代码』变成『团队能长期维护的代码』。这一板块讲清楚目录、模块、与依赖边界。",
      "meta": { "难度": "进阶", "场景": "大型项目" },
      "lessons": [
        {
          "id": "proj-1-why-eng",
          "title": "为什么需要工程化：从单文件到大项目",
          "summary": "看清『能跑』和『能维护』之间的鸿沟，理解内聚与耦合。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "写 100 行代码时，一切都在脑子里。写 10 万行时，没人能记住全部。工程化不是为了炫技，而是对抗两件事：① 认知负担（代码我还能不能改对）；② 变更风险（改了 A 会不会弄坏 B）。核心抓手就是「内聚」与「耦合」。" },
            { "type": "keypoints", "items": ["内聚 Cohesion：把相关的代码放在一起（高内聚）", "耦合 Coupling：模块之间依赖要少、要弱（低耦合）", "高内聚 + 低耦合 = 便于理解、复用、测试、并行开发", "『能跑』是起点，『能改对且不改坏』才是工程目标"] },
            { "type": "info", "title": "为什么内聚耦合这么重要", "text": "一段代码的修改会牵动多少处，取决于耦合度。耦合越低，改一个地方越放心、越省事，这就是可维护性。这是所有结构设计的底层动机。" },
            { "type": "code", "lang": "javascript", "title": "识别坏味道：字符串散落", "code": "// 反例：业务常量散落在到处，改一下要全局搜索\nif (order.status === \"paid\") { /* ... */ }\nif (user.role === \"admin\")   { /* ... */ }\n\n// 正例：集中定义，一处修改全局生效\nconst STATUS = { DRAFT: \"draft\", PAID: \"paid\", SHIPPED: \"shipped\" };\nconst ROLE   = { ADMIN: \"admin\", USER: \"user\" };\nif (order.status === STATUS.PAID) { /* ... */ }\nif (user.role   === ROLE.ADMIN)   { /* ... */ }" },
            { "type": "code", "lang": "python", "title": "一个真实的『可能变坏』的例子",
              "code": "# 反例：一个函数干了太多事、且直接依赖全局\ncart = []\n\ndef checkout(user, product_id):\n    global cart\n    cart.append(product_id)          # 副作用：改了全局\n    total = 0\n    prices = {1: 100, 2: 200}        # 价格硬编码在函数里\n    for pid in cart:\n        total += prices.get(pid, 0)\n    print(f\"{user} 下单，总共 {total} 元\")  # 直接打印，难测试\n\ncheckout(\"小明\", 1)\n\n# 正例：纯函数 + 数据驱动，可单元测试\ndef calc_total(cart, prices):\n    return sum(prices.get(pid, 0) for pid in cart)\n\ncart = [1, 2]\nprices = {1: 100, 2: 200}\nprint(calc_total(cart, prices))   # 不依赖全局、无副作用、易测" },
            { "type": "warn", "title": "别一上来就过度设计", "text": "工程化要匹配项目规模。5 个文件的小工具别硬套微服务。原则是 YAGNI（你不会需要它）：只在确实需要时引入复杂度，并保持架构可演进。" },
            { "type": "keypoints", "items": ["高内聚、低耦合是工程化的最高原则", "让函数纯、让常量集中、让副作用收敛，是立刻能做的改进", "工程化程度要匹配项目规模，避免过度设计"] }
          ]
        },
        {
          "id": "proj-2-directory",
          "title": "大型项目的目录结构设计",
          "summary": "按『功能』还是按『技术』分层，以及模块边界的划分。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "一个常见误区是『按技术类型堆目录』：把所有 controller 放一起、所有 model 放一起。初期整齐，项目变大后，改一个业务功能要横跨十几个目录。更好的做法是『按功能域 feature 划分』：每个功能自带它的接口、逻辑、数据。" },
            { "type": "code", "lang": "text", "title": "按技术分层（早期简单，后期痛苦）",
              "code": "src/\n  controllers/     # 所有接口\n    userController.js\n    orderController.js\n  models/          # 所有数据模型\n    user.js\n    order.js\n  services/        # 所有业务逻辑\n    userService.js\n    orderService.js\n# 改一个『下单』功能：要改 models + services + controllers 三个目录" },
            { "type": "code", "lang": "text", "title": "按功能域划分（规模化首选）",
              "code": "src/\n  features/\n    auth/            # 认证功能域\n      auth.api.js\n      auth.service.js\n      auth.model.js\n      auth.test.js\n    order/           # 下单功能域：改订单只看这里\n      order.api.js\n      order.service.js\n      order.model.js\n      order.test.js\n  shared/            # 跨功能的共享工具（无业务语义）\n    logger.js\n    http.js\n# 业务内聚：一个功能的所有相关代码就在一个目录" },
            { "type": "table", "head": ["维度", "按技术分层", "按功能域划分"], "rows": [["定位一个文件", "靠记忆/全局搜索", "按功能直达，路径即语义"], ["修改一个功能", "跨多个目录", "基本在一个目录内"], ["新人上手", "需理解全局结构", "从功能域切入更快"], ["何时用", "小型/库项目", "中大型业务项目"]] },
            { "type": "tip", "title": "目录设计的检验标准", "text": "好的目录，是『看路径就知道它属于哪个业务、做什么事』。如果一个功能的所有改动集中在同一目录，说明划分得不错；如果经常跨目录改，就要重新考虑边界了。" },
            { "type": "warn", "title": "包的边界要对齐业务边界", "text": "两个功能之间相互 import 对方的内部实现，会造成『循环依赖』与『脆弱耦合』。原则：内部实现不跨域复用，只能通过对方暴露的公开接口（入口）来协作。" },
            { "type": "keypoints", "items": ["目录即语义：看路径就知道属于哪个业务、做什么", "按功能域划分优于按技术分层，规模化首选", "内聚功能、降低跨目录改动", "跨域只能走公开接口，不跨约束内实现"] }
          ]
        },
        {
          "id": "proj-3-monorepo",
          "title": "Monorepo 与多模块架构",
          "summary": "把所有项目放一个仓库，还是拆成多个仓库？各有取舍。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "当你有『前端』『后端』『共享库』的时候，就面临仓库组织的选择。Monorepo（单一代码库）把它都放在一个仓库里统一管理；Multirepo 则每个独立仓库。现代大厂多采用 Monorepo 搭配 workspace 工具。" },
            { "type": "table", "head": ["维度", "Monorepo 单一仓库", "Multirepo 多仓库"], "rows": [["代码共享", "原子修改、共享方便", "需发布独立包来共享"], ["门槛与工具", "高，需 workspace/缓存", "低，各自为政"], ["一次构建全部", "方便，能保证一致性", "困难"], ["权限隔离", "弱，需更细的配置", "天然隔离"], ["典型工具", "nx / turborepo / pnpm workspace / Bazel", "Git/各包管理器"]] },
            { "type": "code", "lang": "text", "title": "Monorepo 结构示例（pnpm/nx 风格）",
              "code": "my-repo/\n  apps/\n    web/          # 前端应用\n    api/          # 后端应用\n  packages/\n    shared-utils/ # 共享工具库（两边都用）\n    ui/           # 共享 UI 组件库\n  pnpm-workspace.yaml   # 定义 workspace 根\n  package.json" },
            { "type": "code", "lang": "bash", "title": "pnpm workspace 一行命令跑所有应用",
              "code": "# 初始化 workspace 根（根 package.json 里声明）\npnpm init -y\n# 在根 package.json 加：\n#   \"packageManager\": \"pnpm\",\n#   \"scripts\": { \"build\": \"pnpm -r run build\" }\n\n# 装依赖：所有包统一\npnpm install\n# 递归执行每个包的脚本\npnpm -r run build\npnpm -r run test\n# 只跑某个包\npnpm --filter apps/web run dev" },
            { "type": "tip", "title": "小团队直接上 Monorepo", "text": "对于绝大多数中小团队，Monorepo 的收益（原子提交、一致版本、一次构建）远大于工具学习成本。pnpm workspace + Turborepo 是现代入门组合。" },
            { "type": "keypoints", "items": ["Monorepo：共享方便、一致性好，工具成本高", "Multirepo：隔离好、门槛低，共享需发包", "新项目大多建议 Monorepo；成熟组织常多仓迁移为单一仓", "用 workspace 工具管理依赖与构建缓存"] }
          ]
        }
      ]
    },

    /* ================= 依赖管理 ================= */
    {
      "id": "dep-mgmt",
      "name": "依赖管理",
      "icon": "赖",
      "tagline": "你的项目一半不是你写的，得管好另一半。",
      "intro": "现代项目依赖成百上千个第三方包。依赖管理不是『装一下那么简单』，而是锁版本、讲语义化版本号、做安全审计、警惕供应链攻击。管不好依赖，项目就站在流沙上。",
      "meta": { "难度": "进阶", "场景": "大型项目" },
      "lessons": [
        {
          "id": "dep-1-semver",
          "title": "语义化版本 SemVer 与版本范围",
          "summary": "major.minor.patch，看懂每个数字背后承诺的破坏性。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "语义化版本（Semantic Versioning）用 <code.inline>MAJOR.MINOR.PATCH</code.inline> 三段数字约定版本升级的含义：PATCH 修 bug、MINOR 加向后兼容的新功能、MAJOR 有破坏性变更（你可能要改代码）。理解它，才能安全升级依赖。" },
            { "type": "table", "head": ["位置", "示例", "含义", "是否破坏"], "rows": [["MAJOR", "3.0.0", "不兼容的大改动", "是"], ["MINOR", "2.5.0", "新功能，向后兼容", "否"], ["PATCH", "2.5.3", "Bug 修复，向后兼容", "否"], ["预发布", "2.5.0-beta.1", "即将发布的测试版", "看情况"]] },
            { "type": "code", "lang": "bash", "title": "npm 的版本范围写法",
              "code": "\"dependencies\": {\n  \"chalk\":   \"4.1.2\",      // 精确锁定 4.1.2\n  \"lodash\":  \"^4.17.21\",   // 允许 4.x，但同 MAJOR：4.17.21 到 <5.0.0\n  \"react\":   \"~18.2.0\",    // 允许 18.2.x，只允许 PATCH\n  \"axios\":   \">=0.21 <0.25\", // 范围区间\n  \"dayjs\":   \"1.x\"         // 允许 1 的任何小版本\n}\n# ^ 允许 MINOR；~ 只允许 PATCH；建议团队统一策略" },
            { "type": "warn", "title": "永远不会变的 0.x 陷阱", "text": "<code.inline>0.x</code.inline> 版本不遵守 SemVer 承诺，<code.inline>0.x -> 0.y</code.inline> 也可能破坏兼容。早期项目（0.x）我建议用 <code.inline>~0.x.y</code.inline> 或锁定精确版本，避免悄悄被升级破坏。" },
            { "type": "info", "title": "锁文件 Lockfile 的作用", "text": "<code.inline>package-lock.json</code.inline> / <code.inline>pnpm-lock.yaml</code.inline> / <code.inline>poetry.lock</code.inline> 记录了『实际解析出的每个具体版本』。它保证任何人在任何机器装出来完全一致，必须提交进 Git，不要删。" },
            { "type": "keypoints", "items": ["MAJOR 破坏 / MINOR 加功能 / PATCH 修 bug", "^ 允许小版本、~ 只允许补丁", "lockfile 保证依赖『可复现』，务必提交", "项目未稳定前用精确版本更安全"] }
          ]
        },
        {
          "id": "dep-2-pkg-manager",
          "title": "主流生态的包管理器对照",
          "summary": "npm/pip/Cargo/go mod 各自怎么管依赖。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "table", "head": ["生态", "命令", "清单文件", "锁文件", "特点"], "rows": [["Node/npm", "npm install", "package.json", "package-lock.json", "最广泛，慢、node_modules 大"], ["Node/pnpm", "pnpm add", "package.json", "pnpm-lock.yaml", "磁盘高效、硬链接、严格"], ["Node/yarn", "yarn add", "package.json", "yarn.lock", "老牌、缓存好"], ["Python/pip", "pip install", "requirements.txt", "无（不推荐）", "简单但无锁，易出问题"], ["Python/poetry", "poetry add", "pyproject.toml", "poetry.lock", "现代、有锁可复现"], ["Rust/Cargo", "cargo add", "Cargo.toml", "Cargo.lock", "编译期，二进制可追踪"], ["Go", "go get", "go.mod", "go.sum", "module 内建，语义直观"]] },
            { "type": "code", "lang": "python", "title": "requirements.txt 正确写法",
              "code": "# 顶层直接依赖：用 >= 或 ==（建议 == 加锁可复现）\nflask==3.0.3\nrequests==2.32.3\n\n# 但仅这样不够：flask 自己还依赖 werkzeug 等\n# 完整需要 pip freeze，但 freeze 会带出全部间接依赖\n# pip freeze > requirements.txt   # 全部精确版本（锁文件式）\n\n# 更现代：pyproject.toml + poetry.lock 两个文件分别管\n# pyproject.toml写直接依赖，poetry.lock写完整解析结果" },
            { "type": "code", "lang": "go", "title": "Go 模块基础命令",
              "code": "# 初始化模块\n# go mod init example.com/myapp\n# 添加依赖\n# go get github.com/gin-gonic/gin@v1.9.1\n# 整理 go.mod 与 go.sum\n# go mod tidy\n# 下载全部依赖进模块缓存\n# go mod download\n# 升级到最新\n# go get -u\n\n# go.mod 记录直接依赖与版本；go.sum 记录校验和，防止被篡改" },
            { "type": "tip", "title": "统一团队工具链", "text": "团队一定要统一包管理器（比如都用 pnpm 或都用 poetry），并提交锁文件。否则不同人装出来的依赖不同，就会出现『我这就好、你那报错』的经典事故。" },
            { "type": "keypoints", "items": ["每个生态都有自己的清单 + 锁文件", "锁文件提交进 Git，保证可复现", "Python 建议用 pyproject.toml + poetry/uv", "统一工具链是团队协作的基本纪律"] }
          ]
        },
        {
          "id": "dep-3-supply-chain",
          "title": "依赖安全与供应链治理",
          "summary": "你的依赖也可能有漏洞，甚至被投毒。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "供应链攻击指攻击者往合法的开源包里塞恶意代码，一旦你安装，就中了。近年多起事件（如 event-stream、colors、faker、各种 typosquatting）让依赖安全成为必修课。要点：最小依赖、锁版本、定期审计、只信可信源。" },
            { "type": "code", "lang": "bash", "title": "查看与审计自己的依赖",
              "code": "# npm 审计已知漏洞\nnpm audit\nnpm audit fix          # 自动修复（只升小版本时安全）\nnpm outdated            # 看哪些依赖有新版本\npnpm why <pkg>          # 看这个包为何被装进来（间接依赖树）\n\n# Python：pip-audit / pip list --outdated\n# pip install pip-audit && pip-audit\n\n# Go\n# govulncheck ./...\n\n# 一个依赖是不是唯一需要：\n# find node_modules -type d | wc -l   # 看数量，惊不惊人" },
            { "type": "code", "lang": "bash", "title": "尽力而为的安全清单",
              "code": "# 1) 锁定精确版本或用范围但可复现（提交 lockfile）\n# 2) 依赖加进白名单前先查：stars、下载量、维护活跃度\n# 3) 警惕名字极像知名包的投毒包（typosquatting）\n#    如 requis vs request；用 npm view <pkg> 看清真实作者\n# 4) CI 里跑 npm audit，漏洞即卡住发布（gate）\n# 5) 重新审视：这个依赖真有必要吗？能少则少\n# 6) 关注官方安全公告渠道" },
            { "type": "warn", "title": "最小依赖原则", "text": "每一个依赖都是一份代码+一个潜在风险面。加依赖前先问自己：这 20 行能自己写吗？越是核心逻辑越要少依赖。依赖少，漏洞面和体积都更小。" },
            { "type": "info", "title": "transitive dependency 间接依赖", "text": "你装 A，A 又依赖 B，B 又依赖 C。你只管了 A，但 C 拖进来了你不知道。审计工具（npm audit / govulncheck / pip-audit）正是帮你看到『整张依赖树』的风险。" },
            { "type": "keypoints", "items": ["依赖越多风险面越大，坚持最小依赖", "提交 lockfile，锁死可复现版本", "CI 内跑依赖审计，发现漏洞就拦截", "安装前核查包的来源、维护度、异常的高下载量"] }
          ]
        }
      ]
    },

    /* ================= 构建与打包 ================= */
    {
      "id": "build-system",
      "name": "构建与打包",
      "icon": "建",
      "tagline": "从源码到可发布产物之间发生了什么。",
      "intro": "源码不能直接上生产：要转译、压缩、切片、处理资源、注入环境变量，最后产出优化过的『构建物』。构建系统决定你的项目能不能规模化。这一板块讲透构建流程、多环境与构建优化。",
      "meta": { "难度": "进阶", "场景": "大型项目" },
      "lessons": [
        {
          "id": "build-1-flow",
          "title": "现代构建流程到底干了什么",
          "summary": "转译 → 处理资源 → 打包 → 压缩 → hash。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "无论前端后端，构建的本质是『把开发友好的源码，变成运行时友好的产物』。前端典型管线：把 TS/JSX/SCSS 转译成浏览器能跑的 JS/CSS，合并、压缩、加版本 hash，输出到 dist。后端则编译/打包部署单元。" },
            { "type": "code", "lang": "text", "title": "前端构建管线示意（vite/webpack）",
              "code": "开发源码                    →  产物 out/\nit:\n  index.ts (TS)          →  index-3f9a.js   (JS, 压缩+hash)\n  App.tsx (JSX/React)    →                \n  main.css (SCSS导入)    →  main-8c2d.css  (合并+重命名+hash)\n  assets/logo.png        →  assets/logo.9ab1.png (带hash防缓存)\n\n# hash 的意义：内容变了文件名就变，浏览器才不缓存旧文件\n# index.html 自动引用带最新 hash 的产物" },
            { "type": "code", "lang": "bash", "title": "为什么需要 tree-shaking",
              "code": "# 问题：import 一个库，往往只用到它的 1 个函数\n# import { debounce } from \"lodash\";\n# 打包时若整库灌进来，体积巨大\n\n# 解决：按需引入 + 构建器 Tree-shaking（摇树）剔除没用到的代码\n# 前提：库是 ESM 模块 + 无副作用标记\n\n# 手动策略对比：\n# 1) 整库引入（体积最大）\n# 2) import { debounce } from \"lodash\";   // 现代打包器可摇树\n# 3) import debounce from \"lodash/debounce\"; // 直接取子模块（最稳）" },
            { "type": "info", "title": "Sourcemap 源码映射", "text": "压缩后的代码报错看不懂？sourcemap 把产物映射回源码，让你在浏览器/监控里看到的错误堆栈是原始代码。生产环境建议加 sourcemap 但注意别把未压缩源码完全暴露在公开 CDN。" },
            { "type": "warn", "title": "别把 node_modules 打进产物体积", "text": "判断构建是否健康，看首屏体积。目标 JS 通常 < 170KB（gzip）。体积告警时先查：是不是误把整库、内联 JSON、重复引用的 React 之类全灌进去了。" },
            { "type": "keypoints", "items": ["构建=转译+打包+压缩+hash，产物可被前端高效加载", "Tree-shaking 剔除未用代码，控制产物体积", "sourcemap 把报错映射回源码", "内容 hash 用于缓存更新"] }
          ]
        },
        {
          "id": "build-2-env",
          "title": "多环境构建与配置管理",
          "summary": "dev / staging / prod 怎么隔离，环境变量怎么注入。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "同一个代码要部署到开发、测试、生产等多个环境。核心问题：不同环境的『配置』不同（数据库地址、API 域名、密钥）。业界基准是十二要素（12-Factor）里的配置管理：配置与代码分离，由运行环境注入。" },
            { "type": "code", "lang": "bash", "title": ".env 家族：前端构建注入",
              "code": "# .env.development    本地开发环境\nVITE_API_BASE=http://localhost:3000\nVITE_DEBUG=true\n\n# .env.production     生产环境（只有 VITE_ 前缀会暴露给前端）\nVITE_API_BASE=https://api.example.com\nVITE_DEBUG=false\n\n# 在代码中用 process.env.VITE_API_BASE（Node/webpack）\n# 或用 import.meta.env.VITE_API_BASE（Vite）\n# 构建时这些值会被替换进产物\n\n# 危险：绝不要在前端 .env 里放真正的密钥！\n# 前端 .env 会被打进包里，等于公开" },
            { "type": "code", "lang": "bash", "title": "后端：运行时环境变量",
              "code": "# 后端环境变量注入（Docker/云平台/系统）\nexport DB_HOST=production-db.internal\nexport DB_PASSWORD=<从秘钥管理系统读>\nexport APP_ENV=production\n\n# 12-Factor 原则：\n# 1) 配置存环境变量，不写死在代码\n# 2) 环境变量与代码分离，可随时变更\n# 3) 同一份代码，仅靠环境变量区分环境 → 一处构建，处处运行\n\n# 本地用 .env 文件，CI/生产用密钥管理系统（如 Vault/云厂商 SecretStore）" },
            { "type": "table", "head": ["配置项", "开发 dev", "预发 staging", "生产 prod"], "rows": [["数据库", "本地库", "与生产结构一致的预发库", "真实生产库"], ["密钥", "本地假密钥", "受控密钥", "最高权限真实密钥"], ["日志", "详细、控制台", "级别合理", "级别高、接入监控"], ["调试工具", "开启 HMR", "关闭", "关闭"]] },
            { "type": "warn", "title": "密钥绝不进源码库", "text": "任何硬编码在代码里、commit 进 Git、或留在前端产物的密钥都是事故隐患。密钥一律放环境变量 / 密钥管理服务，并在 Git 中用 .gitignore 排除 .env 文件。" },
            { "type": "keypoints", "items": ["同代码 + 不同环境变量 = 不同环境（12-Factor）", "前端 .env 会暴露，绝不能放真实密钥", "密钥走环境变量或密钥管理系统", "staging 尽量镜像生产，降低『上生产才炸』的概率"] }
          ]
        },
        {
          "id": "build-3-optimize",
          "title": "构建优化与缓存策略",
          "summary": "让构建更快、产物更小、发布更可靠。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "项目大了以后，一次构建可能从几秒涨到几分钟，拖慢部署。优化的两条主线：① 让构建更快（缓存、增量、并行）；② 让产物更小加载更快（代码分割、gzip/brotli）。" },
            { "type": "code", "lang": "bash", "title": "构建加速三板斧",
              "code": "# 1) 构建缓存：没改的模块别重新编译\n# Turborepo / Nx 记录每个任务的产物体积哈希，重复部分直接用缓存\n# npx turbo build --cache-dir=.turbo\n\n# 2) 增量编译：只编译变化的\n# esbuild/tsc --incremental\n\n# 3) 并行：独立子任务同时跑\n# pnpm -r run build          # 递归并行\n# Turborepo 的 dependsOn 自动编排依赖顺序+并行\n\n# 4) 用更快的底层工具（结尾一致）\n# esbuild / rolldown / SWC 比老工具快一个数量级" },
            { "type": "code", "lang": "bash", "title": "产物优化：代码分割",
              "code": "# 目标：首屏别加载全部代码，用到再加载\n\n# 动态 import——按需加载（浏览器原生支持）\n# const { Chart } = await import(\"./chart\");\n# 打包器会把它切成单独 chunk，要用时才请求\n\n# 抽取公共/第三方库成独立 chunk，利用长缓存\n# vendor.js（react, react-dom 等不常变）单独打包\n# 这样业务代码更新时，vendor 仍用浏览器缓存，回更快" },
            { "type": "tip", "title": "真优化靠数据不靠直觉", "text": "优化前先测量：用 Lighthouse 看首屏加载、用构建报告工具看产物组成。真正压垮性能的往往是『误引入的大依赖』或『首屏同步加载了全部路由』，而不是微小的配置差。" },
            { "type": "keypoints", "items": ["构建缓存把重复工作变成 O(1) 命中", "代码分割让『用到的才加载』", "长缓存：不常变的 vendor 单独 chunk", "缓存失效策略要和『部署回滚』配合好"] }
          ]
        }
      ]
    },

    /* ================= 测试与代码质量 ================= */
    {
      "id": "test-quality",
      "name": "测试与代码质量",
      "icon": "测",
      "tagline": "没有测试的改动，等于把代码当赌注。",
      "intro": "写测试不是写作业，而是给你的代码上保险。从单元测试、TDD，到 Mock、覆盖率、Code Review、Lint——质量保障是一整套体系。这一板块把测试与质量工程讲透。",
      "meta": { "难度": "进阶", "场景": "大型项目" },
      "lessons": [
        {
          "id": "test-1-pyramid",
          "title": "测试金字塔与测试类型",
          "summary": "单元/集成/端到端测试各管什么，怎么分层才划算。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "测试金字塔：底层是大量快速的单元测试，中层是较少的集成测试，顶层是少量但慢的端到端（E2E）测试。越往下，越便宜、越快、越能频繁跑；越往上越贵越慢。合理配比是 UL 多、E2E 少。" },
            { "type": "table", "head": ["类型", "对象", "速度", "数量", "典型工具"], "rows": [["单元测试", "单个函数/类", "极快(ms)", "很多", "Jest/Vitest/pytest/JUnit"], ["集成测试", "模块间交互+数据库", "快(s)", "适中", "同上 + 测试数据库"], ["契约/组件测试", "组件/服务契约", "中", "一些", "Testing Library/契约工具"], ["E2E 端到端", "整个系统用户流程", "慢(min)", "很少", "Playwright/Cypress"]] },
            { "type": "code", "lang": "python", "title": "单元测试的最小示范（pytest）",
              "code": "# 被测函数\n\ndef calc_total(cart, prices):\n    return sum(prices.get(pid, 0) for pid in cart)\n\n# 测试文件 test_cart.py\n\ndef test_empty_cart_is_zero():\n    assert calc_total([], {}) == 0\n\ndef test_known_items():\n    assert calc_total([1, 2], {1: 100, 2: 200}) == 300\n\ndef test_missing_price_counts_zero():\n    assert calc_total([99], {}) == 0   # 未知商品按 0\n\n# 运行： pytest  test_cart.py\n# 输出： 3 passed，给你三个『行为契约』" },
            { "type": "code", "lang": "javascript", "title": "Jest 单元测试对照",
              "code": "// 被测函数\nfunction calcTotal(cart, prices) {\n  return cart.reduce((s, id) => s + (prices[id] || 0), 0);\n}\n\n// 测试\ntest(\"空购物车为 0\", () => expect(calcTotal([], {})).toBe(0));\ntest(\"已知商品求和\", () =>\n  expect(calcTotal([1, 2], { 1: 100, 2: 200 })).toBe(300));\n" },
            { "type": "tip", "title": "测试保护什么", "text": "测试真正的价值是『让我敢改代码』。有一张可靠的测试网，重构、升级依赖、加功能时才不会被回归吓住。测试是安全网，不是绩效考核的负担。" },
            { "type": "keypoints", "items": ["金字塔：大量单元 + 适量集成 + 少量 E2E", "单元测试要快、命名要描述行为", "测试是让重构安全的『安全网』", "不用追求 100% 覆盖率，测关键行为优先"] }
          ]
        },
        {
          "id": "test-2-tdd-mock",
          "title": "TDD 循环与 Mock 解密",
          "summary": "红-绿-重构的节奏，以及怎么替掉外部依赖。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "TDD（测试驱动开发）工作流：先写一个会失败的测试（红），再写最简代码让它通过（绿），最后重构。它强迫你先把『要什么行为』想清楚，同时保证每个功能都有测试覆盖。Mock 则是用『替身』替代外部依赖，让测试快且确定。" },
            { "type": "code", "lang": "python", "title": "TDD：先写测试（红）",
              "code": "# 第一步：写失败的测试\nfrom payment import build_receipt\n\ndef test_receipt_contains_line_items():\n    r = build_receipt([{\"name\": \"书\", \"price\": 50, \"qty\": 2}])\n    assert \"书\" in r and \"100\" in r   # 还没实现，这里会失败\n# 运行：pytest → test_receipt_contains_line_items FAILED (红)" },
            { "type": "code", "lang": "python", "title": "TDD：写最简实现（绿）+ 重构",
              "code": "# 第二步：最简实现让它通过\n\ndef build_receipt(items):\n    lines = []\n    for it in items:\n        sub = it[\"price\"] * it[\"qty\"]\n        lines.append(f\"{it['name']} x{it['qty']} = {sub}\")\n    return \"\\n\".join(lines)\n# 运行 → PASSED (绿)\n\n# 第三步：重构（保持行为不变，改善结构）——比如抽函数、改名\n# 每步都有测试兜底，改坏了立刻知道（红）" },
            { "type": "code", "lang": "javascript", "title": "Mock：替掉外部依赖（Jest）",
              "code": "// 被测：从数据库读用户再发邮件\nconst { sendWelcomeEmail } = require(\"./email\");\nasync function onSignup(userRepo, emailSvc, userId) {\n  const user = await userRepo.find(userId);\n  await emailSvc.send(user.email, \"欢迎\");\n  return user;\n}\n\n// 测试：不碰真实数据库和真实邮箱，用 mock 替身\ntest(\"注册后给用户发欢迎邮件\", async () => {\n  const fakeRepo = { find: jest.fn().mockResolvedValue({ id: 1, email: \"a@b.c\" }) };\n  const fakeMail = { send: jest.fn() };\n\n  await onSignup(fakeRepo, fakeMail, 1);\n\n  expect(fakeMail.send).toHaveBeenCalledWith(\"a@b.c\", \"欢迎\");\n});\n// 测试只关心『行为』，不依赖真实外部世界 → 快、稳、可并行" },
            { "type": "warn", "title": "别 Mock 得走火入魔", "text": "Mock 过度会让测试『测的是假的实现』，失去意义。原则：你自己的纯逻辑值得单测；对外部系统（数据库、第三方 API）用 mock，但一定要有少量真实集成测试保底，否则上线才发现接的是假的。" },
            { "type": "keypoints", "items": ["TDD：红(失败)→绿(通过)→重构，每步有测试兜底", "Mock/Stub/Fake 是替掉外部依赖的『替身』", "依赖注入（把依赖传进来）是让代码可测的前提", "单测测纯逻辑，真实外部用少量集成测保底"] }
          ]
        },
        {
          "id": "test-3-code-review",
          "title": "规范化、Lint 与 Code Review",
          "summary": "机器管格式，人管逻辑，两者都不能少。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "代码质量分两层：机器ower的『格式与静态检查』和人做的『Code Review』。Lint/Formatter（ESLint、Prettier、Ruff）解决风格与低级错误；Code Review 解决设计与逻辑问题。两者缺一不可。" },
            { "type": "code", "lang": "bash", "title": "Lint + 格式化 + 提交钩子",
              "code": "# 安装\n# npm i -D eslint prettier husky lint-staged\n# pip install ruff\n\n# 提交前自动检查并修复：husky + lint-staged\n# .husky/pre-commit:\n#   npx lint-staged\n# package.json:\n#   \"lint-staged\": {\n#     \"*.js\": [\"eslint --fix\", \"prettier --write\"],\n#     \"*.jsx\": [\"eslint --fix\", \"prettier --write\"]\n#   }\n\n# CI 里再强制检查一次，防止绕过钩子\n# npx eslint . --max-warnings=0\n# npx tsc --noEmit   # 类型检查即质量门禁" },
            { "type": "code", "lang": "text", "title": "Code Review 该看什么",
              "code": "审代码，四层递进：\n  1) 正确性：逻辑对吗？边界(空、0、超长)处理了吗？\n  2) 安全：有没有注入/越权/敏感信息泄漏？\n  3) 可维护：命名清楚吗？有人写注释吗？复杂度能降吗？\n  4) 可测试：这段能测吗？测试补了吗？\n\n报『好 review』的方式：\n  - 针对代码说话，不对人\n  - 指出『为什么』与『怎么改更稳』\n  - 大改动分成小 PR，别让审稿人读 3000 行" },
            { "type": "info", "title": "Lint 与类型检查是门禁", "text": "把 ESLint/Prettier/类型检查放进 CI，并把『警告数量为 0』设为门禁。机器能抓的错（未用变量、空指针、风格不一）让它抓，把人的精力留给真正需要判断的架构与逻辑问题。" },
            { "type": "keypoints", "items": ["Lint/格式化管『一致性』，Review 管『设计与正确性』", "pre-commit 钩子 + CI 门禁防回潮", "Review 看正确性→安全→可维护→可测试", "小 PR、对事不对人，review 高效又友好"] }
          ]
        }
      ]
    },

    /* ================= Git 高级协作 ================= */
    {
      "id": "git-collab",
      "name": "Git 高级协作与工作流",
      "icon": "流",
      "tagline": "团队里 Git 不只是存储，更是协作协议。",
      "intro": "学了 git add/commit/push 只是开始。真实团队要定『分支策略』、走 PR 评审、懂 rebase 与事故救援。这一板块讲透主流协作模型，以及遇到冲突、误操作时怎么救场。",
      "meta": { "难度": "进阶", "场景": "大型项目" },
      "lessons": [
        {
          "id": "git-1-flow-models",
          "title": "主流分支模型：Git Flow / GitHub Flow / Trunk-based",
          "summary": "不同团队规模选哪种分支策略。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "分支模型是团队约定的『代码如何流动』的规则。三种主流模型：Git Flow（多长命分支，复杂但严谨，适合正式发版）、GitHub Flow（极简，一条 main + feature 分支，适合持续部署）、Trunk-based（所有人在主干小步提交，配合特性开关，适合大型迭代快的团队）。" },
            { "type": "table", "head": ["模型", "特点", "分支", "适用"], "rows": [["Git Flow", "严谨、多分支", "main + develop + feature/release/hotfix", "有固定发版节奏的产品"], ["GitHub Flow", "极简、快", "main + feature 分支 + PR", "持续部署的 Web 项目"], ["Trunk Based", "主干开发", "几乎只有 main + 特性开关", "大规模、高频交付的团队"]] },
            { "type": "code", "lang": "text", "title": "GitHub Flow 的节奏",
              "code": "1. 从 main 拉功能分支\n   git checkout -b feature/login\n2. 在分支上提交小改动\n   git commit -m \"feat(auth): 增加登录接口\"\n3. 推远端并发起 PR（Pull Request）\n   git push -u origin feature/login\n   # 在 GitHub 上 Open PR\n4. CI 自动跑测试；多人 review\n5. 通过后 squash merge 进 main\n6. main 合并即自动部署（持续部署）\n\n# 规则：main 永远可部署；每个 PR 都小、聚焦" },
            { "type": "info", "title": "Conventional Commits 规范提交", "text": "约定式提交：<code.inline>type(scope): 描述</code.inline>，如 <code.inline>feat(auth): 新增登录</code.inline>、<code.inline>fix(order): 修复金额精度</code.inline>。好处：自动生成 changelog、自动判断版本号、一眼看懂历史。type 常见值：feat / fix / docs / refactor / test / chore。" },
            { "type": "warn", "title": "别把 main 弄成废墟", "text": "无论哪种模型，铁律都是 main 分支必须永远可部署、可发布。禁止把半成品直接合进 main。坏掉的 main 会卡住所有人。" },
            { "type": "keypoints", "items": ["Git Flow 严谨、GitHub Flow 极简、Trunk 高速", "小团队/持续部署优先 GitHub Flow", "conventional commits 让历史可读、可自动化", "main 永远可部署"] }
          ]
        },
        {
          "id": "git-2-pr-review",
          "title": "Pull Request 与 Code Review 流程",
          "summary": "PR 怎么写、怎么评审、分支保护怎么配。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "Pull Request 是『把一段代码合进主干』前的一道闸门：它触发 CI 跑测试，通知评审人看代码，通过后才合并。好的 PR 流程能把大量 bug 挡在上线前，也是团队知识传递的载体。" },
            { "type": "code", "lang": "text", "title": "一个高质量的 PR 描述模板",
              "code": "## 做了什么\n实现订单金额计算，含税费与折扣。\n\n## 为什么\n现有 calc_total 不含税，导致账单不准（issue #42）。\n\n## 改动\n- services/order.ts：新增 calcGrandTotal\n- features/order/*.test.ts：3 个新测试\n\n## 测试\n- 新增单测通过；npm run test 全绿\n- 本地手动跑通下单流程\n\n## 截图 (可选，UI 改动)\n[链接]\n\n## 检查清单\n- [x] 自测通过\n- [x] 无敏感信息\n- [x] 测试补齐" },
            { "type": "code", "lang": "bash", "title": "让 PR 可控：squash + 分支保护",
              "code": "# squash merge：把一个 PR 的 N 个提交压成一个，历史干净\n# git merge --squash <branch>\n\n# 分支保护设置（GitHub 仓库 Settings → Branches）：\n#   - Require PR review before merging\n#   - Require status checks (CI 必须绿) \n#   - 不允许向 main 直接 push\n#   - 过期的 review 自动失效\n\n# 一条命令丢弃本地废弃分支避免堆积\n# git branch -d feature-login" },
            { "type": "info", "title": "Review 的速度也重要", "text": "PR 拖太久会烂掉：分支落后主干、冲突增多、上下文遗忘。团队应约定『24 小时内 review』，小 PR 当天合入。合并得快，冲突少，迭代就顺。" },
            { "type": "warn", "title": "Review 不是找茬", "text": "Code Review 的最高目的是知识共享和质量把关，不是抓错羞辱。用提问代替命令（『这里的边界你处理了吗？』），对新成员尤其要友善。" },
            { "type": "keypoints", "items": ["PR = 合并前闸门：触发 CI + 人工评审", "PR 描述写清楚『做什么/为什么/怎么测』", "squash 合并保持历史整洁", "分支保护强制 review + CI 门禁"] }
          ]
        },
        {
          "id": "git-3-advanced-save",
          "title": "Git 进阶操与事故救援",
          "summary": "rebase、stash、cherry-pick、bisect，还有手滑了怎么救。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "真实开发会遇到：改到一半想切换分支、只想要别人的某一次提交、发版后发现引入了一个 bug……这些都要靠 Git 的进阶操作。掌握它们，等于给项目上了『后悔药』。" },
            { "type": "code", "lang": "bash", "title": "日常进阶操作",
              "code": "# stash：把未完成的改动暂存起来\n# git stash            # 保存到暂存区\n# git stash pop        # 恢复\n# git stash list\n\n# cherry-pick：只拿某一个提交到当前分支\n# git cherry-pick <commit-hash>\n\n# rebase：把分支基于最新的 main 重放，提交干净线性\n# git fetch origin\n# git rebase origin/main\n# 对比：merge 产生合并提交，rebase 线性整洁\n\n# 修改最近一次提交信息\n# git commit --amend -m \"新的信息\"\n# 注意：amend/rebase 会改写历史，已 push 并共享的分支别乱 rebase" },
            { "type": "code", "lang": "bash", "title": "事故救援：手滑了怎么办",
              "code": "# 1) 撤销最近一次提交（保留改动到工作区）\n# git reset --soft HEAD~1\n\n# 2) 撤销已 push 的提交，用 revert 生成一个反向提交（安全）\n# git revert <hash>\n\n# 3) 想找回删掉的工作：先别慌\ngit reflog          # 显示所有 HEAD 移动史，比如每次 commit/reset\n# 找到那次提交的 hash，然后\n# git reset --hard <hash>    # 回到那个状态\n# 或 git checkout <hash> -- <file> 只找回某个文件\n\n# 4) bisect：二分定位『哪个提交引入了 bug』\n# git bisect start\n# git bisect bad              # 当前是坏的\n# git bisect good <hash>      # 指定一个已知好的提交\n# 之后照着提示在每个提交跑一次测试，标好/坏\n# 它会二分快速锁死那个有问题的提交" },
            { "type": "warn", "title": "已共享的分支慎用 reset/rebase", "text": "<code.inline>reset --hard</code.inline> 和 <code.inline>rebase</code.inline> 会改写别人拉走的提交（force push 的风险）。对『合作开发且已 push』的分支，优先用 <code.inline>revert</code.inline> 这类『只加新提交不动历史』的方式，避免把队友搞崩。" },
            { "type": "keypoints", "items": ["stash 暂存、cherry-pick 拿单次、bisect 找 bug", "revert 撤销已共享提交（安全），reset 只用于未共享", "reflog 是最后的后悔药", "改写历史只对私有/未共享分支做"] }
          ]
        }
      ]
    },

    /* ================= CI/CD ================= */
    {
      "id": "cicd",
      "name": "CI/CD 持续集成与交付",
      "icon": "CD",
      "tagline": "把『手工发布』变成『一键自动』，质量还更高。",
      "intro": "持续集成(CI)让每次合并自动跑测试；持续交付(CD)让验证通过的代码自动部署。本质是把『容易出错的重复人工』交给流水线，且每次改动都被自动检查。这一板块从零搭建一条真实 CI/CD 流水线。",
      "meta": { "难度": "进阶", "场景": "大型项目" },
      "lessons": [
        {
          "id": "cicd-1-why",
          "title": "为什么需要 CI/CD",
          "summary": "从手动发布的混乱，到自动化交付的秩序。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "没有 CI/CD 的团队是这样发布的：『我到点了手动打包→上传服务器→停服→替换文件→重启→祈祷』。慢、易错、靠个人。CI/CD 把这三件事变成流水线自动执行：合并代码就自动测试，通过了就自动部署。平台一旦接入，发布不再靠人肉。" },
            { "type": "table", "head": ["术语", "含义", "价值"], "rows": [["持续集成 CI", "每次代码合并自动编译+单元测试", "早早暴露集成问题"], ["持续交付 CD(交付)", "可随时把任意版本发布到任何环境", "发布是一项常规操作"], ["持续部署 CD(部署)", "通过验证后自动上生产", "全自动，从合并到上线零人工"]] },
            { "type": "code", "lang": "text", "title": "没有流水线时的『手动发布清单』（低效）",
              "code": "（被逼无奈的日常）\n□ 手动 npm install 到服务器？\n□ 手动跑测试（记得吗？常常忘）\n□ 手动打包\n□ 停服、替换、重启\n□ 忘了环境变量 → 又停机一次\n□ 回滚？再手动切回旧版本\n\n# 引入 CI/CD 后这些全部自动化，且每次都有测试门禁" },
            { "type": "info", "title": "持续集成的『科学与精简』", "text": "CI 的黄金准则是『早失败、频繁集成』。把主干想成下水道：越晚集成越堵。每天每个人把代码合并进主干并自动验证，主干就永远健康。" },
            { "type": "keypoints", "items": ["CI=合并即测试，CD=通过即部署", "把发布从人肉清单变自动化流水线", "主干健康靠『频繁小步集成+自动验证』", "发布频率高，每次变更小，事故定位就快"] }
          ]
        },
        {
          "id": "cicd-2-actions",
          "title": "用 GitHub Actions 搭一条真实流水线",
          "summary": "从 workflow 语法到跑测试、构建、部署的完整示例。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "GitHub Actions 是托管在代码仓库旁的 CI/CD 平台：你在仓库里写一个 YAML 文件（workflow），GitHub 会在对应事件发生时（push、PR、定时、手动）于云端跑你定义的 job 和 step。这是上手 CI/CD 最快的方式。" },
            { "type": "code", "lang": "yaml", "title": ".github/workflows/ci.yml（最简 CI）",
              "code": "name: CI\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n      - run: npm ci            # 用锁文件装依赖\n      - run: npm run lint      # 代码规范门禁\n      - run: npm test          # 单元测试\n      - run: npm run build     # 构建" },
            { "type": "code", "lang": "yaml", "title": "CD：合并到 main 自动构建并部署到 Pages",
              "code": "name: Deploy\non:\n  push:\n    branches: [main]\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    permissions:\n      contents: write\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n      - run: npm ci\n      - run: npm run build     # 产出到 dist\n      - name: Deploy to GitHub Pages\n        uses: peaceiris/actions-gh-pages@v4\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          publish_dir: ./dist" },
            { "type": "info", "title": "三个关键点", "text": "① <code.inline>on:</code.inline> 定义触发时机；② <code.inline>uses:</code.inline> 复用官方/社区现成 action；③ 敏感信息用 <code.inline>secrets</code.inline> 存（如云平台部署密钥），绝不明文写在 YAML 里。这套 CI 会先生项目自动跑，等同给你白捡了一台‘代码质检机’。" },
            { "type": "keypoints", "items": ["workflow = 在仓库里用 YAML 定义自动化", "on 触发 / job / step 三层结构", "npm ci 用锁文件可复现安装", "密钥放 secrets，别进仓库"] }
          ]
        },
        {
          "id": "cicd-3-best-practice",
          "title": "流水线最佳实践",
          "summary": "早失败、幂等、构建一次部署多次、门禁。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "流水线写出来容易，写『好』难。下面几条是被大量生产验证过的实践，能让流水线又快又稳又可回溯。" },
            { "type": "list", "ordered": true, "items": ["早失败（fail fast）：Lint → 单测 → 构建 → 部署，错的步骤排前面，越快暴露越好", "构建一次、部署多次（build once, promote）：同一个不可变产物在 staging 验证后原样上生产，避免『又偷偷改了一点而没测过』", "幂等与可重跑（idempotent）：流水线断了重跑要能稳定复现同结果，部署脚本要可重复执行不炸", "门禁（gates）：测试不过、审计不过、覆盖率不达标，就卡住不要继续推进", "日志与产物可追溯：每次部署的版本、hash、谁触发的都留痕，出问题能快速定位"] },
            { "type": "code", "lang": "bash", "title": "版本/镜像打标签，保证可回溯",
              "code": "# 构建产物打上 commit hash 或版本号\n# 前端：产物文件名带 hash（内容 hash）\n# 后端/镜像：\n# docker build -t myapp:$GITHUB_SHA .   # SHA=触发构建的提交\n# 部署时记录这个 tag，回滚就切旧 tag\n# 这样『线上跑的是哪个版本、对应哪次提交』永远可查" },
            { "type": "warn", "title": "别在流水线里偷偷改代码", "text": "不要在 pipeline 里做『构建时又改配置』这种不可复现的事。一切由提交的代码 + 明确的环境变量决定，产物才能在不同环境间原样推广（promote）。" },
            { "type": "info", "title": "发布回滚就是救生艇", "text": "部署一定有失败的瞬间。准备一条『一键回滚』：要么切镜像 tag，要么蓝绿切换回上一个版本。有救生艇，团队才敢频繁发布。" },
            { "type": "keypoints", "items": ["早失败：慢、贵的步骤尽量放后", "构建一次，产物原样部署多个环境", "门禁拦不住就不发布", "版本可回溯 + 一键回滚，才敢高频发布"] }
          ]
        }
      ]
    },

    /* ================= 部署与运维 ================= */
    {
      "id": "deploy-ops",
      "name": "部署与运维",
      "icon": "运",
      "tagline": "代码写得好不算完，得让它稳定跑在生产上。",
      "intro": "部署与运维把代码变成『一直在线的服务』：选发布策略、用 Docker 打包、接日志监控与告警。这一板块讲透从打包到上线的落地产物，以及可观测性三支柱。",
      "meta": { "难度": "进阶", "场景": "大型项目" },
      "lessons": [
        {
          "id": "deploy-1-strategy",
          "title": "环境管理与发布策略",
          "summary": "蓝绿、金丝雀、滚动发布，以及如何安全回滚。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "把新版本上线这件事，做法不同风险完全不同。三种主流策略：蓝绿（停掉旧流量切到新版本）、金丝雀（先放 5% 流量试水再逐步放开）、滚动（一批批新替旧）。共同点：都要能快速回滚。" },
            { "type": "table", "head": ["策略", "原理", "回滚", "适用"], "rows": [["蓝绿 Blue/Green", "新旧两套并存，切流量", "秒级切回", "对停机敏感、资源够"], ["金丝雀 Canary", "少量先上，观察后扩大", "缩回比例", "想实测生产但要控险"], ["滚动 Rolling", "一批批替换实例", "偏慢", "无状态、自动伸缩的服务"]] },
            { "type": "code", "lang": "text", "title": "发布后的观察清单",
              "code": "上线不只是点按钮，要盯：\n  □ 错误率 ERROR 有没有突然爬升？\n  □ 请求延迟是否突然变慢？\n  □ 日志有没有新的异常堆栈？\n  □ CPU/内存/连接数是否异常？\n  □ 核心用户流程是否走通？\n\n发现问题 → 立刻回滚（切旧/缩比例）→ 再排查原因" },
            { "type": "warn", "title": "发布的标准动作必须可回滚", "text": "任何没有回滚预案的发布，都是赌博。发布流程末尾永远留一句：『出问题先回滚，回滚之后再分析，不要在生产上现场调试。』" },
            { "type": "keypoints", "items": ["蓝绿监控秒切/金丝雀放比例/滚动一批批", "发布必须配回滚预案", "上线后立即看错误率、延迟、日志、资源", "先回滚再排查，别在生产现场硬调"] }
          ]
        },
        {
          "id": "deploy-2-docker",
          "title": "Docker 容器化从入门到实战",
          "summary": "把应用与环境打包成一个可移植的箱子。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "『在我机器上是好的』是最经典的甩锅。Docker 把『代码 + 运行时 + 依赖 + 配置』打包成一个镜像，在任何装了 Docker 的地方都能跑出一致结果。它已成为部署事实标准。了解镜像、容器、Dockerfile 与多阶段构建即可上手。" },
            { "type": "code", "lang": "dockerfile", "title": "一个最优的 Node 生产 Dockerfile",
              "code": "FROM node:20-alpine AS build        # 阶段1：构建\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build                 # 产出 dist\n\nFROM node:20-alpine AS prod       # 阶段2：只带产物\nWORKDIR /app\nCOPY --from=build /app/dist ./dist\nEXPOSE 3000                       # 多阶段构建让镜像只含运行所需，体积小\nCMD [\"node\", \"dist/server.js\"]" },
            { "type": "code", "lang": "bash", "title": "常用 Docker 命令",
              "code": "docker build -t myapp:v1 .       # 构建镜像\n# 注意：-t 打标签，版本用 tag 管理\n\ndocker images                     # 查看镜像\ndocker run -d -p 3000:3000 --name app myapp:v1   # 后台跑容器，宿主机3000映射\n\ndocker ps / docker ps -a          # 运行中 / 全部容器\ndocker logs -f app                # 看容器日志\ndocker stop app && docker rm app  # 停并删\n\n# docker compose：一键起多服务（应用+数据库）\n# docker compose up -d\n\n# 私有仓库推送\n# docker tag myapp:v1 registry.io/myapp:v1 && docker push registry.io/myapp:v1" },
            { "type": "info", "title": "镜像分层与缓存", "text": "Docker 镜像是分层的，每一层对应 Dockerfile 一条指令。构建时会缓存不变层，所以把『很少变的依赖安装（COPY package*.json + npm ci）』放前面、把频繁变的源码 COPY 放后面，能大幅加速重复构建。" },
            { "type": "warn", "title": "不要在镜像里存密钥", "text": "镜像会被到处拉取，把数据库密码/API key 写进 Dockerfile 或做成镜像环境变量是重大事故。密钥一律在运行时注入（<code.inline>docker run -e</code.inline>、编排平台 secret、密钥管理系统）。" },
            { "type": "keypoints", "items": ["镜像=frozen bad环境，容器=运行中的镜像", "多阶段构建让产物镜像又小又干净", "依赖层在前、源码层在后，善用缓存", "密钥运行时注入，绝不进镜像"] }
          ]
        },
        {
          "id": "deploy-3-observability",
          "title": "日志、监控与可观测性",
          "summary": "Logs / Metrics / Traces 三支柱，出了问题最快定位。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "线上系统 99.9% 的时间是正常的，真正考验你的是出问题的前几分钟。可观测性三支柱：日志（发生了什么）、指标（现在怎么样）、追踪（一次请求经过了哪些服务）。配好它们，排查能快一个数量级。" },
            { "type": "table", "head": ["支柱", "回答的问题", "典型工具", "友好姿势"], "rows": [["日志 Logs", "某个时间发生了什么", "ELK / Loki / 云日志", "结构化 JSON、带 traceId"], ["指标 Metrics", "系统现在什么状态", "Prometheus + Grafana", "自定义业务指标+告警"], ["追踪 Traces", "一次分布式请求的路径", "Jaeger / Tempo / Datadog", "跨服务传递 traceId"]] },
            { "type": "code", "lang": "python", "title": "结构化日志优于一行行文本",
              "code": "# 反例：谁日志？可搜索性差\nprint(\"用户 123 下单失败，金额 199\")\n\n# 正例：JSON 结构化，可被日志平台索引、检索、聚合\nimport json, logging\nlogging.basicConfig(level=logging.INFO)\nlog = logging.getLogger(__name__)\nlog.info(json.dumps({\n    \"event\": \"order.failed\",\n    \"user_id\": 123,\n    \"order_amount\": 199,\n    \"reason\": \"insufficient_stock\",\n    \"trace_id\": \"abc-123\",   # 串起整条请求链路\n}, ensure_ascii=False))\n# 之后可按 event、user_id、trace_id 精确检索与聚合" },
            { "type": "code", "lang": "text", "title": "三条必配告警",
              "code": "1) 错误率：5 分钟内错误率 > 2%  → 立刻告警\n2) 延迟：P95 延迟 > 800ms → 预警\n3) 可用性：服务不可用(探活失败) → 最高优先级页级告警\n\n# 进阶：SLO（服务目标）——比如『99.9% 请求 < 300ms』\n# 用错误预算管理：SLO 定义的容忍范围内允许犯错/发布\n# 超出预算就冻结发布，专注稳定性" },
            { "type": "warn", "title": "没有告警的监控约等于没监控", "text": "监控数据摆在那没人看，等于没有。真正的可观测性是『异常能被自动发现并通知到人』。核心指标一定要配告警，告警要能联系到值班人。" },
            { "type": "info", "title": "云上能省很多事", "text": "要真正落地可观测性，通常用云服务（AWS/Azure/GCP/Aliyun）或托管方案（Datadog/Grafana Cloud）、或开源自建（Prometheus+Loki+Tempo）。中小团队优先托管，别自己从零搭。" },
            { "type": "keypoints", "items": ["三支柱：日志(发生了什么)、指标(什么状态)、追踪(哪条链路)", "日志用 JSON 结构化 + 带 traceId", "核心指标必配告警，否则监控无效", "SLO/错误预算让『能否发布』有数据依据"] }
          ]
        }
      ]
    },

    /* ================= 架构设计 ================= */
    {
      "id": "architecture",
      "name": "架构设计",
      "icon": "架",
      "tagline": "大项目的骨架，决定了它能长多大、多松。",
      "intro": "架构是『在项目变得不可维护之前就做对的关键决策』。这一板块讲透架构思维、主流架构风格，以及如何把设计模式落到真实代码而不过度设计。",
      "meta": { "难度": "高级", "场景": "大型项目" },
      "lessons": [
        {
          "id": "arch-1-thinking",
          "title": "架构思维：关注点分离与依赖倒置",
          "summary": "让核心业务不依赖边角细节，是架构的第一性原理。",
          "difficulty": "高级",
          "blocks": [
            { "type": "p", "text": "架构的核心矛盾：核心业务逻辑是最值钱、最不该经常改的部分；而 UI、数据库、第三方库都是会频繁变化的『细节』。好架构让『业务』独立于『细节』——这就是**依赖倒置（DIP）**的思想：让业务定义抽象接口，让具体实现去依赖它，而非反过来。" },
            { "type": "code", "lang": "javascript", "title": "正反例：业务别直接写死数据库",
              "code": "// 反例：业务逻辑直接 new 了一个具体数据库对象\nclass OrderService {\n  constructor() { this.db = new MysqlDb(); }   // 写死了 MySQL\n  async save(order) { await this.db.insert(order); }\n}\n// 想换 Postgres 或内存版 → 得改 OrderService，业务被细节绑架\n\n// 正例：依赖注入——把接口传进来，业务不关心实现\nclass OrderService {\n  constructor(orderRepo) { this.repo = orderRepo; }  // 传入实现\n  async save(order) { await this.repo.save(order); }\n}\n// 生产用真实 repo，测试用内存 repo，业务代码零改动" },
            { "type": "code", "lang": "python", "title": "依赖倒置的小例子",
              "code": "# 业务定义抽象接口\nclass PaymentGateway:\n    def charge(self, amount): raise NotImplementedError\n\n# 具体实现依赖抽象\nclass StripeGateway(PaymentGateway):\n    def charge(self, amount):\n        print(f\"Stripe 扣款 {amount} 元\")\n\nclass FakeGateway(PaymentGateway):\n    def charge(self, amount):\n        print(f\"[测试] 假装扣款 {amount} 元\")\n\n# 业务只依赖抽象，换实现不碰业务\n\ndef checkout(gateway, amount):\n    gateway.charge(amount)\n\ncheckout(StripeGateway(), 100)   # 生产\ncheckout(FakeGateway(), 100)     # 测试/开发" },
            { "type": "info", "title": "SOLID 一分钟", "text": "五个单字母原则：S 单一职责（一个类只干一件事）、O 开闭（对扩展开放、对修改关闭）、L 里氏替换、I 接口隔离、D 依赖倒置。工程里最常受益的就是 S 和 D。" },
            { "type": "warn", "title": "别为了抽象而抽象", "text": "依赖倒置的代价是增加了一层间接。做之前问自己：这个『细节』真的会变、真的在多处被替换吗？只有一处实现的接口先别抽，YAGNI。抽象要随第二个实现的出现而诞生。" },
            { "type": "keypoints", "items": ["业务独立于细节（UI/数据库/库）= 依赖倒置", "依赖注入把实现从外部传进来，业务不关心", "SOLID 里 S 与 D 工程收益最大", "抽象跟着第二个实现走，避免过度设计"] }
          ]
        },
        {
          "id": "arch-2-styles",
          "title": "主流架构风格与分层",
          "summary": "分层架构、六边形、事件驱动、微内核，怎么选。",
          "difficulty": "高级",
          "blocks": [
            { "type": "p", "text": "架构风格决定了系统的组织和演化方式。没有放之四海皆准的最好，只有适不适合。四种最常见：分层架构（最常见）、六边形/端口适配器（强调业务隔离）、微内核插件（可扩展）、事件驱动（松耦合、异步）。" },
            { "type": "table", "head": ["风格", "核心思想", "优点", "代价", "适用"], "rows": [["分层", "表现/业务/数据 分层", "简单熟悉、上手快", "易变成『贫血渗透』", "绝大多数业务系统"], ["六边形", "业务在中心，外界是适配器", "业务极隔离、可测", "结构相对复杂", "对可测试性要求高"], ["事件驱动", "通过事件解耦，异步", "高度解耦、可伸缩", "难追踪、一致性难", "读多写少、削峰场景"], ["微内核", "内核+插件扩展", "开放、可独立扩展", "插件治理成本", "规则/插件化产品"]] },
            { "type": "code", "lang": "text", "title": "经典的『三层 + 领域』结构",
              "code": "controller/  (表现层：收请求、转参数、返回响应)\n    ↓\nservice/     (业务层：核心业务逻辑，不依赖UI/数据库)\n    ↓\nrepository/  (数据层：读写数据库，实现换库不改业务)\n\n# 关键原则：依赖从上往下，上层依赖下层的『接口/抽象』\n# 下层不该反向依赖上层；同层不直接越层跳\n# 业务逻辑锁定在 service，数据库细节锁在 repository" },
            { "type": "info", "title": "演进式架构", "text": "别幻想一次设计出最终完美架构。做法是：定好边界与关键决策，然后小步演进——先分层，需要可测再提为六边形，业务复杂再拆服务。架构是『成长的』，不是『画死的』。" },
            { "type": "keypoints", "items": ["没有银弹，架构匹配系统面临的变化点", "分层架构最通用，业务锁 service、数据锁 repository", "六边形/DDD 强于业务隔离与可测", "演进式架构：定边界+关键决策，再小步演化"] }
          ]
        },
        {
          "id": "arch-3-patterns",
          "title": "设计模式实战精选",
          "summary": "最常救场的几个模式，以及他们解决的真实痛点。",
          "difficulty": "高级",
          "blocks": [
            { "type": "p", "text": "设计模式是『常见问题的成熟解法模板』。不必背全 23 个，掌握最常用的几个，并知道它们『解决什么痛点』，就够撑起绝大部分真实项目。" },
            { "type": "code", "lang": "python", "title": "工厂 + 策略：把分支换成查表",
              "code": "# 痛点：一堆 if/else 按类型做不同处理，加了类型就要改多处\n\ndef process(payment_type, amount):\n    if payment_type == \"stripe\":\n        print(f\"Stripe 收 {amount}\")\n    elif payment_type == \"paypal\":\n        print(f\"PayPal 收 {amount}\")\n    else:\n        raise ValueError(payment_type)\n\n# 用『策略 + 注册表』把分支变成配置\nPAYMENTS = {\n    \"stripe\": lambda amt: print(f\"Stripe 收 {amt}\"),\n    \"paypal\": lambda amt: print(f\"PayPal 收 {amt}\"),\n}\n\ndef process(payment_type, amount):\n    handler = PAYMENTS[payment_type]   # 查表，新增类型只需加一行\n    handler(amount)\n\nprocess(\"stripe\", 100)" },
            { "type": "code", "lang": "javascript", "title": "观察者 / 事件：解耦发布与订阅",
              "code": "// 痛点：A 变了要通知一堆 B，直接写死耦合\r\nclass EventBus {\r\n  constructor() { this.listeners = {}; }\r\n  on(name, fn) { (this.listeners[name] ||= []).push(fn); }\r\n  emit(name, ...args) { (this.listeners[name] || []).forEach(fn => fn(...args)); }\r\n}\r\n\r\nconst bus = new EventBus();\r\nbus.on(\"order.paid\", (id) => console.log(`发邮件：订单 ${id}`));\r\nbus.on(\"order.paid\", (id) => console.log(`发短信：订单 ${id}`));\r\n\r\nbus.emit(\"order.paid\", 88);\r\n// 发邮件：订单 88 / 发短信：订单 88\r\n// 新增通知方只需注册监听，订单模块零改动" },
            { "type": "table", "head": ["模式", "类别", "解决什么痛点", "一句话"], "rows": [["单例 Singleton", "创建型", "全程序只需一个实例（配置、连接池）", "别 new 多了"], ["工厂 Factory", "创建型", "按类型创建对象、隐藏构造细节", "把 new 集中管理"], ["策略 Strategy", "行为型", "算法可替换、避免 if/else 膨胀", "行为查表互换"], ["观察者 Observer", "行为型", "状态变化通知多方、解耦", "发布订阅"], ["适配器 Adapter", "结构型", "让不兼容接口能协作", "包一层转接口"], ["依赖注入 DI", "结构型", "把依赖交出去，便于测试与替换", "传进来不是现造"]] },
            { "type": "warn", "title": "模式是地图不是教条", "text": "为模式而模式，写着写着就过度架构了。正确姿势是：遇到具体痛点（if 膨胀、预告式耦合、对象创建复杂）时，想起『有个模式能解它』，再决定用不用。模式从问题中来。" },
            { "type": "keypoints", "items": ["重点掌握：单例/工厂/策略/观察者/适配器/DI", "模式对应『痛点』，从问题找模式而非反过来", "查表消灭 if/else 是性价比最高的重构", "避免为模式而模式"] }
          ]
        }
      ]
    },

    /* ================= 微服务与分布式 ================= */
    {
      "id": "microservices",
      "name": "微服务与分布式",
      "icon": "微",
      "tagline": "拆也不是目的，是达到可用性、扩展性和团队独立的工具。",
      "intro": "微服务把一个大单体拆成多个独立部署的小服务。讲清楚的既包括『什么该拆』，也包括『拆了之后新的麻烦』：服务间怎么通信、数据一致性怎么保证、故障怎么隔离。这一板块帮你建立清醒的分布式世界观。",
      "meta": { "难度": "高级", "场景": "大规模" },
      "lessons": [
        {
          "id": "micro-1-to-split",
          "title": "单体 vs 微服务：该不该拆",
          "summary": "拆的动机、时机与代价，别为了微而微。",
          "difficulty": "高级",
          "blocks": [
            { "type": "p", "text": "微服务不是银弹。很多失败的微服务是『为了微而微』：把一套共产党整体运行的代码硬拆成十几个通信的服务，结果分布式的一切麻烦（网络、一致性、排障、运维）全来了，性能还更差。拆之前务必想清楚动机。" },
            { "type": "table", "head": ["对比项", "单体 Monolith", "微服务 Microservices"], "rows": [["开发简单", "高，本地跑一个应用", "低，多服务联调"], ["部署", "简单，一个包", "复杂，多服务编排"], ["故障隔离", "差，一处崩全崩", "好，服务间隔离"], ["扩展", "整体扩展", "按需单独扩展"], ["团队协作", "大代码库互相踩", "按服务分团队自治"], ["运维负担", "低", "高很多"]] },
            { "type": "list", "ordered": true, "items": ["微服务真正的三个动机：① 独立扩展（读写失衡、CPU 密集某一块）；② 团队自治（不同团队独立开发部署、不互相拖累）；③ 故障隔离（一个服务挂了不影响整体可用性）", "判断标准：没有『独立扩展』『独立团队』『稳定边界』需求的团队，拆微服务往往是负资产", "正确路线：先写高质量单体（模块化单体），业务和边界真稳了，再按需拆成服务", "反模式『分布式单体』：拆了服务却仍要一起发布、共享数据库——比单体更糟"] },
            { "type": "info", "title": "模块化单体是安全的起点", "text": "大多数团队的最优解是『模块化单体』：一个部署单元，内部按清晰边界分层模块。业务成熟后再把变动最快的模块拆成独立服务。先单体，后按需拆分，是最稳的演进路线。" },
            { "type": "warn", "title": "不要让数据库成为拆分后仍耦合的命门", "text": "拆服务最常见的坑是『服务拆了、数据库没拆』——所有服务都连同一个库，一个字段被多个服务用，改都改不了。数据库边界不跟着业务走，拆分就是纸上谈兵。" },
            { "type": "keypoints", "items": ["微服务三动机：独立扩展、团队自治、故障隔离", "无独立边界需求就别拆，先模块化单体", "避免分布式单体：拆了却一起发布+共享库", "数据边界必须随服务走，否则等于没拆"] }
          ]
        },
        {
          "id": "micro-2-comm",
          "title": "服务间通信与 API 网关",
          "summary": "REST / gRPC / 消息队列怎么选，网关管什么。",
          "difficulty": "高级",
          "blocks": [
            { "type": "p", "text": "服务拆了就得『对话』。通信分同步与异步两类：同步（REST、gRPC）立刻要结果，适合请求-响应；异步（消息队列）把请求丢给队列就走，适合事件、削峰、解耦短时事务。常见于微服务入口的 API 网关负责统一鉴权、限流、路由与聚合。" },
            { "type": "table", "head": ["方式", "类型", "特点", "典型场景"], "rows": [["REST/HTTP+JSON", "同步", "简单通用、生态广、可读", "对外 API、服务间标准调用"], ["gRPC (Protobuf)", "同步", "高性能、强类型、二进制", "内部服务间高吞吐调用"], ["消息队列 MQ", "异步", "解耦、削峰、可重试", "事件驱动、订单通知、日志"] ] },
            { "type": "code", "lang": "text", "title": "API 网关的职责",
              "code": "客户端\n  └──→ API Gateway（统一入口）\n            ├─ 鉴权/认证（token 校验）\n            ├─ 限流/熔断（保护后端）\n            ├─ 路由（按路径转发到对应服务）\n            ├─ 聚合（一次请求聚合多个服务数据）\n            └─ 协议转换 / 负载均衡\n\n# 常见实现：Kong / Traefik / Envoy / 云厂商 API 网关" },
            { "type": "info", "title": "服务发现 Service Discovery", "text": "服务实例会动态启停、扩容，IP 不固定。服务发现就是‘动态找到对方当前在哪’：注册中心（服务启动登记自己的地址，调用方查询）或 DNS。K8s 内建 DNS 服务发现，云上更是标配。" },
            { "type": "warn", "title": "同步调用会串成兵链", "text": "一个请求同步串过 5 个服务，最慢的决定了整体延迟，且一个卡住可能全部堵死。对策：能用异步的用异步；同步链上加超时、熔断、降级（见下一节）。" },
            { "type": "keypoints", "items": ["同步(REST/gRPC) → 请求-响应；异步(MQ) → 事件/解耦/削峰", "API 网关统一鉴权、限流、路由、聚合", "服务发现解决动态地址问题", "同步调用务必加超时与熔断"] }
          ]
        },
        {
          "id": "micro-3-troubles",
          "title": "分布式世界的麻烦：一致性、事务、容错",
          "summary": "一旦跨服务，很多『理所当然』就碎了。",
          "difficulty": "高级",
          "blocks": [
            { "type": "p", "text": "分布式把本来『在同一进程里一步完成』的事拆到了不同机器，于是出现三座大山：① 网络不可靠（会超时/丢包/乱序）；② 无法用单一数据库事务保证跨服务原子性；③ 一个服务的超时会在调用链上放大。理解这些问题，才知道容错设计为什么必要。" },
            { "type": "code", "lang": "text", "title": "CAP 定理与一致性",
              "code": "CAP：分布式系统最多同时满足两个：\n  C 一致性 Consistency（所有节点同一时刻数据一致）\n  A 可用性 Availability（每个请求总能得到响应）\n  P 分区容忍 Partition tolerance（网络断开仍能工作）\n\n# 网络分区是必然的 → 你只能在 C 和 A 之间二选一\n# CP：保证一致，分区时可能拒绝服务（如部分强一致DB）\n# AP：保证可用，分区时接受短暂不一致（如大多缓存/搜索）\n# 绝大多数互联网系统是 AP + 最终一致性" },
            { "type": "code", "lang": "text", "title": "跨服务事务：Saga 与幂等",
              "code": "# 问题：下单要扣库存(库存服务)+扣钱(支付服务)，没有本地事务\n\n# 方案A：Saga 分布式事务（长事务拆成一系列本地事务+补偿）\n#   扣库存 ✓ → 扣钱 ✓ → 完成\n#   若扣钱失败 → 补偿操作『回滚库存』\n# 用消息驱动，配合『重试』与『补偿』保证最终一致\n\n# 方案B：变异步 + 最终一致\n#   下单事件入列 → 各自服务处理 → 对账兜底\n\n# 无论哪种，关键配套：幂等（同一操作执行多次结果一致）\n# 处理消息前先查‘是否已处理过’ d身份证/dedup key\n# 这样重试、消息重复投递都不会造成重复下单/重复扣款" },
            { "type": "code", "lang": "text", "title": "容错三件套：超时、熔断、限流",
              "code": "— 超时 Timeout：调用必须有明确超时，打爆别无限等\n— 熔断 Circuit Breaker：某服务反复失败就断，快速失败不拖垮\n   保护调用链：探测成功后再恢复\n— 限流 Rate Limit：超量请求直接拒绝，保后台不死\n\n# 半开（half-open）状态：熔断后放一个试探请求，\n# 成功→恢复；失败→继续熔断。避免一恢复又被瞬间打垮" },
            { "type": "warn", "title": "最终一致性要配套对账", "text": "一旦走异步最终一致，就会出现短暂的‘数据不同步’。设计时预留对账机制（定时扫描不一致补发），并给用户明确的状态说明。把‘不一致’管理起来，而不是假装它不存在。" },
            { "type": "keypoints", "items": ["CAP：网络分区必然，只能在一致性与可用性间取舍", "跨服务事务 → Saga/异步/幂等+补偿", "网络不可靠：必须配超时、熔断、限流", "最终一致性要预留对账，管理不一致而非无视"] }
          ]
        }
      ]
    },

    /* ================= 大型项目实战 ================= */
    {
      "id": "big-project",
      "name": "大型项目实战：从 0 到上线",
      "icon": "战",
      "tagline": "把前面所有能力，串成一个真实项目的完整旅程。",
      "intro": "前九个板块是『零件』，这个板块教你『组装』：从产品需求出发，走过结构设计、依赖、开发、测试、CI、部署，最后上线与监控。用一个小而完整的『待办 + 用户系统』贯穿演示，让你看到大型项目是怎么被一步步组织起来的。",
      "meta": { "难度": "高级", "场景": "综合实战" },
      "lessons": [
        {
          "id": "big-1-lifecycle",
          "title": "一个真实项目的完整生命周期",
          "summary": "需求 → 设计 → 开发 → 测试 → CI → 部署 → 监控。",
          "difficulty": "高级",
          "blocks": [
            { "type": "p", "text": "专业项目的生命不是‘写代码’一个动作，而是七个阶段的循环：需求澄清、架构设计、迭代开发、测试保障、持续集成、部署上线、监控运营。每个阶段都有产出物和检查点。看清单走一遍，你就能完整交付一个项目。" },
            { "type": "table", "head": ["阶段", "产出物", "关键动作", "常见坑"], "rows": [["需求", "PRD/要点清单", "说清要解决什么问题、验收标准", "需求没说清就动手"], ["设计", "结构图/数据模型", "定模块边界、选技术栈", "过度设计/低估边界"], ["开发", "代码+提交", "小步提交、conventional commits", "憋大招式的大提交"], ["测试", "测试套件", "单测+关键流程E2E", "只写代码不写测试"], ["集成", "CI流水线", "lint/单测/构建自动跑", "测试不进门禁形同虚设"], ["部署", "可回滚的产物", "蓝绿/金丝雀+一键回滚", "发布没预案"], ["监控", "告警+日志+指标", "错误率/延迟/日志三件套", "监控不配告警"]] },
            { "type": "list", "ordered": true, "items": ["先写下一句话的产品定义：这个系统为谁、解决什么、必须做到哪三条", "再画一张粗结构图：几个模块、模块边界、数据如何流动", "接着定技术栈并初始化项目：包管理器、lint、git、初始 CI", "然后按功能域小步迭代：每个功能 = 代码 + 测试 + 提交", "功能做稳后配门禁：CI 跑单测/lint/构建、依赖审计", "发布到 staging 人工验证一轮，再蓝绿/金丝雀上生产", "最后接日志、监控、告警，并准备一键回滚"] },
            { "type": "tip", "title": "别被‘大型’吓住", "text": "大型项目 = 小型项目的熟练叠加 + 纪律。靠的是结构、测试、流程这些‘不浪漫但我可靠’的东西，而不是某个天才技巧。你按这个清单把一个小项目完整走一遍，就拿到了做大型项目的骨架。" },
            { "type": "keypoints", "items": ["生命周期七阶段：需求→设计→开发→测试→CI→部署→监控", "每阶段有产出物与验收点", "小型项目的纪律积累起来就是大型项目能力", "一个完整走完的小项目，胜过十个半途的"] }
          ]
        },
        {
          "id": "big-2-demo",
          "title": "实战演示：待办 + 用户系统的项目骨架",
          "summary": "用一个小而完整的项目，把前面所有技术落地一遍。",
          "difficulty": "高级",
          "blocks": [
            { "type": "p", "text": "下面用一个务实的最小演示，把项目结构、依赖、测试、构建、CI 串起来。这不是要你逐行背，而是看‘一个真实项目如何被组织’——目录怎么分、逻辑怎么分层、测试怎么写、流水线怎么接。" },
            { "type": "code", "lang": "text", "title": "项目骨架：功能域式目录 + 测试并列",
              "code": "todo-app/\n  src/\n    features/\n      auth/\n        auth.api.js\n        auth.service.js\n        auth.model.js\n      todo/\n        todo.api.js\n        todo.service.js\n        todo.model.js\n    shared/\n      db.js\n      logger.js\n  tests/\n    features/auth.test.js\n    features/todo.test.js\n  .github/workflows/ci.yml\n  package.json\n  README.md\n\n# 关键：测试贴近功能、CI 贴近仓库、README 说明怎么跑" },
            { "type": "code", "lang": "javascript", "title": "纯逻辑的 service + 单元测试（可直接在这跑）",
              "code": "// todo.service.js —— 纯函数，不含数据库，天然可测（为在线演示去掉 export）\nfunction filterTodos(todos, onlyDone) {\n  return onlyDone ? todos.filter((t) => t.done) : todos;\n}\n\nfunction addTodo(todos, text) {\n  if (!text || !text.trim()) throw new Error(\"内容不能为空\");\n  return [{ id: Date.now(), text: text.trim(), done: false }, ...todos];\n}\n\nfunction toggleTodo(todos, id) {\n  return todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t));\n}\n\n// 手动验证（相当于测试）\nlet list = addTodo([], \"学 CI/CD\");\nlist = addTodo(list, \"学 Docker\");\nlist = toggleTodo(list, list[0].id);\nconsole.log(\"待办:\", list.map((t) => (t.done ? \"✓\" : \"○\") + \" \" + t.text));\nconsole.log(\"只看未完成:\", filterTodos(list, false).map((t) => t.text));" },
            { "type": "code", "lang": "bash", "title": "配套的 CI 流水线 + 依赖脚本",
              "code": "# package.json scripts 片段\n#   \"scripts\": {\n#     \"lint\": \"eslint src --max-warnings=0\",\n#     \"test\": \"vitest run\",\n#     \"build\": \"vite build\",\n#     \"verify\": \"npm run lint && npm test && npm run build\"\n#   }\n\n# CI 里只需一行：\n#   run: npm run verify\n# CI 全绿才允许合并。这就是『机器兜底的质量门禁』" },
            { "type": "info", "title": "把演示当模板，换成你的项目", "text": "这个骨架的价值是‘它把每个环节都占了一个位置’：目录、纯逻辑、测试、脚本、CI。你可以在自己项目里复用同一结构，把 todo 替换成你的业务。结构比内容更值得模仿。" },
            { "type": "keypoints", "items": ["功能域目录 + 测试贴近功能", "逻辑抽成纯函数，数据库/IO 隔离出去 → 好测", "package.json 汇总 verify 脚本，CI 一键跑", "结构可复用：换业务不变流程"] }
          ]
        },
        {
          "id": "big-3-pitfalls",
          "title": "大型项目最容易踩的坑",
          "summary": "技术债、单体角、过早优化，以及怎么报警。",
          "difficulty": "高级",
          "blocks": [
            { "type": "p", "text": "读再多的‘应该怎么做’，不如识别‘为什么很多项目仍会烂掉’。下面这几个被反复踩到的大坑，以及它们的报警信号，能帮你在大项目里少走几年弯路。" },
            { "type": "table", "head": ["坑", "表现", "报警信号", "预防"], "rows": [["技术债失控", "改一个功能碰一头血、无人敢动老代码", "改动频繁的模块没有测试", "给高变模块补测试+重构"], ["单体角化", "‘单体’变成没人懂的一坨", "文件数千、逻辑纠缠、新人要读通很久", "模块化边界+文档+代码评审"], ["过早优化", "为想象中不存在的规模写复杂方案", "为每秒百万请求优化，实际日请求几百", "先做对，用数据决定何时优化"], ["测试缺失", "每次发布都靠手动点", "回归 bug 频繁、发布靠运气", "测试金字塔+CI门禁"], ["无监控回滚", "生产出事靠人工救", "线上错在哪里没人第一时间知道", "告警+日志+一键回滚"]] },
            { "type": "list", "ordered": true, "items": ["技术债要‘定期还利息’：不为追上进度而永久牺牲质量，每次迭代顺手还一点债", "察觉到‘没有人再敢改的核心模块’，优先处理——它通常是债务最重处，也最值钱的改进点", "性能只在用户和瓶颈数据要求时才优化；用 profiler/压测说话，不用猜", "测试和监控是唯一能让你‘睡安稳觉’的两件事，它们必须拥有最高优先级"] },
            { "type": "warn", "title": "最大的坑其实是‘想一口气做对一切’", "text": "大项目的失败，往往不是某一个技术原因，而是‘士气崩了’——永远赶上进的债务、永远不敢改的代码、永远吓人的上线。而解药恰恰在前面讲的：小步、分层、测试、自动化、可回滚。把每一次改动做小、做稳、做带测试，项目就会长期健康。" },
            { "type": "code", "lang": "javascript", "title": "从现在就能开始的一小步",
              "code": "// 无论项目多大，今天就能做的最小改进：\n// 1) 把一个散落的魔法值提成常量（见第一板块）\n// 2) 给一个没有测试的核心函数补一个单测\n//   function calcTotal(cart, prices) {\n//     return cart.reduce((s, id) => s + (prices[id] || 0), 0);\n//   }\n//   test(\"求和\", () => expect(calcTotal([1,2], {1:10,2:20})).toBe(30));\n// 3) 提交带上规范信息： feat/fix(scope): desc\n\n// 记住：架构不是一次画出来的，是每次小步改造叠加出来的。\nconsole.log(\"开始把小改动做对，大项目就能长期健康\");" },
            { "type": "keypoints", "items": ["四巨头：技术债、单体角、过早优化、测试缺失", "集中火力救‘最没人敢动’的核心模块", "性能用数据说话，不靠猜", "一切落回：小步、分层、测试、自动化、可回滚"] }
          ]
        }
      ]
    }
  ]
};