var checkCredentials = require('../../logic/checkCredentials');

describe('checkCredentials', function(){
  it('returns true with good credentials', function(){
    var user = {
      name: 'Jay',
      password: '123'
    };

    expect(checkCredentials(user)).to.equal(true);
  });

  it('returns false with missing credentials', function(){
    var user = {
      name: '',
      password: '123'
    };

    expect(checkCredentials(user)).to.equal(false);
  });

  it('returns false with missing credentials', function(){
    var user = {
      name: 'Jay',
      password: ''
    };

    expect(checkCredentials(user)).to.equal(false);
  });

  it('returns false with missing credentials', function(){
    var user = {
      name: '',
      password: ''
    };

    expect(checkCredentials(user)).to.equal(false);
  });
});
