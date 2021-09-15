import { Component, OnInit } from '@angular/core';
import { IUser } from '../../user';
import {UserService} from "../../services/user.service";
import { Router } from'@angular/router'
// import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: IUser[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    // this.userService.findAll().subscribe(data => {
    //   this.users = data;
    // })
  }

}
