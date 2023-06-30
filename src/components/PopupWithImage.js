import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(
    contentPopup,
    contentPopupSelector,
    closeButtonPopup,
    openButtonPopup,
    src,
    textContent
  ) {
    super(
      contentPopup,
      contentPopupSelector,
      closeButtonPopup,
      openButtonPopup
    );
    this._src = src;
    this._textContent = textContent;
  }

  _openPopup() {
    super._openPopup();
    this._contentPopup.children[0].children[1].src = this._src;
    this._contentPopup.children[0].children[2].textContent = this._textContent;
  }

  _closePopup() {
    super._closePopup();
  }

  _closePopupKeyDown(evt) {
    super._closePopupKeyDown(evt);
  }

  _closePopupOutsideClick(evt) {
    super._closePopupOutsideClick(evt);
  }

  setEventListeners() {
    super.setEventListeners();
  }
}
