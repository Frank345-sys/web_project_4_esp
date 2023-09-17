import { PopUp } from "./PopUp.js";
import { Api } from "../components/Api.js";

export class PopUpWithPhotoEdit extends PopUp {
  constructor(
    contentPopUp,
    contentPopUpSelector,
    closeButtonPopUp,
    openButtonPopUp,
    submitButtonPopUp,
    firstInputPopUp,
    photoEdit
  ) {
    super(
      contentPopUp,
      contentPopUpSelector,
      closeButtonPopUp,
      openButtonPopUp
    );
    this._submitButtonPopUp = submitButtonPopUp;
    this._firstInputPopUp = firstInputPopUp;
    this._photoEdit = photoEdit;

    this._submitPopUp = this._submitPopUp.bind(this);
  }

  _addEvents() {
    super._addEvents();
    this._submitButtonPopUp.addEventListener("click", this._submitPopUp);
  }

  _removeEvents() {
    super._removeEvents();
    this._submitButtonPopUp.removeEventListener("click", this._submitPopUp);
  }

  _submitPopUp() {
    //https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg

    this._submitButtonPopUp.textContent = "Editando...";

    const editPhotoProfile = new Api({
      baseUrl: `users/me/avatar`,
      method: "PATCH",
      body: JSON.stringify({
        avatar: this._firstInputPopUp.value,
      }),
      headers: {
        authorization: "28d1f77b-3605-449f-bf16-20a5216f8fdb",
        "Content-Type": "application/json",
      },
    });

    editPhotoProfile
      .profile()
      .then((result) => {
        console.log(
          "Resultado de cambio de foto de perfil actualizado: " + result
        );
        this._photoEdit.src = result.avatar;
      })
      .catch((err) => {
        this._closePopUp();
        console.log(err);
      })
      .finally(() => {
        this._closePopUp();
        this._submitButtonPopUp.textContent = "Guardar";
        console.log("Se editó la foto de perfil con exito");
      });
  }
}
