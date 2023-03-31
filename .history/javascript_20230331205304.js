function $(id) {
  return document.getElementById(id);
}

function clickAction(event) {
  let id = event.target.id;
  let object = $(id);
  object.value = "○";
}

function onloadAction() {
  $(b1).onclick(clickAction);
  $(b1).onclick(clickAction);
  $(b1).onclick(clickAction);
  $(b1).onclick(clickAction);
  $(b1).onclick(clickAction);
  $(b1).onclick(clickAction);
  $(b1).onclick(clickAction);
  $(b1).onclick(clickAction);
  $(b1).onclick(clickAction);
}