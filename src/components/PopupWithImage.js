import { PopUp } from "./PopUp.js";

export class PopUpWithImage extends PopUp {
  constructor(
    contentPopUp,
    contentPopUpSelector,
    closeButtonPopUp,
    src,
    textContent
  ) {
    super(contentPopUp, contentPopUpSelector, closeButtonPopUp);
    this._src = src;
    this._textContent = textContent;
  }

  _addEvents() {
    super._addEvents();
    this._contentPopUp.children[0].children[1].src = this._src;
    this._contentPopUp.children[0].children[2].textContent = this._textContent;
  }

  setEventListeners() {
    this._openPopUp();
  }
}
