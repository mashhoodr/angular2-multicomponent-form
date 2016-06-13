import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[focus-reset-field]',
  host: {
    '(focus)': '_onFocus()',
    '(blur)': '_onBlur()',
  }
})
export class FocusResetField {

  inputValue: string;

  constructor(private el: ElementRef) {
  }

  _onFocus() {
    this.inputValue = this.el.nativeElement.value;
    this.el.nativeElement.value = null;
  }

  _onBlur() {
    if (this.el.nativeElement.value === null || this.el.nativeElement.value === '') {
      this.el.nativeElement.value = this.inputValue;
    }

    this.inputValue = this.el.nativeElement.value;
  }

}
