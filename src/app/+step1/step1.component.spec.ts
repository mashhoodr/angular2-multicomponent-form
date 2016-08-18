/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { Step1Component } from './step1.component';
import { FormManager, FormFieldService } from '../shared';

describe('Component: Step1: ', () => {
  
  beforeEach(() => {
    addProviders([
      Step1Component,
      FormBuilder, 
      FormManager, 
      FormFieldService 
    ]);
  });

  it('should inject the component', inject([Step1Component],
      (component: Step1Component) => {
    expect(component).toBeTruthy();
  }));

});