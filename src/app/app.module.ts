import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InternPageComponent } from './intern-page/intern-page.component';
import { ExpertPageComponent } from './expert-page/expert-page.component';
import { ManagerPageComponent } from './manager-page/manager-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { MainPageComponent } from './main-page/main-page.component';
import { RegFormModule } from './common/reg-form/reg-form.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    InternPageComponent,
    ExpertPageComponent,
    ManagerPageComponent,
    InfoPageComponent,
    ContactPageComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    RegFormModule,
    NoopAnimationsModule,
    ReactiveFormsModule,

    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
