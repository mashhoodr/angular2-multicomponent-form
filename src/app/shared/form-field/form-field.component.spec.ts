/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';

import { FormFieldComponent } from './form-field.component';

describe('Component: FormField: ', () => {

  beforeEach(() => {
    addProviders([FormFieldComponent]);
  });

  it('should inject the component',
    inject([FormFieldComponent], (component: FormFieldComponent) => {
      expect(component).toBeTruthy();
  }));

});
