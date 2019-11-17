import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import { MatFormFieldModule, MatDialogModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersService } from 'src/app/users/users.service';
import { MessagesComponent } from 'src/app/messages.component';
import { RouteOutputStub } from 'src/app/RouteOutputStub';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SigninComponent,
        MessagesComponent
      ],
      imports: [
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        MatDialogModule,
        RouterTestingModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
      ],
      providers: [UsersService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
  });

  it('should create', () => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });


});
