import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Step1Component } from './+step1';
import { Router, Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { FormManager } from './shared/form-manager';
import { Step2Component } from './+step2';
import { SidebarComponent } from './sidebar/sidebar.component';


@Component({
  moduleId: module.id,
  selector: 'angular2-multicomponent-form-app',
  templateUrl: 'angular2-multicomponent-form.component.html',
  styleUrls: ['angular2-multicomponent-form.component.css'],
  directives: [ROUTER_DIRECTIVES, SidebarComponent],
  providers: [ROUTER_PROVIDERS, FormManager]
})
@Routes([
  {path: '/step1', component: Step1Component},
  {path: '/step2', component: Step2Component},
  {path: '/', component: Step1Component}
])
export class Angular2MulticomponentFormAppComponent {
  title = 'Angular2 Multi Component Dynamic Form demo';
  location: Location;
  
  constructor(location: Location) {
    this.location = location;
  }
  
  getLinkStyle(path) {
    return this.location.path() === path;
  }
}
