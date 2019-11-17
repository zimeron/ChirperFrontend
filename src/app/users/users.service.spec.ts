import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppRoutingModule } from '../app-routing.module';
import { AuthenticationModule } from '../authentication/authentication.module';
import { TimelineModule } from '../timeline/timeline.module';

describe('UsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      AppRoutingModule,
      AuthenticationModule,
      TimelineModule
    ]
  }));

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });
});
