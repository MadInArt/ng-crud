import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthGuard } from './auth-guard.guard'

const routes: Routes = [
   {path: 'login',  component: LoginPageComponent},
  {path: 'register',  component: RegisterPageComponent},
  {path: 'dashboard',  component: DashboardPageComponent,  canActivate: [AuthGuard]}, 
  {path: '', pathMatch:'full', redirectTo:'login'},
  {path: '**', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 

