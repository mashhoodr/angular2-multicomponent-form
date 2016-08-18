/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ElementRef } from '@angular/core';

import { FocusResetField } from './focus-reset-field.directive';

describe('Directive: FocusResetField: ', () => {

  let mockElement: ElementRef = {
    nativeElement: {}
  };

  it('should create an instance', () => {
    let directive = new FocusResetField(mockElement);
    expect(directive).toBeTruthy();
  });
  
});
