import { Application } from "@hotwired/stimulus"
import FormController from "./form_controller"
import CounterTicketsController from "./counter_tickets_controller"
import HomeController from "./home_controller"

const application = Application.start()
application.register('form', FormController)
application.register('counter-tickets', CounterTicketsController)
application.register('home', HomeController)

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
