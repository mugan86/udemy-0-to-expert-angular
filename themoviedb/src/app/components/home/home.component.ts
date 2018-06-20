import { Component } from '@angular/core';

import { TheMovieDbApiService } from './../../providers/the-movie-db-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cinemaListings: any[];
  numberList = [];
  constructor( private _theMovieDbApi: TheMovieDbApiService) {
    this.numberList = this.generateRandomPositions(6, 20);
    this._theMovieDbApi.getMostPopular().subscribe((data: any) => {
      console.log(data);
    });

    this._theMovieDbApi.getKidsMostPopular().subscribe( (data: any ) => {
      console.log(data);
    });

    this._theMovieDbApi.newMoviesInNextWeek().subscribe( (data: any ) => {
      console.log(data);
      this.cinemaListings = data;
    });
  }

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
