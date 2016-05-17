export class Angular2MulticomponentFormPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-multicomponent-form-app h1')).getText();
  }
}
