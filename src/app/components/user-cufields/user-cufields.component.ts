
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
  form: FormGroup;
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
    }
    onUserUpdate(data){
      this.userService.updateUsers(data.value)
      this.form.reset();
    }
  }