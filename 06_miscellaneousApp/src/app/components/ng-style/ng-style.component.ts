import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p> Modo normal sin aplicar directiva ngStyle</p>
    <p style="font-size:10px">
      Hola mundo... esta es una etiqueta
    </p>
    <p> <b><u>Aplicando ngStyle</u></b></p>
    <p [ngStyle]="{'font-size' : '25px'}">
      Hola mundo... esta es una etiqueta
    </p>
    <p> <b><u>Aplicando ngStyle con valor dinámico de una variable</u></b></p>
    <p [ngStyle]="{'font-size' : size + 'px'}">
      Hola mundo... esta es una etiqueta (30px)
    </p>
    <p> <b><u>Aplicando ngStyle (la más limpia)</u></b></p>
    <p [style.fontSize.px]="size">
      Hola mundo... esta es una etiqueta (30px)
    </p>

    <hr/>
    <button class="btn btn-primary" (click)="changeFontSize(true)">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="changeFontSize(false)">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  size = 30;
  constructor() { }

  ngOnInit() {
  }

  changeFontSize(plus: boolean) {
    if (plus && this.size < 100) {
      this.size = this.size + 5;
    } else if (!plus && this.size >= 10) { // Minimize size
      this.size = this.size - 5;
    }
    if ( this.size < 10 || this.size > 100) {
      console.warn('The size is not posible change because take min-max limit');
    }
  }

}
