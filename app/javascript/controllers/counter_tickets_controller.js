import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="counter-tickets"
export default class extends Controller {
  static targets = ["value", "price", "total", "quantity", "max", "compra"]
  static values = { path: String }

  sumar(event) {
    event.preventDefault()
    let count = parseInt(this.valueTarget.innerText, 10)
    if (count < this.cant_max()) {
      this.valueTarget.innerText = count + 1
    }
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

  cant_max() {
    const max = parseInt(this.maxTarget.innerText, 0)
    return max
  }

  total() {
    let price = parseFloat(this.priceTarget.innerText) || 0;
    let count = parseInt(this.valueTarget.innerText, 0)
    const total = count * price
    this.totalTarget.innerText = total.toFixed(2)
    this.quantityTarget.innerText = count

    if (count > 0) {
      this.compraTarget.disabled = false
    } else {
      this.compraTarget.disabled = true
    }
  }

  submitTickets(event) {
    event.preventDefault();
    const quantity = +this.quantityTarget.innerText;
    const total_price = +this.totalTarget.innerText;
    const url = `${this.pathValue}?quantity=${quantity}&total_price=${total_price}`;
    window.location.href = url;
  }
}
