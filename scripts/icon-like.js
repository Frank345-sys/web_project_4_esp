let heartButton = document.querySelectorAll(".heart-button");
let iconHeart = document.querySelectorAll(".heart-button__icon");

heartButton.forEach(function (itemButton, i) {
  itemButton.addEventListener("click", function () {
    if (iconHeart[i].getAttribute("src") === "./images/vector_heart_icon.png") {
      iconHeart[i].setAttribute("src", "./images/vector_heart_icon-black.png");
    } else {
      iconHeart[i].setAttribute("src", "./images/vector_heart_icon.png");
    }
  });
});
