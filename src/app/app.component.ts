import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { MatBottomSheet } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ticket System';
  loggedIn = false;
  constructor(private router: Router, public userService: UserService, private cdr: ChangeDetectorRef, private _bottomSheet: MatBottomSheet) {
    console.log('userService.user ',UserService.user);
  }



  ngAfterViewChecked() {
    if (UserService.access_token) {
      this.loggedIn = true;
      this.cdr.detectChanges();
    }
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }

  logOut() {
    UserService.access_token = null;
    localStorage.setItem('access_token', null);
    this.loggedIn = false;
    this.cdr.detectChanges();
    this.router.navigate(['/app/login']);
  }
}

