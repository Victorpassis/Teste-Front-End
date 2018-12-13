import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { NotifyService } from './notify.service';

import { Observable, of } from 'rxjs';
import { switchMap, startWith, tap, filter, finalize } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class AuthService {
  CLIENT_ID = 'e27022ca24dac6b11943';
  private CLIENT_SECRET = 'a4ca3a55d48b5c53515f363b73dabf48d87767fa'

  constructor(
    private http: HttpClient,
    private router: Router,
    private notify: NotifyService
  ) { }

  getToken(session_code: any) {
    this.http.post("https://github.com/login/oauth/access_token?client_id=" + this.CLIENT_ID + "&client_secret=" + this.CLIENT_SECRET + "&code=" + session_code, {}, httpOptions)
      .subscribe(
      data => {
        console.log("POST Request is successful ", data);
      },
      error => {
        console.log("Error", error);
      }
    );
  }
  getClient() {
    
  }


  // If error, console log and notify user
  private handleError(error: Error) {
    console.error(error);
    this.notify.update(error.message, 'error');
  }
}
