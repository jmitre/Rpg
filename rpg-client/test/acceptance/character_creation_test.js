require('../helper');
// var db = require('../../../rpg-server/config/database');

before(function() {
  browser.baseUrl = 'http://localhost:8080';
});

beforeEach(function() {
  return browser.ignoreSynchronization = true;
});

describe('CharacterCreation page', function(){
  it('displays a paragraph that explains the classes and has html elements for selecting a class', function(){
    browser.get('/html/create-character.html');
    element(by.id('warriorExplanation')).isPresent().then(function(bool){
      expect(bool).to.equal(true);
    });
    element(by.id('rangerExplanation')).isPresent().then(function(bool){
      expect(bool).to.equal(true);
    });
    element(by.id('mageExplanation')).isPresent().then(function(bool){
      expect(bool).to.equal(true);
    });
    element(by.id('submit')).isPresent().then(function(bool){
      expect(bool).to.equal(true);
    });
  });

  it('redirects to the next page, and the page contains a message proving the character was created.', function(){

    browser.get('/html/sign-up');
    element(by.id('username_input')).sendKeys('Jay');
    element(by.id('password_input')).sendKeys('password');
    browser.driver.sleep(3000)
    element(by.id('create_account_button')).click()

    element(by.cssContainingText('option', 'Ranger')).click();
    browser.driver.sleep(3000);
    element(by.id('submit')).click();
    browser.getCurrentUrl().then(function(url){
      expect(url).to.equal('http://localhost:8080/html/battleList.html')
    });
  });
});
