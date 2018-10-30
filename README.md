# レポジトリ内容

このレポジトリは[Web白熱教室](https://tsuyopon.xyz/)の[JavaScriptの学習コンテンツ > JavaScript基礎文法編](https://tsuyopon.xyz/learning-contents/web-dev/javascript/javascript-grammar/)にある「[【エクササイズ】プリミティブ型・変数・デバッグ方法を復習【JavaScript】](https://tsuyopon.xyz/learning-contents/web-dev/javascript/javascript-grammar/js_excercise_for_grammar_part_1/)」で利用するものです。

## 課題

以下の完成形と同じ出力をデベロッパーツールで確認できたら課題クリアです。


### 完成形

![完成形](./images/assignment.png)


### 課題をクリアするためのステップ

1. [ ] index.htmlとmain.jsを作成する
2. [ ] index.htmlとmain.jsを連携する
3. [ ] main.js内では以下のコードを記述する(全て**再代入できない変数**とする)
    - [ ] 変数 `lastName` を作成して、`文字列` で名字をセットする
    - [ ] 変数 `firstName` を作成して、`文字列` で下の名前をセットする
    - [ ] 変数 `fullName` を作成して、 変数 `lastname` と 変数 `firstName` を使ってフルネームをセット
        - 名字と名前の間にはスペースを空けること。(例: '山田 太郎' のように名字(山田)と下の名前(太郎)の間にスペース(' ') を空ける)
    - [ ] 変数 `myAge` を作成して、`数値` で年齢をセットする
    - [ ] 変数 `friendAge` を作成して、 `数値` で 変数 `myAge` とは異なる値をセットする
    - [ ] 変数 `totalAge` を作成して、 変数 `myAge` と 変数 `friendAge` を足した値をセットする
    - [ ] 変数 `numberOfDays` を作成して、 `totalAge`を日数に変換した値をセットする。(ヒント: 2年の日数は 2(年) × 365(日) で取得できる)
        - うるう年は考慮しないで1年は常に365日とする
    - [ ] 変数 `numberOfChildren` を作成して、 `数値` で `3`をセットする (numberOfChildren => 子供の人数を表す変数)
    - [ ] 変数 `numberOfCakes` を作成して、 `数値` で `10` をセットする (numberOfCakes => ケーキの個数を表す変数)
    - [ ] 変数 `numberOfCakesByChild` を作成して、1人当たりのケーキの個数をセットする
        - 変数 `numberOfChildren` と `numberOfCakes` を使う
        - ここでの割り算はあまりを出さないで無理やりケーキを分けるものとする。(答えは小数になる)
    - [ ] 変数 `numberOfRestOfCakes` を作成して、10個のケーキを3人の子供で分け与えたときのあまりの数をセットする
        - 変数 `numberOfChildren` と `numberOfCakes` を使う
        - ここでは余りの数を出すため答えは整数となる
4. 3の変数を全てconsole.logを使ってデベロッパーツールのコンソールで表示する


## 答え

- htmlの答えは `answer.html` に記述しています
- jsの答えは `answer.js` に記述しています。
- 全く作業が進められなくなったときに答えを参考にしても良いですが、コピー&ペーストは厳禁です
- 答えを見ながら実装をしたら、もう一度、今度は答えを見ないで実装してください(以下の参考記事を見るのは可能)

## 参考記事

課題をこなしていて、行き詰まったら以下の資料を参考にしていただければ回答にたどり着けるかと思います。

- [JavaScriptとHTMLを連携させてJSを実行する方法](https://tsuyopon.xyz/learning-contents/web-dev/javascript/javascript-grammar/how-to-craete-a-javascript-file-and-connect-with-html/)
- [JavaScriptのプリミティブ型とは](https://tsuyopon.xyz/learning-contents/web-dev/javascript/javascript-grammar/what-is-primitive-values-in-js/)
- [JavaScriptの変数を覚える](https://tsuyopon.xyz/learning-contents/web-dev/javascript/javascript-grammar/how-to-use-variables-in-js/)
- [JavaScriptで値を確認する方法(デバッグ方法)](https://tsuyopon.xyz/learning-contents/web-dev/javascript/javascript-grammar/how-to-debug-js-code/)