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
let inputName = document.querySelector(".input_name");
let inputOcupation = document.querySelector(".input_ocupation");

function openAndCloseFormEdit() {
  contentModalEdit.classList.toggle("content-modal_visibility_visible");
}

// link de donde saque las funciones https://www.miguelra.com/deshabilitar-scroll-con-javascript/

editButton.addEventListener("click", function () {
  inputName.value = name.textContent;
  inputOcupation.value = ocupation.textContent;
  openAndCloseFormEdit();
});

modalEditSaveButton.addEventListener("click", function (e) {
  e.preventDefault();
  name.textContent = inputName.value;
  ocupation.textContent = inputOcupation.value;
  openAndCloseFormEdit();
});

modalEditCloseButton.addEventListener("click", function () {
  openAndCloseFormEdit();
});
