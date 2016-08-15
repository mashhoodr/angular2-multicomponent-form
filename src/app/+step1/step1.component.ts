import { Component, OnInit } from '@angular/core';
import { AbstractControl  } from '@angular/forms';
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

  regions = REGIONS; // this will be fetched from the engine
  selectedArea: string;     
  step1: AbstractControl;

  constructor(private fm: FormManager) {
    this.step1 = fm.mainForm.controls['step1'];
    
    let regionField = fm.getField('input_region')[0];
    regionField.options = Object.keys(this.regions);
    this.updateLocationFied(null);
  }
  
  updateLocationFied($event) {
    // TODO fix update lag
    let regionControl = this.fm.getField('input_region')[1];
    if(regionControl.value) {
      let areaField = this.fm.getField('input_area');
      areaField[0].options = Object.keys(this.regions[regionControl.value]);
      areaField[1].setValue(areaField[0].options[0]);
    }
    
    if($event) {
      this.update($event.field, $event.value);
    }
  }
  
  update(field: FormField, value: any) {
    this.fm.valueUpdated(field, value);
  }
 
  ngOnInit() {}

}
