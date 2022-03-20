import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { IterableDiffers } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';
import { ProfilesService } from './profiles.service';

describe('profiles service', () => {
  let service: ProfilesService;
  let httptestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [ProfilesService],
    });
    service = TestBed.inject(ProfilesService);
    httptestingController = TestBed.inject(HttpTestingController);
  });

  it('should call http with correct profileId', () => {
    service.read('1').subscribe();
    let req = httptestingController.expectOne(`${environment.baseURL}profiles/1`);
    req.flush({ _id: '1' });
    expect(req.request.method).toBe('GET');
    httptestingController.verify();
  });
});
