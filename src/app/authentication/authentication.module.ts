import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatDialog } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { UsersModule } from '../users/users.module';
import { SigninComponent } from './signin/signin.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegistrationComponent, SigninComponent],
  imports: [
    RouterModule,
    UsersModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    AuthenticationRoutingModule
  ],
  exports: [
  ]
})

export class AuthenticationModule { }
