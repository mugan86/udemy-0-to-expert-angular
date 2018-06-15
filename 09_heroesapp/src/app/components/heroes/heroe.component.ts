import { Component, OnInit } from '@angular/core';
import { Heroe } from './../../interfaces/heroe.interface';
import { Router } from '@angular/router';
import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  heroe: Heroe = {
    name: '',
    company: 'Marvel',
    bio: ''
  };
  constructor( private _heroesService: HeroesService,
              private route: Router) { }

  ngOnInit() {
  }

  save() {
    console.log('Save action');
    console.log(this.heroe);
    this._heroesService.newHero(this.heroe)
      .subscribe( data=> {
        this.route.navigate(['/heroe', data.name]);
      },
      error=> console.error(error));
  }

}
