import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InternPageComponent } from './intern-page/intern-page.component';
import { ExpertPageComponent } from './expert-page/expert-page.component';
import { ManagerPageComponent } from './manager-page/manager-page.component';
import { DirectorPageComponent } from './director-page/director-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { MainPageComponent } from './main-page/main-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    InternPageComponent,
    ExpertPageComponent,
    ManagerPageComponent,
    DirectorPageComponent,
    InfoPageComponent,
    ContactPageComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    NoopAnimationsModule,
    ReactiveFormsModule,

    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
