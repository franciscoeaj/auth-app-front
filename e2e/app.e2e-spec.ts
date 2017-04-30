import { AuthAppFrontPage } from './app.po';

describe('auth-app-front App', () => {
  let page: AuthAppFrontPage;

  beforeEach(() => {
    page = new AuthAppFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
