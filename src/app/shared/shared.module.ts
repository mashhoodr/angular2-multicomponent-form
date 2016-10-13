import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FormFieldModule } from './form-field/form-field.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        CommonModule, 
        ReactiveFormsModule, 
        RouterModule,
        FormFieldModule,
    ]
})
export class SharedModule { }
