import { Injectable } from '@angular/core';
import { RadioButtonState } from '@angular/common';

import { FormField, TextFormField, SelectFormField, NumberFormField, RadioFormField } from './form-field';

@Injectable()
export class FormFieldService {
  
  constructor() {}
  
  getFormFields() {
    return [{
      section: 'step1',
      fields: [
        new TextFormField('input_name', 'Your name', ''),
        new SelectFormField('input_relationship_status', ['Single', 'Couple'], 'Relationship Status', 'Couple'),
        new SelectFormField('input_region', [], 'Region', 'Greater London'),
        new SelectFormField('input_area', [], 'Area'),
        new NumberFormField('input_age_user', 'Age', '0', '0')
      ]
    },
    {
      section: 'step2',
      fields: [
        new NumberFormField('input_number_of_children', 'Number of children', '0', '0'),
        new TextFormField('input_savings', 'Savings', '', 'Total savings you currently have'),
        new NumberFormField('input_dependants', 'Number of Dependants', '0', '0'),
        new RadioFormField('input_carer_single', 'Are yo a carer?', ['No', 'Yes'], 'Yes')
      ]
    }];
  }

}
