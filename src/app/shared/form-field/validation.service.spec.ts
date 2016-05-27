import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ValidationService } from './validation.service';

describe('Validation Service', () => {
  beforeEachProviders(() => [ValidationService]);

  it('should ...',
      inject([ValidationService], (service: ValidationService) => {
    expect(service).toBeTruthy();
  }));
});
