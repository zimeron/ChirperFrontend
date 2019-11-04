import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/users.service';
import { ServerResponse } from 'src/app/ServerResponse';
import { MessagesComponent } from 'src/app/messages.component';
import { MatDialog } from '@angular/material';
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
    userid: 0
  };

  // Template flags
  inSession = false;
  notInSession = true;

  constructor(private userService: UsersService, private dialog: MatDialog, private router: Router) { 
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
    console.warn('Logging out');
    this.userService.logout()
      .subscribe(response => {
        // Clear local cached information
        localStorage.setItem('userid', '0');
        // Display success message
        this.serverResponse.status = response.status;
        this.serverResponse.message = response.message;
        this.openDialog();
        // Route back to home
        this.router.navigate(['']);
      // Handle errors
      }, err => {
        this.serverResponse.status = err.error.status;
        this.serverResponse.message = err.error.message;
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
