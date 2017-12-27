import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatOptionModule,
  MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule,
  MatTabsModule
} from '@angular/material';


import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {AlertsComponent} from './alerts/alerts.component';
import {AlertService} from './alert.service';
import {AlertFormComponent} from './alert/alert-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertRecipientEmailComponent} from "./alert/alert-recipient-email.component";
// import {FlexLayoutModule} from "@angular/flex-layout";
import {AlertTargetComponent} from "./alert/alert-target.component";


@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent,
    AlertFormComponent,
    AlertTargetComponent,
    AlertRecipientEmailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    // FlexLayoutModule
  ],
  providers: [
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
