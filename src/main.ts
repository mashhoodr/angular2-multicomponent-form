import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Angular2MulticomponentFormAppComponent, environment, FormFieldService } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2MulticomponentFormAppComponent, 
  [
    FormFieldService, 
    APP_ROUTER_PROVIDERS,
    disableDeprecatedForms(),
    provideForms()
  ])
.catch(err => console.error(err));
