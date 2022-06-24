import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InternPageComponent } from './intern-page/intern-page.component';
import { ExpertPageComponent } from './expert-page/expert-page.component';
import { ManagerPageComponent } from './manager-page/manager-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { MainPageComponent } from './main-page/main-page.component';
import { DialogComponent } from './elements/dialog/dialog.component';
import { RegFormModule } from './common/reg-form/reg-form.module';
import { ConditionsBlockModule } from './common/conditions-block/conditions-block.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    InternPageComponent,
    ExpertPageComponent,
    ManagerPageComponent,
    InfoPageComponent,
    MainPageComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    RegFormModule,
    ConditionsBlockModule,
    NoopAnimationsModule,
    ReactiveFormsModule,

    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
