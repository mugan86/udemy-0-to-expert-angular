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
  constructor( private _spotifyService: SpotifyService) {
    this.loading = true;
    this._spotifyService.getNewReleases()
      .subscribe((data: any) => {
        this.albums = data;
        console.log(this.albums);
        this.loading = false;
      });
  }

}
