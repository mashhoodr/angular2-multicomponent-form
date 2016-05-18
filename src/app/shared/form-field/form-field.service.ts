import { Injectable } from '@angular/core';

import { FormField, TextFormField, SelectFormField } from './form-field';

@Injectable()
export class FormFieldService {
  
  constructor() {}
  
  getFormFields() {
    return [{
      section: 'step1',
      fields: [
        new TextFormField('input_name', 'Your name'),
        new SelectFormField('input_relationship_status', ['Single', 'Couple'], 'Relationship Status', 'Couple'),
        new TextFormField('input_age_user', 'Age')
      ]
    },
    {
      section: 'step2',
      fields: [
        new TextFormField('input_number_of_children', 'Number of children', '0'),
        new TextFormField('input_savings', 'Savings', '', 'Total savings you currently have'),
        new TextFormField('input_dependants', 'Number of Dependants')
      ]
    }];
  }

}
