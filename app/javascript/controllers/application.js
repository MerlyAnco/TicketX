import { Application } from "@hotwired/stimulus"
import FormController from "./form_controller"
import CounterTicketsController from "./counter_tickets_controller"
import HomeController from "./home_controller"
import CarouselCategoryController from "./carousel_category_controller"
<<<<<<< HEAD
<<<<<<< HEAD
import SweetalertController from "./sweetalert_controller"
=======
import PaymentController from "./payment_controller"
>>>>>>> 2b11c4a81a68b99c658d7bf7aaab25eae1ae6960
=======
import SweetalertController from "./sweetalert_controller"
>>>>>>> 057d48c (terminado sweet alert)

const application = Application.start()
application.register('form', FormController)
application.register('counter-tickets', CounterTicketsController)
application.register('home', HomeController)
application.register('category-filter', CarouselCategoryController)
<<<<<<< HEAD
<<<<<<< HEAD
application.register('sweetalert', SweetalertController)
=======
application.register('payment', PaymentController)
>>>>>>> 2b11c4a81a68b99c658d7bf7aaab25eae1ae6960
=======
application.register('sweetalert', SweetalertController)
>>>>>>> 057d48c (terminado sweet alert)

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
