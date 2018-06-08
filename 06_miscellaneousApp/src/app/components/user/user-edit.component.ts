import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  template: `
    <p>
      user-edit works!
    </p>
  `,
  styles: []
})
export class UserEditComponent {

  constructor(private router: ActivatedRoute) {
    this.router.parent.params.subscribe(p => {
      console.log('Params Child (edit) ROUTE');
      console.log(p);
    }); }

}
