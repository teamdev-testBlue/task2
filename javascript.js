//先手
const FIRST_MARK = "○";

//後手
const NEXT_MARK = "×";

//ターン数
let count = 1;

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

function clickAction(event) {
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
  count = count + 1;

  changeDisplayCount();
}

function onloadAction() {
  $('b1').onclick = clickAction;
  $('b2').onclick = clickAction;
  $('b3').onclick = clickAction;
  $('b4').onclick = clickAction;
  $('b5').onclick = clickAction;
  $('b6').onclick = clickAction;
  $('b7').onclick = clickAction;
  $('b8').onclick = clickAction;
  $('b9').onclick = clickAction;
}

window.onload = onloadAction;