import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';

//import { HomeRoutes } from './home.routes';
import { ChatRoutes } from './chat.routes';
import { ChatComponent } from './chat.component';
import { ChatService } from './chat.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ChatRoutes),
  ],
  declarations: [
    ChatComponent
  ],
  exports:[ChatComponent],
  providers: [ChatService ],
  entryComponents: [
    // window component have to provide a component factory,
    // by adding component to `entryComponents`.
    ChatComponent
  ]
})
export class ChatModule {}
