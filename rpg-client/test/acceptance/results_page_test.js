require('../helper');

before(function() {
  browser.baseUrl = 'http://localhost:8080';
});

beforeEach(function() {
  return browser.ignoreSynchronization = true;
});


describe('Given I visit the /results_page', function(){
  describe('When I am on the page', function(){
    it('then I see the title Results', function(){
        browser.get('/html/results_page.html');
        element(by.tagName('h1')).getText().then(function(text){
          expect(text).to.equal('Results');
        })
    })

    it('Then i see myself, and the person i am fighting with', function(){
      browser.get('/html/sign-up');
      element(by.id('username_input')).sendKeys('Keenan');
      element(by.id('password_input')).sendKeys('password');
      element(by.id('create_account_button')).click()

      element(by.cssContainingText('option', 'Warrior')).click();
      element(by.id('submit')).click();

      browser.get('/html/sign-up');
      element(by.id('username_input')).sendKeys('Alex');
      element(by.id('password_input')).sendKeys('password');
      element(by.id('create_account_button')).click()

      element(by.cssContainingText('option', 'Mage')).click();
      element(by.id('submit')).click();

      // browser.driver.sleep(20000)
      element(by.buttonText('Fight Keenan')).click()

      browser.get('/html/results_page.html');
      element(by.id('currentUser')).getText().then(function(text){
        expect(text).to.equal('Name: Alex');
      })
      element(by.id('currentEnemey')).getText().then(function(text){
        expect(text).to.equal('Name: Keenan');
      })
    });
  });
});
