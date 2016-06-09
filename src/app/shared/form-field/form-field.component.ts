import { Directive, Component, OnInit, Input, Output, EventEmitter, Provider, forwardRef } from '@angular/core';
import { FORM_DIRECTIVES, AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/common';
import { EditableDirective } from './editable.directive';

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
  directives: [FORM_DIRECTIVES, EditableDirective],
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
