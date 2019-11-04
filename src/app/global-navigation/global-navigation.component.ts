import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-global-navigation',
  templateUrl: './global-navigation.component.html',
  styleUrls: ['./global-navigation.component.css']
})
export class GlobalNavigationComponent {

  // Template flags
  inSession = false;
  notInSession = true;

  constructor(private userService: UsersService) {
    this.userService.inSession().pipe(take(1))
      .subscribe(inSession => {
        if (inSession) {
          this.inSession = true;
          this.notInSession = false;
        }
      });
  }

}
