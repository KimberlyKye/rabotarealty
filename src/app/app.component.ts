import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  title = 'Работа в недвижимости';

  links = [
    { name: 'Риэлтор-стажёр', route: '/vacansii/intern' },
    { name: 'Риэлтор-эксперт', route: '/vacansii/expert' },
    { name: 'Менеджер группы', route: '/vacansii/manager' },
    { name: 'Контакты', route: '/contacts' },
  ];

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.open(
      'Пользуясь нашим сайтом, вы соглашаетесь с тем, что мы используем cookies 🍪',
      'Закрыть',
      {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      }
    );
  }
}
