/* 読みと表記を辞典で確認した問題のみ。旧IDは復習記録を守るため保持します。 */
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
  }
];

// 誤答は同じジャンルの別の読みから選び、4択を構成します。
const QUESTIONS = QUESTION_DATA.map((question, index) => {
  const alternatives = QUESTION_DATA.filter(item => item.category === question.category && item.reading !== question.reading).map(item => item.reading);
  const choices = [question.reading, ...[0, 1, 2].map(offset => alternatives[(index * 7 + offset) % alternatives.length])];
  return { ...question, choices };
});

if (typeof module !== 'undefined') module.exports = { QUESTIONS, QUESTION_DATA };

