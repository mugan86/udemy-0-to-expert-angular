import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent {

  constructor( private router: ActivatedRoute) {
    this.router.params.subscribe( p => {
      console.log('Params Father ROUTE');
      console.log(p);
    });
  }

}
