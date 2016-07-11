var request = require('supertest');
var expect = require('chai').expect
var db = require('../../config/database');
var app = require('../../app');

describe('POST /sign-up', function(){
  it('responds with a 200 status code', function (done) {
        request(app).post('/sign-up')
          .expect(200, done)
    });
  // it('given a user name and password, creates an account', function(){
  //   var user = {
  //     name: "Jay",
  //     password: "123"
  //   };
  //
  //   request(app).post('/sign-up').send(user).then(function(){
  //     db.get('account')
  //   });
  // });
});
