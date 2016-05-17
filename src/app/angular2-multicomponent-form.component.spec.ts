import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2MulticomponentFormAppComponent } from '../app/angular2-multicomponent-form.component';

beforeEachProviders(() => [Angular2MulticomponentFormAppComponent]);

describe('App: Angular2MulticomponentForm', () => {
  it('should create the app',
      inject([Angular2MulticomponentFormAppComponent], (app: Angular2MulticomponentFormAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-multicomponent-form works!\'',
      inject([Angular2MulticomponentFormAppComponent], (app: Angular2MulticomponentFormAppComponent) => {
    expect(app.title).toEqual('angular2-multicomponent-form works!');
  }));
});
