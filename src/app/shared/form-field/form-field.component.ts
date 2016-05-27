import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FORM_DIRECTIVES, AbstractControl } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'form-field',
  templateUrl: 'form-field.component.html',
  styleUrls: ['form-field.component.css'],
  directives: [FORM_DIRECTIVES]
})
export class FormFieldComponent implements OnInit {
  @Input() field;
  @Output() value = new EventEmitter();
  
  constructor() {}
  ngOnInit() {}
  
  updateValue($event) { 
    this.value.emit({
      field: this.field[0],
      value: $event.target.value 
    });
  }
}
