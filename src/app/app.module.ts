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
import { Step1Module } from './+step1/step1.module';
import { Step1Module } from './+step2/step2.module';
import { SidebarModule } from './sidebar/sidebar.module'

@NgModule({
  declarations: [
    AppComponent, 
    FormFieldComponent, 
  ],
  imports     : [
    SidebarModule,
    Step1Module,
    Step1Module,
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
