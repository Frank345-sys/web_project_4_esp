import {
  contentPopUpImage,
  contentPopUpDeleteCard,
  buttonCloseModalImage,
  buttonCloseModalDeleteCard,
  buttonSubmitDeleteCard,
} from "../utils/constants.js";

import { Api } from "../components/Api.js";

import { PopUpWithImage } from "../components/PopUpWithImage.js";

import { PopUpDeleteCard } from "../components/PopUpDeleteCard.js";

export class Card {
  constructor(name, link, idCard, likes, user, cardSelector) {
    this._title = name;
    this._image = link;
    this._idCard = idCard;
    this._likes = likes;
    this._isLiked = false;
    this._user = user;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    this._cardPhotoItem = this._cardElement.querySelector(".card__photo-item");
    this._cardTitle = this._cardElement.querySelector(
      ".content-footer-card__title"
    );
    this._deleteButton = this._cardElement.querySelector(
      ".card__button-delete"
    );
    this._likeButton = this._cardElement.querySelector(".heart-button__icon");
    this._contLikes = this._cardElement.querySelector(
      ".content-footer-card__likes"
    );

    this._likes.forEach((element) => {
      if (element._id === this._user._id) {
        this._likeButton.classList.add("heart-button__icon_liked");
        this._isLiked = true;
      }
    });

    return this._cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._cardPhotoItem.src = this._image;
    this._cardTitle.textContent = this._title;
    this._contLikes.textContent = this._likes.length;
    return this._element;
  }

  _setEventListeners() {
    this._cardPhotoItem.addEventListener("click", () => {
      const popupImage = new PopUpWithImage(
        contentPopUpImage,
        "content-pop-up_visibility_visible",
        buttonCloseModalImage,
        this._image,
        this._title
      );
      popupImage.setEventListeners();
    });

    this._deleteButton.addEventListener("click", () => {
      const popupDelete = new PopUpDeleteCard(
        contentPopUpDeleteCard,
        "content-modal_visibility_visible",
        buttonCloseModalDeleteCard,
        buttonSubmitDeleteCard,
        this._element,
        this._idCard
      );
      popupDelete.setEventListeners();
    });

    this._likeButton.addEventListener("click", () => {
      if (this._isLiked === false) {
        const likeCard = new Api({
          baseUrl: `cards/likes/${this._idCard}`,
          method: "PUT",
          body: null,
          headers: {
            authorization: "28d1f77b-3605-449f-bf16-20a5216f8fdb",
            "Content-Type": "application/json",
          },
        });
        likeCard
          .card()
          .then((result) => {
            this._contLikes.textContent = result.likes.length;
          })
          .catch((err) => {
            console.log(err);
          })
          .finally((result) => {
            this._isLiked = !this._isLiked;
            this._likeButton.classList.add("heart-button__icon_liked");
          });
      } else if (this._isLiked === true) {
        const deleteLikeCard = new Api({
          baseUrl: `cards/likes/${this._idCard}`,
          method: "DELETE",
          body: null,
          headers: {
            authorization: "28d1f77b-3605-449f-bf16-20a5216f8fdb",
            "Content-Type": "application/json",
          },
        });
        deleteLikeCard
          .card()
          .then((result) => {
            this._contLikes.textContent = result.likes.length;
          })
          .catch((err) => {
            console.log(err);
          })
          .finally((result) => {
            this._isLiked = !this._isLiked;
            this._likeButton.classList.remove("heart-button__icon_liked");
          });
      }
    });
  }
}
