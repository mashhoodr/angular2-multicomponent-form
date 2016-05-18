import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Angular2MulticomponentFormAppComponent, environment, FormFieldService } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2MulticomponentFormAppComponent, [FormFieldService]);
