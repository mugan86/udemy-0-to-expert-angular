import { Component, OnInit } from '@angular/core';
import { HeroesService } from './../../services/heroes.service';
import { Heroe } from './../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
    ` .table-responsive {
        margin-top: 15px;
      }
    `
  ]
})
export class HeroesComponent implements OnInit {
  heroes: Heroe;
  loading = true;
  constructor(private _heroesService: HeroesService) { }

  ngOnInit() {
    this._heroesService.getHeroes().subscribe((data: Heroe) => {
      this.heroes = data;
      console.log(this.heroes);
      this.loading = false;
     });
  }

  delete(key$: string) {
    console.log('Delete...', key$);
    this._heroesService.deleteHero(key$)
      .subscribe( response => {
        console.log(response);
        if (response ) {
          console.error( response );
        } else {
          delete this.heroes[key$];
        }
      });
  }
}
