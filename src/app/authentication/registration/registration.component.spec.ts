import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RegistrationComponent } from './registration.component';
import { UsersService } from 'src/app/users/users.service';
import { MessagesComponent } from 'src/app/messages.component';
import { RouteOutputStub } from 'src/app/RouteOutputStub';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegistrationComponent,
        MessagesComponent
       ],
      imports: [
        FormsModule,
        MatDialogModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          {path: 'profile', component: RouteOutputStub}
        ]),
        MatInputModule,
        MatProgressSpinnerModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
        UsersService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
