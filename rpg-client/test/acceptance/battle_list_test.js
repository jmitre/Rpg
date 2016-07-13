require('../helper');
var db = require('../../../rpg-server/config/database');

before(function() {
  browser.baseUrl = 'http://localhost:8080';
});

beforeEach(function() {
  return browser.ignoreSynchronization = true;

  var temp_user = {
    name: 'Jay',
    password: '123'
  }
  db.get('users').insert(temp_user, function(err){
    if (err) done(err);
    done();
  });
});

afterEach(function() {
  db.get('users').remove({}, function(err){
    if (err) done(err);
    done();
  });
});

describe('Given I visit /battle_list',function(){
  describe('When I am on the page', function(){
    xit('then I see a view of usernames', function(){
      browser.get('/html/battleList.html');
      element(by.tagName('fieldset')).isPresent().then(function(bool){
        expect(bool).to.equal(true);
      });
      element(by.tagName('li')).getText().then(function(text){
        expect(text).to.equal('Jay')
      });
    });
  });
});
