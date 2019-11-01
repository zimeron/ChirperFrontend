import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/users/User';
import { UsersService } from 'src/app/users/users.service';
import { MatDialog } from '@angular/material/dialog';
import { ServerResponse } from 'src/app/ServerResponse';
import { MessagesComponent } from 'src/app/messages.component';
import { Router } from '@angular/router';

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

  serverResponse: ServerResponse = {
    status: '',
    message: []
  };

  // On form submission, try to post to DB with form information
  // Password match is on backend because bcrypt is squanchy

  submitReg() {
      const user = new User();
      user.username = this.regForm.value.username;
      user.password = this.regForm.value.password;
      user.password_confirmation = this.regForm.value.passwordConfirm;
      this.userService.postUser(user, 'users')
        .subscribe(response => {
            console.warn(response);
            this.regForm.reset();
            this.serverResponse.status = 'Success! Welcome to Chirper!';
            this.openDialog();
            this.router.navigate(['/signin']);
        },
        err => {
          console.warn(err);
          this.serverResponse = err.error;
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

  constructor(private userService: UsersService, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

}
