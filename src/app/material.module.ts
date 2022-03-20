import { NgModule } from "@angular/core";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
    imports: [
        MatFormFieldModule,MatInputModule,MatMenuModule,MatToolbarModule,MatIconModule,MatButtonModule
    ],
  exports:[ MatFormFieldModule,MatInputModule,MatMenuModule,MatToolbarModule,MatIconModule,MatButtonModule]
    
  })
  export class Materialodule {}
  