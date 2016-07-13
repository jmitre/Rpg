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

  xit('given an id and character object, it appends the user object in the database', function(done){
    var user = {
      name: 'Jay',
      password: 'password'
    };

    var character = {
      clas: 'Mage',
      level: 1,
      xp: 0
    };


    db.get('users').insert(user, function(err, data){
      var message = {
        id: data._id,
        character: character
      }
      request(app).post(createCharacter).send(message).then(function(result){
        db.get('users').find({}, function(err, data){
          expect(data.character.clas).to.equal('Mage');
          done();
        });
      });
    });
  });
});
