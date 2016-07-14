require('../helper');
var db = require('../../../rpg-server/config/database');

before(function() {
  browser.baseUrl = 'http://localhost:8080';
});

beforeEach(function() {
  return browser.ignoreSynchronization = true;
});


describe('Given I visit /battle_list',function(){
  describe('When I am on the page', function(){
    it('then I see a view of usernames', function(){
      browser.get('/html/battleList.html');
      element(by.tagName('div')).isPresent().then(function(bool){
        expect(bool).to.equal(true);
      });
    });

    it('then I can click on a player and taken to the fight page', function(){
      browser.get('/html/sign-up');
      element(by.id('username_input')).sendKeys('Merrill');
      element(by.id('password_input')).sendKeys('password');
      browser.driver.sleep(2000);
      element(by.id('create_account_button')).click()

      browser.driver.sleep(2000);
      element(by.cssContainingText('option', 'Ranger')).click();
      browser.driver.sleep(2000);
      element(by.id('submit')).click();
      browser.driver.sleep(2000);

      browser.get('/html/battleList.html');
      browser.driver.sleep(2000);
      element(by.buttonText('Fight Merrill')).click().then(function(){
        browser.driver.sleep(2000);
        element(by.tagName('h1')).getText().then(function(text){
          expect(text).to.equal('Fight Page');
        });
      })
    });

  });
});
