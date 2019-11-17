import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/users.service';
import { ServerResponse } from 'src/app/ServerResponse';
import { MessagesComponent } from 'src/app/messages.component';
import { MatDialog, MatSpinner } from '@angular/material';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  // Model initialization CRUD request response
  serverResponse: ServerResponse = {
    status: '',
    message: [],
    userid: 0,
    username: ''
  };

  // Template flags
  inSession = false;
  notInSession = true;
  loading = false;

  constructor(private userService: UsersService, private dialog: MatDialog, private router: Router) {
    // Check if user is in session, this page should only display if logged in.
    // Routes to home if not.
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

  ngOnInit() {
  }

  // Logs user out by telling server to kill their session
  logout(): void {
    this.loading = true;
    console.warn('Logging out');
    this.userService.logout()
      .subscribe(response => {
        // Clear local cached information
        localStorage.setItem('userid', '0');
        localStorage.setItem('username', '');
        // Display success message
        this.serverResponse.status = response.status;
        this.serverResponse.message = response.message;
        this.openDialog();
        this.loading = false;
        // Route back to home
        this.router.navigate(['']);
      // Handle errors
      }, err => {
        // Check if error is due to server error
        // or unreachable server.
        if (err.error.status) {
          this.serverResponse.status = err.error.status;
          this.serverResponse.message = err.error.message;
        } else {
          this.serverResponse.status = 'Error';
          this.serverResponse.message = ['Something went wrong, please try again later'];
        }
        this.loading = false;
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

}
