import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormFieldComponent }   from './form-field.component';
import { FocusResetField } from './focus-reset-field.directive';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [FormFieldComponent, FocusResetField],
    exports: [FormFieldComponent]
})
export class FormFieldModule { }
