import { Component, ComponentRef, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ProfilesService } from '../../profiles/profiles.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile.model';
import { getAllProfiles } from '../store/profiles.selectors';
import { loadProfiles, profilesActionTypes } from '../store/profiles.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
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
    private store: Store<AppState>,
    private _profilesService: ProfilesService,
    private _router: Router
  ) //private _authenticationService: AuthenticationService
  {}

  ngOnInit() {
    this.profiles$ = this.store.select(getAllProfiles);
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
    this.store.dispatch(profilesActionTypes.deleteProfile({profileId:id}));
    // this._profilesService.delete(id).subscribe(
    //   (res: any) => {
    //     console.log(res);
    //     this.profiles = this.profiles.filter((item) => item._id !== id);
    //   },
    //   (error: any) => console.log(error)
    // );
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
