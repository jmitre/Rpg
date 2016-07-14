require('../helper');
var db = require('../../../rpg-server/config/database');

before(function() {
  browser.baseUrl = 'http://localhost:8080';
});

beforeEach(function() {
  return browser.ignoreSynchronization = true;
});

describe('Login', function(){
  describe('Given I visit /', function () {
    it('Then I see a header indicating it is the login page', function() {
      browser.get('/html/login.html');
      element(by.tagName('h1')).getText().then(function(text) {
        expect(text).to.equal('Login Page');
      });
    });
  });

  //THIS SHOULD FAIL FOR RIGHT NOW
  describe('Given I press login', function(){
    it('will redirect to /battleList', function(){
      browser.get('/html/sign-up');
      element(by.id('username_input')).sendKeys('Addison');
      element(by.id('password_input')).sendKeys('password');
      element(by.id('create_account_button')).click()

      element(by.cssContainingText('option', 'Ranger')).click();
      element(by.id('submit')).click();

      browser.get('/html/login.html');
      browser.driver.sleep(2000);
      element(by.id('username_input')).sendKeys('Addison');
      element(by.id('password_input')).sendKeys('password');
      browser.driver.sleep(2000);
      element(by.id('submit')).click();
      browser.driver.sleep(2000);
      element(by.tagName('h1')).getText().then(function(text) {
        expect(text).to.equal('Battle List');
      });
    })
  })
  describe('Given I press login', function(){
    it('will keep me in same page with an invalid username and password', function(){
      browser.get('/html/login.html');
      element(by.id('username_input')).sendKeys('');
      element(by.id('password_input')).sendKeys('');
      element(by.id('submit')).click();
      element(by.tagName('h1')).getText().then(function(text) {
        expect(text).to.equal('Login Page');
      });

    })
  })
});
