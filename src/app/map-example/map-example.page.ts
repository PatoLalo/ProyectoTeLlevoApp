import { Component, OnInit } from '@angular/core';
// import { GoogleMap } from '@capacitor/google-maps';
// import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-map-example',
  templateUrl: './map-example.page.html',
  styleUrls: ['./map-example.page.scss'],
})
export class MapExamplePage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.mostrarMapa()
  }

  async mostrarMapa(){
      /* const location = await Geolocation.getCurrentPosition();
      const apiKey = 'AIzaSyD3mIeOgo0pdGjFNf6wcIBcSn87Qfo_fmo';
    
      const mapRef = document.getElementById('map')!;
      
      const newMap = await GoogleMap.create({
        id: 'my-map', // Unique identifier for this map instance
        element: mapRef, // reference to the capacitor-google-map element
        apiKey: apiKey, // Your Google Maps API Key
        config: {
          center: {
            // The initial position to be rendered by the map
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          },
          zoom: 15, // The initial zoom level to be rendered by the map
        },
      }); */
  }
}
