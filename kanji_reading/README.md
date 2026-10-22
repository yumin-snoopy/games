# 難読漢字チャレンジ

`index.html` をブラウザで開くか、GitHub Pages の `/kanji_reading/` から遊べます。外部通信、外部ライブラリは不要です。

## 問題の追加

`questions.js` の該当ジャンルに `漢字|読み|難易度|説明` を1行追加します。IDと同ジャンルの誤答候補は自動生成されます。新しい読みが同じジャンルの他の問題と重複していないか確認してください。地名では説明の冒頭に都道府県と市区町村を記入してください。

`node kanji_reading/validate.js` は ID、同ジャンルの同表記、必須項目、4つの選択肢、正解の一意性、分類、地名の所在地を検査します。辞書との一致や意味の正確さは機械検査の対象外です。

## 調査に使った資料

- [コトバンク（複数辞典を掲載）](https://kotobank.jp/)：難読表記・複数の読みの確認。例：[海月](https://kotobank.jp/word/%E6%B5%B7%E6%9C%88-457138)、[海馬](https://kotobank.jp/word/%E6%B5%B7%E9%A6%AC-166007)、[木を含む難読語](https://kotobank.jp/word/%E6%9C%A8-471822)、[逢う魔時](https://kotobank.jp/word/%E9%80%A2%E3%81%86%E9%AD%94%E6%99%82-449311)
- [日本郵便 郵便番号データ](https://www.post.japanpost.jp/service/search/zipcode/download/)：実在する地名・読みの確認に利用できる公式データ。
- [各務原市公式サイト](https://www.city.kakamigahara.lg.jp/kids/1003733/index.html)：各務原市の読みの確認。

現時点では全175問の個別の辞書照合記録までは残していません。500問以上という目標には達していません。追加するときは、確かな出典とともに1問ずつ照合してください。

