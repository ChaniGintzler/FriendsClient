//import 'rxjs/Rx';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import  * as io from 'socket.io-client';
import { io } from 'socket.io-client';

import { AuthenticationService } from '../authentication/authentication.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private socket: any;
  messages: Subject<any> = new Subject<any>();
  messages$ = this.messages.asObservable();

  constructor(
    private _router: Router,
    private _authenticationService: AuthenticationService
  ) {
    if (this._authenticationService.isLoggedIn()) {
	  this.socket = io();
	  this.subscribeToSocketEvents();
    } else {
      this._router.navigate(['']);
    }
  }

  subscribeToSocketEvents() {
    if (this.socket) {
      this.socket.on('chatMessage', (msg: any)=>this.messages.next(msg));
    }
  }

  sendMessage(msg:any) {
    if (this.socket) {
      this.socket.emit('chatMessage', msg);
    }
  }

  removeListener(eventName: string) {
    if (this.socket) {
      this.socket.removeListener(eventName);
    }
  }

  ngOnDestroy(): void {
    this.removeListener('chatMessage');
  }
}
