import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Angular2MulticomponentFormAppComponent, environment } from './app/';
import {FormFieldService} from './app/shared/form-field.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2MulticomponentFormAppComponent, [FormFieldService]);
