import { Component, OnInit } from '@angular/core';
import { Marker } from '../../classes/marker.class';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  markers: Marker[] = [];
  lat = 51.678418;
  lng = 7.809007;
  constructor( private snackBar: MatSnackBar ) {
    if (JSON.parse(localStorage.getItem('markers')) != null) {
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }
    const newMarker = new Marker(51.678418, 7.809007);
    this.markers.push(newMarker);
  }

  addMarker( event ) {
    console.log(event);
    // this.markers.push(new Marker(event.coords.lat, event.coords.lng));
    const coords: { lat: number, lng: number} = event.coords;
    const newMarker = new Marker(coords.lat, coords.lng);
    this.markers.push( newMarker );
    this.saveInStorage();
    // Simple message with an action.
    this.snackBar.open('Marker correctly add!', 'Close', {
      duration: 3000
    });
  }

  saveInStorage() {
    localStorage.setItem('markers', JSON.stringify( this.markers ));
  }

  deleteSelectMarker(marker) {
    this.markers.splice(marker, 1);
    this.saveInStorage();
    // Simple message with an action.
    this.snackBar.open('Marker delete successfully!', 'Close', {
      duration: 3000
    });
  }

}
