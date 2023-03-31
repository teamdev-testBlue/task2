function $(id) {
  return document.getElementById(id);
}

function clickAction(event) {
  let id = event.target.id;
  let object = $(id);
  object.value = "○";
}

function onloadAction() {
  $(b11).onclick(clickAction);
  $(b12).onclick(clickAction);
  $(b13).onclick(clickAction);
  $(b14).onclick(clickAction);
  $(b15).onclick(clickAction);
  $(b16).onclick(clickAction);
  $(b17).onclick(clickAction);
  $(b18).onclick(clickAction);
  $(b19).onclick(clickAction);
}