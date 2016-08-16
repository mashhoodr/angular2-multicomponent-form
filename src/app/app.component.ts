import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Angular2 Multi Component Dynamic Form demo';
  location: Location;
  
  constructor(location: Location) {
    this.location = location;
  }

  getLinkStyle(routePath) {
    let currentPath = this.location.path();

    /*
      This below hack is for IE9 on which needs to be refactored.
    */
    if (window.location.hash !== '') {
      let hashPath = window.location.hash.replace('#', '').split('/');
      currentPath = ('/' + (hashPath[hashPath.length - 1] || '')); // extracts the route path.
    }

    return routePath === currentPath;
  }
}
