import { Controller } from "@hotwired/stimulus"
import mapboxgl from "mapbox-gl";

// Connects to data-controller="map"
export default class extends Controller {
  static target = ["map"]
  static values = { apikey: String, marker: String, location: String }

  connect() {
    mapboxgl.accessToken = this.apikeyValue;
    this.showMap();
  }

  mapMarket(marker) {
    new mapboxgl.Marker()
    .setLngLat([ marker.lng, marker.lat ])
    .addTo(this.mapTarget);
    this.locationTarget.innerContent = this.locationValue;
  }

  createMap(marker) {
    if (marker.lng === null && marker.lat === null) {
      this.mapTarget.innerText = ''
    } else {
      this.mapTarget = new mapboxgl.Map({
        container: this.element,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [ marker.lng, marker.lat ],
        zoom: 15
      })
    }
    this.mapMarket(marker);
  }

  showMap() {
    const marker = JSON.parse(this.markerValue);
    this.createMap(marker);
  }
}
