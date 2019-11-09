import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/users/User';
import { UsersService } from 'src/app/users/users.service';
import { MatDialog } from '@angular/material/dialog';
import { ServerResponse } from 'src/app/ServerResponse';
import { MessagesComponent } from 'src/app/messages.component';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
/*
  Handles grabbing data from reg form, passing it along for sign up.
*/
export class RegistrationComponent implements OnInit {
  // Form bindings for Registration Form input
  regForm = new FormGroup ({
    username: new FormControl(''),
    password: new FormControl(''),
    passwordConfirm: new FormControl('')
  });

  // Model initialization for CRUD request response;
  serverResponse: ServerResponse = {
    status: '',
    message: [],
    userid: 0,
    username: ''
  };

  // Template Flags
  inSession = false;
  notInSession = true;
  hidePass = true;
  hideConf = true;

  // On form submission, try to post to DB with form information
  // Password match is on backend because bcrypt is squanchy

  submitReg() {
      const user = new User();
      // Grab form data
      user.username = this.regForm.value.username;
      user.password = this.regForm.value.password;
      user.password_confirmation = this.regForm.value.passwordConfirm;
      // Send to server
      this.userService.postUser(user, 'users')
        .subscribe(response => {
            console.warn(response);
            this.regForm.reset();
            this.serverResponse.status = 'Success! Welcome to Chirper!';
            this.openDialog();
            // Route to sign in
            this.router.navigate(['/signin']);
        },
        // Error Handling and display
        err => {
          // Check if the error is from the server or
          // due to unreachable server.
          if (err.error.status) {
            this.serverResponse = err.error;
          } else {
            this.serverResponse.status = 'Error';
            this.serverResponse.message = ['Something went wrong, please try again later'];
          }
          this.openDialog();
          this.regForm.reset();
        }
      );
  }

  // Handler to open error dialog box

  openDialog(): void {
    const dialogRef = this.dialog.open(MessagesComponent, {
      width: '250px',
      data: this.serverResponse
    });
  }

  constructor(private userService: UsersService, public dialog: MatDialog, private router: Router) {
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
