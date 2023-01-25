import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { Credenciales } from '../interfaces/auth.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [];
  BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient, private router: Router) {
    this.getAllUsers().subscribe((res) => {
      this.users = res;
    });
  }

  getAllUsers() {
    return this.http.get<User[]>(`${this.BASE_URL}/users`);
  }

  login(credenciales: Credenciales) {
    const res = this.users.some(
      (user) =>
        user.username === credenciales.usuario &&
        user.email === credenciales.password
    );

    if (res) {
      localStorage.setItem('isLogin', JSON.stringify(res));
      return res;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('isLogin');
    this.router.navigate(['login']);
  }
}
