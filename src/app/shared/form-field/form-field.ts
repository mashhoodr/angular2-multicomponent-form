import { Validator } from './validator';
export class FormField {
   constructor(
       public name: string,      
       public label: string, 
       public defaultValue: string = '',
       public validation: Validator) {}  
}

export class TextFormField extends FormField {
    
    public type: string = 'text';
    
    constructor(
       public name: string,      
       public label: string, 
       public defaultValue: string = '',
       public placeholder: string = '',
       validation = null) {
        super(name, label, defaultValue, validation || new Validator('', ''));
    }
    
}

export class SelectFormField extends FormField {
    
    public type: string = 'select';
    
    constructor(
       public name: string,
       public options: Array<string>,      
       public label: string, 
       public defaultValue: string = '',
       validation = null) {
        super(name, label, defaultValue, validation || new Validator('', ''));
    }
    
}
