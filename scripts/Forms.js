import { Card, contentCardList, renderCards } from "./Card.js";

import { Scroll, popUpWindow, renderUtils } from "./utils.js";

//const Forms = (() => {
const scroll = new Scroll();

class Forms {
  constructor(
    buttonOpenModal,
    buttonCloseModal,
    buttonSubmit,
    firstInput,
    secondInput,
    contentModal
  ) {
    this._buttonOpen = buttonOpenModal;
    this._buttonClose = buttonCloseModal;
    this._buttonSubmit = buttonSubmit;
    this._fistInput = firstInput;
    this._secondInput = secondInput;
    this._contentModal = contentModal;
  }

  _openOrCloseForm() {
    this._contentModal.classList.toggle("content-modal_visibility_visible");
  }

  _buttonOpenEventListener() {
    this._openOrCloseForm();
    scroll.disableScroll();
  }

  _buttonCloseEventListener() {
    this._openOrCloseForm();
    scroll.enableScroll();
  }

  _buttonSubmitEventListener() {
    this._openOrCloseForm();
    scroll.enableScroll();
  }

  _contentModalEventListener() {
    this._contentModal.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("content-modal_visibility_visible")) {
        this._openOrCloseForm();
        scroll.enableScroll();
      }
    });

    document.addEventListener("keydown", (evt) => {
      if (
        evt.key === "Escape" &&
        this._contentModal.classList.contains(
          "content-modal_visibility_visible"
        )
      ) {
        this._contentModal.classList.remove("content-modal_visibility_visible");
        scroll.enableScroll();
      }
    });
  }
}

class FormAdd extends Forms {
  constructor(
    buttonOpenModal,
    buttonCloseModal,
    buttonSubmit,
    firstInput,
    secondInput,
    contentModal
  ) {
    super(
      buttonOpenModal,
      buttonCloseModal,
      buttonSubmit,
      firstInput,
      secondInput,
      contentModal
    );
  }

  _buttonOpenEventListener() {
    this._buttonOpen.addEventListener("click", () => {
      super._buttonOpenEventListener();
    });
  }

  _buttonCloseEventListener() {
    this._buttonClose.addEventListener("click", () => {
      super._buttonCloseEventListener();
    });
  }

  _buttonSubmitEventListener() {
    this._buttonSubmit.addEventListener("click", () => {
      super._buttonSubmitEventListener();
      const newCard = new Card(
        this._fistInput.value,
        this._secondInput.value,
        ".card-template"
      );
      const newCardElement = newCard.generateCard();
      contentCardList.prepend(newCardElement);
    });
  }

  _contentModalEventListener() {
    super._contentModalEventListener();
  }

  setEventListeners() {
    this._buttonOpenEventListener();
    this._buttonCloseEventListener();
    this._buttonSubmitEventListener();
    this._contentModalEventListener();
  }
}

class FormEdit extends Forms {
  constructor(
    buttonOpenModal,
    buttonCloseModal,
    buttonSubmit,
    firstInput,
    secondInput,
    contentModal,
    firstLabel,
    secondLabel
  ) {
    super(
      buttonOpenModal,
      buttonCloseModal,
      buttonSubmit,
      firstInput,
      secondInput,
      contentModal
    );
    this._firstLabel = firstLabel;
    this._secondLabel = secondLabel;
  }

  _buttonOpenEventListener() {
    this._buttonOpen.addEventListener("click", () => {
      super._buttonOpenEventListener();
      this._fistInput.value = this._firstLabel.textContent;
      this._secondInput.value = this._secondLabel.textContent;
    });
  }

  _buttonCloseEventListener() {
    this._buttonClose.addEventListener("click", () => {
      super._buttonCloseEventListener();
    });
  }

  _buttonSubmitEventListener() {
    this._buttonSubmit.addEventListener("click", () => {
      super._buttonSubmitEventListener();
      this._firstLabel.textContent = this._fistInput.value;
      this._secondLabel.textContent = this._secondInput.value;
    });
  }

  _contentModalEventListener() {
    super._contentModalEventListener();
  }

  setEventListeners() {
    this._buttonOpenEventListener();
    this._buttonCloseEventListener();
    this._buttonSubmitEventListener();
    this._contentModalEventListener();
  }
}

const renderForms = () => {
  const contentModal = document.querySelectorAll(".content-modal");
  const buttonSubmit = document.querySelectorAll(".button");
  const buttonCloseModal = document.querySelectorAll(".modal__button-close");
  const buttonOpenModalAdd = document.querySelector(
    ".content-profile__add-button"
  );
  const buttonOpenModalEdit = document.querySelector(
    ".content-prof-info-text__edit-button"
  );
  const labelName = document.querySelector(".content-prof-info-text__name");
  const labelOcupation = document.querySelector(
    ".content-prof-info-text__ocupation"
  );
  const inputName = document.querySelector(".input_name");
  const inputOcupation = document.querySelector(".input_ocupation");
  const inputNamePlace = document.querySelector(".input_name-place");
  const inputUrlPlace = document.querySelector(".input_url");

  const formEdit = new FormEdit(
    buttonOpenModalEdit,
    buttonCloseModal[0],
    buttonSubmit[0],
    inputName,
    inputOcupation,
    contentModal[0],
    labelName,
    labelOcupation
  );
  formEdit.setEventListeners();

  const formAdd = new FormAdd(
    buttonOpenModalAdd,
    buttonCloseModal[1],
    buttonSubmit[1],
    inputNamePlace,
    inputUrlPlace,
    contentModal[1]
  );
  formAdd.setEventListeners();
};

//})();

export { renderForms };
