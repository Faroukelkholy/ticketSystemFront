import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  userform: FormGroup;
  newsForm: FormGroup;
  user: User;
  access_token: string;
  constructor(private router: Router, public formBuilder: FormBuilder, public userService: UserService) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.userform = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.email],
      mobile: ['', Validators.compose([Validators.minLength(11), Validators.required])],
      type: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['male', Validators.required],
    });
  }


  submitUser() {
    console.log(this.userform.value);
    this.userService.saveUser(this.userform.value).subscribe((data: any) => {
      console.log('!submituser saveUser:', data);
      if (data.message === 'Success') {
        this.router.navigate(['/app/users']);
      }
    }, (error) => {
      console.log('submituser error :', error);
    });
  }

}

