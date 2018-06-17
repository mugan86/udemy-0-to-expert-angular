import { Component, OnInit } from '@angular/core';
import { ChatService } from './../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {
  message = '';
  constructor( public _cs: ChatService) { }

  ngOnInit() {
    // Only suscribe to start observer value changes,...
    this._cs.loadMessages().subscribe();
  }

  sendMessage() {
    console.log(this.message);
    if ( this.message.length === 0) {
      return;
    }
    this._cs.addMessage(this.message)
        .then( () => {
          console.log('Message OK send!');
          this.message = '';
        })
        .catch( (err) => console.error('Error when send', err ));
  }

}
