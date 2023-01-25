import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent {
  users!: User[];
  BASE_MAP_URL = 'https://www.google.com/maps/search/?api=1&query';

  constructor(private authSerice: AuthService) {
    this.authSerice.getAllUsers().subscribe((res) => {
      this.users = res;
    });
  }
}
