import { Component, OnInit } from '@angular/core';
import { HeroesService } from './../../services/heroes.service';
import { Heroe } from './../../interfaces/heroe.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../widgets/modal/modal.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
    ` .table-responsive {
        margin-top: 15px;
      }
    `
  ]
})
export class HeroesComponent implements OnInit {
  heroes: Heroe;
  loading = true;
  constructor(private _heroesService: HeroesService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this._heroesService.getHeroes().subscribe((data: Heroe) => {
      this.heroes = data;
      console.log(this.heroes);
      this.loading = false;
     });
  }

  delete(key$: string) {
    const selectHeroQuestion = `¿Estás segur@ de querer borrar el heroe ${ this.heroes[key$].name }?`;
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Eliminar heroe';
    modalRef.componentInstance.body = selectHeroQuestion;
    modalRef.componentInstance.key$ = key$;
    modalRef.componentInstance.heroes = this.heroes;
  }
}
