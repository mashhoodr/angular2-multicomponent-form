import { AppPage } from './app.po';

describe('angular2-multicomponent-form App Tests: ', function() {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display message saying \'Angular2 Multi Component Dynamic Form demo\'', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular2 Multi Component Dynamic Form demo');
  });
});
