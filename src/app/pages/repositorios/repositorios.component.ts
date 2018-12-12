import { Component, OnInit } from '@angular/core';

//Service
import { RepositoriosService } from '../../services/repositorios.service';

@Component({
  selector: 'app-repositorios',
  templateUrl: './repositorios.component.html',
  styleUrls: ['./repositorios.component.sass']
})
export class RepositoriosComponent implements OnInit {
  repositorios: any;

  constructor(private repositoriosService: RepositoriosService) { }

  ngOnInit() {
    this.repositoriosService.getRepositorios()
      .subscribe(
        data => {
          this.repositorios = data;
        }
    );
  }
}
