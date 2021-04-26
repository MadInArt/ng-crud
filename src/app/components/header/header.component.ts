import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../shared/services/auth-service.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService : AuthServiceService){}

  isLogged = this.authService.isLogged();
  
  ngOnInit(): void {

  }

  onLogout(){
    this.authService.logout()
  }

}
