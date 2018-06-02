import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './../hero/hero.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
  @Input() hero: Hero;
  @Input() index: number;
  constructor( private router: Router) { }

  ngOnInit() {
  }

  viewHeroDetails() {
    this.router.navigate(['/hero', this.index]);
  }

}
