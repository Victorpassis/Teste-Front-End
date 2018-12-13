import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(
    //@Inject(DOCUMENT) private document: any,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(params['code']){
        this.authService.getToken(params['code']);
      }
    });
  }

  login() {
    window.location.href = "https://github.com/login/oauth/authorize?scope=user:email&client_id=" + this.authService.CLIENT_ID;
  }
}