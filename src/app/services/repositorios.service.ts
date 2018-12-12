import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoriosService {
  githubUrl = 'https://api.github.com/users/Victorpassis/repos';

  constructor(private http: HttpClient) { }

  getRepositorios() {
    return this.http.get(this.githubUrl);
  }
}