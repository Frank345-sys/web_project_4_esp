import "./styles/index.css";
import {
  initialCards,
  contentCardList,
  contentModal,
  buttonCloseModal,
  buttonOpenModalEdit,
  buttonOpenModalAdd,
  buttonSubmit,
  inputName,
  inputOcupation,
  labelName,
  labelOcupation,
  inputNamePlace,
  inputUrlPlace,
  formList,
} from "./utils/constants.js";

import { Card } from "./components/Card.js";

import { PopupWithFormEdit } from "./components/PopupWithFormEdit.js";

import { PopupWithFormAdd } from "./components/PopupWithFormAdd.js";

import { FormValidator } from "./components/FormValidator.js";

import { Section } from "./components/Section.js";

const cardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = new Card(item.name, item.link, ".card-template");
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    },
  },
  contentCardList
);

cardList.renderItems();

const PopupFormEdit = new PopupWithFormEdit(
  contentModal[0],
  "content-modal_visibility_visible",
  buttonCloseModal[0],
  buttonOpenModalEdit,
  buttonSubmit[0],
  inputName,
  inputOcupation,
  labelName,
  labelOcupation
);
PopupFormEdit.setEventListeners();

const PopupFormAdd = new PopupWithFormAdd(
  contentModal[1],
  "content-modal_visibility_visible",
  buttonCloseModal[1],
  buttonOpenModalAdd,
  buttonSubmit[1],
  inputNamePlace,
  inputUrlPlace
);
PopupFormAdd.setEventListeners();

const renderFormValidator = () => {
  formList.forEach((formElement) => {
    const fieldsetList = Array.from(
      formElement.querySelectorAll(".modal-form__set")
    );
    fieldsetList.forEach((fieldset) => {
      const form = new FormValidator(formElement, fieldset);
      form.enableValidation();
    });
  });
};

renderFormValidator();
