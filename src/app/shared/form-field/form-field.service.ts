import { Injectable } from '@angular/core';

import { FormField } from './form-field';

@Injectable()
export class FormFieldService {
  
  constructor() {}
  
  getFormFields() {
    return [{
      section: 'step1',
      fields: [
        new FormField('input_name', 'Your name'),
        new FormField('input_relationship_status', 'Relationship Status'),
        new FormField('input_age_user', 'Age')
      ]
    },
    {
      section: 'step2',
      fields: [
        new FormField('input_number_of_children', 'Number of children'),
        new FormField('input_savings', 'Savings'),
        new FormField('input_dependants', 'Number of Dependants')
      ]
    }];
  }

}
