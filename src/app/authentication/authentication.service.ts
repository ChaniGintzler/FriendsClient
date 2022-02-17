//import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
// import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import {BehaviorSubject} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class AuthenticationService {
	public user:any = null;//window['user'];

	private _signinURL = 'api/auth/signin';
	private _signupURL = 'api/auth/signup';

	constructor (private http: HttpClient) {
		
	}

	isLoggedIn(): boolean {
		return (!!this.user);
	}

	private _userInOut = new BehaviorSubject(this.user);
	OnUserInOut$ = this._userInOut.asObservable();
	
	signin(credentials: any): Observable<any> {
    	let body = JSON.stringify(credentials);
    	// let headers = new Headers({ 'Content-Type': 'application/json' });
    	//let options = new RequestOptions({ headers: headers });

		return this.http.post(this._signinURL, body).pipe(
						map((res:any) =>
							 {
								 this.user = res.json()
								 this._userInOut.next(this.user);
							}))
                       // .catch(this.handleError)
  	}

  	signup(user: any): Observable<any> {
    	let body = JSON.stringify(user);
    	//let headers = new Headers({ 'Content-Type': 'application/json' });
    	//let options = new RequestOptions({ headers: headers });

		return this.http.post(this._signupURL, body).pipe(map((res:any) => this.user = res.json()))
                        //.catch(this.handleError)
  	}

	  list()
	  {
		  return this.http.get('api/users').pipe(map((res:any)=>res.json()));
	  }
	  read(id:any)
	  {
		  return this.http.get('api/users:/'+id);
	  }
	private handleError(error: any) {
		console.error(error);
		return Observable.throw(error.json().message || 'Server error');
	}
}