import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { FormManager } from '../shared/form-manager';

@Component({
  moduleId: module.id,
  selector: 'app-step2',
  templateUrl: 'step2.component.html',
  styleUrls: ['step2.component.css']
})
export class Step2Component {
  
  step2: AbstractControl;
  input_number_of_children;
  
  constructor(private fm: FormManager) {
    this.step2 = fm.mainForm.controls['step2'];
    this.input_number_of_children = fm.getField('input_number_of_children');
  }
  
  private assertChildCount(value) {
    return value < parseInt(this.input_number_of_children[1].value, 10);
  }
  
  private hasChildren() {
    return parseInt(this.input_number_of_children[1].value, 10) > 0;
  }

}
