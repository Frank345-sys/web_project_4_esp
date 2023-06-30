import { Scroll } from "../utils/constants.js";

export class Popup {
  static scroll = new Scroll();
  constructor(
    contentPopup,
    contentPopupSelector,
    closeButtonPopup,
    openButtonPopup
  ) {
    this._contentPopup = contentPopup;
    this._contentPopupSelector = contentPopupSelector;
    this._closeButtonPopup = closeButtonPopup;
    this._openButtonPopup = openButtonPopup;

    this._openPopup = this._openPopup.bind(this);
    this._closePopup = this._closePopup.bind(this);
    this._closePopupKeyDown = this._closePopupKeyDown.bind(this);
    this._closePopupOutsideClick = this._closePopupOutsideClick.bind(this);
  }

  _openPopup() {
    this._contentPopup.classList.add(this._contentPopupSelector);
    Popup.scroll.disableScroll();
    document.addEventListener("keydown", this._closePopupKeyDown);
    this._contentPopup.addEventListener("click", this._closePopupOutsideClick);
    this._closeButtonPopup.addEventListener("click", this._closePopup);
  }

  _closePopup() {
    this._contentPopup.classList.remove(this._contentPopupSelector);
    Popup.scroll.enableScroll();
    document.removeEventListener("keydown", this._closePopupKeyDown);
    this._contentPopup.removeEventListener(
      "click",
      this._closePopupOutsideClick
    );
    this._closeButtonPopup.removeEventListener("click", this._closePopup);
  }

  _closePopupKeyDown(evt) {
    if (evt.key === "Escape") {
      this._closePopup();
    }
  }

  _closePopupOutsideClick(evt) {
    if (evt.target === this._contentPopup) {
      this._closePopup();
    }
  }

  setEventListeners() {
    this._openButtonPopup.addEventListener("click", this._openPopup);
  }
}
