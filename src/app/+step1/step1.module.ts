import { NgModule }           from '@angular/core';

import { SharedModule }       from '../shared/shared.module';
import { Step1Component }   from './step1.component';

@NgModule({
  imports: [SharedModule],
  declarations: [Step1Component],
  exports: [Step1Component]
})
export class Step1Module { }
