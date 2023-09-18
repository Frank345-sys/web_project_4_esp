import "./styles/index.css";
import {
  contentCardList,
  formList,
  contentPopUpEdit,
  contentPopUpAdd,
  contentPopUpEditPhoto,
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
  profileImage,
  labelName,
  labelOcupation,
  inputNamePlace,
  inputUrlPlace,
  inputUrlEdit,
  photoEdit,
} from "./utils/constants.js";

import { Card } from "./components/Card.js";

import { PopUpWithFormAdd } from "./components/PopUpWithFormAdd.js";

import { PopUpWithFormEdit } from "./components/PopUpWithFormEdit.js";

import { PopUpWithPhotoEdit } from "./components/PopUpWithPhotoEdit.js";

import { FormValidator } from "./components/FormValidator.js";

import { Section } from "./components/Section.js";

import { Api } from "./components/Api.js";

const getCards = new Api({
  baseUrl: "cards",
  method: "GET",
  body: null,
  headers: {
    authorization: "28d1f77b-3605-449f-bf16-20a5216f8fdb",
    "Content-Type": "application/json",
  },
});

getCards
  .card()
  .then((result) => {
    console.log(result);
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

const getInformationProfile = new Api({
  baseUrl: "users/me",
  method: "GET",
  body: null,
  headers: {
    authorization: "28d1f77b-3605-449f-bf16-20a5216f8fdb",
    "Content-Type": "application/json",
  },
});

getInformationProfile
  .profile()
  .then((result) => {
    console.log(result);
    photoEdit.src = result.avatar;
    labelName.textContent = result.name;
    labelOcupation.textContent = result.about;
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    photoEdit.style.zIndex = "0";
    profileImage.classList.remove("shimmer");
    labelName.classList.remove("shimmer");
    labelOcupation.classList.remove("shimmer");
  });

const renderPopUps = () => {
  const PopUpFormEdit = new PopUpWithFormEdit(
    contentPopUpEdit,
    "content-modal_visibility_visible",
    buttonCloseModalEdit,
    buttonOpenModalEdit,
    buttonSubmitEdit,
    inputName,
    inputOcupation,
    labelName,
    labelOcupation
  );
  PopUpFormEdit.setEventListeners();

  const PopUpFormAdd = new PopUpWithFormAdd(
    contentPopUpAdd,
    "content-modal_visibility_visible",
    buttonCloseModalAdd,
    buttonOpenModalAdd,
    buttonSubmitAdd,
    inputNamePlace,
    inputUrlPlace
  );
  PopUpFormAdd.setEventListeners();

  const PopUpPhotoEdit = new PopUpWithPhotoEdit(
    contentPopUpEditPhoto,
    "content-modal_visibility_visible",
    buttonCloseModalEditPhoto,
    buttonOpenModalEditPhoto,
    buttonSubmitEditPhoto,
    inputUrlEdit,
    photoEdit
  );
  PopUpPhotoEdit.setEventListeners();
};

renderPopUps();

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
