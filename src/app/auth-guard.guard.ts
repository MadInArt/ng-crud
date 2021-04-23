import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable({
    providedIn: 'root',
   
  })
  
  export class AuthGuard{}

//   export class AuthGuard implements CanActivate {
    
//     // constructor(private _token:TokenService,
//     //   private _route:Router
//     //   ){
      
//     // }
    
  
//     // canActivate(
//     //  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
//     //     if(localStorage.getItem('token')){
//     //        return true;
//     //     }else{
          
//     //       this._route.navigate(['/']);
//     //     }
//     }
    
//   }
  