import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationDialogComponent } from '../elements/registration-dialog/registration-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() links = [{ route: '', name: '' }];

  constructor(public dialog: MatDialog) {}

  public openDialog() {
    this.dialog.open(RegistrationDialogComponent);
  }
}
