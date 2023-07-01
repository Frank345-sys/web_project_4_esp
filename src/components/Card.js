import { PopupWithImage } from "./PopupWithImage.js";
import { contentPopUp } from "../utils/constants.js";

export class Card {
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

    const PopupImage = new PopupWithImage(
      contentPopUp,
      "content-pop-up_visibility_visible",
      contentPopUp.children[0].children[0],
      this._element.querySelector(".card__photo-item"),
      this._image,
      this._title
    );
    PopupImage.setEventListeners();

    return this._element;
  }

  _removeCard() {
    this._element.classList.add("card_delete");
    this._timeInMilliSeconds = 200;
    setTimeout(() => {
      this._element.remove();
    }, this._timeInMilliSeconds);
  }

  _likeCard() {
    this._iconLike = this._element.querySelector(".heart-button__icon");
    this._iconLike.classList.toggle("heart-button__icon_liked");
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
  }
}
