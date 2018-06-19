import { Component } from '@angular/core';

import { TheMovieDbApiService } from './../../providers/the-movie-db-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  cinemaListings: any[];
  constructor( private _theMovieDbApi: TheMovieDbApiService) {
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
}
