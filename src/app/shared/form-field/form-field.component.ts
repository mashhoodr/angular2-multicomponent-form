import { Directive, Component, OnInit, Input, Output, EventEmitter, Provider, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { FORM_DIRECTIVES, CORE_DIRECTIVES, AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/common';
import { FocusResetField } from './focus-reset-field.directive';
import { TOOLTIP_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

const FORM_FIELD_CONTROL_VALUE_ACCESSOR = new Provider(
  NG_VALUE_ACCESSOR, {
  useExisting: forwardRef(() => FormFieldComponent),
  multi: true
});

@Component({
  moduleId: module.id,
  selector: 'form-field',
  templateUrl: 'form-field.component.html',
  styleUrls: ['form-field.component.css'],
  directives: [TOOLTIP_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES, FocusResetField],
  providers: [FORM_FIELD_CONTROL_VALUE_ACCESSOR]
})
export class FormFieldComponent implements OnInit {
  @Input() field;
  @Output() value = new EventEmitter();
  onChange = (_) => {};
  onTouched = () => {};
  
  constructor() {}
  ngOnInit() {}
  
  updateValue($event) {
    this.onChange($event.target.value);
    this.value.emit({
      field: this.field[0],
      value: $event.target.value 
    });
  }
  
  writeValue(value: any): void {
    this.field[1].updateValue(value);
    this.updateValue({ 
      target: {
        value: value
      } 
    });
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
 
}
