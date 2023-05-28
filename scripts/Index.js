//(function () {
const contentModal = document.querySelectorAll(".content-modal");

const popUpWindow = document.querySelector(".content-pop-up");

class Scroll {
  disableScroll() {
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  }

  enableScroll() {
    window.onscroll = null;
  }
}

const renderIndex = () => {
  const scroll = new Scroll();

  popUpWindow.children[0].children[0].addEventListener("click", function () {
    popUpWindow.classList.toggle("content-pop-up_visibility_visible");
    scroll.enableScroll();
  });

  popUpWindow.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("content-pop-up_visibility_visible")) {
      this.classList.remove("content-pop-up_visibility_visible");
      scroll.enableScroll();
    }
  });

  document.addEventListener("keydown", (evt) => {
    if (
      evt.key === "Escape" &&
      contentModal[0].classList.contains("content-modal_visibility_visible")
    ) {
      contentModal[0].classList.remove("content-modal_visibility_visible");
      scroll.enableScroll();
    } else if (
      evt.key === "Escape" &&
      contentModal[1].classList.contains("content-modal_visibility_visible")
    ) {
      contentModal[1].classList.remove("content-modal_visibility_visible");
      scroll.enableScroll();
    } else if (
      evt.key === "Escape" &&
      popUpWindow.classList.contains("content-pop-up_visibility_visible")
    ) {
      popUpWindow.classList.remove("content-pop-up_visibility_visible");
      scroll.enableScroll();
    }
  });
};

renderIndex();

export { popUpWindow, Scroll };

//})();
