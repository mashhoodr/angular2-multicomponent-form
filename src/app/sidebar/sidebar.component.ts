import { ControlGroup } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormManager } from '../shared/form-manager';

@Component({
  moduleId: module.id,
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  title: string = "Sidebar";
  mainForm: ControlGroup;
  validations: Object = {}; /* contains all steps validations (true/false) */
  
  constructor(public fm: FormManager) {
    this.mainForm = fm.mainForm;

    // initialize all `steps` to `false` by default.
    for (let key in this.mainForm.value) {
      this.validations[key] = false;
    }
  }

  getSteps(): Array<string>{
    return Object.keys(this.validations);
  }
  
  ngOnInit() {}
}
