import { Component } from '@angular/core';
import { ProfilesService } from './profiles.service';

@Component({
  selector: 'profiles',
  template: '<router-outlet></router-outlet>',
  providers: [ProfilesService]
})
export class ProfilesComponent {}