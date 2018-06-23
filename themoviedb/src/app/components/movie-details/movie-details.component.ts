import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from './../../interfaces/movie.interface';
import { TheMovieDbApiService } from './../../providers/the-movie-db-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  beforePage: string;
  constructor(private router: ActivatedRoute,
              public _mtvshows: TheMovieDbApiService,
              private route: Router) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      console.log(params['id'], params['page']);
      this.beforePage = params['page'];
      this._mtvshows.getMovie(params['id']).subscribe((res: Movie) => {
        this.movie = res;
        console.log(this.movie);
      })
    });
    
  }

  returnToBeforePage() {
    console.log('return', this.beforePage);
    this.route.navigate([`/${this.beforePage}`]);
  }

}
