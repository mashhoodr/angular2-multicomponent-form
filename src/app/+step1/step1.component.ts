import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl  } from '@angular/forms';
import { FormManager } from '../shared/form-manager';
import { FormField } from '../shared/form-field';
import { REGIONS } from './regions-data';

@Component({
  moduleId: module.id,
  selector: 'app-step1',
  templateUrl: 'step1.component.html',
  styleUrls: ['step1.component.css']
})
export class Step1Component implements OnInit {

  regions = REGIONS; // this will be fetched from the "engine"
  selectedArea: string;     
  step1: AbstractControl;

  constructor(private fm: FormManager) {
    this.step1 = fm.mainForm.controls['step1'];
    this.configureRegionField();
  }

  setAreaField(regionControl: FormControl) {
    let areaField = this.fm.getField('input_area');
    areaField[0].options = Object.keys(this.regions[regionControl.value]);
    areaField[1].setValue(areaField[0].options[0]);
  }
  
  // This is watching the `region` field and updating the options in
  // the `area` field accordingly. Demo for inter dependant select fields.
  configureRegionField() {
   let region = this.fm.getField('input_region');
    let regionField = region[0];
    regionField.options = Object.keys(this.regions);
    let regionControl: FormControl = region[1];
    this.setAreaField(regionControl);
    regionControl.valueChanges.subscribe(() => {
      if(regionControl.value) {
       this.setAreaField(regionControl);
      }
    });
  }
 
  ngOnInit() {}

}
