import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

export class PopupWithFormPhotoEdit extends PopupWithForm {
  constructor(
    contentPopup,
    contentPopupSelector,
    closeButtonPopup,
    openButtonPopup,
    submitButtonPopup,
    firstInputPopup,
    photoEdit
  ) {
    super(
      contentPopup,
      contentPopupSelector,
      closeButtonPopup,
      openButtonPopup,
      submitButtonPopup,
      firstInputPopup,
      photoEdit
    );
    this._photoEdit = photoEdit;
  }

  _submitPopup() {
    //https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg

    this._submitButtonPopup.textContent = "Editando...";

    const setProfilePhoto = new UserInfo();

    setProfilePhoto
      .setUserPhotoInfo(this._firstInputPopup.value)
      .then((result) => {
        this._photoEdit.src = result;
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
