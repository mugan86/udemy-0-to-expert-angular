import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;
  constructor( private router: ActivatedRoute, private _spotifyService: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe(params => {
      this.getDetails(params['id']);
      this.getTopTracks(params['id']);
    });
  }


  getDetails(id: string) {
    this._spotifyService.getArtist(id)
      .subscribe((data: any) => {
        this.artist = data;
        console.log(this.artist);
        this.loading = false;
      });
  }

  getTopTracks(id: string) {
    this._spotifyService.getArtistTopTracks(id)
      .subscribe((data: any) => {
        console.log(data);
        this.topTracks = data;
        this.loading = false;
      });
  }

}
