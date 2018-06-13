import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from './../../components/hero/hero.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
  // Take father component info
  @Input() hero: Hero;
  @Input() index: number;

  // Emit info to father components
  @Output() eventLog: EventEmitter<number>;

  constructor(private router: Router) {
    this.eventLog = new EventEmitter();
  }

  ngOnInit() {
  }

  viewHeroDetails() {
    this.router.navigate(['/hero', this.index]);
    this.eventLog.emit(this.index);
  }

}
