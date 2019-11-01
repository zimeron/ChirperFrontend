import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { SigninComponent } from './authentication/signin/signin.component';


const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: '', redirectTo: 'registration', pathMatch: 'full'},
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
