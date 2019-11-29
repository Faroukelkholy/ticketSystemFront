import { Component, Inject, Injectable } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

  constructor(private dialogRef: MatDialogRef<ErrorComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private router: Router) {
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/app/login']);
    });
  }
  public closeDialog() {
    this.dialogRef.close();
  }

}
