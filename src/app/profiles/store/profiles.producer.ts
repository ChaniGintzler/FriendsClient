import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {   loadProfiles,
    profilesLoaded,
    createProfile,
    deleteProfile,
    updateProfile } from "./profiles.actions";
import { getAllProfiles,areProfilesLoaded } from "./profiles.selectors";
import { Profile } from '../models/profile.model';

@Injectable({providedIn: 'root'})
export class ProfilesProducer {
    public getProfiles$: Observable<Profile[]> = this.store.select(getAllProfiles);
    public areProfilesLoaded$ = this.store.select(areProfilesLoaded);
   
    public loadProfiles(): void {
        this.store.dispatch(loadProfiles());
    }

    public createProfile(newProfile: Profile): void {
        this.store.dispatch(createProfile({profile:newProfile}));
    }

    // public updateProfile(newProfile: Profile): void {
    //     this.store.dispatch(updateProfile({update: }));
    // }

    public deleteProfile(deletedId: string): void {
        this.store.dispatch(deleteProfile({profileId:deletedId}));
    }

    public profilesLoaded(profiles: Profile[]): void {
        this.store.dispatch(profilesLoaded({profiles}));
    }

    constructor(private store: Store) {}
}