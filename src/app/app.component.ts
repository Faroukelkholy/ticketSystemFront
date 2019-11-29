import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ticketSystemFront';
  loggedIn = false;
  constructor(private router: Router, public userService: UserService, private cdr: ChangeDetectorRef) {

  }



  ngAfterViewChecked() {
    if (UserService.access_token) {
      this.loggedIn = true;
      this.cdr.detectChanges();
    }
  }


  logOut() {
    UserService.access_token = null;
    localStorage.setItem('access_token', null);
    this.loggedIn = false;
    this.cdr.detectChanges();
    this.router.navigate(['/app/login']);
  }
}

