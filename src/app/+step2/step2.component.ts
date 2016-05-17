import { Component, OnInit } from '@angular/core';
import { ControlGroup, AbstractControl } from '@angular/common';
import { FormManager } from '../shared/form-manager';

@Component({
  moduleId: module.id,
  selector: 'app-step2',
  templateUrl: 'step2.component.html',
  styleUrls: ['step2.component.css'],
})
export class Step2Component implements OnInit {
  step2: AbstractControl;
  
  constructor(fm: FormManager) {
    this.step2 = fm.mainForm.controls['step2'];
  }

  ngOnInit() {
  }

}
