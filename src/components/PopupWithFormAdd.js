import { Popup } from "./Popup.js";
import { Card } from "./Card.js";
import { contentCardList } from "../utils/constants.js";

export class PopupWithFormAdd extends Popup {
  constructor(
    contentPopup,
    contentPopupSelector,
    closeButtonPopup,
    openButtonPopup,
    submitButtonPopup,
    firstInputPopup,
    secondInputPopup
  ) {
    super(
      contentPopup,
      contentPopupSelector,
      closeButtonPopup,
      openButtonPopup
    );
    this._submitButtonPopup = submitButtonPopup;
    this._firstInputPopup = firstInputPopup;
    this._secondInputPopup = secondInputPopup;

    this._submitPopup = this._submitPopup.bind(this);
  }

  _openPopup() {
    super._openPopup();
    this._submitButtonPopup.addEventListener("click", this._submitPopup);
  }

  _closePopup() {
    super._closePopup();
    this._submitButtonPopup.removeEventListener("click", this._submitPopup);
  }

  _closePopupKeyDown(evt) {
    super._closePopupKeyDown(evt);
  }

  _closePopupOutsideClick(evt) {
    super._closePopupOutsideClick(evt);
  }

  _submitPopup() {
    const newCard = new Card(
      this._firstInputPopup.value,
      this._secondInputPopup.value,
      ".card-template"
    );
    const newCardElement = newCard.generateCard();
    contentCardList.prepend(newCardElement);
    this._closePopup();
  }

  setEventListeners() {
    super.setEventListeners();
  }
}
