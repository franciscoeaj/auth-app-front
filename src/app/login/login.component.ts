import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent {
  constructor(private router: Router, private loginService: LoginService) {}

  alertMessage = undefined;

  public login(email, password) {
  	this.loginService.authenticate(email, password).subscribe(credentials => {
  		console.log(credentials['_body']);
  	}, error => {
  		this.alertMessage = error._body;
      console.log(error._body);
  	});
  }
}
