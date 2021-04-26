import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'

import {Auth, Token } from '../models/auth.model'
import { ApiServiceService } from './api-service.service';


@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {


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

  // login(): Observable<Auth>{

  //   const request = this..post('/login',
  //   {
      
  //   });
  //   request.subscribe((res: Token)  => this.setToken(res.token));
  //   this.router.navigate(['/dashboard']);
  //   return request;
  // }

     logout() {
      localStorage.removeItem('token');
      this.router.navigate(['']);
      }

     setToken(token: string) {
      localStorage.setItem('token', token);
    }
     getToken() {
      return localStorage.getItem('token');
    }
    isLogged() {
      return this.getToken() !== null;
  }

}
