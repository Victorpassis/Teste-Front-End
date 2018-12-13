import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpParams  } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getToken(session_code: any) {
    /*this.http.post("https://github.com/login/oauth/access_token?client_id=" + environment.CLIENT_ID + "&client_secret=" + environment.CLIENT_SECRET + "&code=" + session_code, {})
      .subscribe(
      data => {
        console.log("POST Request is successful ", data);
      },
      error => {
        console.log("Error", error);
      }
    );*/
  }

  setAuthentication(token: string, type: string) {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('type', type);
  }

  isAuthenticated(): boolean {
    if(sessionStorage.getItem('token') && sessionStorage.getItem('token') !== 'undefined') return true

    return false
  }

  logout() {
    sessionStorage.clear();
  }
}