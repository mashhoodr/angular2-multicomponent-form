/* tslint:disable:no-unused-variable */

import {
  FormField, 
  TextFormField, 
  SelectFormField, 
  RadioFormField,
  CheckboxFormField,  
  NumberFormField
} from './form-field';

describe('FormField: ', () => {

  it('should create an instance', () => {
    const formField = new FormField({
      name:'Something'
    });
    expect(formField).toBeTruthy();
  });

});

describe('TextFormField: ', () => {

  it('should create an instance', () => {
    const formField = new TextFormField({
      name:'Something'
    });
    expect(formField).toBeTruthy();
  });

});

describe('SelectFormField: ', () => {

  it('should create an instance', () => {
   const formField = new SelectFormField({
      name:'Something'
    });
    expect(formField).toBeTruthy();
  });

});

describe('NumberFormField: ', () => {

  it('should create an instance', () => {
    const formField = new NumberFormField({
      name:'Something'
    });
    expect(formField).toBeTruthy();
  });

});

describe('RadioFormField: ', () => {

  it('should create an instance', () => {
    const formField = new RadioFormField({
      name:'Something'
    });
    expect(formField).toBeTruthy();
  });

});

describe('CheckboxFormField: ', () => {

  it('should create an instance', () => {
    const formField = new CheckboxFormField({
      name:'Something'
    });
    expect(formField).toBeTruthy();
  });

});
