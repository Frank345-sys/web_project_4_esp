import { PopUp } from "./PopUp.js";
import { Api } from "../components/Api.js";

export class PopUpWithFormEdit extends PopUp {
  constructor(
    contentPopUp,
    contentPopUpSelector,
    closeButtonPopUp,
    openButtonPopUp,
    submitButtonPopUp,
    firstInputPopUp,
    secondInputPopUp,
    firstLabelPopUp,
    secondLabelPopUp
  ) {
    super(
      contentPopUp,
      contentPopUpSelector,
      closeButtonPopUp,
      openButtonPopUp
    );
    this._submitButtonPopUp = submitButtonPopUp;
    this._firstInputPopUp = firstInputPopUp;
    this._secondInputPopUp = secondInputPopUp;
    this._firstLabelPopUp = firstLabelPopUp;
    this._secondLabelPopUp = secondLabelPopUp;

    this._submitPopUp = this._submitPopUp.bind(this);
  }

  _addEvents() {
    super._addEvents();
    this._firstInputPopUp.value = this._firstLabelPopUp.textContent;
    this._secondInputPopUp.value = this._secondLabelPopUp.textContent;
    this._submitButtonPopUp.addEventListener("click", this._submitPopUp);
  }

  _removeEvents() {
    super._removeEvents();
    this._submitButtonPopUp.removeEventListener("click", this._submitPopUp);
  }

  _submitPopUp() {
    //Jacques Cousteau
    //Sailor, researcher

    this._submitButtonPopUp.textContent = "Editando...";

    const editPhotoProfile = new Api({
      baseUrl: `users/me`,
      method: "PATCH",
      body: JSON.stringify({
        name: this._firstInputPopUp.value,
        about: this._secondInputPopUp.value,
      }),
      headers: {
        authorization: "28d1f77b-3605-449f-bf16-20a5216f8fdb",
        "Content-Type": "application/json",
      },
    });

    editPhotoProfile
      .profile()
      .then((result) => {
        console.log("Resultado del perfil con los nuevos datos: " + result);
        this._firstLabelPopUp.textContent = result.name;
        this._secondLabelPopUp.textContent = result.about;
      })
      .catch((err) => {
        this._closePopUp();
        console.log(err);
      })
      .finally(() => {
        this._closePopUp();
        this._submitButtonPopUp.textContent = "Guardar";
        console.log("Se editó la información del perfil con exito");
      });
  }
}
