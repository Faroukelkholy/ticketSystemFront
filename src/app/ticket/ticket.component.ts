import { Component, OnInit,Input } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input() access_token: string;
  @Input() tickets: any;
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
