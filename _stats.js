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

function loadConcept(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const idx = src.indexOf('window.');
  if (idx === -1) return null;
  const eqIdx = src.indexOf('=', idx);
  const bodyStart = eqIdx + 1;
  let depth = 0;
  let inString = false;
  let escape = false;
  let strChar = '';
  for (let i = bodyStart; i < src.length; i++) {
    const ch = src[i];
    if (escape) { escape = false; continue; }
    if (ch === '\\') { escape = true; continue; }
    if (inString) {
      if (ch === strChar) inString = false;
      continue;
    }
    if (ch === '"' || ch === "'") {
      inString = true;
      strChar = ch;
      continue;
    }
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) {
        let j = i;
        while (j < src.length && src[j] !== ';') j++;
        const body = src.substring(bodyStart, j).trim();
        try {
          const fn = new Function('return ' + body);
          return fn();
        } catch(e) { return null; }
      }
    }
  }
  return null;
}

function walkCount(obj) {
  if (obj === null || obj === undefined) return 0;
  if (typeof obj === 'string') return obj.length;
  if (typeof obj !== 'object') return 0;
  let n = 0;
  if (Array.isArray(obj)) {
    for (const item of obj) n += walkCount(item);
  } else {
    for (const v of Object.values(obj)) n += walkCount(v);
  }
  return n;
}

function countLessons(data) {
  let count = 0;
  if (!data || typeof data !== 'object') return 0;
  if (data.children) {
    for (const child of data.children) {
      if (child.lessons) count += child.lessons.length;
    }
  }
  if (data.lessons) count += data.lessons.length;
  return count;
}

const files = [
  'languages', 'python-full', 'javascript-full', 'htmlcss-full', 'java-full',
  'c-full', 'cpp-full', 'go-full', 'rust-full', 'sql-full', 'shell-full',
  'csharp-full', 'typescript-full', 'ruby-full', 'php-full',
  'mobile-full', 'node-full', 'dart-full', 'lua-full',
  'rlang-full', 'scala-full', 'julia-full', 'others-full', 'funclangs-full',
  'cs-fundamentals', 'cs-advanced', 'toolchain', 'errors', 'cookbook', 'tools'
];

const conceptFiles = ['cs-fundamentals', 'cs-advanced', 'toolchain', 'errors', 'cookbook', 'tools'];

let grandChars = 0;
let grandLessons = 0;

files.forEach((n) => {
  const p = 'd:/computer-learning/data/' + n + '.js';
  const src = fs.readFileSync(p, 'utf8');
  try { new Function(src); } catch (e) { console.log(n + ': 语法错误 ' + e.message); return; }
  
  let result;
  if (conceptFiles.includes(n)) {
    const data = loadConcept(p);
    if (data) {
      result = { chars: walkCount(data), lessons: countLessons(data) };
    } else {
      result = { chars: roughCount(src), lessons: (src.match(/id:\s*"([a-z]+-\d+)"/g) || []).length };
    }
  } else {
    result = { chars: roughCount(src), lessons: (src.match(/id:\s*"([a-z]+-\d+)"/g) || []).length };
  }
  
  grandChars += result.chars;
  grandLessons += result.lessons;
  console.log('== ' + n + ' == 章节=' + result.lessons + ' 正文字符约 ' + result.chars);
});

console.log('----------------------------------------------');
console.log('总计：章节=' + grandLessons + ' 正文字符约 ' + grandChars);
console.log('目标 500,000 字符，达成率 = ' + Math.round((grandChars / 500000) * 100) + '%');
