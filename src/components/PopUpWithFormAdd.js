import { PopupWithForm } from "./PopupWithForm.js";
import { Card } from "./Card.js";
import { contentCardList } from "../utils/constants.js";
import { Api } from "../components/Api.js";

export class PopupWithFormAdd extends PopupWithForm {
  constructor(
    contentPopup,
    contentPopupSelector,
    closeButtonPopup,
    openButtonPopup,
    submitButtonPopup,
    firstInputPopup,
    secondInputPopup
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
  }

  _submitPopup() {
    this._submitButtonPopup.textContent = "Creando...";
    const createCard = new Api({
      baseUrl: "cards",
      method: "POST",
      body: JSON.stringify({
        name: this._firstInputPopup.value,
        link: this._secondInputPopup.value,
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
        this._closePopup();
        console.log(err);
      })
      .finally(() => {
        this._closePopup();
        this._submitButtonPopup.textContent = "Crear";
      });
  }
}
