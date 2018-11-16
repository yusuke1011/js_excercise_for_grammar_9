// 配列の組み込みメソッドと同等の機能を持った関数を作る

/**
 * 前提: 配列の組み込みメソッドは使わない
 */

/**
 * 課題1: 「Array.prototype.forEach() 」と同等の機能を持つ関数を作る
 *   - 関数名は「each」とする
 *   - each関数は次の2つの引数を持つ
 *     - 第1引数: 配列(引数名はarrayとする)
 *     - 第2引数: コールバック関数(引数名はcallbackとする)
 *       - コールバック関数の内容は、each関数の第1引数で受け取った配列をイテレーションする機能を持つ
 *       - コールバックは次の2つの引数を持つ
 *         - 第1引数: each関数の第1引数で受け取った配列の各要素を1ループごとにセットする
 *         - 第2引数: コールバック関数の第1引数で受け取った要素に対応するインデックス番号をセットする
 *   - 実装したeach関数が意図通り動くか確かめるためのコードを記述する
 *     - コールバック関数の中でconsole.logを使って、コールバック関数の第1引数と第2引数の値を確認する
 *     - each関数内でarrayをループさせるにはfor文を使う
 *
 *
 * each関数の実装の答えは以下の学習コンテンツのスライド内に記述されているので、実装イメージがつかなかったら参考にしてもOK
 *
 * JavaScriptの配列でイテレーション処理をする
 * https://tsuyopon.xyz/learning-contents/web-dev/javascript/javascript-grammar/how-to-iterate-an-array-in-js/
 */

// ここのeach関数を作る
const each = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
};

// ここでeach関数の挙動を確かめる
each(['one', 'two', 'three'], (value, index) => {
  console.log('index: ' + index, '値: ' + value, );
});