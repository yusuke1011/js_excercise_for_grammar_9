const todos = ['初期データ1'];
const commands = ['確認', '追加', '削除', '終了'];
let input;


// commands[3]は '終了'
while(input !== commands[3]) {
  input = prompt('「'+ commands + '」の4つのいずれかを入力してください');
  if (input === commands[0]) {
    showTodos();
  } else if (input === commands[1]) {
    console.log('Todo: 追加用のプロンプトを表示して、入力したものをtodosに追加する');
  } else if (input === commands[2]) {
    console.log('Todo: インデックス番号を指定してtodosからインデックスに対応する値を削除する');
  } else if (input === commands[3]) {
    console.log('終了します');
  } else {
    console.log('「'+ commands + '」以外は入力できません');
  }
}


showTodos();

function showTodos() {
  console.log('========================');
  console.log('現在持っているのタスク一覧');
  console.log('========================');
  todos.forEach((todo, index) => {
    console.log(index + ' : ' + todo);
  });
}