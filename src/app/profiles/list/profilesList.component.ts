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
  //styles:['./profilesList.styles.css']
})
export class ProfilesListComponent implements OnInit {
  // profiles: any[] = [];
  profiles$: Observable<Profile[]> | undefined;
  //   users: any[] = [];
  //   public latitude: number | undefined;
  //   public longitude: number | undefined;
  //   public zoom: number | undefined;

  constructor(
   // private store: Store<AppState>,
	public profilesProducer: ProfilesProducer,
    private _router: Router
  ) //private _authenticationService: AuthenticationService
  {}

  ngOnInit() {
	this.profiles$ = this.profilesProducer.getProfiles$;
	this.profilesProducer.getProfiles$.subscribe(res=>console.log(res));
	// const adapter = createEntityAdapter<Profile>({
	// 	selectId: (Profile) => Profile._id,
	//   });
  
	// const  initialState = adapter.getInitialState({
	// 	profilesLoaded: false,
	//   });
	// const prof = [
    //     {
    //       _id: '123',
    //       lastName: 'a',
    //       firstName: 'b',
    //     },
    //   ];
	// const action = {
    //     type: profilesActionTypes.profilesLoaded,
    //     profiles: prof,
    //   };
    //   const currentState = { ...initialState , profilesLoaded:false};

    //   const expected = { ...initialState };
     // expected.profilesLoaded = true;
     // expected.entities 

     // const x = profilesReducer(currentState,profilesActionTypes.profilesLoaded);

    //	this.profiles$.subscribe(res=>console.log(res));
    //this.store.dispatch(loadProfiles());
    //   console.log('init liet');
    // this._profilesService.list().subscribe(
    //   (pr) => (this.profiles = pr),
    //   (error) => console.error()
    // );

    // 	this._authenticationService.list().subscribe
    // 	((users:any)=>{this.users=users;
    // },
    // 		(error:any)=>console.log(error));

    // 		this.setCurrentPosition();
  }

  openChat(toUser: any) {
    console.log(toUser);
    //let toUserObj = this.profiles.find((x) => x._id == toUser);
    //};
    //console.log(navigationExtras);
    // var newWindow = window.open('http://localhost:3000/chat');

    //this._dataService.data=toUserObj;
    this._router.navigate(['/chat']); //,{id:toUser}
    //this.windowView.pushWindow(MyWindowComponent);
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
