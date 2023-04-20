let deleteButton = document.querySelectorAll(".card__button-delete");
let card = document.querySelectorAll(".card");

deleteButton.forEach(function (item, i) {
  item.addEventListener("click", function () {
    card[i].remove();
  });
});
