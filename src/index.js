import "./styles/index.css";
import {
  contentCardList,
  formList,
  contentPopupEdit,
  contentPopupAdd,
  contentPopupEditPhoto,
  buttonCloseModalEdit,
  buttonCloseModalAdd,
  buttonCloseModalEditPhoto,
  buttonOpenModalEdit,
  buttonOpenModalAdd,
  buttonOpenModalEditPhoto,
  buttonSubmitEdit,
  buttonSubmitAdd,
  buttonSubmitEditPhoto,
  inputName,
  inputOcupation,
  labelName,
  labelOcupation,
  inputNamePlace,
  inputUrlPlace,
  inputUrlEdit,
  profileImage,
  photoEdit,
  getCards,
} from "./utils/constants.js";

import { Card } from "./components/Card.js";

import { PopupWithFormAdd } from "./components/PopupWithFormAdd.js";

import { PopupWithFormEdit } from "./components/PopupWithFormEdit.js";

import { PopupWithFormPhotoEdit } from "./components/PopupWithFormPhotoEdit.js";

import { FormValidator } from "./components/FormValidator.js";

import { Section } from "./components/Section.js";

import { UserInfo } from "./components/UserInfo.js";

getCards
  .card()
  .then((result) => {
    const cardList = new Section(
      {
        data: result,
        renderer: (item) => {
          const card = new Card(
            item.name,
            item.link,
            item._id,
            item.likes,
            item.owner,
            ".card-template"
          );
          const cardElement = card.generateCard();
          cardList.addItem(cardElement);
        },
      },
      contentCardList
    );

    cardList.renderItems();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    contentCardList.classList.remove("shimmer");
  });

const getUserInfo = new UserInfo();

// Obtener información del usuario
getUserInfo
  .getUserInfo()
  .then((result) => {
    photoEdit.src = result.avatar;
    labelName.textContent = result.name;
    labelOcupation.textContent = result.about;
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    photoEdit.style.zIndex = "0";
    profileImage.classList.remove("shimmer");
    labelName.classList.remove("shimmer");
    labelOcupation.classList.remove("shimmer");
  });

const renderPopups = () => {
  const PopupFormEdit = new PopupWithFormEdit(
    contentPopupEdit,
    "content-modal_visibility_visible",
    buttonCloseModalEdit,
    buttonOpenModalEdit,
    buttonSubmitEdit,
    inputName,
    inputOcupation,

    labelName,
    labelOcupation
  );
  PopupFormEdit.setEventListeners();

  const PopupFormAdd = new PopupWithFormAdd(
    contentPopupAdd,
    "content-modal_visibility_visible",
    buttonCloseModalAdd,
    buttonOpenModalAdd,
    buttonSubmitAdd,
    inputNamePlace,
    inputUrlPlace
  );
  PopupFormAdd.setEventListeners();

  const PopupFormPhotoEdit = new PopupWithFormPhotoEdit(
    contentPopupEditPhoto,
    "content-modal_visibility_visible",
    buttonCloseModalEditPhoto,
    buttonOpenModalEditPhoto,
    buttonSubmitEditPhoto,
    inputUrlEdit,
    photoEdit
  );
  PopupFormPhotoEdit.setEventListeners();
};

renderPopups();

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
