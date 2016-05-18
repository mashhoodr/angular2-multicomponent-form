import { Component, OnInit } from '@angular/core';
import { ControlGroup, AbstractControl } from '@angular/common';
import { FormManager } from '../shared/form-manager';
import { FormFieldComponent } from '../shared/form-field';

@Component({
  moduleId: module.id,
  selector: 'app-step2',
  templateUrl: 'step2.component.html',
  styleUrls: ['step2.component.css'],
  directives: [FormFieldComponent]
})
export class Step2Component implements OnInit {
  step2: AbstractControl;
  
  constructor(public fm: FormManager) {
    this.step2 = fm.mainForm.controls['step2'];
  }

  ngOnInit() {
  }

}
