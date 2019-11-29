import { UserService } from './../services/user.service';
import { TicketService } from './../services/ticket.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {

  ticketForm: FormGroup;
  user: User;
  access_token: string;
  constructor(private router: Router, public formBuilder: FormBuilder, public ticketService: TicketService, public userService: UserService) { }


  ngOnInit() {
    console.log('ngOnInit');
    this.ticketForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });

    if (!UserService.access_token) {
      this.user = this.userService.queryUser();
      console.log('this.user :', this.user);
      this.access_token = this.userService.queryAccess_token();
    } else {
      this.user = UserService.user;
      this.access_token = UserService.access_token;
    }
  }


  submitTicket() {
    console.log(this.ticketForm.value);
    this.ticketService.saveTicket(this.ticketForm.value, this.user, this.access_token).subscribe((data: any) => {
      console.log('!submitTicket saveTicket:', data);
      if (data.message === 'Success') {
        this.router.navigate(['/app/home']);
      }
    }, (error) => {
      console.log('submitticket error :', error);
    });
  }

}

