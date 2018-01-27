import { Injectable, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import "rxjs/add/operator/map";

export class User {
  username: string;
}

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  user = new Subject<User>();

  constructor(private router: Router, private http: HttpClient) {}

  login(user: any): Observable<any> {
    this.isLoggedIn = true;
    if (user.username === "admin" && user.password === "admin") {
      this.isLoggedIn = true;
      this.user.next({ username: user.username } as User);
      return Observable.of(true);
    } else {
      this.isLoggedIn = false;
      this.user.next({} as User);
      return Observable.throw("username or password incorrect!");
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    this.user.next({} as User);
    this.router.navigate(["/login"]);
  }
}
