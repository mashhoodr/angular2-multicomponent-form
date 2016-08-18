/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { Step2Component } from './step2.component';
import { FormManager, FormFieldService } from '../shared';

describe('Component: Step2: ', () => {

  beforeEach(() => {
    addProviders([
      Step2Component, 
      FormBuilder, 
      FormManager, 
      FormFieldService 
    ]);
  });

  it('should inject the component', inject([Step2Component],
      (component: Step2Component) => {
    expect(component).toBeTruthy();
  }));
  
});
