import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app.component";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Step1Component } from './+step1/step1.component';
import { Step2Component } from './+step2/step2.component';
import { FormFieldService } from './shared/form-field';
import { FormManager } from './shared/form-manager';
import { FormFieldComponent } from './shared/form-field';

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
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
