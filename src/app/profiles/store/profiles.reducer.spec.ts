import { profilesReducer, ProfilesState } from './profiles.reducers';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import {
  profilesActionTypes,
  profilesLoaded,
  updateProfile,
} from './profiles.actions';
import { Profile } from '../models/profile.model';
import { reduce } from 'rxjs/operators';
import { ProfilesProducer } from './profiles.producer';
import { Update } from '@ngrx/entity';

describe('Store - profiles reducer', () => {
  let adapter: EntityAdapter<Profile>;
  let initialState: any;
  beforeEach(() => {
    adapter = createEntityAdapter<Profile>({
      selectId: (Profile) => Profile._id,
    });

    initialState = adapter.getInitialState({
      profilesLoaded: false,
    });
  });

  describe('profiles reducer', () => {
    it('should set profiles', () => {
      const loadedProfiles = [
        {
          _id: '0',
          lastName: 'a',
          firstName: 'b',
        },
      ];

      const newProfile = {
        _id: '0',
        lastName: 'a',
        firstName: 'b',
      };

      let currentState = { profilesLoaded: false, entities: {}, ids: [] };
      const expected = { ...initialState };
      expected.profilesLoaded = true;
      expected.ids = ['0'];
      expected.entities[0] = loadedProfiles[0];
      const xres = profilesReducer(
        currentState,
        profilesActionTypes.profilesLoaded({ profiles: loadedProfiles })
      );
      expect(xres).toEqual(expected);
    });

    it('should add profile', () => {
      const newProfile = {
        _id: '0',
        lastName: 'a',
        firstName: 'b',
      };
      let currentState = { profilesLoaded: false, entities: {}, ids: [] };
      const expected = { ...initialState };
      expected.profilesLoaded = false;
      expected.ids = ['0'];
      expected.entities[0] = newProfile;
      const xres = profilesReducer(
        currentState,
        profilesActionTypes.createProfile({ profile: newProfile })
      );
      expect(xres).toEqual(expected);
    });

    it('should update profile', () => {
      const updatedProfile: Profile = {
        _id: '0',
        lastName: 'a',
        firstName: 'b',
      };
      let currentState = { ...initialState };
      currentState.ids = ['0'];
      currentState.entities[0] = updateProfile;
      const update: Update<Profile> = {
        id: updatedProfile._id,
        changes: {
          ...updatedProfile,
          ...{ lastName: 'newLastName' },
        },
      };
      const xres = profilesReducer(
        currentState,
        profilesActionTypes.updateProfile({ update })
      );
      expect(xres.entities[0]?.lastName).toEqual('newLastName');
    });

    it('should delete profile', () => {
      const newProfile = {
        _id: '0',
        lastName: 'a',
        firstName: 'b',
      };
      let currentState = { ...initialState };

      currentState.entities[0] = newProfile;
      currentState.ids.push('0');
      const xres = profilesReducer(
        currentState,
        profilesActionTypes.deleteProfile({ profileId: '0' })
      );
      expect(xres.ids.length).toEqual(0);
    });
  });
});
