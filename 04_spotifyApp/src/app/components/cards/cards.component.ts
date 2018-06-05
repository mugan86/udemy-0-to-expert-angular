import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() items: any [] = [];
  constructor( private router: Router) { }

  showArtist( item: any) {
    let artistId;
    if (item.type === 'album') {
      artistId = item.artists[0].id;
    } else if (item.type === 'artist') {
      artistId = item.id;
    }
    console.log(artistId);

    this.router.navigate(['/artist', artistId]);
  }

}
