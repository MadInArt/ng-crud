import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router'
import { ApiServiceService } from './api-service.service';


@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
 

  isToken: boolean;
  constructor(private httpClient: HttpClient, private router: Router, private apiService : ApiServiceService) { }

     

    login(username: string, password: string) {
      const request = this.httpClient.post('https://reqres.in/api/login', {
          username,
          password
      });
      request.subscribe((res: any) => this.setToken(res.token));
      this.router.navigate(['/dashboard']);
       return request;
     }
    register(username: string, password: string) {
      const request = this.httpClient.post('https://reqres.in/api/register', {
          username,
          password
      });
      request.subscribe((res: any) => this.setToken(res.token));
      this.router.navigate(['/dashboard']);
      return request;
      }
    logout() {
      localStorage.removeItem('token');
      this.isToken = false;
      this.router.navigate(['']);
    }
    setToken(token: string) {
    
      localStorage.setItem('token', token);
    }
    getToken() {
        if(localStorage.getItem('token')){
          this.isToken = true;
          return localStorage.getItem('token')
        }else{
          this.isToken = false;
          return localStorage.getItem('token')
          
        }
      
      
    }
    isLogged() {
     
      return this.getToken() !== null;
      
    }

}
