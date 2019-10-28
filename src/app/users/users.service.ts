import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from './User';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // HTTP connection information for Rails server
  // Specifies that this client does not want an HTML layout
  // TODO: change to heroku URL before deployment
  usersURL = 'chirperbackend.herokuapp.com/users';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // TODO: Some kind of message handler

  // Posts a JSON object from component to DB
  postUser(user: User): Observable<string> {
    const userString = JSON.stringify(user);
    // TODO: post message while it's posting
    console.warn('Submitting new User, Please Wait');
    return this.httpClient.post<string>(this.usersURL, userString, this.httpOptions)
      .pipe(
        tap(() => console.warn('Adding new User'))
      );
        // TODO: message and error handling
  }

  constructor(private httpClient: HttpClient) { }
}
