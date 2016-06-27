import { Validator } from './validator';
import { Tooltip } from './tooltip';

export class FormField {
    constructor(
       public name: string,      
       public label: string, 
       public defaultValue: string = '',
       public validations: Validator[] = []) {}  
}

export class TextFormField extends FormField {
    
    public type: string = 'text';
    
    constructor(
       public name: string,      
       public label: string, 
       public defaultValue: string = '',
       public placeholder: string = '',
       public validations: Validator[] = [],
       public tooltip: Tooltip = null) {
        super(name, label, defaultValue, validations);
    }
    
}

export class SelectFormField extends FormField {
    
    public type: string = 'select';
    
    constructor(
       public name: string,
       public options: Array<string>,      
       public label: string, 
       public defaultValue: string = '',
       public validations: Validator[] = [],
       public tooltip: Tooltip = null) {
        super(name, label, defaultValue, validations);
    }
    
}

export class NumberFormField extends FormField {
    
    public type: string = 'number';
    
    constructor(
       public name: string,
       public label: string,
       public min: string = '', 
       public defaultValue: string = '0',
       public validations: Validator[] = [],
       public tooltip: Tooltip = null) {
      super(name, label, defaultValue, validations);
    }

}

export class RadioFormField extends FormField {
    
    public type: string = 'radio';
    
    constructor(
       public name: string,
       public label: string,
       public options: Array<string>,
       public defaultValue: string = '',
       public validations: Validator[] = [],
       public tooltip: Tooltip = null) {
      super(name, label, defaultValue, validations);
    }

}
