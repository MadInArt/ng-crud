import { Component, OnInit, ViewChild } from '@angular/core';
import { UserCUfieldsComponent } from 'src/app/components/user-cufields/user-cufields.component';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  @ViewChild('myForm') myForm: UserCUfieldsComponent;
  constructor() { }

  ngOnInit(): void {
    console.log(this.myForm)
  }

}
