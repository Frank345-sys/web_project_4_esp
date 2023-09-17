import { PopUp } from "./PopUp.js";
import { Api } from "../components/Api.js";

export class PopUpDeleteCard extends PopUp {
  constructor(
    contentPopUp,
    contentPopUpSelector,
    closeButtonPopUp,
    submitButtonPopUp,
    card,
    idCard
  ) {
    super(contentPopUp, contentPopUpSelector, closeButtonPopUp);
    this._submitButtonPopUp = submitButtonPopUp;
    this._card = card;
    this._idCard = idCard;
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
    this._submitButtonPopUp.textContent = "Eliminando...";
    const deleteCard = new Api({
      baseUrl: `cards/${this._idCard}`,
      method: "DELETE",
      body: null,
      headers: {
        authorization: "28d1f77b-3605-449f-bf16-20a5216f8fdb",
        "Content-Type": "application/json",
      },
    });

    deleteCard
      .card()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        this._closePopUp();
        console.log(err);
      })
      .finally(() => {
        this._closePopUp();
        this._card.remove();
        this._submitButtonPopUp.textContent = "Eliminar";
      });
  }

  setEventListeners() {
    this._openPopUp();
  }
}
