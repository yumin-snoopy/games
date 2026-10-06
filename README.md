# Games

ブラウザで遊べるミニゲームをまとめたリポジトリです。

テトリス・オセロ・2048・ことりマージ・とりとり大作戦・Lights Out・Bird Match Puzzle・数字つなぎパズル・シマエナガの色わけロジックを収録しています。

## ゲーム一覧

### テトリス

ブラウザで遊べるテトリスです。

[テトリスを遊ぶ](https://yumin-snoopy.github.io/games/テトリス/)

### オセロ

ブラウザで遊べるオセロです。

[オセロを遊ぶ](https://yumin-snoopy.github.io/games/オセロ/)

### ことりマージ

鳥を落として、同じ鳥をくっつけながら10種類の鳥を育てるオリジナル物理マージゲームです。
マウス・キーボード・スマートフォンで遊べます。ハイスコアはブラウザに保存されます。

[ことりマージを遊ぶ](https://yumin-snoopy.github.io/games/bird_merge/)

ファイル：`bird_merge/index.html`・`bird_merge/style.css`・`bird_merge/script.js`。
物理演算には Matter.js 0.20.0（CDN）を使用しています。

### とりとり大作戦

エサをためて、すずめ・ふくろう・わしを出撃させるオリジナルのラインディフェンスゲームです。
PC・スマートフォンで1ステージを最後まで遊べます。HTML / CSS / JavaScriptのみで動作します。

[とりとり大作戦を遊ぶ](https://yumin-snoopy.github.io/games/bird_battle/)

操作方法・設定・ファイル構成は [bird_battle/README.md](bird_battle/README.md) をご覧ください。

### Lights Out（ライトアウト）

5×5のライトをすべて消すパズルゲームです。マスを押すと、そのマスと上下左右が切り替わります。

[Lights Outを遊ぶ](https://yumin-snoopy.github.io/games/lights_out/)

遊び方と操作方法は [lights_out/README.md](lights_out/README.md) をご覧ください。

### Bird Match Puzzle

隣り合う鳥を交換して3羽以上そろえる8×8のパズルです。連鎖でスコアを伸ばせます。

[Bird Match Puzzleを遊ぶ](https://yumin-snoopy.github.io/games/bird_match/)

遊び方と操作方法は [bird_match/README.md](bird_match/README.md) をご覧ください。

## フォルダ構成

```text
games
├─ bird_battle
│  ├─ index.html
│  ├─ style.css
│  ├─ script.js
│  ├─ images/
│  └─ README.md
│
├─ 2048
│  ├─ index.html
│  ├─ style.css
│  └─ script.js
│
├─ bird_merge
│  ├─ index.html
│  ├─ style.css
│  └─ script.js
│
├─ bird_match
│  ├─ index.html
│  ├─ style.css
│  ├─ script.js
│  └─ README.md
│
├─ lights_out
│  ├─ index.html
│  ├─ style.css
│  ├─ script.js
│  └─ README.md
│
├─ テトリス
│  ├─ index.html
│  ├─ style.css
│  └─ main.js
│
├─ オセロ
│  ├─ index.html
│  ├─ style.css
│  └─ script.js
│
└─ README.md
```

## 今後について

必要に応じて、新しいゲームをこのリポジトリ内に追加していきます。

リポジトリ直下の `index.html` のゲーム一覧から、各ゲームを直接開けます。

### シマエナガの色わけロジック

各行・各列・各色エリアにシマエナガを1羽ずつ置くロジックパズルです。5レベル、各3問で遊べます。

[シマエナガの色わけロジックを遊ぶ](https://yumin-snoopy.github.io/games/shimaenaga_color_logic/)

遊び方は [shimaenaga_color_logic/README.md](shimaenaga_color_logic/README.md) をご覧ください。
