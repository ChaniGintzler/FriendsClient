import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProfilesRoutes } from './profiles.routes';
import { ProfilesComponent } from './profiles.component';
import { CreateProfileComponent } from './create/createProfile.component';
import { ProfilesListComponent } from './list/profilesList.component';
import {ViewComponent} from './view/view.component'
import {MapModule} from '../map/map.module'
import { ProfilesEffects } from './store/profiles.effects';
import { profilesReducer } from './store/profiles.reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProfilesResolver } from './profile.resolver';
import { Materialodule } from '../material.module';

// import { AgmCoreModule, MapsAPILoader } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Materialodule,
   // MapModule,
    RouterModule.forChild(ProfilesRoutes),
    StoreModule.forFeature('profiles', profilesReducer),
    EffectsModule.forFeature([ProfilesEffects])
  ],
  declarations: [
    ProfilesComponent,
    CreateProfileComponent,
    ProfilesListComponent,
    ViewComponent
  ],
  exports:[ProfilesComponent,ProfilesListComponent],//
  providers:[ProfilesResolver]
  
})
export class ProfilesModule {}
