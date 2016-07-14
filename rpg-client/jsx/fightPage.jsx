var FightPage = React.createClass({
  getInitialState: function(){
    return({
      name: '',
      clas: '',
      level: 0,
      xp: 0,
      health: 357.9937665,
      opponentName: '',
      opponentHealth: 400,
      opponentClass: '',
      opponentLevel: 0
    })
  },
  componentDidMount: function(){
    var theThis = this;

    var myId = document.cookie.split('#')[0]
    var opponentId = document.cookie.split('#')[1]
    $.get('http://localhost:3000/users/'+myId).then(function(res){
      theThis.setState({name: res.name, clas:res.character.clas, level:res.character.level, xp:res.character.xp})

    })
    $.get('http://localhost:3000/users/'+opponentId).then(function(res){
      theThis.setState({opponentName: res.name, opponentClass:res.character.clas, opponentLevel:res.character.level})
    })

  },
  render: function(){
    if(this.state.clas === 'Ranger'){
      return(
      <div>
      <label id='username'>Name: {this.state.name}</label><br></br>
      <label id='class'>Class: {this.state.clas}</label><br></br>
      <label id='level'>Level: {this.state.level}</label><br></br>
      <label id ='xp'>XP: {this.state.xp}</label><br></br>
      <label id='health'>Health: {this.state.health}</label><br></br><br></br>
      <button id="shoot" type="button">Shoot</button><br></br>
      <button id="flameArrow" type="button">Flame Arrow</button><br></br>
      <button id="iceArrow" type="button">Ice Arrow</button><br></br><br></br>
      <h2>Opponent:</h2>
      <label id='opponentName'>Name: {this.state.opponentName}</label><br></br>
      <label id='opponentClass'>Class: {this.state.opponentClass}</label><br></br>
      <label id='opponentHealth'>Health: {this.state.opponentHealth}</label><br></br>
      <label id="opponentLevel">Level: {this.state.opponentLevel}</label>
      </div>)
    }
    else if(this.state.clas === 'Warrior'){
      return(
      <div>
      <label id='username'>Name: {this.state.name}</label><br></br>
      <label id='class'>Class: {this.state.clas}</label><br></br>
      <label id='level'>Level: {this.state.level}</label><br></br>
      <label id ='xp'>XP: {this.state.xp}</label><br></br>
      <label id='health'>Health: {this.state.health}</label><br></br><br></br>
      <button id="shoot" type="button">Sword Attack</button><br></br>
      <button id="flameArrow" type="button">Slice</button><br></br>
      <button id="iceArrow" type="button">Eviscerate</button><br></br><br></br>
      <h2>Opponent:</h2>
      <label id='opponentName'>Name: {this.state.opponentName}</label><br></br>
      <label id='opponentClass'>Class: {this.state.opponentClass}</label><br></br>
      <label id='opponentHealth'>Health: {this.state.opponentHealth}</label><br></br>
      <label id="opponentLevel">Level: {this.state.opponentLevel}</label>
      </div>)
    }
    if(this.state.clas === 'Mage'){
      return(
      <div>
      <label id='username'>Name: {this.state.name}</label><br></br>
      <label id='class'>Class: {this.state.clas}</label><br></br>
      <label id='level'>Level: {this.state.level}</label><br></br>
      <label id ='xp'>XP: {this.state.xp}</label><br></br>
      <label id='health'>Health: {this.state.health}</label><br></br><br></br>
      <button id="shoot" type="button">Wounding Spell</button><br></br>
      <button id="flameArrow" type="button">Parry</button><br></br>
      <button id="iceArrow" type="button">Bash Skull with Staff</button><br></br><br></br>
      <h2>Opponent:</h2>
      <label id='opponentName'>Name: {this.state.opponentName}</label><br></br>
      <label id='opponentClass'>Class: {this.state.opponentClass}</label><br></br>
      <label id='opponentHealth'>Health: {this.state.opponentHealth}</label><br></br>
      <label id="opponentLevel">Level: {this.state.opponentLevel}</label>
      </div>)
    }

    return(
    <div>
    <label id='username'>Name: {this.state.name}</label><br></br>
    <label>Class: {this.state.clas}</label><br></br>
    <label>Level: {this.state.level}</label><br></br>
    <label>XP: {this.state.xp}</label>
    </div>)
  }
});

ReactDOM.render(<FightPage/>, document.getElementById('fight-page-div'))
