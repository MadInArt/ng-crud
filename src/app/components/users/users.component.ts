import { Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { User, Users } from 'src/app/shared/models/user.model';
import { UserServiceService } from 'src/app/shared/services/user-service.service';
import { UserCUfieldsComponent } from '../user-cufields/user-cufields.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Input() myForm: UserCUfieldsComponent;
  updatedData: User [] = [] ;
  users: User[] = [];
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'avatar', 'deltebtn', 'updatebtn'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserServiceService) {
  }

  ngOnInit(){

    this.userService.getUsers();

    this.userService.getUsersList().subscribe(userList => {
      this.users = userList;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
 }
   onUserDelete(user){
       this.userService.deleteUsers(user)
  }
  onUserUpdate(data): void{ 
    this.myForm.setUpdateUser(data)

   }
}

