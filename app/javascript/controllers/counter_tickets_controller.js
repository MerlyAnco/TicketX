import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="counter-tickets"
export default class extends Controller {
  static targets = ["value"]

  connect() {
    console.log("Hello from our first Stimulus controller");
    // this.count = 0
  }

  sumar(event) {
    event.preventDefault()
    let count = this.valueTarget.innerText
    this.valueTarget.innerText = parseInt(count, 10) + 1
  }

  restar(event) {
    event.preventDefault()
    let count = this.valueTarget.innerText
    count = parseInt(count, 10)
    if (count > 0) {
      this.valueTarget.innerText = parseInt(count, 10) - 1
    }
  }
}
