require('../helper');
var db = require('../../../rpg-server/config/database');

before(function() {
  browser.baseUrl = 'http://localhost:8080';
});

beforeEach(function() {
  return browser.ignoreSynchronization = true;
  db.get('users').remove({}, function(err){});

  var temp_user = {
    name: 'Jay',
    password: '123'
  }
  db.get('users').insert(temp_user, function(err){});
});

afterEach(function() {
  db.get('users').remove({}, function(err){});
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
  describe('Given I press login', function(){
    it('will redirect to /battleList', function(){
      browser.get('/html/login.html');
      element(by.id('username_input')).sendKeys('Jay');
      element(by.id('password_input')).sendKeys('123');
      element(by.id('submit')).click();
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
