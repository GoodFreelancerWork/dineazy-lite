import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IResponse } from 'src/app/models/IResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading: boolean = false;
  error!: string;

  constructor(private router: Router, private formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  signin() {
    this.loading = true;
    console.log(this.loginForm.value);
    this.httpClient
      .post<IResponse<any>>('https://dineazyapi.elaachi.com/api/v1/auth/login', this.loginForm.value)
      .subscribe(
        response => {
          if (response.success) {
            sessionStorage.setItem('Login', 'success');
            this.router.navigate(['/home']);
          } else {
            this.error = response.message;
          }
        }, error => {
          this.error = error.message;
        }, () => {
          this.loading = false;
        });
  }

  gotoForgotPasswordPage(): void {
    this.router.navigate(['/auth/forgot-password']);
  }

  gotoRegisterPage(): void {
    this.router.navigate(['/auth/register']);
  }

  private createForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }
}
