import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userToken = false; // to display navigation buttons depends on token availability, set by default token to false, after login set it to true. Loggin out setting token back to false.
  
  constructor() { }

  ngOnInit(): void {
  }

}
