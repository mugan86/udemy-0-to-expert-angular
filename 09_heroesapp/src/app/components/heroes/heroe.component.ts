import { Component, OnInit } from '@angular/core';
import { Heroe } from './../../interfaces/heroe.interface';

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
  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log('Save action');
    console.log(this.heroe);
  }

}
