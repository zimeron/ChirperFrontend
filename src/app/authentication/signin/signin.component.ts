import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/users/User';
import { UsersService } from 'src/app/users/users.service';
import { ServerResponse } from 'src/app/ServerResponse';
import { MatDialog, MatIcon } from '@angular/material';
import { MessagesComponent } from 'src/app/messages.component';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

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

  // Model initialization for CRUD response
  serverResponse: ServerResponse = {
    status: '',
    message: [],
    userid: 0,
    username: ''
  };

  // Template flags
  inSession = false;
  notInSession = true;
  hide = true;

  // On form submission, send credentials to server for authentication.
  submit() {
    // Debug
    console.warn('Submitting credentials, please wait');
    // Grab form data
    const user = new User();
    user.password = this.signinForm.value.password;
    user.username = this.signinForm.value.username;
    // Send to Server, await response
    this.userService.postUser(user, 'sessions')
      .subscribe(response => {
        this.signinForm.reset();
        // Display success message
        this.serverResponse.status = response.status;
        this.serverResponse.message = response.message;
        this.openDialog();
        // Frontend query and flag information, held in local storage
        localStorage.setItem('userid', response.userid.toString());
        localStorage.setItem('username', response.username);
        // Route to user profile after log in success
        this.router.navigate(['/profile']);
      },
      // Error handling
      err => {
        // Check if it's an error the server gave us,
        // or an error getting to the server
        if (err.error.status) {
          this.serverResponse.status = err.error.status;
          this.serverResponse.message = err.error.message;
          this.signinForm.reset();
        } else {
          this.serverResponse.status = 'Error';
          this.serverResponse.message = ['Something went wrong, please try again later'];
        }
        this.openDialog();
      });
  }

  // Calls in the dialog box component for success/error message
  openDialog(): void {
    const dialogRef = this.dialog.open(MessagesComponent, {
      width: '250px',
      data: this.serverResponse
    });
  }

  constructor(private userService: UsersService, private dialog: MatDialog, private router: Router) {
    this.userService.inSession().pipe(take(1))
      .subscribe(inSession => {
        if (inSession) {
          this.inSession = true;
          this.notInSession = false;
          this.router.navigate(['/profile']);
        }
      });
  }

  ngOnInit() {
  }

}
