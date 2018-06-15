import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
