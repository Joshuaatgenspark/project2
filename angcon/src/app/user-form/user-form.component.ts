import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

import { IUser } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

    // user: IUser;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private userService: UserService) { 
          // this.user = new User();
        }

  ngOnInit(): void {
  }

  // onSubmit() {
  //   this.userService.save(this.user).subscribe(result => this.gotoUserList());
  // }

  // gotoUserList() {
  //   this.router.navigate(['/users']);
  // }
}
