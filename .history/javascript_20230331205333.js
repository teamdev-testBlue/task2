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
  $(b22).onclick(clickAction);
  $(b33).onclick(clickAction);
  $(b44).onclick(clickAction);
  $(b55).onclick(clickAction);
  $(b66).onclick(clickAction);
  $(b77).onclick(clickAction);
  $(b88).onclick(clickAction);
  $(b99).onclick(clickAction);
}