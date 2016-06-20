export class Tooltip {
	/*
	Params:
	- text: text of tooltip
	- placement: tooltip positioning instruction, supported positions: 'top', 'bottom', 'left', 'right'
	- animation: if `false` fade tooltip animation will be disabled
	- enable: if `false` tooltip is disabled and will not be shown
	- isOpen: if `true` tooltip is currently visible
	*/

	constructor(
		public text: string,
		public placement: string = 'top',
		public animation: boolean = true,
		public enable: boolean = true,
		public isOpen: boolean = false
	) {
		if(!this.text) {
			this.enable = false;
		}
	}
}
