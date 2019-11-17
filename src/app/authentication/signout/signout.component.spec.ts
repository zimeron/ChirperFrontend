import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogModule, MatProgressSpinnerModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SignoutComponent } from './signout.component';
import { MessagesComponent } from 'src/app/messages.component';

import { UsersService } from 'src/app/users/users.service';

describe('SignoutComponent', () => {
  let component: SignoutComponent;
  let fixture: ComponentFixture<SignoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SignoutComponent,
        MessagesComponent
      ],
      imports: [
        MatDialogModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatProgressSpinnerModule
      ],
      providers: [
        UsersService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
