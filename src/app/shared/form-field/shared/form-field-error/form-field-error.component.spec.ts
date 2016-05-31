import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormFieldErrorComponent } from './form-field-error.component';

describe('Component: FormFieldError', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [FormFieldErrorComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([FormFieldErrorComponent],
      (component: FormFieldErrorComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(FormFieldErrorComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(FormFieldErrorComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-form-field-error></app-form-field-error>
  `,
  directives: [FormFieldErrorComponent]
})
class FormFieldErrorComponentTestController {
}

