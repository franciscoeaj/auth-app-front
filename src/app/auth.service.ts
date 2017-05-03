import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login/login.service';

@Injectable()
export class AuthService implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (state.url === "/login" && this.loginService.hasAuthenticatedUser()) {
   		this.router.navigate(['/dashboard']);
      	return false;
    } else if (state.url !== "/login"  && !this.loginService.hasAuthenticatedUser()) {
      this.router.navigate(['/login']);
    }

    return true;
  }
}
