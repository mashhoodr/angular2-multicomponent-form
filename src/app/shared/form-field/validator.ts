export class Validator {
	/**
	 * Param `message` can be any error text.
	*/
	constructor(
		public message: string) {}
}

export class RequiredValidator extends Validator {
	public type: string = 'required';
	constructor(
		public message: string = 'Required') {
		super(message);
	}
}

export class PatternValidator extends Validator {
	public type: string = 'pattern';
	constructor(
		public data: string, // regex pattern.
		public message: string) {
		super(message);
	}
}

export class MinLengthValidator extends Validator {
	public type: string = 'minLength';
	constructor(
		public data: number, // length
		public message: string) {
		super(message);
	}
}

export class MaxLengthValidator extends Validator {
	public type: string = 'maxLength';
	constructor(
		public data: number, // length
		public message: string) {
		super(message);
	}
}