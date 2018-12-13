import { Component, OnInit } from '@angular/core';

//Service
import { RepositoriosService } from '../../services/repositorios.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-repositorios',
  templateUrl: './repositorios.component.html',
  styleUrls: ['./repositorios.component.sass']
})
export class RepositoriosComponent implements OnInit {
  repositorios: any;
  user: any;

  constructor(
    private authService: AuthService,
    private repositoriosService: RepositoriosService
  ) { }

  ngOnInit() {
    this.repositoriosService.getRepositorios()
      .subscribe(
        data => {
          this.repositorios = data;
        }
    );
    this.repositoriosService.getUser()
      .subscribe(
        data => {
          this.user = data;
        }
    );
  }

  logout() {
    this.authService.logout();
  }
}
