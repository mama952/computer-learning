/* ============================================================
   计算机知识库 · 在线编辑器内置模板
   每个语言提供 简单(level != 'complex') 与 进阶(level === 'complex')
   模板，供「环境切换 / 模板下拉」直接选用、复制。
   schema: { langId: [ {name, level, code}, ... ] }
   ============================================================ */
window.EDITOR_TEMPLATES = {

  /* ---------------- Python（WASM 在线运行） ---------------- */
  python: [
    {
      name: "你好世界 + 变量",
      level: "简单",
      code: `# 第一个程序
print("你好，世界！")

# 变量不声明类型，直接赋值
name = "小明"
age = 20
height = 1.75
print(f"我叫{name}，今年{age}岁，身高{height}米")`,
    },
    {
      name: "简单计算器",
      level: "简单",
      code: `a = 10
b = 3
print("加：", a + b)
print("减：", a - b)
print("乘：", a * b)
print("除：", a / b)
print("整除：", a // b)
print("取余：", a % b)`,
    },
    {
      name: "猜数字 · 二分查找算法",
      level: "进阶",
      code: `# 在线环境无法做交互键盘输入，这里演示猜数字游戏的
# 核心算法——二分查找：让程序自动在 1~100 里猜出秘密数
import random

secret = random.randint(1, 100)
low, high = 1, 100
tries = 0

while low <= high:
    mid = (low + high) // 2     # 每次都猜区间正中间
    tries += 1
    print(f"第 {tries} 次：猜 {mid}")
    if mid == secret:
        print(f"猜中！秘密数字是 {mid}，共用了 {tries} 次。")
        break
    elif mid < secret:
        low = mid + 1           # 猜小了 → 缩小到右半边
    else:
        high = mid - 1          # 猜大了 → 缩小到左半边`,
    },
    {
      name: "学生成绩统计",
      level: "进阶",
      code: `scores = {"小明": 88, "小红": 95, "小刚": 76, "小丽": 92}

total = 0
high = []
for name, score in scores.items():
    total += score
    if score >= 90:
        high.append(name)

avg = total / len(scores)
print("平均分：", round(avg, 1))
print("90 分以上的同学：", ", ".join(high))`,
    },
    {
      name: "NumPy 科学计算（自动装依赖）",
      level: "进阶",
      code: `# 在线环境会自动加载 numpy，无需本地安装！
import numpy as np

arr = np.array([1, 2, 3, 4, 5])
print("数组：", arr)
print("总和：", arr.sum())
print("均值：", arr.mean())
print("标准差：", round(float(arr.std()), 2))

matrix = np.arange(1, 10).reshape(3, 3)
print("3x3 矩阵：")
print(matrix)
print("矩阵对角线之和：", np.trace(matrix))`,
    },
    {
      name: "Pandas 数据分析（自动装依赖）",
      level: "进阶",
      code: `# 在线环境会自动加载 pandas，无需本地安装！
import pandas as pd

data = {
    "姓名": ["小明", "小红", "小刚"],
    "成绩": [88, 95, 72],
    "城市": ["北京", "上海", "广州"],
}
df = pd.DataFrame(data)
print(df.to_string(index=False))

print("\\n平均成绩：", df["成绩"].mean())
print("最高分：", df["成绩"].max())
print("\\n成绩 >= 85 的同学：")
print(df[df["成绩"] >= 85]["姓名"].to_string(index=False))`,
    },
  ],

  /* ---------------- JavaScript（浏览器在线运行） ---------------- */
  javascript: [
    {
      name: "你好世界",
      level: "简单",
      code: `// 第一个程序
console.log("你好，世界！");

let name = "小明";
const age = 20;
console.log("我叫" + name + "，今年" + age + "岁");`,
    },
    {
      name: "计算函数",
      level: "简单",
      code: `function add(a, b) { return a + b; }
function mul(a, b) { return a * b; }

console.log("3 + 5 =", add(3, 5));
console.log("4 * 7 =", mul(4, 7));

const nums = [1, 2, 3, 4, 5];
console.log("平方列表：", nums.map((n) => n * n));`,
    },
    {
      name: "FizzBuzz",
      level: "进阶",
      code: `// 经典面试题：1~20，3的倍数打印Fizz，5的倍数打印Buzz，两者皆是打印FizzBuzz
for (let i = 1; i <= 20; i++) {
  let out = "";
  if (i % 3 === 0) out += "Fizz";
  if (i % 5 === 0) out += "Buzz";
  console.log(i, out || i);
}`,
    },
    {
      name: "数组统计（map/filter/reduce）",
      level: "进阶",
      code: `const grades = [88, 95, 76, 92, 67, 81];

const pass = grades.filter((g) => g >= 60);
const total = grades.reduce((sum, g) => sum + g, 0);
const avg = total / grades.length;
const max = Math.max(...grades);
const bonus = grades.map((g) => Math.min(100, g + 5));

console.log("及格人数：", pass.length);
console.log("平均分：", avg.toFixed(1));
console.log("最高分：", max);
console.log("每人加 5 分后：", bonus);`,
    },
    {
      name: "lodash 工具库（CDN 引入）",
      level: "进阶",
      code: `// cdn: lodash
// 在线环境会自动从 CDN 引入 lodash，无需本地 npm！
const _ = window._;

const nums = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("去重：", _.uniq(nums));
console.log("升序：", _.sortBy(nums));
console.log("最大值：", _.max(nums));
console.log("求和：", _.sum(nums));
console.log("奇偶分组：", _.groupBy(nums, (n) => (n % 2 === 0 ? "偶数" : "奇数")));`,
    },
  ],

  /* ---------------- TypeScript（浏览器在线运行） ---------------- */
  typescript: [
    {
      name: "带类型的变量与函数",
      level: "简单",
      code: `let name: string = "小明";
let age: number = 20;
function greet(who: string, times: number): void {
  for (let i = 0; i < times; i++) {
    console.log("你好，" + who);
  }
}
greet(name, age);`,
    },
    {
      name: "接口 + 数组处理",
      level: "进阶",
      code: `interface Student {
  name: string;
  score: number;
}

const students: Student[] = [
  { name: "小明", score: 88 },
  { name: "小红", score: 95 },
  { name: "小刚", score: 72 },
];

const top = students.filter((s) => s.score >= 80);
top.forEach((s) => console.log(s.name + "：" + s.score + " 分"));`,
    },
  ],

  /* ---------------- HTML/CSS（浏览器渲染预览） ---------------- */
  htmlcss: [
    {
      name: "带样式的欢迎页",
      level: "简单",
      code: `<h1 style="color:#4f46e5;font-family:sans-serif">你好，计算机知识库！</h1>
<p style="font-size:18px;color:#374151">这是运行在浏览器里的 HTML 页面。</p>
<button style="padding:10px 18px;background:#4f46e5;color:#fff;border:none;border-radius:8px;cursor:pointer">点我</button>`,
    },
    {
      name: "卡片式个人主页",
      level: "进阶",
      code: `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:sans-serif;background:#f1f5f9;display:flex;justify-content:center;align-items:center;min-height:100vh}
.card{background:#fff;border-radius:16px;box-shadow:0 8px 24px rgba(0,0,0,.08);padding:24px;max-width:320px;text-align:center}
.avatar{width:88px;height:88px;border-radius:50%;background:linear-gradient(135deg,#4f46e5,#0ea5e9);color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:34px;margin-bottom:12px}
h2{color:#1f2937;margin-bottom:4px}
p{color:#6b7280;margin-bottom:16px}
.tag{background:#e0e7ff;color:#4338ca;padding:4px 10px;border-radius:999px;font-size:13px;margin:4px;display:inline-block}
</style></head><body>
<div class="card">
  <div class="avatar">明</div>
  <h2>小明</h2>
  <p>Python / JavaScript 全栈学习者</p>
  <span class="tag">Python</span>
  <span class="tag">JavaScript</span>
  <span class="tag">SQL</span>
</div>
</body></html>`,
    },
  ],

  /* ---------------- SQL（WASM 在线运行） ---------------- */
  sql: [
    {
      name: "建表 + 增删查",
      level: "简单",
      code: `CREATE TABLE student (id INTEGER, name TEXT, score INTEGER);
INSERT INTO student VALUES (1, '小明', 88);
INSERT INTO student VALUES (2, '小红', 95);
INSERT INTO student VALUES (3, '小刚', 76);

SELECT * FROM student;`,
    },
    {
      name: "条件查询 + 排序",
      level: "进阶",
      code: `CREATE TABLE student (id INTEGER, name TEXT, score INTEGER, city TEXT);
INSERT INTO student VALUES (1, '小明', 88, '北京');
INSERT INTO student VALUES (2, '小红', 95, '上海');
INSERT INTO student VALUES (3, '小刚', 72, '广州');
INSERT INTO student VALUES (4, '小丽', 92, '北京');

-- 成绩 >= 85 的学生，按分数降序
SELECT name, score FROM student
WHERE score >= 85
ORDER BY score DESC;

-- 各城市平均成绩
SELECT city, AVG(score) AS avg_score
FROM student
GROUP BY city;`,
    },
  ],

  /* ---------------- Java（需本地编译器） ---------------- */
  java: [
    {
      name: "Hello World",
      level: "简单",
      code: `public class Main {
    public static void main(String[] args) {
        System.out.println("你好，世界！");
    }
}`,
    },
    {
      name: "学生类 + 数组",
      level: "进阶",
      code: `class Student {
    String name;
    int score;
    Student(String name, int score) {
        this.name = name;
        this.score = score;
    }
    int percent() { return score * 10 / 15; } // 15分制转10分制
}

public class Main {
    public static void main(String[] args) {
        Student[] arr = {
            new Student("小明", 88),
            new Student("小红", 95)
        };
        for (Student s : arr) {
            System.out.println(s.name + "：" + s.percent());
        }
    }
}`,
    },
  ],

  /* ---------------- C（需本地编译器） ---------------- */
  c: [
    {
      name: "Hello World",
      level: "简单",
      code: `#include <stdio.h>

int main(void) {
    printf("你好，世界！\\n");
    return 0;
}`,
    },
    {
      name: "函数 + 数组求和",
      level: "进阶",
      code: `#include <stdio.h>

int sum(int arr[], int n) {
    int total = 0;
    for (int i = 0; i < n; i++) total += arr[i];
    return total;
}

int main(void) {
    int nums[] = {1, 2, 3, 4, 5};
    printf("总和：%d\\n", sum(nums, 5));
    return 0;
}`,
    },
  ],

  /* ---------------- C++（需本地编译器） ---------------- */
  cpp: [
    {
      name: "Hello World",
      level: "简单",
      code: `#include <iostream>

int main() {
    std::cout << "你好，世界！" << std::endl;
    return 0;
}`,
    },
    {
      name: "vector + 遍历",
      level: "进阶",
      code: `#include <iostream>
#include <vector>

int main() {
    std::vector<int> nums = {10, 20, 30, 40};
    int total = 0;
    for (int n : nums) total += n;
    std::cout << "总和：" << total << std::endl;
    return 0;
}`,
    },
  ],

  /* ---------------- Go（需本地编译器） ---------------- */
  go: [
    {
      name: "Hello World",
      level: "简单",
      code: `package main

import "fmt"

func main() {
    fmt.Println("你好，世界！")
}`,
    },
    {
      name: "结构体 + 切片",
      level: "进阶",
      code: `package main

import "fmt"

type Student struct {
    Name  string
    Score int
}

func main() {
    students := []Student{{"小明", 88}, {"小红", 95}}
    total := 0
    for _, s := range students {
        total += s.Score
        fmt.Printf("%s：%d 分\\n", s.Name, s.Score)
    }
    fmt.Println("平均：", total/len(students))
}`,
    },
  ],

  /* ---------------- Rust（需本地编译器） ---------------- */
  rust: [
    {
      name: "Hello World",
      level: "简单",
      code: `fn main() {
    println!("你好，世界！");
}`,
    },
    {
      name: "所有权 + 函数",
      level: "进阶",
      code: `fn describe(s: &str) -> String {
    format!("长度是 {}", s.len())
}

fn main() {
    let name = String::from("你好");
    println!("{}", describe(&name));
}`,
    },
  ],

  /* ---------------- Shell（需本地编译器） ---------------- */
  shell: [
    {
      name: "变量 + echo",
      level: "简单",
      code: `#!/bin/bash
name="小明"
echo "你好，$name！"`,
    },
    {
      name: "循环 + 判断",
      level: "进阶",
      code: `#!/bin/bash
for i in 1 2 3 4 5; do
  if [ $((i % 2)) -eq 0 ]; then
    echo "$i 是偶数"
  else
    echo "$i 是奇数"
  fi
done`,
    },
  ],

};