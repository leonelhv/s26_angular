import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credenciales } from 'src/app/interfaces/auth.interface';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  formLogin = this.fb.group({
    usuario: ['Bret', [Validators.required]],
    password: ['Sincere@april.biz', [Validators.required]],
  });

  onLogin() {
    const isLogin = this.authService.login(
      this.formLogin.value as Credenciales
    );

    if (!isLogin) return;

    this.router.navigate(['home']);
  }
}
