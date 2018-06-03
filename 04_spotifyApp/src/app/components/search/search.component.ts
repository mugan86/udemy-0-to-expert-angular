import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artists: any[] = [];
  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  search(findText: string) {
    console.log(findText);
    this._spotifyService.getArtist(findText)
      .subscribe((data: any) => {
        this.artists = data.artists.items;
      });
  }

}
