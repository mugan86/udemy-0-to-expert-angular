import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from './../../interfaces/heroe.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  heroe: Heroe = {
    name: '',
    company: 'Marvel',
    bio: ''
  };

  new = false;
  id: string;

  constructor( private _heroesService: HeroesService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe ( params =>  {
      this.id = params['id'];
      if (this.id !== 'new') {
        this._heroesService.getHeroe( this.id )
          .subscribe ( data => console.log(data));
      }
    });
  }

  ngOnInit() {
  }

  save() {
    console.log('Save action');
    console.log(this.heroe);
    if ( this.id === 'new') {
      console.log('new');
      this._heroesService.newHero(this.heroe)
        .subscribe( data => {
          this.router.navigate(['/heroe', data.name]);
        },
        error => console.error(error));
    } else {
      console.log(`Update ${ this.id }`);
      this._heroesService.updateHero(this.heroe, this.id)
        .subscribe( data => {
          console.log(data);
        },
        error => console.error(error));
    }
  }

  addNew( form: NgForm) {
    this.router.navigate(['/heroe', 'new']);
    form.onReset();
  }

}
