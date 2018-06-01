import { Component, OnInit } from '@angular/core';
import { HeroesService } from './../../services/heroes.service';
import { Heroe } from './hero.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  constructor( private _heroesService: HeroesService) {
    console.log('Constructor Heroes Component');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

}
