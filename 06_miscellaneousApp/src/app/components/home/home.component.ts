import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
     <app-css></app-css>
     <p>Hola mundo desde app.component.html</p>
    <app-ng-style></app-ng-style>
    <app-classes></app-classes>
    <p [appHighlighted]="'orange'">
        Hola mundo (cursor arriba tendrá background orange)
    </p>
    <p appHighlighted>
        Hola mundo (cursor arriba tendrá background yellow)
    </p>
    <!--Video 138-->
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
