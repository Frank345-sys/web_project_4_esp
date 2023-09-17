export class PopUp {
  constructor(
    contentPopUp,
    contentPopUpSelector,
    closeButtonPopUp,
    openButtonPopUp
  ) {
    this._contentPopUp = contentPopUp;
    this._contentPopUpSelector = contentPopUpSelector;
    this._closeButtonPopUp = closeButtonPopUp;
    this._openButtonPopUp = openButtonPopUp;

    this._closePopUpKeyDown = this._closePopUpKeyDown.bind(this);
    this._closePopUpOutsideClick = this._closePopUpOutsideClick.bind(this);
    this._openPopUp = this._openPopUp.bind(this);
    this._closePopUp = this._closePopUp.bind(this);
  }

  _togglePopUp() {
    this._contentPopUp.classList.toggle(this._contentPopUpSelector);
  }

  _enableScroll() {
    document.body.style.overflow = "auto";
  }

  _disableScroll() {
    document.body.style.overflow = "hidden";
  }

  _addEvents() {
    document.addEventListener("keydown", this._closePopUpKeyDown);
    this._contentPopUp.addEventListener("click", this._closePopUpOutsideClick);
    this._closeButtonPopUp.addEventListener("click", this._closePopUp);
  }

  _removeEvents() {
    document.removeEventListener("keydown", this._closePopUpKeyDown);
    this._contentPopUp.removeEventListener(
      "click",
      this._closePopUpOutsideClick
    );
    this._closeButtonPopUp.removeEventListener("click", this._closePopUp);
  }

  _closePopUpKeyDown(evt) {
    if (evt.key === "Escape") {
      this._closePopUp();
    }
  }

  _closePopUpOutsideClick(evt) {
    if (evt.target === this._contentPopUp) {
      this._closePopUp();
    }
  }

  _openPopUp() {
    this._disableScroll();
    this._togglePopUp();
    this._addEvents();
  }

  _closePopUp() {
    this._enableScroll();
    this._togglePopUp();
    this._removeEvents();
  }

  setEventListeners() {
    this._openButtonPopUp.addEventListener("click", this._openPopUp);
  }
}
