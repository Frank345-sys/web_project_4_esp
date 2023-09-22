import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(
    contentPopup,
    contentPopupSelector,
    closeButtonPopup,
    imgSrc,
    title
  ) {
    super(contentPopup, contentPopupSelector, closeButtonPopup);
    this._imgSrc = imgSrc;
    this._title = title;
  }

  _addEvents() {
    super._addEvents();
    this._contentPopup.children[0].children[1].src = this._imgSrc;
    this._contentPopup.children[0].children[1].alt =
      "Vista previa imagen de la card " + this._title;
    this._contentPopup.children[0].children[2].textContent = this._title;
  }

  setEventListeners() {
    this._openPopup();
  }
}
