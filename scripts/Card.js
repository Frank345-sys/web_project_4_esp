//(function () {

import { popUpWindow, Scroll } from "./Index.js";

const initialCards = [
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

const contentCardList = document.querySelector(".content-photos");

const scroll = new Scroll();

class Card {
  constructor(name, link, cardSelector) {
    this._title = name;
    this._image = link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._setEventListeners();

    this._element
      .querySelector(".card__photo-item")
      .setAttribute("src", "" + this._image);
    this._element.querySelector(".content-footer-card__title").textContent =
      this._title;

    return this._element;
  }

  _removeCard() {
    this._element.remove();
  }

  _likeCard() {
    this._iconLike = this._element.querySelector(".heart-button__icon");
    if (
      this._iconLike.getAttribute("src") === "./images/vector_heart_icon.png"
    ) {
      this._iconLike.setAttribute(
        "src",
        "./images/vector_heart_icon-black.png"
      );
    } else {
      this._iconLike.setAttribute("src", "./images/vector_heart_icon.png");
    }
  }

  _popPupImage() {
    popUpWindow.children[0].children[1].src = this._image;
    popUpWindow.children[0].children[2].textContent = this._title;
    popUpWindow.classList.toggle("content-pop-up_visibility_visible");
    scroll.disableScroll();
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__button-delete")
      .addEventListener("click", () => {
        this._removeCard();
      });

    this._element
      .querySelector(".heart-button")
      .addEventListener("click", () => {
        this._likeCard();
      });

    this._element
      .querySelector(".card__photo-item")
      .addEventListener("click", () => {
        this._popPupImage();
      });
  }
}

const renderElements = () => {
  initialCards.forEach((item) => {
    const card = new Card(item.name, item.link, ".card-template");
    const cardElement = card.generateCard();
    contentCardList.append(cardElement);
  });
};

renderElements();
//})();

export { Card, contentCardList };
