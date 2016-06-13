import {
  async,
  beforeEachProviders,
  describe,
  ddescribe,
  expect,
  iit,
  it,
  inject
} from '@angular/core/testing'

import { By } from '@angular/platform-browser';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import { provide, Component } from '@angular/core';
import { FocusResetField } from './focus-reset-field.directive';

@Component({
  selector: 'test-component',
  template: `<input type="text" focus-reset-field />`,
  directives: [FocusResetField]
})
class TestComponent { }

describe('Focus Reset Field Directive: ', () => {
  beforeEachProviders((): any[] => []);

  it('should add attribute', inject([TestComponentBuilder], (testComponentBuilder: TestComponentBuilder) => {
    return testComponentBuilder
      .createAsync(TestComponent)
      .then((fixture: ComponentFixture<TestComponent>) => {
        fixture.detectChanges();
        const directiveEl = fixture.debugElement.query(By.css('[focus-reset-field]'));
        expect(directiveEl.nativeElement).toBeDefined();
      });
  }));

  it('input value should be emptied on focus', inject([TestComponentBuilder], (testComponentBuilder: TestComponentBuilder) => {
    return testComponentBuilder
      .createAsync(TestComponent)
      .then((fixture: ComponentFixture<TestComponent>) => {
        fixture.detectChanges();
        const directiveEl = fixture.debugElement.query(By.css('[focus-reset-field]'));
        directiveEl.nativeElement.value = 'testing';
        directiveEl.nativeElement.focus();

        expect(directiveEl.nativeElement.value).toEqual('');
      });
  }));

  it('input value should be restored on blur', inject([TestComponentBuilder], (testComponentBuilder: TestComponentBuilder) => {
    return testComponentBuilder
      .createAsync(TestComponent)
      .then((fixture: ComponentFixture<TestComponent>) => {
        fixture.detectChanges();
        const directiveEl = fixture.debugElement.query(By.css('[focus-reset-field]'));

        directiveEl.nativeElement.value = 'testing';
        directiveEl.nativeElement.focus();
        directiveEl.nativeElement.blur();

        expect(directiveEl.nativeElement.value).toEqual('testing');
      });
  }));

  it('input value should be restored on blur', inject([TestComponentBuilder], (testComponentBuilder: TestComponentBuilder) => {
    return testComponentBuilder
      .createAsync(TestComponent)
      .then((fixture: ComponentFixture<TestComponent>) => {
        fixture.detectChanges();
        const directiveEl = fixture.debugElement.query(By.css('[focus-reset-field]'));

        directiveEl.nativeElement.value = 'testing';
        directiveEl.nativeElement.focus();
        directiveEl.nativeElement.blur();

        expect(directiveEl.nativeElement.value).toEqual('testing');
      });
  }));

  it('input value should not be changed if the field is not empty', inject([TestComponentBuilder], (testComponentBuilder: TestComponentBuilder) => {
    return testComponentBuilder
      .createAsync(TestComponent)
      .then((fixture: ComponentFixture<TestComponent>) => {
        fixture.detectChanges();
        const directiveEl = fixture.debugElement.query(By.css('[focus-reset-field]'));

        directiveEl.nativeElement.value = 'Not Changed';
        directiveEl.nativeElement.focus();
        directiveEl.nativeElement.blur();

        expect(directiveEl.nativeElement.value).toEqual('Not Changed');
      });
  }));
});
