/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';

import { FormFieldService } from './form-field.service';

describe('Service: FormField: ', () => {
  
  beforeEach(() => {
    addProviders([FormFieldService]);
  });

  it('should ...',
      inject([FormFieldService], (service: FormFieldService) => {
    expect(service).toBeTruthy();
  }));
  
});
