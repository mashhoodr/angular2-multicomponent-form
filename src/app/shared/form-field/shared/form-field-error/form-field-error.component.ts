import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'form-field-error',
  templateUrl: 'form-field-error.component.html',
  styleUrls: ['form-field-error.component.css']
})
export class FormFieldErrorComponent implements OnInit {
  @Input() field;
  
  constructor() {}

  ngOnInit() {}

}
