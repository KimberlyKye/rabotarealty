import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Condition } from '../common/Condition';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-intern-page',
  templateUrl: './intern-page.component.html',
  styleUrls: ['./intern-page.component.scss'],
})
export class InternPageComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  dates = new FormControl('');
  dateList: string[] = [
    '23.06.2022',
    '01.07.2022',
    '17.07.2022',
    '03.08.2022',
    '27.08.2022',
    'Другая дата',
  ];

  conditions: Condition[] = [
    {
      title: 'Уникальные условия для новичков:',
      items: [
        '40% с первой сделки',
        'Бесплатное обучение',
        'Бесплатная мобильная связь',
        'Личный наставник на 5 сделок',
        'Гибкий график работы',
      ],
    },
    {
      title: 'Мы ждём тебя, если ты:',
      items: [
        'Жаждешь самореализации',
        'Хочешь заработать на свою недвижимость',
        'Хочешь заработать на свою машину',
        'Устал(а) работать за 20 тысяч рублей',
        'Хочешь расти в коллективе единомышленников',
        'Жаждешь построить карьеру',
        'Мечтаешь найти дело себе по душе',
      ],
    },
    {
      title: 'Мы создаем команду будущих профессионалов!',
      items: [
        'Приглашаем активных, общительных, позитивных мужчин и женщин стать частью нашей команды!',
        'Мы готовы делиться всем нашим опытом и знаниями, наработанными более чем за 20 лет!',
        'С нами вы достигнете неограниченных финансовых возможностей!',
      ],
    },
  ];

  expectations = [
    {
      title: '21 час теоретических занятий',
      text: [
        'Основы законодательства',
        'Методы налаживания деловых связей',
        'Технологии работы с клиентами',
        'Продукты компании',
        'Методы презентаций',
        'Психологию продаж',
      ],
      img: 'https://www.karavantver.ru/wp-content/uploads/2021/08/istock-491373804.jpg',
    },
    {
      title: 'Две недели интенсивной практики с персональным наставником',
      text: [
        'Опытные наставники будут сопровождать вас плечом к плечу к вашему успеху и поделятся своими накопленными опытом и знаниями!',
      ],
      img: 'https://businessman.ru/static/img/n/5/0/7/7/0/6/i/507706.jpg',
    },
    {
      title: 'Активные тренинги в команде',
      text: [
        'Тренинги по обработке скриптов и различные семинары помогут быстро влиться в рабочий процесс и выйти на сделку уже в течение первого месяца работы!',
      ],
      img: 'https://kremenki-gorod.ru/wp-content/uploads/b/8/6/b8655b82cfb003aeb93315dc7578a1ce.jpeg',
    },
    {
      title: 'Активные упражнения на скриптах-тренажёрах',
      text: [
        'Вы получите неограниченные возможности для совершенствования Ваших навыков и знаний, обучаясь у лучших и решая свои сверхамбициозные задачи!',
      ],
      img: 'https://coachuniver.ru/wp-content/uploads/2021/03/fotolia124971722subscriptionmonthlyxxlreferencefd92a.jpg',
    },
  ];
}
