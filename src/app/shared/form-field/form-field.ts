import { Validator } from './validator';
import { Tooltip } from './tooltip';

export class FormField {
    name: string;
    label: string;
    defaultValue: string;
    validations: Validator[];
    hidden: boolean;
    tooltip: Tooltip;

    constructor(options: {
        name?: string,
        label?: string,
        hidden?: boolean,
        defaultValue?: string,
        validations?: Validator[],
        tooltip?: Tooltip
    }) {
        if(!options.name) throw new Error('`Name` is required for FormField object');
        this.name = options.name;
        this.label = options.label || '';
        this.defaultValue = options.defaultValue || '';
        this.validations = options.validations || [];
        this.tooltip = options.tooltip || null;
        this.hidden = options.hidden || false;  
    }
}

export class TextFormField extends FormField {
    type: string = 'text';
    placeholder: string;
    
    constructor(options: {} = {}) {
        super(options);
        this.placeholder = options['placeholder'] || '';
    }
}

export class SelectFormField extends FormField {
    type: string = 'select';
    options: string[];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    } 
}

export class NumberFormField extends FormField {
    type: string = 'number';
    placeholder: string;
    
    constructor(options: {} = {}) {
        super(options);
        this.placeholder = options['placeholder'] || '';
    }
}

export class RadioFormField extends FormField {
    type: string = 'radio';
    options: string[];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}

export class CheckboxFormField extends FormField {    
    type: string = 'checkbox';
    checked: boolean;

    constructor(options: {} = {}) {
        super(options);
        this.checked = options['checked'] || false;
    }
}
