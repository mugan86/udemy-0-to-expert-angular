import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  chats: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.chats = db.collection('chats').valueChanges();
  }
}
