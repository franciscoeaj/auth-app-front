import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ LoginService ]
})

export class DashboardComponent {
  constructor(private router: Router, private loginService: LoginService) { }

  user = this.loginService.getAuthenticatedUser();

  public debug() {
  	console.log(window.sessionStorage.getItem('user'));
  }

  public logout() {
  	this.loginService.logout();
  }
 }
