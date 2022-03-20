import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Profile } from '../models/profile.model';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.scss'],
})
export class ProfileItemComponent implements OnInit {
  @Input() profile: Profile | undefined;
  @Output() deleteEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() openChatEvent: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() {}

  ngOnInit(): void {}

  openChat(toUser: any) {
    this.openChatEvent.emit(toUser);
  }

  delete(id: string) {
    this.deleteEvent.emit(id);
  }
}
