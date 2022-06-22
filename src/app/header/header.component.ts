import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  links = [
    { name: 'Риэлтор-стажёр', route: '/vacansii/intern' },
    { name: 'Риэлтор-эксперт', route: '/vacansii/expert' },
    { name: 'Менеджер группы', route: '/vacansii/manager' },
    { name: 'О нас', route: '/about' },
    { name: 'Контакты', route: '/contacts' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
