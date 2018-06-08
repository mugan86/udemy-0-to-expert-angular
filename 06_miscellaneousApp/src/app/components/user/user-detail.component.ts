import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  template: `
    <p>
      user-detail works!
    </p>
  `,
  styles: []
})
export class UserDetailComponent {

  constructor( private router: ActivatedRoute) {
    this.router.parent.params.subscribe(p => {
      console.log('Params Child (detail) ROUTE');
      console.log(p);
    });
   }

}
