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

    const storageRef = firebase.storage().ref();

    for ( const item of images ) {
      item.isUpload = true;
      if ( item.progress >= 100) {
        continue;
      }

      const imageReference = storageRef.child(`${this.FOLDER_IMG}/${item.archiveName}`);
      const uploadTask: firebase.storage.UploadTask = imageReference.put(item.file);

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: firebase.storage.UploadTaskSnapshot) => item.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        (error) => console.error('Upload error', error),
        () => {
          imageReference.getDownloadURL().then(
            (imageUrl) => {
              console.log('Image upload successfully');
              item.url = imageUrl;
              item.isUpload = false;
              this.saveImage({
                name: item.archiveName,
                url: item.url
              });
            },
            (error) => console.log('URL no exist', error)
          );
        }
      );
    }
  }
  private saveImage ( image: { name: string, url: string} ) {
    console.log(image);
    this.db.collection(`/${this.FOLDER_IMG}`)
      .add ( image );
  }
}
