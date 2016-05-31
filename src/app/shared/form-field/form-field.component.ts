import { Component, OnInit, Input } from '@angular/core';
import { FormFieldErrorComponent } from './shared/form-field-error';

@Component({
  moduleId: module.id,
  selector: 'form-field',
  templateUrl: 'form-field.component.html',
  styleUrls: ['form-field.component.css'],
  directives: [FormFieldErrorComponent]
})
export class FormFieldComponent implements OnInit {
  @Input() field;
  
  constructor() {}

  ngOnInit() {}

}
