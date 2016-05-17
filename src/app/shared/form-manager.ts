import { Injectable } from '@angular/core';
import { FormBuilder, ControlGroup, Control  } from '@angular/common';
import { FormField } from './form-field';
import { FormFieldService } from './form-field.service';

@Injectable()
export class FormManager {
  
  public mainForm: ControlGroup;
  
  constructor(fb: FormBuilder, formFieldService: FormFieldService) {
    let fields = formFieldService.getFormFields();
    let sections = {};
    
    for(let x = 0; x < fields.length; x++) {
      let section = fields[x];
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
  
}
