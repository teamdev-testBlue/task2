//先手
const FIRST_MARK = "○";

//後手
const NEXT_MARK = "×";

//ターン数
let count = 1;

// マス目のid
const IDS = [
    ['b1','b2','b3'],
    ['b4','b5','b6'],
    ['b7','b8','b9']
]

// ゲーム実行中フラグ
let isRun = true;

function $(id) {
  return document.getElementById(id);
}

//先行のターンか判定
function isFirstMove(){
    let isFirst = count % 2;
    return isFirst == 1;
}

//tern表示を切り替える
function changeDisplayCount(){
    if(isFirstMove()){
        $('display-count').innerHTML = FIRST_MARK + ' の番！';
    } else {
        $('display-count').innerHTML = NEXT_MARK + ' の番！';
    }
}

// 試合終了を判定する
function judgeEnd(){
  let isEnd = false;
  // 横三マスが同じ
  for(let row=0; row<3; row++){
    isEnd = isWin(IDS[row][0],IDS[row][1],IDS[row][2])
    if(isEnd){
      displayResult($(IDS[row][0]).value + 'の勝ち')
      return true
    }
  }
  // 縦三マスが同じ
  for(let col=0; col<3; col++){
    isEnd = isWin(IDS[0][col],IDS[1][col],IDS[2][col])
    if(isEnd){
      displayResult($(IDS[0][col]).value + 'の勝ち')
      return true
    }
  }
  // 斜め三マスが同じ(右下がり)
  isEnd = isWin(IDS[0][0],IDS[1][1],IDS[2][2]);
  if(isEnd){
    displayResult($(IDS[0][0]).value + 'の勝ち')
    return true
  }
  // 斜め三マスが同じ(左下がり)
  isEnd = isWin(IDS[0][2],IDS[1][1],IDS[2][0]);
  if(isEnd){
    displayResult($(IDS[0][2]).value + 'の勝ち')
    return true
  }
  // 引き分けの判定
  if(count>=9){
    displayResult('引き分け')
    return true
  }

  // ゲームが続行するならfalse
  return false;
}

function isWin(firstId,secondId,thirdId){
  // １つ目が空
  if($(firstId).value==''){return false}
  // ２つ目が空
  if($(secondId).value==''){return false}
  // ３つ目が空
  if($(thirdId).value==''){return false}
  // ３つ同じ
  if($(firstId).value==$(secondId).value && $(secondId).value==$(thirdId).value){return true}
  // ３つ同じではない
  return false
}

function displayResult(message){
  $('displayResult').innerHTML = message;
  isRun = false
  
  $('reset').style.display = '';
}

function clickAction(event) {
  if(!isRun){
    return;
  }

  let id = event.target.id;
  let object = $(id);

  if(object.value !== ''){
    return;
  }
  if(isFirstMove()){
    object.value = FIRST_MARK;
  } else {
    object.value = NEXT_MARK;
  }

  if(judgeEnd()){
    return;
  }

  count = count + 1;

  changeDisplayCount();
}

// もう一度遊ぶボタンが押されたとき
function resetAction(){
  count = 1;
  changeDisplayCount()
  for(let row=0;row<3;row++){
    for(let col=0;col<3;col++){
      $(IDS[row][col]).value='';
    }
  }

  displayResult('');
  isRun = true

  $('reset').style.display = 'none';
}

function onloadAction() {
  for(let row=0; row<3; row++){
    for(let col=0; col<3; col++){
      $(IDS[row][col]).onclick = clickAction;
    }
  }
  resetAction();
}

$('reset').onclick = resetAction;

window.onload = onloadAction;