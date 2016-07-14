var levelUP = require('../../logic/levelUp');
var expect = require('chai').expect;

describe('given an object', function(){
  it('should check if the player has enough xp to level up one level', function(){
    var player = {
      name: 'Nate',
      password: '123',
      character: {
        clas: 'Ranger',
        xp: 0,
        level: 1
      }
    }

    levelUP(player, 120);
    expect(player.character.level).to.equal(2);
    expect(player.character.xp).to.equal(20);
  })
})
