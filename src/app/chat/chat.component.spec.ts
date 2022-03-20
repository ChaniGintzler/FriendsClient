import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat.component';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ChatService } from './chat.service';

describe('chat component', () => {
  let fixture: ComponentFixture<ChatComponent>;
  let mockChatService:any;
  
  beforeEach(() => {
    mockChatService = jasmine.createSpyObj(['sendMessage']);
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ChatComponent],
      providers: [{ provide: ChatService, useValue: mockChatService }],
      schemas: [NO_ERRORS_SCHEMA],
    }); //.compileComponents();
  
    fixture = TestBed.createComponent(ChatComponent);
    fixture.componentInstance.user = { userName: '123' };
    fixture.componentInstance.toProfile = {
      user: '1',
      creator: { firstName: 'Bob', lastName: 'Mar', _id: '1' },
    };
    
});
    it('shouuld render target profile name in title', () => {
      fixture.detectChanges();
      expect(
        fixture.debugElement.query(By.css('h3')).nativeElement.textContent
      ).toContain('Bob Mar');
      expect(fixture.nativeElement.querySelector('h3').textContent).toContain(
        'Bob'
      );
    });

    // it('shouuld insert new message form service to messages array', () => {
  
    //   });

    describe('send message', () => {
      it('should call chat service to send new message', () => {
       fixture.componentInstance.messageText = 'test message';
        fixture.componentInstance.sendMessage();
       expect(mockChatService.sendMessage).toHaveBeenCalled();
    });
      it('should add message to messages array', () => {
        fixture.componentInstance.messageText = 'test message';
        fixture.componentInstance.sendMessage();
        expect(fixture.componentInstance.messages.length).toBe(1);
      });

      it('should clear messageText prop', () => {
        fixture.componentInstance.messageText = 'test message';
        fixture.componentInstance.sendMessage();
        expect(fixture.componentInstance.messageText).toBe('');
      });
    });
  });
