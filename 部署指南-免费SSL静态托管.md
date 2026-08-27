# 部署指南：将你的网站免费托管上线

本网站是纯静态站点（HTML + CSS + JS，无后端、无数据库），可以利用
**Cloudflare Pages** 免费托管，自带 **免费 SSL 证书（https 绿锁）**、
支持**自定义域名**、**无限带宽**，且**允许商业用途**。
部署全程免费，无需信用卡。

---

## 方案对比（为什么选 Cloudflare Pages）

| 平台 | 免费带宽 | 自定义域名 | 免费 SSL | 商业用途 | 说明 |
|------|--------|:---:|:---:|:---:|----|
| **Cloudflare Pages** | **无限** | 有 | 有（自动） | 允许 | ✅ 首选，本文主推 |
| GitHub Pages | 100GB/月 | 有 | 有（自动） | 允许 | 绑定 GitHub 最方便 |
| Netlify | 约15GB/月 | 有 | 有（自动） | 受限 | 2025年改信用点制，免费额度缩水 |
| Vercel | 100GB/月 | 有 | 有（自动） | **禁止** | 免费版禁商用，注意 |

**结论**：要求「免费 + SSL + 静态 + 额度足」，优先选 **Cloudflare Pages**。

---

## 方式一：用 Cloudflare Pages 部署（推荐，带宽无限）

### 第 1 步：把项目推送到 GitHub
1. 注册一个 GitHub 账号（免费）：https://github.com/signup
2. 新建一个仓库（Repository），例如 `computer-learning`
3. 在本地项目目录打开终端，执行：

```bash
# 进入项目目录（把下面路径换成你的）
cd d:/computer-learning

# 初始化 git 并提交
git init
git add .
git commit -m "init: 计算机知识库网站"
git branch -M main

# 添加到远程仓库（地址换成你的）
git remote add origin https://github.com/你的用户名/computer-learning.git
git push -u origin main
```

### 第 2 步：在 Cloudflare 创建 Pages 项目
1. 注册 Cloudflare 账号（免费）：https://dash.cloudflare.com/signup
2. 登录后在左侧菜单选择 **Workers & Pages** → **Pages** → **Create**
3. 选择 **Connect to Git**，授权 GitHub，选中 `computer-learning` 仓库
4. 构建配置保持默认即可（本项目无需构建）：
   - **Build command**（构建命令）：留空
   - **Build output directory**（输出目录）：`/` （根目录）
5. 点击 **Save and Deploy**，等待几十秒。

### 第 3 步：获得免费 SSL 与访问地址
- 部署完成后，Cloudflare 会给出一个自动生成的域名，形如：
  `https://computer-learning.pages.dev`
- 访问它，地址栏显示 **https 小锁** —— 这就是免费自动签发的 SSL 证书，
  无需自建、无需付费、自动续期。
- 以后每次 `git push`，Cloudflare 会自动重新构建并部署，无需手动操作。

### 第 4 步（可选）：绑定自定义域名
1. 先购买一个域名（如阿里云、腾讯云、namecheap，域名本身需付费，但托管免费）
2. 在 Pages 项目 → **Custom domains** → **Add custom domain**
3. 输入你的域名，Cloudflare 会提示你到域名注册商把 DNS 改为 Cloudflare
4. 启用 Cloudflare 代理后，会自动为你的自定义域名签发免费 SSL 证书
5. 完成，访问 `https://yourdomain.com` 即为 https 加密访问

---

## 方式二：用 GitHub Pages 部署（最简单，若不想用 Cloudflare）

### 步骤
1. 把代码推到 GitHub 仓库（同上法）。
2. 仓库页 → **Settings** → **Pages**
3. **Source** 选择 `Deploy from a branch`，分支选 `main`，目录选 `/`（根目录）
4. 保存后等待约 1 分钟，访问 `https://你的用户名.github.io/computer-learning/`
5. GitHub Pages 自动提供 **免费 SSL 证书**。

> 注意：GitHub Pages 自定义域名需自己在仓库 Settings→Pages 处填域名，
> 并把域名解析到一个 IP 地址（Pages 的 DNS 记录会提示）。

---

## 开始前：本地预览

在本地先体验网站效果：

```bash
cd d:/computer-learning
# 任选其一启动本地静态服务器：

# Python 方式（需已安装 Python）
python -m http.server 8000
# 然后浏览器访问 http://localhost:8000

# 或 Node 方式
npx serve .
# 然后浏览器访问 http://localhost:3000
```

---

## 常见问题

| 问题 | 解决办法 |
|------|--------|
| 部署后页面空白 | 确认输出目录选的是 `/`（根目录）；按 F12 看 Console 报错 |
| 图片/资源 404 | 本项目用相对路径引用资源，必须保持目录结构完整上传 |
| 想改内容 | 修改后 `git add . && git commit -m "更新" && git push`，自动重新部署 |
| 需要国内 CDN | 可把该静态站同时托管到腾讯云/阿里云 COS 静态网站，原理相通 |

---

## 为什么这个网站能用 CodeMirror + iframe 沙箱运行代码

- **编辑器**：本站内置基于 CodeMirror 的在线编辑器，支持行号、语法高亮、多语言。
- **代码运行**：JavaScript / TypeScript / HTML / CSS 通过「沙箱 iframe」在浏览器内
  隔离执行，不会影响页面本身；其他语言给出「复制到本地运行」的友好提示。
- **纯静态 + 免费托管**：整个站点不需要服务器，因此能塞进 Cloudflare 免费套餐。

祝你上线顺利，做出属于自己、能帮助更多人的学习网站！