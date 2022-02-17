import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProfilesState } from './profiles.reducers';
import { selectAll, selectIds } from './profiles.reducers';

export const ProfileFeatureSelector = createFeatureSelector<ProfilesState>(
  'profiles'
);

export const getAllProfiles = createSelector(ProfileFeatureSelector, selectAll);

export const areProfilesLoaded = createSelector(
  ProfileFeatureSelector,
  (state) => state.profilesLoaded
);
