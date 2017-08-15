import { AndQuizPage } from './app.po';

describe('and-quiz App', function() {
  let page: AndQuizPage;

  beforeEach(() => {
    page = new AndQuizPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
