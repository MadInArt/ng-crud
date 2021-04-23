import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from './api-service.service'
import { User } from '../models/user.model'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';  


@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  constructor(private http: HttpClient, private apiService : ApiServiceService) { }

  getUsers(): Observable<User[]>{
    return this.apiService.get('/users?page=2')
  }
}
