export class Validator {
	/**
	 * param type can be required, custom, minLength or maxLength
	 * param message can be any text.
	 * param data can be array contains strings of regex, string as regex, number as length or null as none.
	 */
	constructor(
		public type: string = '',
		public message: string = 'Required',
		public data: any = null) {

		if (typeof data === 'string') {
			this.data = [data];
		}
	}
}