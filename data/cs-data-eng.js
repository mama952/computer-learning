/* ============================================================
   计算机知识库 · 数据：数据工程与大数据
   schema: { id, name, icon, description, children:[{id,name,icon,tagline,intro,meta,lessons:[{id,title,summary,difficulty,blocks}]}] }
   block.type: p | h | h3 | list | tip | info | warn | danger | keypoints | code | table
   从『会写基础 SQL』到『能搭数据管道』：SQL 进阶、数仓建模、大数据计算框架、实时流处理。
   ============================================================ */
window.CS_DATA_ENG = {
  "id": "cs-data-eng",
  "name": "数据工程与大数据",
  "icon": "数",
  "description": "当数据多到一张表放不下、分析多到一台机器跑不完，就进入了数据工程的世界：SQL 进阶高效取数、数仓建模组织数据、Hadoop/Spark 分布式计算、Kafka 实时流处理。这是数据岗位与后端岗位的分水岭技能。",
  "children": [
    /* ================= SQL 进阶与查询优化 ================= */
    {
      "id": "de-sql",
      "name": "SQL 进阶与查询优化",
      "icon": "SQL",
      "tagline": "窗口函数、递归 CTE、Explain——把 SQL 写到又快又对。",
      "intro": "基础 SQL 能查出结果，进阶 SQL 能在海量数据上又对又快。这一板块讲清楚**窗口函数**（组内排名/累计/环比）、**CTE**（拆分复杂逻辑、递归展开树），以及如何用执行计划识别慢查询。全部示例可在站内 SQL 在线环境直接运行。",
      "meta": { "难度": "进阶", "场景": "数据分析/后端" },
      "lessons": [
        {
          "id": "de-sql-1-window",
          "title": "窗口函数：组内排名与累计",
          "summary": "ROW_NUMBER/RANK、SUM OVER、LAG——GROUP BY 做不到的事。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "**窗口函数**在不把整表折叠成一组的前提下，对每一行做『跨行』计算：<code.inline>ROW_NUMBER() OVER (PARTITION BY … ORDER BY …)</code.inline> 做组内排名，<code.inline>SUM(col) OVER (ORDER BY …)</code.inline> 做累计求和，<code.inline>LAG()</code.inline> 取上一行做环比。它解决了『既要明细行、又要组内聚合』的矛盾——这是 GROUP BY 做不到的，因为 GROUP BY 会把多行压成一行。" },
            { "type": "code", "lang": "sql", "title": "窗口函数三连：排名/累计/环比（可直接运行）",
              "code": `CREATE TABLE sales (
  id INT PRIMARY KEY,
  region VARCHAR(10),
  amount DECIMAL(10,2),
  sale_date DATE
);
INSERT INTO sales VALUES
  (1,'华东',1200,'2026-09-01'),
  (2,'华东',1800,'2026-09-02'),
  (3,'华北',1500,'2026-09-01'),
  (4,'华北',900,'2026-09-02'),
  (5,'华北',2200,'2026-09-03');

-- ① 组内排名：每个区域按金额降序排第几
-- ROW_NUMBER 不给并列；RANK 有并列会跳号；DENSE_RANK 不跳号
SELECT region, amount,
  ROW_NUMBER() OVER (PARTITION BY region ORDER BY amount DESC) AS rn,
  RANK()       OVER (PARTITION BY region ORDER BY amount DESC) AS rk
FROM sales
ORDER BY region, rn;

-- ② 累计求和：每个区域按日期累加 running_total（移动聚合）
SELECT region, sale_date, amount,
  SUM(amount) OVER (PARTITION BY region ORDER BY sale_date) AS running_total
FROM sales
ORDER BY region, sale_date;

-- ③ 环比：用 LAG 看上一行金额
SELECT region, sale_date, amount,
  LAG(amount,1) OVER (PARTITION BY region ORDER BY sale_date) AS prev_amount
FROM sales
ORDER BY region, sale_date;` },
            { "type": "warn", "title": "窗口函数能用在哪", "text": "窗口函数**只能出现在 SELECT 和 ORDER BY 中**，出现在 WHERE 里大多会报错。要过滤窗口结果（如‘组内 Top3’），把它包成子查询或 CTE 再在外层 WHERE。" },
            { "type": "info", "title": "PARTITION 与 ORDER 都没写会怎样", "text": "<code.inline>SUM(x) OVER ()</code.inline> 表示整张表当一个窗口（全局合计，每行都带总数）。<code.inline>PARTITION BY</code.inline> 负责分组、<code.inline>ORDER BY</code.inline> 负责组内排序并决定累计顺序——二者都能按需省略。" },
            { "type": "keypoints", "items": ["窗口函数=不折叠行、逐行带组内聚合，GROUP BY 做不到", "ROW_NUMBER/RANK/DENSE_RANK 做组内排名", "SUM OVER ORDER BY 做累计；LAG/LEAD 取前/后行", "只准在 SELECT/ORDER BY 用，过滤要套子查询"] }
          ]
        },
        {
          "id": "de-sql-2-cte-optimize",
          "title": "CTE 与查询优化",
          "summary": "WITH 拆分复杂逻辑、递归 CTE 展开层级、Explain 找慢点。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "**CTE（公用表表达式）** 用 <code.inline>WITH xxx AS (SELECT …)</code.inline> 给一段查询起名，让多层嵌套的查询可读可复用；**递归 CTE** 能自引用 展开树形/层级数据（组织架构、BOM、菜单）。查询优化则靠**执行计划**定位全表扫描与低效连接。" },
            { "type": "code", "lang": "sql", "title": "递归 CTE + 用 CTE 拆分复杂查询（可直接运行）",
              "code": `-- ① 递归 CTE：生成 1..5 的序列（也是展开树的范式）
WITH RECURSIVE seq AS (
  SELECT 1 AS n
  UNION ALL
  SELECT n + 1 FROM seq WHERE n < 5
)
SELECT n FROM seq;

-- ② 递归展开组织树（经理-下属层级）
CREATE TABLE emp (
  id INT PRIMARY KEY, name VARCHAR(20), mgr_id INT
);
INSERT INTO emp VALUES (1,'老总',NULL),(2,'总监A',1),(3,'总监B',1),(4,'主管X',2);
WITH RECURSIVE org AS (
  SELECT id, name, 0 AS depth FROM emp WHERE mgr_id IS NULL
  UNION ALL
  SELECT e.id, e.name, o.depth + 1
  FROM emp e JOIN org o ON e.mgr_id = o.id
)
SELECT name, depth FROM org ORDER BY depth, id;

-- ③ 用 CTE 先过滤再聚合，避免一个大子查询里塞太多逻辑
WITH recent AS (
  SELECT * FROM emp WHERE id > 0
)
SELECT COUNT(*) FROM recent;` },
            { "type": "code", "lang": "sql", "title": "用 EXPLAIN 找慢查询（可直接运行）",
              "code": `CREATE TABLE users (id INT PRIMARY KEY, email VARCHAR(100), region VARCHAR(10));
CREATE INDEX idx_region ON users(region);

-- 看两句话的执行计划差异：
EXPLAIN SELECT * FROM users WHERE region = '华东';
-- 命中索引：type=ref / range，rows 小

EXPLAIN SELECT * FROM users WHERE email = 'a@b.com';
-- email 无索引：type=ALL 全表扫描 → 慢查询信号
-- 优化：CREATE INDEX idx_email ON users(email);

-- 通用优化清单：
--  1) 只 select 需要的列，别 select *
--  2) WHERE/JOIN/ORDER BY 的列尽量建索引
--  3) 大表分页别用 OFFSET 过大，改用 WHERE id > ? 键集分页
--  4) JOIN 用确定小结果集先过滤` },
            { "type": "info", "title": "CTE 是可读性工具，不是万能加速器", "text": "多数数据库会优化 CTE 到与内联等价（并非必然物化）。它最大的价值是**把一段查询想清楚了再复用**，以及递归展开层级。别指望它一定提速——提速要回到索引与执行计划。" },
            { "type": "keypoints", "items": ["CTE 让复杂查询可读可复用；递归 CTE 展开树/层级", "EXPLAIN 看 type/rows/key：ALL=全表慢查询", "先过滤再 JOIN、用最小结果集打底", "分页大表用键集分页，避免大 OFFSET"] }
          ]
        }
      ]
    },

    /* ================= 数据建模与数据仓库 ================= */
    {
      "id": "de-dwh",
      "name": "数据建模与数据仓库",
      "icon": "仓",
      "tagline": "事实表 + 维度表 + 星型模型，把数据组织成可分析的结构。",
      "intro": "数据仓库不是随便堆张表。它以**维度建模**组织：事实表记录‘发生了什么’，维度表描述‘谁/何时/在哪’。一套规范的星型模型，能让 BI 报表又一目了然又好查询。",
      "meta": { "难度": "进阶", "场景": "数据仓库" },
      "lessons": [
        {
          "id": "de-dwh-1-model",
          "title": "事实表、维度表与星型模型",
          "summary": "数仓建模三件套：事实、维度、星型/雪花。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "数据仓库建模的基石：**事实表**存业务事件（订单、点击、交易），行数巨大、多数列是可加性的数值；**维度表**存描述属性（时间、用户、商品），行数小、用于分组过滤。**星型模型**以一张宽事实表为中心、四周接维度表，查询只需一次 JOIN，是数仓最常见形态。" },
            { "type": "code", "lang": "sql", "title": "星型模型：事实表 + 两张维度表（可直接运行）",
              "code": `-- 维度表：时间、用户（小表，存属性）
CREATE TABLE dim_date (
  date_id DATE PRIMARY KEY, year INT, month INT, day INT, weekday VARCHAR(10)
);
CREATE TABLE dim_user (
  user_id INT PRIMARY KEY, name VARCHAR(20), city VARCHAR(20), tier VARCHAR(10)
);

-- 事实表：订单（大表，存业务事件与可加性数值）
CREATE TABLE fact_order (
  order_id BIGINT PRIMARY KEY,
  date_id DATE REFERENCES dim_date(date_id),
  user_id INT REFERENCES dim_user(user_id),
  amount DECIMAL(12,2),   -- 可加
  qty INT                 -- 可加
);

-- 星型查询：按城市+月份汇总金额（一次 join 到维度即可分组）
INSERT INTO dim_user VALUES (1,'小明','上海','金'),(2,'小红','北京','普');
INSERT INTO dim_date VALUES ('2026-09-01',2026,9,1,'Tue');
INSERT INTO fact_order VALUES (1001,'2026-09-01',1,199.0,2);

SELECT u.city, d.year, d.month, SUM(f.amount) AS total
FROM fact_order f
JOIN dim_user u  ON f.user_id = u.user_id
JOIN dim_date d  ON f.date_id = d.date_id
GROUP BY u.city, d.year, d.month;` },
            { "type": "info", "title": "星型 vs 雪花", "text": "**星型**维度直接平铺、查询最快；**雪花模型**把维度继续拆成层级（如地区→省份→城市独立成表），更规范但要多 JOIN、较慢。实务多数先用星型，除非维度真的太大才往雪花去。" },
            { "type": "keypoints", "items": ["事实表=事件+可加数值；维度表=描述属性", "星型模型：中心事实 + 一圈维表，一次 JOIN", "维度给分组/过滤维度，度量给 SUM/AVG 分析", "雪花比星型更规范但多 JOIN、慢"] }
          ]
        },
        {
          "id": "de-dwh-2-etl",
          "title": "ETL 与数据质量",
          "summary": "抽取-清洗-加载的套路：去重、补缺、类型转换与增量。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "**ETL**（抽取 Extract → 转换 Transform → 加载 Load）把源数据加工成可用数据。核心转换是**清洗**：去重、补缺失、统一类型与口径；再决定**全量**还是**增量**同步。数据质量不过关，分析结论全是错的，所以清洗是数仓第一优先。" },
            { "type": "code", "lang": "sql", "title": "清洗套路：去重 + 默认值 + 类型修正（可直接运行）",
              "code": `CREATE TABLE raw_log (
  id INT, user_id INT, city VARCHAR(20), score VARCHAR(10), ts DATE
);
-- 源数据有脏值：重复 id、空城市、数字被存成字符串
INSERT INTO raw_log VALUES
  (1, 10, '上海',  '88',   '2026-09-01'),
  (1, 10, '上海',  '88',   '2026-09-01'),   -- 重复
  (2, 20, NULL,    '75',   '2026-09-02'),   -- 城市缺失
  (3, 30, '北京',  'abc',  '2026-09-03');   -- 非法数字

-- ① 用窗口函数去重：只留每组第一笔
WITH dedup AS (
  SELECT *, ROW_NUMBER() OVER (PARTITION BY id ORDER BY ts) AS rn
  FROM raw_log
)
-- ② 补缺失、非法值回退，并把字符串转成数值
-- （下面用 PostgreSQL 语法：~ 正则匹配、::int 强转、COALESCE 兜底）
SELECT id,
       COALESCE(city, '未知') AS city,
       COALESCE(CASE WHEN score ~ '^[0-9]+$' THEN score::int END, 0) AS score
FROM (
  SELECT *, ROW_NUMBER() OVER (PARTITION BY id ORDER BY ts) rn
  FROM raw_log
) t WHERE rn = 1;` },
            { "type": "info", "title": "全量 vs 增量 vs CDC", "text": "表小就**全量**重灌简单直接；表大要**增量**（按最大 id / 更新时间戳抽取新增）。更现代的**CDC（变更数据捕获）**监听源库 binlog 的 INSERT/UPDATE/DELETE，实时把变更同步过去——这已接近数据湖与实时管道。" },
            { "type": "keypoints", "items": ["ETL/ELT：抽取→转换→加载，清洗是第一步", "去重用窗口 ROW_NUMBER 每组留一", "缺失用 COALESCE 补默认；非法值回退后转类型", "全量/增量/CDC 按表大小与实时性选"] }
          ]
        }
      ]
    },

    /* ================= 大数据计算框架 ================= */
    {
      "id": "de-bigdata",
      "name": "大数据计算框架",
      "icon": "匹",
      "tagline": "Hadoop/Spark/Flink——单机装不下的数据靠分布式跑。",
      "intro": "当表几十亿行、单台机器内存放不下时，就要把计算**切分到多台机器并行**：Hadoop 用 MapReduce 把任务拆成映射+归约，Spark 用内存中的 RDD/DataFrame 把迭代计算做快，Flink 专注于有状态的流式计算。这一板块讲清分布式计算的核心思想与各自定位。",
      "meta": { "难度": "进阶", "场景": "大数据" },
      "lessons": [
        {
          "id": "de-bigdata-1-mapreduce",
          "title": "MapReduce 思想与 Hadoop 生态",
          "summary": "映射-洗牌-归约：把大任务拆碎并行，再合拢。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "**MapReduce** 是分布式计算的祖师爷套路：**Map** 把每条记录映射成 (key, value) 键值对，**Shuffle** 按 key 把相同的数据归到同一台机器，**Reduce** 在每组上做汇总。哲学是『把移动计算搬到数据身边，而不是把数据搬来搬去』。" },
            { "type": "code", "lang": "python", "title": "用 Python 模拟 MapReduce 的『单词计数』（可直接运行）",
              "code": `def map_phase(docs):
    # Map：每篇文档拆成 (word, 1)，模拟分布式上的每个 mapper
    pairs = []
    for doc_id, text in docs:
        for w in text.lower().split():
            pairs.append((w, 1))
    return pairs

def shuffle_phase(pairs):
    # Shuffle：按 word 归组，把相同 word 的所有 1 聚到一起
    groups = {}
    for w, v in pairs:
        groups.setdefault(w, []).append(v)
    return groups

def reduce_phase(groups):
    # Reduce：每组求和 => 每个单词出现次数
    return {w: sum(vs) for w, vs in groups.items()}

docs = [(1, "Hello World"), (2, "Hello Hadoop"), (3, "World Hello Spark")]
pairs = map_phase(docs)
groups = shuffle_phase(pairs)
result = reduce_phase(groups)
for w in sorted(result):
    print(f"{w}: {result[w]}")` },
            { "type": "info", "title": "Hadoop 三大件", "text": "HDFS（分布式文件系统，存数据，默认 128MB 一块、3 副本）＋ YARN（资源调度，决定任务跑在哪些节点）＋ MapReduce（计算模型）。后续 Spark/Flink 常基于 HDFS 存数据，但用内存/流式算力取代 MapReduce 做计算。" },
            { "type": "keypoints", "items": ["Map 拆 → Shuffle 归并同 key → Reduce 汇总", "把计算搬到数据身边，减少跨机搬运", "HDFS 存(YARN 管资源) + 计算引擎算", "适合离线批量、吞吐大但延迟高"] }
          ]
        },
        {
          "id": "de-bigdata-2-spark",
          "title": "Spark：内存计算与 DataFrame",
          "summary": "RDD/DataFrame/SQL，把迭代计算放进内存跑快。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "**Spark** 的关键是把中间结果**留在内存**而不是反复读磁盘，让迭代计算快出几十上百倍。它提供三等 API：底层 **RDD**（弹性分布式数据集）、结构化 **DataFrame**（带 schema 的表）、以及直接写 **Spark SQL**。惰性求值 + 血缘容错是它的特色。" },
            { "type": "code", "lang": "python", "title": "Spark SQL 风格的 DataFrame 变换（可直接运行）",
              "code": `# 纯 Python 演示 Spark 的『变换链』写法：
# select / filter / groupBy / orderBy 都是惰性的，最后才真正计算
def sdf(data, cols):
    return {"cols": cols, "rows": data}

def select(df, *names):
    idx = [df["cols"].index(n) for n in names]
    return sdf([[r[i] for i in idx] for r in df["rows"]], list(names))

def filter(df, pred):
    return sdf([[r for r in df["rows"] if pred(dict(zip(df["cols"], r)))][0]
                for r in df["rows"]], df["cols"])

def group_sum(df, by, agg):
    out = {}
    for r in df["rows"]:
        d = dict(zip(df["cols"], r))
        out.setdefault(d[by], 0)
        out[d[by]] += d[agg]
    return sdf([[k, v] for k, v in out.items()], [by, "total"])

orders = sdf([
    ["华东", 120], ["华北", 150], ["华东", 180], ["华北", 90],
], ["region", "amount"])

print("销售额按区域汇总（DataFrame 变换结果）:")
res = group_sum(orders, "region", "amount")
for r in res["rows"]:
    print(f"  {r[0]}: {r[1]}")` },
            { "type": "warn", "title": "Spark 真的要在集群跑", "text": "上面是 Spark 思想的纯 Python 等价演示。真正的 Spark 需要 <code.inline>pip install pyspark</code.inline> 并在本地/集群启动 SparkSession，然后 <code.inline>df.filter(...).groupBy(...).agg(...).show()</code.inline>。本站沙箱跑不了完整 Spark，请按注释在本地运行体验。" },
            { "type": "keypoints", "items": ["Spark 把中间结果放内存，迭代计算更快", "RDD 底层 / DataFrame 结构化 / Spark SQL 直接查", "变换惰性求值，行动算子(.show/.collect)才触发", "适合迭代/交互式/图计算，取代多数 MapReduce"] }
          ]
        }
      ]
    },

    /* ================= 实时流处理 ================= */
    {
      "id": "de-stream",
      "name": "实时流处理",
      "icon": "流",
      "tagline": "Kafka + Flink：数据边进边算，秒级出结果。",
      "intro": "批处理是『攒够一批再算』，流处理是『来一条算一条』。**Kafka** 是消息/事件总线，把源源不断的数据切分并落盘提供订阅；**Flink** 在流上做有状态计算（窗口求和、去重、告警）。两者配合构成现代实时数据管道的主力。",
      "meta": { "难度": "进阶", "场景": "实时计算" },
      "lessons": [
        {
          "id": "de-stream-1-kafka",
          "title": "Kafka：事件流与消息队列",
          "summary": "Topic/Partition/Consumer Group——可靠地搬运源源不断的数据。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "**Kafka** 把每条消息写进 **Topic（主题）**，主题拆成 **Partition（分区）** 以便并行扩容与有序；多个 **Consumer** 组成 **Consumer Group** 协同消费——同组内一条消息只被一个消费者处理。它把『某时刻谁消费过』记录下来（offset），断点续读、回放都靠它。" },
            { "type": "code", "title": "Kafka 概念速览（JS 伪代码理解分区与消费组）", "lang": "javascript",
              "code": "// Kafka 三大件：Topic / Partition / ConsumerGroup\nconst topic = { name: \"order-events\", partitions: [\"p0\", \"p1\", \"p2\"] };\n\n// ① 生产者：按 key 哈希决定进哪个分区，同一 key 保证有序\nfunction producerSend(key, msg) {\n  const idx = [...key].reduce((a, c) => a + c.charCodeAt(0), 0) % topic.partitions.length;\n  console.log(`消息[${msg}] → 分区 ${topic.partitions[idx]}`);\n}\n\n// ② 消费者组：同组内各分区被不同消费者分摊，一条只被消费一次\nconst groupOf3 = (partition) => `消费者${partition} 处理 ${partition}`;\ntopic.partitions.forEach((p, i) => console.log(groupOf3(p) + `（${i + 1}/3 分摊）`));\n\nproducerSend(\"user_42\", \"下单\");\nproducerSend(\"user_42\", \"支付\");   // 同一 key 落同一分区 → 有序" },
            { "type": "code", "lang": "python", "title": "消费者组偏移量：模拟断点续读（可直接运行）",
              "code": `class KafkaGroup:
    def __init__(self, offsets, size):
        self.offsets = offsets   # 每个分区的已消费偏移
        self.size = size         # 消费组里的消费者数
    def assign(self, partition): return partition % self.size
    def consume_one(self, partition, data):
        i = self.offsets[partition]
        if i < len(data):
            print(f"消费者{self.assign(partition)} 消费 分区{partition} 第{i}条: {data[i]}")
            self.offsets[partition] += 1   # 提交 offset，断点续读
            return True
        return False

g = KafkaGroup({0: 0, 1: 0}, size=2)
for part in (0, 1):
    g.consume_one(part, ["a", "b", "c"])
    g.consume_one(part, ["a", "b", "c"])
print("已消费偏移:", g.offsets)  # {0:2, 1:2} → 重启用它能继续` },
            { "type": "keypoints", "items": ["Topic 拆 Partition 扩容且分区内有序", "同一 key 哈希到同一分区保证有序", "Consumer Group 内分摊消息、一条只被消费一次", "offset 记录消费进度，支持断点续读与回放"] }
          ]
        },
        {
          "id": "de-stream-2-flink-window",
          "title": "Flink 窗口计算",
          "summary": "滚动/滑动窗口、迟到数据处理，把无限流切成可算的块。",
          "difficulty": "进阶",
          "blocks": [
            { "type": "p", "text": "流是无边界的，怎么『聚合成全量』？**窗口**把它切成有界的块：**滚动窗口**固定大小互不重叠（每 5 分钟统计），**滑动窗口**固定大小带步长（每 2 分钟看最近 5 分钟），**会话窗口**按静默间隔切分。配合**水印/迟到允许**处理乱序数据。" },
            { "type": "code", "lang": "python", "title": "滚动窗口求和 + 处理迟到数据（可直接运行）",
              "code": `import heapq
# 模拟：事件到达（可乱序），按 5 个单位做滚动窗口求和
events = [(1,10),(3,20),(5,30),(6,15),(7,25),(9,40),(11,5)]
# ① 先按时间戳排序（相当于 Flink 的 watermark 等待后排序）
events.sort()

W = 5
buckets = {}
for ts, amt in events:
    key = ts // W * W          # 落在哪个滚动窗口
    buckets.setdefault(key, []).append(amt)

for key in sorted(buckets):
    total = sum(buckets[key])
    print(f"窗口 [{key}, {key + W}) 累计金额 = {total}")
# 迟到的乱序事件：watermark 允许迟到 N 单位后，落进旧窗口的会被丢弃或纠正` },
            { "type": "info", "title": "至少一次 / 恰好一次", "text": "实时系统常讨论语义：**至少一次（at-least-once）** 可能重复、**恰好一次（exactly-once）** 不重不丢（对账靠去重/事务）。Kafka+Flink 联合可实现端到端恰好一次。生产上通常用幂等写入来把『至少一次』变成『正好一次』。" },
            { "type": "keypoints", "items": ["滚动窗口(重叠) / 滑动窗口(带步长) / 会话窗口(按静默)", "watermark + 允许迟到处理乱序", "at-least-once 可重，exactly-once 靠幂等/去重", "流边进边算，秒级出结果，替代批处理对账"] }
          ]
        }
      ]
    }
  ]
};