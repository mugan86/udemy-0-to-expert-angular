import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit,
          AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

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
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit,
  AfterViewInit, AfterViewChecked, OnDestroy {
  constructor() {
    console.log('Constructor');
  }
  ngOnInit(): void {
    console.log('On Init');
  }
  ngOnChanges(): void {
    console.log('On Changes');
  }
  ngDoCheck(): void {
    console.log('Do Check');
  }
  ngAfterContentChecked(): void {
    console.log('After Content Checked');
  }
  ngAfterContentInit(): void {
    console.log('After Content Init');
  }
  ngAfterViewInit(): void {
    console.log('After View Init');
  }
  ngAfterViewChecked(): void {
    console.log('After View Checked');
  }
  ngOnDestroy(): void {
    console.log('On Destroy');
  }

}
