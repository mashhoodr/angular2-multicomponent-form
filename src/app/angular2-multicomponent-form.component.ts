import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Step1Component } from './+step1';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
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
  baseHref = '/angular2-multicomponent-form'; 
  /* 
    ^ This must have to be match with <base href> from
      > index.html i.e., <base href="/angular2-multicomponent-form">
      whenever change, we must have to change on both places (^here + index.html).
  */

  location: Location;
  
  constructor(location: Location) {
    this.location = location;
  }

  getLinkStyle(routePath) {
    let currentPath = this.baseHref + this.location.path();
    let path = this.baseHref + routePath;
    
    /*
      This below hack is for IE9+ on which:
      * '#' is been adding to url path on default route
        * and `Location` class doesn't seems to be work.
        // TODO: use `Location` class instead of `window` (whenever any hack is there.)
        * since currently `Location` class doesn't have function to get hash from url that's why use `window`.
    */

    if (window.location.hash !== '') {
      currentPath = window.location.hash.replace('#', '');
    }

    return path === currentPath;
  }
}
