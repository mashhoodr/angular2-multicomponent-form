import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-field',
  templateUrl: 'form-field.component.html',
  styleUrls: ['form-field.component.css']
})
export class FormFieldComponent {
  @Input() field;
}
