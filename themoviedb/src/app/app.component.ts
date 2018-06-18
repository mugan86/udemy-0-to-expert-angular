import { Component, OnInit} from '@angular/core';

import { TheMovieDbApiService } from './providers/the-movie-db-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor( private _theMovieDbApi: TheMovieDbApiService) { }
  ngOnInit() {
    this._theMovieDbApi.getMostPopular().subscribe((data: any) => {
      console.log(data);
     });
  }
}
