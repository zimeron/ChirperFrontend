import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServerResponse } from './ServerResponse';

// Binding component for message display dialog box
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<MessagesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ServerResponse) {
    }

  ngOnInit() {
  }

  // Close dialog
  onNoClick(): void {
    this.dialogRef.close();
  }

}
