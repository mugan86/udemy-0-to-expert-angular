import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../models/file-item';

@Injectable({
  providedIn: 'root'
})
export class LoadImagesService {

  private FOLDER_IMG = 'img';

  constructor( private db: AngularFirestore ) { }

  loadFirebaseImages( images: FileItem[]) {
    console.log( images );
  }
  private saveImage ( image: { name: string, url: string} ) {
    this.db.collection(`/${ this.FOLDER_IMG}`)
      .add (image );
  }
}
