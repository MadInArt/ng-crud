import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User, Users } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-cufields',
  templateUrl: './user-cufields.component.html',
  styleUrls: ['./user-cufields.component.scss']
})
export class UserCUfieldsComponent implements OnInit {
  form: FormGroup;
  constructor(private http: HttpClient) { }

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
  postUser(form: FormGroup){

    // let id = form.value.id;
    // let first_name = form.value.first_name;
    // let last_name = form.value.last_name;
    // let email = form.value.email;
    // let avatar = form.value.avatar;
    
    // this.http.post<Users>("https://reqres.in/api/users", {
    //   // id : id,
    //   // email: email,
    //   // first_name: first_name,
    //   // last_name: last_name,
    //   // avatar: avatar
    // }).subscribe((res: Users) =>{
  
    // })
  }
}
