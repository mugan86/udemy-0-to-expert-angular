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
  a = 0.259;
  b = 1.3495;
  money = 123456.4;
  hero = {
    name: 'Logan',
    age: 500,
    key: 'Wolverine',
    address: {
      street: 'First',
      number: '19'
    }
  };

  promiseValue = new Promise( ( resolve, reject) => {
    setTimeout( () => resolve('Take data!!'), 3500 );
  });
}
