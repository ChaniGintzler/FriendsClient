//import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
// import  * as io from 'socket.io-client';
import { io } from "socket.io-client";

import {AuthenticationService} from '../authentication/authentication.service';

@Injectable({providedIn:'root'})
export class ChatService {
	private socket: any;
	
	constructor(private _router:Router, 
				private _authenticationService: AuthenticationService) {
		if (this._authenticationService.isLoggedIn()) {
			this.socket = io();
		} else {
			this._router.navigate(['']);
		}
	}

    on(eventName:any, callback:any) {
		if (this.socket) {
			this.socket.on(eventName, function(data:any) {
				callback(data);
			});
		}
    };

    emit(eventName:any, data:any) {
		if (this.socket) {
			this.socket.emit(eventName, data);
		}
    };

    removeListener(eventName:any) {
		if (this.socket) {
			this.socket.removeListener(eventName);
		}
    };
}
