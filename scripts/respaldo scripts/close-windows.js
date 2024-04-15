let popPupWindow = document.querySelector(".content-pop-up");
let modal = document.querySelectorAll(".content-modal");

popPupWindow.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("content-pop-up_visibility_visible")) {
    this.classList.remove("content-pop-up_visibility_visible");
    enableScroll();
  }
});

modal.forEach(function (itemModal, i) {
  itemModal.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("content-modal_visibility_visible")) {
      this.classList.remove("content-modal_visibility_visible");
      enableScroll();
    }
  });
});

document.addEventListener("keydown", function (evt) {
  if (
    evt.key === "Escape" &&
    modal[0].classList.contains("content-modal_visibility_visible")
  ) {
    modal[0].classList.remove("content-modal_visibility_visible");
    enableScroll();
  } else if (
    evt.key === "Escape" &&
    modal[1].classList.contains("content-modal_visibility_visible")
  ) {
    modal[1].classList.remove("content-modal_visibility_visible");
    enableScroll();
  } else if (
    evt.key === "Escape" &&
    popPupWindow.classList.contains("content-pop-up_visibility_visible")
  ) {
    popPupWindow.classList.remove("content-pop-up_visibility_visible");
    enableScroll();
  }
});
