import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TOKEN_API, API_URL } from 'src/app/app.constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor( private httpClient: HttpClient) {
    console.log('Spotify Service running');
  }

  getQuery(query: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + TOKEN_API,
    });
    return this.httpClient.get(`${API_URL}${query}`, { headers });
  }
  /**
   * Obtain Spotify Last Releases list
   * 'map' operator use to mapping desire data. In mi case want to take 'albums' all 'items'
   * @returns {}
   */
  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe( map( data => data['albums'].items ));
  }

  getArtist(findText: string) {
    return this.getQuery(`search?q=${findText}&type=artist&limit=15`).pipe(map( data => data['artists'].items));
  }
}
