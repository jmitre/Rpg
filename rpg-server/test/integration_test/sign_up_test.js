var request = require('supertest');
var expect = require('chai').expect
var db = require('../../config/database');

describe('POST /sign-up', function(){
  it('responds with a 200 status code', function (done) {
        request(app).post('/sign-up')
          .expect(200, done)
    });
});
