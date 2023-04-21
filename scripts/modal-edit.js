// Botones
let editButton = document.querySelector(".content-prof-info-text__edit-button");

let modalEdit = document.querySelector(".modal_edit");
let modalEditCloseButton = modalEdit.children[1];
let modalEditSaveButton = document.querySelector(".button_edit");

/*document.querySelector(".modal__button-close");*/

// Modal
let contentModalEdit = document.querySelector(".content-modal_edit");

// Variables
let name = document.querySelector(".content-prof-info-text__name");
let ocupation = document.querySelector(".content-prof-info-text__ocupation");

// Inputs
let inputName = document.querySelector(".label_name");
let inputOcupation = document.querySelector(".label_ocupation");

function openAndCloseFormEdit() {
  contentModalEdit.classList.toggle("content-modal_visibility_visible");
}

// link de donde saque las funciones https://www.miguelra.com/deshabilitar-scroll-con-javascript/

// función para deshabilitar scroll

function disableScroll() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}

// función para activar scroll

function enableScroll() {
  window.onscroll = null;
}

editButton.addEventListener("click", function () {
  inputName.value = name.textContent;
  inputOcupation.value = ocupation.textContent;
  openAndCloseFormEdit();
  disableScroll();
});

modalEditSaveButton.addEventListener("click", function (e) {
  e.preventDefault();
  name.textContent = inputName.value;
  ocupation.textContent = inputOcupation.value;
  openAndCloseFormEdit();
  enableScroll();
});

modalEditCloseButton.addEventListener("click", function () {
  openAndCloseFormEdit();
  enableScroll();
});
