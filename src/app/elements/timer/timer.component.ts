import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {
  constructor() {}

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  daysText = '';
  hoursText = '';
  minutesText = '';
  secondsText = '';

  interval = setInterval(() => {
    let startDate = new Date('Jul 15, 2022 9:00:00').getTime();
    let today = new Date().getTime();
    let difference = startDate - today;

    this.days = Math.floor(difference / (1000 * 60 * 60 * 24));

    this.hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((difference % (1000 * 60)) / 1000);
  }, 1000);

  y = setInterval(() => {
    if (this.days % 100 != 11 && this.days % 10 == 1) {
      this.daysText = 'день';
    } else if (
      this.days % 100 != 12 &&
      this.days % 100 != 13 &&
      this.days % 100 != 14 &&
      this.days % 10 > 1 &&
      this.days % 10 < 5
    ) {
      this.daysText = 'дня';
    } else {
      this.daysText = 'дней';
    }

    if (this.hours % 100 != 11 && this.hours % 10 == 1) {
      this.hoursText = 'час';
    } else if (
      this.hours % 100 != 12 &&
      this.hours % 100 != 13 &&
      this.hours % 100 != 14 &&
      this.hours % 10 > 1 &&
      this.hours % 10 < 5
    ) {
      this.hoursText = 'часа';
    } else {
      this.hoursText = 'часов';
    }

    if (this.minutes % 100 != 11 && this.minutes % 10 == 1) {
      this.minutesText = 'минута';
    } else if (
      this.minutes % 100 != 12 &&
      this.minutes % 100 != 13 &&
      this.minutes % 100 != 14 &&
      this.minutes % 10 > 1 &&
      this.minutes % 10 < 5
    ) {
      this.minutesText = 'минуты';
    } else {
      this.minutesText = 'минут';
    }

    if (this.seconds % 100 != 11 && this.seconds % 10 == 1) {
      this.secondsText = 'секунда';
    } else if (
      this.seconds % 100 != 12 &&
      this.seconds % 100 != 13 &&
      this.seconds % 100 != 14 &&
      this.seconds % 10 > 1 &&
      this.seconds % 10 < 5
    ) {
      this.secondsText = 'секунды';
    } else {
      this.secondsText = 'секунд';
    }
  }, 1000);
}
