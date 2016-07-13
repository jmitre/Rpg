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
});
