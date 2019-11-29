import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myLoginForm: FormGroup;
  constructor(private dialog: MatDialog, private router: Router, public formBuilder: FormBuilder, public userService: UserService) { }

  ngOnInit() {
    this.myLoginForm = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });

  }

  submitLogin() {
    this.userService.login(this.myLoginForm.value).subscribe((data: any) => {
      if (data.message === 'Success') {
        // this.storage.set('loggedIn',true);
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('user', data.user);
        UserService.access_token = data.access_token;
        UserService.user = data.user;
        this.router.navigate(['/app/home']);
      } else if (data.message === 'Invalid username/password') {
        this.dialog.open(ErrorComponent,{ data: {
          message:  "Your login information are incorrect!"
          }});
      }

    });
    // this.dialog.open(ErrorComponent,{ data: {
    //   message:  "Your login information are incorrect!"
    //   }});
  }

}
