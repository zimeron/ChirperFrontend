import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersService } from 'src/app/users/users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { RegistrationComponent } from '../registration/registration.component';
import { SigninComponent } from '../signin/signin.component';
import { SignoutComponent } from '../signout/signout.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TimelineModule } from 'src/app/timeline/timeline.module';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfileComponent,
        RegistrationComponent,
        SigninComponent,
        SignoutComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        AppRoutingModule,
        TimelineModule
      ],
      providers: [
        UsersService
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
