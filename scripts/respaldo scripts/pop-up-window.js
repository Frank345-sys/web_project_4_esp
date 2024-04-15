let imageCard = document.querySelectorAll(".card__photo-item");
let popUpWindow = document.querySelector(".content-pop-up");

imageCard.forEach(function (itemImage, i) {
  itemImage.addEventListener("click", function () {
    disableScroll();
    popUpWindow.children[0].children[1].src = this.getAttribute("src");
    popUpWindow.children[0].children[2].textContent =
      this.nextElementSibling.children[0].textContent;
    popUpWindow.classList.toggle("content-pop-up_visibility_visible");
  });
});

popUpWindow.children[0].children[0].addEventListener("click", function () {
  enableScroll();
  popUpWindow.classList.toggle("content-pop-up_visibility_visible");
});
