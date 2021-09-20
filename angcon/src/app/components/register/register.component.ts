import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserRegister } from 'src/app/model/user-register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new UserRegister( "", "", "")

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  registerSubmit(user: any){
    
  }

}
