import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RegistrationDialogComponent } from '../elements/registration-dialog/registration-dialog.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RegFormModule } from '../common/reg-form/reg-form.module';

@NgModule({
  declarations: [HeaderComponent, RegistrationDialogComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RegFormModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
