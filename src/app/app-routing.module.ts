import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegFormComponent } from './common/reg-form/reg-form.component';
import { ExpertPageComponent } from './expert-page/expert-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { InternPageComponent } from './intern-page/intern-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ManagerPageComponent } from './manager-page/manager-page.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  { path: 'vacansii/intern', component: InternPageComponent },
  { path: 'vacansii/expert', component: ExpertPageComponent },
  { path: 'vacansii/manager', component: ManagerPageComponent },
  { path: 'contacts', component: InfoPageComponent },
  { path: 'registration', component: RegFormComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: '**', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
