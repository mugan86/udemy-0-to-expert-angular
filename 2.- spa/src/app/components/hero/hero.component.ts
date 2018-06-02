import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from './hero.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  selectHero: Hero;
  constructor( private activatedRoute: ActivatedRoute,
                private router: Router,
                private _heroesService: HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      console.log( params.id );
      this.selectHero = this._heroesService.getHero(params.id);
    });
  }

  returnToList() {
    this.router.navigate(['/heroes']);
  }

}
