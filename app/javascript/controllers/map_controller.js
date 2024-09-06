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
  }

  createMap(marker) {

    if (marker.lng === null && marker.lat === null) {
      this.mapTarget = new mapboxgl.Map({
        container: this.element,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [ -77.0428, -12.0464 ], //Lima
        zoom: 12
      })
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
