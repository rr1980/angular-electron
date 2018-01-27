import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as _ from "lodash";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public form: FormGroup;
  hide = true;
  
  constructor(private formBuilder: FormBuilder) { }

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
     
    }
  }

}
