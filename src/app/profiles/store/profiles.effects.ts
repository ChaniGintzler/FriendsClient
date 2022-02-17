import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilesService } from '../profiles.service';
import { profilesActionTypes } from './profiles.actions';


import { from } from 'rxjs';
@Injectable()
export class ProfilesEffects {
  constructor(
    private profulesService: ProfilesService,
    private actions$: Actions,
    private router: Router
  ) {}

  loadProfiles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(profilesActionTypes.loadProfiles),
      concatMap(() => this.profulesService.list()),
      map((profiles) => profilesActionTypes.profilesLoaded({ profiles }))
    )
  );

  createProfile$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(profilesActionTypes.createProfile),
        concatMap((action) => this.profulesService.create(action.profile)),
        tap(() => this.router.navigateByUrl('/profiles'))
      ),
    { dispatch: false }
  );

  deleteProfile$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(profilesActionTypes.deleteProfile),
        concatMap((action) =>
        {
            console.log(action);
          return  this.profulesService.delete(action.profileId)
        } )
      ),
    { dispatch: false }
  );

  updateProfile$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(profilesActionTypes.updateProfile),
        concatMap((action) =>
          this.profulesService.update(action.update.id )//action.update.changes
        )
      ),
    { dispatch: false }
  );
}
