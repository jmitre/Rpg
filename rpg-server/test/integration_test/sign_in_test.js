var request = require('supertest');
var expect = require('chai').expect
var db = require('../../config/database');
var app = require('../../app');


//GET
describe('GET /login', function(){
  beforeEach(function (done) {
    db.get('users').remove({}, function (err) {
      if (err) done(err);
      done();
    });
  });

  it('responds with a 200 code: found', function(done) {
    request(app).post('/login').expect(200, done);
  });

  it('responds with a 200 code given existing user in db', function(done){
    var user = {
      name: "Jay",
      password: "123"
    };
    request(app).post('/login').send(user).then(function(){
    db.get('users').insert(user).then(function(){
      db.get('users').find({}, function (err, data) {
        expect(data[0].name).to.equal('Jay')
        done();
    });
    })
  });
  })
});
