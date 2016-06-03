import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2MulticomponentFormAppComponent } from '../app/angular2-multicomponent-form.component';
import { Location } from '@angular/common';

beforeEachProviders(() => [Angular2MulticomponentFormAppComponent, Location]);

describe('App: Angular2MulticomponentForm', () => {
  it('should create the app',
      inject([Angular2MulticomponentFormAppComponent], (app: Angular2MulticomponentFormAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'Angular2 Multi Component Dynamic Form demo\'',
      inject([Angular2MulticomponentFormAppComponent], (app: Angular2MulticomponentFormAppComponent) => {
    expect(app.title).toEqual('Angular2 Multi Component Dynamic Form demo');
  }));
});
