import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/users/User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
/*
  Handles OAuth registration of new Chirper user, to pass along through Heroku authentication.
*/
export class RegistrationComponent implements OnInit {
  // Form bindings for Registration Form input
  regForm = new FormGroup ({
    username: new FormControl(''),
    password: new FormControl(''),
    passwordConfirm: new FormControl('')
  });

  // On form submission, check if the username already exists in the database
  // If so, return an error. If not, update OAuth and post DB User.
  // Also Checks if password and confirmation match.

  submitReg() {
    if (this.regForm.value.password.equals(this.regForm.value.passwordConfirm)) {
      const user = new User();
      user.username = this.regForm.value.username;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
