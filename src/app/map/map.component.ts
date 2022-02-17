//set current position
// this.setCurrentPosition();
import {Router,NavigationExtras} from '@angular/router';
import { Component, ElementRef,  NgZone, OnInit, ViewChild, Output,EventEmitter  } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { AgmCoreModule, MapsAPILoader,GoogleMapsAPIWrapper } from '@agm/core';
import { templateJitUrl } from '@angular/compiler';
// import { Point } from '@agm/core/services/google-maps-types';


//import {GoogleMapsAPIWrapper} from 'angular2-google-maps/core';

//import { Output } from '@angular/core/src/metadata/directives';

//declare var __moduleName: string;

@Component({
 //  moduleId: __moduleName,
   templateUrl: './map.template.html',
   selector:'map-comp'

})
export class MapComponent{
  
@Output() 
adressChangedEvent:EventEmitter<Address> = new EventEmitter<Address>(); 
  public latitude!: number;
  public longitude!: number;
  public searchControl!: FormControl;
  public zoom!: number;
  
  @ViewChild("search")
  public searchElementRef!: ElementRef;
  

  constructor(
  //  private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}
  
  ngOnInit() {
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;
    
    //create search FormControl
    this.searchControl = new FormControl();
    
    
    //load Places Autocomplete
    // // this.mapsAPILoader.load().then(() => {
    // //   let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
    // //     types: ["address"]
    // //   });
    //   autocomplete.addListener("place_changed", () => {
    //     this.ngZone.run(() => {
    //       //get the place result
    //      // console.log("on chanche address");
    //       let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  
    //       //verify result
    //       if (place.geometry === undefined || place.geometry === null) {
    //         return;
    //       }
          
    //       //set latitude, longitude and zoom
    //       this.latitude = place.geometry.location.lat();
    //       this.longitude = place.geometry.location.lng();
    //       this.zoom = 12;
    //     var p=
    //     {
    //       latitude:this.latitude,
    //       longitude:this.longitude
    //     }
    //     //  p.x=
    //     //  p.y=;
    //       this.adressChangedEvent.emit(p);
    //     });
    //   });
    // });
  }
  
//   private setCurrentPosition() {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         this.latitude = position.coords.latitude;
//         this.longitude = position.coords.longitude;
//         this.zoom = 12;
//       });
//       let latlng = new google.maps.LatLng(this.latitude, this.longitude);

//       geocodef.toAddress(latlng).then(function (address) {
//         console.log(address);
//     });

//       let request = {
//         latLng: latlng
//       };  
//    //   let geocoder = new google.maps.Geocoder();
//     //let geocojjder = new google.maps.GeocoderRequest();
   
// //       geocoder.geocode(request, (results, status) => {       
// //         if (status == google.maps.GeocoderStatus.OK) {
// //           if (results[0] != null) {
// //            let city = results[0].address_components[results[0].address_components.length-4].short_name;                      

// //            console.log(city  );


// //           } else {
// //             alert("No address available");
// //           }
// //         }
// // });
//     }
//   }
}
export interface Address
{
  latitude:number,
  longitude:number

}


