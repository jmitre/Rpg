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
    element(by.id('username_input')).sendKeys('Jay');
    element(by.id('password_input')).sendKeys('password');
    element(by.id('create_account_button')).click()

    element(by.cssContainingText('option', 'Ranger')).click();
    element(by.id('submit')).click();
    browser.get('/html/fight-page.html');



    element(by.id('username')).getText().then(function(text){
      expect(text).to.equal('Name: Jay');
    })
    element(by.id('class')).getText().then(function(text){
      expect(text).to.equal('Class: Ranger');
    })
    element(by.id('level')).getText().then(function(text){
      expect(text).to.equal('Level: 1');
    })
    element(by.id('xp')).getText().then(function(text){
      expect(text).to.equal('XP: 0');
    })
    element(by.id('health')).getText().then(function(text){
      expect(text).to.equal('Health: 357.9937665');
    })
  })
})
