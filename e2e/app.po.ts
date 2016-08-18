export class AppPage {
  waitTime: number = 3000;

  navigateTo(route: string = '/#/') {
    browser.get(route);
    this.waitForPageToLoad();
    return;
  }

  getParagraphText() {
    return element(by.css('app-root h3')).getText();
  }

  waitForPageToLoad() {
    browser.wait(() => {
      return element(by.css('app-root')).getText().then((text) => {
        return text !== 'Loading...';
      });
    }, this.waitTime);
  }

}
