import { LinuxStoreFrontendPage } from './app.po';

describe('linux-store-frontend App', () => {
  let page: LinuxStoreFrontendPage;

  beforeEach(() => {
    page = new LinuxStoreFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
