var request = require('supertest');
var expect = require('chai').expect
var db = require('../../config/database');
var app = require('../../app');

describe('POST /', function(){
  xit('responds with a 200 status code', function (done) {
        request(app).post('/')
          .expect(200, done)
    });
});
