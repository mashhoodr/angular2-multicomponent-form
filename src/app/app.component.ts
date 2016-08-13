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
      This below hack is for IE9 on which:
      * '#' is been adding to url path on default route
        * and `Location` class doesn't seems to be work.
        // TODO: use `Location` class instead of `window` (whenever any hack is there.)
        * since currently `Location` class doesn't have function to get hash from url that's why use `window`.
    */

    if (window.location.hash !== '') {
      let hashPath = window.location.hash.replace('#', '').split('/');
      currentPath = ('/' + (hashPath[hashPath.length - 1] || '')); // extracts the route path.
    }

    return routePath === currentPath;
  }
}
