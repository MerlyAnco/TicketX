import { Application } from "@hotwired/stimulus"
import FormController from "./form_controller"

const application = Application.start()
application.register('form', FormController)

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
