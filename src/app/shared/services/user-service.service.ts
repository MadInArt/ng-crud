import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from './api-service.service'
import {  Users, User } from '../models/user.model'
import { HttpClient } from '@angular/common/http';  


@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  // userList$ 
  constructor(private httpClient: HttpClient, private apiService : ApiServiceService) { }

  getUsers(): Observable<Users>{
    return this.apiService.get('/users?page=2').pipe()
  }
  deleteUsers(userId: number): Observable<Users>{
    return this.apiService.delete(`/users/${userId}`).pipe()
  }
  postUsers(data: User):Observable<any>{
    return this.apiService.post('/users?page=2', data)
  }
}
