import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserLoginModel } from '../user-login-model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: UserLoginModel = new UserLoginModel();
  constructor(private route: Router, private userService: UserService) { }

  ngOnInit() {
  }
  LoginEvent() {
    console.log(this.userData);
    this.userService.SubmitLoginDetails(this.userData).subscribe(data => {
     localStorage.setItem('Token',data.access_token);
      this.route.navigate(['dashboard']);
    })

  }
}
