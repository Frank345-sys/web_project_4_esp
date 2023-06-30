export const contentPopUp = document.querySelector(".content-pop-up");
export const contentCardList = document.querySelector(".content-photos");

export const contentModal = document.querySelectorAll(".content-modal");
export const buttonSubmit = document.querySelectorAll(".button");
export const buttonCloseModal = document.querySelectorAll(
  ".modal__button-close"
);
export const buttonOpenModalAdd = document.querySelector(
  ".content-profile__add-button"
);
export const buttonOpenModalEdit = document.querySelector(
  ".content-prof-info-text__edit-button"
);
export const labelName = document.querySelector(
  ".content-prof-info-text__name"
);
export const labelOcupation = document.querySelector(
  ".content-prof-info-text__ocupation"
);
export const inputName = document.querySelector(".input_name");
export const inputOcupation = document.querySelector(".input_ocupation");

export const inputNamePlace = document.querySelector(".input_name-place");
export const inputUrlPlace = document.querySelector(".input_url");

export const formList = Array.from(document.querySelectorAll(".modal-form"));

export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

export const initialForms = [];

export class Scroll {
  disableScroll() {
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  }

  enableScroll() {
    window.onscroll = null;
  }
}
