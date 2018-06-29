import { Injectable } from '@angular/core';
import { YOUTUBE_API_KEY } from '../app.constant';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { Item } from '../interfaces/item.interface';
import { Snippet } from '../interfaces/snippet.interface';
import { ApiYoutube } from '../interfaces/api.interface';

@Injectable()
export class YoutubeService {
  private youtubeApiUrl = 'https://www.googleapis.com/youtube/v3/';
  private playlistItems = 'playlistItems';
  private channels = 'channels';
  private nextPageToken = '';
  private videos: Snippet[];
  public userTotalVideos: number;
  constructor( private _http: HttpClient) { }

  getUrl(request: string) {
    return `${this.youtubeApiUrl}${request}&maxResults=9&key=${YOUTUBE_API_KEY}`;
  }

  getSelectPlaylistVideos(playlist: string) {
    let url: string;
    if (this.nextPageToken === '') {
      url = `${this.playlistItems}?part=snippet&playlistId=${playlist}`;
    } else {
      url = `${this.playlistItems}?part=snippet&playlistId=${playlist}&pageToken=${this.nextPageToken}`;
    }
    return this._http.get(this.getUrl(url))
      .pipe(
        map((res: any) => {
          this.userTotalVideos = res.pageInfo.totalResults;
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

  getUserChannelInfo(user: string) {
    return this._http.get(this.getUrl(`${this.channels}?part=contentDetails,snippet&id=${user}`))
      .pipe(
        map((res: ApiYoutube) => {
          return res.items[0].snippet;
        }));
  }
}
