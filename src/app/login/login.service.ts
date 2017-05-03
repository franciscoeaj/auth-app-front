import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoginService {
  constructor(private http: Http, private router: Router) {}

  public authenticate(email, password) {
  	var credentials = { email: email, password: password };
  	var url = 'http://localhost:8000/api/user/authenticate';

    return this.http.post(url, credentials);
  }

  public logout() {
    if (this.hasAuthenticatedUser()) {
      window.sessionStorage.clear();
      this.router.navigate(['/login']);
    }
  }

  public createSession(credentials) {
    window.sessionStorage.setItem('user', credentials._body);
    this.router.navigate(['/dashboard']);
  }

  public hasAuthenticatedUser() {
  	return !(window.sessionStorage.getItem('user') === null);
  }

  public getAuthenticatedUser() {
    let user = JSON.parse(window.sessionStorage.getItem('user'));
    
    return user;
  }
}