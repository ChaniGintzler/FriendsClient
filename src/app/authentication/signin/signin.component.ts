import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signin',
  templateUrl: './signin.template.html',
  styleUrls: ['./signin.styles.css'],
})
export class SigninComponent {
  errorMessage: string | undefined;
  credentials: any = {};
  form: FormGroup;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  signIn() {
    if (this.form.valid) {
      this._authenticationService.signin(this.form.value).subscribe(
        (result: any) => {
          this._router.navigate(['/profiles']);
        },
        (error: any) => (this.errorMessage = error.message)
      );
    }
  }
}
