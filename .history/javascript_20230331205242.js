function $(id) {
  return document.getElementById(id);
}

function clickActione(event) {
  let id = event.target.id;
  let object = $(id);
  object.value = "○";
}

function onloadAction() {
  $(b1).onclick()
}