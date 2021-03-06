require('../helper');


before(function() {
  browser.baseUrl = 'http://localhost:8080/';
});
beforeEach(function() {
  return browser.ignoreSynchronization = true;
});

describe('Fight Page', function(){
  it('Has a title', function(done){
    browser.get('/html/fight-page.html');
    element(by.tagName('h1')).isPresent().then(function(bool){
      expect(bool).to.equal(true);
      done();
    })
  });

  it('Displays your character info', function(){
    browser.get('/html/sign-up');
    element(by.id('username_input')).sendKeys('Alex');
    element(by.id('password_input')).sendKeys('password');
    element(by.id('create_account_button')).click()

    element(by.cssContainingText('option', 'Ranger')).click();
    element(by.id('submit')).click();
  })
})
