// 配列の組み込みメソッドと同等の機能を持った関数を作る

/**
 * 前提: 配列の組み込みメソッドは使わない
 */

/**
 * 課題1: 「Array.prototype.forEach()」と同等の機能を持つ関数を作る
 *   - 「Array.prototype.forEach()」のドキュメント
 *     - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 *   - 関数名は「each」とする
 *   - each関数は次の2つの引数を持つ
 *     - 第1引数: 配列(引数名はarrayとする)
 *     - 第2引数: コールバック関数(引数名はcallbackとする)
 *       - コールバック関数の内容は、each関数の第1引数で受け取った配列をイテレーションする機能を持つ
 *       - コールバックは次の2つの引数を持つ
 *         - 第1引数: each関数の第1引数で受け取った配列の各要素を1ループごとにセットする
 *         - 第2引数: コールバック関数の第1引数で受け取った要素に対応するインデックス番号をセットする
 *       - コールバック関数は戻り値を持たない
 *   - each関数は戻り値を持たない
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

// ここでeach関数を作る
const each = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
};

// ここでeach関数の挙動を確かめる
const returnedValueOfEach = each(['one', 'two', 'three'], (value, index) => {
  console.log('each関数のコールバック関数内 index: ' + index, '値: ' + value, );
});
console.log('each関数の戻り値: ', returnedValueOfEach);

/**
 * 課題2: 「Array.prototype.map()」と同等の機能を持つ関数を作る
 *   - 「Array.prototype.map()」のドキュメント
 *     - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 *   - 関数名は「map」とする
 *   - map関数は次の2つの引数を持つ
 *     - 第1引数: 配列(引数名はarrayとする)
 *     - 第2引数: コールバック関数(引数名はcallbackとする)
 *       - コールバック関数の内容は、map関数の第1引数で受け取った配列をイテレーションする機能を持つ
 *       - コールバックは次の2つの引数を持つ
 *         - 第1引数: map関数の第1引数で受け取った配列の各要素を1ループごとにセットする
 *         - 第2引数: コールバック関数の第1引数で受け取った要素に対応するインデックス番号をセットする
 *       - コールバック関数は戻り値を持つ
 *         - コールバック関数内でreturnした値がmap関数の配列の要素としてセットされる
 *   - map関数は戻り値を持つ
 *     - map関数の戻り値はコールバック関数のそれぞれの戻り値を格納した配列となる
 *       - 例: 以下のnewArrayには[2, 4 ,6]という配列が格納される。
 *         - const newArray = map([1, 2, 3], (value, index) => {
 *             return value * 2; // valueは「1, 2, 3 」 と順番にセットされて、それ 「value * 2」で2倍にしているため[1, 2, 3]は[2, 4, 6]となる
 *           });
 *   - 実装したmap関数が意図通り動くか確かめるためのコードを記述する
 *     - map関数の返り値をconsole.logで出力する
 *     - map関数内のイテレーション処理には課題1で作ったeach関数を利用する
 *
 * 上の文章で実装する内容を理解するよりも、「Array.prototype.map()」のドキュメントの例を参考にmapがどんな挙動をするのか理解するのか理解したほうが早いかも。
 */

// ここでmap関数を実装する
const map = (array, callback) => {
  const newArray = [];
  each(array, (value, index) => {
    const newValue = callback(value, index);
    newArray.push(newValue);
  });

  return newArray;
};

// ここでmap関数の挙動を確認する
const returnedValueOfMap = map([1, 2, 3], (value, index) => {
  console.log('map関数のコールバック関数内 index: ' + index, '値: ' + value, );
  return value * 2;
});

console.log('map関数の戻り値: ', returnedValueOfMap);