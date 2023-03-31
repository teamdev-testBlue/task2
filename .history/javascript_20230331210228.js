function $(id) {
  return document.getElementById(id);
}

function clickAction(event) {
  let id = event.target.id;
  let object = $(id);
  object.value = "○";
}

function onloadAction() {
  $(b1').onclick = clickAction;
  $(b2').onclick = clickAction;
  $(b3').onclick = clickAction;
  $(b4').onclick = clickAction;
  $(b5').onclick = clickAction;
  $(b6').onclick = clickAction;
  $(b7').onclick = clickAction;
  $(b8').onclick = clickAction;
  $(b9').onclick = clickAction;
}

window.onload = onloadAction;