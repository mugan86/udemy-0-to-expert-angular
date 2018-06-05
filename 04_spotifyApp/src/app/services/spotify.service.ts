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
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    });
    return this.httpClient.get(`${ API_URL }${ query }`, { headers });
  }
  /**
   * Obtain Spotify Last Releases list
   * 'map' operator use to mapping desire data. In mi case want to take 'albums' all 'items'
   * @returns {}
   */
  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe( map( data => data['albums'].items ));
  }

  getArtistQuery(findText: string) {
    return this.getQuery(`search?q=${ findText }&type=artist&limit=15`).pipe(map( data => data['artists'].items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${ id }`);
  }

  getArtistTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=ES`).pipe(map ( data => data['tracks']));
  }

  getToken() {
    return this.httpClient.get('https://mugan86.com/spotify/get_token.php');
  }
}
