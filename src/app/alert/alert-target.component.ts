import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-alert-target',
  templateUrl: './alert-target.component.html',
})
export class AlertTargetComponent implements OnInit {
  @Input('group')
  public alertForm: FormGroup;

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {

    this.alertForm.addControl('emails', this._fb.array([]));

  //   this.alertForm.addControl('emails', this._fb.array([
  //     // {recipient: ['', Validators.required]}
  // ]));
  //   this.alertForm.setControl('emails', this._fb.array( [
  //     {recipient: 'oo'}
  //   ]));

  }

  addEmail() {
    (<FormArray>this.alertForm.controls['emails']).push(this.initEmail());
  }

  initEmail() {
    return this._fb.group({
      recipient: ['', Validators.required],
    });
  }

  removeEmail(i: number) {
    (<FormArray>this.alertForm.controls['emails']).removeAt(i);
  }
}
