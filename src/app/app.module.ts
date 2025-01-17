import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Angular Material Imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatDialogModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

// App imports
import { GlobalNavigationComponent } from './global-navigation/global-navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { MessagesComponent } from './messages.component';
import { TimelineModule } from './timeline/timeline.module';

@NgModule({
  declarations: [
    AppComponent,
    GlobalNavigationComponent,
    MessagesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    AuthenticationModule,
    TimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MessagesComponent],
  entryComponents: [MessagesComponent]
})
export class AppModule { }
