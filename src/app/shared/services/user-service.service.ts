import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { ApiServiceService } from './api-service.service'
import {  Users, User } from '../models/user.model'
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  constructor(private apiService : ApiServiceService, private httpClient: HttpClient) { }
  
    usersList: User[] = [];
    private usersListSub: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  
    currentData = this.usersListSub.asObservable();
 
    getUsersList(): BehaviorSubject<User[]>{
      return this.usersListSub;
    }

  getUsers(): void{
    this.apiService.get('/users?page=2').pipe(tap(data =>{ 
      this.usersListSub.next(data.data)
    })).subscribe()
  }

  deleteUsers(user: User): void{
    this.apiService.delete(`/users/${user.id}`).pipe(tap((delUser: User) =>{ 
      let newUserList = this.usersListSub.getValue();
      newUserList = newUserList.filter(u => u.id !== user.id);
      this.usersListSub.next(newUserList)
      console.log("userService delete", delUser)
    })).subscribe()

  }

  postUsers(data: User): void{
    this.apiService.post('/users?page=2', data).pipe(tap((newUser: User) =>{ 
      const newUserList = this.usersListSub.getValue();
      newUserList.push(newUser) 
      this.usersListSub.next(newUserList)
      console.log("userService post", newUser)
    })).subscribe()

  }
}
