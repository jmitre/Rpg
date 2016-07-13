var CreateCharacter = React.createClass({
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
          <select name='class'>
            <option value= 'Warrior'>Warrior</option>
            <option value= 'Ranger'>Ranger</option>
            <option value= 'Mage'>Mage</option>
          </select>
          <input type='submit' id='submit'></input>
        </form>
      </div>
    )
  }
});

ReactDOM.render(<CreateCharacter/>, document.getElementById('create-character-div'))
