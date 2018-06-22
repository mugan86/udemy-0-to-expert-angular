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
    return this._http.jsonp(this.getURL(request, 'es'), '').pipe(map( (res: any) =>  res.results ));
  }

  searchMovie(text: string) {
    const request = `/search/movie?query=${ text }&sort_by=popularity.desc`;
    return this._http.jsonp(this.getURL(request, 'es'), '').pipe(map((res: any) =>  res.results ));
  }

  newMoviesInNextWeek() {
    let currentDay = new Date();
    const currentDayStr = currentDay.getFullYear() + '-' + (currentDay.getMonth() + 1 ) + '-' + currentDay.getDate();
    console.log(currentDayStr);
    currentDay.setDate(currentDay.getDate() + 7);
    var nextWeek = currentDay.getFullYear()+'-'+ (currentDay.getMonth()+1) +'-'+currentDay.getDate();
    console.log(nextWeek);
    const request = `/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${currentDayStr}&primary_release_date.lte=${nextWeek}`;
    return this._http.jsonp(this.getURL(request, 'es'), '').pipe(map((res: any) =>  res.results ));
  }

  getKidsMostPopular() {
    const request = `/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc`;
    return this._http.jsonp(this.getURL(request, 'es'), '').pipe(map((res: any) =>  res.results ));
  }


}
