import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/users/User';
import { UsersService } from 'src/app/users/users.service';
import { ServerResponse } from 'src/app/ServerResponse';
import { MatDialog } from '@angular/material';
import { MessagesComponent } from 'src/app/messages.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

// Handles packaging and sending user credentials for server authentication.

export class SigninComponent implements OnInit {

  // Form controls for sign in form
  signinForm = new FormGroup ({
    username: new FormControl(''),
    password: new FormControl('')
  });

  serverResponse: ServerResponse = {
    status: '',
    message: []
  };

  // Flags for template
  // TODO: drop these into Local storage so they survive a refresh
  loggedOut = true;
  loggedIn = false;

  // On form submission, send credentials to server for authentication.
  submit() {
    console.warn('Submitting credentials, please wait');
    const user = new User();
    user.password = this.signinForm.value.password;
    user.username = this.signinForm.value.username;
    this.userService.postUser(user, 'sessions')
      .subscribe(response => {
        console.warn(response);
        this.signinForm.reset();
        // TODO: Route to Timeline
        this.serverResponse.status = response.status;
        this.serverResponse.message = response.message;
        this.openDialog();
        this.loggedOut = false;
        this.loggedIn = true;
      },
      err => {
        console.warn(err);
        this.signinForm.reset();
        this.serverResponse.status = err.error.status;
        this.serverResponse.message = err.error.message;
        this.openDialog();
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MessagesComponent, {
      width: '250px',
      data: this.serverResponse
    });
  }

  constructor(private userService: UsersService, private dialog: MatDialog) { }

  ngOnInit() {
  }

}
