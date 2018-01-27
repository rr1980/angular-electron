import { Component, OnInit, forwardRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import * as _ from "lodash";
import { AuthService } from "AuthService";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  errorMsg: string;
  hide = true;

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

  onSubmit() {
    _.each(this.form.controls, control => {
      control.markAsTouched();
    });

    if (!this.form.invalid) {
      this.authService.login(this.form.value).subscribe(
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
