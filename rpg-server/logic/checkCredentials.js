var checkCredentials = function(user){
  if(user.name == '' || user.password == ''){
    return false;
  }
  return true;
};

module.exports = checkCredentials;
