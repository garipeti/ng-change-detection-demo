import { NgDefaultPage } from './app.po';

describe('ng-default App', () => {
  let page: NgDefaultPage;

  beforeEach(() => {
    page = new NgDefaultPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
