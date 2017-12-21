import {Component} from '@angular/core';
import {Alert} from '../alert';
import {AlertService} from '../alert.service';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  alert: Alert;

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.alert = new Alert;
  }


}
