var request = require('supertest');
var expect = require('chai').expect
var db = require('../../config/database');
var app = require('../../app');


//GET
describe('GET /', function(){
  it('responds with a 200 code', function(done) {
    request(app).get('/').expect(200, done);
  });
  it('responds with a 200 code given existing user in db', function(done){
    var user = {
      name: "Jay",
      password: "123"
    };
    request(app).post('/').send(user).then(function(){
    db.get('users').find({}, function (err, data) {
      expect(data[0].name).to.equal('Jay')
      done();
  });
  });
  })
});
