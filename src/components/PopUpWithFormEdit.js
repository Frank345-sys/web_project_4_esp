import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";

export class PopupWithFormEdit extends PopupWithForm {
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
      openButtonPopup,
      submitButtonPopup,
      firstInputPopup,
      secondInputPopup
    );
    this._firstLabelPopup = firstLabelPopup;
    this._secondLabelPopup = secondLabelPopup;
  }

  _addEvents() {
    super._addEvents();
    this._firstInputPopup.value = this._firstLabelPopup.textContent;
    this._secondInputPopup.value = this._secondLabelPopup.textContent;
  }

  _submitPopup() {
    //Jacques Cousteau
    //Sailor, researcher

    this._submitButtonPopup.textContent = "Editando...";

    const setProfile = new UserInfo();

    setProfile
      .setUserInfo(this._firstInputPopup.value, this._secondInputPopup.value)
      .then((result) => {
        this._firstLabelPopup.textContent = result.name;
        this._secondLabelPopup.textContent = result.about;
      })
      .catch((error) => {
        this._closePopup();
        console.error(error);
      })
      .finally(() => {
        this._closePopup();
        this._submitButtonPopup.textContent = "Guardar";
      });
  }
}
