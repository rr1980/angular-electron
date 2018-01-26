import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  Route
} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  check: boolean = false;

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    if (!this.check) {
      this.router.navigate(["/login"]);
    }

    return true;
  }
}
