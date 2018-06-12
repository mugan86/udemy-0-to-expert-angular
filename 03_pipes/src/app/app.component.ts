import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Anartz';
  numbersList = Array.from(Array(29).keys()); // [0,...,28]
  PI = Math.PI;
}
