import { Injectable } from '@angular/core';
import { YOUTUBE_API_KEY } from '../app.constant';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { Item } from '../interfaces/item.interface';
import { Snippet } from '../interfaces/snippet.interface';

@Injectable()
export class YoutubeService {
  private youtubeApiUrl = 'https://www.googleapis.com/youtube/v3/';
  private playlistItems = 'playlistItems';
  private nextPageToken = '';
  private videos: Snippet[];
  constructor( private _http: HttpClient) { }

  getUrl(request: string) {
    return `${this.youtubeApiUrl}${request}&maxResults=9&key=${YOUTUBE_API_KEY}`;
  }

  getSelectPlaylistVideos(playlist: string, loadMore: boolean = false) {
    let url: string;
    if (this.nextPageToken === '') {
      url = `${this.playlistItems}?part=snippet&playlistId=${playlist}`;
    } else {
      url = `${this.playlistItems}?part=snippet&playlistId=${playlist}&pageToken=${this.nextPageToken}`;
    }
    console.log(url);
    return this._http.get(this.getUrl(url))
      .pipe(
        map((res: any) => {
          this.nextPageToken = res.nextPageToken;
          this.videos = this.takeVideos(res.items);
          return this.videos;
    }));
  }

  private takeVideos(items: Item[]) {
    const videos: Snippet[] = [];
    items.map(item => {
      videos.push(item.snippet);
    });
    return videos;
  }

  getVideos() {
    return this.videos;
  }
}
