import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  artists: any[] = [];
  loading: boolean;
  constructor(private _spotifyService: SpotifyService) {
    this.loading = false;
  }

  search(findText: string) {
    console.log(findText);
    if (findText.length > 0) {
      this.loading = true;
      this._spotifyService.getArtist(findText)
      .subscribe((data: any) => {
        this.artists = data;
        this.loading = false;
      });
    }
  }
}
