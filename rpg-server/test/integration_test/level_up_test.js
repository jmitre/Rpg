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

describe('POST /users/xp/:id', function(){
  xit('responds with a 200 code: found', function(done) {
    request(app).post('/users/xp/1').expect(200, done);
  });

  describe('given a user', function(){
    it('should increase the amount of xp', function(done){

      var testingLevelUp = {
        name: 'luis',
        password: 'siul',
        character: {
          clas: 'Mage',
          xp: 0,
          level: 1
        }
      }

      db.get('users').insert(testingLevelUp, function(err, data){
        request(app).post('/users/xp/'+ data._id).send({xp: 30}).then(function(res){
          db.get('users').find({}, function(err, data){
            expect(data[0].character.xp).to.equal(30);
            done();
          });
        });
      })


    });
  });
});
