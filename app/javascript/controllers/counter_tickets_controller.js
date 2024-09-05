import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="counter-tickets"
export default class extends Controller {
  static targets = ["value", "price", "total", "quantity"]

  connect() {
    console.log("Hello from our first Stimulus controller");
    // this.count = 0
  }

  sumar(event) {
    event.preventDefault()
    let count = this.valueTarget.innerText
    this.valueTarget.innerText = parseInt(count, 10) + 1
    this.total()
  }

  restar(event) {
    event.preventDefault()
    let count = this.valueTarget.innerText
    count = parseInt(count, 10)
    if (count > 0) {
      this.valueTarget.innerText = parseInt(count, 10) - 1
    }
    this.total()
  }

  total() {
    let price = parseFloat(this.priceTarget.innerText) || 0;
    let count = parseInt(this.valueTarget.innerText, 0)
    const total = count * price
    this.totalTarget.innerText = total.toFixed(2)
    this.quantityTarget.innerText = count
  }
}
