import {
  async,
  beforeEachProviders,
  describe,
  ddescribe,
  expect,
  iit,
  it,
  inject
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import { provide, Component } from '@angular/core';
import { EditableDirective } from './editable.directive';

@Component({
  selector: 'test-component',
  template: `<input type="text" editable />`,
   directives: [EditableDirective],
})
class TestComponent {}

describe('Editable Directive: ', () => {
  beforeEachProviders((): any[] => []);

  it('should add attribute', inject([TestComponentBuilder], (testComponentBuilder: TestComponentBuilder) => {
    return testComponentBuilder
      .createAsync(TestComponent)
      .then((fixture: ComponentFixture<TestComponent>) => {
        fixture.detectChanges();
        const directiveEl = fixture.debugElement.query(By.css('[editable]'));
        expect(directiveEl.nativeElement).toBeDefined();
      });
  }));

  it('input value should be emptied on focus', inject([TestComponentBuilder], (testComponentBuilder: TestComponentBuilder) => {
    return testComponentBuilder
      .createAsync(TestComponent)
      .then((fixture: ComponentFixture<TestComponent>) => {
        fixture.detectChanges();
        const directiveEl = fixture.debugElement.query(By.css('[editable]'));
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
        const directiveEl = fixture.debugElement.query(By.css('[editable]'));

        directiveEl.nativeElement.value = 'testing';
        directiveEl.nativeElement.focus();
        directiveEl.nativeElement.blur();

        expect(directiveEl.nativeElement.value).toEqual('testing');
      });
  })); 
});
