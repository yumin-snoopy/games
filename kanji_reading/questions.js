/* 漢字の表記と読みのみを収録。意味や辞典本文は転載しません。 */
const QUESTION_DATA = [
  {
    "id": 1,
    "kanji": "海月",
    "reading": "くらげ",
    "category": "動物・鳥・魚",
    "difficulty": "中級"
  },
  {
    "id": 2,
    "kanji": "海星",
    "reading": "ひとで",
    "category": "動物・鳥・魚",
    "difficulty": "中級"
  },
  {
    "id": 3,
    "kanji": "海鼠",
    "reading": "なまこ",
    "category": "動物・鳥・魚",
    "difficulty": "中級"
  },
  {
    "id": 5,
    "kanji": "烏賊",
    "reading": "いか",
    "category": "動物・鳥・魚",
    "difficulty": "中級"
  },
  {
    "id": 8,
    "kanji": "鱧",
    "reading": "はも",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 9,
    "kanji": "鰰",
    "reading": "はたはた",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 11,
    "kanji": "鯔",
    "reading": "ぼら",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 12,
    "kanji": "鮎",
    "reading": "あゆ",
    "category": "動物・鳥・魚",
    "difficulty": "中級"
  },
  {
    "id": 13,
    "kanji": "鮑",
    "reading": "あわび",
    "category": "動物・鳥・魚",
    "difficulty": "中級"
  },
  {
    "id": 14,
    "kanji": "海豹",
    "reading": "あざらし",
    "category": "動物・鳥・魚",
    "difficulty": "中級"
  },
  {
    "id": 15,
    "kanji": "海驢",
    "reading": "あしか",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 18,
    "kanji": "膃肭臍",
    "reading": "おっとせい",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 19,
    "kanji": "朱鷺",
    "reading": "とき",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 22,
    "kanji": "蝙蝠",
    "reading": "こうもり",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 23,
    "kanji": "蟷螂",
    "reading": "かまきり",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 24,
    "kanji": "蜻蛉",
    "reading": "とんぼ",
    "category": "動物・鳥・魚",
    "difficulty": "中級"
  },
  {
    "id": 25,
    "kanji": "蚯蚓",
    "reading": "みみず",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 26,
    "kanji": "蟋蟀",
    "reading": "こおろぎ",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 27,
    "kanji": "啄木鳥",
    "reading": "きつつき",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 29,
    "kanji": "雲雀",
    "reading": "ひばり",
    "category": "動物・鳥・魚",
    "difficulty": "中級"
  },
  {
    "id": 31,
    "kanji": "鶯",
    "reading": "うぐいす",
    "category": "動物・鳥・魚",
    "difficulty": "中級"
  },
  {
    "id": 32,
    "kanji": "鷺",
    "reading": "さぎ",
    "category": "動物・鳥・魚",
    "difficulty": "中級"
  },
  {
    "id": 34,
    "kanji": "紫陽花",
    "reading": "あじさい",
    "category": "植物・花",
    "difficulty": "中級"
  },
  {
    "id": 40,
    "kanji": "木槿",
    "reading": "むくげ",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 41,
    "kanji": "合歓木",
    "reading": "ねむのき",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 44,
    "kanji": "山茶花",
    "reading": "さざんか",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 48,
    "kanji": "勿忘草",
    "reading": "わすれなぐさ",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 52,
    "kanji": "女郎花",
    "reading": "おみなえし",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 58,
    "kanji": "接骨木",
    "reading": "にわとこ",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 59,
    "kanji": "白膠木",
    "reading": "ぬるで",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 60,
    "kanji": "木賊",
    "reading": "とくさ",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 61,
    "kanji": "石楠花",
    "reading": "しゃくなげ",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 65,
    "kanji": "無花果",
    "reading": "いちじく",
    "category": "食べ物",
    "difficulty": "中級"
  },
  {
    "id": 85,
    "kanji": "素麺",
    "reading": "そうめん",
    "category": "食べ物",
    "difficulty": "中級"
  },
  {
    "id": 90,
    "kanji": "海蘊",
    "reading": "もずく",
    "category": "食べ物",
    "difficulty": "上級"
  },
  {
    "id": 91,
    "kanji": "若布",
    "reading": "わかめ",
    "category": "食べ物",
    "difficulty": "中級"
  },
  {
    "id": 92,
    "kanji": "木耳",
    "reading": "きくらげ",
    "category": "食べ物",
    "difficulty": "上級"
  },
  {
    "id": 93,
    "kanji": "鯣",
    "reading": "するめ",
    "category": "食べ物",
    "difficulty": "超難問"
  },
  {
    "id": 94,
    "kanji": "膾",
    "reading": "なます",
    "category": "食べ物",
    "difficulty": "超難問"
  },
  {
    "id": 95,
    "kanji": "粽",
    "reading": "ちまき",
    "category": "食べ物",
    "difficulty": "超難問"
  },
  {
    "id": 144,
    "kanji": "東雲",
    "reading": "しののめ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 147,
    "kanji": "逢魔時",
    "reading": "おうまどき",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 149,
    "kanji": "微睡む",
    "reading": "まどろむ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 63,
    "kanji": "胡桃",
    "reading": "くるみ",
    "category": "食べ物",
    "difficulty": "中級"
  },
  {
    "id": 79,
    "kanji": "牛蒡",
    "reading": "ごぼう",
    "category": "食べ物",
    "difficulty": "中級"
  },
  {
    "id": 315,
    "kanji": "馴鹿",
    "reading": "となかい",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 76,
    "kanji": "玉蜀黍",
    "reading": "とうもろこし",
    "category": "食べ物",
    "difficulty": "上級"
  },
  {
    "id": 50,
    "kanji": "撫子",
    "reading": "なでしこ",
    "category": "植物・花",
    "difficulty": "中級"
  },
  {
    "id": 446,
    "kanji": "外郎",
    "reading": "ういろう",
    "category": "食べ物",
    "difficulty": "上級"
  },
  {
    "id": 136,
    "kanji": "時雨",
    "reading": "しぐれ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 72,
    "kanji": "林檎",
    "reading": "りんご",
    "category": "食べ物",
    "difficulty": "中級"
  },
  {
    "id": 33,
    "kanji": "向日葵",
    "reading": "ひまわり",
    "category": "植物・花",
    "difficulty": "中級"
  },
  {
    "id": 141,
    "kanji": "陽炎",
    "reading": "かげろう",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 142,
    "kanji": "蜃気楼",
    "reading": "しんきろう",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 143,
    "kanji": "朧月",
    "reading": "おぼろづき",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 146,
    "kanji": "黄昏",
    "reading": "たそがれ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 150,
    "kanji": "躊躇",
    "reading": "ちゅうちょ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 152,
    "kanji": "邂逅",
    "reading": "かいこう",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 153,
    "kanji": "憂鬱",
    "reading": "ゆううつ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 156,
    "kanji": "忸怩",
    "reading": "じくじ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 157,
    "kanji": "矜持",
    "reading": "きょうじ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 158,
    "kanji": "斟酌",
    "reading": "しんしゃく",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 159,
    "kanji": "齟齬",
    "reading": "そご",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 160,
    "kanji": "瑕疵",
    "reading": "かし",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 161,
    "kanji": "膠着",
    "reading": "こうちゃく",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 162,
    "kanji": "相槌",
    "reading": "あいづち",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 168,
    "kanji": "静謐",
    "reading": "せいひつ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 169,
    "kanji": "蒼穹",
    "reading": "そうきゅう",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 170,
    "kanji": "彼岸",
    "reading": "ひがん",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 174,
    "kanji": "漸く",
    "reading": "ようやく",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 38,
    "kanji": "薔薇",
    "reading": "ばら",
    "category": "植物・花",
    "difficulty": "中級"
  },
  {
    "id": 67,
    "kanji": "枇杷",
    "reading": "びわ",
    "category": "食べ物",
    "difficulty": "中級"
  },
  {
    "id": 71,
    "kanji": "葡萄",
    "reading": "ぶどう",
    "category": "食べ物",
    "difficulty": "中級"
  }
];

// 同じジャンルの異なる読みを誤答に使います。表示時には別途シャッフルします。
const QUESTIONS = QUESTION_DATA.map((question, index) => {
  const alternatives = [...new Set(QUESTION_DATA.filter(item => item.category === question.category && item.reading !== question.reading).map(item => item.reading))];
  const choices = [question.reading, ...[0, 1, 2].map(offset => alternatives[(index * 7 + offset) % alternatives.length])];
  return { ...question, choices };
});

if (typeof module !== 'undefined') module.exports = { QUESTIONS, QUESTION_DATA };

