import { TestBed } from '@angular/core/testing';

import { PostsService } from './posts.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppRoutingModule } from '../app-routing.module';
import { TimelineModule } from '../timeline/timeline.module';
import { AuthenticationModule } from '../authentication/authentication.module';

describe('PostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      AppRoutingModule,
      TimelineModule,
      AuthenticationModule
    ]
  }));

  it('should be created', () => {
    const service: PostsService = TestBed.get(PostsService);
    expect(service).toBeTruthy();
  });
});
