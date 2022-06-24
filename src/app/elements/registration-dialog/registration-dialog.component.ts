import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.scss']
})
export class RegistrationDialogComponent   {

  constructor(
    public dialogRef: MatDialogRef<RegistrationDialogComponent>
  ) {}

  close(): void {
    this.dialogRef.close();
  }

}
