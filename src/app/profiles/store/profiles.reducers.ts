import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { profilesActionTypes } from './profiles.actions';
import { Profile } from '../models/profile.model';
import { ProfilesService } from '../profiles.service';

export interface ProfilesState extends EntityState<Profile> {
  profilesLoaded: boolean;
}

export const adapter: EntityAdapter<Profile> = createEntityAdapter<Profile>();

export const initialState = adapter.getInitialState({
  coursesLoaded: false
});

export const profilesReducer = createReducer(
  initialState,
  on(profilesActionTypes.profilesLoaded, (state, action) => {
      console.log(action.profiles);
    return adapter.addMany(
      action.profiles,
      {...state, profilesLoaded: true}
    );
  }),
  on(profilesActionTypes.createProfile, (state, action) => {
    return adapter.addOne(action.profile, state);
  }),

  on(profilesActionTypes.deleteProfile, (state, action) => {
      console.log(action);
    return adapter.removeOne(action.profileId, state);
  }),

  on(profilesActionTypes.updateProfile, (state, action) => {
    return adapter.updateOne(action.update, state);
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();