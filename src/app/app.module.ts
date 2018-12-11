import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Auth
import { CoreModule } from './auth/core.module';

//Pages
import { LoginComponent } from './pages/login/login.component';
import { RepositoriosComponent } from './pages/repositorios/repositorios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RepositoriosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
