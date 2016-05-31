import { Injectable } from '@angular/core';
import { Validator, RequiredValidator, PatternValidator, MinLengthValidator, MaxLengthValidator } from './validator';
import { FormField, TextFormField, SelectFormField, RadioFormField, NumberFormField } from './form-field';

@Injectable()
export class FormFieldService {
  
  constructor() {}
  
  getFormFields() {
    return [{
      section: 'step1',
      fields: [
        new TextFormField('input_name', 'Your name', '', '', [new RequiredValidator('Required..'), new MinLengthValidator(5, 'Minimum length should be 5'), new MaxLengthValidator(15, 'Maximum length should be 15')]),
        new SelectFormField('input_relationship_status', ['Single', 'Couple'], 'Relationship Status', 'Couple'),
        new SelectFormField('input_region', [], 'Region', 'Greater London'),
        new SelectFormField('input_area', [], 'Area'),
        new NumberFormField('input_age_user', 'Age', '0', '0', [new PatternValidator('^([1-9]|[1-9][0-9]|[1][0-4][0-9]|150)$', 'Age must between (min: 1 and max: 150)')])
      ]
    },
    {
      section: 'step2',
      fields: [
        new NumberFormField('input_number_of_children', 'Number of children', '0', '0', [new RequiredValidator('Required..'), new PatternValidator('^([0-9])$', 'No of children must between (min: 0 - max: 9)')]),
        new TextFormField('input_savings', 'Savings', '', 'Total savings you currently have', [new RequiredValidator('Required..'), new PatternValidator('^([1-9][0-9]*)$', 'The savings needs to be a number greater than zero.')]),
        new NumberFormField('input_dependants', 'Number of Dependants', '0', '0', [new PatternValidator('^([0-9])$', 'Must be between (0 - 9)')]),
        new RadioFormField('input_carer_single', 'Are yo a carer?', ['No', 'Yes'], 'Yes')
      ]
    }];
  }

}
