import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.template.html'
})
export class SignupComponent { 
	errorMessage: string | undefined;
	user: any = {};

	constructor (private _authenticationService: AuthenticationService, 
				 private _router: Router) {}

	signup() {
		this._authenticationService.signup(this.user)
								   .subscribe((result:any)  => this._router.navigate(['/']),
							 				  (error:any) =>  this.errorMessage = error);
	}
}