import { Component, OnInit, Input } from '@angular/core';

import { FORM_DIRECTIVES } from '@angular/common';
import { MdRadioButton, MdRadioDispatcher } from '../radio-button/radio-button.component';

@Component({
  moduleId: module.id,
  selector: 'form-field',
  templateUrl: 'form-field.component.html',
  styleUrls: ['form-field.component.css'],
  directives: [MdRadioButton, FORM_DIRECTIVES],
  providers: [MdRadioDispatcher]
})
export class FormFieldComponent implements OnInit {
  @Input() field;
  
  constructor() {}
  ngOnInit() {}
}
