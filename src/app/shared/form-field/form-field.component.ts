import { Component, Input } from '@angular/core';
import { TOOLTIP_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

import { FocusResetField } from './focus-reset-field.directive';

@Component({
  moduleId: module.id,
  selector: 'form-field',
  templateUrl: 'form-field.component.html',
  styleUrls: ['form-field.component.css'],
  directives: [TOOLTIP_DIRECTIVES, FocusResetField]
})
export class FormFieldComponent {
  @Input() field;
}
