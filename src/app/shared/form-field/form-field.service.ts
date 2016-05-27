import { Injectable } from '@angular/core';
import { Validator } from './validator';
import { FormField, TextFormField, SelectFormField } from './form-field';

@Injectable()
export class FormFieldService {
  
  constructor() {}
  
  getFormFields() {
    return [{
      section: 'step1',
      fields: [
        new TextFormField('input_name', 'Your name', '', '', new Validator('required', 'Required..')),
        new SelectFormField('input_relationship_status', ['Single', 'Couple'], 'Relationship Status', 'Couple'),
        new SelectFormField('input_region', [], 'Region', 'Greater London'),
        new SelectFormField('input_area', [], 'Area'),
        new NumberFormField('input_age_user', 'Age', '0', '0', new Validator('custom', 'age must be between (min: 1 and max: 150)', ['^([1-9]|[1-9][0-9]|[1-9][0-5][0])$']))
      ]
    },
    {
      section: 'step2',
      fields: [
        new NumberFormField('input_number_of_children', 'Number of children', '0', '0', new Validator('custom', 'must be between (min: 0 - max: 9)', ['^([0-9])$'])),
        new TextFormField('input_savings', 'Savings', '', 'Total savings you currently have', new Validator('custom', 'The savings needs to be a number greater than zero.', ['^([1-9][0-9]*)$'])),
        new NumberFormField('input_dependants', 'Number of Dependants', '0', '0', new Validator('custom', 'must be between 0 - 9', ['^(0?[1-9])$'])),
        new RadioFormField('input_carer_single', 'Are yo a carer?', ['No', 'Yes'], 'Yes')
      ]
    }];
  }

}
