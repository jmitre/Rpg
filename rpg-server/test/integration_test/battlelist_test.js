var request = require('supertest');
var expect = require('chai').expect
var db = require('../../config/database');
var app = require('../../app');


describe('GET /battle_list', function(){
  beforeEach(function (done) {
    db.get('users').remove({}, function (err) {
      if (err) done(err);
      done();
    });
  });

  it('should give back a 200 response code', function(done){
    request(app).get('/battle_list').expect(200, done);
  });

});
