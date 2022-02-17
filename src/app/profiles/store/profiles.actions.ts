import { Profile } from './../models/profile.model';
import { createAction, props } from '@ngrx/store';
import {Update} from '@ngrx/entity';



export const loadProfiles = createAction(
  '[Profiles List] Load Profiles via Service',
);

export const profilesLoaded = createAction(
  '[Profiles Effect] Profiles Loaded Successfully',
  props<{profiles: Profile[]}>()
);

export const createProfile = createAction(
  '[Create Profiles Component] Create Profile',
  props<{profile: Profile}>()
);

export const deleteProfile = createAction(
  '[Profiles List Operations] Delete Profile',
  props<{profileId: string}>()
);

export const updateProfile = createAction(
  '[Profiles List Operations] Update Profile',
  props<{update: Update<Profile>}>()
);

export const profilesActionTypes = {
  loadProfiles,
  profilesLoaded,
  createProfile,
  deleteProfile,
  updateProfile
};

