import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline/timeline.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatDialogModule, MatInputModule, MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [TimelineComponent],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    RouterModule,
    CommonModule
  ]
})
export class TimelineModule { }
