import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="sweetalter"
export default class extends Controller {
  connect() {
    console.log("Connecting to data-controller")
    const noticeMessage = this.data.get("notice");
    console.log(noticeMessage)
    if (noticeMessage) {
      this.showAlert(noticeMessage);
    }
  }

  showAlert(message) {
    console.log(message);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 10000,
      width: '400px',
    });
  }
}
