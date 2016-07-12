var checkCredentials = function(user){
  if(user.name == '' || user.name == undefined || user.password == '' || user.password == undefined){
    return false;
  }
  return true;
};

module.exports = checkCredentials;
