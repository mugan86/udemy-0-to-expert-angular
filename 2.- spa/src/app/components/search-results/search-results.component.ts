import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './../../services/heroes.service';
import { Hero } from './../hero/hero.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  findText: string;
  heroes: Hero[];
  constructor( private activateRoute: ActivatedRoute,
              private _heroesService: HeroesService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe( params => {
      this.heroes = this._heroesService.searchHeroe(params.text);
      this.findText = params.text;
    });
  }

}
