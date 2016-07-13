require('../helper');
var db = require('../../../rpg-server/config/database');

before(function() {
  browser.baseUrl = 'http://localhost:8080';
});

beforeEach(function() {
  return browser.ignoreSynchronization = true;
  db.get('users').remove({}, function(err){
    if (err) done(err);
    done();
  });

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


describe('Sign up', function(){
  it('should display "Sign Up", on screen', function(){
    browser.get('/html/sign-up.html')
    element(by.tagName('h1')).getText().then(function(text){
      expect(text).to.equal('Sign Up');
    });
  });

  it('should display fields to enter username and password and button', function(){
    element(by.id('username_input')).isPresent().then(function(bool){
      expect(bool).to.equal(true);
    });
    element(by.id('password_input')).isPresent().then(function(bool){
      expect(bool).to.equal(true);
    });

    element(by.id('create_account_button')).isPresent().then(function(bool){
      expect(bool).to.equal(true);
    });
  });

  xit('should redirect the user to the character creation page', function(){
    element(by.id('username_input')).sendKeys('Jay');
    element(by.id('password_input')).sendKeys('password');
    element(by.id('create_account_button')).click().then(function(){
      browser.getCurrentUrl().then(function(url){
        expect(url).to.equal('http://localhost:8080/html/create-character.html')
      });
    });
  });

});
