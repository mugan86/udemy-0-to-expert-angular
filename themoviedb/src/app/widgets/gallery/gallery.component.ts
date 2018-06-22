import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  @Input('elements') elements;
  @Input('title') title;
  constructor() { }

  /**
    *
    */
  generateRandomPositions(listSize: number, limitResults: number) {
    const numberList = [];
    do {
      const randomNumber = Math.floor(Math.random() * limitResults);
      if (numberList.indexOf(randomNumber) === -1) {
        numberList.push(randomNumber);
      }
    } while (numberList.length < listSize);
    return numberList;
  }

}
