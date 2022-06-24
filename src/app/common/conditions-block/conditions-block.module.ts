import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConditionsBlockComponent } from './conditions-block.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [ConditionsBlockComponent],
  imports: [CommonModule, MatListModule, MatCardModule, SwiperModule],
  exports: [ConditionsBlockComponent],
})
export class ConditionsBlockModule {}
