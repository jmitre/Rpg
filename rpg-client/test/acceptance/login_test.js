require('../helper');

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
  describe('Given I press login', function(){
    it('will redirect to /battleList', function(){
      browser.get('/html/battleList.html');
      element(by.tagName('h1')).getText().then(function(text) {
        expect(text).to.equal('Battle List');
      });
    })
  })
});
