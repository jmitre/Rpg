var levelUP = function(player, newXp){
  var currentXp = (player.character.xp - 0);
  var level = (player.character.level - 0);
  var xpThreshold = 100 * (level - 0);

  currentXp += (newXp - 0);

  if(currentXp >= xpThreshold){
    level += 1;
    currentXp -= xpThreshold;
  }

  player.character.xp = currentXp;
  player.character.level = level;

  return player;
}

module.exports = levelUP;
