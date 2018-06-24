import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Injectable()
export class YoutubeApiService {
  apiKey = 'API-KEY';
  url = 'https://www.googleapis.com/youtube/v3';
  constructor(private _http: HttpClient) { }

  private getURL(request: string): string {
    return `${this.url}${request}&type=video&videoCaption=closedCaption&key=${this.apiKey}&callback=JSONP_CALLBACK`;
  }
  getSearchVideos(video: string) {
    // https://www.googleapis.com/youtube/v3/search?part=snippet&q=Lara%20Croft:%20Tomb%20Raider%20trailer&type=video&videoCaption=closedCaption&key=<APIKEY>
    const request = `/search?part=snippet&q=${video} trailer`;
    return this._http.jsonp(this.getURL(request), '').pipe(map((res: any) => res.items));
  }
}
