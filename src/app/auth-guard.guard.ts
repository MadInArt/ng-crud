import { Injectable, OnInit } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

import { AuthServiceService } from './shared/services/auth-service.service'


  @Injectable({
    providedIn: 'root',
   
  })

  export class AuthGuard implements CanActivate{
  
  constructor(private authService: AuthServiceService, private router: Router) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLogged()) { 
      return true;
    } else {
      this.router.navigate(['/login'])
      return false;
    }
  }
}

    

