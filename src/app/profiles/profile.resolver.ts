import { areProfilesLoaded } from './store/profiles.selectors';
import { loadProfiles, profilesLoaded } from './store/profiles.actions';
import { AppState } from './../store/reducers/index';
import { Profile } from './models/profile.model';
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store';
import {filter, finalize, first, tap} from 'rxjs/operators';

@Injectable()
export class ProfilesResolver implements Resolve<Observable<any>> {

  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store
    .pipe(
        select(areProfilesLoaded),
        tap((profilesLoaded) => {
          if (!profilesLoaded) {
            this.store.dispatch(loadProfiles());
          }

        }),
        filter(profilesLoaded => profilesLoaded),
        first()
    );
  }
}