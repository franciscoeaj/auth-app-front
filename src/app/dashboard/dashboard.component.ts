import { Component } from '@angular/core';

import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ LoginService ]
})

export class DashboardComponent {
  constructor(private loginService: LoginService) { }

  public logout() {
  	this.loginService.logout();
  }
 }
