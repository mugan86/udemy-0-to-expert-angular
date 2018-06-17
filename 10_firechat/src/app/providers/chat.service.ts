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
    // https://github.com/angular/angularfire2/blob/master/docs/rtdb/querying-lists.md
    this.itemsCollection = this.afs.collection<Message>('chats', ref => ref.orderBy('data', 'desc').limit(5));
    return this.itemsCollection.valueChanges().pipe(map( (messages: Message[]) => {
                                                                this.chats = [];

                                                                for ( const msg of messages ) {
                                                                  this.chats.unshift( msg );
                                                                }
                                                                return this.chats;
                                                          })
    );
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
