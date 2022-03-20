import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.template.html',
  styleUrls:['./signup.styles.css']
})
export class SignupComponent { 
	errorMessage: string | undefined;
	form:FormGroup;
	constructor (private _authenticationService: AuthenticationService, 
				 private _router: Router, private fb:FormBuilder) {
					 this.form=this.fb.group({
						userName:[null, [Validators.required]],
						email: [null, [Validators.required]],
						password: [null, [Validators.required]],
					 })
				 }

	signup() {
		if(this.form.valid){
			this._authenticationService.signup(this.form.value)
								   .subscribe((result:any)  => this._router.navigate(['/authentication/signin']),
							 				  (error:any) =>  this.errorMessage = error.message);
		}
		
	}
}