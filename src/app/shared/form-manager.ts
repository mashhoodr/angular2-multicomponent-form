import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators  } from '@angular/forms';
import { FormField, FormFieldService } from './form-field';

@Injectable()
export class FormManager {
  
  public mainForm: FormGroup;
  public fields;
  
  constructor(fb: FormBuilder, formFieldService: FormFieldService) {
    this.fields = formFieldService.getFormFields();
    let sections = {};
    
    for (let section of this.fields) {
      // dynamically generate the control groups
      let controlGroup = {};
      for (let field of section.fields) {
        controlGroup[field.name] = [field.defaultValue].concat(this.getFieldValidators(field));
      }
      
      sections[section.section] = fb.group(controlGroup);
    }
    this.mainForm = fb.group(sections);
  }
  
  valueUpdated(field: FormField, value: any) {
    console.log('Form updated', field.name, value);
  }

  getFieldValidators(field): Validators[] {
    let result = [];
    
    for (let validation of field.validations) {
      result.push((validation.data ? Validators[validation.type](validation.data) : Validators[validation.type]));
    }

    return (result.length > 0) ? [Validators.compose(result)] : [];
  }

  // TODO add types to these functions
  getField(name: string) {
    let search = [];
    this.fields.forEach(section => {
      section.fields.forEach(field => {
        if(field.name === name) {
          search.push(field);
          let control: FormGroup = <FormGroup> this.mainForm.controls[section.section];
          search.push(control.controls[name]);
        }
      })
    })
    
    if(search.length <= 0) 
      throw new Error(`Field with name: ${name} not found`)
    
     return search;
  }

}
