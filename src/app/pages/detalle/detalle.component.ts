import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  user!: User;
  id!: number;

  constructor(
    private authSerice: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe((params) => {
      let id = Number(params.get('id'));
      this.id = id;
    });
  }

  ngOnInit(): void {
    this.authSerice.getDataUser(this.id).subscribe((res) => {
      if (!res) {
        this.router.navigate(['home']);
      }
      this.user = res;
    });
  }
  volver() {
    this.router.navigate(['/home']);
  }
}
