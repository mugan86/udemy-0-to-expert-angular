import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styles: []
})
export class ClassesComponent implements OnInit {
  alert = 'alert-danger';
  properties: Object = {
    danger: true
  };
  loading = false;
  constructor() { }

  ngOnInit() {
  }

  exectProccess() {
    this.loading = true;
    setTimeout( () => this.loading = false, 3000);
  }

}
