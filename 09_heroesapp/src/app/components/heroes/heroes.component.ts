import { Component, OnInit } from '@angular/core';
import { HeroesService } from './../../services/heroes.service';

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
  heroes: Heroe[];
  constructor(private _heroesService: HeroesService) { }

  ngOnInit() {
    this._heroesService.getHeroes().subscribe(data => { 
      this.heroes = data;
      console.log(this.heroes);
     });
  }
}
