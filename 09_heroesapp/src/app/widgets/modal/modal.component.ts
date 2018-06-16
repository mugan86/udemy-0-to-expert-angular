import { Component, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() title;
  @Input() body;
  @Input() key$;
  @Input() heroes;

  constructor(public activeModal: NgbActiveModal,
              private _heroesService: HeroesService) { }

  confirm() {
    console.log('OK', this.key$);
    this._heroesService.deleteHero(this.key$)
      .subscribe(response => {
        console.log(response);
        if (response) {
          console.error(response);
        } else {
          delete this.heroes[this.key$];
        }
      });
    this.activeModal.dismiss();
  }

}
