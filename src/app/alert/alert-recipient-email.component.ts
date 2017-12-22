import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-alert-recipient-email',
  templateUrl: './alert-recipient-email.component.html',
})
export class AlertRecipientEmailComponent implements OnInit {
  @Input('group')
  public alertForm: FormGroup;

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {

  }
}
