export class FormValidator {
  constructor(form, formElements) {
    this._form = form;
    this._formElements = formElements;
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add("button_inactive");
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove("button_inactive");
      this._buttonElement.disabled = false;
    }
  }

  _showInputError() {
    this._errorElement = this._form.querySelector(
      `.error_${this._inputElementList.id}`
    );

    this._inputElementList.classList.add("input_error-active");
    this._errorElement.classList.add("error_active");
    this._errorElement.textContent = this._inputElementList.validationMessage;
  }

  _hideInputError() {
    this._errorElement = this._form.querySelector(
      `.error_${this._inputElementList.id}`
    );

    this._inputElementList.classList.remove("input_error-active");
    this._errorElement.classList.remove("error_active");
    this._errorElement.textContent = "";
  }

  _checkInputValidity() {
    if (!this._inputElementList.validity.valid) {
      this._showInputError();
    } else {
      this._hideInputError();
    }
  }

  enableValidation() {
    this._inputList = Array.from(this._formElements.querySelectorAll(".input"));
    this._buttonElement = this._formElements.querySelector(".button");

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._inputElementList = inputElement;
        this._checkInputValidity();
        this._toggleButtonState();
      });
    });

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
  }
}
