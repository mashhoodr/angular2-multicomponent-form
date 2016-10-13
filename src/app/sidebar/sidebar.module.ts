import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';

import { SidebarComponent }   from './sidebar.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule } from '../shared/form-field/form-field.module';

@NgModule({
  imports:      [ CommonModule, FormFieldModule, ReactiveFormsModule ],
  declarations: [ SidebarComponent ],
  exports:      [ SidebarComponent ]
})
export class SidebarModule { }
