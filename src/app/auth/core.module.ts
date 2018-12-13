import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptor } from './tokenInterceptor'

@NgModule({
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
    },
    AuthService, 
    AuthGuard
  ]
})
export class CoreModule { }
