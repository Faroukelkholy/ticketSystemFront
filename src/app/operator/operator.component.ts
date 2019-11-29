import { SocketService } from './../services/socket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent implements OnInit {

  ticket:any;
  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.socketService
      .getMessages('ticket')
      .subscribe((message: string) => {
        console.log('socketService message',message);
        this.ticket = message;
      });
  }

}
