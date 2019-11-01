import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient,  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { User } from './User';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { ServerResponse } from '../ServerResponse';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // HTTP connection information for Rails server
  // Specifies that this client does not want an HTML layout
  // TODO: change to heroku URL before deployment
  URL = 'https://chirperbackend.herokuapp.com/';
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
        tap(() => console.warn('Adding new User'))
      );
  }

  constructor(private httpClient: HttpClient) { }
}
