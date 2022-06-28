import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Работа в недвижимости';

  links = [
    { name: 'Риэлтор-стажёр', route: '/vacansii/intern' },
    { name: 'Риэлтор-эксперт', route: '/vacansii/expert' },
    { name: 'Менеджер группы', route: '/vacansii/manager' },
    { name: 'О нас', route: '/about' },
  ];
}
