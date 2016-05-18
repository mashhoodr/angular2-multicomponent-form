export class FormField {
   constructor(
       public name: string,      
       public label: string, 
       public defaultValue: string = '') {}  
}

export class TextFormField extends FormField {
    
    public type: string = 'text';
    
    constructor(
       public name: string,      
       public label: string, 
       public defaultValue: string = '',
       public placeholder: string = '') {
        super(name, label, defaultValue);
    }
    
}

export class SelectFormField extends FormField {
    
    public type: string = 'select';
    
    constructor(
       public name: string,
       public options: Array<string>,      
       public label: string, 
       public defaultValue: string = '') {
        super(name, label, defaultValue);
    }
    
}
