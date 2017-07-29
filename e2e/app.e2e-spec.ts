import { Pokus01Page } from './app.po';

describe('pokus01 App', () => {
  let page: Pokus01Page;

  beforeEach(() => {
    page = new Pokus01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
