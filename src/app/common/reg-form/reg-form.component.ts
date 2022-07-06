import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { MyErrorStateMatcher } from '../error-state-matcher';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../elements/dialog/dialog.component';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss'],
})
export class RegFormComponent {
  matcher = new MyErrorStateMatcher();

  dateList: string[] = [
    '11.07.2022',
    '31.07.2022',
    '15.08.2022',
    '27.08.2022',
    '09.09.2022',
    'Другая дата',
  ];

  registrationForm: FormGroup;

  constructor(public dialog: MatDialog) {
    this.registrationForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      number: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{10}'),
      ]),
      vacancy: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      message: new FormControl(''),
    });
  }

  submitForm(formDirective: FormGroupDirective) {
    this.sendEmail();
    this.resetForm(formDirective);
    this.openDialog();
  }

  private sendEmail() {
    emailjs
      .send(
        'service_zfj1b87',
        'template_6t3kmhf',
        this.registrationForm.value,
        'BwuA5Ne8fvf-5KXBz'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  private resetForm(formDirective: FormGroupDirective) {
    formDirective.resetForm();
    this.registrationForm.reset();
  }
  private openDialog() {
    this.dialog.open(DialogComponent);
  }
}
