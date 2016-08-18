/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { SidebarComponent } from './sidebar.component';
import { FormManager, FormFieldService } from '../shared';

describe('Component: Sidebar: ', () => {
  
  beforeEach(() => {
    addProviders([
      SidebarComponent,
      FormManager,
      FormBuilder, 
      FormFieldService
    ]);
  });

  it('should inject the component', inject([SidebarComponent],
      (component: SidebarComponent) => {
    expect(component).toBeTruthy();
  }));

});
