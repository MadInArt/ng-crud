import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from './api-service.service'
import {  Users } from '../models/user.model'
import { HttpClient } from '@angular/common/http';  


@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  constructor(private http: HttpClient, private apiService : ApiServiceService) { }

  getUsers(): Observable<Users>{
    return this.apiService.get('/users?page=2')
  }
  // deleteUsers():Observable<Users>{
  //   const url = `users/${id}`
  //   return this.apiService.delete('/users/${user.data.id}')
  // }
}
