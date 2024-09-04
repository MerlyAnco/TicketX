import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {
  static targets = ["quantity", "price", "total", "totalPrice"];
  connect() {
    console.dir(this.totalTarget)
  }

  calculate(){
      const quantity = parseInt(this.quantityTarget.value);
      const price = parseFloat(this.priceTarget.textContent);
      const totalPrice = quantity * price;
      this.totalTarget.textContent = totalPrice.toFixed(2);
      this.totalPriceTarget.value = totalPrice.toFixed(2);
  }
}
