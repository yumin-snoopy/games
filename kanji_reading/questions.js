/* 表記と読みを辞典で確認した問題です。漢検の級はゲーム内の難度目安で、公式の出題級を示しません。 */
const QUESTION_DATA = [
  {
    "id": 1,
    "kanji": "海月",
    "reading": "くらげ",
    "category": "動物・鳥・魚",
    "difficulty": "中級",
    "explanation": "海に漂う刺胞動物。クラゲの漢字表記です。",
    "source": "https://kotobank.jp/word/%E6%B5%B7-441456"
  },
  {
    "id": 2,
    "kanji": "海星",
    "reading": "ひとで",
    "category": "動物・鳥・魚",
    "difficulty": "中級",
    "explanation": "星の形に見える海の動物です。",
    "source": "https://kotobank.jp/word/%E6%B5%B7-441456"
  },
  {
    "id": 3,
    "kanji": "海鼠",
    "reading": "なまこ",
    "category": "動物・鳥・魚",
    "difficulty": "中級",
    "explanation": "海底にすむ細長い棘皮動物です。",
    "source": "https://kotobank.jp/word/%E6%B5%B7-441456"
  },
  {
    "id": 5,
    "kanji": "烏賊",
    "reading": "いか",
    "category": "動物・鳥・魚",
    "difficulty": "中級",
    "explanation": "十本の腕を持つ軟体動物です。",
    "source": "https://kotobank.jp/word/%E3%81%84%E3%81%8B-1267418"
  },
  {
    "id": 8,
    "kanji": "鱧",
    "reading": "はも",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "関西の料理にも使われる細長い魚です。",
    "source": "https://kotobank.jp/word/%E9%B1%A7-604479"
  },
  {
    "id": 9,
    "kanji": "鰰",
    "reading": "はたはた",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "秋田県などで親しまれる魚です。",
    "source": "https://kotobank.jp/word/%E9%B0%B0-1772782"
  },
  {
    "id": 11,
    "kanji": "鯔",
    "reading": "ぼら",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "河口にも入る魚です。",
    "source": "https://kotobank.jp/word/%E9%AF%94-435058"
  },
  {
    "id": 12,
    "kanji": "鮎",
    "reading": "あゆ",
    "category": "動物・鳥・魚",
    "difficulty": "中級",
    "explanation": "清流にすむ香魚とも呼ばれる魚です。",
    "source": "https://kotobank.jp/word/%E9%AE%8E-427693"
  },
  {
    "id": 13,
    "kanji": "鮑",
    "reading": "あわび",
    "category": "動物・鳥・魚",
    "difficulty": "中級",
    "explanation": "岩場にすむ巻き貝の仲間です。",
    "source": "https://kotobank.jp/word/%E9%AE%91-428983"
  },
  {
    "id": 14,
    "kanji": "海豹",
    "reading": "あざらし",
    "category": "動物・鳥・魚",
    "difficulty": "中級",
    "explanation": "海で暮らす鰭脚類です。",
    "source": "https://kotobank.jp/word/%E6%B5%B7-441456"
  },
  {
    "id": 15,
    "kanji": "海驢",
    "reading": "あしか",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "海にすむ鰭脚類の一種です。",
    "source": "https://kotobank.jp/word/%E6%B5%B7-441456"
  },
  {
    "id": 18,
    "kanji": "膃肭臍",
    "reading": "おっとせい",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "アシカ科の海生哺乳類です。薬材名に由来する表記です。",
    "source": "https://kotobank.jp/word/%E8%86%83%E8%82%AD%E8%87%8D-3227481"
  },
  {
    "id": 19,
    "kanji": "朱鷺",
    "reading": "とき",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "赤い顔と長いくちばしを持つ鳥です。",
    "source": "https://kotobank.jp/word/%E9%B7%BA-509284"
  },
  {
    "id": 22,
    "kanji": "蝙蝠",
    "reading": "こうもり",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "飛ぶことのできる哺乳類です。",
    "source": "https://kotobank.jp/word/%E8%9D%99%E8%9D%A0-468842"
  },
  {
    "id": 23,
    "kanji": "蟷螂",
    "reading": "かまきり",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "鎌のような前脚を持つ昆虫です。",
    "source": "https://kotobank.jp/word/%E9%8E%8C%E5%88%87%E3%82%8A-2024006"
  },
  {
    "id": 24,
    "kanji": "蜻蛉",
    "reading": "とんぼ",
    "category": "動物・鳥・魚",
    "difficulty": "中級",
    "explanation": "大きな複眼を持つ昆虫です。",
    "source": "https://kotobank.jp/word/%E8%9C%BB%E8%9B%89-546707"
  },
  {
    "id": 25,
    "kanji": "蚯蚓",
    "reading": "みみず",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "土の中で暮らす環形動物です。",
    "source": "https://kotobank.jp/word/%E8%9A%AF%E8%9A%93-476598"
  },
  {
    "id": 26,
    "kanji": "蟋蟀",
    "reading": "こおろぎ",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "秋に鳴く昆虫です。",
    "source": "https://kotobank.jp/word/%E8%9F%8B%E8%9F%80-498539"
  },
  {
    "id": 27,
    "kanji": "啄木鳥",
    "reading": "きつつき",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "木の幹をつつく鳥の総称です。",
    "source": "https://kotobank.jp/word/%E9%B3%A5-106314"
  },
  {
    "id": 29,
    "kanji": "雲雀",
    "reading": "ひばり",
    "category": "動物・鳥・魚",
    "difficulty": "中級",
    "explanation": "空高くさえずる鳥です。",
    "source": "https://kotobank.jp/word/%E9%9B%B2-56087"
  },
  {
    "id": 31,
    "kanji": "鶯",
    "reading": "うぐいす",
    "category": "動物・鳥・魚",
    "difficulty": "中級",
    "explanation": "春を告げる鳴き声で知られる鳥です。",
    "source": "https://kotobank.jp/word/%E9%B6%AF-439263"
  },
  {
    "id": 32,
    "kanji": "鷺",
    "reading": "さぎ",
    "category": "動物・鳥・魚",
    "difficulty": "中級",
    "explanation": "長い首と脚を持つ水鳥です。",
    "source": "https://kotobank.jp/word/%E9%B7%BA-509284"
  },
  {
    "id": 34,
    "kanji": "紫陽花",
    "reading": "あじさい",
    "category": "植物・花",
    "difficulty": "中級",
    "explanation": "梅雨時に咲く花木です。",
    "source": "https://kotobank.jp/word/%E8%8A%B1-115580"
  },
  {
    "id": 40,
    "kanji": "木槿",
    "reading": "むくげ",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "夏から秋に花を咲かせるアオイ科の木です。",
    "source": "https://kotobank.jp/word/%E6%9C%A8-471822"
  },
  {
    "id": 41,
    "kanji": "合歓木",
    "reading": "ねむのき",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "夜に葉を閉じる木です。",
    "source": "https://kotobank.jp/word/%E6%9C%A8-471822"
  },
  {
    "id": 44,
    "kanji": "山茶花",
    "reading": "さざんか",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "晩秋から冬に花を咲かせるツバキ科の木です。",
    "source": "https://kotobank.jp/word/%E8%8A%B1-115580"
  },
  {
    "id": 48,
    "kanji": "勿忘草",
    "reading": "わすれなぐさ",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "小さな青い花を咲かせる草です。",
    "source": "https://kotobank.jp/word/%E8%8D%89-482981"
  },
  {
    "id": 52,
    "kanji": "女郎花",
    "reading": "おみなえし",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "秋の七草の一つで、黄色い小花をつけます。",
    "source": "https://kotobank.jp/word/%E8%8A%B1-115580"
  },
  {
    "id": 58,
    "kanji": "接骨木",
    "reading": "にわとこ",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "小さな白い花をつける落葉低木です。",
    "source": "https://kotobank.jp/word/%E6%9C%A8-471822"
  },
  {
    "id": 59,
    "kanji": "白膠木",
    "reading": "ぬるで",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "ウルシ科の落葉樹です。",
    "source": "https://kotobank.jp/word/%E6%9C%A8-471822"
  },
  {
    "id": 60,
    "kanji": "木賊",
    "reading": "とくさ",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "細い茎が直立するシダ植物です。",
    "source": "https://kotobank.jp/word/%E6%9C%A8-471822"
  },
  {
    "id": 61,
    "kanji": "石楠花",
    "reading": "しゃくなげ",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "春から初夏に大きな花房をつける木です。",
    "source": "https://kotobank.jp/word/%E8%8A%B1-115580"
  },
  {
    "id": 65,
    "kanji": "無花果",
    "reading": "いちじく",
    "category": "食べ物",
    "difficulty": "中級",
    "explanation": "内側に小さな花をつける果物です。",
    "source": "https://kotobank.jp/word/%E7%84%A1%E8%8A%B1%E6%9E%9C-433353"
  },
  {
    "id": 85,
    "kanji": "素麺",
    "reading": "そうめん",
    "category": "食べ物",
    "difficulty": "中級",
    "explanation": "細い小麦麺です。",
    "source": "https://kotobank.jp/word/%E7%B4%A0%E9%BA%BA-553264"
  },
  {
    "id": 90,
    "kanji": "海蘊",
    "reading": "もずく",
    "category": "食べ物",
    "difficulty": "上級",
    "explanation": "褐藻の一種で、酢の物などにします。",
    "source": "https://kotobank.jp/word/%E6%B5%B7-441456"
  },
  {
    "id": 91,
    "kanji": "若布",
    "reading": "わかめ",
    "category": "食べ物",
    "difficulty": "中級",
    "explanation": "味噌汁などに使う海藻です。",
    "source": "https://kotobank.jp/word/%E3%82%8F%E3%81%8B%E3%82%81-3176750"
  },
  {
    "id": 92,
    "kanji": "木耳",
    "reading": "きくらげ",
    "category": "食べ物",
    "difficulty": "上級",
    "explanation": "耳のような形の食用きのこです。",
    "source": "https://kotobank.jp/word/%E6%9C%A8-471822"
  },
  {
    "id": 93,
    "kanji": "鯣",
    "reading": "するめ",
    "category": "食べ物",
    "difficulty": "超難問",
    "explanation": "イカの内臓を取り除いて干した食品です。",
    "source": "https://kotobank.jp/word/%E9%AF%A3-544091"
  },
  {
    "id": 94,
    "kanji": "膾",
    "reading": "なます",
    "category": "食べ物",
    "difficulty": "超難問",
    "explanation": "魚介や野菜を刻み、酢で和えた料理です。",
    "source": "https://kotobank.jp/word/%E8%86%BE-589613"
  },
  {
    "id": 95,
    "kanji": "粽",
    "reading": "ちまき",
    "category": "食べ物",
    "difficulty": "超難問",
    "explanation": "葉で包んだもち米などを蒸した食品です。",
    "source": "https://kotobank.jp/word/%E3%81%A1%E3%81%BE%E3%81%8D-96555"
  },
  {
    "id": 144,
    "kanji": "東雲",
    "reading": "しののめ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "明け方の東の空です。",
    "source": "https://kotobank.jp/word/%E9%9B%B2-56087"
  },
  {
    "id": 147,
    "kanji": "逢魔時",
    "reading": "おうまどき",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "夕方の薄暗い時間帯を表す言葉です。「大禍時（おおまがとき）」とも関係する表記です。",
    "source": "https://kotobank.jp/word/%E9%80%A2%E3%81%86%E9%AD%94%E6%99%82-449311"
  },
  {
    "id": 149,
    "kanji": "微睡む",
    "reading": "まどろむ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "うとうとと浅く眠ることです。",
    "source": "https://kotobank.jp/word/%E7%9D%A1-539454"
  },
  {
    "id": 176,
    "kanji": "勇魚",
    "reading": "いさな",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "クジラを表す古い呼び名です。",
    "source": "https://kotobank.jp/word/%E9%AD%9A-430759"
  },
  {
    "id": 177,
    "kanji": "岩魚",
    "reading": "いわな",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "渓流にすむ魚です。",
    "source": "https://kotobank.jp/word/%E9%AD%9A-430759"
  },
  {
    "id": 178,
    "kanji": "虎魚",
    "reading": "おこぜ",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "毒のあるとげを持つ海の魚です。",
    "source": "https://kotobank.jp/word/%E9%AD%9A-430759"
  },
  {
    "id": 179,
    "kanji": "針魚",
    "reading": "さより",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "細長い体とくちばしを持つ魚です。",
    "source": "https://kotobank.jp/word/%E9%AD%9A-430759"
  },
  {
    "id": 180,
    "kanji": "秋刀魚",
    "reading": "さんま",
    "category": "動物・鳥・魚",
    "difficulty": "中級",
    "explanation": "秋に旬を迎える細長い魚です。",
    "source": "https://kotobank.jp/word/%E9%AD%9A-430759"
  },
  {
    "id": 181,
    "kanji": "柳葉魚",
    "reading": "ししゃも",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "細長い体の魚で、北海道の特産として知られます。",
    "source": "https://kotobank.jp/word/%E9%AD%9A-430759"
  },
  {
    "id": 182,
    "kanji": "衣魚",
    "reading": "しみ",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "紙や本の近くでも見られる小さな昆虫です。「魚」の字を使いますが魚ではありません。",
    "source": "https://kotobank.jp/word/%E9%AD%9A-430759"
  },
  {
    "id": 184,
    "kanji": "沙魚",
    "reading": "はぜ",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "河口や浅い海にもすむ魚です。",
    "source": "https://kotobank.jp/word/%E9%AD%9A-430759"
  },
  {
    "id": 185,
    "kanji": "氷魚",
    "reading": "ひお",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "アユの稚魚を指す言葉です。",
    "source": "https://kotobank.jp/word/%E9%AD%9A-430759"
  },
  {
    "id": 186,
    "kanji": "比目魚",
    "reading": "ひらめ",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "平たい体で海底にすむ魚です。",
    "source": "https://kotobank.jp/word/%E9%AD%9A-430759"
  },
  {
    "id": 187,
    "kanji": "翻車魚",
    "reading": "まんぼう",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "丸みのある大きな体の海の魚です。",
    "source": "https://kotobank.jp/word/%E9%AD%9A-430759"
  },
  {
    "id": 188,
    "kanji": "赤目魚",
    "reading": "めなだ",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "ボラに似た魚を指す名です。",
    "source": "https://kotobank.jp/word/%E9%AD%9A-430759"
  },
  {
    "id": 189,
    "kanji": "公魚",
    "reading": "わかさぎ",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "湖などで釣られる小型の魚です。",
    "source": "https://kotobank.jp/word/%E9%AD%9A-430759"
  },
  {
    "id": 190,
    "kanji": "松魚",
    "reading": "かつお",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "カツオの漢字表記の一つです。",
    "source": "https://kotobank.jp/word/%E9%AD%9A-430759"
  },
  {
    "id": 191,
    "kanji": "善知鳥",
    "reading": "うとう",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "海辺で繁殖する鳥です。",
    "source": "https://kotobank.jp/word/%E9%B3%A5-106314"
  },
  {
    "id": 192,
    "kanji": "玄鳥",
    "reading": "つばくらめ",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "ツバメを指す古い呼び名です。",
    "source": "https://kotobank.jp/word/%E9%B3%A5-106314"
  },
  {
    "id": 193,
    "kanji": "時鳥",
    "reading": "ほととぎす",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "特徴的な鳴き声で知られる夏鳥です。",
    "source": "https://kotobank.jp/word/%E9%B3%A5-106314"
  },
  {
    "id": 194,
    "kanji": "鶫",
    "reading": "つぐみ",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "冬に日本へ渡ってくる鳥です。",
    "source": "https://kotobank.jp/word/%E9%B6%AB-571390"
  },
  {
    "id": 195,
    "kanji": "鵺",
    "reading": "ぬえ",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "古くはトラツグミを指す鳥の名です。伝説の怪物の名にもなりました。",
    "source": "https://kotobank.jp/word/%E9%B5%BA-593963"
  },
  {
    "id": 197,
    "kanji": "車前草",
    "reading": "おおばこ",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "道端にも生える草で、穂に小さな花をつけます。",
    "source": "https://kotobank.jp/word/%E8%8D%89-482981"
  },
  {
    "id": 198,
    "kanji": "含羞草",
    "reading": "おじぎそう",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "触れると葉を閉じる草です。",
    "source": "https://kotobank.jp/word/%E8%8D%89-482981"
  },
  {
    "id": 199,
    "kanji": "酢漿草",
    "reading": "かたばみ",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "ハート形の小葉が三枚つく草です。",
    "source": "https://kotobank.jp/word/%E8%8D%89-482981"
  },
  {
    "id": 200,
    "kanji": "草石蚕",
    "reading": "ちょろぎ",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "巻貝のような形の地下茎を食べる草です。",
    "source": "https://kotobank.jp/word/%E8%8D%89-482981"
  },
  {
    "id": 201,
    "kanji": "海人草",
    "reading": "まくり",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "海藻の一種を指す表記です。",
    "source": "https://kotobank.jp/word/%E8%8D%89-482981"
  },
  {
    "id": 202,
    "kanji": "卯木",
    "reading": "うつぎ",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "初夏に白い花をつける木です。",
    "source": "https://kotobank.jp/word/%E6%9C%A8-471822"
  },
  {
    "id": 203,
    "kanji": "木豇豆",
    "reading": "きささげ",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "細長い実をつける落葉樹です。",
    "source": "https://kotobank.jp/word/%E6%9C%A8-471822"
  },
  {
    "id": 204,
    "kanji": "木天蓼",
    "reading": "またたび",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "ネコが反応することで知られるつる植物です。",
    "source": "https://kotobank.jp/word/%E6%9C%A8-471822"
  },
  {
    "id": 205,
    "kanji": "寄生木",
    "reading": "やどりぎ",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "ほかの木の枝に付いて育つ植物です。",
    "source": "https://kotobank.jp/word/%E6%9C%A8-471822"
  },
  {
    "id": 206,
    "kanji": "胡蝶花",
    "reading": "しゃが",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "アヤメ科の花を指す表記です。",
    "source": "https://kotobank.jp/word/%E8%8A%B1-115580"
  },
  {
    "id": 207,
    "kanji": "茅花",
    "reading": "つばな",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "チガヤの若い花穂を指す名です。",
    "source": "https://kotobank.jp/word/%E8%8A%B1-115580"
  },
  {
    "id": 208,
    "kanji": "凌霄花",
    "reading": "のうぜんかずら",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "夏に橙色の花を咲かせるつる植物です。",
    "source": "https://kotobank.jp/word/%E8%8A%B1-115580"
  },
  {
    "id": 209,
    "kanji": "花梨",
    "reading": "かりん",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "香りの強い黄色い実をつける木です。",
    "source": "https://kotobank.jp/word/%E8%8A%B1-115580"
  },
  {
    "id": 210,
    "kanji": "雪花菜",
    "reading": "おから",
    "category": "食べ物",
    "difficulty": "超難問",
    "explanation": "豆腐を作るときに出る大豆のしぼりかすです。",
    "source": "https://kotobank.jp/word/%E8%8F%9C-507089"
  },
  {
    "id": 211,
    "kanji": "搾菜",
    "reading": "ざーさい",
    "category": "食べ物",
    "difficulty": "超難問",
    "explanation": "中国料理でも使われる、野菜の漬物です。",
    "source": "https://kotobank.jp/word/%E8%8F%9C-507089"
  },
  {
    "id": 212,
    "kanji": "鹿尾菜",
    "reading": "ひじき",
    "category": "食べ物",
    "difficulty": "超難問",
    "explanation": "煮物などに使う海藻です。「羊栖菜」とも書きます。",
    "source": "https://kotobank.jp/word/%E8%8F%9C-507089"
  },
  {
    "id": 213,
    "kanji": "菠薐草",
    "reading": "ほうれんそう",
    "category": "食べ物",
    "difficulty": "超難問",
    "explanation": "葉を食べる緑黄色野菜です。",
    "source": "https://kotobank.jp/word/%E8%8D%89-482981"
  },
  {
    "id": 214,
    "kanji": "九年母",
    "reading": "くねんぼ",
    "category": "食べ物",
    "difficulty": "超難問",
    "explanation": "香りのある柑橘類です。",
    "source": "https://kotobank.jp/word/%E4%B9%9D-476520"
  },
  {
    "id": 216,
    "kanji": "花魁",
    "reading": "おいらん",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "江戸時代の位の高い遊女を指す言葉です。",
    "source": "https://kotobank.jp/word/%E8%8A%B1-115580"
  },
  {
    "id": 218,
    "kanji": "草臥れる",
    "reading": "くたびれる",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "疲れて力が抜けることです。辞書の難読欄では「草臥」として掲載されています。",
    "source": "https://kotobank.jp/word/%E8%8D%89-482981"
  },
  {
    "id": 219,
    "kanji": "草鞋",
    "reading": "わらじ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "わらを編んで作った履物です。",
    "source": "https://kotobank.jp/word/%E8%8D%89-482981"
  },
  {
    "id": 220,
    "kanji": "何某",
    "reading": "なにがし",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "名前をはっきり示さずに言うときの語です。",
    "source": "https://kotobank.jp/word/%E4%BD%95-432418"
  },
  {
    "id": 221,
    "kanji": "何卒",
    "reading": "なにとぞ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "強く願ったり頼んだりするときの言葉です。",
    "source": "https://kotobank.jp/word/%E4%BD%95-432418"
  },
  {
    "id": 223,
    "kanji": "落人",
    "reading": "おちゅうど",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "戦いに敗れて逃れた人です。",
    "source": "https://kotobank.jp/word/%E8%90%BD-655830"
  },
  {
    "id": 224,
    "kanji": "洒落",
    "reading": "しゃれ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "しゃれた言葉や気の利いた装いのことです。",
    "source": "https://kotobank.jp/word/%E8%90%BD-655830"
  },
  {
    "id": 225,
    "kanji": "虎落",
    "reading": "もがり",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "竹などを組んで作る垣や柵です。",
    "source": "https://kotobank.jp/word/%E8%90%BD-655830"
  },
  {
    "id": 226,
    "kanji": "九十九折",
    "reading": "つづらおり",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "道が何度も曲がりくねって続くことです。",
    "source": "https://kotobank.jp/word/%E4%B9%9D-476520"
  },
  {
    "id": 227,
    "kanji": "九十九髪",
    "reading": "つくもがみ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "老女の白髪を指す古い言葉です。",
    "source": "https://kotobank.jp/word/%E4%B9%9D-476520"
  },
  {
    "id": 228,
    "kanji": "海豚",
    "reading": "いるか",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "海にすむ哺乳類で、群れで泳ぎます。",
    "source": "https://kotobank.jp/word/%E6%B5%B7-441456"
  },
  {
    "id": 229,
    "kanji": "海象",
    "reading": "せいうち",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "大きな牙を持つ海の哺乳類です。",
    "source": "https://kotobank.jp/word/%E6%B5%B7-441456"
  },
  {
    "id": 230,
    "kanji": "海胆",
    "reading": "うに",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "海底にすむ、とげを持つ動物です。",
    "source": "https://kotobank.jp/word/%E6%B5%B7-441456"
  },
  {
    "id": 231,
    "kanji": "海鞘",
    "reading": "ほや",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "海にすむ、袋のような体の動物です。",
    "source": "https://kotobank.jp/word/%E6%B5%B7-441456"
  },
  {
    "id": 232,
    "kanji": "四十雀",
    "reading": "しじゅうから",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "黒い頭と胸の線が目立つ小鳥です。",
    "source": "https://kotobank.jp/word/%E9%9B%80-524782"
  },
  {
    "id": 233,
    "kanji": "山雀",
    "reading": "やまがら",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "山林などで見られる小鳥です。",
    "source": "https://kotobank.jp/word/%E9%9B%80-524782"
  },
  {
    "id": 234,
    "kanji": "葦雀",
    "reading": "よしきり",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "葦原でさえずる小鳥の名です。",
    "source": "https://kotobank.jp/word/%E9%9B%80-524782"
  },
  {
    "id": 235,
    "kanji": "翡翠",
    "reading": "かわせみ",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "青緑色の羽が美しい、川辺の鳥です。宝石名としては「ひすい」と読みます。",
    "source": "https://kotobank.jp/word/%E7%BF%A0-539455"
  },
  {
    "id": 236,
    "kanji": "鰈",
    "reading": "かれい",
    "category": "動物・鳥・魚",
    "difficulty": "中級",
    "explanation": "平たい体で海底にすむ魚です。",
    "source": "https://kotobank.jp/word/%E9%B0%88-468341"
  },
  {
    "id": 237,
    "kanji": "鱸",
    "reading": "すずき",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "成長につれて呼び名が変わる出世魚です。",
    "source": "https://kotobank.jp/word/%E9%B1%B8-541741"
  },
  {
    "id": 238,
    "kanji": "鯒",
    "reading": "こち",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "平たい頭を持つ海の魚です。",
    "source": "https://kotobank.jp/word/%E3%81%93%E3%81%A1-3151722"
  },
  {
    "id": 239,
    "kanji": "鰤",
    "reading": "ぶり",
    "category": "動物・鳥・魚",
    "difficulty": "中級",
    "explanation": "冬に脂がのる出世魚です。",
    "source": "https://kotobank.jp/word/%E9%B0%A4-621200"
  },
  {
    "id": 240,
    "kanji": "鰯",
    "reading": "いわし",
    "category": "動物・鳥・魚",
    "difficulty": "中級",
    "explanation": "群れで泳ぐ小型の海の魚です。",
    "source": "https://kotobank.jp/word/%E9%B0%AF-436925"
  },
  {
    "id": 241,
    "kanji": "鯖",
    "reading": "さば",
    "category": "動物・鳥・魚",
    "difficulty": "中級",
    "explanation": "青い背を持つ海の魚です。",
    "source": "https://kotobank.jp/word/%E9%AF%96-188412"
  },
  {
    "id": 242,
    "kanji": "鯰",
    "reading": "なまず",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "ひげを持つ淡水魚です。",
    "source": "https://kotobank.jp/word/%E9%AF%B0-589619"
  },
  {
    "id": 243,
    "kanji": "鰍",
    "reading": "かじか",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "清流の川底にすむ魚です。",
    "source": "https://kotobank.jp/word/%E9%B0%8D-461979"
  },
  {
    "id": 244,
    "kanji": "鰻",
    "reading": "うなぎ",
    "category": "動物・鳥・魚",
    "difficulty": "中級",
    "explanation": "細長い体の魚で、川と海を行き来します。",
    "source": "https://kotobank.jp/word/%E9%B0%BB-441048"
  },
  {
    "id": 245,
    "kanji": "泥鰌",
    "reading": "どじょう",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "川や田んぼの泥底にすむ細長い魚です。",
    "source": "https://kotobank.jp/word/%E6%B3%A5%E9%B0%8C-583562"
  },
  {
    "id": 246,
    "kanji": "一昨昨日",
    "reading": "さきおととい",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "一昨日の前の日を指します。",
    "source": "https://kotobank.jp/word/%E6%97%A5"
  },
  {
    "id": 247,
    "kanji": "明明後日",
    "reading": "しあさって",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "明後日の次の日を指します。",
    "source": "https://kotobank.jp/word/%E6%97%A5"
  },
  {
    "id": 248,
    "kanji": "終日",
    "reading": "ひねもす",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "一日中、朝から晩までのことです。",
    "source": "https://kotobank.jp/word/%E6%97%A5"
  },
  {
    "id": 249,
    "kanji": "三十日",
    "reading": "みそか",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "月の最後の日を指す古い言い方です。",
    "source": "https://kotobank.jp/word/%E6%97%A5"
  },
  {
    "id": 250,
    "kanji": "晦日",
    "reading": "みそか",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "月の最後の日を指します。",
    "source": "https://kotobank.jp/word/%E6%97%A5"
  },
  {
    "id": 251,
    "kanji": "神無月",
    "reading": "かんなづき",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "旧暦十月の別名です。",
    "source": "https://kotobank.jp/word/%E6%9C%88"
  },
  {
    "id": 252,
    "kanji": "如月",
    "reading": "きさらぎ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "旧暦二月の別名です。",
    "source": "https://kotobank.jp/word/%E6%9C%88"
  },
  {
    "id": 253,
    "kanji": "月代",
    "reading": "さかやき",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "昔の男性が額から頭頂部まで髪をそった部分です。",
    "source": "https://kotobank.jp/word/%E6%9C%88"
  },
  {
    "id": 254,
    "kanji": "文月",
    "reading": "ふづき",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "旧暦七月の別名です。",
    "source": "https://kotobank.jp/word/%E6%9C%88"
  },
  {
    "id": 255,
    "kanji": "水無月",
    "reading": "みなづき",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "旧暦六月の別名です。",
    "source": "https://kotobank.jp/word/%E6%9C%88"
  },
  {
    "id": 256,
    "kanji": "睦月",
    "reading": "むつき",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "旧暦一月の別名です。",
    "source": "https://kotobank.jp/word/%E6%9C%88"
  },
  {
    "id": 257,
    "kanji": "望月",
    "reading": "もちづき",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "満月のことです。",
    "source": "https://kotobank.jp/word/%E6%9C%88"
  },
  {
    "id": 258,
    "kanji": "満天星",
    "reading": "どうだん",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "春に小さな釣鐘形の花をつける木です。",
    "source": "https://kotobank.jp/word/%E6%98%9F"
  },
  {
    "id": 259,
    "kanji": "夕星",
    "reading": "ゆうづつ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "夕方の空に見える金星の古い呼び名です。",
    "source": "https://kotobank.jp/word/%E6%98%9F"
  },
  {
    "id": 260,
    "kanji": "空蝉",
    "reading": "うつせみ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "セミの抜け殻、またはこの世の人を指します。",
    "source": "https://kotobank.jp/word/%E7%A9%BA"
  },
  {
    "id": 261,
    "kanji": "空穂",
    "reading": "うつぼ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "矢を入れる細長い容器です。",
    "source": "https://kotobank.jp/word/%E7%A9%BA"
  },
  {
    "id": 262,
    "kanji": "十六夜",
    "reading": "いざよい",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "旧暦十六日の夜や、その月を指します。",
    "source": "https://kotobank.jp/word/%E5%A4%9C"
  },
  {
    "id": 263,
    "kanji": "小夜",
    "reading": "さよ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "夜を表す古い言葉です。",
    "source": "https://kotobank.jp/word/%E5%A4%9C"
  },
  {
    "id": 264,
    "kanji": "朝臣",
    "reading": "あそん",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "朝廷で高位の人に用いた呼び名です。",
    "source": "https://kotobank.jp/word/%E6%9C%9D"
  },
  {
    "id": 265,
    "kanji": "後朝",
    "reading": "きぬぎぬ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "男女が共に過ごした翌朝を指す古語です。",
    "source": "https://kotobank.jp/word/%E6%9C%9D"
  },
  {
    "id": 266,
    "kanji": "春宮",
    "reading": "とうぐう",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "皇太子を指す古い言葉です。",
    "source": "https://kotobank.jp/word/%E6%98%A5"
  },
  {
    "id": 267,
    "kanji": "夏越",
    "reading": "なごし",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "夏を迎える前に行う神事を指します。",
    "source": "https://kotobank.jp/word/%E5%A4%8F"
  },
  {
    "id": 268,
    "kanji": "忍冬",
    "reading": "すいかずら",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "冬にも葉をつけ、香りのある花が咲くつる植物です。",
    "source": "https://kotobank.jp/word/%E5%86%AC"
  },
  {
    "id": 269,
    "kanji": "冬瓜",
    "reading": "とうがん",
    "category": "食べ物",
    "difficulty": "中級",
    "explanation": "食用にするウリ科の野菜です。",
    "source": "https://kotobank.jp/word/%E5%86%AC"
  },
  {
    "id": 270,
    "kanji": "生憎",
    "reading": "あいにく",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "期待に反して都合が悪いことです。",
    "source": "https://kotobank.jp/word/%E7%94%9F"
  },
  {
    "id": 271,
    "kanji": "生姜",
    "reading": "しょうが",
    "category": "食べ物",
    "difficulty": "中級",
    "explanation": "料理の香りづけにも使う根茎です。",
    "source": "https://kotobank.jp/word/%E7%94%9F"
  },
  {
    "id": 272,
    "kanji": "生絹",
    "reading": "すずし",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "薄く織った生糸の絹織物です。",
    "source": "https://kotobank.jp/word/%E7%94%9F"
  },
  {
    "id": 273,
    "kanji": "生業",
    "reading": "なりわい",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "暮らしを立てるための仕事です。",
    "source": "https://kotobank.jp/word/%E7%94%9F"
  },
  {
    "id": 274,
    "kanji": "埴生",
    "reading": "はにゅう",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "土を使って建てた粗末な住まいを指す古語です。",
    "source": "https://kotobank.jp/word/%E7%94%9F"
  },
  {
    "id": 275,
    "kanji": "弥生",
    "reading": "やよい",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "旧暦三月の別名です。",
    "source": "https://kotobank.jp/word/%E7%94%9F"
  },
  {
    "id": 276,
    "kanji": "蓬生",
    "reading": "よもぎう",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "ヨモギが一面に生えている所です。",
    "source": "https://kotobank.jp/word/%E7%94%9F"
  },
  {
    "id": 277,
    "kanji": "早生",
    "reading": "わせ",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "同じ種類の中で早く育つ作物です。",
    "source": "https://kotobank.jp/word/%E7%94%9F"
  },
  {
    "id": 278,
    "kanji": "白朮祭",
    "reading": "おけらまつり",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "顔に塗る化粧用の白い粉です。",
    "source": "https://kotobank.jp/word/%E7%99%BD"
  },
  {
    "id": 279,
    "kanji": "白粉",
    "reading": "おしろい",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "かすれた模様を出した織物です。",
    "source": "https://kotobank.jp/word/%E7%99%BD"
  },
  {
    "id": 280,
    "kanji": "飛白",
    "reading": "かすり",
    "category": "食べ物",
    "difficulty": "中級",
    "explanation": "味を付けずに温めた飲み水です。",
    "source": "https://kotobank.jp/word/%E7%99%BD"
  },
  {
    "id": 281,
    "kanji": "白湯",
    "reading": "さゆ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "鉛やスズを主成分とする白い合金です。",
    "source": "https://kotobank.jp/word/%E7%99%BD"
  },
  {
    "id": 282,
    "kanji": "白鑞",
    "reading": "しろめ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "芝居の台詞を指す表記です。",
    "source": "https://kotobank.jp/word/%E7%99%BD"
  },
  {
    "id": 283,
    "kanji": "科白",
    "reading": "せりふ",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "秋に紅葉するウルシ科の木です。",
    "source": "https://kotobank.jp/word/%E7%99%BD"
  },
  {
    "id": 284,
    "kanji": "黒衣",
    "reading": "くろご",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "芝居などで黒い服を着て舞台を支える人です。",
    "source": "https://kotobank.jp/word/%E9%BB%92"
  },
  {
    "id": 285,
    "kanji": "黒子",
    "reading": "ほくろ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "皮膚にできる小さな黒い点です。",
    "source": "https://kotobank.jp/word/%E9%BB%92"
  },
  {
    "id": 286,
    "kanji": "赤熊",
    "reading": "しゃぐま",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "赤く染めた長い毛や、その飾りです。",
    "source": "https://kotobank.jp/word/%E8%B5%A4"
  },
  {
    "id": 287,
    "kanji": "青柳",
    "reading": "あおやぎ",
    "category": "食べ物",
    "difficulty": "上級",
    "explanation": "むき身などにしたアオヤギの貝を指します。",
    "source": "https://kotobank.jp/word/%E9%9D%92"
  },
  {
    "id": 288,
    "kanji": "刺青",
    "reading": "いれずみ",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "皮膚に針で文字や模様を入れることです。",
    "source": "https://kotobank.jp/word/%E9%9D%92"
  },
  {
    "id": 289,
    "kanji": "万年青",
    "reading": "おもと",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "冬も緑の葉を保つ多年草です。",
    "source": "https://kotobank.jp/word/%E9%9D%92"
  },
  {
    "id": 290,
    "kanji": "金雀児",
    "reading": "えにしだ",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "黄色い花をつけるマメ科の低木です。",
    "source": "https://kotobank.jp/word/%E9%87%91"
  },
  {
    "id": 291,
    "kanji": "金糸雀",
    "reading": "かなりあ",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "黄色い羽の小鳥、カナリアです。",
    "source": "https://kotobank.jp/word/%E9%87%91"
  },
  {
    "id": 292,
    "kanji": "金海鼠",
    "reading": "きんこ",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "浅い海にすむナマコの一種です。",
    "source": "https://kotobank.jp/word/%E9%87%91"
  },
  {
    "id": 293,
    "kanji": "金団",
    "reading": "きんとん",
    "category": "食べ物",
    "difficulty": "中級",
    "explanation": "栗やサツマイモを甘く煮て固めた菓子です。",
    "source": "https://kotobank.jp/word/%E9%87%91"
  },
  {
    "id": 294,
    "kanji": "鍍金",
    "reading": "めっき",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "金属などの表面を別の金属で覆うことです。",
    "source": "https://kotobank.jp/word/%E9%87%91"
  },
  {
    "id": 295,
    "kanji": "小豆",
    "reading": "あずき",
    "category": "食べ物",
    "difficulty": "中級",
    "explanation": "あんこなどに使う小さな豆です。",
    "source": "https://kotobank.jp/word/%E8%B1%86"
  },
  {
    "id": 296,
    "kanji": "豇豆",
    "reading": "ささげ",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "細長いさやをつけるマメ科の植物です。",
    "source": "https://kotobank.jp/word/%E8%B1%86"
  },
  {
    "id": 297,
    "kanji": "大角豆",
    "reading": "ささげ",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "ササゲを指す別の漢字表記です。",
    "source": "https://kotobank.jp/word/%E8%B1%86"
  },
  {
    "id": 298,
    "kanji": "羊栖菜",
    "reading": "ひじき",
    "category": "食べ物",
    "difficulty": "超難問",
    "explanation": "煮物などに使う海藻、ヒジキの表記です。",
    "source": "https://kotobank.jp/word/%E8%8F%9C"
  },
  {
    "id": 63,
    "kanji": "胡桃",
    "reading": "くるみ",
    "category": "食べ物",
    "difficulty": "中級",
    "explanation": "硬い殻に包まれたクルミの実です。",
    "source": "https://kotobank.jp/word/%E6%A1%83"
  },
  {
    "id": 299,
    "kanji": "桃花鳥",
    "reading": "とき",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "トキを表す別の漢字表記です。",
    "source": "https://kotobank.jp/word/%E6%A1%83"
  },
  {
    "id": 300,
    "kanji": "梅桃",
    "reading": "ゆすらうめ",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "小さな赤い実をつける落葉低木です。",
    "source": "https://kotobank.jp/word/%E6%A1%83"
  },
  {
    "id": 301,
    "kanji": "塩梅",
    "reading": "あんばい",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "物事の具合や調子を指します。",
    "source": "https://kotobank.jp/word/%E6%A2%85"
  },
  {
    "id": 302,
    "kanji": "楊梅",
    "reading": "やまもも",
    "category": "食べ物",
    "difficulty": "上級",
    "explanation": "甘酸っぱい赤い実をつけるヤマモモです。",
    "source": "https://kotobank.jp/word/%E6%A2%85"
  },
  {
    "id": 303,
    "kanji": "虫唾",
    "reading": "むしず",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "胸のむかつきを表す言葉です。",
    "source": "https://kotobank.jp/word/%E8%99%AB"
  },
  {
    "id": 304,
    "kanji": "蝶番",
    "reading": "ちょうつがい",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "扉などを回転させる金具です。",
    "source": "https://kotobank.jp/word/%E8%9D%B6"
  },
  {
    "id": 305,
    "kanji": "黄牛",
    "reading": "あめうし",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "黄色みを帯びた毛色の牛です。",
    "source": "https://kotobank.jp/word/%E7%89%9B"
  },
  {
    "id": 306,
    "kanji": "牛膝",
    "reading": "いのこずち",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "野原などに生えるヒユ科の草です。",
    "source": "https://kotobank.jp/word/%E7%89%9B"
  },
  {
    "id": 307,
    "kanji": "蝸牛",
    "reading": "かたつむり",
    "category": "動物・鳥・魚",
    "difficulty": "中級",
    "explanation": "殻を背負う陸の巻き貝です。",
    "source": "https://kotobank.jp/word/%E7%89%9B"
  },
  {
    "id": 308,
    "kanji": "天牛",
    "reading": "かみきりむし",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "長い触角を持つカミキリムシです。",
    "source": "https://kotobank.jp/word/%E7%89%9B"
  },
  {
    "id": 309,
    "kanji": "牛車",
    "reading": "ぎっしゃ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "牛が引く昔の乗り物です。",
    "source": "https://kotobank.jp/word/%E7%89%9B"
  },
  {
    "id": 310,
    "kanji": "牛王",
    "reading": "ごおう",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "護符などに用いる牛玉宝印の略です。",
    "source": "https://kotobank.jp/word/%E7%89%9B"
  },
  {
    "id": 311,
    "kanji": "牛頭馬頭",
    "reading": "ごずめず",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "仏教で地獄の獄卒とされる牛頭と馬頭です。",
    "source": "https://kotobank.jp/word/%E7%89%9B"
  },
  {
    "id": 79,
    "kanji": "牛蒡",
    "reading": "ごぼう",
    "category": "食べ物",
    "difficulty": "中級",
    "explanation": "根を食べる野菜、ゴボウです。",
    "source": "https://kotobank.jp/word/%E7%89%9B"
  },
  {
    "id": 312,
    "kanji": "猫糞",
    "reading": "ねこばば",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "拾った物を自分の物にしてしまうことです。",
    "source": "https://kotobank.jp/word/%E7%8C%AB"
  },
  {
    "id": 313,
    "kanji": "斑猫",
    "reading": "はんみょう",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "毒を持つ種類もいる甲虫の仲間です。",
    "source": "https://kotobank.jp/word/%E7%8C%AB"
  },
  {
    "id": 314,
    "kanji": "氈鹿",
    "reading": "かもしか",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "山地にすむウシ科の動物です。",
    "source": "https://kotobank.jp/word/%E9%B9%BF"
  },
  {
    "id": 315,
    "kanji": "馴鹿",
    "reading": "となかい",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "寒い地方にすむシカの仲間です。",
    "source": "https://kotobank.jp/word/%E9%B9%BF"
  },
  {
    "id": 316,
    "kanji": "肉叢",
    "reading": "ししむら",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "肉のかたまりを指す古い言葉です。",
    "source": "https://kotobank.jp/word/%E8%82%89"
  },
  {
    "id": 317,
    "kanji": "肉豆蔲",
    "reading": "にくずく",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "香辛料のナツメグを採る木です。",
    "source": "https://kotobank.jp/word/%E8%82%89"
  },
  {
    "id": 318,
    "kanji": "肉刺",
    "reading": "まめ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "手足にできる小さな水ぶくれです。",
    "source": "https://kotobank.jp/word/%E8%82%89"
  },
  {
    "id": 319,
    "kanji": "茴香",
    "reading": "ういきょう",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "料理や薬用に使う香りの強い植物です。",
    "source": "https://kotobank.jp/word/%E9%A6%99"
  },
  {
    "id": 320,
    "kanji": "香具師",
    "reading": "やし",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "露店商や大道商人を指す言葉です。",
    "source": "https://kotobank.jp/word/%E9%A6%99"
  },
  {
    "id": 321,
    "kanji": "吾木香",
    "reading": "われもこう",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "赤紫色の花をつける多年草です。",
    "source": "https://kotobank.jp/word/%E9%A6%99"
  },
  {
    "id": 322,
    "kanji": "烏竜茶",
    "reading": "うーろんちゃ",
    "category": "食べ物",
    "difficulty": "上級",
    "explanation": "茶葉を半発酵させた中国茶です。",
    "source": "https://kotobank.jp/word/%E8%8C%B6"
  },
  {
    "id": 323,
    "kanji": "葡萄茶",
    "reading": "えびちゃ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "エビの殻のような暗い赤色です。",
    "source": "https://kotobank.jp/word/%E8%8C%B6"
  },
  {
    "id": 324,
    "kanji": "山茶",
    "reading": "つばき",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "ツバキを指す別の漢字表記です。",
    "source": "https://kotobank.jp/word/%E8%8C%B6"
  },
  {
    "id": 325,
    "kanji": "御披露目",
    "reading": "おひろめ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "人々に初めて知らせることです。",
    "source": "https://kotobank.jp/word/%E7%9B%AE"
  },
  {
    "id": 326,
    "kanji": "粗目",
    "reading": "ざらめ",
    "category": "食べ物",
    "difficulty": "上級",
    "explanation": "粒の粗い砂糖です。",
    "source": "https://kotobank.jp/word/%E7%9B%AE"
  },
  {
    "id": 327,
    "kanji": "目映",
    "reading": "まばゆい",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "まぶしく感じることです。",
    "source": "https://kotobank.jp/word/%E7%9B%AE"
  },
  {
    "id": 328,
    "kanji": "目論見",
    "reading": "もくろみ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "計画やたくらみを指します。",
    "source": "https://kotobank.jp/word/%E7%9B%AE"
  },
  {
    "id": 329,
    "kanji": "手弱女",
    "reading": "たおやめ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "姿が優美でしなやかな女性を指す古語です。",
    "source": "https://kotobank.jp/word/%E6%89%8B"
  },
  {
    "id": 330,
    "kanji": "手斧",
    "reading": "ちょうな",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "木材を削る大工道具です。",
    "source": "https://kotobank.jp/word/%E6%89%8B"
  },
  {
    "id": 331,
    "kanji": "足掻",
    "reading": "あがき",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "もがいて抵抗することです。",
    "source": "https://kotobank.jp/word/%E8%B6%B3"
  },
  {
    "id": 332,
    "kanji": "跑足",
    "reading": "だくあし",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "馬の速い足並みを指します。",
    "source": "https://kotobank.jp/word/%E8%B6%B3"
  },
  {
    "id": 333,
    "kanji": "足袋",
    "reading": "たび",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "足に履く日本の袋状の履物です。",
    "source": "https://kotobank.jp/word/%E8%B6%B3"
  },
  {
    "id": 334,
    "kanji": "裸足",
    "reading": "はだし",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "靴下などを履いていない足です。",
    "source": "https://kotobank.jp/word/%E8%B6%B3"
  },
  {
    "id": 335,
    "kanji": "百足",
    "reading": "むかで",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "多くの脚を持つ節足動物です。",
    "source": "https://kotobank.jp/word/%E8%B6%B3"
  },
  {
    "id": 336,
    "kanji": "挿頭",
    "reading": "かざし",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "髪や冠に挿す飾りです。",
    "source": "https://kotobank.jp/word/%E9%A0%AD"
  },
  {
    "id": 337,
    "kanji": "塔頭",
    "reading": "たっちゅう",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "禅寺の境内に建つ小寺院です。",
    "source": "https://kotobank.jp/word/%E9%A0%AD"
  },
  {
    "id": 338,
    "kanji": "頭垢",
    "reading": "ふけ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "頭皮からはがれる細かい皮膚片です。",
    "source": "https://kotobank.jp/word/%E9%A0%AD"
  },
  {
    "id": 339,
    "kanji": "灯心",
    "reading": "とうしみ",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "灯火の芯に使う植物です。",
    "source": "https://kotobank.jp/word/%E5%BF%83"
  },
  {
    "id": 340,
    "kanji": "稈心",
    "reading": "みご",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "イネ科植物の穂の芯です。",
    "source": "https://kotobank.jp/word/%E5%BF%83"
  },
  {
    "id": 341,
    "kanji": "鳶尾",
    "reading": "いちはつ",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "アヤメ科の多年草です。",
    "source": "https://kotobank.jp/word/%E5%B0%BE"
  },
  {
    "id": 342,
    "kanji": "石蓴",
    "reading": "あおさ",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "食用にもなる海藻のアオサです。",
    "source": "https://kotobank.jp/word/%E7%9F%B3"
  },
  {
    "id": 343,
    "kanji": "石首魚",
    "reading": "いしもち",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "イシモチと呼ばれる海の魚です。",
    "source": "https://kotobank.jp/word/%E7%9F%B3"
  },
  {
    "id": 344,
    "kanji": "石榴",
    "reading": "ざくろ",
    "category": "食べ物",
    "difficulty": "上級",
    "explanation": "赤い粒の実がなるザクロです。",
    "source": "https://kotobank.jp/word/%E7%9F%B3"
  },
  {
    "id": 345,
    "kanji": "流石",
    "reading": "さすが",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "予想外だが、言われてみれば納得できるさまです。",
    "source": "https://kotobank.jp/word/%E7%9F%B3"
  },
  {
    "id": 346,
    "kanji": "石蕗",
    "reading": "つわぶき",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "黄色い花をつけるキク科の草です。",
    "source": "https://kotobank.jp/word/%E7%9F%B3"
  },
  {
    "id": 347,
    "kanji": "薬玉",
    "reading": "くすだま",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "薬草などを詰めて飾るくす玉です。",
    "source": "https://kotobank.jp/word/%E7%8E%89"
  },
  {
    "id": 348,
    "kanji": "玉章",
    "reading": "たまずさ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "手紙を指す古い言葉です。",
    "source": "https://kotobank.jp/word/%E7%8E%89"
  },
  {
    "id": 76,
    "kanji": "玉蜀黍",
    "reading": "とうもろこし",
    "category": "食べ物",
    "difficulty": "上級",
    "explanation": "粒を食べるトウモロコシです。",
    "source": "https://kotobank.jp/word/%E7%8E%89"
  },
  {
    "id": 349,
    "kanji": "勾玉",
    "reading": "まがたま",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "曲がった形の古代の装身具です。",
    "source": "https://kotobank.jp/word/%E7%8E%89"
  },
  {
    "id": 350,
    "kanji": "田鶴",
    "reading": "たず",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "ツルを指す古い呼び名です。",
    "source": "https://kotobank.jp/word/%E7%94%B0"
  },
  {
    "id": 351,
    "kanji": "田螺",
    "reading": "たにし",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "田などにいる巻き貝です。",
    "source": "https://kotobank.jp/word/%E7%94%B0"
  },
  {
    "id": 352,
    "kanji": "田圃",
    "reading": "たんぼ",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "田んぼを表す漢字表記です。",
    "source": "https://kotobank.jp/word/%E7%94%B0"
  },
  {
    "id": 353,
    "kanji": "煙草",
    "reading": "たばこ",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "タバコの葉や、それを吸う品物です。",
    "source": "https://kotobank.jp/word/%E8%8D%89"
  },
  {
    "id": 354,
    "kanji": "燕子花",
    "reading": "かきつばた",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "アヤメ科の花、カキツバタです。",
    "source": "https://kotobank.jp/word/%E8%8A%B1"
  },
  {
    "id": 355,
    "kanji": "唐棣花",
    "reading": "はねず",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "古くから知られる淡い紅色の花です。",
    "source": "https://kotobank.jp/word/%E8%8A%B1"
  },
  {
    "id": 356,
    "kanji": "竹箆",
    "reading": "しっぺい",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "竹でできた細長い道具です。",
    "source": "https://kotobank.jp/word/%E7%AB%B9"
  },
  {
    "id": 357,
    "kanji": "竹刀",
    "reading": "しない",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "剣道で使う竹製の刀です。",
    "source": "https://kotobank.jp/word/%E7%AB%B9"
  },
  {
    "id": 358,
    "kanji": "竹光",
    "reading": "たけみつ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "竹で作った模造の刀です。",
    "source": "https://kotobank.jp/word/%E7%AB%B9"
  },
  {
    "id": 359,
    "kanji": "淡竹",
    "reading": "はちく",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "細い幹を持つタケの一種です。",
    "source": "https://kotobank.jp/word/%E7%AB%B9"
  },
  {
    "id": 360,
    "kanji": "船首",
    "reading": "みよし",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "船の先端部分です。",
    "source": "https://kotobank.jp/word/%E8%88%B9"
  },
  {
    "id": 361,
    "kanji": "山車",
    "reading": "だし",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "祭りで引いたり担いだりする飾り車です。",
    "source": "https://kotobank.jp/word/%E8%BB%8A"
  },
  {
    "id": 362,
    "kanji": "車楽",
    "reading": "だんじり",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "祭りで引く山車を指す言葉です。",
    "source": "https://kotobank.jp/word/%E8%BB%8A"
  },
  {
    "id": 363,
    "kanji": "家鴨",
    "reading": "あひる",
    "category": "動物・鳥・魚",
    "difficulty": "中級",
    "explanation": "水辺で飼われるアヒルです。",
    "source": "https://kotobank.jp/word/%E5%AE%B6"
  },
  {
    "id": 364,
    "kanji": "蔵人",
    "reading": "くろうど",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "宮中の役人を指す古い言葉です。",
    "source": "https://kotobank.jp/word/%E4%BA%BA"
  },
  {
    "id": 365,
    "kanji": "防人",
    "reading": "さきもり",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "古代に辺境の守りに当たった人です。",
    "source": "https://kotobank.jp/word/%E4%BA%BA"
  },
  {
    "id": 366,
    "kanji": "素人",
    "reading": "しろうと",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "その道にまだ慣れていない人です。",
    "source": "https://kotobank.jp/word/%E4%BA%BA"
  },
  {
    "id": 367,
    "kanji": "舎人",
    "reading": "とねり",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "宮中で仕えた役人を指します。",
    "source": "https://kotobank.jp/word/%E4%BA%BA"
  },
  {
    "id": 368,
    "kanji": "為人",
    "reading": "ひととなり",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "人柄や性格を指す言葉です。",
    "source": "https://kotobank.jp/word/%E4%BA%BA"
  },
  {
    "id": 369,
    "kanji": "若人",
    "reading": "わこうど",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "若い人を指す言葉です。",
    "source": "https://kotobank.jp/word/%E4%BA%BA"
  },
  {
    "id": 370,
    "kanji": "海女",
    "reading": "あま",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "海にもぐって貝などを採る女性です。",
    "source": "https://kotobank.jp/word/%E5%A5%B3"
  },
  {
    "id": 371,
    "kanji": "郎女",
    "reading": "いらつめ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "古代の女性を指す呼び名です。",
    "source": "https://kotobank.jp/word/%E5%A5%B3"
  },
  {
    "id": 372,
    "kanji": "采女",
    "reading": "うねめ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "宮中に仕えた女性です。",
    "source": "https://kotobank.jp/word/%E5%A5%B3"
  },
  {
    "id": 373,
    "kanji": "女将",
    "reading": "おかみ",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "旅館や店の主人である女性です。",
    "source": "https://kotobank.jp/word/%E5%A5%B3"
  },
  {
    "id": 374,
    "kanji": "女形",
    "reading": "おやま",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "女性の役を演じる男性の役者です。",
    "source": "https://kotobank.jp/word/%E5%A5%B3"
  },
  {
    "id": 375,
    "kanji": "瞽女",
    "reading": "ごぜ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "三味線を弾いて歌い歩いた盲目の女性です。",
    "source": "https://kotobank.jp/word/%E5%A5%B3"
  },
  {
    "id": 376,
    "kanji": "女衒",
    "reading": "ぜげん",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "女性を売買の対象として仲介した人を指す古語です。",
    "source": "https://kotobank.jp/word/%E5%A5%B3"
  },
  {
    "id": 377,
    "kanji": "巫女",
    "reading": "みこ",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "神社で神事を助ける女性です。",
    "source": "https://kotobank.jp/word/%E5%A5%B3"
  },
  {
    "id": 378,
    "kanji": "湯女",
    "reading": "ゆな",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "昔、温泉場などで客の世話をした女性です。",
    "source": "https://kotobank.jp/word/%E5%A5%B3"
  },
  {
    "id": 379,
    "kanji": "男郎花",
    "reading": "おとこえし",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "オミナエシに似た白い花をつける草です。",
    "source": "https://kotobank.jp/word/%E7%94%B7"
  },
  {
    "id": 380,
    "kanji": "益荒男",
    "reading": "ますらお",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "勇ましく立派な男性を指す古語です。",
    "source": "https://kotobank.jp/word/%E7%94%B7"
  },
  {
    "id": 381,
    "kanji": "浮子",
    "reading": "うき",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "釣り糸につける浮きです。",
    "source": "https://kotobank.jp/word/%E5%AD%90"
  },
  {
    "id": 382,
    "kanji": "浮塵子",
    "reading": "うんか",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "稲などにつく小さな虫です。",
    "source": "https://kotobank.jp/word/%E5%AD%90"
  },
  {
    "id": 383,
    "kanji": "案山子",
    "reading": "かかし",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "田畑で鳥を追い払うために立てる人形です。",
    "source": "https://kotobank.jp/word/%E5%AD%90"
  },
  {
    "id": 384,
    "kanji": "帷子",
    "reading": "かたびら",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "裏地を付けない単衣の着物です。",
    "source": "https://kotobank.jp/word/%E5%AD%90"
  },
  {
    "id": 385,
    "kanji": "硝子",
    "reading": "がらす",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "窓や器に使う透明なガラスです。",
    "source": "https://kotobank.jp/word/%E5%AD%90"
  },
  {
    "id": 386,
    "kanji": "鱲子",
    "reading": "からすみ",
    "category": "食べ物",
    "difficulty": "超難問",
    "explanation": "ボラの卵巣を塩漬けにして干した食品です。",
    "source": "https://kotobank.jp/word/%E5%AD%90"
  },
  {
    "id": 387,
    "kanji": "梔子",
    "reading": "くちなし",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "香りの強い白い花をつける木です。",
    "source": "https://kotobank.jp/word/%E5%AD%90"
  },
  {
    "id": 388,
    "kanji": "胡頽子",
    "reading": "ぐみ",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "赤い小さな実がなるグミの木です。",
    "source": "https://kotobank.jp/word/%E5%AD%90"
  },
  {
    "id": 389,
    "kanji": "小女子",
    "reading": "こうなご",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "コウナゴと呼ばれる小魚です。",
    "source": "https://kotobank.jp/word/%E5%AD%90"
  },
  {
    "id": 390,
    "kanji": "賽子",
    "reading": "さいころ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "転がして目の数を使うさいころです。",
    "source": "https://kotobank.jp/word/%E5%AD%90"
  },
  {
    "id": 391,
    "kanji": "頼母子",
    "reading": "たのもし",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "互いに金を出し合う昔の金融組織です。",
    "source": "https://kotobank.jp/word/%E5%AD%90"
  },
  {
    "id": 392,
    "kanji": "束子",
    "reading": "たわし",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "鍋や床を洗う道具です。",
    "source": "https://kotobank.jp/word/%E5%AD%90"
  },
  {
    "id": 393,
    "kanji": "梃子",
    "reading": "てこ",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "小さな力で重い物を動かす道具です。",
    "source": "https://kotobank.jp/word/%E5%AD%90"
  },
  {
    "id": 50,
    "kanji": "撫子",
    "reading": "なでしこ",
    "category": "植物・花",
    "difficulty": "中級",
    "explanation": "秋に花を咲かせるナデシコです。",
    "source": "https://kotobank.jp/word/%E5%AD%90"
  },
  {
    "id": 394,
    "kanji": "螺子",
    "reading": "ねじ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "物を締めつけるねじです。",
    "source": "https://kotobank.jp/word/%E5%AD%90"
  },
  {
    "id": 395,
    "kanji": "梯子",
    "reading": "はしご",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "高い場所に登るための道具です。",
    "source": "https://kotobank.jp/word/%E5%AD%90"
  },
  {
    "id": 396,
    "kanji": "囃子",
    "reading": "はやし",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "音楽や祭りで演奏することです。",
    "source": "https://kotobank.jp/word/%E5%AD%90"
  },
  {
    "id": 397,
    "kanji": "檳榔子",
    "reading": "びんろうじ",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "ビンロウの実です。",
    "source": "https://kotobank.jp/word/%E5%AD%90"
  },
  {
    "id": 398,
    "kanji": "五倍子",
    "reading": "ふし",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "虫が木につくるこぶで、染料にも使います。",
    "source": "https://kotobank.jp/word/%E5%AD%90"
  },
  {
    "id": 399,
    "kanji": "子規",
    "reading": "ほととぎす",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "ホトトギスを表す別の漢字表記です。",
    "source": "https://kotobank.jp/word/%E5%AD%90"
  },
  {
    "id": 400,
    "kanji": "零余子",
    "reading": "むかご",
    "category": "食べ物",
    "difficulty": "上級",
    "explanation": "ヤマノイモの葉の付け根にできる小さな実です。",
    "source": "https://kotobank.jp/word/%E5%AD%90"
  },
  {
    "id": 401,
    "kanji": "無患子",
    "reading": "むくろじ",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "黒い実がなる落葉樹です。",
    "source": "https://kotobank.jp/word/%E5%AD%90"
  },
  {
    "id": 402,
    "kanji": "郁子",
    "reading": "むべ",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "甘い実のなるアケビ科のつる植物です。",
    "source": "https://kotobank.jp/word/%E5%AD%90"
  },
  {
    "id": 403,
    "kanji": "柚餅子",
    "reading": "ゆべし",
    "category": "食べ物",
    "difficulty": "上級",
    "explanation": "ユズの香りをつけた和菓子です。",
    "source": "https://kotobank.jp/word/%E5%AD%90"
  },
  {
    "id": 404,
    "kanji": "雲母",
    "reading": "きらら",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "光沢のある薄い層にはがれる鉱物です。",
    "source": "https://kotobank.jp/word/%E6%AF%8D"
  },
  {
    "id": 405,
    "kanji": "母衣",
    "reading": "ほろ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "武具の背に付けた大きな布の袋です。",
    "source": "https://kotobank.jp/word/%E6%AF%8D"
  },
  {
    "id": 406,
    "kanji": "大凡",
    "reading": "おおよそ",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "おおまかに見て、その程度であることです。",
    "source": "https://kotobank.jp/word/%E5%A4%A7"
  },
  {
    "id": 407,
    "kanji": "大鋸屑",
    "reading": "おがくず",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "木を大きなのこぎりでひいた時に出るくずです。",
    "source": "https://kotobank.jp/word/%E5%A4%A7"
  },
  {
    "id": 408,
    "kanji": "大蛇",
    "reading": "おろち",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "大きなヘビを指します。",
    "source": "https://kotobank.jp/word/%E5%A4%A7"
  },
  {
    "id": 409,
    "kanji": "大刀",
    "reading": "たち",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "刃の長い昔の刀です。",
    "source": "https://kotobank.jp/word/%E5%A4%A7"
  },
  {
    "id": 410,
    "kanji": "大蒜",
    "reading": "にんにく",
    "category": "食べ物",
    "difficulty": "上級",
    "explanation": "強い香りのあるニンニクです。",
    "source": "https://kotobank.jp/word/%E5%A4%A7"
  },
  {
    "id": 411,
    "kanji": "高粱",
    "reading": "こーりゃん",
    "category": "食べ物",
    "difficulty": "超難問",
    "explanation": "食用や飼料になるモロコシの一種です。",
    "source": "https://kotobank.jp/word/%E9%AB%98"
  },
  {
    "id": 412,
    "kanji": "高嶺",
    "reading": "たかね",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "高い山の頂です。",
    "source": "https://kotobank.jp/word/%E9%AB%98"
  },
  {
    "id": 413,
    "kanji": "長押",
    "reading": "なげし",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "和室の壁に設ける横木です。",
    "source": "https://kotobank.jp/word/%E9%95%B7"
  },
  {
    "id": 414,
    "kanji": "長閑",
    "reading": "のどか",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "静かでのんびりしているさまです。",
    "source": "https://kotobank.jp/word/%E9%95%B7"
  },
  {
    "id": 415,
    "kanji": "東風",
    "reading": "こち",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "春に東から吹く風です。",
    "source": "https://kotobank.jp/word/%E9%A2%A8"
  },
  {
    "id": 416,
    "kanji": "疾風",
    "reading": "はやて",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "勢いよく吹く風です。",
    "source": "https://kotobank.jp/word/%E9%A2%A8"
  },
  {
    "id": 417,
    "kanji": "風信子",
    "reading": "ひやしんす",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "球根から香りのある花を咲かせる植物です。",
    "source": "https://kotobank.jp/word/%E9%A2%A8"
  },
  {
    "id": 418,
    "kanji": "雲丹",
    "reading": "うに",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "海底にすむウニの表記です。",
    "source": "https://kotobank.jp/word/%E9%9B%B2"
  },
  {
    "id": 419,
    "kanji": "雲脂",
    "reading": "ふけ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "頭皮からはがれる細かい皮膚片です。",
    "source": "https://kotobank.jp/word/%E9%9B%B2"
  },
  {
    "id": 420,
    "kanji": "水雲",
    "reading": "もずく",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "食用になる海藻のモズクです。",
    "source": "https://kotobank.jp/word/%E9%9B%B2"
  },
  {
    "id": 421,
    "kanji": "雲呑",
    "reading": "わんたん",
    "category": "食べ物",
    "difficulty": "上級",
    "explanation": "具を薄い皮で包んだスープ料理です。",
    "source": "https://kotobank.jp/word/%E9%9B%B2"
  },
  {
    "id": 422,
    "kanji": "海参",
    "reading": "いりこ",
    "category": "食べ物",
    "difficulty": "超難問",
    "explanation": "干したナマコを指す言葉です。",
    "source": "https://kotobank.jp/word/%E6%B5%B7"
  },
  {
    "id": 423,
    "kanji": "海髪",
    "reading": "おごのり",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "食用にもなる海藻です。",
    "source": "https://kotobank.jp/word/%E6%B5%B7"
  },
  {
    "id": 424,
    "kanji": "海鼠腸",
    "reading": "このわた",
    "category": "食べ物",
    "difficulty": "超難問",
    "explanation": "ナマコの腸を塩辛にしたものです。",
    "source": "https://kotobank.jp/word/%E6%B5%B7"
  },
  {
    "id": 425,
    "kanji": "海松",
    "reading": "みる",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "海に生える緑色の海藻です。",
    "source": "https://kotobank.jp/word/%E6%B5%B7"
  },
  {
    "id": 426,
    "kanji": "海神",
    "reading": "わたつみ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "海の神を指す古い言葉です。",
    "source": "https://kotobank.jp/word/%E6%B5%B7"
  },
  {
    "id": 427,
    "kanji": "弖爾乎波",
    "reading": "てにをは",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "助詞などの言葉の働きを指す古い呼び名です。",
    "source": "https://kotobank.jp/word/%E6%B3%A2"
  },
  {
    "id": 428,
    "kanji": "波止場",
    "reading": "はとば",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "船を着ける港の場所です。",
    "source": "https://kotobank.jp/word/%E6%B3%A2"
  },
  {
    "id": 429,
    "kanji": "鶴嘴",
    "reading": "つるはし",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "石や土を掘るためのつるはしです。",
    "source": "https://kotobank.jp/word/%E9%B6%B4"
  },
  {
    "id": 430,
    "kanji": "真鶴",
    "reading": "まなづる",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "細長い首と脚を持つツルの仲間です。",
    "source": "https://kotobank.jp/word/%E9%B6%B4"
  },
  {
    "id": 431,
    "kanji": "黄鶏",
    "reading": "かしわ",
    "category": "食べ物",
    "difficulty": "超難問",
    "explanation": "ニワトリの肉を指す言葉です。",
    "source": "https://kotobank.jp/word/%E9%B6%8F"
  },
  {
    "id": 432,
    "kanji": "水鶏",
    "reading": "くいな",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "水辺の草むらにすむ鳥です。",
    "source": "https://kotobank.jp/word/%E9%B6%8F"
  },
  {
    "id": 433,
    "kanji": "軍鶏",
    "reading": "しゃも",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "闘鶏にも使われたニワトリの品種です。",
    "source": "https://kotobank.jp/word/%E9%B6%8F"
  },
  {
    "id": 434,
    "kanji": "矮鶏",
    "reading": "ちゃぼ",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "小型のニワトリの品種です。",
    "source": "https://kotobank.jp/word/%E9%B6%8F"
  },
  {
    "id": 435,
    "kanji": "鶏冠",
    "reading": "とさか",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "ニワトリの頭にある赤い部分です。",
    "source": "https://kotobank.jp/word/%E9%B6%8F"
  },
  {
    "id": 436,
    "kanji": "上枝",
    "reading": "ほつえ",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "木の上の方に伸びる枝です。",
    "source": "https://kotobank.jp/word/%E4%B8%8A"
  },
  {
    "id": 437,
    "kanji": "下司",
    "reading": "げす",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "身分が低い人を見下して言った古い語です。",
    "source": "https://kotobank.jp/word/%E4%B8%8B"
  },
  {
    "id": 438,
    "kanji": "下枝",
    "reading": "しずえ",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "木の下の方に伸びる枝です。",
    "source": "https://kotobank.jp/word/%E4%B8%8B"
  },
  {
    "id": 439,
    "kanji": "左見右見",
    "reading": "とみこうみ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "あちこちを見回すさまです。",
    "source": "https://kotobank.jp/word/%E5%B7%A6"
  },
  {
    "id": 440,
    "kanji": "中務",
    "reading": "なかつかさ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "朝廷で宮中の事務を担当した役所です。",
    "source": "https://kotobank.jp/word/%E4%B8%AD"
  },
  {
    "id": 441,
    "kanji": "就中",
    "reading": "なかんずく",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "とりわけ、その中でも特にという意味です。",
    "source": "https://kotobank.jp/word/%E4%B8%AD"
  },
  {
    "id": 442,
    "kanji": "前栽",
    "reading": "せんざい",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "庭に植えた草木です。",
    "source": "https://kotobank.jp/word/%E5%89%8D"
  },
  {
    "id": 443,
    "kanji": "後込",
    "reading": "しりごみ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "怖じたり困ったりして後ずさりすることです。",
    "source": "https://kotobank.jp/word/%E5%BE%8C"
  },
  {
    "id": 444,
    "kanji": "南瓜",
    "reading": "かぼちゃ",
    "category": "食べ物",
    "difficulty": "中級",
    "explanation": "食用になるカボチャです。",
    "source": "https://kotobank.jp/word/%E5%8D%97"
  },
  {
    "id": 445,
    "kanji": "北叟笑",
    "reading": "ほくそえむ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "得意げにひそかに笑うことです。",
    "source": "https://kotobank.jp/word/%E5%8C%97"
  },
  {
    "id": 446,
    "kanji": "外郎",
    "reading": "ういろう",
    "category": "食べ物",
    "difficulty": "上級",
    "explanation": "米粉などを蒸して作る菓子です。",
    "source": "https://kotobank.jp/word/%E5%A4%96"
  },
  {
    "id": 447,
    "kanji": "外様",
    "reading": "とざま",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "仲間に入らない外部の人を指します。",
    "source": "https://kotobank.jp/word/%E5%A4%96"
  },
  {
    "id": 448,
    "kanji": "幸先",
    "reading": "さいさき",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "物事がよい方向に始まりそうな兆しです。",
    "source": "https://kotobank.jp/word/%E5%85%88"
  },
  {
    "id": 449,
    "kanji": "先蹤",
    "reading": "せんしょう",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "先人が残した足跡や事例です。",
    "source": "https://kotobank.jp/word/%E5%85%88"
  },
  {
    "id": 450,
    "kanji": "舳先",
    "reading": "へさき",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "船の前端です。",
    "source": "https://kotobank.jp/word/%E5%85%88"
  },
  {
    "id": 451,
    "kanji": "早稲",
    "reading": "わせ",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "早く実る稲の品種です。",
    "source": "https://kotobank.jp/word/%E6%97%A9"
  },
  {
    "id": 452,
    "kanji": "去年",
    "reading": "こぞ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "昨年を指す古い言い方です。",
    "source": "https://kotobank.jp/word/%E5%B9%B4"
  },
  {
    "id": 453,
    "kanji": "一年",
    "reading": "ひととせ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "一年間を指す古い言い方です。",
    "source": "https://kotobank.jp/word/%E5%B9%B4"
  },
  {
    "id": 136,
    "kanji": "時雨",
    "reading": "しぐれ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "秋から冬にかけて降る通り雨です。",
    "source": "https://kotobank.jp/word/%E6%99%82"
  },
  {
    "id": 454,
    "kanji": "時化",
    "reading": "しけ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "海が荒れて船を出しにくい状態です。",
    "source": "https://kotobank.jp/word/%E6%99%82"
  },
  {
    "id": 455,
    "kanji": "天晴",
    "reading": "あっぱれ",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "感心するほど見事であることです。",
    "source": "https://kotobank.jp/word/%E5%A4%A9"
  },
  {
    "id": 456,
    "kanji": "天蚕糸",
    "reading": "てぐす",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "釣り糸などに使う丈夫な糸です。",
    "source": "https://kotobank.jp/word/%E5%A4%A9"
  },
  {
    "id": 457,
    "kanji": "天麩羅",
    "reading": "てんぷら",
    "category": "食べ物",
    "difficulty": "上級",
    "explanation": "食材に衣を付けて揚げた料理です。",
    "source": "https://kotobank.jp/word/%E5%A4%A9"
  },
  {
    "id": 458,
    "kanji": "天鵞絨",
    "reading": "びろーど",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "ベルベットと呼ばれる柔らかい織物です。",
    "source": "https://kotobank.jp/word/%E5%A4%A9"
  },
  {
    "id": 459,
    "kanji": "驀地",
    "reading": "まっしぐら",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "目標へ勢いよく進むさまです。",
    "source": "https://kotobank.jp/word/%E5%9C%B0"
  },
  {
    "id": 460,
    "kanji": "旅籠",
    "reading": "はたご",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "昔の街道にあった旅人の宿です。",
    "source": "https://kotobank.jp/word/%E6%97%85"
  },
  {
    "id": 461,
    "kanji": "道産子",
    "reading": "どさんこ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "北海道生まれの人や馬を指します。",
    "source": "https://kotobank.jp/word/%E9%81%93"
  },
  {
    "id": 462,
    "kanji": "野老",
    "reading": "ところ",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "ヤマノイモ科のつる植物です。",
    "source": "https://kotobank.jp/word/%E9%87%8E"
  },
  {
    "id": 463,
    "kanji": "野点",
    "reading": "のだて",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "屋外で茶をたてて楽しむことです。",
    "source": "https://kotobank.jp/word/%E9%87%8E"
  },
  {
    "id": 464,
    "kanji": "野良",
    "reading": "のら",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "人の手を加えていない野外です。",
    "source": "https://kotobank.jp/word/%E9%87%8E"
  },
  {
    "id": 72,
    "kanji": "林檎",
    "reading": "りんご",
    "category": "食べ物",
    "difficulty": "中級",
    "explanation": "果物のリンゴです。",
    "source": "https://kotobank.jp/word/%E6%9E%97"
  },
  {
    "id": 465,
    "kanji": "蟀谷",
    "reading": "こめかみ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "目と耳の間にある頭の部分です。",
    "source": "https://kotobank.jp/word/%E8%B0%B7"
  },
  {
    "id": 466,
    "kanji": "荒磯",
    "reading": "ありそ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "波が荒く打ち寄せる磯です。",
    "source": "https://kotobank.jp/word/%E7%A3%AF"
  },
  {
    "id": 467,
    "kanji": "磯馴松",
    "reading": "そなれまつ",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "海岸の岩場に育つ松です。",
    "source": "https://kotobank.jp/word/%E7%A3%AF"
  },
  {
    "id": 468,
    "kanji": "泥障",
    "reading": "あおり",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "馬の腹の横につける泥よけです。",
    "source": "https://kotobank.jp/word/%E6%B3%A5"
  },
  {
    "id": 469,
    "kanji": "泥濘",
    "reading": "ぬかるみ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "地面が泥でぬかるんでいることです。",
    "source": "https://kotobank.jp/word/%E6%B3%A5"
  },
  {
    "id": 470,
    "kanji": "砂子",
    "reading": "いさご",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "細かい砂や小石を指す古語です。",
    "source": "https://kotobank.jp/word/%E7%A0%82"
  },
  {
    "id": 471,
    "kanji": "狭霧",
    "reading": "さぎり",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "薄く立ちこめる霧です。",
    "source": "https://kotobank.jp/word/%E9%9C%A7"
  },
  {
    "id": 472,
    "kanji": "百日紅",
    "reading": "さるすべり",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "夏に鮮やかな花を咲かせる木です。",
    "source": "https://kotobank.jp/word/%E7%B4%85"
  },
  {
    "id": 473,
    "kanji": "紅型",
    "reading": "びんがた",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "沖縄に伝わる型染めの布です。",
    "source": "https://kotobank.jp/word/%E7%B4%85"
  },
  {
    "id": 474,
    "kanji": "紅絹",
    "reading": "もみ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "赤く染めた薄い絹織物です。",
    "source": "https://kotobank.jp/word/%E7%B4%85"
  },
  {
    "id": 475,
    "kanji": "紅裏",
    "reading": "もみうら",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "着物の裏に使う赤い絹布です。",
    "source": "https://kotobank.jp/word/%E7%B4%85"
  },
  {
    "id": 476,
    "kanji": "紫雲英",
    "reading": "げんげ",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "レンゲソウを指す漢字表記です。",
    "source": "https://kotobank.jp/word/%E7%B4%AB"
  },
  {
    "id": 477,
    "kanji": "鉄床",
    "reading": "かなとこ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "鍛冶で金属を打つときの台です。",
    "source": "https://kotobank.jp/word/%E9%89%84"
  },
  {
    "id": 478,
    "kanji": "鉄刀木",
    "reading": "たがやさん",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "硬い木材として使われるマメ科の木です。",
    "source": "https://kotobank.jp/word/%E9%89%84"
  },
  {
    "id": 479,
    "kanji": "銅鈸",
    "reading": "どうばち",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "打ち合わせて鳴らす金属製の楽器です。",
    "source": "https://kotobank.jp/word/%E9%8A%85"
  },
  {
    "id": 480,
    "kanji": "銅鑼",
    "reading": "どら",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "丸い金属を打って鳴らす楽器です。",
    "source": "https://kotobank.jp/word/%E9%8A%85"
  },
  {
    "id": 481,
    "kanji": "糸遊",
    "reading": "いとゆう",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "陽炎のように揺れて見えるものです。",
    "source": "https://kotobank.jp/word/%E7%B3%B8"
  },
  {
    "id": 482,
    "kanji": "絓糸",
    "reading": "しけいと",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "織物を作るときに使う糸です。",
    "source": "https://kotobank.jp/word/%E7%B3%B8"
  },
  {
    "id": 483,
    "kanji": "糸瓜",
    "reading": "へちま",
    "category": "食べ物",
    "difficulty": "上級",
    "explanation": "細長い実を食べるヘチマです。",
    "source": "https://kotobank.jp/word/%E7%B3%B8"
  },
  {
    "id": 484,
    "kanji": "荒布",
    "reading": "あらめ",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "海に生える食用の海藻です。",
    "source": "https://kotobank.jp/word/%E5%B8%83"
  },
  {
    "id": 485,
    "kanji": "御布令",
    "reading": "おふれ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "上から出された知らせや命令です。",
    "source": "https://kotobank.jp/word/%E5%B8%83"
  },
  {
    "id": 486,
    "kanji": "搗布",
    "reading": "かじめ",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "岩場に生える褐色の海藻です。",
    "source": "https://kotobank.jp/word/%E5%B8%83"
  },
  {
    "id": 487,
    "kanji": "胞衣",
    "reading": "えな",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "出産時に胎児を包んでいた膜などです。",
    "source": "https://kotobank.jp/word/%E8%A1%A3"
  },
  {
    "id": 488,
    "kanji": "被衣",
    "reading": "かずき",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "頭からかぶって顔を隠す昔の衣服です。",
    "source": "https://kotobank.jp/word/%E8%A1%A3"
  },
  {
    "id": 489,
    "kanji": "紙衣",
    "reading": "かみこ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "紙で作った昔の衣服です。",
    "source": "https://kotobank.jp/word/%E8%A1%A3"
  },
  {
    "id": 490,
    "kanji": "直衣",
    "reading": "のうし",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "公家がふだん着た衣服です。",
    "source": "https://kotobank.jp/word/%E8%A1%A3"
  },
  {
    "id": 491,
    "kanji": "紙縒",
    "reading": "こより",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "紙を細くねじって作ったひもです。",
    "source": "https://kotobank.jp/word/%E7%B4%99"
  },
  {
    "id": 492,
    "kanji": "紙魚",
    "reading": "しみ",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "本の紙などを食べる小さな昆虫です。",
    "source": "https://kotobank.jp/word/%E7%B4%99"
  },
  {
    "id": 493,
    "kanji": "文色",
    "reading": "あいろ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "模様や物事のようすです。「文色が分からない」のように使います。",
    "source": "https://kotobank.jp/word/%E6%96%87"
  },
  {
    "id": 494,
    "kanji": "文目",
    "reading": "あやめ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "物の筋道や区別を指す古い言葉です。",
    "source": "https://kotobank.jp/word/%E6%96%87"
  },
  {
    "id": 495,
    "kanji": "倭文",
    "reading": "しず",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "模様を織り込んだ古い織物です。",
    "source": "https://kotobank.jp/word/%E6%96%87"
  },
  {
    "id": 496,
    "kanji": "文机",
    "reading": "ふづくえ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "書き物をするときに使う低い机です。",
    "source": "https://kotobank.jp/word/%E6%96%87"
  },
  {
    "id": 497,
    "kanji": "言伝",
    "reading": "ことづて",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "人から人へ言葉を伝えることです。",
    "source": "https://kotobank.jp/word/%E8%A8%80"
  },
  {
    "id": 498,
    "kanji": "私語",
    "reading": "ささめごと",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "ひそひそと小声で話すことです。",
    "source": "https://kotobank.jp/word/%E8%AA%9E"
  },
  {
    "id": 499,
    "kanji": "琴柱",
    "reading": "ことじ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "琴の弦を支える小さな柱です。",
    "source": "https://kotobank.jp/word/%E7%90%B4"
  },
  {
    "id": 500,
    "kanji": "和琴",
    "reading": "わごん",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "日本古来の琴の一種です。",
    "source": "https://kotobank.jp/word/%E7%90%B4"
  },
  {
    "id": 501,
    "kanji": "熊襲",
    "reading": "くまそ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "古代九州南部にいたと伝わる人々です。",
    "source": "https://kotobank.jp/word/%E7%86%8A"
  },
  {
    "id": 502,
    "kanji": "虎杖",
    "reading": "いたどり",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "食用にもなるタデ科の多年草です。",
    "source": "https://kotobank.jp/word/%E8%99%8E"
  },
  {
    "id": 503,
    "kanji": "猟虎",
    "reading": "らっこ",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "海で貝などを食べるラッコです。",
    "source": "https://kotobank.jp/word/%E8%99%8E"
  },
  {
    "id": 504,
    "kanji": "狐狗狸",
    "reading": "こっくり",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "占い遊びの一種です。",
    "source": "https://kotobank.jp/word/%E7%8B%90"
  },
  {
    "id": 505,
    "kanji": "狐臭",
    "reading": "わきが",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "わきの下から出る独特のにおいです。",
    "source": "https://kotobank.jp/word/%E7%8B%90"
  },
  {
    "id": 506,
    "kanji": "蟒蛇",
    "reading": "うわばみ",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "大きなヘビを指します。",
    "source": "https://kotobank.jp/word/%E8%9B%87"
  },
  {
    "id": 507,
    "kanji": "赤楝蛇",
    "reading": "やまかがし",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "首の赤い模様が目立つヘビです。",
    "source": "https://kotobank.jp/word/%E8%9B%87"
  },
  {
    "id": 508,
    "kanji": "雀斑",
    "reading": "そばかす",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "顔などにできる小さな茶色い斑点です。",
    "source": "https://kotobank.jp/word/%E9%9B%80"
  },
  {
    "id": 509,
    "kanji": "麻雀",
    "reading": "まーじゃん",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "四人で牌を使って遊ぶゲームです。",
    "source": "https://kotobank.jp/word/%E9%9B%80"
  },
  {
    "id": 510,
    "kanji": "沙蚕",
    "reading": "ごかい",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "海底の泥にすむゴカイです。",
    "source": "https://kotobank.jp/word/%E8%9A%95"
  },
  {
    "id": 511,
    "kanji": "蚕豆",
    "reading": "そらまめ",
    "category": "食べ物",
    "difficulty": "上級",
    "explanation": "空豆を指す漢字表記です。",
    "source": "https://kotobank.jp/word/%E8%9A%95"
  },
  {
    "id": 512,
    "kanji": "天蚕",
    "reading": "やままゆ",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "野外で育つカイコガの仲間です。",
    "source": "https://kotobank.jp/word/%E8%9A%95"
  },
  {
    "id": 513,
    "kanji": "嫩葉",
    "reading": "わかば",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "芽吹いたばかりの柔らかい葉です。",
    "source": "https://kotobank.jp/word/%E8%91%89"
  },
  {
    "id": 514,
    "kanji": "病葉",
    "reading": "わくらば",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "色が変わって枯れかけた葉です。",
    "source": "https://kotobank.jp/word/%E8%91%89"
  },
  {
    "id": 515,
    "kanji": "芋茎",
    "reading": "ずいき",
    "category": "食べ物",
    "difficulty": "上級",
    "explanation": "サトイモの葉柄を食用にしたものです。",
    "source": "https://kotobank.jp/word/%E8%8C%8E"
  },
  {
    "id": 516,
    "kanji": "根扱",
    "reading": "ねこぎ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "根から抜き取ることを指します。",
    "source": "https://kotobank.jp/word/%E6%A0%B9"
  },
  {
    "id": 517,
    "kanji": "根刮",
    "reading": "ねこそぎ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "残らずすべて取り尽くすことです。",
    "source": "https://kotobank.jp/word/%E6%A0%B9"
  },
  {
    "id": 518,
    "kanji": "棠梨",
    "reading": "ずみ",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "小さな実をつけるバラ科の木です。",
    "source": "https://kotobank.jp/word/%E6%A2%A8"
  },
  {
    "id": 519,
    "kanji": "団栗",
    "reading": "どんぐり",
    "category": "食べ物",
    "difficulty": "上級",
    "explanation": "木から落ちるドングリです。",
    "source": "https://kotobank.jp/word/%E6%A0%97"
  },
  {
    "id": 520,
    "kanji": "栗鼠",
    "reading": "りす",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "木の実を食べる小型の哺乳類です。",
    "source": "https://kotobank.jp/word/%E6%A0%97"
  },
  {
    "id": 521,
    "kanji": "辛夷",
    "reading": "こぶし",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "春に白い花を咲かせる木です。",
    "source": "https://kotobank.jp/word/%E8%BE%9B"
  },
  {
    "id": 522,
    "kanji": "唐辛子",
    "reading": "とうがらし",
    "category": "食べ物",
    "difficulty": "中級",
    "explanation": "辛みをつけるトウガラシです。",
    "source": "https://kotobank.jp/word/%E8%BE%9B"
  },
  {
    "id": 523,
    "kanji": "甜瓜",
    "reading": "まくわうり",
    "category": "食べ物",
    "difficulty": "超難問",
    "explanation": "マクワウリと呼ばれるウリです。",
    "source": "https://kotobank.jp/word/%E7%93%9C"
  },
  {
    "id": 524,
    "kanji": "瞿麦",
    "reading": "なでしこ",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "ナデシコを指す別の漢字表記です。",
    "source": "https://kotobank.jp/word/%E9%BA%A6"
  },
  {
    "id": 525,
    "kanji": "麦稈",
    "reading": "むぎわら",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "麦の茎を乾かしたものです。",
    "source": "https://kotobank.jp/word/%E9%BA%A6"
  },
  {
    "id": 526,
    "kanji": "苦塩",
    "reading": "にがり",
    "category": "食べ物",
    "difficulty": "上級",
    "explanation": "塩づくりの副産物、にがりです。",
    "source": "https://kotobank.jp/word/%E5%A1%A9"
  },
  {
    "id": 527,
    "kanji": "味酒",
    "reading": "うまさけ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "うまい酒をたたえて言う古語です。",
    "source": "https://kotobank.jp/word/%E5%91%B3"
  },
  {
    "id": 528,
    "kanji": "味噌",
    "reading": "みそ",
    "category": "食べ物",
    "difficulty": "中級",
    "explanation": "大豆から作る発酵調味料です。",
    "source": "https://kotobank.jp/word/%E5%91%B3"
  },
  {
    "id": 529,
    "kanji": "味醂",
    "reading": "みりん",
    "category": "食べ物",
    "difficulty": "上級",
    "explanation": "料理の味付けに使う甘い酒です。",
    "source": "https://kotobank.jp/word/%E5%91%B3"
  },
  {
    "id": 530,
    "kanji": "湯麺",
    "reading": "たんめん",
    "category": "食べ物",
    "difficulty": "上級",
    "explanation": "野菜などをのせた汁入りの麺料理です。",
    "source": "https://kotobank.jp/word/%E9%BA%BA"
  },
  {
    "id": 531,
    "kanji": "麺麭",
    "reading": "ぱん",
    "category": "食べ物",
    "difficulty": "超難問",
    "explanation": "小麦粉を焼いて作るパンです。",
    "source": "https://kotobank.jp/word/%E9%BA%BA"
  },
  {
    "id": 532,
    "kanji": "拉麺",
    "reading": "らーめん",
    "category": "食べ物",
    "difficulty": "中級",
    "explanation": "スープに入れた中華麺です。",
    "source": "https://kotobank.jp/word/%E9%BA%BA"
  },
  {
    "id": 533,
    "kanji": "椀飯",
    "reading": "おうばん",
    "category": "食べ物",
    "difficulty": "超難問",
    "explanation": "人を招いてもてなす食事や宴会です。",
    "source": "https://kotobank.jp/word/%E9%A3%AF"
  },
  {
    "id": 534,
    "kanji": "続飯",
    "reading": "そくい",
    "category": "食べ物",
    "difficulty": "超難問",
    "explanation": "飯粒を練って作ったのりです。",
    "source": "https://kotobank.jp/word/%E9%A3%AF"
  },
  {
    "id": 535,
    "kanji": "飯匙倩",
    "reading": "はぶ",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "ハブを指す難しい漢字表記です。",
    "source": "https://kotobank.jp/word/%E9%A3%AF"
  },
  {
    "id": 536,
    "kanji": "都都一",
    "reading": "どどいつ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "三味線に合わせて歌う俗曲の一つです。",
    "source": "https://kotobank.jp/word/%E4%B8%80"
  },
  {
    "id": 537,
    "kanji": "一入",
    "reading": "ひとしお",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "前よりいっそう程度が増すことです。",
    "source": "https://kotobank.jp/word/%E4%B8%80"
  },
  {
    "id": 538,
    "kanji": "二合半",
    "reading": "こなから",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "一升の四分の一ほどの酒の量です。",
    "source": "https://kotobank.jp/word/%E4%BA%8C"
  },
  {
    "id": 539,
    "kanji": "十重二十重",
    "reading": "とえはたえ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "幾重にも重なって取り囲むことです。",
    "source": "https://kotobank.jp/word/%E4%BA%8C"
  },
  {
    "id": 540,
    "kanji": "三鞭酒",
    "reading": "しゃんぱん",
    "category": "食べ物",
    "difficulty": "超難問",
    "explanation": "発泡性のワイン、シャンパンです。",
    "source": "https://kotobank.jp/word/%E4%B8%89"
  },
  {
    "id": 541,
    "kanji": "三和土",
    "reading": "たたき",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "土や石をたたき固めた床です。",
    "source": "https://kotobank.jp/word/%E4%B8%89"
  },
  {
    "id": 542,
    "kanji": "三椏",
    "reading": "みつまた",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "枝が三つに分かれる和紙の原料の木です。",
    "source": "https://kotobank.jp/word/%E4%B8%89"
  },
  {
    "id": 543,
    "kanji": "四阿",
    "reading": "あずまや",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "庭に設ける屋根付きの休み所です。",
    "source": "https://kotobank.jp/word/%E5%9B%9B"
  },
  {
    "id": 544,
    "kanji": "五加",
    "reading": "うこぎ",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "薬用にもされるウコギ科の木です。",
    "source": "https://kotobank.jp/word/%E4%BA%94"
  },
  {
    "id": 545,
    "kanji": "五月蠅",
    "reading": "うるさい",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "うるさく感じることを表す漢字表記です。",
    "source": "https://kotobank.jp/word/%E4%BA%94"
  },
  {
    "id": 546,
    "kanji": "七五三縄",
    "reading": "しめなわ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "神聖な場所に張るしめ縄です。",
    "source": "https://kotobank.jp/word/%E4%BA%94"
  },
  {
    "id": 547,
    "kanji": "双六",
    "reading": "すごろく",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "さいころを使って遊ぶ盤上の遊びです。",
    "source": "https://kotobank.jp/word/%E5%85%AD"
  },
  {
    "id": 548,
    "kanji": "八幡船",
    "reading": "ばはんせん",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "昔、東アジアの海を襲った海賊船です。",
    "source": "https://kotobank.jp/word/%E5%85%AB"
  },
  {
    "id": 549,
    "kanji": "八百長",
    "reading": "やおちょう",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "勝負の結果をひそかに取り決めることです。",
    "source": "https://kotobank.jp/word/%E5%85%AB"
  },
  {
    "id": 550,
    "kanji": "八尺瓊",
    "reading": "やさかに",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "三種の神器の勾玉の名に使う言葉です。",
    "source": "https://kotobank.jp/word/%E5%85%AB"
  },
  {
    "id": 551,
    "kanji": "八洲",
    "reading": "やしま",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "日本の国土を表す古い呼び名です。",
    "source": "https://kotobank.jp/word/%E5%85%AB"
  },
  {
    "id": 552,
    "kanji": "八咫",
    "reading": "やた",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "古い長さの単位に由来し、大きいことを表します。",
    "source": "https://kotobank.jp/word/%E5%85%AB"
  },
  {
    "id": 553,
    "kanji": "八岐大蛇",
    "reading": "やまたのおろち",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "神話に登場する八つの頭を持つ大蛇です。",
    "source": "https://kotobank.jp/word/%E5%85%AB"
  },
  {
    "id": 554,
    "kanji": "十姉妹",
    "reading": "じゅうしまつ",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "小さなフィンチ類の飼い鳥です。",
    "source": "https://kotobank.jp/word/%E5%8D%81"
  },
  {
    "id": 555,
    "kanji": "十露盤",
    "reading": "そろばん",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "数を計算するためのそろばんです。",
    "source": "https://kotobank.jp/word/%E5%8D%81"
  },
  {
    "id": 556,
    "kanji": "百舌",
    "reading": "もず",
    "category": "動物・鳥・魚",
    "difficulty": "上級",
    "explanation": "ほかの鳥の鳴きまねをする小鳥です。",
    "source": "https://kotobank.jp/word/%E7%99%BE"
  },
  {
    "id": 557,
    "kanji": "八百万",
    "reading": "やおよろず",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "数え切れないほど多いことです。",
    "source": "https://kotobank.jp/word/%E7%99%BE"
  },
  {
    "id": 558,
    "kanji": "反古",
    "reading": "ほご",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "使えなくなった紙や文書です。",
    "source": "https://kotobank.jp/word/%E5%8F%A4"
  },
  {
    "id": 559,
    "kanji": "網代",
    "reading": "あじろ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "細く削った竹などを編んだものです。",
    "source": "https://kotobank.jp/word/%E4%BB%A3"
  },
  {
    "id": 560,
    "kanji": "神楽",
    "reading": "かぐら",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "神にささげる音楽や舞です。",
    "source": "https://kotobank.jp/word/%E7%A5%9E"
  },
  {
    "id": 561,
    "kanji": "随神",
    "reading": "かんながら",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "神の意志のままにという意味です。",
    "source": "https://kotobank.jp/word/%E7%A5%9E"
  },
  {
    "id": 562,
    "kanji": "神籬",
    "reading": "ひもろぎ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "神を迎えるために立てる神聖な場所です。",
    "source": "https://kotobank.jp/word/%E7%A5%9E"
  },
  {
    "id": 563,
    "kanji": "仏掌薯",
    "reading": "つくねいも",
    "category": "食べ物",
    "difficulty": "超難問",
    "explanation": "ツクネイモと呼ばれる山芋です。",
    "source": "https://kotobank.jp/word/%E4%BB%8F"
  },
  {
    "id": 564,
    "kanji": "寿詞",
    "reading": "よごと",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "祝いの言葉を述べることです。",
    "source": "https://kotobank.jp/word/%E5%AF%BF"
  },
  {
    "id": 565,
    "kanji": "影向",
    "reading": "ようごう",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "仏や神が人の前に現れることです。",
    "source": "https://kotobank.jp/word/%E5%BD%B1"
  },
  {
    "id": 566,
    "kanji": "為体",
    "reading": "ていたらく",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "ありさまや態度を指す言葉です。",
    "source": "https://kotobank.jp/word/%E4%BD%93"
  },
  {
    "id": 567,
    "kanji": "薬缶",
    "reading": "やかん",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "湯を沸かすための容器です。",
    "source": "https://kotobank.jp/word/%E8%96%AC"
  },
  {
    "id": 568,
    "kanji": "薬研",
    "reading": "やげん",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "薬草を細かくすりつぶす道具です。",
    "source": "https://kotobank.jp/word/%E8%96%AC"
  },
  {
    "id": 569,
    "kanji": "秦皮",
    "reading": "とねりこ",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "トネリコの樹皮を指す言葉です。",
    "source": "https://kotobank.jp/word/%E7%9A%AE"
  },
  {
    "id": 570,
    "kanji": "皮蛋",
    "reading": "ぴーたん",
    "category": "食べ物",
    "difficulty": "上級",
    "explanation": "アヒルの卵を加工した食品です。",
    "source": "https://kotobank.jp/word/%E7%9A%AE"
  },
  {
    "id": 571,
    "kanji": "檜皮",
    "reading": "ひわだ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "ヒノキの樹皮です。",
    "source": "https://kotobank.jp/word/%E7%9A%AE"
  },
  {
    "id": 572,
    "kanji": "髫髪",
    "reading": "うない",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "幼い子の髪形を指す古語です。",
    "source": "https://kotobank.jp/word/%E9%AB%AA"
  },
  {
    "id": 573,
    "kanji": "角髪",
    "reading": "みずら",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "髪を左右に分けて結う古い髪形です。",
    "source": "https://kotobank.jp/word/%E9%AB%AA"
  },
  {
    "id": 574,
    "kanji": "仙人掌",
    "reading": "さぼてん",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "乾燥した土地にも育つサボテンです。",
    "source": "https://kotobank.jp/word/%E6%8E%8C"
  },
  {
    "id": 575,
    "kanji": "胸繋",
    "reading": "むながい",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "馬具で胸の周りにつける革ひもです。",
    "source": "https://kotobank.jp/word/%E8%83%B8"
  },
  {
    "id": 576,
    "kanji": "産霊",
    "reading": "むすび",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "万物を生み出す神秘的な力です。",
    "source": "https://kotobank.jp/word/%E7%94%A3"
  },
  {
    "id": 577,
    "kanji": "稲荷",
    "reading": "いなり",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "稲の神を祭る社に関係する言葉です。",
    "source": "https://kotobank.jp/word/%E7%A8%B2"
  },
  {
    "id": 578,
    "kanji": "稲熱病",
    "reading": "いもちびょう",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "稲の葉に病斑ができる病気です。",
    "source": "https://kotobank.jp/word/%E7%A8%B2"
  },
  {
    "id": 579,
    "kanji": "粳稲",
    "reading": "うるしね",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "粘り気の少ない米を実らせる稲です。",
    "source": "https://kotobank.jp/word/%E7%A8%B2"
  },
  {
    "id": 580,
    "kanji": "陸稲",
    "reading": "おかぼ",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "畑で栽培する稲です。",
    "source": "https://kotobank.jp/word/%E7%A8%B2"
  },
  {
    "id": 581,
    "kanji": "税稲",
    "reading": "ちからしね",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "古代に税として納めた稲です。",
    "source": "https://kotobank.jp/word/%E7%A8%B2"
  },
  {
    "id": 582,
    "kanji": "稲架",
    "reading": "はさ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "刈った稲を干すための木組みです。",
    "source": "https://kotobank.jp/word/%E7%A8%B2"
  },
  {
    "id": 583,
    "kanji": "揚繰網",
    "reading": "あぐりあみ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "魚を捕るための大型の網です。",
    "source": "https://kotobank.jp/word/%E6%8F%9A"
  },
  {
    "id": 584,
    "kanji": "刃毀",
    "reading": "はこぼれ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "刃の一部が欠けることです。",
    "source": "https://kotobank.jp/word/%E5%88%83"
  },
  {
    "id": 585,
    "kanji": "剃刀",
    "reading": "かみそり",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "ひげや髪をそる小さな刃物です。",
    "source": "https://kotobank.jp/word/%E5%88%80"
  },
  {
    "id": 586,
    "kanji": "太刀",
    "reading": "たち",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "長い刃を持つ日本の刀です。",
    "source": "https://kotobank.jp/word/%E5%88%80"
  },
  {
    "id": 587,
    "kanji": "刀自",
    "reading": "とじ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "年配の女性を敬って呼ぶ古語です。",
    "source": "https://kotobank.jp/word/%E5%88%80"
  },
  {
    "id": 588,
    "kanji": "薙刀",
    "reading": "なぎなた",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "長い柄の先に刃を付けた武器です。",
    "source": "https://kotobank.jp/word/%E5%88%80"
  },
  {
    "id": 589,
    "kanji": "刀豆",
    "reading": "なたまめ",
    "category": "食べ物",
    "difficulty": "超難問",
    "explanation": "長いさやをつけるマメ科の植物です。",
    "source": "https://kotobank.jp/word/%E5%88%80"
  },
  {
    "id": 590,
    "kanji": "佩刀",
    "reading": "はかし",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "身につけて携える刀です。",
    "source": "https://kotobank.jp/word/%E5%88%80"
  },
  {
    "id": 591,
    "kanji": "剣呑",
    "reading": "けんのん",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "危険で油断できないさまです。",
    "source": "https://kotobank.jp/word/%E5%89%A3"
  },
  {
    "id": 592,
    "kanji": "弓場",
    "reading": "ゆば",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "弓を使う場所を指す言葉です。",
    "source": "https://kotobank.jp/word/%E5%BC%93"
  },
  {
    "id": 593,
    "kanji": "弓勢",
    "reading": "ゆんぜい",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "弓を引く勢いや力です。",
    "source": "https://kotobank.jp/word/%E5%BC%93"
  },
  {
    "id": 594,
    "kanji": "猟矢",
    "reading": "さつや",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "狩猟に用いる矢です。",
    "source": "https://kotobank.jp/word/%E7%9F%A2"
  },
  {
    "id": 595,
    "kanji": "征矢",
    "reading": "そや",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "遠くの的に射る矢です。",
    "source": "https://kotobank.jp/word/%E7%9F%A2"
  },
  {
    "id": 596,
    "kanji": "甲矢",
    "reading": "はや",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "一本目に射る矢です。",
    "source": "https://kotobank.jp/word/%E7%9F%A2"
  },
  {
    "id": 597,
    "kanji": "比丘",
    "reading": "びく",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "仏教の修行者である僧です。",
    "source": "https://kotobank.jp/word/%E4%B8%98"
  },
  {
    "id": 598,
    "kanji": "公孫樹",
    "reading": "いちょう",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "イチョウを指す別の漢字表記です。",
    "source": "https://kotobank.jp/word/%E6%A8%B9"
  },
  {
    "id": 599,
    "kanji": "樸樹",
    "reading": "むくのき",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "ムクノキを指す漢字表記です。",
    "source": "https://kotobank.jp/word/%E6%A8%B9"
  },
  {
    "id": 600,
    "kanji": "枝垂",
    "reading": "しだれ",
    "category": "植物・花",
    "difficulty": "上級",
    "explanation": "枝や花が下に垂れることです。",
    "source": "https://kotobank.jp/word/%E6%9E%9D"
  },
  {
    "id": 601,
    "kanji": "麻幹",
    "reading": "おがら",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "麻の茎から皮をはぎ取ったものです。",
    "source": "https://kotobank.jp/word/%E5%B9%B9"
  },
  {
    "id": 602,
    "kanji": "椿象",
    "reading": "かめむし",
    "category": "動物・鳥・魚",
    "difficulty": "超難問",
    "explanation": "強いにおいを出すカメムシです。",
    "source": "https://kotobank.jp/word/%E6%A4%BF"
  },
  {
    "id": 603,
    "kanji": "香椿",
    "reading": "ちゃんちん",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "若葉を食用にするセンダン科の木です。",
    "source": "https://kotobank.jp/word/%E6%A4%BF"
  },
  {
    "id": 33,
    "kanji": "向日葵",
    "reading": "ひまわり",
    "category": "植物・花",
    "difficulty": "中級",
    "explanation": "大きな黄色い花を咲かせるヒマワリです。",
    "source": "https://kotobank.jp/word/%E8%91%B5"
  },
  {
    "id": 604,
    "kanji": "蒲葵",
    "reading": "びろう",
    "category": "植物・花",
    "difficulty": "超難問",
    "explanation": "葉が扇のように広がるヤシ科の植物です。",
    "source": "https://kotobank.jp/word/%E8%91%B5"
  },
  {
    "id": 605,
    "kanji": "山葵",
    "reading": "わさび",
    "category": "食べ物",
    "difficulty": "中級",
    "explanation": "辛い根を薬味にするワサビです。",
    "source": "https://kotobank.jp/word/%E8%91%B5"
  },
  {
    "id": 606,
    "kanji": "投網",
    "reading": "とあみ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "魚を捕るために投げる網です。",
    "source": "https://kotobank.jp/word/%E7%B6%B2"
  },
  {
    "id": 607,
    "kanji": "旋網",
    "reading": "まきあみ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "船から回して魚を囲む網です。",
    "source": "https://kotobank.jp/word/%E7%B6%B2"
  },
  {
    "id": 608,
    "kanji": "釣瓶",
    "reading": "つるべ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "井戸から水をくみ上げる桶です。",
    "source": "https://kotobank.jp/word/%E9%87%A3"
  },
  {
    "id": 609,
    "kanji": "合羽",
    "reading": "かっぱ",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "雨を防ぐために着る上着です。",
    "source": "https://kotobank.jp/word/%E7%BE%BD"
  },
  {
    "id": 141,
    "kanji": "陽炎",
    "reading": "かげろう",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "地面近くの空気が揺れて見える現象です。",
    "source": "https://kotobank.jp/word/%E9%99%BD%E7%82%8E"
  },
  {
    "id": 142,
    "kanji": "蜃気楼",
    "reading": "しんきろう",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "光の屈折で遠くの景色が浮かんで見える現象です。",
    "source": "https://kotobank.jp/word/%E8%9C%83%E6%B0%97%E6%A5%BC"
  },
  {
    "id": 143,
    "kanji": "朧月",
    "reading": "おぼろづき",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "かすんでぼんやり見える月です。",
    "source": "https://kotobank.jp/word/%E6%9C%A7%E6%9C%88"
  },
  {
    "id": 146,
    "kanji": "黄昏",
    "reading": "たそがれ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "日が沈むころの薄暗い時間です。",
    "source": "https://kotobank.jp/word/%E9%BB%84%E6%98%8F"
  },
  {
    "id": 150,
    "kanji": "躊躇",
    "reading": "ちゅうちょ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "迷ってすぐに決心できないことです。",
    "source": "https://kotobank.jp/word/%E8%BA%8A%E8%BA%87-567698"
  },
  {
    "id": 152,
    "kanji": "邂逅",
    "reading": "かいこう",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "思いがけず人と出会うことです。",
    "source": "https://kotobank.jp/word/%E9%82%82%E9%80%85"
  },
  {
    "id": 153,
    "kanji": "憂鬱",
    "reading": "ゆううつ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "気分が晴れず、沈んでいることです。",
    "source": "https://kotobank.jp/word/%E6%86%82%E9%AC%B1"
  },
  {
    "id": 156,
    "kanji": "忸怩",
    "reading": "じくじ",
    "category": "難読熟語・その他",
    "difficulty": "超難問",
    "explanation": "自分のことを深く恥じ入るさまです。",
    "source": "https://kotobank.jp/word/%E5%BF%B8%E6%80%A9-518214"
  },
  {
    "id": 157,
    "kanji": "矜持",
    "reading": "きょうじ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "自分の能力や立場に持つ誇りです。",
    "source": "https://kotobank.jp/word/%E7%9F%9C%E6%8C%81"
  },
  {
    "id": 158,
    "kanji": "斟酌",
    "reading": "しんしゃく",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "相手の事情や気持ちを考えてくみ取ることです。",
    "source": "https://kotobank.jp/word/%E6%96%9F%E9%85%8C"
  },
  {
    "id": 159,
    "kanji": "齟齬",
    "reading": "そご",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "物事が食い違って合わないことです。",
    "source": "https://kotobank.jp/word/%E9%BD%9F%E9%BD%AC-554204"
  },
  {
    "id": 160,
    "kanji": "瑕疵",
    "reading": "かし",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "物にある欠点や傷です。",
    "source": "https://kotobank.jp/word/%E7%91%95%E7%96%B5"
  },
  {
    "id": 161,
    "kanji": "膠着",
    "reading": "こうちゃく",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "物事が行き詰まって動かなくなることです。",
    "source": "https://kotobank.jp/word/%E8%86%A0%E7%9D%80"
  },
  {
    "id": 162,
    "kanji": "相槌",
    "reading": "あいづち",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "話を聞きながらうなずき、短く応じることです。",
    "source": "https://kotobank.jp/word/%E7%9B%B8%E6%A7%8C"
  },
  {
    "id": 168,
    "kanji": "静謐",
    "reading": "せいひつ",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "静かで落ち着いていることです。",
    "source": "https://kotobank.jp/word/%E9%9D%99%E8%AC%90-546184"
  },
  {
    "id": 169,
    "kanji": "蒼穹",
    "reading": "そうきゅう",
    "category": "難読熟語・その他",
    "difficulty": "上級",
    "explanation": "青く広がる大空です。",
    "source": "https://kotobank.jp/word/%E8%92%BC%E7%A9%B9-552027"
  },
  {
    "id": 170,
    "kanji": "彼岸",
    "reading": "ひがん",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "春分・秋分を中心とする七日間や仏教で悟りの世界を指します。",
    "source": "https://kotobank.jp/word/%E5%BD%BC%E5%B2%B8"
  },
  {
    "id": 174,
    "kanji": "漸く",
    "reading": "ようやく",
    "category": "難読熟語・その他",
    "difficulty": "中級",
    "explanation": "長く待って、やっとのことです。",
    "source": "https://kotobank.jp/word/%E6%BC%B8%E3%81%8F"
  },
  {
    "id": 38,
    "kanji": "薔薇",
    "reading": "ばら",
    "category": "植物・花",
    "difficulty": "中級",
    "explanation": "香りのある花を咲かせるバラです。",
    "source": "https://kotobank.jp/word/%E8%96%94%E8%96%87"
  },
  {
    "id": 67,
    "kanji": "枇杷",
    "reading": "びわ",
    "category": "食べ物",
    "difficulty": "中級",
    "explanation": "黄色い実を食べる果樹です。",
    "source": "https://kotobank.jp/word/%E6%9E%87%E6%9D%B7"
  },
  {
    "id": 71,
    "kanji": "葡萄",
    "reading": "ぶどう",
    "category": "食べ物",
    "difficulty": "中級",
    "explanation": "房になって実る果物です。",
    "source": "https://kotobank.jp/word/%E8%91%A1%E8%90%84"
  }
];

// 同じジャンルの異なる読みを誤答に使います。表示時には別途シャッフルします。
const QUESTIONS = QUESTION_DATA.map((question, index) => {
  const alternatives = [...new Set(QUESTION_DATA.filter(item => item.category === question.category && item.reading !== question.reading).map(item => item.reading))];
  const choices = [question.reading, ...[0, 1, 2].map(offset => alternatives[(index * 7 + offset) % alternatives.length])];
  return { ...question, choices };
});

if (typeof module !== 'undefined') module.exports = { QUESTIONS, QUESTION_DATA };

