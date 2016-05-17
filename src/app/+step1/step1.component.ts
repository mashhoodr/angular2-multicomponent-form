import { Component, OnInit } from '@angular/core';
import { ControlGroup, AbstractControl } from '@angular/common';
import { FormManager } from '../shared/form-manager';

@Component({
  moduleId: module.id,
  selector: 'app-step1',
  templateUrl: 'step1.component.html',
  styleUrls: ['step1.component.css']
})
export class Step1Component implements OnInit {
    
  step1: AbstractControl;

  constructor(fm: FormManager) {
    this.step1 = fm.mainForm.controls['step1'];
  }

  ngOnInit() {
  }

}
