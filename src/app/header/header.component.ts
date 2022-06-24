import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationDialogComponent } from '../elements/registration-dialog/registration-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  links = [
    { name: 'Риэлтор-стажёр', route: '/vacansii/intern' },
    { name: 'Риэлтор-эксперт', route: '/vacansii/expert' },
    { name: 'Менеджер группы', route: '/vacansii/manager' },
    { name: 'О нас', route: '/about' },
  ];
  constructor(public dialog: MatDialog) {}

  public openDialog() {
    this.dialog.open(RegistrationDialogComponent);
  }
}
