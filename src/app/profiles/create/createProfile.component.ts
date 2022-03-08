import { Component, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ProfilesService } from '../profiles.service';
// import { Point } from '@agm/core/services/google-maps-types';
import { Address } from '../../map/map.component';
import { createProfile } from '../store/profiles.actions';
import { AppState } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
declare var google: any;

@Component({
  selector: 'createProfile',
  templateUrl: './createProfile.template.html',
})
export class CreateProfileComponent {
  profile: any = {};
  errorMessage: string | undefined;
  profileForm: FormGroup ;
  constructor(
    private store: Store<AppState>,
   // private _profilesService: ProfilesService,
   // private location: Location,
    private fb: FormBuilder
  ) {
    this.profileForm = this.fb.group({
      firstName: null,
      lastName: null,
      age: null,
      hobbies: null,
      height: null,
      description: null,
    });
    

  }

  ngOnInit() {
    
  }

  OnAdressChanged(p: Address) {
    this.profile.address = p;
  }

  create() {
    if (this.profileForm?.valid) {
      this.store.dispatch(createProfile({ profile: this.profileForm?.value }));
    }

    // this._profilesService.create(this.profile).subscribe(
    //   (f:any) => this.location.back(),
    //   (error:any) => (this.errorMessage = error)
    // );
  }

 // fileChangeEvent(event: any) {}
}
