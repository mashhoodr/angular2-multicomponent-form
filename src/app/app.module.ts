import { NgModule } from '@angular/core'
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';
import { FocusResetField } from './shared/form-field/focus-reset-field.directive';
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
    Step2Component,
    FocusResetField
  ],
  imports     : [
    BrowserModule, 
    ReactiveFormsModule, 
    HttpModule, 
    TooltipModule,
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
