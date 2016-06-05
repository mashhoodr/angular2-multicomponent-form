import { Angular2MulticomponentFormPage } from './app.po';

describe('angular2-multicomponent-form App Tests: ', function() {
  let page: Angular2MulticomponentFormPage;

  beforeEach(() => {
    page = new Angular2MulticomponentFormPage();
  });

  it('should display message saying `Angular2 Multi Component Dynamic Form demo`', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular2 Multi Component Dynamic Form demo');
  });
});
