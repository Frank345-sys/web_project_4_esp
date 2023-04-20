let addButton = document.querySelector(".content-profile__add-button");
let modalAdd = document.querySelector(".modal_add");
let modalAddCloseButton = modalAdd.children[1];
let modalAddCreateButton = document.querySelector(".modal-form__button_add");

// Modal
let contentModalAdd = document.querySelector(".content-modal_add");

// Inputs
let inputNamePlace = document.querySelector(".modal-form__label_name-place");
let inputUrlPlace = document.querySelector(".modal-form__label_url");

// contenedor de las tarjetas

const cardsContainer = document.querySelector(".content-photos");

function openAndCloseFormAdd() {
  contentModalAdd.classList.toggle("content-modal_visibility_visible");
}

addButton.addEventListener("click", function () {
  openAndCloseFormAdd();
  disableScroll();
});

modalAddCreateButton.addEventListener("click", function (e) {
  e.preventDefault();
  openAndCloseFormAdd();

  // se almacena y se clona la template card
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  // aqui se agregan el titulo y la URL del formulario
  cardElement.querySelector(".content-footer-card__title").textContent =
    inputNamePlace.value;
  cardElement.querySelector(".card__photo-item").src = inputUrlPlace.value;

  // aqui se agrega el evento para like
  cardElement
    .querySelector(".heart-button")
    .addEventListener("click", function () {
      if (
        cardElement.querySelector(".heart-button__icon").getAttribute("src") ===
        "./images/vector_heart_icon.png"
      ) {
        cardElement
          .querySelector(".heart-button__icon")
          .setAttribute("src", "./images/vector_heart_icon-black.png");
      } else {
        cardElement
          .querySelector(".heart-button__icon")
          .setAttribute("src", "./images/vector_heart_icon.png");
      }
    });

  // aqui se agrega el evento para eliminar la card
  cardElement
    .querySelector(".card__button-delete")
    .addEventListener("click", function () {
      cardElement.remove();
    });

  // aqui se agrega el evento para la vista previa de la imagen
  cardElement
    .querySelector(".card__photo-item")
    .addEventListener("click", function () {
      disableScroll();
      popUpWindow.children[0].children[1].src = this.getAttribute("src");
      popUpWindow.children[0].children[2].textContent =
        this.nextElementSibling.children[0].textContent;
      popUpWindow.classList.toggle("content-pop-up_visibility_visible");
    });

  // finalmente aqui se agrega la card con los eventos, su titulo y url al contenedor de las cards
  cardsContainer.prepend(cardElement);
  enableScroll();
});

modalAddCloseButton.addEventListener("click", function () {
  openAndCloseFormAdd();
  enableScroll();
});
