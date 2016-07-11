require('../helper');

var http = require('http'),
    server;

before(function() {
  server = http.createServer(require('../../app'));
  server.listen(0);
  browser.baseUrl = 'http://localhost:' + server.address().port;
});

beforeEach(function() {
  return browser.ignoreSynchronization = true;
});

after(function(){
  server.close();
});

describe('Login', function(){
  describe('Given I visit /', function () {
    it('Then I see a header indicating it is the login page', function() {
      browser.get('/index');
      element(by.tagName('h1')).getText().then(function(text) {
        expect(text).to.equal('Login Page');
      });
    });
  });
});
