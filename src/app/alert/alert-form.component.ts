import {Component, OnInit} from '@angular/core';
import {AlertService} from '../alert.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-alert-form',
  templateUrl: './alert-form.component.html',
  styleUrls: ['./alert-form.component.css']
})
export class AlertFormComponent implements OnInit {
  alertForm = new FormGroup({
    name: new FormControl()
  });


  selectValues = [
    {value: 'minute', viewValue: 'per Minute'},
    {value: 'hour', viewValue: 'per Hour'}
  ];

  elastics: string[] = [];
  indices: string[] = [];
  types: string[] = [];

  constructor(private route: ActivatedRoute, private _fb: FormBuilder, private alertService: AlertService) {

    this.alertService.getElastics().subscribe(elastics => {
      this.elastics = elastics['servers'];
    });
  }

  ngOnInit() {
    this.alertForm = this._fb.group({
      id: [''],
      name: ['', Validators.required],
      elastic:  this._fb.group({
        url: ['', Validators.required],
        index: ['', Validators.required],
        type: ['', Validators.required],
      }),
      query: ['', Validators.required],
      match_type: ['once', Validators.required],
      match_frequency: [1, Validators.required],
      match_period: ['minute', Validators.required],
      targets: this._fb.group({
        // emails: this._fb.array([])
      })
    });
    // window.aaa = this.alertForm;

    this.alertForm.get('elastic').get('url').valueChanges.subscribe(val => {
      this.alertService.getElasticIndices(val).subscribe(elastics => {
        this.indices = elastics['indices'];
      });
    });

    this.alertForm.get('elastic').get('index').valueChanges.subscribe(val => {
      console.log(this.alertForm.value.elastic.url)
      this.alertService.getElasticTypes(this.alertForm.value.elastic.url, val).subscribe(elastics => {
        this.types = elastics['types'];
      });
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.alertService.getAlert(id).subscribe(alert => {
        console.log(alert);
        this.alertForm.patchValue(alert);
        (<FormGroup>this.alertForm.controls['targets']).setControl(
          'emails',
          this._fb.array(alert.targets.emails.map(a => this._fb.group(a)))
        );

      });

    }
  }

  createAlert(alert: any): void {
    console.log(alert.value);
    if (this.route.snapshot.paramMap.get('id')) {
      alert.value.id = this.route.snapshot.paramMap.get('id');
      this.alertService.updateAlert(alert.value)
        .subscribe(_alert => {
          console.log(_alert);
        });
    } else {
      this.alertService.createAlert(alert.value)
        .subscribe(_alert => {
          console.log(_alert);
        });
    }
  }
}
