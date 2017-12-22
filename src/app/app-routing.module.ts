import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AlertsComponent} from './alerts/alerts.component';
import {AlertFormComponent} from './alert/alert-form.component';

const routes: Routes = [
  {path: 'alerts', component: AlertsComponent},
  {path: 'alerts/new', component: AlertFormComponent},
  {path: 'alerts/:id/edit', component: AlertFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
