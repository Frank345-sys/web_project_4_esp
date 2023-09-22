import { Popup } from "./Popup.js";
import { Api } from "../components/Api.js";

export class PopupDeleteCard extends Popup {
  constructor(
    contentPopup,
    contentPopupSelector,
    closeButtonPopup,
    submitButtonPopup,
    card,
    idCard
  ) {
    super(contentPopup, contentPopupSelector, closeButtonPopup);
    this._submitButtonPopup = submitButtonPopup;
    this._card = card;
    this._idCard = idCard;
    this._submitPopup = this._submitPopup.bind(this);
  }

  _addEvents() {
    super._addEvents();
    this._submitButtonPopup.addEventListener("click", this._submitPopup);
  }

  _removeEvents() {
    super._removeEvents();
    this._submitButtonPopup.removeEventListener("click", this._submitPopup);
  }

  _submitPopup() {
    this._submitButtonPopup.textContent = "Eliminando...";
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
      .catch((err) => {
        this._closePopup();
        console.log(err);
      })
      .finally(() => {
        this._closePopup();
        this._card.remove();
        this._submitButtonPopup.textContent = "Eliminar";
      });
  }

  setEventListeners() {
    this._openPopup();
  }
}
