import { Injectable } from '@angular/core';
//import {FormBuilder, Validators, formDirectives, ControlGroup} from 'angular2/forms';
import { FormBuilder, ControlGroup, Control  } from '@angular/common';
import { FormField, FormFieldService } from './form-field';

@Injectable()
export class FormManager {
  
  public mainForm: ControlGroup;
  public fields;
  
  constructor(fb: FormBuilder, formFieldService: FormFieldService) {
    this.fields = formFieldService.getFormFields();
    let sections = {};
    
    for(let x = 0; x < this.fields.length; x++) {
      let section = this.fields[x];
      // dynamically generate the control groups
      let controlGroup = {};
      for (let y = 0; y < section.fields.length; y++) {
        let field: FormField = section.fields[y];
        controlGroup[field.name] = [field.defaultValue];
      }  
      
      sections[section.section] = fb.group(controlGroup);
    }
    
    this.mainForm = fb.group(sections);
    
    this.mainForm.valueChanges.subscribe(
      form => {
        console.log('Changed', form);
      }
    )
  }

  getField(name: string) {
    let search = [];
    this.fields.forEach(section => {
      section.fields.forEach(field => {
        if(field.name === name) {
          search.push(field);
          console
          let control: ControlGroup = <ControlGroup> this.mainForm.controls[section.section];
          search.push(control.controls[name]);
        }
      })
    })
    
    if(search.length <= 0) 
      throw new Error(`Field with name: ${name} not found`)
     
     return search;
  }
  
}
