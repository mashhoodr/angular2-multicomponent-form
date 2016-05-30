import { Injectable } from '@angular/core';
import { FormBuilder, ControlGroup, Control, Validators  } from '@angular/common';
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
        let validators = this.getFieldValidators(field);
        if (validators.length > 0) {
          controlGroup[field.name] = [field.defaultValue, Validators.compose(validators)];
        } else {
          controlGroup[field.name] = [field.defaultValue];
        }
      }  
      
      sections[section.section] = fb.group(controlGroup);
    }
    
    this.mainForm = fb.group(sections);
  }
  
  valueUpdated(field: FormField, value: any) {
    console.log('Form updated', field.name, value);
  }

  getFieldValidators(field) {
    let validations = field.validation;
    let result = [];

    if (!validations) {
      return [];
    }

    if (typeof validations.length === 'undefined') {
      validations = [validations];
    }

    for (let validation of validations) {
      if (validation.type == 'required') {
        result.push(Validators.required);
      } else if (validation.type == 'custom') {
        let patterns = validation.data;
        for (let pattern of patterns) {
          result.push(Validators.pattern(pattern));
        }
      } else if (validation.type == 'minLength') { // minLength or maxLength
        result.push(Validators.minLength(validation.data));
      } else if (validation.type == 'maxLength') { // minLength or maxLength
        result.push(Validators.maxLength(validation.data));
      }
    }

    return result;
  }

  getField(name: string) {
    let search = [];
    this.fields.forEach(section => {
      section.fields.forEach(field => {
        if(field.name === name) {
          search.push(field);
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
