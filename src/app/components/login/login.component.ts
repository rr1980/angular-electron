import { Component, OnInit, forwardRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as _ from "lodash";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  errMsg: string;
  
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ["Admin", [Validators.required]],
      password: ["admin", [Validators.required]]
  });
  }

  onSubmit() {

    _.each(this.form.controls, (control) => {
        control.markAsTouched();
    });

    if (!this.form.invalid) {
        console.log("JO");
    }
    else{
      console.log("NO");
    }
}
}
