import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class FilesLoadService {

  constructor(private http: HttpClient) { }

  public getJSON(activityName: string): Observable<any> {
    return this.http.get(`./assets/activities/${activityName}.json`);
  }
}
