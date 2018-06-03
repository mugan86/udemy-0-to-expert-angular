import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TOKEN_API, API_URL } from 'src/app/app.constants';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  headers;
  constructor( private httpClient: HttpClient) {
    console.log('Spotify Service running');
    this.headers = new HttpHeaders({
      'Authorization': 'Bearer ' + TOKEN_API,
    });
  }
  /**
   * Obtain Spotify Last Releases list
   * @returns {}
   */
  getNewReleases() {
    const headers = this.headers;
    return this.httpClient.get(API_URL + 'browse/new-releases', { headers });
  }

  getArtist(findText: string) {
    // https://api.spotify.com/v1/
    const headers = this.headers;
    return this.httpClient.get(`${API_URL}search?q=${findText}&type=artist&limit=15`, { headers });
  }
}
