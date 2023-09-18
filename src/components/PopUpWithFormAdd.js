import { PopUp } from "./PopUp.js";
import { Card } from "./Card.js";
import { contentCardList } from "../utils/constants.js";
import { Api } from "../components/Api.js";

export class PopUpWithFormAdd extends PopUp {
  constructor(
    contentPopUp,
    contentPopUpSelector,
    closeButtonPopUp,
    openButtonPopUp,
    submitButtonPopUp,
    firstInputPopUp,
    secondInputPopUp
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
    this._createCard();
  }

  _createCard() {
    this._submitButtonPopUp.textContent = "Creando...";
    const createCard = new Api({
      baseUrl: "cards",
      method: "POST",
      body: JSON.stringify({
        name: this._firstInputPopUp.value,
        link: this._secondInputPopUp.value,
      }),
      headers: {
        authorization: "28d1f77b-3605-449f-bf16-20a5216f8fdb",
        "Content-Type": "application/json",
      },
    });
    createCard
      .card()
      .then((result) => {
        const newCard = new Card(
          result.name,
          result.link,
          result._id,
          result.likes,
          result.owner,
          ".card-template"
        );
        const newCardElement = newCard.generateCard();
        contentCardList.prepend(newCardElement);
      })
      .catch((err) => {
        this._closePopUp();
        console.log(err);
      })
      .finally((result) => {
        this._closePopUp();
        this._submitButtonPopUp.textContent = "Crear";
      });
  }
}
