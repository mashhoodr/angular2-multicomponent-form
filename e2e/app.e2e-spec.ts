import { ComponentMigrationPage } from './app.po';

describe('component-migration App', function() {
  let page: ComponentMigrationPage;

  beforeEach(() => {
    page = new ComponentMigrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
