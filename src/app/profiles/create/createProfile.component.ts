import { Component, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ProfilesService } from '../profiles.service';
// import { Point } from '@agm/core/services/google-maps-types';
import { Address } from '../../map/map.component';
import { createProfile } from '../store/profiles.actions';
import { AppState } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProfilesProducer } from '../store/profiles.producer';
declare var google: any;

@Component({
  selector: 'createProfile',
  templateUrl: './createProfile.template.html',
  styleUrls:['./createProfile.styles.css']
})
export class CreateProfileComponent {
  profile: any = {};
  errorMessage: string | undefined;
  profileForm: FormGroup ;
  constructor(
    public profilesProducer:ProfilesProducer,
   // private store: Store<AppState>,
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
      this.profilesProducer.createProfile(this.profileForm.value);
      //this.store.dispatch(createProfile({ profile: this.profileForm?.value }));
    }
    else {

    }

    // this._profilesService.create(this.profile).subscribe(
    //   (f:any) => this.location.back(),
    //   (error:any) => (this.errorMessage = error)
    // );
  }

 // fileChangeEvent(event: any) {}
}
