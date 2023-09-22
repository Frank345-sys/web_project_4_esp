export class Popup {
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

    this._closePopupKeyDown = this._closePopupKeyDown.bind(this);
    this._closePopupOutsideClick = this._closePopupOutsideClick.bind(this);
    this._openPopup = this._openPopup.bind(this);
    this._closePopup = this._closePopup.bind(this);
  }

  _togglePopup() {
    this._contentPopup.classList.toggle(this._contentPopupSelector);
  }

  _enableScroll() {
    document.body.style.overflow = "auto";
  }

  _disableScroll() {
    document.body.style.overflow = "hidden";
  }

  _addEvents() {
    document.addEventListener("keydown", this._closePopupKeyDown);
    this._contentPopup.addEventListener("click", this._closePopupOutsideClick);
    this._closeButtonPopup.addEventListener("click", this._closePopup);
  }

  _removeEvents() {
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

  _openPopup() {
    this._disableScroll();
    this._togglePopup();
    this._addEvents();
  }

  _closePopup() {
    this._enableScroll();
    this._togglePopup();
    this._removeEvents();
  }

  setEventListeners() {
    this._openButtonPopup.addEventListener("click", this._openPopup);
  }
}
