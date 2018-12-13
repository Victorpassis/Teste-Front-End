import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../../auth/auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.actRoute.queryParams.subscribe(params => {
      if(params['code'] && !this.authService.isAuthenticated()) {
        this.authService.getToken(params['code'])
        /*.subscribe((response: any) => {
            const { access_token, token_type } = response
            this.authService.setAuthentication( access_token, token_type )
            //this.router.navigate([''])
          })*/
      }
    });

    if(this.authService.isAuthenticated) {
      //this.router.navigate([''])
    }
  }

  login() {
    window.location.href = "https://github.com/login/oauth/authorize?scope=user:email&client_id=" + environment.CLIENT_ID;
  }
}