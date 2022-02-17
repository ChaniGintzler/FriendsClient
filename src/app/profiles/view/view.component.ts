
import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ProfilesService } from '../profiles.service';
import { Location } from '@angular/common';
import {FormsModule} from '@angular/forms';

declare var __moduleName: string;
@Component({
 // moduleId: __moduleName,
  selector: 'view',
  templateUrl: './view.template.html',
  providers: [ProfilesService]
})

export class ViewComponent   {
  public  profile:any;
    currentUser:any;
    routingObserver: any;
	errorMessage: string | undefined;
    allowEdit: boolean = false;
    isEdit:boolean=false;
    
    constructor(private _profileService:ProfilesService,
    	private _router: Router,
		private _route: ActivatedRoute,
        private _authenticationService: AuthenticationService,
        private location: Location
	){}
ngOnInit()
{
    console.log("view")
	this.currentUser = this._authenticationService.user
    this.routingObserver = this._route.params.subscribe(params => {
   // console.log(params)
        let profileId = params['profileId'];
        this._profileService
            .read(profileId)
            .subscribe(
            (prof:any) => {
                console.log(prof)
                this.profile = prof;
                this.allowEdit = (this.currentUser && this.currentUser._id === this.profile.creator._id);              
            },
           // error => this._router.navigate(['/profiles'])
            );
    });
}
back()  
{
    this.location.back();
}
    
	save() {
        console.log(this.profile)
		this._profileService.update(this.profile).subscribe((error: any) =>  this.errorMessage = error);
	}

}
