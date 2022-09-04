import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordConfirmationComponent } from './forgot-password-confirmation/forgot-password-confirmation.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterConfirmationComponent } from './register-confirmation/register-confirmation.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register-confirmation', component: RegisterConfirmationComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'forgot-password-confirmation', component: ForgotPasswordConfirmationComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'forgot-password-confirmation', component: ForgotPasswordConfirmationComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
