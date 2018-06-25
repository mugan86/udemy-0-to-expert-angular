import { Component, OnInit } from '@angular/core';
import { TheMovieDbApiService } from './../../../providers/the-movie-db-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor( public _mtvshows: TheMovieDbApiService, private router: Router ) { }

  searchMovie( text: string) {
    if (text.length === 0) {
      return;
    }
    this._mtvshows.searchMovie( text ).subscribe();
    this.router.navigate(['search', text]);
  }
}
