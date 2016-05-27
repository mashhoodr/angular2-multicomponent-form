import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

  constructor(/*fm: FormManager*/) {}

  validate(control, validation) {
   	if (typeof validation !== 'undefined') {
   		let isValid = true;
   		if (validation.type === 'custom') {
		    for (let pattern of validation.patterns) {
		    	if (!control.value.match(pattern)) {
		    		isValid = false;
		    	}
		    }
		} else if (validation.type === 'required') {
			isValid = (control.value !== '');
		}

		return isValid;
	}

	console.log('validation not find on field:', control);
  }
}
