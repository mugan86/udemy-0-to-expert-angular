import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class FilesLoadService {

  constructor(private http: HttpClient) { }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/activities/11_08_2017_malgrat.json');
  }
}
