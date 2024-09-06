import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    new Splide("#carousel", {
      type: 'loop',
      perPage: 3,
      autoplay: true
    }).mount();
  }
}
