import { Component, OnInit } from '@angular/core';
import { ChatService } from './../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {
  message = '';
  constructor( private _cs: ChatService) { }

  ngOnInit() {
    this._cs.loadMessages().subscribe( (chats: any[]) => console.log(chats));
  }

  sendMessage() {
    console.log(this.message);
    this.message = '';
  }

}
