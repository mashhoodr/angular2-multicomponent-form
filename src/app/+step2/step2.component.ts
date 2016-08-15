import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormManager } from '../shared/form-manager';
import { FormFieldComponent, FormField } from '../shared/form-field';

@Component({
  moduleId: module.id,
  selector: 'app-step2',
  templateUrl: 'step2.component.html',
  styleUrls: ['step2.component.css'],
  directives: [FormFieldComponent]
})
export class Step2Component implements OnInit {
  step2: AbstractControl;
  input_number_of_children;
  
  constructor(private fm: FormManager) {
    this.step2 = fm.mainForm.controls['step2'];
    this.input_number_of_children = fm.getField('input_number_of_children');
  }

  ngOnInit() {
  }
  
  private assertChildCount(number) {
    return number < parseInt(this.input_number_of_children[1].value, 10);
  }
  
  private hasChildren() {
    return parseInt(this.input_number_of_children[1].value, 10) > 0;
  }

}
