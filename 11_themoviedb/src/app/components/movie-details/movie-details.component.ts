import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from './../../interfaces/movie.interface';
import { TheMovieDbApiService } from './../../providers/the-movie-db-api.service';
import { YoutubeApiService } from '../../providers/youtube-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  trailer: any;
  beforePage: string;
  searchText = '';
  constructor(private router: ActivatedRoute,
              public _mtvshows: TheMovieDbApiService,
              private youtubeApi: YoutubeApiService,
              private route: Router) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.beforePage = params['page'];
      if (params['search']) {
        this.searchText = params['search'];
      }
      this._mtvshows.getMovie(params['id']).subscribe((res: Movie) => {
        this.movie = res;
        this.youtubeApi.getSearchVideos(`${this.movie.title} (${this.movie.release_date.substring(0,4)})`).subscribe((res: any) => {
          if (res[0]) {
            this.trailer = res[0];
          }
        })
      })
    });
    
  }

  returnToBeforePage() {
    if (this.searchText != '') {
      this.route.navigate([`/${this.beforePage}`, this.searchText]);
    } else {
      this.route.navigate([`/${this.beforePage}`]);
    }
    
  }

}
