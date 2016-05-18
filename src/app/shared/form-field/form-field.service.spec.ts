import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { FormFieldService } from './form-field.service';

describe('FieldService Service', () => {
  beforeEachProviders(() => [FormFieldService]);

  it('should ...',
      inject([FormFieldService], (service: FormFieldService) => {
    expect(service).toBeTruthy();
  }));
});
