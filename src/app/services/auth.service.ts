import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { Credenciales } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [];
  BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {
    this.getAllUsers().subscribe((res) => {
      this.users = res;
      console.log(res);
    });
  }

  getAllUsers() {
    return this.http.get<User[]>(`${this.BASE_URL}/users`);
  }

  login(credenciales: Credenciales) {
    return this.users.some(
      (user) =>
        user.username === credenciales.usuario &&
        user.email === credenciales.password
    );
  }
}
