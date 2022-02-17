import { Routes } from '@angular/router';
import { ProfilesComponent } from './profiles.component';
import { ProfilesListComponent } from './list/profilesList.component';
import { CreateProfileComponent } from './create/createProfile.component';
import { ViewComponent } from './view/view.component';
import { ProfilesResolver } from './profile.resolver';

export const ProfilesRoutes: Routes = [
  {
    path: '',
    component: ProfilesListComponent,
     resolve: {
      profiles: ProfilesResolver
    }
  },
  { path: 'create', component: CreateProfileComponent },
  { path: ':profileId', component: ViewComponent },
];
