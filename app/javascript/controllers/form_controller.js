import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {
  static targets = ["quantity", "price", "totalPrice"];
  connect() {
    alert('Hello from form controller')
    console.log(this.quantityTarget)
  }

  calculate(){
      const quantity = parseInt(this.quantityTarget.value);
      const price = parseFloat(this.priceTarget.textContent);
      const totalPrice = quantity * price;
      this.totalPriceTarget.value = totalPrice.toFixed(2);
  }
}
