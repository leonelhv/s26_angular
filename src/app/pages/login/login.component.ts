import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private fb: FormBuilder) {}

  formLogin = this.fb.group({
    usuario: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  onLogin() {}
}
