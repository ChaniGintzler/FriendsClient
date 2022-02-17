import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { EventEmitter,Output } from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({

  selector: 'signin',
  templateUrl: './signin.template.html',
  styleUrls:['./signin.styles.css']
})
export class SigninComponent { 
	errorMessage: string | undefined;
	credentials: any = {};
	@Output()notify: EventEmitter<string> = new EventEmitter<string>();
	
	constructor (private _authenticationService: AuthenticationService, private _router: Router) {

	}

	signin() {
		this._authenticationService.signin(this.credentials).subscribe((result:any)  => 
			{this._router.navigate(['/']);}, //this.notify.emit();
																	   (error:any) =>  this.errorMessage = error );
	}
}