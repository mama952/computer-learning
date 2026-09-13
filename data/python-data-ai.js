/* ============================================================
   计算机知识库 · 数据：Python 数据与 AI 深化（追加到 Python 目录）
   通过找到已存在的 python 子项，把本文件的进阶课时追加到其 lessons。
   依赖 python-full.js 先加载；若未找到则优雅回退为新子项。
   课时 id 从 python-81 起。
   ============================================================ */
const PY_DATA_AI_LESSONS = [
  {
    'id': "python-81",
    'title': "numpy：数据分析的第一块积木",
    'summary': "为什么数据/AI 都用 numpy？搞懂数组、形状与并行运算。",
    'difficulty': "进阶",
    'blocks': [
      { 'type': "p", 'text': "numpy 提供了高性能的多维数组 ndarray，取代 Python 原生 list 进行数值计算。它的核心优势是：**向量化**——把『逐元素循环』交给底层 C 一次性执行，速度能快几十上百倍，还更简洁。这一课把你带入 numpy 的世界，编辑器已自动加载 numpy，可直接运行。" },
      { 'type': "code", 'lang': "python", 'title': "数组、形状与基本运算（可直接运行）",
        'code': `import numpy as np

a = np.array([1, 2, 3, 4, 5])      # 一维数组，类似 list 但更快
print("一维:", a, "形状", a.shape, "类型", a.dtype)

m = np.array([[1, 2, 3], [4, 5, 6]])  # 二维数组 = 矩阵
print("二维形状:", m.shape)            # (行, 列) -> (2, 3)

# 常用构造
print("全0:", np.zeros(3))
print("全1:", np.ones((2, 2)))
print("等差:", np.arange(0, 10, 2))     # 0,2,4,6,8
print("区间:", np.linspace(0, 1, 5))    # 0~1 均匀5个点

# 向量化：整组一起算，不需要 for 循环
x = np.array([1, 2, 3, 4, 5])
print("x*2:", x * 2)
print("x**2:", x ** 2)
print("和:", x.sum(), "均值:", x.mean(), "标准差:", x.std())` },
      { 'type': "list", 'ordered': true, 'items': ["一维数组约等于增强版 list，二维数组约等于矩阵或表格", "用 shape 看维度、dtype 看元素类型（int/float 等）", "向量化：对整个数组一次运算，避免 Python 慢速循环", "np.arange 造等差序列、linspace 造均匀区间、zeros/ones 造填充数组"] },
      { 'type': "info", 'title': "为什么 numpy 快", 'text': "Python 循环每步都要做动态类型解析与对象开销，很慢。numpy 把『类型统一 + 底层 C/Fortran 循环』，一次处理一整块连续内存。规则：能用 numpy 对整组数据算的事，就别写 for 逐个算。" },
      { 'type': "keypoints", 'items': ["numpy 的 ndarray 是数据/AI 的底层结构", "向量化取代循环：更简单也更快", "shape 定维度、dtype 定类型", "arange/linspace/zeros/ones 是最常用构造"] }
    ]
  },
  {
    'id': "python-82",
    'title': "numpy 进阶：广播、切片与条件筛选",
    'summary': "不同形状的数组也能一起算？广播机制是核心。",
    'difficulty': "进阶",
    'blocks': [
      { 'type': "p", 'text': "numpy 的两个高频技能：**广播（broadcast）**——让不同形状的数组自动对齐参与运算；**布尔筛选**——用条件直接选出行。掌握它们，数据处理量瞬间上升。" },
      { 'type': "code", 'lang': "python", 'title': "广播：小形状自动扩展到大形状（可运行）",
        'code': `import numpy as np

# 标量+数组：0 自动扩到每个元素
a = np.array([1, 2, 3, 4, 5])
print("数组-均值(去中心化):", a - a.mean())     # 每个元素减均值
print("标准化:", (a - a.mean()) / a.std())        # 这是数据预处理最常见一步

# 向量 + 行向量：二维广播
m = np.array([[1, 2, 3], [4, 5, 6]])          # 2x3
row = np.array([10, 20, 30])                  # 3 -> 扩展为2行参与
print("m + row:\\n", m + row)

# 矩阵每一列减去自己的均值（固定量纲）
data = np.array([[70, 1.9], [65, 1.7], [80, 1.8]])  # (身高,体重x10?)
col_mean = data.mean(axis=0)                   # 每列均值
print("每列均值:", col_mean)
print("减去列均值(居中):\\n", data - col_mean)` },
      { 'type': "code", 'lang': "python", 'title': "布尔筛选：条件直接选数据",
        'code': `import numpy as np
scores = np.array([88, 92, 76, 85, 90, 50, 95])

passed = scores >= 60
print("及格掩码:", passed)          # 布尔数组
print("及格的分:", scores[passed])  # 用掩码取子集
print(">=90 有几个:", (scores >= 90).sum())
print("最高/最低:", scores.max(), scores.min())

# np.where：真/假分别处理
print("评语:", np.where(scores >= 60, "及格", "不及格"))` },
      { 'type': "warn", 'title': "广播的规则", 'text': "广播不是随意对齐：从最后一个维度往前对齐，要么长度相同、要么其中一个是 1、要么长度差一个维。常见错误（两个形状无法对齐）会抛 <code.inline>ValueError: operands could not be broadcast</code.inline>，看到它检查维度即可。" },
      { 'type': "keypoints", 'items': ["广播让不同形状数组免循环直接算", "减去均值/除以标准差 = 标准化，ML 数据预处理第一招", "布尔数组 bool mask 配合 [ ] 筛选数据极高效", "axis=0 按列、axis=1 按行聚合"] }
    ]
  },
  {
    'id': "python-83",
    'title': "pandas：面向真实数据表的两大支柱",
    'summary': "Series 与 DataFrame，以及如何读取真实数据文件。",
    'difficulty': "进阶",
    'blocks': [
      { 'type': "p", 'text': "真实世界的数据是『表格』：有行有列。pandas 用 **DataFrame（表）** 和 **Series（一列）** 承载它，并提供读取 CSV/Excel、清洗、筛选、聚合的完整工具链。编辑器已支持 pandas 自动加载，可直接运行。" },
      { 'type': "code", 'lang': "python", 'title': "构建 DataFrame 与读取 CSV（可运行）",
        'code': `import pandas as pd

# 从字典构建表格
df = pd.DataFrame({
    "姓名": ["小张", "小李", "小王", "小赵"],
    "部门": ["销售", "技术", "销售", "技术"],
    "绩效": [88, 92, 76, 95],
})
print("表格本身:")
print(df)
print("\\n列名:", list(df.columns))
print("形状:", df.shape)                 # (行,列)

# 访问列（Series）
print("\\n绩效列:", df["绩效"].tolist())
print("绩效均值:", df["绩效"].mean())

# 条件筛选
print("\\n销售部的人:")
print(df[df["部门"] == "销售"])

# 读取真实文件：把上面数据存成 csv 再读回
# df.to_csv("人员表.csv", index=False)
# 读取： df = pd.read_csv("人员表.csv")
# 读 Excel： pd.read_excel("人员表.xlsx")` },
      { 'type': "info", 'title': "美国真实 demo，你也能快速上手", 'text': "pandas 里 90% 的单表操作是：列运算（df[列]=...）、条件筛选（df[条件]）、按列聚合（groupby）、排序（sort_values）。先把这根主线练熟，再抠细节。" },
      { 'type': 'warn', 'title': '真实数据没有一个整齐干净', 'text': "真实 CSV/Excel 一定有乱码、空值、多余列、混入的非数字。做好『读到表 → 看 shape/列名/isna → 清洗 → 再分析』的习惯，比会 100 个 API 更重要。" },
      { 'type': "keypoints", 'items': ["DataFrame=带行列标签的表格；Series=一列", "df[列] 取列、df[条件] 筛选行、groupby 聚合", "to_csv/read_csv 打通文件与内存", "条件筛选返回符合的新表，不会改动原表"] }
    ]
  },
  {
    'id': "python-84",
    'title': "pandas 数据清洗：把脏数据变干净",
    'summary': "处理缺失值、重复行、类型错误，是拿数据的第一道关。",
    'difficulty': "进阶",
    'blocks': [
      { 'type': "p", 'text': "拿到真实数据的头等大事，永远是搞清楚它有多脏：有没有空值、有没有重复、类型对不对。这一课讲透清洗三步走：探测 → 处理 → 转换。" },
      { 'type': "code", 'lang': "python", 'title': "缺失与重复（可运行）",
        'code': `import pandas as pd
import numpy as np

df = pd.DataFrame({
    "姓名": ["小张", "小李", np.nan, "小赵", "小李"],
    "年龄": [28, np.nan, 30, 25, np.nan],
    "部门": ["销售", "技术", "销售", "技术", "技术"],
})
print("原始表:")
print(df)

print("\\n1) 缺失值统计（每列 NaN 个数）:")
print(df.isna().sum())

print("\\n2) 删除整行为空的：")
print(df.dropna(how="all"))

print("\\n3) 填充缺失：年龄用中位数补")
df_filled = df.copy()
df_filled["年龄"] = df_filled["年龄"].fillna(df_filled["年龄"].median())
print(df_filled[["姓名", "年龄"]])

print("\\n4) 删除重复（保留首个）:")
print(df.drop_duplicates(subset=["姓名"]))` },
      { 'type': "code", 'lang': "python", 'title': "类型转换与异常值",
        'code': `import pandas as pd

# 从文件读的数常常变成字符串
df = pd.DataFrame({"价格": ["19.9", "25", "12.5", "9999", "-1"]})
print("当前类型:", df["价格"].dtype)

# 转数值：errors='coerce' 把无法转换的变 NaN
df["价格"] = pd.to_numeric(df["价格"], errors="coerce")
print("转换后类型:", df["价格"].dtype)
print("有异常值的行:")
print(df[df["价格"].isna()])

# 异常值侦查：价格 > 2000 或 <0 明显可疑
df = df.dropna()
suspect = df[(df["价格"] > 1000) | (df["价格"] < 0)]
print("\\n可疑价格:", suspect["价格"].tolist())` },
      { 'type': "tip", 'title': "清洗的黄金心态", 'text': "永远先问 '这个字段真实吗、这个空值代表缺失还是本身就是0？'。清洗不是机械跑函数，而是结合业务语义做判断。时间花的值得，数据的社会价值以后会加倍还给你。" },
      { 'type': "keypoints", 'items': ["isna().sum() 摸清缺失分布", "dropna 删行/ fillna 填充，按业务选", "drop_duplicates 去重", "to_numeric errors='coerce' 把脏文本变 NaN 再处理"] }
    ]
  },
  {
    'id': "python-85",
    'title': "数据的统计视角：均值、分布与相关性",
    'summary': "用几个数字读懂一列数据，用相关性发现变量关系。",
    'difficulty': "进阶",
    'blocks': [
      { 'type': "p", 'text': "数据科学的起点不是画图，而是『描述统计』：用均值/中位数/标准差概括一组数，用相关系数衡量两个变量的关系。先看懂这些数字，才知道该画什么图、建什么模型。" },
      { 'type': "code", 'lang': "python", 'title': "单列数据的分布画像（可运行）",
        'code': `import numpy as np
scores = np.array([88, 92, 76, 85, 90, 84, 91, 79, 60, 95])

print("样本数:", len(scores))
print("均值 (mean):", round(scores.mean(), 2))
print("中位数 (median):", np.median(scores))
print("标准差 (std):", round(scores.std(), 2))   # 离散程度
print("极差:", scores.max() - scores.min())

# 分位数：理解分布形状
q1 = np.percentile(scores, 25)
q3 = np.percentile(scores, 75)
print("四分位距 IQR:", q3 - q1)   # 中间一半的跨度
print("最小/最大:", scores.min(), scores.max())` },
      { 'type': "code", 'lang': "python", 'title': "相关性：两个变量一起变吗（可运行）",
        'code': `import numpy as np

# 两个变量（比如：学习时长 与 成绩）
hours = np.array([1, 2, 3, 4, 5, 6, 7])
scores = np.array([55, 62, 70, 74, 82, 88, 95])

r = np.corrcoef(hours, scores)[0, 1]
print("学习时长与成绩 相关系数:", round(r, 2))
# r 接近 1 → 强正相关（一起增大）

# 反例：两列随机数，相关性应接近 0
np.random.seed(0)
a = np.random.randn(50)
b = np.random.randn(50)
print("随机两列相关:", round(np.corrcoef(a, b)[0, 1], 3), "（接近0=无关）")

# 注意：相关 ≠ 因果。孩子小时候鞋码和识字量相关，但增大鞋码不会变聪明。` },
      { 'type': "info", 'title': "相关 vs 因果", 'text': "相关系数只说明『一起变』，不证明『谁导致谁』。做分析时务必小心：两个变量同时受第三个变量影响，也会表现为强相关。相关性是线索，因果需要实验或更强的设计。" },
      { 'type': "keypoints", 'items': ["均值/中位数看集中趋势，标准差/IQR 看离散", "相关系数 r∈[-1,1]，|r|越接近1关系越强", "相关 ≠ 因果，警惕混淆变量", "分布画像先于建模，别一上来就套算法"] }
    ]
  },
  {
    'id': "python-86",
    'title': "机器学习实战(一)：纯手写 KNN 分类器",
    'summary': "用 numpy 手写最直观的分类算法，理解『监督学习』本质。",
    'difficulty': "进阶",
    'blocks': [
      { 'type': "p", 'text': "机器学习听起来高深，但它最基本的思想很朴素：**K-近邻（KNN）**——`物以类聚`。给你一堆已标记好类别的样本（训练集），预测一个新样本属于哪类，就找训练集里离它最近的 K 个邻居，少数服从多数。这一课我们完全从零手写 KNN，彻底搞懂它再谈轮子。" },
      { 'type': "code", 'lang': "python", 'title': "从零实现 KNN（可直接运行）",
        'code': `import numpy as np

# 训练集：二维特征 (x1, x2)，标签 0/1 两类
train = np.array([[1, 1], [1, 2], [2, 1],   # 类别0 的点
                  [5, 5], [5, 6], [6, 5]])  # 类别1 的点
labels = np.array([0, 0, 0, 1, 1, 1])

def knn_predict(x, train, labels, k=3):
    # 1) 和每个训练点的距离（欧氏距离）
    dist = np.sqrt(((train - x) ** 2).sum(axis=1))
    # 2) 找最近的 k 个邻居的下标
    k_idx = np.argsort(dist)[:k]
    # 3) 少数服从多数
    votes = labels[k_idx]
    return np.bincount(votes).argmax()

for pt in [(1.5, 1.5), (5.5, 5.5), (3.0, 3.0), (2.0, 4.0)]:
    print(pt, "→ 预测类别", knn_predict(np.array(pt), train, labels))` },
      { 'type': 'info', 'title': '为什么下标靠 argsort', 'text': "<code.inline>argsort</code.inline> 返回的是『按距离排好序后的原下标』，而不是距离本身。用这些下标去查 `labels`，就能拿到最近几个邻居各自的类别，再投票。这是一行说明本质的点睛之笔。" },
      { 'type': 'warn', 'title': 'KNN 的代价', 'text': "KNN 不用训练参数（惰性学习），推理时却要跟所有样本算一遍距离。样本百万级时就很慢。所以 KNN 适合小数据/可解释场景，大场景要换参数化模型（后面的回归、神经网络）。" },
      { 'type': 'keypoints', 'items': ["KNN = 最近的 K 个邻居投票", "欧氏距离用两次方和再开方；argsort 拿下标", "k 要选合适：太小受噪点影响，太大抹平边界", "惰性学习推理慢，适合小样本可解释场景"] }
    ]
  },
  {
    'id': "python-87",
    'title': "机器学习实战(二)：梯度下降线性回归",
    "summary": "手写『学习』的过程：让模型参数自己调整到拟合数据。",
    'difficulty': "进阶",
    'blocks': [
      { 'type': "p", 'text': "上一课 KNN 没有『参数可学』。这一课开始真正的学习：**线性回归 + 梯度下降**。我们让模型 <code.inline>y=w·x+b</code.inline> 的参数 w、b 从随机值开始，每次用『预测误差的梯度』往让误差变小的方向挪一步，循环上千次，w、b 自己就会逼近真实答案。这就是机器『学习』的底层机制。" },
      { 'type': "code", 'lang': "python", 'title': "手写梯度下降回归（可直接运行）",
        'code': `import numpy as np
np.random.seed(0)

# 造真数据：y = 3x + 2 + 噪声
X = np.linspace(0, 10, 100)
true_w, true_b = 3.0, 2.0
y = true_w * X + true_b + np.random.normal(0, 1.0, X.size)

# 初始化参数
w = b = 0.0
lr, epochs = 0.01, 3000
n = X.size

for i in range(epochs):
    pred = w * X + b
    err = pred - y
    # 对均方误差求 w、b 的梯度（平均梯度）
    dw = (2 / n) * (X * err).sum()
    db = (2 / n) * err.sum()
    # 沿负梯度方向走一步
    w -= lr * dw
    b -= lr * db

loss = ((w * X + b - y) ** 2).mean()
print(f"学到的 w≈{w:.2f}（真实 3.0），b≈{b:.2f}（真实 2.0）")
print(f"最终均方误差 MSE≈{loss:.4f}")
print("预测 x=5 →", round(w*5+b, 2), "（应接近 17）")` },
      { 'type': "list", "ordered": true, "items": ["前向：用当前 w、b 算预测 pred 与误差 err", "求梯度：误差对 w、b 的偏导（此处手拆出来了）", "更新：参数 = 参数 − 学习率 × 梯度", "重复到收敛，w、b 逼近真实值", "学习率 lr 太大暴走、太小收敛慢——是核心超参数"] },
      { 'type': 'info', 'title': '梯度下降是深度学习的引擎', 'text': "神经网络就是把上面『一堆 w 用很多层组织起来』，自动求梯度靠反向传播（下一课）。理解这一课的更新循环，就拿到了整个深度学习的钥匙：前向算误差、反向得梯度、沿负梯度更新。" },
      { 'type': 'keypoints', 'items': ["回归=拟合连续值；目标 y≈w·x+b", "梯度下降：沿负梯度更新参数，迭代收敛", "误差=均方误差 MSE；梯度就是误差对参数的导数", "学习率是核心超参数，过大过小都不行"] }
    ]
  },
  {
    'id': "python-88",
    'title': "机器学习实战(三)：从零写一个神经网络",
    'summary': "用 numpy 手写一个 2 层 MLP，学会 XOR 这个一线分类器做不了的问题。",
    'difficulty': "高级",
    'blocks': [
      { 'type': "p", 'text': "现在把梯度下降升级成**神经网络**：一个只是线性模型的感知机算不出 XOR（异或，0⊕1=1 但 1⊕1=0），但加一层隐藏层 + 非线性激活（sigmoid），就能表达这种非线性决策。这一课我们手写前向传播与反向传播，跑通 XOR，真正看懂深度学习的最小一步。" },
      { 'type': "code", 'lang': "python", 'title': "2 层 MLP 手写 XOR（可直接运行）",
        'code': `import numpy as np
np.random.seed(1)

X = np.array([[0,0],[0,1],[1,0],[1,1]])   # 4 个输入
y = np.array([[0],[1],[1],[0]])           # XOR 目标

# 网络结构 2->2->1（输入2 隐藏2 输出1）
w1 = np.random.randn(2, 2); b1 = np.zeros((1, 2))
w2 = np.random.randn(2, 1); b2 = np.zeros((1, 1))

def sigmoid(z): return 1 / (1 + np.exp(-z))

epochs, lr = 8000, 0.9
for i in range(epochs):
    # 前向
    z1 = X @ w1 + b1; a1 = sigmoid(z1)
    z2 = a1 @ w2 + b2; a2 = sigmoid(z2)
    loss = ((a2 - y) ** 2).mean()

    # 反向传播（对每层求梯度）
    dz2 = (a2 - y) * (a2 * (1 - a2))
    dw2 = a1.T @ dz2;   db2 = dz2.sum(axis=0, keepdims=True)
    da1 = dz2 @ w2.T
    dz1 = da1 * (a1 * (1 - a1))
    dw1 = X.T @ dz1;    db1 = dz1.sum(axis=0, keepdims=True)

    # 更新
    w2 -= lr * dw2; b2 -= lr * db2
    w1 -= lr * dw1; b1 -= lr * db1

print("XOR 预测（应接近 0,1,1,0）:")
print(np.round(a2.ravel(), 3))
print("最终损失:", round(loss, 4))` },
      { 'type': "info", 'title': "这一课在讲什么", 'text': "真实深度学习（PyTorch/TensorFlow）就是把这套 numpy 数学封装成框架，自动微分帮你算那些复杂的 dz（backprop 链式法则），GPU 帮你加速矩阵乘法，再加卷积/注意力等模块。**你把这段 20 行看懂，底层就不再是黑盒。**" },
      { 'type': 'warn', 'title': '看输出而非只看代码', 'text': "运行后请观察：网络从随机权重出发，预测值逐步从『乱』收敛到 0/1。把 epochs 从 8000 调到 800 再看预测精度，体会‘训练轮数不够学不会’；再把 lr 调到 0.9 改太大看会不会发散。亲手调节，胜读千言。" },
      { 'type': 'keypoints', 'items': ["线性感知机算不了 XOR，隐藏层+非线性激活能表达非线性", "前向传播算输出，反向传播用链式法则算每层梯度", "每层的『更新』和回归课完全一致：参数-=lr×梯度", "框架=这套数学的自动化+GPU 加速"] }
    ]
  },
  {
    'id': "python-89",
    'title': "进入工业界：scikit-learn 与完整 ML 流程",
    'summary': "生产上不手写轮子，但要把流程、评估与防过拟合做对。",
    'difficulty': "高级",
    'blocks': [
      { 'type': "p", 'text': "搞懂了手写的原理，生产实践要用工业级库 **scikit-learn**：它内置 KNN/回归/聚类/各种评估与划分工具，几十行搞定真实建模。但会用库不等于会做 ML——真正的功力在于**流程规范**：数据划分、交叉验证、指标、防过拟合。这一课讲透完整工作流。" },
      { 'type': "code", 'lang': "python", 'title': "scikit-learn 经典流程（sklearn 需本地运行）",
        'code': `# 说明：scikit-learn 体积较大，本在线环境未内置。
# 请在本地（Python + pip install scikit-learn）运行，思路如下。
'''
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score

data = load_iris()
X, y = data.data, data.target            # 特征 与 标签

# 1) 数据划分：训练集 + 测试集（绝不能混着评估）
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42)

# 2) 建模 + 训练
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X_train, y_train)              # 学习

# 3) 评估：只在测试集上看泛化
pred = model.predict(X_test)
print("测试集准确率:", accuracy_score(y_test, pred))

# 4) 交叉验证：更稳地估计模型好坏
scores = cross_val_score(KNeighborsClassifier(3), X, y, cv=5)
print("5折交叉验证均值:", scores.mean().round(3))
'''` },
      { 'type': "table", "head": ["环节", "做什么", "关键要点"], "rows": [["划分", "train_test_split", "测试集独立，绝不参训"], ["建模", "model.fit(X,y)", "不同算法选型"], ["评估", "准确率/precision/recall", "分类看混淆矩阵/ROC"], ["稳健", "cross_val_score(k折)", "降低单次划分的运气"], ["防过拟合", "正则化/更多数据/早停", "训练高而测试低=过拟合"]] },
      { 'type': 'warn', 'title': '最大的坑：数据泄漏', 'text': "如果你在划分前就用全量数据做标准化/选特征，测试集信息偷跑进训练，评估结果虚高，上线就崩。正确姿势：标准化等预处理只在训练集上 fit，再 transform 测试集。" },
      { 'type': "info", "title": "更深一点去哪学", 'text': "方向建议：① 特征工程（类别编码、缺失处理、归一化）；② 评估线性代数（混淆矩阵 precision/recall/F1）；③ 模型调参（交叉验证 + 网格搜索 GridSearchCV）；④ 树模型（决策树/随机森林）作为分类回归的另一主力；⑤ 之后才是深度学习（PyTorch）。" },
      { 'type': 'keypoints', 'items': ["流程：划分→建模→评估→交叉验证→调参", "测试集必须独立，警惕数据泄漏", "准确率之外还要看 precision/recall", "从手写原理到会用 sklearn，缺失的是流程纪律而不是代码"] }
    ]
  }
];

/* 安全挂载：追加到已加载的 python 课程尾部 */
window.LANGUAGE_EXTRA = window.LANGUAGE_EXTRA || [];
(function attach() {
  var py = window.LANGUAGE_EXTRA.find(function (s) { return s.id === "python"; });
  if (py) {
    py.lessons = (py.lessons || []).concat(PY_DATA_AI_LESSONS);
    py.meta = Object.assign({}, py.meta, { "数据/AI": "81-89 章" });
    if (py.tagline.indexOf("数据/AI") < 0) py.tagline = "从零入门到数据/AI 实战的完整课程（含可运行 ML 实战）。";
  } else {
    window.LANGUAGE_EXTRA.push({
      id: "python", name: "Python", icon: "Py", tagline: "Python 数据与 AI 深化。",
      lessons: PY_DATA_AI_LESSONS
    });
  }
})();