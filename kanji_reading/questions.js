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
    "id": 176,
    "kanji": "勇魚",
    "reading": "いさな",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 177,
    "kanji": "岩魚",
    "reading": "いわな",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 178,
    "kanji": "虎魚",
    "reading": "おこぜ",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 179,
    "kanji": "針魚",
    "reading": "さより",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 180,
    "kanji": "秋刀魚",
    "reading": "さんま",
    "category": "動物・鳥・魚",
    "difficulty": "中級"
  },
  {
    "id": 181,
    "kanji": "柳葉魚",
    "reading": "ししゃも",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 182,
    "kanji": "衣魚",
    "reading": "しみ",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 184,
    "kanji": "沙魚",
    "reading": "はぜ",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 185,
    "kanji": "氷魚",
    "reading": "ひお",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 186,
    "kanji": "比目魚",
    "reading": "ひらめ",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 187,
    "kanji": "翻車魚",
    "reading": "まんぼう",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 188,
    "kanji": "赤目魚",
    "reading": "めなだ",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 189,
    "kanji": "公魚",
    "reading": "わかさぎ",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 190,
    "kanji": "松魚",
    "reading": "かつお",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 191,
    "kanji": "善知鳥",
    "reading": "うとう",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 192,
    "kanji": "玄鳥",
    "reading": "つばくらめ",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 193,
    "kanji": "時鳥",
    "reading": "ほととぎす",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 194,
    "kanji": "鶫",
    "reading": "つぐみ",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 195,
    "kanji": "鵺",
    "reading": "ぬえ",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 197,
    "kanji": "車前草",
    "reading": "おおばこ",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 198,
    "kanji": "含羞草",
    "reading": "おじぎそう",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 199,
    "kanji": "酢漿草",
    "reading": "かたばみ",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 200,
    "kanji": "草石蚕",
    "reading": "ちょろぎ",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 201,
    "kanji": "海人草",
    "reading": "まくり",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 202,
    "kanji": "卯木",
    "reading": "うつぎ",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 203,
    "kanji": "木豇豆",
    "reading": "きささげ",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 204,
    "kanji": "木天蓼",
    "reading": "またたび",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 205,
    "kanji": "寄生木",
    "reading": "やどりぎ",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 206,
    "kanji": "胡蝶花",
    "reading": "しゃが",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 207,
    "kanji": "茅花",
    "reading": "つばな",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 208,
    "kanji": "凌霄花",
    "reading": "のうぜんかずら",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 209,
    "kanji": "花梨",
    "reading": "かりん",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 210,
    "kanji": "雪花菜",
    "reading": "おから",
    "category": "食べ物",
    "difficulty": "超難問"
  },
  {
    "id": 211,
    "kanji": "搾菜",
    "reading": "ざーさい",
    "category": "食べ物",
    "difficulty": "超難問"
  },
  {
    "id": 212,
    "kanji": "鹿尾菜",
    "reading": "ひじき",
    "category": "食べ物",
    "difficulty": "超難問"
  },
  {
    "id": 213,
    "kanji": "菠薐草",
    "reading": "ほうれんそう",
    "category": "食べ物",
    "difficulty": "超難問"
  },
  {
    "id": 214,
    "kanji": "九年母",
    "reading": "くねんぼ",
    "category": "食べ物",
    "difficulty": "超難問"
  },
  {
    "id": 216,
    "kanji": "花魁",
    "reading": "おいらん",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 218,
    "kanji": "草臥れる",
    "reading": "くたびれる",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 219,
    "kanji": "草鞋",
    "reading": "わらじ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 220,
    "kanji": "何某",
    "reading": "なにがし",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 221,
    "kanji": "何卒",
    "reading": "なにとぞ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 223,
    "kanji": "落人",
    "reading": "おちゅうど",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 224,
    "kanji": "洒落",
    "reading": "しゃれ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 225,
    "kanji": "虎落",
    "reading": "もがり",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 226,
    "kanji": "九十九折",
    "reading": "つづらおり",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 227,
    "kanji": "九十九髪",
    "reading": "つくもがみ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 228,
    "kanji": "海豚",
    "reading": "いるか",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 229,
    "kanji": "海象",
    "reading": "せいうち",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 230,
    "kanji": "海胆",
    "reading": "うに",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 231,
    "kanji": "海鞘",
    "reading": "ほや",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 232,
    "kanji": "四十雀",
    "reading": "しじゅうから",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 233,
    "kanji": "山雀",
    "reading": "やまがら",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 234,
    "kanji": "葦雀",
    "reading": "よしきり",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 235,
    "kanji": "翡翠",
    "reading": "かわせみ",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 236,
    "kanji": "鰈",
    "reading": "かれい",
    "category": "動物・鳥・魚",
    "difficulty": "中級"
  },
  {
    "id": 237,
    "kanji": "鱸",
    "reading": "すずき",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 238,
    "kanji": "鯒",
    "reading": "こち",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 239,
    "kanji": "鰤",
    "reading": "ぶり",
    "category": "動物・鳥・魚",
    "difficulty": "中級"
  },
  {
    "id": 240,
    "kanji": "鰯",
    "reading": "いわし",
    "category": "動物・鳥・魚",
    "difficulty": "中級"
  },
  {
    "id": 241,
    "kanji": "鯖",
    "reading": "さば",
    "category": "動物・鳥・魚",
    "difficulty": "中級"
  },
  {
    "id": 242,
    "kanji": "鯰",
    "reading": "なまず",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 243,
    "kanji": "鰍",
    "reading": "かじか",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 244,
    "kanji": "鰻",
    "reading": "うなぎ",
    "category": "動物・鳥・魚",
    "difficulty": "中級"
  },
  {
    "id": 245,
    "kanji": "泥鰌",
    "reading": "どじょう",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 246,
    "kanji": "一昨昨日",
    "reading": "さきおととい",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 247,
    "kanji": "明明後日",
    "reading": "しあさって",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 248,
    "kanji": "終日",
    "reading": "ひねもす",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 249,
    "kanji": "三十日",
    "reading": "みそか",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 250,
    "kanji": "晦日",
    "reading": "みそか",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 251,
    "kanji": "神無月",
    "reading": "かんなづき",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 252,
    "kanji": "如月",
    "reading": "きさらぎ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 253,
    "kanji": "月代",
    "reading": "さかやき",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 254,
    "kanji": "文月",
    "reading": "ふづき",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 255,
    "kanji": "水無月",
    "reading": "みなづき",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 256,
    "kanji": "睦月",
    "reading": "むつき",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 257,
    "kanji": "望月",
    "reading": "もちづき",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 258,
    "kanji": "満天星",
    "reading": "どうだん",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 259,
    "kanji": "夕星",
    "reading": "ゆうづつ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 260,
    "kanji": "空蝉",
    "reading": "うつせみ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 261,
    "kanji": "空穂",
    "reading": "うつぼ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 262,
    "kanji": "十六夜",
    "reading": "いざよい",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 263,
    "kanji": "小夜",
    "reading": "さよ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 264,
    "kanji": "朝臣",
    "reading": "あそん",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 265,
    "kanji": "後朝",
    "reading": "きぬぎぬ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 266,
    "kanji": "春宮",
    "reading": "とうぐう",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 267,
    "kanji": "夏越",
    "reading": "なごし",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 268,
    "kanji": "忍冬",
    "reading": "すいかずら",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 269,
    "kanji": "冬瓜",
    "reading": "とうがん",
    "category": "食べ物",
    "difficulty": "中級"
  },
  {
    "id": 270,
    "kanji": "生憎",
    "reading": "あいにく",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 271,
    "kanji": "生姜",
    "reading": "しょうが",
    "category": "食べ物",
    "difficulty": "中級"
  },
  {
    "id": 272,
    "kanji": "生絹",
    "reading": "すずし",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 273,
    "kanji": "生業",
    "reading": "なりわい",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 274,
    "kanji": "埴生",
    "reading": "はにゅう",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 275,
    "kanji": "弥生",
    "reading": "やよい",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 276,
    "kanji": "蓬生",
    "reading": "よもぎう",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 277,
    "kanji": "早生",
    "reading": "わせ",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 278,
    "kanji": "白朮祭",
    "reading": "おけらまつり",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 279,
    "kanji": "白粉",
    "reading": "おしろい",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 280,
    "kanji": "飛白",
    "reading": "かすり",
    "category": "食べ物",
    "difficulty": "中級"
  },
  {
    "id": 281,
    "kanji": "白湯",
    "reading": "さゆ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 282,
    "kanji": "白鑞",
    "reading": "しろめ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 283,
    "kanji": "科白",
    "reading": "せりふ",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 284,
    "kanji": "黒衣",
    "reading": "くろご",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 285,
    "kanji": "黒子",
    "reading": "ほくろ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 286,
    "kanji": "赤熊",
    "reading": "しゃぐま",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 287,
    "kanji": "青柳",
    "reading": "あおやぎ",
    "category": "食べ物",
    "difficulty": "上級"
  },
  {
    "id": 288,
    "kanji": "刺青",
    "reading": "いれずみ",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 289,
    "kanji": "万年青",
    "reading": "おもと",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 290,
    "kanji": "金雀児",
    "reading": "えにしだ",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 291,
    "kanji": "金糸雀",
    "reading": "かなりあ",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 292,
    "kanji": "金海鼠",
    "reading": "きんこ",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 293,
    "kanji": "金団",
    "reading": "きんとん",
    "category": "食べ物",
    "difficulty": "中級"
  },
  {
    "id": 294,
    "kanji": "鍍金",
    "reading": "めっき",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 295,
    "kanji": "小豆",
    "reading": "あずき",
    "category": "食べ物",
    "difficulty": "中級"
  },
  {
    "id": 296,
    "kanji": "豇豆",
    "reading": "ささげ",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 297,
    "kanji": "大角豆",
    "reading": "ささげ",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 298,
    "kanji": "羊栖菜",
    "reading": "ひじき",
    "category": "食べ物",
    "difficulty": "超難問"
  },
  {
    "id": 63,
    "kanji": "胡桃",
    "reading": "くるみ",
    "category": "食べ物",
    "difficulty": "中級"
  },
  {
    "id": 299,
    "kanji": "桃花鳥",
    "reading": "とき",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 300,
    "kanji": "梅桃",
    "reading": "ゆすらうめ",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 301,
    "kanji": "塩梅",
    "reading": "あんばい",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 302,
    "kanji": "楊梅",
    "reading": "やまもも",
    "category": "食べ物",
    "difficulty": "上級"
  },
  {
    "id": 303,
    "kanji": "虫唾",
    "reading": "むしず",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 304,
    "kanji": "蝶番",
    "reading": "ちょうつがい",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 305,
    "kanji": "黄牛",
    "reading": "あめうし",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 306,
    "kanji": "牛膝",
    "reading": "いのこずち",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 307,
    "kanji": "蝸牛",
    "reading": "かたつむり",
    "category": "動物・鳥・魚",
    "difficulty": "中級"
  },
  {
    "id": 308,
    "kanji": "天牛",
    "reading": "かみきりむし",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 309,
    "kanji": "牛車",
    "reading": "ぎっしゃ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 310,
    "kanji": "牛王",
    "reading": "ごおう",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 311,
    "kanji": "牛頭馬頭",
    "reading": "ごずめず",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 79,
    "kanji": "牛蒡",
    "reading": "ごぼう",
    "category": "食べ物",
    "difficulty": "中級"
  },
  {
    "id": 312,
    "kanji": "猫糞",
    "reading": "ねこばば",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 313,
    "kanji": "斑猫",
    "reading": "はんみょう",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 314,
    "kanji": "氈鹿",
    "reading": "かもしか",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 315,
    "kanji": "馴鹿",
    "reading": "となかい",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 316,
    "kanji": "肉叢",
    "reading": "ししむら",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 317,
    "kanji": "肉豆蔲",
    "reading": "にくずく",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 318,
    "kanji": "肉刺",
    "reading": "まめ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 319,
    "kanji": "茴香",
    "reading": "ういきょう",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 320,
    "kanji": "香具師",
    "reading": "やし",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 321,
    "kanji": "吾木香",
    "reading": "われもこう",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 322,
    "kanji": "烏竜茶",
    "reading": "うーろんちゃ",
    "category": "食べ物",
    "difficulty": "上級"
  },
  {
    "id": 323,
    "kanji": "葡萄茶",
    "reading": "えびちゃ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 324,
    "kanji": "山茶",
    "reading": "つばき",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 325,
    "kanji": "御披露目",
    "reading": "おひろめ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 326,
    "kanji": "粗目",
    "reading": "ざらめ",
    "category": "食べ物",
    "difficulty": "上級"
  },
  {
    "id": 327,
    "kanji": "目映",
    "reading": "まばゆい",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 328,
    "kanji": "目論見",
    "reading": "もくろみ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 329,
    "kanji": "手弱女",
    "reading": "たおやめ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 330,
    "kanji": "手斧",
    "reading": "ちょうな",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 331,
    "kanji": "足掻",
    "reading": "あがき",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 332,
    "kanji": "跑足",
    "reading": "だくあし",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 333,
    "kanji": "足袋",
    "reading": "たび",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 334,
    "kanji": "裸足",
    "reading": "はだし",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 335,
    "kanji": "百足",
    "reading": "むかで",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 336,
    "kanji": "挿頭",
    "reading": "かざし",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 337,
    "kanji": "塔頭",
    "reading": "たっちゅう",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 338,
    "kanji": "頭垢",
    "reading": "ふけ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 339,
    "kanji": "灯心",
    "reading": "とうしみ",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 340,
    "kanji": "稈心",
    "reading": "みご",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 341,
    "kanji": "鳶尾",
    "reading": "いちはつ",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 342,
    "kanji": "石蓴",
    "reading": "あおさ",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 343,
    "kanji": "石首魚",
    "reading": "いしもち",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 344,
    "kanji": "石榴",
    "reading": "ざくろ",
    "category": "食べ物",
    "difficulty": "上級"
  },
  {
    "id": 345,
    "kanji": "流石",
    "reading": "さすが",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 346,
    "kanji": "石蕗",
    "reading": "つわぶき",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 347,
    "kanji": "薬玉",
    "reading": "くすだま",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 348,
    "kanji": "玉章",
    "reading": "たまずさ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 76,
    "kanji": "玉蜀黍",
    "reading": "とうもろこし",
    "category": "食べ物",
    "difficulty": "上級"
  },
  {
    "id": 349,
    "kanji": "勾玉",
    "reading": "まがたま",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 350,
    "kanji": "田鶴",
    "reading": "たず",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 351,
    "kanji": "田螺",
    "reading": "たにし",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 352,
    "kanji": "田圃",
    "reading": "たんぼ",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 353,
    "kanji": "煙草",
    "reading": "たばこ",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 354,
    "kanji": "燕子花",
    "reading": "かきつばた",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 355,
    "kanji": "唐棣花",
    "reading": "はねず",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 356,
    "kanji": "竹箆",
    "reading": "しっぺい",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 357,
    "kanji": "竹刀",
    "reading": "しない",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 358,
    "kanji": "竹光",
    "reading": "たけみつ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 359,
    "kanji": "淡竹",
    "reading": "はちく",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 360,
    "kanji": "船首",
    "reading": "みよし",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 361,
    "kanji": "山車",
    "reading": "だし",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 362,
    "kanji": "車楽",
    "reading": "だんじり",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 363,
    "kanji": "家鴨",
    "reading": "あひる",
    "category": "動物・鳥・魚",
    "difficulty": "中級"
  },
  {
    "id": 364,
    "kanji": "蔵人",
    "reading": "くろうど",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 365,
    "kanji": "防人",
    "reading": "さきもり",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 366,
    "kanji": "素人",
    "reading": "しろうと",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 367,
    "kanji": "舎人",
    "reading": "とねり",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 368,
    "kanji": "為人",
    "reading": "ひととなり",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 369,
    "kanji": "若人",
    "reading": "わこうど",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 370,
    "kanji": "海女",
    "reading": "あま",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 371,
    "kanji": "郎女",
    "reading": "いらつめ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 372,
    "kanji": "采女",
    "reading": "うねめ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 373,
    "kanji": "女将",
    "reading": "おかみ",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 374,
    "kanji": "女形",
    "reading": "おやま",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 375,
    "kanji": "瞽女",
    "reading": "ごぜ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 376,
    "kanji": "女衒",
    "reading": "ぜげん",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 377,
    "kanji": "巫女",
    "reading": "みこ",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 378,
    "kanji": "湯女",
    "reading": "ゆな",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 379,
    "kanji": "男郎花",
    "reading": "おとこえし",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 380,
    "kanji": "益荒男",
    "reading": "ますらお",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 381,
    "kanji": "浮子",
    "reading": "うき",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 382,
    "kanji": "浮塵子",
    "reading": "うんか",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 383,
    "kanji": "案山子",
    "reading": "かかし",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 384,
    "kanji": "帷子",
    "reading": "かたびら",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 385,
    "kanji": "硝子",
    "reading": "がらす",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 386,
    "kanji": "鱲子",
    "reading": "からすみ",
    "category": "食べ物",
    "difficulty": "超難問"
  },
  {
    "id": 387,
    "kanji": "梔子",
    "reading": "くちなし",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 388,
    "kanji": "胡頽子",
    "reading": "ぐみ",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 389,
    "kanji": "小女子",
    "reading": "こうなご",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 390,
    "kanji": "賽子",
    "reading": "さいころ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 391,
    "kanji": "頼母子",
    "reading": "たのもし",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 392,
    "kanji": "束子",
    "reading": "たわし",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 393,
    "kanji": "梃子",
    "reading": "てこ",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 50,
    "kanji": "撫子",
    "reading": "なでしこ",
    "category": "植物・花",
    "difficulty": "中級"
  },
  {
    "id": 394,
    "kanji": "螺子",
    "reading": "ねじ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 395,
    "kanji": "梯子",
    "reading": "はしご",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 396,
    "kanji": "囃子",
    "reading": "はやし",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 397,
    "kanji": "檳榔子",
    "reading": "びんろうじ",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 398,
    "kanji": "五倍子",
    "reading": "ふし",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 399,
    "kanji": "子規",
    "reading": "ほととぎす",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 400,
    "kanji": "零余子",
    "reading": "むかご",
    "category": "食べ物",
    "difficulty": "上級"
  },
  {
    "id": 401,
    "kanji": "無患子",
    "reading": "むくろじ",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 402,
    "kanji": "郁子",
    "reading": "むべ",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 403,
    "kanji": "柚餅子",
    "reading": "ゆべし",
    "category": "食べ物",
    "difficulty": "上級"
  },
  {
    "id": 404,
    "kanji": "雲母",
    "reading": "きらら",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 405,
    "kanji": "母衣",
    "reading": "ほろ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 406,
    "kanji": "大凡",
    "reading": "おおよそ",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 407,
    "kanji": "大鋸屑",
    "reading": "おがくず",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 408,
    "kanji": "大蛇",
    "reading": "おろち",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 409,
    "kanji": "大刀",
    "reading": "たち",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 410,
    "kanji": "大蒜",
    "reading": "にんにく",
    "category": "食べ物",
    "difficulty": "上級"
  },
  {
    "id": 411,
    "kanji": "高粱",
    "reading": "こーりゃん",
    "category": "食べ物",
    "difficulty": "超難問"
  },
  {
    "id": 412,
    "kanji": "高嶺",
    "reading": "たかね",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 413,
    "kanji": "長押",
    "reading": "なげし",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 414,
    "kanji": "長閑",
    "reading": "のどか",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 415,
    "kanji": "東風",
    "reading": "こち",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 416,
    "kanji": "疾風",
    "reading": "はやて",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 417,
    "kanji": "風信子",
    "reading": "ひやしんす",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 418,
    "kanji": "雲丹",
    "reading": "うに",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 419,
    "kanji": "雲脂",
    "reading": "ふけ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 420,
    "kanji": "水雲",
    "reading": "もずく",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 421,
    "kanji": "雲呑",
    "reading": "わんたん",
    "category": "食べ物",
    "difficulty": "上級"
  },
  {
    "id": 422,
    "kanji": "海参",
    "reading": "いりこ",
    "category": "食べ物",
    "difficulty": "超難問"
  },
  {
    "id": 423,
    "kanji": "海髪",
    "reading": "おごのり",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 424,
    "kanji": "海鼠腸",
    "reading": "このわた",
    "category": "食べ物",
    "difficulty": "超難問"
  },
  {
    "id": 425,
    "kanji": "海松",
    "reading": "みる",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 426,
    "kanji": "海神",
    "reading": "わたつみ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 427,
    "kanji": "弖爾乎波",
    "reading": "てにをは",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 428,
    "kanji": "波止場",
    "reading": "はとば",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 429,
    "kanji": "鶴嘴",
    "reading": "つるはし",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 430,
    "kanji": "真鶴",
    "reading": "まなづる",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 431,
    "kanji": "黄鶏",
    "reading": "かしわ",
    "category": "食べ物",
    "difficulty": "超難問"
  },
  {
    "id": 432,
    "kanji": "水鶏",
    "reading": "くいな",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 433,
    "kanji": "軍鶏",
    "reading": "しゃも",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 434,
    "kanji": "矮鶏",
    "reading": "ちゃぼ",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 435,
    "kanji": "鶏冠",
    "reading": "とさか",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 436,
    "kanji": "上枝",
    "reading": "ほつえ",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 437,
    "kanji": "下司",
    "reading": "げす",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 438,
    "kanji": "下枝",
    "reading": "しずえ",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 439,
    "kanji": "左見右見",
    "reading": "とみこうみ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 440,
    "kanji": "中務",
    "reading": "なかつかさ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 441,
    "kanji": "就中",
    "reading": "なかんずく",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 442,
    "kanji": "前栽",
    "reading": "せんざい",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 443,
    "kanji": "後込",
    "reading": "しりごみ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 444,
    "kanji": "南瓜",
    "reading": "かぼちゃ",
    "category": "食べ物",
    "difficulty": "中級"
  },
  {
    "id": 445,
    "kanji": "北叟笑",
    "reading": "ほくそえむ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 446,
    "kanji": "外郎",
    "reading": "ういろう",
    "category": "食べ物",
    "difficulty": "上級"
  },
  {
    "id": 447,
    "kanji": "外様",
    "reading": "とざま",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 448,
    "kanji": "幸先",
    "reading": "さいさき",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 449,
    "kanji": "先蹤",
    "reading": "せんしょう",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 450,
    "kanji": "舳先",
    "reading": "へさき",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 451,
    "kanji": "早稲",
    "reading": "わせ",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 452,
    "kanji": "去年",
    "reading": "こぞ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 453,
    "kanji": "一年",
    "reading": "ひととせ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 136,
    "kanji": "時雨",
    "reading": "しぐれ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 454,
    "kanji": "時化",
    "reading": "しけ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 455,
    "kanji": "天晴",
    "reading": "あっぱれ",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 456,
    "kanji": "天蚕糸",
    "reading": "てぐす",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 457,
    "kanji": "天麩羅",
    "reading": "てんぷら",
    "category": "食べ物",
    "difficulty": "上級"
  },
  {
    "id": 458,
    "kanji": "天鵞絨",
    "reading": "びろーど",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 459,
    "kanji": "驀地",
    "reading": "まっしぐら",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 460,
    "kanji": "旅籠",
    "reading": "はたご",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 461,
    "kanji": "道産子",
    "reading": "どさんこ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 462,
    "kanji": "野老",
    "reading": "ところ",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 463,
    "kanji": "野点",
    "reading": "のだて",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 464,
    "kanji": "野良",
    "reading": "のら",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 72,
    "kanji": "林檎",
    "reading": "りんご",
    "category": "食べ物",
    "difficulty": "中級"
  },
  {
    "id": 465,
    "kanji": "蟀谷",
    "reading": "こめかみ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 466,
    "kanji": "荒磯",
    "reading": "ありそ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 467,
    "kanji": "磯馴松",
    "reading": "そなれまつ",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 468,
    "kanji": "泥障",
    "reading": "あおり",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 469,
    "kanji": "泥濘",
    "reading": "ぬかるみ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 470,
    "kanji": "砂子",
    "reading": "いさご",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 471,
    "kanji": "狭霧",
    "reading": "さぎり",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 472,
    "kanji": "百日紅",
    "reading": "さるすべり",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 473,
    "kanji": "紅型",
    "reading": "びんがた",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 474,
    "kanji": "紅絹",
    "reading": "もみ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 475,
    "kanji": "紅裏",
    "reading": "もみうら",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 476,
    "kanji": "紫雲英",
    "reading": "げんげ",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 477,
    "kanji": "鉄床",
    "reading": "かなとこ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 478,
    "kanji": "鉄刀木",
    "reading": "たがやさん",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 479,
    "kanji": "銅鈸",
    "reading": "どうばち",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 480,
    "kanji": "銅鑼",
    "reading": "どら",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 481,
    "kanji": "糸遊",
    "reading": "いとゆう",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 482,
    "kanji": "絓糸",
    "reading": "しけいと",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 483,
    "kanji": "糸瓜",
    "reading": "へちま",
    "category": "食べ物",
    "difficulty": "上級"
  },
  {
    "id": 484,
    "kanji": "荒布",
    "reading": "あらめ",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 485,
    "kanji": "御布令",
    "reading": "おふれ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 486,
    "kanji": "搗布",
    "reading": "かじめ",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 487,
    "kanji": "胞衣",
    "reading": "えな",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 488,
    "kanji": "被衣",
    "reading": "かずき",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 489,
    "kanji": "紙衣",
    "reading": "かみこ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 490,
    "kanji": "直衣",
    "reading": "のうし",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 491,
    "kanji": "紙縒",
    "reading": "こより",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 492,
    "kanji": "紙魚",
    "reading": "しみ",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 493,
    "kanji": "文色",
    "reading": "あいろ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 494,
    "kanji": "文目",
    "reading": "あやめ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 495,
    "kanji": "倭文",
    "reading": "しず",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 496,
    "kanji": "文机",
    "reading": "ふづくえ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 497,
    "kanji": "言伝",
    "reading": "ことづて",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 498,
    "kanji": "私語",
    "reading": "ささめごと",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 499,
    "kanji": "琴柱",
    "reading": "ことじ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 500,
    "kanji": "和琴",
    "reading": "わごん",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 501,
    "kanji": "熊襲",
    "reading": "くまそ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 502,
    "kanji": "虎杖",
    "reading": "いたどり",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 503,
    "kanji": "猟虎",
    "reading": "らっこ",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 504,
    "kanji": "狐狗狸",
    "reading": "こっくり",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 505,
    "kanji": "狐臭",
    "reading": "わきが",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 506,
    "kanji": "蟒蛇",
    "reading": "うわばみ",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 507,
    "kanji": "赤楝蛇",
    "reading": "やまかがし",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 508,
    "kanji": "雀斑",
    "reading": "そばかす",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 509,
    "kanji": "麻雀",
    "reading": "まーじゃん",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 510,
    "kanji": "沙蚕",
    "reading": "ごかい",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 511,
    "kanji": "蚕豆",
    "reading": "そらまめ",
    "category": "食べ物",
    "difficulty": "上級"
  },
  {
    "id": 512,
    "kanji": "天蚕",
    "reading": "やままゆ",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 513,
    "kanji": "嫩葉",
    "reading": "わかば",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 514,
    "kanji": "病葉",
    "reading": "わくらば",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 515,
    "kanji": "芋茎",
    "reading": "ずいき",
    "category": "食べ物",
    "difficulty": "上級"
  },
  {
    "id": 516,
    "kanji": "根扱",
    "reading": "ねこぎ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 517,
    "kanji": "根刮",
    "reading": "ねこそぎ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 518,
    "kanji": "棠梨",
    "reading": "ずみ",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 519,
    "kanji": "団栗",
    "reading": "どんぐり",
    "category": "食べ物",
    "difficulty": "上級"
  },
  {
    "id": 520,
    "kanji": "栗鼠",
    "reading": "りす",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 521,
    "kanji": "辛夷",
    "reading": "こぶし",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 522,
    "kanji": "唐辛子",
    "reading": "とうがらし",
    "category": "食べ物",
    "difficulty": "中級"
  },
  {
    "id": 523,
    "kanji": "甜瓜",
    "reading": "まくわうり",
    "category": "食べ物",
    "difficulty": "超難問"
  },
  {
    "id": 524,
    "kanji": "瞿麦",
    "reading": "なでしこ",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 525,
    "kanji": "麦稈",
    "reading": "むぎわら",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 526,
    "kanji": "苦塩",
    "reading": "にがり",
    "category": "食べ物",
    "difficulty": "上級"
  },
  {
    "id": 527,
    "kanji": "味酒",
    "reading": "うまさけ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 528,
    "kanji": "味噌",
    "reading": "みそ",
    "category": "食べ物",
    "difficulty": "中級"
  },
  {
    "id": 529,
    "kanji": "味醂",
    "reading": "みりん",
    "category": "食べ物",
    "difficulty": "上級"
  },
  {
    "id": 530,
    "kanji": "湯麺",
    "reading": "たんめん",
    "category": "食べ物",
    "difficulty": "上級"
  },
  {
    "id": 531,
    "kanji": "麺麭",
    "reading": "ぱん",
    "category": "食べ物",
    "difficulty": "超難問"
  },
  {
    "id": 532,
    "kanji": "拉麺",
    "reading": "らーめん",
    "category": "食べ物",
    "difficulty": "中級"
  },
  {
    "id": 533,
    "kanji": "椀飯",
    "reading": "おうばん",
    "category": "食べ物",
    "difficulty": "超難問"
  },
  {
    "id": 534,
    "kanji": "続飯",
    "reading": "そくい",
    "category": "食べ物",
    "difficulty": "超難問"
  },
  {
    "id": 535,
    "kanji": "飯匙倩",
    "reading": "はぶ",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 536,
    "kanji": "都都一",
    "reading": "どどいつ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 537,
    "kanji": "一入",
    "reading": "ひとしお",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 538,
    "kanji": "二合半",
    "reading": "こなから",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 539,
    "kanji": "十重二十重",
    "reading": "とえはたえ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 540,
    "kanji": "三鞭酒",
    "reading": "しゃんぱん",
    "category": "食べ物",
    "difficulty": "超難問"
  },
  {
    "id": 541,
    "kanji": "三和土",
    "reading": "たたき",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 542,
    "kanji": "三椏",
    "reading": "みつまた",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 543,
    "kanji": "四阿",
    "reading": "あずまや",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 544,
    "kanji": "五加",
    "reading": "うこぎ",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 545,
    "kanji": "五月蠅",
    "reading": "うるさい",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 546,
    "kanji": "七五三縄",
    "reading": "しめなわ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 547,
    "kanji": "双六",
    "reading": "すごろく",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 548,
    "kanji": "八幡船",
    "reading": "ばはんせん",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 549,
    "kanji": "八百長",
    "reading": "やおちょう",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 550,
    "kanji": "八尺瓊",
    "reading": "やさかに",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 551,
    "kanji": "八洲",
    "reading": "やしま",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 552,
    "kanji": "八咫",
    "reading": "やた",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 553,
    "kanji": "八岐大蛇",
    "reading": "やまたのおろち",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 554,
    "kanji": "十姉妹",
    "reading": "じゅうしまつ",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 555,
    "kanji": "十露盤",
    "reading": "そろばん",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 556,
    "kanji": "百舌",
    "reading": "もず",
    "category": "動物・鳥・魚",
    "difficulty": "上級"
  },
  {
    "id": 557,
    "kanji": "八百万",
    "reading": "やおよろず",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 558,
    "kanji": "反古",
    "reading": "ほご",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 559,
    "kanji": "網代",
    "reading": "あじろ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 560,
    "kanji": "神楽",
    "reading": "かぐら",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 561,
    "kanji": "随神",
    "reading": "かんながら",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 562,
    "kanji": "神籬",
    "reading": "ひもろぎ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 563,
    "kanji": "仏掌薯",
    "reading": "つくねいも",
    "category": "食べ物",
    "difficulty": "超難問"
  },
  {
    "id": 564,
    "kanji": "寿詞",
    "reading": "よごと",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 565,
    "kanji": "影向",
    "reading": "ようごう",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 566,
    "kanji": "為体",
    "reading": "ていたらく",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 567,
    "kanji": "薬缶",
    "reading": "やかん",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 568,
    "kanji": "薬研",
    "reading": "やげん",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 569,
    "kanji": "秦皮",
    "reading": "とねりこ",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 570,
    "kanji": "皮蛋",
    "reading": "ぴーたん",
    "category": "食べ物",
    "difficulty": "上級"
  },
  {
    "id": 571,
    "kanji": "檜皮",
    "reading": "ひわだ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 572,
    "kanji": "髫髪",
    "reading": "うない",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 573,
    "kanji": "角髪",
    "reading": "みずら",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 574,
    "kanji": "仙人掌",
    "reading": "さぼてん",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 575,
    "kanji": "胸繋",
    "reading": "むながい",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 576,
    "kanji": "産霊",
    "reading": "むすび",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 577,
    "kanji": "稲荷",
    "reading": "いなり",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 578,
    "kanji": "稲熱病",
    "reading": "いもちびょう",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 579,
    "kanji": "粳稲",
    "reading": "うるしね",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 580,
    "kanji": "陸稲",
    "reading": "おかぼ",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 581,
    "kanji": "税稲",
    "reading": "ちからしね",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 582,
    "kanji": "稲架",
    "reading": "はさ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 583,
    "kanji": "揚繰網",
    "reading": "あぐりあみ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 584,
    "kanji": "刃毀",
    "reading": "はこぼれ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 585,
    "kanji": "剃刀",
    "reading": "かみそり",
    "category": "難読熟語・その他",
    "difficulty": "中級"
  },
  {
    "id": 586,
    "kanji": "太刀",
    "reading": "たち",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 587,
    "kanji": "刀自",
    "reading": "とじ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 588,
    "kanji": "薙刀",
    "reading": "なぎなた",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 589,
    "kanji": "刀豆",
    "reading": "なたまめ",
    "category": "食べ物",
    "difficulty": "超難問"
  },
  {
    "id": 590,
    "kanji": "佩刀",
    "reading": "はかし",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 591,
    "kanji": "剣呑",
    "reading": "けんのん",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 592,
    "kanji": "弓場",
    "reading": "ゆば",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 593,
    "kanji": "弓勢",
    "reading": "ゆんぜい",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 594,
    "kanji": "猟矢",
    "reading": "さつや",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 595,
    "kanji": "征矢",
    "reading": "そや",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 596,
    "kanji": "甲矢",
    "reading": "はや",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 597,
    "kanji": "比丘",
    "reading": "びく",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 598,
    "kanji": "公孫樹",
    "reading": "いちょう",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 599,
    "kanji": "樸樹",
    "reading": "むくのき",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 600,
    "kanji": "枝垂",
    "reading": "しだれ",
    "category": "植物・花",
    "difficulty": "上級"
  },
  {
    "id": 601,
    "kanji": "麻幹",
    "reading": "おがら",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 602,
    "kanji": "椿象",
    "reading": "かめむし",
    "category": "動物・鳥・魚",
    "difficulty": "超難問"
  },
  {
    "id": 603,
    "kanji": "香椿",
    "reading": "ちゃんちん",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 33,
    "kanji": "向日葵",
    "reading": "ひまわり",
    "category": "植物・花",
    "difficulty": "中級"
  },
  {
    "id": 604,
    "kanji": "蒲葵",
    "reading": "びろう",
    "category": "植物・花",
    "difficulty": "超難問"
  },
  {
    "id": 605,
    "kanji": "山葵",
    "reading": "わさび",
    "category": "食べ物",
    "difficulty": "中級"
  },
  {
    "id": 606,
    "kanji": "投網",
    "reading": "とあみ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 607,
    "kanji": "旋網",
    "reading": "まきあみ",
    "category": "難読熟語・その他",
    "difficulty": "超難問"
  },
  {
    "id": 608,
    "kanji": "釣瓶",
    "reading": "つるべ",
    "category": "難読熟語・その他",
    "difficulty": "上級"
  },
  {
    "id": 609,
    "kanji": "合羽",
    "reading": "かっぱ",
    "category": "難読熟語・その他",
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

