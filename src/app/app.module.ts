// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthenticationModule } from './authentication/authentication.module';
import { ChatModule } from './chat/chat.module';
import { HomeModule } from './home/home.module';
import { MapModule } from './map/map.module';
import { ProfilesModule } from './profiles/profiles.module';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
   // BrowserModule,
    HttpClientModule,
    FormsModule,
    HomeModule,
    AuthenticationModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
   // ProfilesModule ,
    ChatModule,
    MapModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA-XQ2g2HHyo1Ygryc56Z5wuic3fKyXoKA'
    }),
  // WindowViewModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
