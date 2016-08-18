/* tslint:disable:no-unused-variable */

import { 
  Validator, 
  RequiredValidator, 
  PatternValidator, 
  MinLengthValidator, 
  MaxLengthValidator 
} from './validator';

describe('Validator: ', () => {
  it('should create an instance', () => {
    expect(new Validator('Something')).toBeTruthy();
  });
});

describe('RequiredValidator: ', () => {
  it('should create an instance', () => {
    expect(new RequiredValidator('Something')).toBeTruthy();
  });
});

describe('PatternValidator: ', () => {
  it('should create an instance', () => {
    expect(new PatternValidator('^([0-9]*)$', 'Something')).toBeTruthy();
  });
});

describe('MinLengthValidator: ', () => {
  it('should create an instance', () => {
    expect(new MinLengthValidator(5, 'Something')).toBeTruthy();
  });
});

describe('MaxLengthValidator: ', () => {
  it('should create an instance', () => {
    expect(new MaxLengthValidator(5, 'Something')).toBeTruthy();
  });
});
