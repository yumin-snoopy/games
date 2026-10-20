// node validate.js
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");
const source = fs.readFileSync(path.join(__dirname, "data.js"), "utf8");
const data = vm.runInNewContext(source + "\nIDIOM_DATA;");
const errors = [];
const words = new Set();
const readings = new Set();
for (const row of data) {
  if ([...row.word].length !== 4) errors.push(`4文字ではない: ${row.word}`);
  if (!/^[\p{Script=Han}々]{4}$/u.test(row.word)) errors.push(`漢字表記を確認: ${row.word}`);
  if (!/^[ぁ-ゖー]+$/.test(row.reading)) errors.push(`読みを確認: ${row.word}`);
  if (row.meaning.length < 10) errors.push(`意味が短い: ${row.word}`);
  if (![1, 2, 3].includes(row.tier)) errors.push(`難易度が不正: ${row.word}`);
  if (words.has(row.word)) errors.push(`熟語が重複: ${row.word}`);
  if (readings.has(row.reading)) errors.push(`読みが重複: ${row.reading}`);
  words.add(row.word);
  readings.add(row.reading);
}
const counts = [1, 2, 3].map(tier => data.filter(row => row.tier === tier).length);
if (data.length * 3 < 300) errors.push("問題数が300未満");
if (counts.some(count => count < 20)) errors.push("難易度別の語数が不足");
for (const row of data) {
  for (const start of [false, true]) {
    const correct = start ? row.word.slice(0, 2) : row.word.slice(2);
    const fixed = start ? row.word.slice(2) : row.word.slice(0, 2);
    const others = [...new Set(data.map(item => start ? item.word.slice(0, 2) : item.word.slice(2)))]
      .filter(part => part !== correct && !words.has(start ? part + fixed : fixed + part));
    if (others.length < 3) errors.push(`穴埋めの誤答候補が不足: ${row.word}（${start ? "前半" : "後半"}）`);
  }
}
console.log(`収録 ${data.length}語 / ${data.length * 3}問 (初級${counts[0]}語・中級${counts[1]}語・上級${counts[2]}語)`);
if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else console.log("構造・重複・選択肢候補の検証に合格");

