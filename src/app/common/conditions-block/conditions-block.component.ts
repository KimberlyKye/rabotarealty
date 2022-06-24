import { Component, Input, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Condition } from '../Condition';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'conditions-block',
  templateUrl: './conditions-block.component.html',
  styleUrls: ['./conditions-block.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ConditionsBlockComponent {
  @Input() conditions: Condition[] = [];

  constructor() {}
}
