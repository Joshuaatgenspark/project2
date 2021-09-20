import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserRegister } from 'src/app/model/user-register';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user = new UserRegister('', '', '');

  constructor(
    private route: ActivatedRoute,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {}

  registerSubmit(user: any) {
    this.registerService.registerUser(this.user).subscribe((data) => {
      console.log(this.user);
      alert('Registration sucessful! :D')
    });
  }
}
