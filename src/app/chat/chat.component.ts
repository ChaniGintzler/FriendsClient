import {Component} from '@angular/core';
import {ChatService} from './chat.service';
import {ActivatedRoute, ParamMap} from '@angular/router'
import {ProfilesService} from '../profiles/profiles.service'
import {AuthenticationService} from '../authentication/authentication.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'chat',
  templateUrl: './chat.template.html',
  providers: [ChatService]
})
export class ChatComponent {
	messageText: string | undefined;
	messages: Array<any>=[];
	//toUserObj:any;
	toProfile:any;
	incoming= true;
	user: any;
	subs: Subscription[]=[];

	constructor(private _chatService: ChatService, private route: ActivatedRoute,
    private _authenticationService:AuthenticationService ) {
		
		//this.toUserObj=this._dataService.data;
		
		//console.log(this.toUserObj);
		
	}
	
	ngOnInit() {
		this.messages = new Array();
		this.subs.push(this._authenticationService.loggedUser$.subscribe(user=>this.user= user));
		//this.userId=this.route.snapshot.params['id']
		
		// this._profilesService.read(this._dataService.data._id).subscribe((res:any)=>
		// 	this.toProfile=res);

	   
			this._chatService.on('userMessage', (msg:any) => {
			if(msg.user==this.toProfile.user)
			{
				this.messages.push(msg);
			}
			this.messages.push(msg);
			console.log(msg);
		});

		this._chatService.on('chatMessage', (msg:any) => {
			this.messages.push(msg);
		});
	}

	sendMessage() {
		
		
		var message = {
            text: this.messageText,
			user:this.toProfile.creator._id,
			username:this.user.username
			
		};

		this._chatService.emit('chatMessage', message);
		
		this.messages.push(message);
            
		this.messageText = ''
	}

	ngOnDestroy() {
		this._chatService.removeListener('chatMessage');
		this.subs.forEach(sub => {
			sub.unsubscribe();
		});
	}
}



