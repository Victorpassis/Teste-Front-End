import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getToken(session_code: any) {
    return this.http.get("https://list-repositories-api.herokuapp.com/api/proxy/" + session_code);
  }

  setAuthentication(token: string, type: string) {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('type', type);
  }

  isAuthenticated(): boolean {
    if(sessionStorage.getItem('token') && sessionStorage.getItem('type') !== null) return true

    return false
  }

  logout() {
    this.router.navigate(['login']);
    sessionStorage.clear();
  }
}