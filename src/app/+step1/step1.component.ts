import { Component, OnInit } from '@angular/core';
import { ControlGroup, AbstractControl } from '@angular/common';
import { FormManager } from '../shared/form-manager';
import { FormFieldComponent } from '../shared/form-field';

@Component({
  moduleId: module.id,
  selector: 'app-step1',
  templateUrl: 'step1.component.html',
  styleUrls: ['step1.component.css'],
  directives: [FormFieldComponent]
})
export class Step1Component implements OnInit {
    
  step1: AbstractControl;

  constructor(public fm: FormManager) {
    this.step1 = fm.mainForm.controls['step1'];
  }
  

  ngOnInit() {
  }

}
