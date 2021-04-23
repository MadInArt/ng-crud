import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor() { }

  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('password').value; 
    let repeatPassword = AC.get('repeatPassword').value; 
     if(password != repeatPassword) {
         AC.get('repeatPassword').setErrors( {MatchPassword: true} )
     } else {
         return null
     }
 }

  registerForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
   password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    repeatPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ],)
  })

}
