import { NgModule } from '@angular/core'
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { rootRouterConfig } from "./app.routes";
import { 
  FormManager, 
  FormFieldService, 
  FormFieldComponent
} from './shared';
import { AppComponent } from "./app.component";
import { SidebarComponent } from './sidebar';
import { Step1Component } from './+step1';
import { Step2Component } from './+step2';

@NgModule({
  declarations: [
    AppComponent, 
    SidebarComponent, 
    FormFieldComponent, 
    Step1Component, 
    Step2Component
  ],
  imports     : [
    BrowserModule, 
    ReactiveFormsModule, 
    HttpModule, 
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers   : [
    FormFieldService, 
    FormManager, 
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap   : [AppComponent]
})
export class AppModule {}
