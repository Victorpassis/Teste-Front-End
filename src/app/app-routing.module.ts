import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//guard
import { AuthGuard } from './auth/auth.guard';

//pages
import { LoginComponent } from './pages/login/login.component';
import { RepositoriosComponent } from './pages/repositorios/repositorios.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },{
    path: '',
    component: RepositoriosComponent,
    canActivate: [AuthGuard]
  },{
    path: 'repositorios',
    component: RepositoriosComponent,
    canActivate: [AuthGuard]
  },{ 
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }