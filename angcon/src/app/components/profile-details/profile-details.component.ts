import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
})
export class ProfileDetailsComponent implements OnInit {
  username: string | null = ''
  constructor() {}

  ngOnInit(): void {
    this.username = sessionStorage.getItem('loggedUser');
  }
  retrieveUser(userData: any) {}
}
