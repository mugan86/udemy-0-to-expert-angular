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
  constructor() { }

  ngOnInit() {
  }

  addAlertTypeClass() {
    if (this.alert === 'alert-danger') {
      this.alert = 'alert-info';
    } else {
      this.alert = 'alert-danger';
    }
  }

}
