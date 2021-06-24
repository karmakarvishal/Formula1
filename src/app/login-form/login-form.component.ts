import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service'


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {


  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: CommonService,
    public dialogRef: MatDialogRef<LoginFormComponent>) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    console.log(this.service.authenticateUser(this.loginForm.value.username, this.loginForm.value.password));


    if (this.service.authenticateUser(this.loginForm.value.username, this.loginForm.value.password)) {
      sessionStorage.setItem('authenticated', 'true');
      sessionStorage.setItem('user', this.service.getUserDetails(this.loginForm.value.username))
      this.dialogRef.close(true);
    }
    else {
      sessionStorage.clear();
      sessionStorage.setItem('authenticated', 'false');
      this.dialogRef.close(false);
    }


  }



}
