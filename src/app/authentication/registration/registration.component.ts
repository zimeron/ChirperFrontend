import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/users/User';
import { UsersService } from 'src/app/users/users.service';

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

  // On form submission, try to post to DB with form information
  // Also Checks if password and confirmation match.

  submitReg() {
    if (this.regForm.value.password === this.regForm.value.passwordConfirm) {
      const user = new User();
      user.username = this.regForm.value.username;
      user.password = this.regForm.value.password;
      this.userService.postUser(user)
        .subscribe(
          () => this.regForm.reset()
        );
    } else {
      // TODO: Error handling for mismatched pwords.
    }
  }

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

}
