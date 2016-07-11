var request = require('supertest');
var expect = require('chai').expect
var db = require('../../config/database');
var app = require('../../app');


//GET
describe('GET /', function(){
  it('responds with a 200 code', function(done) {
    request(app).get('/').expect(200, done);
  })
});
