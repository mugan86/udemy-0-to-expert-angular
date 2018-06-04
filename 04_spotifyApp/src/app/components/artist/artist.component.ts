import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
  artist: any = {};
  loading: boolean;
  constructor( private router: ActivatedRoute, private _spotifyService: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe( params => {
      console.log(params.id);
      this._spotifyService.getArtist(params.id)
        .subscribe((data: any) => {
          this.artist = data;
          console.log(this.artist);
          this.loading = false;
        });
    });
  }

}
