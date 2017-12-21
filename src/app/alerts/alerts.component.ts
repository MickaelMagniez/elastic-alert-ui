import {Component} from '@angular/core';
import {Alert} from '../alert';
import {AlertService} from '../alert.service';


@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent {
  alerts: Alert[];

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.getAlerts();
  }

  getAlerts(): void {
    this.alertService.getAlerts()
      .subscribe(alerts => {
        console.log('got alerts', alerts);
        this.alerts = alerts['alerts'];
      });
  }

  deleteAlert(alert: Alert): void {
    this.alertService.deleteAlert(alert.id)
      .subscribe(id => this.getAlerts());

  }
}
