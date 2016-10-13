import { Component } from '@angular/core';
import { AbstractControl, FormControl  } from '@angular/forms';

import { FormManager } from '../shared/form-manager';
import { FormField } from '../shared/form-field';
import { REGIONS } from './regions-data';

@Component({
  selector: 'app-step1',
  templateUrl: 'step1.component.html',
  styleUrls: ['step1.component.css']
})
export class Step1Component {

  regions = REGIONS; // this will be fetched from the "engine"
  step1: AbstractControl;

  // Fields being used locally
  regionField;
  areaField;
  relationshipField;
  partnerAgeField;

  constructor(private fm: FormManager) {
    this.step1 = fm.mainForm.controls['step1'];

    this.regionField = this.fm.getField('input_region');
    this.areaField = this.fm.getField('input_area');
    this.relationshipField = this.fm.getField('input_relationship_status');
    this.partnerAgeField = this.fm.getField('input_age_partner');

    this.configureRegionField();
    this.configureRelationshipField();
  }

  getFieldsList() {
    return Object.keys(this.step1['controls']);
  }

  setAreaField() {
    this.areaField[0].options = Object.keys(this.regions[this.regionField[1].value]);
    this.areaField[1].setValue(this.areaField[0].options[0]);
  }
  
  // This is watching the `region` field and updating the options in
  // the `area` field accordingly. Demo for inter dependant select fields.
  configureRegionField() {
    let regionField = this.regionField[0];
    let regionControl = this.regionField[1];
    
    regionField.options = Object.keys(this.regions);
    this.setAreaField();
    regionControl.valueChanges.subscribe(() => {
      if(regionControl.value) {
        this.setAreaField();
      }
    });
  }

  configureRelationshipField() {
    let relationshipControl: FormControl = this.relationshipField[1];
    let partnerAgeField: FormField = this.partnerAgeField[0];      
    
    relationshipControl.valueChanges.subscribe((newValue) => {
      this.partnerAgeField[0].hidden = (newValue == 'Single');
    });
    partnerAgeField.hidden = (relationshipControl.value == 'Single');
  }

}
