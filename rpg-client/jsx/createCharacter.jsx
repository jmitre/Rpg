var CreateCharacter = React.createClass({
  createChar: function(e){
    e.preventDefault();

    var user = {};
    user.id = document.cookie.split('#')[0];
    user.clas = $('#class option:selected').val(),

    // console.log('IDDDD', document.cookie.split('#')[0]);
    // console.log(user);

    $.post('http://localhost:3000/CreateCharacter', user).then(function(res){
      console.log(res);
      window.location.href = 'battleList.html';
    });
  },
  render: function(){
    return(
      <div>
        <h2>Warrior</h2>
        <p id='warriorExplanation'>This class uses a sword</p>
        <h2>Ranger</h2>
        <p id= 'rangerExplanation'>This class uses a bow</p>
        <h2>Mage</h2>
        <p id= 'mageExplanation'>This class uses a staff</p>
        <form>
          <select name='class' id='class'>
            <option value= 'Warrior'>Warrior</option>
            <option value= 'Ranger'>Ranger</option>
            <option value= 'Mage'>Mage</option>
          </select>
          <input type='submit' id='submit' onClick={this.createChar}></input>
        </form>
      </div>
    )
  }
});

ReactDOM.render(<CreateCharacter/>, document.getElementById('create-character-div'))
