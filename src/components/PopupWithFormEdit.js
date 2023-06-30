import { Popup } from "./Popup.js";

export class PopupWithFormEdit extends Popup {
  constructor(
    contentPopup,
    contentPopupSelector,
    closeButtonPopup,
    openButtonPopup,
    submitButtonPopup,
    firstInputPopup,
    secondInputPopup,
    firstLabelPopup,
    secondLabelPopup
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
    this._firstLabelPopup = firstLabelPopup;
    this._secondLabelPopup = secondLabelPopup;

    this._submitPopup = this._submitPopup.bind(this);
  }

  _openPopup() {
    super._openPopup();
    this._firstInputPopup.value = this._firstLabelPopup.textContent;
    this._secondInputPopup.value = this._secondLabelPopup.textContent;
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
    this._firstLabelPopup.textContent = this._firstInputPopup.value;
    this._secondLabelPopup.textContent = this._secondInputPopup.value;
    this._closePopup();
  }

  setEventListeners() {
    super.setEventListeners();
  }
}
