import { Component } from '@angular/core';
import { ChatService } from './chat.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProfilesService } from '../profiles/profiles.service';
import { AuthenticationService } from '../authentication/authentication.service';
import { Subscription } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'chat',
  templateUrl: './chat.template.html',
  providers: [ChatService],
})
export class ChatComponent {
  messageText: string | null = null;
  messages: Array<any> = [];
  //toUserObj:any;
  toProfile: any;
  incoming = true;
  user: any;
  subs: Subscription[] = [];

  constructor(
    private _chatService: ChatService,
    private _authenticationService: AuthenticationService
  ) {
    //this.toUserObj=this._dataService.data;
    //console.log(this.toUserObj);
  }

  ngOnInit() {
    this.messages = new Array();
    this.subs.push(
      this._authenticationService.loggedUser$.subscribe(
        (user) => (this.user = user)
      )
    );
    // this.subs.push(
    //   this._chatService.messages$.subscribe((msg) => this.messages.push(msg))
    // );
  }

  sendMessage() {
    var message = {
      text: this.messageText,
      user: this.toProfile.creator._id,
      username: this.user.username,
    };

    this._chatService.sendMessage(message);
    this.messages.push(message);
    this.messageText = '';
  }

  ngOnDestroy() {
    this.subs.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
