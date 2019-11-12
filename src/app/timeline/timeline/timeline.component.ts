import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts/posts.service'
import { FormGroup, FormControl } from '@angular/forms';
import { ServerResponse } from 'src/app/ServerResponse';
import { Post } from 'src/app/posts/Post';
import { MessagesComponent } from 'src/app/messages.component';
import { MatDialog, MatInput, MatCard } from '@angular/material';
import { UsersService } from 'src/app/users/users.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  // Reactive form controls and group for the post form
  postForm = new FormGroup ({
    content: new FormControl('')
  });

  // Array for post display
  posts: Post[];

  // Template Flags
  inSession = false;
  notInSession = true;

  // Model initialization for CRUD request response;
  serverResponse: ServerResponse = {
    status: '',
    message: [],
    userid: 0,
    username: ''
  };

  // Post content to the DB
  createPost() {
    let post = new Post();
    // Grab form data
    post.content = this.postForm.value.content;
    post.userid = +localStorage.getItem('userid');
    post.username = localStorage.getItem('username');
    console.warn(post);
    // Send to server
    this.postService.postPost(post)
        .subscribe(response => {
            console.warn(response);
            this.postForm.reset();
            this.serverResponse.status = 'Success! Post created!';
            this.openDialog();
            // Refresh Timeline
            this.getPosts();
        },
        // Error Handling and display
        err => {
          // Check if the error is from the server or
          // due to unreachable server.
          if (err.error.status) {
            this.serverResponse = err.error;
          } else {
            this.serverResponse.status = 'Error';
            this.serverResponse.message = ['Something went wrong, please try again later'];
          }
          this.openDialog();
          this.postForm.reset();
        }
      );

  }

  // Invokes posts service to grab a list of posts, sorted by date.
  getPosts() {
    this.postService.getPosts()
      .subscribe(response => {
        console.warn(response);
        this.posts = response.reverse();
      });

  }

  // Handler to open error dialog box
  openDialog() {
    const dialogRef = this.dialog.open(MessagesComponent, {
      width: '250px',
      data: this.serverResponse
    });
  }

  constructor(private postService: PostsService, public dialog: MatDialog, private userService: UsersService, private router: Router) {
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
    this.getPosts();
  }

}
