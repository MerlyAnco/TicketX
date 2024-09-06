import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["category", "event"]

  connect() {
    console.log('connecting')
    new Splide('#categoryCarousel', {
      type: 'loop',
      perPage: 5,
      perMove: 1,
      pagination: false,
      arrows: true,
      gap: '1rem',
    }).mount();
  }

  filter(event) {
    const selectedCategory = event.target.closest("[data-category-filter-target='category']").dataset.category;

    this.categoryTargets.forEach(categoryCard => {
      categoryCard.classList.remove('active');
    });

    event.target.closest("[data-category-filter-target='category']").classList.add('active');

    this.eventTargets.forEach(eventCard => {
      const eventCategory = eventCard.dataset.category;
      if (selectedCategory === "all" || eventCategory === selectedCategory) {
        eventCard.style.setProperty('display', 'block', 'important');
      } else {
        eventCard.style.setProperty('display', 'none', 'important');
      }
    });
 }
}
