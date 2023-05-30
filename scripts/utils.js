//const Utils = (() => {
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

const scroll = new Scroll();

class popUp {
  constructor(popUpWindow, modalButtonClose) {
    this.popUpWindow = popUpWindow;
    this.modalButtonClose = modalButtonClose;
  }

  _openOrClosePopUp() {
    this.popUpWindow.classList.toggle("content-pop-up_visibility_visible");
  }

  _modalButtonCloseEventListener() {
    this.modalButtonClose.addEventListener("click", () => {
      this._openOrClosePopUp();
      scroll.enableScroll();
    });
  }

  _popUpWindowEventListener() {
    this.popUpWindow.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("content-pop-up_visibility_visible")) {
        this._openOrClosePopUp();
        scroll.enableScroll();
      }
    });

    document.addEventListener("keydown", (evt) => {
      if (
        evt.key === "Escape" &&
        this.popUpWindow.classList.contains("content-pop-up_visibility_visible")
      ) {
        this._openOrClosePopUp();
        scroll.enableScroll();
      }
    });
  }

  setEventListeners() {
    this._modalButtonCloseEventListener();
    this._popUpWindowEventListener();
  }
}

const renderUtils = () => {
  const modalPopUp = new popUp(
    popUpWindow,
    popUpWindow.children[0].children[0]
  );
  modalPopUp.setEventListeners();
};

//})();

//export default Utils;

export { Scroll, popUpWindow, renderUtils };
