import { AppPage } from './app.po';

describe('linux-store-frontend App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Apps for Linux, right here');
  });
});
