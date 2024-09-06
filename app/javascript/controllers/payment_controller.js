import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="payment"
export default class extends Controller {
  static targets = ["cvc", "expDate", "card"]
  connect() {
  }

  validation(result, exp){
    if (result !== true) {
      exp.classList.add('border-danger')
    } else {
      exp.classList.remove('border-danger')
      exp.classList.add('border-success')
    }
  }

  cvcCheck() {
    const cvcRegex = /^\d{3}$/;
    const exp = this.cvcTarget
    const result = cvcRegex.test(exp.value);
    this.validation(result, exp)
  }

  expDateCheck() {
    const expDateRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    const exp = this.expDateTarget
    const result = expDateRegex.test(exp.value);
    this.validation(result, exp)
  }

  cardCheck() {
    const cardRegex = /^(?:\d{4}[-\s]?){3}\d{4}|\d{15,16}$/;
    const exp = this.cardTarget
    const result = cardRegex.test(exp.value);
    this.validation(result, exp)
  }


}
