// Botones

let editButton = document.querySelector(".content-prof-info-text__edit-button");
let modalSaveButton = document.querySelector(".modal-form__button-save");
let modalCloseButton = document.querySelector(".modal__button-close");

// Modal
let modal = document.querySelector(".content-modal");

// Variables
let name = document.querySelector(".content-prof-info-text__name");
let ocupation = document.querySelector(".content-prof-info-text__ocupation");

// Inputs
let inputName = document.querySelector(".modal-form__label_name");
let inputOcupation = document.querySelector(".modal-form__label_ocupation");

function openAndCloseForm() {
  modal.classList.toggle("content-modal_visibility_visible");
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
  openAndCloseForm();
  disableScroll();
});

modalSaveButton.addEventListener("click", function (e) {
  e.preventDefault();
  name.textContent = inputName.value;
  ocupation.textContent = inputOcupation.value;
  openAndCloseForm();
  enableScroll();
});

modalCloseButton.addEventListener("click", function () {
  openAndCloseForm();
  enableScroll();
});
