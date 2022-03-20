//import 'rxjs/Rx';
// import {Observable} from 'rxjs/Observable';
import { Injectable } from '@angular/core';
// import { Headers, Request, RequestMethod, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Profile } from './models/profile.model';

@Injectable({ providedIn: 'root' })
export class ProfilesService {
  _baseURL = `${environment.baseURL}profiles`;

  constructor(private _http: HttpClient) {}

  create(profile: any): Observable<any> {
    console.log(this._baseURL);
    return this._http
      .post(this._baseURL, profile);
    //.catch(this.handleError);
  }

  read(profileId: string): Observable<any> {
     return this._http.get(`${this._baseURL}/${profileId}`);
    
    //.catch(this.handleError);
  }

  update(profileId:any,profile: any): Observable<any> {
    return this._http
      .put(`${this._baseURL}/${profileId}`, profile)
      .pipe(map((res: any) => res.json()));
    //.catch(this.handleError);
  }

  delete(profileId: any): Observable<any> {
    return this._http.delete(`${this._baseURL}/${profileId}`);
  }

  list(): Observable<any> {
    console.log('service list prof');
    return this._http.get(this._baseURL);
  }

  private handleError(error: any) {
    console.log('there is error profiles service' + error);

    return Observable.throw(error.json().message || 'Server error');
  }
}
