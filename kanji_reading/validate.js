/* 実行方法: node kanji_reading/validate.js */
const { QUESTIONS } = require('./questions.js');
const categories = new Set(['動物・鳥・魚', '植物・花', '食べ物', '日本の地名', '難読熟語・その他']);
const difficulties = new Set(['中級', '上級', '超難問']);
const ids = new Set(), keys = new Set(), errors = [];
const counts = {};
for (const q of QUESTIONS) {
  if (!Number.isInteger(q.id) || ids.has(q.id)) errors.push(`ID重複・不正: ${q.id}`);
  ids.add(q.id);
  const key = `${q.kanji}|${q.category}`;
  if (keys.has(key)) errors.push(`問題重複: ${key}`);
  keys.add(key);
  if (!q.kanji || !q.reading || !q.explanation) errors.push(`必須項目不足: ${q.id}`);
  if (!categories.has(q.category) || !difficulties.has(q.difficulty)) errors.push(`分類不正: ${q.id}`);
  if (!Array.isArray(q.choices) || q.choices.length !== 4 || new Set(q.choices).size !== 4) errors.push(`選択肢重複・不足: ${q.id}`);
  if (q.choices.filter(choice => choice === q.reading).length !== 1) errors.push(`正解不在・重複: ${q.id}`);
  if (q.category === '日本の地名' && !/(都|道|府|県)/.test(q.explanation)) errors.push(`地名の所在地不足: ${q.id}`);
  if (q.id > 175 && !/^https:\/\/kotobank\.jp\/word\//.test(q.source || '')) errors.push(`追加問題の出典不足: ${q.id}`);
  counts[q.difficulty] ??= {};
  counts[q.difficulty][q.category] = (counts[q.difficulty][q.category] || 0) + 1;
}
console.log(`問題数: ${QUESTIONS.length}`);
console.log(JSON.stringify(counts, null, 2));
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log('構造検証: エラーなし');

