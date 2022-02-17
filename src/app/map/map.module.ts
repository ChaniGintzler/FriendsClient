import { NgModule }      from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';
import {MapComponent} from './map.component';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AgmCoreModule } from '@agm/core';
// import { AgmCoreModule, MapsAPILoader } from '@agm/core';
@NgModule({
    imports: [CommonModule ,
         AgmCoreModule.forRoot({
        apiKey: 'AIzaSyA-XQ2g2HHyo1Ygryc56Z5wuic3fKyXoKA', libraries: ["places"]
      }),
     
      CommonModule,
      FormsModule,
      ReactiveFormsModule
    
    ],
    declarations:[MapComponent],
    exports:[MapComponent]
})
export class  MapModule{}
