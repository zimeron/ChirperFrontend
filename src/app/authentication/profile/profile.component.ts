import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/users.service';
import { Router } from '@angular/router';
import { take, switchMap } from 'rxjs/operators';
import { User } from 'src/app/users/User';
import { ServerResponse } from 'src/app/ServerResponse';
import { MatDialog, MatSpinner } from '@angular/material';
import { MessagesComponent } from 'src/app/messages.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

// Shows a user's profile with people they might want to follow
export class ProfileComponent implements OnInit {


  // Template Flags
  inSession = true;
  notInSession = false;
  loading = false;

  // Array for users display
  toFollow: User[];

  // Model initialization for CRUD request response;
  serverResponse: ServerResponse = {
    status: '',
    message: [],
    userid: 0,
    username: ''
  };

  constructor(private userService: UsersService, private router: Router, private dialog: MatDialog) {
    // Checks if in session, page should only display while logged in
    // Routes back to home page if not
    this.userService.inSession().pipe(take(1))
      .subscribe(inSession => {
        if (inSession) {
          this.inSession = true;
          this.notInSession = false;
        } else {
          this.router.navigate(['']);
        }
      });
  }

  // Invokes user service to grab a list of users that logged in user is not already following.
  getUsers() {
    this.loading = true;
    this.userService.getUsers()
      .subscribe(response => {
        console.warn(response);
        this.toFollow = response.reverse();
        this.loading = false;
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
        this.loading = false;
      });
  }

  // Updates following array for logged in user
  newFollowing(id: number) {
    this.loading = true;
    // Get current data from DB, append new data and update
    this.userService.getUserById(localStorage.getItem('userid'))
      .pipe(
        switchMap(user => {
          if (user.following === null) {
            user.following = [];
          }
          user.following.push(id.toString());
          return this.userService.updateUser(user);
        })).subscribe(response => {
          // Display success message
          console.warn(response);
          this.serverResponse.status = 'Success!';
          this.serverResponse.message = ['Now following user'];
          this.openDialog();
          this.loading = false;
          // Refresh user list
          this.getUsers();
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
          this.loading = false;
        });
  }

  // Handler to open error dialog box
  openDialog() {
    const dialogRef = this.dialog.open(MessagesComponent, {
      width: '250px',
      data: this.serverResponse
    });
  }

  // Grab the users to follow when component loads
  ngOnInit() {
    this.getUsers();
  }

}
