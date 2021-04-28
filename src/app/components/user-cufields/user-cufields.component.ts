
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Users } from 'src/app/shared/models/user.model';
import { UserServiceService } from 'src/app/shared/services/user-service.service';
@Component({
  selector: 'app-user-cufields',
  templateUrl: './user-cufields.component.html',
  styleUrls: ['./user-cufields.component.scss']
})
export class UserCUfieldsComponent implements OnInit {
  updatedUserData;
  form: FormGroup;
  isEdit: boolean;
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      first_name: new FormControl('',[
        Validators.required,
      ]),
      last_name: new FormControl('',[]),
      id: new FormControl(Math.floor(Math.random() * 30) + 15,[
        Validators.required,
      ]),
      avatar: new FormControl('',[]),
    });
  }
    onUserPost(data){
      this.userService.postUsers(data.value)
      this.form.reset();
      this.isEdit = false;
    }

    setUpdateUser(data){
      this.form.setValue({
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name,
        id: data.id,
        avatar: data.avatar,
      })
     
      this.isEdit = true;
     

   
  }
  onUserUpdate(){
    this.updatedUserData = this.form.value;
    this.userService.updateUsers(this.updatedUserData);
    this.isEdit = false;
    this.form.reset()

  }
}