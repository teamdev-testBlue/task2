function $(id) {
  return document.getElementById(id);
}

function clickAction(event) {
  let id = event.target.id;
  let object = $(id);
  object.value = "○";
}

function onloadAction() {
  $(b).onclick(clickAction);
  $(b).onclick(clickAction);
  $(b).onclick(clickAction);
  $(b).onclick(clickAction);
  $(b).onclick(clickAction);
  $(b).onclick(clickAction);
  $(b).onclick(clickAction);
  $(b).onclick(clickAction);
  $(b).onclick(clickAction);
}