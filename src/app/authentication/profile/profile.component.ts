import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/users.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  // Template Flags
  inSession = true;
  notInSession = false;

  constructor(private userService: UsersService, private router: Router) { 
    this.userService.inSession().pipe(take(1))
      .subscribe(inSession => {
        if (inSession) {
          this.inSession = true;
          this.notInSession = false;
        } else {
          this.router.navigate(['/registration']);
        }
      });
  }

  ngOnInit() {
  }

}
