/* ============================================================
   计算机知识库 · 数据：AI 与大模型应用开发
   schema: { id, name, icon, description, children:[{id,name,icon,tagline,intro,meta,lessons:[{id,title,summary,difficulty,blocks}]}] }
   block.type: p | h | h3 | list | tip | info | warn | danger | keypoints | code | table
   从『会聊天』到『会做一个 AI 应用』：Prompt 工程、LLM API、RAG、Agent、实战。
   ============================================================ */
window.CS_AI_APP = {
  "id": "cs-ai-app",
  "name": "AI 与大模型应用开发",
  "icon": "AI",
  "description": "大模型时代，开发者用『提示词』与『接口调用』构筑应用：写好 Prompt 让人工智能乖乖听话、用 OpenAI 风格 API 接入模型、用向量库把私有资料喂给模型（RAG），再让模型学会调用工具（Agent）。这是当下最抢手的新一代应用开发技能。",
  "children": [
    /* ================= Prompt 工程 ================= */
    {
      "id": "ai-prompt",
      "name": "Prompt 工程与提示词",
      "icon": "提",
      "tagline": "角色、背景、约束、示例——把话说清楚，模型才答得对。",
      "intro": "大模型的输出质量，一半取决于你的提示词。这一板块讲透**角色设定**、**结构化指令**（分步/思维链）、**Few-shot 示例**与**格式约束**，以及最核心的『如何避免幻觉与越界』。掌握它是所有 AI 应用的地基。",
      "meta": { "难度": "入门", "场景": "Prompt" },
      "lessons": [
        {
          "id": "ai-prompt-1-structure",
          "title": "结构化提示词：让模型听指挥",
          "summary": "角色 + 任务 + 约束 + 示例，四段式万能模板。",
          "difficulty": "入门",
          "blocks": [
            { "type": "p", "text": "一个高质量的 Prompt 通常包含四段：**角色**（你是谁）→**任务**（你要做什么）→**约束**（怎么做/别怎么做）→**输出格式**（期望的形态）。加上 2-3 个**示例（Few-shot）**，模型几乎不会跑偏。秘诀是『把模型当聪明但易走神的实习生』。" },
            { "type": "code", "lang": "python", "title": "四段式 Prompt 模板（可直接运行查看结构）",
              "code": `# 这是一份『结构化提示词』模板，把每个部分拆开看
prompt = {
  "角色": "你是一位严谨的初中数学老师",
  "任务": "讲解一元二次方程 ax²+bx+c=0 的解题步骤",
  "约束": "步骤不超过 5 条；面向初一学生；不要引入导数",
  "输出格式": "用编号列表输出，每步给出公式",
}

# 拼成一段可发送给大模型的文本
def build(parts):
    return "\\n".join(f"【{k}】{v}" for k, v in parts.items())

print(build(prompt))
print("---")
print("把上面这段发给 ChatGPT/文心/通义 等大模型，"
      "得到的回答会更规范、更贴需求。")` },
            { "type": "code", "lang": "python", "title": "Few-shot：给示例让模型举一反三（模拟）",
              "code": `# Few-shot 核心：先给 2-3 组『输入→期望输出』的样例，再给新输入
examples = [
  ("苹果 → 水果", "蔬菜"),
  ("西红柿 → 水果与蔬菜的中间地带", "争议"),
]
# 真实做法是把样例拼进 prompt：
def fewshot(user_input, shots):
    demo = "\\n".join(f"输入: {i}\\n输出: {o}" for i, o in shots)
    return f"以下是判断输入属于哪一类的示例：\\n{demo}\\n输入: {user_input}\\n输出:"

# 站点沙箱无法联网调用大模型，这里演示『提示词是如何被拼出来的』
print(fewshot("土豆", examples))
print("注：真正运行需调用模型 API，见下一板块。")` },
            { "type": "warn", "title": "Prompt 工程 ≠ 玄学", "text": "它背后有规律：模型是**下一个词的预测器**，示例和约束是在给它『续写方向』。与其套用口诀，不如理解输出是从候选里按概率采样——所以同样的词，模型可能每次答得略有不同（temperature 越低越稳定）。" },
            { "type": "keypoints", "items": ["四段式：角色/任务/约束/输出格式", "Few-shot 给 2-3 组示例让模型模仿", "限制输出格式（JSON/列表）便于程序解析", "低 temperature 更稳、高 temperature 更有创意"] }
          ]
        },
        {
          "id": "ai-prompt-2-hallucination",
          "title": "思维链与规避幻觉",
          "summary": "让模型一步一步推理，别让它一本正经地胡说。",
          "difficulty": "入门",
          "blocks": [
            { "type": "p", "text": "复杂问题直接问容易答错，加一句『**让我们一步一步思考**』（思维链 CoT）能让模型推理准确率大幅提升。而**幻觉**（一本正经地编造事实）要靠**给它事实**来治：限定用提供的资料作答、不懂就说不懂，并用 RAG（见后）喂原料。" },
            { "type": "code", "lang": "python", "title": "思维链 + 反幻觉约束（Prompt 模板演示）",
              "code": `# 思维链（Chain of Thought）与反幻觉的提示词写法
reasoning_prompt = """
问题：一家店进了 12 个箱子，每箱有 5 个苹果，卖出 30 个后还剩多少个？
请一步一步思考，再给出最终答案。
"""
print(reasoning_prompt)
print("期望：模型分步『12×5=60，60-30=30』并答 30")

anti_hallucination = """
请只依据下面提供的资料回答问题。如果资料里没有，
请直接回答“资料中未提及”。资料：
{context}
"""
print("\\n--- 反幻觉模板 ---\\n" + anti_hallucination.format(
    context="本书第 3 章：Python 用缩进表示代码块。"))` },
            { "type": "info", "title": "temperature 参数", "text": "调用模型时，<code.inline>temperature</code.inline> 控制随机性：设为 0.0~0.3 适合『要确定答案』（代码生成、分类），0.7~1.0 适合『要创意』（文案、故事）。追求稳定输出就调低它。" },
            { "type": "keypoints", "items": ["思维链 CoT：要逻辑就说‘一步一步思考’", "幻觉靠给事实治：限定资料 + 不会就说不", "temperature 低=稳、高=创意", "输出参数化：max_tokens、stop、seed 都影响结果"] }
          ]
        }
      ]
    },

    /* ================= LLM API 调用 ================= */
    {
      "id": "ai-api",
      "name": "LLM API 调用与流式输出",
      "icon": "接",
      "tagline": "OpenAI 风格的 chat/completions，几行代码接入大模型。",
      "intro": "真正的 AI 应用靠**调用模型 API**：发一段多轮『消息列表』过去，模型把回答流式吐回来。绝大多数厂商（OpenAI、DeepSeek、通义、文心、Kimi）都兼容同一套 HTTP/OpenAI 协议——会一个就会全部。",
      "meta": { "难度": "入门", "场景": "API 开发" },
      "lessons": [
        {
          "id": "ai-api-1-chat",
          "title": "chat/completions：一次完整调用",
          "summary": "messages 角色与 HTTPS POST，用 requests/axios 调通大模型。",
          "difficulty": "入门",
          "blocks": [
            { "type": "p", "text": "绝大多数大模型走同一条路：往 <code.inline>…/v1/chat/completions</code.inline> 发一个 **POST**，正文带 <code.inline>model</code.inline> 与 <code.inline>messages</code.inline>（system 设定系统、user 用户、assistant 模型）。返回里 <code.inline>choices[0].message.content</code.inline> 就是答案。" },
            { "type": "code", "lang": "python", "title": "最小可运行调用（需本地装 requests + 配 API_KEY）",
              "code": `# pip install requests
import requests, os

# 在本地设置环境变量 DEEPSEEK_API_KEY 或 OPENAI_API_KEY
api_key = os.environ.get("DEEPSEEK_API_KEY") or os.environ.get("OPENAI_API_KEY")
base = os.environ.get("API_BASE", "https://api.deepseek.com/v1")
model = "deepseek-chat"   # 换成你用的模型名

resp = requests.post(
    f"{base}/chat/completions",
    headers={"Authorization": f"Bearer {api_key}"},
    json={
        "model": model,
        "messages": [
            {"role": "system", "content": "你是一位耐心的老师"},
            {"role": "user", "content": "用一句话解释什么是变量"},
        ],
        "temperature": 0.7,
    },
    timeout=30,
)
print(resp.json()["choices"][0]["message"]["content"])` },
            { "type": "code", "lang": "javascript", "title": "浏览器里怎么调（JS fetch 版）",
              "code": `async function askLLM() {
  const res = await fetch("https://api.deepseek.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + "你的_API_KEY", // ⚠ 生产环境千万别放前端
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [{ role: "user", content: "你好，介绍一下自己" }],
    }),
  });
  const data = await res.json();
  return data.choices[0].message.content;
}
console.log("浏览器里受跨域与密钥安全限制，通常应走后端代理。");` },
            { "type": "danger", "title": "API Key 绝不能写在前端", "text": "浏览器里任何人都能看到你的请求，把 Key 写在前端=公开免费给别人刷。正确姿势是：**前端 → 你的后端 → 模型 API**，Key 只放在后端环境变量里，由后端转发请求。这是 AI 应用最常见的坑。" },
            { "type": "keypoints", "items": ["祸口统一：/v1/chat/completions + messages + model", "role：system/user/assistant 三种基本角色", "答案在 choices[0].message.content", "API Key 只放后端环境变量，前端走后端代理"] }
          ]
        },
        {
          "id": "ai-api-2-stream",
          "title": "流式输出与多轮对话",
          "summary": "SSE 边出边显示，保留上下文做多轮聊天。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "大模型是**一个字一个字输出**的，用**流式（stream: true + Server-Sent Events）** 可以逐字回显，体验像真人打字。而**多轮对话**本质是『把历史消息一起发给模型』——遵守上下文窗口限制，超长就裁剪或摘要。" },
            { "type": "code", "lang": "python", "title": "流式接收 + 维护多轮历史（可真机跑）",
              "code": `import requests, os
api_key = os.environ["DEEPSEEK_API_KEY"]
url = "https://api.deepseek.com/v1/chat/completions"

# ① 流式：SSE 逐行吐出 delta 增量
def stream_chat(history):
    with requests.post(url,
        headers={"Authorization": f"Bearer {api_key}"},
        json={"model": "deepseek-chat", "messages": history,
              "stream": True, "temperature": 0.6},
        stream=True) as r:
        for line in r.iter_lines():
            if line.startswith(b"data:"):
                d = line[5:].strip()
                if d == b"[DONE]":
                    break
                # 解析 JSON 取 choices[0].delta.content 即可逐字显示

# ② 多轮：把 user/assistant 历史全部带上
history = [{"role": "system", "content": "你是一个会用数学的助手"}]
while True:
    user = input("你：")
    if user == "exit":
        break
    history.append({"role": "user", "content": user})
    # 真实场景：stream_chat(history)，并把模型的回复 append 进 history
    # 这样模型就“记得”你们之前聊过什么
    print("（把 history 传给模型 → 得到回复 → 再 append 回 history）")
    history.append({"role": "assistant", "content": "（模型的回复）"})

print("多轮对话示意图：上下文就藏在 history 里。")` },
            { "type": "info", "title": "上下文窗口与裁剪", "text": "模型能一次处理的 token 有上限（如 64K/128K）。当历史超长，常见做法：只留最近 N 轮、或先让模型把旧对话**摘要**后再拼上。上下文不是越多越好，塞垃圾会稀释注意力。" },
            { "type": "keypoints", "items": ["stream:true + SSE 逐字回显，体验更好", "多轮=把整段 history 传给模型", "超长上下文靠裁剪或摘要解决", "流式用 iter_lines 逐行解析 delta.content"] }
          ]
        }
      ]
    },

    /* ================= 向量数据库与 RAG ================= */
    {
      "id": "ai-rag",
      "name": "向量数据库与 RAG",
      "icon": "检",
      "tagline": "把公司文档塞进大模型：检索增强生成。",
      "intro": "大模型只会它训练时见过的知识。要让它回答你私有资料的问题，就得用 **RAG（检索增强生成）**：先把资料**切块并向量化**存进向量库，提问时**检索最相关的片段**拼进 Prompt，再让模型基于这些片段作答。这套路是当前落地 AI 应用的主力。",
      "meta": { "难度": "进阶", "场景": "RAG 应用" },
      "lessons": [
        {
          "id": "ai-rag-1-embedding",
          "title": "文本向量化与向量检索",
          "summary": "把句子变成坐标，用余弦相似度找‘最像’的文档。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "**向量**就是把『一段文字』映射成几百维的数字数组，意思相近的文字向量也相近。用它就能做**语义搜索**：把问题向量化，和库里所有文档向量比**余弦相似度**，取最高的 Top-K 作为相关片段。比『关键词』匹配更懂语义。" },
            { "type": "code", "lang": "python", "title": "用词频手搓一个简易向量 + 余弦相似度（可直接运行）",
              "code": `import math
# 真实做法是调用 embedding API（如 openai/embedding），
# 这里用『词袋+TF』手搓一个可运行的迷你向量，理解原理：
def vocab(docs):
    v, idx = set(), {}
    for d in docs:
        v |= set(d.split())
    return {w: i for i, w in enumerate(sorted(v))}

def bow(text, vmap):
    vec = [0] * len(vmap)
    for w in text.split():
        if w in vmap:
            vec[vmap[w]] += 1
    return vec

def cosine(a, b):
    dot = sum(x * y for x, y in zip(a, b))
    na, nb = math.sqrt(sum(x*x for x in a)), math.sqrt(sum(y*y for y in b))
    return dot / (na * nb) if na and nb else 0

docs = ["python 适合做数据科学", "java 常用于后端服务", "python 可以做人工智能"]
q = "我想用 python 做 AI"
idx = vocab(docs + [q])
scores = sorted(
    ((cosine(bow(q, idx), bow(d, idx)), d) for d in docs),
    reverse=True)
for s, d in scores:
    print(f"{s:.3f}  {d}")
# 语义相近的“python + AI”排最前 —— 这就是检索的基本盘` },
            { "type": "info", "title": "切块（chunking）很重要", "text": "把长文档切块再向量化，才能检索到『局部』而不被整体淹没。常见切法按段落/固定字数，且相邻块常加一部分**overlap（重叠）**避免一句话被从中切断。块大小与业务相关，没有唯一正解。" },
            { "type": "keypoints", "items": ["向量=文字的数值表示，语义相近则距离近", "余弦相似度找 Top-K 相关片段", "RAG 三步：切块向量化入库 → 检索 → 拼进 Prompt", "排版 FAQ/产品文档/企业知识库最常用"] }
          ]
        },
        {
          "id": "ai-rag-2-pipeline",
          "title": "RAG 完整流程手写版",
          "summary": "索引 → 检索 → 增强 → 生成，四段式可运行脚本。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "把上一课串起来，就得到一条完整 **RAG 流水线**：**索引**（文档切块+向量化+入库）→**检索**（问题向量化，取 Top-K）→**增强**（把片段拼成带上下文的 Prompt）→**生成**（交给大模型回答）。下面用刚学的迷你向量实现前三步。" },
            { "type": "code", "lang": "python", "title": "迷你 RAG 四步流水线（可直接运行，方便理解全貌）",
              "code": `import math

# ---------- 1) 简易向量库（真实场景用 FAISS/pgvector/向量数据库） ----------
class TinyVecDB:
    def __init__(self): self.docs, self.idx = [], {}
    def index(self, chunks):
        tokens = set()
        for c in chunks: tokens |= set(c.split())
        self.idx = {w: i for i, w in enumerate(sorted(tokens))}
        self.docs = [(self._bow(c), c) for c in chunks]
    def _bow(self, t):
        v = [0]*len(self.idx)
        for w in t.split():
            if w in self.idx: v[self.idx[w]] += 1
        return v
    def _cos(self, a, b):
        d = sum(x*y for x, y in zip(a, b)); na, nb = map(math.sqrt, (sum(x*x for x in a), sum(y*y for y in b)))
        return d/(na*nb) if na and nb else 0
    def topk(self, q, k=2):
        qv = self._bow(q)
        return sorted(self.docs, key=lambda d: self._cos(qv, d[0]), reverse=True)[:k]

db = TinyVecDB()
db.index([
    "变量是存储数据的容器，可以随时修改值",
    "函数是复用代码的结构，把一段逻辑打包",
    "循环用于重复执行某段代码直到满足条件",
    "列表是 python 中可以装多个元素的序列",
])

# ---------- 2) 检索 ----------
question = "python 里怎么反复执行一段代码"
hits = db.topk(question)
print("检索到最相关的片段：")
for v, c in hits: print("  ·", c)

# ---------- 3) 增强：拼成带上下文的 Prompt ----------
context = "\\n".join(c for v, c in hits)
augmented_prompt = f"请依据下面的资料回答：\\n{context}\\n\\n问题：{question}"

# ---------- 4) 生成（真实场景调用 LLM API） ----------
print("\\n增强后的 Prompt：\\n" + augmented_prompt)
print("\\n（第 4 步把这段 prompt 发给大模型，就会基于检索到的资料回答）")` },
            { "type": "warn", "title": "本站沙箱跑不了真实向量库", "text": "真实 RAG 用 FAISS/pgvector/ Chroma 等，并调用 embedding API 做真正的高维向量。上面用迷你词袋实现是为了让你不看外部依赖就在浏览器里跑通『索引→检索→增强』的逻辑，体会那条流水线长什么样。" },
            { "type": "keypoints", "items": ["RAG 四步：索引→检索→增强→生成", "检索结果拼进 Prompt 再交模型，抑制幻觉", "真实落地用向量数据库 + embedding API", "评估靠：检索命中率 + 生成答案正确率"] }
          ]
        }
      ]
    },

    /* ================= Agent 智能体 ================= */
    {
      "id": "ai-agent",
      "name": "Agent 智能体与工具调用",
      "icon": "代",
      "tagline": "让大模型不只动嘴，还能动手：ReAct 与 Function Calling。",
      "intro": "普通聊天是『一问一答』，**Agent** 是『给模型配工具，让它自己决定何时调用』：查天气、执行代码、调数据库、访问网页……模型的输出里声明要调用哪个函数，程序帮它执行、把结果喂回去。这就是 AutoGPT/Manus/各类智能体的共性套路。",
      "meta": { "难度": "进阶", "场景": "Agent 开发" },
      "lessons": [
        {
          "id": "ai-agent-1-function-calling",
          "title": "Function Calling：模型决定调哪个工具",
          "summary": "tools 声明 + 模型输出参数 + 程序执行回传。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "**Function Calling** 分四步：你**声明工具**（名字+参数 schema 传给模型）→ 模型**判断该用哪个工具**并吐出参数（不真正执行）→ 你的程序**执行**这个函数 → 把结果以 role=**tool** 的消息**回传**给模型，让它据此给出最终回答。" },
            { "type": "code", "lang": "python", "title": "手写一个 Function Calling 模拟循环（可直接运行）",
              "code": `# 用纯 Python 模拟『大模型已经决定调用哪个工具』之后的执行环节
# 真实场景：模型会返回 tools_calls 声明要调 add/calc，你的代码调度执行

AVAILABLE_TOOLS = {
    "get_weather": lambda city: {"城市": city, "天气": "晴", "温度": "26℃"},
    "calc": lambda expr: {"结果": eval(expr) if all(c in "0123456789+-*/() " for c in expr) else "非法表达式"},
}

def execute_tool_call(call):
    name, args = call["name"], call["arguments"]
    fn = AVAILABLE_TOOLS.get(name)
    if fn is None:
        return {"error": f"未知工具 {name}"}
    return fn(**args)

# 模拟：模型在上一轮发出的一次工具调用请求
model_said = {"name": "get_weather", "arguments": {"city": "上海"}}
result = execute_tool_call(model_said)
print("工具执行结果 →", result)
print("下一步：把 result 以 tool 角色回传给模型，模型会据此组织最终回答。")` },
            { "type": "info", "title": "ReAct 模式", "text": "另一种常见范式叫 **ReAct**（Reason + Act）:反复让模型『**思考** → **行动**（调用工具）→ **观察**（工具结果）→ 再思考』，直到得出答案。类似人解决问题的循环。Function Calling 是它的 API 化实现。" },
            { "type": "keypoints", "items": ["工具声明→模型选工具吐参→程序执行→结果回传", "Function Calling 把模型从嘴巴变成能动手", "ReAct：思考→行动→观察 循环直到解决", "Agent 上限取决于可用的工具库质量"] }
          ]
        },
        {
          "id": "ai-agent-2-loop",
          "title": "Agent 主循环与安全",
          "summary": "while 循环驱动机器人，最大循环次数与敏感操作拦截。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "一个 Agent 就是一场 **循环**：让模型『决定下一步』，若它要调工具就执行并回传，直到它说『我完成了』。关键工程点：设定**最大迭代次数**防止死循环、把**危险操作（删库/汇款）**接入审批或直接禁止。" },
            { "type": "code", "lang": "python", "title": "Agent 主循环骨架（可直接运行）",
              "code": `import random

def ask_model(history):
    # 真实场景：调用 LLM API，这里用随机模拟“决定”
    r = random.random()
    if r < 0.4:
        return {"action": "tool", "name": "get_weather", "args": {"city": "北京"}}
    return {"action": "finish", "answer": "天气已经查完了"}

def run_agent(max_steps=5):
    history = [{"role": "system", "content": "你是一个会查天气的助手"}]
    step = 0
    while step < max_steps:
        step += 1
        decision = ask_model(history)
        print(f"[step {step}] 模型决定：{decision['action']}")

        if decision["action"] == "tool":        # 执行工具并回传
            name = decision["name"]
            if name in ("drop_table", "transfer_money"):   # 敏感操作拦截
                print(f"  ⛔ 高危操作 {name} 被拦截，需人工审批")
                return
            result = {"天气": "晴", "温度": "30℃"}  # 真实由函数返回
            history.append({"role": "tool", "content": str(result)})
        else:                                    # finish：收尾
            print("  ✅ " + decision["answer"])
            return "完成"
    print("达到最大步数，强制结束")

run_agent()  # 随机走几次，体会 Agent 的『循环-执行-回传』骨架` },
            { "type": "warn", "title": "Agent 安全第一", "text": "让模型自主调工具=把一部分控制权交给不可完全预测的模型。务必：限定工具白名单、高危操作要审批、限制步数与超时、对外部输入做注入防护。宁可多问一句，也不随机器一次帮倒忙。" },
            { "type": "keypoints", "items": ["Agent=循环：决定→行动→观察→再决定", "设置最大步数/超时，防死循环", "高危工具（删库/支付）强制人工审批", "工具白名单 + 输入防注入"] }
          ]
        }
      ]
    },

    /* ================= AI 应用实战 ================= */
    {
      "id": "ai-app",
      "name": "AI 应用工程化实战",
      "icon": "实",
      "tagline": "把 Demo 做成可上线的 AI 产品：成本、评估、部署。",
      "intro": "跑通一个 Telegram/Discord 机器人式 Demo 只是开始。做能上线的 AI 产品还要想清楚：**成本**（tokens 计价）、**评估**（怎么判断回答好不好）、**缓存与降级**（LLM 挂了怎么办）。这一板块把这些工程问题一次捋清。",
      "meta": { "难度": "进阶", "场景": "AI 产品" },
      "lessons": [
        {
          "id": "ai-app-1-cost-llm",
          "title": "成本、token 与后盾工程",
          "summary": "tokens 怎么算钱、怎么少花 token、模型挂了怎么兜底。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "大模型按 **token**（约等于词/子词片段的数）计费，输入输出单价不同，几百万 token 通常对应几十到几百元。省钱的通用招：**精简 prompt**、**缓存重复请求**、**用小模型做简单任务**、**先本地规则/检索过滤再问模型**。" },
            { "type": "code", "lang": "python", "title": "粗略估算 token 花费 + 缓存命中（可直接运行）",
              "code": `import hashlib, json

# 中文大约 1 个 token ≈ 1~1.5 个汉字；这里是简化估算
def cheap_tokens(text, cached):
    # 简单的『缓存优先』策略，命中就省去一次模型调用
    key = hashlib.md5(text.encode()).hexdigest()
    if key in cached:
        return cached[key], True
    est = len(text) // 2          # 粗略：2 个字符≈1 token
    cached[key] = est
    return est, False

cache = {}
price_in, price_out = 1, 2        # 假设每 1M token 的价格（元）

prompt = "请用一句话总结进程和线程的区别。"
tok, hit = cheap_tokens(prompt, cache)
tok2, hit2 = cheap_tokens(prompt, cache)   # 第二次命中缓存

cost_in = tok * price_in / 1_000_000
print(f"首次估算 token={tok} 输入成本≈{cost_in:.4f}元")
print(f"第二次 {'命中缓存，不花钱👍' if hit2 else '重新计费'}")` },
            { "type": "keypoints", "items": ["按 token 计费，输入输出单价不同", "省 token：精简 prompt/缓存/小模型/先过滤", "缓存 + 降级（先本地，再小模型，最后大模型）", "记住大厂有并发上限，要做重试与限流"] }
          ]
        },
        {
          "id": "ai-app-2-eval-deploy",
          "title": "AI 评估与部署",
          "summary": "怎样科学判断回答好不好，并安全地上线。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "AI 产品上线前必须有**评估（Eval）**：准备一批『问题-标准答案』，跑一遍看命中率/相关度；过程记录（trace）每日看失败案例。部署上建议**灰度**、**版本化**（pin 模型版本）、以及 prompt 变更走测试。把 LLM 当不稳定依赖一样对待。" },
            { "type": "code", "lang": "python", "title": "一个极简评估器：答案是否包含了要点（可直接运行）",
              "code": `def evaluate(generated, expected_keywords):
    # 真实评估：让另一个模型打分 / 语义相似度
    # 这里演示最简单的『要点命中』评估：生成答案覆盖了标准答案的要点吗？
    hit = sum(1 for k in expected_keywords if k in generated)
    return round(hit / len(expected_keywords) * 100, 1)

cases = [
    ("变量是存放数据的空间，可以改值", ["存放", "数据"]),
    ("变量是宇宙中的能量", ["存放", "数据"]),
]
for ans, kw in cases:
    print(f"要点命中 {evaluate(ans, kw)}% → “{ans}”")

print("\\n做法：跑一批 case → 看平均分 → 不满意就改 prompt/加RAG → 再跑")` },
            { "type": "info", "title": "评估怎么看", "text": "两个主指标：**覆盖率**（该答的点答全没）与**忠实度**（是不是照资料答、没编）。离线评估用测试集跑分数；线上评估靠**反馈**（点赞/踩）+日志。别只看一两个例子，要看统计。" },
            { "type": "keypoints", "items": ["上线前先建 Eval 测试集打分", "track 失败案例，迭代 prompt/检索", "模型版本化、prompt 变更走测试", "灰度发布 + 监控成本与延迟"] }
          ]
        }
      ]
    }
  ]
};