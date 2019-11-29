import { StatisticsService } from './../services/statistics.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { MatDialog } from '@angular/material';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  user: User;
  access_token: string;
  stats:any;
  constructor(private dialog: MatDialog, public userService: UserService, public statisticsService:StatisticsService) { }

  ngOnInit() {
    console.log('ngOnInit');
    if (!UserService.access_token) {
      this.user = this.userService.queryUser();
      console.log('this.user :', this.user);
      this.access_token = this.userService.queryAccess_token();
      this.statisticsService.getTicketStatisctis(this.access_token).subscribe((data: any) => {
        this.stats = JSON.stringify(data.result);
        console.log('!this.tickets this.tickets data.result :', this.stats);
      }, (error) => {
        console.log('getNews error :', error);
        this.dialog.open(ErrorComponent, {
          data: {
            message: "Your Session is expired, please login in again"
          }
        });
      });
    } else {
      console.log(' esle UserService.user :', UserService.user);
      console.log(' esle UserService.access_token :', UserService.access_token);
      this.user = UserService.user;
      this.access_token = UserService.access_token;
      this.statisticsService.getTicketStatisctis(this.access_token).subscribe((data: any) => {
        this.stats = JSON.stringify(data.result);
        console.log('!this.tickets this.tickets data.result :', this.stats);
      }, (error) => {
        console.log('getNews error :', error);
        this.dialog.open(ErrorComponent, {
          data: {
            message: "Your Session is expired, please login in again"
          }
        });
      });
    }
  }

}
