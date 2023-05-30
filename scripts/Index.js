import { Scroll, popUpWindow, renderUtils } from "./utils.js";

import { Card, contentCardList, renderCards } from "./Card.js";

import { renderForms } from "./Forms.js";

import { renderFormValidator } from "./FormValidator.js";

//const Index = (() => {
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

const renderIndex = () => {
  //Se carga el Script Utils renderUtils();
  renderUtils();

  //Se carga el Script de las tarjetas a la pagina web
  renderCards(initialCards);

  //Se carga el Script de los formularios para manipularlos
  renderForms();

  //Se carga el Script para validar los formularios
  renderFormValidator();
};

renderIndex();

//})();
