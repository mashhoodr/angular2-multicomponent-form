export class Validator {
	public isValid: boolean = false;
	constructor(
		public type: string = 'required',
		public message: string = 'Required',
		public patterns: Array<string> = []) {}
}