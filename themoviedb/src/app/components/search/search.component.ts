import { Component, Input } from '@angular/core';
import { TheMovieDbApiService } from './../../providers/the-movie-db-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  search = '';
  @Input() index;
  constructor(
              public _mtvshows: TheMovieDbApiService,
              private router:ActivatedRoute,
              private route: Router) {
    this.router.params.subscribe( params => {
      if ( params['text'] ) {
        this.search = params['text'];
        this.searchMovie();
      }
    });
  }
  searchMovie() {
    if (this.search.length === 0) {
      return;
    }
    this._mtvshows.searchMovie( this.search ).subscribe();
  }

  viewResultDetails(id: number) {
    console.log('click', id);
    this.route.navigate(['/movie', id, 'search']);
  }
}
