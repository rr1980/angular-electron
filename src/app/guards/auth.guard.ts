import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  Route
} from "@angular/router";
import { AuthService } from 'AuthService';

@Injectable()
export class AuthGuard implements CanActivate {
  check: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot) {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(["/login"]);
    }

    return true;
  }
}
