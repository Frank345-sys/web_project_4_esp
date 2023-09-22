import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
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

  _addEvents() {
    super._addEvents();
    this._submitButtonPopup.addEventListener("click", this._submitPopup);
  }

  _removeEvents() {
    super._removeEvents();
    this._submitButtonPopup.removeEventListener("click", this._submitPopup);
  }

  _submitPopup() {}
}
