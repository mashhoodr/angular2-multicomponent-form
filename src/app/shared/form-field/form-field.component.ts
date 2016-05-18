import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'form-field',
  templateUrl: 'form-field.component.html',
  styleUrls: ['form-field.component.css']
})
export class FormFieldComponent implements OnInit {
  @Input() field;
  
  constructor() {}

  ngOnInit() {}

}
