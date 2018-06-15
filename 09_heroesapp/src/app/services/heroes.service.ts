import { Injectable } from '@angular/core';
// https://angular.io/guide/http#adding-headers IMPORTANTE!!!
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from './../interfaces/heroe.interface';
import {map} from 'rxjs/operators';

@Injectable()
export class HeroesService {
  // https://heroes-app-83fc9.firebaseio.com/heroes.json
  // https://heroes-app-83fc9.firebaseio.com/heroes/1.json
  // https://heroes-app-83fc9.firebaseio.com/heroes/1/name.json
  heroesUrl = "https://heroes-app-83fc9.firebaseio.com/heroes.json";
  constructor( private http: HttpClient) { }

  newHero( heroe: Heroe) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    // https://angular.io/guide/http#making-a-post-request
    return this.http.post<Heroe>( this.heroesUrl, heroe , httpOptions )
          .pipe(
          map( res => {
            console.log(res.name);
            return res;
          }));
  }
}
