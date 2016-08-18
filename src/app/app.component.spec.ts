/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { provide } from '@angular/core';
import { Location } from '@angular/common';

import { AppComponent } from './app.component';
import { FormManager, FormFieldService } from './shared';

class MockLocation {
  prepareExternalUrl(url: string): string {
    return "";
  }
}

describe('Component: App: ', () => {

  beforeEach(() => {
    addProviders([
      AppComponent, 
      FormFieldService, 
      FormManager,
      provide(Location, { useClass: MockLocation })
    ]);
  });

  it('should create the app',
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
  }));

  it('should have as title \'Angular2 Multi Component Dynamic Form demo\'',
    inject([AppComponent], (component: AppComponent) => {
      expect(component.title).toEqual('Angular2 Multi Component Dynamic Form demo');
  }));

});
