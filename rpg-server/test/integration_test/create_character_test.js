var request = require('supertest');
var expect = require('chai').expect
var db = require('../../config/database');
var app = require('../../app');


//GET
describe('POST /create-character', function(){
  beforeEach(function (done) {
    db.get('users').remove({}, function (err) {
      if (err) done(err);
      done();
    });
  });

  it('responds with a 200 code: found', function(done) {
    request(app).post('/createCharacter').expect(200, done);
  });
});
