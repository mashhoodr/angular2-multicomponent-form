export class Angular2MulticomponentFormPage {
  
  navigateTo(route: string = '/') {
    return browser.get(route);
  }

  getParagraphText() {
    return element(by.css('angular2-multicomponent-form-app h3')).getText();
  }

}
