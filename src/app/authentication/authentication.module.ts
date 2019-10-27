import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatInput } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { UsersModule } from '../users/users.module';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    UsersModule,
    MatCardModule,
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
