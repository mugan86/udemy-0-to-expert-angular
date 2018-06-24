import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

import { map } from 'rxjs/operators';

import { Search } from './../interfaces/search.interface';
import { Movie } from '../interfaces/movie.interface';
import { keys } from 'src/api-keys/keys';

@Injectable()
export class TheMovieDbApiService {
  private apiKey = keys.theMovieDb;
  private urlLocalHost = 'https://api.themoviedb.org/3';
  search: Search[] = [];
  searchText: string;

  constructor(private _http: HttpClient) {}

  private getURL(request: string, language: string, apiKeyFirst: boolean = false): string {
    return `${this.urlLocalHost}${request}${((apiKeyFirst) ? '?' : '&')}api_key=${this.apiKey}&language=${language}&callback=JSONP_CALLBACK`;
  }

  getMostPopular() {
    const request = '/discover/movie?sort_by=popularity.desc';
    return this._http.jsonp(this.getURL(request, 'es'), '').pipe(map( (res: any) =>  res.results ));
  }

  searchMovie(text: string) {
    this.searchText = text;
    const request = `/search/movie?query=${ text }&sort_by=popularity.desc`;
    return this._http.jsonp(this.getURL(request, 'es'), '').pipe(map((res: any) =>  {
      this.search = res;
      return res.results;
    } ));
  }

  getMovie(id: number) {
    const request = `/movie/${id}`;
    return this._http.jsonp(this.getURL(request, 'es', true), '').pipe(map((res: Movie) => {
      return res;
    }));
  }

  newMoviesInNextWeek() {
    const currentDay = new Date();
    const currentDayStr = `${currentDay.getFullYear()}-${(currentDay.getMonth() + 1)}-${currentDay.getDate()}`;
    console.log(currentDayStr);
    currentDay.setDate(currentDay.getDate() + 7);
    const nextWeek = `${currentDay.getFullYear()}-${(currentDay.getMonth() + 1)}-${currentDay.getDate()}`;
    console.log(nextWeek);
    const request = `/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${currentDayStr}&primary_release_date.lte=${nextWeek}`;
    return this._http.jsonp(this.getURL(request, 'es'), '').pipe(map((res: any) =>  res.results ));
  }

  getKidsMostPopular() {
    const request = `/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc`;
    return this._http.jsonp(this.getURL(request, 'es'), '').pipe(map((res: any) =>  res.results ));
  }


}
