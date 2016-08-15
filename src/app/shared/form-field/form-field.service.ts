import { Injectable } from '@angular/core';
import { Tooltip } from './tooltip';
import { 
  RequiredValidator, 
  PatternValidator, 
  MinLengthValidator, 
  MaxLengthValidator } from './validator';
import { 
  FormField, 
  TextFormField, 
  SelectFormField, 
  RadioFormField, 
  NumberFormField } from './form-field';

@Injectable()
export class FormFieldService {
  
  constructor() {}
  
  getFormFields() {
    return [{
      section: 'step1',
      fields: [
        new TextFormField({ 
          name: 'input_name', 
          label: 'Your name', 
          validations: [
            new RequiredValidator('Required.'),
            new MinLengthValidator(5, 'Name should be atleast 5 characters.'),
          ],
          tooltip: new Tooltip('Please enter your name') 
        }),
        new SelectFormField({
          name: 'input_relationship_status',
          label: 'Relationship Status',
          options: ['Single', 'Couple'],
          defaultValue: 'Couple',
          tooltip: new Tooltip('Please choose your relationship status.')
        }),
        new SelectFormField({
          name: 'input_region',
          label: 'Region',
          defaultValue: 'Greater London'
        }),
        new SelectFormField({
          name: 'input_area',
          label: 'Area'
        }),
        new NumberFormField({
          name: 'input_age_user',
          label: 'User Age',
          defaultValue: '25',
          validators: [
            new PatternValidator('^([1-9]|[1-9][0-9]|[1][0-4][0-9]|150)$', 'Age must between (min: 1 and max: 150)')
          ]
        }),
        new NumberFormField({
          name: 'input_age_partner',
          label: 'Partner Age',
          validators: [
            new PatternValidator('^([1-9]|[1-9][0-9]|[1][0-4][0-9]|150)$', 'Age must between (min: 1 and max: 150)')
          ]
        }),
        new SelectFormField({
          name: 'input_number_of_children',
          label: 'Number of children',
          options: ['0','1','2','3','4','5'],
          defaultValue: '0',
          tooltip: new Tooltip('Enter number of chlidren')
        })
      ]
    },
    {
      section: 'step2',
      fields: [
        new NumberFormField({
          name: 'input_number_of_disabilities',
          label: 'Number of Disabilities',
          defaultValue: '0'
        }),
        new TextFormField({
          name: 'input_savings',
          label: 'Savings',
          defaultValue: '0',
          validations: [
            new RequiredValidator('Required..'), 
            new PatternValidator('^([1-9][0-9]*)$', 'The savings needs to be a number greater than zero.')
          ]
        }),
        new NumberFormField({
          name: 'input_dependants',
          label: 'Number of dependants',
          defaultValue: '0'
        }),
        new RadioFormField({
          name: 'input_carer_single',
          label: 'Carer',
          options: ['No', 'Yes'],
          defaultValue: 'Yes'
        }),
        new NumberFormField({
          name: 'input_child_age_1',
          label: 'Age of child 1',
          defaultValue: '0'
        }),
        new NumberFormField({
          name: 'input_child_age_2',
          label: 'Age of child 2',
          defaultValue: '0'
        }),
        new NumberFormField({
          name: 'input_child_age_3',
          label: 'Age of child 3',
          defaultValue: '0'
        }),
        new NumberFormField({
          name: 'input_child_age_4',
          label: 'Age of child 4',
          defaultValue: '0'
        }),
        new NumberFormField({
          name: 'input_child_age_5',
          label: 'Age of child 5',
          defaultValue: '0'
        }),
        new RadioFormField({
          name: 'input_child_disability_1',
          label: 'Child 1 disability',
          options: ['No', 'Yes'],
          defaultValue: 'No'
        })
      ]
    }];
  }

}
