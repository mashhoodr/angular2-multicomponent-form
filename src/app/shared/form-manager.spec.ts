import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {FormManager} from './form-manager';
import { FormBuilder   } from '@angular/common';
import { FormFieldService } from './form-field';

describe('FormManager', () => {
  it('should create an instance', () => {
    expect(new FormManager(new FormBuilder(), new FormFieldService())).toBeTruthy();
  });
});
