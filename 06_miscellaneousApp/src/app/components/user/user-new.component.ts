import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-new',
  template: `
    <p>
      user-new works!
    </p>
  `,
  styles: []
})
export class UserNewComponent {

  constructor(private router: ActivatedRoute) {
    this.router.parent.params.subscribe(p => {
      console.log('Params Child (new) ROUTE');
      console.log(p);
    });
   }

}
