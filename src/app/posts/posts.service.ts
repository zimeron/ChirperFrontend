import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './Post';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ServerResponse } from '../ServerResponse';

@Injectable({
  providedIn: 'root'
})

// Provides CRUD request structure and execution for Posts

export class PostsService {

  // HTTP connection information
  // Specifies this client does not want HTML
  // Change to heroku URL before deployment
  URL = 'https://chirperbackend.herokuapp.com/';
  // URL = 'http://localhost:3000/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // POSTS a ...post... to the Database
  // Sorry about this name...
  postPost(post: Post): Observable<ServerResponse> {
    const postString = JSON.stringify(post);
    // TODO: post message while it's posting
    console.warn('Submitting new Post, Please Wait');
    return this.httpClient.post<ServerResponse>(this.URL + 'posts', postString, this.httpOptions)
      .pipe(
        tap(() => console.warn('Executing POST'))
      );
  }

  // GETS posts from server, sorted by date.
  getPosts(): Observable<Post[]> {
    console.warn('Retrieving posts, please wait');
    return this.httpClient.get<Post[]>(this.URL + 'posts' + '/' + localStorage.getItem('userid'), this.httpOptions)
      .pipe(
        tap(() => console.warn('Executing GET'))
      );
  }



  constructor(private httpClient: HttpClient) { }
}
