import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../shared/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  error = '';
  form: FormGroup;
  constructor(private authService: AuthServiceService, private router: Router) { }
  
  ngOnInit(){
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(8),
      ])
     })

     if (this.authService.isLogged()) {
      this.router.navigate(['/dashboard']);
    }
  }
  login(form: FormGroup) {
    this.error = '';
    const email = form.value.email;
    const password = form.value.password;
    this.authService
        .login(email, password)
        .subscribe(
            res => this.router.navigate(['/dashboard']),
            err => (this.error = err.error.error)
        );
}
}

