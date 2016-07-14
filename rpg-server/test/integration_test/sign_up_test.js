var request = require('supertest');
var expect = require('chai').expect
var db = require('../../config/database');
var app = require('../../app');




describe('POST /sign-up', function(){

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

  it('responds with a 200 status code', function (done) {
        request(app).post('/sign-up')
          .expect(200, done)
    });
  it('given a user name and password, creates an account', function(done){
    var user = {
      name: "Jay",
      password: "123"
    };

    // console.log('Im running the test');

    request(app).post('/sign-up').send(user).then(function(res){
      db.get('users').find({}).then(function(data){
        expect(data[0].name).to.equal('Jay')
        done();
      });
    });
  });

  it('given invalid credentials, does not create an account', function(done){
    var user = {
      name: "",
      password: "123"
    };

    request(app).post('/sign-up').send(user).then(function(){
      db.get('users').find({}).then(function(data){
        expect(data.length).to.equal(0)
        done();
      });
    });
  });

});
