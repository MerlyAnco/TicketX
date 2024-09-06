import { Application } from "@hotwired/stimulus"
import FormController from "./form_controller"
import CounterTicketsController from "./counter_tickets_controller"
import HomeController from "./home_controller"
import CarouselCategoryController from "./carousel_category_controller"
import SweetalertController from "./sweetalert_controller"
import PaymentController from "./payment_controller"

const application = Application.start()
application.register('form', FormController)
application.register('counter-tickets', CounterTicketsController)
application.register('home', HomeController)
application.register('category-filter', CarouselCategoryController)
application.register('sweetalert', SweetalertController)
application.register('payment', PaymentController)

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
