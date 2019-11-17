import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TimelineComponent } from './timeline.component';
import { MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatDialogModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersService } from 'src/app/users/users.service';
import { PostsService } from 'src/app/posts/posts.service';
import { MessagesComponent } from 'src/app/messages.component';

describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TimelineComponent,
        MessagesComponent
      ],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatCardModule,
        HttpClientTestingModule,
        MatDialogModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
        UsersService,
        PostsService
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
