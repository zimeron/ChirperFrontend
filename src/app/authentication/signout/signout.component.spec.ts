import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignoutComponent } from './signout.component';
import { MatDialogModule } from '@angular/material';
import { UsersModule } from 'src/app/users/users.module';
import { UsersService } from 'src/app/users/users.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { utf8Encode } from '@angular/compiler/src/util';

describe('SignoutComponent', () => {
  let component: SignoutComponent;
  let fixture: ComponentFixture<SignoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignoutComponent ],
      imports: [
        MatDialogModule,
        RouterTestingModule,
        UsersModule,
        HttpClientTestingModule
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
