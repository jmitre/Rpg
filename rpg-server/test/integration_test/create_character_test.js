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

  it('given an id and character object, it appends the user object in the database', function(done){
    var user = {
      name: 'Jay',
      password: 'password'
    };

    var character = {
      clas: 'Mage',
    };


    db.get('users').insert(user, function(err, data){
      character.id = data._id;
      request(app).post('/createCharacter').send(character).then(function(result){
        db.get('users').find({}, function(err, data){

          expect(data[0].character.clas).to.equal('Mage');
          done();
        });
      });
    });
  });
});
