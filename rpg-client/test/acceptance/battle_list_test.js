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
  });
});
