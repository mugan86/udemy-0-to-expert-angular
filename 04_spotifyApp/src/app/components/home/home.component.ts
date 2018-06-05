import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  albums: any;
  loading: boolean;

  error: boolean;
  errorMessage: string;
  constructor( private _spotifyService: SpotifyService) {
    this.loading = true;
    this.error = false;
    if (localStorage.getItem('error') === 'error' || localStorage.getItem('error') === null) {
      this._spotifyService.getToken().subscribe((data: any) => {
        localStorage.setItem('token', data);
        console.log(data);
        localStorage.setItem('error', '-');
        this.getNewReleases();
      });
    } else {
      this.getNewReleases();
    }
  }

  getNewReleases() {
    this._spotifyService.getNewReleases()
      .subscribe((data: any) => {
        this.albums = data;
        console.log(this.albums);
        this.loading = false;
      }, (errorService) => {
        this.error = true;
        this.loading = false;
        localStorage.setItem('error', 'error');
        this.errorMessage = errorService.error.error.message + '. Please Refresh page';
      });
  }

}
