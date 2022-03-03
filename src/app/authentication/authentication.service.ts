//import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  localStorageUserKey = 'friendsUser';
  private baseUrl = `${environment.baseURL}auth/`;

  constructor(private http: HttpClient) {}

  isLoggedIn(): boolean {
    return !!this.loggedUser.value;
  }

  // private _userInOut = new BehaviorSubject(this.user);
  //  OnUserInOut$ = this._userInOut.asObservable();
  private loggedUser = new BehaviorSubject(null);
  loggedUser$ = this.loggedUser.asObservable();

  getToken(): any {
    if (localStorage.getItem(this.localStorageUserKey)) {
      const user = JSON.parse(localStorage.getItem(this.localStorageUserKey)!);
      return user.token;
    } else {
      return null;
    }
  }

  signin(credentials: any): Observable<any> {
    let body = JSON.stringify(credentials);
    return this.http.post(`${this.baseUrl}login`, body).pipe(
      tap((res: any) => {
		  console.log(res);
       // this.loggedUser.next(res);
        localStorage.setItem(this.localStorageUserKey,  JSON.stringify(res));
      })
    );
    // .catch(this.handleError)
  }

  signup(user: any): Observable<any> {
        return this.http.post(`${this.baseUrl}signup`, user).pipe(
      tap((res: any) => {
		  console.log(res);
       // this.loggedUser.next(res);
      })
    );
    //.catch(this.handleError)
  }

  list() {
    return this.http.get('api/users').pipe(map((res: any) => res.json()));
  }
  read(id: any) {
    return this.http.get('api/users:/' + id);
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().message || 'Server error');
  }
}
