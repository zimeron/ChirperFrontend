import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient,  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { User } from './User';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { ServerResponse } from '../ServerResponse';

@Injectable({
  providedIn: 'root'
})

// Provides CRUD request structure and execution for Users and Sessions

export class UsersService {
  // HTTP connection information for Rails server
  // Specifies that this client does not want an HTML layout
  // Change to heroku URL before deployment
  // URL = 'https://chirperbackend.herokuapp.com/';
  URL = 'http://localhost:3000/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Posts a JSON object from component to DB
  postUser(user: User, controller: string): Observable<ServerResponse> {
    const userString = JSON.stringify(user);
    // TODO: post message while it's posting
    console.warn('Submitting new User, Please Wait');
    return this.httpClient.post<ServerResponse>(this.URL + controller, userString, this.httpOptions)
      .pipe(
        tap(() => console.warn('Executing POST'))
      );
  }

  // Sends a DELETE from component to server, to delete a user from DB
  delete(user: User, controller: string): Observable<ServerResponse> {
    // TODO: post message while it's sending
    console.warn('Submitting Delete Request, Please Wait');
    return this.httpClient.delete<ServerResponse>(this.URL + controller + user.id, this.httpOptions)
      .pipe(
        tap(() => console.warn('Executing DELETE'))
      );
  }

  // For logout, no user necessary and always routes to Sessions controller
  logout(): Observable<ServerResponse> {
    console.warn('Submitting Logout request, please wait');
    return this.httpClient.delete<ServerResponse>(this.URL + 'sessions/' + localStorage.getItem('userid'), this.httpOptions)
      .pipe(
        tap(() => console.warn('Executing Logout'))
      );
  }

  // Checks to see if the browser is in session by looking at
  // localstorage user id. Returns true or false.
  inSession(): Observable<boolean> {
    if (localStorage.getItem('userid') !== null) {
      // Userid being 0 or null indicates no session, otherwise
      // there would be a user id stored for querying.
      if (localStorage.getItem('userid') === '0') {
        return of(false);
      } else {
        return of(true);
      }
    } else {
      return of(false);
    }
  }

  constructor(private httpClient: HttpClient) { }
}
