import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignoutComponent } from './authentication/signout/signout.component';
import { ProfileComponent } from './authentication/profile/profile.component';


const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: '', redirectTo: 'registration', pathMatch: 'full'},
  { path: 'signin', component: SigninComponent },
  { path: 'signout', component: SignoutComponent},
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
