import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Message } from './../interfaces/message.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Message>;
  public chats: Message[] = [];
  constructor(private afs: AngularFirestore) {
  }

  loadMessages() {
    this.itemsCollection = this.afs.collection<Message>('chats');
    return this.itemsCollection.valueChanges().pipe(map( (messages: Message[]) => this.chats = messages));
  }

  addMessage( text: string) {
    const msg: Message = {
      name: 'Demo',
      message: text,
      data: new Date().getTime()
    }

    return this.itemsCollection.add(msg);
  }
}
