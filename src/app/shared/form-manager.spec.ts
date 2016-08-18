/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { FormManager } from './form-manager';
import { FormFieldService } from './form-field';

describe('FormManager: ', () => {

  beforeEach(() => {
    addProviders([FormManager, FormBuilder, FormFieldService]);
  });

  it('should ...',
      inject([FormManager], (service: FormManager) => {
    expect(service).toBeTruthy();
  }));
  
});
