import { Users } from './../models/user.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiServiceService } from './api-service.service'
import { User } from '../models/user.model'
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  constructor(private apiService : ApiServiceService) { }
  
    usersList: User[] = [];
    private usersListSub: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
    currentData = this.usersListSub.asObservable();
 
    private formStatusSub: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
    currentFormStatus = this.formStatusSub.asObservable();

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
  updateUsers(data: User): void{
    this.apiService.put('/users?page=2', data).pipe(tap((updatedUser: User) =>{ 
      const newUserList = this.usersListSub.getValue();
      newUserList.push(updatedUser) 
      this.usersListSub.next(newUserList)
      console.log("userService post", updatedUser)
    })).subscribe()

  }
  formStatus(data : User): void{
    this.formStatusSub.next(data)
  }
}
