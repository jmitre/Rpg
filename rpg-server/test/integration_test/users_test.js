var request = require('supertest');
var expect = require('chai').expect
var db = require('../../config/database');
var app = require('../../app');


beforeEach(function (done) {
  db.get('users').remove({}, function (err) {
    if (err) done(err);
    done();
  });
});

after(function (done) {
  db.get('users').remove({}, function (err) {
    if (err) done(err);
    done();
  });
});

describe('GET Users', function(){
  it('returns a user as a response', function(done){
    var user = {
      name: 'Jay',
      password: 'password',
      character: {
        clas: 'Mage',
        xp: 0,
        level: 0
      }
    }

    db.get('users').insert(user, function(err, data){
      // console.log(data);
        request(app).get('/users/'+ data._id).then(function(res){
          expect(res.body.name).to.equal('Jay');
          done();
        });
    });
  });
});
