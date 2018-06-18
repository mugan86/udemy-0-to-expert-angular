import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable()
export class TheMovieDbApiService {
  private apiKey = '9600ef8b528a214cba2d53c6cdd71708';
  private urlLocalHost = 'https://api.themoviedb.org/3';

  constructor(private _http: HttpClient) {}

  private getURL(request: string, language: string): string {
    return `${this.urlLocalHost}${request}&api_key=${this.apiKey}&language=${language}&callback=JSONP_CALLBACK`;
  }

  getMostPopular() {
    const request = '/discover/movie?sort_by=popularity.desc';
    return this._http.jsonp(this.getURL(request, 'es'), '').pipe(map(res =>  res ));
  }
}
