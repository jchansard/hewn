import { HewnPage } from './app.po';

describe('hewn App', () => {
  let page: HewnPage;

  beforeEach(() => {
    page = new HewnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
