/*
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

import { SidebarComponent } from './sidebar.component';

describe('Component: Sidebar', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [SidebarComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([SidebarComponent],
      (component: SidebarComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(SidebarComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(SidebarComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));

  it('should have as title \'Sidebar\'',
      inject([SidebarComponent], (sidebar: SidebarComponent) => {
    expect(sidebar.title).toEqual('Sidebar');
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-sidebar></app-sidebar>
  `,
  directives: [SidebarComponent]
})
class SidebarComponentTestController {}
*/
