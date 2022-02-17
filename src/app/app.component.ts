import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'friends';

  subscription:Subscription ;
  user:any;
 
  constructor(private _authenticationService: AuthenticationService, private router: Router) {
    this.subscription = this._authenticationService.OnUserInOut$
    .subscribe(item => this.user = item)
  } 
  ngOnInit() {
   
  }
  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }
}
