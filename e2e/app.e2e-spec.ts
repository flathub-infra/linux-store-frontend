import { FlathubStoreFrontendPage } from './app.po';

describe('flathub-store-frontend App', () => {
  let page: FlathubStoreFrontendPage;

  beforeEach(() => {
    page = new FlathubStoreFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
