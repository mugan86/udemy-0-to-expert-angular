import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  TOKEN = 'BQANhECggucIi8NOvoU63CdcwmkBpnpvKVTo2DxsegBRrRSMOwHz2ZKrngW3sBOZQaDNWdTgwQ_Jo_NKAEo';
  constructor( private httpClient: HttpClient) {
    console.log('Spotify Service running');
  }
  /**
   * Obtain Spotify Last Releases list
   * @returns {}
   */
  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.TOKEN,
    });
    return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
