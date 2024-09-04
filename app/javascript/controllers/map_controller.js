import { Controller } from "@hotwired/stimulus"
import mapboxgl from "mapbox-gl";

// Connects to data-controller="map"
export default class extends Controller {
  static target = ["map"]
  static values = { apikey: String, marker: Array, location: String }
  connect() {
    //mapboxgl.accessToken = this.apikeyValue
    this.showMap()
  }

  mapMarket(long, lat) {
    new mapboxgl.Marker()
    .setLngLat([long, lat])
    .addTo(this.mapTarget);
    console.dir(this.mapTarget);
  }

  createMap(long, lat) {
    this.mapTarget = new mapboxgl.Map({
      container: this.element,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [ long, lat ],
      zoom: 12
    })
    this.mapMarket(long, lat)
  }

  showMap() {
    const apiKey = "pk.eyJ1IjoibnJxcm16IiwiYSI6ImNrb2VtMHFyODBiaXYycXFwNThmdzcwNTEifQ.B1SFYSCKS5OdngEIcmOoXQ";
    const url = `https://api.mapbox.com/search/geocode/v6/forward?q=${this.locationValue}&access_token=${apiKey}`;
    fetch(url)
    .then(response => response.json())
    .then((data) => {
      const coordinates = data.features[0].properties.coordinates;
      const long = coordinates.longitude;
      const lat = coordinates.latitude;
      document.querySelector('.leap').innerText = `${long} ${lat}`;
      this.createMap(long, lat);
    });
  }
}
