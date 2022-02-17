import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeRoutes } from './home.routes';
import { HomeComponent } from './home.component';
import { AuthenticationModule } from '../authentication/authentication.module';
import { ProfilesModule } from '../profiles/profiles.module';
import { ChatModule } from '../chat/chat.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationModule,
    ProfilesModule,
    ChatModule,
    RouterModule.forChild(HomeRoutes),
  ],
  declarations: [
    HomeComponent
  ],
  exports:[HomeComponent]
})
export class HomeModule {}
