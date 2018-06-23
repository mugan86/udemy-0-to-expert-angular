import { Component } from '@angular/core';

import { TheMovieDbApiService } from './../../providers/the-movie-db-api.service';
import { MovieShow } from './../../interfaces/movie-show.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cinemaListings: MovieShow[];
  populars: MovieShow[];
  kids: MovieShow[];
  constructor( private _theMovieDbApi: TheMovieDbApiService) {
    this._theMovieDbApi.getMostPopular().subscribe((data: MovieShow[]) => {
      this.populars = data;
    });

    this._theMovieDbApi.getKidsMostPopular().subscribe( (data: MovieShow[] ) => {
      this.kids = data;
    });

    this._theMovieDbApi.newMoviesInNextWeek().subscribe( (data: MovieShow[] ) => {
      this.cinemaListings = data;
    });
  }
}
