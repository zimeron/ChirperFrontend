import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { UsersModule } from '../users/users.module';
import { SigninComponent } from './signin/signin.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SignoutComponent } from './signout/signout.component';

@NgModule({
  declarations: [RegistrationComponent, SigninComponent, ProfileComponent, SignoutComponent],
  imports: [
    RouterModule,
    UsersModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
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
