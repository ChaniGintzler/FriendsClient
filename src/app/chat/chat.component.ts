import {Component} from '@angular/core';
import {ChatService} from './chat.service';
import {ActivatedRoute, ParamMap} from '@angular/router'
import {ProfilesService} from '../profiles/profiles.service'
import {AuthenticationService} from '../authentication/authentication.service'

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

	constructor(private _chatService: ChatService, private route: ActivatedRoute,
	private  _profilesService:ProfilesService,
    private _authenticationService:AuthenticationService ) {
		
		//this.toUserObj=this._dataService.data;
		
		//console.log(this.toUserObj);
		
	}
	
	ngOnInit() {
		this.messages = new Array();
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
			username:this._authenticationService.user.firstName
			//'59e341d444336ea434ace7af' //chanigmail
         // 59e719340707c3c6ac8dfcd5  chani// chanig ??
		};

		this._chatService.emit('chatMessage', message);
		//console.log(message);
		//message.userName='';
		this.messages.push(message);
            
		this.messageText = ''
	}

	ngOnDestroy() {
		this._chatService.removeListener('chatMessage');
	}
}



