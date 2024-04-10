import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
  //redirect to login page from the root
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },
  //route for login page
  {
    path: 'login',
    component: LoginComponent,
  },
  //route for signup page
  {
    path: 'signup',
    component: SignupComponent,
  },
];
