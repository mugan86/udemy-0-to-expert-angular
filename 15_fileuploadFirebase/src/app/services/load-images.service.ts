import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoadImagesService {

  private FOLDER_IMG = 'img';

  constructor( private db: AngularFirestore ) { }

  private saveImage ( image: { name: string, url: string} ) {
    this.db.collection(`/${ this.FOLDER_IMG}`)
      .add (image );
  }
}
