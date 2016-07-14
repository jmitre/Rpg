var levelUP = function(player, newXp){
  var currentXp = player.character.xp;
  var level = player.character.level;
  var xpThreshold = 100 * level;

  currentXp += newXp;

  if(currentXp >= xpThreshold){
    level += 1;
    currentXp -= xpThreshold;
  }

  player.character.xp = currentXp;
  player.character.level = level;
  
  return player;
}

module.exports = levelUP;
