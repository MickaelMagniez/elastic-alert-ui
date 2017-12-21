import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AlertsComponent} from './alerts/alerts.component';
import {AlertComponent} from './alert/alert.component';

const routes: Routes = [
  {path: 'alerts', component: AlertsComponent},
  {path: 'alerts/new', component: AlertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
