import { Angular2MulticomponentFormPage } from './app.po';

describe('angular2-multicomponent-form App', function() {
  let page: Angular2MulticomponentFormPage;

  beforeEach(() => {
    page = new Angular2MulticomponentFormPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-multicomponent-form works!');
  });
});
