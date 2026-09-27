# Games

ブラウザで遊べるミニゲームをまとめたリポジトリです。

現在は、テトリスとオセロを収録しています。

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

## フォルダ構成

```text
games
├─ bird_merge
│  ├─ index.html
│  ├─ style.css
│  └─ script.js
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

将来的には、リポジトリ直下に `index.html` を作成し、
ゲーム一覧から各ゲームを直接開けるトップページにする予定です。
