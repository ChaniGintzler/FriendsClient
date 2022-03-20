import { Component, ComponentRef, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ProfilesService } from '../../profiles/profiles.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { Observable } from 'rxjs';
import { getAllProfiles } from '../store/profiles.selectors';
import { loadProfiles, profilesActionTypes } from '../store/profiles.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { ProfilesProducer } from '../store/profiles.producer';


import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Profile } from '../models/profile.model';
import { reduce } from 'rxjs/operators';
import { profilesReducer } from '../store/profiles.reducers';
// import { AgmCoreModule, MapsAPILoader } from '@agm/core';
//import { WindowViewOutletComponent } from '../../core/window-view-outlet/window-view-outlet.component';
//import { WindowViewService } from '../../core/window-view.service';
//import { MyWindowComponent } from '../../chat/MyWindowComponent';

@Component({
  selector: 'list',
  templateUrl: './profilesList.template.html',
  styleUrls:['./profilesList.styles.css']
})
export class ProfilesListComponent implements OnInit {
  profiles$: Observable<Profile[]> | undefined;
  //   public latitude: number | undefined;
  //   public longitude: number | undefined;
  //   public zoom: number | undefined;

  constructor(
   // private store: Store<AppState>,
	public profilesProducer: ProfilesProducer,
    private _router: Router
  ) 
  {}

  ngOnInit() {
	this.profiles$ = this.profilesProducer.getProfiles$;
	this.profilesProducer.getProfiles$.subscribe(res=>console.log(res));
	
  }

  openChat(toUser: any) {
    console.log(toUser);
    this._router.navigate(['/chat']); //,{id:toUser}
  }

  delete(id: string) {
    console.log(id);
    this.profilesProducer.deleteProfile(id);
  }

  // private setCurrentPosition() {
  // 	if ("geolocation" in navigator) {
  // 	  navigator.geolocation.getCurrentPosition((position) => {
  // 		this.latitude = position.coords.latitude;
  // 		this.longitude = position.coords.longitude;
  // 		this.zoom = 12;
  // 	  });
  // 	}
  // }

  // OnMarkerClicked(pro:any)
  // {
  // 	console.log(pro);
  // 	this._router.navigate(["/profiles", pro._id]);
  // }
}
