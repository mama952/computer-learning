// 用法：node _check.js <data文件路径> [期望章节数]
const fs = require('fs');
const file = process.argv[2];
const expected = parseInt(process.argv[3] || '80', 10);
if (!file) {
  console.log('用法：node _check.js <文件路径> [期望章节数]');
  process.exit(1);
}
const s = fs.readFileSync(file, 'utf8');
try {
  new Function(s);
  console.log('语法 OK');
} catch (e) {
  console.log('语法错误: ' + e.message);
  process.exit(1);
}
const m = s.match(/id:\s*"([a-z]+-\d+)"/g) || [];
const ids = m.map((x) => x.slice(5, -1));
const dup = ids.filter((v, i) => ids.indexOf(v) !== i);
console.log('章节数 = ' + m.length + (expected ? '（期望 ' + expected + '）' : ''));
if (dup.length) console.log('重复 id: ' + dup.join(', '));
const chinese = (s.match(/[\u4e00-\u9fa5]/g) || []).length;
console.log('中文字符数 = ' + chinese);
console.log('文件大小 = ' + s.length + ' 字符');
console.log(m.length >= expected ? '合格 ✓' : '不合格 ✗ 章节不足');
