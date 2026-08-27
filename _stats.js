const fs = require('fs');

// 统计正文字符数：只匹配 blocks 中的 text/code/items 字段，不 eval 整个对象
function roughCount(src) {
  let n = 0;
  // text/code 等字段：双引号或单引号字符串都统计
  const textRe = /(?:text|title|summary|name|tagline|code|description)\s*:\s*(?:"([^"]*)"|'([^']*)')/g;
  let m;
  while ((m = textRe.exec(src)) !== null) n += (m[1] || m[2] || '').length;
  // items 数组中的字符串
  const itemsRe = /items\s*:\s*\[([\s\S]*?)\]/g;
  while ((m = itemsRe.exec(src)) !== null) {
    const inner = m[1];
    const strRe = /"([^"]*)"/g;
    let s;
    while ((s = strRe.exec(inner)) !== null) n += s[1].length;
  }
  // rows 表格
  const rowsRe = /rows\s*:\s*\[([\s\S]*?)\]\s*\}\]/g;
  while ((m = rowsRe.exec(src)) !== null) {
    const inner = m[1];
    const strRe = /"([^"]*)"/g;
    let s;
    while ((s = strRe.exec(inner)) !== null) n += s[1].length;
  }
  return n;
}

const files = [
  'languages', 'python-full', 'javascript-full', 'htmlcss-full', 'java-full',
  'c-full', 'cpp-full', 'go-full', 'rust-full', 'sql-full', 'shell-full',
  'csharp-full', 'typescript-full', 'ruby-full', 'php-full',
  'mobile-full', 'node-full', 'dart-full', 'lua-full',
  'rlang-full', 'scala-full', 'julia-full', 'others-full', 'funclangs-full',
  'cs-fundamentals', 'cs-advanced', 'toolchain', 'errors', 'cookbook', 'tools'
];

let grandChars = 0;
let grandLessons = 0;

files.forEach((n) => {
  const p = 'd:/computer-learning/data/' + n + '.js';
  const src = fs.readFileSync(p, 'utf8');
  try { new Function(src); } catch (e) { console.log(n + ': 语法错误 ' + e.message); return; }
  const c = roughCount(src);
  const lessons = (src.match(/id:\s*"([a-z]+-\d+)"/g) || []).length;
  grandChars += c;
  grandLessons += lessons;
  console.log('== ' + n + ' == 章节=' + lessons + ' 正文字符约 ' + c);
});

console.log('----------------------------------------------');
console.log('总计：章节=' + grandLessons + ' 正文字符约 ' + grandChars);
console.log('目标 500,000 字符，达成率 = ' + Math.round((grandChars / 500000) * 100) + '%');
