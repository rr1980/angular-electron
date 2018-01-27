import { Component, OnInit, forwardRef, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import * as _ from "lodash";
import { AuthService } from "AuthService";
import { Subscription } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  errorMsg: string;
  hide = true;
  sub:Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ["admin", [Validators.required]],
      password: ["admin", [Validators.required]]
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit() {
    _.each(this.form.controls, control => {
      control.markAsTouched();
    });

    if (!this.form.invalid) {
      this.sub = this.authService.login(this.form.value).subscribe(
        () => {
          this.errorMsg = undefined;
          this.router.navigate(["/home"]);
        },
        err => {
          this.errorMsg = err as string;
        }
      );
    }
  }
}
