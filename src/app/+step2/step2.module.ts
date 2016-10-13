import { NgModule }           from '@angular/core';

import { SharedModule }       from '../shared/shared.module';
import { Step2Component }   from './step2.component';

@NgModule({
  imports: [SharedModule],
  declarations: [Step2Component],
  exports: [Step2Component]
})
export class Step2Module { }
