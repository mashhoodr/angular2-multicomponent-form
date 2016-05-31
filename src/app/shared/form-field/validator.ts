export class Validator {
	/**
	 * Param `type` can be string contains any of 'required', 'pattern', 'minLength' or 'maxLength'
	 * Param `data` can be string as regex, number as length or null as none.
	 * Param `message` can be any text.
	 */
	constructor(
		public type: string,
		public data,
		public message: string) {}
}

export class RequiredValidator extends Validator {
	constructor(
		public message: string = 'Required') {
		super('required', null, message);
	}
}

export class PatternValidator extends Validator {
	constructor(
		public data: string,
		public message: string) {
		super('pattern', data, message);
	}
}

export class MinLengthValidator extends Validator {
	constructor(
		public data: number,
		public message: string) {
		super('minLength', data, message);
	}
}

export class MaxLengthValidator extends Validator {
	constructor(
		public data: number,
		public message: string) {
		super('maxLength', data, message);
	}
}