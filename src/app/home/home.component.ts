import {Component,ViewEncapsulation} from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';
declare var __moduleName: string;

@Component({
	selector: 'home',
	templateUrl: 'home.template.html',
	styleUrls:['home.style.css'],
	
})
export class HomeComponent {
	user: any;
	constructor () {
		
	}
}