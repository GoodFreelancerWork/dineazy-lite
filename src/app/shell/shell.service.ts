import { Injectable } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { AuthenticationGuard } from '../auth/authentication-guard';
import { ShellComponent } from './shell/shell.component';

@Injectable({
  providedIn: 'root'
})
export class Shell {

  static children(routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
      canActivate: [AuthenticationGuard]
    };
  }
}
