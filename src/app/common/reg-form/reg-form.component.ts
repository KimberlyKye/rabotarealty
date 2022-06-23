import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../error-state-matcher';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss'],
})
export class RegFormComponent {
  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();
  numberFormControl = new FormControl('', [Validators.required]);
  vacancyFormControl = new FormControl('', [Validators.required]);
  dateFormControl = new FormControl('', [Validators.required]);
  checkFormControl = new FormControl('', [Validators.required]);
  messageFormControl = new FormControl('');

  dateList: string[] = [
    '29.06.2022',
    '15.07.2022',
    '15.08.2022',
    '27.08.2022',
    '09.09.2022',
    'Другая дата',
  ];
}
