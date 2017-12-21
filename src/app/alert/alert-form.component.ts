import {Component} from '@angular/core';

import {Alert} from '../alert';
import {AlertService} from '../alert.service';

@Component({
  selector: 'app-alert-form',
  templateUrl: './alert-form.component.html',
  // styleUrls: ['./hero-form.component.css']
})
export class AlertFormComponent {

  constructor(private alertService: AlertService) {
  }

  model = new Alert();

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  createAlert(alert): void {
    this.alertService.createAlert(alert)
      .subscribe(_alert => {
        console.log(_alert);
      });
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
