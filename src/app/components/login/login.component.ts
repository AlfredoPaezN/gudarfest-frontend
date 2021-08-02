import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './shared/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup = new FormGroup({});

  constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private router: Router,
  ) {
  }

  ngOnInit() {
      this.signinForm = this.fb.group({
          username: [null, Validators.required],
          password: [null, Validators.required]
      });
  }
  get form()
  {
      return this.signinForm.controls;
  }

  onSubmit() {
      this.authService.loginUser(this.form.username.value, this.form.password.value)
          .subscribe(
              data => {
                this.router.navigate(['/']).then(()=>{

                })
                return false;
              },
              error => {
                  console.log(error);
              });

  }
}
