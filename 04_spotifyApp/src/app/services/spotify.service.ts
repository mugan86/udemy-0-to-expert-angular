import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  TOKEN = 'BQAudbcoT6dVJzUhpFKGem7mVD-JQYIoB-qMz-KwGZYSvMutjLZmLpGYis7PV-uL47f019rcv7YDTx8bmA0';
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
    this.httpClient.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe( data => {
        console.log( data );
      });
  }
}
